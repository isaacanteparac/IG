import axios from "axios";
import IPost from "./interfaces/IPost";


async function apiCall() {
  const url: string = "http://localhost:6660/i/all/";
  const res = await axios.get(url);
  console.log(res.status);
  return res.data;
}

const data = apiCall();

export const resolvers = {
  Query: {
    alldata: () => data,
    userProfilePublication: async (root: any, args: any) => {
      const { id } = args;
      const idUserPost = (args: { id: number }): IPost | undefined =>
        data.find().then((u: any) => {u.id === id});
    },
  },
};
