import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";

import axios from "axios";

//TITLE:TYPESDEFS and RESOLVER
import Post from "./src/typesDefsAndResolvers/Post";
import Comment from "./src/typesDefsAndResolvers/Comment";
import Follow from "./src/typesDefsAndResolvers/Follow";
import User from "./src/typesDefsAndResolvers/User";
import {
  UnionTypeDeft,
  UnionResolvers,
} from "./src/typesDefsAndResolvers/UnionTpRsl";
import { print } from "graphql";

async function apiCall() {
  const url: string = "http://localhost:6660/i/all/";
  const res = await axios.get(url);
  console.log(res.status);
  return res.data;
}

export const data = apiCall();

const name = () => {
  //console.clear();
  console.log("█▀▀█  ▀  █   █    ▀  █▀▀ ");
  console.log("█▀▀▄ ▀█▀ █   █   ▀█▀ █▀▀");
  console.log("█▄▄█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ \n");
};

const serverStart = async () => {

  const schema = await buildSchema({
    orphanedTypes: [Post, Comment, Follow, User, UnionTypeDeft],
    resolvers: [UnionResolvers],
  });

  const server = new ApolloServer({
    schema,
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
