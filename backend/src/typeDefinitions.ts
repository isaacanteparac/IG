import { gql } from "apollo-server";

const typeDefinitions = gql`
  type users {
    name: String!
    lastname: String!
    email: String
    
  }
`;

export default typeDefinitions;
