import { Hono } from 'hono'

const app = new Hono()

// Biarkan kosong untuk rute '/' agar Cloudflare Pages otomatis membaca file public/index.html Anda
app.get('/api/health', (c) => {
  return c.text('Server is running!')
})

export default app
