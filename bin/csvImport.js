// usage: node csvImport <importer> <fileName> <accountId>

const mongoConnect = require('../mongoConnect');
const importerFactory = require('../importers/importerFactory');

const MONGO_URL = 'mongodb://localhost:27017/finance_db';

const importerName = process.argv[2];
const fileName = process.argv[3];
const accountId = process.argv[4];

mongoConnect.connect(MONGO_URL);

const importer = importerFactory.getImporter(importerName);

importer.importCsv(accountId, fileName)
  .then(() => {
    console.log("csv imported successfully");
    cleanUp();
  })
  .catch((err) => {
    console.log("an error has occurred: " + err);
    cleanUp();
  });

function cleanUp(){
  mongoConnect.disconnect();
}
