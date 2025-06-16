import { Hono } from 'hono';
import { serve } from '@hono/node-server';
import axios from 'axios';

const app = new Hono();

// Enhanced error handling
app.post('/api/contact', async (c) => {
  try {
    const { token, name, email, message } = await c.req.json();
    
    if (!token || !name || !email || !message) {
      return c.json({ error: "Missing required fields" }, 400);
    }

    // Turnstile verification
    const turnstileRes = await axios.post(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      new URLSearchParams({
        secret: process.env.TURNSTILE_SECRET_KEY,
        response: token,
        remoteip: c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For')
      }),
      { timeout: 5000 }
    );

    if (!turnstileRes.data.success) {
      console.warn('Turnstile failed:', turnstileRes.data);
      return c.json({ error: "Verification failed" }, 403);
    }

    // Formspree submission
    await axios.post('https://formspree.io/f/xanjjnya', {
      name,
      email, 
      message
    }, {
      headers: { 'Accept': 'application/json' },
      timeout: 10000
    });

    return c.json({ success: true });
    
  } catch (err) {
    console.error('API error:', err);
    return c.json({ error: "Internal server error" }, 500);
  }
});

// Production configuration
serve({
  fetch: app.fetch,
  port: 5174,
  hostname: process.env.NODE_ENV === 'development' ? '0.0.0.0' : '127.0.0.1'
}, (info) => {
  console.log(`🚀 Server running at http://${info.hostname}:${info.port}`);
});