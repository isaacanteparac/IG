import axios from "axios";

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
        data.filter((u: any) => {
          u.id === id}): Promise<Post[]>
    },
  },
};
