var express = require('express');
var router = express.Router();
const contacts = require('../controllers/contacts.controller.js');
/* GET contacts listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

router.get('/getData', contacts.getData);
module.exports = router;
