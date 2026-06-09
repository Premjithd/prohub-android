import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UQSUYH4V.js";

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
  submitUserReview(jobId, rating, comment) {
    return this.http.post(`${this.base}/jobs/${jobId}/user`, { rating, comment });
  }
  getJobUserReview(jobId) {
    return this.http.get(`${this.base}/jobs/${jobId}/user`);
  }
  getUserReviews(userId, page = 1, pageSize = 10) {
    return this.http.get(`${this.base}/users/${userId}`, { params: { page, pageSize } });
  }
  getUserRatingSummary(userId) {
    return this.http.get(`${this.base}/users/${userId}/summary`);
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
//# sourceMappingURL=chunk-WPDQA74A.js.map

