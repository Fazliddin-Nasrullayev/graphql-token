const { verify } = require("../../utils/jwt");
const { getUser, createUser } = require("./model");
const { GraphQLError } = require('graphql')

module.exports = {
    Query: {
        posts: () => []
    },
    Mutation: {
        careatePost: async (_ ,{ title }) =>{
            console.log(title);
            return []
        }
       
    },

    Post:{
        id: g => g.post_id,
        title: g => g.post_title
    }
}