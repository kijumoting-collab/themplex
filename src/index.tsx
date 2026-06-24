import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-pages'

const app = new Hono()

// 1. Perintahkan Hono untuk menyajikan semua file statis dari folder public
app.use('/*', serveStatic())

// 2. Jika ada yang mengakses halaman utama, sajikan file index.html
app.get('/', serveStatic({ path: './index.html' }))

export default app
