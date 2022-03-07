import "graphql-import-node";

import { ApolloServer } from "apollo-server";

import * as typeDefs from "./schema.graphql";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  mocks: false,
});

server.listen().then(({ url }) => {
  console.log(
    `\n🚀 AA Driving School Coding Challenge API listening on ${url} 🚀`
  );
});
