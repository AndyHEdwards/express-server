var chai = require('chai');
var Post = require('../models/post')
var expect = chai.expect
var server = require('../bin/www');
var request = require('request');
var sleep = require('sleep');

describe('Post', function(){


  beforeEach(function(done){
    Post.remove().then(function(){done()})
  })

  it('creates a new post', function(done){
    Post.create({title: "post 1", body: "This is a post"}).then(function(data){
      Post.count().then(function(data){
        expect(data).to.equal(1)
        done()
      })
    })
  })

  it('GET returns all posts', function(done){
    Post.create({title: "post 1", body: "This is a post"})
    Post.create({title: "post 2", body: "This is another post"})
    request.get('http://localhost:3333/posts', function(err, res, body){
      console.log(body)
      expect(body.length).to.equal(2)
      done()
    })
  })
})












