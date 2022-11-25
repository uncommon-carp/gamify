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

import { Query, Mutation } from './types';
import { addResolversToSchema } from '@graphql-tools/schema';

import {
    createResolvers,
    resolverCollection,
} from './resolvers/createResolvers';

export const addFieldsToExistingType = (
    type: GraphQLObjectType,
    fields: GraphQLFieldConfigMap<any, any>
): void => {
    const existing = type.getFields();
    const conflict = Object.keys(fields).find((key) =>
        Object.keys(existing).includes(key)
    );
    if (conflict) {
        throw new Error(
            `field conflict for ${type.name}: ${conflict} already exists`
        );
    }
    const toMerge = new GraphQLObjectType({ name: 'temp', fields });
    Object.assign(type.getFields(), toMerge.getFields());
};

// addFieldsToExistingType(types.getSpecificType('Query', isObjectType), () => {
//     return {
//         device: {
//             args: {
//                 id: {
//                     type: new GraphQLNonNull(GraphQLID),
//                     description: 'The id of a specific device.',
//                 },
//             },
//             type: types.getSpecificType('Device', isObjectType),
//             description: 'Query for a specific device.',
//         },
//     };
// });

const resolvers = createResolvers(resolverCollection);

function createSchema() {
    const schema = new GraphQLSchema({
        query: Query,
        mutation: Mutation,
    });

    return schema;
}

export const schema: GraphQLSchema = createSchema();

export const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
});

// export const schema = new GraphQLSchema({});
