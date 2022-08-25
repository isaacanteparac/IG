import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class User {
  @Field()
  id: number;

  @Field()
  lastname: string;

  @Field()
  name: string;

  @Field()
  nickname: string;

  constructor(id: number, name: string, lastname: string, nickname: string) {
    this.id = id;
    this.name = name;
    this.lastname = lastname;
    this.nickname = nickname;
  }
}
