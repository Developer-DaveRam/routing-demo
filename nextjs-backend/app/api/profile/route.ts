import { ok } from '@/lib/response';

export function GET() {
  return ok({ id: '1', name: 'Demo User', email: 'demo@example.com', role: 'admin' });
}
