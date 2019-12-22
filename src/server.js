import dotenv from "dotenv";
import "./env";

import { GraphQLServer } from "graphql-yoga";
import { prisma } from "../generated/prisma-client";
import logger from "morgan";
import passport from "passport";
import schema from "./schema";

import { sendSecretMail } from "./utils";

// sendSecretMail("skandla@naver.com", "123");

const PORT = process.env.PORT || 4000;
// const typeDefs = `
//     type Query{
//         hello: String!
//     }
// `;

// const resolvers = {
//   Query: {
//     hello: () => "Hi"
//   }
// };

const server = new GraphQLServer({
  schema,
  context: {
    schema,
    context: ({ request }) => request{
      console.log(req);
    }
  }
});
// const server = new GraphQLServer({ schema, context: { prisma } });

server.express.use(logger("dev"));
server.express.use(passport.authenticate("jwt"));

server.start({ port: PORT }, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
