import {
  MyServicesService
} from "./chunk-YVFMDLNK.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XDOJRKTW.js";
import "./chunk-XBTNCZLM.js";
import "./chunk-24VDEUMT.js";
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
  ActivatedRoute,
  Router,
  RouterLink,
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

// src/app/features/edit-service/edit-service.ts
function EditServiceComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function EditServiceComponent_div_10_Template_button_click_3_listener() {
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
function EditServiceComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 12);
    \u0275\u0275listener("click", function EditServiceComponent_div_11_Template_button_click_3_listener() {
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
function EditServiceComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading service details...");
    \u0275\u0275elementEnd()();
  }
}
function EditServiceComponent_form_13_small_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Service name is required");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_5_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Service name must be at least 5 characters");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_5_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Service name must not exceed 100 characters");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275template(1, EditServiceComponent_form_13_small_5_span_1_Template, 2, 0, "span", 41)(2, EditServiceComponent_form_13_small_5_span_2_Template, 2, 0, "span", 41)(3, EditServiceComponent_form_13_small_5_span_3_Template, 2, 0, "span", 41);
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
function EditServiceComponent_form_13_small_12_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Service description is required");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_12_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Description must be at least 20 characters");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_12_span_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Description must not exceed 2000 characters");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275template(1, EditServiceComponent_form_13_small_12_span_1_Template, 2, 0, "span", 41)(2, EditServiceComponent_form_13_small_12_span_2_Template, 2, 0, "span", 41)(3, EditServiceComponent_form_13_small_12_span_3_Template, 2, 0, "span", 41);
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
function EditServiceComponent_form_13_option_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 43);
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
function EditServiceComponent_form_13_small_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Please select a service category");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275template(1, EditServiceComponent_form_13_small_20_span_1_Template, 2, 0, "span", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.f["serviceCategoryId"].errors["required"]);
  }
}
function EditServiceComponent_form_13_small_28_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Price is required");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_28_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Price must be greater than 0");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_small_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275template(1, EditServiceComponent_form_13_small_28_span_1_Template, 2, 0, "span", 41)(2, EditServiceComponent_form_13_small_28_span_2_Template, 2, 0, "span", 41);
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
function EditServiceComponent_form_13_small_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 42);
    \u0275\u0275text(1, " You must agree to the Terms of Service ");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Update Service");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Updating Service...");
    \u0275\u0275elementEnd();
  }
}
function EditServiceComponent_form_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 15);
    \u0275\u0275listener("ngSubmit", function EditServiceComponent_form_13_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onSubmit());
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "label", 17);
    \u0275\u0275text(3, "Service Name *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 18);
    \u0275\u0275template(5, EditServiceComponent_form_13_small_5_Template, 4, 3, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16)(7, "label", 20);
    \u0275\u0275text(8, "Service Description *");
    \u0275\u0275elementEnd();
    \u0275\u0275element(9, "textarea", 21);
    \u0275\u0275elementStart(10, "div", 22);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, EditServiceComponent_form_13_small_12_Template, 4, 3, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 16)(14, "label", 23);
    \u0275\u0275text(15, "Service Category *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "select", 24)(17, "option", 25);
    \u0275\u0275text(18, "-- Select a Category --");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EditServiceComponent_form_13_option_19_Template, 2, 3, "option", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, EditServiceComponent_form_13_small_20_Template, 2, 1, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 16)(22, "label", 27);
    \u0275\u0275text(23, "Starting Price (\u20B9) *");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 28)(25, "span", 29);
    \u0275\u0275text(26, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275element(27, "input", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, EditServiceComponent_form_13_small_28_Template, 3, 2, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 16)(30, "label", 31);
    \u0275\u0275text(31, "Service Photo URL ");
    \u0275\u0275elementStart(32, "span", 32);
    \u0275\u0275text(33, "(optional)");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(34, "input", 33);
    \u0275\u0275elementStart(35, "small", 34);
    \u0275\u0275text(36, "Paste a direct link to a photo that best represents your service");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 35)(38, "label", 36);
    \u0275\u0275element(39, "input", 37);
    \u0275\u0275elementStart(40, "span");
    \u0275\u0275text(41, "I agree to the Terms of Service and confirm that all information provided is accurate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(42, EditServiceComponent_form_13_small_42_Template, 2, 0, "small", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 38)(44, "button", 39);
    \u0275\u0275text(45, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "button", 40);
    \u0275\u0275template(47, EditServiceComponent_form_13_span_47_Template, 2, 0, "span", 41)(48, EditServiceComponent_form_13_span_48_Template, 2, 0, "span", 41);
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
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["serviceCategoryId"].touched) && ctx_r1.f["serviceCategoryId"].errors);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.categories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["serviceCategoryId"].touched) && ctx_r1.f["serviceCategoryId"].errors);
    \u0275\u0275advance(7);
    \u0275\u0275classProp("is-invalid", (ctx_r1.submitted || ctx_r1.f["price"].touched) && ctx_r1.f["price"].errors);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r1.submitted || ctx_r1.f["price"].touched) && ctx_r1.f["price"].errors);
    \u0275\u0275advance(11);
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
function EditServiceComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3");
    \u0275\u0275text(2, "Tips for Updating Your Service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul")(4, "li");
    \u0275\u0275text(5, "Keep your service name clear and descriptive");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "Update your description if you've expanded your services");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "Adjust pricing based on market changes and your experience");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "Review and update regularly to maintain visibility");
    \u0275\u0275elementEnd()()();
  }
}
var EditServiceComponent = class _EditServiceComponent {
  fb;
  router;
  route;
  myServicesService;
  serviceCategoryService;
  auth;
  cdr;
  serviceForm;
  submitted = false;
  successMessage = "";
  errorMessage = "";
  loading = true;
  serviceId;
  categories = [];
  destroy$ = new Subject();
  constructor(fb, router, route, myServicesService, serviceCategoryService, auth, cdr) {
    this.fb = fb;
    this.router = router;
    this.route = route;
    this.myServicesService = myServicesService;
    this.serviceCategoryService = serviceCategoryService;
    this.auth = auth;
    this.cdr = cdr;
  }
  ngOnInit() {
    if (!this.auth.isAuthenticated() || this.auth.getUserType() !== "Pro") {
      this.errorMessage = "You must be logged in as a professional to edit services.";
      this.router.navigate(["/"]);
      return;
    }
    this.loadCategories();
    this.route.params.pipe(takeUntil(this.destroy$)).subscribe({
      next: (params) => {
        this.serviceId = parseInt(params["id"], 10);
        if (!this.serviceId) {
          this.errorMessage = "Invalid service ID.";
          this.loading = false;
          this.cdr.markForCheck();
          return;
        }
        this.loadService();
      },
      error: () => {
        this.errorMessage = "Unable to load service.";
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
  loadService() {
    this.loading = true;
    this.cdr.markForCheck();
    this.myServicesService.getService(this.serviceId).pipe(takeUntil(this.destroy$)).subscribe({
      next: (service) => {
        console.log("Service loaded:", service);
        this.initializeForm(service);
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error loading service:", error);
        this.errorMessage = "Failed to load service. Please try again.";
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  initializeForm(service) {
    this.serviceForm = this.fb.group({
      name: [service.name, [Validators.required, Validators.minLength(5), Validators.maxLength(100)]],
      description: [service.description, [Validators.required, Validators.minLength(20), Validators.maxLength(2e3)]],
      price: [service.price, [Validators.required, Validators.min(1)]],
      serviceCategoryId: [service.serviceCategoryId || "", Validators.required],
      imageUrl: [service.imageUrl || ""],
      agreeToTerms: [true, Validators.required]
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
      this.errorMessage = "You must agree to the Terms of Service to update a service.";
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
      id: this.serviceId,
      name: this.serviceForm.value.name,
      description: this.serviceForm.value.description,
      price: parseFloat(this.serviceForm.value.price),
      imageUrl: this.serviceForm.value.imageUrl?.trim() || null,
      serviceCategoryId: this.serviceForm.value.serviceCategoryId ? parseInt(this.serviceForm.value.serviceCategoryId, 10) : null,
      proId: parseInt(proId, 10)
    };
    console.log("Updating Service:", serviceData);
    this.myServicesService.updateService(this.serviceId, serviceData).pipe(takeUntil(this.destroy$)).subscribe({
      next: (response) => {
        console.log("Service updated successfully:", response);
        this.successMessage = "Your service has been updated successfully!";
        setTimeout(() => {
          this.router.navigate(["/my-services"]);
        }, 2e3);
      },
      error: (error) => {
        console.error("Error updating service:", error);
        this.errorMessage = error?.error?.message || "Error updating service. Please try again.";
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
  static \u0275fac = function EditServiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditServiceComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MyServicesService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EditServiceComponent, selectors: [["app-edit-service"]], decls: 15, vars: 5, consts: [[1, "edit-service-wrapper"], [1, "edit-service-hero"], [1, "hero-content"], [1, "edit-service-section"], [1, "section-container"], [1, "form-wrapper"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], [3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "form-tips", 4, "ngIf"], [1, "alert", "alert-success"], [1, "dismiss-btn", 3, "click"], [1, "alert", "alert-error"], [1, "loading-container"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "e.g., Plumbing Installation", 1, "form-control"], ["class", "error-text", 4, "ngIf"], ["for", "description"], ["id", "description", "formControlName", "description", "placeholder", "Describe your service in detail. What services do you offer? What are your qualifications?", "rows", "8", 1, "form-control", "textarea"], [1, "char-count"], ["for", "serviceCategoryId"], ["id", "serviceCategoryId", "formControlName", "serviceCategoryId", 1, "form-control"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "price"], [1, "price-input-wrapper"], [1, "currency"], ["type", "number", "id", "price", "formControlName", "price", "placeholder", "e.g., 500", "step", "1", "min", "1", 1, "form-control", "price-input"], ["for", "imageUrl"], [1, "optional-label"], ["type", "url", "id", "imageUrl", "formControlName", "imageUrl", "placeholder", "https://example.com/your-photo.jpg", 1, "form-control"], [1, "hint-text"], [1, "form-group", "checkbox-group"], [1, "checkbox-label"], ["type", "checkbox", "formControlName", "agreeToTerms"], [1, "form-actions"], ["type", "button", "routerLink", "/my-services", 1, "btn", "btn-secondary"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled"], [4, "ngIf"], [1, "error-text"], [3, "value"], [1, "form-tips"]], template: function EditServiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Edit Service");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Update your professional service details");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 4)(9, "div", 5);
      \u0275\u0275template(10, EditServiceComponent_div_10_Template, 5, 1, "div", 6)(11, EditServiceComponent_div_11_Template, 5, 1, "div", 7)(12, EditServiceComponent_div_12_Template, 4, 0, "div", 8)(13, EditServiceComponent_form_13_Template, 49, 21, "form", 9)(14, EditServiceComponent_div_14_Template, 12, 0, "div", 10);
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
      \u0275\u0275property("ngIf", ctx.serviceForm && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, ReactiveFormsModule, FormGroupDirective, FormControlName, RouterModule, RouterLink, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.edit-service-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.edit-service-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.edit-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.edit-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  margin: 0 0 1rem 0;\n  font-weight: 600;\n}\n.edit-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.edit-service-section[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 3rem 1rem;\n}\n.edit-service-section[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.form-wrapper[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .form-wrapper[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: inherit;\n  padding: 0;\n  margin-left: 1rem;\n}\n.alert[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.7;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  gap: 1rem;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 1rem;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.form-group[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   .form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.form-group[_ngcontent-%COMP%]   .form-control.textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 150px;\n}\n.form-group[_ngcontent-%COMP%]   .error-text[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.form-group[_ngcontent-%COMP%]   .char-count[_ngcontent-%COMP%] {\n  text-align: right;\n  font-size: 0.875rem;\n  color: #999;\n  margin-top: 0.25rem;\n}\n.price-input-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .currency[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0.75rem;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #667eea;\n}\n.price-input-wrapper[_ngcontent-%COMP%]   .price-input[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   input[type=checkbox].is-invalid[_ngcontent-%COMP%] {\n  border-color: #dc3545;\n}\n.checkbox-group[_ngcontent-%COMP%]   .checkbox-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #555;\n  line-height: 1.5;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #eee;\n}\n@media (max-width: 600px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n    gap: 0.75rem;\n  }\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-primary[_ngcontent-%COMP%]:active:not(:disabled) {\n  transform: translateY(0);\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #333;\n  border: 2px solid #ddd;\n}\n.form-actions[_ngcontent-%COMP%]   button.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f0f0f0;\n  border-color: #999;\n}\n@media (max-width: 600px) {\n  .form-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n.form-tips[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-left: 4px solid #667eea;\n  border-radius: 6px;\n}\n.form-tips[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin-top: 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.5rem;\n  color: #555;\n  line-height: 1.8;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.form-tips[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .edit-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .edit-service-hero[_ngcontent-%COMP%]   .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1rem;\n  }\n  .edit-service-section[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n}\n.optional-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.hint-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n/*# sourceMappingURL=edit-service.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditServiceComponent, [{
    type: Component,
    args: [{ selector: "app-edit-service", standalone: true, imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MatProgressSpinnerModule], template: `<div class="edit-service-wrapper">\r
  <!-- Hero Section -->\r
  <section class="edit-service-hero">\r
    <div class="hero-content">\r
      <h1>Edit Service</h1>\r
      <p>Update your professional service details</p>\r
    </div>\r
  </section>\r
\r
  <!-- Form Section -->\r
  <section class="edit-service-section">\r
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
          <p>Loading service details...</p>\r
        </div>\r
\r
        <form *ngIf="serviceForm && !loading" [formGroup]="serviceForm" (ngSubmit)="onSubmit()">\r
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
          <!-- Service Photo URL (Optional) -->\r
          <div class="form-group">\r
            <label for="imageUrl">Service Photo URL <span class="optional-label">(optional)</span></label>\r
            <input\r
              type="url"\r
              id="imageUrl"\r
              formControlName="imageUrl"\r
              placeholder="https://example.com/your-photo.jpg"\r
              class="form-control"\r
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
              routerLink="/my-services"\r
            >\r
              Cancel\r
            </button>\r
            <button\r
              type="submit"\r
              class="btn btn-primary"\r
              [disabled]="submitted"\r
            >\r
              <span *ngIf="!submitted">Update Service</span>\r
              <span *ngIf="submitted">Updating Service...</span>\r
            </button>\r
          </div>\r
        </form>\r
\r
        <!-- Form Tips -->\r
        <div *ngIf="!loading" class="form-tips">\r
          <h3>Tips for Updating Your Service</h3>\r
          <ul>\r
            <li>Keep your service name clear and descriptive</li>\r
            <li>Update your description if you've expanded your services</li>\r
            <li>Adjust pricing based on market changes and your experience</li>\r
            <li>Review and update regularly to maintain visibility</li>\r
          </ul>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/features/edit-service/edit-service.scss */\n.edit-service-wrapper {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #f5f7fa 0%,\n      #c3cfe2 100%);\n}\n.edit-service-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 3rem 1rem;\n  text-align: center;\n}\n.edit-service-hero .hero-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.edit-service-hero .hero-content h1 {\n  font-size: 2.5rem;\n  margin: 0 0 1rem 0;\n  font-weight: 600;\n}\n.edit-service-hero .hero-content p {\n  font-size: 1.1rem;\n  margin: 0;\n  opacity: 0.9;\n}\n.edit-service-section {\n  flex: 1;\n  padding: 3rem 1rem;\n}\n.edit-service-section .section-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.form-wrapper {\n  background: white;\n  border-radius: 12px;\n  padding: 2rem;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);\n}\n@media (max-width: 768px) {\n  .form-wrapper {\n    padding: 1.5rem;\n  }\n}\n.alert {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 1rem;\n}\n.alert.alert-success {\n  background-color: #d4edda;\n  color: #155724;\n  border: 1px solid #c3e6cb;\n}\n.alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.alert .dismiss-btn {\n  background: none;\n  border: none;\n  font-size: 1.5rem;\n  cursor: pointer;\n  color: inherit;\n  padding: 0;\n  margin-left: 1rem;\n}\n.alert .dismiss-btn:hover {\n  opacity: 0.7;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-height: 300px;\n  gap: 1rem;\n}\n.loading-container p {\n  color: #666;\n  font-size: 1.1rem;\n}\n.form-group {\n  margin-bottom: 1.5rem;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 0.5rem;\n  font-weight: 500;\n  color: #333;\n  font-size: 1rem;\n}\n.form-group .form-control {\n  width: 100%;\n  padding: 0.75rem;\n  border: 2px solid #e0e0e0;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-family: inherit;\n  transition: border-color 0.3s ease, box-shadow 0.3s ease;\n}\n.form-group .form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group .form-control.is-invalid {\n  border-color: #dc3545;\n  background-color: #fff5f5;\n}\n.form-group .form-control.textarea {\n  resize: vertical;\n  min-height: 150px;\n}\n.form-group .error-text {\n  display: block;\n  color: #dc3545;\n  font-size: 0.875rem;\n  margin-top: 0.25rem;\n}\n.form-group .char-count {\n  text-align: right;\n  font-size: 0.875rem;\n  color: #999;\n  margin-top: 0.25rem;\n}\n.price-input-wrapper {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n.price-input-wrapper .currency {\n  position: absolute;\n  left: 0.75rem;\n  font-weight: 600;\n  font-size: 1.1rem;\n  color: #667eea;\n}\n.price-input-wrapper .price-input {\n  padding-left: 2rem;\n}\n.checkbox-group .checkbox-label {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  cursor: pointer;\n  font-weight: normal;\n  margin-bottom: 0;\n}\n.checkbox-group .checkbox-label input[type=checkbox] {\n  margin-top: 0.25rem;\n  cursor: pointer;\n  width: 18px;\n  height: 18px;\n}\n.checkbox-group .checkbox-label input[type=checkbox].is-invalid {\n  border-color: #dc3545;\n}\n.checkbox-group .checkbox-label span {\n  color: #555;\n  line-height: 1.5;\n}\n.form-actions {\n  display: flex;\n  gap: 1rem;\n  justify-content: flex-end;\n  margin-top: 2rem;\n  padding-top: 2rem;\n  border-top: 1px solid #eee;\n}\n@media (max-width: 600px) {\n  .form-actions {\n    flex-direction: column-reverse;\n    gap: 0.75rem;\n  }\n}\n.form-actions button {\n  padding: 0.75rem 2rem;\n  border: none;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.form-actions button:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.form-actions button.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n}\n.form-actions button.btn-primary:hover:not(:disabled) {\n  box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.form-actions button.btn-primary:active:not(:disabled) {\n  transform: translateY(0);\n}\n.form-actions button.btn-secondary {\n  background: #f5f5f5;\n  color: #333;\n  border: 2px solid #ddd;\n}\n.form-actions button.btn-secondary:hover:not(:disabled) {\n  background: #f0f0f0;\n  border-color: #999;\n}\n@media (max-width: 600px) {\n  .form-actions button {\n    width: 100%;\n  }\n}\n.form-tips {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background: #f8f9fa;\n  border-left: 4px solid #667eea;\n  border-radius: 6px;\n}\n.form-tips h3 {\n  margin-top: 0;\n  color: #667eea;\n  font-size: 1.1rem;\n}\n.form-tips ul {\n  margin: 0;\n  padding-left: 1.5rem;\n  color: #555;\n  line-height: 1.8;\n}\n.form-tips ul li {\n  margin-bottom: 0.75rem;\n}\n.form-tips ul li:last-child {\n  margin-bottom: 0;\n}\n@media (max-width: 768px) {\n  .edit-service-hero .hero-content h1 {\n    font-size: 1.75rem;\n  }\n  .edit-service-hero .hero-content p {\n    font-size: 1rem;\n  }\n  .edit-service-section {\n    padding: 2rem 1rem;\n  }\n}\n.optional-label {\n  font-size: 12px;\n  color: #6b7280;\n  font-weight: 400;\n}\n.hint-text {\n  font-size: 12px;\n  color: #6b7280;\n  margin-top: 4px;\n  display: block;\n}\n/*# sourceMappingURL=edit-service.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: Router }, { type: ActivatedRoute }, { type: MyServicesService }, { type: ServiceCategoryService }, { type: Auth }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EditServiceComponent, { className: "EditServiceComponent", filePath: "src/app/features/edit-service/edit-service.ts", lineNumber: 19 });
})();

// src/app/features/edit-service/edit-service-routing-module.ts
var routes = [
  { path: "", component: EditServiceComponent }
];
var EditServiceRoutingModule = class _EditServiceRoutingModule {
  static \u0275fac = function EditServiceRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditServiceRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EditServiceRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditServiceRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/edit-service/edit-service-module.ts
var EditServiceModule = class _EditServiceModule {
  static \u0275fac = function EditServiceModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _EditServiceModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _EditServiceModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    EditServiceRoutingModule,
    EditServiceComponent
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EditServiceModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        EditServiceRoutingModule,
        EditServiceComponent
      ]
    }]
  }], null, null);
})();
export {
  EditServiceModule
};
//# sourceMappingURL=chunk-CKQAMUKF.js.map

