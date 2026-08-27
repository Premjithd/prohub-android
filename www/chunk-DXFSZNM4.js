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

// src/app/core/services/banner.service.ts
var BannerService = class _BannerService {
  http;
  constructor(http) {
    this.http = http;
  }
  /** Announcement banner state, controlled from appsettings (Banner:Enabled / Banner:Message). */
  getBanner() {
    return this.http.get(`${environment.apiUrl}/banner`);
  }
  static \u0275fac = function BannerService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BannerService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BannerService, factory: _BannerService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BannerService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  BannerService
};
//# sourceMappingURL=chunk-DXFSZNM4.js.map

