const { gql } = require('apollo-server')

module.exports = gql`
    type User {
        id: ID!
        username: String!
    }

    extend  type Query {
        users: [ User ]!
    }

    extend  type Mutation {
        register(username: String! , password: String!): Response
    }


`