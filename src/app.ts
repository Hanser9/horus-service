import express from "express";
import { ApolloServer } from "apollo-server-express";
import { PingResolver } from "./resolvers/Ping";
import { buildSchema } from "type-graphql";
import { UsersResolver } from "./resolvers/UsersResolver";

export async function startServer() {
  const app = express();

  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [PingResolver, UsersResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });
  await server.start();
  server.applyMiddleware({ app, path: "/graphql" });

  return app;
}
