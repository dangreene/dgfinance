export default class {
  constructor($location, bankAccountService) {
    this._bankAccountService = bankAccountService;
    this._$location = $location;
    this._initialBalance = 0;
    this._accountName = "";
  }
  get initialBalance() {
    return this._initialBalance;
  }
  set initialBalance(value) {
    this._initialBalance = value;
  }
  get accountName() {
    return this._accountName;
  }
  set accountName(value) {
    this._accountName = value;
  }

  saveAccount() {
    this._bankAccountService.createAccount({
      startingBalance: Number(this.initialBalance) * 100,
      description: this.accountName
    }).then((response) => {
      let accountId = response && response.data &&
        response.data.accountId || "";
      this._$location.path('/bank-account/' + accountId);
    });
  }
}
