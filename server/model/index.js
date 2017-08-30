const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fileSchema = new Schema({

});

const modelFile = mongoose.model('uploadfile', fileSchema);

module.exports = modelFile
