import {
  JobService
} from "./chunk-L574K3VU.js";
import {
  AuthGuard
} from "./chunk-WMSYBUTB.js";
import {
  MatSnackBar,
  MatSnackBarModule,
  MatSnackBarRef
} from "./chunk-AF7MVYJA.js";
import "./chunk-MNMOPJB6.js";
import "./chunk-QKBPBGFS.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-B4QCWAPP.js";
import "./chunk-SOWTMXOK.js";
import {
  AddressService
} from "./chunk-XRCLEI6I.js";
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
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-A6TK5TPK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ZGXDPMMN.js";
import "./chunk-6CNFBV5T.js";
import "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-VRKQDNIA.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  Inject,
  NgForOf,
  NgIf,
  NgModule,
  PLATFORM_ID,
  Subject,
  ViewChild,
  catchError,
  debounceTime,
  distinctUntilChanged,
  of,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/post-job/post-job.ts
var _c0 = ["addressSearchInput"];
var _c1 = () => [1, 2, 3, 4, 5, 6];
function PostJobComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function PostJobComponent_div_12_Template_button_click_3_listener() {
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
function PostJobComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 22)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 21);
    \u0275\u0275listener("click", function PostJobComponent_div_13_Template_button_click_3_listener() {
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
function PostJobComponent_div_36_small_9_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "POST_JOB.TITLE_REQUIRED"));
  }
}
function PostJobComponent_div_36_small_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "POST_JOB.TITLE_MIN"));
  }
}
function PostJobComponent_div_36_small_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275template(1, PostJobComponent_div_36_small_9_span_1_Template, 3, 3, "span", 38)(2, PostJobComponent_div_36_small_9_span_2_Template, 3, 3, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["title"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["title"].errors["minlength"]);
  }
}
function PostJobComponent_div_36_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 41);
  }
}
function PostJobComponent_div_36_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 39);
    \u0275\u0275template(1, PostJobComponent_div_36_div_14_div_1_Template, 1, 0, "div", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(1, _c1));
  }
}
function PostJobComponent_div_36_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "span", 43);
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 44);
    \u0275\u0275listener("click", function PostJobComponent_div_36_div_15_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.loadCategories());
    });
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "POST_JOB.CAT_LOAD_ERROR"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "COMMON.RETRY"));
  }
}
function PostJobComponent_div_36_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 45);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "POST_JOB.CAT_EMPTY"), " ");
  }
}
function PostJobComponent_div_36_div_17_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function PostJobComponent_div_36_div_17_button_1_Template_button_click_0_listener() {
      const category_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCategory(category_r7.id));
    });
    \u0275\u0275elementStart(1, "span", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const category_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ctx_r1.f["category"].value === category_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r7.name);
  }
}
function PostJobComponent_div_36_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275template(1, PostJobComponent_div_36_div_17_button_1_Template, 5, 4, "button", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.serviceCategories);
  }
}
function PostJobComponent_div_36_small_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "POST_JOB.CATEGORY_REQUIRED"), " ");
  }
}
function PostJobComponent_div_36_small_25_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "POST_JOB.DESCRIPTION_REQUIRED"));
  }
}
function PostJobComponent_div_36_small_25_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "POST_JOB.DESCRIPTION_MIN"));
  }
}
function PostJobComponent_div_36_small_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275template(1, PostJobComponent_div_36_small_25_span_1_Template, 3, 3, "span", 38)(2, PostJobComponent_div_36_small_25_span_2_Template, 3, 3, "span", 38);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["description"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["description"].errors["minlength"]);
  }
}
function PostJobComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h2");
    \u0275\u0275text(2, "Tell us about your job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "label", 25);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "input", 26);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275template(9, PostJobComponent_div_36_small_9_Template, 3, 2, "small", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 24)(11, "label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, PostJobComponent_div_36_div_14_Template, 2, 2, "div", 28)(15, PostJobComponent_div_36_div_15_Template, 9, 6, "div", 29)(16, PostJobComponent_div_36_p_16_Template, 3, 3, "p", 30)(17, PostJobComponent_div_36_div_17_Template, 2, 1, "div", 31)(18, PostJobComponent_div_36_small_18_Template, 3, 3, "small", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 24)(20, "label", 32);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(23, "textarea", 33);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275template(25, PostJobComponent_div_36_small_25_Template, 3, 2, "small", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 34)(27, "button", 35);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "button", 36);
    \u0275\u0275listener("click", function PostJobComponent_div_36_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 18, "POST_JOB.TITLE_LABEL"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["title"].touched) && ctx_r1.f["title"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(8, 20, "POST_JOB.TITLE_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["title"].touched) && ctx_r1.f["title"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 22, "POST_JOB.CATEGORY_LABEL"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.categoriesLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.categoriesLoading && ctx_r1.categoriesError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.categoriesLoading && !ctx_r1.categoriesError && ctx_r1.serviceCategories.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.categoriesLoading && !ctx_r1.categoriesError && ctx_r1.serviceCategories.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["category"].touched) && ctx_r1.f["category"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(22, 24, "POST_JOB.DESCRIPTION_LABEL"), " *");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(24, 26, "POST_JOB.DESCRIPTION_PLACEHOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 28, "POST_JOB.BACK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 30, "POST_JOB.NEXT"));
  }
}
function PostJobComponent_div_37_ng_container_6_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 61);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.SEARCHING"));
  }
}
function PostJobComponent_div_37_ng_container_6_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 64);
    \u0275\u0275listener("mousedown", function PostJobComponent_div_37_ng_container_6_div_5_div_1_Template_div_mousedown_0_listener() {
      const prediction_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.onAddressSelected(prediction_r11));
    });
    \u0275\u0275elementStart(1, "div", 65);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 66);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prediction_r11 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r11.mainText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r11.secondaryText);
  }
}
function PostJobComponent_div_37_ng_container_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275template(1, PostJobComponent_div_37_ng_container_6_div_5_div_1_Template, 5, 2, "div", 63);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.addressPredictions);
  }
}
function PostJobComponent_div_37_ng_container_6_small_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, " Please select a location from the suggestions ");
    \u0275\u0275elementEnd();
  }
}
function PostJobComponent_div_37_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 56)(2, "input", 57, 0);
    \u0275\u0275listener("input", function PostJobComponent_div_37_ng_container_6_Template_input_input_2_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onAddressInput($event));
    })("blur", function PostJobComponent_div_37_ng_container_6_Template_input_blur_2_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hideAddressList());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, PostJobComponent_div_37_ng_container_6_div_4_Template, 3, 3, "div", 58)(5, PostJobComponent_div_37_ng_container_6_div_5_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small", 60);
    \u0275\u0275text(7, "Type at least 3 characters to search \u2014 select from the list to pin on the map");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, PostJobComponent_div_37_ng_container_6_small_8_Template, 2, 0, "small", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["serviceAddressCity"].touched) && ctx_r1.f["serviceAddressCity"].errors);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.addressLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.showAddressList && ctx_r1.addressPredictions.length > 0);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["serviceAddressCity"].touched) && ctx_r1.f["serviceAddressCity"].errors);
  }
}
function PostJobComponent_div_37_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 67)(2, "span", 68);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 69);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 70);
    \u0275\u0275listener("click", function PostJobComponent_div_37_ng_container_7_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.clearAddress());
    });
    \u0275\u0275text(7, "Change");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getLocationSummary());
  }
}
function PostJobComponent_div_37_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 71);
    \u0275\u0275listener("click", function PostJobComponent_div_37_button_12_Template_button_click_0_listener() {
      const range_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectBudget(range_r14.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r14 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.f["budget"].value === range_r14.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r14.label, " ");
  }
}
function PostJobComponent_div_37_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, " Please select a budget range ");
    \u0275\u0275elementEnd();
  }
}
function PostJobComponent_div_37_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 72);
    \u0275\u0275listener("click", function PostJobComponent_div_37_button_18_Template_button_click_0_listener() {
      const option_r16 = \u0275\u0275restoreView(_r15).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTimeline(option_r16.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r16 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ctx_r1.f["timeline"].value === option_r16.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r16.label, " ");
  }
}
function PostJobComponent_div_37_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1, " Please select a timeline ");
    \u0275\u0275elementEnd();
  }
}
function PostJobComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h2");
    \u0275\u0275text(2, "Budget and timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 24)(4, "label");
    \u0275\u0275text(5, "Service Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, PostJobComponent_div_37_ng_container_6_Template, 9, 5, "ng-container", 38)(7, PostJobComponent_div_37_ng_container_7_Template, 8, 1, "ng-container", 38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 24)(9, "label");
    \u0275\u0275text(10, "Your Budget *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 51);
    \u0275\u0275template(12, PostJobComponent_div_37_button_12_Template, 2, 3, "button", 52);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, PostJobComponent_div_37_small_13_Template, 2, 0, "small", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 24)(15, "label");
    \u0275\u0275text(16, "Timeline *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 53);
    \u0275\u0275template(18, PostJobComponent_div_37_button_18_Template, 2, 3, "button", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, PostJobComponent_div_37_small_19_Template, 2, 0, "small", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 34)(21, "button", 55);
    \u0275\u0275listener("click", function PostJobComponent_div_37_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "button", 36);
    \u0275\u0275listener("click", function PostJobComponent_div_37_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextStep());
    });
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !ctx_r1.f["serviceAddressCity"].value);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["serviceAddressCity"].value);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.budgetRanges);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["budget"].touched) && ctx_r1.f["budget"].errors);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.timelineOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["timeline"].touched) && ctx_r1.f["timeline"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 8, "POST_JOB.BACK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 10, "POST_JOB.NEXT"));
  }
}
function PostJobComponent_div_38_small_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 37);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TERMS_REQUIRED"), " ");
  }
}
function PostJobComponent_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "h2");
    \u0275\u0275text(2, "Review your job posting");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 73)(4, "div", 74)(5, "h4");
    \u0275\u0275text(6, "Job Title");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 74)(10, "h4");
    \u0275\u0275text(11, "Category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 74)(15, "h4");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 74)(20, "h4");
    \u0275\u0275text(21, "Location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 74)(25, "h4");
    \u0275\u0275text(26, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "p");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 74)(30, "h4");
    \u0275\u0275text(31, "Timeline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "p");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "div", 75)(35, "label", 76);
    \u0275\u0275element(36, "input", 77);
    \u0275\u0275elementStart(37, "span", 78);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementStart(40, "a", 79);
    \u0275\u0275text(41, "Terms of Service");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(42, PostJobComponent_div_38_small_42_Template, 3, 3, "small", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 34)(44, "button", 55);
    \u0275\u0275listener("click", function PostJobComponent_div_38_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousStep());
    });
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "button", 80);
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r1.f["title"].value);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getCategoryName(ctx_r1.f["category"].value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.f["description"].value);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getLocationSummary() || ctx_r1.f["location"].value);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getBudgetLabel(ctx_r1.f["budget"].value));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.getTimelineLabel(ctx_r1.f["timeline"].value));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("invalid", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(39, 13, "COMMON.AGREE_TERMS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 15, "POST_JOB.BACK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.submitted ? \u0275\u0275pipeBind1(49, 17, "POST_JOB.SUBMITTING") : \u0275\u0275pipeBind1(50, 19, "POST_JOB.SUBMIT"), " ");
  }
}
var PostJobComponent = class _PostJobComponent {
  fb;
  router;
  route;
  jobService;
  serviceCategoryService;
  addressService;
  platformId;
  cdr;
  snackBar;
  addressSearchInput;
  jobForm;
  submitted = false;
  successMessage = "";
  errorMessage = "";
  serviceAreaSnackRef = null;
  currentStep = 1;
  destroy$ = new Subject();
  serviceCategories = [];
  categoriesLoading = true;
  categoriesError = false;
  // Address autofill state
  addressPredictions = [];
  showAddressList = false;
  addressLoading = false;
  jobLatitude = null;
  jobLongitude = null;
  addressSearch$ = new Subject();
  budgetRanges = [
    { value: "under-100", label: "Under \u20B95,000", icon: "\u{1F4B0}", estimatedBudget: 2500 },
    { value: "100-250", label: "\u20B95,000 - \u20B912,500", icon: "\u{1F4B0}\u{1F4B0}", estimatedBudget: 8750 },
    { value: "250-500", label: "\u20B912,500 - \u20B925,000", icon: "\u{1F4B0}\u{1F4B0}\u{1F4B0}", estimatedBudget: 18750 },
    { value: "500-1000", label: "\u20B925,000 - \u20B950,000", icon: "\u{1F4B0}\u{1F4B0}\u{1F4B0}\u{1F4B0}", estimatedBudget: 37500 },
    { value: "over-1000", label: "Over \u20B950,000", icon: "\u{1F4B0}\u{1F4B0}\u{1F4B0}\u{1F4B0}\u{1F4B0}", estimatedBudget: 75e3 }
  ];
  timelineOptions = [
    { value: "asap", label: "ASAP (within 24 hours)", icon: "\u26A1", description: "Urgent" },
    { value: "1-week", label: "Within 1 week", icon: "\u{1F4C5}", description: "Soon" },
    { value: "1-month", label: "Within 1 month", icon: "\u{1F4C6}", description: "Flexible" },
    { value: "flexible", label: "No specific deadline", icon: "\u{1F504}", description: "Very flexible" }
  ];
  preFillCategoryId = null;
  constructor(fb, router, route, jobService, serviceCategoryService, addressService, platformId, cdr, snackBar) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.jobService = jobService;
    this.serviceCategoryService = serviceCategoryService;
    this.addressService = addressService;
    this.platformId = platformId;
    this.cdr = cdr;
    this.snackBar = snackBar;
  }
  ngOnInit() {
    this.initializeForm();
    const qp = this.route.snapshot.queryParamMap;
    const catId = qp.get("categoryId");
    if (catId)
      this.preFillCategoryId = parseInt(catId, 10);
    const title = qp.get("title");
    if (title)
      this.jobForm.patchValue({ title });
    this.loadCategories();
    this.addressSearch$.pipe(debounceTime(450), distinctUntilChanged(), switchMap((input) => {
      if (!input || input.length < 3) {
        this.addressLoading = false;
        this.addressPredictions = [];
        this.showAddressList = false;
        return of([]);
      }
      this.addressLoading = true;
      this.cdr.markForCheck();
      return this.addressService.getAddressPredictions(input).pipe(catchError(() => of([])));
    }), takeUntil(this.destroy$)).subscribe((predictions) => {
      this.addressPredictions = predictions;
      this.showAddressList = this.addressPredictions.length > 0;
      this.addressLoading = false;
      this.cdr.markForCheck();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  initializeForm() {
    this.jobForm = this.fb.group({
      // Step 1
      title: ["", [Validators.required, Validators.minLength(10)]],
      category: ["", Validators.required],
      description: ["", [Validators.required, Validators.minLength(50)]],
      // Step 2 — address (city required; others auto-filled)
      location: [""],
      serviceAddressHouse: [""],
      serviceAddressStreet1: [""],
      serviceAddressCity: ["", Validators.required],
      serviceAddressDistrict: [""],
      serviceAddressState: [""],
      serviceAddressCountry: [""],
      serviceAddressPIN: [""],
      budget: ["", Validators.required],
      timeline: ["", Validators.required],
      // Step 3
      attachments: [""],
      agreeToTerms: [false, Validators.required]
    });
  }
  loadCategories() {
    this.categoriesLoading = true;
    this.categoriesError = false;
    this.cdr.detectChanges();
    this.serviceCategoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => {
        this.serviceCategories = categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon || "\u{1F4CB}",
          serviceCount: cat.serviceCount
        }));
        this.categoriesLoading = false;
        if (this.preFillCategoryId) {
          const match = this.serviceCategories.find((c) => c.id === this.preFillCategoryId);
          if (match)
            this.jobForm.patchValue({ category: match.id });
        }
        this.cdr.detectChanges();
      },
      error: () => {
        this.categoriesLoading = false;
        this.categoriesError = true;
        this.cdr.detectChanges();
      }
    });
  }
  get f() {
    return this.jobForm.controls;
  }
  // ── Address autofill ──────────────────────────────────────────────────────
  onAddressInput(event) {
    this.addressSearch$.next(event.target.value ?? "");
  }
  onAddressSelected(prediction) {
    this.showAddressList = false;
    const details = prediction.details;
    this.jobLatitude = prediction.latitude ?? null;
    this.jobLongitude = prediction.longitude ?? null;
    this.jobForm.patchValue({
      location: prediction.description,
      serviceAddressHouse: details?.houseNameNumber || "",
      serviceAddressStreet1: details?.street1 || "",
      serviceAddressCity: details?.city || prediction.mainText,
      serviceAddressDistrict: details?.district || "",
      serviceAddressState: details?.state || "",
      serviceAddressCountry: details?.country || "",
      serviceAddressPIN: details?.zipPostalCode || ""
    });
    if (this.addressSearchInput) {
      this.addressSearchInput.nativeElement.value = prediction.description;
    }
    this.cdr.markForCheck();
  }
  clearAddress() {
    this.jobForm.patchValue({
      location: "",
      serviceAddressHouse: "",
      serviceAddressStreet1: "",
      serviceAddressCity: "",
      serviceAddressDistrict: "",
      serviceAddressState: "",
      serviceAddressCountry: "",
      serviceAddressPIN: ""
    });
    this.jobLatitude = null;
    this.jobLongitude = null;
    if (this.addressSearchInput) {
      this.addressSearchInput.nativeElement.value = "";
    }
    this.cdr.markForCheck();
  }
  hideAddressList() {
    setTimeout(() => {
      this.showAddressList = false;
    }, 200);
  }
  // ── Step navigation ───────────────────────────────────────────────────────
  isStepValid(step) {
    if (step === 1) {
      return this.f["title"].valid && this.f["category"].valid && this.f["description"].valid;
    } else if (step === 2) {
      return this.f["serviceAddressCity"].valid && this.f["budget"].valid && this.f["timeline"].valid;
    } else if (step === 3) {
      return this.f["agreeToTerms"].valid;
    }
    return false;
  }
  nextStep() {
    this.markStepFieldsAsTouched(this.currentStep);
    if (this.isStepValid(this.currentStep)) {
      this.currentStep++;
    }
  }
  previousStep() {
    if (this.currentStep > 1)
      this.currentStep--;
  }
  markStepFieldsAsTouched(step) {
    if (step === 1) {
      this.f["title"].markAsTouched();
      this.f["category"].markAsTouched();
      this.f["description"].markAsTouched();
    } else if (step === 2) {
      this.f["serviceAddressCity"].markAsTouched();
      this.f["budget"].markAsTouched();
      this.f["timeline"].markAsTouched();
    } else if (step === 3) {
      this.f["agreeToTerms"].markAsTouched();
    }
  }
  // ── Form actions ──────────────────────────────────────────────────────────
  selectCategory(categoryId) {
    this.jobForm.patchValue({ category: categoryId });
  }
  selectBudget(budgetValue) {
    this.jobForm.patchValue({ budget: budgetValue });
  }
  selectTimeline(timelineValue) {
    this.jobForm.patchValue({ timeline: timelineValue });
  }
  onSubmit() {
    this.errorMessage = "";
    this.successMessage = "";
    this.serviceAreaSnackRef?.dismiss();
    this.serviceAreaSnackRef = null;
    this.markStepFieldsAsTouched(1);
    this.markStepFieldsAsTouched(2);
    this.markStepFieldsAsTouched(3);
    if (!this.f["agreeToTerms"].value) {
      this.errorMessage = "You must agree to the Terms of Service to post a job.";
      this.f["agreeToTerms"].markAsTouched();
      this.submitted = false;
      return;
    }
    if (this.jobForm.invalid) {
      this.errorMessage = "Please fill in all required fields correctly and agree to the terms.";
      this.submitted = false;
      return;
    }
    this.submitted = true;
    const selectedRange = this.budgetRanges.find((r) => r.value === this.jobForm.value.budget);
    const jobData = {
      title: this.jobForm.value.title,
      categoryId: this.jobForm.value.category,
      description: this.jobForm.value.description,
      location: this.jobForm.value.location || this.jobForm.value.serviceAddressCity,
      budget: this.jobForm.value.budget,
      estimatedBudget: selectedRange?.estimatedBudget,
      timeline: this.jobForm.value.timeline,
      attachments: this.jobForm.value.attachments || "",
      serviceAddressHouse: this.jobForm.value.serviceAddressHouse || null,
      serviceAddressStreet1: this.jobForm.value.serviceAddressStreet1 || null,
      serviceAddressCity: this.jobForm.value.serviceAddressCity,
      serviceAddressDistrict: this.jobForm.value.serviceAddressDistrict || null,
      serviceAddressState: this.jobForm.value.serviceAddressState || null,
      serviceAddressCountry: this.jobForm.value.serviceAddressCountry || null,
      serviceAddressPIN: this.jobForm.value.serviceAddressPIN || null,
      latitude: this.jobLatitude,
      longitude: this.jobLongitude
    };
    this.jobService.createJob(jobData).subscribe({
      next: () => {
        this.submitted = false;
        this.successMessage = "Your job has been posted successfully! Professionals will start bidding on your job.";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.jobForm.reset();
          this.currentStep = 1;
          this.router.navigate(["/jobs"]);
        }, 2e3);
      },
      error: (error) => {
        if (error?.status === 401) {
          this.errorMessage = "You must be logged in to post a job. Please login and try again.";
        } else if (error?.status === 403) {
          this.errorMessage = error?.error?.message || "Please verify your email address before posting a job.";
        } else if (error?.status === 400) {
          const msg = error?.error?.message || "";
          if (msg.toLowerCase().includes("not serving")) {
            this.serviceAreaSnackRef = this.snackBar.openFromComponent(ServiceAreaNoticeComponent, {
              panelClass: "snack-service-area",
              horizontalPosition: "center",
              verticalPosition: "bottom"
            });
          } else {
            this.errorMessage = msg || "Invalid job data. Please check your inputs.";
          }
        } else {
          this.errorMessage = error?.error?.message || "Error posting job. Please try again.";
        }
        this.submitted = false;
        this.cdr.markForCheck();
      }
    });
  }
  dismissMessage(type) {
    if (type === "success")
      this.successMessage = "";
    else
      this.errorMessage = "";
  }
  getCategoryName(categoryId) {
    const category = this.serviceCategories.find((c) => c.id === categoryId || c.id?.toString() === categoryId?.toString());
    return category ? category.name : "";
  }
  getBudgetLabel(budgetValue) {
    const budget = this.budgetRanges.find((b) => b.value === budgetValue);
    return budget ? budget.label : "";
  }
  getTimelineLabel(timelineValue) {
    const timeline = this.timelineOptions.find((t) => t.value === timelineValue);
    return timeline ? timeline.label : "";
  }
  getLocationSummary() {
    const city = this.f["serviceAddressCity"].value;
    const state = this.f["serviceAddressState"].value;
    const country = this.f["serviceAddressCountry"].value;
    return [city, state, country].filter(Boolean).join(", ");
  }
  static \u0275fac = function PostJobComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PostJobComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(AddressService), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PostJobComponent, selectors: [["app-post-job"]], viewQuery: function PostJobComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressSearchInput = _t.first);
    }
  }, decls: 72, vars: 35, consts: [["addressSearchInput", ""], [1, "post-job-wrapper"], [1, "post-job-hero"], [1, "hero-content"], [1, "post-job-section"], [1, "section-container"], [1, "form-wrapper"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [1, "steps-indicator"], [1, "step"], [1, "step-num"], [1, "step-label"], [1, "step-line"], [3, "ngSubmit", "formGroup"], ["class", "form-step", 4, "ngIf"], [1, "tips-section"], [1, "tips-grid"], [1, "tip-card"], [1, "tip-icon"], [1, "alert", "alert-success"], [1, "dismiss-btn", 3, "click"], [1, "alert", "alert-error"], [1, "form-step"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", 1, "form-control", 3, "placeholder"], ["class", "error-text", 4, "ngIf"], ["class", "category-grid cat-skel-grid", 4, "ngIf"], ["class", "cat-load-error", 4, "ngIf"], ["class", "cat-empty", 4, "ngIf"], ["class", "category-grid", 4, "ngIf"], ["for", "description"], ["id", "description", "formControlName", "description", "rows", "6", 1, "form-control", "textarea", 3, "placeholder"], [1, "form-actions"], ["type", "button", "disabled", "", 1, "btn", "btn-secondary"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "error-text"], [4, "ngIf"], [1, "category-grid", "cat-skel-grid"], ["class", "cat-skeleton", 4, "ngFor", "ngForOf"], [1, "cat-skeleton"], [1, "cat-load-error"], [1, "material-icons"], ["type", "button", 3, "click"], [1, "cat-empty"], [1, "category-grid"], ["type", "button", "class", "category-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "category-btn", 3, "click"], [1, "category-icon"], [1, "category-name"], [1, "budget-options"], ["type", "button", "class", "budget-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "timeline-options"], ["type", "button", "class", "timeline-btn", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], [1, "autocomplete-container"], ["type", "text", "placeholder", "Start typing your address or city...", "autocomplete", "off", 1, "form-control", 3, "input", "blur"], ["class", "address-loading", 4, "ngIf"], ["class", "address-dropdown", 4, "ngIf"], [1, "text-hint"], [1, "address-loading"], [1, "address-dropdown"], ["class", "address-item", 3, "mousedown", 4, "ngFor", "ngForOf"], [1, "address-item", 3, "mousedown"], [1, "address-main"], [1, "address-secondary"], [1, "selected-address-box"], [1, "material-icons", "address-pin-icon"], [1, "selected-address-text"], ["type", "button", 1, "btn-clear-address", 3, "click"], ["type", "button", 1, "budget-btn", 3, "click"], ["type", "button", 1, "timeline-btn", 3, "click"], [1, "review-section"], [1, "review-item"], [1, "form-group", "checkbox-group"], [1, "terms-label"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "checkbox-text"], ["routerLink", "/terms", "target", "_blank"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"]], template: function PostJobComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "section", 2)(2, "div", 3)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 4)(10, "div", 5)(11, "div", 6);
      \u0275\u0275template(12, PostJobComponent_div_12_Template, 5, 1, "div", 7)(13, PostJobComponent_div_13_Template, 5, 1, "div", 8);
      \u0275\u0275elementStart(14, "div", 9)(15, "div", 10)(16, "span", 11);
      \u0275\u0275text(17, "1");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span", 12);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(21, "div", 13);
      \u0275\u0275elementStart(22, "div", 10)(23, "span", 11);
      \u0275\u0275text(24, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "span", 12);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(28, "div", 13);
      \u0275\u0275elementStart(29, "div", 10)(30, "span", 11);
      \u0275\u0275text(31, "3");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "span", 12);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(35, "form", 14);
      \u0275\u0275listener("ngSubmit", function PostJobComponent_Template_form_ngSubmit_35_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275template(36, PostJobComponent_div_36_Template, 33, 32, "div", 15)(37, PostJobComponent_div_37_Template, 27, 12, "div", 15)(38, PostJobComponent_div_38_Template, 51, 21, "div", 15);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(39, "section", 16)(40, "div", 5)(41, "h2");
      \u0275\u0275text(42, "Tips for Getting Great Bids");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 17)(44, "div", 18)(45, "div", 19);
      \u0275\u0275text(46, "\u{1F4DD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "h3");
      \u0275\u0275text(48, "Be Detailed");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "p");
      \u0275\u0275text(50, "The more details you provide about your job, the better professionals can understand your needs and submit accurate bids.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 18)(52, "div", 19);
      \u0275\u0275text(53, "\u{1F4B0}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "h3");
      \u0275\u0275text(55, "Set Realistic Budget");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "p");
      \u0275\u0275text(57, "Set a budget that reflects the scope of work. This helps attract qualified professionals who can deliver quality work.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(58, "div", 18)(59, "div", 19);
      \u0275\u0275text(60, "\u23F0");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "h3");
      \u0275\u0275text(62, "Realistic Timeline");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "p");
      \u0275\u0275text(64, "Give professionals enough time to complete your job properly. Rushing jobs may result in lower quality work.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(65, "div", 18)(66, "div", 19);
      \u0275\u0275text(67, "\u2B50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "h3");
      \u0275\u0275text(69, "Check Ratings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p");
      \u0275\u0275text(71, "Review the profiles and ratings of professionals who bid on your job before making your selection.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 25, "POST_JOB.HERO_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 27, "POST_JOB.HERO_SUB"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.currentStep === 1)("completed", ctx.currentStep > 1);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 29, "POST_JOB.STEP1"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.currentStep > 1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.currentStep === 2)("completed", ctx.currentStep > 2);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 31, "POST_JOB.STEP2"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.currentStep > 2);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.currentStep === 3);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 33, "POST_JOB.STEP3"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.jobForm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 2);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 3);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, RouterLink, MatIconModule, MatSnackBarModule, TranslateModule, TranslatePipe], styles: ["\n\n.post-job-wrapper[_ngcontent-%COMP%] {\n  color: #1f2937;\n  background: #fff;\n}\n.post-job-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  line-height: 1.6;\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.post-job-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  background: #fff;\n  border-radius: 12px;\n  padding: 40px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dismiss-btn[_ngcontent-%COMP%] {\n  background: 0;\n  border: 0;\n  font-size: 24px;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\n.dismiss-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.steps-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 40px;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n  flex: 1;\n}\n.step.active[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.step.completed[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n}\n.step.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.step-num[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  transition: all 0.3s;\n}\n.step-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-align: center;\n  white-space: nowrap;\n}\n.step-line[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  transition: background 0.3s;\n}\n.step-line.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n}\n@media (max-width: 768px) {\n  .steps-indicator[_ngcontent-%COMP%] {\n    margin-bottom: 30px;\n  }\n  .step-label[_ngcontent-%COMP%] {\n    font-size: 11px;\n  }\n  .step-line[_ngcontent-%COMP%] {\n    height: 1px;\n  }\n}\n.form-step[_ngcontent-%COMP%] {\n  animation: fadeIn 0.3s ease;\n}\n.form-step[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 24px;\n  color: #1f2937;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: 0;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.form-control.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n}\n.error-text[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.cat-skeleton[_ngcontent-%COMP%] {\n  height: 72px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: _ngcontent-%COMP%_shimmer 1.4s infinite;\n}\n@keyframes _ngcontent-%COMP%_shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-load-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #fff3cd;\n  color: #856404;\n  font-size: 0.875rem;\n}\n.cat-load-error[_ngcontent-%COMP%]   .material-icons[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n}\n.cat-load-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 4px 12px;\n  border: 1px solid #856404;\n  border-radius: 6px;\n  background: none;\n  color: #856404;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.cat-load-error[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background: #f5dda0;\n}\n.cat-empty[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 8px 0 0;\n}\n.category-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n.category-btn[_ngcontent-%COMP%] {\n  padding: 12px;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.category-btn[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.category-btn.selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: #667eea;\n}\n.category-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n}\n.category-name[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .category-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  }\n}\n.budget-options[_ngcontent-%COMP%], \n.timeline-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.budget-btn[_ngcontent-%COMP%], \n.timeline-btn[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 14px;\n  text-align: left;\n  font-weight: 500;\n}\n.budget-btn[_ngcontent-%COMP%]:hover, \n.timeline-btn[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.budget-btn.selected[_ngcontent-%COMP%], \n.timeline-btn.selected[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: #667eea;\n}\n.review-section[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.review-item[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.review-item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.review-item[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n  letter-spacing: 0.5px;\n}\n.review-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #1f2937;\n  line-height: 1.6;\n  margin: 0;\n}\n.checkbox-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.checkbox-group[_ngcontent-%COMP%]   .terms-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 12px;\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  transition: all 0.3s ease;\n}\n.checkbox-group[_ngcontent-%COMP%]   .terms-label[_ngcontent-%COMP%]:hover {\n  border-color: #d1d5db;\n  background: #f3f4f6;\n}\n.checkbox-group[_ngcontent-%COMP%]   .terms-label.invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.checkbox-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.checkbox-group[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 4px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n  accent-color: #667eea;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%] {\n  flex: 1;\n  line-height: 1.5;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.checkbox-group[_ngcontent-%COMP%]   input[type=checkbox].is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc2626;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: 0;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-height: 44px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #e5e7eb;\n  color: #374151;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #d1d5db;\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: #fff;\n  width: 100%;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);\n}\n.tips-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #fff;\n}\n.tips-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n  color: #1f2937;\n}\n.tips-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n}\n.tip-card[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  transition: all 0.3s;\n  border: 1px solid #e5e7eb;\n}\n.tip-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.tip-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.tip-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.tip-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  margin-bottom: 16px;\n}\n@media (max-width: 768px) {\n  .post-job-section[_ngcontent-%COMP%] {\n    padding: 60px 20px;\n  }\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .tips-section[_ngcontent-%COMP%] {\n    padding: 60px 20px;\n  }\n  .tips-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 32px;\n  }\n  .tips-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n.address-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  max-height: 240px;\n  overflow-y: auto;\n}\n.address-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n}\n.address-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.address-item[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n}\n.address-item[_ngcontent-%COMP%]   .address-main[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.address-item[_ngcontent-%COMP%]   .address-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.address-loading[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #6b7280;\n  z-index: 1000;\n}\n.selected-address-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #f0fdf4;\n  border: 1.5px solid #86efac;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #166534;\n}\n.selected-address-box[_ngcontent-%COMP%]   .address-pin-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #16a34a;\n}\n.selected-address-box[_ngcontent-%COMP%]   .selected-address-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.selected-address-box[_ngcontent-%COMP%]   .btn-clear-address[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #86efac;\n  border-radius: 4px;\n  padding: 2px 10px;\n  font-size: 12px;\n  color: #166534;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.selected-address-box[_ngcontent-%COMP%]   .btn-clear-address[_ngcontent-%COMP%]:hover {\n  background: #dcfce7;\n}\n.text-hint[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #9ca3af;\n}\n/*# sourceMappingURL=post-job.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostJobComponent, [{
    type: Component,
    args: [{ selector: "app-post-job", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MatIconModule, MatSnackBarModule, TranslateModule], template: `<div class="post-job-wrapper">
  <!-- Hero Section -->
  <section class="post-job-hero">
    <div class="hero-content">
      <h1>{{ 'POST_JOB.HERO_TITLE' | translate }}</h1>
      <p>{{ 'POST_JOB.HERO_SUB' | translate }}</p>
    </div>
  </section>

  <!-- Form Section -->
  <section class="post-job-section">
    <div class="section-container">
      <div class="form-wrapper">
        <!-- Success Message -->
        <div *ngIf="successMessage" class="alert alert-success">
          <span>{{ successMessage }}</span>
          <button (click)="dismissMessage('success')" class="dismiss-btn">&times;</button>
        </div>

        <!-- Generic Error Message -->
        <div *ngIf="errorMessage" class="alert alert-error">
          <span>{{ errorMessage }}</span>
          <button (click)="dismissMessage('error')" class="dismiss-btn">&times;</button>
        </div>

        <!-- Step Indicator -->
        <div class="steps-indicator">
          <div [class.active]="currentStep === 1" [class.completed]="currentStep > 1" class="step">
            <span class="step-num">1</span>
            <span class="step-label">{{ 'POST_JOB.STEP1' | translate }}</span>
          </div>
          <div class="step-line" [class.active]="currentStep > 1"></div>
          <div [class.active]="currentStep === 2" [class.completed]="currentStep > 2" class="step">
            <span class="step-num">2</span>
            <span class="step-label">{{ 'POST_JOB.STEP2' | translate }}</span>
          </div>
          <div class="step-line" [class.active]="currentStep > 2"></div>
          <div [class.active]="currentStep === 3" class="step">
            <span class="step-num">3</span>
            <span class="step-label">{{ 'POST_JOB.STEP3' | translate }}</span>
          </div>
        </div>

        <form [formGroup]="jobForm" (ngSubmit)="onSubmit()">
          <!-- Step 1: Job Details -->
          <div *ngIf="currentStep === 1" class="form-step">
            <h2>Tell us about your job</h2>

            <!-- Job Title -->
            <div class="form-group">
              <label for="title">{{ 'POST_JOB.TITLE_LABEL' | translate }} *</label>
              <input
                type="text"
                id="title"
                formControlName="title"
                [placeholder]="'POST_JOB.TITLE_PLACEHOLDER' | translate"
                class="form-control"
                [class.is-invalid]="(submitted || f['title'].touched) && f['title'].errors"
              />
              <small *ngIf="(submitted || f['title'].touched) && f['title'].errors" class="error-text">
                <span *ngIf="f['title'].errors['required']">{{ 'POST_JOB.TITLE_REQUIRED' | translate }}</span>
                <span *ngIf="f['title'].errors['minlength']">{{ 'POST_JOB.TITLE_MIN' | translate }}</span>
              </small>
            </div>

            <!-- Service Category -->
            <div class="form-group">
              <label>{{ 'POST_JOB.CATEGORY_LABEL' | translate }} *</label>
              <div *ngIf="categoriesLoading" class="category-grid cat-skel-grid">
                <div class="cat-skeleton" *ngFor="let i of [1,2,3,4,5,6]"></div>
              </div>
              <div *ngIf="!categoriesLoading && categoriesError" class="cat-load-error">
                <span class="material-icons">error_outline</span>
                <span>{{ 'POST_JOB.CAT_LOAD_ERROR' | translate }}</span>
                <button type="button" (click)="loadCategories()">{{ 'COMMON.RETRY' | translate }}</button>
              </div>
              <p *ngIf="!categoriesLoading && !categoriesError && serviceCategories.length === 0" class="cat-empty">
                {{ 'POST_JOB.CAT_EMPTY' | translate }}
              </p>
              <div *ngIf="!categoriesLoading && !categoriesError && serviceCategories.length > 0" class="category-grid">
                <button
                  *ngFor="let category of serviceCategories"
                  type="button"
                  class="category-btn"
                  [class.selected]="f['category'].value === category.id"
                  (click)="selectCategory(category.id!)"
                >
                  <span class="category-icon">{{ category.icon }}</span>
                  <span class="category-name">{{ category.name }}</span>
                </button>
              </div>
              <small *ngIf="(submitted || f['category'].touched) && f['category'].errors" class="error-text">
                {{ 'POST_JOB.CATEGORY_REQUIRED' | translate }}
              </small>
            </div>

            <!-- Job Description -->
            <div class="form-group">
              <label for="description">{{ 'POST_JOB.DESCRIPTION_LABEL' | translate }} *</label>
              <textarea
                id="description"
                formControlName="description"
                [placeholder]="'POST_JOB.DESCRIPTION_PLACEHOLDER' | translate"
                class="form-control textarea"
                rows="6"
                [class.is-invalid]="(submitted || f['description'].touched) && f['description'].errors"
              ></textarea>
              <small *ngIf="(submitted || f['description'].touched) && f['description'].errors" class="error-text">
                <span *ngIf="f['description'].errors['required']">{{ 'POST_JOB.DESCRIPTION_REQUIRED' | translate }}</span>
                <span *ngIf="f['description'].errors['minlength']">{{ 'POST_JOB.DESCRIPTION_MIN' | translate }}</span>
              </small>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" disabled>{{ 'POST_JOB.BACK' | translate }}</button>
              <button type="button" class="btn btn-primary" (click)="nextStep()">{{ 'POST_JOB.NEXT' | translate }}</button>
            </div>
          </div>

          <!-- Step 2: Budget & Timeline -->
          <div *ngIf="currentStep === 2" class="form-step">
            <h2>Budget and timeline</h2>

            <!-- Service Location (address autofill) -->
            <div class="form-group">
              <label>Service Location *</label>

              <!-- Address not yet selected -->
              <ng-container *ngIf="!f['serviceAddressCity'].value">
                <div class="autocomplete-container">
                  <input
                    #addressSearchInput
                    type="text"
                    class="form-control"
                    [class.is-invalid]="(submitted || f['serviceAddressCity'].touched) && f['serviceAddressCity'].errors"
                    placeholder="Start typing your address or city..."
                    (input)="onAddressInput($event)"
                    (blur)="hideAddressList()"
                    autocomplete="off"
                  />
                  <div *ngIf="addressLoading" class="address-loading">{{ 'COMMON.SEARCHING' | translate }}</div>
                  <div class="address-dropdown" *ngIf="showAddressList && addressPredictions.length > 0">
                    <div
                      *ngFor="let prediction of addressPredictions"
                      class="address-item"
                      (mousedown)="onAddressSelected(prediction)"
                    >
                      <div class="address-main">{{ prediction.mainText }}</div>
                      <div class="address-secondary">{{ prediction.secondaryText }}</div>
                    </div>
                  </div>
                </div>
                <small class="text-hint">Type at least 3 characters to search \u2014 select from the list to pin on the map</small>
                <small *ngIf="(submitted || f['serviceAddressCity'].touched) && f['serviceAddressCity'].errors" class="error-text">
                  Please select a location from the suggestions
                </small>
              </ng-container>

              <!-- Address selected \u2014 show summary with change option -->
              <ng-container *ngIf="f['serviceAddressCity'].value">
                <div class="selected-address-box">
                  <span class="material-icons address-pin-icon">location_on</span>
                  <span class="selected-address-text">{{ getLocationSummary() }}</span>
                  <button type="button" class="btn-clear-address" (click)="clearAddress()">Change</button>
                </div>
              </ng-container>
            </div>

            <!-- Budget -->
            <div class="form-group">
              <label>Your Budget *</label>
              <div class="budget-options">
                <button
                  *ngFor="let range of budgetRanges"
                  type="button"
                  class="budget-btn"
                  [class.selected]="f['budget'].value === range.value"
                  (click)="selectBudget(range.value)"
                >
                  {{ range.label }}
                </button>
              </div>
              <small *ngIf="(submitted || f['budget'].touched) && f['budget'].errors" class="error-text">
                Please select a budget range
              </small>
            </div>

            <!-- Timeline -->
            <div class="form-group">
              <label>Timeline *</label>
              <div class="timeline-options">
                <button
                  *ngFor="let option of timelineOptions"
                  type="button"
                  class="timeline-btn"
                  [class.selected]="f['timeline'].value === option.value"
                  (click)="selectTimeline(option.value)"
                >
                  {{ option.label }}
                </button>
              </div>
              <small *ngIf="(submitted || f['timeline'].touched) && f['timeline'].errors" class="error-text">
                Please select a timeline
              </small>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" (click)="previousStep()">{{ 'POST_JOB.BACK' | translate }}</button>
              <button type="button" class="btn btn-primary" (click)="nextStep()">{{ 'POST_JOB.NEXT' | translate }}</button>
            </div>
          </div>

          <!-- Step 3: Review & Submit -->
          <div *ngIf="currentStep === 3" class="form-step">
            <h2>Review your job posting</h2>

            <div class="review-section">
              <div class="review-item">
                <h4>Job Title</h4>
                <p>{{ f['title'].value }}</p>
              </div>
              <div class="review-item">
                <h4>Category</h4>
                <p>{{ getCategoryName(f['category'].value) }}</p>
              </div>
              <div class="review-item">
                <h4>Description</h4>
                <p>{{ f['description'].value }}</p>
              </div>
              <div class="review-item">
                <h4>Location</h4>
                <p>{{ getLocationSummary() || f['location'].value }}</p>
              </div>
              <div class="review-item">
                <h4>Budget</h4>
                <p>{{ getBudgetLabel(f['budget'].value) }}</p>
              </div>
              <div class="review-item">
                <h4>Timeline</h4>
                <p>{{ getTimelineLabel(f['timeline'].value) }}</p>
              </div>
            </div>

            <!-- Terms & Conditions -->
            <div class="form-group checkbox-group">
              <label class="terms-label" [class.invalid]="(submitted || f['agreeToTerms'].touched) && f['agreeToTerms'].errors">
                <input
                  type="checkbox"
                  formControlName="agreeToTerms"
                />
                <span class="checkbox-text">{{ 'COMMON.AGREE_TERMS' | translate }} <a routerLink="/terms" target="_blank">Terms of Service</a></span>
              </label>
              <small *ngIf="(submitted || f['agreeToTerms'].touched) && f['agreeToTerms'].errors" class="error-text">
                {{ 'COMMON.TERMS_REQUIRED' | translate }}
              </small>
            </div>

            <div class="form-actions">
              <button type="button" class="btn btn-secondary" (click)="previousStep()">{{ 'POST_JOB.BACK' | translate }}</button>
              <button type="submit" class="btn btn-success" [disabled]="submitted">
                {{ submitted ? ('POST_JOB.SUBMITTING' | translate) : ('POST_JOB.SUBMIT' | translate) }}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </section>

  <!-- Tips Section -->
  <section class="tips-section">
    <div class="section-container">
      <h2>Tips for Getting Great Bids</h2>
      <div class="tips-grid">
        <div class="tip-card">
          <div class="tip-icon">\u{1F4DD}</div>
          <h3>Be Detailed</h3>
          <p>The more details you provide about your job, the better professionals can understand your needs and submit accurate bids.</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">\u{1F4B0}</div>
          <h3>Set Realistic Budget</h3>
          <p>Set a budget that reflects the scope of work. This helps attract qualified professionals who can deliver quality work.</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">\u23F0</div>
          <h3>Realistic Timeline</h3>
          <p>Give professionals enough time to complete your job properly. Rushing jobs may result in lower quality work.</p>
        </div>
        <div class="tip-card">
          <div class="tip-icon">\u2B50</div>
          <h3>Check Ratings</h3>
          <p>Review the profiles and ratings of professionals who bid on your job before making your selection.</p>
        </div>
      </div>
    </div>
  </section>
</div>
`, styles: ["/* src/app/features/post-job/post-job.scss */\n.post-job-wrapper {\n  color: #1f2937;\n  background: #fff;\n}\n.post-job-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.hero-content p {\n  font-size: 18px;\n  opacity: 0.95;\n  line-height: 1.6;\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.post-job-section {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.form-wrapper {\n  max-width: 700px;\n  margin: 0 auto;\n  background: #fff;\n  border-radius: 12px;\n  padding: 40px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  animation: slideDown 0.3s ease;\n}\n.alert.alert-success {\n  background: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dismiss-btn {\n  background: 0;\n  border: 0;\n  font-size: 24px;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\n.dismiss-btn:hover {\n  opacity: 1;\n}\n.steps-indicator {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 40px;\n}\n.step {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  position: relative;\n  flex: 1;\n}\n.step.active .step-num {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);\n}\n.step.completed .step-num {\n  background: #10b981;\n  color: #fff;\n}\n.step.active .step-label {\n  color: #667eea;\n}\n.step-num {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  color: #6b7280;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-weight: 600;\n  transition: all 0.3s;\n}\n.step-label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  text-align: center;\n  white-space: nowrap;\n}\n.step-line {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 8px;\n  transition: background 0.3s;\n}\n.step-line.active {\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n}\n@media (max-width: 768px) {\n  .steps-indicator {\n    margin-bottom: 30px;\n  }\n  .step-label {\n    font-size: 11px;\n  }\n  .step-line {\n    height: 1px;\n  }\n}\n.form-step {\n  animation: fadeIn 0.3s ease;\n}\n.form-step h2 {\n  font-size: 24px;\n  font-weight: 700;\n  margin-bottom: 24px;\n  color: #1f2937;\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  color: #374151;\n  font-size: 14px;\n}\n.form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 14px;\n  transition: all 0.2s;\n}\n.form-control:focus {\n  outline: 0;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-control.is-invalid {\n  border-color: #dc2626;\n}\n.form-control.textarea {\n  resize: vertical;\n}\n.error-text {\n  display: block;\n  color: #dc2626;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.cat-skeleton {\n  height: 72px;\n  border-radius: 8px;\n  background:\n    linear-gradient(\n      90deg,\n      #f0f0f0 25%,\n      #e0e0e0 50%,\n      #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.4s infinite;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.cat-load-error {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  background: #fff3cd;\n  color: #856404;\n  font-size: 0.875rem;\n}\n.cat-load-error .material-icons {\n  font-size: 1.1rem;\n}\n.cat-load-error button {\n  margin-left: auto;\n  padding: 4px 12px;\n  border: 1px solid #856404;\n  border-radius: 6px;\n  background: none;\n  color: #856404;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.cat-load-error button:hover {\n  background: #f5dda0;\n}\n.cat-empty {\n  color: #6b7280;\n  font-size: 0.875rem;\n  margin: 8px 0 0;\n}\n.category-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n.category-btn {\n  padding: 12px;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n}\n.category-btn:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.category-btn.selected {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: #667eea;\n}\n.category-icon {\n  font-size: 24px;\n}\n.category-name {\n  font-size: 12px;\n  font-weight: 600;\n  text-align: center;\n}\n@media (max-width: 768px) {\n  .category-grid {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  }\n}\n.budget-options,\n.timeline-options {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n.budget-btn,\n.timeline-btn {\n  padding: 12px 16px;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-size: 14px;\n  text-align: left;\n  font-weight: 500;\n}\n.budget-btn:hover,\n.timeline-btn:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.budget-btn.selected,\n.timeline-btn.selected {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border-color: #667eea;\n}\n.review-section {\n  background: #f9fafb;\n  border-radius: 8px;\n  padding: 24px;\n  margin-bottom: 24px;\n}\n.review-item {\n  margin-bottom: 20px;\n}\n.review-item:last-child {\n  margin-bottom: 0;\n}\n.review-item h4 {\n  font-size: 13px;\n  font-weight: 600;\n  color: #6b7280;\n  text-transform: uppercase;\n  margin-bottom: 6px;\n  letter-spacing: 0.5px;\n}\n.review-item p {\n  font-size: 14px;\n  color: #1f2937;\n  line-height: 1.6;\n  margin: 0;\n}\n.checkbox-group {\n  margin-bottom: 24px;\n}\n.checkbox-group .terms-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 12px;\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  transition: all 0.3s ease;\n}\n.checkbox-group .terms-label:hover {\n  border-color: #d1d5db;\n  background: #f3f4f6;\n}\n.checkbox-group .terms-label.invalid {\n  border-color: #dc2626;\n  background: #fef2f2;\n}\n.checkbox-group label {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-bottom: 0;\n}\n.checkbox-group input[type=checkbox] {\n  margin-top: 4px;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n  accent-color: #667eea;\n}\n.checkbox-group .checkbox-text {\n  flex: 1;\n  line-height: 1.5;\n}\n.checkbox-group .checkbox-text a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.checkbox-group .checkbox-text a:hover {\n  text-decoration: underline;\n}\n.checkbox-group input[type=checkbox].is-invalid {\n  border-color: #dc2626;\n}\n.btn {\n  padding: 10px 24px;\n  border: 0;\n  border-radius: 6px;\n  font-weight: 600;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n  min-height: 44px;\n}\n.btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n}\n.btn.btn-secondary {\n  background: #e5e7eb;\n  color: #374151;\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background: #d1d5db;\n}\n.btn.btn-success {\n  background:\n    linear-gradient(\n      135deg,\n      #10b981,\n      #059669);\n  color: #fff;\n  width: 100%;\n}\n.btn.btn-success:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(16, 185, 129, 0.3);\n}\n.tips-section {\n  padding: 80px 20px;\n  background: #fff;\n}\n.tips-section h2 {\n  font-size: 32px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n  color: #1f2937;\n}\n.tips-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 24px;\n}\n.tip-card {\n  background: #f9fafb;\n  border-radius: 12px;\n  padding: 24px;\n  text-align: center;\n  transition: all 0.3s;\n  border: 1px solid #e5e7eb;\n}\n.tip-card:hover {\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n  transform: translateY(-4px);\n}\n.tip-card h3 {\n  font-size: 18px;\n  font-weight: 700;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.tip-card p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.tip-icon {\n  font-size: 40px;\n  margin-bottom: 16px;\n}\n@media (max-width: 768px) {\n  .post-job-section {\n    padding: 60px 20px;\n  }\n  .form-wrapper {\n    padding: 24px;\n  }\n  .tips-section {\n    padding: 60px 20px;\n  }\n  .tips-section h2 {\n    font-size: 24px;\n    margin-bottom: 32px;\n  }\n  .tips-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.autocomplete-container {\n  position: relative;\n}\n.address-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  max-height: 240px;\n  overflow-y: auto;\n}\n.address-item {\n  padding: 10px 14px;\n  cursor: pointer;\n  border-bottom: 1px solid #f3f4f6;\n}\n.address-item:last-child {\n  border-bottom: none;\n}\n.address-item:hover {\n  background: #f9fafb;\n}\n.address-item .address-main {\n  font-size: 14px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.address-item .address-secondary {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.address-loading {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 6px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #6b7280;\n  z-index: 1000;\n}\n.selected-address-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 14px;\n  background: #f0fdf4;\n  border: 1.5px solid #86efac;\n  border-radius: 6px;\n  font-size: 14px;\n  color: #166534;\n}\n.selected-address-box .address-pin-icon {\n  font-size: 18px;\n  color: #16a34a;\n}\n.selected-address-box .selected-address-text {\n  flex: 1;\n  font-weight: 500;\n}\n.selected-address-box .btn-clear-address {\n  background: none;\n  border: 1px solid #86efac;\n  border-radius: 4px;\n  padding: 2px 10px;\n  font-size: 12px;\n  color: #166534;\n  cursor: pointer;\n  white-space: nowrap;\n}\n.selected-address-box .btn-clear-address:hover {\n  background: #dcfce7;\n}\n.text-hint {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #9ca3af;\n}\n/*# sourceMappingURL=post-job.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: ActivatedRoute }, { type: JobService }, { type: ServiceCategoryService }, { type: AddressService }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: ChangeDetectorRef }, { type: MatSnackBar }], { addressSearchInput: [{
    type: ViewChild,
    args: ["addressSearchInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PostJobComponent, { className: "PostJobComponent", filePath: "src/app/features/post-job/post-job.ts", lineNumber: 29 });
})();
var ServiceAreaNoticeComponent = class _ServiceAreaNoticeComponent {
  ref;
  constructor(ref) {
    this.ref = ref;
  }
  static \u0275fac = function ServiceAreaNoticeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceAreaNoticeComponent)(\u0275\u0275directiveInject(MatSnackBarRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ServiceAreaNoticeComponent, selectors: [["app-service-area-notice"]], decls: 11, vars: 0, consts: [[1, "san-wrap"], [1, "san-icon"], [1, "san-body"], [1, "san-title"], [1, "san-msg"], ["aria-label", "Dismiss", 1, "san-close", 3, "click"]], template: function ServiceAreaNoticeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "mat-icon", 1);
      \u0275\u0275text(2, "location_on");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "div", 2)(4, "p", 3);
      \u0275\u0275text(5, "Area Not Yet Covered");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7, "We're not serving this area currently. We're expanding \u2014 check back soon!");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "button", 5);
      \u0275\u0275listener("click", function ServiceAreaNoticeComponent_Template_button_click_8_listener() {
        return ctx.ref.dismiss();
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10, "close");
      \u0275\u0275elementEnd()()();
    }
  }, dependencies: [MatIconModule, MatIcon], styles: ["\n\n.san-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n}\n.san-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n  color: #f57c00;\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n.san-body[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.san-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e65100;\n}\n.san-msg[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #6d4c41;\n  line-height: 1.5;\n}\n.san-close[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #f57c00;\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  padding: 0.1rem;\n  border-radius: 4px;\n  transition: opacity 0.15s;\n}\n.san-close[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.san-close[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n/*# sourceMappingURL=post-job.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceAreaNoticeComponent, [{
    type: Component,
    args: [{ selector: "app-service-area-notice", standalone: true, imports: [MatIconModule], template: `
    <div class="san-wrap">
      <mat-icon class="san-icon">location_on</mat-icon>
      <div class="san-body">
        <p class="san-title">Area Not Yet Covered</p>
        <p class="san-msg">We're not serving this area currently. We're expanding \u2014 check back soon!</p>
      </div>
      <button class="san-close" (click)="ref.dismiss()" aria-label="Dismiss">
        <mat-icon>close</mat-icon>
      </button>
    </div>
  `, styles: ["/* angular:styles/component:scss;9162d6c767d89af3be76acc67c39241c7f985b21f7c8b86197720207ccd938f7;C:/repos/yProHub/prohub-ui/src/app/features/post-job/post-job.ts */\n.san-wrap {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.875rem;\n}\n.san-icon {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n  color: #f57c00;\n  flex-shrink: 0;\n  margin-top: 0.1rem;\n}\n.san-body {\n  flex: 1;\n}\n.san-title {\n  margin: 0 0 0.25rem;\n  font-size: 0.95rem;\n  font-weight: 700;\n  color: #e65100;\n}\n.san-msg {\n  margin: 0;\n  font-size: 0.84rem;\n  color: #6d4c41;\n  line-height: 1.5;\n}\n.san-close {\n  background: none;\n  border: none;\n  cursor: pointer;\n  color: #f57c00;\n  opacity: 0.6;\n  display: flex;\n  align-items: center;\n  flex-shrink: 0;\n  padding: 0.1rem;\n  border-radius: 4px;\n  transition: opacity 0.15s;\n}\n.san-close:hover {\n  opacity: 1;\n}\n.san-close mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n/*# sourceMappingURL=post-job.css.map */\n"] }]
  }], () => [{ type: MatSnackBarRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ServiceAreaNoticeComponent, { className: "ServiceAreaNoticeComponent", filePath: "src/app/features/post-job/post-job.ts", lineNumber: 421 });
})();

// src/app/features/post-job/post-job-routing-module.ts
var routes = [
  { path: "", component: PostJobComponent, canActivate: [AuthGuard] }
];
var PostJobRoutingModule = class _PostJobRoutingModule {
  static \u0275fac = function PostJobRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PostJobRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PostJobRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostJobRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/post-job/post-job-module.ts
var PostJobModule = class _PostJobModule {
  static \u0275fac = function PostJobModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PostJobModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _PostJobModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    PostJobRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PostJobModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        PostJobRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  PostJobModule
};
//# sourceMappingURL=chunk-2U5E4QST.js.map

