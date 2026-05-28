import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-STXT6R65.js";

// src/app/services/review.service.ts
var ReviewService = class _ReviewService {
  http;
  base = `${environment.apiUrl}/reviews`;
  constructor(http) {
    this.http = http;
  }
  submitReview(jobId, rating, comment) {
    return this.http.post(`${this.base}/jobs/${jobId}`, { rating, comment });
  }
  getJobReview(jobId) {
    return this.http.get(`${this.base}/jobs/${jobId}`);
  }
  getProReviews(proId, page = 1, pageSize = 10) {
    return this.http.get(`${this.base}/pros/${proId}`, { params: { page, pageSize } });
  }
  getProRatingSummary(proId) {
    return this.http.get(`${this.base}/pros/${proId}/summary`);
  }
  getPlatformStats() {
    return this.http.get(`${this.base}/stats`);
  }
  static \u0275fac = function ReviewService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ReviewService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReviewService, factory: _ReviewService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReviewService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  ReviewService
};
//# sourceMappingURL=chunk-7SLTPWLP.js.map

