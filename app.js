const express = require('express')
const graphqlHTTP = require('express-graphql')
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

























































