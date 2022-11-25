import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

import { taskType, itemType } from './';

export const questType = new GraphQLObjectType({
    name: 'Quest',
    fields: () => ({
        title: { type: GraphQLString },
        freq: { type: GraphQLString },
        diff: { type: GraphQLString },
        timeToComplete: { type: GraphQLString },
        complete: { type: GraphQLBoolean },
        reward: { type: new GraphQLList(itemType) },
        tasks: { type: new GraphQLList(taskType) },
    }),
});
