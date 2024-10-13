# Assignment: Book Review System

#### Project Description:

Develop a backend API for a Book Review Platform. The API will allow clients to fetch a list of books, read reviews about them, add their own reviews, and view details about authors. While the platform will not involve user sign-ups, it will allow users to input their name when they submit a review. The platform will also enable searching for books by authors and provide an aggregate of reviews associated with a particular book.

This project does not have a front end. For this project you need [Postman](http://getpostman.com) to test your endpoints.

You can look [this video](https://www.youtube.com/watch?v=CLG0ha_a0q8) to know how to.

#### Learning Objectives:

1. Understand the fundamental concepts of databases, ORMs, and API design.
2. Learn how to model and manage relationships between data entities using Prisma ORM.
3. Code CRUD operations using Express.
4. Understand best practices in building a RESTful API.

### Database Structure:
**Tables (Models):**

1. **Author**
   - `id`: Integer (Primary Key, Auto Increment)
   - `name`: String (Unique)

2. **Book**
   - `id`: Integer (Primary Key, Auto Increment)
   - `title`: String
   - `authorId`: Integer (Foreign Key referencing Author)

3. **Review**
   - `id`: Integer (Primary Key, Auto Increment)
   - `text`: String
   - `bookId`: Integer (Foreign Key referencing Book)

**Relationships:**

1. **Author to Book**
   - One to Many: An author can write multiple books, but each book has only one author.
   - Represented by the `authorId` foreign key in the `Book` table.

2. **Book to Review**
   - One to Many: A book can have multiple reviews, but each review belongs to one book.
   - Represented by the `bookId` foreign key in the `Review` table.

#### Milestones:

**1. Setting up the Project and Database:**
   - Initialize a new Node.js project with Express.js and Prisma.
   - Create the `Books`, `Reviews`, and `Authors` tables using Prisma's schema with the previously given database structure.
   - Define relationships: Each book has one author, but an author can have multiple books. Each review is associated with one book.

**2. Designing the 'Books' API Endpoints:**
   - Set up a route to fetch all books.
   - Set up a route to fetch a specific book by its ID.
   - Implement the ability to fetch books with a certain rating or higher.

**3. Designing the 'Reviews' API Endpoints:**
   - Set up a route to fetch all reviews for a specific book.
   - Implement a route to add a new review for a specific book.

**4. Designing the 'Authors' API Endpoints:**
   - Set up a route to fetch all books by a specific author.
   - Create an endpoint to retrieve information about an author based on a book's ID.

#### Bonus Milestones:

**1. Search Functionality:**
   - Implement a search endpoint where users can search for books by title or author name.

**2. Aggregate Data:**
   - Add an endpoint to fetch the top 5 books based on average review ratings.

**3. Data Pagination:**
   - Enhance the 'fetch all' routes to support pagination, allowing users to retrieve data in chunks (e.g., 10 books per page).

**4. Sorting Options:**
   - Allow users to sort books by publication date, average rating, or author's last name when fetching all books.

**5. Rate Limiting:**
   - Implement basic rate limiting on your API to prevent abuse. Limit users to a certain number of API calls per minute or hour.