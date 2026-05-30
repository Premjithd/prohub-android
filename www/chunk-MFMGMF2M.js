import {
  PaymentService,
  RazorpayCheckoutComponent
} from "./chunk-G3KJX327.js";
import {
  MatButtonToggle,
  MatButtonToggleGroup,
  MatButtonToggleModule
} from "./chunk-5DCVIFV7.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-LJRZZZLH.js";
import {
  MatExpansionModule,
  MatExpansionPanel
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
import "./chunk-DLWAKDLA.js";
import "./chunk-HU3FUKMP.js";
import "./chunk-Z5YC3QOU.js";
import "./chunk-YFVGD4AB.js";
import {
  MatCard,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-LJCCDA2I.js";
import "./chunk-RAZWGAZW.js";
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
import "./chunk-QP32PFWE.js";
import {
  Auth
} from "./chunk-A4EHLAJD.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NMZ5GJTW.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  Inject,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  Subject,
  ViewChildren,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery
} from "./chunk-ANTPJ2CK.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/pending-jobs/pending-jobs.ts
var _c0 = () => [];
function PendingJobsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function PendingJobsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon");
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
function PendingJobsComponent_div_14_mat_button_toggle_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const status_r3 = ctx.$implicit;
    \u0275\u0275property("value", status_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", status_r3, " ");
  }
}
function PendingJobsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span", 14);
    \u0275\u0275text(2, "Filter by Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-button-toggle-group", 15);
    \u0275\u0275listener("change", function PendingJobsComponent_div_14_Template_mat_button_toggle_group_change_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onFilterChange($event.value));
    });
    \u0275\u0275template(4, PendingJobsComponent_div_14_mat_button_toggle_4_Template, 2, 2, "mat-button-toggle", 16);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.selectedStatusFilter);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.statusFilters);
  }
}
function PendingJobsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your pending jobs...");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon", 20);
    \u0275\u0275text(2, "work_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No Jobs To Show");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You can post new jobs by clicking the button below.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 21)(8, "mat-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Post a New Job ");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobsComponent_div_17_tr_20_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "mat-progress-bar", 39);
    \u0275\u0275elementStart(2, "span", 40);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r0.getJobPhaseProgress(job_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getJobPhaseProgress(job_r5), "%");
  }
}
function PendingJobsComponent_div_17_tr_20_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 41);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function PendingJobsComponent_div_17_tr_20_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 42);
    \u0275\u0275listener("click", function PendingJobsComponent_div_17_tr_20_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const job_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleBidsExpansion(job_r5.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.openBidsJobId === job_r5.id ? "expand_less" : "expand_more");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.openBidsJobId === job_r5.id ? "Hide" : "Show", " Bids (", (ctx_r0.jobBidsMap.get(job_r5.id) || \u0275\u0275pureFunction0(3, _c0)).length, ") ");
  }
}
function PendingJobsComponent_div_17_tr_20_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function PendingJobsComponent_div_17_tr_20_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const job_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.initiatePaymentForAssignedJob(job_r5.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "payment");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pay Now ");
    \u0275\u0275elementEnd();
  }
}
function PendingJobsComponent_div_17_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 29)(1, "td", 30)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 31);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "mat-chip-set")(9, "mat-chip", 32);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td");
    \u0275\u0275template(12, PendingJobsComponent_div_17_tr_20_div_12_Template, 4, 2, "div", 33)(13, PendingJobsComponent_div_17_tr_20_span_13_Template, 2, 0, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "td", 25)(15, "button", 35);
    \u0275\u0275listener("click", function PendingJobsComponent_div_17_tr_20_Template_button_click_15_listener() {
      const job_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewJobDetails(job_r5.id));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(18, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, PendingJobsComponent_div_17_tr_20_button_19_Template, 4, 4, "button", 36)(20, PendingJobsComponent_div_17_tr_20_button_20_Template, 4, 0, "button", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const job_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("completed", job_r5.status === "Completed");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(job_r5.title);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((job_r5.category == null ? null : job_r5.category.name) || "Uncategorized");
    \u0275\u0275advance(3);
    \u0275\u0275property("color", ctx_r0.getStatusColor(job_r5.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r5.status === "In Progress");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r5.status !== "In Progress");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", job_r5.status === "Open" && (ctx_r0.jobBidsMap.get(job_r5.id) || \u0275\u0275pureFunction0(10, _c0)).length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r5.assignedProId && !((tmp_11_0 = ctx_r0.paymentStatusMap.get(job_r5.id)) == null ? null : tmp_11_0.completed));
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275element(1, "mat-spinner", 53);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading bids...");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54)(1, "mat-icon");
    \u0275\u0275text(2, "mail_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No bids received yet");
    \u0275\u0275elementEnd()();
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 77)(1, "mat-icon");
    \u0275\u0275text(2, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bid_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", bid_r9.pro == null ? null : bid_r9.pro.phoneNumber, " ");
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2, "Commence Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, bid_r9.commenceDate, "MMM dd, yyyy"));
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2, "Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", bid_r9.expectedDurationDays, " days");
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 66)(1, "span", 67);
    \u0275\u0275text(2, "Quote Valid Until");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 78);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, bid_r9.expiresAt, "MMM dd, yyyy"));
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "span", 67);
    \u0275\u0275text(2, "Materials & Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 80);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bid_r9.materialsDescription);
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "span", 67);
    \u0275\u0275text(2, "Professional's Message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 82);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bid_r9.bidMessage);
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_button_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 83);
    \u0275\u0275listener("click", function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_button_25_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const bid_r9 = \u0275\u0275nextContext().$implicit;
      const job_r11 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.acceptBid(job_r11.id, bid_r9));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Accept ");
    \u0275\u0275elementEnd();
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 84);
    \u0275\u0275listener("click", function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const bid_r9 = \u0275\u0275nextContext().$implicit;
      const job_r11 = \u0275\u0275nextContext(3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.rejectBid(job_r11.id, bid_r9));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Reject ");
    \u0275\u0275elementEnd();
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58)(2, "div", 59)(3, "h5", 60);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 61);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_p_7_Template, 4, 1, "p", 62);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 63)(9, "mat-chip-set")(10, "mat-chip", 64);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(12, "div", 65)(13, "div", 66)(14, "span", 67);
    \u0275\u0275text(15, "Quoted Price");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 68);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_19_Template, 6, 4, "div", 69)(20, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_20_Template, 5, 1, "div", 69)(21, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_21_Template, 6, 4, "div", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_22_Template, 5, 1, "div", 70)(23, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_div_23_Template, 5, 1, "div", 71);
    \u0275\u0275elementStart(24, "div", 72);
    \u0275\u0275template(25, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_button_25_Template, 4, 0, "button", 73)(26, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_button_26_Template, 4, 0, "button", 74);
    \u0275\u0275elementStart(27, "button", 75);
    \u0275\u0275listener("click", function PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_Template_button_click_27_listener() {
      const bid_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r0.messageBidProfessional(bid_r9));
    });
    \u0275\u0275elementStart(28, "mat-icon");
    \u0275\u0275text(29, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Message ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 76);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const bid_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(bid_r9.pro == null ? null : bid_r9.pro.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((bid_r9.pro == null ? null : bid_r9.pro.proName) || "Professional");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r9.pro == null ? null : bid_r9.pro.phoneNumber);
    \u0275\u0275advance(3);
    \u0275\u0275property("color", ctx_r0.getBidStatusColor(bid_r9.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bid_r9.status || "Pending", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(18, 14, bid_r9.bidAmount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bid_r9.commenceDate);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r9.expectedDurationDays);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r9.expiresAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r9.materialsDescription);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r9.bidMessage);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bid_r9.status === "Pending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bid_r9.status === "Pending");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" Bid submitted on ", \u0275\u0275pipeBind2(33, 17, bid_r9.createdAt, "MMM dd, yyyy HH:mm"), " ");
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, PendingJobsComponent_div_17_tr_21_div_2_div_7_div_1_Template, 34, 20, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r11 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.jobBidsMap.get(job_r11.id));
  }
}
function PendingJobsComponent_div_17_tr_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "h4", 48)(2, "mat-icon");
    \u0275\u0275text(3, "how_to_vote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, PendingJobsComponent_div_17_tr_21_div_2_div_5_Template, 4, 0, "div", 49)(6, PendingJobsComponent_div_17_tr_21_div_2_div_6_Template, 5, 0, "div", 50)(7, PendingJobsComponent_div_17_tr_21_div_2_div_7_Template, 2, 1, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Bids Received (", (ctx_r0.jobBidsMap.get(job_r11.id) || \u0275\u0275pureFunction0(4, _c0)).length, ") ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.loadingBidsMap.get(job_r11.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingBidsMap.get(job_r11.id) && (ctx_r0.jobBidsMap.get(job_r11.id) || \u0275\u0275pureFunction0(5, _c0)).length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.loadingBidsMap.get(job_r11.id) && (ctx_r0.jobBidsMap.get(job_r11.id) || \u0275\u0275pureFunction0(6, _c0)).length > 0);
  }
}
function PendingJobsComponent_div_17_tr_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 44)(1, "td", 45);
    \u0275\u0275template(2, PendingJobsComponent_div_17_tr_21_div_2_Template, 8, 7, "div", 46);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("hidden", ctx_r0.openBidsJobId !== job_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r11.status === "Open");
  }
}
function PendingJobsComponent_div_17_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 85)(1, "button", 86);
    \u0275\u0275listener("click", function PendingJobsComponent_div_17_div_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 87);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 88);
    \u0275\u0275listener("click", function PendingJobsComponent_div_17_div_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Page ", ctx_r0.page, " of ", ctx_r0.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page >= ctx_r0.totalPages);
  }
}
function PendingJobsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "mat-card", 23)(2, "mat-card-header")(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-card-content")(6, "table", 24)(7, "thead")(8, "tr")(9, "th");
    \u0275\u0275text(10, "Job Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th", 25);
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, PendingJobsComponent_div_17_tr_20_Template, 21, 11, "tr", 26)(21, PendingJobsComponent_div_17_tr_21_Template, 3, 3, "tr", 27);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, PendingJobsComponent_div_17_div_22_Template, 9, 4, "div", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("My Jobs (", ctx_r0.total, ")");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.pendingJobs);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.pendingJobs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages > 1);
  }
}
function BidConfirmDialogComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "strong");
    \u0275\u0275text(2, "Bid Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 15)(4, "span");
    \u0275\u0275text(5, "$");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.data.bidAmount);
  }
}
function BidConfirmDialogComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " You're about to accept this bid. The professional will be assigned to this job. ");
    \u0275\u0275elementEnd();
  }
}
function BidConfirmDialogComponent_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " This bid will be rejected and the professional will be notified. ");
    \u0275\u0275elementEnd();
  }
}
var PendingJobsComponent = class _PendingJobsComponent {
  jobService;
  auth;
  cdr;
  router;
  dialog;
  paymentService;
  expansionPanels;
  pendingJobs = [];
  jobBidsMap = /* @__PURE__ */ new Map();
  loadingBidsMap = /* @__PURE__ */ new Map();
  acceptedBidMap = /* @__PURE__ */ new Map();
  paymentStatusMap = /* @__PURE__ */ new Map();
  loadingPaymentMap = /* @__PURE__ */ new Map();
  openBidsJobId = null;
  loading = true;
  errorMessage = "";
  successMessage = "";
  assignedProMap = /* @__PURE__ */ new Map();
  // Pagination
  page = 1;
  pageSize = 20;
  total = 0;
  get totalPages() {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }
  // Filter
  statusFilters = ["All", "Open", "In Progress", "Completion Submitted", "Completed", "Cancelled"];
  selectedStatusFilter = "All";
  destroy$ = new Subject();
  constructor(jobService, auth, cdr, router, dialog, paymentService) {
    this.jobService = jobService;
    this.auth = auth;
    this.cdr = cdr;
    this.router = router;
    this.dialog = dialog;
    this.paymentService = paymentService;
  }
  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.loadPendingJobs();
    } else {
      this.errorMessage = "Please login to view your pending jobs.";
      this.loading = false;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadPendingJobs() {
    this.loading = true;
    this.errorMessage = "";
    const statusParam = this.selectedStatusFilter === "All" ? void 0 : this.selectedStatusFilter;
    this.jobService.getMyJobs(this.page, this.pageSize, statusParam).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        this.pendingJobs = result.items;
        this.total = result.total;
        this.pendingJobs.forEach((job) => {
          if ((job.status.toLowerCase() === "in progress" || job.assignedProId) && job.assignedPro) {
            const proName = job.assignedPro.firstName && job.assignedPro.lastName ? `${job.assignedPro.firstName} ${job.assignedPro.lastName}` : job.assignedPro.proName || "Professional";
            this.assignedProMap.set(job.id, {
              name: proName,
              email: job.assignedPro.email || ""
            });
            this.loadBidsForJob(job.id);
            this.loadPaymentStatusForJob(job.id);
          }
        });
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error loading pending jobs:", error);
        let errorMsg = "Failed to load your pending jobs.";
        if (error.status === 0) {
          errorMsg = "Connection error. Please ensure the API server is running on http://10.0.2.2:5101";
        } else if (error.status === 401) {
          errorMsg = "Unauthorized. Please login again.";
        } else if (error.status === 403) {
          errorMsg = "Access denied. You do not have permission to view these jobs.";
        } else if (error.status === 404) {
          errorMsg = "No jobs found.";
        } else if (error.status === 500) {
          errorMsg = "Server error. Please try again later.";
        } else if (error.message) {
          errorMsg = error.message;
        }
        this.errorMessage = errorMsg;
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  deleteJob(jobId) {
    const dialogRef = this.dialog.open(DeleteConfirmDialogComponent, {
      width: "400px",
      data: { jobTitle: "this job" }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobService.deleteJob(jobId).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = "Job deleted successfully!";
            this.pendingJobs = this.pendingJobs.filter((job) => job.id !== jobId);
            this.cdr.markForCheck();
            setTimeout(() => {
              this.successMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
          },
          error: (error) => {
            console.error("Error deleting job:", error);
            this.errorMessage = "Failed to delete the job. Please try again.";
            this.cdr.markForCheck();
          }
        });
      }
    });
  }
  editJob(jobId) {
    this.router.navigate(["/edit-job", jobId]);
  }
  formatBudget(budget) {
    const budgetMap = {
      "under-100": "Under \u20B95,000",
      "100-250": "\u20B95,000 - \u20B912,500",
      "250-500": "\u20B912,500 - \u20B925,000",
      "500-1000": "\u20B925,000 - \u20B950,000",
      "over-1000": "Over \u20B950,000"
    };
    return budgetMap[budget] || budget;
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
  getStatusColor(status) {
    switch (status.toLowerCase()) {
      case "open":
        return "accent";
      case "assigned":
        return "warn";
      case "completed":
        return "primary";
      default:
        return "";
    }
  }
  loadBidsForJob(jobId) {
    this.openBidsJobId = jobId;
    if (this.jobBidsMap.has(jobId)) {
      this.extractAcceptedBid(jobId);
      return;
    }
    this.loadingBidsMap.set(jobId, true);
    this.jobService.getJobBids(jobId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (bids) => {
        console.log(`Bids loaded for job ${jobId}:`, bids);
        this.jobBidsMap.set(jobId, bids);
        this.extractAcceptedBid(jobId);
        this.loadingBidsMap.set(jobId, false);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error(`Error loading bids for job ${jobId}:`, error);
        this.jobBidsMap.set(jobId, []);
        this.loadingBidsMap.set(jobId, false);
        this.cdr.markForCheck();
      }
    });
  }
  extractAcceptedBid(jobId) {
    const bids = this.jobBidsMap.get(jobId);
    if (bids && bids.length > 0) {
      const acceptedBid = bids.find((bid) => bid.status === "Accepted");
      if (acceptedBid) {
        this.acceptedBidMap.set(jobId, acceptedBid);
      }
    }
  }
  loadPaymentStatusForJob(jobId) {
    if (this.paymentStatusMap.has(jobId)) {
      return;
    }
    this.loadingPaymentMap.set(jobId, true);
    this.paymentService.getPaymentByJob(jobId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (payment) => {
        console.log(`Payment status loaded for job ${jobId}:`, payment);
        const completed = payment.status === "Completed";
        this.paymentStatusMap.set(jobId, {
          status: payment.status,
          completed
        });
        this.loadingPaymentMap.set(jobId, false);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error(`Error loading payment status for job ${jobId}:`, error);
        this.paymentStatusMap.set(jobId, {
          status: "Not Found",
          completed: false
        });
        this.loadingPaymentMap.set(jobId, false);
        this.cdr.markForCheck();
      }
    });
  }
  onBidsExpandedChange(jobId, isExpanded) {
    if (isExpanded) {
      if (this.expansionPanels) {
        this.expansionPanels.forEach((panel, index) => {
          if (index !== this.pendingJobs.findIndex((j) => j.id === jobId)) {
            panel.close();
          }
        });
      }
      this.openBidsJobId = jobId;
      this.loadBidsForJob(jobId);
    } else if (this.openBidsJobId === jobId) {
      this.openBidsJobId = null;
    }
  }
  // getProName(bid: JobBid): string {
  //   if (bid.pro?.proName) {
  //     return bid.pro.proName;
  //   }
  //   return 'Professional';
  // }
  getBidStatus(status) {
    switch (status.toLowerCase()) {
      case "pending":
        return "Pending Review";
      case "accepted":
        return "Accepted";
      case "rejected":
        return "Rejected";
      case "withdrawn":
        return "Withdrawn";
      default:
        return status;
    }
  }
  getBidStatusColor(status) {
    switch (status.toLowerCase()) {
      case "pending":
        return "warn";
      case "accepted":
        return "accent";
      case "rejected":
        return "primary";
      case "withdrawn":
        return "primary";
      default:
        return "";
    }
  }
  acceptBid(jobId, bid) {
    const dialogRef = this.dialog.open(BidConfirmDialogComponent, {
      width: "420px",
      data: {
        action: "accept",
        proName: bid.pro?.proName || "Professional",
        bidAmount: bid.bidAmount || "Not specified"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobService.acceptBid(jobId, bid.id).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = "Bid accepted successfully!";
            bid.status = "Accepted";
            this.cdr.markForCheck();
            setTimeout(() => {
              this.successMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
            setTimeout(() => {
              this.openPaymentDialog(jobId, bid);
            }, 500);
          },
          error: (error) => {
            console.error("Error accepting bid:", error);
            this.errorMessage = "Failed to accept bid. Please try again.";
            this.cdr.markForCheck();
          }
        });
      }
    });
  }
  // Open payment dialog for bid acceptance
  openPaymentDialog(jobId, bid) {
    if (!bid.bidAmount) {
      this.errorMessage = "Bid amount not available for payment.";
      return;
    }
    const job = this.pendingJobs.find((j) => j.id === jobId);
    if (!job)
      return;
    const paymentDialogRef = this.dialog.open(RazorpayCheckoutComponent, {
      width: "600px",
      maxHeight: "90vh",
      data: {
        jobId,
        bidId: bid.id,
        bidAmount: bid.bidAmount,
        jobTitle: job.title,
        consumerName: this.auth.getName() || "User",
        consumerEmail: job.user?.email || "",
        consumerPhone: job.user?.phoneNumber || ""
      }
    });
    paymentDialogRef.afterClosed().subscribe((result) => {
      if (result && result.success) {
        this.successMessage = "Payment completed successfully!";
        this.paymentStatusMap.set(jobId, {
          status: "Completed",
          completed: true
        });
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
  // Initiate payment for an already assigned job
  initiatePaymentForAssignedJob(jobId) {
    const job = this.pendingJobs.find((j) => j.id === jobId);
    if (!job || !job.assignedProId) {
      this.errorMessage = "Job not assigned to a professional.";
      return;
    }
    const bids = this.jobBidsMap.get(jobId) || [];
    const acceptedBid = bids.find((bid) => bid.status === "Accepted");
    if (!acceptedBid || !acceptedBid.bidAmount) {
      this.errorMessage = "Bid information not available for payment.";
      return;
    }
    this.openPaymentDialog(jobId, acceptedBid);
  }
  rejectBid(jobId, bid) {
    const dialogRef = this.dialog.open(BidConfirmDialogComponent, {
      width: "420px",
      data: {
        action: "reject",
        proName: bid.pro?.proName || "Professional"
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobService.rejectBid(jobId, bid.id).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = "Bid rejected successfully!";
            bid.status = "Rejected";
            this.cdr.markForCheck();
            setTimeout(() => {
              this.successMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
          },
          error: (error) => {
            console.error("Error rejecting bid:", error);
            this.errorMessage = "Failed to reject bid. Please try again.";
            this.cdr.markForCheck();
          }
        });
      }
    });
  }
  // Get job phases from job
  getJobPhases(job) {
    if (!job.jobPhases)
      return [];
    let phases = [];
    if (typeof job.jobPhases === "string") {
      try {
        phases = JSON.parse(job.jobPhases);
      } catch (e) {
        return [];
      }
    } else if (Array.isArray(job.jobPhases)) {
      phases = job.jobPhases;
    } else {
      return [];
    }
    return phases.map((phase) => ({
      id: phase.id || phase.Id || "",
      title: phase.title || phase.Title || "",
      description: phase.description || phase.Description || "",
      isCompleted: phase.isCompleted !== void 0 ? phase.isCompleted : phase.IsCompleted || false,
      completedAt: phase.completedAt || phase.CompletedAt
    }));
  }
  // Get phase progress percentage for a job
  getJobPhaseProgress(job) {
    const phases = this.getJobPhases(job);
    if (phases.length === 0)
      return 0;
    const completed = phases.filter((p) => p.isCompleted).length;
    return Math.round(completed / phases.length * 100);
  }
  onFilterChange(status) {
    this.selectedStatusFilter = status;
    this.page = 1;
    this.loadPendingJobs();
  }
  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadPendingJobs();
    }
  }
  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadPendingJobs();
    }
  }
  viewJobDetails(jobId) {
    this.router.navigate(["/pending-jobs", jobId]);
  }
  getActiveFilterCount() {
    return 1;
  }
  sendMessageToPro(jobId, message, messageInput) {
    if (!message.trim()) {
      this.errorMessage = "Please enter a message before sending.";
      setTimeout(() => {
        this.errorMessage = "";
        this.cdr.markForCheck();
      }, 3e3);
      return;
    }
    this.successMessage = "Message sent to professional successfully!";
    messageInput.value = "";
    this.cdr.markForCheck();
    setTimeout(() => {
      this.successMessage = "";
      this.cdr.markForCheck();
    }, 3e3);
  }
  // Toggle bid details expansion for a job
  toggleBidsExpansion(jobId) {
    if (this.openBidsJobId === jobId) {
      this.openBidsJobId = null;
    } else {
      this.openBidsJobId = jobId;
      if (!this.jobBidsMap.has(jobId) || (this.jobBidsMap.get(jobId) || []).length === 0) {
        this.loadBidsForJob(jobId);
      }
    }
    this.cdr.markForCheck();
  }
  // Message a professional who submitted a bid
  messageBidProfessional(bid) {
    if (!bid.pro || !bid.pro.id) {
      this.errorMessage = "Professional information not available";
      return;
    }
    this.successMessage = `Message interface for ${bid.pro.businessName} would open here`;
    this.cdr.markForCheck();
    setTimeout(() => {
      this.successMessage = "";
      this.cdr.markForCheck();
    }, 3e3);
  }
  static \u0275fac = function PendingJobsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingJobsComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(PaymentService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PendingJobsComponent, selectors: [["app-pending-jobs"]], viewQuery: function PendingJobsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MatExpansionPanel, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.expansionPanels = _t);
    }
  }, decls: 18, vars: 6, consts: [[1, "pending-jobs-container"], [1, "page-header"], [1, "header-row"], [1, "subtitle"], ["routerLink", "/my-pros", 1, "pros-link"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "status-filter", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "jobs-list-container", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "status-filter"], [1, "filter-label"], [1, "status-toggle-group", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "loading-container"], [1, "empty-state"], [1, "empty-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/post-job"], [1, "jobs-list-container"], [1, "jobs-list-card"], [1, "jobs-table"], [1, "actions"], ["class", "job-row", 3, "completed", 4, "ngFor", "ngForOf"], ["class", "bids-expansion-row", 3, "hidden", 4, "ngFor", "ngForOf"], ["class", "pagination-controls", 4, "ngIf"], [1, "job-row"], [1, "title-cell"], [1, "category-badge"], ["selected", "", "size", "small", 3, "color"], ["class", "progress-cell", 4, "ngIf"], ["class", "progress-na", 4, "ngIf"], ["mat-raised-button", "", "matTooltip", "View Details", 1, "view-button", 3, "click"], ["mat-button", "", "class", "view-bids-button", "matTooltip", "View Bids", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "accent", "class", "payment-button", "matTooltip", "Make Payment", 3, "click", 4, "ngIf"], [1, "progress-cell"], ["mode", "determinate", "color", "accent", 3, "value"], [1, "progress-percent"], [1, "progress-na"], ["mat-button", "", "matTooltip", "View Bids", 1, "view-bids-button", 3, "click"], ["mat-button", "", "color", "accent", "matTooltip", "Make Payment", 1, "payment-button", 3, "click"], [1, "bids-expansion-row"], ["colspan", "6", 1, "bids-expansion-cell"], ["class", "bids-expansion-content", 4, "ngIf"], [1, "bids-expansion-content"], [1, "bids-title"], ["class", "bids-loading", 4, "ngIf"], ["class", "no-bids", 4, "ngIf"], ["class", "bids-grid", 4, "ngIf"], [1, "bids-loading"], ["diameter", "30"], [1, "no-bids"], [1, "bids-grid"], ["class", "bid-card", 4, "ngFor", "ngForOf"], [1, "bid-card"], [1, "bid-card-header"], [1, "pro-info"], [1, "pro-name"], [1, "pro-contact"], ["class", "pro-phone", 4, "ngIf"], [1, "bid-status"], ["selected", "", 3, "color"], [1, "bid-details-grid"], [1, "detail-item"], [1, "label"], [1, "value", "amount"], ["class", "detail-item", 4, "ngIf"], ["class", "bid-materials", 4, "ngIf"], ["class", "bid-message", 4, "ngIf"], [1, "bid-card-actions"], ["mat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "primary", 3, "click"], [1, "bid-date"], [1, "pro-phone"], [1, "value"], [1, "bid-materials"], [1, "materials-text"], [1, "bid-message"], [1, "message-text"], ["mat-button", "", "color", "accent", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], [1, "pagination-controls"], ["mat-icon-button", "", "aria-label", "Previous page", 3, "click", "disabled"], [1, "page-info"], ["mat-icon-button", "", "aria-label", "Next page", 3, "click", "disabled"]], template: function PendingJobsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5, "My Jobs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Manage and track your posted jobs by status");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 4)(9, "mat-icon");
      \u0275\u0275text(10, "engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " My Pros ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, PendingJobsComponent_div_12_Template, 5, 1, "div", 5)(13, PendingJobsComponent_div_13_Template, 5, 1, "div", 6)(14, PendingJobsComponent_div_14_Template, 5, 2, "div", 7)(15, PendingJobsComponent_div_15_Template, 4, 0, "div", 8)(16, PendingJobsComponent_div_16_Template, 11, 0, "div", 9)(17, PendingJobsComponent_div_17_Template, 23, 4, "div", 10);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pendingJobs.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pendingJobs.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
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
    MatExpansionModule,
    MatDialogModule,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatTooltip,
    MatButtonToggleModule,
    MatButtonToggleGroup,
    MatButtonToggle,
    DecimalPipe,
    DatePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.pending-jobs-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  width: 90%;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: #1a1a1a;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n  margin: 0;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  padding: 1.2rem 1.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem 0;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.95rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  border: 2px solid #ddd;\n  color: #666;\n  background: white;\n  transition: all 0.3s ease;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]:first-child {\n  border-radius: 6px 0 0 6px;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 6px 6px 0;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: none;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-color: #667eea;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]:hover:not(.mat-mdc-button-toggle-checked) {\n  background-color: #f5f5f5;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #666;\n  font-size: 1.1rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #666;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  color: #ccc;\n  margin: 0 auto 1rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  color: #333;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 2rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(102, 126, 234, 0.1);\n  overflow: hidden;\n  background: white;\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(102, 126, 234, 0.2);\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 2px solid #f0f0f0;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: "\\1f4cb";\n  font-size: 1.8rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      #f8f9fa,\n      #f0f0f0);\n  position: sticky;\n  top: 0;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: left;\n  font-weight: 700;\n  color: #333;\n  border-bottom: 2px solid #ddd;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  background-color: #f8f9fa;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.actions[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 140px;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9ff;\n  box-shadow: inset 0 0 0 1px rgba(102, 126, 234, 0.1254901961);\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row.completed[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  background-color: #f5f5f5;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row.completed[_ngcontent-%COMP%]   .title-cell[_ngcontent-%COMP%] {\n  color: #999;\n  text-decoration: line-through;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  vertical-align: middle;\n  color: #666;\n  font-size: 0.95rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.title-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n  font-size: 1rem;\n  min-width: 250px;\n  max-width: 350px;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .bid-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 160px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  white-space: nowrap;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button.view-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button.view-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button.view-bids-button[_ngcontent-%COMP%] {\n  color: #1976d2;\n  margin-left: 0.5rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button.view-bids-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.25rem;\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button.view-bids-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(25, 118, 210, 0.08);\n}\n.bids-expansion-row.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  border-top: 2px solid #ddd;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 0 1.5rem 0;\n  font-size: 1.2rem;\n  color: #333;\n  font-weight: 600;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1976d2;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-loading[_ngcontent-%COMP%], \n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .no-bids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  text-align: center;\n  color: #666;\n  background: white;\n  border-radius: 8px;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .no-bids[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  color: #ccc;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .no-bids[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n  transform: translateY(-4px);\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-header[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-header[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0;\n  font-size: 0.9rem;\n  opacity: 0.95;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-header[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   p.pro-phone[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-header[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   p.pro-phone[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-header[_ngcontent-%COMP%]   .bid-status[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%] {\n  gap: 0.5rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-header[_ngcontent-%COMP%]   .bid-status[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]     mat-chip {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n  border: 1px solid rgba(255, 255, 255, 0.4) !important;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #333;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value.amount[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #1976d2;\n  font-weight: 600;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-materials[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-materials[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-materials[_ngcontent-%COMP%]   .materials-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #555;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-message[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n  background: #f9f9f9;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-message[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-message[_ngcontent-%COMP%]   .message-text[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #555;\n  line-height: 1.5;\n  font-style: italic;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .bids-grid[_ngcontent-%COMP%]   .bid-card[_ngcontent-%COMP%]   .bid-date[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  font-size: 0.85rem;\n  color: #999;\n  text-align: right;\n}\n.bids-expansion-row[_ngcontent-%COMP%]   .bids-expansion-cell[_ngcontent-%COMP%]   .bids-expansion-content[_ngcontent-%COMP%]   .no-expansion[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  background: white;\n  border-radius: 8px;\n  color: #999;\n}\n@media (max-width: 1024px) {\n  .pending-jobs-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .pending-jobs-container[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%] {\n    border-radius: 8px;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.75rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 1rem 0.5rem;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.title-cell[_ngcontent-%COMP%] {\n    min-width: 150px;\n    max-width: 200px;\n  }\n  .pending-jobs-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    min-width: 100px;\n  }\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.pros-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #e8f5e9;\n  color: #388e3c;\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.pros-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pros-link[_ngcontent-%COMP%]:hover {\n  background: #c8e6c9;\n}\n/*# sourceMappingURL=pending-jobs.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingJobsComponent, [{
    type: Component,
    args: [{ selector: "app-pending-jobs", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatChipsModule,
      MatExpansionModule,
      MatDialogModule,
      MatProgressBarModule,
      MatTooltipModule,
      MatButtonToggleModule
    ], template: `<div class="pending-jobs-container">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <div class="header-row">\r
      <div>\r
        <h1>My Jobs</h1>\r
        <p class="subtitle">Manage and track your posted jobs by status</p>\r
      </div>\r
      <a routerLink="/my-pros" class="pros-link">\r
        <mat-icon>engineering</mat-icon>\r
        My Pros\r
      </a>\r
    </div>\r
  </div>\r
\r
  <!-- Success Message -->\r
  <div *ngIf="successMessage" class="alert alert-success">\r
    <mat-icon>check_circle</mat-icon>\r
    <span>{{ successMessage }}</span>\r
  </div>\r
\r
  <!-- Error Message -->\r
  <div *ngIf="errorMessage" class="alert alert-error">\r
    <mat-icon>error</mat-icon>\r
    <span>{{ errorMessage }}</span>\r
  </div>\r
\r
  <!-- Status Filter -->\r
  <div *ngIf="!loading" class="status-filter">\r
    <span class="filter-label">Filter by Status:</span>\r
    <mat-button-toggle-group \r
      [value]="selectedStatusFilter" \r
      (change)="onFilterChange($event.value)"\r
      class="status-toggle-group">\r
      <mat-button-toggle *ngFor="let status of statusFilters" [value]="status">\r
        {{ status }}\r
      </mat-button-toggle>\r
    </mat-button-toggle-group>\r
  </div>\r
\r
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-container">\r
    <mat-spinner></mat-spinner>\r
    <p>Loading your pending jobs...</p>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading && pendingJobs.length === 0" class="empty-state">\r
    <mat-icon class="empty-icon">work_off</mat-icon>\r
    <h2>No Jobs To Show</h2>\r
    <p>You can post new jobs by clicking the button below.</p>\r
    <button mat-raised-button color="primary" routerLink="/post-job">\r
      <mat-icon>add</mat-icon>\r
      Post a New Job\r
    </button>\r
  </div>\r
\r
  <!-- Jobs List -->\r
  <div *ngIf="!loading && pendingJobs.length > 0" class="jobs-list-container">\r
    <mat-card class="jobs-list-card">\r
      <mat-card-header>\r
        <h2>My Jobs ({{ total }})</h2>\r
      </mat-card-header>\r
      <mat-card-content>\r
        <table class="jobs-table">\r
          <thead>\r
            <tr>\r
              <th>Job Title</th>\r
              <th>Category</th>\r
              <th>Status</th>\r
              <!-- <th>Budget</th> -->\r
              <th>Progress</th>\r
              <!-- <th>Bids</th> -->\r
              <th class="actions">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let job of pendingJobs" class="job-row" [class.completed]="job.status === 'Completed'">\r
              <td class="title-cell">\r
                <strong>{{ job.title }}</strong>\r
              </td>\r
              <td>\r
                <span class="category-badge">{{ job.category?.name || 'Uncategorized' }}</span>\r
              </td>\r
              <td>\r
                <mat-chip-set>\r
                  <mat-chip [color]="getStatusColor(job.status)" selected size="small">\r
                    {{ job.status }}\r
                  </mat-chip>\r
                </mat-chip-set>\r
              </td>\r
              <!-- <td>\r
                {{ formatBudget(job.budget) }}\r
              </td> -->\r
              <td>\r
                <div class="progress-cell" *ngIf="job.status === 'In Progress'">\r
                  <mat-progress-bar \r
                    mode="determinate" \r
                    [value]="getJobPhaseProgress(job)"\r
                    color="accent">\r
                  </mat-progress-bar>\r
                  <span class="progress-percent">{{ getJobPhaseProgress(job) }}%</span>\r
                </div>\r
                <span *ngIf="job.status !== 'In Progress'" class="progress-na">\u2014</span>\r
              </td>\r
              <!-- <td>\r
                <span class="bid-count">{{ (jobBidsMap.get(job.id) || []).length }} bid<span *ngIf="(jobBidsMap.get(job.id) || []).length !== 1">s</span></span>\r
              </td> -->\r
              <td class="actions">\r
                <button \r
                  mat-raised-button \r
                  class="view-button"\r
                  matTooltip="View Details"\r
                  (click)="viewJobDetails(job.id)">\r
                  <mat-icon>visibility</mat-icon>\r
                  View\r
                </button>\r
                <button \r
                  *ngIf="job.status === 'Open' && (jobBidsMap.get(job.id) || []).length > 0"\r
                  mat-button \r
                  class="view-bids-button"\r
                  (click)="toggleBidsExpansion(job.id)"\r
                  matTooltip="View Bids">\r
                  <mat-icon>{{ openBidsJobId === job.id ? 'expand_less' : 'expand_more' }}</mat-icon>\r
                  {{ openBidsJobId === job.id ? 'Hide' : 'Show' }} Bids ({{ (jobBidsMap.get(job.id) || []).length }})\r
                </button>\r
                <button\r
                  *ngIf="job.assignedProId && !(paymentStatusMap.get(job.id)?.completed)"\r
                  mat-button\r
                  color="accent"\r
                  class="payment-button"\r
                  matTooltip="Make Payment"\r
                  (click)="initiatePaymentForAssignedJob(job.id)">\r
                  <mat-icon>payment</mat-icon>\r
                  Pay Now\r
                </button>\r
              </td>\r
            </tr>\r
            <!-- Expandable Bids Row -->\r
            <tr *ngFor="let job of pendingJobs" class="bids-expansion-row" [class.hidden]="openBidsJobId !== job.id">\r
              <td colspan="6" class="bids-expansion-cell">\r
                <!-- Bids for Open Jobs -->\r
                <div *ngIf="job.status === 'Open'" class="bids-expansion-content">\r
                  <h4 class="bids-title">\r
                    <mat-icon>how_to_vote</mat-icon>\r
                    Bids Received ({{ (jobBidsMap.get(job.id) || []).length }})\r
                  </h4>\r
\r
                  <!-- Loading State -->\r
                  <div *ngIf="loadingBidsMap.get(job.id)" class="bids-loading">\r
                    <mat-spinner diameter="30"></mat-spinner>\r
                    <p>Loading bids...</p>\r
                  </div>\r
\r
                  <!-- No Bids -->\r
                  <div *ngIf="!loadingBidsMap.get(job.id) && (jobBidsMap.get(job.id) || []).length === 0" class="no-bids">\r
                    <mat-icon>mail_outline</mat-icon>\r
                    <p>No bids received yet</p>\r
                  </div>\r
\r
                  <!-- Bids Grid -->\r
                  <div *ngIf="!loadingBidsMap.get(job.id) && (jobBidsMap.get(job.id) || []).length > 0" class="bids-grid">\r
                    <div *ngFor="let bid of jobBidsMap.get(job.id)" class="bid-card">\r
                      <!-- Pro Header -->\r
                      <div class="bid-card-header">\r
                        <div class="pro-info">\r
                          <h5 class="pro-name">{{ bid.pro?.businessName }}</h5>\r
                          <p class="pro-contact">{{ bid.pro?.proName || 'Professional' }}</p>\r
                          <p class="pro-phone" *ngIf="bid.pro?.phoneNumber">\r
                            <mat-icon>phone</mat-icon>\r
                            {{ bid.pro?.phoneNumber }}\r
                          </p>\r
                        </div>\r
                        <div class="bid-status">\r
                          <mat-chip-set>\r
                            <mat-chip [color]="getBidStatusColor(bid.status)" selected>\r
                              {{ bid.status || 'Pending' }}\r
                            </mat-chip>\r
                          </mat-chip-set>\r
                        </div>\r
                      </div>\r
\r
                      <!-- Bid Details Grid -->\r
                      <div class="bid-details-grid">\r
                        <!-- Quoted Price -->\r
                        <div class="detail-item">\r
                          <span class="label">Quoted Price</span>\r
                          <span class="value amount">\u20B9{{ bid.bidAmount | number: '1.2-2' }}</span>\r
                        </div>\r
\r
                        <!-- Phase 1A: Commence Date -->\r
                        <div class="detail-item" *ngIf="bid.commenceDate">\r
                          <span class="label">Commence Date</span>\r
                          <span class="value">{{ bid.commenceDate | date: 'MMM dd, yyyy' }}</span>\r
                        </div>\r
\r
                        <!-- Phase 1A: Expected Duration -->\r
                        <div class="detail-item" *ngIf="bid.expectedDurationDays">\r
                          <span class="label">Duration</span>\r
                          <span class="value">{{ bid.expectedDurationDays }} days</span>\r
                        </div>\r
\r
                        <!-- Phase 1A: Quote Expiry -->\r
                        <div class="detail-item" *ngIf="bid.expiresAt">\r
                          <span class="label">Quote Valid Until</span>\r
                          <span class="value">{{ bid.expiresAt | date: 'MMM dd, yyyy' }}</span>\r
                        </div>\r
                      </div>\r
\r
                      <!-- Phase 1A: Materials & Details -->\r
                      <div class="bid-materials" *ngIf="bid.materialsDescription">\r
                        <span class="label">Materials & Details</span>\r
                        <p class="materials-text">{{ bid.materialsDescription }}</p>\r
                      </div>\r
\r
                      <!-- Message -->\r
                      <div class="bid-message" *ngIf="bid.bidMessage">\r
                        <span class="label">Professional's Message</span>\r
                        <p class="message-text">{{ bid.bidMessage }}</p>\r
                      </div>\r
\r
                      <!-- Bid Actions -->\r
                      <div class="bid-card-actions">\r
                        <button \r
                          mat-button \r
                          color="accent" \r
                          *ngIf="bid.status === 'Pending'"\r
                          (click)="acceptBid(job.id, bid)">\r
                          <mat-icon>check</mat-icon>\r
                          Accept\r
                        </button>\r
                        <button \r
                          mat-button \r
                          color="warn" \r
                          *ngIf="bid.status === 'Pending'"\r
                          (click)="rejectBid(job.id, bid)">\r
                          <mat-icon>close</mat-icon>\r
                          Reject\r
                        </button>\r
                        <button mat-button color="primary" (click)="messageBidProfessional(bid)">\r
                          <mat-icon>message</mat-icon>\r
                          Message\r
                        </button>\r
                      </div>\r
\r
                      <!-- Bid Date -->\r
                      <div class="bid-date">\r
                        Bid submitted on {{ bid.createdAt | date: 'MMM dd, yyyy HH:mm' }}\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <!-- No Bids for Non-Open Jobs -->\r
                <!-- <div *ngIf="job.status !== 'Open'" class="no-expansion">\r
                  <p>No bids to display for {{ job.status }} jobs</p>\r
                </div> -->\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </mat-card-content>\r
\r
      <!-- Pagination -->\r
      <div class="pagination-controls" *ngIf="totalPages > 1">\r
        <button mat-icon-button (click)="prevPage()" [disabled]="page === 1" aria-label="Previous page">\r
          <mat-icon>chevron_left</mat-icon>\r
        </button>\r
        <span class="page-info">Page {{ page }} of {{ totalPages }}</span>\r
        <button mat-icon-button (click)="nextPage()" [disabled]="page >= totalPages" aria-label="Next page">\r
          <mat-icon>chevron_right</mat-icon>\r
        </button>\r
      </div>\r
    </mat-card>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/pending-jobs/pending-jobs.scss */\n.pending-jobs-container {\n  padding: 1.5rem;\n  width: 90%;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.pending-jobs-container .page-header {\n  margin-bottom: 2rem;\n}\n.pending-jobs-container .page-header h1 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: #1a1a1a;\n}\n.pending-jobs-container .page-header .subtitle {\n  color: #666;\n  font-size: 1.1rem;\n  margin: 0;\n}\n.pending-jobs-container .alert {\n  padding: 1.2rem 1.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-weight: 500;\n  animation: slideDown 0.3s ease;\n}\n.pending-jobs-container .alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.pending-jobs-container .alert.alert-success mat-icon {\n  color: #28a745;\n}\n.pending-jobs-container .alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.pending-jobs-container .alert.alert-error mat-icon {\n  color: #dc3545;\n}\n.pending-jobs-container .status-filter {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem 0;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.pending-jobs-container .status-filter .filter-label {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.95rem;\n}\n.pending-jobs-container .status-filter .status-toggle-group {\n  display: flex;\n  gap: 0;\n}\n.pending-jobs-container .status-filter .status-toggle-group mat-button-toggle {\n  border: 2px solid #ddd;\n  color: #666;\n  background: white;\n  transition: all 0.3s ease;\n}\n.pending-jobs-container .status-filter .status-toggle-group mat-button-toggle:first-child {\n  border-radius: 6px 0 0 6px;\n}\n.pending-jobs-container .status-filter .status-toggle-group mat-button-toggle:last-child {\n  border-radius: 0 6px 6px 0;\n}\n.pending-jobs-container .status-filter .status-toggle-group mat-button-toggle:not(:last-child) {\n  border-right: none;\n}\n.pending-jobs-container .status-filter .status-toggle-group mat-button-toggle.mat-mdc-button-toggle-checked {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-color: #667eea;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.pending-jobs-container .status-filter .status-toggle-group mat-button-toggle:hover:not(.mat-mdc-button-toggle-checked) {\n  background-color: #f5f5f5;\n}\n.pending-jobs-container .loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.pending-jobs-container .loading-container p {\n  margin-top: 1rem;\n  color: #666;\n  font-size: 1.1rem;\n}\n.pending-jobs-container .empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #666;\n}\n.pending-jobs-container .empty-state .empty-icon {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  color: #ccc;\n  margin: 0 auto 1rem;\n}\n.pending-jobs-container .empty-state h2 {\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  color: #333;\n}\n.pending-jobs-container .empty-state p {\n  font-size: 1rem;\n  margin-bottom: 2rem;\n}\n.pending-jobs-container .empty-state button {\n  margin-top: 1rem;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card {\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(102, 126, 234, 0.1);\n  overflow: hidden;\n  background: white;\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(102, 126, 234, 0.2);\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-header {\n  padding: 2rem;\n  border-bottom: 2px solid #f0f0f0;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-header h2 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-header h2::before {\n  content: "\\1f4cb";\n  font-size: 1.8rem;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content {\n  padding: 0;\n  overflow-x: auto;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead {\n  background:\n    linear-gradient(\n      to bottom,\n      #f8f9fa,\n      #f0f0f0);\n  position: sticky;\n  top: 0;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead th {\n  padding: 1.5rem;\n  text-align: left;\n  font-weight: 700;\n  color: #333;\n  border-bottom: 2px solid #ddd;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  background-color: #f8f9fa;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead th.actions {\n  text-align: center;\n  width: 140px;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row {\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row:hover {\n  background-color: #f8f9ff;\n  box-shadow: inset 0 0 0 1px rgba(102, 126, 234, 0.1254901961);\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row.completed {\n  opacity: 0.65;\n  background-color: #f5f5f5;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row.completed .title-cell {\n  color: #999;\n  text-decoration: line-through;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td {\n  padding: 1.5rem;\n  vertical-align: middle;\n  color: #666;\n  font-size: 0.95rem;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.title-cell {\n  font-weight: 600;\n  color: #1a1a1a;\n  font-size: 1rem;\n  min-width: 250px;\n  max-width: 350px;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td .category-badge {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td .bid-count {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions {\n  text-align: center;\n  min-width: 160px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  white-space: nowrap;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button.view-button {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button.view-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button.view-bids-button {\n  color: #1976d2;\n  margin-left: 0.5rem;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button.view-bids-button mat-icon {\n  margin-right: 0.25rem;\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button.view-bids-button:hover {\n  background-color: rgba(25, 118, 210, 0.08);\n}\n.bids-expansion-row.hidden {\n  display: none;\n}\n.bids-expansion-row .bids-expansion-cell {\n  padding: 0 !important;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content {\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  border-top: 2px solid #ddd;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 0 1.5rem 0;\n  font-size: 1.2rem;\n  color: #333;\n  font-weight: 600;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-title mat-icon {\n  color: #1976d2;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-loading,\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .no-bids {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  text-align: center;\n  color: #666;\n  background: white;\n  border-radius: 8px;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-loading mat-icon,\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .no-bids mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  color: #ccc;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-loading p,\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .no-bids p {\n  margin: 0;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 1.5rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card {\n  background: white;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n  transition: all 0.3s ease;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card:hover {\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);\n  transform: translateY(-4px);\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-header .pro-info h5 {\n  margin: 0 0 0.5rem 0;\n  font-size: 1.1rem;\n  font-weight: 600;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-header .pro-info p {\n  margin: 0.25rem 0;\n  font-size: 0.9rem;\n  opacity: 0.95;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-header .pro-info p.pro-phone {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-header .pro-info p.pro-phone mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-header .bid-status mat-chip-set {\n  gap: 0.5rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-header .bid-status mat-chip-set ::ng-deep mat-chip {\n  background: rgba(255, 255, 255, 0.2) !important;\n  color: white !important;\n  border: 1px solid rgba(255, 255, 255, 0.4) !important;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-details-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-details-grid .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-details-grid .detail-item .label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-details-grid .detail-item .value {\n  font-size: 1rem;\n  font-weight: 500;\n  color: #333;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-details-grid .detail-item .value.amount {\n  font-size: 1.25rem;\n  color: #1976d2;\n  font-weight: 600;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-materials {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-materials .label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-materials .materials-text {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #555;\n  line-height: 1.5;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-message {\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n  background: #f9f9f9;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-message .label {\n  font-size: 0.75rem;\n  font-weight: 600;\n  color: #999;\n  text-transform: uppercase;\n  display: block;\n  margin-bottom: 0.5rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-message .message-text {\n  margin: 0;\n  font-size: 0.95rem;\n  color: #555;\n  line-height: 1.5;\n  font-style: italic;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-actions {\n  display: flex;\n  gap: 0.5rem;\n  padding: 1.5rem;\n  border-bottom: 1px solid #eee;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-actions button {\n  flex: 1;\n  font-size: 0.9rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-card-actions button mat-icon {\n  margin-right: 0.5rem;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .bids-grid .bid-card .bid-date {\n  padding: 0.75rem 1.5rem;\n  font-size: 0.85rem;\n  color: #999;\n  text-align: right;\n}\n.bids-expansion-row .bids-expansion-cell .bids-expansion-content .no-expansion {\n  padding: 2rem;\n  text-align: center;\n  background: white;\n  border-radius: 8px;\n  color: #999;\n}\n@media (max-width: 1024px) {\n  .pending-jobs-container {\n    padding: 1rem;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-table {\n    font-size: 0.85rem;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-table thead th {\n    padding: 0.75rem;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-table tbody td {\n    padding: 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .pending-jobs-container {\n    padding: 0.75rem;\n  }\n  .pending-jobs-container .page-header {\n    margin-bottom: 1.5rem;\n  }\n  .pending-jobs-container .page-header h1 {\n    font-size: 1.75rem;\n  }\n  .pending-jobs-container .page-header .subtitle {\n    font-size: 0.95rem;\n  }\n  .pending-jobs-container .status-filter {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .pending-jobs-container .status-filter .status-toggle-group {\n    width: 100%;\n    flex-wrap: wrap;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-list-card {\n    border-radius: 8px;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-list-card mat-card-header {\n    padding: 1.5rem 1rem;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-list-card mat-card-header h2 {\n    font-size: 1.2rem;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table {\n    font-size: 0.8rem;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead th {\n    padding: 0.75rem 0.5rem;\n    font-size: 0.75rem;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td {\n    padding: 1rem 0.5rem;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.title-cell {\n    min-width: 150px;\n    max-width: 200px;\n  }\n  .pending-jobs-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions {\n    flex-direction: column;\n    min-width: 100px;\n  }\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.pros-link {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #e8f5e9;\n  color: #388e3c;\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.pros-link mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.pros-link:hover {\n  background: #c8e6c9;\n}\n/*# sourceMappingURL=pending-jobs.css.map */\n'] }]
  }], () => [{ type: JobService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }, { type: MatDialog }, { type: PaymentService }], { expansionPanels: [{
    type: ViewChildren,
    args: [MatExpansionPanel]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PendingJobsComponent, { className: "PendingJobsComponent", filePath: "src/app/features/pending-jobs/pending-jobs.ts", lineNumber: 41 });
})();
var DeleteConfirmDialogComponent = class _DeleteConfirmDialogComponent {
  data;
  dialogRef;
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  static \u0275fac = function DeleteConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeleteConfirmDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteConfirmDialogComponent, selectors: [["app-delete-confirm-dialog"]], decls: 25, vars: 1, consts: [[1, "delete-dialog-container"], [1, "dialog-icon-wrapper"], [1, "warning-icon"], ["mat-dialog-title", "", 1, "dialog-title"], [1, "dialog-content"], [1, "confirmation-message"], [1, "job-title"], [1, "warning-message"], [1, "inline-icon"], [1, "dialog-actions"], ["mat-stroked-button", "", 1, "cancel-btn", 3, "click"], ["mat-raised-button", "", "color", "warn", 1, "delete-btn", 3, "click"]], template: function DeleteConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3, "delete_outline");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5, "Delete Job?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-dialog-content", 4)(7, "p", 5);
      \u0275\u0275text(8, " Are you sure you want to delete ");
      \u0275\u0275elementStart(9, "strong", 6);
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, "? ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 7)(13, "mat-icon", 8);
      \u0275\u0275text(14, "info");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " This action cannot be undone. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(16, "mat-dialog-actions", 9)(17, "button", 10);
      \u0275\u0275listener("click", function DeleteConfirmDialogComponent_Template_button_click_17_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 11);
      \u0275\u0275listener("click", function DeleteConfirmDialogComponent_Template_button_click_21_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275elementStart(22, "mat-icon");
      \u0275\u0275text(23, "delete");
      \u0275\u0275elementEnd();
      \u0275\u0275text(24, " Delete Job ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.data.jobTitle);
    }
  }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent], styles: ["\n\n.delete-dialog-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  text-align: center;\n  min-width: 320px;\n}\n.dialog-icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_scaleIn 0.3s ease-out;\n}\n.warning-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: #ff6b6b;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.1),\n      rgba(255, 107, 107, 0.05));\n  border-radius: 50%;\n  padding: 8px;\n  box-sizing: border-box;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 16px 0 8px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n  letter-spacing: 0.25px;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  padding: 16px 0 24px 0;\n  margin: 0 !important;\n}\n.confirmation-message[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  color: #424242;\n  line-height: 1.6;\n  font-weight: 500;\n}\n.job-title[_ngcontent-%COMP%] {\n  color: #1976d2;\n  word-break: break-word;\n}\n.warning-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin: 12px 0 0 0;\n  padding: 8px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 152, 0, 0.08),\n      rgba(255, 152, 0, 0.04));\n  border-radius: 6px;\n  font-size: 13px;\n  color: #f57c00;\n  font-weight: 500;\n}\n.inline-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  min-width: 120px;\n  padding: 8px 24px !important;\n  color: #424242;\n  border: 1.5px solid #e0e0e0 !important;\n  transition: all 0.3s ease;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #bdbdbd !important;\n}\n.cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.delete-btn[_ngcontent-%COMP%] {\n  min-width: 120px;\n  padding: 8px 24px !important;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3) !important;\n  transition: all 0.3s ease;\n}\n.delete-btn[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 16px rgba(244, 67, 54, 0.4) !important;\n  transform: translateY(-2px);\n}\n.delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 8px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 480px) {\n  .delete-dialog-container[_ngcontent-%COMP%] {\n    min-width: 280px;\n    padding: 20px;\n  }\n  .dialog-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .cancel-btn[_ngcontent-%COMP%], \n   .delete-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=pending-jobs.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-delete-confirm-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule], template: `
    <div class="delete-dialog-container">
      <div class="dialog-icon-wrapper">
        <mat-icon class="warning-icon">delete_outline</mat-icon>
      </div>
      <h2 mat-dialog-title class="dialog-title">Delete Job?</h2>
      <mat-dialog-content class="dialog-content">
        <p class="confirmation-message">
          Are you sure you want to delete <strong class="job-title">{{ data.jobTitle }}</strong>?
        </p>
        <p class="warning-message">
          <mat-icon class="inline-icon">info</mat-icon>
          This action cannot be undone.
        </p>
      </mat-dialog-content>
      <mat-dialog-actions class="dialog-actions">
        <button 
          mat-stroked-button 
          class="cancel-btn"
          (click)="onCancel()">
          <mat-icon>close</mat-icon>
          Cancel
        </button>
        <button 
          mat-raised-button 
          color="warn" 
          class="delete-btn"
          (click)="onConfirm()">
          <mat-icon>delete</mat-icon>
          Delete Job
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;c3ab7e95d321b76001e129db85835afb982152a83e5993302fe833f84d3a23d3;C:/repos/yProHub/prohub-ui/src/app/features/pending-jobs/pending-jobs.ts */\n.delete-dialog-container {\n  padding: 24px;\n  text-align: center;\n  min-width: 320px;\n}\n.dialog-icon-wrapper {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n  animation: scaleIn 0.3s ease-out;\n}\n.warning-icon {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: #ff6b6b;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 107, 107, 0.1),\n      rgba(255, 107, 107, 0.05));\n  border-radius: 50%;\n  padding: 8px;\n  box-sizing: border-box;\n}\n.dialog-title {\n  margin: 16px 0 8px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n  letter-spacing: 0.25px;\n}\n.dialog-content {\n  padding: 16px 0 24px 0;\n  margin: 0 !important;\n}\n.confirmation-message {\n  margin: 0 0 12px 0;\n  font-size: 14px;\n  color: #424242;\n  line-height: 1.6;\n  font-weight: 500;\n}\n.job-title {\n  color: #1976d2;\n  word-break: break-word;\n}\n.warning-message {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  margin: 12px 0 0 0;\n  padding: 8px 12px;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 152, 0, 0.08),\n      rgba(255, 152, 0, 0.04));\n  border-radius: 6px;\n  font-size: 13px;\n  color: #f57c00;\n  font-weight: 500;\n}\n.inline-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.dialog-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.cancel-btn {\n  min-width: 120px;\n  padding: 8px 24px !important;\n  color: #424242;\n  border: 1.5px solid #e0e0e0 !important;\n  transition: all 0.3s ease;\n}\n.cancel-btn:hover {\n  background-color: #f5f5f5;\n  border-color: #bdbdbd !important;\n}\n.cancel-btn mat-icon {\n  margin-right: 8px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.delete-btn {\n  min-width: 120px;\n  padding: 8px 24px !important;\n  font-weight: 600;\n  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3) !important;\n  transition: all 0.3s ease;\n}\n.delete-btn:hover {\n  box-shadow: 0 6px 16px rgba(244, 67, 54, 0.4) !important;\n  transform: translateY(-2px);\n}\n.delete-btn mat-icon {\n  margin-right: 8px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes scaleIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 480px) {\n  .delete-dialog-container {\n    min-width: 280px;\n    padding: 20px;\n  }\n  .dialog-actions {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .cancel-btn,\n  .delete-btn {\n    width: 100%;\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=pending-jobs.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteConfirmDialogComponent, { className: "DeleteConfirmDialogComponent", filePath: "src/app/features/pending-jobs/pending-jobs.ts", lineNumber: 767 });
})();
var BidConfirmDialogComponent = class _BidConfirmDialogComponent {
  data;
  dialogRef;
  constructor(data, dialogRef) {
    this.data = data;
    this.dialogRef = dialogRef;
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  static \u0275fac = function BidConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BidConfirmDialogComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BidConfirmDialogComponent, selectors: [["app-bid-confirm-dialog"]], decls: 27, vars: 13, consts: [[1, "bid-dialog-container"], [1, "dialog-icon-wrapper", 3, "ngClass"], [1, "action-icon", 3, "ngClass"], ["mat-dialog-title", "", 1, "dialog-title"], [1, "dialog-content"], [1, "bid-details"], [1, "pro-info"], ["class", "bid-amount", 4, "ngIf"], [1, "confirmation-message", 3, "ngClass"], [1, "inline-icon"], [4, "ngIf"], [1, "dialog-actions"], ["mat-stroked-button", "", 1, "cancel-btn", 3, "click"], ["mat-raised-button", "", 1, "action-btn", 3, "click", "color"], [1, "bid-amount"], [1, "amount"]], template: function BidConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "h2", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "mat-dialog-content", 4)(7, "div", 5)(8, "p", 6)(9, "strong");
      \u0275\u0275text(10, "Professional:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, BidConfirmDialogComponent_p_12_Template, 7, 1, "p", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p", 8)(14, "mat-icon", 9);
      \u0275\u0275text(15);
      \u0275\u0275elementEnd();
      \u0275\u0275template(16, BidConfirmDialogComponent_span_16_Template, 2, 0, "span", 10)(17, BidConfirmDialogComponent_span_17_Template, 2, 0, "span", 10);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(18, "mat-dialog-actions", 11)(19, "button", 12);
      \u0275\u0275listener("click", function BidConfirmDialogComponent_Template_button_click_19_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(20, "mat-icon");
      \u0275\u0275text(21, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(22, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "button", 13);
      \u0275\u0275listener("click", function BidConfirmDialogComponent_Template_button_click_23_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275elementStart(24, "mat-icon");
      \u0275\u0275text(25);
      \u0275\u0275elementEnd();
      \u0275\u0275text(26);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.data.action);
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.data.action);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.action === "accept" ? "check_circle" : "cancel", " ");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" ", ctx.data.action === "accept" ? "Accept Bid?" : "Reject Bid?", " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", ctx.data.proName, " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.action === "accept");
      \u0275\u0275advance();
      \u0275\u0275property("ngClass", ctx.data.action);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.action === "accept" ? "info" : "warning");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.action === "accept");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.data.action === "reject");
      \u0275\u0275advance(6);
      \u0275\u0275property("color", ctx.data.action === "accept" ? "accent" : "warn");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.action === "accept" ? "check" : "delete");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.action === "accept" ? "Accept Bid" : "Reject Bid", " ");
    }
  }, dependencies: [CommonModule, NgClass, NgIf, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent], styles: ["\n\n.bid-dialog-container[_ngcontent-%COMP%] {\n  padding: 24px;\n  min-width: 340px;\n}\n.dialog-icon-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n  animation: _ngcontent-%COMP%_scaleIn 0.3s ease-out;\n}\n.dialog-icon-wrapper.accept[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: #4caf50;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(76, 175, 80, 0.1),\n      rgba(76, 175, 80, 0.05));\n  border-radius: 50%;\n  padding: 8px;\n  box-sizing: border-box;\n}\n.dialog-icon-wrapper.reject[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: #ff5252;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 82, 82, 0.1),\n      rgba(255, 82, 82, 0.05));\n  border-radius: 50%;\n  padding: 8px;\n  box-sizing: border-box;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  margin: 16px 0 8px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n  text-align: center;\n  letter-spacing: 0.25px;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  padding: 16px 0 24px 0;\n  margin: 0 !important;\n}\n.bid-details[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(33, 150, 243, 0.05),\n      rgba(33, 150, 243, 0.02));\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  border-left: 4px solid #2196f3;\n}\n.pro-info[_ngcontent-%COMP%], \n.bid-amount[_ngcontent-%COMP%] {\n  margin: 8px 0;\n  font-size: 14px;\n  color: #424242;\n}\n.pro-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%], \n.bid-amount[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #1976d2;\n  font-weight: 600;\n}\n.bid-amount[_ngcontent-%COMP%]   .amount[_ngcontent-%COMP%] {\n  color: #4caf50;\n  font-size: 16px;\n  font-weight: 700;\n}\n.confirmation-message[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin: 12px 0 0 0;\n  padding: 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  line-height: 1.6;\n  font-weight: 500;\n}\n.confirmation-message.accept[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(76, 175, 80, 0.08),\n      rgba(76, 175, 80, 0.04));\n  color: #2e7d32;\n}\n.confirmation-message.accept[_ngcontent-%COMP%]   .inline-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.confirmation-message.reject[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 82, 82, 0.08),\n      rgba(255, 82, 82, 0.04));\n  color: #c62828;\n}\n.confirmation-message.reject[_ngcontent-%COMP%]   .inline-icon[_ngcontent-%COMP%] {\n  color: #ff5252;\n}\n.inline-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.cancel-btn[_ngcontent-%COMP%] {\n  min-width: 110px;\n  padding: 8px 20px !important;\n  color: #424242;\n  border: 1.5px solid #e0e0e0 !important;\n  transition: all 0.3s ease;\n}\n.cancel-btn[_ngcontent-%COMP%]:hover {\n  background-color: #f5f5f5;\n  border-color: #bdbdbd !important;\n}\n.cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.action-btn[_ngcontent-%COMP%] {\n  min-width: 130px;\n  padding: 8px 20px !important;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 6px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes _ngcontent-%COMP%_scaleIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 480px) {\n  .bid-dialog-container[_ngcontent-%COMP%] {\n    min-width: 300px;\n    padding: 20px;\n  }\n  .dialog-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .cancel-btn[_ngcontent-%COMP%], \n   .action-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=pending-jobs.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BidConfirmDialogComponent, [{
    type: Component,
    args: [{ selector: "app-bid-confirm-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule], template: `
    <div class="bid-dialog-container">
      <div class="dialog-icon-wrapper" [ngClass]="data.action">
        <mat-icon class="action-icon" [ngClass]="data.action">
          {{ data.action === 'accept' ? 'check_circle' : 'cancel' }}
        </mat-icon>
      </div>
      <h2 mat-dialog-title class="dialog-title">
        {{ data.action === 'accept' ? 'Accept Bid?' : 'Reject Bid?' }}
      </h2>
      <mat-dialog-content class="dialog-content">
        <div class="bid-details">
          <p class="pro-info">
            <strong>Professional:</strong> {{ data.proName }}
          </p>
          <p *ngIf="data.action === 'accept'" class="bid-amount">
            <strong>Bid Amount:</strong> <span class="amount"><span>$</span>{{ data.bidAmount }}</span>
          </p>
        </div>
        <p class="confirmation-message" [ngClass]="data.action">
          <mat-icon class="inline-icon">{{ data.action === 'accept' ? 'info' : 'warning' }}</mat-icon>
          <span *ngIf="data.action === 'accept'">
            You're about to accept this bid. The professional will be assigned to this job.
          </span>
          <span *ngIf="data.action === 'reject'">
            This bid will be rejected and the professional will be notified.
          </span>
        </p>
      </mat-dialog-content>
      <mat-dialog-actions class="dialog-actions">
        <button 
          mat-stroked-button 
          class="cancel-btn"
          (click)="onCancel()">
          <mat-icon>close</mat-icon>
          Cancel
        </button>
        <button 
          mat-raised-button 
          [color]="data.action === 'accept' ? 'accent' : 'warn'"
          class="action-btn"
          (click)="onConfirm()">
          <mat-icon>{{ data.action === 'accept' ? 'check' : 'delete' }}</mat-icon>
          {{ data.action === 'accept' ? 'Accept Bid' : 'Reject Bid' }}
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;85f711316fc23f379f9f35587b4302a21fc345f3e5bb53ecca99eea306016e04;C:/repos/yProHub/prohub-ui/src/app/features/pending-jobs/pending-jobs.ts */\n.bid-dialog-container {\n  padding: 24px;\n  min-width: 340px;\n}\n.dialog-icon-wrapper {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 16px;\n  animation: scaleIn 0.3s ease-out;\n}\n.dialog-icon-wrapper.accept .action-icon {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: #4caf50;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(76, 175, 80, 0.1),\n      rgba(76, 175, 80, 0.05));\n  border-radius: 50%;\n  padding: 8px;\n  box-sizing: border-box;\n}\n.dialog-icon-wrapper.reject .action-icon {\n  font-size: 56px;\n  width: 56px;\n  height: 56px;\n  color: #ff5252;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 82, 82, 0.1),\n      rgba(255, 82, 82, 0.05));\n  border-radius: 50%;\n  padding: 8px;\n  box-sizing: border-box;\n}\n.dialog-title {\n  margin: 16px 0 8px 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #212121;\n  text-align: center;\n  letter-spacing: 0.25px;\n}\n.dialog-content {\n  padding: 16px 0 24px 0;\n  margin: 0 !important;\n}\n.bid-details {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(33, 150, 243, 0.05),\n      rgba(33, 150, 243, 0.02));\n  padding: 16px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  border-left: 4px solid #2196f3;\n}\n.pro-info,\n.bid-amount {\n  margin: 8px 0;\n  font-size: 14px;\n  color: #424242;\n}\n.pro-info strong,\n.bid-amount strong {\n  color: #1976d2;\n  font-weight: 600;\n}\n.bid-amount .amount {\n  color: #4caf50;\n  font-size: 16px;\n  font-weight: 700;\n}\n.confirmation-message {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin: 12px 0 0 0;\n  padding: 12px;\n  border-radius: 6px;\n  font-size: 13px;\n  line-height: 1.6;\n  font-weight: 500;\n}\n.confirmation-message.accept {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(76, 175, 80, 0.08),\n      rgba(76, 175, 80, 0.04));\n  color: #2e7d32;\n}\n.confirmation-message.accept .inline-icon {\n  color: #4caf50;\n}\n.confirmation-message.reject {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(255, 82, 82, 0.08),\n      rgba(255, 82, 82, 0.04));\n  color: #c62828;\n}\n.confirmation-message.reject .inline-icon {\n  color: #ff5252;\n}\n.inline-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.dialog-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: center;\n  padding: 0 !important;\n  margin: 0 !important;\n}\n.cancel-btn {\n  min-width: 110px;\n  padding: 8px 20px !important;\n  color: #424242;\n  border: 1.5px solid #e0e0e0 !important;\n  transition: all 0.3s ease;\n}\n.cancel-btn:hover {\n  background-color: #f5f5f5;\n  border-color: #bdbdbd !important;\n}\n.cancel-btn mat-icon {\n  margin-right: 6px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.action-btn {\n  min-width: 130px;\n  padding: 8px 20px !important;\n  font-weight: 600;\n  transition: all 0.3s ease;\n}\n.action-btn:hover {\n  transform: translateY(-2px);\n}\n.action-btn mat-icon {\n  margin-right: 6px;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n@keyframes scaleIn {\n  from {\n    transform: scale(0.8);\n    opacity: 0;\n  }\n  to {\n    transform: scale(1);\n    opacity: 1;\n  }\n}\n@media (max-width: 480px) {\n  .bid-dialog-container {\n    min-width: 300px;\n    padding: 20px;\n  }\n  .dialog-actions {\n    flex-direction: column;\n    gap: 8px;\n  }\n  .cancel-btn,\n  .action-btn {\n    width: 100%;\n    min-width: auto;\n  }\n}\n/*# sourceMappingURL=pending-jobs.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }, { type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BidConfirmDialogComponent, { className: "BidConfirmDialogComponent", filePath: "src/app/features/pending-jobs/pending-jobs.ts", lineNumber: 1021 });
})();

// src/app/features/pending-jobs/pending-jobs-routing-module.ts
var routes = [
  { path: "", component: PendingJobsComponent }
];
var PendingJobsRoutingModule = class _PendingJobsRoutingModule {
  static \u0275fac = function PendingJobsRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingJobsRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PendingJobsRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingJobsRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/pending-jobs/pending-jobs-module.ts
var PendingJobsModule = class _PendingJobsModule {
  static \u0275fac = function PendingJobsModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PendingJobsModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PendingJobsModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    PendingJobsRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PendingJobsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        PendingJobsRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  PendingJobsModule
};
//# sourceMappingURL=chunk-MFMGMF2M.js.map

