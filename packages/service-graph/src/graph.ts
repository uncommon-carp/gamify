import { schemaWithResolvers } from './schema/schema';
import { ApolloServer } from 'apollo-server-lambda';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';

const server = new ApolloServer({
    schema: schemaWithResolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageLocalDefault()],
    introspection: true,
});

export const graphqlHandler = server.createHandler({
    expressGetMiddlewareOptions: {
        cors: { credentials: true, origin: true },
        bodyParserConfig: { limit: '6mb' },
    },
});
