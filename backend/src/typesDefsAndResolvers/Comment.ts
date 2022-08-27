import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class Comment {
  @Field()
  id!: number;

  @Field()
  comment!: string;

  @Field()
  id_post!: number;

  @Field()
  id_user!: number;

  @Field()
  update_!: Date;

  @Field()
  create_!: Date;

  @Field()
  delete_!: Date;

 
}
