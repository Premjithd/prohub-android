import {
  MyServicesService
} from "./chunk-R4R6ZD2B.js";
import {
  MatChipsModule
} from "./chunk-AWXWAKBZ.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-HKT742HY.js";
import "./chunk-ATW3VVJF.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AQNNVN3U.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-QKBPBGFS.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-B4QCWAPP.js";
import "./chunk-SOWTMXOK.js";
import "./chunk-A6TK5TPK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ZGXDPMMN.js";
import {
  Auth
} from "./chunk-6CNFBV5T.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-VRKQDNIA.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  NgModule,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/my-services/my-services.ts
function MyServicesComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10)(1, "mat-icon");
    \u0275\u0275text(2, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "MY_SERVICES.ADD"), " ");
  }
}
function MyServicesComponent_div_11_Template(rf, ctx) {
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
function MyServicesComponent_div_12_Template(rf, ctx) {
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
function MyServicesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "MY_SERVICES.LOADING"));
  }
}
function MyServicesComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon", 15);
    \u0275\u0275text(2, "build_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 10)(10, "mat-icon");
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "MY_SERVICES.EMPTY_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "MY_SERVICES.EMPTY_SUB"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 7, "MY_SERVICES.ADD_FIRST"), " ");
  }
}
function MyServicesComponent_div_15_mat_card_1_div_4_mat_icon_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r3 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r3.serviceCategory.icon);
  }
}
function MyServicesComponent_div_15_mat_card_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, MyServicesComponent_div_15_mat_card_1_div_4_mat_icon_1_Template, 2, 1, "mat-icon", 30);
    \u0275\u0275elementStart(2, "span", 31);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r3.serviceCategory.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.serviceCategory.name);
  }
}
function MyServicesComponent_div_15_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-header")(2, "div", 19)(3, "div", 20);
    \u0275\u0275template(4, MyServicesComponent_div_15_mat_card_1_div_4_Template, 4, 2, "div", 21);
    \u0275\u0275elementStart(5, "h2", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "mat-card-content")(8, "div", 23)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 24);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 25)(15, "div", 26)(16, "mat-icon");
    \u0275\u0275text(17, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 26)(23, "mat-icon");
    \u0275\u0275text(24, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275pipe(28, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(29, "mat-card-actions")(30, "button", 27);
    \u0275\u0275listener("click", function MyServicesComponent_div_15_mat_card_1_Template_button_click_30_listener() {
      const service_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editService(service_r3.id));
    });
    \u0275\u0275elementStart(31, "mat-icon");
    \u0275\u0275text(32, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "button", 28);
    \u0275\u0275listener("click", function MyServicesComponent_div_15_mat_card_1_Template_button_click_35_listener() {
      const service_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteService(service_r3.id));
    });
    \u0275\u0275elementStart(36, "mat-icon");
    \u0275\u0275text(37, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", service_r3.serviceCategory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 10, "MY_SERVICES.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r3.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(20, 12, "MY_SERVICES.CREATED"), " ", \u0275\u0275pipeBind2(21, 14, service_r3.createdAt, "MMM dd, yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(27, 17, "MY_SERVICES.UPDATED"), " ", \u0275\u0275pipeBind2(28, 19, service_r3.updatedAt, "MMM dd, yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 22, "MY_SERVICES.EDIT"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 24, "MY_SERVICES.DELETE"), " ");
  }
}
function MyServicesComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MyServicesComponent_div_15_mat_card_1_Template, 40, 26, "mat-card", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.services);
  }
}
var MyServicesComponent = class _MyServicesComponent {
  myServicesService;
  auth;
  cdr;
  router;
  services = [];
  loading = true;
  errorMessage = "";
  successMessage = "";
  destroy$ = new Subject();
  constructor(myServicesService, auth, cdr, router) {
    this.myServicesService = myServicesService;
    this.auth = auth;
    this.cdr = cdr;
    this.router = router;
  }
  ngOnInit() {
    if (this.auth.isAuthenticated() && this.auth.getUserType() === "Pro") {
      this.loadMyServices();
    } else {
      this.errorMessage = "Please login as a professional to view your services.";
      this.loading = false;
    }
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadMyServices() {
    this.loading = true;
    this.errorMessage = "";
    console.log("Loading services for pro user...");
    const proIdStr = this.auth.getUserId();
    if (!proIdStr) {
      this.errorMessage = "Unable to identify professional account. Please logout and login again.";
      this.loading = false;
      this.cdr.markForCheck();
      return;
    }
    const proId = parseInt(proIdStr, 10);
    console.log("Fetching services for Pro ID:", proId);
    this.myServicesService.getMyServices(proId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (services) => {
        console.log("Services received in component:", services);
        console.log("Services array length:", services.length);
        console.log("Services array is:", Array.isArray(services) ? "an array" : "not an array");
        if (services && services.length > 0) {
          console.log("First service:", services[0]);
        }
        this.services = services;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error loading services:", error);
        let errorMsg = "Failed to load your services.";
        if (error.status === 0) {
          errorMsg = "Connection error. Please ensure the API server is running on http://10.0.2.2:5101";
        } else if (error.status === 401) {
          errorMsg = "Unauthorized. Please login again.";
        } else if (error.status === 403) {
          errorMsg = "Access denied. You do not have permission to view these services.";
        } else if (error.status === 404) {
          errorMsg = "No services found.";
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
  deleteService(serviceId) {
    if (confirm("Are you sure you want to delete this service?")) {
      this.myServicesService.deleteService(serviceId).pipe(takeUntil(this.destroy$)).subscribe({
        next: () => {
          this.successMessage = "Service deleted successfully!";
          this.services = this.services.filter((service) => service.id !== serviceId);
          this.cdr.markForCheck();
          setTimeout(() => {
            this.successMessage = "";
            this.cdr.markForCheck();
          }, 3e3);
        },
        error: (error) => {
          console.error("Error deleting service:", error);
          this.errorMessage = "Failed to delete the service. Please try again.";
          this.cdr.markForCheck();
        }
      });
    }
  }
  editService(serviceId) {
    this.router.navigate(["/edit-service", serviceId]);
  }
  static \u0275fac = function MyServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyServicesComponent)(\u0275\u0275directiveInject(MyServicesService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyServicesComponent, selectors: [["app-my-services"]], decls: 16, vars: 12, consts: [[1, "my-services-container"], [1, "page-header"], [1, "header-content"], [1, "subtitle"], ["mat-raised-button", "", "color", "primary", "routerLink", "/add-service", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "services-grid", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/add-service"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "loading-container"], [1, "empty-state"], [1, "empty-icon"], [1, "services-grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], [1, "service-header-content"], [1, "service-title-section"], ["class", "category-badge", 4, "ngIf"], [1, "service-title"], [1, "service-section"], [1, "description"], [1, "metadata"], [1, "metadata-item"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], [1, "category-badge"], ["class", "category-icon", 4, "ngIf"], [1, "category-name"], [1, "category-icon"]], template: function MyServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5);
      \u0275\u0275pipe(6, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 3);
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, MyServicesComponent_button_10_Template, 5, 3, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(11, MyServicesComponent_div_11_Template, 5, 1, "div", 5)(12, MyServicesComponent_div_12_Template, 5, 1, "div", 6)(13, MyServicesComponent_div_13_Template, 5, 3, "div", 7)(14, MyServicesComponent_div_14_Template, 14, 9, "div", 8)(15, MyServicesComponent_div_15_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "MY_SERVICES.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "MY_SERVICES.SUBTITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.loading && ctx.services.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.services.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.services.length > 0);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    RouterModule,
    RouterLink,
    TranslateModule,
    MatCardModule,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatButtonModule,
    MatButton,
    MatIconModule,
    MatIcon,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatChipsModule,
    DatePipe,
    TranslatePipe
  ], styles: ["\n\n.my-services-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 0.5rem 0;\n  color: #333;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1rem;\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  min-height: 400px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 1.1rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  width: 5rem;\n  height: 5rem;\n  color: #999;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 1rem 0 0.5rem 0;\n  color: #333;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 2rem;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-4px);\n}\n.service-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem;\n}\n.service-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: space-between;\n}\n.service-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.service-title-section[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.category-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.8rem;\n  background-color: #e8f4f8;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #0277bd;\n  width: fit-content;\n}\n.category-badge[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.category-badge[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.service-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n  color: #333;\n  word-break: break-word;\n}\n.service-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.service-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n}\n.service-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.metadata[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid #f0f0f0;\n}\n.metadata[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #999;\n  font-size: 0.9rem;\n}\n.metadata[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\nbutton[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n@media (max-width: 600px) {\n  .my-services-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .services-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .service-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .service-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .service-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=my-services.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyServicesComponent, [{
    type: Component,
    args: [{ selector: "app-my-services", standalone: true, imports: [
      CommonModule,
      RouterModule,
      TranslateModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatChipsModule
    ], template: `<div class="my-services-container">
  <!-- Page Header -->
  <div class="page-header">
    <div class="header-content">
      <div>
        <h1>{{ 'MY_SERVICES.TITLE' | translate }}</h1>
        <p class="subtitle">{{ 'MY_SERVICES.SUBTITLE' | translate }}</p>
      </div>
      <button *ngIf="!loading && services.length > 0" mat-raised-button color="primary" routerLink="/add-service">
        <mat-icon>add_circle</mat-icon>
        {{ 'MY_SERVICES.ADD' | translate }}
      </button>
    </div>
  </div>

  <!-- Success Message -->
  <div *ngIf="successMessage" class="alert alert-success">
    <mat-icon>check_circle</mat-icon>
    <span>{{ successMessage }}</span>
  </div>

  <!-- Error Message -->
  <div *ngIf="errorMessage" class="alert alert-error">
    <mat-icon>error</mat-icon>
    <span>{{ errorMessage }}</span>
  </div>

  <!-- Loading State -->
  <div *ngIf="loading" class="loading-container">
    <mat-spinner></mat-spinner>
    <p>{{ 'MY_SERVICES.LOADING' | translate }}</p>
  </div>

  <!-- Empty State -->
  <div *ngIf="!loading && services.length === 0" class="empty-state">
    <mat-icon class="empty-icon">build_off</mat-icon>
    <h2>{{ 'MY_SERVICES.EMPTY_TITLE' | translate }}</h2>
    <p>{{ 'MY_SERVICES.EMPTY_SUB' | translate }}</p>
    <button mat-raised-button color="primary" routerLink="/add-service">
      <mat-icon>add</mat-icon>
      {{ 'MY_SERVICES.ADD_FIRST' | translate }}
    </button>
  </div>

  <!-- Services List -->
  <div *ngIf="!loading && services.length > 0" class="services-grid">
    <mat-card *ngFor="let service of services" class="service-card">
      <!-- Service Header -->
      <mat-card-header>
        <div class="service-header-content">
          <div class="service-title-section">
            <!-- Category Badge -->
            <div *ngIf="service.serviceCategory" class="category-badge">
              <mat-icon *ngIf="service.serviceCategory.icon" class="category-icon">{{ service.serviceCategory.icon }}</mat-icon>
              <span class="category-name">{{ service.serviceCategory.name }}</span>
            </div>
            <h2 class="service-title">{{ service.name }}</h2>
          </div>
        </div>
      </mat-card-header>

      <!-- Service Content -->
      <mat-card-content>
        <!-- Description -->
        <div class="service-section">
          <h3>{{ 'MY_SERVICES.DESCRIPTION' | translate }}</h3>
          <p class="description">{{ service.description }}</p>
        </div>

        <!-- Metadata -->
        <div class="metadata">
          <div class="metadata-item">
            <mat-icon>calendar_today</mat-icon>
            <span>{{ 'MY_SERVICES.CREATED' | translate }} {{ service.createdAt | date: 'MMM dd, yyyy' }}</span>
          </div>
          <div class="metadata-item">
            <mat-icon>update</mat-icon>
            <span>{{ 'MY_SERVICES.UPDATED' | translate }} {{ service.updatedAt | date: 'MMM dd, yyyy' }}</span>
          </div>
        </div>
      </mat-card-content>

      <!-- Service Actions -->
      <mat-card-actions>
        <button mat-button color="primary" (click)="editService(service.id)">
          <mat-icon>edit</mat-icon>
          {{ 'MY_SERVICES.EDIT' | translate }}
        </button>
        <button mat-button color="warn" (click)="deleteService(service.id)">
          <mat-icon>delete</mat-icon>
          {{ 'MY_SERVICES.DELETE' | translate }}
        </button>
      </mat-card-actions>
    </mat-card>
  </div>
</div>
`, styles: ["/* src/app/features/my-services/my-services.scss */\n.my-services-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 2rem;\n}\n.page-header .header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .page-header .header-content {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.page-header h1 {\n  font-size: 2.5rem;\n  margin: 0 0 0.5rem 0;\n  color: #333;\n}\n.page-header .subtitle {\n  font-size: 1.1rem;\n  color: #666;\n  margin: 0;\n}\n.page-header button {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .page-header button {\n    width: 100%;\n  }\n}\n.alert {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1rem;\n}\n.alert mat-icon {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  min-height: 400px;\n}\n.loading-container p {\n  margin-top: 1rem;\n  font-size: 1.1rem;\n  color: #666;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem;\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state .empty-icon {\n  font-size: 5rem;\n  width: 5rem;\n  height: 5rem;\n  color: #999;\n  margin-bottom: 1rem;\n}\n.empty-state h2 {\n  font-size: 1.75rem;\n  margin: 1rem 0 0.5rem 0;\n  color: #333;\n}\n.empty-state p {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 2rem;\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .services-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.service-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-4px);\n}\n.service-card mat-card-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.service-card mat-card-content {\n  flex: 1;\n  padding: 1.5rem;\n}\n.service-card mat-card-actions {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: space-between;\n}\n.service-header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.service-title-section {\n  flex: 1;\n}\n.category-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.8rem;\n  background-color: #e8f4f8;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #0277bd;\n  width: fit-content;\n}\n.category-badge .category-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.category-badge .category-name {\n  font-size: 0.85rem;\n}\n.service-title {\n  font-size: 1.5rem;\n  margin: 0;\n  color: #333;\n  word-break: break-word;\n}\n.service-section {\n  margin-bottom: 1.5rem;\n}\n.service-section h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n}\n.service-section .description {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.metadata {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid #f0f0f0;\n}\n.metadata .metadata-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #999;\n  font-size: 0.9rem;\n}\n.metadata .metadata-item mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\nbutton mat-icon {\n  margin-right: 0.5rem;\n}\n@media (max-width: 600px) {\n  .my-services-container {\n    padding: 1rem;\n  }\n  .page-header h1 {\n    font-size: 1.75rem;\n  }\n  .page-header .subtitle {\n    font-size: 0.95rem;\n  }\n  .services-grid {\n    gap: 1rem;\n  }\n  .service-card mat-card-header {\n    padding: 1rem;\n  }\n  .service-card mat-card-content {\n    padding: 1rem;\n  }\n  .service-card mat-card-actions {\n    padding: 0.75rem 1rem;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .service-card mat-card-actions button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=my-services.css.map */\n"] }]
  }], () => [{ type: MyServicesService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyServicesComponent, { className: "MyServicesComponent", filePath: "src/app/features/my-services/my-services.ts", lineNumber: 31 });
})();

// src/app/features/my-services/my-services-routing-module.ts
var routes = [
  { path: "", component: MyServicesComponent }
];
var MyServicesRoutingModule = class _MyServicesRoutingModule {
  static \u0275fac = function MyServicesRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyServicesRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyServicesRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyServicesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/my-services/my-services-module.ts
var MyServicesModule = class _MyServicesModule {
  static \u0275fac = function MyServicesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyServicesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _MyServicesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    MyServicesRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyServicesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        MyServicesRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  MyServicesModule
};
//# sourceMappingURL=chunk-I35OBPYN.js.map

