/*import { ApolloServer } from "apollo-server";
import resolvers from "./src/resolvers";
import typeDefinitions from "./src/typeDefinitions";

const name = () => {
  console.clear();
  console.log("█▀▀█  ▀  █   █    ▀  █▀▀ ");
  console.log("█▀▀▄ ▀█▀ █   █   ▀█▀ █▀▀");
  console.log("█▄▄█ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ ▀▀▀ \n");
};

const  serverStart = async () => {
  const server = new ApolloServer({
    typeDefs: typeDefinitions,
    resolvers,
  });
  await server
    .listen({
      port: 4000,
    })
    .then(({ url }) => {
      name();
      console.log(`server ready at ${url}`);
    });
};

 serverStart();
*/



import { gql, ApolloServer, UserInputError } from "apollo-server";


const persons = [
  {
    id: "1",
    name: "isaac",
    city: "guayaquil",
    age: 20,
  },
  {
    id: "2",
    name: "nami",
    city: "guayaquil",
    age: 16,
  },
  {
    id: "3",
    name: "nico",
    city: "guayaquil",
    age: 18,
  },
  {
    id: "4",
    name: "hebihime",
    city: "",
    age: 21,
  },
];

const typeDefinitions = gql`
  enum YesNo {
    yes
    no
  }

  type InformationPerson {
    city: String
    age: Int!
  }

  type Person {
    id: String!
    name: String!
    city: String
    age: Int!
    canDrink: Boolean!
    informationPerson: InformationPerson!
  }

  type Query {
    personCount: Int!
    allPerson: [Person]!
    findPerson(name: String!): Person
    allcity(city: YesNo): [Person]
  }

  type Mutation {
    addPerson(name: String!, city: String, age: Int!, id: String): Person
    editAge(name: String, id: String!, age: Int!): Person
  }
`;

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPerson: () => persons,

  },

  Person: {
    informationPerson: (root:any) => {
      return { age: root.age, city: root.city };
    },
    canDrink: (root:any) => {
      if (root.age != "18") {
        return true;
      } else {
        return false;
      }
    },
  },
};

const server = new ApolloServer({
  typeDefs: typeDefinitions,
  resolvers,
});

server
  .listen({
    port: 4000,
  })
  .then(({ url }) => {
    console.log(`server ready at ${url}`);
  });
