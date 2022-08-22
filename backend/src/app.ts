import { ApolloServer } from "apollo-server";
import resolvers from "./resolvers";
import typeDefinitions from "./typeDefinitions";

const name = () => {
  console.clear();
  console.log("█▀▀█  ▀  █   █    ▀  █▀▀ ");
  console.log("█▀▀▄ ▀█▀ █   █   ▀█▀ █▀▀");
  console.log("█▄▄█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ \n");
};

const  serverStart = async () => {
  const server = new ApolloServer({
    typeDefs: typeDefinitions,
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
