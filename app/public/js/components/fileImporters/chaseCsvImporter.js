define(['papaparse', 'lodash'], function(Papa, _) {

  var getTransactionType = function(value) {
    var creditType = 'CREDIT';
    var debitType = 'DEBIT';

    switch (value) {
      case 'Sale':
        return debitType;
      case 'Return':
      case 'Payment':
        return creditType;
      default:
        throw new Error('Invalid Transaction Type Provided.');

    }
  };

  var mapContents = function(results) {
    return {
      accounts: [{
        name: 'Amazon Visa',
        transactions: _.map(results, function(row) {
          return {
            transactionDate: new Date(row['Trans Date']),
            transactionPostDate: new Date(row['Post Date']),
            description: row.Description,
            amount: row.Amount,
            transactionType: getTransactionType(row.Type)
          };
        })
      }]
    };
  };

  var parseFile = function(file, successCallback) {
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      skipEmptyLines: true,
      complete: function(results) {
        successCallback(mapContents(results.data));
      }
    });
  };

  return {
    name: 'Chase',
    parseFile: parseFile
  };
});
