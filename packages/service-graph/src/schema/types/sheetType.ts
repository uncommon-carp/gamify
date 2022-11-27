import {
    GraphQLObjectType,
    GraphQLList,
    GraphQLString,
    GraphQLInt,
    isObjectType,
    GraphQLNonNull,
} from 'graphql';
import { addFieldsToExistingType } from '../utils/addFieldsToExistingType';
import { SchemaGenerator } from '../utils/schemaGenerator';

import { questType, itemType, skillType } from './';

export const sheetType = (types: SchemaGenerator) => {
    const Sheet = new GraphQLObjectType({
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
    types.add(Sheet);
};

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

export const addSheetQueries = (types: SchemaGenerator): void => {
    addFieldsToExistingType(
        types.getSpecificType('Query', isObjectType),
        //@ts-ignore
        () => {
            const Sheet = types.getSpecificType('Sheet', isObjectType);
            return {
                sheet: {
                    type: new GraphQLNonNull(Sheet),
                    description: "Current user's character sheet",
                },
            };
        }
    );
};

export const createSheetTypes = (types: SchemaGenerator) => {
    sheetType(types);
    addSheetQueries(types);
};
