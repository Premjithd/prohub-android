import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UQSUYH4V.js";

// src/app/services/payout.service.ts
var PayoutService = class _PayoutService {
  http;
  apiUrl = `${environment.apiUrl}/payouts`;
  constructor(http) {
    this.http = http;
  }
  getMyPayouts() {
    return this.http.get(this.apiUrl);
  }
  getAdminPayouts(proId, status) {
    const params = {};
    if (proId)
      params["proId"] = proId.toString();
    if (status)
      params["status"] = status;
    return this.http.get(`${this.apiUrl}/admin`, { params });
  }
  retryPayout(id) {
    return this.http.post(`${this.apiUrl}/${id}/retry`, {});
  }
  static \u0275fac = function PayoutService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayoutService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PayoutService, factory: _PayoutService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayoutService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PayoutService
};
//# sourceMappingURL=chunk-BLBEIKI7.js.map

