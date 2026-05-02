import { db } from '@/lib/data';
import { fail, ok } from '@/lib/response';

export function GET() {
  return ok(db.products);
}

export async function POST(req: Request) {
  const { name, price } = await req.json();
  if (!name || typeof price !== 'number') return fail('name and numeric price are required');

  const product = { id: String(db.products.length + 1), name, price, reviews: [] };
  db.products.push(product);
  return ok(product, 201);
}
