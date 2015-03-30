define(['papaparse', 'lodash'], function (Papa, _) {

    var mapContents = function (results) {
        return {
            accounts: [{transactions: []}]
        };
    };

    var parseFile = function (file, successCallback) {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            complete: function (results) {
                console.log("Finished:", results.data);
                successCallback(mapContents(results.data));
            }
        });
    };

    return {
        name: 'Chase',
        parseFile: parseFile
    }
});