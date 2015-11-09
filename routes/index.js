var express = require('express');
var router = express.Router();
var Post = require('../models/post')
var api = require('./api')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/posts', function(req, res, next) {
  Post.create({title: req.body.title, body: req.body.body})
    .then(function(){
      res.json({message: "You created a post"});
    })
});

module.exports = router;
