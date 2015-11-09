var express = require('express');
var router = express.Router();
var Post = require('../models/post')

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

router.get('/posts', function(req, res, next){
  Post.find().then(function(data){
    res.json(data)
  })
})

module.exports = router;
