import { gql } from '@apollo/client'

const ALL_AUTHORS = gql`
  query {
    allAuthors {
      id
      name
      born
      bookCount
    }
  }
`

const ALL_BOOKS = gql`
query{
    allBook {
        title
        author
        published
    
    }
}
`

const ADD_BOOK = gql`

    mutation($title: String!, $published: Int!, $author: String!, $genres: [String!]!) {
        addBook(title: $title, published: $published, author: $author, genres: $genres) {
            title
            id
            published
        }
        
    }
`

const set_BiRTHYEAR = gql`
mutation($name: String!, $setBornTo: Int!){
    editAuthor(name: $name, setBornTo: $setBornTo) {
      name
      born
    }
  }
`
export { ADD_BOOK, ALL_AUTHORS, ALL_BOOKS, set_BiRTHYEAR }