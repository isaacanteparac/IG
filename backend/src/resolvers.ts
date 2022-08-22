import { gql } from "apollo-server";

import typeDefinitions from "./typeDefinitions";

const resolvers = {
    Query: {
        personCount: () => {console.log("count")}
    }
}


export default resolvers;