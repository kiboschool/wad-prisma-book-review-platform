const request = require('supertest');
const {app, server} = require('./index');

describe('Book Review API', () => {

  // Test to fetch all books
  it('should fetch all books', async () => {
    const res = await request(app).get('/books');
    expect(res.statusCode).toEqual(200);
    console.log(res.body)
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Test to fetch a specific book by its ID
  it('should fetch a specific book', async () => {
    const res = await request(app).get('/book/1');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('title');
  });

  // Test to fetch all reviews for a specific book
  it('should fetch reviews for a specific book', async () => {
    const res = await request(app).get('/book/1/reviews');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  // Test to add a new review for a specific book
  it('should add a new review for a book', async () => {
    const res = await request(app)
      .post('/book/1/review')
      .send({
        text: 'Great Book!'
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('text', 'Great Book!');
  });

  // Test to fetch all books by a specific author
  it('should fetch books by a specific author', async () => {
    const res = await request(app).get('/author/1/books');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  afterAll( () => {
    server.close();
  })
  

});

