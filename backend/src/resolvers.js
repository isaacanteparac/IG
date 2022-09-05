import { dataApi } from "..";

export const resolvers = {
  Query: {
    alldata: () => {
      console.log(dataApi);
      return dataApi;
    },
    countPost: () =>  dataApi.length,
  },
};

