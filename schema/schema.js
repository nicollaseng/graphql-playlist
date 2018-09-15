const graphql = require('graphql')
const _ = require('lodash')

const { 
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLInt

} = graphql

//dummy database
var books = [ 
        { name: 'Age of Empires', genre: 'Fantasy', id: '1', authorId: '1'},
        { name: 'Age of Persian', genre: 'Fantasy', id: '2', authorId: '2'},
        { name: 'Age of Times', genre: 'Fantasy', id: '3', authorId: '3'},
    ]

var authors = [ 
    { name: 'Marcos', age: 44 , id: '1'},
    { name: 'Manuel', age: 43 , id: '2'},
    { name: 'Joseias', age: 47, id: '3'},
]

const BookType = new GraphQLObjectType({
    name: 'Book',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        genre: { type: GraphQLString },
        author: {
            type: AuthorType,
            resolve(parents, args){
                console.log(parents)
                return _.find(authors, {id: parents.authorId})
            }
        }
    })
})

const AuthorType = new GraphQLObjectType({
    name: 'Author',
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLID },
        age:{ type: GraphQLInt }
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
        },
        author: {
            type: AuthorType,
            args: { id: { type: GraphQLID } },
            resolve(parent,  args){
                return _.find(authors, { id: args.id } )
            }
        }
    }
})


module.exports = new GraphQLSchema({
    query: RootQuery
})


















