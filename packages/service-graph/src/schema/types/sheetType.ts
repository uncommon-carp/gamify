import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
} from 'graphql';

import { questType, itemType, skillType } from './';

export const sheetType = new GraphQLObjectType({
    name: 'Sheet',
    fields: () => ({
        level: { type: GraphQLInt },
        currentXP: { type: GraphQLInt },
        gems: { type: GraphQLInt },
        stats: { type: statsType },
        skills: { type: new GraphQLList(skillType) },
        inventory: { type: new GraphQLList(itemType) },
        quests: { type: new GraphQLList(questType) },
    }),
});

export const statsType = new GraphQLObjectType({
    name: 'Stats',
    fields: () => ({
        str: { type: GraphQLInt },
        con: { type: GraphQLInt },
        int: { type: GraphQLInt },
        wis: { type: GraphQLInt },
        xma: { type: GraphQLInt },
        dex: { type: GraphQLInt },
    }),
});
