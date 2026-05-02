import { db } from '@/lib/data';
import { fail, ok } from '@/lib/response';

export function GET(_: Request, { params }: { params: { productId: string } }) {
  const product = db.products.find((item) => item.id === params.productId);
  if (!product) return fail('product not found', 404);
  return ok(product);
}
