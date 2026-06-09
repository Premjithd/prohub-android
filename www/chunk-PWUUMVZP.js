import {
  SettingsService
} from "./chunk-MRJYQQOO.js";
import {
  ServiceCategoryService
} from "./chunk-YRPSZ7MM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-A6TK5TPK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ZGXDPMMN.js";
import {
  BrowseServicesService
} from "./chunk-CMDBVZW6.js";
import {
  Auth
} from "./chunk-6CNFBV5T.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterModule
} from "./chunk-VRKQDNIA.js";
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
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
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
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/services/services/services.ts
function ServicesComponent_button_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ServicesComponent_button_71_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.filterByCategory(ctx_r1.selectedCategory));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SERVICES.CLEAR_FILTER"), " \xD7 ");
  }
}
function ServicesComponent_div_72_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 40);
  }
}
function ServicesComponent_div_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ServicesComponent_div_72_div_1_Template, 1, 0, "div", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skeletons);
  }
}
function ServicesComponent_div_73_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function ServicesComponent_div_73_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadCategories());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "SERVICES.CAT_ERROR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"));
  }
}
function ServicesComponent_div_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "\u{1F4C2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SERVICES.CAT_NO_CATEGORIES"));
  }
}
function ServicesComponent_div_75_button_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", cat_r5.serviceCount, " pros");
  }
}
function ServicesComponent_div_75_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ServicesComponent_div_75_button_1_Template_button_click_0_listener() {
      const cat_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.filterByCategory(cat_r5.name));
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ServicesComponent_div_75_button_1_span_5_Template, 2, 1, "span", 48);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r1.selectedCategory === cat_r5.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showProCount && cat_r5.serviceCount > 0);
  }
}
function ServicesComponent_div_75_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275template(1, ServicesComponent_div_75_button_1_Template, 6, 5, "button", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function ServicesComponent_section_76_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275element(1, "div", 60);
    \u0275\u0275elementStart(2, "div", 61);
    \u0275\u0275element(3, "div", 62)(4, "div", 63)(5, "div", 64);
    \u0275\u0275elementEnd()();
  }
}
function ServicesComponent_section_76_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, ServicesComponent_section_76_div_21_div_1_Template, 6, 0, "div", 58);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.skeletons);
  }
}
function ServicesComponent_section_76_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41)(1, "span", 9);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function ServicesComponent_section_76_div_22_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadServices());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "SERVICES.SVC_ERROR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"));
  }
}
function ServicesComponent_section_76_div_23_article_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 79)(1, "span", 9);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", s_r9.city, "", s_r9.state ? ", " + s_r9.state : "", " ");
  }
}
function ServicesComponent_section_76_div_23_article_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("from \u20B9", \u0275\u0275pipeBind1(2, 1, s_r9.price));
  }
}
function ServicesComponent_section_76_div_23_article_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 66)(1, "div", 67)(2, "img", 68);
    \u0275\u0275listener("error", function ServicesComponent_section_76_div_23_article_1_Template_img_error_2_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onImgError($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 69);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 70)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 71)(11, "span", 72);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, ServicesComponent_section_76_div_23_article_1_span_13_Template, 4, 2, "span", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 74);
    \u0275\u0275template(15, ServicesComponent_section_76_div_23_article_1_div_15_Template, 3, 3, "div", 75);
    \u0275\u0275elementStart(16, "div", 76)(17, "button", 77);
    \u0275\u0275listener("click", function ServicesComponent_section_76_div_23_article_1_Template_button_click_17_listener($event) {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.openService(s_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 78);
    \u0275\u0275listener("click", function ServicesComponent_section_76_div_23_article_1_Template_button_click_20_listener($event) {
      const s_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      ctx_r1.bookService(s_r9);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const s_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("src", s_r9.imageUrl || ctx_r1.getCategoryImage(s_r9.categoryName || ""), \u0275\u0275sanitizeUrl)("alt", s_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.categoryName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r9.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(s_r9.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(s_r9.businessName || s_r9.proName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", s_r9.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", s_r9.price);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 10, "SERVICES.DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 12, "SERVICES.BOOK_NOW"));
  }
}
function ServicesComponent_section_76_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57);
    \u0275\u0275template(1, ServicesComponent_section_76_div_23_article_1_Template, 23, 14, "article", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.filteredServices);
  }
}
function ServicesComponent_section_76_div_24_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function ServicesComponent_section_76_div_24_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.filterByCategory(ctx_r1.selectedCategory));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SERVICES.CLEAR_FILTER_BTN"), " ");
  }
}
function ServicesComponent_section_76_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 43);
    \u0275\u0275text(2, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ServicesComponent_section_76_div_24_button_9_Template, 3, 3, "button", 82);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "SERVICES.NO_SERVICES_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "SERVICES.NO_SERVICES_SUB"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedCategory);
  }
}
function ServicesComponent_section_76_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 50)(1, "div", 21);
    \u0275\u0275elementContainerStart(2);
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 52)(5, "h2");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 53);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 54)(12, "button", 11);
    \u0275\u0275listener("click", function ServicesComponent_section_76_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("popular"));
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 11);
    \u0275\u0275listener("click", function ServicesComponent_section_76_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("price-low"));
    });
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 11);
    \u0275\u0275listener("click", function ServicesComponent_section_76_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sortBy("price-high"));
    });
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(21, ServicesComponent_section_76_div_21_Template, 2, 1, "div", 55)(22, ServicesComponent_section_76_div_22_Template, 9, 6, "div", 25)(23, ServicesComponent_section_76_div_23_Template, 2, 1, "div", 55)(24, ServicesComponent_section_76_div_24_Template, 10, 7, "div", 56);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.selectedCategory ? ctx_r1.selectedCategory : \u0275\u0275pipeBind1(7, 16, "SERVICES.SEARCH_RESULTS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r1.filteredServices.length, " ", \u0275\u0275pipeBind1(10, 18, "SERVICES.SERVICES_COUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r1.sortOrder === "popular");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 20, "SERVICES.SORT_POPULAR"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.sortOrder === "price-low");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 22, "SERVICES.SORT_PRICE_LOW"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r1.sortOrder === "price-high");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 24, "SERVICES.SORT_PRICE_HIGH"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.servicesLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.servicesLoading && ctx_r1.servicesError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.servicesLoading && !ctx_r1.servicesError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.servicesLoading && !ctx_r1.servicesError && ctx_r1.filteredServices.length === 0);
  }
}
var ServicesComponent = class _ServicesComponent {
  router;
  auth;
  serviceCategoryService;
  browseServicesService;
  settingsService;
  cdr;
  services = [];
  filteredServices = [];
  servicesLoading = false;
  searchQuery = "";
  selectedCategory = null;
  selectedCategoryId = null;
  sortOrder = "popular";
  showResults = false;
  skeletons = [1, 2, 3, 4, 5, 6];
  categories = [];
  categoriesLoading = true;
  categoriesError = false;
  servicesError = false;
  showProCount = false;
  destroy$ = new Subject();
  search$ = new Subject();
  constructor(router, auth, serviceCategoryService, browseServicesService, settingsService, cdr) {
    this.router = router;
    this.auth = auth;
    this.serviceCategoryService = serviceCategoryService;
    this.browseServicesService = browseServicesService;
    this.settingsService = settingsService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadCategories();
    this.settingsService.getSetting("show_pro_count_on_categories").pipe(takeUntil(this.destroy$)).subscribe((value) => {
      this.showProCount = value === "true";
      this.cdr.detectChanges();
    });
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
        this.servicesError = true;
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
    this.categoriesError = false;
    this.serviceCategoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.categoriesLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.categories = [];
        this.categoriesLoading = false;
        this.categoriesError = true;
        this.cdr.detectChanges();
      }
    });
  }
  loadServices() {
    this.servicesLoading = true;
    this.servicesError = false;
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
        this.servicesError = true;
        this.cdr.detectChanges();
      }
    });
  }
  filterByCategory(categoryName) {
    if (this.selectedCategory === categoryName) {
      this.selectedCategory = null;
      this.selectedCategoryId = null;
      if (!this.searchQuery.trim()) {
        this.showResults = false;
        this.filteredServices = [];
        return;
      }
    } else {
      this.selectedCategory = categoryName;
      const cat = this.categories.find((c) => c.name === categoryName);
      this.selectedCategoryId = cat ? cat.id : null;
    }
    this.showResults = true;
    this.loadServices();
  }
  onSearch() {
    if (!this.searchQuery.trim() && !this.selectedCategory) {
      this.showResults = false;
      this.filteredServices = [];
      return;
    }
    this.showResults = true;
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
    return new (__ngFactoryType__ || _ServicesComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(BrowseServicesService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServicesComponent, selectors: [["app-services"]], decls: 133, vars: 80, consts: [[1, "services-wrapper"], [1, "hero"], [1, "hero-body"], [1, "hero-left"], [1, "hero-tag"], [1, "tag-dot"], [1, "accent"], [1, "hero-sub"], [1, "hero-search"], [1, "material-icons"], ["aria-label", "Search services", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], [3, "click"], [1, "hero-actions"], [1, "hero-btn-primary", 3, "click"], [1, "hero-btn-ghost", 3, "click"], [1, "hero-right"], [1, "hero-trust"], [1, "trust-card"], [1, "trust-icon"], [1, "trust-label"], [1, "categories-section"], [1, "section-inner"], [1, "section-header"], ["class", "clear-filter", 3, "click", 4, "ngIf"], ["class", "categories-grid", 4, "ngIf"], ["class", "section-error", 4, "ngIf"], ["class", "section-empty", 4, "ngIf"], ["class", "services-section", 4, "ngIf"], [1, "how-it-works"], [1, "steps"], [1, "step"], [1, "step-num"], [1, "step-icon"], [1, "step-arrow"], [1, "cta-section"], [1, "cta-inner"], [1, "cta-btn", 3, "click"], [1, "clear-filter", 3, "click"], [1, "categories-grid"], ["class", "cat-skeleton", 4, "ngFor", "ngForOf"], [1, "cat-skeleton"], [1, "section-error"], [1, "section-empty"], [1, "empty-icon"], ["class", "cat-card", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "cat-card", 3, "click"], [1, "cat-icon"], [1, "cat-name"], ["class", "cat-count", 4, "ngIf"], [1, "cat-count"], [1, "services-section"], [1, "services-header"], [1, "services-title"], [1, "count-badge"], [1, "sort-row"], ["class", "services-grid", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "services-grid"], ["class", "service-skeleton", 4, "ngFor", "ngForOf"], [1, "service-skeleton"], [1, "skel-img"], [1, "skel-body"], [1, "skel-line", "wide"], [1, "skel-line", "med"], [1, "skel-line", "short"], ["class", "service-card", 4, "ngFor", "ngForOf"], [1, "service-card"], [1, "card-image"], ["loading", "lazy", 3, "error", "src", "alt"], [1, "category-tag"], [1, "card-body"], [1, "pro-info"], [1, "pro-name"], ["class", "pro-location", 4, "ngIf"], [1, "card-footer"], ["class", "price", 4, "ngIf"], [1, "card-actions"], [1, "btn-outline", 3, "click"], [1, "btn-primary", 3, "click"], [1, "pro-location"], [1, "price"], [1, "empty-state"], ["class", "btn-primary", 3, "click", 4, "ngIf"]], template: function ServicesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
      \u0275\u0275element(5, "span", 5);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "h1");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275element(11, "br");
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementStart(14, "span", 6);
      \u0275\u0275text(15);
      \u0275\u0275pipe(16, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "p", 7);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 8)(21, "span", 9);
      \u0275\u0275text(22, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "input", 10);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275twoWayListener("ngModelChange", function ServicesComponent_Template_input_ngModelChange_23_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275listener("keyup.enter", function ServicesComponent_Template_input_keyup_enter_23_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "button", 11);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_25_listener() {
        return ctx.onSearch();
      });
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 12)(29, "button", 13);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_29_listener() {
        return ctx.navigateTo("/post-job");
      });
      \u0275\u0275elementStart(30, "span", 9);
      \u0275\u0275text(31, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 14);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_34_listener() {
        return ctx.navigateTo("/find-a-pro");
      });
      \u0275\u0275elementStart(35, "span", 9);
      \u0275\u0275text(36, "engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275text(37);
      \u0275\u0275pipe(38, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(39, "div", 15)(40, "div", 16)(41, "div", 17)(42, "span", 18);
      \u0275\u0275text(43);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "span", 19);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 17)(48, "span", 18);
      \u0275\u0275text(49, "\u26A1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "span", 19);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(53, "div", 17)(54, "span", 18);
      \u0275\u0275text(55, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "span", 19);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 17)(60, "span", 18);
      \u0275\u0275text(61, "\u2705");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "span", 19);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(65, "section", 20)(66, "div", 21)(67, "div", 22)(68, "h2");
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(71, ServicesComponent_button_71_Template, 3, 3, "button", 23);
      \u0275\u0275elementEnd();
      \u0275\u0275template(72, ServicesComponent_div_72_Template, 2, 1, "div", 24)(73, ServicesComponent_div_73_Template, 9, 6, "div", 25)(74, ServicesComponent_div_74_Template, 6, 3, "div", 26)(75, ServicesComponent_div_75_Template, 2, 1, "div", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(76, ServicesComponent_section_76_Template, 25, 26, "section", 27);
      \u0275\u0275elementStart(77, "section", 28)(78, "div", 21)(79, "h2");
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "div", 29)(83, "div", 30)(84, "div", 31);
      \u0275\u0275text(85, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "div", 32);
      \u0275\u0275text(87, "\u{1F4CB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "h3");
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(94, "div", 33);
      \u0275\u0275text(95, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 30)(97, "div", 31);
      \u0275\u0275text(98, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "div", 32);
      \u0275\u0275text(100, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "h3");
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "p");
      \u0275\u0275text(105);
      \u0275\u0275pipe(106, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(107, "div", 33);
      \u0275\u0275text(108, "\u2192");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(109, "div", 30)(110, "div", 31);
      \u0275\u0275text(111, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 32);
      \u0275\u0275text(113, "\u2705");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "h3");
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "p");
      \u0275\u0275text(118);
      \u0275\u0275pipe(119, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(120, "section", 34)(121, "div", 35)(122, "h2");
      \u0275\u0275text(123);
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "p");
      \u0275\u0275text(126);
      \u0275\u0275pipe(127, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "button", 36);
      \u0275\u0275listener("click", function ServicesComponent_Template_button_click_128_listener() {
        return ctx.navigateTo("/post-job");
      });
      \u0275\u0275elementStart(129, "span", 9);
      \u0275\u0275text(130, "add_circle");
      \u0275\u0275elementEnd();
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 32, "SERVICES.HERO_TAG"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 34, "SERVICES.HERO_TITLE_1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 36, "SERVICES.HERO_TITLE_2"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 38, "SERVICES.HERO_ACCENT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 40, "SERVICES.HERO_SUB"));
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 42, "SERVICES.SEARCH_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 44, "SERVICES.SEARCH_BTN"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 46, "SERVICES.POST_JOB"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(38, 48, "SERVICES.BROWSE_PROS"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("", ctx.categories.length || "20", "+");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 50, "SERVICES.CATEGORIES_LABEL"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 52, "SERVICES.FAST_RESPONSES"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 54, "SERVICES.SECURE_PAYMENTS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 56, "SERVICES.VERIFIED_PROS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 58, "SERVICES.WHAT_DO_YOU_NEED"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.selectedCategory);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.categoriesLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.categoriesLoading && ctx.categoriesError);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.categoriesLoading && !ctx.categoriesError && ctx.categories.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.categoriesLoading && !ctx.categoriesError && ctx.categories.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showResults);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 60, "SERVICES.HOW_IT_WORKS"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 62, "SERVICES.STEP1_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 64, "SERVICES.STEP1_DESC"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 66, "SERVICES.STEP2_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(106, 68, "SERVICES.STEP2_DESC"));
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(116, 70, "SERVICES.STEP3_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(119, 72, "SERVICES.STEP3_DESC"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(124, 74, "SERVICES.CTA_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(127, 76, "SERVICES.CTA_SUB"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(132, 78, "SERVICES.CTA_BTN"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, TranslateModule, DecimalPipe, TranslatePipe], styles: ['\n\n.services-wrapper[_ngcontent-%COMP%] {\n  color: #1f2937;\n  background: #fff;\n}\n.section-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 60%,\n      #4a1d7a 100%);\n  color: #fff;\n  padding: 64px 20px 56px;\n  position: relative;\n  overflow: hidden;\n}\n.hero[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 360px;\n  height: 360px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -60px;\n  left: 10%;\n  width: 240px;\n  height: 240px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-body[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 48px;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 900px) {\n  .hero-body[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n.hero-left[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.hero-tag[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  opacity: 0.85;\n  letter-spacing: 0.2px;\n}\n.hero-tag[_ngcontent-%COMP%]   .tag-dot[_ngcontent-%COMP%] {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #4ade80;\n  flex-shrink: 0;\n  box-shadow: 0 0 8px rgba(74, 222, 128, 0.7);\n}\n.hero-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 52px;\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -1px;\n}\n.hero-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .accent[_ngcontent-%COMP%] {\n  font-style: italic;\n  background:\n    linear-gradient(\n      90deg,\n      #fbbf24,\n      #f97316);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  opacity: 0.85;\n  line-height: 1.6;\n  max-width: 480px;\n}\n.hero-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);\n  max-width: 560px;\n}\n.hero-search[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  color: #6b7280;\n  padding: 0 12px 0 16px;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 15px 8px;\n  font-size: 15px;\n  font-family: inherit;\n  color: #1f2937;\n  min-width: 0;\n}\n.hero-search[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: 0;\n  padding: 0 24px;\n  height: 54px;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: filter 0.2s;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.12);\n}\n.hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.hero-btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #fff;\n  color: #667eea;\n  border: none;\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hero-btn-primary[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.hero-btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.hero-btn-ghost[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hero-btn-ghost[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.hero-btn-ghost[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.hero-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .hero-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.hero-trust[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.trust-card[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 14px;\n  padding: 16px 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: background 0.2s;\n}\n.trust-card[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.trust-card[_ngcontent-%COMP%]   .trust-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.trust-card[_ngcontent-%COMP%]   .trust-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  opacity: 0.85;\n  font-weight: 500;\n}\n.categories-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: #f9fafb;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n}\n.clear-filter[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-family: inherit;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.clear-filter[_ngcontent-%COMP%]:hover {\n  background: #fff;\n  color: #1f2937;\n}\n.categories-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 14px;\n}\n.cat-skeleton[_ngcontent-%COMP%] {\n  height: 90px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n  border-radius: 12px;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 18px 8px 14px;\n  background: #fff;\n  border: 2px solid transparent;\n  border-radius: 14px;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.22s;\n}\n.cat-card[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.14);\n  transform: translateY(-3px);\n}\n.cat-card.active[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.07),\n      rgba(118, 75, 162, 0.07));\n  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.18);\n}\n.cat-icon[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 1;\n}\n.cat-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  text-align: center;\n  line-height: 1.3;\n}\n.cat-count[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n}\n.services-section[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: #fff;\n}\n.services-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 36px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.services-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.services-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 700;\n}\n.count-badge[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.sort-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.sort-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 7px 16px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.sort-row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.sort-row[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: #667eea;\n}\n.services-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  transition: all 0.25s;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 14px 36px rgba(102, 126, 234, 0.16);\n  border-color: #667eea;\n}\n.card-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 180px;\n  background: #f3f4f6;\n  overflow: hidden;\n}\n.card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.service-card[_ngcontent-%COMP%]:hover   .card-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1.05);\n}\n.featured-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n.category-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 11px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n.card-body[_ngcontent-%COMP%] {\n  padding: 18px 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.card-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.card-body[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.55;\n  flex: 1;\n}\n.pro-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 8px 0 4px;\n  border-top: 1px solid #e5e7eb;\n}\n.pro-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.pro-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.pro-location[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.service-skeleton[_ngcontent-%COMP%] {\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n}\n.skel-img[_ngcontent-%COMP%] {\n  height: 180px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.skel-body[_ngcontent-%COMP%] {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skel-line[_ngcontent-%COMP%] {\n  height: 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n.skel-line.wide[_ngcontent-%COMP%] {\n  width: 80%;\n}\n.skel-line.med[_ngcontent-%COMP%] {\n  width: 60%;\n}\n.skel-line.short[_ngcontent-%COMP%] {\n  width: 40%;\n}\n.card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  gap: 8px;\n}\n.price[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  color: #667eea;\n  white-space: nowrap;\n}\n.card-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline[_ngcontent-%COMP%], \n.btn-primary[_ngcontent-%COMP%] {\n  padding: 8px 14px;\n  border-radius: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 0;\n  white-space: nowrap;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 14px rgba(102, 126, 234, 0.3);\n}\n.section-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  background: #fff3cd;\n  color: #856404;\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n}\n.section-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.section-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 5px 14px;\n  border: 1px solid #856404;\n  border-radius: 6px;\n  background: none;\n  color: #856404;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.section-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f5dda0;\n}\n.section-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6b7280;\n}\n.section-empty[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.section-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  margin: 0 0 20px;\n}\n.how-it-works[_ngcontent-%COMP%] {\n  padding: 64px 20px;\n  background: #f9fafb;\n  text-align: center;\n}\n.how-it-works[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 48px;\n}\n.steps[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  max-width: 220px;\n  flex: 1;\n  min-width: 160px;\n}\n.step[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.step[_ngcontent-%COMP%]   .step-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n}\n.step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n}\n.step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.step-arrow[_ngcontent-%COMP%] {\n  font-size: 28px;\n  color: #667eea;\n  padding: 0 8px;\n  margin-top: 10px;\n  flex-shrink: 0;\n}\n.browse-prompt[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 20px;\n  color: #6b7280;\n}\n.browse-prompt[_ngcontent-%COMP%]   .prompt-icon[_ngcontent-%COMP%] {\n  font-size: 56px;\n  margin-bottom: 16px;\n  line-height: 1;\n}\n.browse-prompt[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 10px;\n  font-size: 22px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.browse-prompt[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.cta-section[_ngcontent-%COMP%] {\n  padding: 72px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  text-align: center;\n  color: #fff;\n}\n.cta-inner[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 34px;\n  font-weight: 800;\n}\n.cta-inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 28px;\n  font-size: 16px;\n  opacity: 0.9;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  color: #667eea;\n  border: 0;\n  border-radius: 10px;\n  padding: 14px 32px;\n  font-size: 15px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cta-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n.cta-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 44px 16px 36px;\n  }\n  .hero-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 34px;\n    letter-spacing: -0.5px;\n  }\n  .hero-sub[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n  .hero-search[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .categories-section[_ngcontent-%COMP%], \n   .services-section[_ngcontent-%COMP%], \n   .how-it-works[_ngcontent-%COMP%] {\n    padding: 44px 16px;\n  }\n  .categories-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  }\n  .services-header[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .services-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .steps[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n  .step-arrow[_ngcontent-%COMP%] {\n    transform: rotate(90deg);\n    margin: 0;\n  }\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 52px 16px;\n  }\n  .cta-inner[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=services.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServicesComponent, [{
    type: Component,
    args: [{ selector: "app-services", standalone: true, imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `<div class="services-wrapper">

  <!-- Hero -->
  <section class="hero">
    <div class="hero-body">
      <div class="hero-left">
        <div class="hero-tag">
          <span class="tag-dot"></span>
          {{ 'SERVICES.HERO_TAG' | translate }}
        </div>
        <h1>{{ 'SERVICES.HERO_TITLE_1' | translate }}<br>{{ 'SERVICES.HERO_TITLE_2' | translate }} <span class="accent">{{ 'SERVICES.HERO_ACCENT' | translate }}</span></h1>
        <p class="hero-sub">{{ 'SERVICES.HERO_SUB' | translate }}</p>

        <div class="hero-search">
          <span class="material-icons">search</span>
          <input
            [(ngModel)]="searchQuery"
            (keyup.enter)="onSearch()"
            [placeholder]="'SERVICES.SEARCH_PLACEHOLDER' | translate"
            aria-label="Search services" />
          <button (click)="onSearch()">{{ 'SERVICES.SEARCH_BTN' | translate }}</button>
        </div>

        <div class="hero-actions">
          <button class="hero-btn-primary" (click)="navigateTo('/post-job')">
            <span class="material-icons">add_circle</span> {{ 'SERVICES.POST_JOB' | translate }}
          </button>
          <button class="hero-btn-ghost" (click)="navigateTo('/find-a-pro')">
            <span class="material-icons">engineering</span> {{ 'SERVICES.BROWSE_PROS' | translate }}
          </button>
        </div>
      </div>

      <div class="hero-right">
        <div class="hero-trust">
          <div class="trust-card">
            <span class="trust-icon">{{ categories.length || '20' }}+</span>
            <span class="trust-label">{{ 'SERVICES.CATEGORIES_LABEL' | translate }}</span>
          </div>
          <div class="trust-card">
            <span class="trust-icon">\u26A1</span>
            <span class="trust-label">{{ 'SERVICES.FAST_RESPONSES' | translate }}</span>
          </div>
          <div class="trust-card">
            <span class="trust-icon">\u{1F512}</span>
            <span class="trust-label">{{ 'SERVICES.SECURE_PAYMENTS' | translate }}</span>
          </div>
          <div class="trust-card">
            <span class="trust-icon">\u2705</span>
            <span class="trust-label">{{ 'SERVICES.VERIFIED_PROS' | translate }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Category Filter -->
  <section class="categories-section">
    <div class="section-inner">
      <div class="section-header">
        <h2>{{ 'SERVICES.WHAT_DO_YOU_NEED' | translate }}</h2>
        <button *ngIf="selectedCategory" class="clear-filter" (click)="filterByCategory(selectedCategory!)">
          {{ 'SERVICES.CLEAR_FILTER' | translate }} &times;
        </button>
      </div>

      <!-- Skeleton -->
      <div class="categories-grid" *ngIf="categoriesLoading">
        <div class="cat-skeleton" *ngFor="let i of skeletons"></div>
      </div>

      <!-- Categories error -->
      <div *ngIf="!categoriesLoading && categoriesError" class="section-error">
        <span class="material-icons">error_outline</span>
        <span>{{ 'SERVICES.CAT_ERROR' | translate }}</span>
        <button (click)="loadCategories()">{{ 'COMMON.RETRY' | translate }}</button>
      </div>

      <!-- Empty categories -->
      <div *ngIf="!categoriesLoading && !categoriesError && categories.length === 0" class="section-empty">
        <span class="empty-icon">\u{1F4C2}</span>
        <p>{{ 'SERVICES.CAT_NO_CATEGORIES' | translate }}</p>
      </div>

      <!-- Category cards -->
      <div class="categories-grid" *ngIf="!categoriesLoading && !categoriesError && categories.length > 0">
        <button
          *ngFor="let cat of categories"
          class="cat-card"
          [class.active]="selectedCategory === cat.name"
          (click)="filterByCategory(cat.name)">
          <div class="cat-icon">{{ cat.icon }}</div>
          <span class="cat-name">{{ cat.name }}</span>
          <span class="cat-count" *ngIf="showProCount && cat.serviceCount > 0">{{ cat.serviceCount }} pros</span>
        </button>
      </div>
    </div>
  </section>

  <!-- Services List -->
  <section class="services-section" *ngIf="showResults">
    <div class="section-inner">

      <ng-container>
        <div class="services-header">
          <div class="services-title">
            <h2>{{ selectedCategory ? selectedCategory : ('SERVICES.SEARCH_RESULTS' | translate) }}</h2>
            <span class="count-badge">{{ filteredServices.length }} {{ 'SERVICES.SERVICES_COUNT' | translate }}</span>
          </div>
          <div class="sort-row">
            <button (click)="sortBy('popular')" [class.active]="sortOrder === 'popular'">{{ 'SERVICES.SORT_POPULAR' | translate }}</button>
            <button (click)="sortBy('price-low')" [class.active]="sortOrder === 'price-low'">{{ 'SERVICES.SORT_PRICE_LOW' | translate }}</button>
            <button (click)="sortBy('price-high')" [class.active]="sortOrder === 'price-high'">{{ 'SERVICES.SORT_PRICE_HIGH' | translate }}</button>
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

        <!-- Services error -->
        <div *ngIf="!servicesLoading && servicesError" class="section-error">
          <span class="material-icons">error_outline</span>
          <span>{{ 'SERVICES.SVC_ERROR' | translate }}</span>
          <button (click)="loadServices()">{{ 'COMMON.RETRY' | translate }}</button>
        </div>

        <div class="services-grid" *ngIf="!servicesLoading && !servicesError">
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
                  <button class="btn-outline" (click)="openService(s); $event.stopPropagation()">{{ 'SERVICES.DETAILS' | translate }}</button>
                  <button class="btn-primary" (click)="bookService(s); $event.stopPropagation()">{{ 'SERVICES.BOOK_NOW' | translate }}</button>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="empty-state" *ngIf="!servicesLoading && !servicesError && filteredServices.length === 0">
          <div class="empty-icon">\u{1F50D}</div>
          <h3>{{ 'SERVICES.NO_SERVICES_TITLE' | translate }}</h3>
          <p>{{ 'SERVICES.NO_SERVICES_SUB' | translate }}</p>
          <button *ngIf="selectedCategory" class="btn-primary" (click)="filterByCategory(selectedCategory!)">
            {{ 'SERVICES.CLEAR_FILTER_BTN' | translate }}
          </button>
        </div>
      </ng-container>

    </div>
  </section>

  <!-- How it Works -->
  <section class="how-it-works">
    <div class="section-inner">
      <h2>{{ 'SERVICES.HOW_IT_WORKS' | translate }}</h2>
      <div class="steps">
        <div class="step">
          <div class="step-num">1</div>
          <div class="step-icon">\u{1F4CB}</div>
          <h3>{{ 'SERVICES.STEP1_TITLE' | translate }}</h3>
          <p>{{ 'SERVICES.STEP1_DESC' | translate }}</p>
        </div>
        <div class="step-arrow">\u2192</div>
        <div class="step">
          <div class="step-num">2</div>
          <div class="step-icon">\u{1F4AC}</div>
          <h3>{{ 'SERVICES.STEP2_TITLE' | translate }}</h3>
          <p>{{ 'SERVICES.STEP2_DESC' | translate }}</p>
        </div>
        <div class="step-arrow">\u2192</div>
        <div class="step">
          <div class="step-num">3</div>
          <div class="step-icon">\u2705</div>
          <h3>{{ 'SERVICES.STEP3_TITLE' | translate }}</h3>
          <p>{{ 'SERVICES.STEP3_DESC' | translate }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="cta-section">
    <div class="cta-inner">
      <h2>{{ 'SERVICES.CTA_TITLE' | translate }}</h2>
      <p>{{ 'SERVICES.CTA_SUB' | translate }}</p>
      <button class="cta-btn" (click)="navigateTo('/post-job')">
        <span class="material-icons">add_circle</span> {{ 'SERVICES.CTA_BTN' | translate }}
      </button>
    </div>
  </section>

</div>
`, styles: ['/* src/app/features/services/services/services.scss */\n.services-wrapper {\n  color: #1f2937;\n  background: #fff;\n}\n.section-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 60%,\n      #4a1d7a 100%);\n  color: #fff;\n  padding: 64px 20px 56px;\n  position: relative;\n  overflow: hidden;\n}\n.hero::before {\n  content: "";\n  position: absolute;\n  top: -80px;\n  right: -80px;\n  width: 360px;\n  height: 360px;\n  background: rgba(255, 255, 255, 0.05);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero::after {\n  content: "";\n  position: absolute;\n  bottom: -60px;\n  left: 10%;\n  width: 240px;\n  height: 240px;\n  background: rgba(255, 255, 255, 0.04);\n  border-radius: 50%;\n  pointer-events: none;\n}\n.hero-body {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 380px;\n  gap: 48px;\n  align-items: center;\n  position: relative;\n  z-index: 1;\n}\n@media (max-width: 900px) {\n  .hero-body {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n}\n.hero-left {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.hero-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  opacity: 0.85;\n  letter-spacing: 0.2px;\n}\n.hero-tag .tag-dot {\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #4ade80;\n  flex-shrink: 0;\n  box-shadow: 0 0 8px rgba(74, 222, 128, 0.7);\n}\n.hero-left h1 {\n  margin: 0;\n  font-size: 52px;\n  font-weight: 800;\n  line-height: 1.08;\n  letter-spacing: -1px;\n}\n.hero-left h1 .accent {\n  font-style: italic;\n  background:\n    linear-gradient(\n      90deg,\n      #fbbf24,\n      #f97316);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.hero-sub {\n  margin: 0;\n  font-size: 17px;\n  opacity: 0.85;\n  line-height: 1.6;\n  max-width: 480px;\n}\n.hero-search {\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.18);\n  max-width: 560px;\n}\n.hero-search .material-icons {\n  color: #6b7280;\n  padding: 0 12px 0 16px;\n  font-size: 22px;\n  flex-shrink: 0;\n}\n.hero-search input {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  padding: 15px 8px;\n  font-size: 15px;\n  font-family: inherit;\n  color: #1f2937;\n  min-width: 0;\n}\n.hero-search input::placeholder {\n  color: #9ca3af;\n}\n.hero-search button {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: 0;\n  padding: 0 24px;\n  height: 54px;\n  font-size: 15px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: filter 0.2s;\n  flex-shrink: 0;\n  white-space: nowrap;\n}\n.hero-search button:hover {\n  filter: brightness(1.12);\n}\n.hero-actions {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.hero-btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: #fff;\n  color: #667eea;\n  border: none;\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hero-btn-primary .material-icons {\n  font-size: 18px;\n}\n.hero-btn-primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.hero-btn-ghost {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  background: rgba(255, 255, 255, 0.12);\n  color: #fff;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  padding: 12px 22px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.hero-btn-ghost .material-icons {\n  font-size: 18px;\n}\n.hero-btn-ghost:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n.hero-right {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n@media (max-width: 900px) {\n  .hero-right {\n    display: none;\n  }\n}\n.hero-trust {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.trust-card {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 14px;\n  padding: 16px 14px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  text-align: center;\n  -webkit-backdrop-filter: blur(4px);\n  backdrop-filter: blur(4px);\n  transition: background 0.2s;\n}\n.trust-card:hover {\n  background: rgba(255, 255, 255, 0.16);\n}\n.trust-card .trust-icon {\n  font-size: 22px;\n  font-weight: 800;\n  line-height: 1;\n}\n.trust-card .trust-label {\n  font-size: 12px;\n  opacity: 0.85;\n  font-weight: 500;\n}\n.categories-section {\n  padding: 60px 20px;\n  background: #f9fafb;\n}\n.section-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 32px;\n}\n.section-header h2 {\n  margin: 0;\n  font-size: 28px;\n  font-weight: 700;\n}\n.clear-filter {\n  background: none;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 6px 14px;\n  font-size: 13px;\n  font-family: inherit;\n  color: #6b7280;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.clear-filter:hover {\n  background: #fff;\n  color: #1f2937;\n}\n.categories-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));\n  gap: 14px;\n}\n.cat-skeleton {\n  height: 90px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n  border-radius: 12px;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n  padding: 18px 8px 14px;\n  background: #fff;\n  border: 2px solid transparent;\n  border-radius: 14px;\n  cursor: pointer;\n  font-family: inherit;\n  transition: all 0.22s;\n}\n.cat-card:hover {\n  border-color: #667eea;\n  box-shadow: 0 6px 18px rgba(102, 126, 234, 0.14);\n  transform: translateY(-3px);\n}\n.cat-card.active {\n  border-color: #667eea;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.07),\n      rgba(118, 75, 162, 0.07));\n  box-shadow: 0 4px 14px rgba(102, 126, 234, 0.18);\n}\n.cat-icon {\n  font-size: 26px;\n  line-height: 1;\n}\n.cat-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  text-align: center;\n  line-height: 1.3;\n}\n.cat-count {\n  font-size: 11px;\n  color: #6b7280;\n}\n.services-section {\n  padding: 60px 20px;\n  background: #fff;\n}\n.services-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 36px;\n  flex-wrap: wrap;\n  gap: 16px;\n}\n.services-title {\n  display: flex;\n  align-items: baseline;\n  gap: 12px;\n}\n.services-title h2 {\n  margin: 0;\n  font-size: 26px;\n  font-weight: 700;\n}\n.count-badge {\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 20px;\n  padding: 3px 12px;\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.sort-row {\n  display: flex;\n  gap: 8px;\n}\n.sort-row button {\n  padding: 7px 16px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 500;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.sort-row button:hover {\n  background: #e5e7eb;\n}\n.sort-row button.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: #667eea;\n}\n.services-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 24px;\n}\n.service-card {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n  transition: all 0.25s;\n}\n.service-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 14px 36px rgba(102, 126, 234, 0.16);\n  border-color: #667eea;\n}\n.card-image {\n  position: relative;\n  height: 180px;\n  background: #f3f4f6;\n  overflow: hidden;\n}\n.card-image img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  transition: transform 0.3s;\n}\n.service-card:hover .card-image img {\n  transform: scale(1.05);\n}\n.featured-badge {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 4px 10px;\n  border-radius: 20px;\n  letter-spacing: 0.3px;\n  text-transform: uppercase;\n}\n.category-tag {\n  position: absolute;\n  bottom: 10px;\n  left: 10px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 11px;\n  padding: 3px 10px;\n  border-radius: 20px;\n  text-transform: capitalize;\n}\n.card-body {\n  padding: 18px 18px 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  flex: 1;\n}\n.card-body h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.card-body p {\n  margin: 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.55;\n  flex: 1;\n}\n.pro-info {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  padding: 8px 0 4px;\n  border-top: 1px solid #e5e7eb;\n}\n.pro-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.pro-location {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.pro-location .material-icons {\n  font-size: 13px;\n}\n.service-skeleton {\n  border: 1px solid #e5e7eb;\n  border-radius: 14px;\n  overflow: hidden;\n  background: #fff;\n}\n.skel-img {\n  height: 180px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n.skel-body {\n  padding: 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.skel-line {\n  height: 12px;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #e5e7eb 25%,\n      #f3f4f6 50%,\n      #e5e7eb 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n.skel-line.wide {\n  width: 80%;\n}\n.skel-line.med {\n  width: 60%;\n}\n.skel-line.short {\n  width: 40%;\n}\n.card-footer {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  gap: 8px;\n}\n.price {\n  font-size: 16px;\n  font-weight: 700;\n  color: #667eea;\n  white-space: nowrap;\n}\n.card-actions {\n  display: flex;\n  gap: 8px;\n}\n.btn-outline,\n.btn-primary {\n  padding: 8px 14px;\n  border-radius: 7px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n  border: 0;\n  white-space: nowrap;\n}\n.btn-outline {\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1px solid #e5e7eb;\n}\n.btn-outline:hover {\n  background: #e5e7eb;\n}\n.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn-primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 6px 14px rgba(102, 126, 234, 0.3);\n}\n.section-error {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  background: #fff3cd;\n  color: #856404;\n  font-size: 0.9rem;\n  margin-bottom: 8px;\n}\n.section-error .material-icons {\n  font-size: 1.2rem;\n}\n.section-error button {\n  margin-left: auto;\n  padding: 5px 14px;\n  border: 1px solid #856404;\n  border-radius: 6px;\n  background: none;\n  color: #856404;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.section-error button:hover {\n  background: #f5dda0;\n}\n.section-empty {\n  text-align: center;\n  padding: 40px 20px;\n  color: #6b7280;\n}\n.section-empty .empty-icon {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 12px;\n}\n.section-empty p {\n  margin: 0;\n  font-size: 0.95rem;\n}\n.empty-state {\n  grid-column: 1/-1;\n  text-align: center;\n  padding: 60px 20px;\n}\n.empty-state .empty-icon {\n  font-size: 56px;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  font-size: 22px;\n  font-weight: 600;\n  margin: 0 0 8px;\n}\n.empty-state p {\n  color: #6b7280;\n  margin: 0 0 20px;\n}\n.how-it-works {\n  padding: 64px 20px;\n  background: #f9fafb;\n  text-align: center;\n}\n.how-it-works h2 {\n  font-size: 28px;\n  font-weight: 700;\n  margin: 0 0 48px;\n}\n.steps {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 0;\n}\n.step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 10px;\n  max-width: 220px;\n  flex: 1;\n  min-width: 160px;\n}\n.step .step-num {\n  width: 40px;\n  height: 40px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 800;\n  flex-shrink: 0;\n}\n.step .step-icon {\n  font-size: 32px;\n}\n.step h3 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n}\n.step p {\n  margin: 0;\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.step-arrow {\n  font-size: 28px;\n  color: #667eea;\n  padding: 0 8px;\n  margin-top: 10px;\n  flex-shrink: 0;\n}\n.browse-prompt {\n  text-align: center;\n  padding: 64px 20px;\n  color: #6b7280;\n}\n.browse-prompt .prompt-icon {\n  font-size: 56px;\n  margin-bottom: 16px;\n  line-height: 1;\n}\n.browse-prompt h3 {\n  margin: 0 0 10px;\n  font-size: 22px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.browse-prompt p {\n  margin: 0;\n  font-size: 15px;\n  line-height: 1.6;\n}\n.cta-section {\n  padding: 72px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  text-align: center;\n  color: #fff;\n}\n.cta-inner {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-inner h2 {\n  margin: 0 0 12px;\n  font-size: 34px;\n  font-weight: 800;\n}\n.cta-inner p {\n  margin: 0 0 28px;\n  font-size: 16px;\n  opacity: 0.9;\n}\n.cta-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  background: #fff;\n  color: #667eea;\n  border: 0;\n  border-radius: 10px;\n  padding: 14px 32px;\n  font-size: 15px;\n  font-weight: 700;\n  font-family: inherit;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.cta-btn .material-icons {\n  font-size: 20px;\n}\n.cta-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.2);\n}\n@media (max-width: 768px) {\n  .hero {\n    padding: 44px 16px 36px;\n  }\n  .hero-left h1 {\n    font-size: 34px;\n    letter-spacing: -0.5px;\n  }\n  .hero-sub {\n    font-size: 15px;\n  }\n  .hero-search button {\n    padding: 0 16px;\n  }\n  .categories-section,\n  .services-section,\n  .how-it-works {\n    padding: 44px 16px;\n  }\n  .categories-grid {\n    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));\n  }\n  .services-header {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n  .services-grid {\n    grid-template-columns: 1fr;\n  }\n  .steps {\n    flex-direction: column;\n    align-items: center;\n  }\n  .step-arrow {\n    transform: rotate(90deg);\n    margin: 0;\n  }\n  .cta-section {\n    padding: 52px 16px;\n  }\n  .cta-inner h2 {\n    font-size: 26px;\n  }\n}\n/*# sourceMappingURL=services.css.map */\n'] }]
  }], () => [{ type: Router }, { type: Auth }, { type: ServiceCategoryService }, { type: BrowseServicesService }, { type: SettingsService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServicesComponent, { className: "ServicesComponent", filePath: "src/app/features/services/services/services.ts", lineNumber: 23 });
})();

// src/app/features/services/services-routing-module.ts
var routes = [
  { path: "", component: ServicesComponent },
  {
    path: ":id",
    loadComponent: () => import("./chunk-WLNACRP3.js").then((m) => m.ServiceDetailComponent)
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
//# sourceMappingURL=chunk-PWUUMVZP.js.map

