const { sign } = require("./../../utils/jwt");
const { getUser, createUser } = require("./model");
const sha256 = require("sha256");
const { GraphQLError } = require('graphql')

module.exports = {
    Query: {
        users: () => []
    },
    Mutation: {
        register: async (_ ,{ username, password }) =>
        {
            try {

                const existingUser = await getUser(username, sha256.x2(password));

                if(existingUser.length){
                    throw new GraphQLError('Bad request', {
                      extensions: { code: 'YOUR_ERROR_CODE', },
                    });
                }

                const  newUser = await createUser(username, sha256.x2(`${password}`))

                if(newUser.length){
                    console.log(newUser[0]);
                    return sign(newUser[0])
                }

            } catch (error) {
             throw new GraphQLError("INTERVAL ERROR", {
              extensions: { code: 'YOUR_ERROR_CODE' },
            });
            }

        }
    },

    User:{
        id: g => g.user_id,
        username: g => g.user_name,
        password: g => g.user_password
    }
}