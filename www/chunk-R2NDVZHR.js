import {
  MyServicesService
} from "./chunk-R4R6ZD2B.js";
import {
  ServiceCategoryService
} from "./chunk-YRPSZ7MM.js";
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
} from "./chunk-A6TK5TPK.js";
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
  RouterModule
} from "./chunk-VRKQDNIA.js";
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
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/add-service/add-service.ts
var _c0 = () => [1, 2, 3];
function AddServiceComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function AddServiceComponent_div_12_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissMessage("success"));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.successMessage);
  }
}
function AddServiceComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function AddServiceComponent_div_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.dismissMessage("error"));
    });
    \u0275\u0275text(4, "\xD7");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function AddServiceComponent_form_14_small_7_span_1_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_7_span_2_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_7_span_3_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, AddServiceComponent_form_14_small_7_span_1_Template, 3, 3, "span", 28)(2, AddServiceComponent_form_14_small_7_span_2_Template, 3, 3, "span", 28)(3, AddServiceComponent_form_14_small_7_span_3_Template, 3, 3, "span", 28);
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
function AddServiceComponent_form_14_small_17_span_1_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_17_span_2_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_17_span_3_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, AddServiceComponent_form_14_small_17_span_1_Template, 3, 3, "span", 28)(2, AddServiceComponent_form_14_small_17_span_2_Template, 3, 3, "span", 28)(3, AddServiceComponent_form_14_small_17_span_3_Template, 3, 3, "span", 28);
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
function AddServiceComponent_form_14_small_27_span_1_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_27_span_2_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_27_span_3_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, AddServiceComponent_form_14_small_27_span_1_Template, 3, 3, "span", 28)(2, AddServiceComponent_form_14_small_27_span_2_Template, 3, 3, "span", 28)(3, AddServiceComponent_form_14_small_27_span_3_Template, 3, 3, "span", 28);
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
function AddServiceComponent_form_14_div_32_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 42);
  }
}
function AddServiceComponent_form_14_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275template(1, AddServiceComponent_form_14_div_32_div_1_Template, 1, 0, "div", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c0));
  }
}
function AddServiceComponent_form_14_div_33_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "span", 44);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "button", 45);
    \u0275\u0275listener("click", function AddServiceComponent_form_14_div_33_Template_button_click_5_listener() {
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
function AddServiceComponent_form_14_ng_container_34_p_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.CAT_EMPTY"));
  }
}
function AddServiceComponent_form_14_ng_container_34_select_2_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 52);
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
function AddServiceComponent_form_14_ng_container_34_select_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "select", 49)(1, "option", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AddServiceComponent_form_14_ng_container_34_select_2_option_4_Template, 2, 3, "option", 51);
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
function AddServiceComponent_form_14_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AddServiceComponent_form_14_ng_container_34_p_1_Template, 3, 3, "p", 46)(2, AddServiceComponent_form_14_ng_container_34_select_2_Template, 5, 6, "select", 47);
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
function AddServiceComponent_form_14_small_35_span_1_Template(rf, ctx) {
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
function AddServiceComponent_form_14_small_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, AddServiceComponent_form_14_small_35_span_1_Template, 3, 3, "span", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["serviceCategoryId"].errors["required"]);
  }
}
function AddServiceComponent_form_14_small_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.IMAGE_INVALID"), " ");
  }
}
function AddServiceComponent_form_14_small_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TERMS_REQUIRED"), " ");
  }
}
function AddServiceComponent_form_14_span_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.SUBMIT"));
  }
}
function AddServiceComponent_form_14_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "ADD_SERVICE.SUBMITTING"));
  }
}
function AddServiceComponent_form_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 13);
    \u0275\u0275listener("ngSubmit", function AddServiceComponent_form_14_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "label", 15);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "input", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275template(7, AddServiceComponent_form_14_small_7_Template, 4, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 14)(9, "label", 18);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(12, "textarea", 19);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementStart(14, "div", 20);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, AddServiceComponent_form_14_small_17_Template, 4, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 14)(19, "label", 21);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 22)(23, "span", 23);
    \u0275\u0275text(24, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 24);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AddServiceComponent_form_14_small_27_Template, 4, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 14)(29, "label", 25);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, AddServiceComponent_form_14_div_32_Template, 2, 2, "div", 26)(33, AddServiceComponent_form_14_div_33_Template, 8, 6, "div", 27)(34, AddServiceComponent_form_14_ng_container_34_Template, 3, 2, "ng-container", 28)(35, AddServiceComponent_form_14_small_35_Template, 2, 1, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 14)(37, "label", 29);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementStart(40, "span", 30);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(43, "input", 31);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementStart(45, "small", 32);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, AddServiceComponent_form_14_small_48_Template, 3, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 33)(50, "label", 34);
    \u0275\u0275element(51, "input", 35);
    \u0275\u0275elementStart(52, "span");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(55, AddServiceComponent_form_14_small_55_Template, 3, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "div", 36)(57, "button", 37);
    \u0275\u0275listener("click", function AddServiceComponent_form_14_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "button", 38);
    \u0275\u0275template(61, AddServiceComponent_form_14_span_61_Template, 3, 3, "span", 28)(62, AddServiceComponent_form_14_span_62_Template, 3, 3, "span", 28);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.serviceForm);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 39, "ADD_SERVICE.NAME_LABEL"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["name"].touched) && ctx_r1.f["name"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 41, "ADD_SERVICE.NAME_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["name"].touched) && ctx_r1.f["name"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(11, 43, "ADD_SERVICE.DESC_LABEL"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(13, 45, "ADD_SERVICE.DESC_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ((tmp_9_0 = ctx_r1.serviceForm.get("description")) == null ? null : tmp_9_0.value == null ? null : tmp_9_0.value.length) || 0, " / 2000 ", \u0275\u0275pipeBind1(16, 47, "ADD_SERVICE.CHARS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 49, "ADD_SERVICE.PRICE_LABEL"), " *");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["price"].touched) && ctx_r1.f["price"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 51, "ADD_SERVICE.PRICE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["price"].touched) && ctx_r1.f["price"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(31, 53, "ADD_SERVICE.CAT_LABEL"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.categoriesLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.categoriesLoading && ctx_r1.categoriesError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.categoriesLoading && !ctx_r1.categoriesError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["serviceCategoryId"].touched) && ctx_r1.f["serviceCategoryId"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(39, 55, "ADD_SERVICE.IMAGE_LABEL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(42, 57, "COMMON.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["imageUrl"].touched) && ctx_r1.f["imageUrl"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(44, 59, "ADD_SERVICE.IMAGE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 61, "ADD_SERVICE.IMAGE_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["imageUrl"].touched) && ctx_r1.f["imageUrl"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 63, "COMMON.AGREE_TERMS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 65, "ADD_SERVICE.CLEAR"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted);
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
        this.errorMessage = error?.error?.message || "Error adding service. Please try again.";
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddServiceComponent, selectors: [["app-add-service"]], decls: 32, vars: 24, consts: [[1, "add-service-wrapper"], [1, "add-service-hero"], [1, "hero-content"], [1, "add-service-section"], [1, "section-container"], [1, "form-wrapper"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "form-tips"], [1, "alert", "alert-success"], [1, "dismiss-btn", 3, "click"], [1, "alert", "alert-error"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-control", 3, "placeholder"], ["class", "error-text", 4, "ngIf"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "8", 1, "form-control", "textarea", 3, "placeholder"], [1, "char-count"], ["for", "price"], [1, "price-input-wrapper"], [1, "currency"], ["type", "number", "id", "price", "formControlName", "price", "step", "1", "min", "1", 1, "form-control", "price-input", 3, "placeholder"], ["for", "serviceCategoryId"], ["class", "cat-inline-loading", 4, "ngIf"], ["class", "cat-inline-error", 4, "ngIf"], [4, "ngIf"], ["for", "imageUrl"], [1, "optional-label"], ["type", "url", "id", "imageUrl", "formControlName", "imageUrl", 1, "form-control", 3, "placeholder"], [1, "hint-text"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-text"], [1, "cat-inline-loading"], ["class", "cat-inline-skeleton", 4, "ngFor", "ngForOf"], [1, "cat-inline-skeleton"], [1, "cat-inline-error"], [1, "material-icons"], ["type", "button", 3, "click"], ["class", "cat-inline-empty", 4, "ngIf"], ["id", "serviceCategoryId", "formControlName", "serviceCategoryId", "class", "form-control", 3, "is-invalid", 4, "ngIf"], [1, "cat-inline-empty"], ["id", "serviceCategoryId", "formControlName", "serviceCategoryId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AddServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 3)(10, "div", 4)(11, "div", 5);
      \u0275\u0275template(12, AddServiceComponent_div_12_Template, 5, 1, "div", 6)(13, AddServiceComponent_div_13_Template, 5, 1, "div", 7)(14, AddServiceComponent_form_14_Template, 63, 67, "form", 8);
      \u0275\u0275elementStart(15, "div", 9)(16, "h3");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "ul")(20, "li");
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li");
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "li");
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "li");
      \u0275\u0275text(30);
      \u0275\u0275pipe(31, "translate");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "ADD_SERVICE.HERO_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 12, "ADD_SERVICE.HERO_SUB"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.serviceForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "ADD_SERVICE.TIPS_TITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 16, "ADD_SERVICE.TIP1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 18, "ADD_SERVICE.TIP2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 20, "ADD_SERVICE.TIP3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 22, "ADD_SERVICE.TIP4"));
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, TranslateModule, TranslatePipe], styles: ["\n\n.add-service-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.add-service-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 1rem 0;\n  font-weight: 600;\n}\n.add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.add-service-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 3rem 1rem;\n}\n.add-service-section[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: inherit;\n  padding: 0;\n  margin-left: 1rem;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 150px;\n}\n.form-group[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.form-group[_ngcontent-%COMP%]   .char-count[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 0.875rem;\n  color: #999;\n  margin-top: 0.25rem;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox].is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #555;\n  line-height: 1.5;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #eee;\n}\n@media (max-width: 600px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 0.75rem;\n  }\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #333;\n  border: 2px solid #ddd;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f0f0;\n  border-color: #999;\n}\n@media (max-width: 600px) {\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.form-tips[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-left: 4px solid #667eea;\n  border-radius: 6px;\n}\n.form-tips[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.5rem;\n  color: #555;\n  line-height: 1.8;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .add-service-section[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n.optional-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.hint-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n.price-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 14px;\n  border-right: 1px solid #d1d5db;\n  height: 42px;\n  display: flex;\n  align-items: center;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .price-input[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  flex: 1;\n}\n.cat-inline-loading[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.cat-inline-skeleton[_ngcontent-%COMP%] {\n  height: 42px;\n  flex: 1;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer-as 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer-as {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-inline-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #fff3cd;\n  color: #856404;\n  font-size: 0.875rem;\n}\n.cat-inline-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cat-inline-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 4px 12px;\n  border: 1px solid #856404;\n  border-radius: 6px;\n  background: none;\n  color: #856404;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.cat-inline-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f5dda0;\n}\n.cat-inline-empty[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 4px 0 0;\n}\n/*# sourceMappingURL=add-service.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddServiceComponent, [{
    type: Component,
    args: [{ selector: "app-add-service", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, TranslateModule], template: `<div class="add-service-wrapper">
  <!-- Hero Section -->
  <section class="add-service-hero">
    <div class="hero-content">
      <h1>{{ 'ADD_SERVICE.HERO_TITLE' | translate }}</h1>
      <p>{{ 'ADD_SERVICE.HERO_SUB' | translate }}</p>
    </div>
  </section>

  <!-- Form Section -->
  <section class="add-service-section">
    <div class="section-container">
      <div class="form-wrapper">
        <!-- Success Message -->
        <div *ngIf="successMessage" class="alert alert-success">
          <span>{{ successMessage }}</span>
          <button (click)="dismissMessage('success')" class="dismiss-btn">&times;</button>
        </div>

        <!-- Error Message -->
        <div *ngIf="errorMessage" class="alert alert-error">
          <span>{{ errorMessage }}</span>
          <button (click)="dismissMessage('error')" class="dismiss-btn">&times;</button>
        </div>

        <form *ngIf="serviceForm" [formGroup]="serviceForm" (ngSubmit)="onSubmit()">
          <!-- Service Name -->
          <div class="form-group">
            <label for="name">{{ 'ADD_SERVICE.NAME_LABEL' | translate }} *</label>
            <input
              type="text"
              id="name"
              formControlName="name"
              [placeholder]="'ADD_SERVICE.NAME_PLACEHOLDER' | translate"
              class="form-control"
              [class.is-invalid]="(submitted || f['name'].touched) && f['name'].errors"
            />
            <small *ngIf="(submitted || f['name'].touched) && f['name'].errors" class="error-text">
              <span *ngIf="f['name'].errors['required']">{{ 'ADD_SERVICE.NAME_REQUIRED' | translate }}</span>
              <span *ngIf="f['name'].errors['minlength']">{{ 'ADD_SERVICE.NAME_MIN' | translate }}</span>
              <span *ngIf="f['name'].errors['maxlength']">{{ 'ADD_SERVICE.NAME_MAX' | translate }}</span>
            </small>
          </div>

          <!-- Service Description -->
          <div class="form-group">
            <label for="description">{{ 'ADD_SERVICE.DESC_LABEL' | translate }} *</label>
            <textarea
              id="description"
              formControlName="description"
              [placeholder]="'ADD_SERVICE.DESC_PLACEHOLDER' | translate"
              class="form-control textarea"
              rows="8"
              [class.is-invalid]="(submitted || f['description'].touched) && f['description'].errors"
            ></textarea>
            <div class="char-count">
              {{ serviceForm.get('description')?.value?.length || 0 }} / 2000 {{ 'ADD_SERVICE.CHARS' | translate }}
            </div>
            <small *ngIf="(submitted || f['description'].touched) && f['description'].errors" class="error-text">
              <span *ngIf="f['description'].errors['required']">{{ 'ADD_SERVICE.DESC_REQUIRED' | translate }}</span>
              <span *ngIf="f['description'].errors['minlength']">{{ 'ADD_SERVICE.DESC_MIN' | translate }}</span>
              <span *ngIf="f['description'].errors['maxlength']">{{ 'ADD_SERVICE.DESC_MAX' | translate }}</span>
            </small>
          </div>

          <!-- Service Price -->
          <div class="form-group">
            <label for="price">{{ 'ADD_SERVICE.PRICE_LABEL' | translate }} *</label>
            <div class="price-input-wrapper">
              <span class="currency">\u20B9</span>
              <input
                type="number"
                id="price"
                formControlName="price"
                [placeholder]="'ADD_SERVICE.PRICE_PLACEHOLDER' | translate"
                class="form-control price-input"
                step="1"
                min="1"
                [class.is-invalid]="(submitted || f['price'].touched) && f['price'].errors"
              />
            </div>
            <small *ngIf="(submitted || f['price'].touched) && f['price'].errors" class="error-text">
              <span *ngIf="f['price'].errors['required']">{{ 'ADD_SERVICE.PRICE_REQUIRED' | translate }}</span>
              <span *ngIf="f['price'].errors['min']">{{ 'ADD_SERVICE.PRICE_MIN' | translate }}</span>
              <span *ngIf="f['price'].errors['max']">{{ 'ADD_SERVICE.PRICE_MAX' | translate }}</span>
            </small>
          </div>

          <!-- Service Category -->
          <div class="form-group">
            <label for="serviceCategoryId">{{ 'ADD_SERVICE.CAT_LABEL' | translate }} *</label>
            <div *ngIf="categoriesLoading" class="cat-inline-loading">
              <div class="cat-inline-skeleton" *ngFor="let i of [1,2,3]"></div>
            </div>
            <div *ngIf="!categoriesLoading && categoriesError" class="cat-inline-error">
              <span class="material-icons">error_outline</span>
              {{ 'ADD_SERVICE.CAT_ERROR' | translate }}
              <button type="button" (click)="loadCategories()">{{ 'COMMON.RETRY' | translate }}</button>
            </div>
            <ng-container *ngIf="!categoriesLoading && !categoriesError">
              <p *ngIf="categories.length === 0" class="cat-inline-empty">{{ 'ADD_SERVICE.CAT_EMPTY' | translate }}</p>
              <select
                *ngIf="categories.length > 0"
                id="serviceCategoryId"
                formControlName="serviceCategoryId"
                class="form-control"
                [class.is-invalid]="(submitted || f['serviceCategoryId'].touched) && f['serviceCategoryId'].errors"
              >
                <option value="">{{ 'ADD_SERVICE.CAT_SELECT' | translate }}</option>
                <option *ngFor="let category of categories" [value]="category.id">
                  {{ category.icon }} {{ category.name }}
                </option>
              </select>
            </ng-container>
            <small *ngIf="(submitted || f['serviceCategoryId'].touched) && f['serviceCategoryId'].errors" class="error-text">
              <span *ngIf="f['serviceCategoryId'].errors['required']">{{ 'ADD_SERVICE.CAT_REQUIRED' | translate }}</span>
            </small>
          </div>

          <!-- Service Photo URL (Optional) -->
          <div class="form-group">
            <label for="imageUrl">{{ 'ADD_SERVICE.IMAGE_LABEL' | translate }} <span class="optional-label">({{ 'COMMON.OPTIONAL' | translate }})</span></label>
            <input
              type="url"
              id="imageUrl"
              formControlName="imageUrl"
              [placeholder]="'ADD_SERVICE.IMAGE_PLACEHOLDER' | translate"
              class="form-control"
              [class.is-invalid]="(submitted || f['imageUrl'].touched) && f['imageUrl'].errors"
            />
            <small class="hint-text">{{ 'ADD_SERVICE.IMAGE_HINT' | translate }}</small>
            <small *ngIf="(submitted || f['imageUrl'].touched) && f['imageUrl'].errors" class="error-text">
              {{ 'ADD_SERVICE.IMAGE_INVALID' | translate }}
            </small>
          </div>

          <!-- Terms & Conditions -->
          <div class="form-group checkbox-group">
            <label class="checkbox-label">
              <input
                type="checkbox"
                formControlName="agreeToTerms"
                [class.is-invalid]="(submitted || f['agreeToTerms'].touched) && f['agreeToTerms'].errors"
              />
              <span>{{ 'COMMON.AGREE_TERMS' | translate }}</span>
            </label>
            <small *ngIf="(submitted || f['agreeToTerms'].touched) && f['agreeToTerms'].errors" class="error-text">
              {{ 'COMMON.TERMS_REQUIRED' | translate }}
            </small>
          </div>

          <!-- Action Buttons -->
          <div class="form-actions">
            <button
              type="button"
              class="btn btn-secondary"
              (click)="resetForm()"
              [disabled]="submitted"
            >
              {{ 'ADD_SERVICE.CLEAR' | translate }}
            </button>
            <button
              type="submit"
              class="btn btn-primary"
              [disabled]="submitted"
            >
              <span *ngIf="!submitted">{{ 'ADD_SERVICE.SUBMIT' | translate }}</span>
              <span *ngIf="submitted">{{ 'ADD_SERVICE.SUBMITTING' | translate }}</span>
            </button>
          </div>
        </form>

        <!-- Form Tips -->
        <div class="form-tips">
          <h3>{{ 'ADD_SERVICE.TIPS_TITLE' | translate }}</h3>
          <ul>
            <li>{{ 'ADD_SERVICE.TIP1' | translate }}</li>
            <li>{{ 'ADD_SERVICE.TIP2' | translate }}</li>
            <li>{{ 'ADD_SERVICE.TIP3' | translate }}</li>
            <li>{{ 'ADD_SERVICE.TIP4' | translate }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>
`, styles: ["/* src/app/features/add-service/add-service.scss */\n.add-service-wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.add-service-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.add-service-hero .hero-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.add-service-hero .hero-content h1 {\n  font-size: 2.5rem;\n  margin: 0 0 1rem 0;\n  font-weight: 600;\n}\n.add-service-hero .hero-content p {\n  font-size: 1.1rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.add-service-section {\n  flex: 1;\n  padding: 3rem 1rem;\n}\n.add-service-section .section-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.form-wrapper {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .form-wrapper {\n    padding: 1.5rem;\n  }\n}\n.alert {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n}\n.alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert .dismiss-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: inherit;\n  padding: 0;\n  margin-left: 1rem;\n}\n.alert .dismiss-btn:hover {\n  opacity: 0.7;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 1rem;\n}\n.form-group .form-control {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group .form-control.is-invalid {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.form-group .form-control.textarea {\n  resize: vertical;\n  min-height: 150px;\n}\n.form-group .error-text {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.form-group .char-count {\n  text-align: right;\n  font-size: 0.875rem;\n  color: #999;\n  margin-top: 0.25rem;\n}\n.checkbox-group .checkbox-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0;\n}\n.checkbox-group .checkbox-label input[type=checkbox] {\n  margin-top: 0.25rem;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.checkbox-group .checkbox-label input[type=checkbox].is-invalid {\n  border-color: #dc3545;\n}\n.checkbox-group .checkbox-label span {\n  color: #555;\n  line-height: 1.5;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #eee;\n}\n@media (max-width: 600px) {\n  .form-actions {\n    flex-direction: column-reverse;\n    gap: 0.75rem;\n  }\n}\n.form-actions button {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.form-actions button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-actions button.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.form-actions button.btn-primary:hover:not(:disabled) {\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.form-actions button.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.form-actions button.btn-secondary {\n  background: #f5f5f5;\n  color: #333;\n  border: 2px solid #ddd;\n}\n.form-actions button.btn-secondary:hover:not(:disabled) {\n  background: #f0f0f0;\n  border-color: #999;\n}\n@media (max-width: 600px) {\n  .form-actions button {\n    width: 100%;\n  }\n}\n.form-tips {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-left: 4px solid #667eea;\n  border-radius: 6px;\n}\n.form-tips h3 {\n  margin-top: 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.form-tips ul {\n  margin: 0;\n  padding-left: 1.5rem;\n  color: #555;\n  line-height: 1.8;\n}\n.form-tips ul li {\n  margin-bottom: 0.75rem;\n}\n.form-tips ul li:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .add-service-hero .hero-content h1 {\n    font-size: 1.75rem;\n  }\n  .add-service-hero .hero-content p {\n    font-size: 1rem;\n  }\n  .add-service-section {\n    padding: 2rem 1rem;\n  }\n}\n.optional-label {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.hint-text {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n.price-input-wrapper {\n  display: flex;\n  align-items: center;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.price-input-wrapper .currency {\n  padding: 0 10px;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 14px;\n  border-right: 1px solid #d1d5db;\n  height: 42px;\n  display: flex;\n  align-items: center;\n}\n.price-input-wrapper .price-input {\n  border: none;\n  border-radius: 0;\n  flex: 1;\n}\n.cat-inline-loading {\n  display: flex;\n  gap: 8px;\n}\n.cat-inline-skeleton {\n  height: 42px;\n  flex: 1;\n  border-radius: 6px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer-as 1.4s infinite;\n}\n@keyframes shimmer-as {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-inline-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #fff3cd;\n  color: #856404;\n  font-size: 0.875rem;\n}\n.cat-inline-error .material-icons {\n  font-size: 1.1rem;\n}\n.cat-inline-error button {\n  margin-left: auto;\n  padding: 4px 12px;\n  border: 1px solid #856404;\n  border-radius: 6px;\n  background: none;\n  color: #856404;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.cat-inline-error button:hover {\n  background: #f5dda0;\n}\n.cat-inline-empty {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 4px 0 0;\n}\n/*# sourceMappingURL=add-service.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: MyServicesService }, { type: ServiceCategoryService }, { type: Auth }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddServiceComponent, { className: "AddServiceComponent", filePath: "src/app/features/add-service/add-service.ts", lineNumber: 19 });
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
//# sourceMappingURL=chunk-R2NDVZHR.js.map

