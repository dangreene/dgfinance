define(['lodash','papaparse'], function (_, Papa) {

    var creditType = "CREDIT";
    var debitType = "DEBIT";

    var getTransactionType = function (value) {
        switch (value) {
            case "Debit":
                return debitType;
            case "Credit":
                return creditType;
            default:
                throw new Error("Invalid Transaction Type Provided.")
        }
    };

    var isEmptyString = function (value) {
        return (value.length === 0 || !value.trim())
    };

    var filterEmptyRows = function (rows) {
        return _.filter(rows, function (row) {
            return !isEmptyString(row);
        });
    };

    var filterTransactionHeaderRows = function (rows) {
        return _.filter(rows, function (row) {
            return !row.startsWith(",Posted Date");
        });
    };

    var splitStringByLine = function (value) {
        return value.split("\n");
    };

    var splitStringByComma = function (value) {
        return Papa.parse(value, {
            dynamicTyping: true
        }).data[0];
    };

    var formatCsvStringIntoRecords = function (csvValue) {
        var csvRows = splitStringByLine(csvValue);
        var pureRows = filterEmptyRows(csvRows);
        var filteredRows = filterTransactionHeaderRows(pureRows);

        // remove header
        filteredRows.shift();

         //split every csv row into arrays
        return _.map(filteredRows, function (row) {
            var value = splitStringByComma(row);
            return value;
        });
    };

    var mapContents = function (results) {
        var formattedRows = formatCsvStringIntoRecords(results);
        var accounts = [];
        var newAccount = false;
        var currentAccountIndex = -1;

        formattedRows.forEach(function (row) {
            newAccount = !isEmptyString(row[0]);

            if (newAccount) {
                accounts.push({
                    name: row[1],
                    transactions: []
                });
                currentAccountIndex++;
            } else {
                var transactionType = getTransactionType(row[9]);
                accounts[currentAccountIndex].transactions.push({
                    transactionDate: new Date(row[10]),
                    transactionPostDate: new Date(row[1]),
                    description: row[2],
                    amount: (transactionType === debitType) ? -Number(row[3]) : Number(row[3]),
                    transactionType: transactionType,
                    notes: row[5] && row[5].toString()
                });
            }
        });

        return {accounts: accounts};
    };

    var parseFile = function (file, successCallback) {
        var reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (event) {
            var csvData = event.target.result;
            successCallback(mapContents(csvData));
        };
    };

    return {
        name: 'First Niagara',
        parseFile: parseFile
    }
});