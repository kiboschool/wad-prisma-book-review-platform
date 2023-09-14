const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function seed() {
    try {
        // Authors
        const author1 = await prisma.author.create({
            data: {
                name: 'Jane Austen',
            },
        });

        const author2 = await prisma.author.create({
            data: {
                name: 'George Orwell',
            },
        });

        // Books
        const book1 = await prisma.book.create({
            data: {
                title: 'Pride and Prejudice',
                authorId: author1.id,
            },
        });

        const book2 = await prisma.book.create({
            data: {
                title: '1984',
                authorId: author2.id,
            },
        });

        // Reviews
        await prisma.review.create({
            data: {
                text: 'A timeless classic, thoroughly enjoyed it!',
                bookId: book1.id,
            },
        });

        await prisma.review.create({
            data: {
                text: 'A captivating tale of love and societal expectations.',
                bookId: book1.id,
            },
        });

        await prisma.review.create({
            data: {
                text: 'A chilling reflection on surveillance and freedom.',
                bookId: book2.id,
            },
        });

    } catch (error) {
        console.error('Error seeding the database', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
