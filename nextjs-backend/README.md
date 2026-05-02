# routing-demo-backend

Standalone Next.js backend extracted from the routing demo.

## Run

```bash
npm install
npm run dev
```

## API surface

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/forgot-password`
- `GET /api/products`
- `POST /api/products`
- `GET /api/products/:productId`
- `GET|POST /api/products/:productId/reviews`
- `PATCH|DELETE /api/products/:productId/reviews/:reviewId`
- `GET /api/blog/posts`
- `GET /api/blog/posts/:slug`
- `GET /api/profile`
- `GET /api/dashboard`
