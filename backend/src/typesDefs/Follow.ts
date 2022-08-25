import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Follow {
  @Field()
  id!: number;

  @Field()
  id_follow!: number;

  @Field()
  id_user!: number;

  @Field()
  update_!: Date;

  @Field()
  create_!: Date;

  @Field()
  delete_!: Date;

}
