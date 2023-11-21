const express = require('express');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const app = express();

app.use(express.json());

// Fetch all books
app.get('/books', async (req, res) => {
  const books = await prisma.book.findMany({
    include: {
      author: true
    }
  });
  res.json(books);
});

// Fetch a specific book by its ID
app.get('/book/:id', async (req, res) => {
  const bookId = Number(req.params.id);
  const book = await prisma.book.findUnique({
    where: { id: bookId },
    include: {
      author: true,
      reviews: true
    }
  });
  res.json(book);
});

// Fetch all reviews for a specific book
app.get('/book/:id/reviews', async (req, res) => {
  const bookId = Number(req.params.id);
  const reviews = await prisma.review.findMany({
    where: { bookId: bookId }
  });
  res.json(reviews);
});

// Add a new review for a specific book
app.post('/book/:id/review', async (req, res) => {
  const bookId = Number(req.params.id);
  const { text } = req.body;
  const review = await prisma.review.create({
    data: {
      text: text,
      bookId: bookId
    }
  });
  res.json(review);
});

// Fetch all books by a specific author
app.get('/author/:id/books', async (req, res) => {
  const authorId = Number(req.params.id);
  const books = await prisma.book.findMany({
    where: { authorId: authorId }
  });
  res.json(books);
});

const PORT = 8000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = {app, server};