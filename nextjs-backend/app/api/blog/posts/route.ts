import { db } from '@/lib/data';
import { ok } from '@/lib/response';

export function GET() {
  return ok(db.posts);
}
