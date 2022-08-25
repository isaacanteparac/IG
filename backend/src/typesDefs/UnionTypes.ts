import { ObjectType, Field } from "type-graphql";

import Comment from "./Comment";
import User from "./User";
import Follow from "./Follow";
import Post from "./Post";

@ObjectType()
export default class UnionTypes {
  @Field((type) => [User])
  userAll!: User[];

  @Field((type) => [Post])
  postAll!: Post[];

  @Field((type) => [Follow])
  followAll!: Follow[];

  @Field((type) => [Comment])
  commentAll!: Comment[];

 
}
