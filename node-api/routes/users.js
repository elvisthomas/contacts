var express = require('express');
var router = express.Router();
const users = require('./../controllers/users.controller.js');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/getData', users.getData);
module.exports = router;
