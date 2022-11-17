import { gql } from 'apollo-server-lambda';
import { GraphQLSchema } from 'graphql';

// Construct a schema, using GraphQL schema language
const types = gql`
    type Query {
        hello: String
    }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        hello: () => 'Hello world!',
    },
};

export const schema = new GraphQLSchema({});
