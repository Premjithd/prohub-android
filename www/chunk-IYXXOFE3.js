import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CTKGZTQY.js";

// src/app/core/services/business.service.ts
var BusinessService = class _BusinessService {
  http;
  base = `${environment.apiUrl}/businesses`;
  constructor(http) {
    this.http = http;
  }
  preRegisterBusiness(req) {
    return this.http.post(`${this.base}/pre-register`, req);
  }
  getMyBusinesses() {
    return this.http.get(`${this.base}/mine`);
  }
  getBusiness(id) {
    return this.http.get(`${this.base}/${id}`);
  }
  createBusiness(req) {
    return this.http.post(this.base, req);
  }
  updateBusiness(id, req) {
    return this.http.put(`${this.base}/${id}`, req);
  }
  getMembers(id) {
    return this.http.get(`${this.base}/${id}/members`);
  }
  addMember(id, email, role) {
    return this.http.post(`${this.base}/${id}/members`, { email, role });
  }
  removeMember(businessId, membershipId) {
    return this.http.delete(`${this.base}/${businessId}/members/${membershipId}`);
  }
  migrateServices(id) {
    return this.http.post(`${this.base}/${id}/migrate-services`, {});
  }
  static \u0275fac = function BusinessService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BusinessService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BusinessService, factory: _BusinessService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BusinessService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  BusinessService
};
//# sourceMappingURL=chunk-IYXXOFE3.js.map

