import {
  MyServicesService
} from "./chunk-YVFMDLNK.js";
import {
  MatChipsModule
} from "./chunk-IDA4WQTH.js";
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardModule
} from "./chunk-OCV7UR27.js";
import "./chunk-XYJWITZW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XDOJRKTW.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-KQMSNT2S.js";
import "./chunk-XBTNCZLM.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-Z4HON7ZA.js";
import "./chunk-24VDEUMT.js";
import "./chunk-DLR4BDQH.js";
import {
  Auth
} from "./chunk-MJ2Z243I.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-Z7MI56JG.js";
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/my-services/my-services.ts
function MyServicesComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 10)(1, "mat-icon");
    \u0275\u0275text(2, "add_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add New Service ");
    \u0275\u0275elementEnd();
  }
}
function MyServicesComponent_div_9_Template(rf, ctx) {
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
function MyServicesComponent_div_10_Template(rf, ctx) {
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
function MyServicesComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading your services...");
    \u0275\u0275elementEnd()();
  }
}
function MyServicesComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-icon", 15);
    \u0275\u0275text(2, "build_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No Services Yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "You haven't added any services yet. Add your first service to get started.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 10)(8, "mat-icon");
    \u0275\u0275text(9, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Add a New Service ");
    \u0275\u0275elementEnd()();
  }
}
function MyServicesComponent_div_13_mat_card_1_div_4_mat_icon_1_Template(rf, ctx) {
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
function MyServicesComponent_div_13_mat_card_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275template(1, MyServicesComponent_div_13_mat_card_1_div_4_mat_icon_1_Template, 2, 1, "mat-icon", 30);
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
function MyServicesComponent_div_13_mat_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-card", 18)(1, "mat-card-header")(2, "div", 19)(3, "div", 20);
    \u0275\u0275template(4, MyServicesComponent_div_13_mat_card_1_div_4_Template, 4, 2, "div", 21);
    \u0275\u0275elementStart(5, "h2", 22);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "mat-card-content")(8, "div", 23)(9, "h3");
    \u0275\u0275text(10, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 24);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 25)(14, "div", 26)(15, "mat-icon");
    \u0275\u0275text(16, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 26)(21, "mat-icon");
    \u0275\u0275text(22, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(26, "mat-card-actions")(27, "button", 27);
    \u0275\u0275listener("click", function MyServicesComponent_div_13_mat_card_1_Template_button_click_27_listener() {
      const service_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.editService(service_r3.id));
    });
    \u0275\u0275elementStart(28, "mat-icon");
    \u0275\u0275text(29, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Edit ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 28);
    \u0275\u0275listener("click", function MyServicesComponent_div_13_mat_card_1_Template_button_click_31_listener() {
      const service_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.deleteService(service_r3.id));
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Delete ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const service_r3 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", service_r3.serviceCategory);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(service_r3.name);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(service_r3.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Created: ", \u0275\u0275pipeBind2(19, 5, service_r3.createdAt, "MMM dd, yyyy"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("Updated: ", \u0275\u0275pipeBind2(25, 8, service_r3.updatedAt, "MMM dd, yyyy"));
  }
}
function MyServicesComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275template(1, MyServicesComponent_div_13_mat_card_1_Template, 35, 11, "mat-card", 17);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyServicesComponent, selectors: [["app-my-services"]], decls: 14, vars: 6, consts: [[1, "my-services-container"], [1, "page-header"], [1, "header-content"], [1, "subtitle"], ["mat-raised-button", "", "color", "primary", "routerLink", "/add-service", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "services-grid", 4, "ngIf"], ["mat-raised-button", "", "color", "primary", "routerLink", "/add-service"], [1, "alert", "alert-success"], [1, "alert", "alert-error"], [1, "loading-container"], [1, "empty-state"], [1, "empty-icon"], [1, "services-grid"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], [1, "service-header-content"], [1, "service-title-section"], ["class", "category-badge", 4, "ngIf"], [1, "service-title"], [1, "service-section"], [1, "description"], [1, "metadata"], [1, "metadata-item"], ["mat-button", "", "color", "primary", 3, "click"], ["mat-button", "", "color", "warn", 3, "click"], [1, "category-badge"], ["class", "category-icon", 4, "ngIf"], [1, "category-name"], [1, "category-icon"]], template: function MyServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5, "My Services");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Manage the services you offer to your clients");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(8, MyServicesComponent_button_8_Template, 4, 0, "button", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, MyServicesComponent_div_9_Template, 5, 1, "div", 5)(10, MyServicesComponent_div_10_Template, 5, 1, "div", 6)(11, MyServicesComponent_div_11_Template, 4, 0, "div", 7)(12, MyServicesComponent_div_12_Template, 11, 0, "div", 8)(13, MyServicesComponent_div_13_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, MatCardModule, MatCard, MatCardActions, MatCardContent, MatCardHeader, MatButtonModule, MatButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatChipsModule, DatePipe], styles: ["\n\n.my-services-container[_ngcontent-%COMP%] {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 0.5rem 0;\n  color: #333;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .page-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1rem;\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  min-height: 400px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 1.1rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  width: 5rem;\n  height: 5rem;\n  color: #999;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 1rem 0 0.5rem 0;\n  color: #333;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 2rem;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-4px);\n}\n.service-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem;\n}\n.service-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: space-between;\n}\n.service-header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.service-title-section[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.category-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.8rem;\n  background-color: #e8f4f8;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #0277bd;\n  width: fit-content;\n}\n.category-badge[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.category-badge[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.service-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0;\n  color: #333;\n  word-break: break-word;\n}\n.service-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.service-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n}\n.service-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.metadata[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid #f0f0f0;\n}\n.metadata[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #999;\n  font-size: 0.9rem;\n}\n.metadata[_ngcontent-%COMP%]   .metadata-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\nbutton[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n@media (max-width: 600px) {\n  .my-services-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .services-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .service-card[_ngcontent-%COMP%]   mat-card-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .service-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .service-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .service-card[_ngcontent-%COMP%]   mat-card-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=my-services.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyServicesComponent, [{
    type: Component,
    args: [{ selector: "app-my-services", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatCardModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatChipsModule
    ], template: `<div class="my-services-container">\r
  <!-- Page Header -->\r
  <div class="page-header">\r
    <div class="header-content">\r
      <div>\r
        <h1>My Services</h1>\r
        <p class="subtitle">Manage the services you offer to your clients</p>\r
      </div>\r
      <button *ngIf="!loading && services.length > 0" mat-raised-button color="primary" routerLink="/add-service">\r
        <mat-icon>add_circle</mat-icon>\r
        Add New Service\r
      </button>\r
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
    <p>Loading your services...</p>\r
  </div>\r
\r
  <!-- Empty State -->\r
  <div *ngIf="!loading && services.length === 0" class="empty-state">\r
    <mat-icon class="empty-icon">build_off</mat-icon>\r
    <h2>No Services Yet</h2>\r
    <p>You haven't added any services yet. Add your first service to get started.</p>\r
    <button mat-raised-button color="primary" routerLink="/add-service">\r
      <mat-icon>add</mat-icon>\r
      Add a New Service\r
    </button>\r
  </div>\r
\r
  <!-- Services List -->\r
  <div *ngIf="!loading && services.length > 0" class="services-grid">\r
    <mat-card *ngFor="let service of services" class="service-card">\r
      <!-- Service Header -->\r
      <mat-card-header>\r
        <div class="service-header-content">\r
          <div class="service-title-section">\r
            <!-- Category Badge -->\r
            <div *ngIf="service.serviceCategory" class="category-badge">\r
              <mat-icon *ngIf="service.serviceCategory.icon" class="category-icon">{{ service.serviceCategory.icon }}</mat-icon>\r
              <span class="category-name">{{ service.serviceCategory.name }}</span>\r
            </div>\r
            <h2 class="service-title">{{ service.name }}</h2>\r
          </div>\r
        </div>\r
      </mat-card-header>\r
\r
      <!-- Service Content -->\r
      <mat-card-content>\r
        <!-- Description -->\r
        <div class="service-section">\r
          <h3>Description</h3>\r
          <p class="description">{{ service.description }}</p>\r
        </div>\r
\r
        <!-- Metadata -->\r
        <div class="metadata">\r
          <div class="metadata-item">\r
            <mat-icon>calendar_today</mat-icon>\r
            <span>Created: {{ service.createdAt | date: 'MMM dd, yyyy' }}</span>\r
          </div>\r
          <div class="metadata-item">\r
            <mat-icon>update</mat-icon>\r
            <span>Updated: {{ service.updatedAt | date: 'MMM dd, yyyy' }}</span>\r
          </div>\r
        </div>\r
      </mat-card-content>\r
\r
      <!-- Service Actions -->\r
      <mat-card-actions>\r
        <button mat-button color="primary" (click)="editService(service.id)">\r
          <mat-icon>edit</mat-icon>\r
          Edit\r
        </button>\r
        <button mat-button color="warn" (click)="deleteService(service.id)">\r
          <mat-icon>delete</mat-icon>\r
          Delete\r
        </button>\r
      </mat-card-actions>\r
    </mat-card>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/my-services/my-services.scss */\n.my-services-container {\n  padding: 2rem;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.page-header {\n  margin-bottom: 2rem;\n}\n.page-header .header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .page-header .header-content {\n    flex-direction: column;\n    align-items: stretch;\n  }\n}\n.page-header h1 {\n  font-size: 2.5rem;\n  margin: 0 0 0.5rem 0;\n  color: #333;\n}\n.page-header .subtitle {\n  font-size: 1.1rem;\n  color: #666;\n  margin: 0;\n}\n.page-header button {\n  white-space: nowrap;\n}\n@media (max-width: 768px) {\n  .page-header button {\n    width: 100%;\n  }\n}\n.alert {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1rem;\n}\n.alert mat-icon {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  min-height: 400px;\n}\n.loading-container p {\n  margin-top: 1rem;\n  font-size: 1.1rem;\n  color: #666;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem;\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state .empty-icon {\n  font-size: 5rem;\n  width: 5rem;\n  height: 5rem;\n  color: #999;\n  margin-bottom: 1rem;\n}\n.empty-state h2 {\n  font-size: 1.75rem;\n  margin: 1rem 0 0.5rem 0;\n  color: #333;\n}\n.empty-state p {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 2rem;\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));\n  gap: 2rem;\n}\n@media (max-width: 768px) {\n  .services-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.service-card {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  border-radius: 8px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n  transition: all 0.3s ease;\n}\n.service-card:hover {\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);\n  transform: translateY(-4px);\n}\n.service-card mat-card-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.service-card mat-card-content {\n  flex: 1;\n  padding: 1.5rem;\n}\n.service-card mat-card-actions {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: space-between;\n}\n.service-header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.service-title-section {\n  flex: 1;\n}\n.category-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.8rem;\n  background-color: #e8f4f8;\n  border-radius: 4px;\n  margin-bottom: 0.5rem;\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #0277bd;\n  width: fit-content;\n}\n.category-badge .category-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.category-badge .category-name {\n  font-size: 0.85rem;\n}\n.service-title {\n  font-size: 1.5rem;\n  margin: 0;\n  color: #333;\n  word-break: break-word;\n}\n.service-section {\n  margin-bottom: 1.5rem;\n}\n.service-section h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n}\n.service-section .description {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n  word-break: break-word;\n}\n.metadata {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid #f0f0f0;\n}\n.metadata .metadata-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #999;\n  font-size: 0.9rem;\n}\n.metadata .metadata-item mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\nbutton mat-icon {\n  margin-right: 0.5rem;\n}\n@media (max-width: 600px) {\n  .my-services-container {\n    padding: 1rem;\n  }\n  .page-header h1 {\n    font-size: 1.75rem;\n  }\n  .page-header .subtitle {\n    font-size: 0.95rem;\n  }\n  .services-grid {\n    gap: 1rem;\n  }\n  .service-card mat-card-header {\n    padding: 1rem;\n  }\n  .service-card mat-card-content {\n    padding: 1rem;\n  }\n  .service-card mat-card-actions {\n    padding: 0.75rem 1rem;\n    flex-direction: column;\n    gap: 0.5rem;\n  }\n  .service-card mat-card-actions button {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=my-services.css.map */\n"] }]
  }], () => [{ type: MyServicesService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyServicesComponent, { className: "MyServicesComponent", filePath: "src/app/features/my-services/my-services.ts", lineNumber: 29 });
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
//# sourceMappingURL=chunk-XMVBW4VP.js.map

