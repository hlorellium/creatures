const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client');
const { PubSub } = require('graphql-yoga');


const resolvers = {
  Query: {
    info: () => `Creating API`
  }
}

const pubsub = new PubSub();

const prisma = new PrismaClient();

const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: () => {
        return { prisma, pubsub };
    },
});
server.start(() => console.log(`Server is running on http://localhost:4000`))