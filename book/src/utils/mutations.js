



// // route to get logged in user's info (needs the token)
// export const getMe = (token) => {
//   return fetch('/api/users/me', {
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// export const createUser = (userData) => {
//   return fetch('/api/users', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// export const loginUser = (userData) => {
//   return fetch('/api/users/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
// };

// // save book data for a logged in user
// export const saveBook = (bookData, token) => {
//   return fetch('/api/users', {
//     method: 'PUT',
//     headers: {
//       'Content-Type': 'application/json',
//       authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(bookData),
//   });
// };

// // remove saved book data for a logged in user
// export const deleteBook = (bookId, token) => {
//   return fetch(`/api/users/books/${bookId}`, {
//     method: 'DELETE',
//     headers: {
//       authorization: `Bearer ${token}`,
//     },
//   });
// };

// // make a search to google books api
// // https://www.googleapis.com/books/v1/volumes?q=harry+potter
// export const searchGoogleBooks = (query) => {
//   return fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
// };

import { gql } from '@apollo/client';

export const LOGIN_USER = gql ` 
mutation login (
  $email: String! 
  $password: String! 
) {
  login(
    email: $email
    password: $password
  ) {
    token 
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql `
mutation addUser(
  $username: String!
  $email: String! 
  $password: String! 

) {
  addUser(
    username: $username
    email: $email
    password: $password
  ) {
    token 
    user {
      _id
      username
      email
      bookCount
      savedBooks {
        authors
        bookId
        image
        link
        title
        description
      }
    }
  }
}
`;

export const SAVE_BOOK= gql `
mutation saveBook($newBook: InputBook!) {
  saveBook(newBook: $newBook) {
    _id
    username
    email
    savedBooks{
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`;

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID! ) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
  }
}
}
`;
