import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export const taskType = new GraphQLObjectType({
    name: 'taskType',
    fields: () => ({
        title: { type: GraphQLString },
        complete: { type: GraphQLBoolean },
        quest: { type: GraphQLString },
    }),
});
