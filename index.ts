import schema from './src/schema';
const { ApolloServer, gql } = require('apollo-server');

const server = new ApolloServer({ schema });
const port = 8082;

// The `listen` method launches a web server.
// server.listen().then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });

server.listen(port, () => {
  console.log(`🚀  Server ready at ${port}`);
});