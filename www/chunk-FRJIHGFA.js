import {
  MatCheckboxModule
} from "./chunk-U6SMCUEN.js";
import "./chunk-YI5HEQLO.js";
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
  MatExpansionModule
} from "./chunk-24Y7JLT5.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-DPWMA3BB.js";
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
  MatButtonModule
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
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NMZ5GJTW.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ANTPJ2CK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/my-jobs-pro/my-jobs-pro.ts
function MyJobsProComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon");
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
function MyJobsProComponent_div_13_Template(rf, ctx) {
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
function MyJobsProComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your assigned jobs...");
    \u0275\u0275elementEnd()();
  }
}
function MyJobsProComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-icon", 14);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No Assigned Jobs");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You don't have any jobs assigned to you yet. Check out available jobs and submit bids to get started!");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 15)(8, "mat-icon");
    \u0275\u0275text(9, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Browse Available Jobs ");
    \u0275\u0275elementEnd()();
  }
}
function MyJobsProComponent_div_16_mat_button_toggle_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-button-toggle", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r3 = ctx.$implicit;
    \u0275\u0275property("value", s_r3.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", s_r3.label, " ");
  }
}
function MyJobsProComponent_div_16_tr_25_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function MyJobsProComponent_div_16_tr_25_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const job_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.markAsCompleted(job_r5.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd()();
  }
}
function MyJobsProComponent_div_16_tr_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr", 26)(1, "td", 27)(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "td")(5, "span", 28);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "td")(8, "mat-chip-set")(9, "mat-chip", 29);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "td")(12, "div", 30);
    \u0275\u0275element(13, "mat-progress-bar", 31);
    \u0275\u0275elementStart(14, "span", 32);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "td", 23)(17, "button", 33);
    \u0275\u0275listener("click", function MyJobsProComponent_div_16_tr_25_Template_button_click_17_listener() {
      const job_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewJobDetails(job_r5.id));
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20, " View ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, MyJobsProComponent_div_16_tr_25_button_21_Template, 3, 0, "button", 34);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
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
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r0.getPhaseProgress(job_r5));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.getPhaseProgress(job_r5), "%");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", job_r5.status !== "Completed");
  }
}
function MyJobsProComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "span", 18);
    \u0275\u0275text(3, "Filter by Status:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-button-toggle-group", 19);
    \u0275\u0275listener("change", function MyJobsProComponent_div_16_Template_mat_button_toggle_group_change_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onStatusFilterChange($event.value));
    });
    \u0275\u0275template(5, MyJobsProComponent_div_16_mat_button_toggle_5_Template, 2, 2, "mat-button-toggle", 20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-card", 21)(7, "mat-card-header")(8, "h2");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-card-content")(11, "table", 22)(12, "thead")(13, "tr")(14, "th");
    \u0275\u0275text(15, "Job Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Progress");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "th", 23);
    \u0275\u0275text(23, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "tbody");
    \u0275\u0275template(25, MyJobsProComponent_div_16_tr_25_Template, 22, 9, "tr", 24);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("value", ctx_r0.selectedStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.availableStatuses);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Your Assigned Jobs (", ctx_r0.filteredJobs.length, ")");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r0.filteredJobs);
  }
}
var MyJobsProComponent = class _MyJobsProComponent {
  jobService;
  auth;
  cdr;
  router;
  assignedJobs = [];
  filteredJobs = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  selectedStatus = "All";
  availableStatuses = [
    { label: "All", value: "All" },
    { label: "In Progress", value: "In Progress" },
    { label: "Pending Approval", value: "Completion Submitted" },
    { label: "Completed", value: "Completed" },
    { label: "Cancelled", value: "Cancelled" }
  ];
  destroy$ = new Subject();
  constructor(jobService, auth, cdr, router) {
    this.jobService = jobService;
    this.auth = auth;
    this.cdr = cdr;
    this.router = router;
  }
  ngOnInit() {
    if (this.auth.isAuthenticated() && this.auth.getUserType() === "Pro") {
      this.loadAssignedJobs();
    } else {
      this.errorMessage = "Please login as a Professional to view your assigned jobs.";
      this.loading = false;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadAssignedJobs() {
    this.loading = true;
    this.errorMessage = "";
    this.jobService.getAssignedJobs().pipe(takeUntil(this.destroy$)).subscribe({
      next: (jobs) => {
        this.assignedJobs = jobs;
        this.applyStatusFilter();
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error loading assigned jobs:", error);
        let errorMsg = "Failed to load your assigned jobs.";
        if (error.status === 0) {
          errorMsg = "Connection error. Please ensure the API server is running on http://10.0.2.2:5101";
        } else if (error.status === 401) {
          errorMsg = "Unauthorized. Please login again.";
        } else if (error.status === 403) {
          errorMsg = "Access denied. You do not have permission to view these jobs.";
        } else if (error.status === 404) {
          errorMsg = "No assigned jobs found.";
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
  viewJobDetails(jobId) {
    this.router.navigate(["/my-jobs-pro", jobId]);
  }
  formatBudget(budget) {
    const budgetMap = {
      "under-100": "Under $100",
      "100-250": "$100 - $250",
      "250-500": "$250 - $500",
      "500-1000": "$500 - $1,000",
      "over-1000": "Over $1,000"
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
      case "in progress":
        return "warn";
      case "completed":
        return "primary";
      default:
        return "";
    }
  }
  markAsCompleted(jobId) {
    if (confirm("Mark this job as completed?")) {
      this.jobService.markJobCompleted(jobId).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.successMessage = "Job marked as completed!";
          const job = this.assignedJobs.find((j) => j.id === jobId);
          if (job) {
            job.status = "Completed";
            const phases = this.getJobPhases(job);
            if (phases && phases.length > 0) {
              const updatedPhases = phases.map((phase) => __spreadProps(__spreadValues({}, phase), {
                isCompleted: true,
                completedAt: (/* @__PURE__ */ new Date()).toISOString()
              }));
              this.jobService.updateJobPhases(jobId, updatedPhases).pipe(takeUntil(this.destroy$)).subscribe({
                next: () => {
                  job.jobPhases = updatedPhases;
                  this.cdr.markForCheck();
                },
                error: (error) => {
                  console.error("Error updating job phases:", error);
                }
              });
            }
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
  }
  // Get phase progress percentage
  getPhaseProgress(job) {
    const phases = this.getJobPhases(job);
    if (phases.length === 0)
      return 0;
    const completed = phases.filter((p) => p.isCompleted).length;
    return Math.round(completed / phases.length * 100);
  }
  // Parse phases from job
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
  applyStatusFilter() {
    if (this.selectedStatus === "All") {
      this.filteredJobs = this.assignedJobs;
    } else {
      this.filteredJobs = this.assignedJobs.filter((job) => job.status === this.selectedStatus);
    }
    this.cdr.markForCheck();
  }
  onStatusFilterChange(status) {
    this.selectedStatus = status;
    this.applyStatusFilter();
  }
  static \u0275fac = function MyJobsProComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyJobsProComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyJobsProComponent, selectors: [["app-my-jobs-pro"]], decls: 17, vars: 5, consts: [[1, "my-jobs-pro-container"], [1, "page-header"], [1, "header-row"], [1, "subtitle"], ["routerLink", "/my-clients", 1, "clients-link"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "jobs-list-container", 4, "ngIf"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "loading-container"], [1, "empty-state"], [1, "empty-icon"], ["mat-raised-button", "", "color", "primary", "routerLink", "/available-jobs"], [1, "jobs-list-container"], [1, "status-filter"], [1, "filter-label"], [1, "status-toggle-group", 3, "change", "value"], [3, "value", 4, "ngFor", "ngForOf"], [1, "jobs-list-card"], [1, "jobs-table"], [1, "actions"], ["class", "job-row", 3, "completed", 4, "ngFor", "ngForOf"], [3, "value"], [1, "job-row"], [1, "title-cell"], [1, "category-badge"], ["selected", "", "size", "small", 3, "color"], [1, "progress-cell"], ["mode", "determinate", "color", "accent", 3, "value"], [1, "progress-percent"], ["mat-raised-button", "", "matTooltip", "View Details", 1, "view-button", 3, "click"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Mark Completed", 3, "click", 4, "ngIf"], ["mat-raised-button", "", "color", "accent", "matTooltip", "Mark Completed", 3, "click"]], template: function MyJobsProComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5, "My Assigned Jobs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "View and manage jobs assigned to you");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "a", 4)(9, "mat-icon");
      \u0275\u0275text(10, "group");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " My Clients ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(12, MyJobsProComponent_div_12_Template, 5, 1, "div", 5)(13, MyJobsProComponent_div_13_Template, 5, 1, "div", 6)(14, MyJobsProComponent_div_14_Template, 4, 0, "div", 7)(15, MyJobsProComponent_div_15_Template, 11, 0, "div", 8)(16, MyJobsProComponent_div_16_Template, 26, 4, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.assignedJobs.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.assignedJobs.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    RouterModule,
    RouterLink,
    MatCardModule,
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatExpansionModule,
    MatCheckboxModule,
    MatProgressBarModule,
    MatProgressBar,
    MatTooltipModule,
    MatTooltip,
    MatButtonToggleModule,
    MatButtonToggleGroup,
    MatButtonToggle
  ], styles: ['@charset "UTF-8";\n\n\n\n.my-jobs-pro-container[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  width: 90%;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: #1a1a1a;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n  margin: 0;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .alert[_ngcontent-%COMP%] {\n  padding: 1.2rem 1.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-weight: 500;\n  animation: slideDown 0.3s ease;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .alert.alert-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #28a745;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .alert.alert-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc3545;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  color: #666;\n  font-size: 1.1rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #666;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  color: #ccc;\n  margin: 0 auto 1rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  color: #333;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-bottom: 2rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem 0;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .filter-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.95rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n  border: 2px solid #ddd;\n  color: #666;\n  background: white;\n  transition: all 0.3s ease;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]:first-child {\n  border-radius: 6px 0 0 6px;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 6px 6px 0;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]:not(:last-child) {\n  border-right: none;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle.mat-mdc-button-toggle-checked[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-color: #667eea;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .status-filter[_ngcontent-%COMP%]   .status-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%]:hover:not(.mat-mdc-button-toggle-checked) {\n  background-color: #f5f5f5;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(102, 126, 234, 0.1);\n  overflow: hidden;\n  background: white;\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(102, 126, 234, 0.2);\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 2rem;\n  border-bottom: 2px solid #f0f0f0;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]::before {\n  content: "\\1f4cb";\n  font-size: 1.8rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  padding: 0;\n  overflow-x: auto;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      to bottom,\n      #f8f9fa,\n      #f0f0f0);\n  position: sticky;\n  top: 0;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  text-align: left;\n  font-weight: 700;\n  color: #333;\n  border-bottom: 2px solid #ddd;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  background-color: #f8f9fa;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.actions[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 140px;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]:hover {\n  background-color: #f8f9ff;\n  box-shadow: inset 0 0 0 1px rgba(102, 126, 234, 0.1254901961);\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row.completed[_ngcontent-%COMP%] {\n  opacity: 0.65;\n  background-color: #f5f5f5;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row.completed[_ngcontent-%COMP%]   .title-cell[_ngcontent-%COMP%] {\n  color: #999;\n  text-decoration: line-through;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  vertical-align: middle;\n  color: #666;\n  font-size: 0.95rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.title-cell[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1a1a1a;\n  font-size: 1rem;\n  min-width: 250px;\n  max-width: 350px;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  min-width: 200px;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  border-radius: 5px;\n  min-width: 50px;\n  background-color: #f7eeee;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%]     .mat-mdc-progress-bar-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%) !important;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%]   .progress-percent[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #667eea;\n  min-width: 40px;\n  text-align: right;\n  margin-left: 1rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 160px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  white-space: nowrap;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button.view-button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.job-row[_ngcontent-%COMP%]   td.actions[_ngcontent-%COMP%]   button.view-button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);\n}\n@media (max-width: 1024px) {\n  .my-jobs-pro-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .my-jobs-pro-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    overflow-x: auto;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%] {\n    font-size: 0.8rem;\n    min-width: 800px;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n    font-size: 0.75rem;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th.actions[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    padding: 0.5rem;\n  }\n  .my-jobs-pro-container[_ngcontent-%COMP%]   .jobs-list-container[_ngcontent-%COMP%]   .jobs-list-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .jobs-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]   .progress-cell[_ngcontent-%COMP%] {\n    min-width: 120px;\n  }\n  .loading-container[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 4rem 2rem;\n  }\n  .loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    color: #666;\n    font-size: 1.1rem;\n  }\n  .empty-state[_ngcontent-%COMP%] {\n    text-align: center;\n    padding: 4rem 2rem;\n    color: #666;\n  }\n  .empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n    font-size: 4rem;\n    width: 4rem;\n    height: 4rem;\n    color: #ccc;\n    margin: 0 auto 1rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    margin: 1rem 0;\n    color: #333;\n  }\n  .empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    margin-bottom: 2rem;\n  }\n  .empty-state[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));\n    gap: 2rem;\n    margin-bottom: 2rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n    border-radius: 8px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n    border-bottom: 1px solid #eee;\n    margin: 0;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .job-title[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    font-weight: 600;\n    margin: 0 0 0.5rem 0;\n    color: #333;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   mat-chip-set[_ngcontent-%COMP%]   mat-chip[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    background-color: #f5f5f5;\n    padding: 0.5rem 1rem;\n    border-radius: 4px;\n    white-space: nowrap;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1.2rem;\n    width: auto;\n    height: auto;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header-content[_ngcontent-%COMP%]   .job-category[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    color: #666;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    margin: 0 0 0.5rem 0;\n    color: #333;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .job-section[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    margin: 0;\n    color: #666;\n    line-height: 1.6;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%] {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n    margin: 1.5rem 0;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #666;\n    margin-top: 0.25rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: #999;\n    text-transform: uppercase;\n    font-weight: 600;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .details-grid[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n    color: #333;\n    margin: 0.25rem 0 0;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%] {\n    background-color: #f9f9f9;\n    padding: 1rem;\n    border-radius: 6px;\n    margin-top: 1.5rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    margin: 0 0 0.75rem 0;\n    color: #333;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #666;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%]   .customer-name[_ngcontent-%COMP%] {\n    font-weight: 600;\n    margin: 0;\n    color: #333;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .customer-section[_ngcontent-%COMP%]   .customer-info[_ngcontent-%COMP%]   .customer-email[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    color: #666;\n    margin: 0.25rem 0 0;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #666;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: #2196f3;\n    text-decoration: none;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .attachments[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    text-decoration: underline;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.5rem;\n    padding: 1rem 1.5rem;\n    border-top: 1px solid #eee;\n  }\n  .jobs-grid[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .phases-section[_ngcontent-%COMP%] {\n    margin-top: 2rem;\n    padding: 1.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #f5f7fa 0%,\n        #c3cfe2 100%);\n    border-radius: 12px;\n    border-left: 4px solid #667eea;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%] {\n    margin-bottom: 1.5rem;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 1.1rem;\n    font-weight: 600;\n    color: #333;\n    margin: 0;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    color: #667eea;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%]   .unsaved-indicator[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 0.4rem 0.8rem;\n    background-color: #fff3cd;\n    border: 1px solid #ffeaa7;\n    border-radius: 6px;\n    font-size: 0.85rem;\n    color: #856404;\n    font-weight: 500;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phases-title-row[_ngcontent-%COMP%]   .unsaved-indicator[_ngcontent-%COMP%]   .warning-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n    color: #ff9800;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%]   mat-progress-bar[_ngcontent-%COMP%] {\n    flex: 1;\n    height: 8px;\n    border-radius: 4px;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    font-weight: 600;\n    color: #667eea;\n    min-width: 80px;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 1rem;\n    padding: 1rem;\n    background: white;\n    border-radius: 8px;\n    border: 2px solid transparent;\n    transition: all 0.3s ease;\n    cursor: pointer;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]:hover {\n    border-color: #667eea;\n    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item.completed[_ngcontent-%COMP%] {\n    background: #f0f4ff;\n    border-color: #4caf50;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item.completed[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    color: #4caf50;\n    text-decoration: line-through;\n    opacity: 0.7;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-checkbox[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    padding-top: 4px;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n    font-size: 1rem;\n    font-weight: 600;\n    color: #333;\n    margin: 0 0 0.5rem 0;\n    transition: all 0.3s ease;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%]   .phase-description[_ngcontent-%COMP%] {\n    font-size: 0.9rem;\n    color: #666;\n    margin: 0 0 0.5rem 0;\n    line-height: 1.4;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%]   .phase-completed-date[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    color: #4caf50;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-content[_ngcontent-%COMP%]   .phase-completed-date[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%] {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 1.5rem;\n    padding-top: 1rem;\n    border-top: 1px solid rgba(102, 126, 234, 0.2);\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 0.6rem 1.5rem;\n    font-weight: 500;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon.spinner[_ngcontent-%COMP%] {\n    animation: spin 2s linear infinite;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n    opacity: 0.6;\n  }\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  @keyframes slideInRight {\n    from {\n      opacity: 0;\n      transform: translateX(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  .page-content[_ngcontent-%COMP%] {\n    animation: fadeIn 0.5s ease-out;\n  }\n  .jobs-list-container[_ngcontent-%COMP%] {\n    animation: slideInRight 0.5s ease-out;\n  }\n}\n@media (max-width: 768px) and (max-width: 768px) {\n  .jobs-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-header[_ngcontent-%COMP%]   .phase-progress[_ngcontent-%COMP%]   .progress-text[_ngcontent-%COMP%] {\n    min-width: auto;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .phases-section[_ngcontent-%COMP%]   .phases-list[_ngcontent-%COMP%]   .phase-item[_ngcontent-%COMP%]   .phase-checkbox[_ngcontent-%COMP%] {\n    align-items: center;\n  }\n}\n.header-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.clients-link[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #e8eeff;\n  color: #667eea;\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.clients-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.clients-link[_ngcontent-%COMP%]:hover {\n  background: #d5deff;\n}\n/*# sourceMappingURL=my-jobs-pro.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyJobsProComponent, [{
    type: Component,
    args: [{ selector: "app-my-jobs-pro", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatChipsModule,
      MatExpansionModule,
      MatCheckboxModule,
      MatProgressBarModule,
      MatTooltipModule,
      MatButtonToggleModule
    ], template: `<div class="my-jobs-pro-container">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <div class="header-row">\r
      <div>\r
        <h1>My Assigned Jobs</h1>\r
        <p class="subtitle">View and manage jobs assigned to you</p>\r
      </div>\r
      <a routerLink="/my-clients" class="clients-link">\r
        <mat-icon>group</mat-icon>\r
        My Clients\r
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
  <!-- Loading State -->\r
  <div *ngIf="loading" class="loading-container">\r
    <mat-spinner></mat-spinner>\r
    <p>Loading your assigned jobs...</p>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading && assignedJobs.length === 0" class="empty-state">\r
    <mat-icon class="empty-icon">assignment</mat-icon>\r
    <h2>No Assigned Jobs</h2>\r
    <p>You don't have any jobs assigned to you yet. Check out available jobs and submit bids to get started!</p>\r
    <button mat-raised-button color="primary" routerLink="/available-jobs">\r
      <mat-icon>search</mat-icon>\r
      Browse Available Jobs\r
    </button>\r
  </div>\r
\r
  <!-- Jobs List -->\r
  <div *ngIf="!loading && assignedJobs.length > 0" class="jobs-list-container">\r
    <!-- Status Filter -->\r
    <div class="status-filter">\r
      <span class="filter-label">Filter by Status:</span>\r
      <mat-button-toggle-group \r
        [value]="selectedStatus" \r
        (change)="onStatusFilterChange($event.value)"\r
        class="status-toggle-group">\r
        <mat-button-toggle *ngFor="let s of availableStatuses" [value]="s.value">\r
          {{ s.label }}\r
        </mat-button-toggle>\r
      </mat-button-toggle-group>\r
    </div>\r
\r
    <mat-card class="jobs-list-card">\r
      <mat-card-header>\r
        <h2>Your Assigned Jobs ({{ filteredJobs.length }})</h2>\r
      </mat-card-header>\r
      <mat-card-content>\r
        <table class="jobs-table">\r
          <thead>\r
            <tr>\r
              <th>Job Title</th>\r
              <th>Category</th>\r
              <th>Status</th>\r
              <!-- <th>Budget</th> -->\r
              <!-- <th>Timeline</th> -->\r
              <th>Progress</th>\r
              <th class="actions">Actions</th>\r
            </tr>\r
          </thead>\r
          <tbody>\r
            <tr *ngFor="let job of filteredJobs" class="job-row" [class.completed]="job.status === 'Completed'">\r
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
              <!-- td>\r
                {{ formatTimeline(job.timeline) }}\r
              </td> -->\r
              <td>\r
                <div class="progress-cell">\r
                  <mat-progress-bar \r
                    mode="determinate" \r
                    [value]="getPhaseProgress(job)"\r
                    color="accent">\r
                  </mat-progress-bar>\r
                  <span class="progress-percent">{{ getPhaseProgress(job) }}%</span>\r
                </div>\r
              </td>\r
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
                  mat-raised-button \r
                  color="accent"\r
                  matTooltip="Mark Completed"\r
                  *ngIf="job.status !== 'Completed'"\r
                  (click)="markAsCompleted(job.id)">\r
                  <mat-icon>check_circle</mat-icon>\r
                </button>\r
              </td>\r
            </tr>\r
          </tbody>\r
        </table>\r
      </mat-card-content>\r
    </mat-card>\r
  </div>\r
</div>\r
\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/my-jobs-pro/my-jobs-pro.scss */\n.my-jobs-pro-container {\n  padding: 1.5rem;\n  width: 90%;\n  max-width: 100%;\n  margin: 0 auto;\n}\n.my-jobs-pro-container .page-header {\n  margin-bottom: 2rem;\n}\n.my-jobs-pro-container .page-header h1 {\n  font-size: 2.5rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem 0;\n  color: #1a1a1a;\n}\n.my-jobs-pro-container .page-header .subtitle {\n  color: #666;\n  font-size: 1.1rem;\n  margin: 0;\n}\n.my-jobs-pro-container .alert {\n  padding: 1.2rem 1.5rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-weight: 500;\n  animation: slideDown 0.3s ease;\n}\n.my-jobs-pro-container .alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.my-jobs-pro-container .alert.alert-success mat-icon {\n  color: #28a745;\n}\n.my-jobs-pro-container .alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.my-jobs-pro-container .alert.alert-error mat-icon {\n  color: #dc3545;\n}\n.my-jobs-pro-container .loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 4rem 2rem;\n}\n.my-jobs-pro-container .loading-container p {\n  margin-top: 1rem;\n  color: #666;\n  font-size: 1.1rem;\n}\n.my-jobs-pro-container .empty-state {\n  text-align: center;\n  padding: 4rem 2rem;\n  color: #666;\n}\n.my-jobs-pro-container .empty-state .empty-icon {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  color: #ccc;\n  margin: 0 auto 1rem;\n}\n.my-jobs-pro-container .empty-state h2 {\n  font-size: 1.5rem;\n  margin: 1rem 0;\n  color: #333;\n}\n.my-jobs-pro-container .empty-state p {\n  font-size: 1rem;\n  margin-bottom: 2rem;\n}\n.my-jobs-pro-container .empty-state button {\n  margin-top: 1rem;\n}\n.my-jobs-pro-container .status-filter {\n  display: flex;\n  align-items: center;\n  gap: 1.5rem;\n  padding: 1.5rem 0;\n  margin-bottom: 1.5rem;\n  flex-wrap: wrap;\n}\n.my-jobs-pro-container .status-filter .filter-label {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.95rem;\n}\n.my-jobs-pro-container .status-filter .status-toggle-group {\n  display: flex;\n  gap: 0;\n}\n.my-jobs-pro-container .status-filter .status-toggle-group mat-button-toggle {\n  border: 2px solid #ddd;\n  color: #666;\n  background: white;\n  transition: all 0.3s ease;\n}\n.my-jobs-pro-container .status-filter .status-toggle-group mat-button-toggle:first-child {\n  border-radius: 6px 0 0 6px;\n}\n.my-jobs-pro-container .status-filter .status-toggle-group mat-button-toggle:last-child {\n  border-radius: 0 6px 6px 0;\n}\n.my-jobs-pro-container .status-filter .status-toggle-group mat-button-toggle:not(:last-child) {\n  border-right: none;\n}\n.my-jobs-pro-container .status-filter .status-toggle-group mat-button-toggle.mat-mdc-button-toggle-checked {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border-color: #667eea;\n  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n.my-jobs-pro-container .status-filter .status-toggle-group mat-button-toggle:hover:not(.mat-mdc-button-toggle-checked) {\n  background-color: #f5f5f5;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card {\n  border-radius: 12px;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(102, 126, 234, 0.1);\n  overflow: hidden;\n  background: white;\n  transition: box-shadow 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card:hover {\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(102, 126, 234, 0.2);\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-header {\n  padding: 2rem;\n  border-bottom: 2px solid #f0f0f0;\n  margin: 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-header h2 {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: white;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-header h2::before {\n  content: "\\1f4cb";\n  font-size: 1.8rem;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content {\n  padding: 0;\n  overflow-x: auto;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table {\n  width: 100%;\n  border-collapse: collapse;\n  background: white;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead {\n  background:\n    linear-gradient(\n      to bottom,\n      #f8f9fa,\n      #f0f0f0);\n  position: sticky;\n  top: 0;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead th {\n  padding: 1.5rem;\n  text-align: left;\n  font-weight: 700;\n  color: #333;\n  border-bottom: 2px solid #ddd;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  background-color: #f8f9fa;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead th.actions {\n  text-align: center;\n  width: 140px;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row {\n  border-bottom: 1px solid #f0f0f0;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row:hover {\n  background-color: #f8f9ff;\n  box-shadow: inset 0 0 0 1px rgba(102, 126, 234, 0.1254901961);\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row.completed {\n  opacity: 0.65;\n  background-color: #f5f5f5;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row.completed .title-cell {\n  color: #999;\n  text-decoration: line-through;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td {\n  padding: 1.5rem;\n  vertical-align: middle;\n  color: #666;\n  font-size: 0.95rem;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.title-cell {\n  font-weight: 600;\n  color: #1a1a1a;\n  font-size: 1rem;\n  min-width: 250px;\n  max-width: 350px;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td .category-badge {\n  display: inline-block;\n  padding: 0.5rem 1rem;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.0823529412),\n      rgba(118, 75, 162, 0.0823529412));\n  border: 1px solid rgba(102, 126, 234, 0.1882352941);\n  border-radius: 20px;\n  font-size: 0.85rem;\n  color: #667eea;\n  font-weight: 600;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td .progress-cell {\n  display: flex;\n  align-items: center;\n  gap: 0.8rem;\n  min-width: 200px;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td .progress-cell mat-progress-bar {\n  flex: 1;\n  height: 8px;\n  border-radius: 5px;\n  min-width: 50px;\n  background-color: #f7eeee;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td .progress-cell ::ng-deep .mat-mdc-progress-bar-fill {\n  background:\n    linear-gradient(\n      90deg,\n      #667eea 0%,\n      #764ba2 100%) !important;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td .progress-cell .progress-percent {\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #667eea;\n  min-width: 40px;\n  text-align: right;\n  margin-left: 1rem;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions {\n  text-align: center;\n  min-width: 160px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button {\n  margin: 0;\n  padding: 0.5rem 1rem;\n  font-weight: 600;\n  border-radius: 6px;\n  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);\n  white-space: nowrap;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button.view-button {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  border: none;\n}\n.my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody tr.job-row td.actions button.view-button:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 16px rgba(102, 126, 234, 0.3);\n}\n@media (max-width: 1024px) {\n  .my-jobs-pro-container {\n    padding: 1rem;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-table {\n    font-size: 0.85rem;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-table thead th {\n    padding: 0.75rem;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-table tbody td {\n    padding: 0.75rem;\n  }\n}\n@media (max-width: 768px) {\n  .my-jobs-pro-container {\n    padding: 1rem;\n  }\n  .my-jobs-pro-container .page-header h1 {\n    font-size: 1.5rem;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-header {\n    padding: 1rem;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content {\n    overflow-x: auto;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table {\n    font-size: 0.8rem;\n    min-width: 800px;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead th {\n    padding: 0.5rem;\n    font-size: 0.75rem;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table thead th.actions {\n    width: 100px;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody td {\n    padding: 0.5rem;\n  }\n  .my-jobs-pro-container .jobs-list-container .jobs-list-card mat-card-content .jobs-table tbody td .progress-cell {\n    min-width: 120px;\n  }\n  .loading-container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    padding: 4rem 2rem;\n  }\n  .loading-container p {\n    margin-top: 1rem;\n    color: #666;\n    font-size: 1.1rem;\n  }\n  .empty-state {\n    text-align: center;\n    padding: 4rem 2rem;\n    color: #666;\n  }\n  .empty-state .empty-icon {\n    font-size: 4rem;\n    width: 4rem;\n    height: 4rem;\n    color: #ccc;\n    margin: 0 auto 1rem;\n  }\n  .empty-state h2 {\n    font-size: 1.5rem;\n    margin: 1rem 0;\n    color: #333;\n  }\n  .empty-state p {\n    font-size: 1rem;\n    margin-bottom: 2rem;\n  }\n  .empty-state button {\n    margin-top: 1rem;\n  }\n  .jobs-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));\n    gap: 2rem;\n    margin-bottom: 2rem;\n  }\n  .jobs-grid .job-card {\n    border-radius: 8px;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n    transition: all 0.3s ease;\n  }\n  .jobs-grid .job-card:hover {\n    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  }\n  .jobs-grid .job-card mat-card-header {\n    padding: 1.5rem;\n    border-bottom: 1px solid #eee;\n    margin: 0;\n  }\n  .jobs-grid .job-card .job-header-content {\n    display: flex;\n    justify-content: space-between;\n    align-items: flex-start;\n    gap: 1rem;\n  }\n  .jobs-grid .job-card .job-header-content .job-title-section {\n    flex: 1;\n  }\n  .jobs-grid .job-card .job-header-content .job-title-section .job-title {\n    font-size: 1.3rem;\n    font-weight: 600;\n    margin: 0 0 0.5rem 0;\n    color: #333;\n  }\n  .jobs-grid .job-card .job-header-content .job-title-section mat-chip-set {\n    margin-top: 0.5rem;\n  }\n  .jobs-grid .job-card .job-header-content .job-title-section mat-chip-set mat-chip {\n    font-size: 0.85rem;\n  }\n  .jobs-grid .job-card .job-header-content .job-category {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n    background-color: #f5f5f5;\n    padding: 0.5rem 1rem;\n    border-radius: 4px;\n    white-space: nowrap;\n  }\n  .jobs-grid .job-card .job-header-content .job-category mat-icon {\n    font-size: 1.2rem;\n    width: auto;\n    height: auto;\n  }\n  .jobs-grid .job-card .job-header-content .job-category span {\n    font-size: 0.9rem;\n    color: #666;\n  }\n  .jobs-grid .job-card mat-card-content {\n    padding: 1.5rem;\n  }\n  .jobs-grid .job-card mat-card-content .job-section {\n    margin-bottom: 1.5rem;\n  }\n  .jobs-grid .job-card mat-card-content .job-section h3 {\n    font-size: 1rem;\n    font-weight: 600;\n    margin: 0 0 0.5rem 0;\n    color: #333;\n  }\n  .jobs-grid .job-card mat-card-content .job-section p {\n    margin: 0;\n    color: #666;\n    line-height: 1.6;\n  }\n  .jobs-grid .job-card mat-card-content .description {\n    display: -webkit-box;\n    -webkit-line-clamp: 3;\n    -webkit-box-orient: vertical;\n    overflow: hidden;\n  }\n  .jobs-grid .job-card mat-card-content .details-grid {\n    display: grid;\n    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n    gap: 1rem;\n    margin: 1.5rem 0;\n  }\n  .jobs-grid .job-card mat-card-content .details-grid .detail-item {\n    display: flex;\n    align-items: flex-start;\n    gap: 0.75rem;\n  }\n  .jobs-grid .job-card mat-card-content .details-grid .detail-item mat-icon {\n    color: #666;\n    margin-top: 0.25rem;\n  }\n  .jobs-grid .job-card mat-card-content .details-grid .detail-item > div {\n    flex: 1;\n  }\n  .jobs-grid .job-card mat-card-content .details-grid .detail-item .label {\n    font-size: 0.85rem;\n    color: #999;\n    text-transform: uppercase;\n    font-weight: 600;\n  }\n  .jobs-grid .job-card mat-card-content .details-grid .detail-item .value {\n    font-size: 0.95rem;\n    color: #333;\n    margin: 0.25rem 0 0;\n  }\n  .jobs-grid .job-card mat-card-content .customer-section {\n    background-color: #f9f9f9;\n    padding: 1rem;\n    border-radius: 6px;\n    margin-top: 1.5rem;\n  }\n  .jobs-grid .job-card mat-card-content .customer-section h3 {\n    font-size: 1rem;\n    font-weight: 600;\n    margin: 0 0 0.75rem 0;\n    color: #333;\n  }\n  .jobs-grid .job-card mat-card-content .customer-section .customer-info {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n  }\n  .jobs-grid .job-card mat-card-content .customer-section .customer-info mat-icon {\n    color: #666;\n  }\n  .jobs-grid .job-card mat-card-content .customer-section .customer-info > div {\n    flex: 1;\n  }\n  .jobs-grid .job-card mat-card-content .customer-section .customer-info .customer-name {\n    font-weight: 600;\n    margin: 0;\n    color: #333;\n  }\n  .jobs-grid .job-card mat-card-content .customer-section .customer-info .customer-email {\n    font-size: 0.9rem;\n    color: #666;\n    margin: 0.25rem 0 0;\n  }\n  .jobs-grid .job-card mat-card-content .attachments {\n    display: flex;\n    align-items: center;\n    gap: 0.5rem;\n  }\n  .jobs-grid .job-card mat-card-content .attachments mat-icon {\n    color: #666;\n  }\n  .jobs-grid .job-card mat-card-content .attachments a {\n    color: #2196f3;\n    text-decoration: none;\n  }\n  .jobs-grid .job-card mat-card-content .attachments a:hover {\n    text-decoration: underline;\n  }\n  .jobs-grid .job-card mat-card-actions {\n    display: flex;\n    gap: 0.5rem;\n    padding: 1rem 1.5rem;\n    border-top: 1px solid #eee;\n  }\n  .jobs-grid .job-card mat-card-actions button {\n    flex: 1;\n    justify-content: center;\n  }\n  .phases-section {\n    margin-top: 2rem;\n    padding: 1.5rem;\n    background:\n      linear-gradient(\n        135deg,\n        #f5f7fa 0%,\n        #c3cfe2 100%);\n    border-radius: 12px;\n    border-left: 4px solid #667eea;\n  }\n  .phases-section .phases-header {\n    margin-bottom: 1.5rem;\n  }\n  .phases-section .phases-header .phases-title-row {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    margin-bottom: 1rem;\n  }\n  .phases-section .phases-header .phases-title-row h3 {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    font-size: 1.1rem;\n    font-weight: 600;\n    color: #333;\n    margin: 0;\n  }\n  .phases-section .phases-header .phases-title-row h3 mat-icon {\n    color: #667eea;\n  }\n  .phases-section .phases-header .phases-title-row .unsaved-indicator {\n    display: flex;\n    align-items: center;\n    gap: 6px;\n    padding: 0.4rem 0.8rem;\n    background-color: #fff3cd;\n    border: 1px solid #ffeaa7;\n    border-radius: 6px;\n    font-size: 0.85rem;\n    color: #856404;\n    font-weight: 500;\n  }\n  .phases-section .phases-header .phases-title-row .unsaved-indicator .warning-icon {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n    color: #ff9800;\n  }\n  .phases-section .phases-header .phase-progress {\n    display: flex;\n    align-items: center;\n    gap: 1rem;\n  }\n  .phases-section .phases-header .phase-progress mat-progress-bar {\n    flex: 1;\n    height: 8px;\n    border-radius: 4px;\n  }\n  .phases-section .phases-header .phase-progress .progress-text {\n    font-size: 0.9rem;\n    font-weight: 600;\n    color: #667eea;\n    min-width: 80px;\n  }\n  .phases-section .phases-list {\n    display: flex;\n    flex-direction: column;\n    gap: 12px;\n  }\n  .phases-section .phases-list .phase-item {\n    display: flex;\n    gap: 1rem;\n    padding: 1rem;\n    background: white;\n    border-radius: 8px;\n    border: 2px solid transparent;\n    transition: all 0.3s ease;\n    cursor: pointer;\n  }\n  .phases-section .phases-list .phase-item:hover {\n    border-color: #667eea;\n    box-shadow: 0 2px 8px rgba(102, 126, 234, 0.1);\n  }\n  .phases-section .phases-list .phase-item.completed {\n    background: #f0f4ff;\n    border-color: #4caf50;\n  }\n  .phases-section .phases-list .phase-item.completed h4 {\n    color: #4caf50;\n    text-decoration: line-through;\n    opacity: 0.7;\n  }\n  .phases-section .phases-list .phase-item .phase-checkbox {\n    display: flex;\n    align-items: flex-start;\n    padding-top: 4px;\n  }\n  .phases-section .phases-list .phase-item .phase-content {\n    flex: 1;\n  }\n  .phases-section .phases-list .phase-item .phase-content h4 {\n    font-size: 1rem;\n    font-weight: 600;\n    color: #333;\n    margin: 0 0 0.5rem 0;\n    transition: all 0.3s ease;\n  }\n  .phases-section .phases-list .phase-item .phase-content .phase-description {\n    font-size: 0.9rem;\n    color: #666;\n    margin: 0 0 0.5rem 0;\n    line-height: 1.4;\n  }\n  .phases-section .phases-list .phase-item .phase-content .phase-completed-date {\n    font-size: 0.85rem;\n    color: #4caf50;\n    margin: 0;\n    display: flex;\n    align-items: center;\n    gap: 4px;\n  }\n  .phases-section .phases-list .phase-item .phase-content .phase-completed-date mat-icon {\n    font-size: 16px;\n    width: 16px;\n    height: 16px;\n  }\n  .phases-section .phases-footer {\n    display: flex;\n    justify-content: flex-end;\n    margin-top: 1.5rem;\n    padding-top: 1rem;\n    border-top: 1px solid rgba(102, 126, 234, 0.2);\n  }\n  .phases-section .phases-footer button {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    padding: 0.6rem 1.5rem;\n    font-weight: 500;\n  }\n  .phases-section .phases-footer button mat-icon {\n    font-size: 18px;\n    width: 18px;\n    height: 18px;\n  }\n  .phases-section .phases-footer button mat-icon.spinner {\n    animation: spin 2s linear infinite;\n  }\n  .phases-section .phases-footer button:disabled {\n    opacity: 0.6;\n  }\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes fadeIn {\n    from {\n      opacity: 0;\n      transform: translateY(10px);\n    }\n    to {\n      opacity: 1;\n      transform: translateY(0);\n    }\n  }\n  @keyframes slideInRight {\n    from {\n      opacity: 0;\n      transform: translateX(-20px);\n    }\n    to {\n      opacity: 1;\n      transform: translateX(0);\n    }\n  }\n  .page-content {\n    animation: fadeIn 0.5s ease-out;\n  }\n  .jobs-list-container {\n    animation: slideInRight 0.5s ease-out;\n  }\n}\n@media (max-width: 768px) and (max-width: 768px) {\n  .jobs-grid {\n    grid-template-columns: 1fr;\n  }\n  .page-header h1 {\n    font-size: 1.5rem;\n  }\n  .phases-section .phases-header .phase-progress {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .phases-section .phases-header .phase-progress .progress-text {\n    min-width: auto;\n  }\n  .phases-section .phases-list .phase-item {\n    flex-direction: column;\n  }\n  .phases-section .phases-list .phase-item .phase-checkbox {\n    align-items: center;\n  }\n}\n.header-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n.clients-link {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  border-radius: 8px;\n  background: #e8eeff;\n  color: #667eea;\n  font-weight: 500;\n  font-size: 0.9rem;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.clients-link mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.clients-link:hover {\n  background: #d5deff;\n}\n/*# sourceMappingURL=my-jobs-pro.css.map */\n'] }]
  }], () => [{ type: JobService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyJobsProComponent, { className: "MyJobsProComponent", filePath: "src/app/features/my-jobs-pro/my-jobs-pro.ts", lineNumber: 41 });
})();
export {
  MyJobsProComponent
};
//# sourceMappingURL=chunk-FRJIHGFA.js.map

