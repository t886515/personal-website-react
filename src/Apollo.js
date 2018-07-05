import ApolloClient from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';

const uri = 'http://localhost:3000/graphql';
const cache = new InMemoryCache();

const apolloClient = new ApolloClient({
  uri,
  cache,
  link: new HttpLink(),
});

export default apolloClient;
