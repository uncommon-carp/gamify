import { GraphQLObjectType, GraphQLString } from 'graphql';

export const Mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        sayHello: { type: GraphQLString },
    },
});
