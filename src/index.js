import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Apollo from './Apollo.js';
// import { AppContainer } from 'react-hot-loader';

import { BrowserRouter } from 'react-router-dom';

const wrapApp = AppComponent => (
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
);

ReactDOM.render(wrapApp(App), document.getElementById('root'));
