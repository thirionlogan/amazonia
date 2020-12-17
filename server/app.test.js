const request = require('supertest');
const app = require('./app');

describe('GET /wishlist', () => {
  it('should respond with a list of wishlists', async () => {
    const response = await request(app).get('/wishlist');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello!');
  });
});

describe('GET /wishlist/:id', () => {
  it('should respond with a wishlist with the same id', async () => {
    const response = await request(app).get('/wishlist/12345');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('Hello! Your request id is:12345');
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
});

describe('DELETE /wishlist/:id', () => {
  it('should respond with a 200 and a message if deleted', async () => {
    const response = await request(app).delete('/wishlist/12345');
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('request 12345 has been deleted');
  });
});

describe('PUT /wishlist/:id', () => {
  it('should respond with a 200 and a message if updated', async () => {
    const response = await request(app)
      .put('/wishlist/12345')
      .send({
        name: "Bob's wishlist",
        author: 'Bob',
        items: ['Socks', 'Christmas Socks', 'coal'],
      });
    expect(response.statusCode).toBe(200);
    expect(response.body.message).toBe('request 12345 has been updated');
  });
});
