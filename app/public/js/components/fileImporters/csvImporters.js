var importers = [];

export function registerImporter(importer) {
  importers.push(importer);
}

export function getImporter(name) {
  for (var x = 0; x < importers.length; x++) {
    if (importers[x].name === name) {
      return importers[x];
    }
  }
  console.log('no importers found');
}

export function getAvailableImporters() {
  var importerNames = [];
  importers.forEach(function(importer) {
    importerNames.push(importer.name);
  });
  return importerNames;
}
