export type Review = { id: string; rating: number; comment: string };
export type Product = { id: string; name: string; price: number; reviews: Review[] };
export type BlogPost = { slug: string; title: string; excerpt: string };

export const db = {
  users: [{ id: '1', email: 'demo@example.com', password: 'demo1234' }],
  products: [
    {
      id: '1',
      name: 'Router Alpha',
      price: 199,
      reviews: [{ id: '1', rating: 5, comment: 'Great routing features.' }]
    }
  ] as Product[],
  posts: [
    { slug: 'first', title: 'First Post', excerpt: 'Routing basics in Next.js.' },
    { slug: 'second', title: 'Second Post', excerpt: 'Dynamic route patterns.' }
  ] as BlogPost[]
};
