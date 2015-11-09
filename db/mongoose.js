var mongoose = require('mongoose')

if(process.env.NODE_ENV == 'test'){
  mongoose.connect('mongodb://localhost/database-test')
}else{
  mongoose.connect('mongodb://localhost/database-dev')
}
module.exports = mongoose
