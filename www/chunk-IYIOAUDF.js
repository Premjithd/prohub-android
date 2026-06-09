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

// src/app/core/services/service-area.service.ts
var ServiceAreaService = class _ServiceAreaService {
  http;
  base = `${environment.apiUrl}/service-areas`;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.base);
  }
  getActive() {
    return this.http.get(`${this.base}/active`);
  }
  add(area) {
    return this.http.post(this.base, area);
  }
  toggle(id) {
    return this.http.post(`${this.base}/${id}/toggle`, {});
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  check(country, state, district, pinCode) {
    const params = { country };
    if (state)
      params["state"] = state;
    if (district)
      params["district"] = district;
    if (pinCode)
      params["pinCode"] = pinCode;
    return this.http.get(`${this.base}/check`, { params });
  }
  static \u0275fac = function ServiceAreaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceAreaService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceAreaService, factory: _ServiceAreaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceAreaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ServiceAreaService
};
//# sourceMappingURL=chunk-IYIOAUDF.js.map

