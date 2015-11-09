var mongoose = require('../db/mongoose')

var Schema = mongoose.Schema;
ObjectId = Schema.ObjectId;

var PostSchema = new Schema({
    author    : ObjectId,
    title     : String,
    body      : String
});

var Post = mongoose.model('Post', PostSchema);

module.exports = Post
