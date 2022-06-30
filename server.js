import  { ApolloServer } from 'apollo-server';
import typeDefs from "./typeDefs.js";
import resolvers  from "./resolvers.js";
import jwt from "jsonwebtoken";



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
        /*context:({req})=>{
            const {authorization} = req.headers
            if(authorization){
               const {userId} = jwt.verify(authorization, process.env.JWT_SECRET)
                return {userId}
            }
        }*/
        context:({req})=>{
            const {authorization} = req.headers
            if (authorization){
                const {userId} = jwt.verify(authorization, process.env.JWT_SECRET)
                return {userId}
            }
        }
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});