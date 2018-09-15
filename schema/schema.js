const graphql = require('graphql')
const _ = require('lodash')

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID

} = graphql

//dummy database
var books = [ 
        { name: 'Age of Empires', genre: 'Fantasy', id: '1'},
        { name: 'Age of Persian', genre: 'Fantasy', id: '2'},
        { name: 'Age of Times', genre: 'Fantasy', id: '3'},
    ]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString }
    })
})

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        book: {
            type: BookType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args){
               return  _.find(books, { id: args.id })
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})


















