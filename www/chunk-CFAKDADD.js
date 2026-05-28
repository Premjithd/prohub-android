import {
  MatSelectModule
} from "./chunk-Z4O25NSQ.js";
import "./chunk-SCUIT22V.js";
import "./chunk-IQQAMAZF.js";
import "./chunk-ZIGP4DPN.js";
import "./chunk-KOQ7ZT3J.js";
import {
  MatFormFieldModule,
  MatInputModule
} from "./chunk-WDBRP2V4.js";
import "./chunk-XYJWITZW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XDOJRKTW.js";
import {
  MatButtonModule
} from "./chunk-KQMSNT2S.js";
import "./chunk-XBTNCZLM.js";
import {
  MatIconModule
} from "./chunk-Z4HON7ZA.js";
import "./chunk-24VDEUMT.js";
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
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-DLR4BDQH.js";
import "./chunk-UGJKRHBV.js";
import {
  RouterModule
} from "./chunk-Z7MI56JG.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  SlicePipe,
  Subject,
  ViewChild,
  debounceTime,
  distinctUntilChanged,
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
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/find-a-pro/find-a-pro.ts
function FindAProComponent_button_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function FindAProComponent_button_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      ctx_r1.searchText = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r3 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r3.name);
  }
}
function FindAProComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "span", 3);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.errorMessage, " ");
  }
}
function FindAProComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading professionals...");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "span", 3);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No professionals found. Try a different search.");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_29_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.pros.length - ctx_r1.mapMarkers.length, " without location \u2014 not shown on map) ");
  }
}
function FindAProComponent_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275template(2, FindAProComponent_div_29_span_2_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.pros.length, " professional", ctx_r1.pros.length !== 1 ? "s" : "", " found ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.mapMarkers.length < ctx_r1.pros.length);
  }
}
function FindAProComponent_div_31_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Service radius: ", pro_r5.serviceRadiusKm, " km ");
  }
}
function FindAProComponent_div_31_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r6.name);
  }
}
function FindAProComponent_div_31_div_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r5 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", pro_r5.services.length - 3, " more");
  }
}
function FindAProComponent_div_31_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, FindAProComponent_div_31_div_13_span_1_Template, 2, 1, "span", 44);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275template(3, FindAProComponent_div_31_div_13_span_3_Template, 2, 1, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 2, pro_r5.services, 0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pro_r5.services.length > 3);
  }
}
function FindAProComponent_div_31_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "span", 49);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_31_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50)(1, "span", 3);
    \u0275\u0275text(2, "location_off");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275listener("mouseenter", function FindAProComponent_div_31_Template_div_mouseenter_0_listener() {
      const pro_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hoverPro(pro_r5.id));
    })("mouseleave", function FindAProComponent_div_31_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hoverPro(null));
    })("click", function FindAProComponent_div_31_Template_div_click_0_listener() {
      const pro_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickPro(pro_r5));
    });
    \u0275\u0275elementStart(1, "div", 32);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 33)(4, "div", 34);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 35);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 36)(9, "span", 37);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FindAProComponent_div_31_div_12_Template, 2, 1, "div", 38)(13, FindAProComponent_div_31_div_13_Template, 4, 6, "div", 39);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FindAProComponent_div_31_div_14_Template, 3, 0, "div", 40)(15, FindAProComponent_div_31_div_15_Template, 3, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("highlighted", ctx_r1.highlightedProId === pro_r5.id)("no-location", !pro_r5.latitude || !pro_r5.longitude);
    \u0275\u0275property("id", \u0275\u0275interpolate1("pro-card-", pro_r5.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (pro_r5.proName || "?")[0].toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pro_r5.proName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r5.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLocation(pro_r5), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pro_r5.serviceRadiusKm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pro_r5.services && pro_r5.services.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pro_r5.isEmailVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pro_r5.latitude || !pro_r5.longitude);
  }
}
function FindAProComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51)(1, "app-map-view", 52);
    \u0275\u0275listener("markerClick", function FindAProComponent_div_32_Template_app_map_view_markerClick_1_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onMapMarkerClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("markers", ctx_r1.mapMarkers)("loading", ctx_r1.loading)("highlightedId", ctx_r1.highlightedProId);
  }
}
var FindAProComponent = class _FindAProComponent {
  proBrowseService;
  serviceCategoryService;
  cdr;
  pros = [];
  loading = false;
  errorMessage = "";
  searchText = "";
  selectedCategoryId = null;
  categories = [];
  highlightedProId = null;
  showMap = true;
  mapMarkers = [];
  mapView;
  search$ = new Subject();
  destroy$ = new Subject();
  constructor(proBrowseService, serviceCategoryService, cdr) {
    this.proBrowseService = proBrowseService;
    this.serviceCategoryService = serviceCategoryService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.serviceCategoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (cats) => {
        this.categories = cats;
        this.cdr.markForCheck();
      }
    });
    this.search$.pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => this.load());
    this.load();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.search$.complete();
  }
  load() {
    this.loading = true;
    this.errorMessage = "";
    this.cdr.markForCheck();
    this.proBrowseService.browse(this.searchText.trim() || void 0, this.selectedCategoryId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (pros) => {
        this.pros = pros;
        this.mapMarkers = pros.filter((p) => p.latitude != null && p.longitude != null).map((p) => ({
          id: p.id,
          lat: p.latitude,
          lng: p.longitude,
          title: p.businessName || p.proName,
          subtitle: [p.city, p.state].filter(Boolean).join(", "),
          type: "pro",
          radiusKm: p.serviceRadiusKm
        }));
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.errorMessage = "Failed to load professionals. Please try again.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  onSearchChange() {
    this.search$.next(this.searchText);
  }
  onCategoryChange() {
    this.load();
  }
  hoverPro(id) {
    this.highlightedProId = id;
    this.cdr.markForCheck();
  }
  clickPro(pro) {
    this.highlightedProId = pro.id;
    this.cdr.markForCheck();
    if (pro.latitude && pro.longitude) {
      this.mapView?.panTo(pro.id);
    }
  }
  onMapMarkerClick(id) {
    this.highlightedProId = id;
    this.cdr.markForCheck();
    const el = document.getElementById(`pro-card-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  toggleMap() {
    this.showMap = !this.showMap;
    this.cdr.markForCheck();
  }
  getLocation(pro) {
    return [pro.city, pro.state, pro.country].filter(Boolean).join(", ") || "Location not set";
  }
  static \u0275fac = function FindAProComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FindAProComponent)(\u0275\u0275directiveInject(ProBrowseService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAProComponent, selectors: [["app-find-a-pro"]], viewQuery: function FindAProComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MapViewComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapView = _t.first);
    }
  }, decls: 33, vars: 15, consts: [[1, "find-pro-page"], [1, "page-header"], [1, "header-inner"], [1, "material-icons"], [1, "subtitle"], [1, "map-toggle-btn", 3, "click"], [1, "filter-bar"], [1, "search-wrap"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "Search by name, business or service...", 1, "search-input", 3, "ngModelChange", "ngModel"], ["class", "clear-btn", 3, "click", 4, "ngIf"], [1, "cat-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["class", "alert-error", 4, "ngIf"], [1, "body-split"], [1, "list-panel"], ["class", "loading-wrap", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "results-meta", 4, "ngIf"], [1, "pro-list"], ["class", "pro-card", 3, "id", "highlighted", "no-location", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["class", "map-panel", 4, "ngIf"], [1, "clear-btn", 3, "click"], [1, "alert-error"], [1, "loading-wrap"], ["diameter", "40"], [1, "empty-state"], [1, "results-meta"], ["class", "no-loc-note", 4, "ngIf"], [1, "no-loc-note"], [1, "pro-card", 3, "mouseenter", "mouseleave", "click", "id"], [1, "pro-avatar"], [1, "pro-info"], [1, "pro-name"], [1, "pro-business"], [1, "pro-location"], [1, "material-icons", "loc-icon"], ["class", "pro-radius", 4, "ngIf"], ["class", "pro-services", 4, "ngIf"], ["class", "pro-badge", 4, "ngIf"], ["class", "no-loc-badge", "title", "No location set", 4, "ngIf"], [1, "pro-radius"], [1, "pro-services"], ["class", "service-chip", 4, "ngFor", "ngForOf"], ["class", "service-chip more", 4, "ngIf"], [1, "service-chip"], [1, "service-chip", "more"], [1, "pro-badge"], [1, "material-icons", "verified-icon"], ["title", "No location set", 1, "no-loc-badge"], [1, "map-panel"], [3, "markerClick", "markers", "loading", "highlightedId"]], template: function FindAProComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1")(5, "span", 3);
      \u0275\u0275text(6, "engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Find a Professional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "Browse verified service providers near you");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 5);
      \u0275\u0275listener("click", function FindAProComponent_Template_button_click_10_listener() {
        return ctx.toggleMap();
      });
      \u0275\u0275elementStart(11, "span", 3);
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275text(13);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "div", 6)(15, "div", 7)(16, "span", 8);
      \u0275\u0275text(17, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "input", 9);
      \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_Template_input_ngModelChange_18_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function FindAProComponent_Template_input_ngModelChange_18_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(19, FindAProComponent_button_19_Template, 3, 0, "button", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "select", 11);
      \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_Template_select_ngModelChange_20_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategoryId, $event) || (ctx.selectedCategoryId = $event);
        return $event;
      });
      \u0275\u0275listener("change", function FindAProComponent_Template_select_change_20_listener() {
        return ctx.onCategoryChange();
      });
      \u0275\u0275elementStart(21, "option", 12);
      \u0275\u0275text(22, "All categories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(23, FindAProComponent_option_23_Template, 2, 2, "option", 13);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(24, FindAProComponent_div_24_Template, 4, 1, "div", 14);
      \u0275\u0275elementStart(25, "div", 15)(26, "div", 16);
      \u0275\u0275template(27, FindAProComponent_div_27_Template, 4, 0, "div", 17)(28, FindAProComponent_div_28_Template, 5, 0, "div", 18)(29, FindAProComponent_div_29_Template, 3, 3, "div", 19);
      \u0275\u0275elementStart(30, "div", 20);
      \u0275\u0275template(31, FindAProComponent_div_31_Template, 16, 14, "div", 21);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(32, FindAProComponent_div_32_Template, 2, 3, "div", 22);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(ctx.showMap ? "view_list" : "map");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showMap ? "List only" : "Show map", " ");
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchText);
      \u0275\u0275advance();
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategoryId);
      \u0275\u0275advance();
      \u0275\u0275property("ngValue", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275classProp("map-hidden", !ctx.showMap);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pros.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pros.length > 0);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.pros);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.showMap);
    }
  }, dependencies: [
    CommonModule,
    NgForOf,
    NgIf,
    FormsModule,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgModel,
    RouterModule,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MapViewComponent,
    SlicePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.find-pro-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.page-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.5rem 2rem 1rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n.map-toggle-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.18);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.map-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.map-toggle-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  padding: 0 0.5rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.2rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: white;\n  font-size: 0.95rem;\n  padding: 0.5rem 0.5rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.search-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n}\n.search-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cat-select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  color: white;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 160px;\n}\n.cat-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #333;\n  background: white;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #ffebee;\n  color: #c62828;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9rem;\n}\n.body-split[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n  min-height: 0;\n}\n.body-split.map-hidden[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  height: auto;\n}\n@media (max-width: 768px) {\n  .body-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 320px 320px;\n    height: auto;\n  }\n  .body-split.map-hidden[_ngcontent-%COMP%] {\n    grid-template-rows: auto;\n  }\n}\n.list-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: white;\n  border-right: 1px solid #e0e0e0;\n  height: 100%;\n}\n.loading-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #999;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.results-meta[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  font-size: 0.85rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.results-meta[_ngcontent-%COMP%]   .no-loc-note[_ngcontent-%COMP%] {\n  color: #f57c00;\n  margin-left: 0.25rem;\n}\n.pro-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pro-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.15s;\n  position: relative;\n}\n.pro-card[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.pro-card.highlighted[_ngcontent-%COMP%] {\n  background: #ede7f6;\n  border-left: 3px solid #667eea;\n}\n.pro-card.no-location[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.pro-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pro-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.2rem;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #888;\n  margin-bottom: 0.25rem;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-location[_ngcontent-%COMP%]   .loc-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #e91e63;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-radius[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #667eea;\n  margin-bottom: 0.25rem;\n}\n.pro-services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-top: 0.25rem;\n}\n.service-chip[_ngcontent-%COMP%] {\n  background: #ede7f6;\n  color: #5e35b1;\n  font-size: 0.7rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n.service-chip.more[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  color: #555;\n}\n.pro-badge[_ngcontent-%COMP%]   .verified-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #43a047;\n}\n.no-loc-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #bbb;\n}\n.map-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.map-panel[_ngcontent-%COMP%]   app-map-view[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 768px) {\n  .body-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 320px;\n  }\n  .body-split.map-hidden[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr;\n  }\n  .list-panel[_ngcontent-%COMP%] {\n    overflow-y: auto;\n    max-height: 50vh;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n  .map-panel[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n}\n/*# sourceMappingURL=find-a-pro.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FindAProComponent, [{
    type: Component,
    args: [{ selector: "app-find-a-pro", standalone: true, imports: [
      CommonModule,
      FormsModule,
      RouterModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MapViewComponent
    ], template: `<div class="find-pro-page">
  <!-- Header -->
  <div class="page-header">
    <div class="header-inner">
      <div>
        <h1><span class="material-icons">engineering</span> Find a Professional</h1>
        <p class="subtitle">Browse verified service providers near you</p>
      </div>
      <button class="map-toggle-btn" (click)="toggleMap()">
        <span class="material-icons">{{ showMap ? 'view_list' : 'map' }}</span>
        {{ showMap ? 'List only' : 'Show map' }}
      </button>
    </div>

    <!-- Search & Filter bar -->
    <div class="filter-bar">
      <div class="search-wrap">
        <span class="material-icons search-icon">search</span>
        <input
          type="text"
          class="search-input"
          placeholder="Search by name, business or service..."
          [(ngModel)]="searchText"
          (ngModelChange)="onSearchChange()"
        />
        <button *ngIf="searchText" class="clear-btn" (click)="searchText=''; onSearchChange()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <select class="cat-select" [(ngModel)]="selectedCategoryId" (change)="onCategoryChange()">
        <option [ngValue]="null">All categories</option>
        <option *ngFor="let c of categories" [ngValue]="c.id">{{ c.name }}</option>
      </select>
    </div>
  </div>

  <!-- Error -->
  <div *ngIf="errorMessage" class="alert-error">
    <span class="material-icons">error</span> {{ errorMessage }}
  </div>

  <!-- Body -->
  <div class="body-split" [class.map-hidden]="!showMap">
    <!-- Left: list -->
    <div class="list-panel">
      <div *ngIf="loading" class="loading-wrap">
        <mat-spinner diameter="40"></mat-spinner>
        <p>Loading professionals...</p>
      </div>

      <div *ngIf="!loading && pros.length === 0" class="empty-state">
        <span class="material-icons">search_off</span>
        <p>No professionals found. Try a different search.</p>
      </div>

      <div *ngIf="!loading && pros.length > 0" class="results-meta">
        {{ pros.length }} professional{{ pros.length !== 1 ? 's' : '' }} found
        <span *ngIf="mapMarkers.length < pros.length" class="no-loc-note">
          ({{ pros.length - mapMarkers.length }} without location \u2014 not shown on map)
        </span>
      </div>

      <div class="pro-list">
        <div
          *ngFor="let pro of pros"
          id="pro-card-{{ pro.id }}"
          class="pro-card"
          [class.highlighted]="highlightedProId === pro.id"
          [class.no-location]="!pro.latitude || !pro.longitude"
          (mouseenter)="hoverPro(pro.id)"
          (mouseleave)="hoverPro(null)"
          (click)="clickPro(pro)"
        >
          <div class="pro-avatar">
            {{ (pro.proName || '?')[0].toUpperCase() }}
          </div>
          <div class="pro-info">
            <div class="pro-name">{{ pro.proName }}</div>
            <div class="pro-business">{{ pro.businessName }}</div>
            <div class="pro-location">
              <span class="material-icons loc-icon">place</span>
              {{ getLocation(pro) }}
            </div>
            <div *ngIf="pro.serviceRadiusKm" class="pro-radius">
              Service radius: {{ pro.serviceRadiusKm }} km
            </div>
            <div *ngIf="pro.services && pro.services.length > 0" class="pro-services">
              <span *ngFor="let s of pro.services | slice:0:3" class="service-chip">{{ s.name }}</span>
              <span *ngIf="pro.services.length > 3" class="service-chip more">+{{ pro.services.length - 3 }} more</span>
            </div>
          </div>
          <div class="pro-badge" *ngIf="pro.isEmailVerified">
            <span class="material-icons verified-icon">verified</span>
          </div>
          <div *ngIf="!pro.latitude || !pro.longitude" class="no-loc-badge" title="No location set">
            <span class="material-icons">location_off</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: map -->
    <div class="map-panel" *ngIf="showMap">
      <app-map-view
        [markers]="mapMarkers"
        [loading]="loading"
        [highlightedId]="highlightedProId"
        (markerClick)="onMapMarkerClick($event)"
      ></app-map-view>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/find-a-pro/find-a-pro.scss */\n.find-pro-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.page-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.5rem 2rem 1rem;\n}\n.page-header .header-inner {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-header h1 {\n  margin: 0 0 0.25rem;\n  font-size: 1.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-header h1 .material-icons {\n  font-size: 1.8rem;\n}\n.page-header .subtitle {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n.map-toggle-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.18);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.map-toggle-btn:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.map-toggle-btn .material-icons {\n  font-size: 1.1rem;\n}\n.filter-bar {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrap {\n  flex: 1;\n  min-width: 200px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  padding: 0 0.5rem;\n}\n.search-wrap .search-icon {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.2rem;\n}\n.search-wrap .search-input {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: white;\n  font-size: 0.95rem;\n  padding: 0.5rem 0.5rem;\n}\n.search-wrap .search-input::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.search-wrap .clear-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n}\n.search-wrap .clear-btn .material-icons {\n  font-size: 1.1rem;\n}\n.cat-select {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  color: white;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 160px;\n}\n.cat-select option {\n  color: #333;\n  background: white;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #ffebee;\n  color: #c62828;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9rem;\n}\n.body-split {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n  min-height: 0;\n}\n.body-split.map-hidden {\n  grid-template-columns: 1fr;\n  height: auto;\n}\n@media (max-width: 768px) {\n  .body-split {\n    grid-template-columns: 1fr;\n    grid-template-rows: 320px 320px;\n    height: auto;\n  }\n  .body-split.map-hidden {\n    grid-template-rows: auto;\n  }\n}\n.list-panel {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: white;\n  border-right: 1px solid #e0e0e0;\n  height: 100%;\n}\n.loading-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #666;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #999;\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: 3rem;\n}\n.results-meta {\n  padding: 0.75rem 1rem;\n  font-size: 0.85rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.results-meta .no-loc-note {\n  color: #f57c00;\n  margin-left: 0.25rem;\n}\n.pro-list {\n  display: flex;\n  flex-direction: column;\n}\n.pro-card {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.15s;\n  position: relative;\n}\n.pro-card:hover {\n  background: #f5f5f5;\n}\n.pro-card.highlighted {\n  background: #ede7f6;\n  border-left: 3px solid #667eea;\n}\n.pro-card.no-location {\n  opacity: 0.75;\n}\n.pro-avatar {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pro-info {\n  flex: 1;\n  min-width: 0;\n}\n.pro-info .pro-name {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pro-info .pro-business {\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.2rem;\n}\n.pro-info .pro-location {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #888;\n  margin-bottom: 0.25rem;\n}\n.pro-info .pro-location .loc-icon {\n  font-size: 0.95rem;\n  color: #e91e63;\n}\n.pro-info .pro-radius {\n  font-size: 0.75rem;\n  color: #667eea;\n  margin-bottom: 0.25rem;\n}\n.pro-services {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-top: 0.25rem;\n}\n.service-chip {\n  background: #ede7f6;\n  color: #5e35b1;\n  font-size: 0.7rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n.service-chip.more {\n  background: #e0e0e0;\n  color: #555;\n}\n.pro-badge .verified-icon {\n  font-size: 1.1rem;\n  color: #43a047;\n}\n.no-loc-badge .material-icons {\n  font-size: 1rem;\n  color: #bbb;\n}\n.map-panel {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.map-panel app-map-view {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 768px) {\n  .body-split {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 320px;\n  }\n  .body-split.map-hidden {\n    grid-template-rows: 1fr;\n  }\n  .list-panel {\n    overflow-y: auto;\n    max-height: 50vh;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n  .map-panel {\n    min-height: 320px;\n  }\n}\n/*# sourceMappingURL=find-a-pro.css.map */\n'] }]
  }], () => [{ type: ProBrowseService }, { type: ServiceCategoryService }, { type: ChangeDetectorRef }], { mapView: [{
    type: ViewChild,
    args: [MapViewComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAProComponent, { className: "FindAProComponent", filePath: "src/app/features/find-a-pro/find-a-pro.ts", lineNumber: 30 });
})();
export {
  FindAProComponent
};
//# sourceMappingURL=chunk-CFAKDADD.js.map

