// server.ts
import "dotenv/config";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import axios from "axios";
const app = new Hono();
// CORS (dev: allow all, prod: lock down!)
app.use("*", async (c, next) => {
    c.header("Access-Control-Allow-Origin", "*"); // change to your site in prod!
    c.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
    c.header("Access-Control-Allow-Headers", "Content-Type");
    if (c.req.method === "OPTIONS")
        return c.text("ok");
    await next();
});
app.post("/api/contact", async (c) => {
    try {
        const body = await c.req.json();
        const { name, email, message, "cf-turnstile-response": token } = body;
        // Validate env secret
        const secret = process.env.TURNSTILE_SECRET_KEY;
        if (!secret) {
            return c.json({ ok: false, error: "Missing Turnstile secret." }, 500);
        }
        // 1. Turnstile Validation
        const verify = await axios.post("https://challenges.cloudflare.com/turnstile/v0/siteverify", new URLSearchParams({ secret, response: token || "" }), { headers: { "content-type": "application/x-www-form-urlencoded" } });
        if (!verify.data.success) {
            console.error("Turnstile validation failed:", verify.data);
            return c.json({ ok: false, error: "Turnstile validation failed." }, 403);
        }
        // 2. Submit to Formspree
        const result = await axios.post("https://formspree.io/f/xanjjnya", { name, email, message }, { headers: { Accept: "application/json" } });
        return c.json({ ok: true, result: result.data });
    }
    catch (err) {
        console.error("Contact endpoint error:", err?.response?.data || err.message || err);
        return c.json({ ok: false, error: "Server error" }, 500);
    }
});
// Start backend
serve({ fetch: app.fetch, port: 5174 });
console.log("🔒 Hono backend running at http://127.0.0.1:5174");
