const {gql} = require("apollo-server")

module.exports = gql`
    type Users {
        id: ID!,
        name: String!,
        email: String!
    }

    input CreateUserInput{
        name: String!
        email: String!
    }

    input UpdateUserInput{
        name: String
        email: String
    }

    type DeletePayload{
        id: ID!
    }

    type Query {
        users: [Users]
    }

    type Mutation {
        createUsers(input: CreateUserInput!): Users!
        updateUsers(id: ID!, input: UpdateUserInput!): Users!
        deleteUsers(id: ID!): DeletePayload!
    }
`

