const { ApolloServer } = require("apollo-server");
const typeDefs = require("./types");
const resolvers = require("./resolvers");
const models = require("./models");
require("dotenv").config();
require("./config/dbconfig");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models },
//   playground: false
});

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
