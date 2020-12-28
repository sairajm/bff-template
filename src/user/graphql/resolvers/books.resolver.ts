import books from '../../models/books';

const resolvers = {
    Query: {
      books: () => books,
    },
  };

export default resolvers;