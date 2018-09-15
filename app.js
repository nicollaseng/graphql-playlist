const express = require('express')
const graphqlHTTP = require('express-graphql')
<<<<<<< HEAD

const app = express()

app.use('./graphql', graphqlHTTP({
    
}))

app.listen(4000, () =>  {
    console.log('now listening for requests on port 4000')
})

=======
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

//connect to mlab database

mongoose.connect('mongodb://admin:Petrobras2014@ds157762.mlab.com:57762/gql-nicolas')
mongoose.connection.once('open', () => {
    console.log('Connected to database')
}).catch(error => console.log(error))

app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
    console.log('Listening on port 4000...')
})

























































>>>>>>> server
