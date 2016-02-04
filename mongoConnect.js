const fs = require('fs');
const mongoose = require('mongoose');

mongoose.Promise = Promise;

registerModels();

function connectToMongo(url) {
  return mongoose.connect(url);
}

function disconnectFromMongo(){
  return mongoose.disconnect();
}

function registerModels() {
  const modelsDirectory = './models/';
  fs.readdirSync(modelsDirectory).forEach(function(file) {
    const fullFileName = modelsDirectory + file;
    if (!(fs.lstatSync(fullFileName).isDirectory())) {
      require(fullFileName);
    }
  });
}

exports.connect = connectToMongo;
exports.disconnect = disconnectFromMongo;
