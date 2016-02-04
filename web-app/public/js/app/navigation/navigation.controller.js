export default class NavigationController {
  constructor($location, navigationService) {
    this._navigationService = navigationService;
    this._accounts = navigationService.accounts;
    this._navCollapsed = true;
    this._accountsCollapsed = true;
    this._$location = $location;
  }
  get accounts() {
    return this._accounts;
  }
  get navCollapsed() {
    return this._navCollapsed;
  }
  menuButtonClick() {
    this._navCollapsed = !this._navCollapsed;
  }
  getNavClass() {
    return (this._navCollapsed) ? "collapse" : "";
  }
  getAccountsClass() {
    return (this._accountsCollapsed) ? "" : "open";
  }
  toggleAccountsMenu() {
    this._accountsCollapsed = !this._accountsCollapsed;
  }
  navigateTo(url) {
    this._$location.path(url);
    this._accountsCollapsed = true;
    this._navCollapsed = true;
  }
}
