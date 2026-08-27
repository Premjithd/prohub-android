import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-O3FI6JPK.js";

// src/app/core/services/maintenance.service.ts
var MaintenanceService = class _MaintenanceService {
  http;
  constructor(http) {
    this.http = http;
  }
  /** Always reachable, even while maintenance is on (the endpoint is allow-listed server-side). */
  getStatus() {
    return this.http.get(`${environment.apiUrl}/maintenance/status`);
  }
  static \u0275fac = function MaintenanceService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MaintenanceService, factory: _MaintenanceService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MaintenanceService
};
//# sourceMappingURL=chunk-CAKNACU2.js.map

