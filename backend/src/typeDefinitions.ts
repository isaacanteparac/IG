import { gql } from "apollo-server";

const typeDefinitions = gql`
  type users {
    name: String!
    lastname: String!
    email: String
    
  }

  type Query {
    usersCount: Int!
  }
`;

export default typeDefinitions;
