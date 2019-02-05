const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const config = require('./config/access.js');

const app = express();
const Book = require('./routes/book');
const auth = require('./routes/auth');

// Mongo connection details
const mongoose = require('mongoose');
mongoose.Promise = require('bluebird')
mongoose.connection.openUri(`mongodb://${config.db.username}:${config.db.password}@${config.db.host}/${config.db.dbName}`, {promiseLibrary: require('bluebird')})
  .then(() => console.log('Connection Successful'))
  .catch((err) => console.error(err));
require('./models/Book.js').default;



app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ 'extended': 'false' }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use('/books', express.static(path.join(__dirname, 'dist')));
app.use('/book', Book);
app.use('/api/auth', auth);


// catch 404 and send it to error handler
app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // An error page
  res.status(err.status || 500);
  res.json({ message: err.message, error: err });
});

module.exports = app;