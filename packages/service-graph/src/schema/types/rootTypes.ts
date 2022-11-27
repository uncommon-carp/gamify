import { GraphQLObjectType, GraphQLString } from 'graphql';
import { SchemaGenerator } from '../utils/schemaGenerator';

export const createRootTypes = (types: SchemaGenerator) => {
    const Query = new GraphQLObjectType({
        name: 'Query',
        fields: {
            hello: { type: GraphQLString },
        },
    });
    const Mutation = new GraphQLObjectType({
        name: 'Mutation',
        fields: {
            sayHello: { type: GraphQLString },
        },
    });
    types.add(Query);
    types.add(Mutation);
};
