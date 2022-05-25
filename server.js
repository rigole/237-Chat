import  { ApolloServer } from 'apollo-server';
import typeDefs from "./typeDefs.js";
import resolvers  from "./resolvers.js";



const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];

/*const resolvers = {
    Query: {
        books: () => books,
    },
};*/

const server = new ApolloServer({
        typeDefs,
        resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});