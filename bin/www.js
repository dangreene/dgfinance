const mongoConnect = require('../mongoConnect');
const app = require('../web-app/app');

const MONGO_URL = 'mongodb://localhost:27017/finance_db';
const SERVER_PORT = 3000;

mongoConnect.connect(MONGO_URL);

const server = app.createServer();

server.listen(SERVER_PORT, function() {
  console.log('%s listening at %s', server.name, server.url);
});
