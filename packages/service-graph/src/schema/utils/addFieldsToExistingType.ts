import { GraphQLObjectType, GraphQLFieldConfigMap } from 'graphql';

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
