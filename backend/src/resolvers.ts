
const data = [
  { id: 1, name: "Tom", lastname: "Coleman" },
  { id: 2, name: "Sashko", lastname: "Stubailo" },
  { id: 3, name: "Mikhail", lastname: "Novikov" },
];

export const resolvers = {
  Query: {

    usersCount : () => data.length ,
  },

};
