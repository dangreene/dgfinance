export default class ViewBankAccountController {
  constructor(bankAccount, transactions) {
    this._accountName = bankAccount.description;
    this._transactions = transactions;
  }
  get accountName() {
    return this._accountName;
  }
  get transactions() {
    return this._transactions;
  }
}
