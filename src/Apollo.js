import ApolloClient from 'apollo-boost';

const uri = 'http://localhost:3000/graphql';

const client = new ApolloClient({
  uri,
});

import gql from 'graphql-tag';

client
  .query({
    query: gql`
      {
        Journals {
          id
        }
      }
    `,
  })
  .then(result => console.log(result));
