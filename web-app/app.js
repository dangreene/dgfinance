const restify = require('restify');
const fs = require('fs');

function createServer() {
  const server = restify.createServer();

  server.use(restify.queryParser({
    mapParams: false
  }));

  server.use(restify.bodyParser());

  registerRoutes(server);

  return server;
}

function registerRoutes(server) {
  const routesDirectory = __dirname + '/routes/';
  fs.readdirSync(routesDirectory).forEach(function(file) {
    const fullFileName = routesDirectory + file;
    if (!(fs.lstatSync(fullFileName).isDirectory())) {
      require(fullFileName).register(server);
    }
  });
}

exports.createServer = createServer;
