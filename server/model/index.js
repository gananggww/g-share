const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({
  url:String,
  _userid: String,
  date:{
    type : Date,
    default : Date.now
  }, 
  size:String,
  type:String,
  filename : String
});

const modelFile = mongoose.model('uploadfile', fileSchema);

module.exports = modelFile
