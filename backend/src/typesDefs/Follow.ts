import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Follow {
  @Field()
  id: number;

  @Field()
  id_follow: number;

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
    id_follow: number,
    id_user: number,
    update_: Date,
    create_: Date,
    delete_: Date
  ) {
    this.id = id;
    this.id_follow = id_follow;
    this.id_user = id_user;
    this.update_ = update_;
    this.create_ = create_;
    this.delete_ = delete_;
  }
}
