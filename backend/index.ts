import { ApolloServer } from "apollo-server";
import {resolvers} from "./src/resolvers";
import {typeDefs} from "./src/typeDefs";

const name = () => {
  console.clear();
  console.log("█▀▀█  ▀  █   █    ▀  █▀▀ ");
  console.log("█▀▀▄ ▀█▀ █   █   ▀█▀ █▀▀");
  console.log("█▄▄█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ \n");
};

const  serverStart = async () => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  await server
    .listen({
      port: 4000,
    })
    .then(({ url }) => {
      name();
      console.log(`server ready at ${url}`);
    });
};

 serverStart();



