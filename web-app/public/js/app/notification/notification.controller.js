import {
  notificationTypes
}
from './notificationTypes.js';

export default class {
  constructor(notificationService) {
    this._notificationService = notificationService;
  }
  get notifications() {
    return this._notificationService.getAll();
  }
}
