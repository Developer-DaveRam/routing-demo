import { db } from '@/lib/data';
import { fail, ok } from '@/lib/response';

export async function PATCH(req: Request, { params }: { params: { productId: string; reviewId: string } }) {
  const product = db.products.find((item) => item.id === params.productId);
  if (!product) return fail('product not found', 404);

  const review = product.reviews.find((item) => item.id === params.reviewId);
  if (!review) return fail('review not found', 404);

  const body = await req.json();
  review.rating = body.rating ?? review.rating;
  review.comment = body.comment ?? review.comment;
  return ok(review);
}

export function DELETE(_: Request, { params }: { params: { productId: string; reviewId: string } }) {
  const product = db.products.find((item) => item.id === params.productId);
  if (!product) return fail('product not found', 404);

  const idx = product.reviews.findIndex((item) => item.id === params.reviewId);
  if (idx < 0) return fail('review not found', 404);

  const [deleted] = product.reviews.splice(idx, 1);
  return ok(deleted);
}
