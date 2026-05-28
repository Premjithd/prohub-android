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
} from "./chunk-STXT6R65.js";

// src/app/services/material.service.ts
var MaterialService = class _MaterialService {
  http;
  base = `${environment.apiUrl}/materials`;
  constructor(http) {
    this.http = http;
  }
  getMaterials(categoryId, activeOnly = true) {
    let params = new HttpParams();
    if (categoryId != null)
      params = params.set("categoryId", categoryId);
    if (!activeOnly)
      params = params.set("activeOnly", "false");
    return this.http.get(this.base, { params });
  }
  getMaterial(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  createMaterial(request) {
    return this.http.post(this.base, request);
  }
  updateMaterial(id, request) {
    return this.http.put(`${this.base}/${id}`, request);
  }
  deleteMaterial(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  static \u0275fac = function MaterialService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaterialService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MaterialService, factory: _MaterialService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaterialService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MaterialService
};
//# sourceMappingURL=chunk-CZAQ2FPU.js.map

