import {
  PaymentService
} from "./chunk-B73DGLO2.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-WZS53GDD.js";
import {
  PaymentMethodService
} from "./chunk-FATKVMQ4.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-YVVMVIYW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XYXJ3G2H.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-JRMOFBWD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-GBPGCUBR.js";
import {
  getHttpErrorMessage
} from "./chunk-MBOZ5WI3.js";
import {
  Router
} from "./chunk-F22IK7JB.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Inject,
  NgForOf,
  NgIf,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
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
} from "./chunk-CTKGZTQY.js";
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
    \u0275\u0275elementStart(0, "div", 21)(1, "span");
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
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "mat-icon");
    \u0275\u0275text(3, "receipt_long");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Order Summary");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 20)(7, "div", 21)(8, "span");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, RazorpayCheckoutComponent_ng_container_14_div_2_div_12_Template, 5, 1, "div", 22);
    \u0275\u0275elementStart(13, "div", 21)(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 21)(19, "span");
    \u0275\u0275text(20, "GST on platform fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 23)(24, "span");
    \u0275\u0275text(25, "Total");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 24);
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
function RazorpayCheckoutComponent_ng_container_14_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 34)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "You have no saved methods \u2014 ");
    \u0275\u0275elementStart(5, "a", 35);
    \u0275\u0275listener("click", function RazorpayCheckoutComponent_ng_container_14_div_3_div_6_Template_a_click_5_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.goToSettings());
    });
    \u0275\u0275text(6, "add one");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " to reuse it next time.");
    \u0275\u0275elementEnd()();
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_3_div_8_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 38);
    \u0275\u0275text(1, "Default");
    \u0275\u0275elementEnd();
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_3_div_8_mat_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 39);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_3_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275listener("click", function RazorpayCheckoutComponent_ng_container_14_div_3_div_8_Template_div_click_0_listener() {
      const m_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectMethod(m_r6.id));
    });
    \u0275\u0275elementStart(1, "mat-icon", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "span", 32);
    \u0275\u0275text(5);
    \u0275\u0275template(6, RazorpayCheckoutComponent_ng_container_14_div_3_div_8_span_6_Template, 2, 0, "span", 36);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 37);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, RazorpayCheckoutComponent_ng_container_14_div_3_div_8_mat_icon_9_Template, 2, 0, "mat-icon", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("active", ctx_r1.selectedKey === m_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.type === "UPI" ? "account_balance_wallet" : "account_balance");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", m_r6.label || (m_r6.type === "UPI" ? "UPI" : "Bank account"), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r6.isDefault);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.type === "UPI" ? m_r6.upiVpa : m_r6.bankAccountNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedKey === m_r6.id);
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_3_mat_icon_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 39);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 19)(2, "mat-icon");
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Payment Method");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, RazorpayCheckoutComponent_ng_container_14_div_3_div_6_Template, 8, 0, "div", 26);
    \u0275\u0275elementStart(7, "div", 27);
    \u0275\u0275template(8, RazorpayCheckoutComponent_ng_container_14_div_3_div_8_Template, 10, 7, "div", 28);
    \u0275\u0275elementStart(9, "div", 29);
    \u0275\u0275listener("click", function RazorpayCheckoutComponent_ng_container_14_div_3_Template_div_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectMethod("other"));
    });
    \u0275\u0275elementStart(10, "mat-icon", 30);
    \u0275\u0275text(11, "more_horiz");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 31)(13, "span", 32);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, RazorpayCheckoutComponent_ng_container_14_div_3_mat_icon_15_Template, 2, 0, "mat-icon", 33);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.paymentMethods.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.paymentMethods);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedKey === "other");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.paymentMethods.length ? "Other method" : "Enter payment details");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedKey === "other");
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40)(1, "div", 19)(2, "mat-icon");
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "Billing Address");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "p", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.formatAddress(ctx_r1.billingAddress));
  }
}
function RazorpayCheckoutComponent_ng_container_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "mat-icon");
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
function RazorpayCheckoutComponent_ng_container_14_mat_spinner_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 43);
  }
}
function RazorpayCheckoutComponent_ng_container_14_mat_icon_11_Template(rf, ctx) {
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
    \u0275\u0275template(2, RazorpayCheckoutComponent_ng_container_14_div_2_Template, 28, 7, "div", 10)(3, RazorpayCheckoutComponent_ng_container_14_div_3_Template, 16, 6, "div", 11)(4, RazorpayCheckoutComponent_ng_container_14_div_4_Template, 8, 1, "div", 12)(5, RazorpayCheckoutComponent_ng_container_14_div_5_Template, 4, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "button", 15);
    \u0275\u0275listener("click", function RazorpayCheckoutComponent_ng_container_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCancel());
    });
    \u0275\u0275text(8, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 16);
    \u0275\u0275listener("click", function RazorpayCheckoutComponent_ng_container_14_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.initiatePayment());
    });
    \u0275\u0275template(10, RazorpayCheckoutComponent_ng_container_14_mat_spinner_10_Template, 1, 0, "mat-spinner", 17)(11, RazorpayCheckoutComponent_ng_container_14_mat_icon_11_Template, 2, 0, "mat-icon", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.rateSplit);
    \u0275\u0275advance();
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
  router;
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
  // Payment method picker
  paymentMethods = [];
  selectedKey = null;
  constructor(paymentService, pmService, dialogRef, data, snackBar, cdr, router) {
    this.paymentService = paymentService;
    this.pmService = pmService;
    this.dialogRef = dialogRef;
    this.data = data;
    this.snackBar = snackBar;
    this.cdr = cdr;
    this.router = router;
    this.loadRazorpayScript();
  }
  selectMethod(key) {
    this.selectedKey = key;
  }
  /** VPA to hand off to Razorpay — only when a saved UPI method is selected. */
  get selectedVpa() {
    if (this.selectedKey === null || this.selectedKey === "other")
      return void 0;
    const m = this.paymentMethods.find((x) => x.id === this.selectedKey);
    return m && m.type === "UPI" ? m.upiVpa ?? void 0 : void 0;
  }
  goToSettings() {
    this.dialogRef.close();
    this.router.navigate(["/settings"]);
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
        this.paymentMethods = ctx.paymentMethods ?? [];
        const def = this.paymentMethods.find((m) => m.isDefault) ?? this.paymentMethods[0];
        this.selectedKey = def ? def.id : "other";
        this.cdr.markForCheck();
      },
      error: () => {
        this.selectedKey = "other";
        this.cdr.markForCheck();
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
      const vpa = this.selectedVpa ?? this.data.prefillVpa;
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
    return new (__ngFactoryType__ || _RazorpayCheckoutComponent)(\u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(PaymentMethodService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RazorpayCheckoutComponent, selectors: [["app-razorpay-checkout"]], decls: 15, vars: 4, consts: [[1, "rzp-wrap"], [1, "rzp-head"], [1, "rzp-head-icon"], [1, "rzp-head-text"], ["mat-icon-button", "", 1, "rzp-close", 3, "click", "disabled"], ["class", "rzp-init-loading", 4, "ngIf"], [4, "ngIf"], [1, "rzp-init-loading"], ["diameter", "34"], [1, "rzp-body"], ["class", "rzp-section", 4, "ngIf"], ["class", "rzp-section rzp-methods-section", 4, "ngIf"], ["class", "rzp-section rzp-addr-section", 4, "ngIf"], ["class", "rzp-error", 4, "ngIf"], [1, "rzp-footer"], ["mat-button", "", 1, "rzp-cancel-btn", 3, "click", "disabled"], [1, "rzp-pay-btn", 3, "click", "disabled"], ["diameter", "16", 4, "ngIf"], [1, "rzp-section"], [1, "rzp-section-header"], [1, "rzp-breakdown"], [1, "rzp-bd-row"], ["class", "rzp-bd-row", 4, "ngIf"], [1, "rzp-bd-total"], [1, "rzp-total-val"], [1, "rzp-section", "rzp-methods-section"], ["class", "rzp-no-methods", 4, "ngIf"], [1, "rzp-methods"], ["class", "rzp-method-row", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "rzp-method-row", 3, "click"], [1, "rzp-method-icon"], [1, "rzp-method-info"], [1, "rzp-method-label"], ["class", "rzp-method-check", 4, "ngIf"], [1, "rzp-no-methods"], [1, "rzp-add-link", 3, "click"], ["class", "rzp-def-pill", 4, "ngIf"], [1, "rzp-method-sub"], [1, "rzp-def-pill"], [1, "rzp-method-check"], [1, "rzp-section", "rzp-addr-section"], [1, "rzp-addr-text"], [1, "rzp-error"], ["diameter", "16"]], template: function RazorpayCheckoutComponent_Template(rf, ctx) {
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
      \u0275\u0275template(13, RazorpayCheckoutComponent_div_13_Template, 4, 0, "div", 5)(14, RazorpayCheckoutComponent_ng_container_14_Template, 13, 9, "ng-container", 6);
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
    NgForOf,
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
  ], styles: ["\n\n.rzp-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 360px;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.rzp-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.2rem 1.5rem;\n  border-bottom: 1px solid #eaecf5;\n}\n.rzp-head-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rzp-head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.rzp-head-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rzp-head-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.1rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.rzp-head-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #888;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rzp-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #aaa;\n}\n.rzp-init-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem 2rem;\n}\n.rzp-init-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #888;\n  font-size: 0.9rem;\n}\n.rzp-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.5rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.rzp-section[_ngcontent-%COMP%] {\n  background: #fafbff;\n  border: 1px solid #eaecf5;\n  border-radius: 12px;\n  padding: 0.9rem 1rem;\n}\n.rzp-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 0.85rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.rzp-section-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n  color: #667eea;\n}\n.rzp-breakdown[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.rzp-bd-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.38rem 0;\n  font-size: 0.87rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f8;\n}\n.rzp-bd-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.rzp-bd-total[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6rem 0 0.1rem;\n  border-top: 2px solid #eaecf5;\n  margin-top: 0.2rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #222;\n}\n.rzp-total-val[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 1.1rem;\n}\n.rzp-addr-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #555;\n  line-height: 1.5;\n}\n.rzp-methods[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.rzp-method-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.6rem 0.75rem;\n  border: 1px solid #e4e7f2;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n}\n.rzp-method-row[_ngcontent-%COMP%]:hover {\n  border-color: #c3c9e8;\n}\n.rzp-method-row.active[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f3f1ff;\n}\n.rzp-method-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rzp-method-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.rzp-method-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #222;\n}\n.rzp-method-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.rzp-def-pill[_ngcontent-%COMP%] {\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #2e7d32;\n  background: #e8f5e9;\n  border-radius: 6px;\n  padding: 0.08rem 0.4rem;\n}\n.rzp-method-check[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rzp-no-methods[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  margin-bottom: 0.6rem;\n  font-size: 0.82rem;\n  color: #777;\n}\n.rzp-no-methods[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: #667eea;\n}\n.rzp-add-link[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.rzp-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 0.9rem;\n  background: #fff0f0;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  color: #c62828;\n  font-size: 0.87rem;\n}\n.rzp-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rzp-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #eaecf5;\n  background: white;\n}\n.rzp-cancel-btn[_ngcontent-%COMP%] {\n  color: #888;\n}\n.rzp-pay-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.65rem 1.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.rzp-pay-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rzp-pay-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.91;\n}\n.rzp-pay-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=razorpay-checkout.component.css.map */"] });
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

          <!-- \u2500\u2500 Payment Method \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
          <div class="rzp-section rzp-methods-section" *ngIf="rateSplit">
            <div class="rzp-section-header">
              <mat-icon>account_balance_wallet</mat-icon>
              <span>Payment Method</span>
            </div>

            <div class="rzp-no-methods" *ngIf="paymentMethods.length === 0">
              <mat-icon>info</mat-icon>
              <span>You have no saved methods \u2014
                <a class="rzp-add-link" (click)="goToSettings()">add one</a> to reuse it next time.</span>
            </div>

            <div class="rzp-methods">
              <!-- Saved methods -->
              <div class="rzp-method-row"
                   *ngFor="let m of paymentMethods"
                   [class.active]="selectedKey === m.id"
                   (click)="selectMethod(m.id)">
                <mat-icon class="rzp-method-icon">{{ m.type === 'UPI' ? 'account_balance_wallet' : 'account_balance' }}</mat-icon>
                <div class="rzp-method-info">
                  <span class="rzp-method-label">
                    {{ m.label || (m.type === 'UPI' ? 'UPI' : 'Bank account') }}
                    <span class="rzp-def-pill" *ngIf="m.isDefault">Default</span>
                  </span>
                  <span class="rzp-method-sub">{{ m.type === 'UPI' ? m.upiVpa : m.bankAccountNumber }}</span>
                </div>
                <mat-icon class="rzp-method-check" *ngIf="selectedKey === m.id">check_circle</mat-icon>
              </div>

              <!-- Other / manual entry -->
              <div class="rzp-method-row"
                   [class.active]="selectedKey === 'other'"
                   (click)="selectMethod('other')">
                <mat-icon class="rzp-method-icon">more_horiz</mat-icon>
                <div class="rzp-method-info">
                  <span class="rzp-method-label">{{ paymentMethods.length ? 'Other method' : 'Enter payment details' }}</span>
                </div>
                <mat-icon class="rzp-method-check" *ngIf="selectedKey === 'other'">check_circle</mat-icon>
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
  `, styles: ["/* angular:styles/component:scss;aa5931d6ec3c8f406e303b51c0f1f2169381fa01282a0268bc1014a8f6657e2e;C:/repos/yProHub/prohub-ui/src/app/features/payments/razorpay-checkout.component.ts */\n.rzp-wrap {\n  width: 100%;\n  min-width: 360px;\n  max-width: 520px;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.rzp-head {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.2rem 1.5rem;\n  border-bottom: 1px solid #eaecf5;\n}\n.rzp-head-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.rzp-head-icon mat-icon {\n  color: white;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.rzp-head-text {\n  flex: 1;\n  min-width: 0;\n}\n.rzp-head-text h2 {\n  margin: 0 0 0.1rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.rzp-head-text p {\n  margin: 0;\n  font-size: 0.82rem;\n  color: #888;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.rzp-close {\n  flex-shrink: 0;\n  color: #aaa;\n}\n.rzp-init-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem 2rem;\n}\n.rzp-init-loading p {\n  margin: 0;\n  color: #888;\n  font-size: 0.9rem;\n}\n.rzp-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.5rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.rzp-section {\n  background: #fafbff;\n  border: 1px solid #eaecf5;\n  border-radius: 12px;\n  padding: 0.9rem 1rem;\n}\n.rzp-section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 0.85rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: #888;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.rzp-section-header mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n  color: #667eea;\n}\n.rzp-breakdown {\n  display: flex;\n  flex-direction: column;\n}\n.rzp-bd-row {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.38rem 0;\n  font-size: 0.87rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f8;\n}\n.rzp-bd-row:last-child {\n  border-bottom: none;\n}\n.rzp-bd-total {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.6rem 0 0.1rem;\n  border-top: 2px solid #eaecf5;\n  margin-top: 0.2rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #222;\n}\n.rzp-total-val {\n  color: #2e7d32;\n  font-size: 1.1rem;\n}\n.rzp-addr-text {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #555;\n  line-height: 1.5;\n}\n.rzp-methods {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.rzp-method-row {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.6rem 0.75rem;\n  border: 1px solid #e4e7f2;\n  border-radius: 10px;\n  cursor: pointer;\n  transition: border-color 0.15s, background 0.15s;\n}\n.rzp-method-row:hover {\n  border-color: #c3c9e8;\n}\n.rzp-method-row.active {\n  border-color: #667eea;\n  background: #f3f1ff;\n}\n.rzp-method-icon {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rzp-method-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n}\n.rzp-method-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.88rem;\n  font-weight: 600;\n  color: #222;\n}\n.rzp-method-sub {\n  font-size: 0.8rem;\n  color: #888;\n}\n.rzp-def-pill {\n  font-size: 0.62rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #2e7d32;\n  background: #e8f5e9;\n  border-radius: 6px;\n  padding: 0.08rem 0.4rem;\n}\n.rzp-method-check {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rzp-no-methods {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.5rem;\n  margin-bottom: 0.6rem;\n  font-size: 0.82rem;\n  color: #777;\n}\n.rzp-no-methods mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: #667eea;\n}\n.rzp-add-link {\n  color: #667eea;\n  font-weight: 600;\n  cursor: pointer;\n  text-decoration: underline;\n}\n.rzp-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 0.9rem;\n  background: #fff0f0;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  color: #c62828;\n  font-size: 0.87rem;\n}\n.rzp-error mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rzp-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #eaecf5;\n  background: white;\n}\n.rzp-cancel-btn {\n  color: #888;\n}\n.rzp-pay-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.65rem 1.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.rzp-pay-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.rzp-pay-btn:hover:not(:disabled) {\n  opacity: 0.91;\n}\n.rzp-pay-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=razorpay-checkout.component.css.map */\n"] }]
  }], () => [{ type: PaymentService }, { type: PaymentMethodService }, { type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatSnackBar }, { type: ChangeDetectorRef }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RazorpayCheckoutComponent, { className: "RazorpayCheckoutComponent", filePath: "src/app/features/payments/razorpay-checkout.component.ts", lineNumber: 375 });
})();

export {
  RazorpayCheckoutComponent
};
//# sourceMappingURL=chunk-QAEWI4HT.js.map

