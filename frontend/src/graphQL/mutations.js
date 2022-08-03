import { gql }  from "@apollo/client"

export const SIGNUP_USER = gql`
    mutation SignupUser($userNew: UserInput!){
        signupUser(userNew: $userNew){
            id
            email
            firstName
            lastName
        }
    }
`