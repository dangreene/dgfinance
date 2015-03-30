define([], function () {
    var importers = [];

    var registerImporter = function(importer) {
        importers.push(importer);
    };

    var getImporter = function(name){
        for(var x=0; x < importers.length; x++) {
            if (importers[x].name === name) {
                return importers[x];
            }
        }
        console.log("no importers found");
    };

    var getAvailableImporters = function(){
        var importerNames = [];
        importers.forEach(function(importer){
            importerNames.push(importer.name)
        });
        return importerNames;
    };

    return {
        getAvailableImporters: getAvailableImporters,
        getImporter: getImporter,
        registerImporter: registerImporter
    }
});