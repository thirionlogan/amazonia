import { rest } from 'msw';

export const handlers = [
  rest.get('/wishlist', (req, res, ctx) => {
    return res(
      ctx.json([
        {
          name: "Logan's Wishlist",
          author: 'Logan',
          items: [{ name: 'Puppy' }, { name: 'Kitten' }, { name: 'Fun' }],
        },
        {
          name: "Kendra's Wishlist",
          author: 'Kendra',
          items: [
            { name: 'No More EPRs' },
            { name: 'to understand TDD' },
            { name: 'Fun' },
          ],
        },
      ]),
      ctx.status(200)
    );
  }),
  rest.post('/wishlist', (req, res, ctx) => {
    return res(ctx.status(201));
  }),
];
