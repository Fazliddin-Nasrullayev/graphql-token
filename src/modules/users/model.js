const { fetchdata } = require('../../utils/postgres')

const  CREATE_USER = `
    insert into users(user_name, user_password) values($1, $2) returning user_id
`

const GET_ALL_USERS = `
    select * from users 
`

const USER_BY_CREDENTIAL  = `
    select * from users where user_name = $1 and user_password = $2
`

const createUser = (username, password) => fetchdata(CREATE_USER, username, password)
const getUser = (username, password) => fetchdata(USER_BY_CREDENTIAL, username, password)
const getAllUsers = () => fetchdata(GET_ALL_USERS)

module.exports = {
    createUser,
    getUser,
    getAllUsers
}