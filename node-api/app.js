var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var bodyParser = require('body-parser')
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const jwt = require('jsonwebtoken');
var db = require('./core/db');
var dotenv = require('dotenv').config();
var compression = require('compression')



var app = express();
app.use(compression(),function(req,res,next){
  try{
    const token = req.headers.authorization.split(" ")[1]
    jwt.verify(token, key.tokenKey, function (err, payload) {
      console.log("payload ====== ", payload);
      if (payload) {
        /* user.findById(payload.userId).then(
          (doc)=>{
            req.user=doc;
            next()
          }
        ) */
      } else {
        next()
      }
    })
  }catch(e){
    next()
  }
});

// view engine setup
app.set('views', path.join(__dirname, 'public'));
app.set('view engine', 'jade');
app.use(cors(
  {origin: ['http://localhost:4200','http://127.0.0.1:4200']}
));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
// app.use(bodyParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
// app.use('/upload', require('./controllers/localFileUpload'));

// app.use('/users/doSignup', usersRouter);
// app.use('/users/getUsername', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

/* app.listen(3000, function(){
  console.log('Listening on 3000 Port');
}); */

module.exports = app;
