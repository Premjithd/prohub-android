import {
  ApiService,
  StorageService
} from "./chunk-YKIUM4NK.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CTKGZTQY.js";

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

// src/app/core/services/pro.ts
var ProService = class _ProService {
  api;
  constructor(api) {
    this.api = api;
  }
  getPro(proId) {
    return this.api.get(`pros/${proId}`);
  }
  updatePro(proData) {
    return this.api.put(`pros/${proData.id}`, proData);
  }
  static \u0275fac = function ProService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProService, factory: _ProService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

// src/app/core/services/verification.service.ts
var VerificationService = class _VerificationService {
  http;
  apiUrl = `${environment.apiUrl}/verification`;
  constructor(http) {
    this.http = http;
  }
  sendEmailCode(contact, userType) {
    return this.http.post(`${this.apiUrl}/send-email-code`, { contact, userType });
  }
  verifyEmail(contact, code, userType) {
    return this.http.post(`${this.apiUrl}/verify-email`, { contact, code, userType });
  }
  sendPhoneCode(contact, userType) {
    return this.http.post(`${this.apiUrl}/send-phone-code`, { contact, userType });
  }
  verifyPhone(contact, code, userType) {
    return this.http.post(`${this.apiUrl}/verify-phone`, { contact, code, userType });
  }
  static \u0275fac = function VerificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerificationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VerificationService, factory: _VerificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  UserService,
  ProService,
  VerificationService
};
//# sourceMappingURL=chunk-K7M6VCS6.js.map

