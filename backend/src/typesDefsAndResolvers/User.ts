import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class User {
  @Field()
  id!: number;

  @Field()
  lastname!: string;

  @Field()
  name!: string;

  @Field()
  nickname!: string;

}
