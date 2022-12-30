const { gql } = require('apollo-server')

module.exports = gql`
    type Post {
        id: ID!
        title: String!
    }

    extend  type Query {
        posts: [ Post ]!
    }

    extend  type Mutation {
        careatePost(title: String!): Post
    }

    
`