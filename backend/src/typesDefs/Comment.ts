import { ObjectType, Field } from "type-graphql";

@ObjectType()
export default class Comment {
  @Field()
  id: number;

  @Field()
  comment: string;

  @Field()
  id_post: number;

  @Field()
  id_user: number;

  @Field()
  update_: Date;

  @Field()
  create_: Date;

  @Field()
  delete_: Date;

  constructor(
    id: number,
    comment: string,
    id_post: number,
    id_user: number,
    update_: Date,
    create_: Date,
    delete_: Date
  ) {
    this.id = id;
    this.comment = comment;
    this.id_post = id_post;
    this.id_user = id_user;
    this.update_ = update_;
    this.create_ = create_;
    this.delete_ = delete_;
  }
}
