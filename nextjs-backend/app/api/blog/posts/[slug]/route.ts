import { db } from '@/lib/data';
import { fail, ok } from '@/lib/response';

export function GET(_: Request, { params }: { params: { slug: string } }) {
  const post = db.posts.find((item) => item.slug === params.slug);
  if (!post) return fail('post not found', 404);
  return ok(post);
}
