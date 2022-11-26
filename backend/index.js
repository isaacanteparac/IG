import { ApolloServer } from "apollo-server";
import axios from "axios";

import { resolvers } from "./src/resolvers.js";
import { typeDefinitions } from "./src/typeDefinitions.js";

async function apiCall() {
  const url = "http://localhost:6660/i/all/";
  const res = await axios.get(url);
  console.log(res.status);
  return res.data;
}

export const dataApi = apiCall();

const name = () => {
  console.clear();
  console.log("█▀▀█  ▀  █   █    ▀  █▀▀ ");
  console.log("█▀▀▄ ▀█▀ █   █   ▀█▀ █▀▀");
  console.log("█▄▄█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ \n");
};

async function serverStart() {
  const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers,
  });

  await server
    .listen({
      port: 4001,
    })
    .then(({ url }) => {
      //name();
      console.log(`server ready at ${url}`);
    });
}

serverStart();
