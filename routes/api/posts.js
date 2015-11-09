var express = require('express');
var router = express.Router();
var Post = require('../../models/post')

/* GET posts page. */
router.post('/', function(req, res, next) {
  Post.create({title: req.body.title, body: req.body.body})
    .then(function(){
      res.json({message: "You created a post"});
    })


});


module.exports = router;
