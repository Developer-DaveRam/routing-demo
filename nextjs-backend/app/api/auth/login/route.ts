import { db } from '@/lib/data';
import { fail, ok } from '@/lib/response';

export async function POST(req: Request) {
  const { email, password } = await req.json();
  const user = db.users.find((u) => u.email === email && u.password === password);
  if (!user) return fail('invalid credentials', 401);

  return ok({ token: `demo-token-${user.id}`, user: { id: user.id, email: user.email } });
}
