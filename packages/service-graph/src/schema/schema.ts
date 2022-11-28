import {
    isObjectType,
    isInputType,
    GraphQLNonNull,
    GraphQLObjectType,
    GraphQLID,
    GraphQLSchema,
    GraphQLString,
    GraphQLNamedType,
    GraphQLFieldConfigMap,
    ThunkObjMap,
} from 'graphql';

import { createRootTypes, createSheetTypes, createUserType } from './types';
import { addResolversToSchema } from '@graphql-tools/schema';

import {
    createResolvers,
    resolverCollection,
} from './resolvers/createResolvers';
import { SchemaGenerator } from './utils/schemaGenerator';

const types = new SchemaGenerator();

createRootTypes(types);
createSheetTypes(types);
createUserType(types);

const resolvers = createResolvers(resolverCollection);

function createSchema() {
    const schema = new GraphQLSchema({
        types: types.list(),
        query: types.getSpecificType('Query', isObjectType),
        mutation: types.getSpecificType('Mutation', isObjectType),
    });

    return schema;
}

export const schema: GraphQLSchema = createSchema();

export const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
});
