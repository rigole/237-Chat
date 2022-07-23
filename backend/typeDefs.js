import { gql } from "apollo-server";

const typeDefs = gql`
    type Query{
        users:[User]
        user(id:ID!):User 
        messagesByUser(receiverId:Int!):[Message]
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
    
    scalar Date
    
    type Message{
        id: ID!
        text: String!
        receiverId: Int!
        createdAt: Date!
    }
    
    
    
    
    type Mutation {
        signupUser(userNew:UserInput!):User
        signinUser(userSignin:UserSigninInput!):Token
        createMessage(receiverId:Int!, text: String):Message
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