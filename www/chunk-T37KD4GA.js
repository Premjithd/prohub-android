import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-WDBRP2V4.js";
import {
  MatCardModule
} from "./chunk-OCV7UR27.js";
import {
  MatError,
  MatFormField,
  MatLabel,
  MatSuffix
} from "./chunk-XYJWITZW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XDOJRKTW.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-KQMSNT2S.js";
import "./chunk-XBTNCZLM.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-Z4HON7ZA.js";
import "./chunk-24VDEUMT.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DLR4BDQH.js";
import {
  Auth
} from "./chunk-MJ2Z243I.js";
import "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-Z7MI56JG.js";
import {
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
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
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/accept-admin-invite/accept-admin-invite.ts
function AcceptAdminInviteComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function AcceptAdminInviteComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function AcceptAdminInviteComponent_form_12_mat_error_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Confirm Password is required ");
    \u0275\u0275elementEnd();
  }
}
function AcceptAdminInviteComponent_form_12_mat_error_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, " Passwords do not match ");
    \u0275\u0275elementEnd();
  }
}
function AcceptAdminInviteComponent_form_12_mat_icon_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function AcceptAdminInviteComponent_form_12_mat_spinner_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 22);
  }
}
function AcceptAdminInviteComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function AcceptAdminInviteComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submitForm());
    });
    \u0275\u0275elementStart(1, "mat-form-field", 13)(2, "mat-label");
    \u0275\u0275text(3, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "input", 14);
    \u0275\u0275elementStart(5, "mat-error");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 13)(8, "mat-label");
    \u0275\u0275text(9, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "input", 15);
    \u0275\u0275elementStart(11, "mat-error");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "mat-form-field", 13)(14, "mat-label");
    \u0275\u0275text(15, "Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "input", 16);
    \u0275\u0275elementStart(17, "button", 17);
    \u0275\u0275listener("click", function AcceptAdminInviteComponent_form_12_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePasswordVisibility());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-error");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "mat-form-field", 13)(23, "mat-label");
    \u0275\u0275text(24, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "input", 18);
    \u0275\u0275elementStart(26, "button", 17);
    \u0275\u0275listener("click", function AcceptAdminInviteComponent_form_12_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.toggleConfirmPasswordVisibility());
    });
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(29, AcceptAdminInviteComponent_form_12_mat_error_29_Template, 2, 0, "mat-error", 19)(30, AcceptAdminInviteComponent_form_12_mat_error_30_Template, 2, 0, "mat-error", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 20);
    \u0275\u0275template(32, AcceptAdminInviteComponent_form_12_mat_icon_32_Template, 2, 0, "mat-icon", 19)(33, AcceptAdminInviteComponent_form_12_mat_spinner_33_Template, 1, 0, "mat-spinner", 21);
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_15_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.invitationForm);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("firstName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("lastName"));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r0.showPassword ? "text" : "password")("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getFieldError("password"));
    \u0275\u0275advance(4);
    \u0275\u0275property("type", ctx_r0.showConfirmPassword ? "text" : "password")("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.showConfirmPassword ? "visibility_off" : "visibility");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_15_0 = ctx_r0.invitationForm.get("confirmPassword")) == null ? null : tmp_15_0.errors == null ? null : tmp_15_0.errors["required"]);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.invitationForm.errors == null ? null : ctx_r0.invitationForm.errors["passwordMismatch"]);
    \u0275\u0275advance();
    \u0275\u0275classProp("loading", ctx_r0.isProcessing);
    \u0275\u0275property("disabled", !ctx_r0.canSubmit());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isProcessing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isProcessing);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isProcessing ? "Creating Account..." : "Create Admin Account");
  }
}
function AcceptAdminInviteComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "h3");
    \u0275\u0275text(2, "What to expect:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul")(4, "li");
    \u0275\u0275text(5, "Create a unique password for your admin account");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "li");
    \u0275\u0275text(7, "Your first and last name will be displayed in the admin panel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "li");
    \u0275\u0275text(9, "You'll have full access to the admin dashboard");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "li");
    \u0275\u0275text(11, "This invitation link can only be used once");
    \u0275\u0275elementEnd()()();
  }
}
var AcceptAdminInviteComponent = class _AcceptAdminInviteComponent {
  fb;
  authService;
  route;
  router;
  invitationForm;
  isLoading = false;
  isProcessing = false;
  errorMessage = "";
  successMessage = "";
  invitationToken = "";
  showPassword = false;
  showConfirmPassword = false;
  constructor(fb, authService, route, router) {
    this.fb = fb;
    this.authService = authService;
    this.route = route;
    this.router = router;
    this.initializeForm();
  }
  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.invitationToken = params["token"] || "";
      console.log("Invitation token from URL:", this.invitationToken ? "Present" : "Missing");
      if (!this.invitationToken) {
        this.errorMessage = "No invitation token provided. Please use the link from your invitation email.";
      }
    });
  }
  initializeForm() {
    this.invitationForm = this.fb.group({
      firstName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      lastName: ["", [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      password: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(255)]],
      confirmPassword: ["", [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }
  passwordMatchValidator(group) {
    const password = group.get("password")?.value;
    const confirmPassword = group.get("confirmPassword")?.value;
    if (password && confirmPassword && password !== confirmPassword) {
      return { passwordMismatch: true };
    }
    return null;
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  toggleConfirmPasswordVisibility() {
    this.showConfirmPassword = !this.showConfirmPassword;
  }
  submitForm() {
    if (!this.invitationForm.valid) {
      this.errorMessage = "Please fill out all required fields correctly";
      return;
    }
    if (!this.invitationToken) {
      this.errorMessage = "Invalid or missing invitation token";
      return;
    }
    this.isProcessing = true;
    this.errorMessage = "";
    this.successMessage = "";
    const { firstName, lastName, password } = this.invitationForm.value;
    this.authService.acceptAdminInvitation(this.invitationToken, firstName, lastName, password).subscribe({
      next: (response) => {
        console.log("Invitation accepted successfully:", response);
        this.successMessage = "Welcome! Your admin account has been created successfully. Redirecting...";
        this.isProcessing = false;
        setTimeout(() => {
          this.router.navigate(["/admin-users"]);
        }, 2e3);
      },
      error: (error) => {
        console.error("Error accepting invitation:", error);
        this.isProcessing = false;
        if (error.status === 400) {
          const errorData = error.error;
          if (typeof errorData === "string") {
            this.errorMessage = errorData;
          } else if (errorData.message) {
            this.errorMessage = errorData.message;
          } else {
            this.errorMessage = "Invalid invitation or the invitation has expired. Please request a new invitation.";
          }
        } else if (error.status === 404) {
          this.errorMessage = "Invitation not found. Please check your invitation link.";
        } else if (error.status === 409) {
          this.errorMessage = "This email is already registered as an admin. Please use a different account.";
        } else {
          this.errorMessage = "An error occurred while processing your invitation. Please try again later.";
        }
      }
    });
  }
  getFieldError(fieldName) {
    const field = this.invitationForm.get(fieldName);
    if (!field || !field.errors || !field.touched) {
      return "";
    }
    if (field.errors["required"]) {
      return `${this.formatFieldName(fieldName)} is required`;
    }
    if (field.errors["minlength"]) {
      const minLength = field.errors["minlength"].requiredLength;
      return `${this.formatFieldName(fieldName)} must be at least ${minLength} characters`;
    }
    if (field.errors["maxlength"]) {
      const maxLength = field.errors["maxlength"].requiredLength;
      return `${this.formatFieldName(fieldName)} cannot exceed ${maxLength} characters`;
    }
    return "";
  }
  formatFieldName(fieldName) {
    return fieldName.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase()).trim();
  }
  canSubmit() {
    return this.invitationForm.valid && !!this.invitationToken && !this.isProcessing;
  }
  static \u0275fac = function AcceptAdminInviteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcceptAdminInviteComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcceptAdminInviteComponent, selectors: [["app-accept-admin-invite"]], decls: 14, vars: 4, consts: [[1, "accept-invite-container"], [1, "invite-card"], [1, "invite-header"], [1, "header-icon"], [1, "subtitle"], [1, "invite-content"], ["class", "message-box error-box", 4, "ngIf"], ["class", "message-box success-box", 4, "ngIf"], ["class", "invite-form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "invite-info", 4, "ngIf"], [1, "message-box", "error-box"], [1, "message-box", "success-box"], [1, "invite-form", 3, "ngSubmit", "formGroup"], [1, "full-width"], ["matInput", "", "formControlName", "firstName", "type", "text", "placeholder", "Enter your first name", 3, "disabled"], ["matInput", "", "formControlName", "lastName", "type", "text", "placeholder", "Enter your last name", 3, "disabled"], ["matInput", "", "formControlName", "password", "placeholder", "Create a strong password", 3, "type", "disabled"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 1, "visibility-toggle", 3, "click", "disabled"], ["matInput", "", "formControlName", "confirmPassword", "placeholder", "Re-enter your password", 3, "type", "disabled"], [4, "ngIf"], ["type", "submit", "mat-raised-button", "", 1, "submit-btn", 3, "disabled"], ["diameter", "20", 4, "ngIf"], ["diameter", "20"], [1, "invite-info"]], template: function AcceptAdminInviteComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon", 3);
      \u0275\u0275text(4, "shield_admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h1");
      \u0275\u0275text(6, "Accept Admin Invitation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "p", 4);
      \u0275\u0275text(8, "Complete your admin account setup");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "div", 5);
      \u0275\u0275template(10, AcceptAdminInviteComponent_div_10_Template, 5, 1, "div", 6)(11, AcceptAdminInviteComponent_div_11_Template, 5, 1, "div", 7)(12, AcceptAdminInviteComponent_form_12_Template, 36, 22, "form", 8)(13, AcceptAdminInviteComponent_div_13_Template, 12, 0, "div", 9);
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.successMessage);
    }
  }, dependencies: [
    CommonModule,
    NgIf,
    ReactiveFormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    FormGroupDirective,
    FormControlName,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatCardModule,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatError,
    MatSuffix,
    MatIconModule,
    MatIcon,
    MatInputModule,
    MatInput,
    MatProgressSpinnerModule,
    MatProgressSpinner
  ], styles: ['@charset "UTF-8";\n\n\n\n.accept-invite-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1rem;\n}\n.invite-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n  width: 100%;\n  overflow: hidden;\n}\n.invite-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 2.5rem 1.5rem;\n  text-align: center;\n}\n.invite-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n}\n.invite-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1.8rem;\n  font-weight: 700;\n}\n.invite-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.95rem;\n  opacity: 0.9;\n  font-weight: 300;\n}\n.invite-content[_ngcontent-%COMP%] {\n  padding: 2rem 1.5rem;\n}\n.message-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n  font-size: 0.95rem;\n  animation: _ngcontent-%COMP%_slideIn 0.4s ease-out;\n}\n.message-box[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  width: 1.3rem;\n  height: 1.3rem;\n  flex-shrink: 0;\n}\n.message-box.error-box[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n  border-left: 4px solid #c62828;\n}\n.message-box.success-box[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  border-left: 4px solid #2e7d32;\n}\n.invite-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n  .full-width {\n  width: 100%;\n}\n  .full-width .mat-mdc-form-field-focus-overlay {\n  background-color: transparent !important;\n}\n  .full-width .mat-mdc-text-field-wrapper {\n  padding-bottom: 1rem;\n}\n  .mat-mdc-form-field {\n  width: 100%;\n}\n  .mat-mdc-form-field .mdc-text-field {\n  background-color: #f9f9f9;\n}\n  .mat-mdc-form-field .mdc-text-field:hover {\n  background-color: #f5f5f5;\n}\n  .mat-mdc-form-field .mat-mdc-form-field-label {\n  color: #666;\n}\n  .mat-mdc-form-field.mat-focused .mdc-text-field {\n  background-color: white;\n}\n.visibility-toggle[_ngcontent-%COMP%] {\n  color: #666;\n  margin-right: -0.5rem;\n}\n.visibility-toggle[_ngcontent-%COMP%]:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.submit-btn[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 0.75rem 2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 8px;\n  margin-top: 0.5rem;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  height: 3rem;\n}\n.submit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.submit-btn[_ngcontent-%COMP%]:not(:disabled):hover {\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn.loading[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n  .mat-mdc-spinner circle {\n  stroke: white;\n}\n.invite-info[_ngcontent-%COMP%] {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f5f6fa;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n}\n.invite-info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  color: #333;\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n.invite-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 1.5rem;\n  list-style: none;\n}\n.invite-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: relative;\n  padding-left: 1.25rem;\n  margin-bottom: 0.75rem;\n  color: #666;\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n.invite-info[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  color: #667eea;\n  font-weight: 700;\n}\n@keyframes _ngcontent-%COMP%_slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 600px) {\n  .accept-invite-container[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .invite-card[_ngcontent-%COMP%] {\n    max-width: 100%;\n  }\n  .invite-header[_ngcontent-%COMP%] {\n    padding: 2rem 1rem;\n  }\n  .invite-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n  .invite-header[_ngcontent-%COMP%]   .header-icon[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .invite-content[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n  }\n  .submit-btn[_ngcontent-%COMP%] {\n    height: 2.75rem;\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=accept-admin-invite.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AcceptAdminInviteComponent, [{
    type: Component,
    args: [{ selector: "app-accept-admin-invite", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatButtonModule,
      MatCardModule,
      MatFormFieldModule,
      MatIconModule,
      MatInputModule,
      MatProgressSpinnerModule
    ], template: `<div class="accept-invite-container">\r
  <div class="invite-card">\r
    <div class="invite-header">\r
      <mat-icon class="header-icon">shield_admin</mat-icon>\r
      <h1>Accept Admin Invitation</h1>\r
      <p class="subtitle">Complete your admin account setup</p>\r
    </div>\r
\r
    <div class="invite-content">\r
      <!-- Error Message -->\r
      <div *ngIf="errorMessage" class="message-box error-box">\r
        <mat-icon>error_outline</mat-icon>\r
        <span>{{ errorMessage }}</span>\r
      </div>\r
\r
      <!-- Success Message -->\r
      <div *ngIf="successMessage" class="message-box success-box">\r
        <mat-icon>check_circle</mat-icon>\r
        <span>{{ successMessage }}</span>\r
      </div>\r
\r
      <!-- Invitation Form -->\r
      <form [formGroup]="invitationForm" (ngSubmit)="submitForm()" *ngIf="!successMessage" class="invite-form">\r
        <!-- First Name -->\r
        <mat-form-field class="full-width">\r
          <mat-label>First Name</mat-label>\r
          <input\r
            matInput\r
            formControlName="firstName"\r
            type="text"\r
            placeholder="Enter your first name"\r
            [disabled]="isProcessing"\r
          />\r
          <mat-error>{{ getFieldError('firstName') }}</mat-error>\r
        </mat-form-field>\r
\r
        <!-- Last Name -->\r
        <mat-form-field class="full-width">\r
          <mat-label>Last Name</mat-label>\r
          <input\r
            matInput\r
            formControlName="lastName"\r
            type="text"\r
            placeholder="Enter your last name"\r
            [disabled]="isProcessing"\r
          />\r
          <mat-error>{{ getFieldError('lastName') }}</mat-error>\r
        </mat-form-field>\r
\r
        <!-- Password -->\r
        <mat-form-field class="full-width">\r
          <mat-label>Password</mat-label>\r
          <input\r
            matInput\r
            formControlName="password"\r
            [type]="showPassword ? 'text' : 'password'"\r
            placeholder="Create a strong password"\r
            [disabled]="isProcessing"\r
          />\r
          <button\r
            mat-icon-button\r
            matSuffix\r
            type="button"\r
            (click)="togglePasswordVisibility()"\r
            [disabled]="isProcessing"\r
            class="visibility-toggle"\r
          >\r
            <mat-icon>{{ showPassword ? 'visibility_off' : 'visibility' }}</mat-icon>\r
          </button>\r
          <mat-error>{{ getFieldError('password') }}</mat-error>\r
        </mat-form-field>\r
\r
        <!-- Confirm Password -->\r
        <mat-form-field class="full-width">\r
          <mat-label>Confirm Password</mat-label>\r
          <input\r
            matInput\r
            formControlName="confirmPassword"\r
            [type]="showConfirmPassword ? 'text' : 'password'"\r
            placeholder="Re-enter your password"\r
            [disabled]="isProcessing"\r
          />\r
          <button\r
            mat-icon-button\r
            matSuffix\r
            type="button"\r
            (click)="toggleConfirmPasswordVisibility()"\r
            [disabled]="isProcessing"\r
            class="visibility-toggle"\r
          >\r
            <mat-icon>{{ showConfirmPassword ? 'visibility_off' : 'visibility' }}</mat-icon>\r
          </button>\r
          <mat-error *ngIf="invitationForm.get('confirmPassword')?.errors?.['required']">\r
            Confirm Password is required\r
          </mat-error>\r
          <mat-error *ngIf="invitationForm.errors?.['passwordMismatch']">\r
            Passwords do not match\r
          </mat-error>\r
        </mat-form-field>\r
\r
        <!-- Submit Button -->\r
        <button\r
          type="submit"\r
          mat-raised-button\r
          class="submit-btn"\r
          [disabled]="!canSubmit()"\r
          [class.loading]="isProcessing"\r
        >\r
          <mat-icon *ngIf="!isProcessing">check</mat-icon>\r
          <mat-spinner *ngIf="isProcessing" diameter="20"></mat-spinner>\r
          <span>{{ isProcessing ? 'Creating Account...' : 'Create Admin Account' }}</span>\r
        </button>\r
      </form>\r
\r
      <!-- Invitation Info -->\r
      <div *ngIf="!successMessage" class="invite-info">\r
        <h3>What to expect:</h3>\r
        <ul>\r
          <li>Create a unique password for your admin account</li>\r
          <li>Your first and last name will be displayed in the admin panel</li>\r
          <li>You'll have full access to the admin dashboard</li>\r
          <li>This invitation link can only be used once</li>\r
        </ul>\r
      </div>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/accept-admin-invite/accept-admin-invite.scss */\n.accept-invite-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 1rem;\n}\n.invite-card {\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);\n  max-width: 500px;\n  width: 100%;\n  overflow: hidden;\n}\n.invite-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 2.5rem 1.5rem;\n  text-align: center;\n}\n.invite-header .header-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  margin-bottom: 1rem;\n}\n.invite-header h1 {\n  margin: 0 0 0.5rem;\n  font-size: 1.8rem;\n  font-weight: 700;\n}\n.invite-header .subtitle {\n  margin: 0;\n  font-size: 0.95rem;\n  opacity: 0.9;\n  font-weight: 300;\n}\n.invite-content {\n  padding: 2rem 1.5rem;\n}\n.message-box {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  border-radius: 8px;\n  margin-bottom: 1.5rem;\n  font-weight: 500;\n  font-size: 0.95rem;\n  animation: slideIn 0.4s ease-out;\n}\n.message-box mat-icon {\n  font-size: 1.3rem;\n  width: 1.3rem;\n  height: 1.3rem;\n  flex-shrink: 0;\n}\n.message-box.error-box {\n  background-color: #ffebee;\n  color: #c62828;\n  border-left: 4px solid #c62828;\n}\n.message-box.success-box {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  border-left: 4px solid #2e7d32;\n}\n.invite-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n::ng-deep .full-width {\n  width: 100%;\n}\n::ng-deep .full-width .mat-mdc-form-field-focus-overlay {\n  background-color: transparent !important;\n}\n::ng-deep .full-width .mat-mdc-text-field-wrapper {\n  padding-bottom: 1rem;\n}\n::ng-deep .mat-mdc-form-field {\n  width: 100%;\n}\n::ng-deep .mat-mdc-form-field .mdc-text-field {\n  background-color: #f9f9f9;\n}\n::ng-deep .mat-mdc-form-field .mdc-text-field:hover {\n  background-color: #f5f5f5;\n}\n::ng-deep .mat-mdc-form-field .mat-mdc-form-field-label {\n  color: #666;\n}\n::ng-deep .mat-mdc-form-field.mat-focused .mdc-text-field {\n  background-color: white;\n}\n.visibility-toggle {\n  color: #666;\n  margin-right: -0.5rem;\n}\n.visibility-toggle:hover {\n  background-color: rgba(0, 0, 0, 0.04);\n}\n.submit-btn {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 0.75rem 2rem;\n  font-size: 1rem;\n  font-weight: 600;\n  border-radius: 8px;\n  margin-top: 0.5rem;\n  transition: all 0.3s ease;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  height: 3rem;\n}\n.submit-btn mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.submit-btn:not(:disabled):hover {\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.4);\n  transform: translateY(-2px);\n}\n.submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn.loading {\n  pointer-events: none;\n}\n::ng-deep .mat-mdc-spinner circle {\n  stroke: white;\n}\n.invite-info {\n  margin-top: 2rem;\n  padding: 1.5rem;\n  background-color: #f5f6fa;\n  border-radius: 8px;\n  border-left: 4px solid #667eea;\n}\n.invite-info h3 {\n  margin: 0 0 1rem;\n  color: #333;\n  font-size: 0.95rem;\n  font-weight: 600;\n}\n.invite-info ul {\n  margin: 0;\n  padding-left: 1.5rem;\n  list-style: none;\n}\n.invite-info ul li {\n  position: relative;\n  padding-left: 1.25rem;\n  margin-bottom: 0.75rem;\n  color: #666;\n  font-size: 0.85rem;\n  line-height: 1.5;\n}\n.invite-info ul li::before {\n  content: "\\2713";\n  position: absolute;\n  left: 0;\n  color: #667eea;\n  font-weight: 700;\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n@media (max-width: 600px) {\n  .accept-invite-container {\n    padding: 1rem;\n  }\n  .invite-card {\n    max-width: 100%;\n  }\n  .invite-header {\n    padding: 2rem 1rem;\n  }\n  .invite-header h1 {\n    font-size: 1.5rem;\n  }\n  .invite-header .header-icon {\n    font-size: 2.5rem;\n    width: 2.5rem;\n    height: 2.5rem;\n  }\n  .invite-content {\n    padding: 1.5rem 1rem;\n  }\n  .submit-btn {\n    height: 2.75rem;\n    font-size: 0.95rem;\n  }\n}\n/*# sourceMappingURL=accept-admin-invite.css.map */\n'] }]
  }], () => [{ type: FormBuilder }, { type: Auth }, { type: ActivatedRoute }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcceptAdminInviteComponent, { className: "AcceptAdminInviteComponent", filePath: "src/app/features/accept-admin-invite/accept-admin-invite.ts", lineNumber: 29 });
})();
export {
  AcceptAdminInviteComponent
};
//# sourceMappingURL=chunk-T37KD4GA.js.map

