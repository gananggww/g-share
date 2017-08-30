const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
  username : String,
  password : String,
  nama : String,
  email : String,
  telp : String
});

const modelUser = mongoose.model('user', userSchema);

module.exports = modelUser
