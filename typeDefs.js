import { gql } from "apollo-server";

const typeDefs = gql`
    type Query{
        users:[User]
        user(id:ID!):User
    }

    input UserInput {
        firstName:String!
        lastName:String!
        email:String!
        password:String!
    }
    
    type Token {
        token:String!
    }
    
    input UserSigninInput{
        email:String!
        password:String!
    }
    
    type Mutation {
        signupUser(userNew:UserInput!):User
        signinUser(userSignin:UserSigninInput!):Token
    }
    
    type User{
        id:ID
        firstName:String
        lastName:String
        email:String
        password:String

    }

`

export default typeDefs