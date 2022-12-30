const {fetchdata} = require('../../utils/postgres')

const  CREATE_POSTS = `
    insert into posts(post_title, user_id) values($1, $2) returning *
`

const USER_BY_CREDENTIAL  = `
    select * from posts where user_name = $1 and user_password = $2
`

const createUser = (username, password) => fetchdata(CREATE_POSTS, username, password)
const getUser = (username, password) => fetchdata(USER_BY_CREDENTIAL, username, password)

module.exports = {
    createUser,
    getUser
}