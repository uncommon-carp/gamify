import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

export const skillType = new GraphQLObjectType({
    name: 'Skill',
    fields: () => ({
        displayName: { type: GraphQLString },
        user: { type: GraphQLString },
        level: { type: GraphQLInt },
        currentXp: { type: GraphQLInt },
    }),
});
