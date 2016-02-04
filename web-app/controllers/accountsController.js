const accountService = require('../../services/accountService');
const accountTransactionService =
  require('../../services/accountTransactionService');

function getAccounts(req, res, next) {
  accountService.getAccounts()
    .then((accounts) => {
      return res.json(accounts);
    })
    .catch(next);
}

function getAccount(req, res, next) {
  accountService.getAccount(req.params.id)
    .then((account) => {
      if (!account) {
        return res.status(404).json({
          error: "Account not found"
        });
      }
      return res.json(account);
    })
    .catch(next);
}

function getAccountTransactions(req, res, next) {
  accountTransactionService.getAccountTransactions(req.params.id)
    .then((transactions) => {
      return res.json(transactions);
    })
    .catch(next);
}

function createAccount(req, res, next) {
  accountService.createAccount(req.params)
    .then((account) => {
      return res.json({
        id: account._id
      });
    })
    .catch(next);
}

exports.getAccounts = getAccounts;
exports.getAccount = getAccount;
exports.getAccountTransactions = getAccountTransactions;
exports.createAccount = createAccount;
