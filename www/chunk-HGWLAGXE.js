import {
  AddressService
} from "./chunk-YRV7E2NH.js";
import {
  getHttpErrorMessage
} from "./chunk-MBOZ5WI3.js";
import {
  BusinessService
} from "./chunk-OHY5FEWO.js";
import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WDC3QMAT.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-CESE7TJL.js";
import {
  ApiService,
  Auth
} from "./chunk-SNFMA3C7.js";
import "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
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
  ViewChild,
  catchError,
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
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
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
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-O3FI6JPK.js";
import "./chunk-7WUTQBRG.js";

// src/app/auth/login/login.ts
var _c0 = () => ["/auth/forgot-password"];
var _c1 = () => ["/auth/register"];
function LoginComponent_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
  }
}
function LoginComponent_small_33_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.LOGIN.EMAIL_REQUIRED"));
  }
}
function LoginComponent_small_33_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.LOGIN.EMAIL_INVALID"));
  }
}
function LoginComponent_small_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275template(1, LoginComponent_small_33_span_1_Template, 3, 3, "span", 26)(2, LoginComponent_small_33_span_2_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailField_r4 = \u0275\u0275reference(31);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r4.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r4.hasError("email"));
  }
}
function LoginComponent_small_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.LOGIN.PASSWORD_REQUIRED"));
  }
}
function LoginComponent_small_41_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.LOGIN.PASSWORD_MIN"));
  }
}
function LoginComponent_small_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 25);
    \u0275\u0275template(1, LoginComponent_small_41_span_1_Template, 3, 3, "span", 26)(2, LoginComponent_small_41_span_2_Template, 3, 3, "span", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordField_r5 = \u0275\u0275reference(39);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r5.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r5.hasError("minlength"));
  }
}
var LoginComponent = class _LoginComponent {
  auth;
  router;
  cdr;
  userType = "user";
  isLoading = false;
  errorMessage = "";
  constructor(auth, router, cdr) {
    this.auth = auth;
    this.router = router;
    this.cdr = cdr;
  }
  onSubmit(form) {
    if (!form.valid)
      return;
    this.isLoading = true;
    this.errorMessage = "";
    const loginObservable = this.userType === "pro" ? this.auth.loginPro(form.value) : this.auth.login(form.value);
    loginObservable.subscribe({
      next: (response) => {
        this.isLoading = false;
        if (response.role === "Admin") {
          this.router.navigate(["/"]);
        } else if (response.role === "Pro" && response.isProfileComplete === false) {
          this.router.navigate(["/auth/register/pro"]);
        } else if (response.isProfileComplete === false) {
          this.router.navigate(["/auth/register/user"]);
        } else {
          this.router.navigate(["/"]);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = getHttpErrorMessage(error, error?.status === 401 ? "Invalid email or password." : "Login failed. Please try again.");
        this.cdr.markForCheck();
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 57, vars: 57, consts: [["loginForm", "ngForm"], ["emailField", "ngModel"], ["passwordField", "ngModel"], [1, "login-wrapper"], [1, "login-card"], [1, "login-header"], [1, "logo-circle"], [1, "header-text"], [1, "subtitle"], [1, "user-type-selector"], [1, "type-buttons"], ["type", "button", 1, "type-btn", 3, "click"], ["class", "error-banner", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "ngModel", "", "required", "", "email", "", 1, "form-control", 3, "placeholder"], ["class", "field-error", 4, "ngIf"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "ngModel", "", "required", "", "minlength", "6", 1, "form-control", 3, "placeholder"], [1, "forgot-link"], [3, "routerLink"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "register-link"], [1, "error-banner"], [1, "field-error"], [4, "ngIf"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5)(3, "div", 6);
      \u0275\u0275text(4, "yP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 7)(6, "h2");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 8);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 9)(13, "label");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 10)(17, "button", 11);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_17_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.userType = "user");
      });
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 11);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_20_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.userType = "pro");
      });
      \u0275\u0275text(21);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(23, LoginComponent_div_23_Template, 2, 1, "div", 12);
      \u0275\u0275elementStart(24, "form", 13, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_24_listener() {
        \u0275\u0275restoreView(_r1);
        const loginForm_r3 = \u0275\u0275reference(25);
        return \u0275\u0275resetView(ctx.onSubmit(loginForm_r3));
      });
      \u0275\u0275elementStart(26, "div", 14)(27, "label", 15);
      \u0275\u0275text(28);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 16, 1);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275template(33, LoginComponent_small_33_Template, 3, 2, "small", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 14)(35, "label", 18);
      \u0275\u0275text(36);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(38, "input", 19, 2);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275template(41, LoginComponent_small_41_Template, 3, 2, "small", 17);
      \u0275\u0275elementStart(42, "div", 20)(43, "a", 21);
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(46, "button", 22);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 23)(51, "p");
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementStart(54, "a", 21);
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const loginForm_r3 = \u0275\u0275reference(25);
      const emailField_r4 = \u0275\u0275reference(31);
      const passwordField_r5 = \u0275\u0275reference(39);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 27, "AUTH.LOGIN.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 29, "AUTH.LOGIN.SUBTITLE"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 31, "AUTH.LOGIN.SIGN_IN_AS"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.userType === "user");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 33, "AUTH.LOGIN.CUSTOMER"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.userType === "pro");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 35, "AUTH.LOGIN.PROFESSIONAL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 37, "AUTH.LOGIN.EMAIL"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", emailField_r4.invalid && (emailField_r4.dirty || emailField_r4.touched));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(32, 39, "AUTH.LOGIN.EMAIL_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", emailField_r4.invalid && (emailField_r4.dirty || emailField_r4.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 41, "AUTH.LOGIN.PASSWORD"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", passwordField_r5.invalid && (passwordField_r5.dirty || passwordField_r5.touched));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(40, 43, "AUTH.LOGIN.PASSWORD_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", passwordField_r5.invalid && (passwordField_r5.dirty || passwordField_r5.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(55, _c0));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 45, "AUTH.LOGIN.FORGOT"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !loginForm_r3.valid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? \u0275\u0275pipeBind1(48, 47, "AUTH.LOGIN.SIGNING_IN") : \u0275\u0275pipeBind1(49, 49, "AUTH.LOGIN.SIGN_IN"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(53, 51, "AUTH.LOGIN.NO_ACCOUNT"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(56, _c1));
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 53, "AUTH.LOGIN.CREATE_ONE"));
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, EmailValidator, NgModel, NgForm, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ['\n\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 420px;\n}\n.login-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n}\n.user-type-selector[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.user-type-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.type-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px 12px;\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  color: #6b7280;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.type-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #374151;\n}\n.type-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-color: transparent;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 6px;\n}\n.forgot-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.forgot-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #764ba2;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #f3f4f6;\n}\n.register-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n    align-items: flex-start;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `<div class="login-wrapper">
  <div class="login-card">

    <div class="login-header">
      <div class="logo-circle">yP</div>
      <div class="header-text">
        <h2>{{ 'AUTH.LOGIN.TITLE' | translate }}</h2>
        <p class="subtitle">{{ 'AUTH.LOGIN.SUBTITLE' | translate }}</p>
      </div>
    </div>

    <!-- User Type Selection -->
    <div class="user-type-selector">
      <label>{{ 'AUTH.LOGIN.SIGN_IN_AS' | translate }}</label>
      <div class="type-buttons">
        <button
          type="button"
          class="type-btn"
          [class.active]="userType === 'user'"
          (click)="userType = 'user'"
        >
          {{ 'AUTH.LOGIN.CUSTOMER' | translate }}
        </button>
        <button
          type="button"
          class="type-btn"
          [class.active]="userType === 'pro'"
          (click)="userType = 'pro'"
        >
          {{ 'AUTH.LOGIN.PROFESSIONAL' | translate }}
        </button>
      </div>
    </div>

    <div *ngIf="errorMessage" class="error-banner">{{ errorMessage }}</div>

    <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
      <div class="form-group">
        <label for="email">{{ 'AUTH.LOGIN.EMAIL' | translate }}</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          #emailField="ngModel"
          [class.is-invalid]="emailField.invalid && (emailField.dirty || emailField.touched)"
          ngModel
          required
          email
          [placeholder]="'AUTH.LOGIN.EMAIL_PLACEHOLDER' | translate"
        />
        <small class="field-error" *ngIf="emailField.invalid && (emailField.dirty || emailField.touched)">
          <span *ngIf="emailField.hasError('required')">{{ 'AUTH.LOGIN.EMAIL_REQUIRED' | translate }}</span>
          <span *ngIf="emailField.hasError('email')">{{ 'AUTH.LOGIN.EMAIL_INVALID' | translate }}</span>
        </small>
      </div>

      <div class="form-group">
        <label for="password">{{ 'AUTH.LOGIN.PASSWORD' | translate }}</label>
        <input
          type="password"
          id="password"
          name="password"
          class="form-control"
          #passwordField="ngModel"
          [class.is-invalid]="passwordField.invalid && (passwordField.dirty || passwordField.touched)"
          ngModel
          required
          minlength="6"
          [placeholder]="'AUTH.LOGIN.PASSWORD_PLACEHOLDER' | translate"
        />
        <small class="field-error" *ngIf="passwordField.invalid && (passwordField.dirty || passwordField.touched)">
          <span *ngIf="passwordField.hasError('required')">{{ 'AUTH.LOGIN.PASSWORD_REQUIRED' | translate }}</span>
          <span *ngIf="passwordField.hasError('minlength')">{{ 'AUTH.LOGIN.PASSWORD_MIN' | translate }}</span>
        </small>
        <div class="forgot-link">
          <a [routerLink]="['/auth/forgot-password']">{{ 'AUTH.LOGIN.FORGOT' | translate }}</a>
        </div>
      </div>

      <button type="submit" class="btn-submit" [disabled]="!loginForm.valid || isLoading">
        {{ isLoading ? ('AUTH.LOGIN.SIGNING_IN' | translate) : ('AUTH.LOGIN.SIGN_IN' | translate) }}
      </button>
    </form>

    <div class="register-link">
      <p>{{ 'AUTH.LOGIN.NO_ACCOUNT' | translate }} <a [routerLink]="['/auth/register']">{{ 'AUTH.LOGIN.CREATE_ONE' | translate }}</a></p>
    </div>

  </div>
</div>
`, styles: ['/* src/app/auth/login/login.scss */\n.login-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.login-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 420px;\n}\n.login-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n}\n.user-type-selector {\n  margin-bottom: 24px;\n}\n.user-type-selector label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.type-buttons {\n  display: flex;\n  gap: 8px;\n}\n.type-btn {\n  flex: 1;\n  padding: 9px 12px;\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  color: #6b7280;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.type-btn:hover:not(.active) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #374151;\n}\n.type-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-color: transparent;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid {\n  border-color: #ef4444;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.forgot-link {\n  text-align: right;\n  margin-top: 6px;\n}\n.forgot-link a {\n  font-size: 12px;\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.forgot-link a:hover {\n  text-decoration: underline;\n  color: #764ba2;\n}\n.btn-submit {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.error-banner {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.register-link {\n  text-align: center;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #f3f4f6;\n}\n.register-link p {\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n}\n.register-link a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.register-link a:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .login-wrapper {\n    padding: 16px 12px;\n    align-items: flex-start;\n  }\n  .login-card {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.ts", lineNumber: 15 });
})();

// node_modules/libphonenumber-js/metadata.min.json.js
var metadata_min_json_default = { "version": 4, "country_calling_codes": { "1": ["US", "AG", "AI", "AS", "BB", "BM", "BS", "CA", "DM", "DO", "GD", "GU", "JM", "KN", "KY", "LC", "MP", "MS", "PR", "SX", "TC", "TT", "VC", "VG", "VI"], "7": ["RU", "KZ"], "20": ["EG"], "27": ["ZA"], "30": ["GR"], "31": ["NL"], "32": ["BE"], "33": ["FR"], "34": ["ES"], "36": ["HU"], "39": ["IT", "VA"], "40": ["RO"], "41": ["CH"], "43": ["AT"], "44": ["GB", "GG", "IM", "JE"], "45": ["DK"], "46": ["SE"], "47": ["NO", "SJ"], "48": ["PL"], "49": ["DE"], "51": ["PE"], "52": ["MX"], "53": ["CU"], "54": ["AR"], "55": ["BR"], "56": ["CL"], "57": ["CO"], "58": ["VE"], "60": ["MY"], "61": ["AU", "CC", "CX"], "62": ["ID"], "63": ["PH"], "64": ["NZ"], "65": ["SG"], "66": ["TH"], "81": ["JP"], "82": ["KR"], "84": ["VN"], "86": ["CN"], "90": ["TR"], "91": ["IN"], "92": ["PK"], "93": ["AF"], "94": ["LK"], "95": ["MM"], "98": ["IR"], "211": ["SS"], "212": ["MA", "EH"], "213": ["DZ"], "216": ["TN"], "218": ["LY"], "220": ["GM"], "221": ["SN"], "222": ["MR"], "223": ["ML"], "224": ["GN"], "225": ["CI"], "226": ["BF"], "227": ["NE"], "228": ["TG"], "229": ["BJ"], "230": ["MU"], "231": ["LR"], "232": ["SL"], "233": ["GH"], "234": ["NG"], "235": ["TD"], "236": ["CF"], "237": ["CM"], "238": ["CV"], "239": ["ST"], "240": ["GQ"], "241": ["GA"], "242": ["CG"], "243": ["CD"], "244": ["AO"], "245": ["GW"], "246": ["IO"], "247": ["AC"], "248": ["SC"], "249": ["SD"], "250": ["RW"], "251": ["ET"], "252": ["SO"], "253": ["DJ"], "254": ["KE"], "255": ["TZ"], "256": ["UG"], "257": ["BI"], "258": ["MZ"], "260": ["ZM"], "261": ["MG"], "262": ["RE", "YT"], "263": ["ZW"], "264": ["NA"], "265": ["MW"], "266": ["LS"], "267": ["BW"], "268": ["SZ"], "269": ["KM"], "290": ["SH", "TA"], "291": ["ER"], "297": ["AW"], "298": ["FO"], "299": ["GL"], "350": ["GI"], "351": ["PT"], "352": ["LU"], "353": ["IE"], "354": ["IS"], "355": ["AL"], "356": ["MT"], "357": ["CY"], "358": ["FI", "AX"], "359": ["BG"], "370": ["LT"], "371": ["LV"], "372": ["EE"], "373": ["MD"], "374": ["AM"], "375": ["BY"], "376": ["AD"], "377": ["MC"], "378": ["SM"], "380": ["UA"], "381": ["RS"], "382": ["ME"], "383": ["XK"], "385": ["HR"], "386": ["SI"], "387": ["BA"], "389": ["MK"], "420": ["CZ"], "421": ["SK"], "423": ["LI"], "500": ["FK"], "501": ["BZ"], "502": ["GT"], "503": ["SV"], "504": ["HN"], "505": ["NI"], "506": ["CR"], "507": ["PA"], "508": ["PM"], "509": ["HT"], "590": ["GP", "BL", "MF"], "591": ["BO"], "592": ["GY"], "593": ["EC"], "594": ["GF"], "595": ["PY"], "596": ["MQ"], "597": ["SR"], "598": ["UY"], "599": ["CW", "BQ"], "670": ["TL"], "672": ["NF"], "673": ["BN"], "674": ["NR"], "675": ["PG"], "676": ["TO"], "677": ["SB"], "678": ["VU"], "679": ["FJ"], "680": ["PW"], "681": ["WF"], "682": ["CK"], "683": ["NU"], "685": ["WS"], "686": ["KI"], "687": ["NC"], "688": ["TV"], "689": ["PF"], "690": ["TK"], "691": ["FM"], "692": ["MH"], "850": ["KP"], "852": ["HK"], "853": ["MO"], "855": ["KH"], "856": ["LA"], "880": ["BD"], "886": ["TW"], "960": ["MV"], "961": ["LB"], "962": ["JO"], "963": ["SY"], "964": ["IQ"], "965": ["KW"], "966": ["SA"], "967": ["YE"], "968": ["OM"], "970": ["PS"], "971": ["AE"], "972": ["IL"], "973": ["BH"], "974": ["QA"], "975": ["BT"], "976": ["MN"], "977": ["NP"], "992": ["TJ"], "993": ["TM"], "994": ["AZ"], "995": ["GE"], "996": ["KG"], "998": ["UZ"] }, "countries": { "AC": ["247", "00", "(?:[01589]\\d|[46])\\d{4}", [5, 6]], "AD": ["376", "00", "(?:1|6\\d)\\d{7}|[135-9]\\d{5}", [6, 8, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["[135-9]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["1"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]]], "AE": ["971", "00", "(?:[4-7]\\d|9[0-689])\\d{7}|800\\d{2,9}|[2-4679]\\d{7}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{2,9})", "$1 $2", ["60|8"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[236]|[479][2-8]"], "0$1"], ["(\\d{3})(\\d)(\\d{5})", "$1 $2 $3", ["[479]"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AF": ["93", "00", "[2-7]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"]], "0"], "AG": ["1", "011", "(?:268|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([457]\\d{6})$|1", "268$1", 0, "268"], "AI": ["1", "011", "(?:264|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2457]\\d{6})$|1", "264$1", 0, "264"], "AL": ["355", "00", "(?:700\\d\\d|900)\\d{3}|8\\d{5,7}|(?:[2-5]|6\\d)\\d{7}", [6, 7, 8, 9], [["(\\d{3})(\\d{3,4})", "$1 $2", ["80|9"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["4[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2358][2-5]|4"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["[23578]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["6"], "0$1"]], "0"], "AM": ["374", "00", "(?:[1-489]\\d|55|60|77)\\d{6}", [8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[89]0"], "0 $1"], ["(\\d{3})(\\d{5})", "$1 $2", ["2|3[12]"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["1|47"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[3-9]"], "0$1"]], "0"], "AO": ["244", "00", "[29]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[29]"]]]], "AR": ["54", "00", "(?:11|[89]\\d\\d)\\d{8}|[2368]\\d{9}", [10, 11], [["(\\d{4})(\\d{2})(\\d{4})", "$1 $2-$3", ["2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9])", "2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8]))|2(?:2[24-9]|3[1-59]|47)", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5[56][46]|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|58|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|54(?:4|5[13-7]|6[89])|86[3-6]))|2(?:2[24-9]|3[1-59]|47)|38(?:[58][78]|7[378])|3(?:454|85[56])[46]|3(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["1"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[68]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2-$3", ["[23]"], "0$1", 1], ["(\\d)(\\d{4})(\\d{2})(\\d{4})", "$2 15-$3-$4", ["9(?:2[2-469]|3[3-578])", "9(?:2(?:2[024-9]|3[0-59]|47|6[245]|9[02-8])|3(?:3[28]|4[03-9]|5[2-46-8]|7[1-578]|8[2-9]))", "9(?:2(?:[23]02|6(?:[25]|4[6-8])|9(?:[02356]|4[02568]|72|8[23]))|3(?:3[28]|4(?:[04679]|3[5-8]|5[4-68]|8[2379])|5(?:[2467]|3[237]|8[2-5])|7[1-578]|8(?:[2469]|3[2578]|5[4-8]|7[36-8]|8[5-8])))|92(?:2[24-9]|3[1-59]|47)", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3[78]|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8[23])|7[1-578]|8(?:[2469]|3[278]|5(?:[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4[35][56]|58[45]|8(?:[38]5|54|76))[4-6]", "9(?:2(?:[23]02|6(?:[25]|4(?:64|[78]))|9(?:[02356]|4(?:[0268]|5[2-6])|72|8[23]))|3(?:3[28]|4(?:[04679]|3(?:5(?:4[0-25689]|[56])|[78])|5(?:4[46]|8)|8[2379])|5(?:[2467]|3[237]|8(?:[23]|4(?:[45]|60)|5(?:4[0-39]|5|64)))|7[1-578]|8(?:[2469]|3[278]|5(?:4(?:4|5[13-7]|6[89])|[56][46]|[78])|7[378]|8(?:6[3-6]|[78]))))|92(?:2[24-9]|3[1-59]|47)|93(?:4(?:36|5[56])|8(?:[38]5|76))[4-6]"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d)(\\d{2})(\\d{4})(\\d{4})", "$2 15-$3-$4", ["91"], "0$1", 0, "$1 $2 $3-$4"], ["(\\d{3})(\\d{3})(\\d{5})", "$1-$2-$3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{4})", "$2 15-$3-$4", ["9"], "0$1", 0, "$1 $2 $3-$4"]], "0", 0, "0?(?:(11|2(?:2(?:02?|[13]|2[13-79]|4[1-6]|5[2457]|6[124-8]|7[1-4]|8[13-6]|9[1267])|3(?:02?|1[467]|2[03-6]|3[13-8]|[49][2-6]|5[2-8]|[67])|4(?:7[3-578]|9)|6(?:[0136]|2[24-6]|4[6-8]?|5[15-8])|80|9(?:0[1-3]|[19]|2\\d|3[1-6]|4[02568]?|5[2-4]|6[2-46]|72?|8[23]?))|3(?:3(?:2[79]|6|8[2578])|4(?:0[0-24-9]|[12]|3[5-8]?|4[24-7]|5[4-68]?|6[02-9]|7[126]|8[2379]?|9[1-36-8])|5(?:1|2[1245]|3[237]?|4[1-46-9]|6[2-4]|7[1-6]|8[2-5]?)|6[24]|7(?:[069]|1[1568]|2[15]|3[145]|4[13]|5[14-8]|7[2-57]|8[126])|8(?:[01]|2[15-7]|3[2578]?|4[13-6]|5[4-8]?|6[1-357-9]|7[36-8]?|8[5-8]?|9[124])))15)?", "9$1"], "AS": ["1", "011", "(?:[58]\\d\\d|684|900)\\d{7}", [10], 0, "1", 0, "([267]\\d{6})$|1", "684$1", 0, "684"], "AT": ["43", "00", "1\\d{3,12}|2\\d{6,12}|43(?:(?:0\\d|5[02-9])\\d{3,9}|2\\d{4,5}|[3467]\\d{4}|8\\d{4,6}|9\\d{4,7})|5\\d{4,12}|8\\d{7,12}|9\\d{8,12}|(?:[367]\\d|4[0-24-9])\\d{4,11}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{3,12})", "$1 $2", ["1(?:11|[2-9])"], "0$1"], ["(\\d{3})(\\d{2})", "$1 $2", ["517"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["5[079]"], "0$1"], ["(\\d{3})(\\d{3,10})", "$1 $2", ["(?:31|4)6|51|6(?:48|5[0-3579]|[6-9])|7(?:20|32|8)|[89]", "(?:31|4)6|51|6(?:485|5[0-3579]|[6-9])|7(?:20|32|8)|[89]"], "0$1"], ["(\\d{4})(\\d{3,9})", "$1 $2", ["[2-467]|5[2-6]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,7})", "$1 $2 $3", ["5"], "0$1"]], "0"], "AU": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{7}(?:\\d(?:\\d{2})?)?|8[0-24-9]\\d{7})|[2-478]\\d{8}|1\\d{4,7}", [5, 6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{3,4})", "$1 $2", ["16"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["16"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["14|4"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[2378]"], "(0$1)"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:30|[89])"]]], "0", 0, "(183[12])|0", 0, 0, 0, [["(?:(?:241|349)0\\d\\d|8(?:51(?:0(?:0[03-9]|[12479]\\d|3[2-9]|5[0-8]|6[1-9]|8[0-7])|1(?:[0235689]\\d|1[0-69]|4[0-589]|7[0-47-9])|2(?:0[0-79]|[18][13579]|2[14-9]|3[0-46-9]|[4-6]\\d|7[89]|9[0-4])|[34]\\d\\d)|91(?:(?:[0-58]\\d|6[0135-9])\\d|7(?:0[0-24-9]|[1-9]\\d)|9(?:[0-46-9]\\d|5[0-79]))))\\d{3}|(?:2(?:[0-26-9]\\d|3[0-8]|4[02-9]|5[0135-9])|3(?:[0-3589]\\d|4[0-578]|6[1-9]|7[0-35-9])|7(?:[013-57-9]\\d|2[0-8])|8(?:55|6[0-8]|[78]\\d|9[02-9]))\\d{6}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, ["163\\d{2,6}", [5, 6, 7, 8, 9]], ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "AW": ["297", "00", "(?:[25-79]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[25-9]"]]]], "AX": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "2\\d{4,9}|35\\d{4,5}|(?:60\\d\\d|800)\\d{4,6}|7\\d{5,11}|(?:[14]\\d|3[0-46-9]|50)\\d{4,8}", [5, 6, 7, 8, 9, 10, 11, 12], 0, "0", 0, 0, 0, 0, "18", 0, "00"], "AZ": ["994", "00", "365\\d{6}|(?:[124579]\\d|60|88)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[28]|2|365|46", "1[28]|2|365[45]|46", "1[28]|2|365(?:4|5[02])|46"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[13-9]"], "0$1"]], "0"], "BA": ["387", "00", "6\\d{8}|(?:[35689]\\d|49|70)\\d{6}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[1-3]|[7-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2-$3", ["[3-5]|6[56]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["6"], "0$1"]], "0"], "BB": ["1", "011", "(?:246|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "246$1", 0, "246"], "BD": ["880", "00", "[1-469]\\d{9}|8[0-79]\\d{7,8}|[2-79]\\d{8}|[2-9]\\d{7}|[3-9]\\d{6}|[57-9]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{2})(\\d{4,6})", "$1-$2", ["31[5-8]|[459]1"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1-$2", ["3(?:[67]|8[013-9])|4(?:6[168]|7|[89][18])|5(?:6[128]|9)|6(?:[15]|28|4[14])|7[2-589]|8(?:0[014-9]|[12])|9[358]|(?:3[2-5]|4[235]|5[2-578]|6[0389]|76|8[3-7]|9[24])1|(?:44|66)[01346-9]"], "0$1"], ["(\\d{4})(\\d{3,6})", "$1-$2", ["[13-9]|2[23]"], "0$1"], ["(\\d)(\\d{7,8})", "$1-$2", ["2"], "0$1"]], "0"], "BE": ["32", "00", "4\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:80|9)0"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[239]|4[23]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[15-8]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4"], "0$1"]], "0"], "BF": ["226", "00", "[024-7]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[024-7]"]]]], "BG": ["359", "00", "00800\\d{7}|[2-7]\\d{6,7}|[89]\\d{6,8}|2\\d{5}", [6, 7, 8, 9, 12], [["(\\d)(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["43[1-6]|70[1-9]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["[356]|4[124-7]|7[1-9]|8[1-6]|9[1-7]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["(?:70|8)0"], "0$1"], ["(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3", ["43[1-7]|7"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[48]|9[08]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"]], "0"], "BH": ["973", "00", "[136-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[13679]|8[02-4679]"]]]], "BI": ["257", "00", "(?:[267]\\d|31)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2367]"]]]], "BJ": ["229", "00", "(?:01\\d|8)\\d{7}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["0"]]]], "BL": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:2[7-9]|3[3-7]|5[12]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "BM": ["1", "011", "(?:441|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "441$1", 0, "441"], "BN": ["673", "00", "[2-578]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-578]"]]]], "BO": ["591", "00(?:1\\d)?", "(?:[2-7]\\d\\d|8001)\\d{5}", [8, 9], [["(\\d)(\\d{7})", "$1 $2", ["[23]|4[46]|50"]], ["(\\d{8})", "$1", ["[5-7]"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["8"]]], "0", 0, "0(1\\d)?"], "BQ": ["599", "00", "(?:[34]1|7\\d)\\d{5}", [7], 0, 0, 0, 0, 0, 0, "[347]"], "BR": ["55", "00(?:1[245]|2[1-35]|31|4[13]|[56]5|99)", "[1-467]\\d{9,10}|55[0-46-9]\\d{8}|[34]\\d{7}|55\\d{7,8}|(?:5[0-46-9]|[89]\\d)\\d{7,9}", [8, 9, 10, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["300|4(?:0[02]|37|86)", "300|4(?:0(?:0|20)|370|864)"]], ["(\\d{3})(\\d{2,3})(\\d{4})", "$1 $2 $3", ["(?:[358]|90)0"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2-$3", ["(?:[14689][1-9]|2[12478]|3[1-578]|5[13-5]|7[13-579])[2-57]"], "($1)"], ["(\\d{2})(\\d{5})(\\d{4})", "$1 $2-$3", ["[16][1-9]|[2-57-9]"], "($1)"]], "0", 0, "(?:0|90)(?:(1[245]|2[1-35]|31|4[13]|[56]5|99)(\\d{10,11}))?", "$2"], "BS": ["1", "011", "(?:242|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([3-8]\\d{6})$|1", "242$1", 0, "242"], "BT": ["975", "00", "[178]\\d{7}|[2-8]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-6]|7[246]|8[2-4]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[67]|[78]"]]]], "BW": ["267", "00", "(?:0800|(?:[37]|800)\\d)\\d{6}|(?:[2-6]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["90"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[24-6]|3[15-9]"]], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37]"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["8"]]]], "BY": ["375", "810", "(?:[12]\\d|33|44|902)\\d{7}|8(?:0[0-79]\\d{5,7}|[1-7]\\d{9})|8(?:1[0-489]|[5-79]\\d)\\d{7}|8[1-79]\\d{6,7}|8[0-79]\\d{5}|8\\d{5}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3})", "$1 $2", ["800"], "8 $1"], ["(\\d{3})(\\d{2})(\\d{2,4})", "$1 $2 $3", ["800"], "8 $1"], ["(\\d{4})(\\d{2})(\\d{3})", "$1 $2-$3", ["1(?:5[169]|6[3-5]|7[179])|2(?:1[35]|2[34]|3[3-5])", "1(?:5[169]|6(?:3[1-3]|4|5[125])|7(?:1[3-9]|7[0-24-6]|9[2-7]))|2(?:1[35]|2[34]|3[3-5])"], "8 0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["1(?:[56]|7[467])|2[1-3]"], "8 0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-4]"], "8 0$1"], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[89]"], "8 $1"]], "8", 0, "0|80?", 0, 0, 0, 0, "8~10"], "BZ": ["501", "00", "(?:0800\\d|[2-8])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-8]"]], ["(\\d)(\\d{3})(\\d{4})(\\d{3})", "$1-$2-$3-$4", ["0"]]]], "CA": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [7, 10], 0, "1", 0, 0, 0, 0, 0, [["(?:2(?:04|[23]6|[48]9|5[07]|63)|3(?:06|43|54|6[578]|82)|4(?:03|1[68]|[26]8|3[178]|50|74)|5(?:06|1[49]|48|79|8[147])|6(?:04|[18]3|39|47|72)|7(?:0[59]|42|53|78|8[02])|8(?:[06]7|19|25|7[39])|9(?:0[25]|42))[2-9]\\d{6}", [10]], ["", [10]], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}", [10]], ["900[2-9]\\d{6}", [10]], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|(?:5(?:2[125-9]|3[23]|44|66|77|88)|6(?:22|33))[2-9]\\d{6}", [10]], 0, ["310\\d{4}", [7]], 0, ["600[2-9]\\d{6}", [10]]]], "CC": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:02|31|60|89)|1(?:18|76)|223)|91(?:0(?:1[0-2]|29)|1(?:[28]2|50|79)|2(?:10|64)|3(?:[06]8|22)|4[29]8|62\\d|70[23]|959))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CD": ["243", "00", "(?:(?:[189]|5\\d)\\d|2)\\d{7}|[1-68]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["[1-6]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["5"], "0$1"]], "0"], "CF": ["236", "00", "8776\\d{4}|(?:[27]\\d|61)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-8]"]]]], "CG": ["242", "00", "222\\d{6}|(?:0\\d|80)\\d{7}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[02]"]]]], "CH": ["41", "00", "8\\d{11}|[2-9]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8[047]|90"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]|81"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["8"], "0$1"]], "0"], "CI": ["225", "00", "[02]\\d{9}", [10], [["(\\d{2})(\\d{2})(\\d)(\\d{5})", "$1 $2 $3 $4", ["2"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3 $4", ["0"]]]], "CK": ["682", "00", "[2-578]\\d{4}", [5], [["(\\d{2})(\\d{3})", "$1 $2", ["[2-578]"]]]], "CL": ["56", "(?:0|1(?:1[0-69]|2[02-5]|5[13-58]|69|7[0167]|8[018]))0", "12300\\d{6}|6\\d{9,10}|[2-9]\\d{8}", [9, 10, 11], [["(\\d{5})(\\d{4})", "$1 $2", ["219", "2196"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["60|809"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["44"]], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2[1-36]"], "($1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["9(?:10|[2-9])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["3[2-5]|[47]|5[1-3578]|6[13-57]|8(?:0[1-8]|[1-9])"], "($1)"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["60|8"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{3})(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["60"]]]], "CM": ["237", "00", "[26]\\d{8}|88\\d{6,7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["88"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[26]|88"]]]], "CN": ["86", "00|1(?:[12]\\d|79)\\d\\d00", "(?:(?:1[03-689]|2\\d)\\d\\d|6)\\d{8}|1\\d{10}|[126]\\d{6}(?:\\d(?:\\d{2})?)?|86\\d{5,6}|(?:[3-579]\\d|8[0-57-9])\\d{5,9}", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5,6})", "$1 $2", ["(?:10|2[0-57-9])[19]|3(?:[157]|35|49|9[1-68])|4(?:1[124-9]|2[179]|6[47-9]|7|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:07|1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3|4[13]|5[1-5]|7[0-79]|9[0-35-9])|(?:4[35]|59|85)[1-9]", "(?:10|2[0-57-9])(?:1[02]|9[56])|8078|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))1", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|80781|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))12", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|807812|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123", "10(?:1(?:0|23)|9[56])|2[0-57-9](?:1(?:00|23)|9[56])|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:1[124-9]|2[179]|[35][1-9]|6[47-9]|7\\d|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:078|1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|3\\d|4[13]|5[1-5]|7[0-79]|9[0-35-9]))123"], "0$1"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["3(?:[157]|35|49|9[1-68])|4(?:[17]|2[179]|6[47-9]|8[23])|5(?:[1357]|2[37]|4[36]|6[1-46]|80)|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]|4[13]|5[1-5])|(?:4[35]|59|85)[1-9]", "(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[1-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))[19]", "85[23](?:10|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:10|9[56])", "85[23](?:100|95)|(?:3(?:[157]\\d|35|49|9[1-68])|4(?:[17]\\d|2[179]|[35][1-9]|6[47-9]|8[23])|5(?:[1357]\\d|2[37]|4[36]|6[1-46]|80|9[1-9])|6(?:3[1-5]|6[0238]|9[12])|7(?:01|[1579]\\d|2[248]|3[014-9]|4[3-6]|6[023689])|8(?:1[236-8]|2[5-7]|[37]\\d|5[14-9]|8[36-8]|9[1-8])|9(?:0[1-3689]|1[1-79]|[379]\\d|4[13]|5[1-5]))(?:100|9[56])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["(?:4|80)0"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|2(?:[02-57-9]|1[1-9])", "10|2(?:[02-57-9]|1[1-9])", "10[0-79]|2(?:[02-57-9]|1[1-79])|(?:10|21)8(?:0[1-9]|[1-9])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["3(?:[3-59]|7[02-68])|4(?:[26-8]|3[3-9]|5[2-9])|5(?:3[03-9]|[468]|7[028]|9[2-46-9])|6|7(?:[0-247]|3[04-9]|5[0-4689]|6[2368])|8(?:[1-358]|9[1-7])|9(?:[013479]|5[1-5])|(?:[34]1|55|79|87)[02-9]"], "0$1", 1], ["(\\d{3})(\\d{7,8})", "$1 $2", ["9"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["80"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[3-578]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["1[3-9]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["[12]"], "0$1", 1]], "0", 0, "(1(?:[12]\\d|79)\\d\\d)|0", 0, 0, 0, 0, "00"], "CO": ["57", "00(?:4(?:[14]4|56)|[579])", "(?:46|60\\d\\d)\\d{6}|(?:1\\d|[39])\\d{9}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["46"]], ["(\\d{3})(\\d{7})", "$1 $2", ["6|90"], "($1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3[0-357]|9[14]"]], ["(\\d)(\\d{3})(\\d{7})", "$1-$2-$3", ["1"], "0$1", 0, "$1 $2 $3"]], "0", 0, "0([3579]|4(?:[14]4|56))?"], "CR": ["506", "00", "(?:8\\d|90)\\d{8}|(?:[24-8]\\d{3}|3005)\\d{4}", [8, 10], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[3-9]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["[89]"]]], 0, 0, "(19(?:0[0-2468]|1[09]|20|66|77|99))"], "CU": ["53", "119", "(?:[2-7]|8\\d\\d)\\d{7}|[2-47]\\d{6}|[34]\\d{5}", [6, 7, 8, 10], [["(\\d{2})(\\d{4,6})", "$1 $2", ["2[1-4]|[34]"], "(0$1)"], ["(\\d)(\\d{6,7})", "$1 $2", ["7"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["[56]"], "0$1"], ["(\\d{3})(\\d{7})", "$1 $2", ["8"], "0$1"]], "0"], "CV": ["238", "0", "(?:[2-59]\\d\\d|800)\\d{4}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-589]"]]]], "CW": ["599", "00", "(?:[34]1|60|(?:7|9\\d)\\d)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[3467]"]], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["9[4-8]"]]], 0, 0, 0, 0, 0, "[69]"], "CX": ["61", "001[14-689]|14(?:1[14]|34|4[17]|[56]6|7[47]|88)0011", "1(?:[0-79]\\d{8}(?:\\d{2})?|8[0-24-9]\\d{7})|[148]\\d{8}|1\\d{5,7}", [6, 7, 8, 9, 10, 12], 0, "0", 0, "([59]\\d{7})$|0", "8$1", 0, 0, [["8(?:51(?:0(?:01|30|59|88)|1(?:17|46|75)|2(?:22|35))|91(?:00[6-9]|1(?:[28]1|49|78)|2(?:09|63)|3(?:12|26|75)|4(?:56|97)|64\\d|7(?:0[01]|1[0-2])|958))\\d{3}", [9]], ["4(?:79[01]|83[0-36-9]|95[0-3])\\d{5}|4(?:[0-36]\\d|4[047-9]|[58][0-24-9]|7[02-8]|9[0-47-9])\\d{6}", [9]], ["180(?:0\\d{3}|2)\\d{3}", [7, 10]], ["190[0-26]\\d{6}", [10]], 0, 0, 0, 0, ["14(?:5(?:1[0458]|[23][458])|71\\d)\\d{4}", [9]], ["13(?:00\\d{6}(?:\\d{2})?|45[0-4]\\d{3})|13\\d{4}", [6, 8, 10, 12]]], "0011"], "CY": ["357", "00", "(?:[279]\\d|[58]0)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[257-9]"]]]], "CZ": ["420", "00", "(?:[2-578]\\d|60)\\d{7}|9\\d{8,11}", [9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]|9[015-7]"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["96"]], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]]], "DE": ["49", "00", "[2579]\\d{5,14}|49(?:[34]0|69|8\\d)\\d\\d?|49(?:37|49|60|7[089]|9\\d)\\d{1,3}|49(?:2[024-9]|3[2-689]|7[1-7])\\d{1,8}|(?:1|[368]\\d|4[0-8])\\d{3,13}|49(?:[015]\\d|2[13]|31|[46][1-8])\\d{1,9}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], [["(\\d{2})(\\d{3,13})", "$1 $2", ["3[02]|40|[68]9"], "0$1"], ["(\\d{3})(\\d{3,12})", "$1 $2", ["2(?:0[1-389]|1[124]|2[18]|3[14])|3(?:[35-9][15]|4[015])|906|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1", "2(?:0[1-389]|12[0-8])|3(?:[35-9][15]|4[015])|906|2(?:[13][14]|2[18])|(?:2[4-9]|4[2-9]|[579][1-9]|[68][1-8])1"], "0$1"], ["(\\d{4})(\\d{2,11})", "$1 $2", ["[24-6]|3(?:[3569][02-46-9]|4[2-4679]|7[2-467]|8[2-46-8])|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]", "[24-6]|3(?:3(?:0[1-467]|2[127-9]|3[124578]|7[1257-9]|8[1256]|9[145])|4(?:2[135]|4[13578]|9[1346])|5(?:0[14]|2[1-3589]|6[1-4]|7[13468]|8[13568])|6(?:2[1-489]|3[124-6]|6[13]|7[12579]|8[1-356]|9[135])|7(?:2[1-7]|4[145]|6[1-5]|7[1-4])|8(?:21|3[1468]|6|7[1467]|8[136])|9(?:0[12479]|2[1358]|4[134679]|6[1-9]|7[136]|8[147]|9[1468]))|70[2-8]|8(?:0[2-9]|[1-8])|90[7-9]|[79][1-9]|3[68]4[1347]|3(?:47|60)[1356]|3(?:3[46]|46|5[49])[1246]|3[4579]3[1357]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["138"], "0$1"], ["(\\d{5})(\\d{2,10})", "$1 $2", ["3"], "0$1"], ["(\\d{3})(\\d{5,11})", "$1 $2", ["181"], "0$1"], ["(\\d{3})(\\d)(\\d{4,10})", "$1 $2 $3", ["1(?:3|80)|9"], "0$1"], ["(\\d{3})(\\d{7,8})", "$1 $2", ["1[67]"], "0$1"], ["(\\d{3})(\\d{7,12})", "$1 $2", ["8"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["185", "1850", "18500"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["18[68]"], "0$1"], ["(\\d{4})(\\d{7})", "$1 $2", ["15[1279]"], "0$1"], ["(\\d{5})(\\d{6})", "$1 $2", ["15[03568]", "15(?:[0568]|3[13])"], "0$1"], ["(\\d{3})(\\d{8})", "$1 $2", ["18"], "0$1"], ["(\\d{3})(\\d{2})(\\d{7,8})", "$1 $2 $3", ["1(?:6[023]|7)"], "0$1"], ["(\\d{4})(\\d{2})(\\d{7})", "$1 $2 $3", ["15[279]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{8})", "$1 $2 $3", ["15"], "0$1"]], "0"], "DJ": ["253", "00", "(?:2\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[27]"]]]], "DK": ["45", "00", "[2-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-9]"]]]], "DM": ["1", "011", "(?:[58]\\d\\d|767|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "767$1", 0, "767"], "DO": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "8001|8[024]9"], "DZ": ["213", "00", "(?:[1-4]|[5-79]\\d|80)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["9"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-8]"], "0$1"]], "0"], "EC": ["593", "00", "1\\d{9,10}|(?:[2-7]|9\\d)\\d{7}", [8, 9, 10, 11], [["(\\d)(\\d{3})(\\d{4})", "$1 $2-$3", ["[2-7]"], "(0$1)", 0, "$1-$2-$3"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1"]]], "0"], "EE": ["372", "00", "8\\d{9}|[4578]\\d{7}|(?:[3-8]\\d|90)\\d{5}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[369]|4[3-8]|5(?:[0-2]|5[0-478]|6[45])|7[1-9]|88", "[369]|4[3-8]|5(?:[02]|1(?:[0-8]|95)|5[0-478]|6(?:4[0-4]|5[1-589]))|7[1-9]|88"]], ["(\\d{4})(\\d{3,4})", "$1 $2", ["[45]|8(?:00|[1-49])", "[45]|8(?:00[1-9]|[1-49])"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "EG": ["20", "00", "[189]\\d{8,9}|[24-6]\\d{8}|[135]\\d{7}", [8, 9, 10], [["(\\d)(\\d{7,8})", "$1 $2", ["[23]"], "0$1"], ["(\\d{2})(\\d{6,7})", "$1 $2", ["1[35]|[4-6]|8[2468]|9[235-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{8})", "$1 $2", ["1"], "0$1"]], "0"], "EH": ["212", "00", "[5-8]\\d{8}", [9], 0, "0", 0, 0, 0, 0, 0, [["528[89]\\d{5}"], ["(?:6(?:[0-79]\\d|8[0-247-9])|7(?:[016-8]\\d|2[0-8]|5[0-5]))\\d{6}"], ["80[0-7]\\d{6}"], ["89\\d{7}"], 0, 0, 0, 0, ["(?:592(?:4[0-2]|93)|80[89]\\d\\d)\\d{4}"]]], "ER": ["291", "00", "[178]\\d{6}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[178]"], "0$1"]], "0"], "ES": ["34", "00", "[5-9]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[89]00"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-9]"]]]], "ET": ["251", "00", "(?:11|[2-57-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-57-9]"], "0$1"]], "0"], "FI": ["358", "00|99(?:[01469]|5(?:[14]1|3[23]|5[59]|77|88|9[09]))", "[1-35689]\\d{4}|7\\d{10,11}|(?:[124-7]\\d|3[0-46-9])\\d{8}|[1-9]\\d{5,8}", [5, 6, 7, 8, 9, 10, 11, 12], [["(\\d{5})", "$1", ["20[2-59]"], "0$1"], ["(\\d{3})(\\d{3,7})", "$1 $2", ["(?:[1-3]0|[68])0|70[07-9]"], "0$1"], ["(\\d{2})(\\d{4,8})", "$1 $2", ["[14]|2[09]|50|7[135]"], "0$1"], ["(\\d{2})(\\d{6,10})", "$1 $2", ["7"], "0$1"], ["(\\d)(\\d{4,9})", "$1 $2", ["(?:19|[2568])[1-8]|3(?:0[1-9]|[1-9])|9"], "0$1"]], "0", 0, 0, 0, 0, "1[03-79]|[2-9]", 0, "00"], "FJ": ["679", "0(?:0|52)", "45\\d{5}|(?:0800\\d|[235-9])\\d{6}", [7, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[235-9]|45"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "FK": ["500", "00", "[2-7]\\d{4}", [5]], "FM": ["691", "00", "(?:[39]\\d\\d|820)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[389]"]]]], "FO": ["298", "00", "[2-9]\\d{5}", [6], [["(\\d{6})", "$1", ["[2-9]"]]], 0, 0, "(10(?:01|[12]0|88))"], "FR": ["33", "00", "[1-9]\\d{8}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0 $1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[1-79]"], "0$1"]], "0"], "GA": ["241", "00", "(?:[067]\\d|11)\\d{6}|[2-7]\\d{6}", [7, 8], [["(\\d)(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-7]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["11|[67]"], "0$1"]], 0, 0, "0(11\\d{6}|60\\d{6}|61\\d{6}|6[256]\\d{6}|7[467]\\d{6})", "$1"], "GB": ["44", "00", "[1-357-9]\\d{9}|[18]\\d{8}|8\\d{6}", [7, 9, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["800", "8001", "80011", "800111", "8001111"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["845", "8454", "84546", "845464"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["800"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["1(?:38|5[23]|69|76|94)", "1(?:(?:38|69)7|5(?:24|39)|768|946)", "1(?:3873|5(?:242|39[4-6])|(?:697|768)[347]|9467)"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["1(?:[2-69][02-9]|[78])"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[25]|7(?:0|6[02-9])", "[25]|7(?:0|6(?:[03-9]|2[356]))"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1389]"], "0$1"]], "0", 0, "0|180020", 0, 0, 0, [["(?:1(?:1(?:3(?:[0-58]\\d\\d|73[0-5])|4(?:(?:[0-5]\\d|70)\\d|69[7-9])|(?:(?:5[0-26-9]|[78][0-49])\\d|6(?:[0-4]\\d|5[01]))\\d)|(?:2(?:(?:0[024-9]|2[3-9]|3[3-79]|4[1-689]|[58][02-9]|6[0-47-9]|7[013-9]|9\\d)\\d|1(?:[0-7]\\d|8[0-3]))|(?:3(?:0\\d|1[0-8]|[25][02-9]|3[02-579]|[468][0-46-9]|7[1-35-79]|9[2-578])|4(?:0[03-9]|[137]\\d|[28][02-57-9]|4[02-69]|5[0-8]|[69][0-79])|5(?:0[1-35-9]|[16]\\d|2[024-9]|3[015689]|4[02-9]|5[03-9]|7[0-35-9]|8[0-468]|9[0-57-9])|6(?:0[034689]|1\\d|2[0-35689]|[38][013-9]|4[1-467]|5[0-69]|6[13-9]|7[0-8]|9[0-24578])|7(?:0[0246-9]|2\\d|3[0236-8]|4[03-9]|5[0-46-9]|6[013-9]|7[0-35-9]|8[024-9]|9[02-9])|8(?:0[35-9]|2[1-57-9]|3[02-578]|4[0-578]|5[124-9]|6[2-69]|7\\d|8[02-9]|9[02569])|9(?:0[02-589]|[18]\\d|2[02-689]|3[1-57-9]|4[2-9]|5[0-579]|6[2-47-9]|7[0-24578]|9[2-57]))\\d)\\d)|2(?:0[013478]|3[0189]|4[017]|8[0-46-9]|9[0-2])\\d{3})\\d{4}|1(?:2(?:0(?:46[1-4]|87[2-9])|545[1-79]|76(?:2\\d|3[1-8]|6[1-6])|9(?:7(?:2[0-4]|3[2-5])|8(?:2[2-8]|7[0-47-9]|8[3-5])))|3(?:6(?:38[2-5]|47[23])|8(?:47[04-9]|64[0157-9]))|4(?:044[1-7]|20(?:2[23]|8\\d)|6(?:0(?:30|5[2-57]|6[1-8]|7[2-8])|140)|8(?:052|87[1-3]))|5(?:2(?:4(?:3[2-79]|6\\d)|76\\d)|6(?:26[06-9]|686))|6(?:06(?:4\\d|7[4-79])|295[5-7]|35[34]\\d|47(?:24|61)|59(?:5[08]|6[67]|74)|9(?:55[0-4]|77[23]))|7(?:26(?:6[13-9]|7[0-7])|(?:442|688)\\d|50(?:2[0-3]|[3-68]2|76))|8(?:27[56]\\d|37(?:5[2-5]|8[239])|843[2-58])|9(?:0(?:0(?:6[1-8]|85)|52\\d)|3583|4(?:66[1-8]|9(?:2[01]|81))|63(?:23|3[1-4])|9561))\\d{3}", [9, 10]], ["7(?:457[0-57-9]|700[01]|911[028])\\d{5}|7(?:[1-3]\\d\\d|4(?:[0-46-9]\\d|5[0-689])|5(?:0[0-8]|[13-9]\\d|2[0-35-9])|7(?:0[1-9]|[1-7]\\d|8[02-9]|9[0-689])|8(?:[014-9]\\d|[23][0-8])|9(?:[024-9]\\d|1[02-9]|3[0-689]))\\d{6}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[2-49]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]], 0, " x"], "GD": ["1", "011", "(?:473|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "473$1", 0, "473"], "GE": ["995", "00", "(?:[3-57]\\d\\d|800)\\d{6}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["32"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[57]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[348]"], "0$1"]], "0"], "GF": ["594", "00", "(?:694\\d|7093)\\d{5}|(?:59|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]|80[6-9]|9[47]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[89]"], "0$1"]], "0"], "GG": ["44", "00", "(?:1481|[357-9]\\d{3})\\d{6}|8\\d{6}(?:\\d{2})?", [7, 9, 10], 0, "0", 0, "([25-9]\\d{5})$|0|180020", "1481$1", 0, 0, [["1481[25-9]\\d{5}", [10]], ["7(?:(?:781|839)\\d|911[17])\\d{5}", [10]], ["80[08]\\d{7}|800\\d{6}|8001111"], ["(?:8(?:4[2-5]|7[0-3])|9(?:[01]\\d|8[0-3]))\\d{7}|845464\\d", [7, 10]], ["70\\d{8}", [10]], 0, ["(?:3[0347]|55)\\d{8}", [10]], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}", [10]], ["56\\d{8}", [10]]]], "GH": ["233", "00", "[235]\\d{8}|800\\d{5,6}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2358]"], "0$1"]], "0"], "GI": ["350", "00", "(?:[25]\\d|60)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["2"]]]], "GL": ["299", "00", "(?:19|[2-689]\\d|70)\\d{4}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["19|[2-9]"]]]], "GM": ["220", "00", "[2-9]\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "GN": ["224", "00", "722\\d{6}|(?:3|6\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["3"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[67]"]]]], "GP": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|80[6-9]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[1-68]|[14][0-24-9]|2[0-68]|3[1-9]|5[3-579]|[68][0-689]|7[08]|9\\d)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "GQ": ["240", "00", "222\\d{6}|(?:3\\d|55|[89]0)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235]"]], ["(\\d{3})(\\d{6})", "$1 $2", ["[89]"]]]], "GR": ["30", "00", "5005000\\d{3}|8\\d{9,11}|(?:[269]\\d|70)\\d{8}", [10, 11, 12], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["21|7"]], ["(\\d{4})(\\d{6})", "$1 $2", ["2(?:2|3[2-57-9]|4[2-469]|5[2-59]|6[2-9]|7[2-69]|8[2-49])|5"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2689]"]], ["(\\d{3})(\\d{3,4})(\\d{5})", "$1 $2 $3", ["8"]]]], "GT": ["502", "00", "80\\d{6}|(?:1\\d{3}|[2-7])\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[2-8]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "GU": ["1", "011", "(?:[58]\\d\\d|671|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "671$1", 0, "671"], "GW": ["245", "00", "[49]\\d{8}|4\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["40"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"]]]], "GY": ["592", "001", "(?:[2-8]\\d{3}|9008)\\d{3}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "HK": ["852", "00(?:30|5[09]|[126-9]?)", "8[0-46-9]\\d{6,7}|9\\d{4,7}|(?:[2-7]|9\\d{3})\\d{7}", [5, 6, 7, 8, 9, 11], [["(\\d{3})(\\d{2,5})", "$1 $2", ["900", "9003"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[2-7]|8[1-4]|9(?:0[1-9]|[1-8])"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{3})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["9"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "HN": ["504", "00", "8\\d{10}|[237-9]\\d{7}", [8, 11], [["(\\d{4})(\\d{4})", "$1-$2", ["[237-9]"]]]], "HR": ["385", "00", "[2-69]\\d{8}|80\\d{5,7}|[1-79]\\d{7}|6\\d{6}", [7, 8, 9], [["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["6[01]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{4})(\\d{3})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6|7[245]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-57]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"]], "0"], "HT": ["509", "00", "[2-589]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["[2-589]"]]]], "HU": ["36", "00", "[235-7]\\d{8}|[1-9]\\d{7}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27][2-9]|3[2-7]|4[24-9]|5[2-79]|6|8[2-57-9]|9[2-69]"], "(06 $1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "06 $1"]], "06"], "ID": ["62", "00[89]", "00[1-9]\\d{9,14}|(?:[1-36]|8\\d{5})\\d{6}|00\\d{9}|[1-9]\\d{8,10}|[2-9]\\d{7}", [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["15"]], ["(\\d{2})(\\d{5,9})", "$1 $2", ["2[124]|[36]1"], "(0$1)"], ["(\\d{3})(\\d{5,7})", "$1 $2", ["800"], "0$1"], ["(\\d{3})(\\d{5,8})", "$1 $2", ["[2-79]"], "(0$1)"], ["(\\d{3})(\\d{3,4})(\\d{3})", "$1-$2-$3", ["8[1-35-9]"], "0$1"], ["(\\d{3})(\\d{6,8})", "$1 $2", ["1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["804"], "0$1"], ["(\\d{3})(\\d)(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["80"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1-$2-$3", ["8"], "0$1"]], "0"], "IE": ["353", "00", "(?:1\\d|[2569])\\d{6,8}|4\\d{6,9}|7\\d{8}|8\\d{8,9}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["2[24-9]|47|58|6[237-9]|9[35-9]"], "(0$1)"], ["(\\d{3})(\\d{5})", "$1 $2", ["[45]0"], "(0$1)"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2569]|4[1-69]|7[14]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["70"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["81"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["4"], "(0$1)"], ["(\\d{2})(\\d)(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "IL": ["972", "0(?:0|1[2-9])", "1\\d{6}(?:\\d{3,5})?|[57]\\d{8}|[1-489]\\d{7}", [7, 8, 9, 10, 11, 12], [["(\\d{4})(\\d{3})", "$1-$2", ["125"]], ["(\\d{4})(\\d{2})(\\d{2})", "$1-$2-$3", ["121"]], ["(\\d)(\\d{3})(\\d{4})", "$1-$2-$3", ["[2-489]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1-$2-$3", ["12"]], ["(\\d{4})(\\d{6})", "$1-$2", ["159"]], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3-$4", ["1[7-9]"]], ["(\\d{3})(\\d{1,2})(\\d{3})(\\d{4})", "$1-$2 $3-$4", ["15"]]], "0"], "IM": ["44", "00", "1624\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([25-8]\\d{5})$|0|180020", "1624$1", 0, "74576|(?:16|7[56])24"], "IN": ["91", "00", "(?:000800|[2-9]\\d\\d)\\d{7}|1\\d{7,12}", [8, 9, 10, 11, 12, 13], [["(\\d{8})", "$1", ["5(?:0|2[23]|3[03]|[67]1|88)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|888)", "5(?:0|2(?:21|3)|3(?:0|3[23])|616|717|8888)"], 0, 1], ["(\\d{4})(\\d{4,5})", "$1 $2", ["180", "1800"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["140"], 0, 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["11|2[02]|33|4[04]|79[1-7]|80[2-46]", "11|2[02]|33|4[04]|79(?:[1-6]|7[19])|80(?:[2-4]|6[0-589])", "11|2[02]|33|4[04]|79(?:[124-6]|3(?:[02-9]|1[0-24-9])|7(?:1|9[1-6]))|80(?:[2-4]|6[0-589])"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1(?:2[0-249]|3[0-25]|4[145]|[68]|7[1257])|2(?:1[257]|3[013]|4[01]|5[0137]|6[0158]|78|8[1568])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|5[12]|[78]1)|6(?:12|[2-4]1|5[17]|6[13]|80)|7(?:12|3[134]|61|88)|8(?:16|2[014]|3[126]|6[136]|7[078]|8[34]|91)|(?:43|59|75)[15]|(?:1[59]|29|67)[14]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|674|7(?:(?:3[34]|5[15])[2-6]|61[346]|88[0-8])|8(?:70[2-6]|84[235-7]|91[3-7])|(?:1(?:29|60|8[06])|261|552|6(?:12|[2-47]1|5[17]|6[13]|80)|7(?:12|31)|8(?:16|2[014]|3[126]|6[136]|7[78]|83))[2-7]", "1(?:2[0-24]|3[0-25]|4[145]|[59][14]|6[1-9]|7[1257]|8[1-57-9])|2(?:1[257]|3[013]|4[01]|5[0137]|6[058]|78|8[1568]|9[14])|3(?:26|4[1-3]|5[34]|6[01489]|7[02-46]|8[159])|4(?:1[36]|2[1-47]|3[15]|5[12]|6[0-26-9]|7[0-24-9]|8[013-57]|9[014-7])|5(?:1[025]|22|[36][25]|4[28]|[578]1|9[15])|6(?:12(?:[2-6]|7[0-8])|74[2-7])|7(?:3171|5[15][2-6]|61[346]|88(?:[2-7]|82))|8(?:70[2-6]|84(?:[2356]|7[19])|91(?:[3-6]|7[19]))|73[134][2-6]|8(?:16|2[014]|3[126]|6[136]|7[78]|83)(?:[2-6]|7[19])|(?:1(?:29|60|8[06])|261|552|6(?:[2-4]1|5[17]|6[13]|7(?:1|4[0189])|80)|7(?:12|88[01]))[2-7]"], "0$1", 1], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2[2457-9]|3[2-5]|4[235-7]|5[2-689]|6[24578]|7[235689]|8[1-6])|7(?:1[013-9]|3[129]|5[29]|6[02-5]|70)|807", "1(?:[2-479]|5[0235-9])|[2-5]|6(?:1[1358]|2(?:[2457]|84|95)|3(?:[2-4]|55)|4[235-7]|5[2-689]|6[24578]|7(?:[23569]|8[0-57-9])|8[1-6])|7(?:1(?:[013-8]|9[6-9])|3(?:17|2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4|5[0-367])|70[13-7])|807[19]", "1(?:[2-479]|5(?:[0236-9]|5[013-9]))|[2-5]|6(?:2(?:84|95)|355|8(?:28[235-7]|3))|73179|807(?:1|9[1-3])|(?:1552|6(?:(?:1[1358]|2[2457]|3[2-4]|4[235-7]|5[2-689]|6[24578])\\d|7(?:[23569]\\d|8[0-57-9])|8(?:[14-6]\\d|2[0-79]))|7(?:1(?:[013-8]\\d|9[6-9])|3(?:2[0-49]|9[2-57])|5(?:2[1-3]|9[0-6])|6(?:0[5689]|2[5-9]|3[02-8]|4\\d|5[0-367])|70[13-7]))[2-7]"], "0$1", 1], ["(\\d{5})(\\d{5})", "$1 $2", ["16|[6-9]"], "0$1", 1], ["(\\d{4})(\\d{2,4})(\\d{4})", "$1 $2 $3", ["18[06]", "18[06]0"], 0, 1], ["(\\d{4})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["18"], 0, 1]], "0"], "IO": ["246", "00", "3\\d{6}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["3"]]]], "IQ": ["964", "00", "(?:1|7\\d\\d)\\d{7}|[2-6]\\d{7,8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-6]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"]], "0"], "IR": ["98", "00", "[1-9]\\d{9}|(?:[1-8]\\d\\d|9)\\d{3,4}", [4, 5, 6, 7, 10], [["(\\d{4,5})", "$1", ["96"], "0$1"], ["(\\d{2})(\\d{4,5})", "$1 $2", ["(?:1[137]|2[13-68]|3[1458]|4[145]|5[1468]|6[16]|7[1467]|8[13467])[12689]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["[1-8]"], "0$1"]], "0"], "IS": ["354", "00|1(?:0(?:01|[12]0)|100)", "(?:38\\d|[4-9])\\d{6}", [7, 9], [["(\\d{3})(\\d{4})", "$1 $2", ["[4-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["3"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "IT": ["39", "00", "0\\d{5,11}|1\\d{8,10}|3(?:[0-8]\\d{7,10}|9\\d{7,8})|(?:43|55|70)\\d{8}|8\\d{5}(?:\\d{2,4})?", [6, 7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{4,6})", "$1 $2", ["0[26]"]], ["(\\d{3})(\\d{3,6})", "$1 $2", ["0[13-57-9][0159]|8(?:03|4[17]|9[2-5])", "0[13-57-9][0159]|8(?:03|4[17]|9(?:2|3[04]|[45][0-4]))"]], ["(\\d{4})(\\d{2,6})", "$1 $2", ["0(?:[13-579][2-46-8]|8[236-8])"]], ["(\\d{4})(\\d{4})", "$1 $2", ["894"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[26]|5"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["1(?:44|[679])|[378]|43"]], ["(\\d{3})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["0[13-57-9][0159]|14"]], ["(\\d{2})(\\d{4})(\\d{5})", "$1 $2 $3", ["0[26]"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[03]"]]], 0, 0, 0, 0, 0, 0, [["0(?:669[0-79]\\d{1,6}|831\\d{2,8})|0(?:1(?:[0159]\\d|[27][1-5]|31|4[1-4]|6[1356]|8[2-57])|2\\d\\d|3(?:[0159]\\d|2[1-4]|3[12]|[48][1-6]|6[2-59]|7[1-7])|4(?:[0159]\\d|[23][1-9]|4[245]|6[1-5]|7[1-4]|81)|5(?:[0159]\\d|2[1-5]|3[2-6]|4[1-79]|6[4-6]|7[1-578]|8[3-8])|6(?:[0-57-9]\\d|6[0-8])|7(?:[0159]\\d|2[12]|3[1-7]|4[2-46]|6[13569]|7[13-6]|8[1-59])|8(?:[0159]\\d|2[3-578]|3[2356]|[6-8][1-5])|9(?:[0159]\\d|[238][1-5]|4[12]|6[1-8]|7[1-6]))\\d{2,7}"], ["3[2-9]\\d{7,8}|(?:31|43)\\d{8}", [9, 10]], ["80(?:0\\d{3}|3)\\d{3}", [6, 9]], ["(?:0878\\d{3}|89(?:2\\d|3[04]|4(?:[0-4]|[5-9]\\d\\d)|5[0-4]))\\d\\d|(?:1(?:44|6[346])|89(?:38|5[5-9]|9))\\d{6}", [6, 8, 9, 10]], ["1(?:78\\d|99)\\d{6}", [9, 10]], ["3[2-8]\\d{9,10}", [11, 12]], 0, 0, ["55\\d{8}", [10]], ["84(?:[08]\\d{3}|[17])\\d{3}", [6, 9]]]], "JE": ["44", "00", "1534\\d{6}|(?:[3578]\\d|90)\\d{8}", [10], 0, "0", 0, "([0-24-8]\\d{5})$|0|180020", "1534$1", 0, 0, [["1534[0-24-8]\\d{5}"], ["7(?:(?:(?:50|82)9|937)\\d|7(?:00[378]|97\\d))\\d{5}"], ["80(?:07(?:35|81)|8901)\\d{4}"], ["(?:8(?:4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|90(?:066[59]|1810|71(?:07|55)))\\d{4}"], ["701511\\d{4}"], 0, ["(?:3(?:0(?:07(?:35|81)|8901)|3\\d{4}|4(?:4(?:4(?:05|42|69)|703)|5(?:041|800))|7(?:0002|1206))|55\\d{4})\\d{4}"], ["76(?:464|652)\\d{5}|76(?:0[0-28]|2[356]|34|4[01347]|5[49]|6[0-369]|77|8[14]|9[139])\\d{6}"], ["56\\d{8}"]]], "JM": ["1", "011", "(?:[58]\\d\\d|658|900)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "658|876"], "JO": ["962", "00", "(?:(?:[2689]|7\\d)\\d|32|427|53)\\d{6}", [8, 9], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2356]|87"], "(0$1)"], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["70"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[47]"], "0$1"]], "0"], "JP": ["81", "010", "00[1-9]\\d{6,14}|[25-9]\\d{9}|(?:00|[1-9]\\d\\d)\\d{6}", [8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [["(\\d{3})(\\d{3})(\\d{3})", "$1-$2-$3", ["(?:12|57|99)0"], "0$1"], ["(\\d{4})(\\d)(\\d{4})", "$1-$2-$3", ["1(?:26|3[79]|4[56]|5[4-68]|6[3-5])|499|5(?:76|97)|746|8(?:3[89]|47|51)|9(?:80|9[16])", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:76|97)9|7468|8(?:3(?:8[7-9]|96)|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]", "1(?:267|3(?:7[247]|9[278])|466|5(?:47|58|64)|6(?:3[245]|48|5[4-68]))|499[2468]|5(?:769|979[2-69])|7468|8(?:3(?:8[7-9]|96[2457-9])|477|51[2-9])|9(?:802|9(?:1[23]|69))|1(?:45|58)[67]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["60"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2-$3", ["3|4(?:2[09]|7[01])|6[1-9]", "3|4(?:2(?:0|9[02-69])|7(?:0[019]|1))|6[1-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["1(?:1|5[45]|77|88|9[69])|2(?:2[1-37]|3[0-269]|4[59]|5|6[24]|7[1-358]|8[1369]|9[0-38])|4(?:[28][1-9]|3[0-57]|[45]|6[248]|7[2-579]|9[29])|5(?:2|3[0459]|4[0-369]|5[29]|8[02389]|9[0-389])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9[2-6])|8(?:2[124589]|3[26-9]|49|51|6|7[0-468]|8[68]|9[019])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9[1-489])", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2(?:[127]|3[014-9])|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9[19])|62|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|8[1-9]|9[29])|5(?:2|3(?:[045]|9[0-8])|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0-2469])|3(?:[29]|60)|49|51|6(?:[0-24]|36|5[0-3589]|7[23]|9[01459])|7[0-468]|8[68])|9(?:[23][1-9]|4[15]|5[138]|6[1-3]|7[156]|8[189]|9(?:[1289]|3[34]|4[0178]))|(?:264|837)[016-9]|2(?:57|93)[015-9]|(?:25[0468]|422|838)[01]|(?:47[59]|59[89]|8(?:6[68]|9))[019]", "1(?:1|5(?:4[018]|5[017])|77|88|9[69])|2(?:2[127]|3[0-269]|4[59]|5(?:[1-3]|5[0-69]|9(?:17|99))|6(?:2|4[016-9])|7(?:[1-35]|8[0189])|8(?:[16]|3[0134]|9[0-5])|9(?:[028]|17))|4(?:2(?:[13-79]|8[014-6])|3[0-57]|[45]|6[248]|7[2-47]|9[29])|5(?:2|3(?:[045]|9(?:[0-58]|6[4-9]|7[0-35689]))|4[0-369]|5[29]|8[02389]|9[0-3])|7(?:2[02-46-9]|34|[58]|6[0249]|7[57]|9(?:[23]|4[0-59]|5[01569]|6[0167]))|8(?:2(?:[1258]|4[0-39]|9[0169])|3(?:[29]|60|7(?:[017-9]|6[6-8]))|49|51|6(?:[0-24]|36[2-57-9]|5(?:[0-389]|5[23])|6(?:[01]|9[178])|7(?:2[2-468]|3[78])|9[0145])|7[0-468]|8[68])|9(?:4[15]|5[138]|7[156]|8[189]|9(?:[1289]|3(?:31|4[357])|4[0178]))|(?:8294|96)[1-3]|2(?:57|93)[015-9]|(?:223|8699)[014-9]|(?:25[0468]|422|838)[01]|(?:48|8292|9[23])[1-9]|(?:47[59]|59[89]|8(?:68|9))[019]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3", ["[14]|[289][2-9]|5[3-9]|7[2-4679]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2-$3", ["800"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[25-9]"], "0$1"]], "0", 0, "(000[2569]\\d{4,6})$|(?:(?:003768)0?)|0", "$1"], "KE": ["254", "000", "(?:[17]\\d\\d|900)\\d{6}|(?:2|80)0\\d{6,7}|[4-6]\\d{6,8}", [7, 8, 9, 10], [["(\\d{2})(\\d{5,7})", "$1 $2", ["[24-6]"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[17]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0"], "KG": ["996", "00", "8\\d{9}|[235-9]\\d{8}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["3(?:1[346]|[24-79])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-79]|88"], "0$1"], ["(\\d{3})(\\d{3})(\\d)(\\d{2,3})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "KH": ["855", "00[14-9]", "1\\d{9}|[1-9]\\d{7,8}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "KI": ["686", "00", "(?:[37]\\d|6[0-79])\\d{6}|(?:[2-48]\\d|50)\\d{3}", [5, 8], 0, "0"], "KM": ["269", "00", "[3478]\\d{6}", [7], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[3478]"]]]], "KN": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "869$1", 0, "869"], "KP": ["850", "00|99", "85\\d{6}|(?:19\\d|[2-7])\\d{7}", [8, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-7]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"]], "0"], "KR": ["82", "00(?:[125689]|3(?:[46]5|91)|7(?:00|27|3|55|6[126]))", "00[1-9]\\d{8,11}|(?:[12]|5\\d{3})\\d{7}|[13-6]\\d{9}|(?:[1-6]\\d|80)\\d{7}|[3-6]\\d{4,5}|(?:00|7)0\\d{8}", [5, 6, 8, 9, 10, 11, 12, 13, 14], [["(\\d{2})(\\d{3,4})", "$1-$2", ["(?:3[1-3]|[46][1-4]|5[1-5])1"], "0$1"], ["(\\d{4})(\\d{4})", "$1-$2", ["1"]], ["(\\d)(\\d{3,4})(\\d{4})", "$1-$2-$3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1-$2-$3", ["[36]0|8"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1-$2-$3", ["[1346]|5[1-5]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2-$3", ["[57]"], "0$1"], ["(\\d{2})(\\d{5})(\\d{4})", "$1-$2-$3", ["5"], "0$1"]], "0", 0, "0(8(?:[1-46-8]|5\\d\\d))?"], "KW": ["965", "00", "18\\d{5}|(?:[2569]\\d|41)\\d{6}", [7, 8], [["(\\d{4})(\\d{3,4})", "$1 $2", ["[169]|2(?:[235]|4[1-35-9])|52"]], ["(\\d{3})(\\d{5})", "$1 $2", ["[245]"]]]], "KY": ["1", "011", "(?:345|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "345$1", 0, "345"], "KZ": ["7", "810", "8\\d{13}|[78]\\d{9}", [10, 14], 0, "8", 0, 0, 0, 0, "7", 0, "8~10"], "LA": ["856", "00", "[23]\\d{9}|3\\d{8}|(?:[235-8]\\d|41)\\d{6}", [8, 9, 10], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2[13]|3[14]|[4-8]"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["3"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0"], "LB": ["961", "00", "[27-9]\\d{7}|[13-9]\\d{6}", [7, 8], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[13-69]|7(?:[2-57]|62|8[0-6]|9[04-9])|8[02-9]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[27-9]"]]], "0"], "LC": ["1", "011", "(?:[58]\\d\\d|758|900)\\d{7}", [10], 0, "1", 0, "([2-8]\\d{6})$|1", "758$1", 0, "758"], "LI": ["423", "00", "[68]\\d{8}|(?:[2378]\\d|90)\\d{5}", [7, 9], [["(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2379]|8(?:0[09]|7)", "[2379]|8(?:0(?:02|9)|7)"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["69"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]]], "0", 0, "(1001)|0"], "LK": ["94", "00", "[1-9]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[1-689]"], "0$1"]], "0"], "LR": ["231", "00", "(?:[2457]\\d|33|88)\\d{7}|(?:2\\d|[4-6])\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["4[67]|[56]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-578]"], "0$1"]], "0"], "LS": ["266", "00", "(?:[256]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2568]"]]]], "LT": ["370", "00", "(?:[3469]\\d|52|[78]0)\\d{6}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["52[0-7]"], "(0-$1)", 1], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0 $1", 1], ["(\\d{2})(\\d{6})", "$1 $2", ["37|4(?:[15]|6[1-8])"], "(0-$1)", 1], ["(\\d{3})(\\d{5})", "$1 $2", ["[3-6]"], "(0-$1)", 1]], "0", 0, "[08]"], "LU": ["352", "00", "35[013-9]\\d{4,8}|6\\d{8}|35\\d{2,4}|(?:[2457-9]\\d|3[0-46-9])\\d{2,9}", [4, 5, 6, 7, 8, 9, 10, 11], [["(\\d{2})(\\d{3})", "$1 $2", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["2(?:0[2-689]|[2-9])|[3-57]|8(?:0[2-9]|[13-9])|9(?:0[89]|[2-579])"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["20[2-689]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4", ["20"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{1,5})", "$1 $2 $3 $4", ["[3-57]|8[13-9]|9(?:0[89]|[2-579])|(?:2|80)[2-9]"]], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["80[01]|90[015]"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3 $4", ["20"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})(\\d{1,2})", "$1 $2 $3 $4 $5", ["20"]]], 0, 0, "(15(?:0[06]|1[12]|[35]5|4[04]|6[26]|77|88|99)\\d)"], "LV": ["371", "00", "(?:[268]\\d|78|90)\\d{6}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2679]|8[01]"]]]], "LY": ["218", "00", "[2-9]\\d{8}", [9], [["(\\d{2})(\\d{7})", "$1-$2", ["[2-9]"], "0$1"]], "0"], "MA": ["212", "00", "[5-8]\\d{8}", [9], [["(\\d{4})(\\d{5})", "$1-$2", ["892"], "0$1"], ["(\\d{2})(\\d{7})", "$1-$2", ["8(?:0[0-7]|9)"], "0$1"], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[5-8]"], "0$1"]], "0", 0, 0, 0, 0, "[5-8]"], "MC": ["377", "00", "(?:[3489]|[67]\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["4"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[389]"]], ["(\\d)(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4 $5", ["[67]"], "0$1"]], "0"], "MD": ["373", "00", "(?:[235-7]\\d|[89]0)\\d{6}", [8], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["22|3"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["[25-7]"], "0$1"]], "0"], "ME": ["382", "00", "(?:20|[3-79]\\d)\\d{6}|80\\d{6,7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[2-9]"], "0$1"]], "0"], "MF": ["590", "00", "7090\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["(?:59(?:0(?:0[079]|[14]3|[27][79]|3[03-7]|5[0-268]|87)|87\\d)|80[6-9]\\d\\d)\\d{4}"], ["(?:69(?:0\\d\\d|1(?:2[2-9]|3[0-5]))|7090[0-4])\\d{4}"], ["80[0-5]\\d{6}"], ["8[129]\\d{7}"], 0, 0, 0, 0, ["9(?:(?:39[5-7]|76[018])\\d|475[0-6])\\d{4}"]]], "MG": ["261", "00", "[23]\\d{8}", [9], [["(\\d{2})(\\d{2})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["[23]"], "0$1"]], "0", 0, "([24-9]\\d{6})$|0", "20$1"], "MH": ["692", "011", "329\\d{4}|(?:[256]\\d|45)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1-$2", ["[2-6]"]]], "1"], "MK": ["389", "00", "[2-578]\\d{7}", [8], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2|34[47]|4(?:[37]7|5[47]|64)"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[347]"], "0$1"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[58]"], "0$1"]], "0"], "ML": ["223", "00", "[24-9]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24-9]"]]]], "MM": ["95", "00", "1\\d{5,7}|95\\d{6}|(?:[4-7]|9[0-46-9])\\d{6,8}|(?:2|8\\d)\\d{5,8}", [6, 7, 8, 9, 10], [["(\\d)(\\d{2})(\\d{3})", "$1 $2 $3", ["16|2"], "0$1"], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["4(?:[2-46]|5[3-5])|5|6(?:[1-689]|7[235-7])|7(?:[0-4]|5[2-7])|8[1-5]|(?:60|86)[23]"], "0$1"], ["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[12]|452|678|86", "[12]|452|6788|86"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[4-7]|8[1-35]"], "0$1"], ["(\\d)(\\d{3})(\\d{4,6})", "$1 $2 $3", ["9(?:2[0-4]|[35-9]|4[137-9])"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["92"], "0$1"], ["(\\d)(\\d{5})(\\d{4})", "$1 $2 $3", ["9"], "0$1"]], "0"], "MN": ["976", "001", "[12]\\d{7,9}|[5-9]\\d{7}", [8, 9, 10], [["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["11|2[16]"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[5-9]"]], ["(\\d{3})(\\d{5,6})", "$1 $2", ["[12]2[1-3]"], "0$1"], ["(\\d{4})(\\d{5,6})", "$1 $2", ["[12](?:27|3[2-8]|4[2-68]|5[1-4689])", "[12](?:27|3[2-8]|4[2-68]|5[1-4689])[0-3]"], "0$1"], ["(\\d{5})(\\d{4,5})", "$1 $2", ["[12]"], "0$1"]], "0"], "MO": ["853", "00", "0800\\d{3}|(?:28|[68]\\d)\\d{6}", [7, 8], [["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[268]"]]]], "MP": ["1", "011", "[58]\\d{9}|(?:67|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "670$1", 0, "670"], "MQ": ["596", "00", "7091\\d{5}|(?:[56]9|[89]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-79]|8(?:0[6-9]|[36])"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "MR": ["222", "00", "(?:[2-4]\\d\\d|800)\\d{5}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-48]"]]]], "MS": ["1", "011", "(?:[58]\\d\\d|664|900)\\d{7}", [10], 0, "1", 0, "([34]\\d{6})$|1", "664$1", 0, "664"], "MT": ["356", "00", "3550\\d{4}|(?:[2579]\\d\\d|800)\\d{5}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[2357-9]"]]]], "MU": ["230", "0(?:0|[24-7]0|3[03])", "(?:[57]|8\\d\\d)\\d{7}|[2-468]\\d{6}", [7, 8, 10], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-46]|8[013]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[57]"]], ["(\\d{5})(\\d{5})", "$1 $2", ["8"]]], 0, 0, 0, 0, 0, 0, 0, "020"], "MV": ["960", "0(?:0|19)", "(?:800|9[0-57-9]\\d)\\d{7}|[34679]\\d{6}", [7, 10], [["(\\d{3})(\\d{4})", "$1-$2", ["[34679]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MW": ["265", "00", "(?:[1289]\\d|31|77)\\d{7}|1\\d{6}", [7, 9], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["1[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[137-9]"], "0$1"]], "0"], "MX": ["52", "0[09]", "[2-9]\\d{9}", [10], [["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["33|5[56]|81"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[2-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "MY": ["60", "00", "1\\d{8,9}|(?:3\\d|[4-9])\\d{7}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1-$2 $3", ["[4-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1-$2 $3", ["1(?:[02469]|[378][1-9]|53)|8", "1(?:[02469]|[37][1-9]|53|8(?:[1-46-9]|5[7-9]))|8"], "0$1"], ["(\\d)(\\d{4})(\\d{4})", "$1-$2 $3", ["3"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{4})", "$1-$2-$3-$4", ["1(?:[367]|80)"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1-$2 $3", ["15"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4})", "$1-$2 $3", ["1"], "0$1"]], "0"], "MZ": ["258", "00", "(?:2|8\\d)\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2|8[2-79]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["8"]]]], "NA": ["264", "00", "[68]\\d{7,8}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["88"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["87"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "NC": ["687", "00", "(?:050|[2-57-9]\\d\\d)\\d{3}", [6], [["(\\d{2})(\\d{2})(\\d{2})", "$1.$2.$3", ["[02-57-9]"]]]], "NE": ["227", "00", "[027-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["08"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[089]|2[013]|7[0467]"]]]], "NF": ["672", "00", "[13]\\d{5}", [6], [["(\\d{2})(\\d{4})", "$1 $2", ["1[0-3]"]], ["(\\d)(\\d{5})", "$1 $2", ["[13]"]]], 0, 0, "([0-258]\\d{4})$", "3$1"], "NG": ["234", "009", "(?:20|9\\d)\\d{8}|[78]\\d{9,13}", [10, 11, 12, 13, 14], [["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[7-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["20[129]"], "0$1"], ["(\\d{4})(\\d{2})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{3})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["[78]"], "0$1"], ["(\\d{3})(\\d{5})(\\d{5,6})", "$1 $2 $3", ["[78]"], "0$1"]], "0"], "NI": ["505", "00", "(?:1800|[25-8]\\d{3})\\d{4}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[125-8]"]]]], "NL": ["31", "00", "(?:[124-7]\\d\\d|3(?:[02-9]\\d|1[0-8]))\\d{6}|8\\d{6,9}|9\\d{6,10}|1\\d{4,5}", [5, 6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{4,7})", "$1 $2", ["[89]0"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["66"], "0$1"], ["(\\d)(\\d{8})", "$1 $2", ["6"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["1[16-8]|2[259]|3[124]|4[17-9]|5[124679]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-578]|91"], "0$1"], ["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3", ["9"], "0$1"]], "0"], "NO": ["47", "00", "(?:0|[2-9]\\d{3})\\d{4}", [5, 8], [["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["8"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[2-79]"]]], 0, 0, 0, 0, 0, "[02-689]|7[0-8]"], "NP": ["977", "00", "(?:1\\d|9)\\d{9}|[1-9]\\d{7}", [8, 10, 11], [["(\\d)(\\d{7})", "$1-$2", ["1[2-6]"], "0$1"], ["(\\d{2})(\\d{6})", "$1-$2", ["1[01]|[2-8]|9(?:[1-59]|[67][2-6])"], "0$1"], ["(\\d{3})(\\d{7})", "$1-$2", ["9"]]], "0"], "NR": ["674", "00", "(?:222|444|(?:55|8\\d)\\d|666|777|999)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[24-9]"]]]], "NU": ["683", "00", "(?:[4-7]|888\\d)\\d{3}", [4, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["8"]]]], "NZ": ["64", "0(?:0|161)", "[1289]\\d{9}|50\\d{5}(?:\\d{2,3})?|[27-9]\\d{7,8}|(?:[34]\\d|6[0-35-9])\\d{6}|8\\d{4,6}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,8})", "$1 $2", ["8[1-79]"], "0$1"], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["50[036-8]|8|90", "50(?:[0367]|88)|8|90"], "0$1"], ["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["24|[346]|7[2-57-9]|9[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:10|74)|[589]"], "0$1"], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["1|2[028]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,5})", "$1 $2 $3", ["2(?:[169]|7[0-35-9])|7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "00"], "OM": ["968", "00", "(?:1505|[279]\\d{3}|500)\\d{4}|800\\d{5,6}", [7, 8, 9], [["(\\d{3})(\\d{4,6})", "$1 $2", ["[58]"]], ["(\\d{2})(\\d{6})", "$1 $2", ["2"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[179]"]]]], "PA": ["507", "00", "(?:00800|8\\d{3})\\d{6}|[68]\\d{7}|[1-57-9]\\d{6}", [7, 8, 10, 11], [["(\\d{3})(\\d{4})", "$1-$2", ["[1-57-9]"]], ["(\\d{4})(\\d{4})", "$1-$2", ["[68]"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]]], "PE": ["51", "00|19(?:1[124]|77|90)00", "(?:[14-8]|9\\d)\\d{7}", [8, 9], [["(\\d{3})(\\d{5})", "$1 $2", ["80"], "(0$1)"], ["(\\d)(\\d{7})", "$1 $2", ["1"], "(0$1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[4-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"]]], "0", 0, 0, 0, 0, 0, 0, "00", " Anexo "], "PF": ["689", "00", "4\\d{5}(?:\\d{2})?|8\\d{7,8}", [6, 8, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["44"]], ["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["4|8[7-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "PG": ["675", "00|140[1-3]", "(?:180|[78]\\d{3})\\d{4}|(?:[2-589]\\d|64)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["18|[2-69]|85"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[78]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "PH": ["63", "00", "(?:[2-7]|9\\d)\\d{8}|2\\d{5}|(?:1800|8)\\d{7,9}", [6, 8, 9, 10, 11, 12, 13], [["(\\d)(\\d{5})", "$1 $2", ["2"], "(0$1)"], ["(\\d{4})(\\d{4,6})", "$1 $2", ["3(?:23|39|46)|4(?:2[3-6]|[35]9|4[26]|76)|544|88[245]|(?:52|64|86)2", "3(?:230|397|461)|4(?:2(?:35|[46]4|51)|396|4(?:22|63)|59[347]|76[15])|5(?:221|446)|642[23]|8(?:622|8(?:[24]2|5[13]))"], "(0$1)"], ["(\\d{5})(\\d{4})", "$1 $2", ["346|4(?:27|9[35])|883", "3469|4(?:279|9(?:30|56))|8834"], "(0$1)"], ["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["2"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|8[2-8]"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]], ["(\\d{4})(\\d{1,2})(\\d{3})(\\d{4})", "$1 $2 $3 $4", ["1"]]], "0"], "PK": ["92", "00", "122\\d{6}|[24-8]\\d{10,11}|9(?:[013-9]\\d{8,10}|2(?:[01]\\d\\d|2(?:[06-8]\\d|1[01]))\\d{7})|(?:[2-8]\\d{3}|92(?:[0-7]\\d|8[1-9]))\\d{6}|[24-9]\\d{8}|[89]\\d{7}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,7})", "$1 $2 $3", ["[89]0"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["1"]], ["(\\d{3})(\\d{6,7})", "$1 $2", ["2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:2[2-8]|3[27-9]|4[2-6]|6[3569]|9[25-8])", "9(?:2[3-8]|98)|(?:2(?:3[2358]|4[2-4]|9[2-8])|45[3479]|54[2-467]|60[468]|72[236]|8(?:2[2-689]|3[23578]|4[3478]|5[2356])|9(?:22|3[27-9]|4[2-6]|6[3569]|9[25-7]))[2-9]"], "(0$1)"], ["(\\d{2})(\\d{7,8})", "$1 $2", ["(?:2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91)[2-9]"], "(0$1)"], ["(\\d{5})(\\d{5})", "$1 $2", ["58"], "(0$1)"], ["(\\d{3})(\\d{7})", "$1 $2", ["3"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["2[125]|4[0-246-9]|5[1-35-7]|6[1-8]|7[14]|8[16]|91"], "(0$1)"], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[24-9]"], "(0$1)"]], "0"], "PL": ["48", "00", "(?:6|8\\d\\d)\\d{7}|[1-9]\\d{6}(?:\\d{2})?|[26]\\d{5}", [6, 7, 8, 9, 10], [["(\\d{5})", "$1", ["19"]], ["(\\d{3})(\\d{3})", "$1 $2", ["11|20|64"]], ["(\\d{2})(\\d{2})(\\d{3})", "$1 $2 $3", ["30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])1", "30|(?:1[2-8]|2[2-69]|3[2-4]|4[1-468]|5[24-689]|6[1-3578]|7[14-7]|8[1-79]|9[145])19"]], ["(\\d{3})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["64"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["21|39|45|5[0137]|6[0469]|7[02389]|8(?:0[14]|8)"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[2-8]|[2-7]|8[1-79]|9[145]"]], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["8"]]]], "PM": ["508", "00", "[78]\\d{8}|[2-9]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[2-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"], "0$1"]], "0"], "PR": ["1", "011", "(?:[589]\\d\\d|787)\\d{7}", [10], 0, "1", 0, 0, 0, 0, "787|939"], "PS": ["970", "00", "[2489]2\\d{6}|(?:1\\d|5)\\d{8}", [8, 9, 10], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["[2489]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "PT": ["351", "00", "1693\\d{5}|(?:[26-9]\\d|30)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["2[12]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["16|[236-9]"]]]], "PW": ["680", "01[12]", "(?:[24-8]\\d\\d|345|900)\\d{4}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-9]"]]]], "PY": ["595", "00", "[36-8]\\d{5,8}|4\\d{6,8}|59\\d{6}|9\\d{5,10}|(?:2\\d|5[0-8])\\d{6,7}", [6, 7, 8, 9, 10, 11], [["(\\d{3})(\\d{3,6})", "$1 $2", ["[2-9]0"], "0$1"], ["(\\d{2})(\\d{5})", "$1 $2", ["3[289]|4[246-8]|61|7[1-3]|8[1-36]"], "(0$1)"], ["(\\d{3})(\\d{4,5})", "$1 $2", ["2[279]|3[13-5]|4[359]|5|6(?:[34]|7[1-46-8])|7[46-8]|85"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2[14-68]|3[26-9]|4[1246-8]|6(?:1|75)|7[1-35]|8[1-36]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["87"]], ["(\\d{3})(\\d{6})", "$1 $2", ["9(?:[5-79]|8[1-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-8]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["9"]]], "0"], "QA": ["974", "00", "800\\d{4}|(?:2|800)\\d{6}|(?:0080|[3-7])\\d{7}", [7, 8, 9, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["2[136]|8"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[3-7]"]]]], "RE": ["262", "00", "709\\d{6}|(?:26|[689]\\d)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[26-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, [["2631[0-6]\\d{4}|26(?:2\\d|30|88)\\d{5}"], ["(?:69(?:2\\d\\d|3(?:[06][0-6]|1[0-3]|2[0-2]|3[0-39]|4\\d|5[0-5]|7[0-37]|8[0-8]|9[0-479]))|7092[0-3])\\d{4}"], ["80\\d{7}"], ["89[1-37-9]\\d{6}"], 0, 0, 0, 0, ["9(?:399[0-3]|479[0-6]|76(?:2[278]|3[0-37]))\\d{4}"], ["8(?:1[019]|2[0156]|84|90)\\d{6}"]]], "RO": ["40", "00", "(?:[236-8]\\d|90)\\d{7}|[23]\\d{5}", [6, 9], [["(\\d{3})(\\d{3})", "$1 $2", ["2[3-6]", "2[3-6]\\d9"], "0$1"], ["(\\d{2})(\\d{4})", "$1 $2", ["219|31"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[23]1"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[236-9]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, " int "], "RS": ["381", "00", "38[02-9]\\d{6,9}|6\\d{7,9}|90\\d{4,8}|38\\d{5,6}|(?:7\\d\\d|800)\\d{3,9}|(?:[12]\\d|3[0-79])\\d{5,10}", [6, 7, 8, 9, 10, 11, 12], [["(\\d{3})(\\d{3,9})", "$1 $2", ["(?:2[389]|39)0|[7-9]"], "0$1"], ["(\\d{2})(\\d{5,10})", "$1 $2", ["[1-36]"], "0$1"]], "0"], "RU": ["7", "810", "8\\d{13}|[347-9]\\d{9}", [10, 14], [["(\\d{4})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-8]|2[1-9])", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:1[23]|[2-9]2))", "7(?:1(?:[0-356]2|4[29]|7|8[27])|2(?:13[03-69]|62[013-9]))|72[1-57-9]2"], "8 ($1)", 1], ["(\\d{5})(\\d)(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["7(?:1[0-68]|2[1-9])", "7(?:1(?:[06][3-6]|[18]|2[35]|[3-5][3-5])|2(?:[13][3-5]|[24-689]|7[457]))", "7(?:1(?:0(?:[356]|4[023])|[18]|2(?:3[013-9]|5)|3[45]|43[013-79]|5(?:3[1-8]|4[1-7]|5)|6(?:3[0-35-9]|[4-6]))|2(?:1(?:3[178]|[45])|[24-689]|3[35]|7[457]))|7(?:14|23)4[0-8]|71(?:33|45)[1-79]"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "8 ($1)", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[349]|8(?:[02-7]|1[1-8])"], "8 ($1)", 1], ["(\\d{4})(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["8"], "8 ($1)"]], "8", 0, 0, 0, 0, "[3489]", 0, "8~10"], "RW": ["250", "00", "(?:06|[27]\\d\\d|[89]00)\\d{6}", [8, 9], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[7-9]"], "0$1"]], "0"], "SA": ["966", "00", "(?:[15]\\d|800|92)\\d{7}", [9, 10], [["(\\d{4})(\\d{5})", "$1 $2", ["9"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["5"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]]], "0"], "SB": ["677", "0[01]", "[6-9]\\d{6}|[1-6]\\d{4}", [5, 7], [["(\\d{2})(\\d{5})", "$1 $2", ["6[89]|7|8[4-9]|9(?:[1-8]|9[0-8])"]]]], "SC": ["248", "010|0[0-2]", "(?:[2489]\\d|64)\\d{5}", [7], [["(\\d)(\\d{3})(\\d{3})", "$1 $2 $3", ["[246]|9[57]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "SD": ["249", "00", "[19]\\d{8}", [9], [["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "SE": ["46", "00", "(?:[26]\\d\\d|9)\\d{9}|[1-9]\\d{8}|[1-689]\\d{7}|[1-4689]\\d{6}|2\\d{5}", [6, 7, 8, 9, 10, 12], [["(\\d{2})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["20"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{4})", "$1-$2", ["9(?:00|39|44|9)"], "0$1", 0, "$1 $2"], ["(\\d{2})(\\d{3})(\\d{2})", "$1-$2 $3", ["[12][136]|3[356]|4[0246]|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3"], ["(\\d)(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2,3})(\\d{2})", "$1-$2 $3", ["1[2457]|2(?:[247-9]|5[0138])|3[0247-9]|4[1357-9]|5[0-35-9]|6(?:[125689]|4[02-57]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3"], ["(\\d{3})(\\d{2,3})(\\d{3})", "$1-$2 $3", ["9(?:00|39|44)"], "0$1", 0, "$1 $2 $3"], ["(\\d{2})(\\d{2,3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["1[13689]|2[0136]|3[1356]|4[0246]|54|6[03]|90[1-9]"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["10|7"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1-$2 $3 $4", ["8"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1-$2 $3 $4", ["[13-5]|2(?:[247-9]|5[0138])|6(?:[124-689]|7[0-2])|9(?:[125-8]|3[02-5]|4[0-3])"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{2})(\\d{3})", "$1-$2 $3 $4", ["9"], "0$1", 0, "$1 $2 $3 $4"], ["(\\d{3})(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1-$2 $3 $4 $5", ["[26]"], "0$1", 0, "$1 $2 $3 $4 $5"]], "0"], "SG": ["65", "0[0-3]\\d", "(?:(?:1\\d|8)\\d\\d|7000)\\d{7}|[3689]\\d{7}", [8, 10, 11], [["(\\d{4})(\\d{4})", "$1 $2", ["[369]|8(?:0[1-9]|[1-9])"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"]], ["(\\d{4})(\\d{4})(\\d{3})", "$1 $2 $3", ["7"]], ["(\\d{4})(\\d{3})(\\d{4})", "$1 $2 $3", ["1"]]]], "SH": ["290", "00", "(?:[256]\\d|8)\\d{3}", [4, 5], 0, 0, 0, 0, 0, 0, "[256]"], "SI": ["386", "00|10(?:22|66|88|99)", "[1-7]\\d{7}|8\\d{4,7}|90\\d{4,6}", [5, 6, 7, 8], [["(\\d{2})(\\d{3,6})", "$1 $2", ["8[09]|9"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["59|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[37][01]|4[0139]|51|6"], "0$1"], ["(\\d)(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[1-57]"], "(0$1)"]], "0", 0, 0, 0, 0, 0, 0, "00"], "SJ": ["47", "00", "0\\d{4}|(?:[489]\\d|79)\\d{6}", [5, 8], 0, 0, 0, 0, 0, 0, "79"], "SK": ["421", "00", "[2-689]\\d{8}|[2-59]\\d{6}|[2-5]\\d{5}", [6, 7, 9], [["(\\d)(\\d{2})(\\d{3,4})", "$1 $2 $3", ["21"], "0$1"], ["(\\d{2})(\\d{2})(\\d{2,3})", "$1 $2 $3", ["[3-5][1-8]1", "[3-5][1-8]1[67]"], "0$1"], ["(\\d)(\\d{3})(\\d{3})(\\d{2})", "$1 $2 $3 $4", ["2"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[689]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[3-5]"], "0$1"]], "0"], "SL": ["232", "00", "(?:[237-9]\\d|66)\\d{6}", [8], [["(\\d{2})(\\d{6})", "$1 $2", ["[236-9]"], "(0$1)"]], "0"], "SM": ["378", "00", "(?:0549|[5-7]\\d)\\d{6}", [8, 10], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[5-7]"]], ["(\\d{4})(\\d{6})", "$1 $2", ["0"]]], 0, 0, "([89]\\d{5})$", "0549$1"], "SN": ["221", "00", "(?:[378]\\d|93)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[379]"]]]], "SO": ["252", "00", "[346-9]\\d{8}|[12679]\\d{7}|[1-5]\\d{6}|[1348]\\d{5}", [6, 7, 8, 9], [["(\\d{2})(\\d{4})", "$1 $2", ["8[125]"]], ["(\\d{6})", "$1", ["[134]"]], ["(\\d)(\\d{6})", "$1 $2", ["[15]|2[0-79]|3[0-46-8]|4[0-7]"]], ["(\\d{2})(\\d{5,7})", "$1 $2", ["1|28|9[2-9]"]], ["(\\d)(\\d{7})", "$1 $2", ["[267]|904"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[346-9]"]]], "0"], "SR": ["597", "00", "(?:[2-5]|[6-9]\\d)\\d{5}", [6, 7], [["(\\d{2})(\\d{2})(\\d{2})", "$1-$2-$3", ["56"]], ["(\\d{3})(\\d{3})", "$1-$2", ["[2-5]"]], ["(\\d{3})(\\d{4})", "$1-$2", ["[6-9]"]]]], "SS": ["211", "00", "[19]\\d{8}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[19]"], "0$1"]], "0"], "ST": ["239", "00", "(?:22|9\\d)\\d{5}", [7], [["(\\d{3})(\\d{4})", "$1 $2", ["[29]"]]]], "SV": ["503", "00", "[25-7]\\d{7}|(?:80\\d|900)\\d{4}(?:\\d{4})?", [7, 8, 11], [["(\\d{3})(\\d{4})", "$1 $2", ["[89]"]], ["(\\d{4})(\\d{4})", "$1 $2", ["[25-7]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["[89]"]]]], "SX": ["1", "011", "7215\\d{6}|(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "(5\\d{6})$|1", "721$1", 0, "721"], "SY": ["963", "00", "[1-359]\\d{8}|[1-5]\\d{7}", [8, 9], [["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-4]|5[1-3]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[59]"], "0$1", 1]], "0"], "SZ": ["268", "00", "0800\\d{4}|(?:[237]\\d|900)\\d{6}", [8, 9], [["(\\d{4})(\\d{4})", "$1 $2", ["[0237]"]], ["(\\d{5})(\\d{4})", "$1 $2", ["9"]]]], "TA": ["290", "00", "8\\d{3}", [4], 0, 0, 0, 0, 0, 0, "8"], "TC": ["1", "011", "(?:[58]\\d\\d|649|900)\\d{7}", [10], 0, "1", 0, "([2-479]\\d{6})$|1", "649$1", 0, "649"], "TD": ["235", "00|16", "(?:22|[3689]\\d|77)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[236-9]"]]], 0, 0, 0, 0, 0, 0, 0, "00"], "TG": ["228", "00", "[279]\\d{7}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[279]"]]]], "TH": ["66", "00[1-9]", "(?:001800|[2-57]|[689]\\d)\\d{7}|1\\d{7,9}", [8, 9, 10, 13], [["(\\d)(\\d{3})(\\d{4})", "$1 $2 $3", ["2"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[13-9]"], "0$1"], ["(\\d{4})(\\d{3})(\\d{3})", "$1 $2 $3", ["1"]]], "0"], "TJ": ["992", "810", "(?:[0-57-9]\\d|66)\\d{7}", [9], [["(\\d{6})(\\d)(\\d{2})", "$1 $2 $3", ["331", "3317"]], ["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["44[02-479]|[34]7"]], ["(\\d{4})(\\d)(\\d{4})", "$1 $2 $3", ["3(?:[1245]|3[12])"]], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["\\d"]]], 0, 0, 0, 0, 0, 0, 0, "8~10"], "TK": ["690", "00", "[2-47]\\d{3,6}", [4, 5, 6, 7]], "TL": ["670", "00", "7\\d{7}|(?:[2-47]\\d|[89]0)\\d{5}", [7, 8], [["(\\d{3})(\\d{4})", "$1 $2", ["[2-489]|70"]], ["(\\d{4})(\\d{4})", "$1 $2", ["7"]]]], "TM": ["993", "810", "(?:[1-6]\\d|71)\\d{6}", [8], [["(\\d{2})(\\d{2})(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["12"], "(8 $1)"], ["(\\d{3})(\\d)(\\d{2})(\\d{2})", "$1 $2-$3-$4", ["[1-5]"], "(8 $1)"], ["(\\d{2})(\\d{6})", "$1 $2", ["[67]"], "8 $1"]], "8", 0, 0, 0, 0, 0, 0, "8~10"], "TN": ["216", "00", "[2-57-9]\\d{7}", [8], [["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-57-9]"]]]], "TO": ["676", "00", "(?:0800|(?:[5-8]\\d\\d|999)\\d)\\d{3}|[2-8]\\d{4}", [5, 7], [["(\\d{2})(\\d{3})", "$1-$2", ["[2-4]|50|6[09]|7[0-24-69]|8[05]"]], ["(\\d{4})(\\d{3})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[5-9]"]]]], "TR": ["90", "00", "4\\d{6}|8\\d{11,12}|(?:[2-58]\\d\\d|900)\\d{7}", [7, 10, 12, 13], [["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["512|8[01589]|90"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["5[0-79]"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[24][1-8]|3[1-9]"], "(0$1)", 1], ["(\\d{3})(\\d{3})(\\d{6,7})", "$1 $2 $3", ["80"], "0$1", 1]], "0"], "TT": ["1", "011", "(?:[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-46-8]\\d{6})$|1", "868$1", 0, "868"], "TV": ["688", "00", "(?:2|7\\d\\d|90)\\d{4}", [5, 6, 7], [["(\\d{2})(\\d{3})", "$1 $2", ["2"]], ["(\\d{2})(\\d{4})", "$1 $2", ["90"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "TW": ["886", "0(?:0[25-79]|19)", "[2-689]\\d{8}|7\\d{9,10}|[2-8]\\d{7}|2\\d{6}", [7, 8, 9, 10, 11], [["(\\d{2})(\\d)(\\d{4})", "$1 $2 $3", ["202"], "0$1"], ["(\\d{3})(\\d{5})", "$1 $2", ["826"], "0$1"], ["(\\d{3})(\\d{2})(\\d{3})", "$1 $2 $3", ["83"], "0$1"], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["82"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[25]0|37|49|8[09]"], "0$1"], ["(\\d)(\\d{3,4})(\\d{4})", "$1 $2 $3", ["[23568]|4(?:0[02-48]|[1-478])|7[1-9]", "[23568]|4(?:0[2-48]|[1-478])|(?:400|7)[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{2})(\\d{4})(\\d{4,5})", "$1 $2 $3", ["7"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, 0, "#"], "TZ": ["255", "00[056]", "(?:[25-8]\\d|41|90)\\d{7}", [9], [["(\\d{3})(\\d{2})(\\d{4})", "$1 $2 $3", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[24]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["5"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[67]"], "0$1"]], "0"], "UA": ["380", "00", "[89]\\d{9}|[3-9]\\d{8}", [9, 10], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["6[12][29]|(?:3[1-8]|4[136-8]|5[12457]|6[49])2|(?:56|65)[24]", "6[12][29]|(?:35|4[1378]|5[12457]|6[49])2|(?:56|65)[24]|(?:3[1-46-8]|46)2[013-9]"], "0$1"], ["(\\d{4})(\\d{5})", "$1 $2", ["3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6[0135689]|7[4-6])|6(?:[12][3-7]|[459])", "3[1-8]|4(?:[1367]|[45][6-9]|8[4-6])|5(?:[1-5]|6(?:[015689]|3[02389])|7[4-6])|6(?:[12][3-7]|[459])"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[3-7]|89|9[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[89]"], "0$1"]], "0", 0, 0, 0, 0, 0, 0, "0~0"], "UG": ["256", "00[057]", "800\\d{6}|(?:[29]0|[347]\\d)\\d{7}", [9], [["(\\d{4})(\\d{5})", "$1 $2", ["202", "2024"], "0$1"], ["(\\d{3})(\\d{6})", "$1 $2", ["[27-9]|4(?:6[45]|[7-9])"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[34]"], "0$1"]], "0"], "US": ["1", "011", "[2-9]\\d{9}|3\\d{6}", [10], [["(\\d{3})(\\d{4})", "$1-$2", ["310"], 0, 1], ["(\\d{3})(\\d{3})(\\d{4})", "($1) $2-$3", ["[2-9]"], 0, 1, "$1-$2-$3"]], "1", 0, 0, 0, 0, 0, [["(?:274[27]|(?:472|983)[2-47-9])\\d{6}|(?:2(?:0[1-35-9]|1[02-9]|2[03-57-9]|3[1459]|4[08]|5[1-46]|6[0279]|7[0269]|8[13])|3(?:0[1-57-9]|1[02-9]|2[013-79]|3[0-24679]|4[167]|5[0-3]|6[01349]|8[056])|4(?:0[124-9]|1[02-579]|2[3-5]|3[0245]|4[023578]|58|6[349]|7[0589]|8[04])|5(?:0[1-57-9]|1[0235-8]|20|3[0149]|4[01]|5[179]|6[1-47]|7[0-5]|8[0256])|6(?:0[1-35-9]|1[024-9]|2[03689]|3[016]|4[0156]|5[01679]|6[0-279]|78|8[0-269])|7(?:0[1-46-8]|1[2-9]|2[04-8]|3[0-2478]|4[0378]|5[47]|6[02359]|7[0-59]|8[156])|8(?:0[1-68]|1[02-8]|2[0168]|3[0-2589]|4[03578]|5[046-9]|6[02-5]|7[028])|9(?:0[1346-9]|1[02-9]|2[0589]|3[0146-8]|4[01357-9]|5[12469]|7[0-3589]|8[04-69]))[2-9]\\d{6}"], [""], ["8(?:00|33|44|55|66|77|88)[2-9]\\d{6}"], ["900[2-9]\\d{6}"], ["52(?:3(?:[2-46-9][02-9]\\d|5(?:[02-46-9]\\d|5[0-46-9]))|4(?:[2-478][02-9]\\d|5(?:[034]\\d|2[024-9]|5[0-46-9])|6(?:0[1-9]|[2-9]\\d)|9(?:[05-9]\\d|2[0-5]|49)))\\d{4}|52[34][2-9]1[02-9]\\d{4}|5(?:00|2[125-9]|3[23]|44|66|77|88)[2-9]\\d{6}"]]], "UY": ["598", "0(?:0|1[3-9]\\d)", "0004\\d{2,9}|[1249]\\d{7}|2\\d{3,4}|(?:[49]\\d|80)\\d{5}", [4, 5, 6, 7, 8, 9, 10, 11, 12, 13], [["(\\d{4,5})", "$1", ["21"]], ["(\\d{3})(\\d{3,4})", "$1 $2", ["0"]], ["(\\d{3})(\\d{4})", "$1 $2", ["[49]0|8"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["9"], "0$1"], ["(\\d{4})(\\d{4})", "$1 $2", ["[124]"]], ["(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3", ["0"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{2,4})", "$1 $2 $3 $4", ["0"]]], "0", 0, 0, 0, 0, 0, 0, "00", " int. "], "UZ": ["998", "00", "(?:20|33|[5-9]\\d)\\d{7}", [9], [["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["[235-9]"]]]], "VA": ["39", "00", "0\\d{5,10}|3[0-8]\\d{7,10}|55\\d{8}|8\\d{5}(?:\\d{2,4})?|(?:1\\d|39)\\d{7,8}", [6, 7, 8, 9, 10, 11, 12], 0, 0, 0, 0, 0, 0, "06698"], "VC": ["1", "011", "(?:[58]\\d\\d|784|900)\\d{7}", [10], 0, "1", 0, "([2-7]\\d{6})$|1", "784$1", 0, "784"], "VE": ["58", "00", "[68]00\\d{7}|(?:[24]\\d|[59]0)\\d{8}", [10], [["(\\d{3})(\\d{7})", "$1-$2", ["[24-689]"], "0$1"]], "0"], "VG": ["1", "011", "(?:284|[58]\\d\\d|900)\\d{7}", [10], 0, "1", 0, "([2-578]\\d{6})$|1", "284$1", 0, "284"], "VI": ["1", "011", "[58]\\d{9}|(?:34|90)0\\d{7}", [10], 0, "1", 0, "([2-9]\\d{6})$|1", "340$1", 0, "340"], "VN": ["84", "00", "[12]\\d{9}|[135-9]\\d{8}|[16]\\d{7}|[16-8]\\d{6}", [7, 8, 9, 10], [["(\\d{2})(\\d{5})", "$1 $2", ["80"], "0$1", 1], ["(\\d{4})(\\d{4,6})", "$1 $2", ["1(?:2[02]|[89])"], 0, 1], ["(\\d{2})(\\d{3})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["1[26]|6"], "0$1", 1], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[357-9]"], "0$1", 1], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["2[48]"], "0$1", 1], ["(\\d{3})(\\d{4})(\\d{3})", "$1 $2 $3", ["2"], "0$1", 1]], "0"], "VU": ["678", "00", "[57-9]\\d{6}|(?:[238]\\d|48)\\d{3}", [5, 7], [["(\\d{3})(\\d{4})", "$1 $2", ["[57-9]"]]]], "WF": ["681", "00", "(?:40|72|8\\d{4})\\d{4}|[89]\\d{5}", [6, 9], [["(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3", ["[47-9]"]], ["(\\d{3})(\\d{2})(\\d{2})(\\d{2})", "$1 $2 $3 $4", ["8"]]]], "WS": ["685", "0", "(?:[2-6]|8\\d{5})\\d{4}|[78]\\d{6}|[68]\\d{5}", [5, 6, 7, 10], [["(\\d{5})", "$1", ["[2-5]|6[1-9]"]], ["(\\d{3})(\\d{3,7})", "$1 $2", ["[68]"]], ["(\\d{2})(\\d{5})", "$1 $2", ["7"]]]], "XK": ["383", "00", "2\\d{7,8}|3\\d{7,11}|(?:4\\d\\d|[89]00)\\d{5}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{5})", "$1 $2", ["[89]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3})", "$1 $2 $3", ["[2-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["2|39"], "0$1"], ["(\\d{2})(\\d{7,10})", "$1 $2", ["3"], "0$1"]], "0"], "YE": ["967", "00", "(?:1|7\\d)\\d{7}|[1-7]\\d{6}", [7, 8, 9], [["(\\d)(\\d{3})(\\d{3,4})", "$1 $2 $3", ["[1-6]|7(?:[24-6]|8[0-7])"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["7"], "0$1"]], "0"], "YT": ["262", "00", "(?:639\\d|7093)\\d{5}|(?:26|80|9\\d)\\d{7}", [9], 0, "0", 0, 0, 0, 0, 0, [["26(?:89\\d|9(?:0[0-467]|15|5[0-4]|6\\d|[78]0))\\d{4}"], ["(?:639(?:0[0-79]|1[019]|[267]\\d|3[09]|40|5[05-9]|9[04-79])|7093[5-7])\\d{4}"], ["80\\d{7}"], 0, 0, 0, 0, 0, ["9(?:(?:39|47)8[01]|769\\d)\\d{4}"]]], "ZA": ["27", "00", "[1-79]\\d{8}|8\\d{4,9}", [5, 6, 7, 8, 9, 10], [["(\\d{2})(\\d{3,4})", "$1 $2", ["8[1-4]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{2,3})", "$1 $2 $3", ["8[1-4]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["860"], "0$1"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["[1-9]"], "0$1"], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["8"], "0$1"]], "0"], "ZM": ["260", "00", "800\\d{6}|(?:21|[579]\\d|63)\\d{7}", [9], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[28]"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["[579]"], "0$1"]], "0"], "ZW": ["263", "00", "2(?:[0-57-9]\\d{6,8}|6[0-24-9]\\d{6,7})|[38]\\d{9}|[35-8]\\d{8}|[3-6]\\d{7}|[1-689]\\d{6}|[1-3569]\\d{5}|[1356]\\d{4}", [5, 6, 7, 8, 9, 10], [["(\\d{3})(\\d{3,5})", "$1 $2", ["2(?:0[45]|2[278]|[49]8)|3(?:[09]8|17)|6(?:[29]8|37|75)|[23][78]|(?:33|5[15]|6[68])[78]"], "0$1"], ["(\\d)(\\d{3})(\\d{2,4})", "$1 $2 $3", ["[49]"], "0$1"], ["(\\d{3})(\\d{4})", "$1 $2", ["80"], "0$1"], ["(\\d{2})(\\d{7})", "$1 $2", ["24|8[13-59]|(?:2[05-79]|39|5[45]|6[15-8])2", "2(?:02[014]|4|[56]20|[79]2)|392|5(?:42|525)|6(?:[16-8]21|52[013])|8[13-59]"], "(0$1)"], ["(\\d{2})(\\d{3})(\\d{4})", "$1 $2 $3", ["7"], "0$1"], ["(\\d{3})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["2(?:1[39]|2[0157]|[378]|[56][14])|3(?:12|29)", "2(?:1[39]|2[0157]|[378]|[56][14])|3(?:123|29)"], "0$1"], ["(\\d{4})(\\d{6})", "$1 $2", ["8"], "0$1"], ["(\\d{2})(\\d{3,5})", "$1 $2", ["1|2(?:0[0-36-9]|12|29|[56])|3(?:1[0-689]|[24-6])|5(?:[0236-9]|1[2-4])|6(?:[013-59]|7[0-46-9])|(?:33|55|6[68])[0-69]|(?:29|3[09]|62)[0-79]"], "0$1"], ["(\\d{2})(\\d{3})(\\d{3,4})", "$1 $2 $3", ["29[013-9]|39|54"], "0$1"], ["(\\d{4})(\\d{3,5})", "$1 $2", ["(?:25|54)8", "258|5483"], "0$1"]], "0"] }, "nonGeographic": { "800": ["800", 0, "(?:00|[1-9]\\d)\\d{6}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["\\d"]]], 0, 0, 0, 0, 0, 0, [0, 0, ["(?:00|[1-9]\\d)\\d{6}"]]], "808": ["808", 0, "[1-9]\\d{7}", [8], [["(\\d{4})(\\d{4})", "$1 $2", ["[1-9]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, ["[1-9]\\d{7}"]]], "870": ["870", 0, "7\\d{11}|[235-7]\\d{8}", [9, 12], [["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["[235-7]"]]], 0, 0, 0, 0, 0, 0, [0, ["(?:[356]|774[45])\\d{8}|7[6-8]\\d{7}"], 0, 0, 0, 0, 0, 0, ["2\\d{8}", [9]]]], "878": ["878", 0, "10\\d{10}", [12], [["(\\d{2})(\\d{5})(\\d{5})", "$1 $2 $3", ["1"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["10\\d{10}"]]], "881": ["881", 0, "6\\d{9}|[0-36-9]\\d{8}", [9, 10], [["(\\d)(\\d{3})(\\d{5})", "$1 $2 $3", ["[0-37-9]"]], ["(\\d)(\\d{3})(\\d{5,6})", "$1 $2 $3", ["6"]]], 0, 0, 0, 0, 0, 0, [0, ["6\\d{9}|[0-36-9]\\d{8}"]]], "882": ["882", 0, "[13]\\d{6}(?:\\d{2,5})?|[19]\\d{7}|(?:[25]\\d\\d|4)\\d{7}(?:\\d{2})?", [7, 8, 9, 10, 11, 12], [["(\\d{2})(\\d{5})", "$1 $2", ["16|342"]], ["(\\d{2})(\\d{6})", "$1 $2", ["49"]], ["(\\d{2})(\\d{2})(\\d{4})", "$1 $2 $3", ["1[36]|9"]], ["(\\d{2})(\\d{4})(\\d{3})", "$1 $2 $3", ["3[23]"]], ["(\\d{2})(\\d{3,4})(\\d{4})", "$1 $2 $3", ["16"]], ["(\\d{2})(\\d{4})(\\d{4})", "$1 $2 $3", ["10|23|3(?:[15]|4[57])|4|5[12]"]], ["(\\d{3})(\\d{4})(\\d{4})", "$1 $2 $3", ["34"]], ["(\\d{2})(\\d{4,5})(\\d{5})", "$1 $2 $3", ["[1-35]"]]], 0, 0, 0, 0, 0, 0, [0, ["342\\d{4}|(?:337|49)\\d{6}|(?:3(?:2|47|7\\d{3})|5(?:0\\d{3}|2[0-2]))\\d{7}", [7, 8, 9, 10, 12]], 0, 0, 0, ["348[57]\\d{7}", [11]], 0, 0, ["1(?:3(?:0[0347]|[13][0139]|2[035]|4[013568]|6[0459]|7[06]|8[15-8]|9[0689])\\d{4}|6\\d{5,10})|(?:345\\d|9[89])\\d{6}|(?:10|2(?:3|85\\d)|3(?:[15]|[69]\\d\\d)|4[15-8]|51)\\d{8}"]]], "883": ["883", 0, "(?:[1-4]\\d|51)\\d{6,10}", [8, 9, 10, 11, 12], [["(\\d{3})(\\d{3})(\\d{2,8})", "$1 $2 $3", ["[14]|2[24-689]|3[02-689]|51[24-9]"]], ["(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3", ["510"]], ["(\\d{3})(\\d{3})(\\d{4})", "$1 $2 $3", ["21"]], ["(\\d{4})(\\d{4})(\\d{4})", "$1 $2 $3", ["51[13]"]], ["(\\d{3})(\\d{3})(\\d{3})(\\d{3})", "$1 $2 $3 $4", ["[235]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, 0, 0, ["(?:2(?:00\\d\\d|10)|(?:370[1-9]|51\\d0)\\d)\\d{7}|51(?:00\\d{5}|[24-9]0\\d{4,7})|(?:1[0-79]|2[24-689]|3[02-689]|4[0-4])0\\d{5,9}"]]], "888": ["888", 0, "\\d{11}", [11], [["(\\d{3})(\\d{3})(\\d{5})", "$1 $2 $3"]], 0, 0, 0, 0, 0, 0, [0, 0, 0, 0, 0, 0, ["\\d{11}"]]], "979": ["979", 0, "[1359]\\d{8}", [9], [["(\\d)(\\d{4})(\\d{4})", "$1 $2 $3", ["[1359]"]]], 0, 0, 0, 0, 0, 0, [0, 0, 0, ["[1359]\\d{8}"]]] } };

// node_modules/libphonenumber-js/min/exports/withMetadataArgument.js
function withMetadataArgument(func, _arguments) {
  var args = Array.prototype.slice.call(_arguments);
  args.push(metadata_min_json_default);
  return func.apply(this, args);
}

// node_modules/libphonenumber-js/es6/tools/semver-compare.js
function semver_compare_default(a, b) {
  a = a.split("-");
  b = b.split("-");
  var pa = a[0].split(".");
  var pb = b[0].split(".");
  for (var i = 0; i < 3; i++) {
    var na = Number(pa[i]);
    var nb = Number(pb[i]);
    if (na > nb) return 1;
    if (nb > na) return -1;
    if (!isNaN(na) && isNaN(nb)) return 1;
    if (isNaN(na) && !isNaN(nb)) return -1;
  }
  if (a[1] && b[1]) {
    return a[1] > b[1] ? 1 : a[1] < b[1] ? -1 : 0;
  }
  return !a[1] && b[1] ? 1 : a[1] && !b[1] ? -1 : 0;
}

// node_modules/libphonenumber-js/es6/helpers/isObject.js
var objectConstructor = {}.constructor;
function isObject(object) {
  return object !== void 0 && object !== null && object.constructor === objectConstructor;
}

// node_modules/libphonenumber-js/es6/helpers/isCallingCode.js
var CALLING_CODE_REG_EXP = /^\d+$/;
function isCallingCode(string) {
  return CALLING_CODE_REG_EXP.test(string);
}

// node_modules/libphonenumber-js/es6/metadata.js
function _typeof(o) {
  "@babel/helpers - typeof";
  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof(o);
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var V3 = "1.2.0";
var V4 = "1.7.35";
var DEFAULT_EXT_PREFIX = " ext. ";
var Metadata = /* @__PURE__ */ (function() {
  function Metadata2(metadata) {
    _classCallCheck(this, Metadata2);
    validateMetadata(metadata);
    this.metadata = metadata;
    setVersion.call(this, metadata);
  }
  return _createClass(Metadata2, [{
    key: "getCountries",
    value: function getCountries() {
      return Object.keys(this.metadata.countries).filter(function(_) {
        return _ !== "001";
      });
    }
  }, {
    key: "getCountryMetadata",
    value: function getCountryMetadata(countryCode) {
      return this.metadata.countries[countryCode];
    }
  }, {
    key: "nonGeographic",
    value: function nonGeographic() {
      if (this.v1 || this.v2 || this.v3) return;
      return this.metadata.nonGeographic || this.metadata.nonGeographical;
    }
  }, {
    key: "hasCountry",
    value: function hasCountry(country) {
      return this.getCountryMetadata(country) !== void 0;
    }
  }, {
    key: "hasCallingCode",
    value: function hasCallingCode(callingCode) {
      if (this.getCountryCodesForCallingCode(callingCode)) {
        return true;
      }
      if (this.nonGeographic()) {
        if (this.nonGeographic()[callingCode]) {
          return true;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return true;
        }
      }
    }
  }, {
    key: "isNonGeographicCallingCode",
    value: function isNonGeographicCallingCode(callingCode) {
      if (this.nonGeographic()) {
        return this.nonGeographic()[callingCode] ? true : false;
      } else {
        return this.getCountryCodesForCallingCode(callingCode) ? false : true;
      }
    }
    // Deprecated.
  }, {
    key: "country",
    value: function country(countryCode) {
      return this.selectNumberingPlan(countryCode);
    }
    /**
     * Selects a telephone numbering plan based on either a country code or a calling code.
     * @param {string} argument — Country code or calling code.
     * @param {string} legacyArgumentCallingCode — Legacy argument: calling code, if the first argument is not passed.
     */
  }, {
    key: "selectNumberingPlan",
    value: function selectNumberingPlan(argument, legacyArgumentCallingCode) {
      var countryCode;
      var callingCode;
      if (argument) {
        if (isCallingCode(argument)) {
          callingCode = argument;
        } else {
          countryCode = argument;
        }
      }
      if (legacyArgumentCallingCode) {
        callingCode = legacyArgumentCallingCode;
      }
      if (countryCode && countryCode !== "001") {
        var countryMetadata = this.getCountryMetadata(countryCode);
        if (!countryMetadata) {
          throw new Error("Unknown country: ".concat(countryCode));
        }
        this.numberingPlan = new NumberingPlan(countryMetadata, this);
      } else if (callingCode) {
        if (!this.hasCallingCode(callingCode)) {
          throw new Error("Unknown calling code: ".concat(callingCode));
        }
        this.numberingPlan = new NumberingPlan(this.getNumberingPlanMetadata(callingCode), this);
      } else {
        this.numberingPlan = void 0;
      }
      return this;
    }
  }, {
    key: "getCountryCodesForCallingCode",
    value: function getCountryCodesForCallingCode(callingCode) {
      var countryCodes = this.countryCallingCodes()[callingCode];
      if (countryCodes) {
        if (countryCodes.length === 1 && countryCodes[0].length === 3) {
          return;
        }
        return countryCodes;
      }
    }
  }, {
    key: "getCountryCodeForCallingCode",
    value: function getCountryCodeForCallingCode(callingCode) {
      var countryCodes = this.getCountryCodesForCallingCode(callingCode);
      if (countryCodes) {
        return countryCodes[0];
      }
    }
  }, {
    key: "getNumberingPlanMetadata",
    value: function getNumberingPlanMetadata(callingCode) {
      var countryCode = this.getCountryCodeForCallingCode(callingCode);
      if (countryCode) {
        return this.getCountryMetadata(countryCode);
      }
      if (this.nonGeographic()) {
        var metadata = this.nonGeographic()[callingCode];
        if (metadata) {
          return metadata;
        }
      } else {
        var countryCodes = this.countryCallingCodes()[callingCode];
        if (countryCodes && countryCodes.length === 1 && countryCodes[0] === "001") {
          return this.metadata.countries["001"];
        }
      }
    }
    // Deprecated.
  }, {
    key: "countryCallingCode",
    value: function countryCallingCode() {
      return this.numberingPlan.callingCode();
    }
    // Deprecated.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      return this.numberingPlan.IDDPrefix();
    }
    // Deprecated.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      return this.numberingPlan.defaultIDDPrefix();
    }
    // Deprecated.
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      return this.numberingPlan.nationalNumberPattern();
    }
    // Deprecated.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      return this.numberingPlan.possibleLengths();
    }
    // Deprecated.
  }, {
    key: "formats",
    value: function formats() {
      return this.numberingPlan.formats();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this.numberingPlan.nationalPrefixForParsing();
    }
    // Deprecated.
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.numberingPlan.nationalPrefixTransformRule();
    }
    // Deprecated.
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.numberingPlan.leadingDigits();
    }
    // Deprecated.
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      return this.numberingPlan.hasTypes();
    }
    // Deprecated.
  }, {
    key: "type",
    value: function type(_type) {
      return this.numberingPlan.type(_type);
    }
    // Deprecated.
  }, {
    key: "ext",
    value: function ext() {
      return this.numberingPlan.ext();
    }
  }, {
    key: "countryCallingCodes",
    value: function countryCallingCodes() {
      if (this.v1) return this.metadata.country_phone_code_to_countries;
      return this.metadata.country_calling_codes;
    }
    // Deprecated.
  }, {
    key: "chooseCountryByCountryCallingCode",
    value: function chooseCountryByCountryCallingCode(callingCode) {
      return this.selectNumberingPlan(callingCode);
    }
  }, {
    key: "hasSelectedNumberingPlan",
    value: function hasSelectedNumberingPlan() {
      return this.numberingPlan !== void 0;
    }
  }]);
})();
var NumberingPlan = /* @__PURE__ */ (function() {
  function NumberingPlan2(metadata, globalMetadataObject) {
    _classCallCheck(this, NumberingPlan2);
    this.globalMetadataObject = globalMetadataObject;
    this.metadata = metadata;
    setVersion.call(this, globalMetadataObject.metadata);
  }
  return _createClass(NumberingPlan2, [{
    key: "callingCode",
    value: function callingCode() {
      return this.metadata[0];
    }
    // When multiple countries share the same calling code,
    // all phone number formatting rules are included in the metadata
    // of the "default" country for that calling code.
    // Any other countries' metdata doesn't include any formatting rules.
    // Google developers said that such storage architecture was chosen for performance reasons.
    //
    // For example, for NANPA region ("North American Numbering Plan Administration",
    // which includes USA, Canada, Cayman Islands, Bahamas, etc) all formatting rules
    // are contained in the metadata of `US` country.
    //
    // This is not public API.
    //
  }, {
    key: "_getDefaultCountryMetadataForThisCallingCode",
    value: function _getDefaultCountryMetadataForThisCallingCode() {
      return this.globalMetadataObject.getNumberingPlanMetadata(this.callingCode());
    }
    // Deprecated.
  }, {
    key: "getDefaultCountryMetadataForRegion",
    value: function getDefaultCountryMetadataForRegion() {
      return this._getDefaultCountryMetadataForThisCallingCode();
    }
    // Is always present.
  }, {
    key: "IDDPrefix",
    value: function IDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[1];
    }
    // Is only present when a country supports multiple IDD prefixes.
  }, {
    key: "defaultIDDPrefix",
    value: function defaultIDDPrefix() {
      if (this.v1 || this.v2) return;
      return this.metadata[12];
    }
  }, {
    key: "nationalNumberPattern",
    value: function nationalNumberPattern() {
      if (this.v1 || this.v2) return this.metadata[1];
      return this.metadata[2];
    }
    // "possible length" data is always present in Google's metadata.
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.v1) return;
      return this.metadata[this.v2 ? 2 : 3];
    }
  }, {
    key: "_getFormats",
    value: function _getFormats(metadata) {
      return metadata[this.v1 ? 2 : this.v2 ? 3 : 4];
    }
    // For countries of the same region (e.g. NANPA)
    // formats are all stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "formats",
    value: function formats() {
      var _this = this;
      var formats2 = this._getFormats(this.metadata) || this._getFormats(this._getDefaultCountryMetadataForThisCallingCode()) || [];
      return formats2.map(function(_) {
        return new Format(_, _this);
      });
    }
  }, {
    key: "nationalPrefix",
    value: function nationalPrefix() {
      return this.metadata[this.v1 ? 3 : this.v2 ? 4 : 5];
    }
  }, {
    key: "_getNationalPrefixFormattingRule",
    value: function _getNationalPrefixFormattingRule(metadata) {
      return metadata[this.v1 ? 4 : this.v2 ? 5 : 6];
    }
    // For countries of the same region (e.g. NANPA)
    // national prefix formatting rule is stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._getNationalPrefixFormattingRule(this.metadata) || this._getNationalPrefixFormattingRule(this._getDefaultCountryMetadataForThisCallingCode());
    }
  }, {
    key: "_nationalPrefixForParsing",
    value: function _nationalPrefixForParsing() {
      return this.metadata[this.v1 ? 5 : this.v2 ? 6 : 7];
    }
  }, {
    key: "nationalPrefixForParsing",
    value: function nationalPrefixForParsing() {
      return this._nationalPrefixForParsing() || this.nationalPrefix();
    }
  }, {
    key: "nationalPrefixTransformRule",
    value: function nationalPrefixTransformRule() {
      return this.metadata[this.v1 ? 6 : this.v2 ? 7 : 8];
    }
  }, {
    key: "_getNationalPrefixIsOptionalWhenFormatting",
    value: function _getNationalPrefixIsOptionalWhenFormatting() {
      return !!this.metadata[this.v1 ? 7 : this.v2 ? 8 : 9];
    }
    // For countries of the same region (e.g. NANPA)
    // "national prefix is optional when formatting" flag is
    // stored in the "main" country for that region.
    // E.g. "RU" and "KZ", "US" and "CA".
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return this._getNationalPrefixIsOptionalWhenFormatting(this.metadata) || this._getNationalPrefixIsOptionalWhenFormatting(this._getDefaultCountryMetadataForThisCallingCode());
    }
  }, {
    key: "leadingDigits",
    value: function leadingDigits() {
      return this.metadata[this.v1 ? 8 : this.v2 ? 9 : 10];
    }
  }, {
    key: "types",
    value: function types() {
      return this.metadata[this.v1 ? 9 : this.v2 ? 10 : 11];
    }
  }, {
    key: "hasTypes",
    value: function hasTypes() {
      if (this.types() && this.types().length === 0) {
        return false;
      }
      return !!this.types();
    }
  }, {
    key: "type",
    value: function type(_type2) {
      if (this.hasTypes() && getType(this.types(), _type2)) {
        return new Type(getType(this.types(), _type2), this);
      }
    }
  }, {
    key: "ext",
    value: function ext() {
      if (this.v1 || this.v2) return DEFAULT_EXT_PREFIX;
      return this.metadata[13] || DEFAULT_EXT_PREFIX;
    }
  }]);
})();
var Format = /* @__PURE__ */ (function() {
  function Format2(format, metadata) {
    _classCallCheck(this, Format2);
    this._format = format;
    this.metadata = metadata;
  }
  return _createClass(Format2, [{
    key: "pattern",
    value: function pattern() {
      return this._format[0];
    }
  }, {
    key: "format",
    value: function format() {
      return this._format[1];
    }
  }, {
    key: "leadingDigitsPatterns",
    value: function leadingDigitsPatterns() {
      return this._format[2] || [];
    }
  }, {
    key: "nationalPrefixFormattingRule",
    value: function nationalPrefixFormattingRule() {
      return this._format[3] || this.metadata.nationalPrefixFormattingRule();
    }
  }, {
    key: "nationalPrefixIsOptionalWhenFormattingInNationalFormat",
    value: function nationalPrefixIsOptionalWhenFormattingInNationalFormat() {
      return !!this._format[4] || this.metadata.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
  }, {
    key: "nationalPrefixIsMandatoryWhenFormattingInNationalFormat",
    value: function nationalPrefixIsMandatoryWhenFormattingInNationalFormat() {
      return this.usesNationalPrefix() && !this.nationalPrefixIsOptionalWhenFormattingInNationalFormat();
    }
    // Checks whether national prefix formatting rule contains national prefix.
  }, {
    key: "usesNationalPrefix",
    value: function usesNationalPrefix() {
      return this.nationalPrefixFormattingRule() && // Check that national prefix formatting rule is not a "dummy" one.
      !FIRST_GROUP_ONLY_PREFIX_PATTERN.test(this.nationalPrefixFormattingRule()) ? true : false;
    }
  }, {
    key: "internationalFormat",
    value: function internationalFormat() {
      return this._format[5] || this.format();
    }
  }]);
})();
var FIRST_GROUP_ONLY_PREFIX_PATTERN = /^\(?\$1\)?$/;
var Type = /* @__PURE__ */ (function() {
  function Type2(type, metadata) {
    _classCallCheck(this, Type2);
    this.type = type;
    this.metadata = metadata;
  }
  return _createClass(Type2, [{
    key: "pattern",
    value: function pattern() {
      if (this.metadata.v1) return this.type;
      return this.type[0];
    }
  }, {
    key: "possibleLengths",
    value: function possibleLengths() {
      if (this.metadata.v1) return;
      return this.type[1] || this.metadata.possibleLengths();
    }
  }]);
})();
function getType(types, type) {
  switch (type) {
    case "FIXED_LINE":
      return types[0];
    case "MOBILE":
      return types[1];
    case "TOLL_FREE":
      return types[2];
    case "PREMIUM_RATE":
      return types[3];
    case "PERSONAL_NUMBER":
      return types[4];
    case "VOICEMAIL":
      return types[5];
    case "UAN":
      return types[6];
    case "PAGER":
      return types[7];
    case "VOIP":
      return types[8];
    case "SHARED_COST":
      return types[9];
  }
}
function validateMetadata(metadata) {
  if (!metadata) {
    throw new Error("[libphonenumber-js] `metadata` argument not passed. Check your arguments.");
  }
  if (!isObject(metadata) || !isObject(metadata.countries)) {
    throw new Error("[libphonenumber-js] `metadata` argument was passed but it's not a valid metadata. Must be an object having `.countries` child object property. Got ".concat(isObject(metadata) ? "an object of shape: { " + Object.keys(metadata).join(", ") + " }" : "a " + typeOf(metadata) + ": " + metadata, "."));
  }
}
var typeOf = function typeOf2(_) {
  return _typeof(_);
};
function getCountryCallingCode(country, metadataJson) {
  var metadata = new Metadata(metadataJson);
  if (metadata.hasCountry(country)) {
    return metadata.selectNumberingPlan(country).countryCallingCode();
  }
  throw new Error("Unknown country: ".concat(country));
}
function isSupportedCountry(country, metadataJson) {
  return metadataJson.countries.hasOwnProperty(country);
}
function setVersion(metadata) {
  var version = metadata.version;
  if (typeof version === "number") {
    this.v1 = version === 1;
    this.v2 = version === 2;
    this.v3 = version === 3;
    this.v4 = version === 4;
  } else {
    if (!version) {
      this.v1 = true;
    } else if (semver_compare_default(version, V3) === -1) {
      this.v2 = true;
    } else if (semver_compare_default(version, V4) === -1) {
      this.v3 = true;
    } else {
      this.v4 = true;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/mergeArrays.js
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function mergeArrays(a, b) {
  var merged = a.slice();
  for (var _iterator = _createForOfIteratorHelperLoose(b), _step; !(_step = _iterator()).done; ) {
    var element = _step.value;
    if (a.indexOf(element) < 0) {
      merged.push(element);
    }
  }
  return merged.sort(function(a2, b2) {
    return a2 - b2;
  });
}

// node_modules/libphonenumber-js/es6/helpers/checkNumberLength.js
function checkNumberLength(nationalNumber, country, metadata) {
  return checkNumberLengthForType(nationalNumber, void 0, country, metadata);
}
function checkNumberLengthForType(nationalNumber, type, country, metadata) {
  if (country) {
    metadata = new Metadata(metadata.metadata);
    metadata.selectNumberingPlan(country);
  }
  var type_info = metadata.type(type);
  var possible_lengths = type_info && type_info.possibleLengths() || metadata.possibleLengths();
  if (!possible_lengths) {
    return "IS_POSSIBLE";
  }
  if (type === "FIXED_LINE_OR_MOBILE") {
    if (!metadata.type("FIXED_LINE")) {
      return checkNumberLengthForType(nationalNumber, "MOBILE", country, metadata);
    }
    var mobile_type = metadata.type("MOBILE");
    if (mobile_type) {
      possible_lengths = mergeArrays(possible_lengths, mobile_type.possibleLengths());
    }
  } else if (type && !type_info) {
    return "INVALID_LENGTH";
  }
  var actual_length = nationalNumber.length;
  var minimum_length = possible_lengths[0];
  if (minimum_length === actual_length) {
    return "IS_POSSIBLE";
  }
  if (minimum_length > actual_length) {
    return "TOO_SHORT";
  }
  if (possible_lengths[possible_lengths.length - 1] < actual_length) {
    return "TOO_LONG";
  }
  return possible_lengths.indexOf(actual_length, 1) >= 0 ? "IS_POSSIBLE" : "INVALID_LENGTH";
}

// node_modules/libphonenumber-js/es6/isPossible.js
function isPossiblePhoneNumber(input, options, metadataJson) {
  if (options === void 0) {
    options = {};
  }
  var metadata = new Metadata(metadataJson);
  if (options.v2) {
    if (!input.countryCallingCode) {
      throw new Error("Invalid phone number object passed");
    }
    metadata.selectNumberingPlan(input.country || input.countryCallingCode);
  } else {
    if (!input.phone) {
      return false;
    }
    if (input.country) {
      if (!metadata.hasCountry(input.country)) {
        throw new Error("Unknown country: ".concat(input.country));
      }
      metadata.selectNumberingPlan(input.country);
    } else {
      if (!input.countryCallingCode) {
        throw new Error("Invalid phone number object passed");
      }
      metadata.selectNumberingPlan(input.countryCallingCode);
    }
  }
  if (metadata.possibleLengths()) {
    return isPossibleNumber(input.phone || input.nationalNumber, metadata);
  }
  if (input.countryCallingCode && metadata.isNonGeographicCallingCode(input.countryCallingCode)) {
    return true;
  }
  throw new Error('Missing "possibleLengths" in metadata. Perhaps the metadata has been generated before v1.0.18.');
}
function isPossibleNumber(nationalNumber, metadata) {
  switch (checkNumberLength(nationalNumber, void 0, metadata)) {
    case "IS_POSSIBLE":
      return true;
    // This library ignores "local-only" phone numbers (for simplicity).
    // See the readme for more info on what are "local-only" phone numbers.
    // case 'IS_POSSIBLE_LOCAL_ONLY':
    // 	return !isInternational
    default:
      return false;
  }
}

// node_modules/libphonenumber-js/es6/helpers/matchesEntirely.js
function matchesEntirely(text, regularExpressionText) {
  text = text || "";
  return new RegExp("^(?:" + regularExpressionText + ")$").test(text);
}

// node_modules/libphonenumber-js/es6/helpers/getNumberType.js
function _createForOfIteratorHelperLoose2(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray2(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray2(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray2(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray2(r, a) : void 0;
  }
}
function _arrayLikeToArray2(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var NON_FIXED_LINE_PHONE_TYPES = ["MOBILE", "PREMIUM_RATE", "TOLL_FREE", "SHARED_COST", "VOIP", "PERSONAL_NUMBER", "PAGER", "UAN", "VOICEMAIL"];
function getNumberType(input, options, metadataJson) {
  options = options || {};
  if (!input.country && !input.countryCallingCode) {
    return;
  }
  var metadata = new Metadata(metadataJson);
  metadata.selectNumberingPlan(input.country || input.countryCallingCode);
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern())) {
    return;
  }
  if (isNumberTypeEqualTo(nationalNumber, "FIXED_LINE", metadata)) {
    if (metadata.type("MOBILE") && metadata.type("MOBILE").pattern() === "") {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (!metadata.type("MOBILE")) {
      return "FIXED_LINE_OR_MOBILE";
    }
    if (isNumberTypeEqualTo(nationalNumber, "MOBILE", metadata)) {
      return "FIXED_LINE_OR_MOBILE";
    }
    return "FIXED_LINE";
  }
  for (var _iterator = _createForOfIteratorHelperLoose2(NON_FIXED_LINE_PHONE_TYPES), _step; !(_step = _iterator()).done; ) {
    var type = _step.value;
    if (isNumberTypeEqualTo(nationalNumber, type, metadata)) {
      return type;
    }
  }
}
function isNumberTypeEqualTo(nationalNumber, type, metadata) {
  var typeDefinition = metadata.type(type);
  if (!typeDefinition || !typeDefinition.pattern()) {
    return false;
  }
  if (typeDefinition.possibleLengths() && typeDefinition.possibleLengths().indexOf(nationalNumber.length) < 0) {
    return false;
  }
  return matchesEntirely(nationalNumber, typeDefinition.pattern());
}

// node_modules/libphonenumber-js/es6/isValid.js
function isValidNumber(input, options, metadataJson) {
  options = options || {};
  var metadata = new Metadata(metadataJson);
  metadata.selectNumberingPlan(input.country || input.countryCallingCode);
  if (metadata.hasTypes()) {
    return getNumberType(input, options, metadata.metadata) !== void 0;
  }
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  return matchesEntirely(nationalNumber, metadata.nationalNumberPattern());
}

// node_modules/libphonenumber-js/es6/helpers/isCountryCode.js
var COUNTRY_CODE_REG_EXP = /^[A-Z]{2}$/;
function isCountryCode(string) {
  return COUNTRY_CODE_REG_EXP.test(string);
}

// node_modules/libphonenumber-js/es6/helpers/getCountryAndCallingCodeFromOneOfThem.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE = false;
function getCountryAndCallingCodeFromOneOfThem(countryOrCallingCode, metadataJson) {
  var country;
  var callingCode;
  var metadata = new Metadata(metadataJson);
  if (isCountryCode(countryOrCallingCode)) {
    country = countryOrCallingCode;
    metadata.selectNumberingPlan(country);
    callingCode = metadata.countryCallingCode();
  } else {
    callingCode = countryOrCallingCode;
    if (USE_NON_GEOGRAPHIC_COUNTRY_CODE) {
      if (metadata.isNonGeographicCallingCode(callingCode)) {
        country = "001";
      }
    }
  }
  return {
    country,
    callingCode
  };
}

// node_modules/libphonenumber-js/es6/helpers/getPossibleCountriesForNumber.js
function getPossibleCountriesForNumber(callingCode, nationalNumber, metadata) {
  var _metadata = new Metadata(metadata);
  var possibleCountries = _metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return [];
  }
  return possibleCountries.filter(function(country) {
    return couldNationalNumberBelongToCountry(nationalNumber, country, metadata);
  });
}
function couldNationalNumberBelongToCountry(nationalNumber, country, metadataJson) {
  var metadata = new Metadata(metadataJson);
  metadata.selectNumberingPlan(country);
  return metadata.numberingPlan.possibleLengths().indexOf(nationalNumber.length) >= 0;
}

// node_modules/libphonenumber-js/es6/constants.js
var MIN_LENGTH_FOR_NSN = 2;
var MAX_LENGTH_FOR_NSN = 17;
var MAX_LENGTH_COUNTRY_CODE = 3;
var VALID_DIGITS = "0-9\uFF10-\uFF19\u0660-\u0669\u06F0-\u06F9";
var DASHES = "-\u2010-\u2015\u2212\u30FC\uFF0D";
var SLASHES = "\uFF0F/";
var DOTS = "\uFF0E.";
var WHITESPACE = " \xA0\xAD\u200B\u2060\u3000";
var BRACKETS = "()\uFF08\uFF09\uFF3B\uFF3D\\[\\]";
var TILDES = "~\u2053\u223C\uFF5E";
var VALID_PUNCTUATION = "".concat(DASHES).concat(SLASHES).concat(DOTS).concat(WHITESPACE).concat(BRACKETS).concat(TILDES);
var PLUS_CHARS = "+\uFF0B";

// node_modules/libphonenumber-js/es6/helpers/stripIddPrefix.js
var CAPTURING_DIGIT_PATTERN = new RegExp("([" + VALID_DIGITS + "])");
function stripIddPrefix(number, country, callingCode, metadataJson) {
  if (!country) {
    return;
  }
  var metadata = new Metadata(metadataJson);
  metadata.selectNumberingPlan(country || callingCode);
  var IDDPrefixPattern = new RegExp(metadata.IDDPrefix());
  if (number.search(IDDPrefixPattern) !== 0) {
    return;
  }
  number = number.slice(number.match(IDDPrefixPattern)[0].length);
  var matchedGroups = number.match(CAPTURING_DIGIT_PATTERN);
  if (matchedGroups && matchedGroups[1] != null && matchedGroups[1].length > 0) {
    if (matchedGroups[1] === "0") {
      return;
    }
  }
  return number;
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumberFromPossiblyIncompleteNumber.js
function extractNationalNumberFromPossiblyIncompleteNumber(number, metadata) {
  if (number && metadata.numberingPlan.nationalPrefixForParsing()) {
    var prefixPattern = new RegExp("^(?:" + metadata.numberingPlan.nationalPrefixForParsing() + ")");
    var prefixMatch = prefixPattern.exec(number);
    if (prefixMatch) {
      var nationalNumber;
      var carrierCode;
      var capturedGroupsCount = prefixMatch.length - 1;
      var hasCapturedGroups = capturedGroupsCount > 0 && prefixMatch[capturedGroupsCount];
      if (metadata.nationalPrefixTransformRule() && hasCapturedGroups) {
        nationalNumber = number.replace(prefixPattern, metadata.nationalPrefixTransformRule());
        if (capturedGroupsCount > 1) {
          carrierCode = prefixMatch[1];
        }
      } else {
        var prefixBeforeNationalNumber = prefixMatch[0];
        nationalNumber = number.slice(prefixBeforeNationalNumber.length);
        if (hasCapturedGroups) {
          carrierCode = prefixMatch[1];
        }
      }
      var nationalPrefix;
      if (hasCapturedGroups) {
        var possiblePositionOfTheFirstCapturedGroup = number.indexOf(prefixMatch[1]);
        var possibleNationalPrefix = number.slice(0, possiblePositionOfTheFirstCapturedGroup);
        if (possibleNationalPrefix === metadata.numberingPlan.nationalPrefix()) {
          nationalPrefix = metadata.numberingPlan.nationalPrefix();
        }
      } else {
        nationalPrefix = prefixMatch[0];
      }
      return {
        nationalNumber,
        nationalPrefix,
        carrierCode
      };
    }
  }
  return {
    nationalNumber: number
  };
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByNationalNumber.js
function _createForOfIteratorHelperLoose3(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray3(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray3(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray3(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray3(r, a) : void 0;
  }
}
function _arrayLikeToArray3(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function getCountryByNationalNumber(nationalNumber, countries, metadataJson) {
  var metadata = new Metadata(metadataJson);
  for (var _iterator = _createForOfIteratorHelperLoose3(countries), _step; !(_step = _iterator()).done; ) {
    var country = _step.value;
    metadata.selectNumberingPlan(country);
    if (metadata.leadingDigits()) {
      if (nationalNumber && nationalNumber.search(metadata.leadingDigits()) === 0) {
        return country;
      }
    } else if (getNumberType({
      phone: nationalNumber,
      country
    }, void 0, metadata.metadata)) {
      return country;
    }
  }
}

// node_modules/libphonenumber-js/es6/helpers/getCountryByCallingCode.js
var USE_NON_GEOGRAPHIC_COUNTRY_CODE2 = false;
function getCountryByCallingCode(callingCode, _ref) {
  var nationalNumber = _ref.nationalNumber, metadata = _ref.metadata;
  if (USE_NON_GEOGRAPHIC_COUNTRY_CODE2) {
    if (metadata.isNonGeographicCallingCode(callingCode)) {
      return "001";
    }
  }
  var possibleCountries = metadata.getCountryCodesForCallingCode(callingCode);
  if (!possibleCountries) {
    return;
  }
  if (possibleCountries.length === 1) {
    return possibleCountries[0];
  }
  return getCountryByNationalNumber(nationalNumber, possibleCountries, metadata.metadata);
}

// node_modules/libphonenumber-js/es6/helpers/extractNationalNumber.js
function extractNationalNumber(number, country, metadata) {
  var _extractNationalNumbe = extractNationalNumberFromPossiblyIncompleteNumber(number, metadata), carrierCode = _extractNationalNumbe.carrierCode, nationalNumber = _extractNationalNumbe.nationalNumber;
  if (nationalNumber !== number) {
    if (!shouldHaveExtractedNationalPrefix(number, nationalNumber, metadata)) {
      return {
        nationalNumber: number
      };
    }
    if (metadata.numberingPlan.possibleLengths()) {
      if (!country) {
        country = getCountryByCallingCode(metadata.numberingPlan.callingCode(), {
          nationalNumber,
          metadata
        });
      }
      if (!isPossibleIncompleteNationalNumber(nationalNumber, country, metadata)) {
        return {
          nationalNumber: number
        };
      }
    }
  }
  return {
    nationalNumber,
    carrierCode
  };
}
function shouldHaveExtractedNationalPrefix(nationalNumberBefore, nationalNumberAfter, metadata) {
  if (matchesEntirely(nationalNumberBefore, metadata.nationalNumberPattern()) && !matchesEntirely(nationalNumberAfter, metadata.nationalNumberPattern())) {
    return false;
  }
  return true;
}
function isPossibleIncompleteNationalNumber(nationalNumber, country, metadata) {
  switch (checkNumberLength(nationalNumber, country, metadata)) {
    case "TOO_SHORT":
    case "INVALID_LENGTH":
      return false;
    default:
      return true;
  }
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCodeFromInternationalNumberWithoutPlusSign.js
function extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, defaultCountry, defaultCallingCode, metadataJson) {
  if (!(country || defaultCountry || defaultCallingCode)) {
    return {
      number
    };
  }
  var countryCallingCode = country || defaultCountry ? getCountryCallingCode(country || defaultCountry, metadataJson) : defaultCallingCode;
  if (number.indexOf(countryCallingCode) === 0) {
    var metadata = new Metadata(metadataJson);
    metadata.selectNumberingPlan(country || defaultCountry || defaultCallingCode);
    var possibleShorterNumber = number.slice(countryCallingCode.length);
    var _extractNationalNumbe = extractNationalNumber(possibleShorterNumber, void 0, metadata), possibleShorterNationalNumber = _extractNationalNumbe.nationalNumber;
    var _extractNationalNumbe2 = extractNationalNumber(number, void 0, metadata), nationalNumber = _extractNationalNumbe2.nationalNumber;
    if (!matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) && matchesEntirely(possibleShorterNationalNumber, metadata.nationalNumberPattern()) || checkNumberLength(nationalNumber, void 0, metadata) === "TOO_LONG") {
      return {
        countryCallingCode,
        number: possibleShorterNumber
      };
    }
  }
  return {
    number
  };
}

// node_modules/libphonenumber-js/es6/helpers/extractCountryCallingCode.js
function extractCountryCallingCode(number, country, defaultCountry, defaultCallingCode, metadataJson) {
  if (!number) {
    return {};
  }
  var isNumberWithIddPrefix;
  if (number[0] !== "+") {
    var numberWithoutIDD = stripIddPrefix(number, country || defaultCountry, defaultCallingCode, metadataJson);
    if (numberWithoutIDD && numberWithoutIDD !== number) {
      isNumberWithIddPrefix = true;
      number = "+" + numberWithoutIDD;
    } else {
      if (country || defaultCountry || defaultCallingCode) {
        var _extractCountryCallin = extractCountryCallingCodeFromInternationalNumberWithoutPlusSign(number, country, defaultCountry, defaultCallingCode, metadataJson), countryCallingCode = _extractCountryCallin.countryCallingCode, shorterNumber = _extractCountryCallin.number;
        if (countryCallingCode) {
          return {
            countryCallingCodeSource: "FROM_NUMBER_WITHOUT_PLUS_SIGN",
            countryCallingCode,
            number: shorterNumber
          };
        }
      }
      return {
        // No need to set it to `UNSPECIFIED`. It can be just `undefined`.
        // countryCallingCodeSource: 'UNSPECIFIED',
        number
      };
    }
  }
  if (number[1] === "0") {
    return {};
  }
  var metadata = new Metadata(metadataJson);
  var i = 2;
  while (i - 1 <= MAX_LENGTH_COUNTRY_CODE && i <= number.length) {
    var _countryCallingCode = number.slice(1, i);
    if (metadata.hasCallingCode(_countryCallingCode)) {
      metadata.selectNumberingPlan(_countryCallingCode);
      return {
        countryCallingCodeSource: isNumberWithIddPrefix ? "FROM_NUMBER_WITH_IDD" : "FROM_NUMBER_WITH_PLUS_SIGN",
        countryCallingCode: _countryCallingCode,
        number: number.slice(i)
      };
    }
    i++;
  }
  return {};
}

// node_modules/libphonenumber-js/es6/helpers/applyInternationalSeparatorStyle.js
function applyInternationalSeparatorStyle(formattedNumber) {
  return formattedNumber.replace(new RegExp("[".concat(VALID_PUNCTUATION, "]+"), "g"), " ").trim();
}

// node_modules/libphonenumber-js/es6/helpers/formatNationalNumberUsingFormat.js
var FIRST_GROUP_PATTERN = /(\$\d)/;
function formatNationalNumberUsingFormat(number, format, _ref) {
  var useInternationalFormat = _ref.useInternationalFormat, withNationalPrefix = _ref.withNationalPrefix, carrierCode = _ref.carrierCode, metadata = _ref.metadata;
  var formattedNumber = number.replace(new RegExp(format.pattern()), useInternationalFormat ? format.internationalFormat() : (
    // This library doesn't use `domestic_carrier_code_formatting_rule`,
    // because that one is only used when formatting phone numbers
    // for dialing from a mobile phone, and this is not a dialing library.
    // carrierCode && format.domesticCarrierCodeFormattingRule()
    // 	// First, replace the $CC in the formatting rule with the desired carrier code.
    // 	// Then, replace the $FG in the formatting rule with the first group
    // 	// and the carrier code combined in the appropriate way.
    // 	? format.format().replace(FIRST_GROUP_PATTERN, format.domesticCarrierCodeFormattingRule().replace('$CC', carrierCode))
    // 	: (
    // 		withNationalPrefix && format.nationalPrefixFormattingRule()
    // 			? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule())
    // 			: format.format()
    // 	)
    withNationalPrefix && format.nationalPrefixFormattingRule() ? format.format().replace(FIRST_GROUP_PATTERN, format.nationalPrefixFormattingRule()) : format.format()
  ));
  if (useInternationalFormat) {
    return applyInternationalSeparatorStyle(formattedNumber);
  }
  return formattedNumber;
}

// node_modules/libphonenumber-js/es6/helpers/getIddPrefix.js
var SINGLE_IDD_PREFIX_REG_EXP = /^[\d]+(?:[~\u2053\u223C\uFF5E][\d]+)?$/;
function getIddPrefix(country, callingCode, metadata) {
  var countryMetadata = new Metadata(metadata);
  countryMetadata.selectNumberingPlan(country || callingCode);
  if (countryMetadata.defaultIDDPrefix()) {
    return countryMetadata.defaultIDDPrefix();
  }
  if (SINGLE_IDD_PREFIX_REG_EXP.test(countryMetadata.IDDPrefix())) {
    return countryMetadata.IDDPrefix();
  }
}

// node_modules/libphonenumber-js/es6/helpers/extension/createExtensionPattern.js
var RFC3966_EXTN_PREFIX = ";ext=";
var getExtensionDigitsPattern = function getExtensionDigitsPattern2(maxLength) {
  return "([".concat(VALID_DIGITS, "]{1,").concat(maxLength, "})");
};
function createExtensionPattern(purpose) {
  var extLimitAfterExplicitLabel = "20";
  var extLimitAfterLikelyLabel = "15";
  var extLimitAfterAmbiguousChar = "9";
  var extLimitWhenNotSure = "6";
  var possibleSeparatorsBetweenNumberAndExtLabel = "[ \xA0\\t,]*";
  var possibleCharsAfterExtLabel = "[:\\.\uFF0E]?[ \xA0\\t,-]*";
  var optionalExtnSuffix = "#?";
  var explicitExtLabels = "(?:e?xt(?:ensi(?:o\u0301?|\xF3))?n?|\uFF45?\uFF58\uFF54\uFF4E?|\u0434\u043E\u0431|anexo)";
  var ambiguousExtLabels = "(?:[x\uFF58#\uFF03~\uFF5E]|int|\uFF49\uFF4E\uFF54)";
  var ambiguousSeparator = "[- ]+";
  var possibleSeparatorsNumberExtLabelNoComma = "[ \xA0\\t]*";
  var autoDiallingAndExtLabelsFound = "(?:,{2}|;)";
  var rfcExtn = RFC3966_EXTN_PREFIX + getExtensionDigitsPattern(extLimitAfterExplicitLabel);
  var explicitExtn = possibleSeparatorsBetweenNumberAndExtLabel + explicitExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterExplicitLabel) + optionalExtnSuffix;
  var ambiguousExtn = possibleSeparatorsBetweenNumberAndExtLabel + ambiguousExtLabels + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  var americanStyleExtnWithSuffix = ambiguousSeparator + getExtensionDigitsPattern(extLimitWhenNotSure) + "#";
  var autoDiallingExtn = possibleSeparatorsNumberExtLabelNoComma + autoDiallingAndExtLabelsFound + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterLikelyLabel) + optionalExtnSuffix;
  var onlyCommasExtn = possibleSeparatorsNumberExtLabelNoComma + "(?:,)+" + possibleCharsAfterExtLabel + getExtensionDigitsPattern(extLimitAfterAmbiguousChar) + optionalExtnSuffix;
  return rfcExtn + "|" + explicitExtn + "|" + ambiguousExtn + "|" + americanStyleExtnWithSuffix + "|" + autoDiallingExtn + "|" + onlyCommasExtn;
}

// node_modules/libphonenumber-js/es6/helpers/isViablePhoneNumber.js
var MIN_LENGTH_PHONE_NUMBER_PATTERN = "[" + VALID_DIGITS + "]{" + MIN_LENGTH_FOR_NSN + "}";
var VALID_PHONE_NUMBER = "[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){3,}[" + VALID_PUNCTUATION + VALID_DIGITS + "]*";
var VALID_PHONE_NUMBER_START_REG_EXP = new RegExp("^[" + PLUS_CHARS + "]{0,1}(?:[" + VALID_PUNCTUATION + "]*[" + VALID_DIGITS + "]){1,2}$", "i");
var VALID_PHONE_NUMBER_WITH_EXTENSION = VALID_PHONE_NUMBER + // Phone number extensions
"(?:" + createExtensionPattern() + ")?";
var VALID_PHONE_NUMBER_PATTERN = new RegExp(
  // Either a short two-digit-only phone number
  "^" + MIN_LENGTH_PHONE_NUMBER_PATTERN + "$|^" + VALID_PHONE_NUMBER_WITH_EXTENSION + "$",
  "i"
);
function isViablePhoneNumber(number) {
  return number.length >= MIN_LENGTH_FOR_NSN && VALID_PHONE_NUMBER_PATTERN.test(number);
}
function isViablePhoneNumberStart(number) {
  return VALID_PHONE_NUMBER_START_REG_EXP.test(number);
}

// node_modules/libphonenumber-js/es6/helpers/RFC3966.js
function formatRFC3966(_ref) {
  var number = _ref.number, ext = _ref.ext;
  if (!number) {
    return "";
  }
  if (number[0] !== "+") {
    throw new Error('"formatRFC3966()" expects "number" to be in E.164 format.');
  }
  return "tel:".concat(number).concat(ext ? ";ext=" + ext : "");
}

// node_modules/libphonenumber-js/es6/format.js
var DEFAULT_OPTIONS = {
  formatExtension: function formatExtension(formattedNumber, extension, metadata) {
    return "".concat(formattedNumber).concat(metadata.ext()).concat(extension);
  }
};
function formatNumber(input, format, options, metadataJson) {
  if (options) {
    options = merge({}, DEFAULT_OPTIONS, options);
  } else {
    options = DEFAULT_OPTIONS;
  }
  var metadata = new Metadata(metadataJson);
  if (input.country && input.country !== "001") {
    if (!metadata.hasCountry(input.country)) {
      throw new Error("Unknown country: ".concat(input.country));
    }
    metadata.selectNumberingPlan(input.country);
  } else if (input.countryCallingCode) {
    metadata.selectNumberingPlan(input.countryCallingCode);
  } else return input.phone || "";
  var countryCallingCode = metadata.countryCallingCode();
  var nationalNumber = options.v2 ? input.nationalNumber : input.phone;
  var number;
  switch (format) {
    case "NATIONAL":
      if (!nationalNumber) {
        return "";
      }
      number = formatNationalNumber(nationalNumber, input.carrierCode, "NATIONAL", metadata, options);
      return addExtension(number, input.ext, metadata, options.formatExtension);
    case "INTERNATIONAL":
      if (!nationalNumber) {
        return "+".concat(countryCallingCode);
      }
      number = formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata, options);
      number = "+".concat(countryCallingCode, " ").concat(number);
      return addExtension(number, input.ext, metadata, options.formatExtension);
    case "E.164":
      return "+".concat(countryCallingCode).concat(nationalNumber);
    case "RFC3966":
      return formatRFC3966({
        number: "+".concat(countryCallingCode).concat(nationalNumber),
        ext: input.ext
      });
    // For reference, here's Google's IDD formatter:
    // https://github.com/google/libphonenumber/blob/32719cf74e68796788d1ca45abc85dcdc63ba5b9/java/libphonenumber/src/com/google/i18n/phonenumbers/PhoneNumberUtil.java#L1546
    // Not saying that this IDD formatter replicates it 1:1, but it seems to work.
    // Who would even need to format phone numbers in IDD format anyway?
    case "IDD":
      if (!options.fromCountry) {
        return;
      }
      var formattedNumber = formatIDD(nationalNumber, input.carrierCode, countryCallingCode, options.fromCountry, metadata);
      if (!formattedNumber) {
        return;
      }
      return addExtension(formattedNumber, input.ext, metadata, options.formatExtension);
    default:
      throw new Error('Unknown "format" argument passed to "formatNumber()": "'.concat(format, '"'));
  }
}
function formatNationalNumber(number, carrierCode, formatAs, metadata, options) {
  var format = chooseFormatForNumber(metadata.formats(), number);
  if (!format) {
    return number;
  }
  return formatNationalNumberUsingFormat(number, format, {
    useInternationalFormat: formatAs === "INTERNATIONAL",
    withNationalPrefix: format.nationalPrefixIsOptionalWhenFormattingInNationalFormat() && options && options.nationalPrefix === false ? false : true,
    carrierCode,
    metadata
  });
}
function chooseFormatForNumber(availableFormats, nationalNumber) {
  return pickFirstMatchingElement(availableFormats, function(format) {
    if (format.leadingDigitsPatterns().length > 0) {
      var lastLeadingDigitsPattern = format.leadingDigitsPatterns()[format.leadingDigitsPatterns().length - 1];
      if (nationalNumber.search(lastLeadingDigitsPattern) !== 0) {
        return false;
      }
    }
    return matchesEntirely(nationalNumber, format.pattern());
  });
}
function addExtension(formattedNumber, ext, metadata, formatExtension2) {
  return ext ? formatExtension2(formattedNumber, ext, metadata) : formattedNumber;
}
function formatIDD(nationalNumber, carrierCode, countryCallingCode, fromCountry, metadata) {
  var fromCountryCallingCode = getCountryCallingCode(fromCountry, metadata.metadata);
  if (fromCountryCallingCode === countryCallingCode) {
    var formattedNumber = formatNationalNumber(nationalNumber, carrierCode, "NATIONAL", metadata);
    if (countryCallingCode === "1") {
      return countryCallingCode + " " + formattedNumber;
    }
    return formattedNumber;
  }
  var iddPrefix = getIddPrefix(fromCountry, void 0, metadata.metadata);
  if (iddPrefix) {
    return "".concat(iddPrefix, " ").concat(countryCallingCode, " ").concat(formatNationalNumber(nationalNumber, null, "INTERNATIONAL", metadata));
  }
}
function merge() {
  var i = 1;
  for (var _len = arguments.length, objects = new Array(_len), _key = 0; _key < _len; _key++) {
    objects[_key] = arguments[_key];
  }
  while (i < objects.length) {
    if (objects[i]) {
      for (var key in objects[i]) {
        objects[0][key] = objects[i][key];
      }
    }
    i++;
  }
  return objects[0];
}
function pickFirstMatchingElement(elements, testFunction) {
  var i = 0;
  while (i < elements.length) {
    if (testFunction(elements[i])) {
      return elements[i];
    }
    i++;
  }
}

// node_modules/libphonenumber-js/es6/PhoneNumber.js
function _typeof2(o) {
  "@babel/helpers - typeof";
  return _typeof2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof2(o);
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function(r2) {
      _defineProperty(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey2(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _classCallCheck2(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties2(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey2(o.key), o);
  }
}
function _createClass2(e, r, t) {
  return r && _defineProperties2(e.prototype, r), t && _defineProperties2(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey2(t) {
  var i = _toPrimitive2(t, "string");
  return "symbol" == _typeof2(i) ? i : i + "";
}
function _toPrimitive2(t, r) {
  if ("object" != _typeof2(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof2(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var PhoneNumber = /* @__PURE__ */ (function() {
  function PhoneNumber2(countryOrCountryCallingCode, nationalNumber, metadata) {
    _classCallCheck2(this, PhoneNumber2);
    if (!countryOrCountryCallingCode) {
      throw new TypeError("First argument is required");
    }
    if (typeof countryOrCountryCallingCode !== "string") {
      throw new TypeError("First argument must be a string");
    }
    if (countryOrCountryCallingCode[0] === "+" && !nationalNumber) {
      throw new TypeError("`metadata` argument not passed");
    }
    if (isObject(nationalNumber) && isObject(nationalNumber.countries)) {
      metadata = nationalNumber;
      var e164Number = countryOrCountryCallingCode;
      if (!E164_NUMBER_REGEXP.test(e164Number)) {
        throw new Error('Invalid `number` argument passed: must consist of a "+" followed by digits');
      }
      var _extractCountryCallin = extractCountryCallingCode(e164Number, void 0, void 0, void 0, metadata), _countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
      nationalNumber = number;
      countryOrCountryCallingCode = _countryCallingCode;
      if (!nationalNumber) {
        throw new Error("Invalid `number` argument passed: too short");
      }
    }
    if (!nationalNumber) {
      throw new TypeError("`nationalNumber` argument is required");
    }
    if (typeof nationalNumber !== "string") {
      throw new TypeError("`nationalNumber` argument must be a string");
    }
    validateMetadata(metadata);
    var _getCountryAndCalling = getCountryAndCallingCodeFromOneOfThem(countryOrCountryCallingCode, metadata), country = _getCountryAndCalling.country, countryCallingCode = _getCountryAndCalling.callingCode;
    this.country = country;
    this.countryCallingCode = countryCallingCode;
    this.nationalNumber = nationalNumber;
    this.number = "+" + this.countryCallingCode + this.nationalNumber;
    this.getMetadata = function() {
      return metadata;
    };
  }
  return _createClass2(PhoneNumber2, [{
    key: "setExt",
    value: function setExt(ext) {
      this.ext = ext;
    }
  }, {
    key: "getPossibleCountries",
    value: function getPossibleCountries() {
      if (this.country) {
        return [this.country];
      }
      return getPossibleCountriesForNumber(this.countryCallingCode, this.nationalNumber, this.getMetadata());
    }
  }, {
    key: "isPossible",
    value: function isPossible() {
      return isPossiblePhoneNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isValid",
    value: function isValid() {
      return isValidNumber(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "isNonGeographic",
    value: function isNonGeographic() {
      var metadata = new Metadata(this.getMetadata());
      return metadata.isNonGeographicCallingCode(this.countryCallingCode);
    }
  }, {
    key: "isEqual",
    value: function isEqual(phoneNumber) {
      return this.number === phoneNumber.number && this.ext === phoneNumber.ext;
    }
    // `validateLength()` method was originally meant to be an equivalent for `validatePhoneNumberLength()`.
    //
    // Later, it became apparent that it's not really a true equivalent.
    // The reason is that a `PhoneNumber` instance is not created
    // when the phone number string is too short for it to be considered a valid phone number:
    // * When there must be at least 2 national (significant) number digits: `"1"`.
    // * When the country calling code part of an international number is incomplete: `"+12"`.
    //
    // So leaving this `validateLength()` method here would suggest a hidden anti-pattern
    // of using it instead of `validatePhoneNumberLength()` while ignoring
    // the "too short to be even possible" case from phone number length validation.
    // And ignoring that case wouldn't make any sense in a real-world application
    // because it would still be a valid case that should be handled.
    //
    // Because of that, this method was eventually commented out in order to not introduce
    // that kind of an anti-pattern.
    //
    // validateLength() {
    // 	const result = checkNumberLength(
    // 		this.nationalNumber,
    // 		undefined,
    // 		this.getMetadata()
    // 	)
    // 	if (result !== 'IS_POSSIBLE') {
    // 		return result
    // 	}
    // }
  }, {
    key: "getType",
    value: function getType2() {
      return getNumberType(this, {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "format",
    value: function format(_format, options) {
      return formatNumber(this, _format, options ? _objectSpread(_objectSpread({}, options), {}, {
        v2: true
      }) : {
        v2: true
      }, this.getMetadata());
    }
  }, {
    key: "formatNational",
    value: function formatNational(options) {
      return this.format("NATIONAL", options);
    }
  }, {
    key: "formatInternational",
    value: function formatInternational(options) {
      return this.format("INTERNATIONAL", options);
    }
  }, {
    key: "getURI",
    value: function getURI(options) {
      return this.format("RFC3966", options);
    }
  }]);
})();
var E164_NUMBER_REGEXP = /^\+\d+$/;

// node_modules/libphonenumber-js/es6/ParseError.js
function _typeof3(o) {
  "@babel/helpers - typeof";
  return _typeof3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof3(o);
}
function _defineProperties3(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || false, o.configurable = true, "value" in o && (o.writable = true), Object.defineProperty(e, _toPropertyKey3(o.key), o);
  }
}
function _createClass3(e, r, t) {
  return r && _defineProperties3(e.prototype, r), t && _defineProperties3(e, t), Object.defineProperty(e, "prototype", { writable: false }), e;
}
function _toPropertyKey3(t) {
  var i = _toPrimitive3(t, "string");
  return "symbol" == _typeof3(i) ? i : i + "";
}
function _toPrimitive3(t, r) {
  if ("object" != _typeof3(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof3(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _classCallCheck3(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _callSuper(t, o, e) {
  return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof3(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: true, configurable: true } }), Object.defineProperty(t, "prototype", { writable: false }), e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
  var r = "function" == typeof Map ? /* @__PURE__ */ new Map() : void 0;
  return _wrapNativeSuper = function _wrapNativeSuper2(t2) {
    if (null === t2 || !_isNativeFunction(t2)) return t2;
    if ("function" != typeof t2) throw new TypeError("Super expression must either be null or a function");
    if (void 0 !== r) {
      if (r.has(t2)) return r.get(t2);
      r.set(t2, Wrapper);
    }
    function Wrapper() {
      return _construct(t2, arguments, _getPrototypeOf(this).constructor);
    }
    return Wrapper.prototype = Object.create(t2.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }), _setPrototypeOf(Wrapper, t2);
  }, _wrapNativeSuper(t);
}
function _construct(t, e, r) {
  if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
  var o = [null];
  o.push.apply(o, e);
  var p = new (t.bind.apply(t, o))();
  return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch (t2) {
  }
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct2() {
    return !!t;
  })();
}
function _isNativeFunction(t) {
  try {
    return -1 !== Function.toString.call(t).indexOf("[native code]");
  } catch (n) {
    return "function" == typeof t;
  }
}
function _setPrototypeOf(t, e) {
  return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t2, e2) {
    return t2.__proto__ = e2, t2;
  }, _setPrototypeOf(t, e);
}
function _getPrototypeOf(t) {
  return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t2) {
    return t2.__proto__ || Object.getPrototypeOf(t2);
  }, _getPrototypeOf(t);
}
var ParseError = /* @__PURE__ */ (function(_Error) {
  function ParseError2(code) {
    var _this;
    _classCallCheck3(this, ParseError2);
    _this = _callSuper(this, ParseError2, [code]);
    Object.setPrototypeOf(_this, ParseError2.prototype);
    _this.name = _this.constructor.name;
    return _this;
  }
  _inherits(ParseError2, _Error);
  return _createClass3(ParseError2);
})(/* @__PURE__ */ _wrapNativeSuper(Error));

// node_modules/libphonenumber-js/es6/helpers/extension/extractExtension.js
var EXTN_PATTERN = new RegExp("(?:" + createExtensionPattern() + ")$", "i");
function extractExtension(number) {
  var start = number.search(EXTN_PATTERN);
  if (start < 0) {
    return {};
  }
  var numberWithoutExtension = number.slice(0, start);
  var matches = number.match(EXTN_PATTERN);
  var i = 1;
  while (i < matches.length) {
    if (matches[i]) {
      return {
        number: numberWithoutExtension,
        ext: matches[i]
      };
    }
    i++;
  }
}

// node_modules/libphonenumber-js/es6/helpers/parseDigits.js
var DIGITS = {
  "0": "0",
  "1": "1",
  "2": "2",
  "3": "3",
  "4": "4",
  "5": "5",
  "6": "6",
  "7": "7",
  "8": "8",
  "9": "9",
  "\uFF10": "0",
  // Fullwidth digit 0
  "\uFF11": "1",
  // Fullwidth digit 1
  "\uFF12": "2",
  // Fullwidth digit 2
  "\uFF13": "3",
  // Fullwidth digit 3
  "\uFF14": "4",
  // Fullwidth digit 4
  "\uFF15": "5",
  // Fullwidth digit 5
  "\uFF16": "6",
  // Fullwidth digit 6
  "\uFF17": "7",
  // Fullwidth digit 7
  "\uFF18": "8",
  // Fullwidth digit 8
  "\uFF19": "9",
  // Fullwidth digit 9
  "\u0660": "0",
  // Arabic-indic digit 0
  "\u0661": "1",
  // Arabic-indic digit 1
  "\u0662": "2",
  // Arabic-indic digit 2
  "\u0663": "3",
  // Arabic-indic digit 3
  "\u0664": "4",
  // Arabic-indic digit 4
  "\u0665": "5",
  // Arabic-indic digit 5
  "\u0666": "6",
  // Arabic-indic digit 6
  "\u0667": "7",
  // Arabic-indic digit 7
  "\u0668": "8",
  // Arabic-indic digit 8
  "\u0669": "9",
  // Arabic-indic digit 9
  "\u06F0": "0",
  // Eastern-Arabic digit 0
  "\u06F1": "1",
  // Eastern-Arabic digit 1
  "\u06F2": "2",
  // Eastern-Arabic digit 2
  "\u06F3": "3",
  // Eastern-Arabic digit 3
  "\u06F4": "4",
  // Eastern-Arabic digit 4
  "\u06F5": "5",
  // Eastern-Arabic digit 5
  "\u06F6": "6",
  // Eastern-Arabic digit 6
  "\u06F7": "7",
  // Eastern-Arabic digit 7
  "\u06F8": "8",
  // Eastern-Arabic digit 8
  "\u06F9": "9"
  // Eastern-Arabic digit 9
};
function parseDigit(character) {
  return DIGITS[character];
}

// node_modules/libphonenumber-js/es6/parseIncompletePhoneNumber.js
function _createForOfIteratorHelperLoose4(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray4(r)) || e && r && "number" == typeof r.length) {
    t && (r = t);
    var o = 0;
    return function() {
      return o >= r.length ? { done: true } : { done: false, value: r[o++] };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray4(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray4(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray4(r, a) : void 0;
  }
}
function _arrayLikeToArray4(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function parseIncompletePhoneNumber(string) {
  var result2 = "";
  for (var _iterator = _createForOfIteratorHelperLoose4(string.split("")), _step; !(_step = _iterator()).done; ) {
    var character = _step.value;
    result2 += parsePhoneNumberCharacter(character, result2) || "";
  }
  return result2;
}
function parsePhoneNumberCharacter(character, prevParsedCharacters, eventListener) {
  if (character === "+") {
    if (prevParsedCharacters) {
      if (typeof eventListener === "function") {
        eventListener("end");
      }
      return;
    }
    return "+";
  }
  return parseDigit(character);
}

// node_modules/libphonenumber-js/es6/helpers/extractPhoneContext.js
var PLUS_SIGN = "+";
var RFC3966_VISUAL_SEPARATOR_ = "[\\-\\.\\(\\)]?";
var RFC3966_PHONE_DIGIT_ = "([" + VALID_DIGITS + "]|" + RFC3966_VISUAL_SEPARATOR_ + ")";
var RFC3966_GLOBAL_NUMBER_DIGITS_ = "^\\" + PLUS_SIGN + RFC3966_PHONE_DIGIT_ + "*[" + VALID_DIGITS + "]" + RFC3966_PHONE_DIGIT_ + "*$";
var RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_ = new RegExp(RFC3966_GLOBAL_NUMBER_DIGITS_, "g");
var ALPHANUM_ = VALID_DIGITS;
var RFC3966_DOMAINLABEL_ = "[" + ALPHANUM_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var VALID_ALPHA_ = "a-zA-Z";
var RFC3966_TOPLABEL_ = "[" + VALID_ALPHA_ + "]+((\\-)*[" + ALPHANUM_ + "])*";
var RFC3966_DOMAINNAME_ = "^(" + RFC3966_DOMAINLABEL_ + "\\.)*" + RFC3966_TOPLABEL_ + "\\.?$";
var RFC3966_DOMAINNAME_PATTERN_ = new RegExp(RFC3966_DOMAINNAME_, "g");
var RFC3966_PREFIX_ = "tel:";
var RFC3966_PHONE_CONTEXT_ = ";phone-context=";
var RFC3966_ISDN_SUBADDRESS_ = ";isub=";
function extractPhoneContext(numberToExtractFrom) {
  var indexOfPhoneContext = numberToExtractFrom.indexOf(RFC3966_PHONE_CONTEXT_);
  if (indexOfPhoneContext < 0) {
    return null;
  }
  var phoneContextStart = indexOfPhoneContext + RFC3966_PHONE_CONTEXT_.length;
  if (phoneContextStart >= numberToExtractFrom.length) {
    return "";
  }
  var phoneContextEnd = numberToExtractFrom.indexOf(";", phoneContextStart);
  if (phoneContextEnd >= 0) {
    return numberToExtractFrom.substring(phoneContextStart, phoneContextEnd);
  } else {
    return numberToExtractFrom.substring(phoneContextStart);
  }
}
function isPhoneContextValid(phoneContext) {
  if (phoneContext === null) {
    return true;
  }
  if (phoneContext.length === 0) {
    return false;
  }
  return RFC3966_GLOBAL_NUMBER_DIGITS_PATTERN_.test(phoneContext) || RFC3966_DOMAINNAME_PATTERN_.test(phoneContext);
}

// node_modules/libphonenumber-js/es6/helpers/extractFormattedPhoneNumberFromPossibleRfc3966NumberUri.js
function extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(numberToParse, _ref) {
  var extractFormattedPhoneNumber = _ref.extractFormattedPhoneNumber;
  var phoneContext = extractPhoneContext(numberToParse);
  if (!isPhoneContextValid(phoneContext)) {
    throw new ParseError("NOT_A_NUMBER");
  }
  var phoneNumberString;
  if (phoneContext === null) {
    phoneNumberString = extractFormattedPhoneNumber(numberToParse) || "";
  } else {
    phoneNumberString = "";
    if (phoneContext.charAt(0) === PLUS_SIGN) {
      phoneNumberString += phoneContext;
    }
    var indexOfRfc3966Prefix = numberToParse.indexOf(RFC3966_PREFIX_);
    var indexOfNationalNumber;
    if (indexOfRfc3966Prefix >= 0) {
      indexOfNationalNumber = indexOfRfc3966Prefix + RFC3966_PREFIX_.length;
    } else {
      indexOfNationalNumber = 0;
    }
    var indexOfPhoneContext = numberToParse.indexOf(RFC3966_PHONE_CONTEXT_);
    phoneNumberString += numberToParse.substring(indexOfNationalNumber, indexOfPhoneContext);
  }
  var indexOfIsdn = phoneNumberString.indexOf(RFC3966_ISDN_SUBADDRESS_);
  if (indexOfIsdn > 0) {
    phoneNumberString = phoneNumberString.substring(0, indexOfIsdn);
  }
  if (phoneNumberString !== "") {
    return phoneNumberString;
  }
}

// node_modules/libphonenumber-js/es6/parse.js
var MAX_INPUT_STRING_LENGTH = 250;
var PHONE_NUMBER_START_PATTERN = new RegExp("[" + PLUS_CHARS + VALID_DIGITS + "]");
var AFTER_PHONE_NUMBER_END_PATTERN = new RegExp("[^" + VALID_DIGITS + "#]+$");
var USE_NON_GEOGRAPHIC_COUNTRY_CODE3 = false;
function parse(text, options, metadataJson) {
  options = options || {};
  var metadata = new Metadata(metadataJson);
  if (options.defaultCountry && !metadata.hasCountry(options.defaultCountry)) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    throw new Error("Unknown country: ".concat(options.defaultCountry));
  }
  var _parseInput = parseInput(text, options.v2, options.extract), formattedPhoneNumber = _parseInput.number, ext = _parseInput.ext, error = _parseInput.error;
  if (!formattedPhoneNumber) {
    if (options.v2) {
      if (error === "TOO_SHORT") {
        throw new ParseError("TOO_SHORT");
      }
      throw new ParseError("NOT_A_NUMBER");
    }
    return {};
  }
  var _parsePhoneNumber = parsePhoneNumber(
    formattedPhoneNumber,
    options.defaultCountry,
    options.defaultCallingCode,
    // If `country` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if `countryCallingCode` is returned, its numbering plan will also be selected in `metadata`.
    // Otherwise, if neither `country` nor `countryCallingCode` are returned, no numbering plan will be selected in `metadata`.
    metadata
  ), country = _parsePhoneNumber.country, nationalNumber = _parsePhoneNumber.nationalNumber, countryCallingCode = _parsePhoneNumber.countryCallingCode, countryCallingCodeSource = _parsePhoneNumber.countryCallingCodeSource, carrierCode = _parsePhoneNumber.carrierCode;
  if (!metadata.hasSelectedNumberingPlan()) {
    if (options.v2) {
      throw new ParseError("INVALID_COUNTRY");
    }
    return {};
  }
  if (!nationalNumber || nationalNumber.length < MIN_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_SHORT");
    }
    return {};
  }
  if (nationalNumber.length > MAX_LENGTH_FOR_NSN) {
    if (options.v2) {
      throw new ParseError("TOO_LONG");
    }
    return {};
  }
  if (options.v2) {
    var phoneNumber = new PhoneNumber(countryCallingCode, nationalNumber, metadata.metadata);
    if (country) {
      phoneNumber.country = country;
    }
    if (carrierCode) {
      phoneNumber.carrierCode = carrierCode;
    }
    if (ext) {
      phoneNumber.ext = ext;
    }
    phoneNumber.__countryCallingCodeSource = countryCallingCodeSource;
    return phoneNumber;
  }
  var valid = (options.extended ? metadata.hasSelectedNumberingPlan() : country) ? matchesEntirely(nationalNumber, metadata.nationalNumberPattern()) : false;
  if (!options.extended) {
    return valid ? result(country, nationalNumber, ext) : {};
  }
  return {
    country,
    countryCallingCode,
    carrierCode,
    valid,
    possible: valid ? true : options.extended === true && metadata.possibleLengths() && isPossibleNumber(nationalNumber, metadata) ? true : false,
    phone: nationalNumber,
    ext
  };
}
function _extractFormattedPhoneNumber(text, extract, throwOnError) {
  if (!text) {
    return;
  }
  if (text.length > MAX_INPUT_STRING_LENGTH) {
    if (throwOnError) {
      throw new ParseError("TOO_LONG");
    }
    return;
  }
  if (extract === false) {
    return text;
  }
  var startsAt = text.search(PHONE_NUMBER_START_PATTERN);
  if (startsAt < 0) {
    return;
  }
  return text.slice(startsAt).replace(AFTER_PHONE_NUMBER_END_PATTERN, "");
}
function parseInput(text, v2, extract) {
  var number = extractFormattedPhoneNumberFromPossibleRfc3966NumberUri(text, {
    extractFormattedPhoneNumber: function extractFormattedPhoneNumber(text2) {
      return _extractFormattedPhoneNumber(text2, extract, v2);
    }
  });
  if (!number) {
    return {};
  }
  if (!isViablePhoneNumber(number)) {
    if (isViablePhoneNumberStart(number)) {
      return {
        error: "TOO_SHORT"
      };
    }
    return {};
  }
  var withExtensionStripped = extractExtension(number);
  if (withExtensionStripped.ext) {
    return withExtensionStripped;
  }
  return {
    number
  };
}
function result(country, nationalNumber, ext) {
  var result2 = {
    country,
    phone: nationalNumber
  };
  if (ext) {
    result2.ext = ext;
  }
  return result2;
}
function parsePhoneNumber(formattedPhoneNumber, defaultCountry, defaultCallingCode, metadata) {
  var _extractCountryCallin = extractCountryCallingCode(
    parseIncompletePhoneNumber(formattedPhoneNumber),
    void 0,
    // `defaultCountry` and `defaultCallingCode` are only used to detect
    // if it's an "international" phone number or not. They won't be used
    // to derive the resulting `countryCallingCode` from them, or anything like that.
    defaultCountry,
    defaultCallingCode,
    metadata.metadata
  ), countryCallingCodeSource = _extractCountryCallin.countryCallingCodeSource, countryCallingCode = _extractCountryCallin.countryCallingCode, number = _extractCountryCallin.number;
  var country;
  if (countryCallingCode) {
    metadata.selectNumberingPlan(countryCallingCode);
  } else if (number && (defaultCountry || defaultCallingCode)) {
    if (defaultCountry) {
      country = defaultCountry;
      metadata.selectNumberingPlan(defaultCountry);
      countryCallingCode = metadata.numberingPlan.callingCode();
    } else {
      metadata.selectNumberingPlan(defaultCallingCode);
      countryCallingCode = defaultCallingCode;
      if (USE_NON_GEOGRAPHIC_COUNTRY_CODE3) {
        if (metadata.isNonGeographicCallingCode(countryCallingCode)) {
          country = "001";
        }
      }
    }
  } else return {};
  if (!number) {
    return {
      countryCallingCodeSource,
      countryCallingCode
    };
  }
  var _extractNationalNumbe = extractNationalNumber(parseIncompletePhoneNumber(number), void 0, metadata), nationalNumber = _extractNationalNumbe.nationalNumber, carrierCode = _extractNationalNumbe.carrierCode;
  var exactCountry = getCountryByCallingCode(countryCallingCode, {
    nationalNumber,
    metadata
  });
  if (exactCountry) {
    country = exactCountry;
    if (exactCountry === "001") {
    } else {
      metadata.selectNumberingPlan(country);
    }
  }
  return {
    country,
    countryCallingCode,
    countryCallingCodeSource,
    nationalNumber,
    carrierCode
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumberWithError_.js
function _typeof4(o) {
  "@babel/helpers - typeof";
  return _typeof4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof4(o);
}
function ownKeys2(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys2(Object(t), true).forEach(function(r2) {
      _defineProperty2(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys2(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty2(e, r, t) {
  return (r = _toPropertyKey4(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey4(t) {
  var i = _toPrimitive4(t, "string");
  return "symbol" == _typeof4(i) ? i : i + "";
}
function _toPrimitive4(t, r) {
  if ("object" != _typeof4(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof4(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function parsePhoneNumberWithError(text, options, metadata) {
  return parse(text, _objectSpread2(_objectSpread2({}, options), {}, {
    v2: true
  }), metadata);
}

// node_modules/libphonenumber-js/es6/normalizeArguments.js
function _typeof5(o) {
  "@babel/helpers - typeof";
  return _typeof5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof5(o);
}
function ownKeys3(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread3(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys3(Object(t), true).forEach(function(r2) {
      _defineProperty3(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys3(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty3(e, r, t) {
  return (r = _toPropertyKey5(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey5(t) {
  var i = _toPrimitive5(t, "string");
  return "symbol" == _typeof5(i) ? i : i + "";
}
function _toPrimitive5(t, r) {
  if ("object" != _typeof5(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof5(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray5(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray5(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray5(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray5(r, a) : void 0;
  }
}
function _arrayLikeToArray5(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e, n, i, u, a = [], f = true, o = false;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = false;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = true) ;
    } catch (r2) {
      o = true, n = r2;
    } finally {
      try {
        if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function normalizeArguments(args) {
  var _Array$prototype$slic = Array.prototype.slice.call(args), _Array$prototype$slic2 = _slicedToArray(_Array$prototype$slic, 4), arg_1 = _Array$prototype$slic2[0], arg_2 = _Array$prototype$slic2[1], arg_3 = _Array$prototype$slic2[2], arg_4 = _Array$prototype$slic2[3];
  var text;
  var options;
  var metadata;
  if (typeof arg_1 === "string") {
    text = arg_1;
  } else throw new TypeError("A text for parsing must be a string.");
  if (!arg_2 || typeof arg_2 === "string") {
    if (arg_4) {
      options = arg_3;
      metadata = arg_4;
    } else {
      options = void 0;
      metadata = arg_3;
    }
    if (arg_2) {
      options = _objectSpread3({
        defaultCountry: arg_2
      }, options);
    }
  } else if (isObject(arg_2)) {
    if (arg_3) {
      options = arg_2;
      metadata = arg_3;
    } else {
      metadata = arg_2;
    }
  } else throw new Error("Invalid second argument: ".concat(arg_2));
  return {
    text,
    options,
    metadata
  };
}

// node_modules/libphonenumber-js/es6/parsePhoneNumber_.js
function _typeof6(o) {
  "@babel/helpers - typeof";
  return _typeof6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof6(o);
}
function ownKeys4(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread4(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys4(Object(t), true).forEach(function(r2) {
      _defineProperty4(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys4(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty4(e, r, t) {
  return (r = _toPropertyKey6(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey6(t) {
  var i = _toPrimitive6(t, "string");
  return "symbol" == _typeof6(i) ? i : i + "";
}
function _toPrimitive6(t, r) {
  if ("object" != _typeof6(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof6(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function parsePhoneNumber2(text, options, metadata) {
  if (options && options.defaultCountry && !isSupportedCountry(options.defaultCountry, metadata)) {
    options = _objectSpread4(_objectSpread4({}, options), {}, {
      defaultCountry: void 0
    });
  }
  try {
    return parsePhoneNumberWithError(text, options, metadata);
  } catch (error) {
    if (error instanceof ParseError) {
    } else {
      throw error;
    }
  }
}

// node_modules/libphonenumber-js/es6/isValidPhoneNumber.js
function _typeof7(o) {
  "@babel/helpers - typeof";
  return _typeof7 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
    return typeof o2;
  } : function(o2) {
    return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
  }, _typeof7(o);
}
function ownKeys5(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function(r2) {
      return Object.getOwnPropertyDescriptor(e, r2).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread5(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys5(Object(t), true).forEach(function(r2) {
      _defineProperty5(e, r2, t[r2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys5(Object(t)).forEach(function(r2) {
      Object.defineProperty(e, r2, Object.getOwnPropertyDescriptor(t, r2));
    });
  }
  return e;
}
function _defineProperty5(e, r, t) {
  return (r = _toPropertyKey7(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: true, configurable: true, writable: true }) : e[r] = t, e;
}
function _toPropertyKey7(t) {
  var i = _toPrimitive7(t, "string");
  return "symbol" == _typeof7(i) ? i : i + "";
}
function _toPrimitive7(t, r) {
  if ("object" != _typeof7(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof7(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function isValidPhoneNumber() {
  var _normalizeArguments = normalizeArguments(arguments), text = _normalizeArguments.text, options = _normalizeArguments.options, metadata = _normalizeArguments.metadata;
  options = _objectSpread5(_objectSpread5({}, options), {}, {
    extract: false
  });
  var phoneNumber = parsePhoneNumber2(text, options, metadata);
  return phoneNumber && phoneNumber.isValid() || false;
}

// node_modules/libphonenumber-js/min/exports/isValidPhoneNumber.js
function isValidPhoneNumber2() {
  return withMetadataArgument(isValidPhoneNumber, arguments);
}

// src/app/auth/register/register.ts
var _c02 = ["addressInput"];
function RegisterUserComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function RegisterUserComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function RegisterUserComponent_form_27_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.FIRST_NAME_REQUIRED"), " ");
  }
}
function RegisterUserComponent_form_27_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.LAST_NAME_REQUIRED"), " ");
  }
}
function RegisterUserComponent_form_27_small_30_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.EMAIL_REQUIRED"));
  }
}
function RegisterUserComponent_form_27_small_30_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.EMAIL_INVALID"));
  }
}
function RegisterUserComponent_form_27_small_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275template(1, RegisterUserComponent_form_27_small_30_span_1_Template, 3, 3, "span", 23)(2, RegisterUserComponent_form_27_small_30_span_2_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailField_r4 = \u0275\u0275reference(28);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r4.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r4.hasError("email"));
  }
}
function RegisterUserComponent_form_27_option_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 53);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r5 = ctx.$implicit;
    \u0275\u0275property("value", c_r5.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r5.label);
  }
}
function RegisterUserComponent_form_27_small_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.PHONE_REQUIRED"), " ");
  }
}
function RegisterUserComponent_form_27_small_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.PHONE_INVALID"), " ");
  }
}
function RegisterUserComponent_form_27_small_54_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.PASSWORD_REQUIRED"));
  }
}
function RegisterUserComponent_form_27_small_54_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.PASSWORD_MIN"));
  }
}
function RegisterUserComponent_form_27_small_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275template(1, RegisterUserComponent_form_27_small_54_span_1_Template, 3, 3, "span", 23)(2, RegisterUserComponent_form_27_small_54_span_2_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordField_r6 = \u0275\u0275reference(52);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r6.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r6.hasError("minlength"));
  }
}
function RegisterUserComponent_form_27_div_55_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.SIGN_IN"));
  }
}
function RegisterUserComponent_form_27_div_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275template(2, RegisterUserComponent_form_27_div_55_a_2_Template, 3, 3, "a", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.step1Error, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.step1ShowLoginLink);
  }
}
function RegisterUserComponent_form_27_span_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 57);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function RegisterUserComponent_form_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 29, 0);
    \u0275\u0275listener("ngSubmit", function RegisterUserComponent_form_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const step1Form_r2 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStep1Next(step1Form_r2));
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "div", 31)(4, "label", 32);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "span", 33);
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "input", 34, 1);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_27_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.firstName, $event) || (ctx_r2.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, RegisterUserComponent_form_27_small_11_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 31)(13, "label", 36);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "span", 33);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 37, 2);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_27_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.lastName, $event) || (ctx_r2.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, RegisterUserComponent_form_27_small_20_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 31)(22, "label", 38);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementStart(25, "span", 33);
    \u0275\u0275text(26, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "input", 39, 3);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_27_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.email, $event) || (ctx_r2.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterUserComponent_form_27_Template_input_ngModelChange_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onEmailChange());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, RegisterUserComponent_form_27_small_30_Template, 3, 2, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 31)(32, "label", 40);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "span", 33);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 41)(38, "select", 42);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_27_Template_select_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.phoneDialCode, $event) || (ctx_r2.phoneDialCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterUserComponent_form_27_Template_select_ngModelChange_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDialCodeChange());
    });
    \u0275\u0275template(39, RegisterUserComponent_form_27_option_39_Template, 2, 2, "option", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 44, 4);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_27_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.phoneNumber, $event) || (ctx_r2.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function RegisterUserComponent_form_27_Template_input_blur_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPhoneBlur());
    })("ngModelChange", function RegisterUserComponent_form_27_Template_input_ngModelChange_40_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onPhoneChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(43, RegisterUserComponent_form_27_small_43_Template, 3, 3, "small", 35)(44, RegisterUserComponent_form_27_small_44_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 31)(46, "label", 45);
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementStart(49, "span", 33);
    \u0275\u0275text(50, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "input", 46, 5);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_27_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.password, $event) || (ctx_r2.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(54, RegisterUserComponent_form_27_small_54_Template, 3, 2, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(55, RegisterUserComponent_form_27_div_55_Template, 3, 2, "div", 47);
    \u0275\u0275elementStart(56, "button", 48);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275template(60, RegisterUserComponent_form_27_span_60_Template, 2, 0, "span", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "p", 50);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementStart(64, "a", 51);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step1Form_r2 = \u0275\u0275reference(1);
    const firstNameField_r7 = \u0275\u0275reference(10);
    const lastNameField_r8 = \u0275\u0275reference(19);
    const emailField_r4 = \u0275\u0275reference(28);
    const phoneField_r9 = \u0275\u0275reference(41);
    const passwordField_r6 = \u0275\u0275reference(52);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 37, "AUTH.REGISTER.FIRST_NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", firstNameField_r7.invalid && (firstNameField_r7.dirty || firstNameField_r7.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.firstName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", firstNameField_r7.invalid && (firstNameField_r7.dirty || firstNameField_r7.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 39, "AUTH.REGISTER.LAST_NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", lastNameField_r8.invalid && (lastNameField_r8.dirty || lastNameField_r8.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", lastNameField_r8.invalid && (lastNameField_r8.dirty || lastNameField_r8.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(24, 41, "AUTH.REGISTER.EMAIL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", emailField_r4.invalid && (emailField_r4.dirty || emailField_r4.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.email);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 43, "AUTH.REGISTER.EMAIL_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", emailField_r4.invalid && (emailField_r4.dirty || emailField_r4.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(34, 45, "AUTH.REGISTER.PHONE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.phoneDialCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.countryCodes);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", phoneField_r9.invalid && (phoneField_r9.dirty || phoneField_r9.touched) || ctx_r2.phoneInvalid && phoneField_r9.touched);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.phoneNumber);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(42, 47, "AUTH.REGISTER.PHONE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", phoneField_r9.invalid && (phoneField_r9.dirty || phoneField_r9.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.phoneInvalid && !phoneField_r9.hasError("required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(48, 49, "AUTH.REGISTER.PASSWORD"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", passwordField_r6.invalid && (passwordField_r6.dirty || passwordField_r6.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.password);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(53, 51, "AUTH.REGISTER.PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", passwordField_r6.invalid && (passwordField_r6.dirty || passwordField_r6.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.step1Error);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !step1Form_r2.valid || ctx_r2.step1Loading || ctx_r2.phoneInvalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.step1Loading ? \u0275\u0275pipeBind1(58, 53, "AUTH.REGISTER.SAVING") : \u0275\u0275pipeBind1(59, 55, "AUTH.REGISTER.NEXT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.step1Loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(63, 57, "AUTH.REGISTER.HAVE_ACCOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 59, "AUTH.REGISTER.SIGN_IN"));
  }
}
function RegisterUserComponent_form_28_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275listener("mousedown", function RegisterUserComponent_form_28_div_16_div_1_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r12);
      return \u0275\u0275resetView($event.preventDefault());
    })("click", function RegisterUserComponent_form_28_div_16_div_1_Template_div_click_0_listener() {
      const prediction_r13 = \u0275\u0275restoreView(_r12).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onAddressSelected(prediction_r13));
    });
    \u0275\u0275elementStart(1, "div", 89);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 90);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prediction_r13 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r13.mainText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r13.secondaryText);
  }
}
function RegisterUserComponent_form_28_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275template(1, RegisterUserComponent_form_28_div_16_div_1_Template, 5, 2, "div", 87);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.addressPredictions);
  }
}
function RegisterUserComponent_form_28_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.SEARCHING"));
  }
}
function RegisterUserComponent_form_28_small_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.HOUSE_REQUIRED"));
  }
}
function RegisterUserComponent_form_28_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 92);
    \u0275\u0275text(1, "Filling address\u2026");
    \u0275\u0275elementEnd();
  }
}
function RegisterUserComponent_form_28_small_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.ZIP_REQUIRED"));
  }
}
function RegisterUserComponent_form_28_small_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.STREET1_REQUIRED"));
  }
}
function RegisterUserComponent_form_28_small_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.CITY_REQUIRED"));
  }
}
function RegisterUserComponent_form_28_small_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.STATE_REQUIRED"));
  }
}
function RegisterUserComponent_form_28_small_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 52);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.COUNTRY_REQUIRED"));
  }
}
function RegisterUserComponent_form_28_div_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 54);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.step2Error);
  }
}
function RegisterUserComponent_form_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 29, 6);
    \u0275\u0275listener("ngSubmit", function RegisterUserComponent_form_28_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r10);
      const step2Form_r11 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStep2Submit(step2Form_r11));
    });
    \u0275\u0275elementStart(2, "div", 58)(3, "span", 59);
    \u0275\u0275text(4, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 31)(9, "label", 60);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 61)(13, "input", 62, 7);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("input", function RegisterUserComponent_form_28_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAddressInput($event));
    })("blur", function RegisterUserComponent_form_28_Template_input_blur_13_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideAddressList());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RegisterUserComponent_form_28_div_16_Template, 2, 1, "div", 63)(17, RegisterUserComponent_form_28_div_17_Template, 3, 3, "div", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small", 65);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 66)(22, "div", 31)(23, "label", 67);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span", 33);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 68, 8);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_28_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.houseNameNumber, $event) || (ctx_r2.houseNameNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, RegisterUserComponent_form_28_small_30_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 31)(32, "label", 69);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "span", 33);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "input", 70, 9);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_28_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.zipPostalCode, $event) || (ctx_r2.zipPostalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function RegisterUserComponent_form_28_Template_input_blur_37_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onZipBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, RegisterUserComponent_form_28_small_39_Template, 2, 0, "small", 71)(40, RegisterUserComponent_form_28_small_40_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(41, "div", 31)(42, "label", 72);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementStart(45, "span", 33);
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "input", 73, 10);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_28_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.street1, $event) || (ctx_r2.street1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(50, RegisterUserComponent_form_28_small_50_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "div", 31)(52, "label", 74);
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 75);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_28_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.street2, $event) || (ctx_r2.street2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(56, "div", 66)(57, "div", 31)(58, "label", 76);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementStart(61, "span", 33);
    \u0275\u0275text(62, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(63, "input", 77, 11);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_28_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.city, $event) || (ctx_r2.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, RegisterUserComponent_form_28_small_66_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(67, "div", 31)(68, "label", 78);
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(71, "input", 79);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_28_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.district, $event) || (ctx_r2.district = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(73, "div", 66)(74, "div", 31)(75, "label", 80);
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementStart(78, "span", 33);
    \u0275\u0275text(79, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(80, "input", 81, 12);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_28_Template_input_ngModelChange_80_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.state, $event) || (ctx_r2.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(83, RegisterUserComponent_form_28_small_83_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "div", 31)(85, "label", 82);
    \u0275\u0275text(86);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275elementStart(88, "span", 33);
    \u0275\u0275text(89, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(90, "input", 83, 13);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterUserComponent_form_28_Template_input_ngModelChange_90_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.country, $event) || (ctx_r2.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(93, RegisterUserComponent_form_28_small_93_Template, 3, 3, "small", 35);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(94, RegisterUserComponent_form_28_div_94_Template, 2, 1, "div", 47);
    \u0275\u0275elementStart(95, "div", 84)(96, "button", 85);
    \u0275\u0275listener("click", function RegisterUserComponent_form_28_Template_button_click_96_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275text(97);
    \u0275\u0275pipe(98, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "button", 48);
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step2Form_r11 = \u0275\u0275reference(1);
    const houseField_r14 = \u0275\u0275reference(29);
    const zipField_r15 = \u0275\u0275reference(38);
    const street1Field_r16 = \u0275\u0275reference(48);
    const cityField_r17 = \u0275\u0275reference(64);
    const stateField_r18 = \u0275\u0275reference(81);
    const countryField_r19 = \u0275\u0275reference(91);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 50, "AUTH.REGISTER.STEP2_BANNER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 52, "AUTH.REGISTER.SEARCH_ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 54, "AUTH.REGISTER.SEARCH_ADDRESS_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.showAddressList && ctx_r2.addressPredictions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.addressLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 56, "COMMON.SEARCH_HINT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 58, "AUTH.REGISTER.HOUSE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", houseField_r14.invalid && (houseField_r14.dirty || houseField_r14.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.houseNameNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", houseField_r14.invalid && (houseField_r14.dirty || houseField_r14.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(34, 60, "AUTH.REGISTER.ZIP"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", zipField_r15.invalid && (zipField_r15.dirty || zipField_r15.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.zipPostalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.zipLookupLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", zipField_r15.invalid && (zipField_r15.dirty || zipField_r15.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(44, 62, "AUTH.REGISTER.STREET1"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", street1Field_r16.invalid && (street1Field_r16.dirty || street1Field_r16.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.street1);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(49, 64, "AUTH.REGISTER.STREET1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", street1Field_r16.invalid && (street1Field_r16.dirty || street1Field_r16.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 66, "AUTH.REGISTER.STREET2"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.street2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(60, 68, "AUTH.REGISTER.CITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", cityField_r17.invalid && (cityField_r17.dirty || cityField_r17.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.city);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(65, 70, "AUTH.REGISTER.CITY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cityField_r17.invalid && (cityField_r17.dirty || cityField_r17.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 72, "AUTH.REGISTER.DISTRICT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.district);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(72, 74, "AUTH.REGISTER.DISTRICT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(77, 76, "AUTH.REGISTER.STATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", stateField_r18.invalid && (stateField_r18.dirty || stateField_r18.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.state);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(82, 78, "AUTH.REGISTER.STATE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", stateField_r18.invalid && (stateField_r18.dirty || stateField_r18.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(87, 80, "AUTH.REGISTER.COUNTRY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", countryField_r19.invalid && (countryField_r19.dirty || countryField_r19.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.country);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(92, 82, "AUTH.REGISTER.COUNTRY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", countryField_r19.invalid && (countryField_r19.dirty || countryField_r19.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.step2Error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(98, 84, "AUTH.REGISTER.BACK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !step2Form_r11.valid || ctx_r2.step2Loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.step2Loading ? \u0275\u0275pipeBind1(101, 86, "AUTH.REGISTER.CREATING") : \u0275\u0275pipeBind1(102, 88, "AUTH.REGISTER.CREATE_ACCOUNT"), " ");
  }
}
var RegisterUserComponent = class _RegisterUserComponent {
  auth;
  router;
  addressService;
  cdr;
  addressInput;
  countryCodes = [
    { code: "+1", label: "US/CA (+1)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+91", label: "IN (+91)" },
    { code: "+61", label: "AU (+61)" },
    { code: "+64", label: "NZ (+64)" },
    { code: "+65", label: "SG (+65)" },
    { code: "+60", label: "MY (+60)" },
    { code: "+971", label: "UAE (+971)" },
    { code: "+966", label: "SA (+966)" },
    { code: "+974", label: "QA (+974)" },
    { code: "+965", label: "KW (+965)" },
    { code: "+968", label: "OM (+968)" },
    { code: "+973", label: "BH (+973)" },
    { code: "+49", label: "DE (+49)" },
    { code: "+33", label: "FR (+33)" },
    { code: "+39", label: "IT (+39)" },
    { code: "+34", label: "ES (+34)" },
    { code: "+31", label: "NL (+31)" },
    { code: "+46", label: "SE (+46)" },
    { code: "+47", label: "NO (+47)" },
    { code: "+45", label: "DK (+45)" },
    { code: "+41", label: "CH (+41)" },
    { code: "+43", label: "AT (+43)" },
    { code: "+32", label: "BE (+32)" },
    { code: "+86", label: "CN (+86)" },
    { code: "+81", label: "JP (+81)" },
    { code: "+82", label: "KR (+82)" },
    { code: "+66", label: "TH (+66)" },
    { code: "+62", label: "ID (+62)" },
    { code: "+63", label: "PH (+63)" },
    { code: "+84", label: "VN (+84)" },
    { code: "+880", label: "BD (+880)" },
    { code: "+94", label: "LK (+94)" },
    { code: "+92", label: "PK (+92)" },
    { code: "+27", label: "ZA (+27)" },
    { code: "+234", label: "NG (+234)" },
    { code: "+254", label: "KE (+254)" },
    { code: "+20", label: "EG (+20)" },
    { code: "+55", label: "BR (+55)" },
    { code: "+52", label: "MX (+52)" },
    { code: "+54", label: "AR (+54)" },
    { code: "+57", label: "CO (+57)" }
  ];
  // Step 1 fields
  firstName = "";
  lastName = "";
  email = "";
  phoneDialCode = "+91";
  phoneNumber = "";
  password = "";
  // Step 2 fields
  houseNameNumber = "";
  street1 = "";
  street2 = "";
  city = "";
  district = "";
  state = "";
  country = "";
  zipPostalCode = "";
  latitude = null;
  longitude = null;
  // Step state
  currentStep = 1;
  draftUserId = null;
  step1Loading = false;
  step2Loading = false;
  step1Error = "";
  step2Error = "";
  step1ShowLoginLink = false;
  phoneInvalid = false;
  // Address autocomplete
  addressPredictions = [];
  showAddressList = false;
  addressLoading = false;
  zipLookupLoading = false;
  addressSearch$ = new Subject();
  destroy$ = new Subject();
  constructor(auth, router, addressService, cdr) {
    this.auth = auth;
    this.router = router;
    this.addressService = addressService;
    this.cdr = cdr;
  }
  ngOnInit() {
    if (this.auth.isAuthenticated() && this.auth.getUserType() === "User" && !this.auth.isProfileComplete()) {
      const userId = parseInt(this.auth.getUserId() ?? "0", 10);
      if (userId > 0) {
        this.draftUserId = userId;
        this.currentStep = 2;
      }
    }
    this.addressSearch$.pipe(switchMap((input) => {
      this.addressLoading = true;
      this.cdr.detectChanges();
      return this.addressService.getAddressPredictions(input).pipe(catchError(() => of([])));
    }), takeUntil(this.destroy$)).subscribe((predictions) => {
      this.addressPredictions = predictions;
      this.showAddressList = predictions.length > 0;
      this.addressLoading = false;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  onEmailChange() {
    if (this.step1Error || this.step1ShowLoginLink) {
      this.step1Error = "";
      this.step1ShowLoginLink = false;
    }
  }
  onPhoneBlur() {
    if (!this.phoneNumber)
      return;
    this.phoneInvalid = !isValidPhoneNumber2(this.phoneDialCode + this.phoneNumber);
    this.cdr.detectChanges();
  }
  onPhoneChange() {
    this.phoneInvalid = false;
  }
  onDialCodeChange() {
    if (this.phoneNumber) {
      this.phoneInvalid = !isValidPhoneNumber2(this.phoneDialCode + this.phoneNumber);
      this.cdr.detectChanges();
    }
  }
  onStep1Next(form) {
    if (!form.valid)
      return;
    this.phoneInvalid = !isValidPhoneNumber2(this.phoneDialCode + this.phoneNumber);
    if (this.phoneInvalid)
      return;
    this.step1Loading = true;
    this.step1Error = "";
    this.step1ShowLoginLink = false;
    this.auth.registerUserStep1({
      FirstName: this.firstName,
      LastName: this.lastName,
      Email: this.email,
      Password: this.password,
      PhoneNumber: this.phoneDialCode + this.phoneNumber
    }).subscribe({
      next: (res) => {
        this.draftUserId = res.userId;
        this.currentStep = 2;
        this.step1Loading = false;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.step1Error = err.error?.message || "Could not save. Please try again.";
        this.step1ShowLoginLink = err.status === 400;
        this.step1Loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  goBack() {
    this.currentStep = 1;
  }
  onStep2Submit(form) {
    if (!form.valid || this.draftUserId === null)
      return;
    this.step2Loading = true;
    this.step2Error = "";
    this.auth.registerUserStep2(this.draftUserId, {
      HouseNameNumber: this.houseNameNumber,
      Street1: this.street1,
      Street2: this.street2,
      City: this.city,
      District: this.district,
      State: this.state,
      Country: this.country,
      ZipPostalCode: this.zipPostalCode,
      Latitude: this.latitude,
      Longitude: this.longitude
    }).subscribe({
      next: () => {
        this.step2Loading = false;
        this.cdr.detectChanges();
        this.router.navigate(["/"]);
      },
      error: (err) => {
        this.step2Error = err.error?.message || "Could not complete registration. Please try again.";
        this.step2Loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onAddressInput(event) {
    const input = event.target.value;
    if (input && input.length >= 3) {
      this.addressSearch$.next(input);
    } else {
      this.showAddressList = false;
      this.addressPredictions = [];
      this.addressLoading = false;
      this.cdr.detectChanges();
    }
  }
  onAddressSelected(prediction) {
    this.showAddressList = false;
    const d = prediction.details;
    if (!d)
      return;
    this.houseNameNumber = d.houseNameNumber;
    this.street1 = d.street1;
    this.street2 = d.street2;
    this.city = d.city;
    this.state = d.state;
    this.country = d.country;
    this.zipPostalCode = d.zipPostalCode;
    this.latitude = d.latitude ?? null;
    this.longitude = d.longitude ?? null;
    this.district = d.district || "";
    if (this.addressInput) {
      this.addressInput.nativeElement.value = prediction.description;
    }
    this.cdr.detectChanges();
  }
  hideAddressList() {
    setTimeout(() => {
      this.showAddressList = false;
    }, 200);
  }
  onZipBlur() {
    const code = this.zipPostalCode?.trim();
    if (!code || code.length < 3)
      return;
    this.zipLookupLoading = true;
    this.cdr.detectChanges();
    this.addressService.lookupByPostcode(code).subscribe({
      next: (details) => {
        if (details) {
          if (details.city)
            this.city = details.city;
          if (details.state)
            this.state = details.state;
          if (details.country)
            this.country = details.country;
          if (details.district)
            this.district = details.district;
          if (details.latitude)
            this.latitude = details.latitude ?? null;
          if (details.longitude)
            this.longitude = details.longitude ?? null;
        }
        this.zipLookupLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.zipLookupLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function RegisterUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterUserComponent)(\u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AddressService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterUserComponent, selectors: [["app-register-user"]], viewQuery: function RegisterUserComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressInput = _t.first);
    }
  }, decls: 29, vars: 24, consts: [["step1Form", "ngForm"], ["firstNameField", "ngModel"], ["lastNameField", "ngModel"], ["emailField", "ngModel"], ["phoneField", "ngModel"], ["passwordField", "ngModel"], ["step2Form", "ngForm"], ["addressInput", ""], ["houseField", "ngModel"], ["zipField", "ngModel"], ["street1Field", "ngModel"], ["cityField", "ngModel"], ["stateField", "ngModel"], ["countryField", "ngModel"], [1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "logo-circle"], [1, "header-text"], [1, "subtitle"], [1, "step-indicator"], [1, "step-item"], [1, "step-circle"], [4, "ngIf"], ["class", "check", 4, "ngIf"], [1, "step-label"], [1, "step-connector"], [3, "ngSubmit", 4, "ngIf"], [1, "check"], [3, "ngSubmit"], [1, "name-row"], [1, "form-group"], ["for", "firstName"], [1, "required"], ["type", "text", "id", "firstName", "name", "firstName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["for", "lastName"], ["type", "text", "id", "lastName", "name", "lastName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "phone"], [1, "phone-input-group"], ["name", "phoneDialCode", 1, "form-control", "dial-code-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", "id", "phone", "name", "phone", "required", "", 1, "form-control", 3, "ngModelChange", "blur", "ngModel", "placeholder"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "btn-arrow", 4, "ngIf"], [1, "login-link"], ["routerLink", "/auth/login"], [1, "field-error"], [3, "value"], [1, "error-msg"], ["routerLink", "/auth/login", "class", "error-login-link", 4, "ngIf"], ["routerLink", "/auth/login", 1, "error-login-link"], [1, "btn-arrow"], [1, "step2-banner"], [1, "banner-icon"], ["for", "addressAutocomplete"], [1, "autocomplete-container"], ["type", "text", "id", "addressAutocomplete", "autocomplete", "off", 1, "form-control", 3, "input", "blur", "placeholder"], ["class", "address-dropdown", 4, "ngIf"], ["class", "address-loading", 4, "ngIf"], [1, "text-muted"], [1, "form-row"], ["for", "houseNameNumber"], ["type", "text", "id", "houseNameNumber", "name", "houseNameNumber", "required", "", "placeholder", "12A", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "zipPostalCode"], ["type", "text", "id", "zipPostalCode", "name", "zipPostalCode", "required", "", "placeholder", "695001", 1, "form-control", 3, "ngModelChange", "blur", "ngModel"], ["class", "zip-lookup-hint", 4, "ngIf"], ["for", "street1"], ["type", "text", "id", "street1", "name", "street1", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "street2"], ["type", "text", "id", "street2", "name", "street2", "placeholder", "Apartment, suite, etc.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "city"], ["type", "text", "id", "city", "name", "city", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "district"], ["type", "text", "id", "district", "name", "district", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "state"], ["type", "text", "id", "state", "name", "state", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "country"], ["type", "text", "id", "country", "name", "country", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "step2-actions"], ["type", "button", 1, "btn-back", 3, "click"], [1, "address-dropdown"], ["class", "address-item", 3, "mousedown", "click", 4, "ngFor", "ngForOf"], [1, "address-item", 3, "mousedown", "click"], [1, "address-main"], [1, "address-secondary"], [1, "address-loading"], [1, "zip-lookup-hint"]], template: function RegisterUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
      \u0275\u0275text(4, "U");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 18)(6, "h2");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 19);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 20)(13, "div", 21)(14, "div", 22);
      \u0275\u0275template(15, RegisterUserComponent_span_15_Template, 2, 0, "span", 23)(16, RegisterUserComponent_span_16_Template, 2, 0, "span", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 25);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "div", 26);
      \u0275\u0275elementStart(21, "div", 21)(22, "div", 22);
      \u0275\u0275text(23, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 25);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, RegisterUserComponent_form_27_Template, 67, 61, "form", 27)(28, RegisterUserComponent_form_28_Template, 103, 90, "form", 27);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "AUTH.REGISTER.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 18, "AUTH.REGISTER.SUBTITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.currentStep === 1)("done", ctx.currentStep > 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentStep <= 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep > 1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "AUTH.REGISTER.STEP1_LABEL"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("done", ctx.currentStep > 1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.currentStep === 2);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 22, "AUTH.REGISTER.STEP2_LABEL"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentStep === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 2);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, EmailValidator, NgModel, NgForm, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ['\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.name-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.step-item[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  transition: background 0.2s, color 0.2s;\n}\n.step-item[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.step-item[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: white;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: white;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.step-connector[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 8px 18px;\n  transition: background 0.2s;\n}\n.step-connector.done[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.step2-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-bottom: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #166534;\n}\n.step2-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  color: #10b981;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 13px;\n  margin-bottom: 12px;\n  padding: 10px 12px;\n  background: #fef2f2;\n  border-radius: 8px;\n  border: 1px solid #fecaca;\n}\n.error-login-link[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 6px;\n  color: #667eea;\n  font-weight: 600;\n  text-decoration: none;\n}\n.error-login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 16px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.step2-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 8px;\n}\n.btn-back[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  padding: 12px 20px;\n  background: #f3f4f6;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #374151;\n  cursor: pointer;\n  transition: background 0.15s;\n  min-height: 48px;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.step2-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 0;\n}\n.btn-arrow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.address-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1.5px solid #f3f4f6;\n}\n.address-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.zip-lookup-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 12px;\n  color: #667eea;\n  margin-top: 4px;\n}\n.phone-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.phone-input-group[_ngcontent-%COMP%]   .dial-code-select[_ngcontent-%COMP%] {\n  flex: 0 0 auto;\n  width: 118px;\n  cursor: pointer;\n  padding-right: 8px;\n}\n.phone-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.address-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.address-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n  .name-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterUserComponent, [{
    type: Component,
    args: [{ selector: "app-register-user", standalone: true, imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `<div class="register-container">
  <div class="register-card">

    <div class="register-header">
      <div class="logo-circle">U</div>
      <div class="header-text">
        <h2>{{ 'AUTH.REGISTER.TITLE' | translate }}</h2>
        <p class="subtitle">{{ 'AUTH.REGISTER.SUBTITLE' | translate }}</p>
      </div>
    </div>

    <!-- Step Indicator -->
    <div class="step-indicator">
      <div class="step-item" [class.active]="currentStep === 1" [class.done]="currentStep > 1">
        <div class="step-circle">
          <span *ngIf="currentStep <= 1">1</span>
          <span class="check" *ngIf="currentStep > 1">\u2713</span>
        </div>
        <span class="step-label">{{ 'AUTH.REGISTER.STEP1_LABEL' | translate }}</span>
      </div>
      <div class="step-connector" [class.done]="currentStep > 1"></div>
      <div class="step-item" [class.active]="currentStep === 2">
        <div class="step-circle">2</div>
        <span class="step-label">{{ 'AUTH.REGISTER.STEP2_LABEL' | translate }}</span>
      </div>
    </div>

    <!-- Step 1: Basic Information -->
    <form #step1Form="ngForm" (ngSubmit)="onStep1Next(step1Form)" *ngIf="currentStep === 1">

      <div class="name-row">
        <div class="form-group">
          <label for="firstName">{{ 'AUTH.REGISTER.FIRST_NAME' | translate }} <span class="required">*</span></label>
          <input type="text" id="firstName" name="firstName" class="form-control"
                 #firstNameField="ngModel"
                 [class.is-invalid]="firstNameField.invalid && (firstNameField.dirty || firstNameField.touched)"
                 [(ngModel)]="firstName" required />
          <small class="field-error" *ngIf="firstNameField.invalid && (firstNameField.dirty || firstNameField.touched)">
            {{ 'AUTH.REGISTER.FIRST_NAME_REQUIRED' | translate }}
          </small>
        </div>
        <div class="form-group">
          <label for="lastName">{{ 'AUTH.REGISTER.LAST_NAME' | translate }} <span class="required">*</span></label>
          <input type="text" id="lastName" name="lastName" class="form-control"
                 #lastNameField="ngModel"
                 [class.is-invalid]="lastNameField.invalid && (lastNameField.dirty || lastNameField.touched)"
                 [(ngModel)]="lastName" required />
          <small class="field-error" *ngIf="lastNameField.invalid && (lastNameField.dirty || lastNameField.touched)">
            {{ 'AUTH.REGISTER.LAST_NAME_REQUIRED' | translate }}
          </small>
        </div>
      </div>

      <div class="form-group">
        <label for="email">{{ 'AUTH.REGISTER.EMAIL' | translate }} <span class="required">*</span></label>
        <input type="email" id="email" name="email" class="form-control"
               #emailField="ngModel"
               [class.is-invalid]="emailField.invalid && (emailField.dirty || emailField.touched)"
               [(ngModel)]="email" required email [placeholder]="'AUTH.REGISTER.EMAIL_PLACEHOLDER' | translate"
               (ngModelChange)="onEmailChange()" />
        <small class="field-error" *ngIf="emailField.invalid && (emailField.dirty || emailField.touched)">
          <span *ngIf="emailField.hasError('required')">{{ 'AUTH.REGISTER.EMAIL_REQUIRED' | translate }}</span>
          <span *ngIf="emailField.hasError('email')">{{ 'AUTH.REGISTER.EMAIL_INVALID' | translate }}</span>
        </small>
      </div>

      <div class="form-group">
        <label for="phone">{{ 'AUTH.REGISTER.PHONE' | translate }} <span class="required">*</span></label>
        <div class="phone-input-group">
          <select class="form-control dial-code-select" name="phoneDialCode" [(ngModel)]="phoneDialCode"
                  (ngModelChange)="onDialCodeChange()">
            <option *ngFor="let c of countryCodes" [value]="c.code">{{ c.label }}</option>
          </select>
          <input type="tel" id="phone" name="phone" class="form-control"
                 #phoneField="ngModel"
                 [class.is-invalid]="(phoneField.invalid && (phoneField.dirty || phoneField.touched)) || (phoneInvalid && phoneField.touched)"
                 [(ngModel)]="phoneNumber" required
                 [placeholder]="'AUTH.REGISTER.PHONE_PLACEHOLDER' | translate"
                 (blur)="onPhoneBlur()"
                 (ngModelChange)="onPhoneChange()" />
        </div>
        <small class="field-error" *ngIf="phoneField.invalid && (phoneField.dirty || phoneField.touched)">
          {{ 'AUTH.REGISTER.PHONE_REQUIRED' | translate }}
        </small>
        <small class="field-error" *ngIf="phoneInvalid && !phoneField.hasError('required')">
          {{ 'AUTH.REGISTER.PHONE_INVALID' | translate }}
        </small>
      </div>

      <div class="form-group">
        <label for="password">{{ 'AUTH.REGISTER.PASSWORD' | translate }} <span class="required">*</span></label>
        <input type="password" id="password" name="password" class="form-control"
               #passwordField="ngModel"
               [class.is-invalid]="passwordField.invalid && (passwordField.dirty || passwordField.touched)"
               [(ngModel)]="password" required minlength="6"
               [placeholder]="'AUTH.REGISTER.PASSWORD_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="passwordField.invalid && (passwordField.dirty || passwordField.touched)">
          <span *ngIf="passwordField.hasError('required')">{{ 'AUTH.REGISTER.PASSWORD_REQUIRED' | translate }}</span>
          <span *ngIf="passwordField.hasError('minlength')">{{ 'AUTH.REGISTER.PASSWORD_MIN' | translate }}</span>
        </small>
      </div>

      <div class="error-msg" *ngIf="step1Error">
        {{ step1Error }}
        <a *ngIf="step1ShowLoginLink" routerLink="/auth/login" class="error-login-link">{{ 'AUTH.REGISTER.SIGN_IN' | translate }}</a>
      </div>

      <button type="submit" class="btn-submit" [disabled]="!step1Form.valid || step1Loading || phoneInvalid">
        {{ step1Loading ? ('AUTH.REGISTER.SAVING' | translate) : ('AUTH.REGISTER.NEXT' | translate) }}
        <span class="btn-arrow" *ngIf="!step1Loading">\u2192</span>
      </button>

      <p class="login-link">{{ 'AUTH.REGISTER.HAVE_ACCOUNT' | translate }} <a routerLink="/auth/login">{{ 'AUTH.REGISTER.SIGN_IN' | translate }}</a></p>
    </form>

    <!-- Step 2: Address -->
    <form #step2Form="ngForm" (ngSubmit)="onStep2Submit(step2Form)" *ngIf="currentStep === 2">

      <div class="step2-banner">
        <span class="banner-icon">\u2713</span>
        <span>{{ 'AUTH.REGISTER.STEP2_BANNER' | translate }}</span>
      </div>

      <div class="form-group">
        <label for="addressAutocomplete">{{ 'AUTH.REGISTER.SEARCH_ADDRESS' | translate }}</label>
        <div class="autocomplete-container">
          <input
            #addressInput
            type="text"
            id="addressAutocomplete"
            class="form-control"
            [placeholder]="'AUTH.REGISTER.SEARCH_ADDRESS_PLACEHOLDER' | translate"
            (input)="onAddressInput($event)"
            (blur)="hideAddressList()"
            autocomplete="off"
          />
          <div class="address-dropdown" *ngIf="showAddressList && addressPredictions.length > 0">
            <div
              *ngFor="let prediction of addressPredictions"
              class="address-item"
              (mousedown)="$event.preventDefault()"
              (click)="onAddressSelected(prediction)"
            >
              <div class="address-main">{{ prediction.mainText }}</div>
              <div class="address-secondary">{{ prediction.secondaryText }}</div>
            </div>
          </div>
          <div class="address-loading" *ngIf="addressLoading">{{ 'COMMON.SEARCHING' | translate }}</div>
        </div>
        <small class="text-muted">{{ 'COMMON.SEARCH_HINT' | translate }}</small>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="houseNameNumber">{{ 'AUTH.REGISTER.HOUSE' | translate }} <span class="required">*</span></label>
          <input type="text" id="houseNameNumber" name="houseNameNumber" class="form-control"
                 #houseField="ngModel"
                 [class.is-invalid]="houseField.invalid && (houseField.dirty || houseField.touched)"
                 [(ngModel)]="houseNameNumber" required placeholder="12A" />
          <small class="field-error" *ngIf="houseField.invalid && (houseField.dirty || houseField.touched)">{{ 'AUTH.REGISTER.HOUSE_REQUIRED' | translate }}</small>
        </div>
        <div class="form-group">
          <label for="zipPostalCode">{{ 'AUTH.REGISTER.ZIP' | translate }} <span class="required">*</span></label>
          <input type="text" id="zipPostalCode" name="zipPostalCode" class="form-control"
                 #zipField="ngModel"
                 [class.is-invalid]="zipField.invalid && (zipField.dirty || zipField.touched)"
                 [(ngModel)]="zipPostalCode" required placeholder="695001"
                 (blur)="onZipBlur()" />
          <small class="zip-lookup-hint" *ngIf="zipLookupLoading">Filling address\u2026</small>
          <small class="field-error" *ngIf="zipField.invalid && (zipField.dirty || zipField.touched)">{{ 'AUTH.REGISTER.ZIP_REQUIRED' | translate }}</small>
        </div>
      </div>

      <div class="form-group">
        <label for="street1">{{ 'AUTH.REGISTER.STREET1' | translate }} <span class="required">*</span></label>
        <input type="text" id="street1" name="street1" class="form-control"
               #street1Field="ngModel"
               [class.is-invalid]="street1Field.invalid && (street1Field.dirty || street1Field.touched)"
               [(ngModel)]="street1" required [placeholder]="'AUTH.REGISTER.STREET1' | translate" />
        <small class="field-error" *ngIf="street1Field.invalid && (street1Field.dirty || street1Field.touched)">{{ 'AUTH.REGISTER.STREET1_REQUIRED' | translate }}</small>
      </div>

      <div class="form-group">
        <label for="street2">{{ 'AUTH.REGISTER.STREET2' | translate }}</label>
        <input type="text" id="street2" name="street2" class="form-control"
               [(ngModel)]="street2" placeholder="Apartment, suite, etc." />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="city">{{ 'AUTH.REGISTER.CITY' | translate }} <span class="required">*</span></label>
          <input type="text" id="city" name="city" class="form-control"
                 #cityField="ngModel"
                 [class.is-invalid]="cityField.invalid && (cityField.dirty || cityField.touched)"
                 [(ngModel)]="city" required [placeholder]="'AUTH.REGISTER.CITY' | translate" />
          <small class="field-error" *ngIf="cityField.invalid && (cityField.dirty || cityField.touched)">{{ 'AUTH.REGISTER.CITY_REQUIRED' | translate }}</small>
        </div>
        <div class="form-group">
          <label for="district">{{ 'AUTH.REGISTER.DISTRICT' | translate }}</label>
          <input type="text" id="district" name="district" class="form-control"
                 [(ngModel)]="district" [placeholder]="'AUTH.REGISTER.DISTRICT' | translate" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="state">{{ 'AUTH.REGISTER.STATE' | translate }} <span class="required">*</span></label>
          <input type="text" id="state" name="state" class="form-control"
                 #stateField="ngModel"
                 [class.is-invalid]="stateField.invalid && (stateField.dirty || stateField.touched)"
                 [(ngModel)]="state" required [placeholder]="'AUTH.REGISTER.STATE' | translate" />
          <small class="field-error" *ngIf="stateField.invalid && (stateField.dirty || stateField.touched)">{{ 'AUTH.REGISTER.STATE_REQUIRED' | translate }}</small>
        </div>
        <div class="form-group">
          <label for="country">{{ 'AUTH.REGISTER.COUNTRY' | translate }} <span class="required">*</span></label>
          <input type="text" id="country" name="country" class="form-control"
                 #countryField="ngModel"
                 [class.is-invalid]="countryField.invalid && (countryField.dirty || countryField.touched)"
                 [(ngModel)]="country" required [placeholder]="'AUTH.REGISTER.COUNTRY' | translate" />
          <small class="field-error" *ngIf="countryField.invalid && (countryField.dirty || countryField.touched)">{{ 'AUTH.REGISTER.COUNTRY_REQUIRED' | translate }}</small>
        </div>
      </div>

      <div class="error-msg" *ngIf="step2Error">{{ step2Error }}</div>

      <div class="step2-actions">
        <button type="button" class="btn-back" (click)="goBack()">{{ 'AUTH.REGISTER.BACK' | translate }}</button>
        <button type="submit" class="btn-submit" [disabled]="!step2Form.valid || step2Loading">
          {{ step2Loading ? ('AUTH.REGISTER.CREATING' | translate) : ('AUTH.REGISTER.CREATE_ACCOUNT' | translate) }}
        </button>
      </div>

    </form>

  </div>
</div>
`, styles: ['/* src/app/auth/register/register.scss */\n.register-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.name-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required {\n  color: #ef4444;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid {\n  border-color: #ef4444;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.text-muted {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.step-indicator {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.step-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.step-item .step-circle {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  background: #e5e7eb;\n  color: #9ca3af;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  transition: background 0.2s, color 0.2s;\n}\n.step-item .step-circle .check {\n  font-size: 14px;\n}\n.step-item .step-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.step-item.active .step-circle {\n  background: #667eea;\n  color: white;\n}\n.step-item.active .step-label {\n  color: #667eea;\n}\n.step-item.done .step-circle {\n  background: #10b981;\n  color: white;\n}\n.step-item.done .step-label {\n  color: #10b981;\n}\n.step-connector {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 8px 18px;\n  transition: background 0.2s;\n}\n.step-connector.done {\n  background: #10b981;\n}\n.step2-banner {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  margin-bottom: 20px;\n  font-size: 13px;\n  font-weight: 500;\n  color: #166534;\n}\n.step2-banner .banner-icon {\n  font-size: 16px;\n  color: #10b981;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.error-msg {\n  color: #ef4444;\n  font-size: 13px;\n  margin-bottom: 12px;\n  padding: 10px 12px;\n  background: #fef2f2;\n  border-radius: 8px;\n  border: 1px solid #fecaca;\n}\n.error-login-link {\n  display: block;\n  margin-top: 6px;\n  color: #667eea;\n  font-weight: 600;\n  text-decoration: none;\n}\n.error-login-link:hover {\n  text-decoration: underline;\n}\n.login-link {\n  text-align: center;\n  margin-top: 16px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.login-link a {\n  color: #667eea;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link a:hover {\n  text-decoration: underline;\n}\n.step2-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 8px;\n}\n.btn-back {\n  flex: 0 0 auto;\n  padding: 12px 20px;\n  background: #f3f4f6;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #374151;\n  cursor: pointer;\n  transition: background 0.15s;\n  min-height: 48px;\n}\n.btn-back:hover {\n  background: #e5e7eb;\n}\n.step2-actions .btn-submit {\n  flex: 1;\n  margin-top: 0;\n}\n.btn-arrow {\n  margin-left: 6px;\n}\n.address-section {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1.5px solid #f3f4f6;\n}\n.address-section h3 {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.zip-lookup-hint {\n  display: block;\n  font-size: 12px;\n  color: #667eea;\n  margin-top: 4px;\n}\n.phone-input-group {\n  display: flex;\n  gap: 8px;\n}\n.phone-input-group .dial-code-select {\n  flex: 0 0 auto;\n  width: 118px;\n  cursor: pointer;\n  padding-right: 8px;\n}\n.phone-input-group input {\n  flex: 1;\n}\n.autocomplete-container {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.address-item:last-child {\n  border-bottom: none;\n}\n.address-main {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container {\n    padding: 16px 12px;\n  }\n  .register-card {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n  .name-row {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: Router }, { type: AddressService }, { type: ChangeDetectorRef }], { addressInput: [{
    type: ViewChild,
    args: ["addressInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterUserComponent, { className: "RegisterUserComponent", filePath: "src/app/auth/register/register.ts", lineNumber: 19 });
})();

// src/app/auth/register-pro/register-pro.ts
var _c03 = ["bizAddressInput"];
var _c12 = ["proAddressInput"];
function RegisterProComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function RegisterProComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 36);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function RegisterProComponent_div_27_small_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"), " ");
  }
}
function RegisterProComponent_div_27_option_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r4 = ctx.$implicit;
    \u0275\u0275property("value", c_r4.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r4.label);
  }
}
function RegisterProComponent_div_27_small_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.PHONE_REQUIRED"));
  }
}
function RegisterProComponent_div_27_small_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.PHONE_INVALID"));
  }
}
function RegisterProComponent_div_27_div_48_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("mousedown", function RegisterProComponent_div_27_div_48_div_1_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      return \u0275\u0275resetView($event.preventDefault());
    })("click", function RegisterProComponent_div_27_div_48_div_1_Template_div_click_0_listener() {
      const p_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onBizAddressSelected(p_r6));
    });
    \u0275\u0275elementStart(1, "div", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 88);
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
function RegisterProComponent_div_27_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, RegisterProComponent_div_27_div_48_div_1_Template, 5, 2, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.bizAddressPredictions);
  }
}
function RegisterProComponent_div_27_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.SEARCHING"));
  }
}
function RegisterProComponent_div_27_small_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_div_27_small_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 90);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.ZIP_FILLING"));
  }
}
function RegisterProComponent_div_27_small_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_div_27_small_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_div_27_small_98_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_div_27_small_115_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_div_27_small_125_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_div_27_div_126_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.step1Error);
  }
}
function RegisterProComponent_div_27_span_135_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 92);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function RegisterProComponent_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 37)(2, "div", 38);
    \u0275\u0275text(3, "\u{1F3E2}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "p", 39);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 40);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "form", 41, 0);
    \u0275\u0275listener("ngSubmit", function RegisterProComponent_div_27_Template_form_ngSubmit_11_listener() {
      \u0275\u0275restoreView(_r1);
      const step1Form_r2 = \u0275\u0275reference(12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStep1Save(step1Form_r2));
    });
    \u0275\u0275elementStart(13, "div", 42)(14, "label", 43);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span", 44);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 45, 1);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizName, $event) || (ctx_r2.bizName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, RegisterProComponent_div_27_small_22_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 42)(24, "label");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementStart(27, "span", 44);
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 47)(30, "select", 48);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_select_ngModelChange_30_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizPhoneDialCode, $event) || (ctx_r2.bizPhoneDialCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterProComponent_div_27_Template_select_ngModelChange_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBizDialCodeChange());
    });
    \u0275\u0275template(31, RegisterProComponent_div_27_option_31_Template, 2, 2, "option", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "input", 50, 2);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_32_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizPhoneNumber, $event) || (ctx_r2.bizPhoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function RegisterProComponent_div_27_Template_input_blur_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBizPhoneBlur());
    })("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_32_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBizPhoneChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(35, RegisterProComponent_div_27_small_35_Template, 3, 3, "small", 46)(36, RegisterProComponent_div_27_small_36_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 51);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "div", 42)(41, "label");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 52)(45, "input", 53, 3);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275listener("input", function RegisterProComponent_div_27_Template_input_input_45_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBizAddressInput($event));
    })("blur", function RegisterProComponent_div_27_Template_input_blur_45_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideBizAddressList());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, RegisterProComponent_div_27_div_48_Template, 2, 1, "div", 54)(49, RegisterProComponent_div_27_div_49_Template, 3, 3, "div", 55);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "small", 56);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 57)(54, "div", 42)(55, "label", 58);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementStart(58, "span", 44);
    \u0275\u0275text(59, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(60, "input", 59, 4);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizHouseNameNumber, $event) || (ctx_r2.bizHouseNameNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, RegisterProComponent_div_27_small_62_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 42)(64, "label", 60);
    \u0275\u0275text(65);
    \u0275\u0275pipe(66, "translate");
    \u0275\u0275elementStart(67, "span", 44);
    \u0275\u0275text(68, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "input", 61, 5);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_69_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizZipPostalCode, $event) || (ctx_r2.bizZipPostalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function RegisterProComponent_div_27_Template_input_blur_69_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onBizZipBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, RegisterProComponent_div_27_small_71_Template, 3, 3, "small", 62)(72, RegisterProComponent_div_27_small_72_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(73, "div", 42)(74, "label", 63);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementStart(77, "span", 44);
    \u0275\u0275text(78, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "input", 64, 6);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizStreet1, $event) || (ctx_r2.bizStreet1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(82, RegisterProComponent_div_27_small_82_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 42)(84, "label", 65);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(87, "input", 66);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_87_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizStreet2, $event) || (ctx_r2.bizStreet2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(88, "div", 57)(89, "div", 42)(90, "label", 67);
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementStart(93, "span", 44);
    \u0275\u0275text(94, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(95, "input", 68, 7);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_95_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizCity, $event) || (ctx_r2.bizCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(98, RegisterProComponent_div_27_small_98_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "div", 42)(100, "label", 69);
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(103, "input", 70);
    \u0275\u0275pipe(104, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_103_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizDistrict, $event) || (ctx_r2.bizDistrict = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(105, "div", 57)(106, "div", 42)(107, "label", 71);
    \u0275\u0275text(108);
    \u0275\u0275pipe(109, "translate");
    \u0275\u0275elementStart(110, "span", 44);
    \u0275\u0275text(111, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(112, "input", 72, 8);
    \u0275\u0275pipe(114, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_112_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizState, $event) || (ctx_r2.bizState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(115, RegisterProComponent_div_27_small_115_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(116, "div", 42)(117, "label", 73);
    \u0275\u0275text(118);
    \u0275\u0275pipe(119, "translate");
    \u0275\u0275elementStart(120, "span", 44);
    \u0275\u0275text(121, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(122, "input", 74, 9);
    \u0275\u0275pipe(124, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_div_27_Template_input_ngModelChange_122_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.bizCountry, $event) || (ctx_r2.bizCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(125, RegisterProComponent_div_27_small_125_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(126, RegisterProComponent_div_27_div_126_Template, 2, 1, "div", 75);
    \u0275\u0275elementStart(127, "div", 76)(128, "button", 77);
    \u0275\u0275listener("click", function RegisterProComponent_div_27_Template_button_click_128_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.skipBusiness());
    });
    \u0275\u0275text(129);
    \u0275\u0275pipe(130, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(131, "button", 78);
    \u0275\u0275text(132);
    \u0275\u0275pipe(133, "translate");
    \u0275\u0275pipe(134, "translate");
    \u0275\u0275template(135, RegisterProComponent_div_27_span_135_Template, 2, 0, "span", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(136, "p", 80);
    \u0275\u0275text(137);
    \u0275\u0275pipe(138, "translate");
    \u0275\u0275elementStart(139, "a", 81);
    \u0275\u0275text(140);
    \u0275\u0275pipe(141, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const step1Form_r2 = \u0275\u0275reference(12);
    const bizNameField_r7 = \u0275\u0275reference(20);
    const bizPhoneField_r8 = \u0275\u0275reference(33);
    const bizHouseField_r9 = \u0275\u0275reference(61);
    const bizZipField_r10 = \u0275\u0275reference(70);
    const bizStreet1Field_r11 = \u0275\u0275reference(80);
    const bizCityField_r12 = \u0275\u0275reference(96);
    const bizStateField_r13 = \u0275\u0275reference(113);
    const bizCountryField_r14 = \u0275\u0275reference(123);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 70, "AUTH.REGISTER_PRO.STEP1_INTRO_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 72, "AUTH.REGISTER_PRO.STEP1_INTRO_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 74, "AUTH.REGISTER_PRO.BIZ_NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", bizNameField_r7.invalid && (bizNameField_r7.dirty || bizNameField_r7.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizName);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(21, 76, "AUTH.REGISTER_PRO.BIZ_NAME_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bizNameField_r7.invalid && (bizNameField_r7.dirty || bizNameField_r7.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(26, 78, "AUTH.REGISTER_PRO.BIZ_PHONE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizPhoneDialCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.countryCodes);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", bizPhoneField_r8.invalid && (bizPhoneField_r8.dirty || bizPhoneField_r8.touched) || ctx_r2.bizPhoneInvalid);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizPhoneNumber);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(34, 80, "AUTH.REGISTER_PRO.PHONE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bizPhoneField_r8.invalid && (bizPhoneField_r8.dirty || bizPhoneField_r8.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bizPhoneInvalid && !bizPhoneField_r8.hasError("required"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 82, "AUTH.REGISTER_PRO.BIZ_ADDRESS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 84, "AUTH.REGISTER_PRO.SEARCH_ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(47, 86, "AUTH.REGISTER_PRO.SEARCH_ADDRESS_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.showBizAddressList && ctx_r2.bizAddressPredictions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bizAddressLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 88, "AUTH.REGISTER_PRO.SEARCH_ADDRESS_HINT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(57, 90, "AUTH.REGISTER_PRO.HOUSE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", bizHouseField_r9.invalid && (bizHouseField_r9.dirty || bizHouseField_r9.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizHouseNameNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", bizHouseField_r9.invalid && (bizHouseField_r9.dirty || bizHouseField_r9.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(66, 92, "AUTH.REGISTER_PRO.ZIP"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", bizZipField_r10.invalid && (bizZipField_r10.dirty || bizZipField_r10.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizZipPostalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.bizZipLookupLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", bizZipField_r10.invalid && (bizZipField_r10.dirty || bizZipField_r10.touched) && !ctx_r2.bizZipLookupLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(76, 94, "AUTH.REGISTER_PRO.STREET"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", bizStreet1Field_r11.invalid && (bizStreet1Field_r11.dirty || bizStreet1Field_r11.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizStreet1);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(81, 96, "AUTH.REGISTER_PRO.STREET"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bizStreet1Field_r11.invalid && (bizStreet1Field_r11.dirty || bizStreet1Field_r11.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 98, "AUTH.REGISTER_PRO.STREET2"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizStreet2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(92, 100, "AUTH.REGISTER_PRO.CITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", bizCityField_r12.invalid && (bizCityField_r12.dirty || bizCityField_r12.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizCity);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(97, 102, "AUTH.REGISTER_PRO.CITY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bizCityField_r12.invalid && (bizCityField_r12.dirty || bizCityField_r12.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 104, "AUTH.REGISTER_PRO.DISTRICT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizDistrict);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(104, 106, "AUTH.REGISTER_PRO.DISTRICT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(109, 108, "AUTH.REGISTER_PRO.STATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", bizStateField_r13.invalid && (bizStateField_r13.dirty || bizStateField_r13.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizState);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(114, 110, "AUTH.REGISTER_PRO.STATE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bizStateField_r13.invalid && (bizStateField_r13.dirty || bizStateField_r13.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(119, 112, "AUTH.REGISTER_PRO.COUNTRY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", bizCountryField_r14.invalid && (bizCountryField_r14.dirty || bizCountryField_r14.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bizCountry);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(124, 114, "AUTH.REGISTER_PRO.COUNTRY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bizCountryField_r14.invalid && (bizCountryField_r14.dirty || bizCountryField_r14.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.step1Error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(130, 116, "AUTH.REGISTER_PRO.SKIP_SOLO"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !step1Form_r2.valid || ctx_r2.step1Loading || ctx_r2.bizPhoneInvalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.step1Loading ? \u0275\u0275pipeBind1(133, 118, "AUTH.REGISTER_PRO.SAVING") : \u0275\u0275pipeBind1(134, 120, "AUTH.REGISTER_PRO.SAVE_CONTINUE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.step1Loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(138, 122, "AUTH.REGISTER_PRO.HAVE_ACCOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(141, 124, "AUTH.REGISTER_PRO.SIGN_IN"));
  }
}
function RegisterProComponent_form_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 106)(1, "span", 107);
    \u0275\u0275text(2, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "AUTH.REGISTER_PRO.BIZ_SAVED_BANNER"));
  }
}
function RegisterProComponent_form_28_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "span", 107);
    \u0275\u0275text(2, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "AUTH.REGISTER_PRO.SOLO_BANNER"));
  }
}
function RegisterProComponent_form_28_small_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.FULL_NAME_REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_23_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.EMAIL_REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_23_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.EMAIL_INVALID"));
  }
}
function RegisterProComponent_form_28_small_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275template(1, RegisterProComponent_form_28_small_23_span_1_Template, 3, 3, "span", 31)(2, RegisterProComponent_form_28_small_23_span_2_Template, 3, 3, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailField_r17 = \u0275\u0275reference(21);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r17.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r17.hasError("email"));
  }
}
function RegisterProComponent_form_28_option_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 83);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r18 = ctx.$implicit;
    \u0275\u0275property("value", c_r18.code);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r18.label);
  }
}
function RegisterProComponent_form_28_small_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.PHONE_REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.PHONE_INVALID"));
  }
}
function RegisterProComponent_form_28_small_47_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.PASSWORD_REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_47_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.PASSWORD_MIN"));
  }
}
function RegisterProComponent_form_28_small_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275template(1, RegisterProComponent_form_28_small_47_span_1_Template, 3, 3, "span", 31)(2, RegisterProComponent_form_28_small_47_span_2_Template, 3, 3, "span", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordField_r19 = \u0275\u0275reference(45);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r19.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r19.hasError("minlength"));
  }
}
function RegisterProComponent_form_28_ng_container_48_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 86);
    \u0275\u0275listener("mousedown", function RegisterProComponent_form_28_ng_container_48_div_16_div_1_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r21);
      return \u0275\u0275resetView($event.preventDefault());
    })("click", function RegisterProComponent_form_28_ng_container_48_div_16_div_1_Template_div_click_0_listener() {
      const p_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.onProAddressSelected(p_r22));
    });
    \u0275\u0275elementStart(1, "div", 87);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 88);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r22 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r22.mainText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r22.secondaryText);
  }
}
function RegisterProComponent_form_28_ng_container_48_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84);
    \u0275\u0275template(1, RegisterProComponent_form_28_ng_container_48_div_16_div_1_Template, 5, 2, "div", 85);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.proAddressPredictions);
  }
}
function RegisterProComponent_form_28_ng_container_48_small_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_form_28_ng_container_48_small_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 90);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.ZIP_FILLING"));
  }
}
function RegisterProComponent_form_28_ng_container_48_small_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_form_28_ng_container_48_small_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_form_28_ng_container_48_small_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_form_28_ng_container_48_small_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_form_28_ng_container_48_small_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 82);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_form_28_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 109)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "p", 110);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 42)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 52)(13, "input", 53, 15);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("input", function RegisterProComponent_form_28_ng_container_48_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onProAddressInput($event));
    })("blur", function RegisterProComponent_form_28_ng_container_48_Template_input_blur_13_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.hideProAddressList());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RegisterProComponent_form_28_ng_container_48_div_16_Template, 2, 1, "div", 54);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 57)(18, "div", 42)(19, "label", 111);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span", 44);
    \u0275\u0275text(23, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "input", 112, 16);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_ng_container_48_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proHouseNameNumber, $event) || (ctx_r2.proHouseNameNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, RegisterProComponent_form_28_ng_container_48_small_26_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 42)(28, "label", 113);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementStart(31, "span", 44);
    \u0275\u0275text(32, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "input", 114, 17);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_ng_container_48_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proZipPostalCode, $event) || (ctx_r2.proZipPostalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function RegisterProComponent_form_28_ng_container_48_Template_input_blur_33_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onProZipBlur());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, RegisterProComponent_form_28_ng_container_48_small_35_Template, 3, 3, "small", 62)(36, RegisterProComponent_form_28_ng_container_48_small_36_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 42)(38, "label", 115);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementStart(41, "span", 44);
    \u0275\u0275text(42, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "input", 116, 18);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_ng_container_48_Template_input_ngModelChange_43_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proStreet1, $event) || (ctx_r2.proStreet1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, RegisterProComponent_form_28_ng_container_48_small_46_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 57)(48, "div", 42)(49, "label", 117);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementStart(52, "span", 44);
    \u0275\u0275text(53, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(54, "input", 118, 19);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_ng_container_48_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proCity, $event) || (ctx_r2.proCity = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, RegisterProComponent_form_28_ng_container_48_small_57_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 42)(59, "label", 119);
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(62, "input", 120);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_ng_container_48_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proDistrict, $event) || (ctx_r2.proDistrict = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(64, "div", 57)(65, "div", 42)(66, "label", 121);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementStart(69, "span", 44);
    \u0275\u0275text(70, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(71, "input", 122, 20);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_ng_container_48_Template_input_ngModelChange_71_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proState, $event) || (ctx_r2.proState = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(74, RegisterProComponent_form_28_ng_container_48_small_74_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "div", 42)(76, "label", 123);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementStart(79, "span", 44);
    \u0275\u0275text(80, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "input", 124, 21);
    \u0275\u0275pipe(83, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_ng_container_48_Template_input_ngModelChange_81_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.proCountry, $event) || (ctx_r2.proCountry = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(84, RegisterProComponent_form_28_ng_container_48_small_84_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const proHouseField_r23 = \u0275\u0275reference(25);
    const proZipField_r24 = \u0275\u0275reference(34);
    const proStreet1Field_r25 = \u0275\u0275reference(44);
    const proCityField_r26 = \u0275\u0275reference(55);
    const proStateField_r27 = \u0275\u0275reference(72);
    const proCountryField_r28 = \u0275\u0275reference(82);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 43, "AUTH.REGISTER_PRO.YOUR_LOCATION"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 45, "AUTH.REGISTER_PRO.YOUR_LOCATION_HINT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 47, "AUTH.REGISTER_PRO.SEARCH_ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 49, "AUTH.REGISTER_PRO.SEARCH_ADDRESS_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.showProAddressList && ctx_r2.proAddressPredictions.length > 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 51, "AUTH.REGISTER_PRO.HOUSE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", proHouseField_r23.invalid && (proHouseField_r23.dirty || proHouseField_r23.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proHouseNameNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", proHouseField_r23.invalid && (proHouseField_r23.dirty || proHouseField_r23.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(30, 53, "AUTH.REGISTER_PRO.ZIP"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", proZipField_r24.invalid && (proZipField_r24.dirty || proZipField_r24.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proZipPostalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.proZipLookupLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", proZipField_r24.invalid && (proZipField_r24.dirty || proZipField_r24.touched) && !ctx_r2.proZipLookupLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(40, 55, "AUTH.REGISTER_PRO.STREET"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", proStreet1Field_r25.invalid && (proStreet1Field_r25.dirty || proStreet1Field_r25.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proStreet1);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(45, 57, "AUTH.REGISTER_PRO.STREET"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", proStreet1Field_r25.invalid && (proStreet1Field_r25.dirty || proStreet1Field_r25.touched));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(51, 59, "AUTH.REGISTER_PRO.CITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", proCityField_r26.invalid && (proCityField_r26.dirty || proCityField_r26.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proCity);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(56, 61, "AUTH.REGISTER_PRO.CITY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", proCityField_r26.invalid && (proCityField_r26.dirty || proCityField_r26.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 63, "AUTH.REGISTER_PRO.DISTRICT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proDistrict);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(63, 65, "AUTH.REGISTER_PRO.DISTRICT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(68, 67, "AUTH.REGISTER_PRO.STATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", proStateField_r27.invalid && (proStateField_r27.dirty || proStateField_r27.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proState);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(73, 69, "AUTH.REGISTER_PRO.STATE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", proStateField_r27.invalid && (proStateField_r27.dirty || proStateField_r27.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(78, 71, "AUTH.REGISTER_PRO.COUNTRY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", proCountryField_r28.invalid && (proCountryField_r28.dirty || proCountryField_r28.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proCountry);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(83, 73, "AUTH.REGISTER_PRO.COUNTRY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", proCountryField_r28.invalid && (proCountryField_r28.dirty || proCountryField_r28.touched));
  }
}
function RegisterProComponent_form_28_div_49_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 126);
    \u0275\u0275text(1, "Log in instead");
    \u0275\u0275elementEnd();
  }
}
function RegisterProComponent_form_28_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91);
    \u0275\u0275text(1);
    \u0275\u0275template(2, RegisterProComponent_form_28_div_49_a_2_Template, 2, 0, "a", 125);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.step2Error, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.step2ShowLoginLink);
  }
}
function RegisterProComponent_form_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 41, 10);
    \u0275\u0275listener("ngSubmit", function RegisterProComponent_form_28_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r15);
      const step2Form_r16 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStep2Submit(step2Form_r16));
    });
    \u0275\u0275template(2, RegisterProComponent_form_28_div_2_Template, 6, 3, "div", 93)(3, RegisterProComponent_form_28_div_3_Template, 6, 3, "div", 94);
    \u0275\u0275elementStart(4, "div", 42)(5, "label", 95);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementStart(8, "span", 44);
    \u0275\u0275text(9, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "input", 96, 11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.proName, $event) || (ctx_r2.proName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, RegisterProComponent_form_28_small_13_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 42)(15, "label", 97);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span", 44);
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "input", 98, 12);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.email, $event) || (ctx_r2.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, RegisterProComponent_form_28_small_23_Template, 3, 2, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 42)(25, "label", 99);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span", 44);
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 47)(31, "select", 100);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_select_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.proPhoneDialCode, $event) || (ctx_r2.proPhoneDialCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function RegisterProComponent_form_28_Template_select_ngModelChange_31_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onProDialCodeChange());
    });
    \u0275\u0275template(32, RegisterProComponent_form_28_option_32_Template, 2, 2, "option", 49);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 101, 13);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.proPhoneNumber, $event) || (ctx_r2.proPhoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function RegisterProComponent_form_28_Template_input_blur_33_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onProPhoneBlur());
    })("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_33_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onProPhoneChange());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(36, RegisterProComponent_form_28_small_36_Template, 3, 3, "small", 46)(37, RegisterProComponent_form_28_small_37_Template, 3, 3, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 42)(39, "label", 102);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementStart(42, "span", 44);
    \u0275\u0275text(43, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(44, "input", 103, 14);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_44_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.password, $event) || (ctx_r2.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(47, RegisterProComponent_form_28_small_47_Template, 3, 2, "small", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, RegisterProComponent_form_28_ng_container_48_Template, 85, 75, "ng-container", 31)(49, RegisterProComponent_form_28_div_49_Template, 3, 2, "div", 75);
    \u0275\u0275elementStart(50, "div", 104)(51, "button", 105);
    \u0275\u0275listener("click", function RegisterProComponent_form_28_Template_button_click_51_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "button", 78);
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(58, "p", 80);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementStart(61, "a", 81);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step2Form_r16 = \u0275\u0275reference(1);
    const nameField_r29 = \u0275\u0275reference(11);
    const emailField_r17 = \u0275\u0275reference(21);
    const proPhoneField_r30 = \u0275\u0275reference(34);
    const passwordField_r19 = \u0275\u0275reference(45);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.savedBusinessId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.savedBusinessId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(7, 36, "AUTH.REGISTER_PRO.FULL_NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", nameField_r29.invalid && (nameField_r29.dirty || nameField_r29.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proName);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 38, "AUTH.REGISTER_PRO.FULL_NAME_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", nameField_r29.invalid && (nameField_r29.dirty || nameField_r29.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(17, 40, "AUTH.REGISTER_PRO.EMAIL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", emailField_r17.invalid && (emailField_r17.dirty || emailField_r17.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.email);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 42, "AUTH.REGISTER_PRO.EMAIL_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", emailField_r17.invalid && (emailField_r17.dirty || emailField_r17.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 44, "AUTH.REGISTER_PRO.PHONE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proPhoneDialCode);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.countryCodes);
    \u0275\u0275advance();
    \u0275\u0275classProp("is-invalid", proPhoneField_r30.invalid && (proPhoneField_r30.dirty || proPhoneField_r30.touched) || ctx_r2.proPhoneInvalid);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.proPhoneNumber);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 46, "AUTH.REGISTER_PRO.PHONE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", proPhoneField_r30.invalid && (proPhoneField_r30.dirty || proPhoneField_r30.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.proPhoneInvalid && !proPhoneField_r30.hasError("required"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(41, 48, "AUTH.REGISTER_PRO.PASSWORD"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", passwordField_r19.invalid && (passwordField_r19.dirty || passwordField_r19.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.password);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(46, 50, "AUTH.REGISTER_PRO.PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", passwordField_r19.invalid && (passwordField_r19.dirty || passwordField_r19.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.savedBusinessId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.step2Error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 52, "AUTH.REGISTER_PRO.BACK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !step2Form_r16.valid || ctx_r2.step2Loading || ctx_r2.proPhoneInvalid);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.step2Loading ? \u0275\u0275pipeBind1(56, 54, "AUTH.REGISTER_PRO.CREATING") : \u0275\u0275pipeBind1(57, 56, "AUTH.REGISTER_PRO.CREATE_LOGIN"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(60, 58, "AUTH.REGISTER_PRO.HAVE_ACCOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 60, "AUTH.REGISTER_PRO.SIGN_IN"));
  }
}
var RegisterProComponent = class _RegisterProComponent {
  auth;
  router;
  addressService;
  bizService;
  cdr;
  bizAddressInput;
  proAddressInput;
  countryCodes = [
    { code: "+91", label: "IN (+91)" },
    { code: "+1", label: "US/CA (+1)" },
    { code: "+44", label: "UK (+44)" },
    { code: "+61", label: "AU (+61)" },
    { code: "+64", label: "NZ (+64)" },
    { code: "+65", label: "SG (+65)" },
    { code: "+60", label: "MY (+60)" },
    { code: "+971", label: "UAE (+971)" },
    { code: "+966", label: "SA (+966)" },
    { code: "+974", label: "QA (+974)" },
    { code: "+965", label: "KW (+965)" },
    { code: "+968", label: "OM (+968)" },
    { code: "+973", label: "BH (+973)" },
    { code: "+880", label: "BD (+880)" },
    { code: "+94", label: "LK (+94)" },
    { code: "+92", label: "PK (+92)" },
    { code: "+49", label: "DE (+49)" },
    { code: "+33", label: "FR (+33)" },
    { code: "+39", label: "IT (+39)" },
    { code: "+34", label: "ES (+34)" },
    { code: "+31", label: "NL (+31)" },
    { code: "+86", label: "CN (+86)" },
    { code: "+81", label: "JP (+81)" },
    { code: "+82", label: "KR (+82)" },
    { code: "+66", label: "TH (+66)" },
    { code: "+62", label: "ID (+62)" },
    { code: "+63", label: "PH (+63)" },
    { code: "+27", label: "ZA (+27)" },
    { code: "+55", label: "BR (+55)" },
    { code: "+52", label: "MX (+52)" }
  ];
  // ── Step 1: Business Setup (optional) ─────────────────────────────────
  bizName = "";
  bizPhoneDialCode = "+91";
  bizPhoneNumber = "";
  bizHouseNameNumber = "";
  bizStreet1 = "";
  bizStreet2 = "";
  bizCity = "";
  bizDistrict = "";
  bizState = "";
  bizCountry = "";
  bizZipPostalCode = "";
  bizLatitude = null;
  bizLongitude = null;
  bizPhoneInvalid = false;
  step1Loading = false;
  step1Error = "";
  // Address autocomplete (Step 1 — business address)
  bizAddressPredictions = [];
  showBizAddressList = false;
  bizAddressLoading = false;
  bizZipLookupLoading = false;
  // ── Step 2: Create Login ──────────────────────────────────────────────
  proName = "";
  email = "";
  proPhoneDialCode = "+91";
  proPhoneNumber = "";
  password = "";
  proPhoneInvalid = false;
  // Solo Pro location (shown when Step 1 was skipped)
  proHouseNameNumber = "";
  proStreet1 = "";
  proStreet2 = "";
  proCity = "";
  proDistrict = "";
  proState = "";
  proCountry = "";
  proZipPostalCode = "";
  proLatitude = null;
  proLongitude = null;
  proZipLookupLoading = false;
  // Address autocomplete (Step 2 — solo Pro location)
  proAddressPredictions = [];
  showProAddressList = false;
  proAddressLoading = false;
  step2Loading = false;
  step2Error = "";
  step2ShowLoginLink = false;
  // ── Shared state ──────────────────────────────────────────────────────
  currentStep = 1;
  draftProId = null;
  savedBusinessId = null;
  bizAddressSearch$ = new Subject();
  proAddressSearch$ = new Subject();
  destroy$ = new Subject();
  constructor(auth, router, addressService, bizService, cdr) {
    this.auth = auth;
    this.router = router;
    this.addressService = addressService;
    this.bizService = bizService;
    this.cdr = cdr;
  }
  ngOnInit() {
    if (this.auth.isAuthenticated() && this.auth.getUserType() === "Pro" && !this.auth.isProfileComplete()) {
      const proId = parseInt(this.auth.getUserId() ?? "0", 10);
      if (proId > 0) {
        this.draftProId = proId;
        this.currentStep = 2;
      }
    }
    this.bizAddressSearch$.pipe(switchMap((input) => {
      this.bizAddressLoading = true;
      this.cdr.detectChanges();
      return this.addressService.getAddressPredictions(input).pipe(catchError(() => of([])));
    }), takeUntil(this.destroy$)).subscribe((predictions) => {
      this.bizAddressPredictions = predictions;
      this.showBizAddressList = predictions.length > 0;
      this.bizAddressLoading = false;
      this.cdr.detectChanges();
    });
    this.proAddressSearch$.pipe(switchMap((input) => {
      this.proAddressLoading = true;
      this.cdr.detectChanges();
      return this.addressService.getAddressPredictions(input).pipe(catchError(() => of([])));
    }), takeUntil(this.destroy$)).subscribe((predictions) => {
      this.proAddressPredictions = predictions;
      this.showProAddressList = predictions.length > 0;
      this.proAddressLoading = false;
      this.cdr.detectChanges();
    });
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  get isSoloPro() {
    return this.savedBusinessId === null && this.currentStep === 2;
  }
  // ── Step 1 ────────────────────────────────────────────────────────────
  skipBusiness() {
    this.savedBusinessId = null;
    this.currentStep = 2;
  }
  onStep1Save(form) {
    if (!form.valid)
      return;
    if (!isValidPhoneNumber2(this.bizPhoneDialCode + this.bizPhoneNumber)) {
      this.bizPhoneInvalid = true;
      return;
    }
    this.step1Loading = true;
    this.step1Error = "";
    this.bizService.preRegisterBusiness({
      businessName: this.bizName,
      phone: this.bizPhoneDialCode + this.bizPhoneNumber,
      houseNameNumber: this.bizHouseNameNumber,
      street1: this.bizStreet1,
      street2: this.bizStreet2,
      city: this.bizCity,
      district: this.bizDistrict,
      state: this.bizState,
      country: this.bizCountry,
      zipPostalCode: this.bizZipPostalCode,
      latitude: this.bizLatitude,
      longitude: this.bizLongitude
    }).subscribe({
      next: (res) => {
        this.savedBusinessId = res.businessId;
        this.step1Loading = false;
        this.currentStep = 2;
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.step1Error = err.error?.message || "Could not save business. Please try again.";
        this.step1Loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onBizPhoneBlur() {
    if (!this.bizPhoneNumber) {
      this.bizPhoneInvalid = false;
      return;
    }
    this.bizPhoneInvalid = !isValidPhoneNumber2(this.bizPhoneDialCode + this.bizPhoneNumber);
    this.cdr.detectChanges();
  }
  onBizPhoneChange() {
    this.bizPhoneInvalid = false;
  }
  onBizDialCodeChange() {
    if (this.bizPhoneNumber)
      this.onBizPhoneBlur();
  }
  onBizAddressInput(event) {
    const v = event.target.value;
    if (v?.length >= 3)
      this.bizAddressSearch$.next(v);
    else {
      this.showBizAddressList = false;
      this.bizAddressPredictions = [];
      this.cdr.detectChanges();
    }
  }
  onBizAddressSelected(p) {
    this.showBizAddressList = false;
    const d = p.details;
    if (!d)
      return;
    this.bizHouseNameNumber = d.houseNameNumber;
    this.bizStreet1 = d.street1;
    this.bizStreet2 = d.street2;
    this.bizCity = d.city;
    this.bizState = d.state;
    this.bizCountry = d.country;
    this.bizZipPostalCode = d.zipPostalCode;
    this.bizLatitude = d.latitude ?? null;
    this.bizLongitude = d.longitude ?? null;
    this.bizDistrict = d.district || "";
    if (this.bizAddressInput)
      this.bizAddressInput.nativeElement.value = p.description;
    this.cdr.detectChanges();
  }
  hideBizAddressList() {
    setTimeout(() => {
      this.showBizAddressList = false;
    }, 200);
  }
  onBizZipBlur() {
    const code = this.bizZipPostalCode?.trim();
    if (!code || code.length < 3)
      return;
    this.bizZipLookupLoading = true;
    this.cdr.detectChanges();
    this.addressService.lookupByPostcode(code).subscribe({
      next: (d) => {
        if (d) {
          if (d.city)
            this.bizCity = d.city;
          if (d.state)
            this.bizState = d.state;
          if (d.country)
            this.bizCountry = d.country;
          if (d.district)
            this.bizDistrict = d.district;
          if (d.latitude)
            this.bizLatitude = d.latitude ?? null;
          if (d.longitude)
            this.bizLongitude = d.longitude ?? null;
        }
        this.bizZipLookupLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.bizZipLookupLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  // ── Step 2 ────────────────────────────────────────────────────────────
  goBack() {
    this.currentStep = 1;
  }
  onProPhoneBlur() {
    if (!this.proPhoneNumber) {
      this.proPhoneInvalid = false;
      return;
    }
    this.proPhoneInvalid = !isValidPhoneNumber2(this.proPhoneDialCode + this.proPhoneNumber);
    this.cdr.detectChanges();
  }
  onProPhoneChange() {
    this.proPhoneInvalid = false;
  }
  onProDialCodeChange() {
    if (this.proPhoneNumber)
      this.onProPhoneBlur();
  }
  onProAddressInput(event) {
    const v = event.target.value;
    if (v?.length >= 3)
      this.proAddressSearch$.next(v);
    else {
      this.showProAddressList = false;
      this.proAddressPredictions = [];
      this.cdr.detectChanges();
    }
  }
  onProAddressSelected(p) {
    this.showProAddressList = false;
    const d = p.details;
    if (!d)
      return;
    this.proHouseNameNumber = d.houseNameNumber;
    this.proStreet1 = d.street1;
    this.proStreet2 = d.street2;
    this.proCity = d.city;
    this.proState = d.state;
    this.proCountry = d.country;
    this.proZipPostalCode = d.zipPostalCode;
    this.proLatitude = d.latitude ?? null;
    this.proLongitude = d.longitude ?? null;
    this.proDistrict = d.district || "";
    if (this.proAddressInput)
      this.proAddressInput.nativeElement.value = p.description;
    this.cdr.detectChanges();
  }
  hideProAddressList() {
    setTimeout(() => {
      this.showProAddressList = false;
    }, 200);
  }
  onProZipBlur() {
    const code = this.proZipPostalCode?.trim();
    if (!code || code.length < 3)
      return;
    this.proZipLookupLoading = true;
    this.cdr.detectChanges();
    this.addressService.lookupByPostcode(code).subscribe({
      next: (d) => {
        if (d) {
          if (d.city)
            this.proCity = d.city;
          if (d.state)
            this.proState = d.state;
          if (d.country)
            this.proCountry = d.country;
          if (d.district)
            this.proDistrict = d.district;
          if (d.latitude)
            this.proLatitude = d.latitude ?? null;
          if (d.longitude)
            this.proLongitude = d.longitude ?? null;
        }
        this.proZipLookupLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.proZipLookupLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  onStep2Submit(form) {
    if (!form.valid)
      return;
    this.proPhoneInvalid = !isValidPhoneNumber2(this.proPhoneDialCode + this.proPhoneNumber);
    if (this.proPhoneInvalid)
      return;
    this.step2Loading = true;
    this.step2Error = "";
    this.step2ShowLoginLink = false;
    if (this.draftProId !== null) {
      this.completeStep2();
      return;
    }
    this.auth.registerProStep1({
      Name: this.proName,
      Email: this.email,
      Password: this.password,
      PhoneNumber: this.proPhoneDialCode + this.proPhoneNumber,
      BusinessName: this.bizName || this.proName
    }).subscribe({
      next: (res) => {
        this.draftProId = res.proId;
        this.completeStep2();
      },
      error: (err) => {
        this.step2Error = err.error?.message || "Could not create account. Please try again.";
        this.step2ShowLoginLink = err.status === 400;
        this.step2Loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  completeStep2() {
    const usesBizAddress = this.savedBusinessId !== null;
    this.auth.registerProStep2(this.draftProId, {
      HouseNameNumber: usesBizAddress ? this.bizHouseNameNumber : this.proHouseNameNumber,
      Street1: usesBizAddress ? this.bizStreet1 : this.proStreet1,
      Street2: usesBizAddress ? this.bizStreet2 : this.proStreet2,
      City: usesBizAddress ? this.bizCity : this.proCity,
      District: usesBizAddress ? this.bizDistrict : this.proDistrict,
      State: usesBizAddress ? this.bizState : this.proState,
      Country: usesBizAddress ? this.bizCountry : this.proCountry,
      ZipPostalCode: usesBizAddress ? this.bizZipPostalCode : this.proZipPostalCode,
      Latitude: usesBizAddress ? this.bizLatitude : this.proLatitude,
      Longitude: usesBizAddress ? this.bizLongitude : this.proLongitude,
      BusinessId: this.savedBusinessId
    }).subscribe({
      next: () => {
        this.step2Loading = false;
        this.router.navigate(["/"]);
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.step2Error = err.error?.message || "Could not complete registration. Please try again.";
        this.step2Loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  static \u0275fac = function RegisterProComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterProComponent)(\u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AddressService), \u0275\u0275directiveInject(BusinessService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterProComponent, selectors: [["app-register-pro"]], viewQuery: function RegisterProComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
      \u0275\u0275viewQuery(_c12, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.bizAddressInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.proAddressInput = _t.first);
    }
  }, decls: 29, vars: 24, consts: [["step1Form", "ngForm"], ["bizNameField", "ngModel"], ["bizPhoneField", "ngModel"], ["bizAddressInput", ""], ["bizHouseField", "ngModel"], ["bizZipField", "ngModel"], ["bizStreet1Field", "ngModel"], ["bizCityField", "ngModel"], ["bizStateField", "ngModel"], ["bizCountryField", "ngModel"], ["step2Form", "ngForm"], ["nameField", "ngModel"], ["emailField", "ngModel"], ["proPhoneField", "ngModel"], ["passwordField", "ngModel"], ["proAddressInput", ""], ["proHouseField", "ngModel"], ["proZipField", "ngModel"], ["proStreet1Field", "ngModel"], ["proCityField", "ngModel"], ["proStateField", "ngModel"], ["proCountryField", "ngModel"], [1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "logo-circle"], [1, "header-text"], [1, "subtitle"], [1, "step-indicator"], [1, "step-item"], [1, "step-circle"], [4, "ngIf"], ["class", "check", 4, "ngIf"], [1, "step-label"], [1, "step-connector"], [3, "ngSubmit", 4, "ngIf"], [1, "check"], [1, "step1-intro"], [1, "step1-intro-icon"], [1, "step1-intro-title"], [1, "step1-intro-desc"], [3, "ngSubmit"], [1, "form-group"], ["for", "bizName"], [1, "required"], ["type", "text", "id", "bizName", "name", "bizName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "field-error", 4, "ngIf"], [1, "phone-input-group"], ["name", "bizPhoneDialCode", 1, "form-control", "dial-code-select", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["type", "tel", "name", "bizPhoneNumber", "required", "", 1, "form-control", 3, "ngModelChange", "blur", "ngModel", "placeholder"], [1, "address-section-label"], [1, "autocomplete-container"], ["type", "text", "autocomplete", "off", 1, "form-control", 3, "input", "blur", "placeholder"], ["class", "address-dropdown", 4, "ngIf"], ["class", "address-loading", 4, "ngIf"], [1, "text-muted"], [1, "form-row"], ["for", "bizHouseNameNumber"], ["type", "text", "id", "bizHouseNameNumber", "name", "bizHouseNameNumber", "required", "", "placeholder", "12A", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bizZipPostalCode"], ["type", "text", "id", "bizZipPostalCode", "name", "bizZipPostalCode", "required", "", "placeholder", "695001", 1, "form-control", 3, "ngModelChange", "blur", "ngModel"], ["class", "zip-lookup-hint", 4, "ngIf"], ["for", "bizStreet1"], ["type", "text", "id", "bizStreet1", "name", "bizStreet1", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "bizStreet2"], ["type", "text", "id", "bizStreet2", "name", "bizStreet2", "placeholder", "Floor, unit, etc.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "bizCity"], ["type", "text", "id", "bizCity", "name", "bizCity", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "bizDistrict"], ["type", "text", "id", "bizDistrict", "name", "bizDistrict", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "bizState"], ["type", "text", "id", "bizState", "name", "bizState", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "bizCountry"], ["type", "text", "id", "bizCountry", "name", "bizCountry", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "error-msg", 4, "ngIf"], [1, "step1-actions"], ["type", "button", 1, "btn-skip", 3, "click"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "btn-arrow", 4, "ngIf"], [1, "login-link"], ["routerLink", "/auth/login"], [1, "field-error"], [3, "value"], [1, "address-dropdown"], ["class", "address-item", 3, "mousedown", "click", 4, "ngFor", "ngForOf"], [1, "address-item", 3, "mousedown", "click"], [1, "address-main"], [1, "address-secondary"], [1, "address-loading"], [1, "zip-lookup-hint"], [1, "error-msg"], [1, "btn-arrow"], ["class", "step2-banner", 4, "ngIf"], ["class", "step2-banner solo-banner", 4, "ngIf"], ["for", "proName"], ["type", "text", "id", "proName", "name", "proName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "proPhone"], ["name", "proPhoneDialCode", 1, "form-control", "dial-code-select", 3, "ngModelChange", "ngModel"], ["type", "tel", "id", "proPhone", "name", "proPhone", "required", "", 1, "form-control", 3, "ngModelChange", "blur", "ngModel", "placeholder"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "step2-actions"], ["type", "button", 1, "btn-back", 3, "click"], [1, "step2-banner"], [1, "banner-icon"], [1, "step2-banner", "solo-banner"], [1, "location-divider"], [1, "location-hint"], ["for", "proHouse"], ["type", "text", "id", "proHouse", "name", "proHouseNameNumber", "required", "", "placeholder", "12A", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "proZip"], ["type", "text", "id", "proZip", "name", "proZipPostalCode", "required", "", "placeholder", "695001", 1, "form-control", 3, "ngModelChange", "blur", "ngModel"], ["for", "proStreet1"], ["type", "text", "id", "proStreet1", "name", "proStreet1", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "proCity"], ["type", "text", "id", "proCity", "name", "proCity", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "proDistrict"], ["type", "text", "id", "proDistrict", "name", "proDistrict", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "proState"], ["type", "text", "id", "proState", "name", "proState", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "proCountry"], ["type", "text", "id", "proCountry", "name", "proCountry", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["routerLink", "/auth/login", "class", "error-login-link", 4, "ngIf"], ["routerLink", "/auth/login", 1, "error-login-link"]], template: function RegisterProComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 22)(1, "div", 23)(2, "div", 24)(3, "div", 25);
      \u0275\u0275text(4, "P");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 26)(6, "h2");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 27);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "div", 28)(13, "div", 29)(14, "div", 30);
      \u0275\u0275template(15, RegisterProComponent_span_15_Template, 2, 0, "span", 31)(16, RegisterProComponent_span_16_Template, 2, 0, "span", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "span", 33);
      \u0275\u0275text(18);
      \u0275\u0275pipe(19, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(20, "div", 34);
      \u0275\u0275elementStart(21, "div", 29)(22, "div", 30);
      \u0275\u0275text(23, "2");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "span", 33);
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(27, RegisterProComponent_div_27_Template, 142, 126, "div", 31)(28, RegisterProComponent_form_28_Template, 64, 62, "form", 35);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 16, "AUTH.REGISTER_PRO.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 18, "AUTH.REGISTER_PRO.SUBTITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275classProp("active", ctx.currentStep === 1)("done", ctx.currentStep > 1);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentStep <= 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep > 1);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 20, "AUTH.REGISTER_PRO.STEP1_LABEL"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("done", ctx.currentStep > 1);
      \u0275\u0275advance();
      \u0275\u0275classProp("active", ctx.currentStep === 2);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 22, "AUTH.REGISTER_PRO.STEP2_LABEL"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.currentStep === 1);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.currentStep === 2);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, EmailValidator, NgModel, NgForm, TranslateModule, TranslatePipe], styles: ['\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(118, 75, 162, 0.35);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.step-item[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.step-item[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.step-item[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: #764ba2;\n  background: #764ba2;\n  color: #fff;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #764ba2;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: #764ba2;\n  background: #764ba2;\n  color: #fff;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.step-connector[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 10px 20px;\n  transition: background 0.2s;\n}\n.step-connector.done[_ngcontent-%COMP%] {\n  background: #764ba2;\n}\n.step2-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #166534;\n  margin-bottom: 20px;\n}\n.step2-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #16a34a;\n  font-weight: 700;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.step2-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n.step2-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: none;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  color: #374151;\n}\n.btn-arrow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.step1-intro[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n}\n.step1-intro-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.step1-intro-title[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4c1d95;\n}\n.step1-intro-desc[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #6d28d9;\n}\n.phone-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.phone-input-group[_ngcontent-%COMP%]   .dial-code-select[_ngcontent-%COMP%] {\n  width: 135px;\n  flex-shrink: 0;\n}\n.phone-input-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.address-section-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin: 4px 0 12px;\n}\n.zip-lookup-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 11px;\n  color: #764ba2;\n  margin-top: 4px;\n}\n.step1-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n.step1-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 0;\n}\n.solo-banner[_ngcontent-%COMP%] {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n  color: #1e40af;\n}\n.solo-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  color: #3b82f6;\n}\n.location-divider[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 20px 0 8px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.location-divider[_ngcontent-%COMP%]::before, \n.location-divider[_ngcontent-%COMP%]::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #e5e7eb;\n}\n.location-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0 0 16px;\n}\n.step3-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #4c1d95;\n  margin-bottom: 20px;\n}\n.step3-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n  line-height: 1;\n}\n.step3-banner[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 4px;\n}\n.step3-banner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 12px;\n  color: #6d28d9;\n}\n.step3-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n.step3-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 0;\n}\n.btn-skip[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: none;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-skip[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  color: #374151;\n}\n.error-msg[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  color: #b91c1c;\n  font-size: 13px;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.error-login-link[_ngcontent-%COMP%] {\n  color: #764ba2;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.error-login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 16px;\n  margin-bottom: 0;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #764ba2;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item[_ngcontent-%COMP%]:hover {\n  background: rgba(118, 75, 162, 0.06);\n}\n.address-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.address-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=register-pro.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterProComponent, [{
    type: Component,
    args: [{ selector: "app-register-pro", standalone: true, imports: [CommonModule, RouterModule, FormsModule, TranslateModule], template: `<div class="register-container">
  <div class="register-card">

    <div class="register-header">
      <div class="logo-circle">P</div>
      <div class="header-text">
        <h2>{{ 'AUTH.REGISTER_PRO.TITLE' | translate }}</h2>
        <p class="subtitle">{{ 'AUTH.REGISTER_PRO.SUBTITLE' | translate }}</p>
      </div>
    </div>

    <!-- Step Indicator -->
    <div class="step-indicator">
      <div class="step-item" [class.active]="currentStep === 1" [class.done]="currentStep > 1">
        <div class="step-circle">
          <span *ngIf="currentStep <= 1">1</span>
          <span class="check" *ngIf="currentStep > 1">\u2713</span>
        </div>
        <span class="step-label">{{ 'AUTH.REGISTER_PRO.STEP1_LABEL' | translate }}</span>
      </div>
      <div class="step-connector" [class.done]="currentStep > 1"></div>
      <div class="step-item" [class.active]="currentStep === 2">
        <div class="step-circle">2</div>
        <span class="step-label">{{ 'AUTH.REGISTER_PRO.STEP2_LABEL' | translate }}</span>
      </div>
    </div>

    <!-- \u2500\u2500 Step 1: Business Setup (Optional) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div *ngIf="currentStep === 1">

      <div class="step1-intro">
        <div class="step1-intro-icon">\u{1F3E2}</div>
        <div>
          <p class="step1-intro-title">{{ 'AUTH.REGISTER_PRO.STEP1_INTRO_TITLE' | translate }}</p>
          <p class="step1-intro-desc">{{ 'AUTH.REGISTER_PRO.STEP1_INTRO_DESC' | translate }}</p>
        </div>
      </div>

      <form #step1Form="ngForm" (ngSubmit)="onStep1Save(step1Form)">

        <div class="form-group">
          <label for="bizName">{{ 'AUTH.REGISTER_PRO.BIZ_NAME' | translate }} <span class="required">*</span></label>
          <input type="text" id="bizName" name="bizName" class="form-control"
                 #bizNameField="ngModel"
                 [class.is-invalid]="bizNameField.invalid && (bizNameField.dirty || bizNameField.touched)"
                 [(ngModel)]="bizName" required
                 [placeholder]="'AUTH.REGISTER_PRO.BIZ_NAME_PLACEHOLDER' | translate" />
          <small class="field-error" *ngIf="bizNameField.invalid && (bizNameField.dirty || bizNameField.touched)">
            {{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}
          </small>
        </div>

        <!-- Business Phone -->
        <div class="form-group">
          <label>{{ 'AUTH.REGISTER_PRO.BIZ_PHONE' | translate }} <span class="required">*</span></label>
          <div class="phone-input-group">
            <select class="form-control dial-code-select" name="bizPhoneDialCode"
                    [(ngModel)]="bizPhoneDialCode" (ngModelChange)="onBizDialCodeChange()">
              <option *ngFor="let c of countryCodes" [value]="c.code">{{ c.label }}</option>
            </select>
            <input type="tel" name="bizPhoneNumber" class="form-control"
                   #bizPhoneField="ngModel"
                   [class.is-invalid]="(bizPhoneField.invalid && (bizPhoneField.dirty || bizPhoneField.touched)) || bizPhoneInvalid"
                   [(ngModel)]="bizPhoneNumber" required
                   [placeholder]="'AUTH.REGISTER_PRO.PHONE_PLACEHOLDER' | translate"
                   (blur)="onBizPhoneBlur()"
                   (ngModelChange)="onBizPhoneChange()" />
          </div>
          <small class="field-error" *ngIf="bizPhoneField.invalid && (bizPhoneField.dirty || bizPhoneField.touched)">{{ 'AUTH.REGISTER_PRO.PHONE_REQUIRED' | translate }}</small>
          <small class="field-error" *ngIf="bizPhoneInvalid && !bizPhoneField.hasError('required')">{{ 'AUTH.REGISTER_PRO.PHONE_INVALID' | translate }}</small>
        </div>

        <!-- Business Address -->
        <div class="address-section-label">{{ 'AUTH.REGISTER_PRO.BIZ_ADDRESS' | translate }}</div>

        <div class="form-group">
          <label>{{ 'AUTH.REGISTER_PRO.SEARCH_ADDRESS' | translate }}</label>
          <div class="autocomplete-container">
            <input #bizAddressInput type="text" class="form-control"
                   [placeholder]="'AUTH.REGISTER_PRO.SEARCH_ADDRESS_PLACEHOLDER' | translate"
                   (input)="onBizAddressInput($event)"
                   (blur)="hideBizAddressList()"
                   autocomplete="off" />
            <div class="address-dropdown" *ngIf="showBizAddressList && bizAddressPredictions.length > 0">
              <div *ngFor="let p of bizAddressPredictions" class="address-item"
                   (mousedown)="$event.preventDefault()" (click)="onBizAddressSelected(p)">
                <div class="address-main">{{ p.mainText }}</div>
                <div class="address-secondary">{{ p.secondaryText }}</div>
              </div>
            </div>
            <div class="address-loading" *ngIf="bizAddressLoading">{{ 'COMMON.SEARCHING' | translate }}</div>
          </div>
          <small class="text-muted">{{ 'AUTH.REGISTER_PRO.SEARCH_ADDRESS_HINT' | translate }}</small>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="bizHouseNameNumber">{{ 'AUTH.REGISTER_PRO.HOUSE' | translate }} <span class="required">*</span></label>
            <input type="text" id="bizHouseNameNumber" name="bizHouseNameNumber" class="form-control"
                   #bizHouseField="ngModel"
                   [class.is-invalid]="bizHouseField.invalid && (bizHouseField.dirty || bizHouseField.touched)"
                   [(ngModel)]="bizHouseNameNumber" required placeholder="12A" />
            <small class="field-error" *ngIf="bizHouseField.invalid && (bizHouseField.dirty || bizHouseField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
          <div class="form-group">
            <label for="bizZipPostalCode">{{ 'AUTH.REGISTER_PRO.ZIP' | translate }} <span class="required">*</span></label>
            <input type="text" id="bizZipPostalCode" name="bizZipPostalCode" class="form-control"
                   #bizZipField="ngModel"
                   [class.is-invalid]="bizZipField.invalid && (bizZipField.dirty || bizZipField.touched)"
                   [(ngModel)]="bizZipPostalCode" required placeholder="695001"
                   (blur)="onBizZipBlur()" />
            <small class="zip-lookup-hint" *ngIf="bizZipLookupLoading">{{ 'AUTH.REGISTER_PRO.ZIP_FILLING' | translate }}</small>
            <small class="field-error" *ngIf="bizZipField.invalid && (bizZipField.dirty || bizZipField.touched) && !bizZipLookupLoading">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
        </div>

        <div class="form-group">
          <label for="bizStreet1">{{ 'AUTH.REGISTER_PRO.STREET' | translate }} <span class="required">*</span></label>
          <input type="text" id="bizStreet1" name="bizStreet1" class="form-control"
                 #bizStreet1Field="ngModel"
                 [class.is-invalid]="bizStreet1Field.invalid && (bizStreet1Field.dirty || bizStreet1Field.touched)"
                 [(ngModel)]="bizStreet1" required [placeholder]="'AUTH.REGISTER_PRO.STREET' | translate" />
          <small class="field-error" *ngIf="bizStreet1Field.invalid && (bizStreet1Field.dirty || bizStreet1Field.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
        </div>

        <div class="form-group">
          <label for="bizStreet2">{{ 'AUTH.REGISTER_PRO.STREET2' | translate }}</label>
          <input type="text" id="bizStreet2" name="bizStreet2" class="form-control"
                 [(ngModel)]="bizStreet2" placeholder="Floor, unit, etc." />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="bizCity">{{ 'AUTH.REGISTER_PRO.CITY' | translate }} <span class="required">*</span></label>
            <input type="text" id="bizCity" name="bizCity" class="form-control"
                   #bizCityField="ngModel"
                   [class.is-invalid]="bizCityField.invalid && (bizCityField.dirty || bizCityField.touched)"
                   [(ngModel)]="bizCity" required [placeholder]="'AUTH.REGISTER_PRO.CITY' | translate" />
            <small class="field-error" *ngIf="bizCityField.invalid && (bizCityField.dirty || bizCityField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
          <div class="form-group">
            <label for="bizDistrict">{{ 'AUTH.REGISTER_PRO.DISTRICT' | translate }}</label>
            <input type="text" id="bizDistrict" name="bizDistrict" class="form-control"
                   [(ngModel)]="bizDistrict" [placeholder]="'AUTH.REGISTER_PRO.DISTRICT' | translate" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="bizState">{{ 'AUTH.REGISTER_PRO.STATE' | translate }} <span class="required">*</span></label>
            <input type="text" id="bizState" name="bizState" class="form-control"
                   #bizStateField="ngModel"
                   [class.is-invalid]="bizStateField.invalid && (bizStateField.dirty || bizStateField.touched)"
                   [(ngModel)]="bizState" required [placeholder]="'AUTH.REGISTER_PRO.STATE' | translate" />
            <small class="field-error" *ngIf="bizStateField.invalid && (bizStateField.dirty || bizStateField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
          <div class="form-group">
            <label for="bizCountry">{{ 'AUTH.REGISTER_PRO.COUNTRY' | translate }} <span class="required">*</span></label>
            <input type="text" id="bizCountry" name="bizCountry" class="form-control"
                   #bizCountryField="ngModel"
                   [class.is-invalid]="bizCountryField.invalid && (bizCountryField.dirty || bizCountryField.touched)"
                   [(ngModel)]="bizCountry" required [placeholder]="'AUTH.REGISTER_PRO.COUNTRY' | translate" />
            <small class="field-error" *ngIf="bizCountryField.invalid && (bizCountryField.dirty || bizCountryField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
        </div>

        <div class="error-msg" *ngIf="step1Error">{{ step1Error }}</div>

        <div class="step1-actions">
          <button type="button" class="btn-skip" (click)="skipBusiness()">
            {{ 'AUTH.REGISTER_PRO.SKIP_SOLO' | translate }}
          </button>
          <button type="submit" class="btn-submit" [disabled]="!step1Form.valid || step1Loading || bizPhoneInvalid">
            {{ step1Loading ? ('AUTH.REGISTER_PRO.SAVING' | translate) : ('AUTH.REGISTER_PRO.SAVE_CONTINUE' | translate) }}
            <span class="btn-arrow" *ngIf="!step1Loading">\u2192</span>
          </button>
        </div>

        <p class="login-link">{{ 'AUTH.REGISTER_PRO.HAVE_ACCOUNT' | translate }} <a routerLink="/auth/login">{{ 'AUTH.REGISTER_PRO.SIGN_IN' | translate }}</a></p>

      </form>
    </div>

    <!-- \u2500\u2500 Step 2: Create Business Login \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <form #step2Form="ngForm" (ngSubmit)="onStep2Submit(step2Form)" *ngIf="currentStep === 2">

      <div class="step2-banner" *ngIf="savedBusinessId">
        <span class="banner-icon">\u2713</span>
        <span>{{ 'AUTH.REGISTER_PRO.BIZ_SAVED_BANNER' | translate }}</span>
      </div>
      <div class="step2-banner solo-banner" *ngIf="!savedBusinessId">
        <span class="banner-icon">\u{1F464}</span>
        <span>{{ 'AUTH.REGISTER_PRO.SOLO_BANNER' | translate }}</span>
      </div>

      <div class="form-group">
        <label for="proName">{{ 'AUTH.REGISTER_PRO.FULL_NAME' | translate }} <span class="required">*</span></label>
        <input type="text" id="proName" name="proName" class="form-control"
               #nameField="ngModel"
               [class.is-invalid]="nameField.invalid && (nameField.dirty || nameField.touched)"
               [(ngModel)]="proName" required [placeholder]="'AUTH.REGISTER_PRO.FULL_NAME_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="nameField.invalid && (nameField.dirty || nameField.touched)">{{ 'AUTH.REGISTER_PRO.FULL_NAME_REQUIRED' | translate }}</small>
      </div>

      <div class="form-group">
        <label for="email">{{ 'AUTH.REGISTER_PRO.EMAIL' | translate }} <span class="required">*</span></label>
        <input type="email" id="email" name="email" class="form-control"
               #emailField="ngModel"
               [class.is-invalid]="emailField.invalid && (emailField.dirty || emailField.touched)"
               [(ngModel)]="email" required email [placeholder]="'AUTH.REGISTER_PRO.EMAIL_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="emailField.invalid && (emailField.dirty || emailField.touched)">
          <span *ngIf="emailField.hasError('required')">{{ 'AUTH.REGISTER_PRO.EMAIL_REQUIRED' | translate }}</span>
          <span *ngIf="emailField.hasError('email')">{{ 'AUTH.REGISTER_PRO.EMAIL_INVALID' | translate }}</span>
        </small>
      </div>

      <div class="form-group">
        <label for="proPhone">{{ 'AUTH.REGISTER_PRO.PHONE' | translate }} <span class="required">*</span></label>
        <div class="phone-input-group">
          <select class="form-control dial-code-select" name="proPhoneDialCode"
                  [(ngModel)]="proPhoneDialCode" (ngModelChange)="onProDialCodeChange()">
            <option *ngFor="let c of countryCodes" [value]="c.code">{{ c.label }}</option>
          </select>
          <input type="tel" id="proPhone" name="proPhone" class="form-control"
                 #proPhoneField="ngModel"
                 [class.is-invalid]="(proPhoneField.invalid && (proPhoneField.dirty || proPhoneField.touched)) || proPhoneInvalid"
                 [(ngModel)]="proPhoneNumber" required
                 [placeholder]="'AUTH.REGISTER_PRO.PHONE_PLACEHOLDER' | translate"
                 (blur)="onProPhoneBlur()"
                 (ngModelChange)="onProPhoneChange()" />
        </div>
        <small class="field-error" *ngIf="proPhoneField.invalid && (proPhoneField.dirty || proPhoneField.touched)">{{ 'AUTH.REGISTER_PRO.PHONE_REQUIRED' | translate }}</small>
        <small class="field-error" *ngIf="proPhoneInvalid && !proPhoneField.hasError('required')">{{ 'AUTH.REGISTER_PRO.PHONE_INVALID' | translate }}</small>
      </div>

      <div class="form-group">
        <label for="password">{{ 'AUTH.REGISTER_PRO.PASSWORD' | translate }} <span class="required">*</span></label>
        <input type="password" id="password" name="password" class="form-control"
               #passwordField="ngModel"
               [class.is-invalid]="passwordField.invalid && (passwordField.dirty || passwordField.touched)"
               [(ngModel)]="password" required minlength="6"
               [placeholder]="'AUTH.REGISTER_PRO.PASSWORD_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="passwordField.invalid && (passwordField.dirty || passwordField.touched)">
          <span *ngIf="passwordField.hasError('required')">{{ 'AUTH.REGISTER_PRO.PASSWORD_REQUIRED' | translate }}</span>
          <span *ngIf="passwordField.hasError('minlength')">{{ 'AUTH.REGISTER_PRO.PASSWORD_MIN' | translate }}</span>
        </small>
      </div>

      <!-- Solo Pro: location section (no business address) -->
      <ng-container *ngIf="!savedBusinessId">
        <div class="location-divider">
          <span>{{ 'AUTH.REGISTER_PRO.YOUR_LOCATION' | translate }}</span>
        </div>
        <p class="location-hint">{{ 'AUTH.REGISTER_PRO.YOUR_LOCATION_HINT' | translate }}</p>

        <div class="form-group">
          <label>{{ 'AUTH.REGISTER_PRO.SEARCH_ADDRESS' | translate }}</label>
          <div class="autocomplete-container">
            <input #proAddressInput type="text" class="form-control"
                   [placeholder]="'AUTH.REGISTER_PRO.SEARCH_ADDRESS_PLACEHOLDER' | translate"
                   (input)="onProAddressInput($event)"
                   (blur)="hideProAddressList()"
                   autocomplete="off" />
            <div class="address-dropdown" *ngIf="showProAddressList && proAddressPredictions.length > 0">
              <div *ngFor="let p of proAddressPredictions" class="address-item"
                   (mousedown)="$event.preventDefault()" (click)="onProAddressSelected(p)">
                <div class="address-main">{{ p.mainText }}</div>
                <div class="address-secondary">{{ p.secondaryText }}</div>
              </div>
            </div>
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="proHouse">{{ 'AUTH.REGISTER_PRO.HOUSE' | translate }} <span class="required">*</span></label>
            <input type="text" id="proHouse" name="proHouseNameNumber" class="form-control"
                   #proHouseField="ngModel"
                   [class.is-invalid]="proHouseField.invalid && (proHouseField.dirty || proHouseField.touched)"
                   [(ngModel)]="proHouseNameNumber" required placeholder="12A" />
            <small class="field-error" *ngIf="proHouseField.invalid && (proHouseField.dirty || proHouseField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
          <div class="form-group">
            <label for="proZip">{{ 'AUTH.REGISTER_PRO.ZIP' | translate }} <span class="required">*</span></label>
            <input type="text" id="proZip" name="proZipPostalCode" class="form-control"
                   #proZipField="ngModel"
                   [class.is-invalid]="proZipField.invalid && (proZipField.dirty || proZipField.touched)"
                   [(ngModel)]="proZipPostalCode" required placeholder="695001"
                   (blur)="onProZipBlur()" />
            <small class="zip-lookup-hint" *ngIf="proZipLookupLoading">{{ 'AUTH.REGISTER_PRO.ZIP_FILLING' | translate }}</small>
            <small class="field-error" *ngIf="proZipField.invalid && (proZipField.dirty || proZipField.touched) && !proZipLookupLoading">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
        </div>

        <div class="form-group">
          <label for="proStreet1">{{ 'AUTH.REGISTER_PRO.STREET' | translate }} <span class="required">*</span></label>
          <input type="text" id="proStreet1" name="proStreet1" class="form-control"
                 #proStreet1Field="ngModel"
                 [class.is-invalid]="proStreet1Field.invalid && (proStreet1Field.dirty || proStreet1Field.touched)"
                 [(ngModel)]="proStreet1" required [placeholder]="'AUTH.REGISTER_PRO.STREET' | translate" />
          <small class="field-error" *ngIf="proStreet1Field.invalid && (proStreet1Field.dirty || proStreet1Field.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="proCity">{{ 'AUTH.REGISTER_PRO.CITY' | translate }} <span class="required">*</span></label>
            <input type="text" id="proCity" name="proCity" class="form-control"
                   #proCityField="ngModel"
                   [class.is-invalid]="proCityField.invalid && (proCityField.dirty || proCityField.touched)"
                   [(ngModel)]="proCity" required [placeholder]="'AUTH.REGISTER_PRO.CITY' | translate" />
            <small class="field-error" *ngIf="proCityField.invalid && (proCityField.dirty || proCityField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
          <div class="form-group">
            <label for="proDistrict">{{ 'AUTH.REGISTER_PRO.DISTRICT' | translate }}</label>
            <input type="text" id="proDistrict" name="proDistrict" class="form-control"
                   [(ngModel)]="proDistrict" [placeholder]="'AUTH.REGISTER_PRO.DISTRICT' | translate" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="proState">{{ 'AUTH.REGISTER_PRO.STATE' | translate }} <span class="required">*</span></label>
            <input type="text" id="proState" name="proState" class="form-control"
                   #proStateField="ngModel"
                   [class.is-invalid]="proStateField.invalid && (proStateField.dirty || proStateField.touched)"
                   [(ngModel)]="proState" required [placeholder]="'AUTH.REGISTER_PRO.STATE' | translate" />
            <small class="field-error" *ngIf="proStateField.invalid && (proStateField.dirty || proStateField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
          <div class="form-group">
            <label for="proCountry">{{ 'AUTH.REGISTER_PRO.COUNTRY' | translate }} <span class="required">*</span></label>
            <input type="text" id="proCountry" name="proCountry" class="form-control"
                   #proCountryField="ngModel"
                   [class.is-invalid]="proCountryField.invalid && (proCountryField.dirty || proCountryField.touched)"
                   [(ngModel)]="proCountry" required [placeholder]="'AUTH.REGISTER_PRO.COUNTRY' | translate" />
            <small class="field-error" *ngIf="proCountryField.invalid && (proCountryField.dirty || proCountryField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
          </div>
        </div>
      </ng-container>

      <div class="error-msg" *ngIf="step2Error">
        {{ step2Error }}
        <a *ngIf="step2ShowLoginLink" routerLink="/auth/login" class="error-login-link">Log in instead</a>
      </div>

      <div class="step2-actions">
        <button type="button" class="btn-back" (click)="goBack()">{{ 'AUTH.REGISTER_PRO.BACK' | translate }}</button>
        <button type="submit" class="btn-submit" [disabled]="!step2Form.valid || step2Loading || proPhoneInvalid">
          {{ step2Loading ? ('AUTH.REGISTER_PRO.CREATING' | translate) : ('AUTH.REGISTER_PRO.CREATE_LOGIN' | translate) }}
        </button>
      </div>

      <p class="login-link">{{ 'AUTH.REGISTER_PRO.HAVE_ACCOUNT' | translate }} <a routerLink="/auth/login">{{ 'AUTH.REGISTER_PRO.SIGN_IN' | translate }}</a></p>

    </form>

  </div>
</div>
`, styles: ['/* src/app/auth/register-pro/register-pro.scss */\n.register-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(118, 75, 162, 0.35);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.step-indicator {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.step-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.step-item .step-circle {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.step-item .step-circle .check {\n  font-size: 14px;\n}\n.step-item .step-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.step-item.active .step-circle {\n  border-color: #764ba2;\n  background: #764ba2;\n  color: #fff;\n}\n.step-item.active .step-label {\n  color: #764ba2;\n}\n.step-item.done .step-circle {\n  border-color: #764ba2;\n  background: #764ba2;\n  color: #fff;\n}\n.step-item.done .step-label {\n  color: #374151;\n}\n.step-connector {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 10px 20px;\n  transition: background 0.2s;\n}\n.step-connector.done {\n  background: #764ba2;\n}\n.step2-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #166534;\n  margin-bottom: 20px;\n}\n.step2-banner .banner-icon {\n  font-size: 15px;\n  color: #16a34a;\n  font-weight: 700;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.step2-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n.step2-actions .btn-submit {\n  flex: 1;\n  margin-top: 0;\n}\n.btn-back {\n  padding: 12px 16px;\n  background: none;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-back:hover {\n  border-color: #9ca3af;\n  color: #374151;\n}\n.btn-arrow {\n  margin-left: 6px;\n}\n.step1-intro {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 20px;\n}\n.step1-intro-icon {\n  font-size: 22px;\n  line-height: 1;\n  flex-shrink: 0;\n}\n.step1-intro-title {\n  margin: 0 0 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #4c1d95;\n}\n.step1-intro-desc {\n  margin: 0;\n  font-size: 12px;\n  color: #6d28d9;\n}\n.phone-input-group {\n  display: flex;\n  gap: 8px;\n}\n.phone-input-group .dial-code-select {\n  width: 135px;\n  flex-shrink: 0;\n}\n.phone-input-group input {\n  flex: 1;\n}\n.address-section-label {\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin: 4px 0 12px;\n}\n.zip-lookup-hint {\n  display: block;\n  font-size: 11px;\n  color: #764ba2;\n  margin-top: 4px;\n}\n.step1-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n.step1-actions .btn-submit {\n  flex: 1;\n  margin-top: 0;\n}\n.solo-banner {\n  background: #eff6ff;\n  border-color: #bfdbfe;\n  color: #1e40af;\n}\n.solo-banner .banner-icon {\n  color: #3b82f6;\n}\n.location-divider {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin: 20px 0 8px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n}\n.location-divider::before,\n.location-divider::after {\n  content: "";\n  flex: 1;\n  height: 1px;\n  background: #e5e7eb;\n}\n.location-hint {\n  font-size: 12px;\n  color: #6b7280;\n  margin: 0 0 16px;\n}\n.step3-banner {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  background: #f5f3ff;\n  border: 1px solid #ddd6fe;\n  border-radius: 8px;\n  padding: 12px 14px;\n  font-size: 13px;\n  color: #4c1d95;\n  margin-bottom: 20px;\n}\n.step3-banner .banner-icon {\n  font-size: 22px;\n  line-height: 1;\n}\n.step3-banner strong {\n  display: block;\n  margin-bottom: 4px;\n}\n.step3-banner p {\n  margin: 0;\n  font-size: 12px;\n  color: #6d28d9;\n}\n.step3-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n.step3-actions .btn-submit {\n  flex: 1;\n  margin-top: 0;\n}\n.btn-skip {\n  padding: 12px 16px;\n  background: none;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-skip:hover {\n  border-color: #9ca3af;\n  color: #374151;\n}\n.error-msg {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  color: #b91c1c;\n  font-size: 13px;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.error-login-link {\n  color: #764ba2;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.error-login-link:hover {\n  text-decoration: underline;\n}\n.login-link {\n  text-align: center;\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 16px;\n  margin-bottom: 0;\n}\n.login-link a {\n  color: #764ba2;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link a:hover {\n  text-decoration: underline;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required {\n  color: #ef4444;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.12);\n}\n.form-control::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid {\n  border-color: #ef4444;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.text-muted {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.autocomplete-container {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item:hover {\n  background: rgba(118, 75, 162, 0.06);\n}\n.address-item:last-child {\n  border-bottom: none;\n}\n.address-main {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container {\n    padding: 16px 12px;\n  }\n  .register-card {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=register-pro.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: Router }, { type: AddressService }, { type: BusinessService }, { type: ChangeDetectorRef }], { bizAddressInput: [{
    type: ViewChild,
    args: ["bizAddressInput"]
  }], proAddressInput: [{
    type: ViewChild,
    args: ["proAddressInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterProComponent, { className: "RegisterProComponent", filePath: "src/app/auth/register-pro/register-pro.ts", lineNumber: 20 });
})();

// src/app/auth/register-choice/register-choice.ts
var RegisterChoiceComponent = class _RegisterChoiceComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  navigateTo(path) {
    this.router.navigate([path]);
  }
  static \u0275fac = function RegisterChoiceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterChoiceComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterChoiceComponent, selectors: [["app-register-choice"]], decls: 76, vars: 60, consts: [[1, "register-choice-wrapper"], [1, "hero"], [1, "hero-content"], [1, "registration-options"], [1, "container"], [1, "options-grid"], [1, "option-card", "user-card"], [1, "card-icon", "user-icon"], [1, "card-description"], [1, "features-list"], [1, "btn-primary", 3, "click"], [1, "option-card", "pro-card"], [1, "card-icon", "pro-icon"], [1, "btn-secondary", 3, "click"], [1, "info-section"], [1, "login-links"], ["href", "javascript:void(0)", 3, "click"]], template: function RegisterChoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(9, "section", 3)(10, "div", 4)(11, "div", 5)(12, "div", 6)(13, "div", 7);
      \u0275\u0275text(14, "U");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "h2");
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(18, "p", 8);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(21, "ul", 9)(22, "li");
      \u0275\u0275text(23);
      \u0275\u0275pipe(24, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(25, "li");
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "li");
      \u0275\u0275text(29);
      \u0275\u0275pipe(30, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(31, "li");
      \u0275\u0275text(32);
      \u0275\u0275pipe(33, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(34, "li");
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(37, "button", 10);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_button_click_37_listener() {
        return ctx.navigateTo("/auth/register/user");
      });
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "div", 11)(41, "div", 12);
      \u0275\u0275text(42, "P");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(43, "h2");
      \u0275\u0275text(44);
      \u0275\u0275pipe(45, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "p", 8);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "ul", 9)(50, "li");
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(53, "li");
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(56, "li");
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(59, "li");
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(62, "li");
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(65, "button", 13);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_button_click_65_listener() {
        return ctx.navigateTo("/auth/register/pro");
      });
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(68, "div", 14)(69, "div", 15)(70, "p");
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275domElementStart(73, "a", 16);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_a_click_73_listener() {
        return ctx.navigateTo("/auth/login");
      });
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275domElementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 20, "AUTH.REGISTER_CHOICE.HERO_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 22, "AUTH.REGISTER_CHOICE.HERO_SUB"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 24, "AUTH.REGISTER_CHOICE.USER_SUBTITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 26, "AUTH.REGISTER_CHOICE.USER_DESC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 28, "AUTH.REGISTER_CHOICE.USER_FEAT1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 30, "AUTH.REGISTER_CHOICE.USER_FEAT2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 32, "AUTH.REGISTER_CHOICE.USER_FEAT3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 34, "AUTH.REGISTER_CHOICE.USER_FEAT4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 36, "AUTH.REGISTER_CHOICE.USER_FEAT5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(39, 38, "AUTH.REGISTER_CHOICE.USER_BTN"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(45, 40, "AUTH.REGISTER_CHOICE.PRO_SUBTITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 42, "AUTH.REGISTER_CHOICE.PRO_DESC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 44, "AUTH.REGISTER_CHOICE.PRO_FEAT1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 46, "AUTH.REGISTER_CHOICE.PRO_FEAT2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 48, "AUTH.REGISTER_CHOICE.PRO_FEAT3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 50, "AUTH.REGISTER_CHOICE.PRO_FEAT4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 52, "AUTH.REGISTER_CHOICE.PRO_FEAT5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(67, 54, "AUTH.REGISTER_CHOICE.PRO_BTN"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 56, "AUTH.REGISTER_CHOICE.HAVE_ACCOUNT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 58, "AUTH.REGISTER_CHOICE.SIGN_IN"));
    }
  }, dependencies: [CommonModule, TranslateModule, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.register-choice-wrapper[_ngcontent-%COMP%] {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: #1f2937;\n  background: #fff;\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 12px;\n  line-height: 1.1;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.95;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.registration-options[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 40px;\n  margin-bottom: 40px;\n}\n.option-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px 32px;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border: 2px solid transparent;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.25s,\n    box-shadow 0.25s,\n    border-color 0.25s;\n}\n.option-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n  border-color: #667eea;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.card-icon.user-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);\n}\n.card-icon.pro-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  box-shadow: 0 6px 16px rgba(118, 75, 162, 0.3);\n}\n.option-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #1f2937;\n}\n.card-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n  margin: 0 0 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.pro-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  color: #764ba2;\n}\n.card-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.65;\n  margin-bottom: 24px;\n}\n.features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 32px;\n  flex: 1;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4b5563;\n  padding: 7px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  font-weight: 700;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.pro-card[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  color: #764ba2;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 13px 28px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  font-family: inherit;\n  text-align: center;\n  min-height: 48px;\n  transition: transform 0.15s, box-shadow 0.15s;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-secondary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.3);\n}\n.info-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.login-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: #6b7280;\n}\n.login-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 48px 16px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .registration-options[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .options-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin-bottom: 20px;\n  }\n  .option-card[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n  .option-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 36px 12px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .registration-options[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .option-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .card-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 22px;\n    margin-bottom: 16px;\n  }\n  .option-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n}\n/*# sourceMappingURL=register-choice.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterChoiceComponent, [{
    type: Component,
    args: [{ selector: "app-register-choice", standalone: true, imports: [CommonModule, TranslateModule], template: `<div class="register-choice-wrapper">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>{{ 'AUTH.REGISTER_CHOICE.HERO_TITLE' | translate }}</h1>
      <p>{{ 'AUTH.REGISTER_CHOICE.HERO_SUB' | translate }}</p>
    </div>
  </section>

  <!-- Registration Options -->
  <section class="registration-options">
    <div class="container">
      <div class="options-grid">
        <!-- Register as User -->
        <div class="option-card user-card">
          <div class="card-icon user-icon">U</div>
          <h2>{{ 'AUTH.REGISTER_CHOICE.USER_SUBTITLE' | translate }}</h2>
          <p class="card-description">{{ 'AUTH.REGISTER_CHOICE.USER_DESC' | translate }}</p>
          <ul class="features-list">
            <li>{{ 'AUTH.REGISTER_CHOICE.USER_FEAT1' | translate }}</li>
            <li>{{ 'AUTH.REGISTER_CHOICE.USER_FEAT2' | translate }}</li>
            <li>{{ 'AUTH.REGISTER_CHOICE.USER_FEAT3' | translate }}</li>
            <li>{{ 'AUTH.REGISTER_CHOICE.USER_FEAT4' | translate }}</li>
            <li>{{ 'AUTH.REGISTER_CHOICE.USER_FEAT5' | translate }}</li>
          </ul>
          <button class="btn-primary" (click)="navigateTo('/auth/register/user')">
            {{ 'AUTH.REGISTER_CHOICE.USER_BTN' | translate }}
          </button>
        </div>

        <!-- Register as Professional -->
        <div class="option-card pro-card">
          <div class="card-icon pro-icon">P</div>
          <h2>{{ 'AUTH.REGISTER_CHOICE.PRO_SUBTITLE' | translate }}</h2>
          <p class="card-description">{{ 'AUTH.REGISTER_CHOICE.PRO_DESC' | translate }}</p>
          <ul class="features-list">
            <li>{{ 'AUTH.REGISTER_CHOICE.PRO_FEAT1' | translate }}</li>
            <li>{{ 'AUTH.REGISTER_CHOICE.PRO_FEAT2' | translate }}</li>
            <li>{{ 'AUTH.REGISTER_CHOICE.PRO_FEAT3' | translate }}</li>
            <li>{{ 'AUTH.REGISTER_CHOICE.PRO_FEAT4' | translate }}</li>
            <li>{{ 'AUTH.REGISTER_CHOICE.PRO_FEAT5' | translate }}</li>
          </ul>
          <button class="btn-secondary" (click)="navigateTo('/auth/register/pro')">
            {{ 'AUTH.REGISTER_CHOICE.PRO_BTN' | translate }}
          </button>
        </div>
      </div>

      <!-- Info Section -->
      <div class="info-section">
        <div class="login-links">
          <p>
            {{ 'AUTH.REGISTER_CHOICE.HAVE_ACCOUNT' | translate }}
            <a href="javascript:void(0)" (click)="navigateTo('/auth/login')">{{ 'AUTH.REGISTER_CHOICE.SIGN_IN' | translate }}</a>
          </p>
        </div>
      </div>
    </div>
  </section>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/auth/register-choice/register-choice.scss */\n.register-choice-wrapper {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: #1f2937;\n  background: #fff;\n}\n.hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 12px;\n  line-height: 1.1;\n}\n.hero-content p {\n  font-size: 20px;\n  opacity: 0.95;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.registration-options {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.options-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 40px;\n  margin-bottom: 40px;\n}\n.option-card {\n  background: white;\n  padding: 40px 32px;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border: 2px solid transparent;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.25s,\n    box-shadow 0.25s,\n    border-color 0.25s;\n}\n.option-card:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n  border-color: #667eea;\n}\n.card-icon {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.card-icon.user-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);\n}\n.card-icon.pro-icon {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  box-shadow: 0 6px 16px rgba(118, 75, 162, 0.3);\n}\n.option-card h2 {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #1f2937;\n}\n.card-subtitle {\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n  margin: 0 0 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.pro-card .card-subtitle {\n  color: #764ba2;\n}\n.card-description {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.65;\n  margin-bottom: 24px;\n}\n.features-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 32px;\n  flex: 1;\n}\n.features-list li {\n  font-size: 14px;\n  color: #4b5563;\n  padding: 7px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.features-list li:last-child {\n  border-bottom: none;\n}\n.features-list li::before {\n  content: "\\2713";\n  font-weight: 700;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.pro-card .features-list li::before {\n  color: #764ba2;\n}\n.btn-primary,\n.btn-secondary {\n  padding: 13px 28px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  font-family: inherit;\n  text-align: center;\n  min-height: 48px;\n  transition: transform 0.15s, box-shadow 0.15s;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.btn-primary:hover,\n.btn-secondary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-secondary {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n}\n.btn-secondary:hover {\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.3);\n}\n.info-section {\n  text-align: center;\n  padding: 28px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.login-links p {\n  margin: 0;\n  font-size: 15px;\n  color: #6b7280;\n}\n.login-links p a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-links p a:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .hero {\n    padding: 48px 16px;\n  }\n  .hero-content h1 {\n    font-size: 32px;\n  }\n  .hero-content p {\n    font-size: 16px;\n  }\n  .registration-options {\n    padding: 40px 16px;\n  }\n  .options-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin-bottom: 20px;\n  }\n  .option-card {\n    padding: 28px 24px;\n  }\n  .option-card:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  }\n  .btn-primary,\n  .btn-secondary {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .hero {\n    padding: 36px 12px;\n  }\n  .hero-content h1 {\n    font-size: 26px;\n  }\n  .hero-content p {\n    font-size: 14px;\n  }\n  .registration-options {\n    padding: 28px 12px;\n  }\n  .option-card {\n    padding: 24px 16px;\n  }\n  .card-icon {\n    width: 60px;\n    height: 60px;\n    font-size: 22px;\n    margin-bottom: 16px;\n  }\n  .option-card h2 {\n    font-size: 19px;\n  }\n}\n/*# sourceMappingURL=register-choice.css.map */\n'] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterChoiceComponent, { className: "RegisterChoiceComponent", filePath: "src/app/auth/register-choice/register-choice.ts", lineNumber: 13 });
})();

// src/app/auth/verify/verify.ts
var VerifyComponent = class _VerifyComponent {
  static \u0275fac = function VerifyComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerifyComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VerifyComponent, selectors: [["app-verify"]], decls: 2, vars: 0, template: function VerifyComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "p");
      \u0275\u0275text(1, "verify works!");
      \u0275\u0275domElementEnd();
    }
  }, encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerifyComponent, [{
    type: Component,
    args: [{ selector: "app-verify", imports: [], template: "<p>verify works!</p>\r\n" }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VerifyComponent, { className: "VerifyComponent", filePath: "src/app/auth/verify/verify.ts", lineNumber: 9 });
})();

// src/app/auth/callback/callback.component.ts
var CallbackComponent = class _CallbackComponent {
  router;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(["/"]);
    }, 3e3);
  }
  static \u0275fac = function CallbackComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CallbackComponent)(\u0275\u0275directiveInject(Router));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CallbackComponent, selectors: [["app-callback"]], decls: 4, vars: 0, consts: [[1, "callback-container"], [1, "spinner"]], template: function CallbackComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275domElement(1, "div", 1);
      \u0275\u0275domElementStart(2, "p");
      \u0275\u0275text(3, "Completing sign-in...");
      \u0275\u0275domElementEnd()();
    }
  }, dependencies: [CommonModule], styles: ["\n\n.callback-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 18px;\n}\n.spinner[_ngcontent-%COMP%] {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  border-top: 4px solid white;\n  width: 40px;\n  height: 40px;\n  animation: _ngcontent-%COMP%_spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=callback.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CallbackComponent, [{
    type: Component,
    args: [{ selector: "app-callback", standalone: true, imports: [CommonModule], template: `
    <div class="callback-container">
      <div class="spinner"></div>
      <p>Completing sign-in...</p>
    </div>
  `, styles: ["/* angular:styles/component:scss;4444f7176f5148cde93432593a125835a6735712bf7908d561dc30f2cdfd13d4;C:/repos/yProHub/prohub-ui/src/app/auth/callback/callback.component.ts */\n.callback-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  font-size: 18px;\n}\n.spinner {\n  border: 4px solid rgba(255, 255, 255, 0.3);\n  border-radius: 50%;\n  border-top: 4px solid white;\n  width: 40px;\n  height: 40px;\n  animation: spin 1s linear infinite;\n  margin-bottom: 20px;\n}\n@keyframes spin {\n  0% {\n    transform: rotate(0deg);\n  }\n  100% {\n    transform: rotate(360deg);\n  }\n}\n/*# sourceMappingURL=callback.component.css.map */\n"] }]
  }], () => [{ type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CallbackComponent, { className: "CallbackComponent", filePath: "src/app/auth/callback/callback.component.ts", lineNumber: 43 });
})();

// src/app/auth/forgot-password/forgot-password.ts
function ForgotPasswordComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 9)(3, "a", 10);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "AUTH.FORGOT.BACK_TO_LOGIN"));
  }
}
function ForgotPasswordComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ForgotPasswordComponent_form_10_small_20_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.FORGOT.EMAIL_REQUIRED"));
  }
}
function ForgotPasswordComponent_form_10_small_20_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.FORGOT.EMAIL_INVALID"));
  }
}
function ForgotPasswordComponent_form_10_small_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 20);
    \u0275\u0275template(1, ForgotPasswordComponent_form_10_small_20_span_1_Template, 3, 3, "span", 21)(2, ForgotPasswordComponent_form_10_small_20_span_2_Template, 3, 3, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailField_r4 = \u0275\u0275reference(18);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r4.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r4.hasError("email"));
  }
}
function ForgotPasswordComponent_form_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12, 0);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_10_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const fpForm_r3 = \u0275\u0275reference(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit(fpForm_r3));
    });
    \u0275\u0275elementStart(2, "div", 13)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14)(7, "button", 15);
    \u0275\u0275listener("click", function ForgotPasswordComponent_form_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.userType = "User");
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 15);
    \u0275\u0275listener("click", function ForgotPasswordComponent_form_10_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.userType = "Pro");
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 13)(14, "label", 16);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 17, 1);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_form_10_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, ForgotPasswordComponent_form_10_small_20_Template, 3, 2, "small", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 19);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p", 9)(26, "a", 10);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fpForm_r3 = \u0275\u0275reference(1);
    const emailField_r4 = \u0275\u0275reference(18);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 16, "AUTH.FORGOT.ACCOUNT_TYPE"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.userType === "User");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 18, "AUTH.FORGOT.CUSTOMER"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.userType === "Pro");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 20, "AUTH.FORGOT.PROFESSIONAL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 22, "AUTH.FORGOT.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", emailField_r4.invalid && (emailField_r4.dirty || emailField_r4.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.email);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 24, "AUTH.FORGOT.EMAIL_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", emailField_r4.invalid && (emailField_r4.dirty || emailField_r4.touched));
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !fpForm_r3.valid || ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? \u0275\u0275pipeBind1(23, 26, "AUTH.FORGOT.SENDING") : \u0275\u0275pipeBind1(24, 28, "AUTH.FORGOT.SEND"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 30, "AUTH.FORGOT.BACK_TO_LOGIN"));
  }
}
var ForgotPasswordComponent = class _ForgotPasswordComponent {
  api;
  email = "";
  userType = "User";
  isLoading = false;
  successMessage = "";
  errorMessage = "";
  constructor(api) {
    this.api = api;
  }
  onSubmit(form) {
    if (!form.valid)
      return;
    this.isLoading = true;
    this.successMessage = "";
    this.errorMessage = "";
    this.api.post("auth/forgot-password", {
      email: this.email,
      userType: this.userType
    }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMessage = res?.message ?? "If an account with that email exists, you will receive a reset link.";
      },
      error: () => {
        this.isLoading = false;
        this.successMessage = "If an account with that email exists, you will receive a reset link.";
      }
    });
  }
  static \u0275fac = function ForgotPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ForgotPasswordComponent)(\u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 11, vars: 9, consts: [["fpForm", "ngForm"], ["emailField", "ngModel"], [1, "fp-wrapper"], [1, "fp-card"], [1, "subtitle"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-success"], [1, "back-link"], ["routerLink", "/auth/login"], [1, "alert", "alert-error"], [3, "ngSubmit"], [1, "form-group"], [1, "type-buttons"], ["type", "button", 1, "type-btn", 3, "click"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "field-error", 4, "ngIf"], ["type", "submit", 1, "submit-btn", 3, "disabled"], [1, "field-error"], [4, "ngIf"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 4);
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(8, ForgotPasswordComponent_div_8_Template, 6, 4, "div", 5)(9, ForgotPasswordComponent_div_9_Template, 2, 1, "div", 6)(10, ForgotPasswordComponent_form_10_Template, 29, 32, "form", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 5, "AUTH.FORGOT.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 7, "AUTH.FORGOT.SUBTITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.successMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, EmailValidator, NgModel, NgForm, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.fp-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  font-family: Arial, sans-serif;\n}\n.fp-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n.fp-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #333;\n}\n.fp-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 24px;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: left;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  text-align: left;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #444;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.type-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #555;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.type-btn.active[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #667eea;\n  color: #fff;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: opacity 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 14px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=forgot-password.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `<div class="fp-wrapper">
  <div class="fp-card">
    <h2>{{ 'AUTH.FORGOT.TITLE' | translate }}</h2>
    <p class="subtitle">{{ 'AUTH.FORGOT.SUBTITLE' | translate }}</p>

    <div *ngIf="successMessage" class="alert alert-success">
      {{ successMessage }}
      <div class="back-link"><a routerLink="/auth/login">{{ 'AUTH.FORGOT.BACK_TO_LOGIN' | translate }}</a></div>
    </div>

    <div *ngIf="errorMessage" class="alert alert-error">{{ errorMessage }}</div>

    <form *ngIf="!successMessage" #fpForm="ngForm" (ngSubmit)="onSubmit(fpForm)">
      <div class="form-group">
        <label>{{ 'AUTH.FORGOT.ACCOUNT_TYPE' | translate }}</label>
        <div class="type-buttons">
          <button type="button" class="type-btn" [class.active]="userType === 'User'" (click)="userType = 'User'">{{ 'AUTH.FORGOT.CUSTOMER' | translate }}</button>
          <button type="button" class="type-btn" [class.active]="userType === 'Pro'" (click)="userType = 'Pro'">{{ 'AUTH.FORGOT.PROFESSIONAL' | translate }}</button>
        </div>
      </div>

      <div class="form-group">
        <label for="email">{{ 'AUTH.FORGOT.EMAIL' | translate }}</label>
        <input
          type="email"
          id="email"
          name="email"
          #emailField="ngModel"
          [class.is-invalid]="emailField.invalid && (emailField.dirty || emailField.touched)"
          [(ngModel)]="email"
          required
          email
          [placeholder]="'AUTH.FORGOT.EMAIL_PLACEHOLDER' | translate"
        />
        <small class="field-error" *ngIf="emailField.invalid && (emailField.dirty || emailField.touched)">
          <span *ngIf="emailField.hasError('required')">{{ 'AUTH.FORGOT.EMAIL_REQUIRED' | translate }}</span>
          <span *ngIf="emailField.hasError('email')">{{ 'AUTH.FORGOT.EMAIL_INVALID' | translate }}</span>
        </small>
      </div>

      <button type="submit" [disabled]="!fpForm.valid || isLoading" class="submit-btn">
        {{ isLoading ? ('AUTH.FORGOT.SENDING' | translate) : ('AUTH.FORGOT.SEND' | translate) }}
      </button>

      <p class="back-link"><a routerLink="/auth/login">{{ 'AUTH.FORGOT.BACK_TO_LOGIN' | translate }}</a></p>
    </form>
  </div>
</div>
`, styles: ["/* src/app/auth/forgot-password/forgot-password.scss */\n.fp-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  font-family: Arial, sans-serif;\n}\n.fp-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n.fp-card h2 {\n  margin-bottom: 8px;\n  color: #333;\n}\n.fp-card .subtitle {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 24px;\n}\n.alert {\n  padding: 14px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: left;\n}\n.alert.alert-success {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.alert.alert-error {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.form-group {\n  margin-bottom: 18px;\n  text-align: left;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #444;\n  font-size: 14px;\n}\n.form-group input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.form-group input.is-invalid {\n  border-color: #ef4444;\n}\n.form-group input.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.type-buttons {\n  display: flex;\n  gap: 10px;\n}\n.type-btn {\n  flex: 1;\n  padding: 9px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #555;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.type-btn.active {\n  border-color: #667eea;\n  background: #667eea;\n  color: #fff;\n}\n.submit-btn {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: opacity 0.2s;\n}\n.submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.back-link {\n  margin-top: 16px;\n  font-size: 14px;\n}\n.back-link a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.back-link a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=forgot-password.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.ts", lineNumber: 14 });
})();

// src/app/auth/reset-password/reset-password.ts
function ResetPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "AUTH.RESET.REDIRECTING"));
  }
}
function ResetPasswordComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 11)(3, "a", 12);
    \u0275\u0275text(4, "Request a new reset link");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ResetPasswordComponent_form_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ResetPasswordComponent_form_7_small_10_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.RESET.NEW_PASSWORD_REQUIRED"));
  }
}
function ResetPasswordComponent_form_7_small_10_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.RESET.NEW_PASSWORD_MIN"));
  }
}
function ResetPasswordComponent_form_7_small_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275template(1, ResetPasswordComponent_form_7_small_10_span_1_Template, 3, 3, "span", 23)(2, ResetPasswordComponent_form_7_small_10_span_2_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const newPwField_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", newPwField_r4.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", newPwField_r4.hasError("minlength"));
  }
}
function ResetPasswordComponent_form_7_small_18_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.RESET.CONFIRM_REQUIRED"));
  }
}
function ResetPasswordComponent_form_7_small_18_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.RESET.NEW_PASSWORD_MIN"));
  }
}
function ResetPasswordComponent_form_7_small_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275template(1, ResetPasswordComponent_form_7_small_18_span_1_Template, 3, 3, "span", 23)(2, ResetPasswordComponent_form_7_small_18_span_2_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const confirmPwField_r5 = \u0275\u0275reference(16);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", confirmPwField_r5.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", confirmPwField_r5.hasError("minlength"));
  }
}
function ResetPasswordComponent_form_7_small_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.RESET.MISMATCH"), " ");
  }
}
function ResetPasswordComponent_form_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 13, 0);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_form_7_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const rpForm_r3 = \u0275\u0275reference(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit(rpForm_r3));
    });
    \u0275\u0275template(2, ResetPasswordComponent_form_7_div_2_Template, 2, 1, "div", 6);
    \u0275\u0275elementStart(3, "div", 14)(4, "label", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "input", 16, 1);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_form_7_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPassword, $event) || (ctx_r0.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, ResetPasswordComponent_form_7_small_10_Template, 3, 2, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 14)(12, "label", 18);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 19, 2);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_form_7_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.confirmPassword, $event) || (ctx_r0.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(18, ResetPasswordComponent_form_7_small_18_Template, 3, 2, "small", 17)(19, ResetPasswordComponent_form_7_small_19_Template, 3, 3, "small", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "p", 11)(25, "a", 21);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rpForm_r3 = \u0275\u0275reference(1);
    const newPwField_r4 = \u0275\u0275reference(8);
    const confirmPwField_r5 = \u0275\u0275reference(16);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 17, "AUTH.RESET.NEW_PASSWORD"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", newPwField_r4.invalid && (newPwField_r4.dirty || newPwField_r4.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPassword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(9, 19, "AUTH.RESET.NEW_PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", newPwField_r4.invalid && (newPwField_r4.dirty || newPwField_r4.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 21, "AUTH.RESET.CONFIRM"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("is-invalid", confirmPwField_r5.invalid && (confirmPwField_r5.dirty || confirmPwField_r5.touched) || confirmPwField_r5.dirty && ctx_r0.newPassword !== ctx_r0.confirmPassword);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.confirmPassword);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(17, 23, "AUTH.RESET.CONFIRM_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", confirmPwField_r5.invalid && (confirmPwField_r5.dirty || confirmPwField_r5.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", confirmPwField_r5.dirty && !confirmPwField_r5.hasError("required") && ctx_r0.newPassword !== ctx_r0.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !rpForm_r3.valid || ctx_r0.isLoading || ctx_r0.newPassword !== ctx_r0.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? \u0275\u0275pipeBind1(22, 25, "AUTH.RESET.SAVING") : \u0275\u0275pipeBind1(23, 27, "AUTH.RESET.SET"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 29, "AUTH.RESET.BACK_TO_LOGIN"));
  }
}
var ResetPasswordComponent = class _ResetPasswordComponent {
  route;
  router;
  api;
  token = "";
  userType = "";
  newPassword = "";
  confirmPassword = "";
  isLoading = false;
  successMessage = "";
  errorMessage = "";
  constructor(route, router, api) {
    this.route = route;
    this.router = router;
    this.api = api;
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") ?? "";
    this.userType = this.route.snapshot.queryParamMap.get("userType") ?? "User";
    if (!this.token) {
      this.errorMessage = "Invalid reset link. Please request a new one.";
    }
  }
  onSubmit(form) {
    if (!form.valid)
      return;
    if (this.newPassword !== this.confirmPassword) {
      this.errorMessage = "Passwords do not match.";
      return;
    }
    this.isLoading = true;
    this.errorMessage = "";
    this.api.post("auth/reset-password", {
      token: this.token,
      newPassword: this.newPassword
    }).subscribe({
      next: (res) => {
        this.isLoading = false;
        this.successMessage = res?.message ?? "Password reset successfully.";
        setTimeout(() => this.router.navigate(["/auth/login"]), 2500);
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = err?.error?.message ?? "Invalid or expired reset token. Please request a new link.";
      }
    });
  }
  static \u0275fac = function ResetPasswordComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ResetPasswordComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ApiService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 8, vars: 6, consts: [["rpForm", "ngForm"], ["newPwField", "ngModel"], ["confirmPwField", "ngModel"], [1, "rp-wrapper"], [1, "rp-card"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-success"], [1, "sub-note"], [1, "alert", "alert-error"], [1, "back-link"], ["routerLink", "/auth/forgot-password"], [3, "ngSubmit"], [1, "form-group"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "required", "", "minlength", "8", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "field-error", 4, "ngIf"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "required", "", "minlength", "8", 3, "ngModelChange", "ngModel", "placeholder"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["routerLink", "/auth/login"], [1, "field-error"], [4, "ngIf"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h2");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(5, ResetPasswordComponent_div_5_Template, 5, 4, "div", 5)(6, ResetPasswordComponent_div_6_Template, 5, 1, "div", 6)(7, ResetPasswordComponent_form_7_Template, 28, 31, "form", 7);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "AUTH.RESET.TITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.token);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.token && !ctx.successMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterModule, RouterLink, TranslateModule, TranslatePipe], styles: ["\n\n.rp-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  font-family: Arial, sans-serif;\n}\n.rp-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n.rp-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  color: #333;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: left;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.alert[_ngcontent-%COMP%]   .sub-note[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 13px;\n  opacity: 0.8;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  text-align: left;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #444;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-group[_ngcontent-%COMP%]   input.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: opacity 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 14px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=reset-password.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `<div class="rp-wrapper">
  <div class="rp-card">
    <h2>{{ 'AUTH.RESET.TITLE' | translate }}</h2>

    <div *ngIf="successMessage" class="alert alert-success">
      {{ successMessage }}
      <div class="sub-note">{{ 'AUTH.RESET.REDIRECTING' | translate }}</div>
    </div>

    <div *ngIf="errorMessage && !token" class="alert alert-error">
      {{ errorMessage }}
      <div class="back-link"><a routerLink="/auth/forgot-password">Request a new reset link</a></div>
    </div>

    <form *ngIf="token && !successMessage" #rpForm="ngForm" (ngSubmit)="onSubmit(rpForm)">
      <div *ngIf="errorMessage" class="alert alert-error">{{ errorMessage }}</div>

      <div class="form-group">
        <label for="newPassword">{{ 'AUTH.RESET.NEW_PASSWORD' | translate }}</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          #newPwField="ngModel"
          [class.is-invalid]="newPwField.invalid && (newPwField.dirty || newPwField.touched)"
          [(ngModel)]="newPassword"
          required
          minlength="8"
          [placeholder]="'AUTH.RESET.NEW_PASSWORD_PLACEHOLDER' | translate"
        />
        <small class="field-error" *ngIf="newPwField.invalid && (newPwField.dirty || newPwField.touched)">
          <span *ngIf="newPwField.hasError('required')">{{ 'AUTH.RESET.NEW_PASSWORD_REQUIRED' | translate }}</span>
          <span *ngIf="newPwField.hasError('minlength')">{{ 'AUTH.RESET.NEW_PASSWORD_MIN' | translate }}</span>
        </small>
      </div>

      <div class="form-group">
        <label for="confirmPassword">{{ 'AUTH.RESET.CONFIRM' | translate }}</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          #confirmPwField="ngModel"
          [class.is-invalid]="(confirmPwField.invalid && (confirmPwField.dirty || confirmPwField.touched)) || (confirmPwField.dirty && newPassword !== confirmPassword)"
          [(ngModel)]="confirmPassword"
          required
          minlength="8"
          [placeholder]="'AUTH.RESET.CONFIRM_PLACEHOLDER' | translate"
        />
        <small class="field-error" *ngIf="confirmPwField.invalid && (confirmPwField.dirty || confirmPwField.touched)">
          <span *ngIf="confirmPwField.hasError('required')">{{ 'AUTH.RESET.CONFIRM_REQUIRED' | translate }}</span>
          <span *ngIf="confirmPwField.hasError('minlength')">{{ 'AUTH.RESET.NEW_PASSWORD_MIN' | translate }}</span>
        </small>
        <small class="field-error" *ngIf="confirmPwField.dirty && !confirmPwField.hasError('required') && newPassword !== confirmPassword">
          {{ 'AUTH.RESET.MISMATCH' | translate }}
        </small>
      </div>

      <button type="submit" [disabled]="!rpForm.valid || isLoading || newPassword !== confirmPassword" class="submit-btn">
        {{ isLoading ? ('AUTH.RESET.SAVING' | translate) : ('AUTH.RESET.SET' | translate) }}
      </button>

      <p class="back-link"><a routerLink="/auth/login">{{ 'AUTH.RESET.BACK_TO_LOGIN' | translate }}</a></p>
    </form>
  </div>
</div>
`, styles: ["/* src/app/auth/reset-password/reset-password.scss */\n.rp-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  font-family: Arial, sans-serif;\n}\n.rp-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n.rp-card h2 {\n  margin-bottom: 24px;\n  color: #333;\n}\n.alert {\n  padding: 14px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: left;\n}\n.alert.alert-success {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.alert.alert-error {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.alert .sub-note {\n  margin-top: 6px;\n  font-size: 13px;\n  opacity: 0.8;\n}\n.form-group {\n  margin-bottom: 18px;\n  text-align: left;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #444;\n  font-size: 14px;\n}\n.form-group input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.form-group input.is-invalid {\n  border-color: #ef4444;\n}\n.form-group input.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.submit-btn {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: opacity 0.2s;\n}\n.submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.back-link {\n  margin-top: 16px;\n  font-size: 14px;\n}\n.back-link a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.back-link a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=reset-password.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/auth/reset-password/reset-password.ts", lineNumber: 14 });
})();

// src/app/auth/auth-routing-module.ts
var routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterChoiceComponent },
  { path: "register/user", component: RegisterUserComponent },
  { path: "register/pro", component: RegisterProComponent },
  { path: "verify", component: VerifyComponent },
  { path: "callback", component: CallbackComponent },
  { path: "forgot-password", component: ForgotPasswordComponent },
  { path: "reset-password", component: ResetPasswordComponent }
];
var AuthRoutingModule = class _AuthRoutingModule {
  static \u0275fac = function AuthRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/auth/auth-module.ts
var AuthModule = class _AuthModule {
  static \u0275fac = function AuthModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AuthModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AuthRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        AuthRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AuthModule
};
//# sourceMappingURL=chunk-HGWLAGXE.js.map

