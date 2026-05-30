import {
  MatTabsModule
} from "./chunk-4G7MVHXG.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-U6SMCUEN.js";
import "./chunk-YI5HEQLO.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-LJRZZZLH.js";
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
import "./chunk-YFVGD4AB.js";
import {
  MatFormFieldModule,
  MatInputModule
} from "./chunk-MQXTVBAG.js";
import {
  MatCard,
  MatCardActions,
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
import {
  FormsModule
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
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-ANTPJ2CK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/my-jobs-pro/my-job-pro-details.ts
function MyJobProDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading job details...");
    \u0275\u0275elementEnd()();
  }
}
function MyJobProDetailsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon");
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
function MyJobProDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-icon");
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
function MyJobProDetailsComponent_div_14_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "h3");
    \u0275\u0275text(2, "Attachments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 44)(4, "mat-icon");
    \u0275\u0275text(5, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r0.job.attachments);
  }
}
function MyJobProDetailsComponent_div_14_div_61_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p")(1, "strong");
    \u0275\u0275text(2, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.disputeReason);
  }
}
function MyJobProDetailsComponent_div_14_div_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "mat-icon", 48);
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6, "Customer Raised a Dispute");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MyJobProDetailsComponent_div_14_div_61_p_7_Template, 4, 1, "p", 49);
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Address the customer's concerns and resubmit your completion.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "button", 50);
    \u0275\u0275listener("click", function MyJobProDetailsComponent_div_14_div_61_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resubmitCompletion());
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "refresh");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.disputeReason);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.resubmittingCompletion);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.resubmittingCompletion ? "Resubmitting..." : "Resubmit Completion", " ");
  }
}
function MyJobProDetailsComponent_div_14_div_62_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "mat-icon");
    \u0275\u0275text(3, "payment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6, "Payment Received");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "The customer has completed payment. Confirm to start work on this job.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "button", 53);
    \u0275\u0275listener("click", function MyJobProDetailsComponent_div_14_div_62_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.confirmJob());
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "play_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r0.confirmingJob);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.confirmingJob ? "Confirming..." : "Confirm & Start Job", " ");
  }
}
function MyJobProDetailsComponent_div_14_div_63_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2, "Bid Amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 62);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const proBid_r5 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("$", \u0275\u0275pipeBind2(5, 1, proBid_r5.bidAmount, "1.2-2"));
  }
}
function MyJobProDetailsComponent_div_14_div_63_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2, "Bid Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const proBid_r6 = ctx.ngIf;
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.getBidStatus(proBid_r6.status));
  }
}
function MyJobProDetailsComponent_div_14_div_63_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "span", 26);
    \u0275\u0275text(2, "Bid Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const proBid_r7 = ctx.ngIf;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 1, proBid_r7.createdAt, "MMM dd, yyyy"));
  }
}
function MyJobProDetailsComponent_div_14_div_63_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275listener("click", function MyJobProDetailsComponent_div_14_div_63_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.withdrawBid());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "undo");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("disabled", ctx_r0.withdrawingBid);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.withdrawingBid ? "Withdrawing..." : "Withdraw Bid", " ");
  }
}
function MyJobProDetailsComponent_div_14_div_63_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "h3")(2, "mat-icon");
    \u0275\u0275text(3, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Communication ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "div", 56)(7, "h4");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 57)(12, "div", 25)(13, "span", 26);
    \u0275\u0275text(14, "Job ID:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 27);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 25)(18, "span", 26);
    \u0275\u0275text(19, "Posted Date:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 27);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, MyJobProDetailsComponent_div_14_div_63_div_23_Template, 6, 4, "div", 58)(24, MyJobProDetailsComponent_div_14_div_63_div_24_Template, 5, 1, "div", 58)(25, MyJobProDetailsComponent_div_14_div_63_div_25_Template, 6, 4, "div", 58);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 59)(27, "button", 60);
    \u0275\u0275listener("click", function MyJobProDetailsComponent_div_14_div_63_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.goToMessagesPage());
    });
    \u0275\u0275elementStart(28, "mat-icon");
    \u0275\u0275text(29, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Message ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, MyJobProDetailsComponent_div_14_div_63_button_31_Template, 4, 2, "button", 61);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate((ctx_r0.job.user == null ? null : ctx_r0.job.user.firstName) ? ctx_r0.job.user == null ? null : ctx_r0.job.user.firstName : "Customer");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.job.user == null ? null : ctx_r0.job.user.email);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("#", ctx_r0.job.id);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(22, 8, ctx_r0.job.createdAt, "MMM dd, yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.getProBid());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getProBid());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.getProBid());
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ((tmp_9_0 = ctx_r0.getProBid()) == null ? null : tmp_9_0.status) === "Pending");
  }
}
function MyJobProDetailsComponent_div_14_div_70_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-icon", 68);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Unsaved changes");
    \u0275\u0275elementEnd()();
  }
}
function MyJobProDetailsComponent_div_14_div_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64)(1, "button", 65);
    \u0275\u0275listener("click", function MyJobProDetailsComponent_div_14_div_70_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openPhaseSelectionDialog(ctx_r0.job));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, MyJobProDetailsComponent_div_14_div_70_div_5_Template, 5, 0, "div", 66);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", "Add Phases", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasUnsavedChanges(ctx_r0.job.id));
  }
}
function MyJobProDetailsComponent_div_14_p_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 5);
    \u0275\u0275text(1, "Define project phases to help the customer track your work progress");
    \u0275\u0275elementEnd();
  }
}
function MyJobProDetailsComponent_div_14_div_77_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 75)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const phase_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Completed on ", \u0275\u0275pipeBind2(4, 1, phase_r11.completedAt, "MMM dd, yyyy HH:mm"), " ");
  }
}
function MyJobProDetailsComponent_div_14_div_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "mat-checkbox", 71);
    \u0275\u0275listener("change", function MyJobProDetailsComponent_div_14_div_77_Template_mat_checkbox_change_2_listener() {
      const phase_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.togglePhaseCompletion(ctx_r0.job, phase_r11.id));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "div", 72)(4, "h4");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 73);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, MyJobProDetailsComponent_div_14_div_77_p_8_Template, 5, 4, "p", 74);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const phase_r11 = ctx.$implicit;
    \u0275\u0275classProp("completed", phase_r11.isCompleted);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", phase_r11.isCompleted);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("completed", phase_r11.isCompleted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(phase_r11.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(phase_r11.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", phase_r11.isCompleted && phase_r11.completedAt);
  }
}
function MyJobProDetailsComponent_div_14_div_78_mat_icon_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function MyJobProDetailsComponent_div_14_div_78_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 78);
    \u0275\u0275text(1, "schedule");
    \u0275\u0275elementEnd();
  }
}
function MyJobProDetailsComponent_div_14_div_78_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 76)(1, "button", 53);
    \u0275\u0275listener("click", function MyJobProDetailsComponent_div_14_div_78_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePhaseChanges(ctx_r0.job));
    });
    \u0275\u0275template(2, MyJobProDetailsComponent_div_14_div_78_mat_icon_2_Template, 2, 0, "mat-icon", 49)(3, MyJobProDetailsComponent_div_14_div_78_mat_icon_3_Template, 2, 0, "mat-icon", 77);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.savingJobId === ctx_r0.job.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savingJobId !== ctx_r0.job.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savingJobId === ctx_r0.job.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingJobId === ctx_r0.job.id ? "Saving..." : "Save Changes", " ");
  }
}
function MyJobProDetailsComponent_div_14_button_80_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 79);
    \u0275\u0275listener("click", function MyJobProDetailsComponent_div_14_button_80_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsCompleted(ctx_r0.job.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Mark Completed ");
    \u0275\u0275elementEnd();
  }
}
function MyJobProDetailsComponent_div_14_button_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 80)(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Completed ");
    \u0275\u0275elementEnd();
  }
}
function MyJobProDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-card")(2, "mat-card-header", 14)(3, "div", 15)(4, "div", 16)(5, "span", 17);
    \u0275\u0275text(6, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 18)(8, "mat-icon");
    \u0275\u0275text(9, "layers");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 19)(13, "span", 20);
    \u0275\u0275text(14, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-chip-set")(16, "mat-chip", 21);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(18, "mat-card-content")(19, "div", 22)(20, "h3");
    \u0275\u0275text(21, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p", 23);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "h3");
    \u0275\u0275text(25, "Details Grid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 24)(27, "div", 25)(28, "mat-icon");
    \u0275\u0275text(29, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div")(31, "span", 26);
    \u0275\u0275text(32, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "p", 27);
    \u0275\u0275text(34);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(35, "div", 25)(36, "mat-icon");
    \u0275\u0275text(37, "attach_money");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div")(39, "span", 26);
    \u0275\u0275text(40, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "p", 27);
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(43, "div", 25)(44, "mat-icon");
    \u0275\u0275text(45, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "div")(47, "span", 26);
    \u0275\u0275text(48, "Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p", 27);
    \u0275\u0275text(50);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(51, "div", 25)(52, "mat-icon");
    \u0275\u0275text(53, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div")(55, "span", 26);
    \u0275\u0275text(56, "Posted");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "p", 27);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(60, MyJobProDetailsComponent_div_14_div_60_Template, 8, 1, "div", 28)(61, MyJobProDetailsComponent_div_14_div_61_Template, 14, 3, "div", 29)(62, MyJobProDetailsComponent_div_14_div_62_Template, 13, 2, "div", 30)(63, MyJobProDetailsComponent_div_14_div_63_Template, 32, 11, "div", 31);
    \u0275\u0275elementStart(64, "div", 32)(65, "div", 33)(66, "h3")(67, "mat-icon");
    \u0275\u0275text(68, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69, " Progress Tracking ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(70, MyJobProDetailsComponent_div_14_div_70_Template, 6, 2, "div", 34)(71, MyJobProDetailsComponent_div_14_p_71_Template, 2, 0, "p", 35);
    \u0275\u0275elementStart(72, "div", 36);
    \u0275\u0275element(73, "mat-progress-bar", 37);
    \u0275\u0275elementStart(74, "span", 38);
    \u0275\u0275text(75);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(76, "div", 39);
    \u0275\u0275template(77, MyJobProDetailsComponent_div_14_div_77_Template, 9, 8, "div", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(78, MyJobProDetailsComponent_div_14_div_78_Template, 5, 4, "div", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "mat-card-actions");
    \u0275\u0275template(80, MyJobProDetailsComponent_div_14_button_80_Template, 4, 0, "button", 42)(81, MyJobProDetailsComponent_div_14_button_81_Template, 4, 0, "button", 43);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate((ctx_r0.job.category == null ? null : ctx_r0.job.category.name) || "Uncategorized");
    \u0275\u0275advance(5);
    \u0275\u0275property("color", ctx_r0.getStatusColor(ctx_r0.job.status));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.job.status, " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.job.description);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.job.location);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.job.budget);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r0.formatTimeline(ctx_r0.job.timeline));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(59, 20, ctx_r0.job.createdAt, "MMM dd, yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.job.attachments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.job.status === "Completion Submitted" && ctx_r0.completionStatus === "Disputed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.job.status === "Payment Made");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.job.status === "Payment Made" || ctx_r0.job.status === "Pro Confirmed" || ctx_r0.job.status === "In Progress" || ctx_r0.job.status === "Completion Submitted" || ctx_r0.job.status === "Completed");
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.job.status !== "Completed");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.job.status !== "Completed");
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r0.getPhaseProgress(ctx_r0.job));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getPhaseProgress(ctx_r0.job), "% Complete");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.getJobPhases(ctx_r0.job));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.hasUnsavedChanges(ctx_r0.job.id));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r0.job.status === "In Progress" || ctx_r0.job.status === "Pro Confirmed") && ctx_r0.getPhaseProgress(ctx_r0.job) === 100 && !ctx_r0.unsavedJobIds.has(ctx_r0.job.id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.job.status === "Completed");
  }
}
function PhaseSelectionDialogComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-checkbox", 9);
    \u0275\u0275listener("change", function PhaseSelectionDialogComponent_div_11_Template_mat_checkbox_change_1_listener() {
      const phase_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.togglePhaseSelection(phase_r2));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 10)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const phase_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r2.isPhaseSelected(phase_r2.id))("disabled", !ctx_r2.isPhaseSelected(phase_r2.id) && ctx_r2.selectedPhases.length >= ctx_r2.data.maxPhases);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(phase_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(phase_r2.description);
  }
}
var MyJobProDetailsComponent = class _MyJobProDetailsComponent {
  jobService;
  activatedRoute;
  router;
  auth;
  cdr;
  dialog;
  job = null;
  jobMessages = [];
  jobBids = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  unsavedJobIds = /* @__PURE__ */ new Set();
  savingJobId = null;
  loadingMessages = false;
  loadingBids = false;
  messageText = "";
  messageSending = false;
  messageStatus = "";
  selectedTabIndex = 0;
  withdrawingBid = false;
  confirmingJob = false;
  resubmittingCompletion = false;
  completionStatus = null;
  disputeReason = null;
  destroy$ = new Subject();
  pollMessages$ = new Subject();
  // Subject to control polling
  currentJobId = null;
  messagePollInterval = 5e3;
  // 5 seconds
  // Predefined phase options for professionals to choose from
  PHASE_OPTIONS = [
    { id: "initialconsultation", title: "Initial Consultation", description: "Discuss requirements, scope, budget, and timeline", isCompleted: false },
    { id: "initialestimation", title: "Initial Estimation", description: "Based on requirements, scope, budget, and timeline an initial estimation is created", isCompleted: false },
    { id: "onsiteassessment", title: "On-Site Assessment", description: "Visit the site for assessment and review requirements, scope, budget and timeline", isCompleted: false },
    { id: "proposalimprovements", title: "Proposal & Improvements", description: "Based on on-site assessment provide suggestions for improvements, if any", isCompleted: false },
    { id: "finalestimation", title: "Final Estimation", description: "Based on on-site assessment a final estimation is created", isCompleted: false },
    { id: "payment", title: "Payment", description: "Received payment for the job", isCompleted: false },
    { id: "execution", title: "Job Execution", description: "Perform the work according to agreed plan and timeline", isCompleted: false },
    { id: "inspection", title: "Quality Inspection", description: "Verify work quality and ensure all requirements are met", isCompleted: false },
    { id: "walkthrough", title: "Client Walkthrough", description: "Walkthrough with client and address any adjustments", isCompleted: false },
    { id: "delivery", title: "Final Delivery", description: "Complete delivery, documentation, and project closure", isCompleted: false },
    { id: "testing", title: "Testing & Verification", description: "Comprehensive testing and verification of all deliverables", isCompleted: false },
    { id: "training", title: "Client Training", description: "Provide training to client on project deliverables", isCompleted: false },
    { id: "warranty", title: "Warranty & Support", description: "Provide post-completion warranty and technical support", isCompleted: false }
  ];
  constructor(jobService, activatedRoute, router, auth, cdr, dialog) {
    this.jobService = jobService;
    this.activatedRoute = activatedRoute;
    this.router = router;
    this.auth = auth;
    this.cdr = cdr;
    this.dialog = dialog;
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
        this.initializePhases(job);
        this.loading = false;
        this.cdr.markForCheck();
        this.loadBidsForJob(jobId);
        if (job.status === "Completion Submitted") {
          this.loadCompletionStatus(jobId);
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
  initializePhases(job) {
    let phases = [];
    if (job.jobPhases) {
      if (typeof job.jobPhases === "string") {
        try {
          phases = JSON.parse(job.jobPhases);
        } catch (e) {
          console.error("Failed to parse jobPhases:", e);
          phases = [];
        }
      } else if (Array.isArray(job.jobPhases)) {
        phases = job.jobPhases;
      }
    }
    phases = phases.map((phase) => ({
      id: phase.id || phase.Id || "",
      title: phase.title || phase.Title || "",
      description: phase.description || phase.Description || "",
      isCompleted: phase.isCompleted !== void 0 ? phase.isCompleted : phase.IsCompleted || false,
      completedAt: phase.completedAt || phase.CompletedAt
    }));
    job.jobPhases = phases;
  }
  getJobPhases(job) {
    if (!job.jobPhases) {
      return [];
    }
    if (Array.isArray(job.jobPhases)) {
      return job.jobPhases;
    }
    if (typeof job.jobPhases === "string") {
      try {
        const parsed = JSON.parse(job.jobPhases);
        return Array.isArray(parsed) ? parsed : [];
      } catch (e) {
        console.error("Failed to parse jobPhases:", e);
        return [];
      }
    }
    return [];
  }
  getPhaseProgress(job) {
    const phases = this.getJobPhases(job);
    if (phases.length === 0)
      return 0;
    const completed = phases.filter((p) => p.isCompleted).length;
    return Math.round(completed / phases.length * 100);
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
  togglePhaseCompletion(job, phaseId) {
    const phases = this.getJobPhases(job);
    const phase = phases.find((p) => p.id === phaseId);
    if (phase) {
      phase.isCompleted = !phase.isCompleted;
      phase.completedAt = phase.isCompleted ? (/* @__PURE__ */ new Date()).toISOString() : void 0;
      job.jobPhases = [...phases];
      this.unsavedJobIds.add(job.id);
      this.cdr.markForCheck();
    }
  }
  savePhaseChanges(job) {
    if (!this.unsavedJobIds.has(job.id)) {
      return;
    }
    const phases = this.getJobPhases(job);
    this.savingJobId = job.id;
    this.jobService.updateJobPhases(job.id, phases).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        this.unsavedJobIds.delete(job.id);
        this.savingJobId = null;
        this.successMessage = "Project phases updated successfully!";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.successMessage = "";
          this.cdr.markForCheck();
        }, 3e3);
      },
      error: (error) => {
        console.error("Error saving phase changes:", error);
        this.savingJobId = null;
        this.errorMessage = "Failed to save phase changes. Please try again.";
        this.cdr.markForCheck();
      }
    });
  }
  hasUnsavedChanges(jobId) {
    return this.unsavedJobIds.has(jobId);
  }
  openPhaseSelectionDialog(job) {
    if (!job)
      return;
    const currentPhaseIds = this.getJobPhases(job).map((p) => p.id);
    const dialogRef = this.dialog.open(PhaseSelectionDialogComponent, {
      width: "600px",
      maxHeight: "80vh",
      data: {
        availablePhases: this.PHASE_OPTIONS,
        selectedPhaseIds: currentPhaseIds,
        maxPhases: 10
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.selectedPhases && result.selectedPhases.length > 0) {
        const selectedPhases = result.selectedPhases.map((phase) => __spreadProps(__spreadValues({}, phase), {
          isCompleted: false
        }));
        job.jobPhases = selectedPhases;
        this.unsavedJobIds.add(job.id);
        this.cdr.markForCheck();
      }
    });
  }
  markAsCompleted(jobId) {
    if (!this.job || this.job.id !== jobId)
      return;
    const dialogRef = this.dialog.open(ConfirmCompletionDialogComponent, {
      width: "400px",
      data: { jobTitle: this.job.title }
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.jobService.markJobCompleted(jobId).pipe(takeUntil(this.destroy$)).subscribe({
          next: () => {
            this.successMessage = "Job marked as completed!";
            if (this.job) {
              this.job.status = "Completed";
            }
            this.cdr.markForCheck();
            setTimeout(() => {
              this.successMessage = "";
              this.cdr.markForCheck();
            }, 3e3);
          },
          error: (error) => {
            console.error("Error marking job as completed:", error);
            this.errorMessage = "Failed to mark job as completed. Please try again.";
            this.cdr.markForCheck();
          }
        });
      }
    });
  }
  goBack() {
    this.router.navigate(["/my-jobs-pro"]);
  }
  // Load bids for a job
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
  // Get the bid submitted by this professional
  getProBid() {
    if (!this.job) {
      return null;
    }
    const currentUserIdStr = this.auth.getUserId();
    if (!currentUserIdStr) {
      return null;
    }
    const currentUserId = parseInt(currentUserIdStr, 10);
    const proBid = this.jobBids.find((bid) => bid.proId === currentUserId);
    return proBid || null;
  }
  loadCompletionStatus(jobId) {
    this.jobService.getJobCompletion(jobId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (c) => {
        this.completionStatus = c?.status ?? null;
        this.disputeReason = c?.disputeReason ?? null;
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
  }
  resubmitCompletion() {
    if (!this.job)
      return;
    this.resubmittingCompletion = true;
    this.jobService.resubmitCompletion(this.job.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.completionStatus = "Submitted";
        this.disputeReason = null;
        this.resubmittingCompletion = false;
        this.successMessage = "Completion resubmitted. Waiting for customer review.";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.successMessage = "";
          this.cdr.markForCheck();
        }, 4e3);
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Failed to resubmit completion.";
        this.resubmittingCompletion = false;
        this.cdr.markForCheck();
      }
    });
  }
  confirmJob() {
    if (!this.job)
      return;
    this.confirmingJob = true;
    this.jobService.confirmJob(this.job.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        this.job.status = "In Progress";
        this.confirmingJob = false;
        this.successMessage = "Job confirmed! Work is now in progress.";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.successMessage = "";
          this.cdr.markForCheck();
        }, 3e3);
      },
      error: (err) => {
        this.errorMessage = err?.error?.message || "Failed to confirm job.";
        this.confirmingJob = false;
        this.cdr.markForCheck();
      }
    });
  }
  withdrawBid() {
    const proBid = this.getProBid();
    if (!proBid || !this.job)
      return;
    if (!confirm("Are you sure you want to withdraw your bid? This cannot be undone."))
      return;
    this.withdrawingBid = true;
    this.jobService.withdrawBid(this.job.id, proBid.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: () => {
        proBid.status = "Withdrawn";
        this.withdrawingBid = false;
        this.cdr.markForCheck();
      },
      error: (err) => {
        console.error("Error withdrawing bid:", err);
        this.errorMessage = err?.error?.message || "Failed to withdraw bid.";
        this.withdrawingBid = false;
        this.cdr.markForCheck();
      }
    });
  }
  // Navigate to messages page with partner ID
  goToMessagesPage() {
    if (!this.job || !this.job.userId)
      return;
    this.router.navigate(["/messages"], {
      queryParams: {
        partnerId: this.job.userId.toString()
      }
    });
  }
  // Get bid status color
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
  // Format bid status
  getBidStatus(status) {
    switch (status) {
      case "Pending":
        return "Pending";
      case "Accepted":
        return "Accepted";
      case "Rejected":
        return "Rejected";
      case "Withdrawn":
        return "Withdrawn";
      default:
        return status ?? "Unknown";
    }
  }
  static \u0275fac = function MyJobProDetailsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyJobProDetailsComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatDialog));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyJobProDetailsComponent, selectors: [["app-my-job-pro-details"]], decls: 15, vars: 5, consts: [[1, "job-details-container"], [1, "page-header"], [1, "header-top"], ["mat-icon-button", "", "matTooltip", "Back to My Jobs", 1, "back-button", 3, "click"], [1, "header-title"], [1, "subtitle"], ["class", "loading-container", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "job-details-card", 4, "ngIf"], [1, "loading-container"], [1, "alert", "alert-error"], [1, "alert", "alert-success"], [1, "job-details-card"], [1, "job-card-header"], [1, "job-header-content"], [1, "job-category-section"], [1, "category-label"], [1, "job-category"], [1, "job-status-section"], [1, "status-label"], ["selected", "", 3, "color"], [1, "job-section"], [1, "description"], [1, "details-grid"], [1, "detail-item"], [1, "label"], [1, "value"], ["class", "job-section", 4, "ngIf"], ["class", "dispute-notice-section", 4, "ngIf"], ["class", "confirm-job-section", 4, "ngIf"], ["class", "customer-communication-section", 4, "ngIf"], [1, "phases-section"], [1, "phases-header"], ["class", "phases-title-row", 4, "ngIf"], ["class", "subtitle", 4, "ngIf"], [1, "phase-progress"], ["mode", "determinate", "color", "accent", 3, "value"], [1, "progress-text"], [1, "phases-list"], ["class", "phase-item", 3, "completed", 4, "ngFor", "ngForOf"], ["class", "phases-footer", 4, "ngIf"], ["mat-button", "", "color", "accent", 3, "click", 4, "ngIf"], ["mat-button", "", "color", "warn", "disabled", "", 4, "ngIf"], [1, "attachments"], ["href", "#", "target", "_blank"], [1, "dispute-notice-section"], [1, "dispute-notice"], [1, "dispute-icon"], [4, "ngIf"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [1, "confirm-job-section"], [1, "confirm-notice"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "customer-communication-section"], [1, "pro-card-inprogress"], [1, "pro-info"], [1, "bid-details-grid"], ["class", "detail-item", 4, "ngIf"], [1, "bid-actions"], ["mat-raised-button", "", "color", "primary", 1, "message-btn", 3, "click"], ["mat-stroked-button", "", "color", "warn", "class", "withdraw-btn", "matTooltip", "Withdraw your bid", 3, "disabled", "click", 4, "ngIf"], [1, "value", "bid-amount"], ["mat-stroked-button", "", "color", "warn", "matTooltip", "Withdraw your bid", 1, "withdraw-btn", 3, "click", "disabled"], [1, "phases-title-row"], ["mat-raised-button", "", "matTooltip", "Edit project phases", "color", "primary", 3, "click"], ["class", "unsaved-indicator", 4, "ngIf"], [1, "unsaved-indicator"], [1, "warning-icon"], [1, "phase-item"], [1, "phase-checkbox"], ["color", "accent", 3, "change", "checked"], [1, "phase-content"], [1, "phase-description"], ["class", "phase-completed-date", 4, "ngIf"], [1, "phase-completed-date"], [1, "phases-footer"], ["class", "spinner", 4, "ngIf"], [1, "spinner"], ["mat-button", "", "color", "accent", 3, "click"], ["mat-button", "", "color", "warn", "disabled", ""]], template: function MyJobProDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "button", 3);
      \u0275\u0275listener("click", function MyJobProDetailsComponent_Template_button_click_3_listener() {
        return ctx.goBack();
      });
      \u0275\u0275elementStart(4, "mat-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 4)(7, "h1");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 5);
      \u0275\u0275text(10, "View and manage job progress");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(11, MyJobProDetailsComponent_div_11_Template, 4, 0, "div", 6)(12, MyJobProDetailsComponent_div_12_Template, 5, 1, "div", 7)(13, MyJobProDetailsComponent_div_13_Template, 5, 1, "div", 8)(14, MyJobProDetailsComponent_div_14_Template, 82, 23, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate((ctx.job == null ? null : ctx.job.title) || "Job Details");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.job && !ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    RouterModule,
    MatCardModule,
    MatCard,
    MatCardActions,
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
    MatCheckboxModule,
    MatCheckbox,
    MatProgressBarModule,
    MatProgressBar,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
    MatTooltip,
    MatDialogModule,
    DecimalPipe,
    DatePipe
  ], styles: ['\n\n.job-details-container[_ngcontent-%COMP%] {\n  padding: 0;\n  max-width: 100%;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  padding: 2rem 2rem;\n  margin-bottom: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  color: white;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: white;\n}\n.job-details-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%]   .header-title[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1rem;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #666;\n  font-size: 1.1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin: 0 2rem 1.5rem 2rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.job-details-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%] {\n  padding: 0 2rem 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%] {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-header.job-card-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 2px solid #f0f0f0;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #f0f0f0 100%);\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-status-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-status-section[_ngcontent-%COMP%]   .status-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #999;\n  letter-spacing: 0.5px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-status-section[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0.5rem 1.2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category-section[_ngcontent-%COMP%]   .category-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #999;\n  letter-spacing: 0.5px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category-section[_ngcontent-%COMP%]   .job-category[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  padding: 0.75rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category-section[_ngcontent-%COMP%]   .job-category[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.8rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.8rem;\n  background-color: #f5f5f5;\n  border-radius: 6px;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n}\n.job-details-container[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.job-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.8rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: block;\n  margin-bottom: 0.3rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #333;\n  font-weight: 500;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 1rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  border: 1px solid #eee;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.3rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%]   .customer-email[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%]   .unsaved-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0.4rem 0.8rem;\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  color: #856404;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%]   .unsaved-indicator[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #ff9800;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  border-radius: 4px;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  background-color: white;\n  border-radius: 8px;\n  border: 2px solid #e0e0e0;\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item.completed[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n  border-color: #4caf50;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item.completed[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #4caf50;\n  text-decoration: line-through;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  padding-top: 0.2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%]   .phase-description[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%]   .phase-completed-date[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #4caf50;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%]   .phase-completed-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(102, 126, 234, 0.2);\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0.6rem 1.5rem;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.spinner[_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_spin 2s linear infinite;\n}\n.job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n}\n.job-details-container[_ngcontent-%COMP%]   .dispute-notice-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background: #fce4ec;\n  border: 1px solid #f48fb1;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n}\n.job-details-container[_ngcontent-%COMP%]   .dispute-notice-section[_ngcontent-%COMP%]   .dispute-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .dispute-notice-section[_ngcontent-%COMP%]   .dispute-notice[_ngcontent-%COMP%]   .dispute-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #c62828;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .dispute-notice-section[_ngcontent-%COMP%]   .dispute-notice[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.1rem;\n  color: #c62828;\n}\n.job-details-container[_ngcontent-%COMP%]   .dispute-notice-section[_ngcontent-%COMP%]   .dispute-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.9rem;\n  color: #555;\n}\n.job-details-container[_ngcontent-%COMP%]   .confirm-job-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-left: 4px solid #2e7d32;\n  border-radius: 8px;\n}\n.job-details-container[_ngcontent-%COMP%]   .confirm-job-section[_ngcontent-%COMP%]   .confirm-notice[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .confirm-job-section[_ngcontent-%COMP%]   .confirm-notice[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #2e7d32;\n  flex-shrink: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .confirm-job-section[_ngcontent-%COMP%]   .confirm-notice[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.1rem;\n  color: #2e7d32;\n}\n.job-details-container[_ngcontent-%COMP%]   .confirm-job-section[_ngcontent-%COMP%]   .confirm-notice[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #555;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 1.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border: 2px solid #667eea;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.12);\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.18);\n  transform: translateY(-2px);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 2px solid rgba(102, 126, 234, 0.1);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .pro-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #667eea;\n  margin: 0;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  padding: 0.75rem;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 8px;\n  border-left: 3px solid #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #555;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value.bid-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #4caf50;\n  font-size: 1.3rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .bid-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .message-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.9rem;\n  font-size: 1.05rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .message-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.35);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .message-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-card-inprogress[_ngcontent-%COMP%]   .message-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-labels {\n  background: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n  min-width: 150px;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-body-content {\n  padding: 1.5rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border-left: 4px solid #667eea;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n  border-radius: 8px;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%]   .bid-header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%]   .bid-header-info[_ngcontent-%COMP%]   .bid-status-badge[_ngcontent-%COMP%] {\n  margin-left: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%]   .bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%]   .bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%]   .bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.95rem;\n  min-width: 120px;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%]   .bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 0.95rem;\n  text-align: right;\n  flex: 1;\n  margin-left: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%]   .bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]   .detail-value.bid-amount[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4caf50;\n  font-size: 1.1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .pro-bid-card[_ngcontent-%COMP%]   .bid-details[_ngcontent-%COMP%]   .bid-detail-item[_ngcontent-%COMP%]   .detail-value.bid-message[_ngcontent-%COMP%] {\n  text-align: left;\n  white-space: pre-wrap;\n  word-break: break-word;\n  line-height: 1.5;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .bids-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .bids-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .no-bid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #999;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .no-bid[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n  margin-bottom: 0.5rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .no-bid[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border-left: 4px solid #667eea;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n  border-radius: 8px;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%]   .customer-header-info[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%]   .customer-header-info[_ngcontent-%COMP%]   .customer-main-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%]   .customer-header-info[_ngcontent-%COMP%]   .customer-main-info[_ngcontent-%COMP%]   .customer-full-name[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.25rem 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%]   .customer-header-info[_ngcontent-%COMP%]   .customer-main-info[_ngcontent-%COMP%]   .customer-type[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .customer-detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .customer-detail-item[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .customer-detail-item[_ngcontent-%COMP%]   .detail-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.95rem;\n  min-width: 100px;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .customer-details-card[_ngcontent-%COMP%]   .customer-details[_ngcontent-%COMP%]   .customer-detail-item[_ngcontent-%COMP%]   .detail-value[_ngcontent-%COMP%] {\n  color: #333;\n  font-size: 0.95rem;\n  text-align: right;\n  flex: 1;\n  margin-left: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%] {\n  min-height: 200px;\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 1rem;\n  background: #fafafa;\n  border-radius: 6px;\n  border: 1px solid #ddd;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .no-messages[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #999;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .no-messages[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .no-messages[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n  border-radius: 6px;\n  background: white;\n  border-left: 3px solid #667eea;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item.received[_ngcontent-%COMP%] {\n  border-left-color: #4caf50;\n  background: #f1f8e9;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .sender-type[_ngcontent-%COMP%] {\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.8rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .sender-type.user[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .sender-type.pro[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-header[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  color: #999;\n  font-size: 0.8rem;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%]   .message-item[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  line-height: 1.4;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n  border-top: 1px solid #ddd;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-family: "Roboto", sans-serif;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   .message-input[_ngcontent-%COMP%]:disabled {\n  background-color: #f5f5f5;\n  color: #999;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   button[disabled][_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-input-group[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.job-details-container[_ngcontent-%COMP%]   .customer-communication-section[_ngcontent-%COMP%]   .messages-container[_ngcontent-%COMP%]   .message-form-section[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #4caf50;\n  margin: 0.5rem 0 0 0;\n  font-weight: 500;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .job-details-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .job-details-container[_ngcontent-%COMP%]   .job-details-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .job-details-container[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .job-details-container[_ngcontent-%COMP%]   .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=my-job-pro-details.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyJobProDetailsComponent, [{
    type: Component,
    args: [{ selector: "app-my-job-pro-details", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatChipsModule,
      MatCheckboxModule,
      MatProgressBarModule,
      MatTabsModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatDialogModule
    ], template: `<div class="job-details-container">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <div class="header-top">\r
      <button mat-icon-button (click)="goBack()" class="back-button" matTooltip="Back to My Jobs">\r
        <mat-icon>arrow_back</mat-icon>\r
      </button>\r
      <div class="header-title">\r
        <h1>{{ job?.title || 'Job Details' }}</h1>\r
        <p class="subtitle">View and manage job progress</p>\r
      </div>\r
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
  <!-- Job Details -->\r
  <div *ngIf="job && !loading" class="job-details-card">\r
    <mat-card>\r
      <!-- Job Header -->\r
      <mat-card-header class="job-card-header">\r
        <div class="job-header-content">            \r
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
        <h3>Details Grid</h3>        \r
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
            <mat-icon>attach_money</mat-icon>\r
            <div>\r
              <span class="label">Budget</span>\r
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
        <!-- Customer Info -->\r
        <!-- <div class="customer-section">\r
          <h3>Customer</h3>\r
          <div class="customer-info">\r
            <mat-icon>person</mat-icon>\r
            <div>\r
              <p class="customer-name">\r
                {{ job.user?.firstName && job.user?.lastName ? (job.user?.firstName + ' ' + job.user?.lastName) : (job.user?.name || 'Unknown Customer') }}\r
              </p>\r
              <p class="customer-email">{{ job.user?.email }}</p>\r
            </div>\r
          </div>\r
        </div> -->\r
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
        <!-- Dispute notice \u2014 shown when customer has disputed the submitted completion -->\r
        <div *ngIf="job.status === 'Completion Submitted' && completionStatus === 'Disputed'" class="dispute-notice-section">\r
          <div class="dispute-notice">\r
            <mat-icon class="dispute-icon">warning</mat-icon>\r
            <div>\r
              <h3>Customer Raised a Dispute</h3>\r
              <p *ngIf="disputeReason"><strong>Reason:</strong> {{ disputeReason }}</p>\r
              <p>Address the customer's concerns and resubmit your completion.</p>\r
            </div>\r
          </div>\r
          <button\r
            mat-raised-button\r
            color="primary"\r
            (click)="resubmitCompletion()"\r
            [disabled]="resubmittingCompletion">\r
            <mat-icon>refresh</mat-icon>\r
            {{ resubmittingCompletion ? 'Resubmitting...' : 'Resubmit Completion' }}\r
          </button>\r
        </div>\r
\r
        <!-- Confirm & Start \u2014 shown when payment is received and awaiting pro confirmation -->\r
        <div *ngIf="job.status === 'Payment Made'" class="confirm-job-section">\r
          <div class="confirm-notice">\r
            <mat-icon>payment</mat-icon>\r
            <div>\r
              <h3>Payment Received</h3>\r
              <p>The customer has completed payment. Confirm to start work on this job.</p>\r
            </div>\r
          </div>\r
          <button\r
            mat-raised-button\r
            color="accent"\r
            (click)="confirmJob()"\r
            [disabled]="confirmingJob">\r
            <mat-icon>play_circle</mat-icon>\r
            {{ confirmingJob ? 'Confirming...' : 'Confirm & Start Job' }}\r
          </button>\r
        </div>\r
\r
        <!-- Customer Communication Section -->\r
        <div *ngIf="job.status === 'Payment Made' || job.status === 'Pro Confirmed' || job.status === 'In Progress' || job.status === 'Completion Submitted' || job.status === 'Completed'" class="customer-communication-section">\r
          <h3>\r
            <mat-icon>mail</mat-icon>\r
            Communication\r
          </h3>\r
\r
          <div class="pro-card-inprogress">\r
            <div class="pro-info">\r
              <h4>{{ job.user?.firstName ? job.user?.firstName : 'Customer' }}</h4>\r
              <p>{{ job.user?.email }}</p>\r
            </div>\r
            <div class="bid-details-grid">\r
              <div class="detail-item">\r
                <span class="label">Job ID:</span>\r
                <span class="value">#{{ job.id }}</span>\r
              </div>\r
              <div class="detail-item">\r
                <span class="label">Posted Date:</span>\r
                <span class="value">{{ job.createdAt | date: 'MMM dd, yyyy' }}</span>\r
              </div>\r
              <div class="detail-item" *ngIf="getProBid() as proBid">\r
                <span class="label">Bid Amount:</span>\r
                <span class="value bid-amount">\${{ proBid.bidAmount | number: '1.2-2' }}</span>\r
              </div>\r
              <div class="detail-item" *ngIf="getProBid() as proBid">\r
                <span class="label">Bid Status:</span>\r
                <span class="value">{{ getBidStatus(proBid.status) }}</span>\r
              </div>\r
              <div class="detail-item" *ngIf="getProBid() as proBid">\r
                <span class="label">Bid Date:</span>\r
                <span class="value">{{ proBid.createdAt | date: 'MMM dd, yyyy' }}</span>\r
              </div>\r
            </div>\r
            <div class="bid-actions">\r
              <button mat-raised-button color="primary" (click)="goToMessagesPage()" class="message-btn">\r
                <mat-icon>message</mat-icon>\r
                Message\r
              </button>\r
              <button\r
                *ngIf="getProBid()?.status === 'Pending'"\r
                mat-stroked-button\r
                color="warn"\r
                (click)="withdrawBid()"\r
                [disabled]="withdrawingBid"\r
                class="withdraw-btn"\r
                matTooltip="Withdraw your bid">\r
                <mat-icon>undo</mat-icon>\r
                {{ withdrawingBid ? 'Withdrawing...' : 'Withdraw Bid' }}\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Job Phases Section -->\r
        <div class="phases-section">\r
          <div class="phases-header">\r
            <h3>\r
              <mat-icon>flag</mat-icon>\r
              Progress Tracking\r
            </h3>  \r
            <div class="phases-title-row" *ngIf="job.status !== 'Completed'">            \r
              <button \r
                mat-raised-button \r
                (click)="openPhaseSelectionDialog(job)"\r
                matTooltip="Edit project phases"\r
                color="primary">\r
                <mat-icon >edit</mat-icon>\r
                {{ 'Add Phases' }}\r
              </button>\r
              <div class="unsaved-indicator" *ngIf="hasUnsavedChanges(job.id)">\r
                <mat-icon class="warning-icon">info</mat-icon>\r
                <span>Unsaved changes</span>\r
              </div>            \r
            </div>  \r
            <p *ngIf="job.status !== 'Completed'" class="subtitle">Define project phases to help the customer track your work progress</p>          \r
            <div class="phase-progress">\r
              <mat-progress-bar \r
                mode="determinate" \r
                [value]="getPhaseProgress(job)"\r
                color="accent">\r
              </mat-progress-bar>\r
              <span class="progress-text">{{ getPhaseProgress(job) }}% Complete</span>\r
            </div>\r
          </div>\r
          \r
          <div class="phases-list">\r
            <div \r
              *ngFor="let phase of getJobPhases(job)" \r
              class="phase-item"\r
              [class.completed]="phase.isCompleted">\r
              <div class="phase-checkbox">\r
                <mat-checkbox \r
                  [checked]="phase.isCompleted"\r
                  (change)="togglePhaseCompletion(job, phase.id)"\r
                  color="accent">\r
                </mat-checkbox>\r
              </div>\r
              <div class="phase-content">\r
                <h4 [class.completed]="phase.isCompleted">{{ phase.title }}</h4>\r
                <p class="phase-description">{{ phase.description }}</p>\r
                <p *ngIf="phase.isCompleted && phase.completedAt" class="phase-completed-date">\r
                  <mat-icon>check_circle</mat-icon>\r
                  Completed on {{ phase.completedAt | date: 'MMM dd, yyyy HH:mm' }}\r
                </p>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Save Button -->\r
          <div class="phases-footer" *ngIf="hasUnsavedChanges(job.id)">\r
            <button \r
              mat-raised-button \r
              color="accent"\r
              (click)="savePhaseChanges(job)"\r
              [disabled]="savingJobId === job.id">\r
              <mat-icon *ngIf="savingJobId !== job.id">save</mat-icon>\r
              <mat-icon *ngIf="savingJobId === job.id" class="spinner">schedule</mat-icon>\r
              {{ savingJobId === job.id ? 'Saving...' : 'Save Changes' }}\r
            </button>\r
          </div>\r
        </div>\r
      </mat-card-content>\r
\r
      <!-- Job Actions -->\r
      <mat-card-actions>\r
        <button\r
          mat-button\r
          color="accent"\r
          *ngIf="(job.status === 'In Progress' || job.status === 'Pro Confirmed') && getPhaseProgress(job) === 100 && !unsavedJobIds.has(job.id)"\r
          (click)="markAsCompleted(job.id)">\r
          <mat-icon>check_circle</mat-icon>\r
          Mark Completed\r
        </button>\r
        <button mat-button color="warn" *ngIf="job.status === 'Completed'" disabled>\r
          <mat-icon>done_all</mat-icon>\r
          Completed\r
        </button>\r
      </mat-card-actions>\r
    </mat-card>\r
  </div>\r
</div>\r
`, styles: ['/* src/app/features/my-jobs-pro/my-job-pro-details.scss */\n.job-details-container {\n  padding: 0;\n  max-width: 100%;\n  margin: 0;\n}\n.job-details-container .page-header {\n  padding: 2rem 2rem;\n  margin-bottom: 2rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-radius: 0;\n}\n.job-details-container .page-header .header-top {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.job-details-container .page-header .header-top .back-button {\n  color: white;\n  flex-shrink: 0;\n}\n.job-details-container .page-header .header-top .back-button mat-icon {\n  color: white;\n}\n.job-details-container .page-header .header-top .back-button:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n}\n.job-details-container .page-header .header-top .header-title {\n  flex: 1;\n}\n.job-details-container .page-header .header-top .header-title h1 {\n  font-size: 2rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: white;\n}\n.job-details-container .page-header .header-top .header-title .subtitle {\n  color: rgba(255, 255, 255, 0.9);\n  font-size: 1rem;\n  margin: 0;\n}\n.job-details-container .loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.job-details-container .loading-container p {\n  margin-top: 1rem;\n  color: #666;\n  font-size: 1.1rem;\n}\n.job-details-container .alert {\n  padding: 1rem;\n  margin: 0 2rem 1.5rem 2rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-weight: 500;\n}\n.job-details-container .alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.job-details-container .alert.alert-success mat-icon {\n  color: #28a745;\n}\n.job-details-container .alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.job-details-container .alert.alert-error mat-icon {\n  color: #dc3545;\n}\n.job-details-container .job-details-card {\n  padding: 0 2rem 2rem 2rem;\n  max-width: 1400px;\n  margin: 0 auto;\n}\n.job-details-container .job-details-card mat-card {\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.job-details-container .job-details-card mat-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n}\n.job-details-container .job-details-card mat-card mat-card-header.job-card-header {\n  padding: 2rem;\n  border-bottom: 2px solid #f0f0f0;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #f8f9fa 0%,\n      #f0f0f0 100%);\n}\n.job-details-container .job-details-card mat-card .job-header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 3rem;\n  flex-wrap: wrap;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-status-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-status-section .status-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #999;\n  letter-spacing: 0.5px;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-status-section mat-chip-set mat-chip {\n  font-size: 0.95rem;\n  font-weight: 600;\n  padding: 0.5rem 1.2rem;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-category-section {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-category-section .category-label {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: #999;\n  letter-spacing: 0.5px;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-category-section .job-category {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  padding: 0.75rem 1.25rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.job-details-container .job-details-card mat-card .job-header-content .job-category-section .job-category mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  color: #667eea;\n}\n.job-details-container .job-details-card mat-card mat-card-content {\n  padding: 1.5rem;\n}\n.job-details-container .job-details-card mat-card mat-card-actions {\n  padding: 1rem;\n  border-top: 1px solid #eee;\n  display: flex;\n  gap: 0.5rem;\n}\n.job-details-container .job-section {\n  margin-bottom: 2rem;\n}\n.job-details-container .job-section h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.8rem 0;\n}\n.job-details-container .job-section .description {\n  color: #666;\n  line-height: 1.6;\n  margin: 0;\n}\n.job-details-container .job-section .attachments {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.8rem;\n  background-color: #f5f5f5;\n  border-radius: 6px;\n}\n.job-details-container .job-section .attachments a {\n  color: #667eea;\n  text-decoration: none;\n}\n.job-details-container .job-section .attachments a:hover {\n  text-decoration: underline;\n}\n.job-details-container .details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 2rem;\n}\n.job-details-container .details-grid .detail-item {\n  display: flex;\n  gap: 0.8rem;\n}\n.job-details-container .details-grid .detail-item mat-icon {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.job-details-container .details-grid .detail-item .label {\n  font-size: 0.85rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  display: block;\n  margin-bottom: 0.3rem;\n}\n.job-details-container .details-grid .detail-item .value {\n  font-size: 0.95rem;\n  color: #333;\n  font-weight: 500;\n  margin: 0;\n}\n.job-details-container .customer-section {\n  margin-bottom: 2rem;\n}\n.job-details-container .customer-section h3 {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 1rem 0;\n}\n.job-details-container .customer-section .customer-info {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  background-color: #f9f9f9;\n  border-radius: 8px;\n  border: 1px solid #eee;\n}\n.job-details-container .customer-section .customer-info mat-icon {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.job-details-container .customer-section .customer-info .customer-name {\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.3rem 0;\n}\n.job-details-container .customer-section .customer-info .customer-email {\n  color: #666;\n  font-size: 0.9rem;\n  margin: 0;\n}\n.job-details-container .phases-section {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n}\n.job-details-container .phases-section .phases-header {\n  margin-bottom: 1.5rem;\n}\n.job-details-container .phases-section .phases-header .phases-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n.job-details-container .phases-section .phases-header .phases-title-row h3 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0;\n}\n.job-details-container .phases-section .phases-header .phases-title-row h3 mat-icon {\n  color: #667eea;\n}\n.job-details-container .phases-section .phases-header .phases-title-row .unsaved-indicator {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0.4rem 0.8rem;\n  background-color: #fff3cd;\n  border: 1px solid #ffeaa7;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  color: #856404;\n  font-weight: 500;\n}\n.job-details-container .phases-section .phases-header .phases-title-row .unsaved-indicator .warning-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n  color: #ff9800;\n}\n.job-details-container .phases-section .phases-header .phase-progress {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.job-details-container .phases-section .phases-header .phase-progress mat-progress-bar {\n  flex: 1;\n  height: 8px;\n  border-radius: 4px;\n}\n.job-details-container .phases-section .phases-header .phase-progress .progress-text {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #333;\n  white-space: nowrap;\n}\n.job-details-container .phases-section .phases-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.job-details-container .phases-section .phases-list .phase-item {\n  display: flex;\n  gap: 1rem;\n  padding: 1rem;\n  background-color: white;\n  border-radius: 8px;\n  border: 2px solid #e0e0e0;\n  transition: all 0.3s ease;\n}\n.job-details-container .phases-section .phases-list .phase-item:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n}\n.job-details-container .phases-section .phases-list .phase-item.completed {\n  background: #f0f4ff;\n  border-color: #4caf50;\n}\n.job-details-container .phases-section .phases-list .phase-item.completed h4 {\n  color: #4caf50;\n  text-decoration: line-through;\n}\n.job-details-container .phases-section .phases-list .phase-item .phase-checkbox {\n  display: flex;\n  align-items: flex-start;\n  padding-top: 0.2rem;\n}\n.job-details-container .phases-section .phases-list .phase-item .phase-content {\n  flex: 1;\n}\n.job-details-container .phases-section .phases-list .phase-item .phase-content h4 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n  transition: all 0.3s ease;\n}\n.job-details-container .phases-section .phases-list .phase-item .phase-content .phase-description {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0 0 0.5rem 0;\n  line-height: 1.4;\n}\n.job-details-container .phases-section .phases-list .phase-item .phase-content .phase-completed-date {\n  font-size: 0.85rem;\n  color: #4caf50;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.job-details-container .phases-section .phases-list .phase-item .phase-content .phase-completed-date mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.job-details-container .phases-section .phases-footer {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 1.5rem;\n  padding-top: 1rem;\n  border-top: 1px solid rgba(102, 126, 234, 0.2);\n}\n.job-details-container .phases-section .phases-footer button {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 0.6rem 1.5rem;\n  font-weight: 500;\n}\n.job-details-container .phases-section .phases-footer button mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.job-details-container .phases-section .phases-footer button mat-icon.spinner {\n  animation: spin 2s linear infinite;\n}\n.job-details-container .phases-section .phases-footer button:disabled {\n  opacity: 0.6;\n}\n.job-details-container .dispute-notice-section {\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background: #fce4ec;\n  border: 1px solid #f48fb1;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n}\n.job-details-container .dispute-notice-section .dispute-notice {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.job-details-container .dispute-notice-section .dispute-notice .dispute-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #c62828;\n  flex-shrink: 0;\n}\n.job-details-container .dispute-notice-section .dispute-notice h3 {\n  margin: 0 0 0.25rem;\n  font-size: 1.1rem;\n  color: #c62828;\n}\n.job-details-container .dispute-notice-section .dispute-notice p {\n  margin: 0 0 0.25rem;\n  font-size: 0.9rem;\n  color: #555;\n}\n.job-details-container .confirm-job-section {\n  margin-bottom: 1.5rem;\n  padding: 1.25rem;\n  background: #e8f5e9;\n  border: 1px solid #a5d6a7;\n  border-left: 4px solid #2e7d32;\n  border-radius: 8px;\n}\n.job-details-container .confirm-job-section .confirm-notice {\n  display: flex;\n  align-items: flex-start;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.job-details-container .confirm-job-section .confirm-notice mat-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: #2e7d32;\n  flex-shrink: 0;\n}\n.job-details-container .confirm-job-section .confirm-notice h3 {\n  margin: 0 0 0.25rem;\n  font-size: 1.1rem;\n  color: #2e7d32;\n}\n.job-details-container .confirm-job-section .confirm-notice p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: #555;\n}\n.job-details-container .customer-communication-section {\n  margin-bottom: 2rem;\n}\n.job-details-container .customer-communication-section h3 {\n  font-size: 1.25rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 1.5rem 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.job-details-container .customer-communication-section h3 mat-icon {\n  color: #667eea;\n  font-size: 1.4rem;\n  width: 1.4rem;\n  height: 1.4rem;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border: 2px solid #667eea;\n  border-radius: 12px;\n  padding: 2rem;\n  margin-bottom: 1.5rem;\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.12);\n  transition: all 0.3s ease;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress:hover {\n  box-shadow: 0 6px 24px rgba(102, 126, 234, 0.18);\n  transform: translateY(-2px);\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .pro-info {\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 2px solid rgba(102, 126, 234, 0.1);\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .pro-info h4 {\n  font-size: 1.3rem;\n  font-weight: 700;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .pro-info p {\n  font-size: 0.95rem;\n  color: #667eea;\n  margin: 0;\n  font-weight: 500;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .bid-details-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));\n  gap: 1.5rem;\n  margin-bottom: 1.5rem;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .bid-details-grid .detail-item {\n  display: flex;\n  flex-direction: column;\n  gap: 0.6rem;\n  padding: 0.75rem;\n  background: rgba(255, 255, 255, 0.6);\n  border-radius: 8px;\n  border-left: 3px solid #667eea;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .bid-details-grid .detail-item .label {\n  font-weight: 700;\n  color: #555;\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #667eea;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .bid-details-grid .detail-item .value {\n  color: #333;\n  font-size: 1.05rem;\n  font-weight: 600;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .bid-details-grid .detail-item .value.bid-amount {\n  font-weight: 700;\n  color: #4caf50;\n  font-size: 1.3rem;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .bid-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .message-btn {\n  width: 100%;\n  padding: 0.9rem;\n  font-size: 1.05rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .message-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 16px rgba(102, 126, 234, 0.35);\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .message-btn:active {\n  transform: translateY(0);\n}\n.job-details-container .customer-communication-section .pro-card-inprogress .message-btn mat-icon {\n  margin-right: 0.5rem;\n}\n.job-details-container .customer-communication-section .messages-tabs ::ng-deep .mat-mdc-tab-labels {\n  background: #f5f5f5;\n  border-bottom: 1px solid #ddd;\n}\n.job-details-container .customer-communication-section .messages-tabs ::ng-deep .mat-mdc-tab {\n  min-width: 150px;\n}\n.job-details-container .customer-communication-section .messages-tabs ::ng-deep .mat-mdc-tab .mdc-tab__text-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n}\n.job-details-container .customer-communication-section .messages-tabs ::ng-deep .mat-mdc-tab-body-content {\n  padding: 1.5rem 0;\n}\n.job-details-container .customer-communication-section .pro-bid-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border-left: 4px solid #667eea;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n  border-radius: 8px;\n}\n.job-details-container .customer-communication-section .pro-bid-card .bid-header-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n}\n.job-details-container .customer-communication-section .pro-bid-card .bid-header-info .bid-status-badge {\n  margin-left: 1rem;\n}\n.job-details-container .customer-communication-section .pro-bid-card .bid-details .bid-detail-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.job-details-container .customer-communication-section .pro-bid-card .bid-details .bid-detail-item:last-of-type {\n  border-bottom: none;\n}\n.job-details-container .customer-communication-section .pro-bid-card .bid-details .bid-detail-item .detail-label {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.95rem;\n  min-width: 120px;\n}\n.job-details-container .customer-communication-section .pro-bid-card .bid-details .bid-detail-item .detail-value {\n  color: #333;\n  font-size: 0.95rem;\n  text-align: right;\n  flex: 1;\n  margin-left: 1rem;\n}\n.job-details-container .customer-communication-section .pro-bid-card .bid-details .bid-detail-item .detail-value.bid-amount {\n  font-weight: 600;\n  color: #4caf50;\n  font-size: 1.1rem;\n}\n.job-details-container .customer-communication-section .pro-bid-card .bid-details .bid-detail-item .detail-value.bid-message {\n  text-align: left;\n  white-space: pre-wrap;\n  word-break: break-word;\n  line-height: 1.5;\n}\n.job-details-container .customer-communication-section .bids-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n}\n.job-details-container .customer-communication-section .bids-loading p {\n  margin: 0;\n  color: #666;\n}\n.job-details-container .customer-communication-section .no-bid {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  color: #999;\n}\n.job-details-container .customer-communication-section .no-bid mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n  margin-bottom: 0.5rem;\n}\n.job-details-container .customer-communication-section .no-bid p {\n  margin: 0;\n}\n.job-details-container .customer-communication-section .customer-details-card {\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7ff 0%,\n      #fff 100%);\n  border-left: 4px solid #667eea;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n  border-radius: 8px;\n}\n.job-details-container .customer-communication-section .customer-details-card .customer-header-info {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1.5rem;\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n}\n.job-details-container .customer-communication-section .customer-details-card .customer-header-info .customer-main-info {\n  flex: 1;\n}\n.job-details-container .customer-communication-section .customer-details-card .customer-header-info .customer-main-info .customer-full-name {\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.25rem 0;\n}\n.job-details-container .customer-communication-section .customer-details-card .customer-header-info .customer-main-info .customer-type {\n  font-size: 0.9rem;\n  color: #666;\n  margin: 0;\n}\n.job-details-container .customer-communication-section .customer-details-card .customer-details .customer-detail-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n  padding: 0.75rem 0;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.05);\n}\n.job-details-container .customer-communication-section .customer-details-card .customer-details .customer-detail-item:last-of-type {\n  border-bottom: none;\n}\n.job-details-container .customer-communication-section .customer-details-card .customer-details .customer-detail-item .detail-label {\n  font-weight: 600;\n  color: #555;\n  font-size: 0.95rem;\n  min-width: 100px;\n}\n.job-details-container .customer-communication-section .customer-details-card .customer-details .customer-detail-item .detail-value {\n  color: #333;\n  font-size: 0.95rem;\n  text-align: right;\n  flex: 1;\n  margin-left: 1rem;\n}\n.job-details-container .customer-communication-section .messages-container {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.job-details-container .customer-communication-section .messages-container .messages-loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 2rem;\n  gap: 1rem;\n}\n.job-details-container .customer-communication-section .messages-container .messages-loading p {\n  margin: 0;\n  color: #666;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list {\n  min-height: 200px;\n  max-height: 400px;\n  overflow-y: auto;\n  padding: 1rem;\n  background: #fafafa;\n  border-radius: 6px;\n  border: 1px solid #ddd;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .no-messages {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 200px;\n  color: #999;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .no-messages mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .no-messages p {\n  margin: 0.5rem 0 0 0;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .message-item {\n  padding: 0.75rem;\n  margin-bottom: 0.5rem;\n  border-radius: 6px;\n  background: white;\n  border-left: 3px solid #667eea;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .message-item.received {\n  border-left-color: #4caf50;\n  background: #f1f8e9;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .message-item .message-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .message-item .message-header .sender-type {\n  font-weight: 600;\n  padding: 0.25rem 0.5rem;\n  border-radius: 3px;\n  font-size: 0.8rem;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .message-item .message-header .sender-type.user {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .message-item .message-header .sender-type.pro {\n  background: #f3e5f5;\n  color: #7b1fa2;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .message-item .message-header .message-time {\n  color: #999;\n  font-size: 0.8rem;\n}\n.job-details-container .customer-communication-section .messages-container .messages-list .message-item .message-content {\n  margin: 0;\n  color: #333;\n  word-wrap: break-word;\n  white-space: pre-wrap;\n  line-height: 1.4;\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section {\n  padding-top: 1rem;\n  border-top: 1px solid #ddd;\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section .message-input-group {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section .message-input-group .message-input {\n  flex: 1;\n  padding: 0.75rem 1rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-family: "Roboto", sans-serif;\n  font-size: 0.95rem;\n  transition: all 0.3s ease;\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section .message-input-group .message-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section .message-input-group .message-input:disabled {\n  background-color: #f5f5f5;\n  color: #999;\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section .message-input-group button {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  padding: 0;\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section .message-input-group button[disabled] {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section .message-input-group button mat-spinner {\n  display: inline-block;\n}\n.job-details-container .customer-communication-section .messages-container .message-form-section .message-status {\n  font-size: 0.85rem;\n  color: #4caf50;\n  margin: 0.5rem 0 0 0;\n  font-weight: 500;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n@media (max-width: 768px) {\n  .job-details-container {\n    padding: 1rem;\n  }\n  .job-details-container .job-details-card mat-card-header {\n    padding: 1rem;\n  }\n  .job-details-container .job-details-card mat-card-content {\n    padding: 1rem;\n  }\n  .job-details-container .details-grid {\n    grid-template-columns: 1fr;\n  }\n  .job-details-container .phases-section {\n    padding: 1rem;\n  }\n  .job-details-container .phases-section .phases-header .phases-title-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.5rem;\n  }\n  .job-details-container .phases-section .phases-header .phase-progress {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n/*# sourceMappingURL=my-job-pro-details.css.map */\n'] }]
  }], () => [{ type: JobService }, { type: ActivatedRoute }, { type: Router }, { type: Auth }, { type: ChangeDetectorRef }, { type: MatDialog }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyJobProDetailsComponent, { className: "MyJobProDetailsComponent", filePath: "src/app/features/my-jobs-pro/my-job-pro-details.ts", lineNumber: 45 });
})();
var ConfirmCompletionDialogComponent = class _ConfirmCompletionDialogComponent {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  onCancel() {
    this.dialogRef.close(false);
  }
  onConfirm() {
    this.dialogRef.close(true);
  }
  static \u0275fac = function ConfirmCompletionDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmCompletionDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmCompletionDialogComponent, selectors: [["app-confirm-completion-dialog"]], decls: 21, vars: 1, consts: [[1, "confirmation-dialog"], [1, "dialog-header"], [1, "dialog-icon"], [1, "dialog-content"], [1, "dialog-note"], [1, "dialog-actions"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click"]], template: function ConfirmCompletionDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3, "check_circle_outline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "h2");
      \u0275\u0275text(5, "Mark Job as Completed?");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div", 3)(7, "p");
      \u0275\u0275text(8, "Are you sure you want to mark ");
      \u0275\u0275elementStart(9, "strong");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " as completed?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "p", 4);
      \u0275\u0275text(13, "This action cannot be undone.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 5)(15, "button", 6);
      \u0275\u0275listener("click", function ConfirmCompletionDialogComponent_Template_button_click_15_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(16, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function ConfirmCompletionDialogComponent_Template_button_click_17_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "check");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Mark as Completed ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.data.jobTitle);
    }
  }, dependencies: [CommonModule, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule], styles: ["\n\n.confirmation-dialog[_ngcontent-%COMP%] {\n  padding: 20px;\n}\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.dialog-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #4caf50;\n}\n.dialog-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n.dialog-content[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  line-height: 1.6;\n}\n.dialog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 8px 0;\n}\n.dialog-note[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #666;\n  font-style: italic;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 120px;\n}\n/*# sourceMappingURL=my-job-pro-details.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmCompletionDialogComponent, [{
    type: Component,
    args: [{ selector: "app-confirm-completion-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule], template: `
    <div class="confirmation-dialog">
      <div class="dialog-header">
        <mat-icon class="dialog-icon">check_circle_outline</mat-icon>
        <h2>Mark Job as Completed?</h2>
      </div>
      
      <div class="dialog-content">
        <p>Are you sure you want to mark <strong>{{ data.jobTitle }}</strong> as completed?</p>
        <p class="dialog-note">This action cannot be undone.</p>
      </div>
      
      <div class="dialog-actions">
        <button mat-button (click)="onCancel()">
          Cancel
        </button>
        <button mat-raised-button color="accent" (click)="onConfirm()">
          <mat-icon>check</mat-icon>
          Mark as Completed
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;a0f7433b878711df1bef212195582eaab9c6f7307ddeaf339603f13afb9644b7;C:/repos/yProHub/prohub-ui/src/app/features/my-jobs-pro/my-job-pro-details.ts */\n.confirmation-dialog {\n  padding: 20px;\n}\n.dialog-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 20px;\n}\n.dialog-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  color: #4caf50;\n}\n.dialog-header h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 500;\n}\n.dialog-content {\n  margin-bottom: 24px;\n  line-height: 1.6;\n}\n.dialog-content p {\n  margin: 8px 0;\n}\n.dialog-note {\n  font-size: 13px;\n  color: #666;\n  font-style: italic;\n}\n.dialog-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n}\nbutton {\n  min-width: 120px;\n}\n/*# sourceMappingURL=my-job-pro-details.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmCompletionDialogComponent, { className: "ConfirmCompletionDialogComponent", filePath: "src/app/features/my-jobs-pro/my-job-pro-details.ts", lineNumber: 580 });
})();
var PhaseSelectionDialogComponent = class _PhaseSelectionDialogComponent {
  dialogRef;
  data;
  selectedPhases = [];
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    this.selectedPhases = data.availablePhases.filter((p) => data.selectedPhaseIds.includes(p.id));
  }
  isPhaseSelected(phaseId) {
    return this.selectedPhases.some((p) => p.id === phaseId);
  }
  togglePhaseSelection(phase) {
    const index = this.selectedPhases.findIndex((p) => p.id === phase.id);
    if (index >= 0) {
      this.selectedPhases.splice(index, 1);
    } else if (this.selectedPhases.length < this.data.maxPhases) {
      this.selectedPhases.push(__spreadValues({}, phase));
    }
  }
  onCancel() {
    this.dialogRef.close();
  }
  onSave() {
    if (this.selectedPhases.length > 0) {
      this.dialogRef.close({ selectedPhases: this.selectedPhases });
    }
  }
  static \u0275fac = function PhaseSelectionDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PhaseSelectionDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PhaseSelectionDialogComponent, selectors: [["app-phase-selection-dialog"]], decls: 21, vars: 4, consts: [[1, "phase-selection-dialog"], ["mat-dialog-title", ""], [1, "selection-info"], [1, "phases-grid"], ["class", "phase-option", 4, "ngFor", "ngForOf"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "phase-option"], [3, "change", "checked", "disabled"], [1, "phase-info"]], template: function PhaseSelectionDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Select Project Phases (Maximum 10)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "div", 2)(5, "p");
      \u0275\u0275text(6, "Selected: ");
      \u0275\u0275elementStart(7, "strong");
      \u0275\u0275text(8);
      \u0275\u0275elementEnd();
      \u0275\u0275text(9, " phases");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "div", 3);
      \u0275\u0275template(11, PhaseSelectionDialogComponent_div_11_Template, 7, 4, "div", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(12, "mat-dialog-actions", 5)(13, "button", 6);
      \u0275\u0275listener("click", function PhaseSelectionDialogComponent_Template_button_click_13_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275elementStart(14, "mat-icon");
      \u0275\u0275text(15, "close");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Cancel ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "button", 7);
      \u0275\u0275listener("click", function PhaseSelectionDialogComponent_Template_button_click_17_listener() {
        return ctx.onSave();
      });
      \u0275\u0275elementStart(18, "mat-icon");
      \u0275\u0275text(19, "save");
      \u0275\u0275elementEnd();
      \u0275\u0275text(20, " Save Phases ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate2("", ctx.selectedPhases.length, " / ", ctx.data.maxPhases);
      \u0275\u0275advance(3);
      \u0275\u0275property("ngForOf", ctx.data.availablePhases);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", ctx.selectedPhases.length === 0);
    }
  }, dependencies: [CommonModule, NgForOf, MatButtonModule, MatButton, MatIconModule, MatIcon, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatCheckboxModule, MatCheckbox, MatFormFieldModule], styles: ["\n\n.phase-selection-dialog[_ngcontent-%COMP%] {\n  min-width: 500px;\n}\n.selection-info[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  padding: 12px;\n  background: #f5f5f5;\n  border-radius: 6px;\n}\n.selection-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.phases-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.phase-option[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  align-items: flex-start;\n}\n.phase-option[_ngcontent-%COMP%]:hover {\n  background: #f9f9f9;\n}\n.phase-option[_ngcontent-%COMP%]   mat-checkbox[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.phase-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.phase-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.phase-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #666;\n  line-height: 1.4;\n}\nmat-dialog-actions[_ngcontent-%COMP%] {\n  gap: 8px;\n}\n/*# sourceMappingURL=my-job-pro-details.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PhaseSelectionDialogComponent, [{
    type: Component,
    args: [{ selector: "app-phase-selection-dialog", standalone: true, imports: [CommonModule, MatButtonModule, MatIconModule, MatDialogModule, MatCheckboxModule, MatFormFieldModule], template: `
    <div class="phase-selection-dialog">
      <h2 mat-dialog-title>Select Project Phases (Maximum 10)</h2>
      
      <mat-dialog-content>
        <div class="selection-info">
          <p>Selected: <strong>{{ selectedPhases.length }} / {{ data.maxPhases }}</strong> phases</p>
        </div>

        <div class="phases-grid">
          <div *ngFor="let phase of data.availablePhases" class="phase-option">
            <mat-checkbox 
              [checked]="isPhaseSelected(phase.id)"
              [disabled]="!isPhaseSelected(phase.id) && selectedPhases.length >= data.maxPhases"
              (change)="togglePhaseSelection(phase)">
            </mat-checkbox>
            <div class="phase-info">
              <h4>{{ phase.title }}</h4>
              <p>{{ phase.description }}</p>
            </div>
          </div>
        </div>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">
          <mat-icon>close</mat-icon>
          Cancel
        </button>
        <button mat-raised-button color="accent" (click)="onSave()" [disabled]="selectedPhases.length === 0">
          <mat-icon>save</mat-icon>
          Save Phases
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;497c9d499ba632364f9612584e8de21c9e699fc9791f70e720a76deeaf0a2fec;C:/repos/yProHub/prohub-ui/src/app/features/my-jobs-pro/my-job-pro-details.ts */\n.phase-selection-dialog {\n  min-width: 500px;\n}\n.selection-info {\n  margin-bottom: 16px;\n  padding: 12px;\n  background: #f5f5f5;\n  border-radius: 6px;\n}\n.selection-info p {\n  margin: 0;\n  font-size: 14px;\n}\n.phases-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  max-height: 400px;\n  overflow-y: auto;\n}\n.phase-option {\n  display: flex;\n  gap: 12px;\n  padding: 12px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  align-items: flex-start;\n}\n.phase-option:hover {\n  background: #f9f9f9;\n}\n.phase-option mat-checkbox {\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.phase-info {\n  flex: 1;\n}\n.phase-info h4 {\n  margin: 0 0 4px 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.phase-info p {\n  margin: 0;\n  font-size: 12px;\n  color: #666;\n  line-height: 1.4;\n}\nmat-dialog-actions {\n  gap: 8px;\n}\n/*# sourceMappingURL=my-job-pro-details.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PhaseSelectionDialogComponent, { className: "PhaseSelectionDialogComponent", filePath: "src/app/features/my-jobs-pro/my-job-pro-details.ts", lineNumber: 700 });
})();
export {
  ConfirmCompletionDialogComponent,
  MyJobProDetailsComponent,
  PhaseSelectionDialogComponent
};
//# sourceMappingURL=chunk-IHSYTOJI.js.map

