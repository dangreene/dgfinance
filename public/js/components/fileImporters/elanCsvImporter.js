define(['papaparse', 'lodash'], function (Papa, _) {

    var getTransactionType = function (value) {
        var creditType = "CREDIT";
        var debitType = "DEBIT";

        switch (value) {
            case "DEBIT":
                return debitType;
            case "CREDIT":
                return creditType;
            default:
                throw new Error("Invalid Transaction Type Provided.")

        }
    };

    var mapContents = function (results) {
        return {
            accounts: [{
                name: "Elan Visa",
                transactions: _.map(results, function (row) {
                    return {
                        transactionDate: new Date(row["Date"]),
                        transactionPostDate: new Date(row["Date"]),
                        description: row["Name"],
                        amount: row["Amount"],
                        transactionType: getTransactionType(row["Transaction"]),
                        notes: row["Memo"]
                    }
                })
            }]
        };
    };

    var parseFile = function (file, successCallback) {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: function (results) {
                successCallback(mapContents(results.data));
            }
        });
    };

    return {
        name: 'Elan',
        parseFile: parseFile
    }
});