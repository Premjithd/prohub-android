import {
  ApiService,
  StorageService
} from "./chunk-6CNFBV5T.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UQSUYH4V.js";

// src/app/core/services/user.ts
var UserService = class _UserService {
  api;
  storage;
  constructor(api, storage) {
    this.api = api;
    this.storage = storage;
  }
  getUser(userId) {
    return this.api.getUserById(`users/${userId}`);
  }
  updateUser(userData) {
    return this.api.put(`users/${userData.id}`, userData);
  }
  savePaymentDetails(userId, upiVpa) {
    return this.api.put(`users/${userId}/payment-details`, { upiVpa });
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(StorageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }, { type: StorageService }], null);
})();

export {
  UserService
};
//# sourceMappingURL=chunk-RYM562GK.js.map

