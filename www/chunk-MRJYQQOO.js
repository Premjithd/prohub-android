import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  catchError,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UQSUYH4V.js";

// src/app/core/services/settings.service.ts
var SettingsService = class _SettingsService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getSetting(key) {
    return this.http.get(`${this.baseUrl}/settings/${key}`).pipe(map((r) => r.value), catchError(() => of(null)));
  }
  updateSetting(key, value) {
    return this.http.put(`${this.baseUrl}/settings/${key}`, { value });
  }
  static \u0275fac = function SettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SettingsService, factory: _SettingsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  SettingsService
};
//# sourceMappingURL=chunk-MRJYQQOO.js.map

