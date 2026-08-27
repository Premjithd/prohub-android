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

// src/app/services/payment.service.ts
var PaymentService = class _PaymentService {
  http;
  apiUrl = `${environment.apiUrl}/payments`;
  constructor(http) {
    this.http = http;
  }
  /**
   * Create a payment order for a job bid
   * @param request Create payment request with jobId, bidId, and amount
   * @returns Razorpay order details for checkout
   */
  createPaymentOrder(request) {
    return this.http.post(`${this.apiUrl}/create-order`, request);
  }
  /**
   * Verify payment after Razorpay checkout
   * @param request Verify payment request with Razorpay order, payment, and signature
   * @returns Payment verification response with updated job status
   */
  verifyPayment(request) {
    return this.http.post(`${this.apiUrl}/verify`, request);
  }
  /**
   * Get payment status for a specific job
   * @param jobId The job ID
   * @returns Payment details
   */
  getPaymentByJob(jobId) {
    return this.http.get(`${this.apiUrl}/job/${jobId}`);
  }
  /**
   * Get the full payment summary for a job (agreed total, paid, remaining, history, active request).
   * Accessible to the job owner (consumer) and the assigned pro.
   */
  getPaymentSummary(jobId) {
    return this.http.get(`${this.apiUrl}/job/${jobId}/summary`);
  }
  /**
   * Assigned Pro raises a payment request (None/Partial/Full). Returns the refreshed summary.
   */
  createPaymentRequest(body) {
    return this.http.post(`${this.apiUrl}/request`, body);
  }
  /**
   * Pro cancels their pending payment request. Returns the refreshed summary.
   */
  cancelPaymentRequest(requestId) {
    return this.http.post(`${this.apiUrl}/request/${requestId}/cancel`, {});
  }
  /**
   * Request refund for a completed payment
   * @param paymentId The payment ID to refund
   * @param reason Optional refund reason
   * @returns Refund processing response
   */
  requestRefund(paymentId, reason) {
    const body = { reason: reason || "Consumer requested refund" };
    return this.http.post(`${this.apiUrl}/${paymentId}/refund`, body);
  }
  static \u0275fac = function PaymentService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PaymentService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentService, factory: _PaymentService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  PaymentService
};
//# sourceMappingURL=chunk-TQ2UVP62.js.map

