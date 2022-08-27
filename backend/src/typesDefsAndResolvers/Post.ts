import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Post {
  @Field()
  id!: number;

  @Field()
  description!: string;

  @Field()
  id_user!: number;

  @Field()
  photo_video!: string;

  @Field()
  title!: string;

  @Field()
  update_!: Date;

  @Field()
  create_!: Date;

  @Field()
  delete_!: Date;

 
}
