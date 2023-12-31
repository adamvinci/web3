const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { GraphQLError } = require('graphql')
const { v4: uuidv4 } = require('uuid')
let authors = [
    {
        name: 'Robert Martin',
        id: "afa51ab0-344d-11e9-a414-719c6709cf3e",
        born: 1952,
    },
    {
        name: 'Martin Fowler',
        id: "afa5b6f0-344d-11e9-a414-719c6709cf3e",
        born: 1963
    },
    {
        name: 'Fyodor Dostoevsky',
        id: "afa5b6f1-344d-11e9-a414-719c6709cf3e",
        born: 1821
    },
    {
        name: 'Joshua Kerievsky', // birthyear not known
        id: "afa5b6f2-344d-11e9-a414-719c6709cf3e",
    },
    {
        name: 'Sandi Metz', // birthyear not known
        id: "afa5b6f3-344d-11e9-a414-719c6709cf3e",
    },
]

let books = [
    {
        title: 'Clean Code',
        published: 2008,
        author: 'Robert Martin',
        id: "afa5b6f4-344d-11e9-a414-719c6709cf3e",
        genres: ['refactoring']
    },
    {
        title: 'Agile software development',
        published: 2002,
        author: 'Robert Martin',
        id: "afa5b6f5-344d-11e9-a414-719c6709cf3e",
        genres: ['agile', 'patterns', 'design']
    },
    {
        title: 'Refactoring, edition 2',
        published: 2018,
        author: 'Martin Fowler',
        id: "afa5de00-344d-11e9-a414-719c6709cf3e",
        genres: ['refactoring']
    },
    {
        title: 'Refactoring to patterns',
        published: 2008,
        author: 'Joshua Kerievsky',
        id: "afa5de01-344d-11e9-a414-719c6709cf3e",
        genres: ['refactoring', 'patterns']
    },
    {
        title: 'Practical Object-Oriented Design, An Agile Primer Using Ruby',
        published: 2012,
        author: 'Sandi Metz',
        id: "afa5de02-344d-11e9-a414-719c6709cf3e",
        genres: ['refactoring', 'design']
    },
    {
        title: 'Crime and punishment',
        published: 1866,
        author: 'Fyodor Dostoevsky',
        id: "afa5de03-344d-11e9-a414-719c6709cf3e",
        genres: ['classic', 'crime']
    },
    {
        title: 'The Demon ',
        published: 1872,
        author: 'Fyodor Dostoevsky',
        id: "afa5de04-344d-11e9-a414-719c6709cf3e",
        genres: ['classic', 'revolution']
    },
]


const typeDefs = `
type Book{
    title: String!
    published : Int!
    author:String!
    id:ID!
    genres:[String!]!
}
type Author{
    name:String!
    id:ID!
    born:Int
}
  type Query {
    bookCount :Int!
    authorCount : Int!
    allBooks(name:String,genre:String) : [Book!]!
    allAuthors : [Author!]!
  }
  type Mutation{
    addBook(title:String!,author:String!,published:Int!,genres:[String!]!):Book
    updateBirthYear(name:String!,year:Int!):Author
  }
`

const resolvers = {
    Mutation: {
        addBook: (root, args) => {
            if (!authors.find((a) => a.name === args.author)) {
                authors = [...authors, { id: uuidv4(), name: args.author }]
            }
            const newBook = { ...args, id: uuidv4() }
            books = books.concat(newBook)
            return newBook
        },
        updateBirthYear: (root, args) => {
            const author = authors.find((a) => a.name === args.name);
            if (!author) throw new GraphQLError("auuthor not exist")
            const updatedAuhtor = { ...author, born: args.year };
            authors = authors.map((b) => b.name === args.name ? updatedAuhtor : b)
            return authors.find((b) => b.name === args.name)
        }
    },
    Query: {
        bookCount: () => books.length,
        authorCount: () => authors.length,
        allBooks: (root, args) => {
            let copyBooks = [...books]
            if (args.name) {
                if (!authors.find((a) => a.name === args.name)) {
                    throw new GraphQLError("author dont exist")
                } else {
                    copyBooks = copyBooks.filter((b) => b.author === args.name)
                }
            }
            if (args.genre) {
                copyBooks = copyBooks.filter((b) => b.genres.includes(args.genre))
            }
            return copyBooks;
        },
        allAuthors: () => authors
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

startStandaloneServer(server, {
    listen: { port: 4000 },
}).then(({ url }) => {
    console.log(`Server ready at ${url}`)
})