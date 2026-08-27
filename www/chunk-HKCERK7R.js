import {
  MyServicesService
} from "./chunk-IDQJ6VKN.js";
import {
  ServiceCategoryService
} from "./chunk-ITBAOVBM.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HKDS7TNR.js";
import "./chunk-CCCBJG6P.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-RUKCNJZP.js";
import "./chunk-LW3HGLL7.js";
import {
  getHttpErrorMessage
} from "./chunk-MBOZ5WI3.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  NumberValueAccessor,
  ReactiveFormsModule,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WDC3QMAT.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-CESE7TJL.js";
import {
  Auth
} from "./chunk-SNFMA3C7.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterModule
} from "./chunk-BALEJLRX.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  Subject,
  setClassMetadata,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-O3FI6JPK.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/add-service/add-service.ts
function AddServiceComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function AddServiceComponent_div_13_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissMessage("success"));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function AddServiceComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 9);
    \u0275\u0275listener("click", function AddServiceComponent_div_14_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissMessage("error"));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function AddServiceComponent_div_15_small_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.NAME_REQUIRED"));
  }
}
function AddServiceComponent_div_15_small_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.NAME_MIN"));
  }
}
function AddServiceComponent_div_15_small_10_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.NAME_MAX"));
  }
}
function AddServiceComponent_div_15_small_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275template(1, AddServiceComponent_div_15_small_10_span_1_Template, 3, 3, "span", 29)(2, AddServiceComponent_div_15_small_10_span_2_Template, 3, 3, "span", 29)(3, AddServiceComponent_div_15_small_10_span_3_Template, 3, 3, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["name"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["name"].errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["name"].errors["maxlength"]);
  }
}
function AddServiceComponent_div_15_small_22_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.DESC_REQUIRED"));
  }
}
function AddServiceComponent_div_15_small_22_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.DESC_MIN"));
  }
}
function AddServiceComponent_div_15_small_22_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.DESC_MAX"));
  }
}
function AddServiceComponent_div_15_small_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275template(1, AddServiceComponent_div_15_small_22_span_1_Template, 3, 3, "span", 29)(2, AddServiceComponent_div_15_small_22_span_2_Template, 3, 3, "span", 29)(3, AddServiceComponent_div_15_small_22_span_3_Template, 3, 3, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["description"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["description"].errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["description"].errors["maxlength"]);
  }
}
function AddServiceComponent_div_15_small_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.PRICE_REQUIRED"));
  }
}
function AddServiceComponent_div_15_small_35_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.PRICE_MIN"));
  }
}
function AddServiceComponent_div_15_small_35_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.PRICE_MAX"));
  }
}
function AddServiceComponent_div_15_small_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275template(1, AddServiceComponent_div_15_small_35_span_1_Template, 3, 3, "span", 29)(2, AddServiceComponent_div_15_small_35_span_2_Template, 3, 3, "span", 29)(3, AddServiceComponent_div_15_small_35_span_3_Template, 3, 3, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["price"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["price"].errors["min"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["price"].errors["max"]);
  }
}
function AddServiceComponent_div_15_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275element(1, "div", 44);
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_div_15_div_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "button", 46);
    \u0275\u0275listener("click", function AddServiceComponent_div_15_div_43_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadCategories());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "ADD_SERVICE.CAT_ERROR"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "COMMON.RETRY"));
  }
}
function AddServiceComponent_div_15_ng_container_44_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.CAT_EMPTY"));
  }
}
function AddServiceComponent_div_15_ng_container_44_select_2_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r6 = ctx.$implicit;
    \u0275\u0275property("value", category_r6.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", category_r6.icon, " ", category_r6.name, " ");
  }
}
function AddServiceComponent_div_15_ng_container_44_select_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 50)(1, "option", 51);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AddServiceComponent_div_15_ng_container_44_select_2_option_4_Template, 2, 3, "option", 52);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["serviceCategoryId"].touched) && ctx_r1.f["serviceCategoryId"].errors);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "ADD_SERVICE.CAT_SELECT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
  }
}
function AddServiceComponent_div_15_ng_container_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddServiceComponent_div_15_ng_container_44_p_1_Template, 3, 3, "p", 47)(2, AddServiceComponent_div_15_ng_container_44_select_2_Template, 5, 6, "select", 48);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categories.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.categories.length > 0);
  }
}
function AddServiceComponent_div_15_small_45_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.CAT_REQUIRED"));
  }
}
function AddServiceComponent_div_15_small_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275template(1, AddServiceComponent_div_15_small_45_span_1_Template, 3, 3, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["serviceCategoryId"].errors["required"]);
  }
}
function AddServiceComponent_div_15_small_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.IMAGE_INVALID"), " ");
  }
}
function AddServiceComponent_div_15_small_81_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TERMS_REQUIRED"), " ");
  }
}
function AddServiceComponent_div_15_mat_spinner_87_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 54);
  }
}
function AddServiceComponent_div_15_mat_icon_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "form", 12);
    \u0275\u0275listener("ngSubmit", function AddServiceComponent_div_15_Template_form_ngSubmit_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(2, "div", 13)(3, "label", 14);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 15);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "input", 16);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275template(10, AddServiceComponent_div_15_small_10_Template, 4, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 13)(12, "label", 18);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span", 15);
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "textarea", 19);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "div", 20);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AddServiceComponent_div_15_small_22_Template, 4, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 21)(24, "div", 13)(25, "label", 22);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span", 15);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 23)(31, "span", 24);
    \u0275\u0275text(32, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(33, "input", 25);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AddServiceComponent_div_15_small_35_Template, 4, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 13)(37, "label", 26);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementStart(40, "span", 15);
    \u0275\u0275text(41, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, AddServiceComponent_div_15_div_42_Template, 2, 0, "div", 27)(43, AddServiceComponent_div_15_div_43_Template, 8, 6, "div", 28)(44, AddServiceComponent_div_15_ng_container_44_Template, 3, 2, "ng-container", 29)(45, AddServiceComponent_div_15_small_45_Template, 2, 1, "small", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 13)(47, "label", 30);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementStart(50, "span", 31);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(53, "input", 32);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementStart(55, "small", 33);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, AddServiceComponent_div_15_small_58_Template, 3, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "div", 34)(60, "mat-icon");
    \u0275\u0275text(61, "lightbulb");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "ul")(63, "li");
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "li");
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "li");
    \u0275\u0275text(70);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "li");
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(75, "div", 35)(76, "label", 36);
    \u0275\u0275element(77, "input", 37);
    \u0275\u0275elementStart(78, "span");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(81, AddServiceComponent_div_15_small_81_Template, 3, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "div", 38)(83, "button", 39);
    \u0275\u0275listener("click", function AddServiceComponent_div_15_Template_button_click_83_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(84);
    \u0275\u0275pipe(85, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(86, "button", 40);
    \u0275\u0275template(87, AddServiceComponent_div_15_mat_spinner_87_Template, 1, 0, "mat-spinner", 41)(88, AddServiceComponent_div_15_mat_icon_88_Template, 2, 0, "mat-icon", 29);
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.serviceForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 42, "ADD_SERVICE.NAME_LABEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["name"].touched) && ctx_r1.f["name"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 44, "ADD_SERVICE.NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["name"].touched) && ctx_r1.f["name"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 46, "ADD_SERVICE.DESC_LABEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(18, 48, "ADD_SERVICE.DESC_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ((tmp_9_0 = ctx_r1.serviceForm.get("description")) == null ? null : tmp_9_0.value == null ? null : tmp_9_0.value.length) || 0, " / 2000 ", \u0275\u0275pipeBind1(21, 50, "ADD_SERVICE.CHARS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 52, "ADD_SERVICE.PRICE_LABEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["price"].touched) && ctx_r1.f["price"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 54, "ADD_SERVICE.PRICE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["price"].touched) && ctx_r1.f["price"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(39, 56, "ADD_SERVICE.CAT_LABEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.categoriesLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.categoriesLoading && ctx_r1.categoriesError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.categoriesLoading && !ctx_r1.categoriesError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["serviceCategoryId"].touched) && ctx_r1.f["serviceCategoryId"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 58, "ADD_SERVICE.IMAGE_LABEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(52, 60, "COMMON.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["imageUrl"].touched) && ctx_r1.f["imageUrl"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(54, 62, "ADD_SERVICE.IMAGE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 64, "ADD_SERVICE.IMAGE_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["imageUrl"].touched) && ctx_r1.f["imageUrl"].errors);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 66, "ADD_SERVICE.TIP1"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 68, "ADD_SERVICE.TIP2"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 70, "ADD_SERVICE.TIP3"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(74, 72, "ADD_SERVICE.TIP4"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 74, "COMMON.AGREE_TERMS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(85, 76, "ADD_SERVICE.CLEAR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitted ? \u0275\u0275pipeBind1(90, 78, "ADD_SERVICE.SUBMITTING") : \u0275\u0275pipeBind1(91, 80, "ADD_SERVICE.SUBMIT"), " ");
  }
}
var AddServiceComponent = class _AddServiceComponent {
  fb;
  router;
  myServicesService;
  serviceCategoryService;
  auth;
  cdr;
  serviceForm;
  submitted = false;
  successMessage = "";
  errorMessage = "";
  categories = [];
  categoriesLoading = false;
  categoriesError = false;
  destroy$ = new Subject();
  constructor(fb, router, myServicesService, serviceCategoryService, auth, cdr) {
    this.fb = fb;
    this.router = router;
    this.myServicesService = myServicesService;
    this.serviceCategoryService = serviceCategoryService;
    this.auth = auth;
    this.cdr = cdr;
  }
  ngOnInit() {
    if (!this.auth.isAuthenticated() || this.auth.getUserType() !== "Pro") {
      this.errorMessage = "You must be logged in as a professional to add services.";
      this.router.navigate(["/"]);
      return;
    }
    this.loadCategories();
    this.initializeForm();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCategories() {
    this.categoriesLoading = true;
    this.categoriesError = false;
    this.cdr.detectChanges();
    this.serviceCategoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => {
        this.categories = categories;
        this.categoriesLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.categoriesLoading = false;
        this.categoriesError = true;
        this.cdr.detectChanges();
      }
    });
  }
  initializeForm() {
    this.serviceForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(2e3)]],
      price: ["", [Validators.required, Validators.min(1), Validators.max(9999999)]],
      serviceCategoryId: ["", Validators.required],
      imageUrl: ["", [Validators.pattern("^https?://.+")]],
      agreeToTerms: [false, Validators.required]
    });
  }
  get f() {
    return this.serviceForm.controls;
  }
  onSubmit() {
    this.errorMessage = "";
    this.successMessage = "";
    Object.keys(this.serviceForm.controls).forEach((key) => {
      this.serviceForm.get(key)?.markAsTouched();
    });
    if (!this.f["agreeToTerms"].value) {
      this.errorMessage = "You must agree to the Terms of Service to add a service.";
      this.submitted = false;
      this.cdr.markForCheck();
      return;
    }
    if (this.serviceForm.invalid) {
      this.errorMessage = "Please fill in all required fields correctly and agree to the terms.";
      this.submitted = false;
      this.cdr.markForCheck();
      return;
    }
    this.submitted = true;
    this.cdr.markForCheck();
    const proId = this.auth.getUserId();
    if (!proId) {
      this.errorMessage = "Unable to identify your professional account. Please logout and login again.";
      this.submitted = false;
      this.cdr.markForCheck();
      return;
    }
    const serviceData = {
      name: this.serviceForm.value.name,
      description: this.serviceForm.value.description,
      price: parseFloat(this.serviceForm.value.price),
      imageUrl: this.serviceForm.value.imageUrl?.trim() || null,
      serviceCategoryId: parseInt(this.serviceForm.value.serviceCategoryId, 10),
      proId: parseInt(proId, 10)
    };
    console.log("Adding Service:", serviceData);
    this.myServicesService.createService(serviceData).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Service added successfully:", response);
        this.successMessage = "Your service has been added successfully!";
        setTimeout(() => {
          this.serviceForm.reset();
          this.submitted = false;
          this.router.navigate(["/my-services"]);
        }, 2e3);
      },
      error: (error) => {
        console.error("Error adding service:", error);
        this.errorMessage = getHttpErrorMessage(error, "Error adding service. Please try again.");
        this.submitted = false;
        this.cdr.markForCheck();
      }
    });
  }
  dismissMessage(type) {
    if (type === "success") {
      this.successMessage = "";
    } else {
      this.errorMessage = "";
    }
    this.cdr.markForCheck();
  }
  resetForm() {
    this.serviceForm.reset();
    this.submitted = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.cdr.markForCheck();
  }
  static \u0275fac = function AddServiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddServiceComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MyServicesService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddServiceComponent, selectors: [["app-add-service"]], decls: 16, vars: 9, consts: [[1, "page"], [1, "page-header"], [1, "header-left"], [1, "header-icon"], [1, "header-subtitle"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "form-card", 4, "ngIf"], [1, "alert", "alert-success"], [1, "dismiss-btn", 3, "click"], [1, "alert", "alert-error"], [1, "form-card"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], [1, "required"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "error-text", 4, "ngIf"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "6", 1, "form-control", 3, "placeholder"], [1, "char-count"], [1, "form-row"], ["for", "price"], [1, "price-input-wrapper"], [1, "currency"], ["type", "number", "id", "price", "formControlName", "price", "step", "1", "min", "1", 1, "form-control", "price-input", 3, "placeholder"], ["for", "serviceCategoryId"], ["class", "cat-loading", 4, "ngIf"], ["class", "cat-error", 4, "ngIf"], [4, "ngIf"], ["for", "imageUrl"], [1, "optional-label"], ["type", "url", "id", "imageUrl", "formControlName", "imageUrl", 1, "form-control", 3, "placeholder"], [1, "hint-text"], [1, "tips-strip"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "form-actions"], ["type", "button", 1, "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn-primary", 3, "disabled"], ["diameter", "16", 4, "ngIf"], [1, "error-text"], [1, "cat-loading"], [1, "cat-skeleton"], [1, "cat-error"], ["type", "button", 3, "click"], ["class", "cat-empty", 4, "ngIf"], ["id", "serviceCategoryId", "formControlName", "serviceCategoryId", "class", "form-control", 3, "is-invalid", 4, "ngIf"], [1, "cat-empty"], ["id", "serviceCategoryId", "formControlName", "serviceCategoryId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["diameter", "16"]], template: function AddServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "mat-icon");
      \u0275\u0275text(5, "home_repair_service");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "div")(7, "h1");
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 4);
      \u0275\u0275text(11);
      \u0275\u0275pipe(12, "translate");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(13, AddServiceComponent_div_13_Template, 8, 1, "div", 5)(14, AddServiceComponent_div_14_Template, 8, 1, "div", 6)(15, AddServiceComponent_div_15_Template, 92, 82, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(8);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 5, "ADD_SERVICE.HERO_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 7, "ADD_SERVICE.HERO_SUB"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.serviceForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, TranslateModule, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.page[_ngcontent-%COMP%] {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: 28px 16px calc(var(--bottom-nav-height, 60px) + 32px);\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   .header-left[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 2px;\n}\n.page-header[_ngcontent-%COMP%]   .header-subtitle[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.alert[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  flex-shrink: 0;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin: 0;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.alert.alert-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #059669;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.alert.alert-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.form-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 600px) {\n  .form-card[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.required[_ngcontent-%COMP%] {\n  color: #dc2626;\n}\n.optional-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 12px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #f9fafb;\n  transition:\n    border-color 0.15s ease,\n    box-shadow 0.15s ease,\n    background 0.15s ease;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fff5f5;\n}\n.form-control[rows][_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\nselect.form-control[_ngcontent-%COMP%] {\n  appearance: auto;\n  cursor: pointer;\n}\n.error-text[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.hint-text[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.char-count[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.price-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f9fafb;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.price-input-wrapper[_ngcontent-%COMP%]:focus-within {\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.price-input-wrapper.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  padding: 0 12px;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 600;\n  border-right: 1.5px solid #e5e7eb;\n  align-self: stretch;\n  display: flex;\n  align-items: center;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .price-input[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  flex: 1;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .price-input[_ngcontent-%COMP%]:focus {\n  box-shadow: none;\n}\n.cat-loading[_ngcontent-%COMP%]   .cat-skeleton[_ngcontent-%COMP%] {\n  height: 42px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #fff3cd;\n  color: #856404;\n  font-size: 13px;\n}\n.cat-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.cat-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 4px 10px;\n  border: 1px solid #856404;\n  border-radius: 6px;\n  background: none;\n  color: #856404;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: inherit;\n}\n.cat-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f5dda0;\n}\n.cat-empty[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.tips-strip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  background: rgba(102, 126, 234, 0.05);\n  border-left: 3px solid #667eea;\n  border-radius: 0 8px 8px 0;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.tips-strip[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.tips-strip[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.tips-strip[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #4b5563;\n  padding-left: 12px;\n  position: relative;\n}\n.tips-strip[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\b7";\n  position: absolute;\n  left: 0;\n  color: #667eea;\n  font-weight: 700;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  cursor: pointer;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  flex-shrink: 0;\n  cursor: pointer;\n  accent-color: #667eea;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #374151;\n  line-height: 1.5;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 20px;\n  margin-top: 4px;\n  border-top: 1px solid #e5e7eb;\n}\n@media (max-width: 480px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .form-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%], \n   .form-actions[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.btn-primary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n}\n.btn-primary[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-primary[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%] {\n  --mdc-circular-progress-active-indicator-color: #fff;\n}\n.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-primary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n}\n.btn-secondary[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=add-service.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddServiceComponent, [{
    type: Component,
    args: [{ selector: "app-add-service", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule, MatIconModule, MatProgressSpinnerModule], template: `<div class="page">

  <!-- \u2500\u2500 Page Header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="page-header">
    <div class="header-left">
      <div class="header-icon">
        <mat-icon>home_repair_service</mat-icon>
      </div>
      <div>
        <h1>{{ 'ADD_SERVICE.HERO_TITLE' | translate }}</h1>
        <p class="header-subtitle">{{ 'ADD_SERVICE.HERO_SUB' | translate }}</p>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 Alerts \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="alert alert-success" *ngIf="successMessage">
    <mat-icon>check_circle</mat-icon>
    <span>{{ successMessage }}</span>
    <button class="dismiss-btn" (click)="dismissMessage('success')">
      <mat-icon>close</mat-icon>
    </button>
  </div>
  <div class="alert alert-error" *ngIf="errorMessage">
    <mat-icon>error_outline</mat-icon>
    <span>{{ errorMessage }}</span>
    <button class="dismiss-btn" (click)="dismissMessage('error')">
      <mat-icon>close</mat-icon>
    </button>
  </div>

  <!-- \u2500\u2500 Form card \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="form-card" *ngIf="serviceForm">
    <form [formGroup]="serviceForm" (ngSubmit)="onSubmit()">

      <!-- Service Name -->
      <div class="form-group">
        <label for="name">{{ 'ADD_SERVICE.NAME_LABEL' | translate }} <span class="required">*</span></label>
        <input type="text" id="name" formControlName="name" class="form-control"
               [placeholder]="'ADD_SERVICE.NAME_PLACEHOLDER' | translate"
               [class.is-invalid]="(submitted || f['name'].touched) && f['name'].errors" />
        <small class="error-text" *ngIf="(submitted || f['name'].touched) && f['name'].errors">
          <span *ngIf="f['name'].errors['required']">{{ 'ADD_SERVICE.NAME_REQUIRED' | translate }}</span>
          <span *ngIf="f['name'].errors['minlength']">{{ 'ADD_SERVICE.NAME_MIN' | translate }}</span>
          <span *ngIf="f['name'].errors['maxlength']">{{ 'ADD_SERVICE.NAME_MAX' | translate }}</span>
        </small>
      </div>

      <!-- Description -->
      <div class="form-group">
        <label for="description">{{ 'ADD_SERVICE.DESC_LABEL' | translate }} <span class="required">*</span></label>
        <textarea id="description" formControlName="description" class="form-control" rows="6"
                  [placeholder]="'ADD_SERVICE.DESC_PLACEHOLDER' | translate"
                  [class.is-invalid]="(submitted || f['description'].touched) && f['description'].errors"></textarea>
        <div class="char-count">{{ serviceForm.get('description')?.value?.length || 0 }} / 2000 {{ 'ADD_SERVICE.CHARS' | translate }}</div>
        <small class="error-text" *ngIf="(submitted || f['description'].touched) && f['description'].errors">
          <span *ngIf="f['description'].errors['required']">{{ 'ADD_SERVICE.DESC_REQUIRED' | translate }}</span>
          <span *ngIf="f['description'].errors['minlength']">{{ 'ADD_SERVICE.DESC_MIN' | translate }}</span>
          <span *ngIf="f['description'].errors['maxlength']">{{ 'ADD_SERVICE.DESC_MAX' | translate }}</span>
        </small>
      </div>

      <!-- Price + Category row -->
      <div class="form-row">

        <!-- Price -->
        <div class="form-group">
          <label for="price">{{ 'ADD_SERVICE.PRICE_LABEL' | translate }} <span class="required">*</span></label>
          <div class="price-input-wrapper" [class.is-invalid]="(submitted || f['price'].touched) && f['price'].errors">
            <span class="currency">\u20B9</span>
            <input type="number" id="price" formControlName="price" class="form-control price-input"
                   [placeholder]="'ADD_SERVICE.PRICE_PLACEHOLDER' | translate"
                   step="1" min="1" />
          </div>
          <small class="error-text" *ngIf="(submitted || f['price'].touched) && f['price'].errors">
            <span *ngIf="f['price'].errors['required']">{{ 'ADD_SERVICE.PRICE_REQUIRED' | translate }}</span>
            <span *ngIf="f['price'].errors['min']">{{ 'ADD_SERVICE.PRICE_MIN' | translate }}</span>
            <span *ngIf="f['price'].errors['max']">{{ 'ADD_SERVICE.PRICE_MAX' | translate }}</span>
          </small>
        </div>

        <!-- Category -->
        <div class="form-group">
          <label for="serviceCategoryId">{{ 'ADD_SERVICE.CAT_LABEL' | translate }} <span class="required">*</span></label>
          <div *ngIf="categoriesLoading" class="cat-loading">
            <div class="cat-skeleton"></div>
          </div>
          <div *ngIf="!categoriesLoading && categoriesError" class="cat-error">
            <mat-icon>error_outline</mat-icon>
            {{ 'ADD_SERVICE.CAT_ERROR' | translate }}
            <button type="button" (click)="loadCategories()">{{ 'COMMON.RETRY' | translate }}</button>
          </div>
          <ng-container *ngIf="!categoriesLoading && !categoriesError">
            <p *ngIf="categories.length === 0" class="cat-empty">{{ 'ADD_SERVICE.CAT_EMPTY' | translate }}</p>
            <select *ngIf="categories.length > 0" id="serviceCategoryId" formControlName="serviceCategoryId"
                    class="form-control"
                    [class.is-invalid]="(submitted || f['serviceCategoryId'].touched) && f['serviceCategoryId'].errors">
              <option value="">{{ 'ADD_SERVICE.CAT_SELECT' | translate }}</option>
              <option *ngFor="let category of categories" [value]="category.id">
                {{ category.icon }} {{ category.name }}
              </option>
            </select>
          </ng-container>
          <small class="error-text" *ngIf="(submitted || f['serviceCategoryId'].touched) && f['serviceCategoryId'].errors">
            <span *ngIf="f['serviceCategoryId'].errors['required']">{{ 'ADD_SERVICE.CAT_REQUIRED' | translate }}</span>
          </small>
        </div>

      </div>

      <!-- Image URL -->
      <div class="form-group">
        <label for="imageUrl">
          {{ 'ADD_SERVICE.IMAGE_LABEL' | translate }}
          <span class="optional-label">({{ 'COMMON.OPTIONAL' | translate }})</span>
        </label>
        <input type="url" id="imageUrl" formControlName="imageUrl" class="form-control"
               [placeholder]="'ADD_SERVICE.IMAGE_PLACEHOLDER' | translate"
               [class.is-invalid]="(submitted || f['imageUrl'].touched) && f['imageUrl'].errors" />
        <small class="hint-text">{{ 'ADD_SERVICE.IMAGE_HINT' | translate }}</small>
        <small class="error-text" *ngIf="(submitted || f['imageUrl'].touched) && f['imageUrl'].errors">
          {{ 'ADD_SERVICE.IMAGE_INVALID' | translate }}
        </small>
      </div>

      <!-- Tips strip -->
      <div class="tips-strip">
        <mat-icon>lightbulb</mat-icon>
        <ul>
          <li>{{ 'ADD_SERVICE.TIP1' | translate }}</li>
          <li>{{ 'ADD_SERVICE.TIP2' | translate }}</li>
          <li>{{ 'ADD_SERVICE.TIP3' | translate }}</li>
          <li>{{ 'ADD_SERVICE.TIP4' | translate }}</li>
        </ul>
      </div>

      <!-- Terms -->
      <div class="form-group checkbox-group">
        <label class="checkbox-label">
          <input type="checkbox" formControlName="agreeToTerms" />
          <span>{{ 'COMMON.AGREE_TERMS' | translate }}</span>
        </label>
        <small class="error-text" *ngIf="(submitted || f['agreeToTerms'].touched) && f['agreeToTerms'].errors">
          {{ 'COMMON.TERMS_REQUIRED' | translate }}
        </small>
      </div>

      <!-- Actions -->
      <div class="form-actions">
        <button type="button" class="btn-secondary" (click)="resetForm()" [disabled]="submitted">
          {{ 'ADD_SERVICE.CLEAR' | translate }}
        </button>
        <button type="submit" class="btn-primary" [disabled]="submitted">
          <mat-spinner *ngIf="submitted" diameter="16"></mat-spinner>
          <mat-icon *ngIf="!submitted">check</mat-icon>
          {{ submitted ? ('ADD_SERVICE.SUBMITTING' | translate) : ('ADD_SERVICE.SUBMIT' | translate) }}
        </button>
      </div>

    </form>
  </div>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/add-service/add-service.scss */\n.page {\n  max-width: 760px;\n  margin: 0 auto;\n  padding: 28px 16px calc(var(--bottom-nav-height, 60px) + 32px);\n}\n.page-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  margin-bottom: 24px;\n}\n.page-header .header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n.page-header .header-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.page-header .header-icon mat-icon {\n  color: #fff;\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n}\n.page-header h1 {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1f2937;\n  margin: 0 0 2px;\n}\n.page-header .header-subtitle {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0;\n}\n.alert {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  padding: 12px 14px;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 500;\n  margin-bottom: 16px;\n}\n.alert mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n.alert span {\n  flex: 1;\n}\n.alert .dismiss-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  opacity: 0.6;\n  flex-shrink: 0;\n}\n.alert .dismiss-btn:hover {\n  opacity: 1;\n}\n.alert .dismiss-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin: 0;\n}\n.alert.alert-success {\n  background: #d1fae5;\n  color: #065f46;\n}\n.alert.alert-success mat-icon {\n  color: #059669;\n}\n.alert.alert-error {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.alert.alert-error mat-icon {\n  color: #dc2626;\n}\n.form-card {\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 14px;\n  padding: 28px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n}\n@media (max-width: 600px) {\n  .form-card {\n    padding: 20px 16px;\n  }\n}\n.form-group {\n  margin-bottom: 20px;\n}\n.form-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 560px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.required {\n  color: #dc2626;\n}\n.optional-label {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 12px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #f9fafb;\n  transition:\n    border-color 0.15s ease,\n    box-shadow 0.15s ease,\n    background 0.15s ease;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-control.is-invalid {\n  border-color: #dc2626;\n  background: #fff5f5;\n}\n.form-control[rows] {\n  resize: vertical;\n  min-height: 120px;\n}\nselect.form-control {\n  appearance: auto;\n  cursor: pointer;\n}\n.error-text {\n  display: block;\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.hint-text {\n  display: block;\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.char-count {\n  text-align: right;\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n}\n.price-input-wrapper {\n  display: flex;\n  align-items: center;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f9fafb;\n  transition: border-color 0.15s ease, box-shadow 0.15s ease;\n}\n.price-input-wrapper:focus-within {\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.price-input-wrapper.is-invalid {\n  border-color: #dc2626;\n}\n.price-input-wrapper .currency {\n  padding: 0 12px;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 14px;\n  font-weight: 600;\n  border-right: 1.5px solid #e5e7eb;\n  align-self: stretch;\n  display: flex;\n  align-items: center;\n}\n.price-input-wrapper .price-input {\n  border: none;\n  border-radius: 0;\n  background: transparent;\n  box-shadow: none;\n  flex: 1;\n}\n.price-input-wrapper .price-input:focus {\n  box-shadow: none;\n}\n.cat-loading .cat-skeleton {\n  height: 42px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e8e8e8 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #fff3cd;\n  color: #856404;\n  font-size: 13px;\n}\n.cat-error mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.cat-error button {\n  margin-left: auto;\n  padding: 4px 10px;\n  border: 1px solid #856404;\n  border-radius: 6px;\n  background: none;\n  color: #856404;\n  font-size: 12px;\n  cursor: pointer;\n  font-family: inherit;\n}\n.cat-error button:hover {\n  background: #f5dda0;\n}\n.cat-empty {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 4px 0 0;\n}\n.tips-strip {\n  display: flex;\n  gap: 12px;\n  align-items: flex-start;\n  background: rgba(102, 126, 234, 0.05);\n  border-left: 3px solid #667eea;\n  border-radius: 0 8px 8px 0;\n  padding: 14px 16px;\n  margin-bottom: 20px;\n}\n.tips-strip > mat-icon {\n  color: #667eea;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n  margin-top: 1px;\n  flex-shrink: 0;\n}\n.tips-strip ul {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.tips-strip ul li {\n  font-size: 12px;\n  color: #4b5563;\n  padding-left: 12px;\n  position: relative;\n}\n.tips-strip ul li::before {\n  content: "\\b7";\n  position: absolute;\n  left: 0;\n  color: #667eea;\n  font-weight: 700;\n}\n.checkbox-group .checkbox-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  cursor: pointer;\n}\n.checkbox-group .checkbox-label input[type=checkbox] {\n  width: 16px;\n  height: 16px;\n  margin-top: 2px;\n  flex-shrink: 0;\n  cursor: pointer;\n  accent-color: #667eea;\n}\n.checkbox-group .checkbox-label span {\n  font-size: 14px;\n  color: #374151;\n  line-height: 1.5;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  padding-top: 20px;\n  margin-top: 4px;\n  border-top: 1px solid #e5e7eb;\n}\n@media (max-width: 480px) {\n  .form-actions {\n    flex-direction: column-reverse;\n  }\n  .form-actions .btn-primary,\n  .form-actions .btn-secondary {\n    width: 100%;\n    justify-content: center;\n  }\n}\n.btn-primary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: opacity 0.15s ease, transform 0.15s ease;\n}\n.btn-primary mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-primary mat-spinner {\n  --mdc-circular-progress-active-indicator-color: #fff;\n}\n.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-primary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-secondary {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 20px;\n  background: #f9fafb;\n  color: #1f2937;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  cursor: pointer;\n  transition: background 0.15s ease, border-color 0.15s ease;\n}\n.btn-secondary:hover:not(:disabled) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n}\n.btn-secondary:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n/*# sourceMappingURL=add-service.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: MyServicesService }, { type: ServiceCategoryService }, { type: Auth }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddServiceComponent, { className: "AddServiceComponent", filePath: "src/app/features/add-service/add-service.ts", lineNumber: 22 });
})();

// src/app/features/add-service/add-service-routing-module.ts
var routes = [
  {
    path: "",
    component: AddServiceComponent
  }
];
var AddServiceRoutingModule = class _AddServiceRoutingModule {
  static \u0275fac = function AddServiceRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddServiceRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AddServiceRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddServiceRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/add-service/add-service-module.ts
var AddServiceModule = class _AddServiceModule {
  static \u0275fac = function AddServiceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddServiceModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AddServiceModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AddServiceRoutingModule,
    AddServiceComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddServiceModule, [{
    type: NgModule,
    args: [{
      imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AddServiceRoutingModule,
        AddServiceComponent
      ]
    }]
  }], null, null);
})();
export {
  AddServiceModule
};
//# sourceMappingURL=chunk-HKCERK7R.js.map

