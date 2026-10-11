import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-YVVMVIYW.js";
import "./chunk-DJZZSSU7.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XYXJ3G2H.js";
import "./chunk-JRMOFBWD.js";
import "./chunk-PNKNM5OB.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-GBPGCUBR.js";
import "./chunk-NIIRLI7V.js";
import {
  AddressService
} from "./chunk-EGXPAUYG.js";
import {
  BusinessService
} from "./chunk-IYXXOFE3.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-BUUU66NZ.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-KRKF3QD5.js";
import "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  RouterModule
} from "./chunk-F22IK7JB.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Location,
  NgForOf,
  NgIf,
  Subject,
  catchError,
  of,
  setClassMetadata,
  switchMap,
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
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate8,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CTKGZTQY.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/my-businesses/my-businesses.ts
function MyBusinessesComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function MyBusinessesComponent_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.goBack());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "COMMON.BACK"), " ");
  }
}
function MyBusinessesComponent_div_19_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("mousedown", function MyBusinessesComponent_div_19_div_23_div_1_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.preventDefault());
    })("click", function MyBusinessesComponent_div_19_div_23_div_1_Template_div_click_0_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.onAddressSelected(p_r6));
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.mainText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r6.secondaryText);
  }
}
function MyBusinessesComponent_div_19_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, MyBusinessesComponent_div_19_div_23_div_1_Template, 5, 2, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.addressPredictions);
  }
}
function MyBusinessesComponent_div_19_div_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.createError, " ");
  }
}
function MyBusinessesComponent_div_19_mat_spinner_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 49);
  }
}
function MyBusinessesComponent_div_19_mat_icon_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function MyBusinessesComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div", 17)(2, "mat-icon");
    \u0275\u0275text(3, "add_business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "form", 18, 0);
    \u0275\u0275listener("ngSubmit", function MyBusinessesComponent_div_19_Template_form_ngSubmit_7_listener() {
      \u0275\u0275restoreView(_r3);
      const createForm_r4 = \u0275\u0275reference(8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onCreateBusiness(createForm_r4));
    });
    \u0275\u0275elementStart(9, "div", 19)(10, "label");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementStart(13, "span", 20);
    \u0275\u0275text(14, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "input", 21);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizName, $event) || (ctx_r1.newBizName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 22);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 19)(20, "div", 23)(21, "input", 24);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("input", function MyBusinessesComponent_div_19_Template_input_input_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onAddressInput($event));
    })("blur", function MyBusinessesComponent_div_19_Template_input_blur_21_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.hideAddressList());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, MyBusinessesComponent_div_19_div_23_Template, 2, 1, "div", 25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 26)(25, "div", 19)(26, "label");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementStart(29, "span", 20);
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "input", 27);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizHouse, $event) || (ctx_r1.newBizHouse = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 19)(33, "label");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementStart(36, "span", 20);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "input", 28);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizZip, $event) || (ctx_r1.newBizZip = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "div", 19)(40, "label");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementStart(43, "span", 20);
    \u0275\u0275text(44, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(45, "input", 29);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizStreet1, $event) || (ctx_r1.newBizStreet1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 19)(47, "label");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 30);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizStreet2, $event) || (ctx_r1.newBizStreet2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 26)(52, "div", 19)(53, "label");
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275elementStart(56, "span", 20);
    \u0275\u0275text(57, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "input", 31);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizCity, $event) || (ctx_r1.newBizCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 19)(60, "label");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 32);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizDistrict, $event) || (ctx_r1.newBizDistrict = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 26)(65, "div", 19)(66, "label");
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementStart(69, "span", 20);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "input", 33);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizState, $event) || (ctx_r1.newBizState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(72, "div", 19)(73, "label");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementStart(76, "span", 20);
    \u0275\u0275text(77, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(78, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_78_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.newBizCountry, $event) || (ctx_r1.newBizCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(79, "div", 35)(80, "label", 36)(81, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_19_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.migrateSoloServices, $event) || (ctx_r1.migrateSoloServices = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "span");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "small");
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(88, MyBusinessesComponent_div_19_div_88_Template, 4, 1, "div", 11);
    \u0275\u0275elementStart(89, "div", 38)(90, "button", 39);
    \u0275\u0275listener("click", function MyBusinessesComponent_div_19_Template_button_click_90_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreatePanel = false);
    });
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "button", 40);
    \u0275\u0275template(94, MyBusinessesComponent_div_19_mat_spinner_94_Template, 1, 0, "mat-spinner", 41)(95, MyBusinessesComponent_div_19_mat_icon_95_Template, 2, 0, "mat-icon", 42);
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const createForm_r4 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 31, "BUSINESSES.CREATE_TITLE"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 33, "BUSINESSES.BIZ_NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 35, "BUSINESSES.SEARCH_ADDRESS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 37, "AUTH.REGISTER_PRO.SEARCH_ADDRESS_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.showAddressList);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(28, 39, "BUSINESSES.HOUSE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizHouse);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(35, 41, "BUSINESSES.ZIP"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizZip);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(42, 43, "BUSINESSES.STREET"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizStreet1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 45, "BUSINESSES.STREET2"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizStreet2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(55, 47, "BUSINESSES.CITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizCity);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 49, "BUSINESSES.DISTRICT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizDistrict);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(68, 51, "BUSINESSES.STATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizState);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(75, 53, "BUSINESSES.COUNTRY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.newBizCountry);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.migrateSoloServices);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 55, "BUSINESSES.MIGRATE_SERVICES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 57, "BUSINESSES.MIGRATE_SERVICES_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.createError);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(92, 59, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !createForm_r4.valid || ctx_r1.createLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.createLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.createLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.createLoading ? \u0275\u0275pipeBind1(97, 61, "COMMON.SAVING") : \u0275\u0275pipeBind1(98, 63, "BUSINESSES.CREATE"), " ");
  }
}
function MyBusinessesComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275element(1, "mat-spinner", 51);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function MyBusinessesComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.error, " ");
  }
}
function MyBusinessesComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "mat-icon");
    \u0275\u0275text(3, "business");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function MyBusinessesComponent_div_22_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.showCreatePanel = true);
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "BUSINESSES.EMPTY_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "BUSINESSES.EMPTY"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 7, "BUSINESSES.CREATE"), " ");
  }
}
function MyBusinessesComponent_div_23_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 65)(1, "mat-icon");
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const biz_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", biz_r9.address.city, "", biz_r9.address.state ? ", " + biz_r9.address.state : "", " ");
  }
}
function MyBusinessesComponent_div_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 56);
    \u0275\u0275listener("click", function MyBusinessesComponent_div_23_div_1_Template_div_click_0_listener() {
      const biz_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectBusiness(biz_r9));
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "mat-icon");
    \u0275\u0275text(3, "business");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 58)(5, "div", 59);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 60)(8, "span", 61);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 62);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 63);
    \u0275\u0275template(13, MyBusinessesComponent_div_23_div_1_span_13_Template, 4, 2, "span", 64);
    \u0275\u0275elementStart(14, "span", 65)(15, "mat-icon");
    \u0275\u0275text(16, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-icon", 66);
    \u0275\u0275text(21, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const biz_r9 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(biz_r9.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("owner", biz_r9.role === "Owner");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(biz_r9.role);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", biz_r9.status === "Active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(biz_r9.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", biz_r9.address == null ? null : biz_r9.address.city);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", biz_r9.memberCount, " ", biz_r9.memberCount === 1 ? \u0275\u0275pipeBind1(18, 10, "BUSINESSES.MEMBER_SINGULAR") : \u0275\u0275pipeBind1(19, 12, "BUSINESSES.MEMBER_PLURAL"), " ");
  }
}
function MyBusinessesComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275template(1, MyBusinessesComponent_div_23_div_1_Template, 22, 14, "div", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.businesses);
  }
}
function MyBusinessesComponent_div_24_div_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 84)(1, "button", 85);
    \u0275\u0275listener("click", function MyBusinessesComponent_div_24_div_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.migrateServices());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "sync_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 8);
    \u0275\u0275listener("click", function MyBusinessesComponent_div_24_div_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAddMemberPanel = !ctx_r1.showAddMemberPanel);
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "BUSINESSES.MIGRATE_BTN"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "BUSINESSES.ADD_MEMBER"), " ");
  }
}
function MyBusinessesComponent_div_24_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "mat-spinner", 87);
    \u0275\u0275elementEnd();
  }
}
function MyBusinessesComponent_div_24_div_29_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91)(2, "mat-icon");
    \u0275\u0275text(3, "notes");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 93);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "BUSINESSES.DESCRIPTION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.bizDetail.description);
  }
}
function MyBusinessesComponent_div_24_div_29_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91)(2, "mat-icon");
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 92);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, "BUSINESSES.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate8(" ", ctx_r1.bizDetail.address.houseNameNumber, "", ctx_r1.bizDetail.address.street1 ? ", " + ctx_r1.bizDetail.address.street1 : "", "", ctx_r1.bizDetail.address.street2 ? ", " + ctx_r1.bizDetail.address.street2 : "", ", ", ctx_r1.bizDetail.address.city, "", ctx_r1.bizDetail.address.district ? ", " + ctx_r1.bizDetail.address.district : "", ", ", ctx_r1.bizDetail.address.state, ", ", ctx_r1.bizDetail.address.country, " ", ctx_r1.bizDetail.address.zipPostalCode, " ");
  }
}
function MyBusinessesComponent_div_24_div_29_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90)(1, "span", 91)(2, "mat-icon");
    \u0275\u0275text(3, "phone");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 92);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "BUSINESSES.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.bizDetail.phone);
  }
}
function MyBusinessesComponent_div_24_div_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275template(1, MyBusinessesComponent_div_24_div_29_div_1_Template, 8, 4, "div", 89)(2, MyBusinessesComponent_div_24_div_29_div_2_Template, 8, 11, "div", 89)(3, MyBusinessesComponent_div_24_div_29_div_3_Template, 8, 4, "div", 89);
    \u0275\u0275elementStart(4, "div", 90)(5, "span", 91)(6, "mat-icon");
    \u0275\u0275text(7, "miscellaneous_services");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 92);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bizDetail.description);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bizDetail.address);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bizDetail.phone);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "BUSINESSES.SERVICES_COUNT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.bizDetail.serviceCount);
  }
}
function MyBusinessesComponent_div_24_div_40_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.addMemberError, " ");
  }
}
function MyBusinessesComponent_div_24_div_40_mat_spinner_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 101);
  }
}
function MyBusinessesComponent_div_24_div_40_mat_icon_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person_add");
    \u0275\u0275elementEnd();
  }
}
function MyBusinessesComponent_div_24_div_40_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "p", 95);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "form", 18, 1);
    \u0275\u0275listener("ngSubmit", function MyBusinessesComponent_div_24_div_40_Template_form_ngSubmit_4_listener() {
      \u0275\u0275restoreView(_r12);
      const addForm_r13 = \u0275\u0275reference(5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAddMember(addForm_r13));
    });
    \u0275\u0275elementStart(6, "div", 26)(7, "div", 19)(8, "label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "span", 20);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_24_div_40_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addMemberEmail, $event) || (ctx_r1.addMemberEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 19)(15, "label");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "select", 97);
    \u0275\u0275twoWayListener("ngModelChange", function MyBusinessesComponent_div_24_div_40_Template_select_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addMemberRole, $event) || (ctx_r1.addMemberRole = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(19, "option", 98);
    \u0275\u0275text(20, "Member");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "option", 99);
    \u0275\u0275text(22, "Owner");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(23, MyBusinessesComponent_div_24_div_40_div_23_Template, 4, 1, "div", 11);
    \u0275\u0275elementStart(24, "div", 38)(25, "button", 39);
    \u0275\u0275listener("click", function MyBusinessesComponent_div_24_div_40_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.showAddMemberPanel = false);
    });
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "button", 40);
    \u0275\u0275template(29, MyBusinessesComponent_div_24_div_40_mat_spinner_29_Template, 1, 0, "mat-spinner", 100)(30, MyBusinessesComponent_div_24_div_40_mat_icon_30_Template, 2, 0, "mat-icon", 42);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const addForm_r13 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 11, "BUSINESSES.ADD_MEMBER_TITLE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 13, "BUSINESSES.MEMBER_EMAIL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addMemberEmail);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 15, "BUSINESSES.MEMBER_ROLE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addMemberRole);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.addMemberError);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 17, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !addForm_r13.valid || ctx_r1.addMemberLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.addMemberLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.addMemberLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.addMemberLoading ? \u0275\u0275pipeBind1(32, 19, "COMMON.SAVING") : \u0275\u0275pipeBind1(33, 21, "BUSINESSES.ADD_MEMBER"), " ");
  }
}
function MyBusinessesComponent_div_24_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275element(1, "mat-spinner", 87);
    \u0275\u0275elementEnd();
  }
}
function MyBusinessesComponent_div_24_div_42_div_1_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 112);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function MyBusinessesComponent_div_24_div_42_div_1_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const m_r15 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.removeMember(m_r15.id));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "person_remove");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275pipeBind1(1, 1, "BUSINESSES.REMOVE"));
  }
}
function MyBusinessesComponent_div_24_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 105)(1, "div", 106);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 107)(4, "span", 108);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 109);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 110);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, MyBusinessesComponent_div_24_div_42_div_1_button_10_Template, 4, 3, "button", 111);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate((m_r15.proName || "P")[0].toUpperCase());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r15.proName || "Pro #" + m_r15.proId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r15.proEmail);
    \u0275\u0275advance();
    \u0275\u0275classProp("owner", m_r15.role === "Owner");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r15.role);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOwner() && m_r15.role !== "Owner");
  }
}
function MyBusinessesComponent_div_24_div_42_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "mat-icon");
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "BUSINESSES.NO_MEMBERS"));
  }
}
function MyBusinessesComponent_div_24_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, MyBusinessesComponent_div_24_div_42_div_1_Template, 11, 7, "div", 103)(2, MyBusinessesComponent_div_24_div_42_div_2_Template, 6, 3, "div", 104);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.members);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.members.length === 0);
  }
}
function MyBusinessesComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "button", 15);
    \u0275\u0275listener("click", function MyBusinessesComponent_div_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 68)(7, "div", 69)(8, "mat-icon");
    \u0275\u0275text(9, "business");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 70)(11, "h2", 71);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 72)(14, "span", 61);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 62);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, MyBusinessesComponent_div_24_div_18_Template, 11, 6, "div", 73);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 74)(20, "div", 75)(21, "div", 76)(22, "div", 77)(23, "mat-icon");
    \u0275\u0275text(24, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(28, MyBusinessesComponent_div_24_div_28_Template, 2, 0, "div", 78)(29, MyBusinessesComponent_div_24_div_29_Template, 12, 7, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 75)(31, "div", 80)(32, "div", 77)(33, "mat-icon");
    \u0275\u0275text(34, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "span");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 81);
    \u0275\u0275text(39);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, MyBusinessesComponent_div_24_div_40_Template, 34, 23, "div", 82)(41, MyBusinessesComponent_div_24_div_41_Template, 2, 0, "div", 78)(42, MyBusinessesComponent_div_24_div_42_Template, 3, 2, "div", 83);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 17, "COMMON.BACK"), " ");
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.selectedBiz.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("owner", ctx_r1.selectedBiz.role === "Owner");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedBiz.role);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r1.selectedBiz.status === "Active");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedBiz.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isOwner());
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 19, "BUSINESSES.BIZ_INFO_TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.bizDetailLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.bizDetail && !ctx_r1.bizDetailLoading);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 21, "BUSINESSES.MEMBERS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.members.length);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAddMemberPanel && ctx_r1.isOwner());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.membersLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.membersLoading);
  }
}
var MyBusinessesComponent = class _MyBusinessesComponent {
  bizService;
  addressService;
  snackBar;
  cdr;
  location;
  route;
  businesses = [];
  loading = true;
  error = "";
  // Selected business detail
  selectedBiz = null;
  bizDetail = null;
  bizDetailLoading = false;
  members = [];
  membersLoading = false;
  // Create business panel
  showCreatePanel = false;
  createLoading = false;
  createError = "";
  newBizName = "";
  newBizHouse = "";
  newBizStreet1 = "";
  newBizStreet2 = "";
  newBizCity = "";
  newBizDistrict = "";
  newBizState = "";
  newBizCountry = "";
  newBizZip = "";
  newBizLat = null;
  newBizLng = null;
  migrateSoloServices = false;
  // Add member panel
  showAddMemberPanel = false;
  addMemberEmail = "";
  addMemberRole = "Member";
  addMemberLoading = false;
  addMemberError = "";
  // Address autocomplete
  addressPredictions = [];
  showAddressList = false;
  addressLoading = false;
  addressSearch$ = new Subject();
  destroy$ = new Subject();
  constructor(bizService, addressService, snackBar, cdr, location, route) {
    this.bizService = bizService;
    this.addressService = addressService;
    this.snackBar = snackBar;
    this.cdr = cdr;
    this.location = location;
    this.route = route;
  }
  ngOnInit() {
    if (this.route.snapshot.queryParamMap.get("create")) {
      this.showCreatePanel = true;
    }
    this.loadBusinesses();
    this.addressSearch$.pipe(switchMap((input) => {
      this.addressLoading = true;
      return this.addressService.getAddressPredictions(input).pipe(catchError(() => of([])));
    }), takeUntil(this.destroy$)).subscribe((predictions) => {
      this.addressPredictions = predictions;
      this.showAddressList = predictions.length > 0;
      this.addressLoading = false;
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadBusinesses() {
    this.loading = true;
    this.bizService.getMyBusinesses().subscribe({
      next: (data) => {
        this.businesses = data;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.error = "Could not load businesses.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  selectBusiness(biz) {
    this.selectedBiz = biz;
    this.showAddMemberPanel = false;
    this.membersLoading = true;
    this.bizDetailLoading = true;
    this.bizDetail = null;
    this.bizService.getMembers(biz.id).subscribe({
      next: (data) => {
        this.members = data;
        this.membersLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.membersLoading = false;
        this.cdr.markForCheck();
      }
    });
    this.bizService.getBusiness(biz.id).subscribe({
      next: (detail) => {
        this.bizDetail = detail;
        this.bizDetailLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.bizDetailLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  goBack() {
    this.location.back();
  }
  clearSelection() {
    this.selectedBiz = null;
    this.bizDetail = null;
    this.members = [];
  }
  isOwner() {
    return this.selectedBiz?.role === "Owner";
  }
  onCreateBusiness(form) {
    if (!form.valid)
      return;
    this.createLoading = true;
    this.createError = "";
    const req = {
      businessName: this.newBizName,
      houseNameNumber: this.newBizHouse,
      street1: this.newBizStreet1,
      street2: this.newBizStreet2,
      city: this.newBizCity,
      district: this.newBizDistrict,
      state: this.newBizState,
      country: this.newBizCountry,
      zipPostalCode: this.newBizZip,
      latitude: this.newBizLat,
      longitude: this.newBizLng,
      migrateSoloServices: this.migrateSoloServices
    };
    this.bizService.createBusiness(req).subscribe({
      next: () => {
        this.showCreatePanel = false;
        this.createLoading = false;
        this.resetCreateForm();
        this.cdr.markForCheck();
        this.loadBusinesses();
        this.snackBar.open("Business created!", "OK", { duration: 3e3, panelClass: "snack-success" });
      },
      error: (err) => {
        this.createError = err.error?.message || "Could not create business.";
        this.createLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  resetCreateForm() {
    this.newBizName = "";
    this.newBizHouse = "";
    this.newBizStreet1 = "";
    this.newBizStreet2 = "";
    this.newBizCity = "";
    this.newBizDistrict = "";
    this.newBizState = "";
    this.newBizCountry = "";
    this.newBizZip = "";
    this.newBizLat = null;
    this.newBizLng = null;
    this.migrateSoloServices = false;
  }
  onAddMember(form) {
    if (!form.valid || !this.selectedBiz)
      return;
    this.addMemberLoading = true;
    this.addMemberError = "";
    this.bizService.addMember(this.selectedBiz.id, this.addMemberEmail, this.addMemberRole).subscribe({
      next: () => {
        this.addMemberEmail = "";
        this.addMemberRole = "Member";
        this.addMemberLoading = false;
        this.showAddMemberPanel = false;
        this.cdr.markForCheck();
        this.selectBusiness(this.selectedBiz);
        this.snackBar.open("Member added!", "OK", { duration: 3e3, panelClass: "snack-success" });
      },
      error: (err) => {
        this.addMemberError = err.error?.message || "Could not add member.";
        this.addMemberLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  removeMember(membershipId) {
    if (!this.selectedBiz)
      return;
    this.bizService.removeMember(this.selectedBiz.id, membershipId).subscribe({
      next: () => {
        this.members = this.members.filter((m) => m.id !== membershipId);
        this.cdr.markForCheck();
        this.snackBar.open("Member removed.", "OK", { duration: 2500, panelClass: "snack-info" });
      },
      error: (err) => {
        this.snackBar.open(err.error?.message || "Could not remove member.", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  migrateServices() {
    if (!this.selectedBiz)
      return;
    this.bizService.migrateServices(this.selectedBiz.id).subscribe({
      next: (res) => {
        this.snackBar.open(`${res.migrated} service(s) migrated to this business.`, "OK", { duration: 3500, panelClass: "snack-success" });
      },
      error: () => {
        this.snackBar.open("Could not migrate services.", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  // ── Address autocomplete ───────────────────────────────────────────────
  onAddressInput(event) {
    const input = event.target.value;
    if (input && input.length >= 3) {
      this.addressSearch$.next(input);
    } else {
      this.showAddressList = false;
      this.addressPredictions = [];
    }
  }
  onAddressSelected(prediction) {
    this.showAddressList = false;
    const d = prediction.details;
    if (!d)
      return;
    this.newBizHouse = d.houseNameNumber;
    this.newBizStreet1 = d.street1;
    this.newBizStreet2 = d.street2;
    this.newBizCity = d.city;
    this.newBizState = d.state;
    this.newBizCountry = d.country;
    this.newBizZip = d.zipPostalCode;
    this.newBizLat = d.latitude ?? null;
    this.newBizLng = d.longitude ?? null;
    this.newBizDistrict = d.district || "";
  }
  hideAddressList() {
    setTimeout(() => {
      this.showAddressList = false;
    }, 200);
  }
  static \u0275fac = function MyBusinessesComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyBusinessesComponent)(\u0275\u0275directiveInject(BusinessService), \u0275\u0275directiveInject(AddressService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Location), \u0275\u0275directiveInject(ActivatedRoute));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyBusinessesComponent, selectors: [["app-my-businesses"]], decls: 25, vars: 16, consts: [["createForm", "ngForm"], ["addForm", "ngForm"], [1, "biz-page"], ["class", "btn-back", 3, "click", 4, "ngIf"], [1, "biz-page-header"], [1, "header-left"], [1, "header-icon"], [1, "header-subtitle"], [1, "btn-primary", 3, "click"], ["class", "create-panel", 4, "ngIf"], ["class", "state-msg", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "biz-grid", 4, "ngIf"], ["class", "biz-detail", 4, "ngIf"], [1, "btn-back", 3, "click"], [1, "create-panel"], [1, "panel-header"], [3, "ngSubmit"], [1, "form-group"], [1, "required"], ["type", "text", "name", "newBizName", "required", "", "placeholder", "e.g. Acme Plumbing Ltd", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "form-section-label"], [1, "autocomplete-container"], ["type", "text", "autocomplete", "off", 1, "form-control", 3, "input", "blur", "placeholder"], ["class", "address-dropdown", 4, "ngIf"], [1, "form-row"], ["type", "text", "name", "newBizHouse", "required", "", "placeholder", "12A", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "newBizZip", "required", "", "placeholder", "695001", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "newBizStreet1", "required", "", "placeholder", "Street / Road", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "newBizStreet2", "placeholder", "Floor, unit\u2026", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "newBizCity", "required", "", "placeholder", "City", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "newBizDistrict", "placeholder", "District", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "newBizState", "required", "", "placeholder", "State", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "newBizCountry", "required", "", "placeholder", "Country", 1, "form-control", 3, "ngModelChange", "ngModel"], [1, "migrate-toggle"], [1, "toggle-label"], ["type", "checkbox", "name", "migrateSoloServices", 3, "ngModelChange", "ngModel"], [1, "panel-actions"], ["type", "button", 1, "btn-secondary", 3, "click"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["diameter", "16", 4, "ngIf"], [4, "ngIf"], [1, "address-dropdown"], ["class", "address-item", 3, "mousedown", "click", 4, "ngFor", "ngForOf"], [1, "address-item", 3, "mousedown", "click"], [1, "address-main"], [1, "address-secondary"], [1, "alert", "alert-error"], ["diameter", "16"], [1, "state-msg"], ["diameter", "32"], [1, "empty-state"], [1, "empty-icon"], [1, "biz-grid"], ["class", "biz-card", 3, "click", 4, "ngFor", "ngForOf"], [1, "biz-card", 3, "click"], [1, "biz-avatar"], [1, "biz-card-info"], [1, "biz-card-name"], [1, "biz-card-meta"], [1, "role-chip"], [1, "status-chip"], [1, "biz-card-footer"], ["class", "footer-item", 4, "ngIf"], [1, "footer-item"], [1, "card-arrow"], [1, "biz-detail"], [1, "detail-hero"], [1, "detail-hero-icon"], [1, "detail-hero-text"], [1, "detail-biz-name"], [1, "detail-chips"], ["class", "detail-hero-actions", 4, "ngIf"], [1, "detail-layout"], [1, "detail-col"], [1, "info-card"], [1, "card-section-title"], ["class", "card-loading", 4, "ngIf"], ["class", "info-rows", 4, "ngIf"], [1, "members-card"], [1, "member-count-badge"], ["class", "add-member-panel", 4, "ngIf"], ["class", "member-list", 4, "ngIf"], [1, "detail-hero-actions"], [1, "btn-outline", 3, "click"], [1, "card-loading"], ["diameter", "24"], [1, "info-rows"], ["class", "info-row", 4, "ngIf"], [1, "info-row"], [1, "info-label"], [1, "info-value"], [1, "info-value", "desc"], [1, "add-member-panel"], [1, "add-member-hint"], ["type", "email", "name", "addMemberEmail", "required", "", "email", "", "placeholder", "pro@example.com", 1, "form-control", 3, "ngModelChange", "ngModel"], ["name", "addMemberRole", 1, "form-control", 3, "ngModelChange", "ngModel"], ["value", "Member"], ["value", "Owner"], ["diameter", "14", 4, "ngIf"], ["diameter", "14"], [1, "member-list"], ["class", "member-row", 4, "ngFor", "ngForOf"], ["class", "empty-members", 4, "ngIf"], [1, "member-row"], [1, "member-avatar"], [1, "member-info"], [1, "member-name"], [1, "member-email"], [1, "role-chip", "small"], ["class", "btn-revoke", 3, "title", "click", 4, "ngIf"], [1, "btn-revoke", 3, "click", "title"], [1, "empty-members"]], template: function MyBusinessesComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, MyBusinessesComponent_button_1_Template, 5, 3, "button", 3);
      \u0275\u0275elementStart(2, "div", 4)(3, "div", 5)(4, "div", 6)(5, "mat-icon");
      \u0275\u0275text(6, "business");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "div")(8, "h1");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "p", 7);
      \u0275\u0275text(12);
      \u0275\u0275pipe(13, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(14, "button", 8);
      \u0275\u0275listener("click", function MyBusinessesComponent_Template_button_click_14_listener() {
        return ctx.showCreatePanel = !ctx.showCreatePanel;
      });
      \u0275\u0275elementStart(15, "mat-icon");
      \u0275\u0275text(16, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(19, MyBusinessesComponent_div_19_Template, 99, 65, "div", 9)(20, MyBusinessesComponent_div_20_Template, 5, 3, "div", 10)(21, MyBusinessesComponent_div_21_Template, 4, 1, "div", 11)(22, MyBusinessesComponent_div_22_Template, 15, 9, "div", 12)(23, MyBusinessesComponent_div_23_Template, 2, 1, "div", 13)(24, MyBusinessesComponent_div_24_Template, 43, 23, "div", 14);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedBiz);
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 10, "BUSINESSES.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "BUSINESSES.PAGE_SUBTITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "BUSINESSES.CREATE"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showCreatePanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.businesses.length === 0 && !ctx.showCreatePanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.businesses.length > 0 && !ctx.selectedBiz);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedBiz && !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, EmailValidator, NgModel, NgForm, RouterModule, TranslateModule, MatSnackBarModule, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslatePipe], styles: ["\n\n.biz-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 28px 16px calc(var(--bottom-nav-height, 60px) + 32px);\n}\n.biz-page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.biz-page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.biz-page-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-page-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.biz-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 2px;\n}\n.biz-page-header[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n}\n.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  --mdc-circular-progress-active-indicator-color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n}\n.btn-outline[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: transparent;\n  color: #667eea;\n  border: 1.5px solid #667eea;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-outline[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.btn-outline[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.btn-back[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  color: #667eea;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 20px;\n  transition: opacity 0.15s ease;\n}\n.btn-back[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  opacity: 0.75;\n}\n.btn-revoke[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1.5px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s ease;\n}\n.btn-revoke[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-revoke[_ngcontent-%COMP%]:hover {\n  background: #fef2f2;\n}\n.role-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.role-chip.owner[_ngcontent-%COMP%] {\n  background: rgba(102, 126, 234, 0.12);\n  color: #4f46e5;\n}\n.role-chip.small[_ngcontent-%COMP%] {\n  font-size: 10px;\n  padding: 2px 8px;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 12px;\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.alert.alert-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.state-msg[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 40px;\n  color: #6b7280;\n  font-size: 14px;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 60px 24px 40px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(102, 126, 234, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: #667eea;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 8px;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 24px;\n  max-width: 340px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.biz-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.biz-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  transition:\n    border-color 0.15s ease,\n    box-shadow 0.15s ease,\n    transform 0.15s ease;\n}\n.biz-card[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.18);\n  transform: translateY(-1px);\n}\n.biz-avatar[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.biz-card-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.biz-card-name[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.biz-card-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.biz-card-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.footer-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.footer-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #9ca3af;\n}\n.card-arrow[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  transition: color 0.15s ease, transform 0.15s ease;\n}\n.biz-card[_ngcontent-%COMP%]:hover   .card-arrow[_ngcontent-%COMP%] {\n  color: #667eea;\n  transform: translateX(2px);\n}\n.create-panel[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #667eea;\n  border-radius: 14px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.06);\n}\n.create-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.create-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.create-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.detail-hero[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 24px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.detail-hero-icon[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.detail-hero-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.detail-hero-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.detail-biz-name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  font-weight: 800;\n  margin: 0 0 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.detail-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.detail-hero-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.detail-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.info-card[_ngcontent-%COMP%], \n.members-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.card-section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #667eea;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.card-section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.member-count-badge[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: rgba(102, 126, 234, 0.12);\n  color: #4f46e5;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  letter-spacing: 0;\n  text-transform: none;\n}\n.card-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.info-rows[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.info-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6b7280;\n}\n.info-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.info-value[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #1f2937;\n  line-height: 1.5;\n}\n.info-value.desc[_ngcontent-%COMP%] {\n  font-style: italic;\n  color: #6b7280;\n}\n.add-member-panel[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1.5px dashed #c7d2fe;\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.add-member-panel[_ngcontent-%COMP%]   .add-member-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 14px;\n}\n.member-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.member-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  transition: border-color 0.15s ease;\n}\n.member-row[_ngcontent-%COMP%]:hover {\n  border-color: #c7d2fe;\n}\n.member-avatar[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.member-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.member-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.member-email[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.empty-members[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px 12px;\n  color: #6b7280;\n}\n.empty-members[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.4;\n}\n.empty-members[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 13px;\n}\n.form-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #667eea;\n  margin: 16px 0 8px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 5px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 9px 12px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #f9fafb;\n  transition:\n    border-color 0.15s ease,\n    box-shadow 0.15s ease,\n    background 0.15s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.migrate-toggle[_ngcontent-%COMP%] {\n  margin: 12px 0 16px;\n}\n.migrate-toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.migrate-toggle[_ngcontent-%COMP%]   .toggle-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.migrate-toggle[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6b7280;\n  margin-left: 23px;\n}\n.panel-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.address-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 100;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n}\n.address-item[_ngcontent-%COMP%] {\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n}\n.address-item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.address-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.address-main[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.address-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n@media (max-width: 700px) {\n  .biz-page-header[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n  .detail-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .detail-hero[_ngcontent-%COMP%] {\n    gap: 14px;\n  }\n  .detail-hero-actions[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .detail-hero-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .detail-hero-actions[_ngcontent-%COMP%]   .btn-outline[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .biz-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .biz-page[_ngcontent-%COMP%] {\n    padding-top: 20px;\n  }\n  .biz-page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .detail-biz-name[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=my-businesses.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyBusinessesComponent, [{
    type: Component,
    args: [{ selector: "app-my-businesses", standalone: true, imports: [CommonModule, FormsModule, RouterModule, TranslateModule, MatSnackBarModule, MatIconModule, MatProgressSpinnerModule], template: `<div class="biz-page">

  <!-- Back nav (page level) -->
  <button class="btn-back" *ngIf="!selectedBiz" (click)="goBack()">
    <mat-icon>arrow_back</mat-icon>
    {{ 'COMMON.BACK' | translate }}
  </button>

  <!-- \u2500\u2500 Page Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="biz-page-header">
    <div class="header-left">
      <div class="header-icon">
        <mat-icon>business</mat-icon>
      </div>
      <div>
        <h1>{{ 'BUSINESSES.TITLE' | translate }}</h1>
        <p class="header-subtitle">{{ 'BUSINESSES.PAGE_SUBTITLE' | translate }}</p>
      </div>
    </div>
    <button class="btn-primary" (click)="showCreatePanel = !showCreatePanel">
      <mat-icon>add</mat-icon>
      {{ 'BUSINESSES.CREATE' | translate }}
    </button>
  </div>

  <!-- \u2500\u2500 Create Business Panel \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="create-panel" *ngIf="showCreatePanel">
    <div class="panel-header">
      <mat-icon>add_business</mat-icon>
      <h3>{{ 'BUSINESSES.CREATE_TITLE' | translate }}</h3>
    </div>

    <form #createForm="ngForm" (ngSubmit)="onCreateBusiness(createForm)">

      <div class="form-group">
        <label>{{ 'BUSINESSES.BIZ_NAME' | translate }} <span class="required">*</span></label>
        <input type="text" class="form-control" name="newBizName" [(ngModel)]="newBizName" required
               placeholder="e.g. Acme Plumbing Ltd" />
      </div>

      <div class="form-section-label">{{ 'BUSINESSES.SEARCH_ADDRESS' | translate }}</div>
      <div class="form-group">
        <div class="autocomplete-container">
          <input type="text" class="form-control"
                 [placeholder]="'AUTH.REGISTER_PRO.SEARCH_ADDRESS_PLACEHOLDER' | translate"
                 (input)="onAddressInput($event)"
                 (blur)="hideAddressList()"
                 autocomplete="off" />
          <div class="address-dropdown" *ngIf="showAddressList">
            <div *ngFor="let p of addressPredictions" class="address-item"
                 (mousedown)="$event.preventDefault()"
                 (click)="onAddressSelected(p)">
              <div class="address-main">{{ p.mainText }}</div>
              <div class="address-secondary">{{ p.secondaryText }}</div>
            </div>
          </div>
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>{{ 'BUSINESSES.HOUSE' | translate }} <span class="required">*</span></label>
          <input type="text" class="form-control" name="newBizHouse" [(ngModel)]="newBizHouse" required placeholder="12A" />
        </div>
        <div class="form-group">
          <label>{{ 'BUSINESSES.ZIP' | translate }} <span class="required">*</span></label>
          <input type="text" class="form-control" name="newBizZip" [(ngModel)]="newBizZip" required placeholder="695001" />
        </div>
      </div>

      <div class="form-group">
        <label>{{ 'BUSINESSES.STREET' | translate }} <span class="required">*</span></label>
        <input type="text" class="form-control" name="newBizStreet1" [(ngModel)]="newBizStreet1" required placeholder="Street / Road" />
      </div>

      <div class="form-group">
        <label>{{ 'BUSINESSES.STREET2' | translate }}</label>
        <input type="text" class="form-control" name="newBizStreet2" [(ngModel)]="newBizStreet2" placeholder="Floor, unit\u2026" />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>{{ 'BUSINESSES.CITY' | translate }} <span class="required">*</span></label>
          <input type="text" class="form-control" name="newBizCity" [(ngModel)]="newBizCity" required placeholder="City" />
        </div>
        <div class="form-group">
          <label>{{ 'BUSINESSES.DISTRICT' | translate }}</label>
          <input type="text" class="form-control" name="newBizDistrict" [(ngModel)]="newBizDistrict" placeholder="District" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label>{{ 'BUSINESSES.STATE' | translate }} <span class="required">*</span></label>
          <input type="text" class="form-control" name="newBizState" [(ngModel)]="newBizState" required placeholder="State" />
        </div>
        <div class="form-group">
          <label>{{ 'BUSINESSES.COUNTRY' | translate }} <span class="required">*</span></label>
          <input type="text" class="form-control" name="newBizCountry" [(ngModel)]="newBizCountry" required placeholder="Country" />
        </div>
      </div>

      <div class="migrate-toggle">
        <label class="toggle-label">
          <input type="checkbox" name="migrateSoloServices" [(ngModel)]="migrateSoloServices" />
          <span>{{ 'BUSINESSES.MIGRATE_SERVICES' | translate }}</span>
        </label>
        <small>{{ 'BUSINESSES.MIGRATE_SERVICES_HINT' | translate }}</small>
      </div>

      <div class="alert alert-error" *ngIf="createError">
        <mat-icon>error_outline</mat-icon> {{ createError }}
      </div>

      <div class="panel-actions">
        <button type="button" class="btn-secondary" (click)="showCreatePanel = false">
          {{ 'COMMON.CANCEL' | translate }}
        </button>
        <button type="submit" class="btn-primary" [disabled]="!createForm.valid || createLoading">
          <mat-spinner *ngIf="createLoading" diameter="16"></mat-spinner>
          <mat-icon *ngIf="!createLoading">check</mat-icon>
          {{ createLoading ? ('COMMON.SAVING' | translate) : ('BUSINESSES.CREATE' | translate) }}
        </button>
      </div>

    </form>
  </div>

  <!-- \u2500\u2500 Loading / Error \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="state-msg" *ngIf="loading">
    <mat-spinner diameter="32"></mat-spinner>
    <span>{{ 'COMMON.LOADING' | translate }}</span>
  </div>
  <div class="alert alert-error" *ngIf="error">
    <mat-icon>error_outline</mat-icon> {{ error }}
  </div>

  <!-- \u2500\u2500 Empty State \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="empty-state" *ngIf="!loading && !error && businesses.length === 0 && !showCreatePanel">
    <div class="empty-icon">
      <mat-icon>business</mat-icon>
    </div>
    <h3>{{ 'BUSINESSES.EMPTY_TITLE' | translate }}</h3>
    <p>{{ 'BUSINESSES.EMPTY' | translate }}</p>
    <button class="btn-primary" (click)="showCreatePanel = true">
      <mat-icon>add</mat-icon>
      {{ 'BUSINESSES.CREATE' | translate }}
    </button>
  </div>

  <!-- \u2500\u2500 Business List \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="biz-grid" *ngIf="!loading && businesses.length > 0 && !selectedBiz">
    <div class="biz-card" *ngFor="let biz of businesses" (click)="selectBusiness(biz)">
      <div class="biz-avatar">
        <mat-icon>business</mat-icon>
      </div>
      <div class="biz-card-info">
        <div class="biz-card-name">{{ biz.businessName }}</div>
        <div class="biz-card-meta">
          <span class="role-chip" [class.owner]="biz.role === 'Owner'">{{ biz.role }}</span>
          <span class="status-chip" [class.active]="biz.status === 'Active'">{{ biz.status }}</span>
        </div>
      </div>
      <div class="biz-card-footer">
        <span class="footer-item" *ngIf="biz.address?.city">
          <mat-icon>location_on</mat-icon>
          {{ biz.address!.city }}{{ biz.address!.state ? ', ' + biz.address!.state : '' }}
        </span>
        <span class="footer-item">
          <mat-icon>group</mat-icon>
          {{ biz.memberCount }} {{ biz.memberCount === 1 ? ('BUSINESSES.MEMBER_SINGULAR' | translate) : ('BUSINESSES.MEMBER_PLURAL' | translate) }}
        </span>
      </div>
      <mat-icon class="card-arrow">chevron_right</mat-icon>
    </div>
  </div>

  <!-- \u2500\u2500 Business Detail View \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="biz-detail" *ngIf="selectedBiz && !loading">

    <!-- Back nav -->
    <button class="btn-back" (click)="clearSelection()">
      <mat-icon>arrow_back</mat-icon>
      {{ 'COMMON.BACK' | translate }}
    </button>

    <!-- Detail hero -->
    <div class="detail-hero">
      <div class="detail-hero-icon">
        <mat-icon>business</mat-icon>
      </div>
      <div class="detail-hero-text">
        <h2 class="detail-biz-name">{{ selectedBiz.businessName }}</h2>
        <div class="detail-chips">
          <span class="role-chip" [class.owner]="selectedBiz.role === 'Owner'">{{ selectedBiz.role }}</span>
          <span class="status-chip" [class.active]="selectedBiz.status === 'Active'">{{ selectedBiz.status }}</span>
        </div>
      </div>
      <!-- Owner actions in hero -->
      <div class="detail-hero-actions" *ngIf="isOwner()">
        <button class="btn-outline" (click)="migrateServices()">
          <mat-icon>sync_alt</mat-icon>
          {{ 'BUSINESSES.MIGRATE_BTN' | translate }}
        </button>
        <button class="btn-primary" (click)="showAddMemberPanel = !showAddMemberPanel">
          <mat-icon>person_add</mat-icon>
          {{ 'BUSINESSES.ADD_MEMBER' | translate }}
        </button>
      </div>
    </div>

    <!-- Detail content: 2-col on desktop -->
    <div class="detail-layout">

      <!-- Left column: Business info -->
      <div class="detail-col">
        <div class="info-card">
          <div class="card-section-title">
            <mat-icon>info</mat-icon>
            <span>{{ 'BUSINESSES.BIZ_INFO_TITLE' | translate }}</span>
          </div>

          <div *ngIf="bizDetailLoading" class="card-loading">
            <mat-spinner diameter="24"></mat-spinner>
          </div>

          <div *ngIf="bizDetail && !bizDetailLoading" class="info-rows">
            <div class="info-row" *ngIf="bizDetail.description">
              <span class="info-label"><mat-icon>notes</mat-icon> {{ 'BUSINESSES.DESCRIPTION' | translate }}</span>
              <span class="info-value desc">{{ bizDetail.description }}</span>
            </div>
            <div class="info-row" *ngIf="bizDetail.address">
              <span class="info-label"><mat-icon>location_on</mat-icon> {{ 'BUSINESSES.ADDRESS' | translate }}</span>
              <span class="info-value">
                {{ bizDetail.address.houseNameNumber }}{{ bizDetail.address.street1 ? ', ' + bizDetail.address.street1 : '' }}{{ bizDetail.address.street2 ? ', ' + bizDetail.address.street2 : '' }},
                {{ bizDetail.address.city }}{{ bizDetail.address.district ? ', ' + bizDetail.address.district : '' }},
                {{ bizDetail.address.state }}, {{ bizDetail.address.country }} {{ bizDetail.address.zipPostalCode }}
              </span>
            </div>
            <div class="info-row" *ngIf="bizDetail.phone">
              <span class="info-label"><mat-icon>phone</mat-icon> {{ 'BUSINESSES.PHONE' | translate }}</span>
              <span class="info-value">{{ bizDetail.phone }}</span>
            </div>
            <div class="info-row">
              <span class="info-label"><mat-icon>miscellaneous_services</mat-icon> {{ 'BUSINESSES.SERVICES_COUNT' | translate }}</span>
              <span class="info-value">{{ bizDetail.serviceCount }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right column: Members -->
      <div class="detail-col">
        <div class="members-card">
          <div class="card-section-title">
            <mat-icon>group</mat-icon>
            <span>{{ 'BUSINESSES.MEMBERS' | translate }}</span>
            <span class="member-count-badge">{{ members.length }}</span>
          </div>

          <!-- Add member panel -->
          <div class="add-member-panel" *ngIf="showAddMemberPanel && isOwner()">
            <p class="add-member-hint">{{ 'BUSINESSES.ADD_MEMBER_TITLE' | translate }}</p>
            <form #addForm="ngForm" (ngSubmit)="onAddMember(addForm)">
              <div class="form-row">
                <div class="form-group">
                  <label>{{ 'BUSINESSES.MEMBER_EMAIL' | translate }} <span class="required">*</span></label>
                  <input type="email" class="form-control" name="addMemberEmail"
                         [(ngModel)]="addMemberEmail" required email placeholder="pro@example.com" />
                </div>
                <div class="form-group">
                  <label>{{ 'BUSINESSES.MEMBER_ROLE' | translate }}</label>
                  <select class="form-control" name="addMemberRole" [(ngModel)]="addMemberRole">
                    <option value="Member">Member</option>
                    <option value="Owner">Owner</option>
                  </select>
                </div>
              </div>
              <div class="alert alert-error" *ngIf="addMemberError">
                <mat-icon>error_outline</mat-icon> {{ addMemberError }}
              </div>
              <div class="panel-actions">
                <button type="button" class="btn-secondary" (click)="showAddMemberPanel = false">
                  {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button type="submit" class="btn-primary" [disabled]="!addForm.valid || addMemberLoading">
                  <mat-spinner *ngIf="addMemberLoading" diameter="14"></mat-spinner>
                  <mat-icon *ngIf="!addMemberLoading">person_add</mat-icon>
                  {{ addMemberLoading ? ('COMMON.SAVING' | translate) : ('BUSINESSES.ADD_MEMBER' | translate) }}
                </button>
              </div>
            </form>
          </div>

          <!-- Members loading -->
          <div class="card-loading" *ngIf="membersLoading">
            <mat-spinner diameter="24"></mat-spinner>
          </div>

          <!-- Member list -->
          <div class="member-list" *ngIf="!membersLoading">
            <div class="member-row" *ngFor="let m of members">
              <div class="member-avatar">{{ (m.proName || 'P')[0].toUpperCase() }}</div>
              <div class="member-info">
                <span class="member-name">{{ m.proName || ('Pro #' + m.proId) }}</span>
                <span class="member-email">{{ m.proEmail }}</span>
              </div>
              <span class="role-chip small" [class.owner]="m.role === 'Owner'">{{ m.role }}</span>
              <button class="btn-revoke" *ngIf="isOwner() && m.role !== 'Owner'" (click)="removeMember(m.id)"
                      [title]="'BUSINESSES.REMOVE' | translate">
                <mat-icon>person_remove</mat-icon>
              </button>
            </div>
            <div class="empty-members" *ngIf="members.length === 0">
              <mat-icon>group_off</mat-icon>
              <p>{{ 'BUSINESSES.NO_MEMBERS' | translate }}</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>

</div>
`, styles: ["/* src/app/features/my-businesses/my-businesses.scss */\n.biz-page {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 28px 16px calc(var(--bottom-nav-height, 60px) + 32px);\n}\n.biz-page-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 28px;\n  flex-wrap: wrap;\n}\n.biz-page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.biz-page-header .header-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-page-header .header-icon mat-icon {\n  color: #fff;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.biz-page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 2px;\n}\n.biz-page-header .header-subtitle {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n}\n.btn-primary mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-primary mat-spinner {\n  --mdc-circular-progress-active-indicator-color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 18px;\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.btn-secondary:hover {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n}\n.btn-outline {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 9px 16px;\n  background: transparent;\n  color: #667eea;\n  border: 1.5px solid #667eea;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: background 0.15s ease;\n}\n.btn-outline mat-icon {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.btn-outline:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.btn-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: none;\n  color: #667eea;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  padding: 0;\n  margin-bottom: 20px;\n  transition: opacity 0.15s ease;\n}\n.btn-back mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-back:hover {\n  opacity: 0.75;\n}\n.btn-revoke {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 32px;\n  height: 32px;\n  background: none;\n  border: 1.5px solid #fecaca;\n  border-radius: 8px;\n  color: #dc2626;\n  cursor: pointer;\n  flex-shrink: 0;\n  transition: background 0.15s ease;\n}\n.btn-revoke mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-revoke:hover {\n  background: #fef2f2;\n}\n.role-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.role-chip.owner {\n  background: rgba(102, 126, 234, 0.12);\n  color: #4f46e5;\n}\n.role-chip.small {\n  font-size: 10px;\n  padding: 2px 8px;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.status-chip.active {\n  background: #d1fae5;\n  color: #065f46;\n}\n.alert {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  margin-bottom: 12px;\n}\n.alert mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.alert.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.alert.alert-error mat-icon {\n  color: #dc2626;\n}\n.state-msg {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 40px;\n  color: #6b7280;\n  font-size: 14px;\n}\n.empty-state {\n  text-align: center;\n  padding: 60px 24px 40px;\n}\n.empty-state .empty-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  background: rgba(102, 126, 234, 0.08);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin: 0 auto 20px;\n}\n.empty-state .empty-icon mat-icon {\n  font-size: 36px;\n  width: 36px;\n  height: 36px;\n  color: #667eea;\n}\n.empty-state h3 {\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 8px;\n}\n.empty-state p {\n  font-size: 14px;\n  color: #6b7280;\n  margin: 0 0 24px;\n  max-width: 340px;\n  margin-left: auto;\n  margin-right: auto;\n}\n.biz-grid {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.biz-card {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  padding: 16px 20px;\n  transition:\n    border-color 0.15s ease,\n    box-shadow 0.15s ease,\n    transform 0.15s ease;\n}\n.biz-card:hover {\n  border-color: #667eea;\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.18);\n  transform: translateY(-1px);\n}\n.biz-avatar {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.biz-avatar mat-icon {\n  color: #fff;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.biz-card-info {\n  flex: 1;\n  min-width: 0;\n}\n.biz-card-name {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1f2937;\n  margin-bottom: 6px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.biz-card-meta {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.biz-card-footer {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  flex-shrink: 0;\n  margin-left: auto;\n}\n.footer-item {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.footer-item mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  color: #9ca3af;\n}\n.card-arrow {\n  color: #d1d5db;\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n  transition: color 0.15s ease, transform 0.15s ease;\n}\n.biz-card:hover .card-arrow {\n  color: #667eea;\n  transform: translateX(2px);\n}\n.create-panel {\n  background: #fff;\n  border: 1.5px solid #667eea;\n  border-radius: 14px;\n  padding: 24px;\n  margin-bottom: 24px;\n  box-shadow: 0 0 0 4px rgba(102, 126, 234, 0.06);\n}\n.create-panel .panel-header {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-bottom: 20px;\n}\n.create-panel .panel-header mat-icon {\n  color: #667eea;\n  font-size: 22px;\n  width: 22px;\n  height: 22px;\n}\n.create-panel .panel-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.detail-hero {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 24px;\n  margin-bottom: 20px;\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.detail-hero-icon {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.detail-hero-icon mat-icon {\n  color: #fff;\n  font-size: 28px;\n  width: 28px;\n  height: 28px;\n}\n.detail-hero-text {\n  flex: 1;\n  min-width: 0;\n}\n.detail-biz-name {\n  font-size: 20px;\n  font-weight: 800;\n  margin: 0 0 8px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n}\n.detail-chips {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.detail-hero-actions {\n  display: flex;\n  gap: 10px;\n  flex-wrap: wrap;\n  flex-shrink: 0;\n}\n.detail-layout {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n  align-items: start;\n}\n.info-card,\n.members-card {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 20px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n.card-section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 12px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #667eea;\n  margin-bottom: 16px;\n  padding-bottom: 12px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.card-section-title mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.member-count-badge {\n  margin-left: auto;\n  background: rgba(102, 126, 234, 0.12);\n  color: #4f46e5;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 1px 7px;\n  border-radius: 20px;\n  letter-spacing: 0;\n  text-transform: none;\n}\n.card-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 24px;\n}\n.info-rows {\n  display: flex;\n  flex-direction: column;\n  gap: 14px;\n}\n.info-row {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.info-label {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11px;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  color: #6b7280;\n}\n.info-label mat-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.info-value {\n  font-size: 13px;\n  color: #1f2937;\n  line-height: 1.5;\n}\n.info-value.desc {\n  font-style: italic;\n  color: #6b7280;\n}\n.add-member-panel {\n  background: #f9fafb;\n  border: 1.5px dashed #c7d2fe;\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.add-member-panel .add-member-hint {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0 0 14px;\n}\n.member-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.member-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 12px;\n  border-radius: 10px;\n  background: #f9fafb;\n  border: 1px solid #e5e7eb;\n  transition: border-color 0.15s ease;\n}\n.member-row:hover {\n  border-color: #c7d2fe;\n}\n.member-avatar {\n  width: 36px;\n  height: 36px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.member-info {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n.member-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.member-email {\n  font-size: 11px;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.empty-members {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px 12px;\n  color: #6b7280;\n}\n.empty-members mat-icon {\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n  opacity: 0.4;\n}\n.empty-members p {\n  margin: 0;\n  font-size: 13px;\n}\n.form-section-label {\n  font-size: 11px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  color: #667eea;\n  margin: 16px 0 8px;\n  padding-bottom: 6px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-group label {\n  display: block;\n  font-size: 12px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 5px;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 9px 12px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #f9fafb;\n  transition:\n    border-color 0.15s ease,\n    box-shadow 0.15s ease,\n    background 0.15s ease;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.required {\n  color: #dc2626;\n}\n.migrate-toggle {\n  margin: 12px 0 16px;\n}\n.migrate-toggle .toggle-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.migrate-toggle .toggle-label input[type=checkbox] {\n  width: 15px;\n  height: 15px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.migrate-toggle small {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #6b7280;\n  margin-left: 23px;\n}\n.panel-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n  margin-top: 16px;\n}\n.autocomplete-container {\n  position: relative;\n}\n.address-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 100;\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);\n}\n.address-item {\n  padding: 9px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n}\n.address-item:hover {\n  background: #f9fafb;\n}\n.address-item:last-child {\n  border-bottom: none;\n}\n.address-main {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.address-secondary {\n  font-size: 12px;\n  color: #9ca3af;\n}\n@media (max-width: 700px) {\n  .biz-page-header .btn-primary {\n    width: 100%;\n    justify-content: center;\n  }\n  .detail-layout {\n    grid-template-columns: 1fr;\n  }\n  .detail-hero {\n    gap: 14px;\n  }\n  .detail-hero-actions {\n    width: 100%;\n  }\n  .detail-hero-actions .btn-primary,\n  .detail-hero-actions .btn-outline {\n    flex: 1;\n    justify-content: center;\n  }\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n  .biz-grid {\n    grid-template-columns: 1fr;\n  }\n}\n@media (max-width: 480px) {\n  .biz-page {\n    padding-top: 20px;\n  }\n  .biz-page-header h1 {\n    font-size: 18px;\n  }\n  .detail-biz-name {\n    font-size: 17px;\n  }\n}\n/*# sourceMappingURL=my-businesses.css.map */\n"] }]
  }], () => [{ type: BusinessService }, { type: AddressService }, { type: MatSnackBar }, { type: ChangeDetectorRef }, { type: Location }, { type: ActivatedRoute }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyBusinessesComponent, { className: "MyBusinessesComponent", filePath: "src/app/features/my-businesses/my-businesses.ts", lineNumber: 21 });
})();
export {
  MyBusinessesComponent
};
//# sourceMappingURL=chunk-AECS2GDH.js.map

