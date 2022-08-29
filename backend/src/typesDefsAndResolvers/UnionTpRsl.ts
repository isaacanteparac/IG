import { ObjectType, Field, Resolver, Query } from "type-graphql";

import { dataApi } from "../../index";

import Comment from "./Comment";
import User from "./User";
import Follow from "./Follow";
import Post from "./Post";

@ObjectType()
export class UnionTypeDeft {
  @Field((type) => [User])
  user!: User[];

  @Field((type) => [Post])
  post!: Post[];

  @Field((type) => [Follow])
  follow!: Follow[];

  @Field((type) => [Comment])
  comment!: Comment[];
}

@Resolver()
export class UnionResolvers {
  @Query(() => [UnionTypeDeft])
  async all() {
    const d = await dataApi;
    const getData: UnionTypeDeft[] = [];
    return await getData;
  }
}
