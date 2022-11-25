import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Query = new GraphQLObjectType({
    name: 'Query',
    fields: {
        hello: { type: GraphQLString },
    },
});
