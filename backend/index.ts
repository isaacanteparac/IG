import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";


//TITLE: RESOLVERS
import postResolvers from "./src/resolvers/post";





const name = () => {
  console.clear();
  console.log("█▀▀█  ▀  █   █    ▀  █▀▀ ");
  console.log("█▀▀▄ ▀█▀ █   █   ▀█▀ █▀▀");
  console.log("█▄▄█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ \n");
};

const serverStart = async () => {
  const server = new ApolloServer({
    schema: await buildSchema({
      resolvers: [postResolvers],
    }),
  });
  await server
    .listen({
      port: 4001,
    })
    .then(({ url }) => {
      name();
      console.log(`server ready at ${url}`);
    });
};

serverStart();
