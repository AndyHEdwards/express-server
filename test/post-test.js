var chai = require('chai');
var Post = require('../models/post')
var expect = chai.expect

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
})
