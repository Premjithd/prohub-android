import {
  MyServicesService
} from "./chunk-YVFMDLNK.js";
import {
  ServiceCategoryService
} from "./chunk-JPYXDVHJ.js";
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
} from "./chunk-DLR4BDQH.js";
import {
  Auth
} from "./chunk-MJ2Z243I.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterModule
} from "./chunk-Z7MI56JG.js";
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
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/add-service/add-service.ts
function AddServiceComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function AddServiceComponent_div_10_Template_button_click_3_listener() {
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
function AddServiceComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 11);
    \u0275\u0275listener("click", function AddServiceComponent_div_11_Template_button_click_3_listener() {
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
function AddServiceComponent_form_12_small_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Service name is required");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Service name must be at least 5 characters");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Service name must not exceed 100 characters");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 40);
    \u0275\u0275template(1, AddServiceComponent_form_12_small_5_span_1_Template, 2, 0, "span", 39)(2, AddServiceComponent_form_12_small_5_span_2_Template, 2, 0, "span", 39)(3, AddServiceComponent_form_12_small_5_span_3_Template, 2, 0, "span", 39);
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
function AddServiceComponent_form_12_small_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Service description is required");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Description must be at least 20 characters");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Description must not exceed 2000 characters");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 40);
    \u0275\u0275template(1, AddServiceComponent_form_12_small_12_span_1_Template, 2, 0, "span", 39)(2, AddServiceComponent_form_12_small_12_span_2_Template, 2, 0, "span", 39)(3, AddServiceComponent_form_12_small_12_span_3_Template, 2, 0, "span", 39);
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
function AddServiceComponent_form_12_small_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Price is required");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Price must be greater than 0");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 40);
    \u0275\u0275template(1, AddServiceComponent_form_12_small_20_span_1_Template, 2, 0, "span", 39)(2, AddServiceComponent_form_12_small_20_span_2_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["price"].errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["price"].errors["min"]);
  }
}
function AddServiceComponent_form_12_option_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 41);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const category_r5 = ctx.$implicit;
    \u0275\u0275property("value", category_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", category_r5.icon, " ", category_r5.name, " ");
  }
}
function AddServiceComponent_form_12_small_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please select a service category");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_small_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 40);
    \u0275\u0275template(1, AddServiceComponent_form_12_small_28_span_1_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["serviceCategoryId"].errors["required"]);
  }
}
function AddServiceComponent_form_12_small_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 40);
    \u0275\u0275text(1, " You must agree to the Terms of Service ");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Add Service");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Adding Service...");
    \u0275\u0275elementEnd();
  }
}
function AddServiceComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 13);
    \u0275\u0275listener("ngSubmit", function AddServiceComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 14)(2, "label", 15);
    \u0275\u0275text(3, "Service Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 16);
    \u0275\u0275template(5, AddServiceComponent_form_12_small_5_Template, 4, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "label", 18);
    \u0275\u0275text(8, "Service Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "textarea", 19);
    \u0275\u0275elementStart(10, "div", 20);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AddServiceComponent_form_12_small_12_Template, 4, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 14)(14, "label", 21);
    \u0275\u0275text(15, "Starting Price (\u20B9) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 22)(17, "span", 23);
    \u0275\u0275text(18, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "input", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AddServiceComponent_form_12_small_20_Template, 3, 2, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 14)(22, "label", 25);
    \u0275\u0275text(23, "Service Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "select", 26)(25, "option", 27);
    \u0275\u0275text(26, "-- Select a Category --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, AddServiceComponent_form_12_option_27_Template, 2, 3, "option", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AddServiceComponent_form_12_small_28_Template, 2, 1, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 14)(30, "label", 29);
    \u0275\u0275text(31, "Service Photo URL ");
    \u0275\u0275elementStart(32, "span", 30);
    \u0275\u0275text(33, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "input", 31);
    \u0275\u0275elementStart(35, "small", 32);
    \u0275\u0275text(36, "Paste a direct link to a photo that best represents your service");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 33)(38, "label", 34);
    \u0275\u0275element(39, "input", 35);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "I agree to the Terms of Service and confirm that all information provided is accurate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, AddServiceComponent_form_12_small_42_Template, 2, 0, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 36)(44, "button", 37);
    \u0275\u0275listener("click", function AddServiceComponent_form_12_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.resetForm());
    });
    \u0275\u0275text(45, " Clear Form ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 38);
    \u0275\u0275template(47, AddServiceComponent_form_12_span_47_Template, 2, 0, "span", 39)(48, AddServiceComponent_form_12_span_48_Template, 2, 0, "span", 39);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.serviceForm);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["name"].touched) && ctx_r1.f["name"].errors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["name"].touched) && ctx_r1.f["name"].errors);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_5_0 = ctx_r1.serviceForm.get("description")) == null ? null : tmp_5_0.value == null ? null : tmp_5_0.value.length) || 0, " / 2000 characters ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["description"].touched) && ctx_r1.f["description"].errors);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["price"].touched) && ctx_r1.f["price"].errors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["price"].touched) && ctx_r1.f["price"].errors);
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["serviceCategoryId"].touched) && ctx_r1.f["serviceCategoryId"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["serviceCategoryId"].touched) && ctx_r1.f["serviceCategoryId"].errors);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["imageUrl"].touched) && ctx_r1.f["imageUrl"].errors);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["agreeToTerms"].touched) && ctx_r1.f["agreeToTerms"].errors);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.submitted);
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
    this.serviceCategoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (categories) => {
        this.categories = categories;
        console.log("Categories loaded:", this.categories);
      },
      error: (error) => {
        console.error("Error loading categories:", error);
        this.categories = [];
      }
    });
  }
  initializeForm() {
    this.serviceForm = this.fb.group({
      name: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(2e3)]],
      price: ["", [Validators.required, Validators.min(1)]],
      serviceCategoryId: ["", Validators.required],
      imageUrl: [""],
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AddServiceComponent, selectors: [["app-add-service"]], decls: 25, vars: 3, consts: [[1, "add-service-wrapper"], [1, "add-service-hero"], [1, "hero-content"], [1, "add-service-section"], [1, "section-container"], [1, "form-wrapper"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "form-tips"], [1, "alert", "alert-success"], [1, "dismiss-btn", 3, "click"], [1, "alert", "alert-error"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "e.g., Plumbing Installation", 1, "form-control"], ["class", "error-text", 4, "ngIf"], ["for", "description"], ["id", "description", "formControlName", "description", "placeholder", "Describe your service in detail. What services do you offer? What are your qualifications?", "rows", "8", 1, "form-control", "textarea"], [1, "char-count"], ["for", "price"], [1, "price-input-wrapper"], [1, "currency"], ["type", "number", "id", "price", "formControlName", "price", "placeholder", "e.g., 500", "step", "1", "min", "1", 1, "form-control", "price-input"], ["for", "serviceCategoryId"], ["id", "serviceCategoryId", "formControlName", "serviceCategoryId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "imageUrl"], [1, "optional-label"], ["type", "url", "id", "imageUrl", "formControlName", "imageUrl", "placeholder", "https://example.com/your-photo.jpg", 1, "form-control"], [1, "hint-text"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "form-actions"], ["type", "button", 1, "btn", "btn-secondary", 3, "click", "disabled"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "error-text"], [3, "value"]], template: function AddServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Add a New Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "List your professional services and start receiving client inquiries");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 4)(9, "div", 5);
      \u0275\u0275template(10, AddServiceComponent_div_10_Template, 5, 1, "div", 6)(11, AddServiceComponent_div_11_Template, 5, 1, "div", 7)(12, AddServiceComponent_form_12_Template, 49, 24, "form", 8);
      \u0275\u0275elementStart(13, "div", 9)(14, "h3");
      \u0275\u0275text(15, "Tips for a Great Service Listing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "ul")(17, "li");
      \u0275\u0275text(18, "Use a clear, descriptive service name that clients will easily understand");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "li");
      \u0275\u0275text(20, "Provide detailed information about what's included in your service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "li");
      \u0275\u0275text(22, "Be specific about your experience and qualifications");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(23, "li");
      \u0275\u0275text(24, "Update your service regularly with new information or changes");
      \u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.serviceForm);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule], styles: ["\n\n.add-service-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.add-service-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 1rem 0;\n  font-weight: 600;\n}\n.add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.add-service-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 3rem 1rem;\n}\n.add-service-section[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: inherit;\n  padding: 0;\n  margin-left: 1rem;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 150px;\n}\n.form-group[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.form-group[_ngcontent-%COMP%]   .char-count[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 0.875rem;\n  color: #999;\n  margin-top: 0.25rem;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox].is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #555;\n  line-height: 1.5;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #eee;\n}\n@media (max-width: 600px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 0.75rem;\n  }\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #333;\n  border: 2px solid #ddd;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f0f0;\n  border-color: #999;\n}\n@media (max-width: 600px) {\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.form-tips[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-left: 4px solid #667eea;\n  border-radius: 6px;\n}\n.form-tips[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.5rem;\n  color: #555;\n  line-height: 1.8;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .add-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .add-service-section[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n.optional-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.hint-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n.price-input-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 14px;\n  border-right: 1px solid #d1d5db;\n  height: 42px;\n  display: flex;\n  align-items: center;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .price-input[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0;\n  flex: 1;\n}\n/*# sourceMappingURL=add-service.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddServiceComponent, [{
    type: Component,
    args: [{ selector: "app-add-service", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule], template: `<div class="add-service-wrapper">\r
  <!-- Hero Section -->\r
  <section class="add-service-hero">\r
    <div class="hero-content">\r
      <h1>Add a New Service</h1>\r
      <p>List your professional services and start receiving client inquiries</p>\r
    </div>\r
  </section>\r
\r
  <!-- Form Section -->\r
  <section class="add-service-section">\r
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
        <form *ngIf="serviceForm" [formGroup]="serviceForm" (ngSubmit)="onSubmit()">\r
          <!-- Service Name -->\r
          <div class="form-group">\r
            <label for="name">Service Name *</label>\r
            <input\r
              type="text"\r
              id="name"\r
              formControlName="name"\r
              placeholder="e.g., Plumbing Installation"\r
              class="form-control"\r
              [class.is-invalid]="(submitted || f['name'].touched) && f['name'].errors"\r
            />\r
            <small *ngIf="(submitted || f['name'].touched) && f['name'].errors" class="error-text">\r
              <span *ngIf="f['name'].errors['required']">Service name is required</span>\r
              <span *ngIf="f['name'].errors['minlength']">Service name must be at least 5 characters</span>\r
              <span *ngIf="f['name'].errors['maxlength']">Service name must not exceed 100 characters</span>\r
            </small>\r
          </div>\r
\r
          <!-- Service Description -->\r
          <div class="form-group">\r
            <label for="description">Service Description *</label>\r
            <textarea\r
              id="description"\r
              formControlName="description"\r
              placeholder="Describe your service in detail. What services do you offer? What are your qualifications?"\r
              class="form-control textarea"\r
              rows="8"\r
              [class.is-invalid]="(submitted || f['description'].touched) && f['description'].errors"\r
            ></textarea>\r
            <div class="char-count">\r
              {{ serviceForm.get('description')?.value?.length || 0 }} / 2000 characters\r
            </div>\r
            <small *ngIf="(submitted || f['description'].touched) && f['description'].errors" class="error-text">\r
              <span *ngIf="f['description'].errors['required']">Service description is required</span>\r
              <span *ngIf="f['description'].errors['minlength']">Description must be at least 20 characters</span>\r
              <span *ngIf="f['description'].errors['maxlength']">Description must not exceed 2000 characters</span>\r
            </small>\r
          </div>\r
\r
          <!-- Service Price -->\r
          <div class="form-group">\r
            <label for="price">Starting Price (\u20B9) *</label>\r
            <div class="price-input-wrapper">\r
              <span class="currency">\u20B9</span>\r
              <input\r
                type="number"\r
                id="price"\r
                formControlName="price"\r
                placeholder="e.g., 500"\r
                class="form-control price-input"\r
                step="1"\r
                min="1"\r
                [class.is-invalid]="(submitted || f['price'].touched) && f['price'].errors"\r
              />\r
            </div>\r
            <small *ngIf="(submitted || f['price'].touched) && f['price'].errors" class="error-text">\r
              <span *ngIf="f['price'].errors['required']">Price is required</span>\r
              <span *ngIf="f['price'].errors['min']">Price must be greater than 0</span>\r
            </small>\r
          </div>\r
\r
          <!-- Service Category -->\r
          <div class="form-group">\r
            <label for="serviceCategoryId">Service Category *</label>\r
            <select\r
              id="serviceCategoryId"\r
              formControlName="serviceCategoryId"\r
              class="form-control"\r
              [class.is-invalid]="(submitted || f['serviceCategoryId'].touched) && f['serviceCategoryId'].errors"\r
            >\r
              <option value="">-- Select a Category --</option>\r
              <option *ngFor="let category of categories" [value]="category.id">\r
                {{ category.icon }} {{ category.name }}\r
              </option>\r
            </select>\r
            <small *ngIf="(submitted || f['serviceCategoryId'].touched) && f['serviceCategoryId'].errors" class="error-text">\r
              <span *ngIf="f['serviceCategoryId'].errors['required']">Please select a service category</span>\r
            </small>\r
          </div>\r
\r
          <!-- Service Photo URL (Optional) -->\r
          <div class="form-group">\r
            <label for="imageUrl">Service Photo URL <span class="optional-label">(optional)</span></label>\r
            <input\r
              type="url"\r
              id="imageUrl"\r
              formControlName="imageUrl"\r
              placeholder="https://example.com/your-photo.jpg"\r
              class="form-control"\r
              [class.is-invalid]="(submitted || f['imageUrl'].touched) && f['imageUrl'].errors"\r
            />\r
            <small class="hint-text">Paste a direct link to a photo that best represents your service</small>\r
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
              (click)="resetForm()"\r
              [disabled]="submitted"\r
            >\r
              Clear Form\r
            </button>\r
            <button\r
              type="submit"\r
              class="btn btn-primary"\r
              [disabled]="submitted"\r
            >\r
              <span *ngIf="!submitted">Add Service</span>\r
              <span *ngIf="submitted">Adding Service...</span>\r
            </button>\r
          </div>\r
        </form>\r
\r
        <!-- Form Tips -->\r
        <div class="form-tips">\r
          <h3>Tips for a Great Service Listing</h3>\r
          <ul>\r
            <li>Use a clear, descriptive service name that clients will easily understand</li>\r
            <li>Provide detailed information about what's included in your service</li>\r
            <li>Be specific about your experience and qualifications</li>\r
            <li>Update your service regularly with new information or changes</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/features/add-service/add-service.scss */\n.add-service-wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.add-service-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.add-service-hero .hero-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.add-service-hero .hero-content h1 {\n  font-size: 2.5rem;\n  margin: 0 0 1rem 0;\n  font-weight: 600;\n}\n.add-service-hero .hero-content p {\n  font-size: 1.1rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.add-service-section {\n  flex: 1;\n  padding: 3rem 1rem;\n}\n.add-service-section .section-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.form-wrapper {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .form-wrapper {\n    padding: 1.5rem;\n  }\n}\n.alert {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n}\n.alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert .dismiss-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: inherit;\n  padding: 0;\n  margin-left: 1rem;\n}\n.alert .dismiss-btn:hover {\n  opacity: 0.7;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 1rem;\n}\n.form-group .form-control {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group .form-control.is-invalid {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.form-group .form-control.textarea {\n  resize: vertical;\n  min-height: 150px;\n}\n.form-group .error-text {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.form-group .char-count {\n  text-align: right;\n  font-size: 0.875rem;\n  color: #999;\n  margin-top: 0.25rem;\n}\n.checkbox-group .checkbox-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0;\n}\n.checkbox-group .checkbox-label input[type=checkbox] {\n  margin-top: 0.25rem;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.checkbox-group .checkbox-label input[type=checkbox].is-invalid {\n  border-color: #dc3545;\n}\n.checkbox-group .checkbox-label span {\n  color: #555;\n  line-height: 1.5;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #eee;\n}\n@media (max-width: 600px) {\n  .form-actions {\n    flex-direction: column-reverse;\n    gap: 0.75rem;\n  }\n}\n.form-actions button {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.form-actions button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-actions button.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.form-actions button.btn-primary:hover:not(:disabled) {\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.form-actions button.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.form-actions button.btn-secondary {\n  background: #f5f5f5;\n  color: #333;\n  border: 2px solid #ddd;\n}\n.form-actions button.btn-secondary:hover:not(:disabled) {\n  background: #f0f0f0;\n  border-color: #999;\n}\n@media (max-width: 600px) {\n  .form-actions button {\n    width: 100%;\n  }\n}\n.form-tips {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-left: 4px solid #667eea;\n  border-radius: 6px;\n}\n.form-tips h3 {\n  margin-top: 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.form-tips ul {\n  margin: 0;\n  padding-left: 1.5rem;\n  color: #555;\n  line-height: 1.8;\n}\n.form-tips ul li {\n  margin-bottom: 0.75rem;\n}\n.form-tips ul li:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .add-service-hero .hero-content h1 {\n    font-size: 1.75rem;\n  }\n  .add-service-hero .hero-content p {\n    font-size: 1rem;\n  }\n  .add-service-section {\n    padding: 2rem 1rem;\n  }\n}\n.optional-label {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.hint-text {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n.price-input-wrapper {\n  display: flex;\n  align-items: center;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  overflow: hidden;\n}\n.price-input-wrapper .currency {\n  padding: 0 10px;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 14px;\n  border-right: 1px solid #d1d5db;\n  height: 42px;\n  display: flex;\n  align-items: center;\n}\n.price-input-wrapper .price-input {\n  border: none;\n  border-radius: 0;\n  flex: 1;\n}\n/*# sourceMappingURL=add-service.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: MyServicesService }, { type: ServiceCategoryService }, { type: Auth }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AddServiceComponent, { className: "AddServiceComponent", filePath: "src/app/features/add-service/add-service.ts", lineNumber: 18 });
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
//# sourceMappingURL=chunk-6TDAI4QH.js.map

