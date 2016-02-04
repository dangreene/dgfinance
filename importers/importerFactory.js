function getImporter(importerName) {
  switch (importerName) {
    case "chase":
      return require('./chaseCsvImporter');
    default:
      throw new Error("Invalid Importer Name");
  }
}

exports.getImporter = getImporter;
