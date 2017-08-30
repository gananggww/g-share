const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  url:String,
  _userid: String,
  date:Date,
  size:String,
  type:String
});

const modelFile = mongoose.model('uploadfile', fileSchema);

module.exports = modelFile
