import {
  MyServicesService
} from "./chunk-R4R6ZD2B.js";
import {
  MatSelectModule
} from "./chunk-HA4R76K5.js";
import {
  ServiceAreaService
} from "./chunk-IYIOAUDF.js";
import "./chunk-CSQZZLOB.js";
import "./chunk-K6U3OKVW.js";
import "./chunk-VYWCDBJK.js";
import "./chunk-MNMOPJB6.js";
import {
  MatFormFieldModule,
  MatInputModule
} from "./chunk-DUKA3TCG.js";
import "./chunk-ATW3VVJF.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AQNNVN3U.js";
import {
  MatButtonModule
} from "./chunk-QKBPBGFS.js";
import {
  MatIconModule
} from "./chunk-B4QCWAPP.js";
import "./chunk-SOWTMXOK.js";
import {
  AddressService
} from "./chunk-XRCLEI6I.js";
import {
  ReviewService
} from "./chunk-WPDQA74A.js";
import {
  ServiceCategoryService
} from "./chunk-YRPSZ7MM.js";
import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel,
  NgSelectOption,
  SelectControlValueAccessor,
  ɵNgSelectMultipleOption
} from "./chunk-A6TK5TPK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ZGXDPMMN.js";
import {
  Auth
} from "./chunk-6CNFBV5T.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
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
  DecimalPipe,
  HttpClient,
  HttpParams,
  Injectable,
  NgForOf,
  NgIf,
  NgZone,
  SlicePipe,
  Subject,
  debounceTime,
  distinctUntilChanged,
  firstValueFrom,
  map,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UQSUYH4V.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/services/pro-browse.service.ts
function unwrap(val) {
  return Array.isArray(val) ? val : val?.$values ?? [];
}
var ProBrowseService = class _ProBrowseService {
  http;
  base = `${environment.apiUrl}/pros/browse`;
  constructor(http) {
    this.http = http;
  }
  browse(params) {
    let p = new HttpParams();
    if (params?.search)
      p = p.set("search", params.search);
    if (params?.categoryId)
      p = p.set("categoryId", params.categoryId.toString());
    if (params?.country)
      p = p.set("country", params.country);
    if (params?.state)
      p = p.set("state", params.state);
    if (params?.district)
      p = p.set("district", params.district);
    if (params?.pinCode)
      p = p.set("pinCode", params.pinCode);
    if (params?.page)
      p = p.set("page", params.page.toString());
    if (params?.pageSize)
      p = p.set("pageSize", params.pageSize.toString());
    return this.http.get(this.base, { params: p }).pipe(map((res) => ({
      total: res.total ?? 0,
      page: res.page ?? 1,
      pageSize: res.pageSize ?? 10,
      items: unwrap(res.items).map((pro) => __spreadProps(__spreadValues({}, pro), {
        services: unwrap(pro.services)
      }))
    })));
  }
  static \u0275fac = function ProBrowseService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProBrowseService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProBrowseService, factory: _ProBrowseService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProBrowseService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/find-a-pro/find-a-pro.ts
var _c0 = (a0) => ({ km: a0 });
function FindAProComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function FindAProComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleMap());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.showMap ? "view_list" : "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.showMap ? \u0275\u0275pipeBind1(4, 2, "FIND_PRO.LIST_ONLY") : \u0275\u0275pipeBind1(5, 4, "FIND_PRO.SHOW_MAP"), " ");
  }
}
function FindAProComponent_div_13_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275listener("click", function FindAProComponent_div_13_button_6_Template_button_click_0_listener() {
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
function FindAProComponent_div_13_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 27);
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
function FindAProComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "div", 22)(2, "span", 23);
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 24);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_div_13_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function FindAProComponent_div_13_Template_input_ngModelChange_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSearchChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, FindAProComponent_div_13_button_6_Template, 3, 0, "button", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "select", 26);
    \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_div_13_Template_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.selectedCategoryId, $event) || (ctx_r1.selectedCategoryId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FindAProComponent_div_13_Template_select_change_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCategoryChange());
    });
    \u0275\u0275elementStart(8, "option", 27);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, FindAProComponent_div_13_option_11_Template, 2, 2, "option", 28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(5, 7, "FIND_PRO.SEARCH_PLACEHOLDER"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.searchText);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.selectedCategoryId);
    \u0275\u0275advance();
    \u0275\u0275property("ngValue", null);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "FIND_PRO.ALL_CATEGORIES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function FindAProComponent_div_14_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r7 = ctx.$implicit;
    \u0275\u0275property("value", c_r7);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r7);
  }
}
function FindAProComponent_div_14_option_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r8 = ctx.$implicit;
    \u0275\u0275property("value", s_r8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r8);
  }
}
function FindAProComponent_div_14_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r9 = ctx.$implicit;
    \u0275\u0275property("value", d_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r9);
  }
}
function FindAProComponent_div_14_option_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r10 = ctx.$implicit;
    \u0275\u0275property("value", p_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r10);
  }
}
function FindAProComponent_div_14_button_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function FindAProComponent_div_14_button_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearLocationFilter());
    });
    \u0275\u0275elementStart(1, "span", 3);
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "FIND_PRO.CLEAR"), " ");
  }
}
function FindAProComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 30)(1, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_div_14_Template_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterCountry, $event) || (ctx_r1.filterCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FindAProComponent_div_14_Template_select_change_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCountryChange());
    });
    \u0275\u0275elementStart(2, "option", 32);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, FindAProComponent_div_14_option_5_Template, 2, 2, "option", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_div_14_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterState, $event) || (ctx_r1.filterState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FindAProComponent_div_14_Template_select_change_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onStateChange());
    });
    \u0275\u0275elementStart(7, "option", 32);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FindAProComponent_div_14_option_10_Template, 2, 2, "option", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_div_14_Template_select_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterDistrict, $event) || (ctx_r1.filterDistrict = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FindAProComponent_div_14_Template_select_change_11_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onDistrictChange());
    });
    \u0275\u0275elementStart(12, "option", 32);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, FindAProComponent_div_14_option_15_Template, 2, 2, "option", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 31);
    \u0275\u0275twoWayListener("ngModelChange", function FindAProComponent_div_14_Template_select_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.filterPin, $event) || (ctx_r1.filterPin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("change", function FindAProComponent_div_14_Template_select_change_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onPinChange());
    });
    \u0275\u0275elementStart(17, "option", 32);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, FindAProComponent_div_14_option_20_Template, 2, 2, "option", 33);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, FindAProComponent_div_14_button_21_Template, 5, 3, "button", 34);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterCountry);
    \u0275\u0275property("disabled", ctx_r1.uniqueCountries.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 17, "FIND_PRO.ALL_COUNTRIES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.uniqueCountries);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterState);
    \u0275\u0275property("disabled", ctx_r1.stateOptions.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 19, "FIND_PRO.ALL_STATES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.stateOptions);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterDistrict);
    \u0275\u0275property("disabled", ctx_r1.districtOptions.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 21, "FIND_PRO.ALL_DISTRICTS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.districtOptions);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.filterPin);
    \u0275\u0275property("disabled", ctx_r1.pinOptions.length === 0);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 23, "FIND_PRO.ALL_PINS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.pinOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.hasLocationFilter);
  }
}
function FindAProComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38)(2, "span", 39);
    \u0275\u0275text(3, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 40)(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 41)(12, "a", 42);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "a", 43);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "FIND_PRO.SIGN_IN_BANNER_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "FIND_PRO.SIGN_IN_BANNER_SUB"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 8, "FIND_PRO.SIGN_IN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "FIND_PRO.CREATE_ACCOUNT"));
  }
}
function FindAProComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "span", 3);
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
function FindAProComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275element(1, "mat-spinner", 46);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "FIND_PRO.LOADING"));
  }
}
function FindAProComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "span", 3);
    \u0275\u0275text(2, "search_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "FIND_PRO.EMPTY"));
  }
}
function FindAProComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.totalCount, " ", \u0275\u0275pipeBind1(2, 2, "FIND_PRO.PROS_FOUND"), " ");
  }
}
function FindAProComponent_div_23_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "FIND_PRO.SERVICE_RADIUS"), " ", pro_r13.serviceRadiusKm, " km ");
  }
}
function FindAProComponent_div_23_div_13_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 66);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r14.name);
  }
}
function FindAProComponent_div_23_div_13_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 67);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("+", pro_r13.services.length - 3, " more");
  }
}
function FindAProComponent_div_23_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275template(1, FindAProComponent_div_23_div_13_span_1_Template, 2, 1, "span", 64);
    \u0275\u0275pipe(2, "slice");
    \u0275\u0275template(3, FindAProComponent_div_23_div_13_span_3_Template, 2, 1, "span", 65);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pro_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(2, 2, pro_r13.services, 0, 3));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pro_r13.services.length > 3);
  }
}
function FindAProComponent_div_23_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 68);
    \u0275\u0275text(1, "verified");
    \u0275\u0275elementEnd();
  }
}
function FindAProComponent_div_23_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69);
    \u0275\u0275text(1, "location_off");
    \u0275\u0275elementEnd();
  }
}
function FindAProComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275listener("mouseenter", function FindAProComponent_div_23_Template_div_mouseenter_0_listener() {
      const pro_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isAuthenticated && ctx_r1.hoverPro(pro_r13.id));
    })("mouseleave", function FindAProComponent_div_23_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.isAuthenticated && ctx_r1.hoverPro(null));
    })("click", function FindAProComponent_div_23_Template_div_click_0_listener() {
      const pro_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clickPro(pro_r13));
    });
    \u0275\u0275elementStart(1, "div", 50);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 51)(4, "div", 52);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 53);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 54)(9, "span", 55);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, FindAProComponent_div_23_div_12_Template, 3, 4, "div", 56)(13, FindAProComponent_div_23_div_13_Template, 4, 6, "div", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 58);
    \u0275\u0275template(15, FindAProComponent_div_23_span_15_Template, 2, 0, "span", 59)(16, FindAProComponent_div_23_span_16_Template, 2, 0, "span", 60);
    \u0275\u0275elementStart(17, "span", 61);
    \u0275\u0275text(18, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pro_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("highlighted", ctx_r1.highlightedProId === pro_r13.id)("selected", (ctx_r1.selectedPro == null ? null : ctx_r1.selectedPro.id) === pro_r13.id)("no-location", !pro_r13.latitude || !pro_r13.longitude)("preview-card", !ctx_r1.isAuthenticated);
    \u0275\u0275property("id", \u0275\u0275interpolate1("pro-card-", pro_r13.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (pro_r13.proName || "?")[0].toUpperCase(), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pro_r13.proName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r13.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLocation(pro_r13), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pro_r13.serviceRadiusKm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pro_r13.services && pro_r13.services.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pro_r13.isEmailVerified);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !pro_r13.latitude || !pro_r13.longitude);
  }
}
function FindAProComponent_div_24_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 75);
    \u0275\u0275text(1, "\u2026");
    \u0275\u0275elementEnd();
  }
}
function FindAProComponent_div_24_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, FindAProComponent_div_24_ng_container_4_span_1_Template, 2, 0, "span", 73);
    \u0275\u0275elementStart(2, "button", 74);
    \u0275\u0275listener("click", function FindAProComponent_div_24_ng_container_4_Template_button_click_2_listener() {
      const n_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.goToPage(n_r17));
    });
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const n_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showGapBefore(i_r18, ctx_r1.pageNumbers));
    \u0275\u0275advance();
    \u0275\u0275classProp("active", n_r17 === ctx_r1.page);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(n_r17);
  }
}
function FindAProComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "button", 71);
    \u0275\u0275listener("click", function FindAProComponent_div_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.page - 1));
    });
    \u0275\u0275elementStart(2, "span", 3);
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, FindAProComponent_div_24_ng_container_4_Template, 4, 4, "ng-container", 72);
    \u0275\u0275elementStart(5, "button", 71);
    \u0275\u0275listener("click", function FindAProComponent_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goToPage(ctx_r1.page + 1));
    });
    \u0275\u0275elementStart(6, "span", 3);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page === 1);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.pageNumbers);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page === ctx_r1.totalPages);
  }
}
function FindAProComponent_div_25_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 79);
    \u0275\u0275element(1, "mat-spinner", 80);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Locating professionals\u2026");
    \u0275\u0275elementEnd()();
  }
}
function FindAProComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 76);
    \u0275\u0275element(1, "div", 77);
    \u0275\u0275template(2, FindAProComponent_div_25_div_2_Template, 4, 0, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isGeocodingPros);
  }
}
function FindAProComponent_div_26_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.businessName);
  }
}
function FindAProComponent_div_26_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99);
    \u0275\u0275text(1, "verified");
    \u0275\u0275elementEnd();
  }
}
function FindAProComponent_div_26_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "span", 3);
    \u0275\u0275text(2, "radio_button_checked");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, "FIND_PRO.SERVES_WITHIN", \u0275\u0275pureFunction1(4, _c0, ctx_r1.selectedPro.serviceRadiusKm)), " ");
  }
}
function FindAProComponent_div_26_div_16_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 104);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("filled", ctx_r1.starFilled(ctx_r1.proRatingSummary.averageRating, i_r20 - 1));
  }
}
function FindAProComponent_div_26_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "div", 100);
    \u0275\u0275template(2, FindAProComponent_div_26_div_16_span_2_Template, 2, 2, "span", 101);
    \u0275\u0275elementStart(3, "span", 102);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 103);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.starsArray);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 4, ctx_r1.proRatingSummary.averageRating, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("(", ctx_r1.proRatingSummary.totalReviews, " review", ctx_r1.proRatingSummary.totalReviews !== 1 ? "s" : "", ")");
  }
}
function FindAProComponent_div_26_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105);
    \u0275\u0275element(1, "mat-spinner", 106);
    \u0275\u0275elementEnd();
  }
}
function FindAProComponent_div_26_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 107)(1, "span", 3);
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "FIND_PRO.NO_SERVICES"), " ");
  }
}
function FindAProComponent_div_26_div_23_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r21.serviceCategory.name);
  }
}
function FindAProComponent_div_26_div_23_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const service_r21 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(service_r21.description);
  }
}
function FindAProComponent_div_26_div_23_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 118);
    \u0275\u0275listener("click", function FindAProComponent_div_26_div_23_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const service_r21 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.postJobForService(service_r21));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FIND_PRO.POST_JOB"));
  }
}
function FindAProComponent_div_26_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "div", 109)(2, "div", 110);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FindAProComponent_div_26_div_23_div_4_Template, 2, 1, "div", 111)(5, FindAProComponent_div_26_div_23_div_5_Template, 2, 1, "div", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 113)(7, "div", 114);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, FindAProComponent_div_26_div_23_button_10_Template, 3, 3, "button", 115);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const service_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(service_r21.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r21.serviceCategory);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", service_r21.description);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(9, 5, service_r21.price, "1.0-0"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.canPostJob());
  }
}
function FindAProComponent_div_26_div_24_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 127);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r23 = ctx.$implicit;
    const review_r24 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("filled", ctx_r1.starFilled(review_r24.rating, i_r23 - 1));
  }
}
function FindAProComponent_div_26_div_24_div_4_p_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r24 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r24.comment);
  }
}
function FindAProComponent_div_26_div_24_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "div", 122);
    \u0275\u0275template(2, FindAProComponent_div_26_div_24_div_4_span_2_Template, 2, 2, "span", 123);
    \u0275\u0275elementStart(3, "span", 124);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 125);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, FindAProComponent_div_26_div_24_div_4_p_8_Template, 2, 1, "p", 126);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r24 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.starsArray);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r24.reviewerName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(7, 4, review_r24.createdAt, "d MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", review_r24.comment);
  }
}
function FindAProComponent_div_26_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119)(1, "h3", 92);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, FindAProComponent_div_26_div_24_div_4_Template, 9, 7, "div", 120);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FIND_PRO.CUSTOMER_REVIEWS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.proReviews);
  }
}
function FindAProComponent_div_26_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 129)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 130);
    \u0275\u0275listener("click", function FindAProComponent_div_26_div_25_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.postJobGeneral());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FIND_PRO.CTA_UNSURE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "FIND_PRO.POST_GENERAL"));
  }
}
function FindAProComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "div", 82)(2, "button", 83);
    \u0275\u0275listener("click", function FindAProComponent_div_26_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closePro());
    });
    \u0275\u0275elementStart(3, "span", 3);
    \u0275\u0275text(4, "arrow_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 84)(6, "span", 85);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, FindAProComponent_div_26_span_8_Template, 2, 1, "span", 86);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FindAProComponent_div_26_span_9_Template, 2, 0, "span", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 88)(11, "div", 89)(12, "span", 3);
    \u0275\u0275text(13, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, FindAProComponent_div_26_div_15_Template, 5, 6, "div", 90)(16, FindAProComponent_div_26_div_16_Template, 8, 7, "div", 90);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 91)(18, "h3", 92);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, FindAProComponent_div_26_div_21_Template, 2, 0, "div", 93)(22, FindAProComponent_div_26_div_22_Template, 5, 3, "div", 94)(23, FindAProComponent_div_26_div_23_Template, 11, 8, "div", 95);
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, FindAProComponent_div_26_div_24_Template, 5, 4, "div", 96)(25, FindAProComponent_div_26_div_25_Template, 7, 6, "div", 97);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.proName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPro.businessName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPro.isEmailVerified);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.getLocation(ctx_r1.selectedPro), " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPro.serviceRadiusKm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.proRatingSummary && ctx_r1.proRatingSummary.totalReviews > 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, "FIND_PRO.SERVICES_OFFERED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.proServicesLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.proServicesLoading && ctx_r1.proServices.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.proServices);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.proReviewsLoading && ctx_r1.proReviews.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.proServicesLoading && ctx_r1.canPostJob());
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
  serviceAreaService;
  cdr;
  auth;
  addressService;
  myServicesService;
  router;
  reviewService;
  http;
  zone;
  pros = [];
  loading = false;
  errorMessage = "";
  searchText = "";
  selectedCategoryId = null;
  categories = [];
  highlightedProId = null;
  showMap = true;
  isAuthenticated = false;
  // Location filters
  serviceAreas = [];
  filterCountry = "India";
  filterState = "";
  filterDistrict = "";
  filterPin = "";
  // Pagination
  page = 1;
  pageSize = 10;
  totalCount = 0;
  selectedPro = null;
  proServices = [];
  proServicesLoading = false;
  proRatingSummary = null;
  proReviews = [];
  proReviewsLoading = false;
  starsArray = [1, 2, 3, 4, 5];
  // Direct Leaflet map
  leafletMap = null;
  leafletProMarkers = [];
  leafletMarkerMap = /* @__PURE__ */ new Map();
  isGeocodingPros = false;
  mapLoadId = 0;
  geocodeCache = /* @__PURE__ */ new Map();
  search$ = new Subject();
  destroy$ = new Subject();
  constructor(proBrowseService, serviceCategoryService, serviceAreaService, cdr, auth, addressService, myServicesService, router, reviewService, http, zone) {
    this.proBrowseService = proBrowseService;
    this.serviceCategoryService = serviceCategoryService;
    this.serviceAreaService = serviceAreaService;
    this.cdr = cdr;
    this.auth = auth;
    this.addressService = addressService;
    this.myServicesService = myServicesService;
    this.router = router;
    this.reviewService = reviewService;
    this.http = http;
    this.zone = zone;
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
    this.serviceAreaService.getActive().pipe(takeUntil(this.destroy$)).subscribe({
      next: (areas) => {
        this.serviceAreas = areas;
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
    this.search$.pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.page = 1;
      this.load();
    });
    this.load();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.search$.complete();
    if (this.leafletMap) {
      this.leafletMap.remove();
      this.leafletMap = null;
    }
  }
  // ── Location filter derived options ─────────────────────
  get uniqueCountries() {
    return [...new Set(this.serviceAreas.map((a) => a.country).filter(Boolean))].sort();
  }
  get stateOptions() {
    if (!this.filterCountry)
      return [];
    return [...new Set(this.serviceAreas.filter((a) => a.country?.toLowerCase() === this.filterCountry.toLowerCase() && a.state).map((a) => a.state))].sort();
  }
  get districtOptions() {
    if (!this.filterState)
      return [];
    return [...new Set(this.serviceAreas.filter((a) => a.state?.toLowerCase() === this.filterState.toLowerCase() && a.district).map((a) => a.district))].sort();
  }
  get pinOptions() {
    if (!this.filterDistrict)
      return [];
    return [...new Set(this.serviceAreas.filter((a) => a.district?.toLowerCase() === this.filterDistrict.toLowerCase() && a.pinCode).map((a) => a.pinCode))].sort();
  }
  get hasLocationFilter() {
    return !!(this.filterCountry || this.filterState || this.filterDistrict || this.filterPin);
  }
  // ── Pagination ───────────────────────────────────────────
  get totalPages() {
    return Math.max(1, Math.ceil(this.totalCount / this.pageSize));
  }
  get pageNumbers() {
    const total = this.totalPages;
    if (total <= 7)
      return Array.from({ length: total }, (_, i) => i + 1);
    const around = new Set([1, total, this.page - 1, this.page, this.page + 1].filter((n) => n >= 1 && n <= total));
    return [...around].sort((a, b) => a - b);
  }
  showGapBefore(index, nums) {
    return index > 0 && nums[index] - nums[index - 1] > 1;
  }
  goToPage(n) {
    if (n < 1 || n > this.totalPages || n === this.page)
      return;
    this.page = n;
    this.load();
  }
  // ── Filter change handlers ───────────────────────────────
  onCountryChange() {
    this.filterState = "";
    this.filterDistrict = "";
    this.filterPin = "";
    this.page = 1;
    this.load();
  }
  onStateChange() {
    this.filterDistrict = "";
    this.filterPin = "";
    this.page = 1;
    this.load();
  }
  onDistrictChange() {
    this.filterPin = "";
    this.page = 1;
    this.load();
  }
  onPinChange() {
    this.page = 1;
    this.load();
  }
  clearLocationFilter() {
    this.filterCountry = "";
    this.filterState = "";
    this.filterDistrict = "";
    this.filterPin = "";
    this.page = 1;
    this.load();
  }
  // ── Core load ────────────────────────────────────────────
  load() {
    this.loading = true;
    this.errorMessage = "";
    this.cdr.markForCheck();
    this.proBrowseService.browse({
      search: this.searchText.trim() || void 0,
      categoryId: this.selectedCategoryId,
      country: this.filterCountry || void 0,
      state: this.filterState || void 0,
      district: this.filterDistrict || void 0,
      pinCode: this.filterPin || void 0,
      page: this.page,
      pageSize: this.pageSize
    }).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        this.pros = result.items;
        this.totalCount = result.total;
        this.loading = false;
        this.cdr.markForCheck();
        if (this.showMap) {
          if (!this.leafletMap) {
            setTimeout(() => this.initProMap(), 150);
          } else {
            this.loadProMapMarkers();
          }
        }
      },
      error: () => {
        this.errorMessage = "Failed to load professionals. Please try again.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  // ── Direct Leaflet map ───────────────────────────────────
  async initProMap() {
    const container = document.getElementById("pro-map");
    if (!container)
      return;
    const L = await import("./chunk-34LDLRB4.js");
    if (this.leafletMap) {
      this.leafletMap.remove();
      this.leafletMap = null;
    }
    this.leafletMap = L.map(container).setView([20, 78], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.leafletMap);
    await this.loadProMapMarkers();
  }
  async loadProMapMarkers() {
    if (!this.leafletMap)
      return;
    const L = await import("./chunk-34LDLRB4.js");
    const loadId = ++this.mapLoadId;
    this.leafletProMarkers.forEach((m) => {
      try {
        m.remove();
      } catch {
      }
    });
    this.leafletProMarkers = [];
    this.leafletMarkerMap.clear();
    this.isGeocodingPros = true;
    this.cdr.markForCheck();
    const latLngs = [];
    const posUsage = /* @__PURE__ */ new Map();
    for (const pro of this.pros) {
      if (loadId !== this.mapLoadId)
        return;
      const pos = await this.geocodePro(pro);
      if (loadId !== this.mapLoadId)
        return;
      if (!pos)
        continue;
      const isExact = pro.latitude != null && pro.longitude != null;
      let lat = pos.lat;
      let lng = pos.lng;
      if (!isExact) {
        const posKey = `${pos.lat.toFixed(3)},${pos.lng.toFixed(3)}`;
        const n = posUsage.get(posKey) ?? 0;
        posUsage.set(posKey, n + 1);
        if (n > 0) {
          const r = 3e-3 * Math.ceil(n / 8);
          const angle = n * 2.39996;
          lat += r * Math.cos(angle);
          lng += r * Math.sin(angle);
        }
      }
      latLngs.push([lat, lng]);
      const isHighlighted = this.highlightedProId === pro.id;
      const icon = this.buildProIcon(L, isHighlighted);
      const services = (pro.services ?? []).slice(0, 3).map((s) => this.escHtml(s.name)).join(", ");
      const location = [pro.city, pro.state, pro.country].filter(Boolean).map((s) => this.escHtml(s)).join(", ");
      const popup = `<div style="font-family:Roboto,sans-serif;min-width:160px;line-height:1.5">
        <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#1f2937">${this.escHtml(pro.proName)}</p>
        ${pro.businessName ? `<p style="margin:0 0 2px;font-size:12px;color:#6b7280">${this.escHtml(pro.businessName)}</p>` : ""}
        ${location ? `<p style="margin:0 0 4px;font-size:12px;color:#9ca3af">${location}</p>` : ""}
        ${services ? `<p style="margin:0;font-size:12px;color:#667eea">${services}</p>` : ""}
        ${pro.isEmailVerified ? '<span style="font-size:12px;font-weight:600;color:#10b981">\u2713 Verified</span>' : ""}
      </div>`;
      const marker = L.marker([lat, lng], { icon }).bindPopup(popup, { maxWidth: 240 });
      marker.on("click", () => {
        this.zone.run(() => this.onMapMarkerClick(pro.id));
      });
      marker.addTo(this.leafletMap);
      this.leafletProMarkers.push(marker);
      this.leafletMarkerMap.set(pro.id, marker);
    }
    if (loadId !== this.mapLoadId)
      return;
    if (this.filterDistrict) {
      await this.fitMapToRegion(loadId);
    } else if (latLngs.length === 1) {
      this.leafletMap.setView(latLngs[0], 12);
    } else if (latLngs.length > 1) {
      this.leafletMap.fitBounds(latLngs, { padding: [40, 40], maxZoom: 12 });
    } else if (this.filterState || this.filterCountry) {
      await this.fitMapToRegion(loadId);
    }
    if (loadId !== this.mapLoadId)
      return;
    this.isGeocodingPros = false;
    this.cdr.markForCheck();
  }
  async fitMapToRegion(loadId) {
    const regionKey = [this.filterDistrict, this.filterState, this.filterCountry].filter(Boolean).join(", ");
    if (!regionKey)
      return;
    try {
      const countryCode = this.countryToIsoCode(this.filterCountry);
      const results = await firstValueFrom(this.http.get(`${environment.apiUrl}/address/search`, {
        params: { query: regionKey, countryCode }
      }));
      if (loadId !== this.mapLoadId)
        return;
      if (Array.isArray(results) && results.length > 0) {
        const r = results[0];
        const bb = r.boundingbox;
        if (bb && bb.length === 4) {
          this.leafletMap.fitBounds([[parseFloat(bb[0]), parseFloat(bb[2])], [parseFloat(bb[1]), parseFloat(bb[3])]], { padding: [40, 40], maxZoom: 10 });
        } else {
          this.leafletMap.setView([parseFloat(r.lat), parseFloat(r.lon)], 8);
        }
      }
    } catch {
    }
  }
  async geocodePro(pro) {
    if (pro.latitude != null && pro.longitude != null) {
      return { lat: pro.latitude, lng: pro.longitude };
    }
    const city = pro.city || this.filterDistrict || void 0;
    const state = pro.state || this.filterState || void 0;
    const country = pro.country || this.filterCountry || void 0;
    const queryStrings = [];
    if (city && state && country) {
      queryStrings.push(`${city}, ${state}, ${country}`);
      queryStrings.push(`${state}, ${country}`);
    } else if (city && state) {
      queryStrings.push(`${city}, ${state}`);
      queryStrings.push(state);
    } else if (state && country) {
      queryStrings.push(`${state}, ${country}`);
    } else if (country) {
      queryStrings.push(country);
    }
    if (queryStrings.length === 0)
      return null;
    const cacheKey = queryStrings[0];
    if (this.geocodeCache.has(cacheKey))
      return this.geocodeCache.get(cacheKey) ?? null;
    const countryCode = this.countryToIsoCode(country);
    for (const query of queryStrings) {
      try {
        const results = await firstValueFrom(this.http.get(`${environment.apiUrl}/address/search`, {
          params: { query, countryCode }
        }));
        if (Array.isArray(results) && results.length > 0) {
          const r = results[0];
          const lat = parseFloat(r.lat);
          const lng = parseFloat(r.lon);
          if (!isNaN(lat) && !isNaN(lng)) {
            const pos = { lat, lng };
            this.geocodeCache.set(cacheKey, pos);
            return pos;
          }
        }
      } catch {
      }
    }
    return null;
  }
  countryToIsoCode(country) {
    if (!country)
      return "in";
    const map2 = {
      "india": "in",
      "uk": "gb",
      "united kingdom": "gb",
      "england": "gb",
      "us": "us",
      "usa": "us",
      "united states": "us",
      "australia": "au",
      "canada": "ca"
    };
    return map2[country.toLowerCase()] ?? "in";
  }
  buildProIcon(L, highlighted) {
    const color = highlighted ? "#ff9800" : "#667eea";
    const size = highlighted ? 26 : 18;
    return L.divIcon({
      className: "",
      html: `<div style="width:${size}px;height:${size}px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,0.4)"></div>`,
      iconSize: [size, size],
      iconAnchor: [size / 2, size / 2]
    });
  }
  async updateMarkerHighlight() {
    if (!this.leafletMap)
      return;
    const L = await import("./chunk-34LDLRB4.js");
    for (const [proId, marker] of this.leafletMarkerMap) {
      marker.setIcon(this.buildProIcon(L, proId === this.highlightedProId));
    }
  }
  escHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  // ── Other helpers ────────────────────────────────────────
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
  onSearchChange() {
    this.search$.next(this.searchText);
  }
  onCategoryChange() {
    this.page = 1;
    this.load();
  }
  hoverPro(id) {
    this.highlightedProId = id;
    this.cdr.markForCheck();
    this.updateMarkerHighlight();
  }
  clickPro(pro) {
    if (!this.isAuthenticated)
      return;
    this.highlightedProId = pro.id;
    this.selectedPro = pro;
    this.proServices = [];
    this.proServicesLoading = true;
    this.proRatingSummary = null;
    this.proReviews = [];
    this.proReviewsLoading = true;
    if (this.leafletMap) {
      this.leafletMap.remove();
      this.leafletMap = null;
    }
    this.cdr.markForCheck();
    this.reviewService.getProRatingSummary(pro.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (summary) => {
        this.proRatingSummary = summary;
        this.cdr.markForCheck();
      },
      error: () => {
        this.cdr.markForCheck();
      }
    });
    this.reviewService.getProReviews(pro.id, 1, 5).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        this.proReviews = result.reviews ?? [];
        this.proReviewsLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.proReviewsLoading = false;
        this.cdr.markForCheck();
      }
    });
    this.myServicesService.getMyServices(pro.id).pipe(takeUntil(this.destroy$)).subscribe({
      next: (services) => {
        this.proServices = services;
        this.proServicesLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.proServicesLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  closePro() {
    this.selectedPro = null;
    this.proServices = [];
    this.proRatingSummary = null;
    this.proReviews = [];
    this.cdr.markForCheck();
    if (this.showMap) {
      setTimeout(() => this.initProMap(), 150);
    }
  }
  starFilled(rating, index) {
    return index + 1 <= Math.round(rating);
  }
  onMapMarkerClick(id) {
    const pro = this.pros.find((p) => p.id === id);
    if (pro) {
      this.clickPro(pro);
    } else {
      this.highlightedProId = id;
      this.cdr.markForCheck();
    }
    const el = document.getElementById(`pro-card-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  isProUser() {
    return this.auth.getUserType() === "Pro";
  }
  isAdmin() {
    return this.auth.getUserType() === "Admin";
  }
  canPostJob() {
    return this.isAuthenticated && !this.isProUser() && !this.isAdmin();
  }
  postJobForService(service) {
    const params = {};
    if (service.serviceCategoryId)
      params["categoryId"] = String(service.serviceCategoryId);
    if (service.name)
      params["title"] = service.name;
    this.router.navigate(["/post-job"], { queryParams: params });
  }
  postJobGeneral() {
    this.router.navigate(["/post-job"]);
  }
  toggleMap() {
    this.showMap = !this.showMap;
    this.cdr.markForCheck();
    if (this.showMap) {
      setTimeout(() => this.initProMap(), 150);
    } else {
      if (this.leafletMap) {
        this.leafletMap.remove();
        this.leafletMap = null;
      }
    }
  }
  getLocation(pro) {
    return [pro.city, pro.state, pro.country].filter(Boolean).join(", ") || "Location not set";
  }
  static \u0275fac = function FindAProComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FindAProComponent)(\u0275\u0275directiveInject(ProBrowseService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(ServiceAreaService), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(AddressService), \u0275\u0275directiveInject(MyServicesService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ReviewService), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(NgZone));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FindAProComponent, selectors: [["app-find-a-pro"]], decls: 27, vars: 22, consts: [[1, "find-pro-page"], [1, "page-header"], [1, "header-inner"], [1, "material-icons"], [1, "subtitle"], ["class", "map-toggle-btn", 3, "click", 4, "ngIf"], ["class", "filter-bar", 4, "ngIf"], ["class", "location-filter-bar", 4, "ngIf"], ["class", "preview-banner", 4, "ngIf"], ["class", "alert-error", 4, "ngIf"], [1, "body-split"], [1, "list-panel"], ["class", "loading-wrap", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "results-meta", 4, "ngIf"], [1, "pro-list"], ["class", "pro-card", 3, "id", "highlighted", "selected", "no-location", "preview-card", "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], ["class", "pagination", 4, "ngIf"], ["class", "map-panel", 4, "ngIf"], ["class", "pro-detail-panel", 4, "ngIf"], [1, "map-toggle-btn", 3, "click"], [1, "filter-bar"], [1, "search-wrap"], [1, "material-icons", "search-icon"], ["type", "text", 1, "search-input", 3, "ngModelChange", "placeholder", "ngModel"], ["class", "clear-btn", 3, "click", 4, "ngIf"], [1, "cat-select", 3, "ngModelChange", "change", "ngModel"], [3, "ngValue"], [3, "ngValue", 4, "ngFor", "ngForOf"], [1, "clear-btn", 3, "click"], [1, "location-filter-bar"], [1, "loc-select", 3, "ngModelChange", "change", "ngModel", "disabled"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "loc-clear-btn", 3, "click", 4, "ngIf"], [3, "value"], [1, "loc-clear-btn", 3, "click"], [1, "preview-banner"], [1, "preview-banner-inner"], [1, "material-icons", "preview-icon"], [1, "preview-text"], [1, "preview-actions"], ["routerLink", "/auth/login", 1, "banner-btn", "primary"], ["routerLink", "/auth/register", 1, "banner-btn", "secondary"], [1, "alert-error"], [1, "loading-wrap"], ["diameter", "40"], [1, "empty-state"], [1, "results-meta"], [1, "pro-card", 3, "mouseenter", "mouseleave", "click", "id"], [1, "pro-avatar"], [1, "pro-info"], [1, "pro-name"], [1, "pro-business"], [1, "pro-location"], [1, "material-icons", "loc-icon"], ["class", "pro-radius", 4, "ngIf"], ["class", "pro-services", 4, "ngIf"], [1, "pro-right-col"], ["class", "material-icons verified-icon", "title", "Verified", 4, "ngIf"], ["class", "material-icons no-loc-icon", "title", "No location set", 4, "ngIf"], [1, "material-icons", "chevron-icon"], [1, "pro-radius"], [1, "pro-services"], ["class", "service-chip", 4, "ngFor", "ngForOf"], ["class", "service-chip more", 4, "ngIf"], [1, "service-chip"], [1, "service-chip", "more"], ["title", "Verified", 1, "material-icons", "verified-icon"], ["title", "No location set", 1, "material-icons", "no-loc-icon"], [1, "pagination"], [1, "pg-btn", 3, "click", "disabled"], [4, "ngFor", "ngForOf"], ["class", "pg-gap", 4, "ngIf"], [1, "pg-btn", 3, "click"], [1, "pg-gap"], [1, "map-panel"], ["id", "pro-map", 1, "pro-map-el"], ["class", "map-geocoding-indicator", 4, "ngIf"], [1, "map-geocoding-indicator"], ["diameter", "18"], [1, "pro-detail-panel"], [1, "pd-header"], ["aria-label", "Back to list", 1, "pd-back-btn", 3, "click"], [1, "pd-title"], [1, "pd-name"], ["class", "pd-business", 4, "ngIf"], ["class", "material-icons pd-verified", "title", "Verified professional", 4, "ngIf"], [1, "pd-meta"], [1, "pd-meta-row"], ["class", "pd-meta-row", 4, "ngIf"], [1, "pd-services-section"], [1, "pd-section-title"], ["class", "pd-loading", 4, "ngIf"], ["class", "pd-empty", 4, "ngIf"], ["class", "pd-service-card", 4, "ngFor", "ngForOf"], ["class", "pd-reviews-section", 4, "ngIf"], ["class", "pd-cta", 4, "ngIf"], [1, "pd-business"], ["title", "Verified professional", 1, "material-icons", "pd-verified"], [1, "pd-rating-inline"], ["class", "pd-star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "pd-rating-num"], [1, "pd-rating-count"], [1, "pd-star"], [1, "pd-loading"], ["diameter", "32"], [1, "pd-empty"], [1, "pd-service-card"], [1, "pd-service-info"], [1, "pd-service-name"], ["class", "pd-service-cat", 4, "ngIf"], ["class", "pd-service-desc", 4, "ngIf"], [1, "pd-service-right"], [1, "pd-service-price"], ["class", "pd-post-btn", 3, "click", 4, "ngIf"], [1, "pd-service-cat"], [1, "pd-service-desc"], [1, "pd-post-btn", 3, "click"], [1, "pd-reviews-section"], ["class", "pd-review-card", 4, "ngFor", "ngForOf"], [1, "pd-review-card"], [1, "pd-review-header"], ["class", "pd-star sm", 3, "filled", 4, "ngFor", "ngForOf"], [1, "pd-review-author"], [1, "pd-review-date"], ["class", "pd-review-comment", 4, "ngIf"], [1, "pd-star", "sm"], [1, "pd-review-comment"], [1, "pd-cta"], [1, "pd-post-general-btn", 3, "click"]], template: function FindAProComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1")(5, "span", 3);
      \u0275\u0275text(6, "engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 4);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(12, FindAProComponent_button_12_Template, 6, 6, "button", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275template(13, FindAProComponent_div_13_Template, 12, 11, "div", 6)(14, FindAProComponent_div_14_Template, 22, 25, "div", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275template(15, FindAProComponent_div_15_Template, 18, 12, "div", 8)(16, FindAProComponent_div_16_Template, 4, 1, "div", 9);
      \u0275\u0275elementStart(17, "div", 10)(18, "div", 11);
      \u0275\u0275template(19, FindAProComponent_div_19_Template, 5, 3, "div", 12)(20, FindAProComponent_div_20_Template, 6, 3, "div", 13)(21, FindAProComponent_div_21_Template, 3, 4, "div", 14);
      \u0275\u0275elementStart(22, "div", 15);
      \u0275\u0275template(23, FindAProComponent_div_23_Template, 19, 18, "div", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275template(24, FindAProComponent_div_24_Template, 8, 3, "div", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, FindAProComponent_div_25_Template, 3, 1, "div", 18)(26, FindAProComponent_div_26_Template, 26, 14, "div", 19);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 18, "FIND_PRO.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 20, "FIND_PRO.SUBTITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275classProp("map-hidden", !ctx.showMap && !ctx.selectedPro);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.isAuthenticated && ctx.pros.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.isAuthenticated && ctx.totalCount > 0);
      \u0275\u0275advance();
      \u0275\u0275classProp("preview-blur", !ctx.isAuthenticated);
      \u0275\u0275advance();
      \u0275\u0275property("ngForOf", ctx.pros);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAuthenticated && !ctx.loading && ctx.totalPages > 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAuthenticated && ctx.showMap && !ctx.selectedPro);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isAuthenticated && ctx.selectedPro);
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
    TranslateModule,
    SlicePipe,
    DecimalPipe,
    DatePipe,
    TranslatePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.find-pro-page[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.page-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.5rem 2rem 1rem;\n}\n.page-header[_ngcontent-%COMP%]   .header-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 1.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n.map-toggle-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.18);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.map-toggle-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.map-toggle-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  padding: 0 0.5rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.2rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: white;\n  font-size: 0.95rem;\n  padding: 0.5rem 0.5rem;\n}\n.search-wrap[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.search-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n}\n.search-wrap[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cat-select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  color: white;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 160px;\n}\n.cat-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #333;\n  background: white;\n}\n.location-filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n  align-items: center;\n}\n.loc-select[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  color: white;\n  padding: 0.4rem 0.65rem;\n  font-size: 0.85rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 130px;\n}\n.loc-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%] {\n  color: #333;\n  background: white;\n}\n.loc-select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.loc-clear-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: rgba(255, 255, 255, 0.18);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  border-radius: 6px;\n  padding: 0.4rem 0.75rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.loc-clear-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.loc-clear-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.alert-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #ffebee;\n  color: #c62828;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9rem;\n}\n.body-split[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n  min-height: 0;\n}\n.body-split.map-hidden[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n  height: auto;\n}\n@media (max-width: 768px) {\n  .body-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 320px 320px;\n    height: auto;\n  }\n  .body-split.map-hidden[_ngcontent-%COMP%] {\n    grid-template-rows: auto;\n  }\n}\n.list-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: white;\n  border-right: 1px solid #e0e0e0;\n  height: 100%;\n}\n.loading-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #999;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 3rem;\n}\n.results-meta[_ngcontent-%COMP%] {\n  padding: 0.75rem 1rem;\n  font-size: 0.85rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.results-meta[_ngcontent-%COMP%]   .no-loc-note[_ngcontent-%COMP%] {\n  color: #f57c00;\n  margin-left: 0.25rem;\n}\n.pro-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pro-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.15s;\n  position: relative;\n}\n.pro-card[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.pro-card.highlighted[_ngcontent-%COMP%] {\n  background: #ede7f6;\n  border-left: 3px solid #667eea;\n}\n.pro-card.no-location[_ngcontent-%COMP%] {\n  opacity: 0.75;\n}\n.pro-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pro-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.2rem;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-location[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #888;\n  margin-bottom: 0.25rem;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-location[_ngcontent-%COMP%]   .loc-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #e91e63;\n}\n.pro-info[_ngcontent-%COMP%]   .pro-radius[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #667eea;\n  margin-bottom: 0.25rem;\n}\n.pro-services[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-top: 0.25rem;\n}\n.service-chip[_ngcontent-%COMP%] {\n  background: #ede7f6;\n  color: #5e35b1;\n  font-size: 0.7rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n.service-chip.more[_ngcontent-%COMP%] {\n  background: #e0e0e0;\n  color: #555;\n}\n.pro-right-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  flex-shrink: 0;\n  padding-top: 0.15rem;\n}\n.verified-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #43a047;\n}\n.no-loc-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #bbb;\n}\n.chevron-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #ccc;\n  margin-top: auto;\n}\n.pro-card.selected[_ngcontent-%COMP%] {\n  background: #ede7f6;\n  border-left: 3px solid #667eea;\n}\n.map-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.pro-map-el[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n}\n.map-geocoding-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 20px;\n  padding: 0.4rem 1rem 0.4rem 0.65rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  color: #555;\n  z-index: 1000;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n  pointer-events: none;\n}\n.preview-banner[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n  padding: 1rem 1.5rem;\n}\n.preview-banner-inner[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.preview-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.preview-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 200px;\n}\n.preview-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.95rem;\n  color: #1f2937;\n  margin-bottom: 0.2rem;\n}\n.preview-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.preview-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.banner-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  border-radius: 7px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.banner-btn.primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.banner-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.banner-btn.secondary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n  border: 1.5px solid #667eea;\n}\n.banner-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.05);\n}\n.preview-blur[_ngcontent-%COMP%] {\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.preview-card[_ngcontent-%COMP%] {\n  cursor: default;\n  opacity: 0.85;\n}\n.pro-detail-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  height: 100%;\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .pro-detail-panel[_ngcontent-%COMP%] {\n    position: fixed;\n    inset: 0;\n    z-index: 200;\n    height: 100dvh;\n  }\n}\n.pd-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  flex-shrink: 0;\n}\n.pd-back-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.pd-back-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.32);\n}\n.pd-back-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n}\n.pd-title[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pd-name[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 700;\n  font-size: 1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pd-business[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.82rem;\n  opacity: 0.85;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pd-verified[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: #a5f3c4;\n  flex-shrink: 0;\n}\n.pd-meta[_ngcontent-%COMP%] {\n  padding: 0.85rem 1.25rem;\n  background: #fafafa;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  flex-shrink: 0;\n}\n.pd-meta-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  color: #555;\n}\n.pd-meta-row[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: #667eea;\n}\n.pd-services-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1rem 1.25rem;\n}\n.pd-section-title[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #999;\n  margin: 0 0 0.85rem;\n}\n.pd-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 2rem 0;\n}\n.pd-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #aaa;\n  font-size: 0.9rem;\n  padding: 0.5rem 0;\n}\n.pd-empty[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.pd-service-card[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 10px;\n  margin-bottom: 0.65rem;\n  transition: box-shadow 0.15s;\n}\n.pd-service-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n}\n.pd-service-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pd-service-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n  margin-bottom: 0.15rem;\n}\n.pd-service-cat[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #667eea;\n  margin-bottom: 0.2rem;\n}\n.pd-service-desc[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #666;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.pd-service-right[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.pd-service-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: #2e7d32;\n  white-space: nowrap;\n}\n.pd-post-btn[_ngcontent-%COMP%] {\n  background: var(--color-primary, #667eea);\n  color: white;\n  border: none;\n  border-radius: 7px;\n  padding: 0.4rem 0.85rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: inherit;\n  transition: opacity 0.15s;\n}\n.pd-post-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.pd-cta[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  text-align: center;\n  flex-shrink: 0;\n}\n.pd-cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #888;\n  margin: 0 0 0.75rem;\n}\n.pd-rating-inline[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.pd-star[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  font-size: 15px;\n  line-height: 1;\n}\n.pd-star.filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.pd-star.sm[_ngcontent-%COMP%] {\n  font-size: 13px;\n}\n.pd-rating-num[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-left: 3px;\n}\n.pd-rating-count[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n.pd-reviews-section[_ngcontent-%COMP%] {\n  padding: 0 1.25rem 1rem;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 0.25rem;\n  padding-top: 1rem;\n}\n.pd-review-card[_ngcontent-%COMP%] {\n  padding: 0.65rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.pd-review-card[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.pd-review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  flex-wrap: wrap;\n  margin-bottom: 3px;\n}\n.pd-review-author[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #374151;\n}\n.pd-review-date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin-left: auto;\n}\n.pd-review-comment[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #4b5563;\n  margin: 0;\n  line-height: 1.45;\n}\n.pd-post-general-btn[_ngcontent-%COMP%] {\n  background: white;\n  color: var(--color-primary, #667eea);\n  border: 2px solid var(--color-primary, #667eea);\n  border-radius: 8px;\n  padding: 0.6rem 1.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  width: 100%;\n  transition: background 0.15s;\n}\n.pd-post-general-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.pagination[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.75rem 1rem;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.pg-btn[_ngcontent-%COMP%] {\n  min-width: 32px;\n  height: 32px;\n  border: 1.5px solid #e0e0e0;\n  border-radius: 6px;\n  background: white;\n  color: #444;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n  padding: 0 0.4rem;\n  font-family: inherit;\n}\n.pg-btn[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.pg-btn[_ngcontent-%COMP%]:hover:not(:disabled):not(.active) {\n  background: #f0f0f0;\n  border-color: #bbb;\n}\n.pg-btn.active[_ngcontent-%COMP%] {\n  background: #667eea;\n  border-color: #667eea;\n  color: white;\n  font-weight: 700;\n}\n.pg-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.pg-gap[_ngcontent-%COMP%] {\n  color: #aaa;\n  font-size: 0.9rem;\n  padding: 0 0.15rem;\n}\n@media (max-width: 768px) {\n  .body-split[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 320px;\n  }\n  .body-split.map-hidden[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr;\n  }\n  .list-panel[_ngcontent-%COMP%] {\n    overflow-y: auto;\n    max-height: 50vh;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n  .map-panel[_ngcontent-%COMP%] {\n    min-height: 320px;\n  }\n}\n/*# sourceMappingURL=find-a-pro.css.map */'] });
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
      TranslateModule
    ], template: `<div class="find-pro-page">
  <!-- Header -->
  <div class="page-header">
    <div class="header-inner">
      <div>
        <h1><span class="material-icons">engineering</span> {{ 'FIND_PRO.TITLE' | translate }}</h1>
        <p class="subtitle">{{ 'FIND_PRO.SUBTITLE' | translate }}</p>
      </div>
      <button *ngIf="isAuthenticated" class="map-toggle-btn" (click)="toggleMap()">
        <span class="material-icons">{{ showMap ? 'view_list' : 'map' }}</span>
        {{ showMap ? ('FIND_PRO.LIST_ONLY' | translate) : ('FIND_PRO.SHOW_MAP' | translate) }}
      </button>
    </div>

    <!-- Search & Filter bar \u2014 authenticated only -->
    <div *ngIf="isAuthenticated" class="filter-bar">
      <div class="search-wrap">
        <span class="material-icons search-icon">search</span>
        <input
          type="text"
          class="search-input"
          [placeholder]="'FIND_PRO.SEARCH_PLACEHOLDER' | translate"
          [(ngModel)]="searchText"
          (ngModelChange)="onSearchChange()"
        />
        <button *ngIf="searchText" class="clear-btn" (click)="searchText=''; onSearchChange()">
          <span class="material-icons">close</span>
        </button>
      </div>
      <select class="cat-select" [(ngModel)]="selectedCategoryId" (change)="onCategoryChange()">
        <option [ngValue]="null">{{ 'FIND_PRO.ALL_CATEGORIES' | translate }}</option>
        <option *ngFor="let c of categories" [ngValue]="c.id">{{ c.name }}</option>
      </select>
    </div>

    <!-- Location filter row -->
    <div class="location-filter-bar" *ngIf="isAuthenticated">
      <select class="loc-select" [(ngModel)]="filterCountry" (change)="onCountryChange()"
              [disabled]="uniqueCountries.length === 0">
        <option value="">{{ 'FIND_PRO.ALL_COUNTRIES' | translate }}</option>
        <option *ngFor="let c of uniqueCountries" [value]="c">{{ c }}</option>
      </select>
      <select class="loc-select" [(ngModel)]="filterState" (change)="onStateChange()"
              [disabled]="stateOptions.length === 0">
        <option value="">{{ 'FIND_PRO.ALL_STATES' | translate }}</option>
        <option *ngFor="let s of stateOptions" [value]="s">{{ s }}</option>
      </select>
      <select class="loc-select" [(ngModel)]="filterDistrict" (change)="onDistrictChange()"
              [disabled]="districtOptions.length === 0">
        <option value="">{{ 'FIND_PRO.ALL_DISTRICTS' | translate }}</option>
        <option *ngFor="let d of districtOptions" [value]="d">{{ d }}</option>
      </select>
      <select class="loc-select" [(ngModel)]="filterPin" (change)="onPinChange()"
              [disabled]="pinOptions.length === 0">
        <option value="">{{ 'FIND_PRO.ALL_PINS' | translate }}</option>
        <option *ngFor="let p of pinOptions" [value]="p">{{ p }}</option>
      </select>
      <button *ngIf="hasLocationFilter" class="loc-clear-btn" (click)="clearLocationFilter()">
        <span class="material-icons">close</span> {{ 'FIND_PRO.CLEAR' | translate }}
      </button>
    </div>
  </div>

  <!-- Sign-in banner for unauthenticated users -->
  <div *ngIf="!isAuthenticated" class="preview-banner">
    <div class="preview-banner-inner">
      <span class="material-icons preview-icon">lock</span>
      <div class="preview-text">
        <strong>{{ 'FIND_PRO.SIGN_IN_BANNER_TITLE' | translate }}</strong>
        <p>{{ 'FIND_PRO.SIGN_IN_BANNER_SUB' | translate }}</p>
      </div>
      <div class="preview-actions">
        <a routerLink="/auth/login" class="banner-btn primary">{{ 'FIND_PRO.SIGN_IN' | translate }}</a>
        <a routerLink="/auth/register" class="banner-btn secondary">{{ 'FIND_PRO.CREATE_ACCOUNT' | translate }}</a>
      </div>
    </div>
  </div>

  <!-- Error -->
  <div *ngIf="errorMessage" class="alert-error">
    <span class="material-icons">error</span> {{ errorMessage }}
  </div>

  <!-- Body -->
  <div class="body-split" [class.map-hidden]="!showMap && !selectedPro">
    <!-- Left: list -->
    <div class="list-panel">
      <div *ngIf="loading" class="loading-wrap">
        <mat-spinner diameter="40"></mat-spinner>
        <p>{{ 'FIND_PRO.LOADING' | translate }}</p>
      </div>

      <div *ngIf="!loading && isAuthenticated && pros.length === 0" class="empty-state">
        <span class="material-icons">search_off</span>
        <p>{{ 'FIND_PRO.EMPTY' | translate }}</p>
      </div>

      <div *ngIf="!loading && isAuthenticated && totalCount > 0" class="results-meta">
        {{ totalCount }} {{ 'FIND_PRO.PROS_FOUND' | translate }}
      </div>

      <div class="pro-list" [class.preview-blur]="!isAuthenticated">
        <div
          *ngFor="let pro of pros"
          id="pro-card-{{ pro.id }}"
          class="pro-card"
          [class.highlighted]="highlightedProId === pro.id"
          [class.selected]="selectedPro?.id === pro.id"
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
              {{ 'FIND_PRO.SERVICE_RADIUS' | translate }} {{ pro.serviceRadiusKm }} km
            </div>
            <div *ngIf="pro.services && pro.services.length > 0" class="pro-services">
              <span *ngFor="let s of pro.services | slice:0:3" class="service-chip">{{ s.name }}</span>
              <span *ngIf="pro.services.length > 3" class="service-chip more">+{{ pro.services.length - 3 }} more</span>
            </div>
          </div>
          <div class="pro-right-col">
            <span *ngIf="pro.isEmailVerified" class="material-icons verified-icon" title="Verified">verified</span>
            <span *ngIf="!pro.latitude || !pro.longitude" class="material-icons no-loc-icon" title="No location set">location_off</span>
            <span class="material-icons chevron-icon">chevron_right</span>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div class="pagination" *ngIf="isAuthenticated && !loading && totalPages > 1">
        <button class="pg-btn" [disabled]="page === 1" (click)="goToPage(page - 1)">
          <span class="material-icons">chevron_left</span>
        </button>
        <ng-container *ngFor="let n of pageNumbers; let i = index">
          <span *ngIf="showGapBefore(i, pageNumbers)" class="pg-gap">\u2026</span>
          <button class="pg-btn" [class.active]="n === page" (click)="goToPage(n)">{{ n }}</button>
        </ng-container>
        <button class="pg-btn" [disabled]="page === totalPages" (click)="goToPage(page + 1)">
          <span class="material-icons">chevron_right</span>
        </button>
      </div>
    </div>

    <!-- Right: map \u2014 hidden when detail panel is open -->
    <div class="map-panel" *ngIf="isAuthenticated && showMap && !selectedPro">
      <div id="pro-map" class="pro-map-el"></div>
      <div *ngIf="isGeocodingPros" class="map-geocoding-indicator">
        <mat-spinner diameter="18"></mat-spinner>
        <span>Locating professionals\u2026</span>
      </div>
    </div>

    <!-- Pro detail panel \u2014 replaces map on desktop, full-screen on mobile -->
    <div class="pro-detail-panel" *ngIf="isAuthenticated && selectedPro">

      <!-- Panel header -->
      <div class="pd-header">
        <button class="pd-back-btn" (click)="closePro()" aria-label="Back to list">
          <span class="material-icons">arrow_back</span>
        </button>
        <div class="pd-title">
          <span class="pd-name">{{ selectedPro.proName }}</span>
          <span class="pd-business" *ngIf="selectedPro.businessName">{{ selectedPro.businessName }}</span>
        </div>
        <span *ngIf="selectedPro.isEmailVerified" class="material-icons pd-verified" title="Verified professional">verified</span>
      </div>

      <!-- Pro meta info -->
      <div class="pd-meta">
        <div class="pd-meta-row">
          <span class="material-icons">place</span>
          {{ getLocation(selectedPro) }}
        </div>
        <div *ngIf="selectedPro.serviceRadiusKm" class="pd-meta-row">
          <span class="material-icons">radio_button_checked</span>
          {{ 'FIND_PRO.SERVES_WITHIN' | translate: {km: selectedPro.serviceRadiusKm} }}
        </div>
        <div *ngIf="proRatingSummary && proRatingSummary.totalReviews > 0" class="pd-meta-row">
          <div class="pd-rating-inline">
            <span *ngFor="let i of starsArray" class="pd-star" [class.filled]="starFilled(proRatingSummary.averageRating, i - 1)">\u2605</span>
            <span class="pd-rating-num">{{ proRatingSummary.averageRating | number:'1.1-1' }}</span>
            <span class="pd-rating-count">({{ proRatingSummary.totalReviews }} review{{ proRatingSummary.totalReviews !== 1 ? 's' : '' }})</span>
          </div>
        </div>
      </div>

      <!-- Services offered -->
      <div class="pd-services-section">
        <h3 class="pd-section-title">{{ 'FIND_PRO.SERVICES_OFFERED' | translate }}</h3>

        <div *ngIf="proServicesLoading" class="pd-loading">
          <mat-spinner diameter="32"></mat-spinner>
        </div>

        <div *ngIf="!proServicesLoading && proServices.length === 0" class="pd-empty">
          <span class="material-icons">info</span>
          {{ 'FIND_PRO.NO_SERVICES' | translate }}
        </div>

        <div *ngFor="let service of proServices" class="pd-service-card">
          <div class="pd-service-info">
            <div class="pd-service-name">{{ service.name }}</div>
            <div *ngIf="service.serviceCategory" class="pd-service-cat">{{ service.serviceCategory.name }}</div>
            <div *ngIf="service.description" class="pd-service-desc">{{ service.description }}</div>
          </div>
          <div class="pd-service-right">
            <div class="pd-service-price">\u20B9{{ service.price | number:'1.0-0' }}</div>
            <button *ngIf="canPostJob()" class="pd-post-btn" (click)="postJobForService(service)">{{ 'FIND_PRO.POST_JOB' | translate }}</button>
          </div>
        </div>
      </div>

      <!-- Customer reviews -->
      <div class="pd-reviews-section" *ngIf="!proReviewsLoading && proReviews.length > 0">
        <h3 class="pd-section-title">{{ 'FIND_PRO.CUSTOMER_REVIEWS' | translate }}</h3>
        <div *ngFor="let review of proReviews" class="pd-review-card">
          <div class="pd-review-header">
            <span *ngFor="let i of starsArray" class="pd-star sm" [class.filled]="starFilled(review.rating, i - 1)">\u2605</span>
            <span class="pd-review-author">{{ review.reviewerName }}</span>
            <span class="pd-review-date">{{ review.createdAt | date:'d MMM yyyy' }}</span>
          </div>
          <p *ngIf="review.comment" class="pd-review-comment">{{ review.comment }}</p>
        </div>
      </div>

      <!-- General post-job CTA (regular users only) -->
      <div class="pd-cta" *ngIf="!proServicesLoading && canPostJob()">
        <p>{{ 'FIND_PRO.CTA_UNSURE' | translate }}</p>
        <button class="pd-post-general-btn" (click)="postJobGeneral()">{{ 'FIND_PRO.POST_GENERAL' | translate }}</button>
      </div>

    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/find-a-pro/find-a-pro.scss */\n.find-pro-page {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.page-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.5rem 2rem 1rem;\n}\n.page-header .header-inner {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.page-header h1 {\n  margin: 0 0 0.25rem;\n  font-size: 1.6rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.page-header h1 .material-icons {\n  font-size: 1.8rem;\n}\n.page-header .subtitle {\n  margin: 0;\n  opacity: 0.85;\n  font-size: 0.95rem;\n}\n.map-toggle-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(255, 255, 255, 0.18);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.map-toggle-btn:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.map-toggle-btn .material-icons {\n  font-size: 1.1rem;\n}\n.filter-bar {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.search-wrap {\n  flex: 1;\n  min-width: 200px;\n  position: relative;\n  display: flex;\n  align-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  padding: 0 0.5rem;\n}\n.search-wrap .search-icon {\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.2rem;\n}\n.search-wrap .search-input {\n  flex: 1;\n  background: none;\n  border: none;\n  outline: none;\n  color: white;\n  font-size: 0.95rem;\n  padding: 0.5rem 0.5rem;\n}\n.search-wrap .search-input::placeholder {\n  color: rgba(255, 255, 255, 0.6);\n}\n.search-wrap .clear-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  color: rgba(255, 255, 255, 0.7);\n  display: flex;\n  align-items: center;\n}\n.search-wrap .clear-btn .material-icons {\n  font-size: 1.1rem;\n}\n.cat-select {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  color: white;\n  padding: 0.5rem 0.75rem;\n  font-size: 0.9rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 160px;\n}\n.cat-select option {\n  color: #333;\n  background: white;\n}\n.location-filter-bar {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n  margin-top: 0.5rem;\n  align-items: center;\n}\n.loc-select {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1.5px solid rgba(255, 255, 255, 0.35);\n  border-radius: 6px;\n  color: white;\n  padding: 0.4rem 0.65rem;\n  font-size: 0.85rem;\n  cursor: pointer;\n  outline: none;\n  min-width: 130px;\n}\n.loc-select option {\n  color: #333;\n  background: white;\n}\n.loc-select:disabled {\n  opacity: 0.45;\n  cursor: default;\n}\n.loc-clear-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n  background: rgba(255, 255, 255, 0.18);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.4);\n  border-radius: 6px;\n  padding: 0.4rem 0.75rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n  white-space: nowrap;\n}\n.loc-clear-btn:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.loc-clear-btn .material-icons {\n  font-size: 0.95rem;\n}\n.alert-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: #ffebee;\n  color: #c62828;\n  padding: 0.75rem 1.5rem;\n  font-size: 0.9rem;\n}\n.body-split {\n  display: grid;\n  grid-template-columns: 380px 1fr;\n  height: calc(100vh - 160px);\n  overflow: hidden;\n  min-height: 0;\n}\n.body-split.map-hidden {\n  grid-template-columns: 1fr;\n  height: auto;\n}\n@media (max-width: 768px) {\n  .body-split {\n    grid-template-columns: 1fr;\n    grid-template-rows: 320px 320px;\n    height: auto;\n  }\n  .body-split.map-hidden {\n    grid-template-rows: auto;\n  }\n}\n.list-panel {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: white;\n  border-right: 1px solid #e0e0e0;\n  height: 100%;\n}\n.loading-wrap {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #666;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 3rem;\n  color: #999;\n  text-align: center;\n}\n.empty-state .material-icons {\n  font-size: 3rem;\n}\n.results-meta {\n  padding: 0.75rem 1rem;\n  font-size: 0.85rem;\n  color: #666;\n  border-bottom: 1px solid #f0f0f0;\n  background: #fafafa;\n}\n.results-meta .no-loc-note {\n  color: #f57c00;\n  margin-left: 0.25rem;\n}\n.pro-list {\n  display: flex;\n  flex-direction: column;\n}\n.pro-card {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  cursor: pointer;\n  transition: background 0.15s;\n  position: relative;\n}\n.pro-card:hover {\n  background: #f5f5f5;\n}\n.pro-card.highlighted {\n  background: #ede7f6;\n  border-left: 3px solid #667eea;\n}\n.pro-card.no-location {\n  opacity: 0.75;\n}\n.pro-avatar {\n  width: 44px;\n  height: 44px;\n  min-width: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 1.3rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.pro-info {\n  flex: 1;\n  min-width: 0;\n}\n.pro-info .pro-name {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pro-info .pro-business {\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.2rem;\n}\n.pro-info .pro-location {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #888;\n  margin-bottom: 0.25rem;\n}\n.pro-info .pro-location .loc-icon {\n  font-size: 0.95rem;\n  color: #e91e63;\n}\n.pro-info .pro-radius {\n  font-size: 0.75rem;\n  color: #667eea;\n  margin-bottom: 0.25rem;\n}\n.pro-services {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.25rem;\n  margin-top: 0.25rem;\n}\n.service-chip {\n  background: #ede7f6;\n  color: #5e35b1;\n  font-size: 0.7rem;\n  padding: 0.15rem 0.45rem;\n  border-radius: 10px;\n  white-space: nowrap;\n}\n.service-chip.more {\n  background: #e0e0e0;\n  color: #555;\n}\n.pro-right-col {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.25rem;\n  flex-shrink: 0;\n  padding-top: 0.15rem;\n}\n.verified-icon {\n  font-size: 1.1rem;\n  color: #43a047;\n}\n.no-loc-icon {\n  font-size: 1rem;\n  color: #bbb;\n}\n.chevron-icon {\n  font-size: 1.1rem;\n  color: #ccc;\n  margin-top: auto;\n}\n.pro-card.selected {\n  background: #ede7f6;\n  border-left: 3px solid #667eea;\n}\n.map-panel {\n  position: relative;\n  overflow: hidden;\n  height: 100%;\n}\n.pro-map-el {\n  width: 100%;\n  height: 100%;\n  min-height: 400px;\n}\n.map-geocoding-indicator {\n  position: absolute;\n  bottom: 1rem;\n  left: 50%;\n  transform: translateX(-50%);\n  background: rgba(255, 255, 255, 0.92);\n  border-radius: 20px;\n  padding: 0.4rem 1rem 0.4rem 0.65rem;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  color: #555;\n  z-index: 1000;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  white-space: nowrap;\n  pointer-events: none;\n}\n.preview-banner {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.08),\n      rgba(118, 75, 162, 0.08));\n  border-bottom: 1px solid rgba(102, 126, 234, 0.2);\n  padding: 1rem 1.5rem;\n}\n.preview-banner-inner {\n  max-width: 900px;\n  margin: 0 auto;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.preview-icon {\n  font-size: 2rem;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.preview-text {\n  flex: 1;\n  min-width: 200px;\n}\n.preview-text strong {\n  display: block;\n  font-size: 0.95rem;\n  color: #1f2937;\n  margin-bottom: 0.2rem;\n}\n.preview-text p {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.preview-actions {\n  display: flex;\n  gap: 0.75rem;\n  flex-shrink: 0;\n}\n.banner-btn {\n  padding: 0.5rem 1.25rem;\n  border-radius: 7px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.banner-btn.primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.banner-btn.primary:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.banner-btn.secondary {\n  background: white;\n  color: #667eea;\n  border: 1.5px solid #667eea;\n}\n.banner-btn.secondary:hover {\n  background: rgba(102, 126, 234, 0.05);\n}\n.preview-blur {\n  pointer-events: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.preview-card {\n  cursor: default;\n  opacity: 0.85;\n}\n.pro-detail-panel {\n  display: flex;\n  flex-direction: column;\n  background: white;\n  height: 100%;\n  overflow-y: auto;\n}\n@media (max-width: 768px) {\n  .pro-detail-panel {\n    position: fixed;\n    inset: 0;\n    z-index: 200;\n    height: 100dvh;\n  }\n}\n.pd-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  flex-shrink: 0;\n}\n.pd-back-btn {\n  background: rgba(255, 255, 255, 0.2);\n  border: none;\n  border-radius: 50%;\n  width: 36px;\n  height: 36px;\n  min-width: 36px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.pd-back-btn:hover {\n  background: rgba(255, 255, 255, 0.32);\n}\n.pd-back-btn .material-icons {\n  font-size: 1.2rem;\n}\n.pd-title {\n  flex: 1;\n  min-width: 0;\n}\n.pd-name {\n  display: block;\n  font-weight: 700;\n  font-size: 1rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pd-business {\n  display: block;\n  font-size: 0.82rem;\n  opacity: 0.85;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pd-verified {\n  font-size: 1.25rem;\n  color: #a5f3c4;\n  flex-shrink: 0;\n}\n.pd-meta {\n  padding: 0.85rem 1.25rem;\n  background: #fafafa;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n  flex-shrink: 0;\n}\n.pd-meta-row {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  color: #555;\n}\n.pd-meta-row .material-icons {\n  font-size: 1rem;\n  color: #667eea;\n}\n.pd-services-section {\n  flex: 1;\n  padding: 1rem 1.25rem;\n}\n.pd-section-title {\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n  color: #999;\n  margin: 0 0 0.85rem;\n}\n.pd-loading {\n  display: flex;\n  justify-content: center;\n  padding: 2rem 0;\n}\n.pd-empty {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #aaa;\n  font-size: 0.9rem;\n  padding: 0.5rem 0;\n}\n.pd-empty .material-icons {\n  font-size: 1.1rem;\n}\n.pd-service-card {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  padding: 0.9rem 1rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 10px;\n  margin-bottom: 0.65rem;\n  transition: box-shadow 0.15s;\n}\n.pd-service-card:hover {\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n}\n.pd-service-info {\n  flex: 1;\n  min-width: 0;\n}\n.pd-service-name {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #212121;\n  margin-bottom: 0.15rem;\n}\n.pd-service-cat {\n  font-size: 0.75rem;\n  color: #667eea;\n  margin-bottom: 0.2rem;\n}\n.pd-service-desc {\n  font-size: 0.82rem;\n  color: #666;\n  line-height: 1.45;\n  display: -webkit-box;\n  -webkit-line-clamp: 2;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n.pd-service-right {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 0.5rem;\n  flex-shrink: 0;\n}\n.pd-service-price {\n  font-weight: 700;\n  font-size: 1rem;\n  color: #2e7d32;\n  white-space: nowrap;\n}\n.pd-post-btn {\n  background: var(--color-primary, #667eea);\n  color: white;\n  border: none;\n  border-radius: 7px;\n  padding: 0.4rem 0.85rem;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  font-family: inherit;\n  transition: opacity 0.15s;\n}\n.pd-post-btn:hover {\n  opacity: 0.88;\n}\n.pd-cta {\n  padding: 1rem 1.25rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  text-align: center;\n  flex-shrink: 0;\n}\n.pd-cta p {\n  font-size: 0.85rem;\n  color: #888;\n  margin: 0 0 0.75rem;\n}\n.pd-rating-inline {\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n.pd-star {\n  color: #d1d5db;\n  font-size: 15px;\n  line-height: 1;\n}\n.pd-star.filled {\n  color: #f59e0b;\n}\n.pd-star.sm {\n  font-size: 13px;\n}\n.pd-rating-num {\n  font-size: 0.88rem;\n  font-weight: 700;\n  color: #1f2937;\n  margin-left: 3px;\n}\n.pd-rating-count {\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n.pd-reviews-section {\n  padding: 0 1.25rem 1rem;\n  border-top: 1px solid #f0f0f0;\n  margin-top: 0.25rem;\n  padding-top: 1rem;\n}\n.pd-review-card {\n  padding: 0.65rem 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.pd-review-card:last-child {\n  border-bottom: none;\n}\n.pd-review-header {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  flex-wrap: wrap;\n  margin-bottom: 3px;\n}\n.pd-review-author {\n  font-size: 0.8rem;\n  font-weight: 600;\n  color: #374151;\n}\n.pd-review-date {\n  font-size: 0.75rem;\n  color: #9ca3af;\n  margin-left: auto;\n}\n.pd-review-comment {\n  font-size: 0.82rem;\n  color: #4b5563;\n  margin: 0;\n  line-height: 1.45;\n}\n.pd-post-general-btn {\n  background: white;\n  color: var(--color-primary, #667eea);\n  border: 2px solid var(--color-primary, #667eea);\n  border-radius: 8px;\n  padding: 0.6rem 1.5rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  font-family: inherit;\n  width: 100%;\n  transition: background 0.15s;\n}\n.pd-post-general-btn:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.3rem;\n  padding: 0.75rem 1rem;\n  border-top: 1px solid #f0f0f0;\n  background: #fafafa;\n  flex-shrink: 0;\n  flex-wrap: wrap;\n}\n.pg-btn {\n  min-width: 32px;\n  height: 32px;\n  border: 1.5px solid #e0e0e0;\n  border-radius: 6px;\n  background: white;\n  color: #444;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n  padding: 0 0.4rem;\n  font-family: inherit;\n}\n.pg-btn .material-icons {\n  font-size: 1.1rem;\n}\n.pg-btn:hover:not(:disabled):not(.active) {\n  background: #f0f0f0;\n  border-color: #bbb;\n}\n.pg-btn.active {\n  background: #667eea;\n  border-color: #667eea;\n  color: white;\n  font-weight: 700;\n}\n.pg-btn:disabled {\n  opacity: 0.35;\n  cursor: default;\n}\n.pg-gap {\n  color: #aaa;\n  font-size: 0.9rem;\n  padding: 0 0.15rem;\n}\n@media (max-width: 768px) {\n  .body-split {\n    grid-template-columns: 1fr;\n    grid-template-rows: auto 320px;\n  }\n  .body-split.map-hidden {\n    grid-template-rows: 1fr;\n  }\n  .list-panel {\n    overflow-y: auto;\n    max-height: 50vh;\n    border-right: none;\n    border-bottom: 1px solid #e0e0e0;\n  }\n  .map-panel {\n    min-height: 320px;\n  }\n}\n/*# sourceMappingURL=find-a-pro.css.map */\n'] }]
  }], () => [{ type: ProBrowseService }, { type: ServiceCategoryService }, { type: ServiceAreaService }, { type: ChangeDetectorRef }, { type: Auth }, { type: AddressService }, { type: MyServicesService }, { type: Router }, { type: ReviewService }, { type: HttpClient }, { type: NgZone }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FindAProComponent, { className: "FindAProComponent", filePath: "src/app/features/find-a-pro/find-a-pro.ts", lineNumber: 66 });
})();
export {
  FindAProComponent
};
//# sourceMappingURL=chunk-7MVKJ65U.js.map

