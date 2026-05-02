import { ok } from '@/lib/response';

export async function POST(req: Request) {
  const { email } = await req.json();
  return ok({ message: `If ${email ?? 'that email'} exists, reset instructions were sent.` });
}
