import { gql } from "apollo-server";

export const typeDefs = gql`
  type users {
    name: String!
    lastname: String!
    email: String
    
  }

  type Query {
    usersCount: Int!
  }
`;

