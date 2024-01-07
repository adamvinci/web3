import { gql } from '@apollo/client'

const ALL_AUTHOR = gql`
query  {
    allAuthors {
      name
      id
      born
    }
    authorCount
  }
  `

const ADD_AUTHOR = gql`
  mutation createAuthor($name:String!,$year:Int!)   {
    updateBirthYear(name: $name, year: $year){
      name
      id
      born
    }
  }`
const ALL_BOOK = gql`
query AllBooks {
  allBooks {
    id
    title
    genres
    published
  }
  bookCount
}`
const ADD_BOOK = gql`
mutation AddBook($title: String!, $author: String!, $published: Int!, $genres: [String!]!) {
  addBook(title: $title, author: $author, published: $published, genres: $genres) {
    id
    author
    genres
  }
}`
export { ALL_AUTHOR, ADD_AUTHOR, ALL_BOOK, ADD_BOOK }