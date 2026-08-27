import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-O3FI6JPK.js";

// src/app/core/services/payment-method.service.ts
var PaymentMethodService = class _PaymentMethodService {
  http;
  base = `${environment.apiUrl}/payment-methods`;
  constructor(http) {
    this.http = http;
  }
  getAll(businessId) {
    let params = new HttpParams();
    if (businessId)
      params = params.set("businessId", businessId);
    return this.http.get(this.base, { params });
  }
  getCheckoutContext() {
    return this.http.get(`${this.base}/checkout-context`);
  }
  create(req) {
    return this.http.post(this.base, req);
  }
  update(id, req) {
    return this.http.put(`${this.base}/${id}`, req);
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  setDefault(id) {
    return this.http.put(`${this.base}/${id}/set-default`, {});
  }
  static \u0275fac = function PaymentMethodService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentMethodService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentMethodService, factory: _PaymentMethodService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentMethodService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PaymentMethodService
};
//# sourceMappingURL=chunk-XAEI64UT.js.map

