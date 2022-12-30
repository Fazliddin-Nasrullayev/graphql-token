const { sign } = require("./../../utils/jwt");
const { getUser, createUser, getAllUsers } = require("./model");
const sha256 = require("sha256");
const { GraphQLError } = require('graphql')

module.exports = {
    Query: {
        users: async() =>{
            
           const a =  await  getAllUsers()
           console.log(a)
           return a
        }
    },
    Mutation: {
        register: async (_ ,{ username, password }) =>
        {
            try {

                const existingUser = await getUser(username, sha256.x2(password));

                if(existingUser.length){
                    throw new GraphQLError('Bad request user already exsist', {
                      extensions: { code: '422', },
                    });
                }

                const  newUser = await createUser(username, sha256.x2(`${password}`))

                if(newUser.length){
                    console.log(newUser[0]);
                    return sign(newUser[0])
                }

            } catch (error) {
                console.log(error);
             throw new GraphQLError(error.message, {
              extensions: { code: error.extensions.code },
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