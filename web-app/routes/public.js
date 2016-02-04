const restify = require('restify');

function register(server) {
  server.get(/\/?.*/, restify.serveStatic({
    directory: __dirname + '/../public'
  }));
}

exports.register = register;
