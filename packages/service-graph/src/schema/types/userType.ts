import { GraphQLObjectType, GraphQLString } from 'graphql';
import { sheetType } from './';

export const userType = new GraphQLObjectType({
    name: 'User',
    fields: () => ({
        firstName: { type: GraphQLString },
        lastName: { type: GraphQLString },
        email: { type: GraphQLString },
        sheet: { type: sheetType },
    }),
});
