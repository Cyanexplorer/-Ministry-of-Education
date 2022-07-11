var express = require('express');
var multer  = require('multer');
const { path } = require('../app');
var router = express.Router();
var upload = multer();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/modifier', function(req, res, next) {
  // used for 'sharedArrayBuffer'
  res.render('modifier', { title: 'Express'});
 
});

router.get('/modifier/function/dilation', function(req, res, next) {
  //kernel.dilate(segment, paddingSize)
  res.sendFile()
});

router.get('/modifier/function/erosion', function(req, res, next) {
  req.params
  res.sendFile()
 
});

module.exports = router;
