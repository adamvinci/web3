const { ApolloServer } = require('@apollo/server')
const { startStandaloneServer } = require('@apollo/server/standalone')
const { v4: uuidv4 } = require('uuid')
const { GraphQLError } = require('graphql')

let persons = [
    {
        name: "Arto Hellas",
        phone: "040-123543",
        street: "Tapiolankatu 5 A",
        city: "Espoo",
        id: "3d594650-3436-11e9-bc57-8b80ba54c431"
    },
    {
        name: "Matti Luukkainen",
        phone: "040-432342",
        street: "Malminkaari 10 A",
        city: "Helsinki",
        id: '3d599470-3436-11e9-bc57-8b80ba54c431'
    },
    {
        name: "Venla Ruuska",
        street: "Nallemäentie 22 C",
        city: "Helsinki",
        id: '3d599471-3436-11e9-bc57-8b80ba54c431'
    },
]

const typeDefs = `
enum YesNo {
    YES
    NO
  }
type Address {
    street: String!
    city: String! 
  }
  type Person {
    name: String!
    phone: String
    address: Address!
    id: ID!
  }

  type Query {
    personCount: Int!
    allPersons(phone:YesNo): [Person!]!
    findPerson(name: String!): Person
  }
  type Mutation {
    addPerson(
      name: String!
      phone: String
      street: String!
      city: String!
    ): Person
    editNumber(
        name: String!
        phone: String!
      ): Person
  }
`

const resolvers = {
    Mutation: {
        addPerson: (root, args) => {
            if (persons.find(p => p.name === args.name)) {
                throw new GraphQLError('Name must be unique', {
                    extensions: {
                        code: 'BAD_USER_INPUT',
                        invalidArgs: args.name
                    }
                })
            }
            const person = { ...args, id: uuidv4() }
            persons = persons.concat(person)
            return person
        },
        editNumber: (root, args) => {
            console.log(args)
            const name = args.name;
            const person = persons.find((p) => p.name === name);
            if (!person) {
                throw new GraphQLError("person does not exist")
            }
            const newNumber = { ...person, phone: args.phone }
            persons = persons.map((p) => p.name === name ? newNumber : p)
            return newNumber;
        }
    },
    Query: {
        personCount: () => persons.length,
        allPersons: (root, args) => {
            if (args.phone) {
                return args.phone === "YES" ? persons.filter((p) => p.phone !== null) : persons.filter((p) => p.phone === null)
            } else {
                return persons
            }
        },
        findPerson: (root, args) =>
            persons.find(p => p.name === args.name)
    },
    Person: {
        address: ({ street, city }) => {
            return { street, city }
        }
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