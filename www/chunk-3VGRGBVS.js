import {
  ProBrowseService
} from "./chunk-PPCBUXON.js";
import {
  MapViewComponent
} from "./chunk-NFAJWHCI.js";
import {
  ServiceCategoryService
} from "./chunk-JPYXDVHJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-DLR4BDQH.js";
import {
  BrowseServicesService
} from "./chunk-MNZIHXFB.js";
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
  DecimalPipe,
  NgForOf,
  NgIf,
  NgModule,
  Subject,
  debounceTime,
  distinctUntilChanged,
  setClassMetadata,
  switchMap,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/services/services/services.ts
function ServicesComponent_div_52_span_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "span", 45);
    \u0275\u0275listener("click", function ServicesComponent_div_52_span_1_Template_span_click_0_listener() {
      const cat_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.filterByCategory(cat_r2.name));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", cat_r2.icon, " ", cat_r2.name, " ");
  }
}
function ServicesComponent_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, ServicesComponent_div_52_span_1_Template, 2, 2, "span", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.categories.slice(0, 6));
  }
}
function ServicesComponent_button_58_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275listener("click", function ServicesComponent_button_58_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.filterByCategory(ctx_r2.selectedCategory));
    });
    \u0275\u0275text(1, " Clear filter \xD7 ");
    \u0275\u0275elementEnd();
  }
}
function ServicesComponent_div_59_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 49);
  }
}
function ServicesComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, ServicesComponent_div_59_div_1_Template, 1, 0, "div", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.skeletons);
  }
}
function ServicesComponent_div_60_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 51);
    \u0275\u0275listener("click", function ServicesComponent_div_60_button_1_Template_button_click_0_listener() {
      const cat_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.filterByCategory(cat_r6.name));
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 53);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 54);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.selectedCategory === cat_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", cat_r6.serviceCount, " pros");
  }
}
function ServicesComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47);
    \u0275\u0275template(1, ServicesComponent_div_60_button_1_Template, 7, 5, "button", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.categories);
  }
}
function ServicesComponent_div_76_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275element(1, "div", 58);
    \u0275\u0275elementStart(2, "div", 59);
    \u0275\u0275element(3, "div", 60)(4, "div", 61)(5, "div", 62);
    \u0275\u0275elementEnd()();
  }
}
function ServicesComponent_div_76_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, ServicesComponent_div_76_div_1_Template, 6, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.skeletons);
  }
}
function ServicesComponent_div_77_article_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 77)(1, "span", 9);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", s_r8.city, "", s_r8.state ? ", " + s_r8.state : "", " ");
  }
}
function ServicesComponent_div_77_article_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 78);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("from \u20B9", \u0275\u0275pipeBind1(2, 1, s_r8.price));
  }
}
function ServicesComponent_div_77_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 64)(1, "div", 65)(2, "img", 66);
    \u0275\u0275listener("error", function ServicesComponent_div_77_article_1_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onImgError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 67);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 68)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 69)(11, "span", 70);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ServicesComponent_div_77_article_1_span_13_Template, 4, 2, "span", 71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 72);
    \u0275\u0275template(15, ServicesComponent_div_77_article_1_div_15_Template, 3, 3, "div", 73);
    \u0275\u0275elementStart(16, "div", 74)(17, "button", 75);
    \u0275\u0275listener("click", function ServicesComponent_div_77_article_1_Template_button_click_17_listener($event) {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.openService(s_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(18, "Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "button", 76);
    \u0275\u0275listener("click", function ServicesComponent_div_77_article_1_Template_button_click_19_listener($event) {
      const s_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.bookService(s_r8);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(20, "Book Now");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", s_r8.imageUrl || ctx_r2.getCategoryImage(s_r8.categoryName || ""), \u0275\u0275sanitizeUrl)("alt", s_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.categoryName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r8.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r8.businessName || s_r8.proName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r8.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r8.price);
  }
}
function ServicesComponent_div_77_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 55);
    \u0275\u0275template(1, ServicesComponent_div_77_article_1_Template, 21, 8, "article", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.filteredServices);
  }
}
function ServicesComponent_div_78_button_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function ServicesComponent_div_78_button_7_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.filterByCategory(ctx_r2.selectedCategory));
    });
    \u0275\u0275text(1, " Clear Filter ");
    \u0275\u0275elementEnd();
  }
}
function ServicesComponent_div_78_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79)(1, "div", 80);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No services found");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Try a different search or clear the category filter");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ServicesComponent_div_78_button_7_Template, 2, 0, "button", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.selectedCategory);
  }
}
function ServicesComponent_section_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 82)(1, "div", 22)(2, "div", 83)(3, "div")(4, "h2");
    \u0275\u0275text(5, "Professionals Near You");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7, "Click a pin to view their profile and ratings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a", 84)(9, "span", 9);
    \u0275\u0275text(10, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11, " Browse All Pros ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 85);
    \u0275\u0275element(13, "app-map-view", 86);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275property("markers", ctx_r2.prosMapMarkers)("loading", ctx_r2.prosLoading);
  }
}
var ServicesComponent = class _ServicesComponent {
  router;
  auth;
  serviceCategoryService;
  proBrowseService;
  browseServicesService;
  cdr;
  services = [];
  filteredServices = [];
  servicesLoading = false;
  searchQuery = "";
  selectedCategory = null;
  selectedCategoryId = null;
  sortOrder = "popular";
  skeletons = [1, 2, 3, 4, 5, 6];
  categories = [];
  categoriesLoading = true;
  prosMapMarkers = [];
  prosLoading = false;
  allProsMarkers = [];
  destroy$ = new Subject();
  search$ = new Subject();
  constructor(router, auth, serviceCategoryService, proBrowseService, browseServicesService, cdr) {
    this.router = router;
    this.auth = auth;
    this.serviceCategoryService = serviceCategoryService;
    this.proBrowseService = proBrowseService;
    this.browseServicesService = browseServicesService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadCategories();
    this.loadProsMap();
    this.loadServices();
    this.search$.pipe(debounceTime(450), distinctUntilChanged(), switchMap((query) => {
      this.servicesLoading = true;
      this.cdr.detectChanges();
      return this.browseServicesService.getServices({
        search: query || void 0,
        categoryId: this.selectedCategoryId || void 0
      }).pipe(takeUntil(this.destroy$));
    }), takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        this.services = result.items;
        this.applyClientSort();
        this.servicesLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.servicesLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCategories() {
    this.categoriesLoading = true;
    this.serviceCategoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.categoriesLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.categories = [];
        this.categoriesLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadServices() {
    this.servicesLoading = true;
    this.browseServicesService.getServices({
      categoryId: this.selectedCategoryId || void 0,
      search: this.searchQuery.trim() || void 0
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        this.services = result.items;
        this.applyClientSort();
        this.servicesLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.services = [];
        this.filteredServices = [];
        this.servicesLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadProsMap() {
    this.prosLoading = true;
    this.proBrowseService.browse().pipe(takeUntil(this.destroy$)).subscribe({
      next: (pros) => {
        this.allProsMarkers = pros.filter((p) => p.latitude != null && p.longitude != null).map((p) => ({
          id: p.id,
          lat: p.latitude,
          lng: p.longitude,
          title: p.businessName || p.proName,
          subtitle: [p.city, p.state].filter(Boolean).join(", "),
          type: "pro",
          radiusKm: p.serviceRadiusKm
        }));
        this.prosLoading = false;
        this.syncMapMarkers();
        this.cdr.detectChanges();
      },
      error: () => {
        this.prosLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  syncMapMarkers() {
    const proIds = new Set(this.filteredServices.map((s) => s.proId));
    this.prosMapMarkers = proIds.size > 0 ? this.allProsMarkers.filter((m) => proIds.has(m.id)) : this.allProsMarkers;
  }
  filterByCategory(categoryName) {
    if (this.selectedCategory === categoryName) {
      this.selectedCategory = null;
      this.selectedCategoryId = null;
    } else {
      this.selectedCategory = categoryName;
      const cat = this.categories.find((c) => c.name === categoryName);
      this.selectedCategoryId = cat ? cat.id : null;
    }
    this.loadServices();
  }
  onSearch() {
    this.search$.next(this.searchQuery);
  }
  sortBy(order) {
    this.sortOrder = order;
    this.applyClientSort();
  }
  applyClientSort() {
    let sorted = [...this.services];
    switch (this.sortOrder) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
    }
    this.filteredServices = sorted;
    this.syncMapMarkers();
  }
  getCategoryImage(name) {
    const key = name.toLowerCase().replace(/\s+/g, "").replace("support", "");
    return this.SERVICE_IMAGES[key] ?? "assets/images/services.png";
  }
  onImgError(event) {
    event.target.src = "assets/images/services.png";
  }
  openService(s) {
    this.router.navigate(["/services", s.id]);
  }
  bookService(s) {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["/auth/login"], { queryParams: { returnUrl: "/post-job" } });
    } else {
      const qp = {};
      if (s.serviceCategoryId)
        qp["categoryId"] = s.serviceCategoryId;
      this.router.navigate(["/post-job"], { queryParams: qp });
    }
  }
  navigateTo(path) {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(["/auth/login"], { queryParams: { returnUrl: path } });
    } else {
      this.router.navigate([path]);
    }
  }
  SERVICE_IMAGES = {
    cleaning: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=600&q=80",
    plumbing: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?auto=format&fit=crop&w=600&q=80",
    electrical: "https://images.unsplash.com/photo-1621905252472-943afaa20e20?auto=format&fit=crop&w=600&q=80",
    painting: "https://images.unsplash.com/photo-1562259929-b4e1fd3aef09?auto=format&fit=crop&w=600&q=80",
    landscaping: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=600&q=80",
    carpentry: "https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&fit=crop&w=600&q=80",
    handyman: "https://images.unsplash.com/photo-1581244277943-fe4a9c777189?auto=format&fit=crop&w=600&q=80",
    tutoring: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    it: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80"
  };
  static \u0275fac = function ServicesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(ProBrowseService), \u0275\u0275directiveInject(BrowseServicesService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 126, vars: 18, consts: [[1, "services-wrapper"], [1, "hero"], [1, "hero-body"], [1, "hero-left"], [1, "hero-tag"], [1, "tag-dot"], [1, "accent"], [1, "hero-sub"], [1, "hero-search"], [1, "material-icons"], ["placeholder", "Search services, skills, or business name...", "aria-label", "Search services", 3, "ngModelChange", "keyup.enter", "ngModel"], [3, "click"], [1, "hero-actions"], [1, "hero-btn-primary", 3, "click"], [1, "hero-btn-ghost", 3, "click"], [1, "hero-right"], [1, "hero-trust"], [1, "trust-card"], [1, "trust-icon"], [1, "trust-label"], ["class", "hero-cat-pills", 4, "ngIf"], [1, "categories-section"], [1, "section-inner"], [1, "section-header"], ["class", "clear-filter", 3, "click", 4, "ngIf"], ["class", "categories-grid", 4, "ngIf"], [1, "services-section"], [1, "services-header"], [1, "services-title"], [1, "count-badge"], [1, "sort-row"], ["class", "services-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "how-it-works"], [1, "steps"], [1, "step"], [1, "step-num"], [1, "step-icon"], [1, "step-arrow"], ["class", "map-section", 4, "ngIf"], [1, "cta-section"], [1, "cta-inner"], [1, "cta-btn", 3, "click"], [1, "hero-cat-pills"], ["class", "hero-cat-pill", 3, "click", 4, "ngFor", "ngForOf"], [1, "hero-cat-pill", 3, "click"], [1, "clear-filter", 3, "click"], [1, "categories-grid"], ["class", "cat-skeleton", 4, "ngFor", "ngForOf"], [1, "cat-skeleton"], ["class", "cat-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "cat-card", 3, "click"], [1, "cat-icon"], [1, "cat-name"], [1, "cat-count"], [1, "services-grid"], ["class", "service-skeleton", 4, "ngFor", "ngForOf"], [1, "service-skeleton"], [1, "skel-img"], [1, "skel-body"], [1, "skel-line", "wide"], [1, "skel-line", "med"], [1, "skel-line", "short"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], [1, "card-image"], ["loading", "lazy", 3, "error", "src", "alt"], [1, "category-tag"], [1, "card-body"], [1, "pro-info"], [1, "pro-name"], ["class", "pro-location", 4, "ngIf"], [1, "card-footer"], ["class", "price", 4, "ngIf"], [1, "card-actions"], [1, "btn-outline", 3, "click"], [1, "btn-primary", 3, "click"], [1, "pro-location"], [1, "price"], [1, "empty-state"], [1, "empty-icon"], ["class", "btn-primary", 3, "click", 4, "ngIf"], [1, "map-section"], [1, "map-header"], ["routerLink", "/find-a-pro", 1, "find-pro-btn"], [1, "map-body"], [2, "display", "block", "height", "440px", 3, "markers", "loading"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "span", 5);
      \u0275\u0275text(6, " Verified professionals \xB7 Secure payments ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "h1");
      \u0275\u0275text(8, "Hire the Right");
      \u0275\u0275element(9, "br");
      \u0275\u0275text(10, "Professional ");
      \u0275\u0275elementStart(11, "span", 6);
      \u0275\u0275text(12, "Today");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(13, "p", 7);
      \u0275\u0275text(14, "Browse services, compare prices, and book trusted pros \u2014 all in one place.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "div", 8)(16, "span", 9);
      \u0275\u0275text(17, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 10);
      \u0275\u0275twoWayListener("ngModelChange", function ServicesComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ServicesComponent_Template_input_keyup_enter_18_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "button", 11);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_19_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275text(20, "Search");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 12)(22, "button", 13);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_22_listener() {
        return ctx.navigateTo("/post-job");
      });
      \u0275\u0275elementStart(23, "span", 9);
      \u0275\u0275text(24, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(25, " Post a Job ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "button", 14);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_26_listener() {
        return ctx.navigateTo("/find-a-pro");
      });
      \u0275\u0275elementStart(27, "span", 9);
      \u0275\u0275text(28, "engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275text(29, " Browse Pros ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "div", 15)(31, "div", 16)(32, "div", 17)(33, "span", 18);
      \u0275\u0275text(34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "span", 19);
      \u0275\u0275text(36, "Categories");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 17)(38, "span", 18);
      \u0275\u0275text(39, "\u26A1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "span", 19);
      \u0275\u0275text(41, "Fast Responses");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(42, "div", 17)(43, "span", 18);
      \u0275\u0275text(44, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "span", 19);
      \u0275\u0275text(46, "Secure Payments");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 17)(48, "span", 18);
      \u0275\u0275text(49, "\u2705");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 19);
      \u0275\u0275text(51, "Verified Pros");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(52, ServicesComponent_div_52_Template, 2, 1, "div", 20);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(53, "section", 21)(54, "div", 22)(55, "div", 23)(56, "h2");
      \u0275\u0275text(57, "What do you need help with?");
      \u0275\u0275elementEnd();
      \u0275\u0275template(58, ServicesComponent_button_58_Template, 2, 0, "button", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275template(59, ServicesComponent_div_59_Template, 2, 1, "div", 25)(60, ServicesComponent_div_60_Template, 2, 1, "div", 25);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(61, "section", 26)(62, "div", 22)(63, "div", 27)(64, "div", 28)(65, "h2");
      \u0275\u0275text(66);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "span", 29);
      \u0275\u0275text(68);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(69, "div", 30)(70, "button", 11);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_70_listener() {
        return ctx.sortBy("popular");
      });
      \u0275\u0275text(71, "Popular");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "button", 11);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_72_listener() {
        return ctx.sortBy("price-low");
      });
      \u0275\u0275text(73, "Price \u2191");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(74, "button", 11);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_74_listener() {
        return ctx.sortBy("price-high");
      });
      \u0275\u0275text(75, "Price \u2193");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(76, ServicesComponent_div_76_Template, 2, 1, "div", 31)(77, ServicesComponent_div_77_Template, 2, 1, "div", 31)(78, ServicesComponent_div_78_Template, 8, 1, "div", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(79, "section", 33)(80, "div", 22)(81, "h2");
      \u0275\u0275text(82, "How yProHub Works");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(83, "div", 34)(84, "div", 35)(85, "div", 36);
      \u0275\u0275text(86, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(87, "div", 37);
      \u0275\u0275text(88, "\u{1F4CB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(89, "h3");
      \u0275\u0275text(90, "Post a Job");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92, "Describe what you need in under 2 minutes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 38);
      \u0275\u0275text(94, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 35)(96, "div", 36);
      \u0275\u0275text(97, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(98, "div", 37);
      \u0275\u0275text(99, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "h3");
      \u0275\u0275text(101, "Receive Bids");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p");
      \u0275\u0275text(103, "Verified professionals send competitive quotes.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 38);
      \u0275\u0275text(105, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "div", 35)(107, "div", 36);
      \u0275\u0275text(108, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 37);
      \u0275\u0275text(110, "\u2705");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(111, "h3");
      \u0275\u0275text(112, "Hire & Pay Securely");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "p");
      \u0275\u0275text(114, "Choose your pro and pay through our secure platform.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275template(115, ServicesComponent_section_115_Template, 14, 2, "section", 39);
      \u0275\u0275elementStart(116, "section", 40)(117, "div", 41)(118, "h2");
      \u0275\u0275text(119, "Can't find what you need?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(120, "p");
      \u0275\u0275text(121, "Post a job and let professionals come to you with competitive bids");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "button", 42);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_122_listener() {
        return ctx.navigateTo("/post-job");
      });
      \u0275\u0275elementStart(123, "span", 9);
      \u0275\u0275text(124, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(125, " Post a Job ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(18);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("", ctx.categories.length || "20", "+");
      \u0275\u0275advance(18);
      \u0275\u0275property("ngIf", !ctx.categoriesLoading && ctx.categories.length > 0);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.selectedCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.categoriesLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.categoriesLoading);
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(ctx.selectedCategory ? ctx.selectedCategory : "All Services");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("", ctx.filteredServices.length, " services");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.sortOrder === "popular");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.sortOrder === "price-low");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.sortOrder === "price-high");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.servicesLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.servicesLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.servicesLoading && ctx.filteredServices.length === 0);
      \u0275\u0275advance(37);
      \u0275\u0275property("ngIf", !ctx.prosLoading && ctx.prosMapMarkers.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, RouterLink, MapViewComponent, DecimalPipe], styles: ['\n\n.services-wrapper[_ngcontent-%COMP%] {\n  color: #1f2937;\n  background: #fff;\n}\n.section-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 60%,\n      #4a1d7a 100%);\n  color: #fff;\n  padding: 64px 20px 56px;\n  position: relative;\n  overflow: hidden;\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 360px;\n  height: 360px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -60px;\n  left: 10%;\n  width: 240px;\n  height: 240px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-body[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 48px;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 900px) {\n  .hero-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n.hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.hero-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  opacity: 0.85;\n  letter-spacing: 0.2px;\n}\n.hero-tag[_ngcontent-%COMP%]   .tag-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #4ade80;\n  flex-shrink: 0;\n  box-shadow: 0 0 8px rgba(74, 222, 128, 0.7);\n}\n.hero-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 52px;\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -1px;\n}\n.hero-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  font-style: italic;\n  background:\n    linear-gradient(\n      90deg,\n      #fbbf24,\n      #f97316);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  opacity: 0.85;\n  line-height: 1.6;\n  max-width: 480px;\n}\n.hero-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);\n  max-width: 560px;\n}\n.hero-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6b7280;\n  padding: 0 12px 0 16px;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 15px 8px;\n  font-size: 15px;\n  font-family: inherit;\n  color: #1f2937;\n  min-width: 0;\n}\n.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: 0;\n  padding: 0 24px;\n  height: 54px;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: filter 0.2s;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.12);\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.hero-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #fff;\n  color: #667eea;\n  border: none;\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hero-btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.hero-btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.hero-btn-ghost[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hero-btn-ghost[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.hero-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.hero-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .hero-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-trust[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.trust-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 14px;\n  padding: 16px 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: background 0.2s;\n}\n.trust-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.trust-card[_ngcontent-%COMP%]   .trust-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.trust-card[_ngcontent-%COMP%]   .trust-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.85;\n  font-weight: 500;\n}\n.hero-cat-pills[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.hero-cat-pill[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.13);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.hero-cat-pill[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.45);\n}\n.categories-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: #f9fafb;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n}\n.clear-filter[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-family: inherit;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.clear-filter[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #1f2937;\n}\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 14px;\n}\n.cat-skeleton[_ngcontent-%COMP%] {\n  height: 90px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n  border-radius: 12px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 18px 8px 14px;\n  background: #fff;\n  border: 2px solid transparent;\n  border-radius: 14px;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.22s;\n}\n.cat-card[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.14);\n  transform: translateY(-3px);\n}\n.cat-card.active[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.07),\n      rgba(118, 75, 162, 0.07));\n  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.18);\n}\n.cat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 1;\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  text-align: center;\n  line-height: 1.3;\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n.services-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: #fff;\n}\n.services-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 36px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.services-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.services-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 700;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.sort-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.sort-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.sort-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.sort-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: #667eea;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  transition: all 0.25s;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 14px 36px rgba(102, 126, 234, 0.16);\n  border-color: #667eea;\n}\n.card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  background: #f3f4f6;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.service-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n.category-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 11px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 18px 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.55;\n  flex: 1;\n}\n.pro-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 8px 0 4px;\n  border-top: 1px solid #e5e7eb;\n}\n.pro-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.pro-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.pro-location[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.service-skeleton[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n}\n.skel-img[_ngcontent-%COMP%] {\n  height: 180px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.skel-body[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skel-line[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.skel-line.wide[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.skel-line.med[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.skel-line.short[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  gap: 8px;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #667eea;\n  white-space: nowrap;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 0;\n  white-space: nowrap;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 14px rgba(102, 126, 234, 0.3);\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 20px;\n}\n.how-it-works[_ngcontent-%COMP%] {\n  padding: 64px 20px;\n  background: #f9fafb;\n  text-align: center;\n}\n.how-it-works[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 48px;\n}\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  max-width: 220px;\n  flex: 1;\n  min-width: 160px;\n}\n.step[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.step[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n}\n.step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.step-arrow[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #667eea;\n  padding: 0 8px;\n  margin-top: 10px;\n  flex-shrink: 0;\n}\n.map-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: #fff;\n}\n.map-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.map-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 26px;\n  font-weight: 700;\n}\n.map-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n}\n.find-pro-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: filter 0.2s;\n  flex-shrink: 0;\n}\n.find-pro-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.find-pro-btn[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.1);\n}\n.map-body[_ngcontent-%COMP%] {\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 72px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  text-align: center;\n  color: #fff;\n}\n.cta-inner[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 34px;\n  font-weight: 800;\n}\n.cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  font-size: 16px;\n  opacity: 0.9;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  color: #667eea;\n  border: 0;\n  border-radius: 10px;\n  padding: 14px 32px;\n  font-size: 15px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cta-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 44px 16px 36px;\n  }\n  .hero-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n    letter-spacing: -0.5px;\n  }\n  .hero-sub[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .categories-section[_ngcontent-%COMP%], \n   .services-section[_ngcontent-%COMP%], \n   .how-it-works[_ngcontent-%COMP%], \n   .map-section[_ngcontent-%COMP%] {\n    padding: 44px 16px;\n  }\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  }\n  .services-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .steps[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .step-arrow[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    margin: 0;\n  }\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 52px 16px;\n  }\n  .cta-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=services.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", standalone: true, imports: [CommonModule, FormsModule, RouterModule, MapViewComponent], template: `<div class="services-wrapper">

  <!-- Hero -->
  <section class="hero">
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-tag">
          <span class="tag-dot"></span>
          Verified professionals \xB7 Secure payments
        </div>
        <h1>Hire the Right<br>Professional <span class="accent">Today</span></h1>
        <p class="hero-sub">Browse services, compare prices, and book trusted pros \u2014 all in one place.</p>

        <div class="hero-search">
          <span class="material-icons">search</span>
          <input
            [(ngModel)]="searchQuery"
            (keyup.enter)="onSearch()"
            placeholder="Search services, skills, or business name..."
            aria-label="Search services" />
          <button (click)="onSearch()">Search</button>
        </div>

        <div class="hero-actions">
          <button class="hero-btn-primary" (click)="navigateTo('/post-job')">
            <span class="material-icons">add_circle</span> Post a Job
          </button>
          <button class="hero-btn-ghost" (click)="navigateTo('/find-a-pro')">
            <span class="material-icons">engineering</span> Browse Pros
          </button>
        </div>
      </div>

      <div class="hero-right">
        <div class="hero-trust">
          <div class="trust-card">
            <span class="trust-icon">{{ categories.length || '20' }}+</span>
            <span class="trust-label">Categories</span>
          </div>
          <div class="trust-card">
            <span class="trust-icon">\u26A1</span>
            <span class="trust-label">Fast Responses</span>
          </div>
          <div class="trust-card">
            <span class="trust-icon">\u{1F512}</span>
            <span class="trust-label">Secure Payments</span>
          </div>
          <div class="trust-card">
            <span class="trust-icon">\u2705</span>
            <span class="trust-label">Verified Pros</span>
          </div>
        </div>
        <div class="hero-cat-pills" *ngIf="!categoriesLoading && categories.length > 0">
          <span *ngFor="let cat of categories.slice(0, 6)" class="hero-cat-pill" (click)="filterByCategory(cat.name)">
            {{ cat.icon }} {{ cat.name }}
          </span>
        </div>
      </div>
    </div>
  </section>

  <!-- Category Filter -->
  <section class="categories-section">
    <div class="section-inner">
      <div class="section-header">
        <h2>What do you need help with?</h2>
        <button *ngIf="selectedCategory" class="clear-filter" (click)="filterByCategory(selectedCategory!)">
          Clear filter &times;
        </button>
      </div>

      <!-- Skeleton -->
      <div class="categories-grid" *ngIf="categoriesLoading">
        <div class="cat-skeleton" *ngFor="let i of skeletons"></div>
      </div>

      <!-- Category cards -->
      <div class="categories-grid" *ngIf="!categoriesLoading">
        <button
          *ngFor="let cat of categories"
          class="cat-card"
          [class.active]="selectedCategory === cat.name"
          (click)="filterByCategory(cat.name)">
          <div class="cat-icon">{{ cat.icon }}</div>
          <span class="cat-name">{{ cat.name }}</span>
          <span class="cat-count">{{ cat.serviceCount }} pros</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Services List -->
  <section class="services-section">
    <div class="section-inner">
      <div class="services-header">
        <div class="services-title">
          <h2>{{ selectedCategory ? selectedCategory : 'All Services' }}</h2>
          <span class="count-badge">{{ filteredServices.length }} services</span>
        </div>
        <div class="sort-row">
          <button (click)="sortBy('popular')" [class.active]="sortOrder === 'popular'">Popular</button>
          <button (click)="sortBy('price-low')" [class.active]="sortOrder === 'price-low'">Price \u2191</button>
          <button (click)="sortBy('price-high')" [class.active]="sortOrder === 'price-high'">Price \u2193</button>
        </div>
      </div>

      <!-- Services skeleton -->
      <div class="services-grid" *ngIf="servicesLoading">
        <div class="service-skeleton" *ngFor="let i of skeletons">
          <div class="skel-img"></div>
          <div class="skel-body">
            <div class="skel-line wide"></div>
            <div class="skel-line med"></div>
            <div class="skel-line short"></div>
          </div>
        </div>
      </div>

      <div class="services-grid" *ngIf="!servicesLoading">
        <article class="service-card" *ngFor="let s of filteredServices">
          <div class="card-image">
            <img [src]="s.imageUrl || getCategoryImage(s.categoryName || '')" [alt]="s.name" (error)="onImgError($event)" loading="lazy" />
            <span class="category-tag">{{ s.categoryName }}</span>
          </div>
          <div class="card-body">
            <h3>{{ s.name }}</h3>
            <p>{{ s.description }}</p>
            <div class="pro-info">
              <span class="pro-name">{{ s.businessName || s.proName }}</span>
              <span class="pro-location" *ngIf="s.city">
                <span class="material-icons">place</span>{{ s.city }}{{ s.state ? ', ' + s.state : '' }}
              </span>
            </div>
            <div class="card-footer">
              <div class="price" *ngIf="s.price">from \u20B9{{ s.price | number }}</div>
              <div class="card-actions">
                <button class="btn-outline" (click)="openService(s); $event.stopPropagation()">Details</button>
                <button class="btn-primary" (click)="bookService(s); $event.stopPropagation()">Book Now</button>
              </div>
            </div>
          </div>
        </article>
      </div>

      <div class="empty-state" *ngIf="!servicesLoading && filteredServices.length === 0">
        <div class="empty-icon">\u{1F50D}</div>
        <h3>No services found</h3>
        <p>Try a different search or clear the category filter</p>
        <button *ngIf="selectedCategory" class="btn-primary" (click)="filterByCategory(selectedCategory!)">
          Clear Filter
        </button>
      </div>
    </div>
  </section>

  <!-- How it Works -->
  <section class="how-it-works">
    <div class="section-inner">
      <h2>How yProHub Works</h2>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-icon">\u{1F4CB}</div>
          <h3>Post a Job</h3>
          <p>Describe what you need in under 2 minutes.</p>
        </div>
        <div class="step-arrow">\u2192</div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-icon">\u{1F4AC}</div>
          <h3>Receive Bids</h3>
          <p>Verified professionals send competitive quotes.</p>
        </div>
        <div class="step-arrow">\u2192</div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-icon">\u2705</div>
          <h3>Hire & Pay Securely</h3>
          <p>Choose your pro and pay through our secure platform.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Pros Map -->
  <section class="map-section" *ngIf="!prosLoading && prosMapMarkers.length > 0">
    <div class="section-inner">
      <div class="map-header">
        <div>
          <h2>Professionals Near You</h2>
          <p>Click a pin to view their profile and ratings</p>
        </div>
        <a routerLink="/find-a-pro" class="find-pro-btn">
          <span class="material-icons">engineering</span> Browse All Pros
        </a>
      </div>
      <div class="map-body">
        <app-map-view
          [markers]="prosMapMarkers"
          [loading]="prosLoading"
          style="display:block;height:440px">
        </app-map-view>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-inner">
      <h2>Can't find what you need?</h2>
      <p>Post a job and let professionals come to you with competitive bids</p>
      <button class="cta-btn" (click)="navigateTo('/post-job')">
        <span class="material-icons">add_circle</span> Post a Job
      </button>
    </div>
  </section>

</div>
`, styles: ['/* src/app/features/services/services/services.scss */\n.services-wrapper {\n  color: #1f2937;\n  background: #fff;\n}\n.section-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 60%,\n      #4a1d7a 100%);\n  color: #fff;\n  padding: 64px 20px 56px;\n  position: relative;\n  overflow: hidden;\n}\n.hero::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 360px;\n  height: 360px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero::after {\n  content: "";\n  position: absolute;\n  bottom: -60px;\n  left: 10%;\n  width: 240px;\n  height: 240px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-body {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 48px;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 900px) {\n  .hero-body {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n.hero-left {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.hero-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  opacity: 0.85;\n  letter-spacing: 0.2px;\n}\n.hero-tag .tag-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #4ade80;\n  flex-shrink: 0;\n  box-shadow: 0 0 8px rgba(74, 222, 128, 0.7);\n}\n.hero-left h1 {\n  margin: 0;\n  font-size: 52px;\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -1px;\n}\n.hero-left h1 .accent {\n  font-style: italic;\n  background:\n    linear-gradient(\n      90deg,\n      #fbbf24,\n      #f97316);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub {\n  margin: 0;\n  font-size: 17px;\n  opacity: 0.85;\n  line-height: 1.6;\n  max-width: 480px;\n}\n.hero-search {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);\n  max-width: 560px;\n}\n.hero-search .material-icons {\n  color: #6b7280;\n  padding: 0 12px 0 16px;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.hero-search input {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 15px 8px;\n  font-size: 15px;\n  font-family: inherit;\n  color: #1f2937;\n  min-width: 0;\n}\n.hero-search input::placeholder {\n  color: #9ca3af;\n}\n.hero-search button {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: 0;\n  padding: 0 24px;\n  height: 54px;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: filter 0.2s;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.hero-search button:hover {\n  filter: brightness(1.12);\n}\n.hero-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.hero-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #fff;\n  color: #667eea;\n  border: none;\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hero-btn-primary .material-icons {\n  font-size: 18px;\n}\n.hero-btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.hero-btn-ghost {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hero-btn-ghost .material-icons {\n  font-size: 18px;\n}\n.hero-btn-ghost:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.hero-right {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .hero-right {\n    display: none;\n  }\n}\n.hero-trust {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.trust-card {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 14px;\n  padding: 16px 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: background 0.2s;\n}\n.trust-card:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.trust-card .trust-icon {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.trust-card .trust-label {\n  font-size: 12px;\n  opacity: 0.85;\n  font-weight: 500;\n}\n.hero-cat-pills {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.hero-cat-pill {\n  background: rgba(255, 255, 255, 0.13);\n  border: 1px solid rgba(255, 255, 255, 0.25);\n  border-radius: 20px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.hero-cat-pill:hover {\n  background: rgba(255, 255, 255, 0.22);\n  border-color: rgba(255, 255, 255, 0.45);\n}\n.categories-section {\n  padding: 60px 20px;\n  background: #f9fafb;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.section-header h2 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n}\n.clear-filter {\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-family: inherit;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.clear-filter:hover {\n  background: #fff;\n  color: #1f2937;\n}\n.categories-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 14px;\n}\n.cat-skeleton {\n  height: 90px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: 12px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 18px 8px 14px;\n  background: #fff;\n  border: 2px solid transparent;\n  border-radius: 14px;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.22s;\n}\n.cat-card:hover {\n  border-color: #667eea;\n  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.14);\n  transform: translateY(-3px);\n}\n.cat-card.active {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.07),\n      rgba(118, 75, 162, 0.07));\n  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.18);\n}\n.cat-icon {\n  font-size: 26px;\n  line-height: 1;\n}\n.cat-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  text-align: center;\n  line-height: 1.3;\n}\n.cat-count {\n  font-size: 11px;\n  color: #6b7280;\n}\n.services-section {\n  padding: 60px 20px;\n  background: #fff;\n}\n.services-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 36px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.services-title {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.services-title h2 {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 700;\n}\n.count-badge {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.sort-row {\n  display: flex;\n  gap: 8px;\n}\n.sort-row button {\n  padding: 7px 16px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.sort-row button:hover {\n  background: #e5e7eb;\n}\n.sort-row button.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: #667eea;\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.service-card {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  transition: all 0.25s;\n}\n.service-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 14px 36px rgba(102, 126, 234, 0.16);\n  border-color: #667eea;\n}\n.card-image {\n  position: relative;\n  height: 180px;\n  background: #f3f4f6;\n  overflow: hidden;\n}\n.card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.service-card:hover .card-image img {\n  transform: scale(1.05);\n}\n.featured-badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n.category-tag {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 11px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n.card-body {\n  padding: 18px 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.card-body h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.card-body p {\n  margin: 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.55;\n  flex: 1;\n}\n.pro-info {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 8px 0 4px;\n  border-top: 1px solid #e5e7eb;\n}\n.pro-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.pro-location {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.pro-location .material-icons {\n  font-size: 13px;\n}\n.service-skeleton {\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n}\n.skel-img {\n  height: 180px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n.skel-body {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skel-line {\n  height: 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n.skel-line.wide {\n  width: 80%;\n}\n.skel-line.med {\n  width: 60%;\n}\n.skel-line.short {\n  width: 40%;\n}\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  gap: 8px;\n}\n.price {\n  font-size: 16px;\n  font-weight: 700;\n  color: #667eea;\n  white-space: nowrap;\n}\n.card-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline,\n.btn-primary {\n  padding: 8px 14px;\n  border-radius: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 0;\n  white-space: nowrap;\n}\n.btn-outline {\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n}\n.btn-outline:hover {\n  background: #e5e7eb;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 14px rgba(102, 126, 234, 0.3);\n}\n.empty-state {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state .empty-icon {\n  font-size: 56px;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 0 8px;\n}\n.empty-state p {\n  color: #6b7280;\n  margin: 0 0 20px;\n}\n.how-it-works {\n  padding: 64px 20px;\n  background: #f9fafb;\n  text-align: center;\n}\n.how-it-works h2 {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 48px;\n}\n.steps {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  max-width: 220px;\n  flex: 1;\n  min-width: 160px;\n}\n.step .step-num {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.step .step-icon {\n  font-size: 32px;\n}\n.step h3 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n}\n.step p {\n  margin: 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.step-arrow {\n  font-size: 28px;\n  color: #667eea;\n  padding: 0 8px;\n  margin-top: 10px;\n  flex-shrink: 0;\n}\n.map-section {\n  padding: 60px 20px;\n  background: #fff;\n}\n.map-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 24px;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.map-header h2 {\n  margin: 0 0 4px;\n  font-size: 26px;\n  font-weight: 700;\n}\n.map-header p {\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n}\n.find-pro-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-radius: 8px;\n  padding: 10px 20px;\n  font-size: 14px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n  transition: filter 0.2s;\n  flex-shrink: 0;\n}\n.find-pro-btn .material-icons {\n  font-size: 18px;\n}\n.find-pro-btn:hover {\n  filter: brightness(1.1);\n}\n.map-body {\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);\n}\n.cta-section {\n  padding: 72px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  text-align: center;\n  color: #fff;\n}\n.cta-inner {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-inner h2 {\n  margin: 0 0 12px;\n  font-size: 34px;\n  font-weight: 800;\n}\n.cta-inner p {\n  margin: 0 0 28px;\n  font-size: 16px;\n  opacity: 0.9;\n}\n.cta-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  color: #667eea;\n  border: 0;\n  border-radius: 10px;\n  padding: 14px 32px;\n  font-size: 15px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cta-btn .material-icons {\n  font-size: 20px;\n}\n.cta-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .hero {\n    padding: 44px 16px 36px;\n  }\n  .hero-left h1 {\n    font-size: 34px;\n    letter-spacing: -0.5px;\n  }\n  .hero-sub {\n    font-size: 15px;\n  }\n  .hero-search button {\n    padding: 0 16px;\n  }\n  .categories-section,\n  .services-section,\n  .how-it-works,\n  .map-section {\n    padding: 44px 16px;\n  }\n  .categories-grid {\n    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  }\n  .services-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .services-grid {\n    grid-template-columns: 1fr;\n  }\n  .steps {\n    flex-direction: column;\n    align-items: center;\n  }\n  .step-arrow {\n    transform: rotate(90deg);\n    margin: 0;\n  }\n  .cta-section {\n    padding: 52px 16px;\n  }\n  .cta-inner h2 {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=services.css.map */\n'] }]
  }], () => [{ type: Router }, { type: Auth }, { type: ServiceCategoryService }, { type: ProBrowseService }, { type: BrowseServicesService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/features/services/services/services.ts", lineNumber: 23 });
})();

// src/app/features/services/services-routing-module.ts
var routes = [
  { path: "", component: ServicesComponent },
  {
    path: ":id",
    loadComponent: () => import("./chunk-4NQ2ZCKL.js").then((m) => m.ServiceDetailComponent)
  }
];
var ServicesRoutingModule = class _ServicesRoutingModule {
  static \u0275fac = function ServicesRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ServicesRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/services/services-module.ts
var ServicesModule = class _ServicesModule {
  static \u0275fac = function ServicesModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServicesModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ServicesModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ServicesRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ServicesRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  ServicesModule
};
//# sourceMappingURL=chunk-3VGRGBVS.js.map

