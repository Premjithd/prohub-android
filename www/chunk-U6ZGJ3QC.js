import {
  MatSelectModule
} from "./chunk-2DWVN5OR.js";
import "./chunk-4RDKSTJ4.js";
import "./chunk-DLWAKDLA.js";
import "./chunk-HU3FUKMP.js";
import "./chunk-YFVGD4AB.js";
import {
  MatFormFieldModule,
  MatInputModule
} from "./chunk-MQXTVBAG.js";
import "./chunk-RAZWGAZW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KUT34PAX.js";
import {
  MatButtonModule
} from "./chunk-LWBGNZR5.js";
import "./chunk-B52SAYO3.js";
import {
  MatIconModule
} from "./chunk-GE3YQJYL.js";
import "./chunk-CSFNIUM5.js";
import {
  AddressService
} from "./chunk-JVAWAJWH.js";
import {
  ProBrowseService
} from "./chunk-LXQQE7R7.js";
import {
  MapViewComponent
} from "./chunk-BV6ZGOZQ.js";
import {
  ServiceCategoryService
} from "./chunk-AXY4WTIR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-QP32PFWE.js";
import {
  Auth
} from "./chunk-A4EHLAJD.js";
import "./chunk-UGJKRHBV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-NMZ5GJTW.js";
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
} from "./chunk-ANTPJ2CK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/features/find-a-pro/find-a-pro.ts
function FindAProComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function FindAProComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMap());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showMap ? "view_list" : "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showMap ? "List only" : "Show map", " ");
  }
}
function FindAProComponent_div_11_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function FindAProComponent_div_11_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.searchText = "";
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_11_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("ngValue", c_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.name);
  }
}
function FindAProComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19)(2, "span", 20);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_div_11_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FindAProComponent_div_11_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FindAProComponent_div_11_button_5_Template, 3, 0, "button", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_div_11_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategoryId, $event) || (ctx_r1.selectedCategoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FindAProComponent_div_11_Template_select_change_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryChange());
    });
    \u0275\u0275elementStart(7, "option", 24);
    \u0275\u0275text(8, "All categories");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FindAProComponent_div_11_option_9_Template, 2, 2, "option", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.searchText);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function FindAProComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 30)(5, "strong");
    \u0275\u0275text(6, "Sign in to browse real professionals near you");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Here's a preview of the pros available on yProHub. Create a free account to see all professionals, search by service, and get in touch.");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 31)(10, "a", 32);
    \u0275\u0275text(11, "Sign In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "a", 33);
    \u0275\u0275text(13, "Create Account");
    \u0275\u0275elementEnd()()()();
  }
}
function FindAProComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "span", 3);
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
function FindAProComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275element(1, "mat-spinner", 36);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading professionals...");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "span", 3);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No professionals found. Try a different search.");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 40);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r1.pros.length - ctx_r1.mapMarkers.length, " without location \u2014 not shown on map) ");
  }
}
function FindAProComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275template(2, FindAProComponent_div_18_span_2_Template, 2, 1, "span", 39);
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
function FindAProComponent_div_20_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Service radius: ", pro_r7.serviceRadiusKm, " km ");
  }
}
function FindAProComponent_div_20_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 56);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8.name);
  }
}
function FindAProComponent_div_20_div_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r7 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", pro_r7.services.length - 3, " more");
  }
}
function FindAProComponent_div_20_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 53);
    \u0275\u0275template(1, FindAProComponent_div_20_div_13_span_1_Template, 2, 1, "span", 54);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275template(3, FindAProComponent_div_20_div_13_span_3_Template, 2, 1, "span", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 2, pro_r7.services, 0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pro_r7.services.length > 3);
  }
}
function FindAProComponent_div_20_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58)(1, "span", 59);
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_20_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "span", 3);
    \u0275\u0275text(2, "location_off");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 41);
    \u0275\u0275listener("mouseenter", function FindAProComponent_div_20_Template_div_mouseenter_0_listener() {
      const pro_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isAuthenticated && ctx_r1.hoverPro(pro_r7.id));
    })("mouseleave", function FindAProComponent_div_20_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isAuthenticated && ctx_r1.hoverPro(null));
    })("click", function FindAProComponent_div_20_Template_div_click_0_listener() {
      const pro_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickPro(pro_r7));
    });
    \u0275\u0275elementStart(1, "div", 42);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 43)(4, "div", 44);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 45);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 46)(9, "span", 47);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FindAProComponent_div_20_div_12_Template, 2, 1, "div", 48)(13, FindAProComponent_div_20_div_13_Template, 4, 6, "div", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, FindAProComponent_div_20_div_14_Template, 3, 0, "div", 50)(15, FindAProComponent_div_20_div_15_Template, 3, 0, "div", 51);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("highlighted", ctx_r1.highlightedProId === pro_r7.id)("no-location", !pro_r7.latitude || !pro_r7.longitude)("preview-card", !ctx_r1.isAuthenticated);
    \u0275\u0275property("id", \u0275\u0275interpolate1("pro-card-", pro_r7.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (pro_r7.proName || "?")[0].toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pro_r7.proName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r7.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLocation(pro_r7), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pro_r7.serviceRadiusKm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pro_r7.services && pro_r7.services.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pro_r7.isEmailVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pro_r7.latitude || !pro_r7.longitude);
  }
}
function FindAProComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 61)(1, "app-map-view", 62);
    \u0275\u0275listener("markerClick", function FindAProComponent_div_21_Template_app_map_view_markerClick_1_listener($event) {
      \u0275\u0275restoreView(_r9);
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
var PREVIEW_PROS = [
  {
    id: -1,
    proName: "Alice Johnson",
    businessName: "Johnson Plumbing Services",
    city: "London",
    state: "England",
    country: "UK",
    isEmailVerified: true,
    services: [{ id: 1, name: "Plumbing", price: 60 }, { id: 2, name: "Pipe Repair", price: 45 }]
  },
  {
    id: -2,
    proName: "Bob Martinez",
    businessName: "Martinez Electrical",
    city: "Manchester",
    state: "England",
    country: "UK",
    isEmailVerified: true,
    services: [{ id: 3, name: "Electrical", price: 75 }, { id: 4, name: "Wiring", price: 90 }]
  },
  {
    id: -3,
    proName: "Carol Williams",
    businessName: "Sparkle Clean Co.",
    city: "Birmingham",
    state: "England",
    country: "UK",
    isEmailVerified: true,
    services: [{ id: 5, name: "House Cleaning", price: 35 }]
  },
  {
    id: -4,
    proName: "David Chen",
    businessName: "Chen Carpentry",
    city: "Bristol",
    state: "England",
    country: "UK",
    isEmailVerified: true,
    services: [{ id: 6, name: "Carpentry", price: 55 }, { id: 7, name: "Furniture Assembly", price: 40 }]
  },
  {
    id: -5,
    proName: "Emma Davis",
    businessName: "Davis Decorating",
    city: "Leeds",
    state: "England",
    country: "UK",
    isEmailVerified: true,
    services: [{ id: 8, name: "Painting", price: 50 }, { id: 9, name: "Decorating", price: 65 }]
  }
];
var FindAProComponent = class _FindAProComponent {
  proBrowseService;
  serviceCategoryService;
  cdr;
  auth;
  addressService;
  pros = [];
  loading = false;
  errorMessage = "";
  searchText = "";
  selectedCategoryId = null;
  categories = [];
  highlightedProId = null;
  showMap = true;
  isAuthenticated = false;
  mapMarkers = [];
  mapView;
  search$ = new Subject();
  destroy$ = new Subject();
  constructor(proBrowseService, serviceCategoryService, cdr, auth, addressService) {
    this.proBrowseService = proBrowseService;
    this.serviceCategoryService = serviceCategoryService;
    this.cdr = cdr;
    this.auth = auth;
    this.addressService = addressService;
  }
  ngOnInit() {
    this.isAuthenticated = this.auth.isAuthenticated();
    if (!this.isAuthenticated) {
      this.pros = PREVIEW_PROS.map((p) => __spreadValues({}, p));
      this.showMap = false;
      this.applyUserLocationToPreviews();
      return;
    }
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
  applyUserLocationToPreviews() {
    if (!navigator.geolocation)
      return;
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      this.addressService.reverseGeocode(coords.latitude, coords.longitude).pipe(takeUntil(this.destroy$)).subscribe((loc) => {
        if (loc.city || loc.state) {
          this.pros = this.pros.map((p) => __spreadProps(__spreadValues({}, p), {
            city: loc.city || p.city,
            state: loc.state || p.state,
            country: loc.country || p.country
          }));
          this.cdr.markForCheck();
        }
      });
    }, () => {
    });
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
    if (!this.isAuthenticated)
      return;
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
    return new (__ngFactoryType__ || _FindAProComponent)(\u0275\u0275directiveInject(ProBrowseService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(AddressService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAProComponent, selectors: [["app-find-a-pro"]], viewQuery: function FindAProComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MapViewComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapView = _t.first);
    }
  }, decls: 22, vars: 13, consts: [[1, "find-pro-page"], [1, "page-header"], [1, "header-inner"], [1, "material-icons"], [1, "subtitle"], ["class", "map-toggle-btn", 3, "click", 4, "ngIf"], ["class", "filter-bar", 4, "ngIf"], ["class", "preview-banner", 4, "ngIf"], ["class", "alert-error", 4, "ngIf"], [1, "body-split"], [1, "list-panel"], ["class", "loading-wrap", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "results-meta", 4, "ngIf"], [1, "pro-list"], ["class", "pro-card", 3, "id", "highlighted", "no-location", "preview-card", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["class", "map-panel", 4, "ngIf"], [1, "map-toggle-btn", 3, "click"], [1, "filter-bar"], [1, "search-wrap"], [1, "material-icons", "search-icon"], ["type", "text", "placeholder", "Search by name, business or service...", 1, "search-input", 3, "ngModelChange", "ngModel"], ["class", "clear-btn", 3, "click", 4, "ngIf"], [1, "cat-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "clear-btn", 3, "click"], [1, "preview-banner"], [1, "preview-banner-inner"], [1, "material-icons", "preview-icon"], [1, "preview-text"], [1, "preview-actions"], ["routerLink", "/auth/login", 1, "banner-btn", "primary"], ["routerLink", "/auth/register", 1, "banner-btn", "secondary"], [1, "alert-error"], [1, "loading-wrap"], ["diameter", "40"], [1, "empty-state"], [1, "results-meta"], ["class", "no-loc-note", 4, "ngIf"], [1, "no-loc-note"], [1, "pro-card", 3, "mouseenter", "mouseleave", "click", "id"], [1, "pro-avatar"], [1, "pro-info"], [1, "pro-name"], [1, "pro-business"], [1, "pro-location"], [1, "material-icons", "loc-icon"], ["class", "pro-radius", 4, "ngIf"], ["class", "pro-services", 4, "ngIf"], ["class", "pro-badge", 4, "ngIf"], ["class", "no-loc-badge", "title", "No location set", 4, "ngIf"], [1, "pro-radius"], [1, "pro-services"], ["class", "service-chip", 4, "ngFor", "ngForOf"], ["class", "service-chip more", 4, "ngIf"], [1, "service-chip"], [1, "service-chip", "more"], [1, "pro-badge"], [1, "material-icons", "verified-icon"], ["title", "No location set", 1, "no-loc-badge"], [1, "map-panel"], [3, "markerClick", "markers", "loading", "highlightedId"]], template: function FindAProComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1")(5, "span", 3);
      \u0275\u0275text(6, "engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Find a Professional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "Browse verified service providers near you");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, FindAProComponent_button_10_Template, 4, 2, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(11, FindAProComponent_div_11_Template, 10, 5, "div", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275template(12, FindAProComponent_div_12_Template, 14, 0, "div", 7)(13, FindAProComponent_div_13_Template, 4, 1, "div", 8);
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
      \u0275\u0275template(16, FindAProComponent_div_16_Template, 4, 0, "div", 11)(17, FindAProComponent_div_17_Template, 5, 0, "div", 12)(18, FindAProComponent_div_18_Template, 3, 3, "div", 13);
      \u0275\u0275elementStart(19, "div", 14);
      \u0275\u0275template(20, FindAProComponent_div_20_Template, 16, 16, "div", 15);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(21, FindAProComponent_div_21_Template, 2, 3, "div", 16);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275classProp("map-hidden", !ctx.showMap);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.isAuthenticated && ctx.pros.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.isAuthenticated && ctx.pros.length > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("preview-blur", !ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.pros);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAuthenticated && ctx.showMap);
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
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MapViewComponent,
    SlicePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.find-pro-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.page-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.5rem 2rem 1rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n.map-toggle-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.18);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.map-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.map-toggle-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  padding: 0 0.5rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.2rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: white;\n  font-size: 0.95rem;\n  padding: 0.5rem 0.5rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.search-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n}\n.search-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cat-select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  color: white;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 160px;\n}\n.cat-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #333;\n  background: white;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #ffebee;\n  color: #c62828;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9rem;\n}\n.body-split[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n  min-height: 0;\n}\n.body-split.map-hidden[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  height: auto;\n}\n@media (max-width: 768px) {\n  .body-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 320px 320px;\n    height: auto;\n  }\n  .body-split.map-hidden[_ngcontent-%COMP%] {\n    grid-template-rows: auto;\n  }\n}\n.list-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: white;\n  border-right: 1px solid #e0e0e0;\n  height: 100%;\n}\n.loading-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #999;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.results-meta[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  font-size: 0.85rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.results-meta[_ngcontent-%COMP%]   .no-loc-note[_ngcontent-%COMP%] {\n  color: #f57c00;\n  margin-left: 0.25rem;\n}\n.pro-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pro-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.15s;\n  position: relative;\n}\n.pro-card[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.pro-card.highlighted[_ngcontent-%COMP%] {\n  background: #ede7f6;\n  border-left: 3px solid #667eea;\n}\n.pro-card.no-location[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.pro-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pro-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.2rem;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #888;\n  margin-bottom: 0.25rem;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-location[_ngcontent-%COMP%]   .loc-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #e91e63;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-radius[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #667eea;\n  margin-bottom: 0.25rem;\n}\n.pro-services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-top: 0.25rem;\n}\n.service-chip[_ngcontent-%COMP%] {\n  background: #ede7f6;\n  color: #5e35b1;\n  font-size: 0.7rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n.service-chip.more[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  color: #555;\n}\n.pro-badge[_ngcontent-%COMP%]   .verified-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #43a047;\n}\n.no-loc-badge[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #bbb;\n}\n.map-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.map-panel[_ngcontent-%COMP%]   app-map-view[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.preview-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n  padding: 1rem 1.5rem;\n}\n.preview-banner-inner[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.preview-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.preview-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.preview-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  color: #1f2937;\n  margin-bottom: 0.2rem;\n}\n.preview-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.preview-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.banner-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border-radius: 7px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.banner-btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.banner-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.banner-btn.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n  border: 1.5px solid #667eea;\n}\n.banner-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.05);\n}\n.preview-blur[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.preview-card[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.85;\n}\n@media (max-width: 768px) {\n  .body-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 320px;\n  }\n  .body-split.map-hidden[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr;\n  }\n  .list-panel[_ngcontent-%COMP%] {\n    overflow-y: auto;\n    max-height: 50vh;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n  .map-panel[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n}\n/*# sourceMappingURL=find-a-pro.css.map */'] });
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
      <button *ngIf="isAuthenticated" class="map-toggle-btn" (click)="toggleMap()">
        <span class="material-icons">{{ showMap ? 'view_list' : 'map' }}</span>
        {{ showMap ? 'List only' : 'Show map' }}
      </button>
    </div>

    <!-- Search & Filter bar \u2014 authenticated only -->
    <div *ngIf="isAuthenticated" class="filter-bar">
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

  <!-- Sign-in banner for unauthenticated users -->
  <div *ngIf="!isAuthenticated" class="preview-banner">
    <div class="preview-banner-inner">
      <span class="material-icons preview-icon">lock</span>
      <div class="preview-text">
        <strong>Sign in to browse real professionals near you</strong>
        <p>Here's a preview of the pros available on yProHub. Create a free account to see all professionals, search by service, and get in touch.</p>
      </div>
      <div class="preview-actions">
        <a routerLink="/auth/login" class="banner-btn primary">Sign In</a>
        <a routerLink="/auth/register" class="banner-btn secondary">Create Account</a>
      </div>
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

      <div *ngIf="!loading && isAuthenticated && pros.length === 0" class="empty-state">
        <span class="material-icons">search_off</span>
        <p>No professionals found. Try a different search.</p>
      </div>

      <div *ngIf="!loading && isAuthenticated && pros.length > 0" class="results-meta">
        {{ pros.length }} professional{{ pros.length !== 1 ? 's' : '' }} found
        <span *ngIf="mapMarkers.length < pros.length" class="no-loc-note">
          ({{ pros.length - mapMarkers.length }} without location \u2014 not shown on map)
        </span>
      </div>

<div class="pro-list" [class.preview-blur]="!isAuthenticated">
        <div
          *ngFor="let pro of pros"
          id="pro-card-{{ pro.id }}"
          class="pro-card"
          [class.highlighted]="highlightedProId === pro.id"
          [class.no-location]="!pro.latitude || !pro.longitude"
          [class.preview-card]="!isAuthenticated"
          (mouseenter)="isAuthenticated && hoverPro(pro.id)"
          (mouseleave)="isAuthenticated && hoverPro(null)"
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

    <!-- Right: map \u2014 authenticated only -->
    <div class="map-panel" *ngIf="isAuthenticated && showMap">
      <app-map-view
        [markers]="mapMarkers"
        [loading]="loading"
        [highlightedId]="highlightedProId"
        (markerClick)="onMapMarkerClick($event)"
      ></app-map-view>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/find-a-pro/find-a-pro.scss */\n.find-pro-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.page-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.5rem 2rem 1rem;\n}\n.page-header .header-inner {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-header h1 {\n  margin: 0 0 0.25rem;\n  font-size: 1.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-header h1 .material-icons {\n  font-size: 1.8rem;\n}\n.page-header .subtitle {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n.map-toggle-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.18);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.map-toggle-btn:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.map-toggle-btn .material-icons {\n  font-size: 1.1rem;\n}\n.filter-bar {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrap {\n  flex: 1;\n  min-width: 200px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  padding: 0 0.5rem;\n}\n.search-wrap .search-icon {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.2rem;\n}\n.search-wrap .search-input {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: white;\n  font-size: 0.95rem;\n  padding: 0.5rem 0.5rem;\n}\n.search-wrap .search-input::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.search-wrap .clear-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n}\n.search-wrap .clear-btn .material-icons {\n  font-size: 1.1rem;\n}\n.cat-select {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  color: white;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 160px;\n}\n.cat-select option {\n  color: #333;\n  background: white;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #ffebee;\n  color: #c62828;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9rem;\n}\n.body-split {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n  min-height: 0;\n}\n.body-split.map-hidden {\n  grid-template-columns: 1fr;\n  height: auto;\n}\n@media (max-width: 768px) {\n  .body-split {\n    grid-template-columns: 1fr;\n    grid-template-rows: 320px 320px;\n    height: auto;\n  }\n  .body-split.map-hidden {\n    grid-template-rows: auto;\n  }\n}\n.list-panel {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: white;\n  border-right: 1px solid #e0e0e0;\n  height: 100%;\n}\n.loading-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #666;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #999;\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: 3rem;\n}\n.results-meta {\n  padding: 0.75rem 1rem;\n  font-size: 0.85rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.results-meta .no-loc-note {\n  color: #f57c00;\n  margin-left: 0.25rem;\n}\n.pro-list {\n  display: flex;\n  flex-direction: column;\n}\n.pro-card {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.15s;\n  position: relative;\n}\n.pro-card:hover {\n  background: #f5f5f5;\n}\n.pro-card.highlighted {\n  background: #ede7f6;\n  border-left: 3px solid #667eea;\n}\n.pro-card.no-location {\n  opacity: 0.75;\n}\n.pro-avatar {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pro-info {\n  flex: 1;\n  min-width: 0;\n}\n.pro-info .pro-name {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pro-info .pro-business {\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.2rem;\n}\n.pro-info .pro-location {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #888;\n  margin-bottom: 0.25rem;\n}\n.pro-info .pro-location .loc-icon {\n  font-size: 0.95rem;\n  color: #e91e63;\n}\n.pro-info .pro-radius {\n  font-size: 0.75rem;\n  color: #667eea;\n  margin-bottom: 0.25rem;\n}\n.pro-services {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-top: 0.25rem;\n}\n.service-chip {\n  background: #ede7f6;\n  color: #5e35b1;\n  font-size: 0.7rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n.service-chip.more {\n  background: #e0e0e0;\n  color: #555;\n}\n.pro-badge .verified-icon {\n  font-size: 1.1rem;\n  color: #43a047;\n}\n.no-loc-badge .material-icons {\n  font-size: 1rem;\n  color: #bbb;\n}\n.map-panel {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.map-panel app-map-view {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n.preview-banner {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n  padding: 1rem 1.5rem;\n}\n.preview-banner-inner {\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.preview-icon {\n  font-size: 2rem;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.preview-text {\n  flex: 1;\n  min-width: 200px;\n}\n.preview-text strong {\n  display: block;\n  font-size: 0.95rem;\n  color: #1f2937;\n  margin-bottom: 0.2rem;\n}\n.preview-text p {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.preview-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.banner-btn {\n  padding: 0.5rem 1.25rem;\n  border-radius: 7px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.banner-btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.banner-btn.primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.banner-btn.secondary {\n  background: white;\n  color: #667eea;\n  border: 1.5px solid #667eea;\n}\n.banner-btn.secondary:hover {\n  background: rgba(102, 126, 234, 0.05);\n}\n.preview-blur {\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.preview-card {\n  cursor: default;\n  opacity: 0.85;\n}\n@media (max-width: 768px) {\n  .body-split {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 320px;\n  }\n  .body-split.map-hidden {\n    grid-template-rows: 1fr;\n  }\n  .list-panel {\n    overflow-y: auto;\n    max-height: 50vh;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n  .map-panel {\n    min-height: 320px;\n  }\n}\n/*# sourceMappingURL=find-a-pro.css.map */\n'] }]
  }], () => [{ type: ProBrowseService }, { type: ServiceCategoryService }, { type: ChangeDetectorRef }, { type: Auth }, { type: AddressService }], { mapView: [{
    type: ViewChild,
    args: [MapViewComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAProComponent, { className: "FindAProComponent", filePath: "src/app/features/find-a-pro/find-a-pro.ts", lineNumber: 60 });
})();
export {
  FindAProComponent
};
//# sourceMappingURL=chunk-U6ZGJ3QC.js.map

