import { GraphQLObjectType, GraphQLString } from 'graphql';
import { SchemaGenerator } from '../utils/schemaGenerator';

export const createUserType = (types: SchemaGenerator) => {
    const User = new GraphQLObjectType({
        name: 'User',
        fields: () => ({
            firstName: { type: GraphQLString },
            lastName: { type: GraphQLString },
            email: { type: GraphQLString },
            sheet: { type: GraphQLString },
        }),
    });
    types.add(User);
};
