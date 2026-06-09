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
} from "./chunk-UQSUYH4V.js";

// src/app/services/browse-services.service.ts
var BrowseServicesService = class _BrowseServicesService {
  http;
  apiUrl = `${environment.apiUrl}/services`;
  constructor(http) {
    this.http = http;
  }
  getService(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  getServices(params = {}) {
    let httpParams = new HttpParams();
    if (params.page)
      httpParams = httpParams.set("page", params.page);
    if (params.pageSize)
      httpParams = httpParams.set("pageSize", params.pageSize);
    if (params.categoryId)
      httpParams = httpParams.set("categoryId", params.categoryId);
    if (params.search)
      httpParams = httpParams.set("search", params.search);
    if (params.city)
      httpParams = httpParams.set("city", params.city);
    if (params.sortBy)
      httpParams = httpParams.set("sortBy", params.sortBy);
    return this.http.get(this.apiUrl, { params: httpParams }).pipe(map((response) => {
      const raw = response?.items?.$values ?? response?.items ?? [];
      const items = Array.isArray(raw) ? raw : [];
      return {
        items,
        total: response?.total ?? 0,
        page: response?.page ?? 1,
        pageSize: response?.pageSize ?? 100
      };
    }));
  }
  static \u0275fac = function BrowseServicesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BrowseServicesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BrowseServicesService, factory: _BrowseServicesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BrowseServicesService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  BrowseServicesService
};
//# sourceMappingURL=chunk-CMDBVZW6.js.map

