import { dataApi } from "..";

export const resolvers = {
  Query: {
    alldata: () => {
      return dataApi;
    },
    name: () => "hola",
  },
};
