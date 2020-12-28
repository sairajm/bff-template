import { makeExecutableSchema } from 'apollo-server';
import { GraphQLSchema } from 'graphql';
import merge from 'lodash.merge';
import booksResolver from './user/graphql/resolvers/books.resolver';
import { importSchema } from 'graphql-import'

const typeDefs = importSchema('./src/schema.graphql');

const resolvers = {};  

const schema: GraphQLSchema = makeExecutableSchema({
    resolvers: merge(
        resolvers,
        booksResolver,
    ), typeDefs,
}); 

export default schema;

