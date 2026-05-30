import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ANTPJ2CK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/services/pro-browse.service.ts
function unwrap(response) {
  return Array.isArray(response) ? response : response?.$values ?? [];
}
var ProBrowseService = class _ProBrowseService {
  http;
  base = `${environment.apiUrl}/pros/browse`;
  constructor(http) {
    this.http = http;
  }
  browse(search, categoryId) {
    let params = new HttpParams();
    if (search)
      params = params.set("search", search);
    if (categoryId)
      params = params.set("categoryId", categoryId.toString());
    return this.http.get(this.base, { params }).pipe(map((response) => {
      const items = unwrap(response);
      return items.map((p) => __spreadProps(__spreadValues({}, p), {
        // services may also be wrapped in $values by ReferenceHandler.Preserve
        services: unwrap(p.services)
      }));
    }));
  }
  static \u0275fac = function ProBrowseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProBrowseService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProBrowseService, factory: _ProBrowseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProBrowseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ProBrowseService
};
//# sourceMappingURL=chunk-LXQQE7R7.js.map

