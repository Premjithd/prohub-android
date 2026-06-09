import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-Z4JBADQW.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-AF7MVYJA.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AQNNVN3U.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-QKBPBGFS.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-B4QCWAPP.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  Inject,
  Injectable,
  NgIf,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQSUYH4V.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

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

// src/app/features/payments/razorpay-checkout.component.ts
function RazorpayCheckoutComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "h4");
    \u0275\u0275text(2, "Payment Breakdown");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "span");
    \u0275\u0275text(5, "Bid Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "strong");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 13)(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 13)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "strong");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 14)(19, "span");
    \u0275\u0275text(20, "Total Amount to Pay:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "strong");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r0.rateSplit.bidAmount.toFixed(2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Platform Fee (", ctx_r0.rateSplit.platformFeePercent, "%):");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r0.rateSplit.platformFee.toFixed(2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("GST on Fee (", ctx_r0.rateSplit.gstPercent, "%):");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r0.rateSplit.gstOnPlatformFee.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", (ctx_r0.rateSplit.bidAmount + ctx_r0.rateSplit.platformFee + ctx_r0.rateSplit.gstOnPlatformFee).toFixed(2));
  }
}
function RazorpayCheckoutComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function RazorpayCheckoutComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275element(1, "mat-spinner", 17);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Initializing payment...");
    \u0275\u0275elementEnd()();
  }
}
function RazorpayCheckoutComponent_span_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(\u20B9", (ctx_r0.rateSplit.bidAmount + ctx_r0.rateSplit.platformFee + ctx_r0.rateSplit.gstOnPlatformFee).toFixed(2), ")");
  }
}
var RazorpayCheckoutComponent = class _RazorpayCheckoutComponent {
  paymentService;
  dialogRef;
  data;
  snackBar;
  cdr;
  processing = false;
  errorMessage = "";
  rateSplit;
  scriptLoaded = false;
  destroy$ = new Subject();
  orderData = null;
  // Store order data to avoid duplicate API calls
  constructor(paymentService, dialogRef, data, snackBar, cdr) {
    this.paymentService = paymentService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.snackBar = snackBar;
    this.cdr = cdr;
    this.loadRazorpayScript();
  }
  ngOnInit() {
    this.fetchPaymentOrder();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadRazorpayScript() {
    if (window.Razorpay) {
      this.scriptLoaded = true;
      return;
    }
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    script.onload = () => {
      this.scriptLoaded = true;
    };
    script.onerror = () => {
      this.errorMessage = "Failed to load payment gateway. Please try again.";
    };
    document.head.appendChild(script);
  }
  fetchPaymentOrder() {
    this.processing = true;
    this.errorMessage = "";
    console.log("[RazorpayCheckout] Starting fetchPaymentOrder, processing=true");
    const request = {
      jobId: this.data.jobId,
      bidId: this.data.bidId,
      amount: this.data.bidAmount
    };
    console.log("[RazorpayCheckout] Fetching payment order:", request);
    this.paymentService.createPaymentOrder(request).pipe(takeUntil(this.destroy$)).subscribe({
      next: (order) => {
        console.log("[RazorpayCheckout] Payment order received:", order);
        this.orderData = order;
        const bidAmount = order.totalAmount - order.platformFee - order.gstOnPlatformFee;
        this.rateSplit = {
          bidAmount,
          platformFeePercent: 10,
          platformFee: order.platformFee,
          gstPercent: 18,
          gstOnPlatformFee: order.gstOnPlatformFee,
          proPayOut: order.proPayout
        };
        console.log("[RazorpayCheckout] Rate split calculated:", this.rateSplit);
        console.log("[RazorpayCheckout] About to set processing=false");
        this.processing = false;
        console.log("[RazorpayCheckout] processing set to false. Current value:", this.processing);
        this.cdr.markForCheck();
        console.log("[RazorpayCheckout] Change detection marked");
      },
      error: (error) => {
        console.error("[RazorpayCheckout] Error in subscription:", error);
        const errorMsg = error?.error?.message || error?.message || "Failed to initialize payment. Please try again.";
        this.errorMessage = errorMsg;
        console.error("[RazorpayCheckout] Error message set to:", this.errorMessage);
        this.processing = false;
        this.cdr.markForCheck();
        console.log("[RazorpayCheckout] Processing set to false after error. Current value:", this.processing);
      }
    });
  }
  initiatePayment() {
    console.log("[RazorpayCheckout] Initiate payment called");
    if (!this.scriptLoaded || !window.Razorpay) {
      console.error("[RazorpayCheckout] Razorpay script not loaded");
      this.errorMessage = "Payment gateway not loaded. Please refresh and try again.";
      this.cdr.markForCheck();
      return;
    }
    if (!this.orderData) {
      console.error("[RazorpayCheckout] Order data not available");
      this.errorMessage = "Payment order data not available. Please try again.";
      this.cdr.markForCheck();
      return;
    }
    console.log("[RazorpayCheckout] Opening Razorpay with order:", this.orderData);
    this.processing = true;
    this.errorMessage = "";
    this.cdr.markForCheck();
    try {
      const options = {
        key: this.orderData.key,
        amount: this.orderData.totalAmount * 100,
        // Convert to paisa
        currency: this.orderData.currency,
        order_id: this.orderData.orderId,
        name: "yProHub",
        description: `Payment for job: ${this.data.jobTitle}`,
        customer_notify: 1,
        prefill: __spreadValues({
          name: this.data.consumerName,
          email: this.data.consumerEmail,
          contact: this.data.consumerPhone.replace(/\D/g, "")
        }, this.data.prefillVpa ? { vpa: this.data.prefillVpa } : {}),
        theme: {
          color: "#3f51b5"
        },
        handler: (response) => {
          console.log("[RazorpayCheckout] Payment handler response:", response);
          this.verifyPayment(response);
        },
        modal: {
          ondismiss: () => {
            console.log("[RazorpayCheckout] Payment modal dismissed");
            this.processing = false;
            this.cdr.markForCheck();
            this.snackBar.open("Payment cancelled", "Close", { duration: 3e3 });
          }
        }
      };
      const rzp1 = new window.Razorpay(options);
      console.log("[RazorpayCheckout] Razorpay checkout instance created");
      rzp1.open();
      this.processing = false;
      this.cdr.markForCheck();
    } catch (err) {
      console.error("[RazorpayCheckout] Error opening Razorpay:", err);
      this.processing = false;
      this.errorMessage = "Failed to open payment gateway. Please try again.";
      this.cdr.markForCheck();
    }
  }
  verifyPayment(response) {
    console.log("[RazorpayCheckout] Verifying payment with response:", response);
    this.processing = true;
    this.cdr.markForCheck();
    const verifyRequest = {
      razorpayOrderId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
      razorpaySignature: response.razorpay_signature
    };
    this.paymentService.verifyPayment(verifyRequest).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        console.log("[RazorpayCheckout] Payment verified successfully:", result);
        this.processing = false;
        this.cdr.markForCheck();
        this.snackBar.open("Payment successful! Job activated.", "Close", { duration: 5e3 });
        this.dialogRef.close({
          success: true,
          paymentId: result.paymentId,
          jobStatus: result.jobStatus
        });
      },
      error: (error) => {
        console.error("[RazorpayCheckout] Payment verification error:", error);
        this.processing = false;
        this.errorMessage = "Payment verification failed. Please contact support.";
        this.cdr.markForCheck();
      }
    });
  }
  onCancel() {
    if (!this.processing) {
      this.dialogRef.close();
    }
  }
  static \u0275fac = function RazorpayCheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RazorpayCheckoutComponent)(\u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RazorpayCheckoutComponent, selectors: [["app-razorpay-checkout"]], decls: 30, vars: 10, consts: [[1, "razorpay-dialog-container"], [1, "dialog-header"], ["mat-icon-button", "", 1, "close-btn", 3, "click", "disabled"], [1, "dialog-content"], [1, "job-summary"], ["class", "rate-breakdown", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], ["class", "processing", 4, "ngIf"], [1, "dialog-actions"], ["mat-button", "", 3, "click", "disabled"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [4, "ngIf"], [1, "rate-breakdown"], [1, "breakdown-item"], [1, "breakdown-item", "total"], [1, "error-message"], [1, "processing"], ["diameter", "40"]], template: function RazorpayCheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2");
      \u0275\u0275text(3, "Payment Checkout");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function RazorpayCheckoutComponent_Template_button_click_4_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "div", 3)(8, "div", 4)(9, "h3");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p");
      \u0275\u0275text(12, "Bid Amount: ");
      \u0275\u0275elementStart(13, "strong");
      \u0275\u0275text(14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, "For: ");
      \u0275\u0275elementStart(17, "strong");
      \u0275\u0275text(18);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(19, RazorpayCheckoutComponent_div_19_Template, 23, 6, "div", 5)(20, RazorpayCheckoutComponent_div_20_Template, 5, 1, "div", 6)(21, RazorpayCheckoutComponent_div_21_Template, 4, 0, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 8)(23, "button", 9);
      \u0275\u0275listener("click", function RazorpayCheckoutComponent_Template_button_click_23_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(24, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 10);
      \u0275\u0275listener("click", function RazorpayCheckoutComponent_Template_button_click_25_listener() {
        return ctx.initiatePayment();
      });
      \u0275\u0275elementStart(26, "mat-icon");
      \u0275\u0275text(27, "payment");
      \u0275\u0275elementEnd();
      \u0275\u0275text(28, " Pay Now ");
      \u0275\u0275template(29, RazorpayCheckoutComponent_span_29_Template, 2, 1, "span", 11);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.processing);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.data.jobTitle);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("\u20B9", ctx.data.bidAmount.toFixed(2));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.data.consumerName);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.rateSplit);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.processing);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.processing);
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.processing || !!ctx.errorMessage);
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.rateSplit);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    MatDialogModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatSnackBarModule
  ], styles: ["\n\n.razorpay-dialog-container[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  min-width: 400px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 1.5rem;\n}\n.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #333;\n}\n.dialog-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin: -0.5rem;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  padding: 0 1.5rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.dialog-content[_ngcontent-%COMP%]   .job-summary[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.dialog-content[_ngcontent-%COMP%]   .job-summary[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n  color: #333;\n}\n.dialog-content[_ngcontent-%COMP%]   .job-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  color: #666;\n  font-size: 0.95rem;\n}\n.dialog-content[_ngcontent-%COMP%]   .job-summary[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n}\n.dialog-content[_ngcontent-%COMP%]   .rate-breakdown[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #fafafa;\n  border: 1px solid #e8e8e8;\n  border-radius: 4px;\n}\n.dialog-content[_ngcontent-%COMP%]   .rate-breakdown[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 1rem 0;\n  font-size: 0.95rem;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dialog-content[_ngcontent-%COMP%]   .rate-breakdown[_ngcontent-%COMP%]   .breakdown-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n  font-size: 0.9rem;\n  color: #666;\n  border-bottom: 1px solid #e8e8e8;\n}\n.dialog-content[_ngcontent-%COMP%]   .rate-breakdown[_ngcontent-%COMP%]   .breakdown-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.dialog-content[_ngcontent-%COMP%]   .rate-breakdown[_ngcontent-%COMP%]   .breakdown-item[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n  font-weight: 600;\n}\n.dialog-content[_ngcontent-%COMP%]   .rate-breakdown[_ngcontent-%COMP%]   .breakdown-item.total[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  border-top: 2px solid #e8e8e8;\n  margin-top: 0.5rem;\n  font-weight: 600;\n  color: #333;\n}\n.dialog-content[_ngcontent-%COMP%]   .rate-breakdown[_ngcontent-%COMP%]   .breakdown-item.total[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-size: 1.05rem;\n}\n.dialog-content[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%] {\n  padding: 1rem;\n  background-color: #ffebee;\n  border-left: 4px solid #f44336;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #c62828;\n}\n.dialog-content[_ngcontent-%COMP%]   .error-message[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f44336;\n}\n.dialog-content[_ngcontent-%COMP%]   .processing[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 2rem;\n}\n.dialog-content[_ngcontent-%COMP%]   .processing[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e0e0e0;\n  background-color: #f9f9f9;\n}\n.dialog-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=razorpay-checkout.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RazorpayCheckoutComponent, [{
    type: Component,
    args: [{ selector: "app-razorpay-checkout", standalone: true, imports: [
      CommonModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatSnackBarModule
    ], template: `
    <div class="razorpay-dialog-container">
      <div class="dialog-header">
        <h2>Payment Checkout</h2>
        <button mat-icon-button (click)="onCancel()" class="close-btn" [disabled]="processing">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="dialog-content">
        <div class="job-summary">
          <h3>{{ data.jobTitle }}</h3>
          <p>Bid Amount: <strong>\u20B9{{ data.bidAmount.toFixed(2) }}</strong></p>
          <p>For: <strong>{{ data.consumerName }}</strong></p>
        </div>

        <div class="rate-breakdown" *ngIf="rateSplit">
          <h4>Payment Breakdown</h4>
          <div class="breakdown-item">
            <span>Bid Amount:</span>
            <strong>\u20B9{{ rateSplit.bidAmount.toFixed(2) }}</strong>
          </div>
          <div class="breakdown-item">
            <span>Platform Fee ({{ rateSplit.platformFeePercent }}%):</span>
            <strong>\u20B9{{ rateSplit.platformFee.toFixed(2) }}</strong>
          </div>
          <div class="breakdown-item">
            <span>GST on Fee ({{ rateSplit.gstPercent }}%):</span>
            <strong>\u20B9{{ rateSplit.gstOnPlatformFee.toFixed(2) }}</strong>
          </div>
          <div class="breakdown-item total">
            <span>Total Amount to Pay:</span>
            <strong>\u20B9{{ (rateSplit.bidAmount + rateSplit.platformFee + rateSplit.gstOnPlatformFee).toFixed(2) }}</strong>
          </div>
        </div>

        <div *ngIf="errorMessage" class="error-message">
          <mat-icon>error</mat-icon>
          <span>{{ errorMessage }}</span>
        </div>

        <div *ngIf="processing" class="processing">
          <mat-spinner diameter="40"></mat-spinner>
          <p>Initializing payment...</p>
        </div>
      </div>

      <div class="dialog-actions">
        <button mat-button (click)="onCancel()" [disabled]="processing">
          Cancel
        </button>
        <button
          mat-raised-button
          color="primary"
          (click)="initiatePayment()"
          [disabled]="processing || !!errorMessage"
        >
          <mat-icon>payment</mat-icon>
          Pay Now <span *ngIf="rateSplit">(\u20B9{{ (rateSplit.bidAmount + rateSplit.platformFee + rateSplit.gstOnPlatformFee).toFixed(2) }})</span>
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;eccf76e4174fb2615d9cea0cb21941e3331590bf787bf7e2363824a280296c07;C:/repos/yProHub/prohub-ui/src/app/features/payments/razorpay-checkout.component.ts */\n.razorpay-dialog-container {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  min-width: 400px;\n}\n.dialog-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 1.5rem 1.5rem 1rem 1.5rem;\n  border-bottom: 1px solid #e0e0e0;\n  margin-bottom: 1.5rem;\n}\n.dialog-header h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #333;\n}\n.dialog-header .close-btn {\n  margin: -0.5rem;\n}\n.dialog-content {\n  padding: 0 1.5rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.dialog-content .job-summary {\n  padding: 1rem;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.dialog-content .job-summary h3 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n  color: #333;\n}\n.dialog-content .job-summary p {\n  margin: 0.25rem 0;\n  color: #666;\n  font-size: 0.95rem;\n}\n.dialog-content .job-summary p strong {\n  color: #333;\n  font-weight: 600;\n}\n.dialog-content .rate-breakdown {\n  padding: 1rem;\n  background-color: #fafafa;\n  border: 1px solid #e8e8e8;\n  border-radius: 4px;\n}\n.dialog-content .rate-breakdown h4 {\n  margin: 0 0 1rem 0;\n  font-size: 0.95rem;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.dialog-content .rate-breakdown .breakdown-item {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 0;\n  font-size: 0.9rem;\n  color: #666;\n  border-bottom: 1px solid #e8e8e8;\n}\n.dialog-content .rate-breakdown .breakdown-item:last-child {\n  border-bottom: none;\n}\n.dialog-content .rate-breakdown .breakdown-item strong {\n  color: #333;\n  font-weight: 600;\n}\n.dialog-content .rate-breakdown .breakdown-item.total {\n  padding-top: 1rem;\n  border-top: 2px solid #e8e8e8;\n  margin-top: 0.5rem;\n  font-weight: 600;\n  color: #333;\n}\n.dialog-content .rate-breakdown .breakdown-item.total strong {\n  color: #4caf50;\n  font-size: 1.05rem;\n}\n.dialog-content .error-message {\n  padding: 1rem;\n  background-color: #ffebee;\n  border-left: 4px solid #f44336;\n  border-radius: 2px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #c62828;\n}\n.dialog-content .error-message mat-icon {\n  color: #f44336;\n}\n.dialog-content .processing {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 2rem;\n}\n.dialog-content .processing p {\n  margin: 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 1rem;\n  padding: 1.5rem;\n  border-top: 1px solid #e0e0e0;\n  background-color: #f9f9f9;\n}\n.dialog-actions button {\n  min-width: 120px;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n/*# sourceMappingURL=razorpay-checkout.component.css.map */\n"] }]
  }], () => [{ type: PaymentService }, { type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatSnackBar }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RazorpayCheckoutComponent, { className: "RazorpayCheckoutComponent", filePath: "src/app/features/payments/razorpay-checkout.component.ts", lineNumber: 251 });
})();

export {
  PaymentService,
  RazorpayCheckoutComponent
};
//# sourceMappingURL=chunk-IO3AMJFA.js.map

