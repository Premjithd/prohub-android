import {
  PaymentService
} from "./chunk-TQ2UVP62.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-KW3BHJG2.js";
import {
  PaymentMethodService
} from "./chunk-XAEI64UT.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-4PQFBWS5.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HKDS7TNR.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-OO5WGF54.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-RUKCNJZP.js";
import {
  getHttpErrorMessage
} from "./chunk-MBOZ5WI3.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Inject,
  NgIf,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-O3FI6JPK.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/payments/razorpay-checkout.component.ts
function RazorpayCheckoutComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 8);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Preparing checkout...");
    \u0275\u0275elementEnd()();
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2, "Agreed total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.fullBidAmount.toFixed(2));
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "div", 18)(2, "mat-icon");
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Order Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 19)(7, "div", 20)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, RazorpayCheckoutComponent_ng_container_14_div_2_div_12_Template, 5, 1, "div", 21);
    \u0275\u0275elementStart(13, "div", 20)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 20)(19, "span");
    \u0275\u0275text(20, "GST on platform fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 22)(24, "span");
    \u0275\u0275text(25, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 23);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.isPartial ? "This payment" : "Service charge");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.rateSplit.bidAmount.toFixed(2));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isPartial);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("Platform fee (", ctx_r1.rateSplit.platformFeePercent, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.rateSplit.platformFee.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.rateSplit.gstOnPlatformFee.toFixed(2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r1.totalAmount.toFixed(2));
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "div", 18)(2, "mat-icon");
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Billing Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatAddress(ctx_r1.billingAddress));
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function RazorpayCheckoutComponent_ng_container_14_mat_spinner_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 27);
  }
}
function RazorpayCheckoutComponent_ng_container_14_mat_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "lock");
    \u0275\u0275elementEnd();
  }
}
function RazorpayCheckoutComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275template(2, RazorpayCheckoutComponent_ng_container_14_div_2_Template, 28, 7, "div", 10)(3, RazorpayCheckoutComponent_ng_container_14_div_3_Template, 8, 1, "div", 11)(4, RazorpayCheckoutComponent_ng_container_14_div_4_Template, 4, 1, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "button", 14);
    \u0275\u0275listener("click", function RazorpayCheckoutComponent_ng_container_14_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(7, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 15);
    \u0275\u0275listener("click", function RazorpayCheckoutComponent_ng_container_14_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.initiatePayment());
    });
    \u0275\u0275template(9, RazorpayCheckoutComponent_ng_container_14_mat_spinner_9_Template, 1, 0, "mat-spinner", 16)(10, RazorpayCheckoutComponent_ng_container_14_mat_icon_10_Template, 2, 0, "mat-icon", 6);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.rateSplit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.billingAddress);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.errorMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.processing);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.processing || !!ctx_r1.errorMessage || !ctx_r1.rateSplit);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.processing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.processing);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.processing ? "Processing..." : "Pay \u20B9" + (ctx_r1.rateSplit ? ctx_r1.totalAmount.toFixed(2) : ""), " ");
  }
}
var RazorpayCheckoutComponent = class _RazorpayCheckoutComponent {
  paymentService;
  pmService;
  dialogRef;
  data;
  snackBar;
  cdr;
  // Order state
  processing = false;
  errorMessage = "";
  rateSplit;
  isPartial = false;
  fullBidAmount = 0;
  scriptLoaded = false;
  orderData = null;
  destroy$ = new Subject();
  billingAddress = null;
  constructor(paymentService, pmService, dialogRef, data, snackBar, cdr) {
    this.paymentService = paymentService;
    this.pmService = pmService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.snackBar = snackBar;
    this.cdr = cdr;
    this.loadRazorpayScript();
  }
  ngOnInit() {
    this.fetchPaymentOrder();
    this.loadCheckoutContext();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  get totalAmount() {
    if (!this.rateSplit)
      return 0;
    return this.rateSplit.bidAmount + this.rateSplit.platformFee + this.rateSplit.gstOnPlatformFee;
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
      this.cdr.markForCheck();
    };
    document.head.appendChild(script);
  }
  fetchPaymentOrder() {
    this.processing = true;
    this.errorMessage = "";
    const request = {
      jobId: this.data.jobId,
      bidId: this.data.bidId,
      amount: this.data.bidAmount,
      principalAmount: this.data.principalAmount
    };
    this.paymentService.createPaymentOrder(request).pipe(takeUntil(this.destroy$)).subscribe({
      next: (order) => {
        this.orderData = order;
        this.rateSplit = {
          bidAmount: order.principalAmount,
          platformFeePercent: 10,
          platformFee: order.platformFee,
          gstPercent: 18,
          gstOnPlatformFee: order.gstOnPlatformFee,
          proPayOut: order.proPayout
        };
        this.isPartial = order.principalAmount + 0.01 < order.bidAmount;
        this.fullBidAmount = order.bidAmount;
        this.processing = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.errorMessage = getHttpErrorMessage(error, "Failed to initialize payment. Please try again.");
        this.processing = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadCheckoutContext() {
    this.pmService.getCheckoutContext().pipe(takeUntil(this.destroy$)).subscribe({
      next: (ctx) => {
        this.billingAddress = ctx.billingAddress;
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
  }
  initiatePayment() {
    if (!this.orderData) {
      this.errorMessage = "Payment order data not available. Please try again.";
      this.cdr.markForCheck();
      return;
    }
    if (this.orderData.key === "rzp_test_mock") {
      this.processing = true;
      this.errorMessage = "";
      this.cdr.markForCheck();
      this.verifyPayment({
        razorpay_order_id: this.orderData.orderId,
        razorpay_payment_id: "pay_mock_" + Date.now(),
        razorpay_signature: "mock_signature"
      });
      return;
    }
    if (!this.scriptLoaded || !window.Razorpay) {
      this.errorMessage = "Payment gateway not loaded. Please refresh and try again.";
      this.cdr.markForCheck();
      return;
    }
    this.processing = true;
    this.errorMessage = "";
    this.cdr.markForCheck();
    try {
      const vpa = this.data.prefillVpa;
      const options = {
        key: this.orderData.key,
        amount: this.orderData.totalAmount * 100,
        currency: this.orderData.currency,
        order_id: this.orderData.orderId,
        name: "yProHub",
        description: `Payment for: ${this.data.jobTitle}`,
        customer_notify: 1,
        prefill: __spreadValues({
          name: this.data.consumerName,
          email: this.data.consumerEmail,
          contact: this.data.consumerPhone.replace(/\D/g, "")
        }, vpa ? { vpa } : {}),
        theme: { color: "#667eea" },
        handler: (response) => {
          this.verifyPayment(response);
        },
        modal: {
          ondismiss: () => {
            this.processing = false;
            this.cdr.markForCheck();
            this.snackBar.open("Payment cancelled", "Close", { duration: 3e3 });
          }
        }
      };
      const rzp1 = new window.Razorpay(options);
      rzp1.open();
      this.processing = false;
      this.cdr.markForCheck();
    } catch (err) {
      this.processing = false;
      this.errorMessage = "Failed to open payment gateway. Please try again.";
      this.cdr.markForCheck();
    }
  }
  verifyPayment(response) {
    this.processing = true;
    this.cdr.markForCheck();
    this.paymentService.verifyPayment({
      razorpayOrderId: response.razorpay_order_id,
      razorpayPaymentId: response.razorpay_payment_id,
      razorpaySignature: response.razorpay_signature
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        this.processing = false;
        this.cdr.markForCheck();
        this.snackBar.open("Payment successful! Job activated.", "Close", { duration: 5e3 });
        this.dialogRef.close({ success: true, paymentId: result.paymentId, jobStatus: result.jobStatus });
      },
      error: () => {
        this.processing = false;
        this.errorMessage = "Payment verification failed. Please contact support.";
        this.cdr.markForCheck();
      }
    });
  }
  formatAddress(addr) {
    if (!addr)
      return "";
    return [addr.houseNameNumber, addr.street1, addr.street2, addr.city, addr.state, addr.zipPostalCode].filter(Boolean).join(", ");
  }
  onCancel() {
    if (!this.processing)
      this.dialogRef.close();
  }
  static \u0275fac = function RazorpayCheckoutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RazorpayCheckoutComponent)(\u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(PaymentMethodService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RazorpayCheckoutComponent, selectors: [["app-razorpay-checkout"]], decls: 15, vars: 4, consts: [[1, "rzp-wrap"], [1, "rzp-head"], [1, "rzp-head-icon"], [1, "rzp-head-text"], ["mat-icon-button", "", 1, "rzp-close", 3, "click", "disabled"], ["class", "rzp-init-loading", 4, "ngIf"], [4, "ngIf"], [1, "rzp-init-loading"], ["diameter", "34"], [1, "rzp-body"], ["class", "rzp-section", 4, "ngIf"], ["class", "rzp-section rzp-addr-section", 4, "ngIf"], ["class", "rzp-error", 4, "ngIf"], [1, "rzp-footer"], ["mat-button", "", 1, "rzp-cancel-btn", 3, "click", "disabled"], [1, "rzp-pay-btn", 3, "click", "disabled"], ["diameter", "16", 4, "ngIf"], [1, "rzp-section"], [1, "rzp-section-header"], [1, "rzp-breakdown"], [1, "rzp-bd-row"], ["class", "rzp-bd-row", 4, "ngIf"], [1, "rzp-bd-total"], [1, "rzp-total-val"], [1, "rzp-section", "rzp-addr-section"], [1, "rzp-addr-text"], [1, "rzp-error"], ["diameter", "16"]], template: function RazorpayCheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon");
      \u0275\u0275text(4, "lock");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "h2");
      \u0275\u0275text(7, "Complete Payment");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275listener("click", function RazorpayCheckoutComponent_Template_button_click_10_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(11, "mat-icon");
      \u0275\u0275text(12, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(13, RazorpayCheckoutComponent_div_13_Template, 4, 0, "div", 5)(14, RazorpayCheckoutComponent_ng_container_14_Template, 12, 8, "ng-container", 6);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.data.jobTitle);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.processing);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.processing && !ctx.rateSplit && !ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.rateSplit || ctx.errorMessage);
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
  ], styles: ["\n\n.rzp-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 360px;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.rzp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.2rem 1.5rem;\n  border-bottom: 1px solid #eaecf5;\n}\n.rzp-head-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rzp-head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.rzp-head-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rzp-head-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.1rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.rzp-head-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #888;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rzp-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #aaa;\n}\n.rzp-init-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem 2rem;\n}\n.rzp-init-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #888;\n  font-size: 0.9rem;\n}\n.rzp-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.5rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.rzp-section[_ngcontent-%COMP%] {\n  background: #fafbff;\n  border: 1px solid #eaecf5;\n  border-radius: 12px;\n  padding: 0.9rem 1rem;\n}\n.rzp-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 0.85rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.rzp-section-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n  color: #667eea;\n}\n.rzp-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.rzp-bd-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.38rem 0;\n  font-size: 0.87rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f8;\n}\n.rzp-bd-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rzp-bd-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6rem 0 0.1rem;\n  border-top: 2px solid #eaecf5;\n  margin-top: 0.2rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #222;\n}\n.rzp-total-val[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 1.1rem;\n}\n.rzp-addr-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #555;\n  line-height: 1.5;\n}\n.rzp-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 0.9rem;\n  background: #fff0f0;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  color: #c62828;\n  font-size: 0.87rem;\n}\n.rzp-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rzp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #eaecf5;\n  background: white;\n}\n.rzp-cancel-btn[_ngcontent-%COMP%] {\n  color: #888;\n}\n.rzp-pay-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.65rem 1.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.rzp-pay-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rzp-pay-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.91;\n}\n.rzp-pay-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=razorpay-checkout.component.css.map */"] });
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
    <div class="rzp-wrap">

      <!-- Header -->
      <div class="rzp-head">
        <div class="rzp-head-icon">
          <mat-icon>lock</mat-icon>
        </div>
        <div class="rzp-head-text">
          <h2>Complete Payment</h2>
          <p>{{ data.jobTitle }}</p>
        </div>
        <button mat-icon-button class="rzp-close" (click)="onCancel()" [disabled]="processing">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <!-- Full-screen loader while order is fetching -->
      <div class="rzp-init-loading" *ngIf="processing && !rateSplit && !errorMessage">
        <mat-spinner diameter="34"></mat-spinner>
        <p>Preparing checkout...</p>
      </div>

      <ng-container *ngIf="rateSplit || errorMessage">
        <div class="rzp-body">

          <!-- \u2500\u2500 Order Summary \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
          <div class="rzp-section" *ngIf="rateSplit">
            <div class="rzp-section-header">
              <mat-icon>receipt_long</mat-icon>
              <span>Order Summary</span>
            </div>
            <div class="rzp-breakdown">
              <div class="rzp-bd-row">
                <span>{{ isPartial ? 'This payment' : 'Service charge' }}</span>
                <span>\u20B9{{ rateSplit.bidAmount.toFixed(2) }}</span>
              </div>
              <div class="rzp-bd-row" *ngIf="isPartial">
                <span>Agreed total</span>
                <span>\u20B9{{ fullBidAmount.toFixed(2) }}</span>
              </div>
              <div class="rzp-bd-row">
                <span>Platform fee ({{ rateSplit.platformFeePercent }}%)</span>
                <span>\u20B9{{ rateSplit.platformFee.toFixed(2) }}</span>
              </div>
              <div class="rzp-bd-row">
                <span>GST on platform fee</span>
                <span>\u20B9{{ rateSplit.gstOnPlatformFee.toFixed(2) }}</span>
              </div>
              <div class="rzp-bd-total">
                <span>Total</span>
                <span class="rzp-total-val">\u20B9{{ totalAmount.toFixed(2) }}</span>
              </div>
            </div>
          </div>

          <!-- \u2500\u2500 Billing Address \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
          <div class="rzp-section rzp-addr-section" *ngIf="billingAddress">
            <div class="rzp-section-header">
              <mat-icon>location_on</mat-icon>
              <span>Billing Address</span>
            </div>
            <p class="rzp-addr-text">{{ formatAddress(billingAddress) }}</p>
          </div>

          <!-- Error -->
          <div class="rzp-error" *ngIf="errorMessage">
            <mat-icon>error_outline</mat-icon> {{ errorMessage }}
          </div>

        </div>

        <!-- Footer -->
        <div class="rzp-footer">
          <button mat-button (click)="onCancel()" [disabled]="processing" class="rzp-cancel-btn">Cancel</button>
          <button
            class="rzp-pay-btn"
            (click)="initiatePayment()"
            [disabled]="processing || !!errorMessage || !rateSplit">
            <mat-spinner *ngIf="processing" diameter="16"></mat-spinner>
            <mat-icon *ngIf="!processing">lock</mat-icon>
            {{ processing ? 'Processing...' : ('Pay \u20B9' + (rateSplit ? totalAmount.toFixed(2) : '')) }}
          </button>
        </div>
      </ng-container>

    </div>
  `, styles: ["/* angular:styles/component:scss;2d89e5fbb8daa49ebae1bbb4f80dee4b8cf7d96063bbee59b2e7ebbc0ead171b;C:/repos/yProHub/prohub-ui/src/app/features/payments/razorpay-checkout.component.ts */\n.rzp-wrap {\n  width: 100%;\n  min-width: 360px;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.rzp-head {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.2rem 1.5rem;\n  border-bottom: 1px solid #eaecf5;\n}\n.rzp-head-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rzp-head-icon mat-icon {\n  color: white;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.rzp-head-text {\n  flex: 1;\n  min-width: 0;\n}\n.rzp-head-text h2 {\n  margin: 0 0 0.1rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.rzp-head-text p {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #888;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rzp-close {\n  flex-shrink: 0;\n  color: #aaa;\n}\n.rzp-init-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem 2rem;\n}\n.rzp-init-loading p {\n  margin: 0;\n  color: #888;\n  font-size: 0.9rem;\n}\n.rzp-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.5rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.rzp-section {\n  background: #fafbff;\n  border: 1px solid #eaecf5;\n  border-radius: 12px;\n  padding: 0.9rem 1rem;\n}\n.rzp-section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 0.85rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.rzp-section-header mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n  color: #667eea;\n}\n.rzp-breakdown {\n  display: flex;\n  flex-direction: column;\n}\n.rzp-bd-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.38rem 0;\n  font-size: 0.87rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f8;\n}\n.rzp-bd-row:last-child {\n  border-bottom: none;\n}\n.rzp-bd-total {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6rem 0 0.1rem;\n  border-top: 2px solid #eaecf5;\n  margin-top: 0.2rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #222;\n}\n.rzp-total-val {\n  color: #2e7d32;\n  font-size: 1.1rem;\n}\n.rzp-addr-text {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #555;\n  line-height: 1.5;\n}\n.rzp-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 0.9rem;\n  background: #fff0f0;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  color: #c62828;\n  font-size: 0.87rem;\n}\n.rzp-error mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rzp-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #eaecf5;\n  background: white;\n}\n.rzp-cancel-btn {\n  color: #888;\n}\n.rzp-pay-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.65rem 1.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.rzp-pay-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rzp-pay-btn:hover:not(:disabled) {\n  opacity: 0.91;\n}\n.rzp-pay-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=razorpay-checkout.component.css.map */\n"] }]
  }], () => [{ type: PaymentService }, { type: PaymentMethodService }, { type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatSnackBar }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RazorpayCheckoutComponent, { className: "RazorpayCheckoutComponent", filePath: "src/app/features/payments/razorpay-checkout.component.ts", lineNumber: 276 });
})();

export {
  RazorpayCheckoutComponent
};
//# sourceMappingURL=chunk-FUFUDZ5S.js.map

