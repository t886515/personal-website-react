import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import apolloClient from './Apollo.js';
import { ApolloProvider } from 'react-apollo';
// import { AppContainer } from 'react-hot-loader';

import { BrowserRouter } from 'react-router-dom';

const wrapApp = AppComponent => (
  <ApolloProvider client={apolloClient}>
    <BrowserRouter>
      <AppComponent />
    </BrowserRouter>
  </ApolloProvider>
);

ReactDOM.render(wrapApp(App), document.getElementById('root'));
