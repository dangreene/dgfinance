const accountTransactionService =
  require('../../services/accountTransactionService');

function getTransactionsByCategory(req, res, next) {
  accountTransactionService.getTransactionsByCategory(req.params.id)
    .then((transactions) => {
      return res.json(transactions);
    })
    .catch(next);
}

function addCategoryToTransaction(req, res, next) {
  accountTransactionService.addCategory(req.params.id, req.params.catId)
    .then(() => {
      res.status(200)
    })
    .catch(next)
}

exports.getTransactionsByCategory = getTransactionsByCategory;
exports.addCategoryToTransaction = addCategoryToTransaction;
