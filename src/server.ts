// server.ts
import "dotenv/config";
import { Hono } from "hono";
import { serve } from "@hono/node-server";
import axios from "axios";

const app = new Hono();

app.use("*", async (c, next) => {
  // Basic CORS for local dev, restrict in production!
  c.header("Access-Control-Allow-Origin", "*");
  c.header("Access-Control-Allow-Methods", "POST, GET, OPTIONS");
  c.header("Access-Control-Allow-Headers", "Content-Type");
  if (c.req.method === "OPTIONS") return c.text("ok");
  await next();
});

app.post("/api/contact", async (c) => {
  const body = await c.req.json();
  const {
    name,
    email,
    message,
    "cf-turnstile-response": turnstileToken,
  } = body;

  // 1. Verify Turnstile
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (!turnstileSecret) {
    return c.json(
      {
        ok: false,
        error: "Server misconfiguration: missing Turnstile secret.",
      },
      500
    );
  }
  try {
    const params = new URLSearchParams({
      secret: turnstileSecret,
      response: turnstileToken || "", // fallback to empty string
    });
    const turnstileRes = await axios.post(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      params,
      {
        headers: {
          "content-type": "application/x-www-form-urlencoded",
        },
      }
    );

    if (!turnstileRes.data.success) {
      return c.json({ ok: false, error: "Turnstile failed" }, 403);
    }
  } catch (err) {
    console.error("Turnstile validation error:", err);
    return c.json({ ok: false, error: "Error validating Turnstile" }, 500);
  }

  // 2. Forward to Formspree
  try {
    const formspreeRes = await axios.post(
      "https://formspree.io/f/xanjjnya", // <-- your endpoint!
      { name, email, message },
      { headers: { Accept: "application/json" } }
    );
    return c.json({ ok: true, result: formspreeRes.data });
  } catch (err) {
    console.error("Formspree error:", err);
    return c.json({ ok: false, error: "Formspree error" }, 500);
  }
});

// Listen on port 5174
serve({ fetch: app.fetch, port: 5174 });
console.log("Hono backend running on http://127.0.0.1:5174");
