import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
// import { AppContainer } from 'react-hot-loader';
console.log(App);

import { BrowserRouter } from 'react-router-dom';

const wrapApp = AppComponent => (
  <BrowserRouter>
    <AppComponent />
  </BrowserRouter>
);

ReactDOM.render(wrapApp(App), document.getElementById('root'));
