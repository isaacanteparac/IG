import { gql } from "apollo-server";

export const typeDefinitions = gql`
  type User {
    id: Int
    lastname: String
    name: String
    nickname: String
    email: String
  }

  type Post {
    id: Int
    create_: String
    delete_: String
    description: String
    id_user: Int
    photo_video: String
    title: String
    update_: String
  }

  type Follow {
    id: Int
    create_: String
    delete_: String
    id_follow: Int
    id_user: Int
    update_: String
  }

  type Comment {
    id: Int
    comment: String
    create_: String
    delete_: String
    id_post: Int
    id_user: Int
    update_: String
  }

  type Heart {
    id: Int
    count: Int
    id_user: Int
    id_post: Int
    create_: String
    update_: String
    delete_: String
  }

  type Publication {
    post: [Post]
    comment: [Comment]
    heart: [Heart]
  }

  type All {
    user: [User]
    post: [Post]
    comment: [Comment]
    heart: [Heart]
    follow: [Follow]
  }

  type Query {
    alldata: [All]!
    countPost: Int!
  }
`;


