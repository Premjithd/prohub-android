import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-STXT6R65.js";

// src/app/services/pro-users.service.ts
var ProUsersService = class _ProUsersService {
  http;
  base = `${environment.apiUrl}/prousers`;
  constructor(http) {
    this.http = http;
  }
  getUsersUnderPro(proId) {
    return this.http.get(`${this.base}/pro/${proId}/users`);
  }
  addUserToPro(proId, userId) {
    return this.http.post(`${this.base}/pro/${proId}/users`, { userId });
  }
  removeUserFromPro(proId, userId) {
    return this.http.delete(`${this.base}/pro/${proId}/users/${userId}`);
  }
  getProsForUser(userId) {
    return this.http.get(`${this.base}/user/${userId}/pros`);
  }
  static \u0275fac = function ProUsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProUsersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProUsersService, factory: _ProUsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProUsersService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProUsersService
};
//# sourceMappingURL=chunk-7B4UUW6G.js.map

