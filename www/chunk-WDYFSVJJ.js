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

// src/app/core/services/team.service.ts
var TeamService = class _TeamService {
  http;
  base = `${environment.apiUrl}/team`;
  constructor(http) {
    this.http = http;
  }
  /** Public: active team members for the /about page. */
  getPublic() {
    return this.http.get(this.base);
  }
  /** Admin: all members (including inactive). */
  getAll() {
    return this.http.get(`${this.base}/all`);
  }
  create(req) {
    return this.http.post(this.base, req);
  }
  update(id, req) {
    return this.http.put(`${this.base}/${id}`, req);
  }
  remove(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  static \u0275fac = function TeamService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TeamService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TeamService, factory: _TeamService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TeamService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  TeamService
};
//# sourceMappingURL=chunk-WDYFSVJJ.js.map

