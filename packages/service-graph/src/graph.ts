import { schema } from "./schema/schema";
import { ApolloServer, gql } from "apollo-server-lambda";
import { ApolloServerPluginLandingPageLocalDefault } from "apollo-server-core";

const server = new ApolloServer({
    schema: schema,
    csrfPrevention: true,
    cache: "bounded",
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
});

export const graphqlHandler = server.createHandler();
