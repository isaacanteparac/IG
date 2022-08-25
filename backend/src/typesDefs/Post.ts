import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class Post {
  @Field()
  id: number;

  @Field()
  description: string;

  @Field()
  id_user: number;

  @Field()
  photo_video: any;

  @Field()
  title: string;

  @Field()
  update_: Date;

  @Field()
  create_: Date;

  @Field()
  delete_: Date;

  constructor(
    id: number,
    description: string,
    photo_video: any,
    title: string,
    id_user: number,
    update_: Date,
    create_: Date,
    delete_: Date
  ) {
    this.id = id;
    this.description = description;
    this.photo_video = photo_video;
    this.title = title;
    this.id_user = id_user;
    this.update_ = update_;
    this.create_ = create_;
    this.delete_ = delete_;
  }
}
