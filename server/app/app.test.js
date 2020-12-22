const request = require('supertest');
const app = require('./app');
const db = require('../data/db');
const { update } = require('../data/db');

describe('Endpoints', () => {
  beforeAll(async () => {
    await db.migrate.latest().then(() => {
      return db.seed.run();
    });
  });

  afterAll(async () => {
    await db.migrate.rollback();
  });

  describe('GET /wishlist', () => {
    const wishlists = [
      {
        id: 1,
        name: "Bob's wishlist",
        author: 'Bob',
        items: [
          { id: 1, wishlist_id: 1, name: 'skateboard' },
          { id: 2, wishlist_id: 1, name: 'toothbrush' },
        ],
      },
      {
        id: 2,
        name: "Allens's wishlist",
        author: 'Allen',
        items: [{ id: 3, wishlist_id: 2, name: 'coal' }],
      },
      {
        id: 3,
        name: "Gavin's wishlist",
        author: 'Gavin',
        items: [
          { id: 4, wishlist_id: 3, name: 'gavel' },
          { id: 5, wishlist_id: 3, name: '4K TV' },
          { id: 6, wishlist_id: 3, name: 'Vive' },
        ],
      },
      {
        id: 4,
        name: "Tim's wishlist",
        author: 'Tim',
        items: [
          { id: 7, wishlist_id: 4, name: 'People to stop calling him Tim-Tim' },
          { id: 8, wishlist_id: 4, name: 'tissue box' },
          { id: 9, wishlist_id: 4, name: 'plate' },
        ],
      },
      {
        id: 5,
        name: "Dave's wishlist",
        author: 'Dave',
        items: [
          { id: 10, wishlist_id: 5, name: 'remote' },
          { id: 11, wishlist_id: 5, name: 'pair of socks' },
          { id: 12, wishlist_id: 5, name: 'key' },
        ],
      },
      {
        id: 6,
        name: "Sarah's wishlist",
        author: 'Sarah',
        items: [
          { id: 13, wishlist_id: 6, name: 'coffee mug' },
          { id: 14, wishlist_id: 6, name: 'tennis ball' },
          { id: 15, wishlist_id: 6, name: 'tiger' },
        ],
      },
    ];
    it('should respond with a list of wishlists', async () => {
      const response = await request(app).get('/wishlist');
      expect(response.statusCode).toBe(200);
      expect(response.body).toMatchObject(wishlists);
    });
  });

  describe('GET /wishlist/:id', () => {
    const wishlist = {
      id: 4,
      name: "Tim's wishlist",
      author: 'Tim',
      items: [
        { id: 7, wishlist_id: 4, name: 'People to stop calling him Tim-Tim' },
        { id: 8, wishlist_id: 4, name: 'tissue box' },
        { id: 9, wishlist_id: 4, name: 'plate' },
      ],
    };
    it('should respond with a wishlist with the same id', async () => {
      const response = await request(app).get('/wishlist/4');
      expect(response.statusCode).toBe(200);
      expect(response.body).toMatchObject(wishlist);
    });

    it('should respond with a 500 if there was an error', async () => {
      const response = await request(app).get('/wishlist/100');
      expect(response.statusCode).toBe(500);
      expect(response.body).not.toMatchObject(wishlist);
    });
  });

  describe('POST /wishlist', () => {
    it('should respond with a 201 and a message if successfully created', async () => {
      const response = await request(app)
        .post('/wishlist')
        .send({
          name: "Bob's wishlist",
          author: 'Bob',
          items: ['Socks', 'Christmas Socks', 'coal'],
        });
      expect(response.statusCode).toBe(201);
      expect(response.body.message).toBe('Your wishlist has been created!');
      expect(response.created).toBe(true);
    });

    it('should respond with a 500 if title is missing', async () => {
      const response = await request(app)
        .post('/wishlist')
        .send({
          author: 'Bob',
          items: ['Socks', 'Christmas Socks', 'coal'],
        });
      expect(response.statusCode).toBe(500);
      expect(response.created).toBe(false);
    });

    it('should respond with a 500 and a message if items are missing', async () => {
      const response = await request(app).post('/wishlist').send({
        author: 'Bob',
      });
      expect(response.statusCode).toBe(500);
      expect(response.created).toBe(false);
    });
  });

  describe('DELETE /wishlist/:id', () => {
    it('should respond with a 200 and a message if deleted', async () => {
      const response = await request(app).delete('/wishlist/1');
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Wishlist 1 has been deleted');
    });

    it('should respond with a 500 if there is an error', async () => {
      const response = await request(app).delete('/wishlist/100');
      expect(response.statusCode).toBe(500);
    });
  });

  describe('PUT /wishlist/:id', () => {
    const updatedWishlist = {
      name: "Bob's Christmas wishlist",
      author: 'Bob',
    };
    it('should respond with a 200 and a message if updated', async () => {
      const response = await request(app)
        .put('/wishlist/2')
        .send(updatedWishlist);
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe('Wishlist 2 has been updated');
    });

    it('should respond with 500 if there is an error', async () => {
      const response = await request(app)
        .put('/wishlist/100')
        .send(updatedWishlist);
      expect(response.statusCode).toBe(500);
    });
  });

  describe('PATCH /item/:id', () => {
    const updatedItem = {
      name: "yeezys"
    };
  
    it('should respond with a 200 and a message if updated', async () => {
      const response = await request(app)
      .patch('/item/5')
      .send(updatedItem);
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Item 5 has been updated");
    });
    it('should respond with 500 if there is an error', async () => {
      const response = await request(app)
        .patch('/item/500')
        .send(updatedItem);
        expect(response.statusCode).toBe(500);  
    });
  });

  describe('DELETE /item/:id', () => {
    it('should respond with a 200 and a message if deleted', async () => {
      const response = await request(app).delete('/item/5');
      expect(response.statusCode).toBe(200);
      expect(response.body.message).toBe("Item 5 has been deleted")
    })

    it('should respond with a 500 if there is an error', async () =>{
      const response = await request(app).delete('/item/500');
      expect(response.statusCode).toBe(500)
    })
  });
});





