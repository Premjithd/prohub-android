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
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/core/services/service-category.service.ts
var ServiceCategoryService = class _ServiceCategoryService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  getCategories() {
    console.log("\u{1F4E1} Calling API:", `${this.baseUrl}/serviceCategories`);
    return this.http.get(`${this.baseUrl}/serviceCategories`).pipe(map((response) => {
      console.log("\u{1F4E6} Raw API response:", response);
      console.log("Response type:", typeof response);
      console.log("Is array?", Array.isArray(response));
      if (response && response.$values && Array.isArray(response.$values)) {
        console.log("\u2705 Response uses $values format with", response.$values.length, "items");
        return response.$values;
      }
      if (Array.isArray(response)) {
        console.log("\u2705 Response is plain array with", response.length, "items");
        return response;
      }
      if (response && response.data && Array.isArray(response.data)) {
        console.log("\u2705 Response is wrapped in data property with", response.data.length, "items");
        return response.data;
      }
      console.warn("\u26A0\uFE0F Unknown response format, returning empty array");
      return [];
    }), catchError((error) => {
      console.error("\u274C API error:", error);
      console.error("Error details:", {
        status: error?.status,
        statusText: error?.statusText,
        message: error?.message,
        url: error?.url,
        headers: error?.headers
      });
      return of([]);
    }));
  }
  getCategory(id) {
    return this.http.get(`${this.baseUrl}/serviceCategories/${id}`);
  }
  getAllCategories() {
    return this.http.get(`${this.baseUrl}/serviceCategories/all`);
  }
  createCategory(data) {
    return this.http.post(`${this.baseUrl}/serviceCategories`, data);
  }
  updateCategory(id, data) {
    return this.http.put(`${this.baseUrl}/serviceCategories/${id}`, __spreadValues({ id }, data));
  }
  static \u0275fac = function ServiceCategoryService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceCategoryService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceCategoryService, factory: _ServiceCategoryService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceCategoryService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ServiceCategoryService
};
//# sourceMappingURL=chunk-YRPSZ7MM.js.map

