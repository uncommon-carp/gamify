import { GraphQLNamedType } from 'graphql';

export class SchemaGenerator {
    private map = new Map();

    public add(type: GraphQLNamedType) {
        const { name } = type;
        this.map.set(name, type);
    }

    public get(name: string): GraphQLNamedType {
        const type = this.map.get(name);
        if (!type) {
            throw new Error(`could not resolve ${name} out of TypeMap`);
        }
        return type;
    }

    public getSpecificType<T>(
        name: string,
        predicate: (type: unknown) => type is T
    ): T {
        const type = this.get(name);
        if (!predicate(type)) {
            throw new Error(
                `resolved named type ${name} was not the expected type`
            );
        }
        return type;
    }

    public list(): GraphQLNamedType[] {
        return [...this.map.values()];
    }

    public has(name: string): boolean {
        return this.map.has(name);
    }
}
