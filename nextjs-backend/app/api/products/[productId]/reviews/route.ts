import { db } from '@/lib/data';
import { fail, ok } from '@/lib/response';

export function GET(_: Request, { params }: { params: { productId: string } }) {
  const product = db.products.find((item) => item.id === params.productId);
  if (!product) return fail('product not found', 404);
  return ok(product.reviews);
}

export async function POST(req: Request, { params }: { params: { productId: string } }) {
  const product = db.products.find((item) => item.id === params.productId);
  if (!product) return fail('product not found', 404);

  const { rating, comment } = await req.json();
  if (typeof rating !== 'number' || !comment) return fail('rating and comment are required');

  const review = { id: String(product.reviews.length + 1), rating, comment };
  product.reviews.push(review);
  return ok(review, 201);
}
