import { db } from '@/lib/data';
import { fail, ok } from '@/lib/response';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  if (!email || !password) return fail('email and password are required');
  if (db.users.some((u) => u.email === email)) return fail('user already exists', 409);

  const user = { id: String(db.users.length + 1), email, password };
  db.users.push(user);
  return ok({ id: user.id, email: user.email }, 201);
}
