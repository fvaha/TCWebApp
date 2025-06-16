import { Hono } from 'hono'
import { serve } from '@hono/node-server'
import axios, { AxiosError } from 'axios'

interface ContactForm {
  token: string
  name: string
  email: string
  message: string
}

interface TurnstileResponse {
  success: boolean
  'error-codes'?: string[]
  challenge_ts?: string
  hostname?: string
  action?: string
  cdata?: string
}

const TURNSTILE_SECRET = process.env.TURNSTILE_SECRET_KEY ?? ''
if (!TURNSTILE_SECRET) {
  throw new Error('Missing TURNSTILE_SECRET_KEY environment variable')
}

const app = new Hono()

app.post('/api', async (c) => {
  try {
    const { token, name, email, message } = await c.req.json<ContactForm>()

    if (!token || !name || !email || !message) {
      return c.json({ error: 'Missing required fields' }, 400)
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return c.json({ error: 'Invalid email format' }, 400)
    }

    const formData = new URLSearchParams()
    formData.append('secret', TURNSTILE_SECRET)
    formData.append('response', token)

    const remoteIp = c.req.header('CF-Connecting-IP') || c.req.header('X-Forwarded-For')
    if (remoteIp) {
      formData.append('remoteip', remoteIp)
    }

    const turnstileRes = await axios.post<TurnstileResponse>(
      'https://challenges.cloudflare.com/turnstile/v0/siteverify',
      formData,
      { timeout: 5000 }
    )

    if (!turnstileRes.data.success) {
      console.warn('Turnstile verification failed')
      return c.json({ error: 'Verification failed' }, 403)
    }

    await axios.post(
      'https://formspree.io/f/xanjjnya',
      { name, email, message },
      {
        headers: { Accept: 'application/json' },
        timeout: 10000,
      }
    )

    return c.json({ success: true })
  } catch (err) {
    if (err instanceof AxiosError) {
      console.error('API request failed:', err.message)
      return c.json({ error: 'Service unavailable' }, 503)
    }
    console.error('Server error:', err instanceof Error ? err.message : err)
    return c.json({ error: 'Internal server error' }, 500)
  }
})

serve(
  {
    fetch: app.fetch,
    port: parseInt(process.env.PORT || '5174'),
    hostname: '0.0.0.0',
  },
  (info) => {
    console.log(`Server running on port ${info.port}`)
  }
)
