const helloResolver = {
    hello: () => {
        return 'world';
    },
};

const sayHelloResolver = {
    sayHello: () => {
        return 'Hello world';
    },
};

export const resolverCollection = [
    { resolver: helloResolver, collection: 'Query' },
    { resolver: sayHelloResolver, collection: 'Mutation' },
];

//@ts-ignore
export const createResolvers = (collection) => {
    //@ts-ignore
    return collection.reduce((resolvers, current) => {
        const { resolver, collection } = current;
        resolvers[collection] = { ...resolvers[collection], ...resolver };
        return resolvers;
    }, {});
};
