import {
  JobService
} from "./chunk-L574K3VU.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AQNNVN3U.js";
import "./chunk-SOWTMXOK.js";
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
  Auth
} from "./chunk-6CNFBV5T.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/edit-job/edit-job.ts
function EditJobComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function EditJobComponent_div_10_Template_button_click_3_listener() {
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
function EditJobComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function EditJobComponent_div_11_Template_button_click_3_listener() {
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
function EditJobComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading job details...");
    \u0275\u0275elementEnd()();
  }
}
function EditJobComponent_form_13_small_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Job title is required");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Job title must be at least 10 characters");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Job title must not exceed 200 characters");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, EditJobComponent_form_13_small_5_span_1_Template, 2, 0, "span", 25)(2, EditJobComponent_form_13_small_5_span_2_Template, 2, 0, "span", 25)(3, EditJobComponent_form_13_small_5_span_3_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["title"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["title"].errors["minlength"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["title"].errors["maxlength"]);
  }
}
function EditJobComponent_form_13_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 40);
    \u0275\u0275element(1, "mat-spinner", 41);
    \u0275\u0275text(2, " Loading categories... ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 30);
  }
}
function EditJobComponent_form_13_div_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275listener("click", function EditJobComponent_form_13_div_10_div_1_Template_div_click_0_listener() {
      const category_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectCategory(category_r6 == null ? null : category_r6.id));
    });
    \u0275\u0275elementStart(1, "div", 45);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 46);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const category_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", ((tmp_4_0 = ctx_r1.jobForm.get("category")) == null ? null : tmp_4_0.value) === category_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r6.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(category_r6.name);
  }
}
function EditJobComponent_form_13_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 42);
    \u0275\u0275template(1, EditJobComponent_form_13_div_10_div_1_Template, 5, 4, "div", 43);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.serviceCategories);
  }
}
function EditJobComponent_form_13_small_11_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please select a category");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, EditJobComponent_form_13_small_11_span_1_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["category"].errors["required"]);
  }
}
function EditJobComponent_form_13_small_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Job description is required");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Description must be at least 50 characters");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_18_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Description must not exceed 3000 characters");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, EditJobComponent_form_13_small_18_span_1_Template, 2, 0, "span", 25)(2, EditJobComponent_form_13_small_18_span_2_Template, 2, 0, "span", 25)(3, EditJobComponent_form_13_small_18_span_3_Template, 2, 0, "span", 25);
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
function EditJobComponent_form_13_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275element(1, "input", 47);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["location"].touched) && ctx_r1.f["location"].errors);
  }
}
function EditJobComponent_form_13_small_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please select a location type");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, EditJobComponent_form_13_small_23_span_1_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["location"].errors["required"]);
  }
}
function EditJobComponent_form_13_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275listener("click", function EditJobComponent_form_13_div_28_Template_div_click_0_listener() {
      const budget_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectBudget(budget_r8.value));
    });
    \u0275\u0275elementStart(1, "div", 49);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 50);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const budget_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ((tmp_3_0 = ctx_r1.jobForm.get("budget")) == null ? null : tmp_3_0.value) === budget_r8.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(budget_r8.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(budget_r8.label);
  }
}
function EditJobComponent_form_13_small_29_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please select a budget range");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, EditJobComponent_form_13_small_29_span_1_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["budget"].errors["required"]);
  }
}
function EditJobComponent_form_13_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function EditJobComponent_form_13_div_34_Template_div_click_0_listener() {
      const timeline_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selectTimeline(timeline_r10.value));
    });
    \u0275\u0275elementStart(1, "div", 52);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 53)(4, "div", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 55);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const timeline_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("selected", ((tmp_3_0 = ctx_r1.jobForm.get("timeline")) == null ? null : tmp_3_0.value) === timeline_r10.value);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(timeline_r10.icon);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(timeline_r10.label);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(timeline_r10.description);
  }
}
function EditJobComponent_form_13_small_35_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please select a timeline");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_small_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275template(1, EditJobComponent_form_13_small_35_span_1_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["timeline"].errors["required"]);
  }
}
function EditJobComponent_form_13_small_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 39);
    \u0275\u0275text(1, " You must agree to the Terms of Service ");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Update Job");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_span_53_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Updating Job...");
    \u0275\u0275elementEnd();
  }
}
function EditJobComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 15);
    \u0275\u0275listener("ngSubmit", function EditJobComponent_form_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "label", 17);
    \u0275\u0275text(3, "Job Title *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 18);
    \u0275\u0275template(5, EditJobComponent_form_13_small_5_Template, 4, 3, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "label");
    \u0275\u0275text(8, "Select Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, EditJobComponent_form_13_div_9_Template, 3, 1, "div", 20)(10, EditJobComponent_form_13_div_10_Template, 2, 1, "div", 21)(11, EditJobComponent_form_13_small_11_Template, 2, 1, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 16)(13, "label", 22);
    \u0275\u0275text(14, "Job Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "textarea", 23);
    \u0275\u0275elementStart(16, "div", 24);
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, EditJobComponent_form_13_small_18_Template, 4, 3, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 16)(20, "label");
    \u0275\u0275text(21, "Work Location *");
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, EditJobComponent_form_13_div_22_Template, 2, 2, "div", 25)(23, EditJobComponent_form_13_small_23_Template, 2, 1, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16)(25, "label");
    \u0275\u0275text(26, "Budget *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 26);
    \u0275\u0275template(28, EditJobComponent_form_13_div_28_Template, 5, 4, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275template(29, EditJobComponent_form_13_small_29_Template, 2, 1, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 16)(31, "label");
    \u0275\u0275text(32, "Timeline *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 28);
    \u0275\u0275template(34, EditJobComponent_form_13_div_34_Template, 8, 5, "div", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, EditJobComponent_form_13_small_35_Template, 2, 1, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "div", 16)(37, "label", 30);
    \u0275\u0275text(38, "Attachments (Optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "input", 31);
    \u0275\u0275elementStart(40, "small", 32);
    \u0275\u0275text(41, "Add links to images, documents, or references that help describe your job");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(42, "div", 33)(43, "label", 34);
    \u0275\u0275element(44, "input", 35);
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "I agree to the Terms of Service and confirm that all information provided is accurate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(47, EditJobComponent_form_13_small_47_Template, 2, 0, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 36)(49, "button", 37);
    \u0275\u0275text(50, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "button", 38);
    \u0275\u0275template(52, EditJobComponent_form_13_span_52_Template, 2, 0, "span", 25)(53, EditJobComponent_form_13_span_53_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_10_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.jobForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["title"].touched) && ctx_r1.f["title"].errors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["title"].touched) && ctx_r1.f["title"].errors);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.categoriesLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.categoriesLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["category"].touched) && ctx_r1.f["category"].errors);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = ctx_r1.jobForm.get("description")) == null ? null : tmp_8_0.value == null ? null : tmp_8_0.value.length) || 0, " / 3000 characters ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.jobForm && ((tmp_10_0 = ctx_r1.jobForm.get("location")) == null ? null : tmp_10_0.value));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["location"].touched) && ctx_r1.f["location"].errors);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.budgetRanges);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["budget"].touched) && ctx_r1.f["budget"].errors);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ctx_r1.timelineOptions);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["timeline"].touched) && ctx_r1.f["timeline"].errors);
    \u0275\u0275advance(9);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.submitted);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.submitted);
  }
}
function EditJobComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "h3");
    \u0275\u0275text(2, "Tips for Editing Your Job");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul")(4, "li");
    \u0275\u0275text(5, "Be clear and specific about what needs to be done");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "Provide as much detail as possible to attract the right professionals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "Set a realistic budget based on the scope of work");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Give professionals adequate time to complete the work");
    \u0275\u0275elementEnd()()();
  }
}
var EditJobComponent = class _EditJobComponent {
  fb;
  router;
  route;
  jobService;
  serviceCategoryService;
  auth;
  platformId;
  cdr;
  jobForm;
  submitted = false;
  successMessage = "";
  errorMessage = "";
  loading = true;
  jobId;
  destroy$ = new Subject();
  serviceCategories = [];
  categoriesLoading = true;
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
  locationTypes = [
    { value: "local", label: "Local (In-person)", description: "Work will be done at my location" },
    { value: "remote", label: "Remote", description: "Work can be done remotely" },
    { value: "both", label: "Both (Local & Remote)", description: "Either location works" }
  ];
  constructor(fb, router, route, jobService, serviceCategoryService, auth, platformId, cdr) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.jobService = jobService;
    this.serviceCategoryService = serviceCategoryService;
    this.auth = auth;
    this.platformId = platformId;
    this.cdr = cdr;
  }
  ngOnInit() {
    if (!this.auth.isAuthenticated()) {
      this.errorMessage = "You must be logged in to edit jobs.";
      this.router.navigate(["/"]);
      return;
    }
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe({
      next: (params) => {
        this.jobId = parseInt(params["id"], 10);
        if (!this.jobId) {
          this.errorMessage = "Invalid job ID.";
          this.loading = false;
          this.cdr.markForCheck();
          return;
        }
        this.loadCategories();
        this.loadJob();
      },
      error: () => {
        this.errorMessage = "Unable to load job.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  loadCategories() {
    this.categoriesLoading = true;
    this.cdr.detectChanges();
    this.serviceCategoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => {
        console.log("\u2705 Categories loaded for edit-job:", categories);
        this.serviceCategories = categories.map((cat) => ({
          id: cat.id,
          name: cat.name,
          icon: cat.icon || "\u{1F4CB}",
          serviceCount: cat.serviceCount
        }));
        this.categoriesLoading = false;
        this.cdr.detectChanges();
      },
      error: (error) => {
        console.error("\u274C Error loading categories:", error);
        this.categoriesLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  loadJob() {
    this.loading = true;
    this.cdr.markForCheck();
    this.jobService.getJob(this.jobId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (job) => {
        console.log("\u2705 Job loaded:", job);
        console.log("Job location from DB:", job.location);
        this.initializeForm(job);
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("\u274C Error loading job:", error);
        this.errorMessage = "Failed to load job. Please try again.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  initializeForm(job) {
    this.jobForm = this.fb.group({
      title: [job.title, [Validators.required, Validators.minLength(10), Validators.maxLength(200)]],
      category: [job.categoryId, Validators.required],
      description: [job.description, [Validators.required, Validators.minLength(50), Validators.maxLength(3e3)]],
      location: [job.location, Validators.required],
      budget: [job.budget, Validators.required],
      timeline: [job.timeline, Validators.required],
      attachments: [job.attachments || ""],
      agreeToTerms: [true, Validators.required]
    });
  }
  get f() {
    return this.jobForm.controls;
  }
  onSubmit() {
    this.errorMessage = "";
    this.successMessage = "";
    Object.keys(this.jobForm.controls).forEach((key) => {
      this.jobForm.get(key)?.markAsTouched();
    });
    if (!this.f["agreeToTerms"].value) {
      this.errorMessage = "You must agree to the Terms of Service to update a job.";
      this.submitted = false;
      this.cdr.markForCheck();
      return;
    }
    if (this.jobForm.invalid) {
      this.errorMessage = "Please fill in all required fields correctly and agree to the terms.";
      this.submitted = false;
      this.cdr.markForCheck();
      return;
    }
    this.submitted = true;
    this.cdr.markForCheck();
    const selectedRange = this.budgetRanges.find((r) => r.value === this.jobForm.value.budget);
    const jobData = {
      id: this.jobId,
      title: this.jobForm.value.title,
      categoryId: this.jobForm.value.category,
      description: this.jobForm.value.description,
      location: this.jobForm.value.location,
      budget: this.jobForm.value.budget,
      estimatedBudget: selectedRange?.estimatedBudget,
      timeline: this.jobForm.value.timeline,
      attachments: this.jobForm.value.attachments || ""
    };
    console.log("Updating Job:", jobData);
    this.jobService.updateJob(this.jobId, jobData).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Job updated successfully:", response);
        this.successMessage = "Your job has been updated successfully!";
        setTimeout(() => {
          this.router.navigate(["/pending-jobs"]);
        }, 2e3);
      },
      error: (error) => {
        console.error("Error updating job:", error);
        this.errorMessage = error?.error?.message || "Error updating job. Please try again.";
        this.submitted = false;
        this.cdr.markForCheck();
      }
    });
  }
  selectCategory(categoryId) {
    this.jobForm.patchValue({ category: categoryId });
  }
  selectBudget(budgetValue) {
    this.jobForm.patchValue({ budget: budgetValue });
  }
  selectTimeline(timelineValue) {
    this.jobForm.patchValue({ timeline: timelineValue });
  }
  //   getLocationLabel(locationValue: string): string {
  //     const location = this.locationTypes.find(l => l.value === locationValue);
  //     return location ? location.label : 'Unknown Location';
  //   }
  //   getLocationDescription(locationValue: string): string {
  //     const location = this.locationTypes.find(l => l.value === locationValue);
  //     return location ? location.description : '';
  //   }
  //   selectLocation(locationValue: string): void {
  //     console.log('📍 Selecting location:', locationValue);
  //     this.jobForm.patchValue({ location: locationValue });
  //     this.cdr.markForCheck();
  //   }
  dismissMessage(type) {
    if (type === "success") {
      this.successMessage = "";
    } else {
      this.errorMessage = "";
    }
    this.cdr.markForCheck();
  }
  resetForm() {
    this.jobForm.reset();
    this.submitted = false;
    this.errorMessage = "";
    this.successMessage = "";
    this.cdr.markForCheck();
  }
  static \u0275fac = function EditJobComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditJobComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(PLATFORM_ID), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditJobComponent, selectors: [["app-edit-job"]], decls: 15, vars: 5, consts: [[1, "edit-job-wrapper"], [1, "edit-job-hero"], [1, "hero-content"], [1, "edit-job-section"], [1, "section-container"], [1, "form-wrapper"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "form-tips", 4, "ngIf"], [1, "alert", "alert-success"], [1, "dismiss-btn", 3, "click"], [1, "alert", "alert-error"], [1, "loading-container"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "title"], ["type", "text", "id", "title", "formControlName", "title", "placeholder", "e.g., Kitchen Remodel", 1, "form-control"], ["class", "error-text", 4, "ngIf"], ["class", "loading-text", 4, "ngIf"], ["class", "category-grid", 4, "ngIf"], ["for", "description"], ["id", "description", "formControlName", "description", "placeholder", "Describe your job in detail. What needs to be done? Any specific requirements?", "rows", "8", 1, "form-control", "textarea"], [1, "char-count"], [4, "ngIf"], [1, "budget-grid"], ["class", "budget-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "timeline-grid"], ["class", "timeline-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], ["for", "attachments"], ["type", "text", "id", "attachments", "formControlName", "attachments", "placeholder", "e.g., URL to images or documents", 1, "form-control"], [1, "help-text"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "form-actions"], ["type", "button", "routerLink", "/pending-jobs", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [1, "error-text"], [1, "loading-text"], [3, "diameter"], [1, "category-grid"], ["class", "category-card", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "category-card", 3, "click"], [1, "category-icon"], [1, "category-name"], ["type", "text", "id", "location", "formControlName", "location", "placeholder", "e.g., New Delhi, India", 1, "form-control"], [1, "budget-card", 3, "click"], [1, "budget-icon"], [1, "budget-label"], [1, "timeline-card", 3, "click"], [1, "timeline-icon"], [1, "timeline-content"], [1, "timeline-label"], [1, "timeline-desc"], [1, "form-tips"]], template: function EditJobComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Edit Job");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Update your job details and requirements");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 4)(9, "div", 5);
      \u0275\u0275template(10, EditJobComponent_div_10_Template, 5, 1, "div", 6)(11, EditJobComponent_div_11_Template, 5, 1, "div", 7)(12, EditJobComponent_div_12_Template, 4, 0, "div", 8)(13, EditJobComponent_form_13_Template, 54, 23, "form", 9)(14, EditJobComponent_div_14_Template, 12, 0, "div", 10);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.jobForm && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, CheckboxControlValueAccessor, NgControlStatus, NgControlStatusGroup, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, RouterLink, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.edit-job-wrapper[_ngcontent-%COMP%] {\n  color: #1f2937;\n  background: #fff;\n}\n.edit-job-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  line-height: 1.6;\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.edit-job-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  background: #fff;\n  border-radius: 12px;\n  padding: 40px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.current-value[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: #f0f4ff;\n  border-left: 4px solid #667eea;\n  margin-bottom: 16px;\n  border-radius: 4px;\n  font-size: 14px;\n  color: #4f46e5;\n}\n.current-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: block;\n}\n.current-value[_ngcontent-%COMP%]   small[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #4338ca;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  gap: 1rem;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dismiss-btn[_ngcontent-%COMP%] {\n  background: 0;\n  border: 0;\n  font-size: 24px;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\n.dismiss-btn[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #1f2937;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n  background-color: #fef2f2;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-group[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.form-group[_ngcontent-%COMP%]   .help-text[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.form-group[_ngcontent-%COMP%]   .char-count[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 4px;\n}\n.form-group[_ngcontent-%COMP%]   .loading-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #666;\n  font-size: 14px;\n}\n.category-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n.category-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fff;\n}\n.category-card[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.category-card.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.category-card[_ngcontent-%COMP%]   .category-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  margin-bottom: 8px;\n}\n.category-card[_ngcontent-%COMP%]   .category-name[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.location-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.location-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fff;\n}\n.location-card[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.location-card.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.location-card[_ngcontent-%COMP%]   .location-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.location-card[_ngcontent-%COMP%]   .location-desc[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n}\n.budget-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 12px;\n}\n.budget-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fff;\n}\n.budget-card[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.budget-card.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.budget-card[_ngcontent-%COMP%]   .budget-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 8px;\n}\n.budget-card[_ngcontent-%COMP%]   .budget-label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.timeline-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.timeline-card[_ngcontent-%COMP%] {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fff;\n}\n.timeline-card[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.timeline-card.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.timeline-card[_ngcontent-%COMP%]   .timeline-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\n.timeline-card[_ngcontent-%COMP%]   .timeline-content[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.timeline-card[_ngcontent-%COMP%]   .timeline-label[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n  margin-bottom: 4px;\n}\n.timeline-card[_ngcontent-%COMP%]   .timeline-desc[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: normal;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 2px;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #4b5563;\n  line-height: 1.5;\n  font-size: 14px;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn[_ngcontent-%COMP%] {\n  padding: 10px 24px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #1f2937;\n  border: 1px solid #d1d5db;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.form-tips[_ngcontent-%COMP%] {\n  margin-top: 32px;\n  padding: 20px;\n  background: #f9fafb;\n  border-left: 4px solid #667eea;\n  border-radius: 8px;\n}\n.form-tips[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 12px 0;\n  color: #667eea;\n  font-size: 16px;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 20px;\n  color: #6b7280;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  line-height: 1.6;\n  font-size: 14px;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 24px;\n  }\n  .category-grid[_ngcontent-%COMP%], \n   .budget-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  }\n  .location-grid[_ngcontent-%COMP%], \n   .timeline-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=edit-job.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditJobComponent, [{
    type: Component,
    args: [{ selector: "app-edit-job", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MatProgressSpinnerModule], template: `<div class="edit-job-wrapper">\r
  <!-- Hero Section -->\r
  <section class="edit-job-hero">\r
    <div class="hero-content">\r
      <h1>Edit Job</h1>\r
      <p>Update your job details and requirements</p>\r
    </div>\r
  </section>\r
\r
  <!-- Form Section -->\r
  <section class="edit-job-section">\r
    <div class="section-container">\r
      <div class="form-wrapper">\r
        <!-- Success Message -->\r
        <div *ngIf="successMessage" class="alert alert-success">\r
          <span>{{ successMessage }}</span>\r
          <button (click)="dismissMessage('success')" class="dismiss-btn">&times;</button>\r
        </div>\r
\r
        <!-- Error Message -->\r
        <div *ngIf="errorMessage" class="alert alert-error">\r
          <span>{{ errorMessage }}</span>\r
          <button (click)="dismissMessage('error')" class="dismiss-btn">&times;</button>\r
        </div>\r
\r
        <!-- Loading State -->\r
        <div *ngIf="loading" class="loading-container">\r
          <mat-spinner></mat-spinner>\r
          <p>Loading job details...</p>\r
        </div>\r
\r
        <form *ngIf="jobForm && !loading" [formGroup]="jobForm" (ngSubmit)="onSubmit()">\r
          <!-- Job Title -->\r
          <div class="form-group">\r
            <label for="title">Job Title *</label>\r
            <input\r
              type="text"\r
              id="title"\r
              formControlName="title"\r
              placeholder="e.g., Kitchen Remodel"\r
              class="form-control"\r
              [class.is-invalid]="(submitted || f['title'].touched) && f['title'].errors"\r
            />\r
            <small *ngIf="(submitted || f['title'].touched) && f['title'].errors" class="error-text">\r
              <span *ngIf="f['title'].errors['required']">Job title is required</span>\r
              <span *ngIf="f['title'].errors['minlength']">Job title must be at least 10 characters</span>\r
              <span *ngIf="f['title'].errors['maxlength']">Job title must not exceed 200 characters</span>\r
            </small>\r
          </div>\r
\r
          <!-- Category Selection -->\r
          <div class="form-group">\r
            <label>Select Category *</label>\r
            <div *ngIf="categoriesLoading" class="loading-text">\r
              <mat-spinner [diameter]="30"></mat-spinner>\r
              Loading categories...\r
            </div>\r
            <div *ngIf="!categoriesLoading" class="category-grid">\r
              <div\r
                *ngFor="let category of serviceCategories"\r
                class="category-card"\r
                [class.selected]="jobForm.get('category')?.value === category.id"\r
                (click)="selectCategory(category?.id)"\r
              >\r
                <div class="category-icon">{{ category.icon }}</div>\r
                <div class="category-name">{{ category.name }}</div>\r
              </div>\r
            </div>\r
            <small *ngIf="(submitted || f['category'].touched) && f['category'].errors" class="error-text">\r
              <span *ngIf="f['category'].errors['required']">Please select a category</span>\r
            </small>\r
          </div>\r
\r
          <!-- Job Description -->\r
          <div class="form-group">\r
            <label for="description">Job Description *</label>\r
            <textarea\r
              id="description"\r
              formControlName="description"\r
              placeholder="Describe your job in detail. What needs to be done? Any specific requirements?"\r
              class="form-control textarea"\r
              rows="8"\r
              [class.is-invalid]="(submitted || f['description'].touched) && f['description'].errors"\r
            ></textarea>\r
            <div class="char-count">\r
              {{ jobForm.get('description')?.value?.length || 0 }} / 3000 characters\r
            </div>\r
            <small *ngIf="(submitted || f['description'].touched) && f['description'].errors" class="error-text">\r
              <span *ngIf="f['description'].errors['required']">Job description is required</span>\r
              <span *ngIf="f['description'].errors['minlength']">Description must be at least 50 characters</span>\r
              <span *ngIf="f['description'].errors['maxlength']">Description must not exceed 3000 characters</span>\r
            </small>\r
          </div>\r
\r
          <!-- Location -->\r
          <div class="form-group">\r
            <label>Work Location *</label>\r
            \r
            <!-- Display current location if loaded -->\r
            <div *ngIf="jobForm && jobForm.get('location')?.value">\r
                <input\r
                type="text"\r
                id="location"\r
                formControlName="location"\r
                placeholder="e.g., New Delhi, India"\r
                class="form-control"\r
                [class.is-invalid]="(submitted || f['location'].touched) && f['location'].errors"\r
                />\r
            </div>\r
\r
            <small *ngIf="(submitted || f['location'].touched) && f['location'].errors" class="error-text">\r
              <span *ngIf="f['location'].errors['required']">Please select a location type</span>\r
            </small>\r
          </div>\r
\r
          <!-- Budget Selection -->\r
          <div class="form-group">\r
            <label>Budget *</label>\r
            <div class="budget-grid">\r
              <div\r
                *ngFor="let budget of budgetRanges"\r
                class="budget-card"\r
                [class.selected]="jobForm.get('budget')?.value === budget.value"\r
                (click)="selectBudget(budget.value)"\r
              >\r
                <div class="budget-icon">{{ budget.icon }}</div>\r
                <div class="budget-label">{{ budget.label }}</div>\r
              </div>\r
            </div>\r
            <small *ngIf="(submitted || f['budget'].touched) && f['budget'].errors" class="error-text">\r
              <span *ngIf="f['budget'].errors['required']">Please select a budget range</span>\r
            </small>\r
          </div>\r
\r
          <!-- Timeline Selection -->\r
          <div class="form-group">\r
            <label>Timeline *</label>\r
            <div class="timeline-grid">\r
              <div\r
                *ngFor="let timeline of timelineOptions"\r
                class="timeline-card"\r
                [class.selected]="jobForm.get('timeline')?.value === timeline.value"\r
                (click)="selectTimeline(timeline.value)"\r
              >\r
                <div class="timeline-icon">{{ timeline.icon }}</div>\r
                <div class="timeline-content">\r
                  <div class="timeline-label">{{ timeline.label }}</div>\r
                  <div class="timeline-desc">{{ timeline.description }}</div>\r
                </div>\r
              </div>\r
            </div>\r
            <small *ngIf="(submitted || f['timeline'].touched) && f['timeline'].errors" class="error-text">\r
              <span *ngIf="f['timeline'].errors['required']">Please select a timeline</span>\r
            </small>\r
          </div>\r
\r
          <!-- Attachments -->\r
          <div class="form-group">\r
            <label for="attachments">Attachments (Optional)</label>\r
            <input\r
              type="text"\r
              id="attachments"\r
              formControlName="attachments"\r
              placeholder="e.g., URL to images or documents"\r
              class="form-control"\r
            />\r
            <small class="help-text">Add links to images, documents, or references that help describe your job</small>\r
          </div>\r
\r
          <!-- Terms & Conditions -->\r
          <div class="form-group checkbox-group">\r
            <label class="checkbox-label">\r
              <input\r
                type="checkbox"\r
                formControlName="agreeToTerms"\r
                [class.is-invalid]="(submitted || f['agreeToTerms'].touched) && f['agreeToTerms'].errors"\r
              />\r
              <span>I agree to the Terms of Service and confirm that all information provided is accurate</span>\r
            </label>\r
            <small *ngIf="(submitted || f['agreeToTerms'].touched) && f['agreeToTerms'].errors" class="error-text">\r
              You must agree to the Terms of Service\r
            </small>\r
          </div>\r
\r
          <!-- Action Buttons -->\r
          <div class="form-actions">\r
            <button\r
              type="button"\r
              class="btn btn-secondary"\r
              routerLink="/pending-jobs"\r
            >\r
              Cancel\r
            </button>\r
            <button\r
              type="submit"\r
              class="btn btn-primary"\r
              [disabled]="submitted"\r
            >\r
              <span *ngIf="!submitted">Update Job</span>\r
              <span *ngIf="submitted">Updating Job...</span>\r
            </button>\r
          </div>\r
        </form>\r
\r
        <!-- Form Tips -->\r
        <div *ngIf="!loading" class="form-tips">\r
          <h3>Tips for Editing Your Job</h3>\r
          <ul>\r
            <li>Be clear and specific about what needs to be done</li>\r
            <li>Provide as much detail as possible to attract the right professionals</li>\r
            <li>Set a realistic budget based on the scope of work</li>\r
            <li>Give professionals adequate time to complete the work</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/features/edit-job/edit-job.scss */\n.edit-job-wrapper {\n  color: #1f2937;\n  background: #fff;\n}\n.edit-job-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.hero-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.hero-content p {\n  font-size: 18px;\n  opacity: 0.95;\n  line-height: 1.6;\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.edit-job-section {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.form-wrapper {\n  max-width: 700px;\n  margin: 0 auto;\n  background: #fff;\n  border-radius: 12px;\n  padding: 40px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);\n}\n.current-value {\n  padding: 12px 16px;\n  background: #f0f4ff;\n  border-left: 4px solid #667eea;\n  margin-bottom: 16px;\n  border-radius: 4px;\n  font-size: 14px;\n  color: #4f46e5;\n}\n.current-value small {\n  display: block;\n}\n.current-value small strong {\n  font-weight: 600;\n  color: #4338ca;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  gap: 1rem;\n}\n.loading-container p {\n  color: #666;\n  font-size: 1.1rem;\n}\n.alert {\n  padding: 12px 16px;\n  border-radius: 8px;\n  margin-bottom: 24px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-weight: 500;\n  animation: slideDown 0.3s ease;\n}\n.alert.alert-success {\n  background: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error {\n  background: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.dismiss-btn {\n  background: 0;\n  border: 0;\n  font-size: 24px;\n  cursor: pointer;\n  opacity: 0.6;\n  transition: opacity 0.2s;\n}\n.dismiss-btn:hover {\n  opacity: 1;\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-group label {\n  display: block;\n  font-weight: 600;\n  margin-bottom: 8px;\n  color: #1f2937;\n  font-size: 14px;\n}\n.form-group .form-control {\n  width: 100%;\n  padding: 10px 12px;\n  border: 2px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.2s;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group .form-control.is-invalid {\n  border-color: #ef4444;\n  background-color: #fef2f2;\n}\n.form-group .form-control.textarea {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-group .error-text {\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.form-group .help-text {\n  color: #6b7280;\n  font-size: 12px;\n  margin-top: 4px;\n  display: block;\n}\n.form-group .char-count {\n  text-align: right;\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 4px;\n}\n.form-group .loading-text {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #666;\n  font-size: 14px;\n}\n.category-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));\n  gap: 12px;\n}\n.category-card {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fff;\n}\n.category-card:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.category-card.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.category-card .category-icon {\n  font-size: 32px;\n  margin-bottom: 8px;\n}\n.category-card .category-name {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.location-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 12px;\n}\n.location-card {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fff;\n}\n.location-card:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.location-card.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.location-card .location-title {\n  font-weight: 600;\n  color: #1f2937;\n  margin-bottom: 4px;\n}\n.location-card .location-desc {\n  font-size: 13px;\n  color: #6b7280;\n}\n.budget-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  gap: 12px;\n}\n.budget-card {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  text-align: center;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fff;\n}\n.budget-card:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.budget-card.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.budget-card .budget-icon {\n  font-size: 20px;\n  margin-bottom: 8px;\n}\n.budget-card .budget-label {\n  font-size: 13px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.timeline-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\n  gap: 12px;\n}\n.timeline-card {\n  padding: 16px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: all 0.2s;\n  background: #fff;\n}\n.timeline-card:hover {\n  border-color: #667eea;\n  background: #f3f4f6;\n}\n.timeline-card.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.timeline-card .timeline-icon {\n  font-size: 24px;\n  margin-bottom: 8px;\n}\n.timeline-card .timeline-content {\n  text-align: center;\n}\n.timeline-card .timeline-label {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n  margin-bottom: 4px;\n}\n.timeline-card .timeline-desc {\n  font-size: 12px;\n  color: #6b7280;\n}\n.checkbox-group .checkbox-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 8px;\n  cursor: pointer;\n  font-weight: normal;\n}\n.checkbox-group .checkbox-label input[type=checkbox] {\n  margin-top: 2px;\n  cursor: pointer;\n  width: 16px;\n  height: 16px;\n  flex-shrink: 0;\n}\n.checkbox-group .checkbox-label span {\n  color: #4b5563;\n  line-height: 1.5;\n  font-size: 14px;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  justify-content: flex-end;\n  margin-top: 32px;\n  padding-top: 24px;\n  border-top: 1px solid #e5e7eb;\n}\n.btn {\n  padding: 10px 24px;\n  border: none;\n  border-radius: 6px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.btn.btn-secondary {\n  background: #f3f4f6;\n  color: #1f2937;\n  border: 1px solid #d1d5db;\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.form-tips {\n  margin-top: 32px;\n  padding: 20px;\n  background: #f9fafb;\n  border-left: 4px solid #667eea;\n  border-radius: 8px;\n}\n.form-tips h3 {\n  margin: 0 0 12px 0;\n  color: #667eea;\n  font-size: 16px;\n}\n.form-tips ul {\n  margin: 0;\n  padding-left: 20px;\n  color: #6b7280;\n}\n.form-tips ul li {\n  margin-bottom: 8px;\n  line-height: 1.6;\n  font-size: 14px;\n}\n.form-tips ul li:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .hero-content h1 {\n    font-size: 32px;\n  }\n  .hero-content p {\n    font-size: 16px;\n  }\n  .form-wrapper {\n    padding: 24px;\n  }\n  .category-grid,\n  .budget-grid {\n    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));\n  }\n  .location-grid,\n  .timeline-grid {\n    grid-template-columns: 1fr;\n  }\n  .form-actions {\n    flex-direction: column-reverse;\n  }\n  .btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=edit-job.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: ActivatedRoute }, { type: JobService }, { type: ServiceCategoryService }, { type: Auth }, { type: Object, decorators: [{
    type: Inject,
    args: [PLATFORM_ID]
  }] }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditJobComponent, { className: "EditJobComponent", filePath: "src/app/features/edit-job/edit-job.ts", lineNumber: 20 });
})();

// src/app/features/edit-job/edit-job-routing-module.ts
var routes = [
  { path: "", component: EditJobComponent }
];
var EditJobRoutingModule = class _EditJobRoutingModule {
  static \u0275fac = function EditJobRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditJobRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EditJobRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditJobRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/edit-job/edit-job-module.ts
var EditJobModule = class _EditJobModule {
  static \u0275fac = function EditJobModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditJobModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EditJobModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    EditJobRoutingModule,
    EditJobComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditJobModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        EditJobRoutingModule,
        EditJobComponent
      ]
    }]
  }], null, null);
})();
export {
  EditJobModule
};
//# sourceMappingURL=chunk-EVUXEFQB.js.map

