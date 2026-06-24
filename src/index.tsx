import { Hono } from 'hono'

const app = new Hono()

// Redirect root to index.html (wrangler pages serves public/* automatically)
app.get('/', (c) => {
  return c.redirect('/index.html', 302)
})

export default app
