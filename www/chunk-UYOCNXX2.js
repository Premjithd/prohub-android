import {
  MatTabsModule
} from "./chunk-4G7MVHXG.js";
import {
  PaymentService,
  RazorpayCheckoutComponent
} from "./chunk-G3KJX327.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-LJRZZZLH.js";
import {
  MatExpansionModule
} from "./chunk-24Y7JLT5.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-DPWMA3BB.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-JXK3CY2S.js";
import {
  MatTooltipModule
} from "./chunk-EBH4ZGAC.js";
import {
  MatTooltip
} from "./chunk-CD562ZEU.js";
import {
  JobService
} from "./chunk-TUOLJDPF.js";
import "./chunk-HU3FUKMP.js";
import "./chunk-Z5YC3QOU.js";
import "./chunk-YFVGD4AB.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-MQXTVBAG.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-LJCCDA2I.js";
import {
  MatFormField,
  MatHint,
  MatLabel
} from "./chunk-RAZWGAZW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KUT34PAX.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-LWBGNZR5.js";
import "./chunk-B52SAYO3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-GE3YQJYL.js";
import "./chunk-CSFNIUM5.js";
import {
  ReviewService
} from "./chunk-QJYJSDJO.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  ReactiveFormsModule
} from "./chunk-QP32PFWE.js";
import {
  Auth
} from "./chunk-A4EHLAJD.js";
import "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  Router,
  RouterModule
} from "./chunk-NMZ5GJTW.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ANTPJ2CK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/pending-jobs/pending-job-details.ts
var _c0 = () => [1, 2, 3, 4, 5];
function PendingJobDetailsComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.cancelJob());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r1.cancellingJob);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.cancellingJob ? "Cancelling..." : "Cancel Job", " ");
  }
}
function PendingJobDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading job details...");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function PendingJobDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function PendingJobDetailsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Payment completed for job");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobDetailsComponent_div_16_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "h3");
    \u0275\u0275text(2, "Attachments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 40)(4, "mat-icon");
    \u0275\u0275text(5, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 41);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.job.attachments);
  }
}
function PendingJobDetailsComponent_div_16_div_59_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 30);
    \u0275\u0275text(2, "Bid Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const assignedBid_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 1, assignedBid_r4.bidAmount, "1.2-2"));
  }
}
function PendingJobDetailsComponent_div_16_div_59_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 30);
    \u0275\u0275text(2, "Bid Message:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const assignedBid_r4 = \u0275\u0275nextContext().ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(assignedBid_r4.bidMessage);
  }
}
function PendingJobDetailsComponent_div_16_div_59_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 50);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_59_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.initiatePaymentForAssignedJob());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "payment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Make Payment ");
    \u0275\u0275elementEnd();
  }
}
function PendingJobDetailsComponent_div_16_div_59_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Payment received \u2014 waiting for professional to confirm ");
    \u0275\u0275elementEnd();
  }
}
function PendingJobDetailsComponent_div_16_div_59_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "h3")(2, "mat-icon");
    \u0275\u0275text(3, "person_check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Assigned Professional ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 43)(6, "div", 44)(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 45);
    \u0275\u0275template(12, PendingJobDetailsComponent_div_16_div_59_div_12_Template, 6, 4, "div", 46);
    \u0275\u0275elementStart(13, "div", 29)(14, "span", 30);
    \u0275\u0275text(15, "Bid Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 31);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 29)(19, "span", 30);
    \u0275\u0275text(20, "Bid Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 31);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(24, PendingJobDetailsComponent_div_16_div_59_div_24_Template, 5, 1, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 47);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_59_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToMessagesPage());
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28, " Message ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, PendingJobDetailsComponent_div_16_div_59_button_29_Template, 4, 0, "button", 48)(30, PendingJobDetailsComponent_div_16_div_59_div_30_Template, 4, 0, "div", 49);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const assignedBid_r4 = ctx.ngIf;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.job.assignedPro.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.job.assignedPro.proName || "Professional");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", assignedBid_r4.bidAmount);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getBidStatus(assignedBid_r4.status));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(23, 8, assignedBid_r4.createdAt, "MMM dd, yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", assignedBid_r4.bidMessage);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.job.status === "Bid Accepted");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.job.status === "Payment Made");
  }
}
function PendingJobDetailsComponent_div_16_div_60_div_1_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 60)(1, "strong");
    \u0275\u0275text(2, "Your reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.disputeReason);
  }
}
function PendingJobDetailsComponent_div_16_div_60_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-icon", 57);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 58)(4, "h3");
    \u0275\u0275text(5, "Dispute Under Review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Your dispute has been raised and is being reviewed. The professional may resubmit after addressing your concerns.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PendingJobDetailsComponent_div_16_div_60_div_1_p_8_Template, 4, 1, "p", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r1.disputeReason);
  }
}
function PendingJobDetailsComponent_div_16_div_60_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 62);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_60_div_2_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.verifyCompletion());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Accept Work Anyway ");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobDetailsComponent_div_16_div_60_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63)(1, "mat-icon", 64);
    \u0275\u0275text(2, "assignment_turned_in");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 65)(4, "h3");
    \u0275\u0275text(5, "The professional has submitted completion");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Please review the work and confirm whether it meets your expectations.");
    \u0275\u0275elementEnd()()();
  }
}
function PendingJobDetailsComponent_div_16_div_60_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "button", 66);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_60_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.verifyCompletion());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Confirm Work Done ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 67);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_60_div_4_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.disputeCompletion());
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Raise a Dispute ");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobDetailsComponent_div_16_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275template(1, PendingJobDetailsComponent_div_16_div_60_div_1_Template, 9, 1, "div", 53)(2, PendingJobDetailsComponent_div_16_div_60_div_2_Template, 5, 0, "div", 54)(3, PendingJobDetailsComponent_div_16_div_60_div_3_Template, 8, 0, "div", 55)(4, PendingJobDetailsComponent_div_16_div_60_div_4_Template, 9, 0, "div", 54);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.completionStatus === "Disputed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.completionStatus === "Disputed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.completionStatus !== "Disputed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.completionStatus !== "Disputed");
  }
}
function PendingJobDetailsComponent_div_16_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 68)(1, "div", 69)(2, "mat-icon", 70);
    \u0275\u0275text(3, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 71)(5, "h3");
    \u0275\u0275text(6, "Refund Approved");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "The dispute has been resolved in your favour. You are eligible to receive a refund for the payment made on this job.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 72)(10, "button", 73);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_61_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.requestRefund());
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("disabled", ctx_r1.requestingRefund);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.requestingRefund ? "hourglass_empty" : "currency_rupee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.requestingRefund ? "Processing..." : "Request Refund", " ");
  }
}
function PendingJobDetailsComponent_div_16_div_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 74)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Refund processed \u2014 the payment has been returned to your account. ");
    \u0275\u0275elementEnd();
  }
}
function PendingJobDetailsComponent_div_16_div_63_div_11_div_1_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 90);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function PendingJobDetailsComponent_div_16_div_63_div_11_div_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = \u0275\u0275nextContext().index;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(i_r9 + 1);
  }
}
function PendingJobDetailsComponent_div_16_div_63_div_11_div_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 92);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const phase_r10 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2713 Completed on ", \u0275\u0275pipeBind2(2, 1, phase_r10.completedAt, "MMM dd, yyyy"), " ");
  }
}
function PendingJobDetailsComponent_div_16_div_63_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 83)(1, "div", 84);
    \u0275\u0275template(2, PendingJobDetailsComponent_div_16_div_63_div_11_div_1_mat_icon_2_Template, 2, 0, "mat-icon", 85)(3, PendingJobDetailsComponent_div_16_div_63_div_11_div_1_span_3_Template, 2, 1, "span", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 87)(5, "h4");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 88);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, PendingJobDetailsComponent_div_16_div_63_div_11_div_1_p_9_Template, 3, 4, "p", 89);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const phase_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("completed", phase_r10.isCompleted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", phase_r10.isCompleted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !phase_r10.isCompleted);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("completed", phase_r10.isCompleted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(phase_r10.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(phase_r10.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", phase_r10.isCompleted && phase_r10.completedAt);
  }
}
function PendingJobDetailsComponent_div_16_div_63_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81);
    \u0275\u0275template(1, PendingJobDetailsComponent_div_16_div_63_div_11_div_1_Template, 10, 9, "div", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.getJobPhases(ctx_r1.job));
  }
}
function PendingJobDetailsComponent_div_16_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 75)(2, "div", 76)(3, "h3")(4, "mat-icon");
    \u0275\u0275text(5, "timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Progress Tracking ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 77);
    \u0275\u0275element(8, "mat-progress-bar", 78);
    \u0275\u0275elementStart(9, "span", 79);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, PendingJobDetailsComponent_div_16_div_63_div_11_Template, 2, 1, "div", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("value", ctx_r1.getJobPhaseProgress(ctx_r1.job));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.getJobPhaseProgress(ctx_r1.job), "%");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.getJobPhases(ctx_r1.job).length > 0);
  }
}
function PendingJobDetailsComponent_div_16_div_64_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 97);
    \u0275\u0275element(1, "mat-spinner", 98);
    \u0275\u0275elementEnd();
  }
}
function PendingJobDetailsComponent_div_16_div_64_div_6_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "star");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275styleProp("color", s_r11 <= ctx_r1.existingReview.rating ? "#f59e0b" : "#ddd");
  }
}
function PendingJobDetailsComponent_div_16_div_64_div_6_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1('"', ctx_r1.existingReview.comment, '"');
  }
}
function PendingJobDetailsComponent_div_16_div_64_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99)(1, "div", 100);
    \u0275\u0275template(2, PendingJobDetailsComponent_div_16_div_64_div_6_mat_icon_2_Template, 2, 2, "mat-icon", 101);
    \u0275\u0275elementStart(3, "span", 102);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, PendingJobDetailsComponent_div_16_div_64_div_6_p_5_Template, 2, 1, "p", 103);
    \u0275\u0275elementStart(6, "p", 104);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(7, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.existingReview.rating, "/5");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.existingReview.comment);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Submitted ", \u0275\u0275pipeBind2(8, 4, ctx_r1.existingReview.createdAt, "MMM d, y"));
  }
}
function PendingJobDetailsComponent_div_16_div_64_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 106)(1, "p");
    \u0275\u0275text(2, "How was your experience with this professional?");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 66);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_64_div_7_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.openReviewDialog());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, " Leave a Review ");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobDetailsComponent_div_16_div_64_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "h3")(2, "mat-icon");
    \u0275\u0275text(3, "star_rate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Your Review");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PendingJobDetailsComponent_div_16_div_64_div_5_Template, 2, 0, "div", 94)(6, PendingJobDetailsComponent_div_16_div_64_div_6_Template, 9, 8, "div", 95)(7, PendingJobDetailsComponent_div_16_div_64_div_7_Template, 7, 0, "div", 96);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.loadingReview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingReview && ctx_r1.existingReview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingReview && !ctx_r1.existingReview);
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111);
    \u0275\u0275element(1, "mat-spinner", 112);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading bids...");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "mat-icon");
    \u0275\u0275text(2, "mail_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No bids received yet");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 30);
    \u0275\u0275text(2, "Bid Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.getBidStatus(bid_r13.status));
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 30);
    \u0275\u0275text(2, "Proposed Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(5, 1, bid_r13.bidAmount, "1.2-2"));
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 30);
    \u0275\u0275text(2, "Commence Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, bid_r13.commenceDate, "MMM dd, yyyy"));
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 30);
    \u0275\u0275text(2, "Expected Duration:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", bid_r13.expectedDurationDays, " days");
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 30);
    \u0275\u0275text(2, "Quote Valid Until:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, bid_r13.expiresAt, "MMM dd, yyyy"));
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 127)(1, "span", 30);
    \u0275\u0275text(2, "Materials & Details:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bid_r13.materialsDescription);
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128)(1, "span", 30);
    \u0275\u0275text(2, "Message:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bid_r13.bidMessage);
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 129);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const bid_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.acceptBid(ctx_r1.job.id, bid_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Accept ");
    \u0275\u0275elementEnd();
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 130);
    \u0275\u0275listener("click", function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const bid_r13 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.rejectBid(ctx_r1.job.id, bid_r13));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reject ");
    \u0275\u0275elementEnd();
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116)(1, "div", 117)(2, "div", 118)(3, "h4", 119);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 120);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 121);
    \u0275\u0275template(11, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_11_Template, 5, 1, "div", 122)(12, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_12_Template, 6, 4, "div", 122)(13, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_13_Template, 6, 4, "div", 122)(14, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_14_Template, 5, 1, "div", 122)(15, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_15_Template, 6, 4, "div", 122)(16, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_16_Template, 5, 1, "div", 122);
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_div_17_Template, 5, 1, "div", 123);
    \u0275\u0275elementStart(18, "div", 124);
    \u0275\u0275template(19, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_button_19_Template, 4, 0, "button", 125)(20, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_button_20_Template, 4, 0, "button", 126);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r13 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bid_r13.pro == null ? null : bid_r13.pro.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Representative: ", (bid_r13.pro == null ? null : bid_r13.pro.proName) || "Professional");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 12, bid_r13.createdAt, "MMM dd, yyyy HH:mm"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bid_r13.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r13.bidAmount);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r13.commenceDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r13.expectedDurationDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r13.expiresAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r13.materialsDescription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r13.bidMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bid_r13.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r13.status === "Pending");
  }
}
function PendingJobDetailsComponent_div_16_div_65_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114);
    \u0275\u0275template(1, PendingJobDetailsComponent_div_16_div_65_div_7_div_1_Template, 21, 15, "div", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.jobBids);
  }
}
function PendingJobDetailsComponent_div_16_div_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "h3")(2, "mat-icon");
    \u0275\u0275text(3, "how_to_vote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Bids Received ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PendingJobDetailsComponent_div_16_div_65_div_5_Template, 4, 0, "div", 108)(6, PendingJobDetailsComponent_div_16_div_65_div_6_Template, 5, 0, "div", 109)(7, PendingJobDetailsComponent_div_16_div_65_div_7_Template, 2, 1, "div", 110);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.loadingBids);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingBids && ctx_r1.jobBids.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.loadingBids && ctx_r1.jobBids.length > 0);
  }
}
function PendingJobDetailsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-card")(2, "mat-card-header", 18)(3, "div", 19)(4, "div", 20)(5, "span", 21);
    \u0275\u0275text(6, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22)(8, "mat-icon");
    \u0275\u0275text(9, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 23)(13, "span", 24);
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-chip-set")(16, "mat-chip", 25);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "mat-card-content")(19, "div", 26)(20, "h3");
    \u0275\u0275text(21, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 27);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 28)(25, "div", 29)(26, "mat-icon");
    \u0275\u0275text(27, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div")(29, "span", 30);
    \u0275\u0275text(30, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 31);
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 29)(34, "mat-icon");
    \u0275\u0275text(35, "currency_rupee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div")(37, "span", 30);
    \u0275\u0275text(38, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 31);
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 29)(42, "mat-icon");
    \u0275\u0275text(43, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div")(45, "span", 30);
    \u0275\u0275text(46, "Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "p", 31);
    \u0275\u0275text(48);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(49, "div", 29)(50, "mat-icon");
    \u0275\u0275text(51, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "div")(53, "span", 30);
    \u0275\u0275text(54, "Posted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "p", 31);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(58, PendingJobDetailsComponent_div_16_div_58_Template, 8, 1, "div", 32)(59, PendingJobDetailsComponent_div_16_div_59_Template, 31, 11, "div", 33)(60, PendingJobDetailsComponent_div_16_div_60_Template, 5, 4, "div", 34)(61, PendingJobDetailsComponent_div_16_div_61_Template, 14, 3, "div", 35)(62, PendingJobDetailsComponent_div_16_div_62_Template, 4, 0, "div", 36)(63, PendingJobDetailsComponent_div_16_div_63_Template, 12, 3, "div", 37)(64, PendingJobDetailsComponent_div_16_div_64_Template, 8, 3, "div", 38)(65, PendingJobDetailsComponent_div_16_div_65_Template, 8, 3, "div", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r1.job.category == null ? null : ctx_r1.job.category.name) || "Uncategorized");
    \u0275\u0275advance(5);
    \u0275\u0275property("color", ctx_r1.getStatusColor(ctx_r1.job.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.job.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.job.description);
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(ctx_r1.job.location);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.job.budget);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.formatTimeline(ctx_r1.job.timeline));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(57, 16, ctx_r1.job.createdAt, "MMM dd, yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.job.attachments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.job.status === "Bid Accepted" || ctx_r1.job.status === "Payment Made" || ctx_r1.job.status === "Pro Confirmed" || ctx_r1.job.status === "In Progress" || ctx_r1.job.status === "Completed" || ctx_r1.job.status === "Completion Submitted") && ctx_r1.job.assignedPro && ctx_r1.getAssignedBid());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.job.status === "Completion Submitted");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.completionStatus === "Refunded" && (ctx_r1.paymentStatus == null ? null : ctx_r1.paymentStatus.status) === "Completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.completionStatus === "Refunded" && (ctx_r1.paymentStatus == null ? null : ctx_r1.paymentStatus.status) === "Refunded");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.job.status === "Pro Confirmed" || ctx_r1.job.status === "In Progress" || ctx_r1.job.status === "Completion Submitted" || ctx_r1.job.status === "Completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.job.status === "Completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.job.status === "Open");
  }
}
function BidConfirmationDialogComponent_p_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12);
    \u0275\u0275text(1, " Bid Amount: ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("$" + \u0275\u0275pipeBind2(4, 1, ctx_r0.data.bidAmount, "1.2-2"));
  }
}
function BidConfirmationDialogComponent_mat_form_field_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 13)(1, "mat-label");
    \u0275\u0275text(2, "Reason for rejection (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "textarea", 14);
    \u0275\u0275twoWayListener("ngModelChange", function BidConfirmationDialogComponent_mat_form_field_14_Template_textarea_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reason, $event) || (ctx_r0.reason = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-hint", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.reason);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.reason.length, "/500");
  }
}
var _c1 = () => ({ standalone: true });
function SubmitReviewDialogComponent_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function SubmitReviewDialogComponent_button_7_Template_button_click_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setRating(s_r2));
    })("mouseenter", function SubmitReviewDialogComponent_button_7_Template_button_mouseenter_0_listener() {
      const s_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hovered = s_r2);
    })("mouseleave", function SubmitReviewDialogComponent_button_7_Template_button_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hovered = 0);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("color", s_r2 <= ctx_r2.hovered || s_r2 <= ctx_r2.rating ? "#f59e0b" : "#ccc");
  }
}
var PendingJobDetailsComponent = class _PendingJobDetailsComponent {
  jobService;
  paymentService;
  activatedRoute;
  router;
  auth;
  cdr;
  dialog;
  reviewService;
  job = null;
  jobBids = [];
  jobMessages = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  loadingBids = false;
  loadingMessages = false;
  paymentStatus = null;
  loadingPayment = false;
  messageText = "";
  messageSending = false;
  messageStatus = "";
  selectedTabIndex = 0;
  // Track selected tab: 0 = Messages (default), 1 = Bid Details
  destroy$ = new Subject();
  pollMessages$ = new Subject();
  // Subject to control polling
  currentJobId = null;
  messagePollInterval = 5e3;
  // 5 seconds
  existingReview = null;
  loadingReview = false;
  cancellingJob = false;
  completionStatus = null;
  disputeReason = null;
  paymentId = null;
  requestingRefund = false;
  constructor(jobService, paymentService, activatedRoute, router, auth, cdr, dialog, reviewService) {
    this.jobService = jobService;
    this.paymentService = paymentService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.auth = auth;
    this.cdr = cdr;
    this.dialog = dialog;
    this.reviewService = reviewService;
  }
  ngOnInit() {
    const jobId = this.activatedRoute.snapshot.paramMap.get("jobId");
    if (jobId) {
      this.loadJobDetails(parseInt(jobId, 10));
    } else {
      this.errorMessage = "Job ID not found";
      this.loading = false;
    }
  }
  ngOnDestroy() {
    this.pollMessages$.next();
    this.pollMessages$.complete();
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadJobDetails(jobId) {
    this.loading = true;
    this.errorMessage = "";
    this.currentJobId = jobId;
    this.jobService.getJob(jobId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (job) => {
        this.job = job;
        this.loading = false;
        this.cdr.markForCheck();
        this.loadBidsForJob(jobId);
        this.loadPaymentStatus(jobId);
        this.loadCompletionStatus(jobId);
        if (job.status === "Completed") {
          this.loadReview(jobId);
        }
      },
      error: (error) => {
        console.error("Error loading job details:", error);
        let errorMsg = "Failed to load job details.";
        if (error.status === 0) {
          errorMsg = "Connection error. Please ensure the API server is running.";
        } else if (error.status === 401) {
          errorMsg = "Unauthorized. Please login again.";
        } else if (error.status === 404) {
          errorMsg = "Job not found.";
        } else if (error.status === 500) {
          errorMsg = "Server error. Please try again later.";
        }
        this.errorMessage = errorMsg;
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadBidsForJob(jobId) {
    this.loadingBids = true;
    this.jobService.getJobBids(jobId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (bids) => {
        this.jobBids = bids;
        this.loadingBids = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error loading bids:", error);
        this.jobBids = [];
        this.loadingBids = false;
        this.cdr.markForCheck();
      }
    });
  }
  goBack() {
    this.router.navigate(["/pending-jobs"]);
  }
  cancelJob() {
    if (!this.job)
      return;
    if (!confirm(`Cancel "${this.job.title}"? All pending bids will be automatically withdrawn. This cannot be undone.`))
      return;
    this.cancellingJob = true;
    this.errorMessage = "";
    this.jobService.cancelJob(this.job.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.job.status = "Cancelled";
        this.jobBids = this.jobBids.map((b) => b.status === "Pending" ? __spreadProps(__spreadValues({}, b), { status: "Withdrawn" }) : b);
        this.successMessage = "Job cancelled successfully.";
        this.cancellingJob = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Failed to cancel job.";
        this.cancellingJob = false;
        this.cdr.markForCheck();
      }
    });
  }
  getStatusColor(status) {
    switch (status) {
      case "Open":
        return "primary";
      case "Bid Accepted":
        return "primary";
      case "Payment Made":
        return "accent";
      case "Pro Confirmed":
        return "accent";
      case "In Progress":
        return "accent";
      case "Completion Submitted":
        return "warn";
      case "Completed":
        return "warn";
      default:
        return "";
    }
  }
  formatTimeline(timeline) {
    const timelineMap = {
      "asap": "ASAP (within 24 hours)",
      "1-week": "Within 1 week",
      "1-month": "Within 1 month",
      "flexible": "No specific deadline"
    };
    return timelineMap[timeline] || timeline;
  }
  getBidStatusColor(status) {
    switch (status) {
      case "Pending":
        return "primary";
      case "Accepted":
        return "accent";
      case "Rejected":
        return "warn";
      default:
        return "";
    }
  }
  getBidStatus(status) {
    switch (status) {
      case "Pending":
        return "Pending";
      case "Accepted":
        return "Accepted";
      case "Rejected":
        return "Rejected";
      default:
        return "Unknown";
    }
  }
  loadPaymentStatus(jobId) {
    this.loadingPayment = true;
    this.paymentService.getPaymentByJob(jobId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (payment) => {
        this.paymentId = payment.id;
        this.paymentStatus = {
          status: payment.status,
          completed: payment.status === "Completed"
        };
        this.loadingPayment = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.paymentStatus = { status: "Not Found", completed: false };
        this.paymentId = null;
        this.loadingPayment = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadCompletionStatus(jobId) {
    this.jobService.getJobCompletion(jobId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (completion) => {
        this.completionStatus = completion?.status ?? null;
        this.disputeReason = completion?.disputeReason ?? null;
        this.cdr.markForCheck();
      },
      error: () => {
        this.completionStatus = null;
        this.disputeReason = null;
      }
    });
  }
  initiatePaymentForAssignedJob() {
    if (!this.job || !this.job.assignedProId) {
      this.errorMessage = "Job not assigned to a professional.";
      return;
    }
    const acceptedBid = this.jobBids.find((bid) => bid.status === "Accepted");
    if (!acceptedBid || !acceptedBid.bidAmount) {
      this.errorMessage = "Bid information not available for payment.";
      return;
    }
    const paymentDialogRef = this.dialog.open(RazorpayCheckoutComponent, {
      width: "600px",
      maxHeight: "90vh",
      data: {
        jobId: this.job.id,
        bidId: acceptedBid.id,
        bidAmount: acceptedBid.bidAmount,
        jobTitle: this.job.title,
        consumerName: this.auth.getName() || "User",
        consumerEmail: this.job.user?.email || "",
        consumerPhone: this.job.user?.phoneNumber || ""
      }
    });
    paymentDialogRef.afterClosed().subscribe((result) => {
      if (result && result.success) {
        this.successMessage = "Payment completed successfully!";
        this.paymentStatus = {
          status: "Completed",
          completed: true
        };
        this.cdr.markForCheck();
        setTimeout(() => {
          this.successMessage = "";
          this.cdr.markForCheck();
        }, 3e3);
      } else if (result && result.error) {
        this.errorMessage = result.error;
        setTimeout(() => {
          this.errorMessage = "";
          this.cdr.markForCheck();
        }, 3e3);
      }
    });
  }
  acceptBid(jobId, bid) {
    const dialogRef = this.dialog.open(BidConfirmationDialogComponent, {
      width: "400px",
      data: { action: "accept", bidAmount: bid.bidAmount, businessName: bid.pro?.businessName }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobService.acceptBid(jobId, bid.id).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = "Bid accepted successfully!";
            setTimeout(() => {
              this.successMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
            this.loadJobDetails(jobId);
            setTimeout(() => {
              this.openMessageDialogForBid(bid);
            }, 500);
          },
          error: (error) => {
            console.error("Error accepting bid:", error);
            this.errorMessage = "Failed to accept bid.";
            setTimeout(() => {
              this.errorMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
          }
        });
      }
    });
  }
  rejectBid(jobId, bid) {
    const dialogRef = this.dialog.open(BidConfirmationDialogComponent, {
      width: "400px",
      data: { action: "reject", bidAmount: bid.bidAmount, businessName: bid.pro?.businessName }
    });
    dialogRef.afterClosed().subscribe((result) => {
      const confirmed = result === true || typeof result === "object" && result?.confirmed;
      const reason = typeof result === "object" ? result.reason : void 0;
      if (confirmed) {
        this.jobService.rejectBid(jobId, bid.id, reason).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = "Bid rejected successfully!";
            setTimeout(() => {
              this.successMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
            this.loadJobDetails(jobId);
            setTimeout(() => {
              this.openMessageDialogForBid(bid);
            }, 500);
          },
          error: (error) => {
            console.error("Error rejecting bid:", error);
            this.errorMessage = "Failed to reject bid.";
            setTimeout(() => {
              this.errorMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
          }
        });
      }
    });
  }
  // Get phase progress percentage
  getJobPhaseProgress(job) {
    const phases = this.getJobPhases(job);
    if (phases.length === 0)
      return 0;
    const completed = phases.filter((p) => p.isCompleted).length;
    return Math.round(completed / phases.length * 100);
  }
  // Parse phases from job
  getJobPhases(job) {
    if (!job || !job.jobPhases) {
      return [];
    }
    if (Array.isArray(job.jobPhases)) {
      return job.jobPhases;
    }
    if (typeof job.jobPhases === "string") {
      try {
        const parsed = JSON.parse(job.jobPhases);
        return (Array.isArray(parsed) ? parsed : []).map((phase) => ({
          id: phase.id || phase.Id || "",
          title: phase.title || phase.Title || "",
          description: phase.description || phase.Description || "",
          isCompleted: phase.isCompleted !== void 0 ? phase.isCompleted : phase.IsCompleted || false,
          completedAt: phase.completedAt || phase.CompletedAt
        }));
      } catch (e) {
        console.error("Failed to parse jobPhases:", e);
        return [];
      }
    }
    return [];
  }
  // Get the bid from the assigned professional
  getAssignedBid() {
    if (!this.job || !this.job.assignedProId) {
      return null;
    }
    const assignedBid = this.jobBids.find((bid) => bid.proId === this.job.assignedProId && bid.status === "Accepted");
    return assignedBid || null;
  }
  // Load messages for a job
  // Navigate to messages page with partner ID
  goToMessagesPage() {
    if (!this.job || !this.job.assignedProId)
      return;
    this.router.navigate(["/messages"], {
      queryParams: {
        partnerId: this.job.assignedProId.toString()
      }
    });
  }
  // Send message to a bid professional
  messageBidProfessional(bid) {
    if (!this.job || !bid.proId)
      return;
    if (bid.isMessageExchange) {
      this.router.navigate(["/messages"], {
        queryParams: {
          partnerId: bid.proId.toString()
        }
      });
      return;
    }
    const dialogRef = this.dialog.open(BidMessageDialogComponent, {
      width: "500px",
      data: {
        jobTitle: this.job.title,
        professionalName: bid.pro?.businessName || "Professional",
        bidId: bid.id
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.message) {
        this.jobService.sendMessageToBid(bid.id, { content: result.message }).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            bid.isMessageExchange = true;
            this.successMessage = "Message sent successfully!";
            setTimeout(() => {
              this.successMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
            setTimeout(() => {
              this.router.navigate(["/messages"], {
                queryParams: {
                  partnerId: bid.proId.toString()
                }
              });
            }, 500);
          },
          error: (error) => {
            console.error("Error sending message:", error);
            this.errorMessage = "Failed to send message.";
            setTimeout(() => {
              this.errorMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
          }
        });
      }
    });
  }
  verifyCompletion() {
    if (!this.job)
      return;
    const jobId = this.job.id;
    const dialogRef = this.dialog.open(VerifyCompletionDialogComponent, { width: "420px" });
    dialogRef.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.jobService.verifyJobCompletion(jobId).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.successMessage = "Work confirmed! The job is now marked as Completed.";
          if (this.job) {
            this.job.status = "Completed";
            this.loadReview(jobId);
          }
          this.cdr.markForCheck();
          setTimeout(() => {
            this.successMessage = "";
            this.cdr.markForCheck();
          }, 4e3);
        },
        error: () => {
          this.errorMessage = "Failed to verify completion. Please try again.";
          setTimeout(() => {
            this.errorMessage = "";
            this.cdr.markForCheck();
          }, 4e3);
        }
      });
    });
  }
  loadReview(jobId) {
    this.loadingReview = true;
    this.reviewService.getJobReview(jobId).subscribe({
      next: (r) => {
        this.existingReview = r;
        this.loadingReview = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.existingReview = null;
        this.loadingReview = false;
        this.cdr.markForCheck();
      }
    });
  }
  openReviewDialog() {
    if (!this.job)
      return;
    const jobId = this.job.id;
    this.dialog.open(SubmitReviewDialogComponent, { width: "480px" }).afterClosed().subscribe((result) => {
      if (!result)
        return;
      this.reviewService.submitReview(jobId, result.rating, result.comment).pipe(takeUntil(this.destroy$)).subscribe({
        next: (r) => {
          this.existingReview = r;
          this.successMessage = "Thank you for your review!";
          this.cdr.markForCheck();
          setTimeout(() => {
            this.successMessage = "";
            this.cdr.markForCheck();
          }, 4e3);
        },
        error: (err) => {
          this.errorMessage = err?.error?.message ?? "Failed to submit review.";
          setTimeout(() => {
            this.errorMessage = "";
            this.cdr.markForCheck();
          }, 4e3);
        }
      });
    });
  }
  disputeCompletion() {
    if (!this.job)
      return;
    const jobId = this.job.id;
    const dialogRef = this.dialog.open(DisputeCompletionDialogComponent, { width: "480px" });
    dialogRef.afterClosed().subscribe((reason) => {
      if (!reason)
        return;
      this.jobService.disputeJobCompletion(jobId, reason).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.completionStatus = "Disputed";
          this.disputeReason = reason;
          this.successMessage = "Dispute raised. Our team will review and get back to you.";
          this.cdr.markForCheck();
          setTimeout(() => {
            this.successMessage = "";
            this.cdr.markForCheck();
          }, 5e3);
        },
        error: () => {
          this.errorMessage = "Failed to raise dispute. Please try again.";
          setTimeout(() => {
            this.errorMessage = "";
            this.cdr.markForCheck();
          }, 4e3);
        }
      });
    });
  }
  requestRefund() {
    if (!this.paymentId)
      return;
    if (!confirm("Request a refund for this job? The payment will be returned to your account. This cannot be undone."))
      return;
    this.requestingRefund = true;
    this.errorMessage = "";
    this.paymentService.requestRefund(this.paymentId).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.successMessage = "Refund requested successfully. The payment will be returned to your account.";
        if (this.paymentStatus) {
          this.paymentStatus = { status: "Refunded", completed: false };
        }
        this.requestingRefund = false;
        this.cdr.markForCheck();
        setTimeout(() => {
          this.successMessage = "";
          this.cdr.markForCheck();
        }, 6e3);
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Failed to process refund. Please contact support.";
        this.requestingRefund = false;
        this.cdr.markForCheck();
        setTimeout(() => {
          this.errorMessage = "";
          this.cdr.markForCheck();
        }, 5e3);
      }
    });
  }
  // Open message dialog for a bid after accept/reject
  openMessageDialogForBid(bid) {
    if (!this.job || !bid.proId)
      return;
    const dialogRef = this.dialog.open(BidActionMessageDialogComponent, {
      width: "500px",
      data: {
        jobTitle: this.job.title,
        professionalName: bid.pro?.businessName || "Professional",
        bidId: bid.id
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.message) {
        this.jobService.sendMessageToBid(bid.id, { content: result.message }).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = "Message sent successfully!";
            setTimeout(() => {
              this.successMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
          },
          error: (error) => {
            console.error("Error sending message:", error);
            this.errorMessage = "Failed to send message.";
            setTimeout(() => {
              this.errorMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
          }
        });
      }
    });
  }
  static \u0275fac = function PendingJobDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingJobDetailsComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(PaymentService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ReviewService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingJobDetailsComponent, selectors: [["app-pending-job-details"]], decls: 17, vars: 7, consts: [[1, "job-details-container"], [1, "page-header"], [1, "header-top"], ["mat-icon-button", "", "matTooltip", "Back to My Jobs", 1, "back-button", 3, "click"], [1, "header-title"], [1, "subtitle"], ["mat-stroked-button", "", "class", "cancel-job-btn-header", "matTooltip", "Cancel this job", 3, "disabled", "click", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-info", 4, "ngIf"], ["class", "job-details-card", 4, "ngIf"], ["mat-stroked-button", "", "matTooltip", "Cancel this job", 1, "cancel-job-btn-header", 3, "click", "disabled"], [1, "loading-container"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "alert", "alert-info"], [1, "job-details-card"], [1, "job-card-header"], [1, "job-header-content"], [1, "job-category-section"], [1, "category-label"], [1, "job-category"], [1, "job-status-section"], [1, "status-label"], ["selected", "", 3, "color"], [1, "job-section"], [1, "description"], [1, "details-grid"], [1, "detail-item"], [1, "label"], [1, "value"], ["class", "job-section", 4, "ngIf"], ["class", "assigned-pro-section", 4, "ngIf"], ["class", "completion-submitted-section", 4, "ngIf"], ["class", "refund-eligible-section", 4, "ngIf"], ["class", "refund-processed-notice", 4, "ngIf"], [4, "ngIf"], ["class", "review-section", 4, "ngIf"], ["class", "bids-section", 4, "ngIf"], [1, "attachments"], ["href", "#", "target", "_blank"], [1, "assigned-pro-section"], [1, "pro-card-inprogress"], [1, "pro-info"], [1, "bid-details-grid"], ["class", "detail-item", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", 1, "message-btn", 3, "click"], ["mat-raised-button", "", "color", "accent", "class", "payment-btn", 3, "click", 4, "ngIf"], ["class", "payment-made-notice", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", 1, "payment-btn", 3, "click"], [1, "payment-made-notice"], [1, "completion-submitted-section"], ["class", "dispute-active-notice", 4, "ngIf"], ["class", "completion-actions", 4, "ngIf"], ["class", "completion-notice", 4, "ngIf"], [1, "dispute-active-notice"], [1, "dispute-icon"], [1, "dispute-notice-text"], ["class", "dispute-reason", 4, "ngIf"], [1, "dispute-reason"], [1, "completion-actions"], ["mat-stroked-button", "", "color", "accent", 3, "click"], [1, "completion-notice"], [1, "completion-icon"], [1, "completion-notice-text"], ["mat-raised-button", "", "color", "accent", 3, "click"], ["mat-stroked-button", "", "color", "warn", 3, "click"], [1, "refund-eligible-section"], [1, "refund-eligible-notice"], [1, "refund-icon"], [1, "refund-notice-text"], [1, "refund-actions"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "refund-processed-notice"], [1, "phases-progress-section"], [1, "phase-progress-info"], [1, "progress-bar-container"], ["mode", "determinate", "color", "accent", 3, "value"], [1, "progress-percentage"], ["class", "phases-timeline", 4, "ngIf"], [1, "phases-timeline"], ["class", "phase-milestone", 4, "ngFor", "ngForOf"], [1, "phase-milestone"], [1, "milestone-marker"], ["class", "completed-icon", 4, "ngIf"], ["class", "milestone-number", 4, "ngIf"], [1, "milestone-content"], [1, "milestone-description"], ["class", "milestone-date", 4, "ngIf"], [1, "completed-icon"], [1, "milestone-number"], [1, "milestone-date"], [1, "review-section"], ["class", "review-loading", 4, "ngIf"], ["class", "review-submitted", 4, "ngIf"], ["class", "review-prompt", 4, "ngIf"], [1, "review-loading"], ["diameter", "28"], [1, "review-submitted"], [1, "review-stars"], [3, "color", 4, "ngFor", "ngForOf"], [1, "review-rating-label"], ["class", "review-comment", 4, "ngIf"], [1, "review-date"], [1, "review-comment"], [1, "review-prompt"], [1, "bids-section"], ["class", "bids-loading", 4, "ngIf"], ["class", "no-bids", 4, "ngIf"], ["class", "bids-list", 4, "ngIf"], [1, "bids-loading"], ["diameter", "30"], [1, "no-bids"], [1, "bids-list"], ["class", "bid-item", 4, "ngFor", "ngForOf"], [1, "bid-item"], [1, "bid-header"], [1, "bid-pro-info"], [1, "pro-name"], [1, "bid-date"], [1, "bid-phase1a-details"], ["class", "detail-row", 4, "ngIf"], ["class", "bid-message", 4, "ngIf"], [1, "bid-actions"], ["mat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], [1, "detail-row"], [1, "bid-message"], ["mat-button", "", "color", "accent", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"]], template: function PendingJobDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function PendingJobDetailsComponent_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "h1");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10, "View job details and track progress");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, PendingJobDetailsComponent_button_11_Template, 4, 2, "button", 6);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, PendingJobDetailsComponent_div_12_Template, 4, 0, "div", 7)(13, PendingJobDetailsComponent_div_13_Template, 5, 1, "div", 8)(14, PendingJobDetailsComponent_div_14_Template, 5, 1, "div", 9)(15, PendingJobDetailsComponent_div_15_Template, 5, 0, "div", 10)(16, PendingJobDetailsComponent_div_16_Template, 66, 19, "div", 11);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate((ctx.job == null ? null : ctx.job.title) || "Job Details");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.job && (ctx.job.status === "Open" || ctx.job.status === "Bid Accepted" || ctx.job.status === "Completion Submitted"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.paymentStatus == null ? null : ctx.paymentStatus.completed);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.job && !ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterModule,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatTooltip,
    MatExpansionModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    DecimalPipe,
    DatePipe
  ], styles: ['\n\n.job-details-container[_ngcontent-%COMP%] {\n  padding: 0;\n  max-width: 100%;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  padding: 2rem 2rem;\n  margin-bottom: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  color: white;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: white;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1rem;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .cancel-job-btn-header[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .cancel-job-btn-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .cancel-job-btn-header[_ngcontent-%COMP%]:hover:not([disabled]) {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: #fff;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .cancel-job-btn-header[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 600px) {\n  .job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .cancel-job-btn-header[_ngcontent-%COMP%] {\n    min-width: unset;\n    padding: 0 8px;\n  }\n  .job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .cancel-job-btn-header[_ngcontent-%COMP%]   span.mat-button-wrapper[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.job-details-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #666;\n  font-size: 1.1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0 2rem 1.5rem 2rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-info[_ngcontent-%COMP%] {\n  background-color: #d1ecf1;\n  color: #0c5460;\n  border: 1px solid #bee5eb;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #17a2b8;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%] {\n  padding: 0 2rem 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header.job-card-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 2px solid #f0f0f0;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #f0f0f0 100%);\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-status-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-status-section[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #999;\n  letter-spacing: 0.5px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-status-section[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0.5rem 1.2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category-section[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #999;\n  letter-spacing: 0.5px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category-section[_ngcontent-%COMP%]   .job-category[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  padding: 0.75rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category-section[_ngcontent-%COMP%]   .job-category[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: #333;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin: 1.5rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #666;\n  margin-top: 0.25rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #999;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #333;\n  margin: 0.25rem 0 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #666;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #2196f3;\n  text-decoration: none;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 2px solid #ca1d1d;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 1.5rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bids-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bids-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #666;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .no-bids[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 2rem;\n  color: #999;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .no-bids[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .no-bids[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bids-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%] {\n  border: 1px solid #8d0a0a;\n  border-radius: 8px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-header[_ngcontent-%COMP%]   .bid-pro-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-header[_ngcontent-%COMP%]   .bid-pro-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  color: #333;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-header[_ngcontent-%COMP%]   .bid-pro-info[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-header[_ngcontent-%COMP%]   .bid-pro-info[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-header[_ngcontent-%COMP%]   .bid-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #999;\n  white-space: nowrap;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  background-color: #f5f5f5;\n  border-radius: 6px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-amount[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-amount[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-phase1a-details[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background-color: #fafafa;\n  border-left: 4px solid #667eea;\n  border-radius: 4px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-phase1a-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n  gap: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-phase1a-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-phase1a-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  min-width: 150px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-phase1a-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #666;\n  flex: 1;\n  text-align: right;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-phase1a-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.5;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-message[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-message[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-message[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  line-height: 1.5;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-details-info[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem 1rem;\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  border-radius: 4px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-details-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2196f3;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-details-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #1565c0;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], \n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .bids-section[_ngcontent-%COMP%]   .bid-item[_ngcontent-%COMP%]   .bid-actions[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 16px 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phase-progress-info[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phase-progress-info[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phase-progress-info[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  border-radius: 4px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phase-progress-info[_ngcontent-%COMP%]   .progress-bar-container[_ngcontent-%COMP%]   .progress-percentage[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #667eea;\n  min-width: 50px;\n  text-align: right;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-marker[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: white;\n  border: 2px solid #ddd;\n  flex-shrink: 0;\n  font-weight: 600;\n  color: #667eea;\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-marker.completed[_ngcontent-%COMP%] {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-marker.completed[_ngcontent-%COMP%]   .completed-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-marker[_ngcontent-%COMP%]   .milestone-number[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-top: 4px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 4px 0;\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-content[_ngcontent-%COMP%]   h4.completed[_ngcontent-%COMP%] {\n  color: #4caf50;\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-content[_ngcontent-%COMP%]   .milestone-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0 0 4px 0;\n  line-height: 1.4;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .phases-progress-section[_ngcontent-%COMP%]   .phases-timeline[_ngcontent-%COMP%]   .phase-milestone[_ngcontent-%COMP%]   .milestone-content[_ngcontent-%COMP%]   .milestone-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #4caf50;\n  margin: 0;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: #fff8e1;\n  border: 1px solid #ffe082;\n  border-left: 4px solid #ffa000;\n  border-radius: 8px;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .completion-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .completion-notice[_ngcontent-%COMP%]   .completion-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #ffa000;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .completion-notice[_ngcontent-%COMP%]   .completion-notice-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.1rem;\n  color: #333;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .completion-notice[_ngcontent-%COMP%]   .completion-notice-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .completion-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .dispute-active-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #fce4ec;\n  border: 1px solid #f48fb1;\n  border-radius: 6px;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .dispute-active-notice[_ngcontent-%COMP%]   .dispute-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #c62828;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .dispute-active-notice[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.1rem;\n  color: #c62828;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .dispute-active-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.9rem;\n  color: #555;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .dispute-active-notice[_ngcontent-%COMP%]   .dispute-reason[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .payment-made-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: #2e7d32;\n}\n.job-details-container[_ngcontent-%COMP%]   .completion-submitted-section[_ngcontent-%COMP%]   .payment-made-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.job-details-container[_ngcontent-%COMP%]   .refund-eligible-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  border: 1.5px solid #1565c0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.job-details-container[_ngcontent-%COMP%]   .refund-eligible-section[_ngcontent-%COMP%]   .refund-eligible-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: #e3f2fd;\n}\n.job-details-container[_ngcontent-%COMP%]   .refund-eligible-section[_ngcontent-%COMP%]   .refund-eligible-notice[_ngcontent-%COMP%]   .refund-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #1565c0;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .refund-eligible-section[_ngcontent-%COMP%]   .refund-eligible-notice[_ngcontent-%COMP%]   .refund-notice-text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0d47a1;\n}\n.job-details-container[_ngcontent-%COMP%]   .refund-eligible-section[_ngcontent-%COMP%]   .refund-eligible-notice[_ngcontent-%COMP%]   .refund-notice-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #1565c0;\n}\n.job-details-container[_ngcontent-%COMP%]   .refund-eligible-section[_ngcontent-%COMP%]   .refund-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem;\n  background: #fafafa;\n  border-top: 1px solid #bbdefb;\n  display: flex;\n  gap: 0.75rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .refund-processed-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1.5rem;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  color: #2e7d32;\n}\n.job-details-container[_ngcontent-%COMP%]   .refund-processed-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 1.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-labels {\n  background: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n  min-width: 150px;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content {\n  padding: 1.5rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border-left: 4px solid #667eea;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n  border-radius: 8px;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .bid-header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .bid-header-info[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .bid-header-info[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   .pro-business-name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.25rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .bid-header-info[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   .pro-contact[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .bid-header-info[_ngcontent-%COMP%]   .bid-status-badge[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .assigned-bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .assigned-bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .assigned-bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.95rem;\n  min-width: 120px;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .assigned-bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 0.95rem;\n  text-align: right;\n  flex: 1;\n  margin-left: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .assigned-bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]   .detail-value.bid-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4caf50;\n  font-size: 1.1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .assigned-bid-card[_ngcontent-%COMP%]   .assigned-bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]   .detail-value.bid-message[_ngcontent-%COMP%] {\n  text-align: left;\n  white-space: pre-wrap;\n  word-break: break-word;\n  line-height: 1.5;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border: 2px solid #667eea;\n  border-radius: 8px;\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.25rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #666;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .message-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .message-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .message-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%] {\n  min-height: 200px;\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 1rem;\n  background: #fafafa;\n  border-radius: 6px;\n  border: 1px solid #ddd;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .no-messages[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #999;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .no-messages[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .no-messages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n  border-radius: 6px;\n  background: white;\n  border-left: 3px solid #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item.received[_ngcontent-%COMP%] {\n  border-left-color: #4caf50;\n  background: #f1f8e9;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .sender-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.8rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .sender-type.pro[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .sender-type.user[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.8rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  line-height: 1.4;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  border-top: 1px solid #ddd;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-family: "Roboto", sans-serif;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  color: #999;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.job-details-container[_ngcontent-%COMP%]   .assigned-pro-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #4caf50;\n  margin: 0.5rem 0 0 0;\n  font-weight: 500;\n}\n.review-section[_ngcontent-%COMP%] {\n  margin: 1.5rem 0;\n  padding: 1.25rem 1.5rem;\n  background: #fffde7;\n  border: 1px solid #ffe082;\n  border-radius: 10px;\n}\n.review-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 1rem;\n  font-size: 1.1rem;\n  color: #5d4037;\n}\n.review-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n}\n.review-submitted[_ngcontent-%COMP%]   .review-stars[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.review-submitted[_ngcontent-%COMP%]   .review-stars[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.review-submitted[_ngcontent-%COMP%]   .review-rating-label[_ngcontent-%COMP%] {\n  margin-left: 8px;\n  font-weight: 600;\n  color: #555;\n}\n.review-submitted[_ngcontent-%COMP%]   .review-comment[_ngcontent-%COMP%] {\n  margin: 8px 0 4px;\n  font-style: italic;\n  color: #444;\n}\n.review-submitted[_ngcontent-%COMP%]   .review-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n  margin: 0;\n}\n.review-prompt[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.review-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #555;\n}\n/*# sourceMappingURL=pending-job-details.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingJobDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-pending-job-details", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatChipsModule,
      MatProgressBarModule,
      MatTooltipModule,
      MatExpansionModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      MatDialogModule,
      FormsModule,
      ReactiveFormsModule
    ], template: `<div class="job-details-container">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <div class="header-top">\r
      <button mat-icon-button (click)="goBack()" class="back-button" matTooltip="Back to My Jobs">\r
        <mat-icon>arrow_back</mat-icon>\r
      </button>\r
      <div class="header-title">\r
        <h1>{{ job?.title || 'Job Details' }}</h1>\r
        <p class="subtitle">View job details and track progress</p>\r
      </div>\r
      <button\r
        *ngIf="job && (job.status === 'Open' || job.status === 'Bid Accepted' || job.status === 'Completion Submitted')"\r
        mat-stroked-button\r
        (click)="cancelJob()"\r
        [disabled]="cancellingJob"\r
        class="cancel-job-btn-header"\r
        matTooltip="Cancel this job">\r
        <mat-icon>cancel</mat-icon>\r
        {{ cancellingJob ? 'Cancelling...' : 'Cancel Job' }}\r
      </button>\r
    </div>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-container">\r
    <mat-spinner></mat-spinner>\r
    <p>Loading job details...</p>\r
  </div>\r
\r
  <!-- Error State -->\r
  <div *ngIf="errorMessage && !loading" class="alert alert-error">\r
    <mat-icon>error</mat-icon>\r
    <span>{{ errorMessage }}</span>\r
  </div>\r
\r
  <!-- Success Message -->\r
  <div *ngIf="successMessage" class="alert alert-success">\r
    <mat-icon>check_circle</mat-icon>\r
    <span>{{ successMessage }}</span>\r
  </div>\r
\r
  <!-- Payment Completed Message -->\r
  <div *ngIf="paymentStatus?.completed" class="alert alert-info">\r
    <mat-icon>check_circle</mat-icon>\r
    <span>Payment completed for job</span>\r
  </div>\r
\r
  <!-- Job Details -->\r
  <div *ngIf="job && !loading" class="job-details-card">\r
    <mat-card>\r
      <!-- Job Header -->\r
      <mat-card-header class="job-card-header">\r
        <div class="job-header-content">\r
            <div class="job-category-section">\r
            <span class="category-label">Category</span>\r
            <div class="job-category">\r
              <mat-icon>layers</mat-icon>\r
              <span>{{ job.category?.name || 'Uncategorized' }}</span>\r
            </div>\r
          </div>\r
          <div class="job-status-section">\r
            <span class="status-label">Status</span>\r
            <mat-chip-set>\r
              <mat-chip [color]="getStatusColor(job.status)" selected>\r
                {{ job.status }}\r
              </mat-chip>\r
            </mat-chip-set>\r
          </div>\r
        </div>\r
      </mat-card-header>\r
\r
      <mat-card-content>\r
        <!-- Description -->\r
        <div class="job-section">\r
          <h3>Description</h3>\r
          <p class="description">{{ job.description }}</p>\r
        </div>\r
\r
        <!-- Details Grid -->\r
        <div class="details-grid">\r
          <!-- Location -->\r
          <div class="detail-item">\r
            <mat-icon>location_on</mat-icon>\r
            <div>\r
              <span class="label">Location</span>\r
              <p class="value">{{ job.location }}</p>\r
            </div>\r
          </div>\r
\r
          <!-- Budget -->\r
          <div class="detail-item">\r
            <mat-icon>currency_rupee</mat-icon>\r
            <div>\r
              <span class="label">Budget</span>\r
              <!-- <p class="value">{{ formatBudget(job.budget) }}</p> -->\r
              <p class="value">{{ job.budget }}</p>\r
            </div>\r
          </div>\r
\r
          <!-- Timeline -->\r
          <div class="detail-item">\r
            <mat-icon>schedule</mat-icon>\r
            <div>\r
              <span class="label">Timeline</span>\r
              <p class="value">{{ formatTimeline(job.timeline) }}</p>\r
            </div>\r
          </div>\r
\r
          <!-- Posted Date -->\r
          <div class="detail-item">\r
            <mat-icon>calendar_today</mat-icon>\r
            <div>\r
              <span class="label">Posted</span>\r
              <p class="value">{{ job.createdAt | date: 'MMM dd, yyyy' }}</p>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Attachments -->\r
        <div *ngIf="job.attachments" class="job-section">\r
          <h3>Attachments</h3>\r
          <div class="attachments">\r
            <mat-icon>attach_file</mat-icon>\r
            <a href="#" target="_blank">{{ job.attachments }}</a>\r
          </div>\r
        </div>\r
\r
        <!-- Assigned Professional Information Section -->\r
        <div *ngIf="(job.status === 'Bid Accepted' || job.status === 'Payment Made' || job.status === 'Pro Confirmed' || job.status === 'In Progress' || job.status === 'Completed' || job.status === 'Completion Submitted') && job.assignedPro && getAssignedBid() as assignedBid" class="assigned-pro-section">\r
          <h3>\r
            <mat-icon>person_check</mat-icon>\r
            Assigned Professional\r
          </h3>\r
\r
          <!-- Professional Card for Both In Progress and Completed -->\r
          <div class="pro-card-inprogress">\r
            <div class="pro-info">\r
              <h4>{{ job.assignedPro.businessName }}</h4>\r
              <p>{{ job.assignedPro.proName || 'Professional' }}</p>\r
            </div>\r
            <div class="bid-details-grid">\r
              <div class="detail-item" *ngIf="assignedBid.bidAmount">\r
                <span class="label">Bid Amount:</span>\r
                <span class="value">\u20B9{{ assignedBid.bidAmount | number: '1.2-2' }}</span>\r
              </div>\r
              <div class="detail-item">\r
                <span class="label">Bid Status:</span>\r
                <span class="value">{{ getBidStatus(assignedBid.status) }}</span>\r
              </div>\r
              <div class="detail-item">\r
                <span class="label">Bid Date:</span>\r
                <span class="value">{{ assignedBid.createdAt | date: 'MMM dd, yyyy' }}</span>\r
              </div>\r
              <div class="detail-item" *ngIf="assignedBid.bidMessage">\r
                <span class="label">Bid Message:</span>\r
                <span class="value">{{ assignedBid.bidMessage }}</span>\r
              </div>\r
            </div>\r
            <button mat-raised-button color="primary" (click)="goToMessagesPage()" class="message-btn">\r
              <mat-icon>message</mat-icon>\r
              Message\r
            </button>\r
            <button\r
              *ngIf="job.status === 'Bid Accepted'"\r
              mat-raised-button\r
              color="accent"\r
              (click)="initiatePaymentForAssignedJob()"\r
              class="payment-btn">\r
              <mat-icon>payment</mat-icon>\r
              Make Payment\r
            </button>\r
            <div *ngIf="job.status === 'Payment Made'" class="payment-made-notice">\r
              <mat-icon>check_circle</mat-icon>\r
              Payment received \u2014 waiting for professional to confirm\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Completion Submitted \u2014 awaiting consumer action -->\r
        <div *ngIf="job.status === 'Completion Submitted'" class="completion-submitted-section">\r
\r
          <!-- Dispute is active \u2014 waiting for admin or pro to respond -->\r
          <div *ngIf="completionStatus === 'Disputed'" class="dispute-active-notice">\r
            <mat-icon class="dispute-icon">warning</mat-icon>\r
            <div class="dispute-notice-text">\r
              <h3>Dispute Under Review</h3>\r
              <p>Your dispute has been raised and is being reviewed. The professional may resubmit after addressing your concerns.</p>\r
              <p *ngIf="disputeReason" class="dispute-reason"><strong>Your reason:</strong> {{ disputeReason }}</p>\r
            </div>\r
          </div>\r
          <div *ngIf="completionStatus === 'Disputed'" class="completion-actions">\r
            <button mat-stroked-button color="accent" (click)="verifyCompletion()">\r
              <mat-icon>check_circle</mat-icon>\r
              Accept Work Anyway\r
            </button>\r
          </div>\r
\r
          <!-- Fresh submission \u2014 awaiting decision -->\r
          <div *ngIf="completionStatus !== 'Disputed'" class="completion-notice">\r
            <mat-icon class="completion-icon">assignment_turned_in</mat-icon>\r
            <div class="completion-notice-text">\r
              <h3>The professional has submitted completion</h3>\r
              <p>Please review the work and confirm whether it meets your expectations.</p>\r
            </div>\r
          </div>\r
          <div *ngIf="completionStatus !== 'Disputed'" class="completion-actions">\r
            <button mat-raised-button color="accent" (click)="verifyCompletion()">\r
              <mat-icon>check_circle</mat-icon>\r
              Confirm Work Done\r
            </button>\r
            <button mat-stroked-button color="warn" (click)="disputeCompletion()">\r
              <mat-icon>flag</mat-icon>\r
              Raise a Dispute\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Refund Eligible \u2014 admin approved refund, awaiting consumer to claim -->\r
        <div *ngIf="completionStatus === 'Refunded' && paymentStatus?.status === 'Completed'" class="refund-eligible-section">\r
          <div class="refund-eligible-notice">\r
            <mat-icon class="refund-icon">account_balance_wallet</mat-icon>\r
            <div class="refund-notice-text">\r
              <h3>Refund Approved</h3>\r
              <p>The dispute has been resolved in your favour. You are eligible to receive a refund for the payment made on this job.</p>\r
            </div>\r
          </div>\r
          <div class="refund-actions">\r
            <button mat-raised-button color="primary" (click)="requestRefund()" [disabled]="requestingRefund">\r
              <mat-icon>{{ requestingRefund ? 'hourglass_empty' : 'currency_rupee' }}</mat-icon>\r
              {{ requestingRefund ? 'Processing...' : 'Request Refund' }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Refund Processed confirmation -->\r
        <div *ngIf="completionStatus === 'Refunded' && paymentStatus?.status === 'Refunded'" class="refund-processed-notice">\r
          <mat-icon>check_circle</mat-icon>\r
          Refund processed \u2014 the payment has been returned to your account.\r
        </div>\r
\r
        <!-- Project Phases Progress (for active and completed jobs) -->\r
        <div *ngIf="job.status === 'Pro Confirmed' || job.status === 'In Progress' || job.status === 'Completion Submitted' || job.status === 'Completed'" >\r
\r
          <!-- Progress Tracking Details -->\r
          <div class="phases-progress-section">\r
            <div class="phase-progress-info" >\r
              <h3>\r
                <mat-icon>timeline</mat-icon>\r
                Progress Tracking\r
              </h3>\r
            </div>\r
            <div class="progress-bar-container">\r
              <mat-progress-bar \r
                mode="determinate" \r
                [value]="getJobPhaseProgress(job)"\r
                color="accent">\r
              </mat-progress-bar>\r
              <span class="progress-percentage">{{ getJobPhaseProgress(job) }}%</span>\r
            </div>\r
            \r
            \r
            <div class="phases-timeline" *ngIf="getJobPhases(job).length > 0">\r
              <div class="phase-milestone" *ngFor="let phase of getJobPhases(job); let i = index">\r
                <div class="milestone-marker" [class.completed]="phase.isCompleted">\r
                  <mat-icon *ngIf="phase.isCompleted" class="completed-icon">check_circle</mat-icon>\r
                  <span *ngIf="!phase.isCompleted" class="milestone-number">{{ i + 1 }}</span>\r
                </div>\r
                <div class="milestone-content">\r
                  <h4 [class.completed]="phase.isCompleted">{{ phase.title }}</h4>\r
                  <p class="milestone-description">{{ phase.description }}</p>\r
                  <p *ngIf="phase.isCompleted && phase.completedAt" class="milestone-date">\r
                    \u2713 Completed on {{ phase.completedAt | date: 'MMM dd, yyyy' }}\r
                  </p>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Review Section (for Completed jobs) -->\r
        <div *ngIf="job.status === 'Completed'" class="review-section">\r
          <h3><mat-icon>star_rate</mat-icon> Your Review</h3>\r
\r
          <div *ngIf="loadingReview" class="review-loading">\r
            <mat-spinner diameter="28"></mat-spinner>\r
          </div>\r
\r
          <!-- Already reviewed -->\r
          <div *ngIf="!loadingReview && existingReview" class="review-submitted">\r
            <div class="review-stars">\r
              <mat-icon *ngFor="let s of [1,2,3,4,5]"\r
                        [style.color]="s <= existingReview.rating ? '#f59e0b' : '#ddd'">star</mat-icon>\r
              <span class="review-rating-label">{{ existingReview.rating }}/5</span>\r
            </div>\r
            <p *ngIf="existingReview.comment" class="review-comment">"{{ existingReview.comment }}"</p>\r
            <p class="review-date">Submitted {{ existingReview.createdAt | date:'MMM d, y' }}</p>\r
          </div>\r
\r
          <!-- Not yet reviewed -->\r
          <div *ngIf="!loadingReview && !existingReview" class="review-prompt">\r
            <p>How was your experience with this professional?</p>\r
            <button mat-raised-button color="accent" (click)="openReviewDialog()">\r
              <mat-icon>star</mat-icon>\r
              Leave a Review\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Bids Section (for Open jobs only) -->\r
        <div class="bids-section" *ngIf="job.status === 'Open'">\r
          <h3>\r
            <mat-icon>how_to_vote</mat-icon>\r
            Bids Received\r
          </h3>\r
\r
          <!-- Loading Bids -->\r
          <div *ngIf="loadingBids" class="bids-loading">\r
            <mat-spinner diameter="30"></mat-spinner>\r
            <p>Loading bids...</p>\r
          </div>\r
\r
          <!-- No Bids State -->\r
          <div *ngIf="!loadingBids && jobBids.length === 0" class="no-bids">\r
            <mat-icon>mail_outline</mat-icon>\r
            <p>No bids received yet</p>\r
          </div>\r
\r
          <!-- Bids List -->\r
          <div *ngIf="!loadingBids && jobBids.length > 0" class="bids-list">\r
            <div *ngFor="let bid of jobBids" class="bid-item">\r
              <div class="bid-header">\r
                <div class="bid-pro-info">\r
                  <h4 class="pro-name">{{ bid.pro?.businessName }}</h4>\r
                  <span class="label">Representative: {{ bid.pro?.proName || 'Professional' }}</span>\r
                </div>\r
                <div class="bid-date">\r
                  {{ bid.createdAt | date: 'MMM dd, yyyy HH:mm' }}\r
                </div>\r
              </div>\r
\r
              <!-- Phase 1A Details -->\r
              <div class="bid-phase1a-details">\r
                <div class="detail-row" *ngIf="bid.status">\r
                  <span class="label">Bid Status:</span>\r
                  <span class="value">{{ getBidStatus(bid.status) }}</span>\r
                </div>\r
                <div class="detail-row" *ngIf="bid.bidAmount"> \r
                  <span class="label">Proposed Amount:</span>\r
                  <span class="value">\u20B9{{ bid.bidAmount | number: '1.2-2' }}</span>\r
                </div>\r
                <div class="detail-row" *ngIf="bid.commenceDate">\r
                  <span class="label">Commence Date:</span>\r
                  <span class="value">{{ bid.commenceDate | date: 'MMM dd, yyyy' }}</span>\r
                </div>\r
                <div class="detail-row" *ngIf="bid.expectedDurationDays">\r
                  <span class="label">Expected Duration:</span>\r
                  <span class="value">{{ bid.expectedDurationDays }} days</span>\r
                </div>\r
                <div class="detail-row" *ngIf="bid.expiresAt">\r
                  <span class="label">Quote Valid Until:</span>\r
                  <span class="value">{{ bid.expiresAt | date: 'MMM dd, yyyy' }}</span>\r
                </div>\r
                <div class="detail-row" *ngIf="bid.materialsDescription">\r
                  <span class="label">Materials & Details:</span>\r
                  <p class="value">{{ bid.materialsDescription }}</p>\r
                </div>\r
              </div>\r
\r
              <!-- Bid Message -->\r
              <div *ngIf="bid.bidMessage" class="bid-message">\r
                <span class="label">Message:</span>\r
                <p>{{ bid.bidMessage }}</p>\r
              </div>\r
\r
              <!-- Bid Actions -->\r
              <div class="bid-actions">\r
                <button mat-button color="accent" *ngIf="bid.status === 'Pending'" (click)="acceptBid(job.id, bid)">\r
                  <mat-icon>check</mat-icon>\r
                  Accept\r
                </button>\r
                <button mat-button color="warn" *ngIf="bid.status === 'Pending'" (click)="rejectBid(job.id, bid)">\r
                  <mat-icon>close</mat-icon>\r
                  Reject\r
                </button>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/pending-jobs/pending-job-details.scss */\n.job-details-container {\n  padding: 0;\n  max-width: 100%;\n  margin: 0;\n}\n.job-details-container .page-header {\n  padding: 2rem 2rem;\n  margin-bottom: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 0;\n}\n.job-details-container .page-header .header-top {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.job-details-container .page-header .header-top .back-button {\n  color: white;\n  flex-shrink: 0;\n}\n.job-details-container .page-header .header-top .back-button mat-icon {\n  color: white;\n}\n.job-details-container .page-header .header-top .back-button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.job-details-container .page-header .header-top .header-title {\n  flex: 1;\n}\n.job-details-container .page-header .header-top .header-title h1 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: white;\n}\n.job-details-container .page-header .header-top .header-title .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1rem;\n  margin: 0;\n}\n.job-details-container .page-header .header-top .cancel-job-btn-header {\n  flex-shrink: 0;\n  color: #fff;\n  border-color: rgba(255, 255, 255, 0.6);\n  font-weight: 600;\n  font-size: 0.875rem;\n}\n.job-details-container .page-header .header-top .cancel-job-btn-header mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-right: 4px;\n}\n.job-details-container .page-header .header-top .cancel-job-btn-header:hover:not([disabled]) {\n  background: rgba(255, 255, 255, 0.15);\n  border-color: #fff;\n}\n.job-details-container .page-header .header-top .cancel-job-btn-header[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n@media (max-width: 600px) {\n  .job-details-container .page-header .header-top .cancel-job-btn-header {\n    min-width: unset;\n    padding: 0 8px;\n  }\n  .job-details-container .page-header .header-top .cancel-job-btn-header span.mat-button-wrapper > span {\n    display: none;\n  }\n}\n.job-details-container .loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.job-details-container .loading-container p {\n  margin-top: 1rem;\n  color: #666;\n  font-size: 1.1rem;\n}\n.job-details-container .alert {\n  padding: 1rem;\n  margin: 0 2rem 1.5rem 2rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-weight: 500;\n}\n.job-details-container .alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.job-details-container .alert.alert-success mat-icon {\n  color: #28a745;\n}\n.job-details-container .alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.job-details-container .alert.alert-error mat-icon {\n  color: #dc3545;\n}\n.job-details-container .alert.alert-info {\n  background-color: #d1ecf1;\n  color: #0c5460;\n  border: 1px solid #bee5eb;\n}\n.job-details-container .alert.alert-info mat-icon {\n  color: #17a2b8;\n}\n.job-details-container .job-details-card {\n  padding: 0 2rem 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.job-details-container .job-details-card mat-card {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.job-details-container .job-details-card mat-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.job-details-container .job-details-card mat-card mat-card-header.job-card-header {\n  padding: 2rem;\n  border-bottom: 2px solid #f0f0f0;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #f0f0f0 100%);\n}\n.job-details-container .job-details-card mat-card .job-header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-status-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-status-section .status-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #999;\n  letter-spacing: 0.5px;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-status-section mat-chip-set mat-chip {\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0.5rem 1.2rem;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-category-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-category-section .category-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #999;\n  letter-spacing: 0.5px;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-category-section .job-category {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  padding: 0.75rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-category-section .job-category mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #667eea;\n}\n.job-details-container .job-details-card mat-card mat-card-content {\n  padding: 1.5rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .job-section {\n  margin-bottom: 1.5rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .job-section h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0 0 0.5rem 0;\n  color: #333;\n}\n.job-details-container .job-details-card mat-card mat-card-content .job-section p {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n}\n.job-details-container .job-details-card mat-card mat-card-content .description {\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.job-details-container .job-details-card mat-card mat-card-content .details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1rem;\n  margin: 1.5rem 0;\n}\n.job-details-container .job-details-card mat-card mat-card-content .details-grid .detail-item {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .details-grid .detail-item mat-icon {\n  color: #666;\n  margin-top: 0.25rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .details-grid .detail-item > div {\n  flex: 1;\n}\n.job-details-container .job-details-card mat-card mat-card-content .details-grid .detail-item .label {\n  font-size: 0.85rem;\n  color: #999;\n  text-transform: uppercase;\n  font-weight: 600;\n}\n.job-details-container .job-details-card mat-card mat-card-content .details-grid .detail-item .value {\n  font-size: 0.95rem;\n  color: #333;\n  margin: 0.25rem 0 0;\n}\n.job-details-container .job-details-card mat-card mat-card-content .attachments {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .attachments mat-icon {\n  color: #666;\n}\n.job-details-container .job-details-card mat-card mat-card-content .attachments a {\n  color: #2196f3;\n  text-decoration: none;\n}\n.job-details-container .job-details-card mat-card mat-card-content .attachments a:hover {\n  text-decoration: underline;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section {\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 2px solid #ca1d1d;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section h3 {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 1.5rem 0;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section h3 mat-icon {\n  color: #667eea;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bids-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bids-loading p {\n  margin-top: 1rem;\n  color: #666;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .no-bids {\n  text-align: center;\n  padding: 2rem;\n  color: #999;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .no-bids mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n  opacity: 0.5;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .no-bids p {\n  margin: 0;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bids-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item {\n  border: 1px solid #8d0a0a;\n  border-radius: 8px;\n  padding: 1.5rem;\n  transition: all 0.3s ease;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-header .bid-pro-info {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-header .bid-pro-info .pro-name {\n  font-size: 1rem;\n  font-weight: 600;\n  margin: 0;\n  color: #333;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-header .bid-pro-info .label {\n  font-size: 0.85rem;\n  color: #666;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-header .bid-pro-info mat-chip-set {\n  margin-top: 0.5rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-header .bid-date {\n  font-size: 0.85rem;\n  color: #999;\n  white-space: nowrap;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-amount {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem;\n  background-color: #f5f5f5;\n  border-radius: 6px;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-amount .label {\n  font-weight: 600;\n  color: #333;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-amount .amount {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #667eea;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-phase1a-details {\n  margin-bottom: 1rem;\n  padding: 1rem;\n  background-color: #fafafa;\n  border-left: 4px solid #667eea;\n  border-radius: 4px;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-phase1a-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n  gap: 1rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-phase1a-details .detail-row:last-child {\n  margin-bottom: 0;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-phase1a-details .detail-row .label {\n  font-weight: 600;\n  color: #333;\n  min-width: 150px;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-phase1a-details .detail-row .value {\n  color: #666;\n  flex: 1;\n  text-align: right;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-phase1a-details .detail-row .value p {\n  margin: 0;\n  line-height: 1.5;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-message {\n  margin-bottom: 1rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-message .label {\n  font-weight: 600;\n  color: #333;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-message p {\n  margin: 0;\n  color: #666;\n  line-height: 1.5;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-details-info {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n  padding: 0.75rem 1rem;\n  background-color: #e3f2fd;\n  border-left: 4px solid #2196f3;\n  border-radius: 4px;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-details-info mat-icon {\n  color: #2196f3;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-details-info p {\n  margin: 0;\n  color: #1565c0;\n  font-size: 0.9rem;\n  line-height: 1.4;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-actions {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-actions button,\n.job-details-container .job-details-card mat-card mat-card-content .bids-section .bid-item .bid-actions a {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section {\n  margin-top: 24px;\n  padding: 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section h3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 16px 0;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section h3 mat-icon {\n  color: #667eea;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phase-progress-info {\n  margin-bottom: 24px;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phase-progress-info .progress-bar-container {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phase-progress-info .progress-bar-container mat-progress-bar {\n  flex: 1;\n  height: 8px;\n  border-radius: 4px;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phase-progress-info .progress-bar-container .progress-percentage {\n  font-weight: 600;\n  color: #667eea;\n  min-width: 50px;\n  text-align: right;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone {\n  display: flex;\n  gap: 16px;\n  align-items: flex-start;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-marker {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: white;\n  border: 2px solid #ddd;\n  flex-shrink: 0;\n  font-weight: 600;\n  color: #667eea;\n  transition: all 0.3s ease;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-marker.completed {\n  background: #4caf50;\n  border-color: #4caf50;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-marker.completed .completed-icon {\n  color: white;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-marker .milestone-number {\n  font-size: 16px;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-content {\n  flex: 1;\n  padding-top: 4px;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-content h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 4px 0;\n  transition: all 0.3s ease;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-content h4.completed {\n  color: #4caf50;\n  text-decoration: line-through;\n  opacity: 0.8;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-content .milestone-description {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0 0 4px 0;\n  line-height: 1.4;\n}\n.job-details-container .job-details-card mat-card .phases-progress-section .phases-timeline .phase-milestone .milestone-content .milestone-date {\n  font-size: 0.85rem;\n  color: #4caf50;\n  margin: 0;\n  font-weight: 500;\n}\n.job-details-container .completion-submitted-section {\n  margin-bottom: 2rem;\n  padding: 1.5rem;\n  background: #fff8e1;\n  border: 1px solid #ffe082;\n  border-left: 4px solid #ffa000;\n  border-radius: 8px;\n}\n.job-details-container .completion-submitted-section .completion-notice {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.job-details-container .completion-submitted-section .completion-notice .completion-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #ffa000;\n  flex-shrink: 0;\n}\n.job-details-container .completion-submitted-section .completion-notice .completion-notice-text h3 {\n  margin: 0 0 0.25rem;\n  font-size: 1.1rem;\n  color: #333;\n}\n.job-details-container .completion-submitted-section .completion-notice .completion-notice-text p {\n  margin: 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.job-details-container .completion-submitted-section .completion-actions {\n  display: flex;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.job-details-container .completion-submitted-section .dispute-active-notice {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n  padding: 1rem;\n  background: #fce4ec;\n  border: 1px solid #f48fb1;\n  border-radius: 6px;\n}\n.job-details-container .completion-submitted-section .dispute-active-notice .dispute-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #c62828;\n  flex-shrink: 0;\n}\n.job-details-container .completion-submitted-section .dispute-active-notice h3 {\n  margin: 0 0 0.25rem;\n  font-size: 1.1rem;\n  color: #c62828;\n}\n.job-details-container .completion-submitted-section .dispute-active-notice p {\n  margin: 0 0 0.25rem;\n  font-size: 0.9rem;\n  color: #555;\n}\n.job-details-container .completion-submitted-section .dispute-active-notice .dispute-reason {\n  font-style: italic;\n}\n.job-details-container .completion-submitted-section .payment-made-notice {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: #2e7d32;\n}\n.job-details-container .completion-submitted-section .payment-made-notice mat-icon {\n  font-size: 18px;\n}\n.job-details-container .refund-eligible-section {\n  margin-bottom: 1.5rem;\n  border: 1.5px solid #1565c0;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.job-details-container .refund-eligible-section .refund-eligible-notice {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: #e3f2fd;\n}\n.job-details-container .refund-eligible-section .refund-eligible-notice .refund-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #1565c0;\n  flex-shrink: 0;\n}\n.job-details-container .refund-eligible-section .refund-eligible-notice .refund-notice-text h3 {\n  margin: 0 0 0.4rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #0d47a1;\n}\n.job-details-container .refund-eligible-section .refund-eligible-notice .refund-notice-text p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #1565c0;\n}\n.job-details-container .refund-eligible-section .refund-actions {\n  padding: 1rem 1.25rem;\n  background: #fafafa;\n  border-top: 1px solid #bbdefb;\n  display: flex;\n  gap: 0.75rem;\n}\n.job-details-container .refund-processed-notice {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  margin-bottom: 1.5rem;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  color: #2e7d32;\n}\n.job-details-container .refund-processed-notice mat-icon {\n  font-size: 18px;\n}\n.job-details-container .assigned-pro-section {\n  margin-bottom: 2rem;\n}\n.job-details-container .assigned-pro-section h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 1.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.job-details-container .assigned-pro-section h3 mat-icon {\n  color: #667eea;\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.job-details-container .assigned-pro-section .messages-tabs ::ng-deep .mat-mdc-tab-labels {\n  background: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n.job-details-container .assigned-pro-section .messages-tabs ::ng-deep .mat-mdc-tab {\n  min-width: 150px;\n}\n.job-details-container .assigned-pro-section .messages-tabs ::ng-deep .mat-mdc-tab .mdc-tab__text-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n}\n.job-details-container .assigned-pro-section .messages-tabs ::ng-deep .mat-mdc-tab-body-content {\n  padding: 1.5rem 0;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border-left: 4px solid #667eea;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n  border-radius: 8px;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .bid-header-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .bid-header-info .pro-info {\n  flex: 1;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .bid-header-info .pro-info .pro-business-name {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.25rem 0;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .bid-header-info .pro-info .pro-contact {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .bid-header-info .bid-status-badge {\n  margin-left: 1rem;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .assigned-bid-details .bid-detail-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .assigned-bid-details .bid-detail-item:last-of-type {\n  border-bottom: none;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .assigned-bid-details .bid-detail-item .detail-label {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.95rem;\n  min-width: 120px;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .assigned-bid-details .bid-detail-item .detail-value {\n  color: #333;\n  font-size: 0.95rem;\n  text-align: right;\n  flex: 1;\n  margin-left: 1rem;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .assigned-bid-details .bid-detail-item .detail-value.bid-amount {\n  font-weight: 600;\n  color: #4caf50;\n  font-size: 1.1rem;\n}\n.job-details-container .assigned-pro-section .assigned-bid-card .assigned-bid-details .bid-detail-item .detail-value.bid-message {\n  text-align: left;\n  white-space: pre-wrap;\n  word-break: break-word;\n  line-height: 1.5;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border: 2px solid #667eea;\n  border-radius: 8px;\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .pro-info {\n  margin-bottom: 1.5rem;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .pro-info h4 {\n  font-size: 1.2rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.25rem 0;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .pro-info p {\n  font-size: 0.95rem;\n  color: #666;\n  margin: 0;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .bid-details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 1rem;\n  margin-bottom: 1.5rem;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .bid-details-grid .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .bid-details-grid .detail-item .label {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .bid-details-grid .detail-item .value {\n  color: #333;\n  font-size: 1rem;\n  font-weight: 500;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .message-btn {\n  width: 100%;\n  padding: 0.75rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 4px;\n  transition: all 0.3s ease;\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .message-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.job-details-container .assigned-pro-section .pro-card-inprogress .message-btn mat-icon {\n  margin-right: 0.5rem;\n}\n.job-details-container .assigned-pro-section .messages-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-loading p {\n  margin: 0;\n  color: #666;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list {\n  min-height: 200px;\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 1rem;\n  background: #fafafa;\n  border-radius: 6px;\n  border: 1px solid #ddd;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .no-messages {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #999;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .no-messages mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .no-messages p {\n  margin: 0.5rem 0 0 0;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .message-item {\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n  border-radius: 6px;\n  background: white;\n  border-left: 3px solid #667eea;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .message-item.received {\n  border-left-color: #4caf50;\n  background: #f1f8e9;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .message-item .message-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .message-item .message-header .sender-type {\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.8rem;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .message-item .message-header .sender-type.pro {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .message-item .message-header .sender-type.user {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .message-item .message-header .message-time {\n  color: #999;\n  font-size: 0.8rem;\n}\n.job-details-container .assigned-pro-section .messages-container .messages-list .message-item .message-content {\n  margin: 0;\n  color: #333;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  line-height: 1.4;\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section {\n  padding-top: 1rem;\n  border-top: 1px solid #ddd;\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section .message-input-group {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section .message-input-group .message-input {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-family: "Roboto", sans-serif;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section .message-input-group .message-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section .message-input-group .message-input:disabled {\n  background-color: #f5f5f5;\n  color: #999;\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section .message-input-group button {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section .message-input-group button[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section .message-input-group button mat-spinner {\n  display: inline-block;\n}\n.job-details-container .assigned-pro-section .messages-container .message-form-section .message-status {\n  font-size: 0.85rem;\n  color: #4caf50;\n  margin: 0.5rem 0 0 0;\n  font-weight: 500;\n}\n.review-section {\n  margin: 1.5rem 0;\n  padding: 1.25rem 1.5rem;\n  background: #fffde7;\n  border: 1px solid #ffe082;\n  border-radius: 10px;\n}\n.review-section h3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 1rem;\n  font-size: 1.1rem;\n  color: #5d4037;\n}\n.review-loading {\n  display: flex;\n  justify-content: center;\n  padding: 1rem;\n}\n.review-submitted .review-stars {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.review-submitted .review-stars mat-icon {\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.review-submitted .review-rating-label {\n  margin-left: 8px;\n  font-weight: 600;\n  color: #555;\n}\n.review-submitted .review-comment {\n  margin: 8px 0 4px;\n  font-style: italic;\n  color: #444;\n}\n.review-submitted .review-date {\n  font-size: 0.8rem;\n  color: #888;\n  margin: 0;\n}\n.review-prompt {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.review-prompt p {\n  margin: 0;\n  color: #555;\n}\n/*# sourceMappingURL=pending-job-details.css.map */\n'] }]
  }], () => [{ type: JobService }, { type: PaymentService }, { type: ActivatedRoute }, { type: Router }, { type: Auth }, { type: ChangeDetectorRef }, { type: MatDialog }, { type: ReviewService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingJobDetailsComponent, { className: "PendingJobDetailsComponent", filePath: "src/app/features/pending-jobs/pending-job-details.ts", lineNumber: 51 });
})();
var BidMessageDialogComponent = class _BidMessageDialogComponent {
  dialogRef;
  data;
  message = "";
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSend() {
    if (this.message.trim()) {
      this.dialogRef.close({ message: this.message });
    }
  }
  static \u0275fac = function BidMessageDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidMessageDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BidMessageDialogComponent, selectors: [["app-bid-message-dialog"]], decls: 19, vars: 4, consts: [[1, "bid-message-dialog"], ["mat-dialog-title", ""], [1, "dialog-subtitle"], ["appearance", "outline", 1, "message-field"], ["matInput", "", "placeholder", "Type your message here...", "rows", "5", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"]], template: function BidMessageDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-form-field", 3)(7, "mat-label");
      \u0275\u0275text(8, "Your Message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "textarea", 4);
      \u0275\u0275twoWayListener("ngModelChange", function BidMessageDialogComponent_Template_textarea_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.message, $event) || (ctx.message = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "mat-dialog-actions", 5)(11, "button", 6);
      \u0275\u0275listener("click", function BidMessageDialogComponent_Template_button_click_11_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(12, "mat-icon");
      \u0275\u0275text(13, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(14, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "button", 7);
      \u0275\u0275listener("click", function BidMessageDialogComponent_Template_button_click_15_listener() {
        return ctx.onSend();
      });
      \u0275\u0275elementStart(16, "mat-icon");
      \u0275\u0275text(17, "send");
      \u0275\u0275elementEnd();
      \u0275\u0275text(18, " Send Message ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Send Message to ", ctx.data.professionalName);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Job: ", ctx.data.jobTitle);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.message);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !ctx.message.trim());
    }
  }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.bid-message-dialog[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n.dialog-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.message-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n/*# sourceMappingURL=pending-job-details.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidMessageDialogComponent, [{
    type: Component,
    args: [{ selector: "app-bid-message-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule], template: `
    <div class="bid-message-dialog">
      <h2 mat-dialog-title>Send Message to {{ data.professionalName }}</h2>
      
      <mat-dialog-content>
        <p class="dialog-subtitle">Job: {{ data.jobTitle }}</p>
        
        <mat-form-field appearance="outline" class="message-field">
          <mat-label>Your Message</mat-label>
          <textarea matInput 
            [(ngModel)]="message" 
            placeholder="Type your message here..."
            rows="5"></textarea>
        </mat-form-field>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">
          <mat-icon>close</mat-icon>
          Cancel
        </button>
        <button mat-raised-button color="accent" (click)="onSend()" [disabled]="!message.trim()">
          <mat-icon>send</mat-icon>
          Send Message
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;cfa6a0e52e10be473f4f3b15a9d20f1253bc82ce960da084674feba6af768236;C:/repos/yProHub/prohub-ui/src/app/features/pending-jobs/pending-job-details.ts */\n.bid-message-dialog {\n  min-width: 400px;\n}\n.dialog-subtitle {\n  margin: 0 0 16px 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n.message-field {\n  width: 100%;\n  margin-bottom: 16px;\n}\nmat-dialog-actions {\n  gap: 8px;\n}\n/*# sourceMappingURL=pending-job-details.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BidMessageDialogComponent, { className: "BidMessageDialogComponent", filePath: "src/app/features/pending-jobs/pending-job-details.ts", lineNumber: 731 });
})();
var BidConfirmationDialogComponent = class _BidConfirmationDialogComponent {
  dialogRef;
  data;
  reason = "";
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  onConfirm() {
    this.dialogRef.close(this.data.action === "reject" ? { confirmed: true, reason: this.reason.trim() } : true);
  }
  static \u0275fac = function BidConfirmationDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidConfirmationDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BidConfirmationDialogComponent, selectors: [["app-bid-confirmation-dialog"]], decls: 24, vars: 13, consts: [[1, "bid-confirmation-dialog"], [1, "dialog-header"], [1, "dialog-icon"], ["mat-dialog-title", ""], [1, "bid-info"], [1, "business-name"], ["class", "bid-amount", 4, "ngIf"], [1, "confirmation-message"], ["appearance", "outline", "class", "reason-field", 4, "ngIf"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", 3, "click", "color"], [1, "bid-amount"], ["appearance", "outline", 1, "reason-field"], ["matInput", "", "placeholder", "Let the professional know why you're declining...", "rows", "3", "maxlength", "500", 3, "ngModelChange", "ngModel"]], template: function BidConfirmationDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "mat-dialog-content")(7, "div", 4)(8, "p", 5)(9, "strong");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, BidConfirmationDialogComponent_p_11_Template, 5, 4, "p", 6);
      \u0275\u0275elementStart(12, "p", 7);
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(14, BidConfirmationDialogComponent_mat_form_field_14_Template, 6, 2, "mat-form-field", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "mat-dialog-actions", 9)(16, "button", 10);
      \u0275\u0275listener("click", function BidConfirmationDialogComponent_Template_button_click_16_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(17, "mat-icon");
      \u0275\u0275text(18, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 11);
      \u0275\u0275listener("click", function BidConfirmationDialogComponent_Template_button_click_20_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275elementStart(21, "mat-icon");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275classProp("accept", ctx.data.action === "accept")("reject", ctx.data.action === "reject");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.action === "accept" ? "check_circle" : "cancel", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data.action === "accept" ? "Accept Bid" : "Reject Bid", " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(ctx.data.businessName);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.bidAmount);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data.action === "accept" ? "Are you sure you want to accept this bid? " + ctx.data.businessName + " will be assigned to this job." : "Are you sure you want to reject this bid? This action cannot be undone.", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.action === "reject");
      \u0275\u0275advance(6);
      \u0275\u0275property("color", ctx.data.action === "accept" ? "accent" : "warn");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.action === "accept" ? "check" : "block");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.action === "accept" ? "Accept" : "Reject", " ");
    }
  }, dependencies: [CommonModule, NgIf, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, NgModel, DecimalPipe], styles: ["\n\n.bid-confirmation-dialog[_ngcontent-%COMP%] {\n  min-width: 320px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.dialog-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.dialog-icon.accept[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.dialog-icon.reject[_ngcontent-%COMP%] {\n  color: #f44336;\n}\nmat-dialog-content[_ngcontent-%COMP%] {\n  padding: 16px 0;\n}\n.bid-info[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.business-name[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n}\n.bid-amount[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #666;\n  font-size: 14px;\n}\n.confirmation-message[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #555;\n  line-height: 1.5;\n}\n.reason-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n/*# sourceMappingURL=pending-job-details.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidConfirmationDialogComponent, [{
    type: Component,
    args: [{ selector: "app-bid-confirmation-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule], template: `
    <div class="bid-confirmation-dialog">
      <div class="dialog-header">
        <mat-icon class="dialog-icon" [class.accept]="data.action === 'accept'" [class.reject]="data.action === 'reject'">
          {{ data.action === 'accept' ? 'check_circle' : 'cancel' }}
        </mat-icon>
        <h2 mat-dialog-title>
          {{ data.action === 'accept' ? 'Accept Bid' : 'Reject Bid' }}
        </h2>
      </div>

      <mat-dialog-content>
        <div class="bid-info">
          <p class="business-name"><strong>{{ data.businessName }}</strong></p>
          <p *ngIf="data.bidAmount" class="bid-amount">
            Bid Amount: <strong>{{ '$' + (data.bidAmount | number: '1.2-2') }}</strong>
          </p>
          <p class="confirmation-message">
            {{ data.action === 'accept'
              ? 'Are you sure you want to accept this bid? ' + data.businessName + ' will be assigned to this job.'
              : 'Are you sure you want to reject this bid? This action cannot be undone.' }}
          </p>
        </div>
        <mat-form-field *ngIf="data.action === 'reject'" appearance="outline" class="reason-field">
          <mat-label>Reason for rejection (optional)</mat-label>
          <textarea matInput [(ngModel)]="reason" placeholder="Let the professional know why you're declining..." rows="3" maxlength="500"></textarea>
          <mat-hint align="end">{{ reason.length }}/500</mat-hint>
        </mat-form-field>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">
          <mat-icon>close</mat-icon>
          Cancel
        </button>
        <button mat-raised-button
          [color]="data.action === 'accept' ? 'accent' : 'warn'"
          (click)="onConfirm()">
          <mat-icon>{{ data.action === 'accept' ? 'check' : 'block' }}</mat-icon>
          {{ data.action === 'accept' ? 'Accept' : 'Reject' }}
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;4c144379e007bb3454e7f46aea9f2ccc234300b25478e82b1fdd6b7dd1052372;C:/repos/yProHub/prohub-ui/src/app/features/pending-jobs/pending-job-details.ts */\n.bid-confirmation-dialog {\n  min-width: 320px;\n}\n.dialog-header {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  margin-bottom: 16px;\n}\n.dialog-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.dialog-icon.accept {\n  color: #4caf50;\n}\n.dialog-icon.reject {\n  color: #f44336;\n}\nmat-dialog-content {\n  padding: 16px 0;\n}\n.bid-info {\n  background: #f5f5f5;\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n}\n.business-name {\n  margin: 0 0 8px 0;\n  font-size: 16px;\n}\n.bid-amount {\n  margin: 0 0 12px 0;\n  color: #666;\n  font-size: 14px;\n}\n.confirmation-message {\n  margin: 0 0 16px 0;\n  color: #555;\n  line-height: 1.5;\n}\n.reason-field {\n  width: 100%;\n}\nmat-dialog-actions {\n  gap: 8px;\n}\n/*# sourceMappingURL=pending-job-details.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BidConfirmationDialogComponent, { className: "BidConfirmationDialogComponent", filePath: "src/app/features/pending-jobs/pending-job-details.ts", lineNumber: 863 });
})();
var BidActionMessageDialogComponent = class _BidActionMessageDialogComponent {
  dialogRef;
  data;
  message = "";
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onSkip() {
    this.dialogRef.close();
  }
  onSend() {
    if (this.message.trim()) {
      this.dialogRef.close({ message: this.message });
    } else {
      this.dialogRef.close();
    }
  }
  static \u0275fac = function BidActionMessageDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidActionMessageDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BidActionMessageDialogComponent, selectors: [["app-bid-action-message-dialog"]], decls: 21, vars: 3, consts: [[1, "bid-action-message-dialog"], ["mat-dialog-title", ""], [1, "dialog-subtitle"], [1, "dialog-hint"], ["appearance", "outline", 1, "message-field"], ["matInput", "", "placeholder", "Type your message here...", "rows", "5", 3, "ngModelChange", "ngModel"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function BidActionMessageDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 2);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "You can send an optional message to the professional:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "mat-form-field", 4)(9, "mat-label");
      \u0275\u0275text(10, "Your Message (Optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "textarea", 5);
      \u0275\u0275twoWayListener("ngModelChange", function BidActionMessageDialogComponent_Template_textarea_ngModelChange_11_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.message, $event) || (ctx.message = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "mat-dialog-actions", 6)(13, "button", 7);
      \u0275\u0275listener("click", function BidActionMessageDialogComponent_Template_button_click_13_listener() {
        return ctx.onSkip();
      });
      \u0275\u0275elementStart(14, "mat-icon");
      \u0275\u0275text(15, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Skip ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 8);
      \u0275\u0275listener("click", function BidActionMessageDialogComponent_Template_button_click_17_listener() {
        return ctx.onSend();
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "send");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Send Message ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("Message ", ctx.data.professionalName);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("Job: ", ctx.data.jobTitle);
      \u0275\u0275advance(6);
      \u0275\u0275twoWayProperty("ngModel", ctx.message);
    }
  }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], styles: ["\n\n.bid-action-message-dialog[_ngcontent-%COMP%] {\n  min-width: 400px;\n}\n.dialog-subtitle[_ngcontent-%COMP%] {\n  margin: 0 0 8px 0;\n  color: #666;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.dialog-hint[_ngcontent-%COMP%] {\n  margin: 0 0 16px 0;\n  color: #999;\n  font-size: 0.85rem;\n}\n.message-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 16px;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n/*# sourceMappingURL=pending-job-details.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidActionMessageDialogComponent, [{
    type: Component,
    args: [{ selector: "app-bid-action-message-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule], template: `
    <div class="bid-action-message-dialog">
      <h2 mat-dialog-title>Message {{ data.professionalName }}</h2>
      
      <mat-dialog-content>
        <p class="dialog-subtitle">Job: {{ data.jobTitle }}</p>
        <p class="dialog-hint">You can send an optional message to the professional:</p>
        
        <mat-form-field appearance="outline" class="message-field">
          <mat-label>Your Message (Optional)</mat-label>
          <textarea matInput 
            [(ngModel)]="message" 
            placeholder="Type your message here..."
            rows="5"></textarea>
        </mat-form-field>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button (click)="onSkip()">
          <mat-icon>close</mat-icon>
          Skip
        </button>
        <button mat-raised-button color="accent" (click)="onSend()">
          <mat-icon>send</mat-icon>
          Send Message
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;b14e08990768d64bb40c239c4198fe694de64206f6f6abf306a0e2dfef05847b;C:/repos/yProHub/prohub-ui/src/app/features/pending-jobs/pending-job-details.ts */\n.bid-action-message-dialog {\n  min-width: 400px;\n}\n.dialog-subtitle {\n  margin: 0 0 8px 0;\n  color: #666;\n  font-size: 0.9rem;\n  font-weight: 600;\n}\n.dialog-hint {\n  margin: 0 0 16px 0;\n  color: #999;\n  font-size: 0.85rem;\n}\n.message-field {\n  width: 100%;\n  margin-bottom: 16px;\n}\nmat-dialog-actions {\n  gap: 8px;\n}\n/*# sourceMappingURL=pending-job-details.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BidActionMessageDialogComponent, { className: "BidActionMessageDialogComponent", filePath: "src/app/features/pending-jobs/pending-job-details.ts", lineNumber: 942 });
})();
var VerifyCompletionDialogComponent = class _VerifyCompletionDialogComponent {
  dialogRef;
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  close(result) {
    this.dialogRef.close(result);
  }
  static \u0275fac = function VerifyCompletionDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerifyCompletionDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyCompletionDialogComponent, selectors: [["app-verify-completion-dialog"]], decls: 18, vars: 0, consts: [[2, "padding", "8px"], ["mat-dialog-title", ""], [2, "color", "#666", "font-size", ".9rem"], ["align", "end", 2, "gap", "8px"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function VerifyCompletionDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Confirm Work Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p");
      \u0275\u0275text(5, "Are you satisfied with the work done by the professional?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 2);
      \u0275\u0275text(7, "Confirming releases the job as ");
      \u0275\u0275elementStart(8, "strong");
      \u0275\u0275text(9, "Completed");
      \u0275\u0275elementEnd();
      \u0275\u0275text(10, ". This action cannot be undone.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "mat-dialog-actions", 3)(12, "button", 4);
      \u0275\u0275listener("click", function VerifyCompletionDialogComponent_Template_button_click_12_listener() {
        return ctx.close(false);
      });
      \u0275\u0275text(13, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "button", 5);
      \u0275\u0275listener("click", function VerifyCompletionDialogComponent_Template_button_click_14_listener() {
        return ctx.close(true);
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "check_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17, " Yes, Confirm ");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyCompletionDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-verify-completion-dialog",
      standalone: true,
      imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule],
      template: `
    <div style="padding: 8px">
      <h2 mat-dialog-title>Confirm Work Completed</h2>
      <mat-dialog-content>
        <p>Are you satisfied with the work done by the professional?</p>
        <p style="color:#666;font-size:.9rem">Confirming releases the job as <strong>Completed</strong>. This action cannot be undone.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end" style="gap:8px">
        <button mat-button (click)="close(false)">Cancel</button>
        <button mat-raised-button color="accent" (click)="close(true)">
          <mat-icon>check_circle</mat-icon> Yes, Confirm
        </button>
      </mat-dialog-actions>
    </div>
  `
    }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyCompletionDialogComponent, { className: "VerifyCompletionDialogComponent", filePath: "src/app/features/pending-jobs/pending-job-details.ts", lineNumber: 984 });
})();
var DisputeCompletionDialogComponent = class _DisputeCompletionDialogComponent {
  dialogRef;
  reason = "";
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  close() {
    this.dialogRef.close();
  }
  submit() {
    if (this.reason.trim())
      this.dialogRef.close(this.reason);
  }
  static \u0275fac = function DisputeCompletionDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DisputeCompletionDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DisputeCompletionDialogComponent, selectors: [["app-dispute-completion-dialog"]], decls: 17, vars: 2, consts: [[2, "padding", "8px"], ["mat-dialog-title", ""], [2, "color", "#666", "font-size", ".9rem", "margin-bottom", "16px"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "rows", "4", "placeholder", "e.g. Work was not completed as agreed...", 3, "ngModelChange", "ngModel"], ["align", "end", 2, "gap", "8px"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click", "disabled"]], template: function DisputeCompletionDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Raise a Dispute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 2);
      \u0275\u0275text(5, "Describe the issue with the work submitted. Our team will review and mediate.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-form-field", 3)(7, "mat-label");
      \u0275\u0275text(8, "Reason for dispute");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "textarea", 4);
      \u0275\u0275twoWayListener("ngModelChange", function DisputeCompletionDialogComponent_Template_textarea_ngModelChange_9_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.reason, $event) || (ctx.reason = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "mat-dialog-actions", 5)(11, "button", 6);
      \u0275\u0275listener("click", function DisputeCompletionDialogComponent_Template_button_click_11_listener() {
        return ctx.close();
      });
      \u0275\u0275text(12, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function DisputeCompletionDialogComponent_Template_button_click_13_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(14, "mat-icon");
      \u0275\u0275text(15, "flag");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Submit Dispute ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275twoWayProperty("ngModel", ctx.reason);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", !ctx.reason.trim());
    }
  }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DisputeCompletionDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-dispute-completion-dialog",
      standalone: true,
      imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule, FormsModule],
      template: `
    <div style="padding: 8px">
      <h2 mat-dialog-title>Raise a Dispute</h2>
      <mat-dialog-content>
        <p style="color:#666;font-size:.9rem;margin-bottom:16px">Describe the issue with the work submitted. Our team will review and mediate.</p>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Reason for dispute</mat-label>
          <textarea matInput [(ngModel)]="reason" rows="4" placeholder="e.g. Work was not completed as agreed..."></textarea>
        </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions align="end" style="gap:8px">
        <button mat-button (click)="close()">Cancel</button>
        <button mat-raised-button color="warn" (click)="submit()" [disabled]="!reason.trim()">
          <mat-icon>flag</mat-icon> Submit Dispute
        </button>
      </mat-dialog-actions>
    </div>
  `
    }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DisputeCompletionDialogComponent, { className: "DisputeCompletionDialogComponent", filePath: "src/app/features/pending-jobs/pending-job-details.ts", lineNumber: 1013 });
})();
var SubmitReviewDialogComponent = class _SubmitReviewDialogComponent {
  dialogRef;
  rating = 0;
  hovered = 0;
  comment = "";
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  setRating(s) {
    this.rating = s;
  }
  submit() {
    if (this.rating > 0)
      this.dialogRef.close({ rating: this.rating, comment: this.comment || void 0 });
  }
  static \u0275fac = function SubmitReviewDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SubmitReviewDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SubmitReviewDialogComponent, selectors: [["app-submit-review-dialog"]], decls: 21, vars: 7, consts: [[2, "padding", "8px"], ["mat-dialog-title", ""], [2, "color", "#666", "font-size", ".9rem", "margin-bottom", "16px"], [1, "star-row", 2, "display", "flex", "gap", "8px", "margin-bottom", "20px"], ["mat-icon-button", "", "type", "button", 3, "color", "click", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], [2, "margin-left", "8px", "font-weight", "600", "align-self", "center"], ["appearance", "outline", 2, "width", "100%"], ["matInput", "", "rows", "3", "placeholder", "Share your experience...", 3, "ngModelChange", "ngModel", "ngModelOptions"], ["align", "end", 2, "gap", "8px"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["mat-icon-button", "", "type", "button", 3, "click", "mouseenter", "mouseleave"]], template: function SubmitReviewDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Leave a Review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "p", 2);
      \u0275\u0275text(5, "Rate your experience with this professional.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "div", 3);
      \u0275\u0275template(7, SubmitReviewDialogComponent_button_7_Template, 3, 2, "button", 4);
      \u0275\u0275elementStart(8, "span", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-form-field", 6)(11, "mat-label");
      \u0275\u0275text(12, "Comment (optional)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "textarea", 7);
      \u0275\u0275twoWayListener("ngModelChange", function SubmitReviewDialogComponent_Template_textarea_ngModelChange_13_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.comment, $event) || (ctx.comment = $event);
        return $event;
      });
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "mat-dialog-actions", 8)(15, "button", 9);
      \u0275\u0275listener("click", function SubmitReviewDialogComponent_Template_button_click_15_listener() {
        return ctx.dialogRef.close();
      });
      \u0275\u0275text(16, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 10);
      \u0275\u0275listener("click", function SubmitReviewDialogComponent_Template_button_click_17_listener() {
        return ctx.submit();
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "send");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Submit Review ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(5, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.rating > 0 ? ctx.rating + " / 5" : "Select rating");
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.comment);
      \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(6, _c1));
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.rating === 0);
    }
  }, dependencies: [CommonModule, NgForOf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SubmitReviewDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-submit-review-dialog",
      standalone: true,
      imports: [CommonModule, FormsModule, MatButtonModule, MatIconModule, MatDialogModule, MatFormFieldModule, MatInputModule],
      template: `
    <div style="padding:8px">
      <h2 mat-dialog-title>Leave a Review</h2>
      <mat-dialog-content>
        <p style="color:#666;font-size:.9rem;margin-bottom:16px">Rate your experience with this professional.</p>
        <div class="star-row" style="display:flex;gap:8px;margin-bottom:20px">
          <button *ngFor="let s of [1,2,3,4,5]" mat-icon-button type="button"
                  (click)="setRating(s)" [style.color]="s <= hovered || s <= rating ? '#f59e0b' : '#ccc'"
                  (mouseenter)="hovered=s" (mouseleave)="hovered=0">
            <mat-icon>star</mat-icon>
          </button>
          <span style="margin-left:8px;font-weight:600;align-self:center">{{ rating > 0 ? rating + ' / 5' : 'Select rating' }}</span>
        </div>
        <mat-form-field appearance="outline" style="width:100%">
          <mat-label>Comment (optional)</mat-label>
          <textarea matInput [(ngModel)]="comment" [ngModelOptions]="{standalone:true}" rows="3" placeholder="Share your experience..."></textarea>
        </mat-form-field>
      </mat-dialog-content>
      <mat-dialog-actions align="end" style="gap:8px">
        <button mat-button (click)="dialogRef.close()">Cancel</button>
        <button mat-raised-button color="primary" (click)="submit()" [disabled]="rating === 0">
          <mat-icon>send</mat-icon> Submit Review
        </button>
      </mat-dialog-actions>
    </div>
  `
    }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SubmitReviewDialogComponent, { className: "SubmitReviewDialogComponent", filePath: "src/app/features/pending-jobs/pending-job-details.ts", lineNumber: 1054 });
})();
export {
  BidActionMessageDialogComponent,
  BidConfirmationDialogComponent,
  BidMessageDialogComponent,
  DisputeCompletionDialogComponent,
  PendingJobDetailsComponent,
  SubmitReviewDialogComponent,
  VerifyCompletionDialogComponent
};
//# sourceMappingURL=chunk-UYOCNXX2.js.map

