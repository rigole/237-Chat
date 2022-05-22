import  { ApolloServer, gql } from 'apollo-server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

/*const typeDefs = gql`
  
  type Book {
    title: String
    author: String
  }

  
  type Query {
    books: [Book]
  }
`;
*/


const users = [
    {
        id:1,
        firstName:"Plass",
        LastName:"Rigole",
        email:"foplacide@gmail.com",
        password:"123456"
    },
    {
        id:2,
        firstName:"Marie-Claire",
        LastName: "Kemeni",
        email:"contact@fomi.com",
        password:"19371966",

    },
]

const typeDefs = gql`
    type Query{
        users:[User]
        user(id:ID!):User
    }
    type Mutation{
        createUser(firstName:String!,lastName:String!,email:String!,password:String!):User
    }
    type User{
        id:ID
        firstName:String
        lastName:String
        email:String
    }
`

const resolvers = {
    Query:{
        users:()=>users,
        user:(parent,{id},context)=>{
            console.log(id)
            return users.find(item=>item.id == id)
        }
    }
}



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
    csrfPrevention: true,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});