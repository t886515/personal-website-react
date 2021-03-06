// import compression from 'compression';
import express from 'express';
import cors from 'cors';
import logger from 'morgan';
import parser from 'body-parser';
import path from 'path';
import handler from './responseHandler.js';


// import { APP_NAME, STATIC_PATH, WEB_PORT } from '../shared/config';
// import { isProd } from '../shared/util';
// import renderApp from './render-app';

// require('babel-core/register');
// require('babel-polyfill');

const app = express();


// app.use(compression());
// app.use(STATIC_PATH, express.static('dist'));
// app.use(STATIC_PATH, express.static('public'));

app.use(cors());
app.use(logger('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));



// router(app);

app.use('/style.css', function(req, res) {
  res.sendFile(path.join(__dirname, '../style.css'))
});


app.use(express.static(path.join(__dirname, '../dist')));
app.get('/');

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.get('/getJournals', handler.getJournals)

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log("Listening on port: ", port);
});
