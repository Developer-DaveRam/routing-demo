import { db } from '@/lib/data';
import { ok } from '@/lib/response';

export function GET() {
  return ok({
    users: db.users.length,
    products: db.products.length,
    reviews: db.products.reduce((acc, p) => acc + p.reviews.length, 0)
  });
}
