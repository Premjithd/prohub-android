import {
  BrowseServicesService
} from "./chunk-3WYPNLQ5.js";
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
  NgIf,
  Subject,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate2
} from "./chunk-ANTPJ2CK.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/services/service-detail/service-detail.ts
function ServiceDetailComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "div", 5);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading service...");
    \u0275\u0275elementEnd()();
  }
}
function ServiceDetailComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "span", 7);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 8);
    \u0275\u0275listener("click", function ServiceDetailComponent_div_2_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275text(6, "Back to Services");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function ServiceDetailComponent_div_3_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.service.categoryIcon, " ", ctx_r1.service.categoryName, " ");
  }
}
function ServiceDetailComponent_div_3_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29)(1, "span", 7);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.service.city, "", ctx_r1.service.state ? ", " + ctx_r1.service.state : "", " ");
  }
}
function ServiceDetailComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "button", 10);
    \u0275\u0275listener("click", function ServiceDetailComponent_div_3_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(2, "span", 7);
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Back to Services ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12)(7, "img", 13);
    \u0275\u0275listener("error", function ServiceDetailComponent_div_3_Template_img_error_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onImgError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ServiceDetailComponent_div_3_span_8_Template, 2, 2, "span", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15)(10, "h1", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 17)(13, "span", 18);
    \u0275\u0275text(14, "Starting from");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 19);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "p", 20);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 21)(20, "span", 22);
    \u0275\u0275text(21, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "div", 23);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, ServiceDetailComponent_div_3_div_25_Template, 4, 2, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 25)(27, "button", 26);
    \u0275\u0275listener("click", function ServiceDetailComponent_div_3_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.bookNow());
    });
    \u0275\u0275elementStart(28, "span", 7);
    \u0275\u0275text(29, "assignment_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(30, " Book Now \u2014 Post a Job ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p", 27);
    \u0275\u0275text(32, "Post your job and this professional will bid on it");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("src", ctx_r1.service.imageUrl || ctx_r1.getCategoryImage(ctx_r1.service.categoryName || ""), \u0275\u0275sanitizeUrl)("alt", ctx_r1.service.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.service.categoryName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.service.name);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatPrice(ctx_r1.service.price));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.service.description);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.service.businessName || ctx_r1.service.proName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.service.city);
  }
}
var ServiceDetailComponent = class _ServiceDetailComponent {
  route;
  router;
  auth;
  browseServicesService;
  cdr;
  service = null;
  loading = true;
  errorMessage = "";
  destroy$ = new Subject();
  constructor(route, router, auth, browseServicesService, cdr) {
    this.route = route;
    this.router = router;
    this.auth = auth;
    this.browseServicesService = browseServicesService;
    this.cdr = cdr;
  }
  ngOnInit() {
    const id = parseInt(this.route.snapshot.paramMap.get("id") ?? "0", 10);
    if (!id) {
      this.errorMessage = "Invalid service.";
      this.loading = false;
      return;
    }
    this.browseServicesService.getService(id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (svc) => {
        this.service = svc;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = "Service not found.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  bookNow() {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["/auth/login"], { queryParams: { returnUrl: "/post-job" } });
      return;
    }
    const qp = {};
    if (this.service?.serviceCategoryId)
      qp["categoryId"] = this.service.serviceCategoryId;
    this.router.navigate(["/post-job"], { queryParams: qp });
  }
  goBack() {
    this.router.navigate(["/services"]);
  }
  formatPrice(price) {
    return `\u20B9${price.toLocaleString("en-IN")}`;
  }
  getCategoryImage(name) {
    const map = {
      cleaning: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&q=80",
      plumbing: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=800&q=80",
      electrical: "https://images.unsplash.com/photo-1621905252472-943afaa20e20?auto=format&fit=crop&w=800&q=80",
      painting: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=800&q=80",
      landscaping: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80",
      carpentry: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=800&q=80",
      handyman: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=800&q=80",
      tutoring: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      it: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
    };
    const key = (name ?? "").toLowerCase().replace(/\s+/g, "").replace("support", "");
    return map[key] ?? "assets/images/services.png";
  }
  onImgError(event) {
    event.target.src = "assets/images/services.png";
  }
  static \u0275fac = function ServiceDetailComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceDetailComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(BrowseServicesService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceDetailComponent, selectors: [["app-service-detail"]], decls: 4, vars: 3, consts: [[1, "detail-wrapper"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "detail-content", 4, "ngIf"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "material-icons"], [1, "btn-outline", 3, "click"], [1, "detail-content"], [1, "back-btn", 3, "click"], [1, "detail-card"], [1, "detail-image"], ["loading", "lazy", 3, "error", "src", "alt"], ["class", "category-tag", 4, "ngIf"], [1, "detail-info"], [1, "service-name"], [1, "price-block"], [1, "price-label"], [1, "price-value"], [1, "description"], [1, "pro-block"], [1, "material-icons", "pro-icon"], [1, "pro-name"], ["class", "pro-location", 4, "ngIf"], [1, "action-row"], [1, "btn-primary", "book-btn", 3, "click"], [1, "book-hint"], [1, "category-tag"], [1, "pro-location"]], template: function ServiceDetailComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, ServiceDetailComponent_div_1_Template, 4, 0, "div", 1)(2, ServiceDetailComponent_div_2_Template, 7, 1, "div", 2)(3, ServiceDetailComponent_div_3_Template, 33, 8, "div", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.service);
    }
  }, dependencies: [CommonModule, NgIf, RouterModule], styles: ["\n\n.detail-wrapper[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 24px 16px 48px;\n}\n.loading-state[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 80px 24px;\n  text-align: center;\n  color: var(--text-secondary, #666);\n}\n.loading-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%], \n.error-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 48px;\n  color: #e57373;\n}\n.spinner[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: var(--color-primary, #1565c0);\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.back-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  color: var(--color-primary, #1565c0);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 0;\n  margin-bottom: 20px;\n}\n.back-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.back-btn[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.detail-card[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n@media (max-width: 720px) {\n  .detail-card[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.detail-image[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 300px;\n}\n.detail-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.detail-image[_ngcontent-%COMP%]   .category-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.detail-info[_ngcontent-%COMP%] {\n  padding: 32px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.service-name[_ngcontent-%COMP%] {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-h1, #1a1a2e);\n  margin: 0;\n  line-height: 1.3;\n}\n.price-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.price-block[_ngcontent-%COMP%]   .price-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: var(--text-secondary, #666);\n}\n.price-block[_ngcontent-%COMP%]   .price-value[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--color-primary, #1565c0);\n}\n.description[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: var(--text-body, #444);\n  line-height: 1.65;\n  margin: 0;\n}\n.pro-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: #f5f7ff;\n  border-radius: 12px;\n}\n.pro-block[_ngcontent-%COMP%]   .pro-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: var(--color-primary, #1565c0);\n  margin-top: 2px;\n}\n.pro-block[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-h1, #1a1a2e);\n}\n.pro-block[_ngcontent-%COMP%]   .pro-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-secondary, #666);\n  margin-top: 4px;\n}\n.pro-block[_ngcontent-%COMP%]   .pro-location[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.action-row[_ngcontent-%COMP%] {\n  margin-top: auto;\n}\n.action-row[_ngcontent-%COMP%]   .book-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: var(--text-secondary, #888);\n  margin: 8px 0 0;\n  text-align: center;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: var(--color-primary, #1565c0);\n  color: #fff;\n  border: none;\n  padding: 14px 24px;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  transition: background 0.2s, transform 0.15s;\n}\n.btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  background: var(--color-primary-dark, #0d47a1);\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 1.5px solid var(--color-primary, #1565c0);\n  color: var(--color-primary, #1565c0);\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(21, 101, 192, 0.06);\n}\n/*# sourceMappingURL=service-detail.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceDetailComponent, [{
    type: Component,
    args: [{ selector: "app-service-detail", standalone: true, imports: [CommonModule, RouterModule], template: `<div class="detail-wrapper">

  <!-- Loading -->
  <div *ngIf="loading" class="loading-state">
    <div class="spinner"></div>
    <p>Loading service...</p>
  </div>

  <!-- Error -->
  <div *ngIf="!loading && errorMessage" class="error-state">
    <span class="material-icons">error_outline</span>
    <p>{{ errorMessage }}</p>
    <button class="btn-outline" (click)="goBack()">Back to Services</button>
  </div>

  <!-- Content -->
  <div *ngIf="!loading && service" class="detail-content">

    <button class="back-btn" (click)="goBack()">
      <span class="material-icons">arrow_back</span> Back to Services
    </button>

    <div class="detail-card">
      <!-- Image -->
      <div class="detail-image">
        <img
          [src]="service.imageUrl || getCategoryImage(service.categoryName || '')"
          [alt]="service.name"
          (error)="onImgError($event)"
          loading="lazy" />
        <span class="category-tag" *ngIf="service.categoryName">
          {{ service.categoryIcon }} {{ service.categoryName }}
        </span>
      </div>

      <!-- Info -->
      <div class="detail-info">
        <h1 class="service-name">{{ service.name }}</h1>

        <div class="price-block">
          <span class="price-label">Starting from</span>
          <span class="price-value">{{ formatPrice(service.price) }}</span>
        </div>

        <p class="description">{{ service.description }}</p>

        <div class="pro-block">
          <span class="material-icons pro-icon">store</span>
          <div>
            <div class="pro-name">{{ service.businessName || service.proName }}</div>
            <div class="pro-location" *ngIf="service.city">
              <span class="material-icons">place</span>
              {{ service.city }}{{ service.state ? ', ' + service.state : '' }}
            </div>
          </div>
        </div>

        <div class="action-row">
          <button class="btn-primary book-btn" (click)="bookNow()">
            <span class="material-icons">assignment_add</span>
            Book Now \u2014 Post a Job
          </button>
          <p class="book-hint">Post your job and this professional will bid on it</p>
        </div>
      </div>
    </div>

  </div>
</div>
`, styles: ["/* src/app/features/services/service-detail/service-detail.scss */\n.detail-wrapper {\n  max-width: 960px;\n  margin: 0 auto;\n  padding: 24px 16px 48px;\n}\n.loading-state,\n.error-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 16px;\n  padding: 80px 24px;\n  text-align: center;\n  color: var(--text-secondary, #666);\n}\n.loading-state .material-icons,\n.error-state .material-icons {\n  font-size: 48px;\n  color: #e57373;\n}\n.spinner {\n  width: 40px;\n  height: 40px;\n  border: 3px solid #e0e0e0;\n  border-top-color: var(--color-primary, #1565c0);\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.back-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: none;\n  color: var(--color-primary, #1565c0);\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  padding: 8px 0;\n  margin-bottom: 20px;\n}\n.back-btn .material-icons {\n  font-size: 18px;\n}\n.back-btn:hover {\n  text-decoration: underline;\n}\n.detail-card {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 32px;\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n}\n@media (max-width: 720px) {\n  .detail-card {\n    grid-template-columns: 1fr;\n  }\n}\n.detail-image {\n  position: relative;\n  min-height: 300px;\n}\n.detail-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.detail-image .category-tag {\n  position: absolute;\n  top: 16px;\n  left: 16px;\n  background: rgba(0, 0, 0, 0.6);\n  color: #fff;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-size: 13px;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n}\n.detail-info {\n  padding: 32px 28px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.service-name {\n  font-size: 26px;\n  font-weight: 700;\n  color: var(--text-h1, #1a1a2e);\n  margin: 0;\n  line-height: 1.3;\n}\n.price-block {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n}\n.price-block .price-label {\n  font-size: 13px;\n  color: var(--text-secondary, #666);\n}\n.price-block .price-value {\n  font-size: 28px;\n  font-weight: 700;\n  color: var(--color-primary, #1565c0);\n}\n.description {\n  font-size: 15px;\n  color: var(--text-body, #444);\n  line-height: 1.65;\n  margin: 0;\n}\n.pro-block {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  padding: 16px;\n  background: #f5f7ff;\n  border-radius: 12px;\n}\n.pro-block .pro-icon {\n  font-size: 28px;\n  color: var(--color-primary, #1565c0);\n  margin-top: 2px;\n}\n.pro-block .pro-name {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--text-h1, #1a1a2e);\n}\n.pro-block .pro-location {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n  color: var(--text-secondary, #666);\n  margin-top: 4px;\n}\n.pro-block .pro-location .material-icons {\n  font-size: 15px;\n}\n.action-row {\n  margin-top: auto;\n}\n.action-row .book-hint {\n  font-size: 12px;\n  color: var(--text-secondary, #888);\n  margin: 8px 0 0;\n  text-align: center;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  background: var(--color-primary, #1565c0);\n  color: #fff;\n  border: none;\n  padding: 14px 24px;\n  border-radius: 10px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  width: 100%;\n  transition: background 0.2s, transform 0.15s;\n}\n.btn-primary .material-icons {\n  font-size: 20px;\n}\n.btn-primary:hover {\n  background: var(--color-primary-dark, #0d47a1);\n  transform: translateY(-1px);\n}\n.btn-primary:active {\n  transform: translateY(0);\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background: none;\n  border: 1.5px solid var(--color-primary, #1565c0);\n  color: var(--color-primary, #1565c0);\n  padding: 10px 20px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.btn-outline:hover {\n  background: rgba(21, 101, 192, 0.06);\n}\n/*# sourceMappingURL=service-detail.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: Auth }, { type: BrowseServicesService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceDetailComponent, { className: "ServiceDetailComponent", filePath: "src/app/features/services/service-detail/service-detail.ts", lineNumber: 16 });
})();
export {
  ServiceDetailComponent
};
//# sourceMappingURL=chunk-W47QX4NZ.js.map

