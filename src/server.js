const { ApolloServer } = require('apollo-server');
const modules = require('./modules')
const PORT = process.env.PORT || 1251



const server = new ApolloServer({
    modules
})

const gqlPath = server.graphqlPath

server.listen(PORT, err => 
    err ? console.error(err)
     : console.log(`http://localhost:${PORT + gqlPath}`))