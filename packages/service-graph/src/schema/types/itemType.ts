import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export const itemType = new GraphQLObjectType({
    name: 'Item',
    fields: () => ({
        displayName: { type: GraphQLString },
        type: { type: GraphQLString },
        qty: { type: GraphQLInt },
    }),
});
