var chai = require('chai');
var Post = require('../../models/post')
var expect = chai.expect
var server = require('../../bin/www');
var request = require('request');

describe('Post API', function(){

  beforeEach(function(done){
    Post.remove().then(function(){done()})
  })

  it('GET returns all posts', function(done){
    Post.create({title: "post 1", body: "This is a post"})
    Post.create({title: "post 2", body: "This is another post"})
    request.get('http://localhost:3333/posts', function(err, res, body){
      var json = JSON.parse(body)
      expect(json.length).to.equal(2)
      done()
    })
  })
})
