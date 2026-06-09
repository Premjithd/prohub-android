import {
  AddressService
} from "./chunk-XRCLEI6I.js";
import {
  DefaultValueAccessor,
  EmailValidator,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  PatternValidator,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-A6TK5TPK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ZGXDPMMN.js";
import {
  ApiService,
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
} from "./chunk-UQSUYH4V.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

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
  userType = "user";
  isLoading = false;
  errorMessage = "";
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
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
          this.router.navigate(["/admin-users"]);
        } else if (response.role === "Pro" && response.isProfileComplete === false) {
          this.router.navigate(["/auth/register/pro"]);
        } else {
          this.router.navigate(["/"]);
        }
      },
      error: (error) => {
        this.isLoading = false;
        this.errorMessage = error?.error?.message ?? "Login failed. Please try again.";
      }
    });
  }
  static \u0275fac = function LoginComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _LoginComponent)(\u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(Router));
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
  }], () => [{ type: Auth }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.ts", lineNumber: 14 });
})();

// src/app/auth/register/register.ts
var _c02 = ["addressInput"];
function RegisterUserComponent_small_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.FIRST_NAME_REQUIRED"), " ");
  }
}
function RegisterUserComponent_small_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.LAST_NAME_REQUIRED"), " ");
  }
}
function RegisterUserComponent_small_36_span_1_Template(rf, ctx) {
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
function RegisterUserComponent_small_36_span_2_Template(rf, ctx) {
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
function RegisterUserComponent_small_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275template(1, RegisterUserComponent_small_36_span_1_Template, 3, 3, "span", 57)(2, RegisterUserComponent_small_36_span_2_Template, 3, 3, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailField_r3 = \u0275\u0275reference(34);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r3.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r3.hasError("email"));
  }
}
function RegisterUserComponent_small_44_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.PHONE_REQUIRED"));
  }
}
function RegisterUserComponent_small_44_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.PHONE_INVALID"));
  }
}
function RegisterUserComponent_small_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275template(1, RegisterUserComponent_small_44_span_1_Template, 3, 3, "span", 57)(2, RegisterUserComponent_small_44_span_2_Template, 3, 3, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const phoneField_r4 = \u0275\u0275reference(42);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", phoneField_r4.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", phoneField_r4.hasError("pattern"));
  }
}
function RegisterUserComponent_small_52_span_1_Template(rf, ctx) {
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
function RegisterUserComponent_small_52_span_2_Template(rf, ctx) {
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
function RegisterUserComponent_small_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275template(1, RegisterUserComponent_small_52_span_1_Template, 3, 3, "span", 57)(2, RegisterUserComponent_small_52_span_2_Template, 3, 3, "span", 57);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordField_r5 = \u0275\u0275reference(50);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r5.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r5.hasError("minlength"));
  }
}
function RegisterUserComponent_div_67_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function RegisterUserComponent_div_67_div_1_Template_div_click_0_listener() {
      const prediction_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r7 = \u0275\u0275nextContext(2);
      const registerForm_r2 = \u0275\u0275reference(13);
      return \u0275\u0275resetView(ctx_r7.onAddressSelected(prediction_r7, registerForm_r2));
    });
    \u0275\u0275elementStart(1, "div", 61);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 62);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prediction_r7 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r7.mainText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r7.secondaryText);
  }
}
function RegisterUserComponent_div_67_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 58);
    \u0275\u0275template(1, RegisterUserComponent_div_67_div_1_Template, 5, 2, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r7.addressPredictions);
  }
}
function RegisterUserComponent_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 63);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.SEARCHING"));
  }
}
function RegisterUserComponent_small_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.HOUSE_REQUIRED"));
  }
}
function RegisterUserComponent_small_89_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.STREET1_REQUIRED"));
  }
}
function RegisterUserComponent_small_103_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.CITY_REQUIRED"));
  }
}
function RegisterUserComponent_small_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.STATE_REQUIRED"));
  }
}
function RegisterUserComponent_small_121_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.COUNTRY_REQUIRED"));
  }
}
function RegisterUserComponent_small_130_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 56);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER.ZIP_REQUIRED"));
  }
}
var RegisterUserComponent = class _RegisterUserComponent {
  auth;
  router;
  addressService;
  addressInput;
  addressPredictions = [];
  showAddressList = false;
  addressLoading = false;
  latitude = null;
  longitude = null;
  district = "";
  constructor(auth, router, addressService) {
    this.auth = auth;
    this.router = router;
    this.addressService = addressService;
  }
  onAddressInput(event, form) {
    const input = event.target.value;
    if (input && input.length >= 3) {
      this.addressLoading = true;
      this.addressService.getAddressPredictions(input).subscribe({
        next: (predictions) => {
          this.addressPredictions = predictions;
          this.showAddressList = predictions.length > 0;
          this.addressLoading = false;
        },
        error: () => {
          this.addressLoading = false;
          this.addressPredictions = [];
        }
      });
    } else {
      this.showAddressList = false;
      this.addressPredictions = [];
    }
  }
  onAddressSelected(prediction, form) {
    this.addressLoading = true;
    this.showAddressList = false;
    this.addressService.getAddressDetails(prediction.placeId).subscribe({
      next: (details) => {
        form.form.patchValue({
          houseNameNumber: details.houseNameNumber,
          street1: details.street1,
          street2: details.street2,
          city: details.city,
          state: details.state,
          country: details.country,
          zipPostalCode: details.zipPostalCode
        });
        this.latitude = details.latitude ?? null;
        this.longitude = details.longitude ?? null;
        this.district = details.district || "";
        if (this.addressInput) {
          this.addressInput.nativeElement.value = prediction.description;
        }
        this.addressLoading = false;
      },
      error: (error) => {
        console.error("Error fetching address details:", error);
        this.addressLoading = false;
      }
    });
  }
  hideAddressList() {
    setTimeout(() => {
      this.showAddressList = false;
    }, 200);
  }
  onSubmit(form) {
    if (form.valid) {
      const payload = __spreadProps(__spreadValues({}, form.value), { latitude: this.latitude, longitude: this.longitude, district: this.district });
      this.auth.registerUser(payload).subscribe({
        next: (response) => {
          console.log("User registration successful:", response);
          alert("User registered successfully!");
          this.router.navigate(["/"]);
        },
        error: (error) => {
          console.error("User registration failed:", error);
          alert("Registration failed. Please try again.");
        }
      });
    }
  }
  static \u0275fac = function RegisterUserComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterUserComponent)(\u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AddressService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterUserComponent, selectors: [["app-register-user"]], viewQuery: function RegisterUserComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c02, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressInput = _t.first);
    }
  }, decls: 134, vars: 102, consts: [["registerForm", "ngForm"], ["firstNameField", "ngModel"], ["lastNameField", "ngModel"], ["emailField", "ngModel"], ["phoneField", "ngModel"], ["passwordField", "ngModel"], ["addressInput", ""], ["houseField", "ngModel"], ["street1Field", "ngModel"], ["cityField", "ngModel"], ["stateField", "ngModel"], ["countryField", "ngModel"], ["zipField", "ngModel"], [1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "logo-circle"], [1, "header-text"], [1, "subtitle"], [3, "ngSubmit"], [1, "name-row"], [1, "form-group"], ["for", "FirstName"], ["type", "text", "id", "FirstName", "name", "FirstName", "ngModel", "", "required", "", 1, "form-control"], ["class", "field-error", 4, "ngIf"], ["for", "LastName"], ["type", "text", "id", "LastName", "name", "LastName", "ngModel", "", "required", "", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "name", "Email", "ngModel", "", "required", "", "email", "", 1, "form-control", 3, "placeholder"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "PhoneNumber", "ngModel", "", "required", "", "pattern", "^[0-9]{10}$", 1, "form-control", 3, "placeholder"], ["for", "password"], ["type", "password", "id", "password", "name", "Password", "ngModel", "", "required", "", "minlength", "6", 1, "form-control", 3, "placeholder"], [1, "address-section"], [1, "required"], ["for", "addressAutocomplete"], [1, "autocomplete-container"], ["type", "text", "id", "addressAutocomplete", "autocomplete", "off", 1, "form-control", 3, "input", "blur", "placeholder"], ["class", "address-dropdown", 4, "ngIf"], ["class", "address-loading", 4, "ngIf"], [1, "text-muted"], ["for", "houseNameNumber"], ["type", "text", "id", "houseNameNumber", "name", "houseNameNumber", "ngModel", "", "required", "", 1, "form-control"], ["for", "street1"], ["type", "text", "id", "street1", "name", "street1", "ngModel", "", "required", "", 1, "form-control"], ["for", "street2"], ["type", "text", "id", "street2", "name", "street2", 1, "form-control"], ["for", "city"], ["type", "text", "id", "city", "name", "city", "ngModel", "", "required", "", 1, "form-control"], ["for", "state"], ["type", "text", "id", "state", "name", "state", "ngModel", "", "required", "", 1, "form-control"], ["for", "country"], ["type", "text", "id", "country", "name", "country", "ngModel", "", "required", "", 1, "form-control"], ["for", "zipPostalCode"], ["type", "text", "id", "zipPostalCode", "name", "zipPostalCode", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "field-error"], [4, "ngIf"], [1, "address-dropdown"], ["class", "address-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "address-item", 3, "click"], [1, "address-main"], [1, "address-secondary"], [1, "address-loading"]], template: function RegisterUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "div", 15)(3, "div", 16);
      \u0275\u0275text(4, "U");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 17)(6, "h2");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "p", 18);
      \u0275\u0275text(10);
      \u0275\u0275pipe(11, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(12, "form", 19, 0);
      \u0275\u0275listener("ngSubmit", function RegisterUserComponent_Template_form_ngSubmit_12_listener() {
        \u0275\u0275restoreView(_r1);
        const registerForm_r2 = \u0275\u0275reference(13);
        return \u0275\u0275resetView(ctx.onSubmit(registerForm_r2));
      });
      \u0275\u0275elementStart(14, "div", 20)(15, "div", 21)(16, "label", 22);
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 23, 1);
      \u0275\u0275template(21, RegisterUserComponent_small_21_Template, 3, 3, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(22, "div", 21)(23, "label", 25);
      \u0275\u0275text(24);
      \u0275\u0275pipe(25, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(26, "input", 26, 2);
      \u0275\u0275template(28, RegisterUserComponent_small_28_Template, 3, 3, "small", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 21)(30, "label", 27);
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(33, "input", 28, 3);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275template(36, RegisterUserComponent_small_36_Template, 3, 2, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "div", 21)(38, "label", 29);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(41, "input", 30, 4);
      \u0275\u0275pipe(43, "translate");
      \u0275\u0275template(44, RegisterUserComponent_small_44_Template, 3, 2, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "div", 21)(46, "label", 31);
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(49, "input", 32, 5);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275template(52, RegisterUserComponent_small_52_Template, 3, 2, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 33)(54, "h3");
      \u0275\u0275text(55);
      \u0275\u0275pipe(56, "translate");
      \u0275\u0275elementStart(57, "span", 34);
      \u0275\u0275text(58, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 21)(60, "label", 35);
      \u0275\u0275text(61);
      \u0275\u0275pipe(62, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 36)(64, "input", 37, 6);
      \u0275\u0275pipe(66, "translate");
      \u0275\u0275listener("input", function RegisterUserComponent_Template_input_input_64_listener($event) {
        \u0275\u0275restoreView(_r1);
        const registerForm_r2 = \u0275\u0275reference(13);
        return \u0275\u0275resetView(ctx.onAddressInput($event, registerForm_r2));
      })("blur", function RegisterUserComponent_Template_input_blur_64_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.hideAddressList());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(67, RegisterUserComponent_div_67_Template, 2, 1, "div", 38)(68, RegisterUserComponent_div_68_Template, 3, 3, "div", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "small", 40);
      \u0275\u0275text(70);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(72, "div", 21)(73, "label", 41);
      \u0275\u0275text(74);
      \u0275\u0275pipe(75, "translate");
      \u0275\u0275elementStart(76, "span", 34);
      \u0275\u0275text(77, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(78, "input", 42, 7);
      \u0275\u0275template(80, RegisterUserComponent_small_80_Template, 3, 3, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 21)(82, "label", 43);
      \u0275\u0275text(83);
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementStart(85, "span", 34);
      \u0275\u0275text(86, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(87, "input", 44, 8);
      \u0275\u0275template(89, RegisterUserComponent_small_89_Template, 3, 3, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "div", 21)(91, "label", 45);
      \u0275\u0275text(92);
      \u0275\u0275pipe(93, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(94, "input", 46);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "div", 21)(96, "label", 47);
      \u0275\u0275text(97);
      \u0275\u0275pipe(98, "translate");
      \u0275\u0275elementStart(99, "span", 34);
      \u0275\u0275text(100, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(101, "input", 48, 9);
      \u0275\u0275template(103, RegisterUserComponent_small_103_Template, 3, 3, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 21)(105, "label", 49);
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementStart(108, "span", 34);
      \u0275\u0275text(109, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(110, "input", 50, 10);
      \u0275\u0275template(112, RegisterUserComponent_small_112_Template, 3, 3, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(113, "div", 21)(114, "label", 51);
      \u0275\u0275text(115);
      \u0275\u0275pipe(116, "translate");
      \u0275\u0275elementStart(117, "span", 34);
      \u0275\u0275text(118, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(119, "input", 52, 11);
      \u0275\u0275template(121, RegisterUserComponent_small_121_Template, 3, 3, "small", 24);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "div", 21)(123, "label", 53);
      \u0275\u0275text(124);
      \u0275\u0275pipe(125, "translate");
      \u0275\u0275elementStart(126, "span", 34);
      \u0275\u0275text(127, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(128, "input", 54, 12);
      \u0275\u0275template(130, RegisterUserComponent_small_130_Template, 3, 3, "small", 24);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "button", 55);
      \u0275\u0275text(132);
      \u0275\u0275pipe(133, "translate");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const registerForm_r2 = \u0275\u0275reference(13);
      const firstNameField_r9 = \u0275\u0275reference(20);
      const lastNameField_r10 = \u0275\u0275reference(27);
      const emailField_r3 = \u0275\u0275reference(34);
      const phoneField_r4 = \u0275\u0275reference(42);
      const passwordField_r5 = \u0275\u0275reference(50);
      const houseField_r11 = \u0275\u0275reference(79);
      const street1Field_r12 = \u0275\u0275reference(88);
      const cityField_r13 = \u0275\u0275reference(102);
      const stateField_r14 = \u0275\u0275reference(111);
      const countryField_r15 = \u0275\u0275reference(120);
      const zipField_r16 = \u0275\u0275reference(129);
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 58, "AUTH.REGISTER.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 60, "AUTH.REGISTER.SUBTITLE"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 62, "AUTH.REGISTER.FIRST_NAME"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", firstNameField_r9.invalid && (firstNameField_r9.dirty || firstNameField_r9.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", firstNameField_r9.invalid && (firstNameField_r9.dirty || firstNameField_r9.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 64, "AUTH.REGISTER.LAST_NAME"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", lastNameField_r10.invalid && (lastNameField_r10.dirty || lastNameField_r10.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", lastNameField_r10.invalid && (lastNameField_r10.dirty || lastNameField_r10.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 66, "AUTH.REGISTER.EMAIL"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", emailField_r3.invalid && (emailField_r3.dirty || emailField_r3.touched));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(35, 68, "AUTH.REGISTER.EMAIL_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", emailField_r3.invalid && (emailField_r3.dirty || emailField_r3.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 70, "AUTH.REGISTER.PHONE"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", phoneField_r4.invalid && (phoneField_r4.dirty || phoneField_r4.touched));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(43, 72, "AUTH.REGISTER.PHONE_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", phoneField_r4.invalid && (phoneField_r4.dirty || phoneField_r4.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 74, "AUTH.REGISTER.PASSWORD"));
      \u0275\u0275advance(2);
      \u0275\u0275classProp("is-invalid", passwordField_r5.invalid && (passwordField_r5.dirty || passwordField_r5.touched));
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(51, 76, "AUTH.REGISTER.PASSWORD_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", passwordField_r5.invalid && (passwordField_r5.dirty || passwordField_r5.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(56, 78, "AUTH.REGISTER.ADDRESS_TITLE"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 80, "AUTH.REGISTER.SEARCH_ADDRESS"));
      \u0275\u0275advance(3);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(66, 82, "AUTH.REGISTER.SEARCH_ADDRESS_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.showAddressList && ctx.addressPredictions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.addressLoading);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(71, 84, "COMMON.SEARCH_HINT"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(75, 86, "AUTH.REGISTER.HOUSE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", houseField_r11.invalid && (houseField_r11.dirty || houseField_r11.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", houseField_r11.invalid && (houseField_r11.dirty || houseField_r11.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(84, 88, "AUTH.REGISTER.STREET1"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", street1Field_r12.invalid && (street1Field_r12.dirty || street1Field_r12.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", street1Field_r12.invalid && (street1Field_r12.dirty || street1Field_r12.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 90, "AUTH.REGISTER.STREET2"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(98, 92, "AUTH.REGISTER.CITY"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", cityField_r13.invalid && (cityField_r13.dirty || cityField_r13.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", cityField_r13.invalid && (cityField_r13.dirty || cityField_r13.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(107, 94, "AUTH.REGISTER.STATE"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", stateField_r14.invalid && (stateField_r14.dirty || stateField_r14.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", stateField_r14.invalid && (stateField_r14.dirty || stateField_r14.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(116, 96, "AUTH.REGISTER.COUNTRY"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", countryField_r15.invalid && (countryField_r15.dirty || countryField_r15.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", countryField_r15.invalid && (countryField_r15.dirty || countryField_r15.touched));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(125, 98, "AUTH.REGISTER.ZIP"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275classProp("is-invalid", zipField_r16.invalid && (zipField_r16.dirty || zipField_r16.touched));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", zipField_r16.invalid && (zipField_r16.dirty || zipField_r16.touched));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", !registerForm_r2.valid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(133, 100, "AUTH.REGISTER.CREATE_ACCOUNT"), " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, PatternValidator, EmailValidator, NgModel, NgForm, RouterModule, TranslateModule, TranslatePipe], styles: ['\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.name-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.address-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1.5px solid #f3f4f6;\n}\n.address-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.address-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.address-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n  .name-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterUserComponent, [{
    type: Component,
    args: [{ selector: "app-register-user", imports: [CommonModule, FormsModule, RouterModule, TranslateModule], template: `<div class="register-container">
  <div class="register-card">
    <div class="register-header">
      <div class="logo-circle">U</div>
      <div class="header-text">
        <h2>{{ 'AUTH.REGISTER.TITLE' | translate }}</h2>
        <p class="subtitle">{{ 'AUTH.REGISTER.SUBTITLE' | translate }}</p>
      </div>
    </div>

    <form #registerForm="ngForm" (ngSubmit)="onSubmit(registerForm)">
      <div class="name-row">
        <div class="form-group">
          <label for="FirstName">{{ 'AUTH.REGISTER.FIRST_NAME' | translate }}</label>
          <input
            type="text"
            id="FirstName"
            name="FirstName"
            class="form-control"
            #firstNameField="ngModel"
            [class.is-invalid]="firstNameField.invalid && (firstNameField.dirty || firstNameField.touched)"
            ngModel
            required
          />
          <small class="field-error" *ngIf="firstNameField.invalid && (firstNameField.dirty || firstNameField.touched)">
            {{ 'AUTH.REGISTER.FIRST_NAME_REQUIRED' | translate }}
          </small>
        </div>
        <div class="form-group">
          <label for="LastName">{{ 'AUTH.REGISTER.LAST_NAME' | translate }}</label>
          <input
            type="text"
            id="LastName"
            name="LastName"
            class="form-control"
            #lastNameField="ngModel"
            [class.is-invalid]="lastNameField.invalid && (lastNameField.dirty || lastNameField.touched)"
            ngModel
            required
          />
          <small class="field-error" *ngIf="lastNameField.invalid && (lastNameField.dirty || lastNameField.touched)">
            {{ 'AUTH.REGISTER.LAST_NAME_REQUIRED' | translate }}
          </small>
        </div>
      </div>

      <div class="form-group">
        <label for="email">{{ 'AUTH.REGISTER.EMAIL' | translate }}</label>
        <input
          type="email"
          id="email"
          name="Email"
          class="form-control"
          #emailField="ngModel"
          [class.is-invalid]="emailField.invalid && (emailField.dirty || emailField.touched)"
          ngModel
          required
          email
          [placeholder]="'AUTH.REGISTER.EMAIL_PLACEHOLDER' | translate"
        />
        <small class="field-error" *ngIf="emailField.invalid && (emailField.dirty || emailField.touched)">
          <span *ngIf="emailField.hasError('required')">{{ 'AUTH.REGISTER.EMAIL_REQUIRED' | translate }}</span>
          <span *ngIf="emailField.hasError('email')">{{ 'AUTH.REGISTER.EMAIL_INVALID' | translate }}</span>
        </small>
      </div>

      <div class="form-group">
        <label for="phone">{{ 'AUTH.REGISTER.PHONE' | translate }}</label>
        <input
          type="tel"
          id="phone"
          name="PhoneNumber"
          class="form-control"
          #phoneField="ngModel"
          [class.is-invalid]="phoneField.invalid && (phoneField.dirty || phoneField.touched)"
          ngModel
          required
          pattern="^[0-9]{10}$"
          [placeholder]="'AUTH.REGISTER.PHONE_PLACEHOLDER' | translate"
        />
        <small class="field-error" *ngIf="phoneField.invalid && (phoneField.dirty || phoneField.touched)">
          <span *ngIf="phoneField.hasError('required')">{{ 'AUTH.REGISTER.PHONE_REQUIRED' | translate }}</span>
          <span *ngIf="phoneField.hasError('pattern')">{{ 'AUTH.REGISTER.PHONE_INVALID' | translate }}</span>
        </small>
      </div>

      <div class="form-group">
        <label for="password">{{ 'AUTH.REGISTER.PASSWORD' | translate }}</label>
        <input
          type="password"
          id="password"
          name="Password"
          class="form-control"
          #passwordField="ngModel"
          [class.is-invalid]="passwordField.invalid && (passwordField.dirty || passwordField.touched)"
          ngModel
          required
          minlength="6"
          [placeholder]="'AUTH.REGISTER.PASSWORD_PLACEHOLDER' | translate"
        />
        <small class="field-error" *ngIf="passwordField.invalid && (passwordField.dirty || passwordField.touched)">
          <span *ngIf="passwordField.hasError('required')">{{ 'AUTH.REGISTER.PASSWORD_REQUIRED' | translate }}</span>
          <span *ngIf="passwordField.hasError('minlength')">{{ 'AUTH.REGISTER.PASSWORD_MIN' | translate }}</span>
        </small>
      </div>

      <div class="address-section">
        <h3>{{ 'AUTH.REGISTER.ADDRESS_TITLE' | translate }} <span class="required">*</span></h3>

        <div class="form-group">
          <label for="addressAutocomplete">{{ 'AUTH.REGISTER.SEARCH_ADDRESS' | translate }}</label>
          <div class="autocomplete-container">
            <input
              #addressInput
              type="text"
              id="addressAutocomplete"
              class="form-control"
              [placeholder]="'AUTH.REGISTER.SEARCH_ADDRESS_PLACEHOLDER' | translate"
              (input)="onAddressInput($event, registerForm)"
              (blur)="hideAddressList()"
              autocomplete="off"
            />
            <div class="address-dropdown" *ngIf="showAddressList && addressPredictions.length > 0">
              <div
                *ngFor="let prediction of addressPredictions"
                class="address-item"
                (click)="onAddressSelected(prediction, registerForm)"
              >
                <div class="address-main">{{ prediction.mainText }}</div>
                <div class="address-secondary">{{ prediction.secondaryText }}</div>
              </div>
            </div>
            <div class="address-loading" *ngIf="addressLoading">{{ 'COMMON.SEARCHING' | translate }}</div>
          </div>
          <small class="text-muted">{{ 'COMMON.SEARCH_HINT' | translate }}</small>
        </div>

        <div class="form-group">
          <label for="houseNameNumber">{{ 'AUTH.REGISTER.HOUSE' | translate }} <span class="required">*</span></label>
          <input type="text" id="houseNameNumber" name="houseNameNumber" class="form-control"
            #houseField="ngModel" [class.is-invalid]="houseField.invalid && (houseField.dirty || houseField.touched)"
            ngModel required />
          <small class="field-error" *ngIf="houseField.invalid && (houseField.dirty || houseField.touched)">{{ 'AUTH.REGISTER.HOUSE_REQUIRED' | translate }}</small>
        </div>

        <div class="form-group">
          <label for="street1">{{ 'AUTH.REGISTER.STREET1' | translate }} <span class="required">*</span></label>
          <input type="text" id="street1" name="street1" class="form-control"
            #street1Field="ngModel" [class.is-invalid]="street1Field.invalid && (street1Field.dirty || street1Field.touched)"
            ngModel required />
          <small class="field-error" *ngIf="street1Field.invalid && (street1Field.dirty || street1Field.touched)">{{ 'AUTH.REGISTER.STREET1_REQUIRED' | translate }}</small>
        </div>

        <div class="form-group">
          <label for="street2">{{ 'AUTH.REGISTER.STREET2' | translate }}</label>
          <input type="text" id="street2" name="street2" class="form-control" />
        </div>

        <div class="form-group">
          <label for="city">{{ 'AUTH.REGISTER.CITY' | translate }} <span class="required">*</span></label>
          <input type="text" id="city" name="city" class="form-control"
            #cityField="ngModel" [class.is-invalid]="cityField.invalid && (cityField.dirty || cityField.touched)"
            ngModel required />
          <small class="field-error" *ngIf="cityField.invalid && (cityField.dirty || cityField.touched)">{{ 'AUTH.REGISTER.CITY_REQUIRED' | translate }}</small>
        </div>

        <div class="form-group">
          <label for="state">{{ 'AUTH.REGISTER.STATE' | translate }} <span class="required">*</span></label>
          <input type="text" id="state" name="state" class="form-control"
            #stateField="ngModel" [class.is-invalid]="stateField.invalid && (stateField.dirty || stateField.touched)"
            ngModel required />
          <small class="field-error" *ngIf="stateField.invalid && (stateField.dirty || stateField.touched)">{{ 'AUTH.REGISTER.STATE_REQUIRED' | translate }}</small>
        </div>

        <div class="form-group">
          <label for="country">{{ 'AUTH.REGISTER.COUNTRY' | translate }} <span class="required">*</span></label>
          <input type="text" id="country" name="country" class="form-control"
            #countryField="ngModel" [class.is-invalid]="countryField.invalid && (countryField.dirty || countryField.touched)"
            ngModel required />
          <small class="field-error" *ngIf="countryField.invalid && (countryField.dirty || countryField.touched)">{{ 'AUTH.REGISTER.COUNTRY_REQUIRED' | translate }}</small>
        </div>

        <div class="form-group">
          <label for="zipPostalCode">{{ 'AUTH.REGISTER.ZIP' | translate }} <span class="required">*</span></label>
          <input type="text" id="zipPostalCode" name="zipPostalCode" class="form-control"
            #zipField="ngModel" [class.is-invalid]="zipField.invalid && (zipField.dirty || zipField.touched)"
            ngModel required />
          <small class="field-error" *ngIf="zipField.invalid && (zipField.dirty || zipField.touched)">{{ 'AUTH.REGISTER.ZIP_REQUIRED' | translate }}</small>
        </div>
      </div>

      <button type="submit" class="btn-submit" [disabled]="!registerForm.valid">
        {{ 'AUTH.REGISTER.CREATE_ACCOUNT' | translate }}
      </button>
    </form>
  </div>
</div>
`, styles: ['/* src/app/auth/register/register.scss */\n.register-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.name-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required {\n  color: #ef4444;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid {\n  border-color: #ef4444;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.text-muted {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.address-section {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1.5px solid #f3f4f6;\n}\n.address-section h3 {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.autocomplete-container {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.address-item:last-child {\n  border-bottom: none;\n}\n.address-main {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container {\n    padding: 16px 12px;\n  }\n  .register-card {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n  .name-row {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: Router }, { type: AddressService }], { addressInput: [{
    type: ViewChild,
    args: ["addressInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterUserComponent, { className: "RegisterUserComponent", filePath: "src/app/auth/register/register.ts", lineNumber: 15 });
})();

// src/app/auth/register-pro/register-pro.ts
var _c03 = ["addressInput"];
function RegisterProComponent_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "1");
    \u0275\u0275elementEnd();
  }
}
function RegisterProComponent_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1, "\u2713");
    \u0275\u0275elementEnd();
  }
}
function RegisterProComponent_form_27_small_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.BUSINESS_NAME_REQUIRED"));
  }
}
function RegisterProComponent_form_27_small_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.FULL_NAME_REQUIRED"));
  }
}
function RegisterProComponent_form_27_small_31_span_1_Template(rf, ctx) {
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
function RegisterProComponent_form_27_small_31_span_2_Template(rf, ctx) {
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
function RegisterProComponent_form_27_small_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275template(1, RegisterProComponent_form_27_small_31_span_1_Template, 3, 3, "span", 23)(2, RegisterProComponent_form_27_small_31_span_2_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const emailField_r4 = \u0275\u0275reference(29);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r4.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", emailField_r4.hasError("email"));
  }
}
function RegisterProComponent_form_27_small_41_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.PHONE_REQUIRED"));
  }
}
function RegisterProComponent_form_27_small_41_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.PHONE_INVALID"));
  }
}
function RegisterProComponent_form_27_small_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275template(1, RegisterProComponent_form_27_small_41_span_1_Template, 3, 3, "span", 23)(2, RegisterProComponent_form_27_small_41_span_2_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const phoneField_r5 = \u0275\u0275reference(39);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", phoneField_r5.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", phoneField_r5.hasError("pattern"));
  }
}
function RegisterProComponent_form_27_small_51_span_1_Template(rf, ctx) {
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
function RegisterProComponent_form_27_small_51_span_2_Template(rf, ctx) {
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
function RegisterProComponent_form_27_small_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275template(1, RegisterProComponent_form_27_small_51_span_1_Template, 3, 3, "span", 23)(2, RegisterProComponent_form_27_small_51_span_2_Template, 3, 3, "span", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const passwordField_r6 = \u0275\u0275reference(49);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r6.hasError("required"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", passwordField_r6.hasError("minlength"));
  }
}
function RegisterProComponent_form_27_div_52_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 51);
    \u0275\u0275text(1, "Log in instead");
    \u0275\u0275elementEnd();
  }
}
function RegisterProComponent_form_27_div_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275template(2, RegisterProComponent_form_27_div_52_a_2_Template, 2, 0, "a", 50);
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
function RegisterProComponent_form_27_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 52);
    \u0275\u0275text(1, "\u2192");
    \u0275\u0275elementEnd();
  }
}
function RegisterProComponent_form_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 29, 0);
    \u0275\u0275listener("ngSubmit", function RegisterProComponent_form_27_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r1);
      const step1Form_r2 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStep1Next(step1Form_r2));
    });
    \u0275\u0275elementStart(2, "div", 30)(3, "label", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span", 32);
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 33, 1);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_27_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.businessName, $event) || (ctx_r2.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, RegisterProComponent_form_27_small_11_Template, 3, 3, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 30)(13, "label", 35);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementStart(16, "span", 32);
    \u0275\u0275text(17, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "input", 36, 2);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_27_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.name, $event) || (ctx_r2.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, RegisterProComponent_form_27_small_21_Template, 3, 3, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 30)(23, "label", 37);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span", 32);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 38, 3);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_27_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.email, $event) || (ctx_r2.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, RegisterProComponent_form_27_small_31_Template, 3, 2, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 30)(33, "label", 39);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementStart(36, "span", 32);
    \u0275\u0275text(37, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "input", 40, 4);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_27_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.phoneNumber, $event) || (ctx_r2.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, RegisterProComponent_form_27_small_41_Template, 3, 2, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 30)(43, "label", 41);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementStart(46, "span", 32);
    \u0275\u0275text(47, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(48, "input", 42, 5);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_27_Template_input_ngModelChange_48_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.password, $event) || (ctx_r2.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, RegisterProComponent_form_27_small_51_Template, 3, 2, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(52, RegisterProComponent_form_27_div_52_Template, 3, 2, "div", 43);
    \u0275\u0275elementStart(53, "button", 44);
    \u0275\u0275text(54);
    \u0275\u0275pipe(55, "translate");
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275template(57, RegisterProComponent_form_27_span_57_Template, 2, 0, "span", 45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p", 46);
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementStart(61, "a", 47);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step1Form_r2 = \u0275\u0275reference(1);
    const bizNameField_r7 = \u0275\u0275reference(9);
    const nameField_r8 = \u0275\u0275reference(19);
    const emailField_r4 = \u0275\u0275reference(29);
    const phoneField_r5 = \u0275\u0275reference(39);
    const passwordField_r6 = \u0275\u0275reference(49);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 36, "AUTH.REGISTER_PRO.BUSINESS_NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", bizNameField_r7.invalid && (bizNameField_r7.dirty || bizNameField_r7.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.businessName);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(10, 38, "AUTH.REGISTER_PRO.BUSINESS_NAME_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", bizNameField_r7.invalid && (bizNameField_r7.dirty || bizNameField_r7.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(15, 40, "AUTH.REGISTER_PRO.FULL_NAME"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", nameField_r8.invalid && (nameField_r8.dirty || nameField_r8.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.name);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(20, 42, "AUTH.REGISTER_PRO.FULL_NAME_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", nameField_r8.invalid && (nameField_r8.dirty || nameField_r8.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 44, "AUTH.REGISTER_PRO.EMAIL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", emailField_r4.invalid && (emailField_r4.dirty || emailField_r4.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.email);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(30, 46, "AUTH.REGISTER_PRO.EMAIL_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", emailField_r4.invalid && (emailField_r4.dirty || emailField_r4.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(35, 48, "AUTH.REGISTER_PRO.PHONE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", phoneField_r5.invalid && (phoneField_r5.dirty || phoneField_r5.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.phoneNumber);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(40, 50, "AUTH.REGISTER_PRO.PHONE_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", phoneField_r5.invalid && (phoneField_r5.dirty || phoneField_r5.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(45, 52, "AUTH.REGISTER_PRO.PASSWORD"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", passwordField_r6.invalid && (passwordField_r6.dirty || passwordField_r6.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.password);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(50, 54, "AUTH.REGISTER_PRO.PASSWORD_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", passwordField_r6.invalid && (passwordField_r6.dirty || passwordField_r6.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.step1Error);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !step1Form_r2.valid || ctx_r2.step1Loading || ctx_r2.step1ShowLoginLink);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.step1Loading ? \u0275\u0275pipeBind1(55, 56, "AUTH.REGISTER_PRO.SAVING") : \u0275\u0275pipeBind1(56, 58, "AUTH.REGISTER_PRO.NEXT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r2.step1Loading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(60, 60, "AUTH.REGISTER_PRO.HAVE_ACCOUNT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 62, "AUTH.REGISTER_PRO.SIGN_IN"));
  }
}
function RegisterProComponent_form_28_div_16_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 82);
    \u0275\u0275listener("mousedown", function RegisterProComponent_form_28_div_16_div_1_Template_div_mousedown_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      return \u0275\u0275resetView($event.preventDefault());
    })("click", function RegisterProComponent_form_28_div_16_div_1_Template_div_click_0_listener() {
      const prediction_r12 = \u0275\u0275restoreView(_r11).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.onAddressSelected(prediction_r12));
    });
    \u0275\u0275elementStart(1, "div", 83);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 84);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prediction_r12 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r12.mainText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r12.secondaryText);
  }
}
function RegisterProComponent_form_28_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 80);
    \u0275\u0275template(1, RegisterProComponent_form_28_div_16_div_1_Template, 5, 2, "div", 81);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.addressPredictions);
  }
}
function RegisterProComponent_form_28_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 85);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.SEARCHING"));
  }
}
function RegisterProComponent_form_28_small_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.STREET_REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.CITY_REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_82_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.STATE_REQUIRED"));
  }
}
function RegisterProComponent_form_28_small_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 48);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "AUTH.REGISTER_PRO.COUNTRY_REQUIRED"));
  }
}
function RegisterProComponent_form_28_div_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.step2Error);
  }
}
function RegisterProComponent_form_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 29, 6);
    \u0275\u0275listener("ngSubmit", function RegisterProComponent_form_28_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r9);
      const step2Form_r10 = \u0275\u0275reference(1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onStep2Submit(step2Form_r10));
    });
    \u0275\u0275elementStart(2, "div", 53)(3, "span", 54);
    \u0275\u0275text(4, "\u2713");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 30)(9, "label", 55);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 56)(13, "input", 57, 7);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275listener("input", function RegisterProComponent_form_28_Template_input_input_13_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onAddressInput($event));
    })("blur", function RegisterProComponent_form_28_Template_input_blur_13_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.hideAddressList());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, RegisterProComponent_form_28_div_16_Template, 2, 1, "div", 58)(17, RegisterProComponent_form_28_div_17_Template, 3, 3, "div", 59);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "small", 60);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 61)(22, "div", 30)(23, "label", 62);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementStart(26, "span", 32);
    \u0275\u0275text(27, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "input", 63, 8);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.houseNameNumber, $event) || (ctx_r2.houseNameNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, RegisterProComponent_form_28_small_30_Template, 3, 3, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 30)(32, "label", 64);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementStart(35, "span", 32);
    \u0275\u0275text(36, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "input", 65, 9);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_37_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.zipPostalCode, $event) || (ctx_r2.zipPostalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(39, RegisterProComponent_form_28_small_39_Template, 3, 3, "small", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(40, "div", 30)(41, "label", 66);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementStart(44, "span", 32);
    \u0275\u0275text(45, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "input", 67, 10);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.street1, $event) || (ctx_r2.street1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(49, RegisterProComponent_form_28_small_49_Template, 3, 3, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "div", 30)(51, "label", 68);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 69);
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.street2, $event) || (ctx_r2.street2 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 61)(56, "div", 30)(57, "label", 70);
    \u0275\u0275text(58);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275elementStart(60, "span", 32);
    \u0275\u0275text(61, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "input", 71, 11);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_62_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.city, $event) || (ctx_r2.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(65, RegisterProComponent_form_28_small_65_Template, 3, 3, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 30)(67, "label", 72);
    \u0275\u0275text(68);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "input", 73);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_70_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.district, $event) || (ctx_r2.district = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(72, "div", 61)(73, "div", 30)(74, "label", 74);
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementStart(77, "span", 32);
    \u0275\u0275text(78, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(79, "input", 75, 12);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_79_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.state, $event) || (ctx_r2.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(82, RegisterProComponent_form_28_small_82_Template, 3, 3, "small", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "div", 30)(84, "label", 76);
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "translate");
    \u0275\u0275elementStart(87, "span", 32);
    \u0275\u0275text(88, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(89, "input", 77, 13);
    \u0275\u0275pipe(91, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function RegisterProComponent_form_28_Template_input_ngModelChange_89_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.country, $event) || (ctx_r2.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(92, RegisterProComponent_form_28_small_92_Template, 3, 3, "small", 34);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(93, RegisterProComponent_form_28_div_93_Template, 2, 1, "div", 43);
    \u0275\u0275elementStart(94, "div", 78)(95, "button", 79);
    \u0275\u0275listener("click", function RegisterProComponent_form_28_Template_button_click_95_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.goBack());
    });
    \u0275\u0275text(96);
    \u0275\u0275pipe(97, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(98, "button", 44);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const step2Form_r10 = \u0275\u0275reference(1);
    const houseField_r13 = \u0275\u0275reference(29);
    const zipField_r14 = \u0275\u0275reference(38);
    const street1Field_r15 = \u0275\u0275reference(47);
    const cityField_r16 = \u0275\u0275reference(63);
    const stateField_r17 = \u0275\u0275reference(80);
    const countryField_r18 = \u0275\u0275reference(90);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 49, "AUTH.REGISTER_PRO.STEP2_BANNER"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 51, "AUTH.REGISTER_PRO.SEARCH_ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(15, 53, "AUTH.REGISTER_PRO.SEARCH_ADDRESS_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.showAddressList && ctx_r2.addressPredictions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.addressLoading);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 55, "AUTH.REGISTER_PRO.SEARCH_ADDRESS_HINT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(25, 57, "AUTH.REGISTER_PRO.HOUSE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", houseField_r13.invalid && (houseField_r13.dirty || houseField_r13.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.houseNameNumber);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", houseField_r13.invalid && (houseField_r13.dirty || houseField_r13.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(34, 59, "AUTH.REGISTER_PRO.ZIP"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", zipField_r14.invalid && (zipField_r14.dirty || zipField_r14.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.zipPostalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", zipField_r14.invalid && (zipField_r14.dirty || zipField_r14.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(43, 61, "AUTH.REGISTER_PRO.STREET"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", street1Field_r15.invalid && (street1Field_r15.dirty || street1Field_r15.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.street1);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(48, 63, "AUTH.REGISTER_PRO.STREET"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", street1Field_r15.invalid && (street1Field_r15.dirty || street1Field_r15.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 65, "AUTH.REGISTER_PRO.STREET2"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.street2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(59, 67, "AUTH.REGISTER_PRO.CITY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", cityField_r16.invalid && (cityField_r16.dirty || cityField_r16.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.city);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(64, 69, "AUTH.REGISTER_PRO.CITY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", cityField_r16.invalid && (cityField_r16.dirty || cityField_r16.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 71, "AUTH.REGISTER_PRO.DISTRICT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.district);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(71, 73, "AUTH.REGISTER_PRO.DISTRICT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(76, 75, "AUTH.REGISTER_PRO.STATE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", stateField_r17.invalid && (stateField_r17.dirty || stateField_r17.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.state);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(81, 77, "AUTH.REGISTER_PRO.STATE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", stateField_r17.invalid && (stateField_r17.dirty || stateField_r17.touched));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(86, 79, "AUTH.REGISTER_PRO.COUNTRY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("is-invalid", countryField_r18.invalid && (countryField_r18.dirty || countryField_r18.touched));
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.country);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(91, 81, "AUTH.REGISTER_PRO.COUNTRY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", countryField_r18.invalid && (countryField_r18.dirty || countryField_r18.touched));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.step2Error);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(97, 83, "AUTH.REGISTER_PRO.BACK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !step2Form_r10.valid || ctx_r2.step2Loading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.step2Loading ? \u0275\u0275pipeBind1(100, 85, "AUTH.REGISTER_PRO.CREATING") : \u0275\u0275pipeBind1(101, 87, "AUTH.REGISTER_PRO.COMPLETE"), " ");
  }
}
var RegisterProComponent = class _RegisterProComponent {
  auth;
  router;
  addressService;
  cdr;
  addressInput;
  // Step 1 fields
  businessName = "";
  name = "";
  email = "";
  phoneNumber = "";
  password = "";
  // Step 2 fields
  houseNameNumber = "";
  street1 = "";
  street2 = "";
  city = "";
  state = "";
  country = "";
  zipPostalCode = "";
  district = "";
  latitude = null;
  longitude = null;
  // Step state
  currentStep = 1;
  draftProId = null;
  step1Loading = false;
  step2Loading = false;
  step1Error = "";
  step2Error = "";
  step1ShowLoginLink = false;
  // Address autocomplete
  addressPredictions = [];
  showAddressList = false;
  addressLoading = false;
  addressSearch$ = new Subject();
  destroy$ = new Subject();
  constructor(auth, router, addressService, cdr) {
    this.auth = auth;
    this.router = router;
    this.addressService = addressService;
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
  onStep1Next(form) {
    if (!form.valid)
      return;
    if (this.draftProId !== null) {
      this.currentStep = 2;
      return;
    }
    this.step1Loading = true;
    this.step1Error = "";
    this.step1ShowLoginLink = false;
    this.auth.registerProStep1({
      Name: this.name,
      Email: this.email,
      Password: this.password,
      PhoneNumber: this.phoneNumber,
      BusinessName: this.businessName
    }).subscribe({
      next: (res) => {
        this.draftProId = res.proId;
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
    if (!form.valid || this.draftProId === null)
      return;
    this.step2Loading = true;
    this.step2Error = "";
    this.auth.registerProStep2(this.draftProId, {
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
  static \u0275fac = function RegisterProComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterProComponent)(\u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AddressService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterProComponent, selectors: [["app-register-pro"]], viewQuery: function RegisterProComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressInput = _t.first);
    }
  }, decls: 29, vars: 24, consts: [["step1Form", "ngForm"], ["bizNameField", "ngModel"], ["nameField", "ngModel"], ["emailField", "ngModel"], ["phoneField", "ngModel"], ["passwordField", "ngModel"], ["step2Form", "ngForm"], ["addressInput", ""], ["houseField", "ngModel"], ["zipField", "ngModel"], ["street1Field", "ngModel"], ["cityField", "ngModel"], ["stateField", "ngModel"], ["countryField", "ngModel"], [1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "logo-circle"], [1, "header-text"], [1, "subtitle"], [1, "step-indicator"], [1, "step-item"], [1, "step-circle"], [4, "ngIf"], ["class", "check", 4, "ngIf"], [1, "step-label"], [1, "step-connector"], [3, "ngSubmit", 4, "ngIf"], [1, "check"], [3, "ngSubmit"], [1, "form-group"], ["for", "BusinessName"], [1, "required"], ["type", "text", "id", "BusinessName", "name", "BusinessName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "field-error", 4, "ngIf"], ["for", "Name"], ["type", "text", "id", "Name", "name", "Name", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "email"], ["type", "email", "id", "email", "name", "Email", "required", "", "email", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "PhoneNumber", "required", "", "pattern", "^[0-9]{10}$", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "password"], ["type", "password", "id", "password", "name", "Password", "required", "", "minlength", "6", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["class", "error-msg", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], ["class", "btn-arrow", 4, "ngIf"], [1, "login-link"], ["routerLink", "/login"], [1, "field-error"], [1, "error-msg"], ["routerLink", "/auth/login", "class", "error-login-link", 4, "ngIf"], ["routerLink", "/auth/login", 1, "error-login-link"], [1, "btn-arrow"], [1, "step2-banner"], [1, "banner-icon"], ["for", "addressAutocomplete"], [1, "autocomplete-container"], ["type", "text", "id", "addressAutocomplete", "autocomplete", "off", 1, "form-control", 3, "input", "blur", "placeholder"], ["class", "address-dropdown", 4, "ngIf"], ["class", "address-loading", 4, "ngIf"], [1, "text-muted"], [1, "form-row"], ["for", "houseNameNumber"], ["type", "text", "id", "houseNameNumber", "name", "houseNameNumber", "required", "", "placeholder", "12A", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "zipPostalCode"], ["type", "text", "id", "zipPostalCode", "name", "zipPostalCode", "required", "", "placeholder", "695001", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "street1"], ["type", "text", "id", "street1", "name", "street1", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "street2"], ["type", "text", "id", "street2", "name", "street2", "placeholder", "Apartment, suite, etc.", 1, "form-control", 3, "ngModelChange", "ngModel"], ["for", "city"], ["type", "text", "id", "city", "name", "city", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "district"], ["type", "text", "id", "district", "name", "district", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "state"], ["type", "text", "id", "state", "name", "state", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], ["for", "country"], ["type", "text", "id", "country", "name", "country", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel", "placeholder"], [1, "step2-actions"], ["type", "button", 1, "btn-back", 3, "click"], [1, "address-dropdown"], ["class", "address-item", 3, "mousedown", "click", 4, "ngFor", "ngForOf"], [1, "address-item", 3, "mousedown", "click"], [1, "address-main"], [1, "address-secondary"], [1, "address-loading"]], template: function RegisterProComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "div", 17);
      \u0275\u0275text(4, "P");
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
      \u0275\u0275template(15, RegisterProComponent_span_15_Template, 2, 0, "span", 23)(16, RegisterProComponent_span_16_Template, 2, 0, "span", 24);
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
      \u0275\u0275template(27, RegisterProComponent_form_27_Template, 64, 64, "form", 27)(28, RegisterProComponent_form_28_Template, 102, 89, "form", 27);
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
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, PatternValidator, EmailValidator, NgModel, NgForm, TranslateModule, TranslatePipe], styles: ['\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(118, 75, 162, 0.35);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.step-indicator[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.step-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.step-item[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.step-item[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%]   .check[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.step-item[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: #764ba2;\n  background: #764ba2;\n  color: #fff;\n}\n.step-item.active[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #764ba2;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-circle[_ngcontent-%COMP%] {\n  border-color: #764ba2;\n  background: #764ba2;\n  color: #fff;\n}\n.step-item.done[_ngcontent-%COMP%]   .step-label[_ngcontent-%COMP%] {\n  color: #374151;\n}\n.step-connector[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 10px 20px;\n  transition: background 0.2s;\n}\n.step-connector.done[_ngcontent-%COMP%] {\n  background: #764ba2;\n}\n.step2-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #166534;\n  margin-bottom: 20px;\n}\n.step2-banner[_ngcontent-%COMP%]   .banner-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #16a34a;\n  font-weight: 700;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.step2-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n.step2-actions[_ngcontent-%COMP%]   .btn-submit[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-top: 0;\n}\n.btn-back[_ngcontent-%COMP%] {\n  padding: 12px 16px;\n  background: none;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-back[_ngcontent-%COMP%]:hover {\n  border-color: #9ca3af;\n  color: #374151;\n}\n.btn-arrow[_ngcontent-%COMP%] {\n  margin-left: 6px;\n}\n.error-msg[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  color: #b91c1c;\n  font-size: 13px;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.error-login-link[_ngcontent-%COMP%] {\n  color: #764ba2;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.error-login-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 16px;\n  margin-bottom: 0;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #764ba2;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.form-control.is-invalid[_ngcontent-%COMP%]:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item[_ngcontent-%COMP%]:hover {\n  background: rgba(118, 75, 162, 0.06);\n}\n.address-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.address-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=register-pro.css.map */'] });
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

    <!-- Step 1: Basic Information -->
    <form #step1Form="ngForm" (ngSubmit)="onStep1Next(step1Form)" *ngIf="currentStep === 1">

      <div class="form-group">
        <label for="BusinessName">{{ 'AUTH.REGISTER_PRO.BUSINESS_NAME' | translate }} <span class="required">*</span></label>
        <input type="text" id="BusinessName" name="BusinessName" class="form-control"
               #bizNameField="ngModel"
               [class.is-invalid]="bizNameField.invalid && (bizNameField.dirty || bizNameField.touched)"
               [(ngModel)]="businessName" required [placeholder]="'AUTH.REGISTER_PRO.BUSINESS_NAME_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="bizNameField.invalid && (bizNameField.dirty || bizNameField.touched)">{{ 'AUTH.REGISTER_PRO.BUSINESS_NAME_REQUIRED' | translate }}</small>
      </div>

      <div class="form-group">
        <label for="Name">{{ 'AUTH.REGISTER_PRO.FULL_NAME' | translate }} <span class="required">*</span></label>
        <input type="text" id="Name" name="Name" class="form-control"
               #nameField="ngModel"
               [class.is-invalid]="nameField.invalid && (nameField.dirty || nameField.touched)"
               [(ngModel)]="name" required [placeholder]="'AUTH.REGISTER_PRO.FULL_NAME_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="nameField.invalid && (nameField.dirty || nameField.touched)">{{ 'AUTH.REGISTER_PRO.FULL_NAME_REQUIRED' | translate }}</small>
      </div>

      <div class="form-group">
        <label for="email">{{ 'AUTH.REGISTER_PRO.EMAIL' | translate }} <span class="required">*</span></label>
        <input type="email" id="email" name="Email" class="form-control"
               #emailField="ngModel"
               [class.is-invalid]="emailField.invalid && (emailField.dirty || emailField.touched)"
               [(ngModel)]="email" required email [placeholder]="'AUTH.REGISTER_PRO.EMAIL_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="emailField.invalid && (emailField.dirty || emailField.touched)">
          <span *ngIf="emailField.hasError('required')">{{ 'AUTH.REGISTER_PRO.EMAIL_REQUIRED' | translate }}</span>
          <span *ngIf="emailField.hasError('email')">{{ 'AUTH.REGISTER_PRO.EMAIL_INVALID' | translate }}</span>
        </small>
      </div>

      <div class="form-group">
        <label for="phone">{{ 'AUTH.REGISTER_PRO.PHONE' | translate }} <span class="required">*</span></label>
        <input type="tel" id="phone" name="PhoneNumber" class="form-control"
               #phoneField="ngModel"
               [class.is-invalid]="phoneField.invalid && (phoneField.dirty || phoneField.touched)"
               [(ngModel)]="phoneNumber" required pattern="^[0-9]{10}$" [placeholder]="'AUTH.REGISTER_PRO.PHONE_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="phoneField.invalid && (phoneField.dirty || phoneField.touched)">
          <span *ngIf="phoneField.hasError('required')">{{ 'AUTH.REGISTER_PRO.PHONE_REQUIRED' | translate }}</span>
          <span *ngIf="phoneField.hasError('pattern')">{{ 'AUTH.REGISTER_PRO.PHONE_INVALID' | translate }}</span>
        </small>
      </div>

      <div class="form-group">
        <label for="password">{{ 'AUTH.REGISTER_PRO.PASSWORD' | translate }} <span class="required">*</span></label>
        <input type="password" id="password" name="Password" class="form-control"
               #passwordField="ngModel"
               [class.is-invalid]="passwordField.invalid && (passwordField.dirty || passwordField.touched)"
               [(ngModel)]="password" required minlength="6" [placeholder]="'AUTH.REGISTER_PRO.PASSWORD_PLACEHOLDER' | translate" />
        <small class="field-error" *ngIf="passwordField.invalid && (passwordField.dirty || passwordField.touched)">
          <span *ngIf="passwordField.hasError('required')">{{ 'AUTH.REGISTER_PRO.PASSWORD_REQUIRED' | translate }}</span>
          <span *ngIf="passwordField.hasError('minlength')">{{ 'AUTH.REGISTER_PRO.PASSWORD_MIN' | translate }}</span>
        </small>
      </div>

      <div class="error-msg" *ngIf="step1Error">
        {{ step1Error }}
        <a *ngIf="step1ShowLoginLink" routerLink="/auth/login" class="error-login-link">Log in instead</a>
      </div>

      <button type="submit" class="btn-submit" [disabled]="!step1Form.valid || step1Loading || step1ShowLoginLink">
        {{ step1Loading ? ('AUTH.REGISTER_PRO.SAVING' | translate) : ('AUTH.REGISTER_PRO.NEXT' | translate) }}
        <span class="btn-arrow" *ngIf="!step1Loading">\u2192</span>
      </button>

      <p class="login-link">{{ 'AUTH.REGISTER_PRO.HAVE_ACCOUNT' | translate }} <a routerLink="/login">{{ 'AUTH.REGISTER_PRO.SIGN_IN' | translate }}</a></p>
    </form>

    <!-- Step 2: Address -->
    <form #step2Form="ngForm" (ngSubmit)="onStep2Submit(step2Form)" *ngIf="currentStep === 2">

      <div class="step2-banner">
        <span class="banner-icon">\u2713</span>
        <span>{{ 'AUTH.REGISTER_PRO.STEP2_BANNER' | translate }}</span>
      </div>

      <div class="form-group">
        <label for="addressAutocomplete">{{ 'AUTH.REGISTER_PRO.SEARCH_ADDRESS' | translate }}</label>
        <div class="autocomplete-container">
          <input
            #addressInput
            type="text"
            id="addressAutocomplete"
            class="form-control"
            [placeholder]="'AUTH.REGISTER_PRO.SEARCH_ADDRESS_PLACEHOLDER' | translate"
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
        <small class="text-muted">{{ 'AUTH.REGISTER_PRO.SEARCH_ADDRESS_HINT' | translate }}</small>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="houseNameNumber">{{ 'AUTH.REGISTER_PRO.HOUSE' | translate }} <span class="required">*</span></label>
          <input type="text" id="houseNameNumber" name="houseNameNumber" class="form-control"
                 #houseField="ngModel"
                 [class.is-invalid]="houseField.invalid && (houseField.dirty || houseField.touched)"
                 [(ngModel)]="houseNameNumber" required placeholder="12A" />
          <small class="field-error" *ngIf="houseField.invalid && (houseField.dirty || houseField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
        </div>
        <div class="form-group">
          <label for="zipPostalCode">{{ 'AUTH.REGISTER_PRO.ZIP' | translate }} <span class="required">*</span></label>
          <input type="text" id="zipPostalCode" name="zipPostalCode" class="form-control"
                 #zipField="ngModel"
                 [class.is-invalid]="zipField.invalid && (zipField.dirty || zipField.touched)"
                 [(ngModel)]="zipPostalCode" required placeholder="695001" />
          <small class="field-error" *ngIf="zipField.invalid && (zipField.dirty || zipField.touched)">{{ 'AUTH.REGISTER_PRO.REQUIRED' | translate }}</small>
        </div>
      </div>

      <div class="form-group">
        <label for="street1">{{ 'AUTH.REGISTER_PRO.STREET' | translate }} <span class="required">*</span></label>
        <input type="text" id="street1" name="street1" class="form-control"
               #street1Field="ngModel"
               [class.is-invalid]="street1Field.invalid && (street1Field.dirty || street1Field.touched)"
               [(ngModel)]="street1" required [placeholder]="'AUTH.REGISTER_PRO.STREET' | translate" />
        <small class="field-error" *ngIf="street1Field.invalid && (street1Field.dirty || street1Field.touched)">{{ 'AUTH.REGISTER_PRO.STREET_REQUIRED' | translate }}</small>
      </div>

      <div class="form-group">
        <label for="street2">{{ 'AUTH.REGISTER_PRO.STREET2' | translate }}</label>
        <input type="text" id="street2" name="street2" class="form-control"
               [(ngModel)]="street2" placeholder="Apartment, suite, etc." />
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="city">{{ 'AUTH.REGISTER_PRO.CITY' | translate }} <span class="required">*</span></label>
          <input type="text" id="city" name="city" class="form-control"
                 #cityField="ngModel"
                 [class.is-invalid]="cityField.invalid && (cityField.dirty || cityField.touched)"
                 [(ngModel)]="city" required [placeholder]="'AUTH.REGISTER_PRO.CITY' | translate" />
          <small class="field-error" *ngIf="cityField.invalid && (cityField.dirty || cityField.touched)">{{ 'AUTH.REGISTER_PRO.CITY_REQUIRED' | translate }}</small>
        </div>
        <div class="form-group">
          <label for="district">{{ 'AUTH.REGISTER_PRO.DISTRICT' | translate }}</label>
          <input type="text" id="district" name="district" class="form-control"
                 [(ngModel)]="district" [placeholder]="'AUTH.REGISTER_PRO.DISTRICT' | translate" />
        </div>
      </div>

      <div class="form-row">
        <div class="form-group">
          <label for="state">{{ 'AUTH.REGISTER_PRO.STATE' | translate }} <span class="required">*</span></label>
          <input type="text" id="state" name="state" class="form-control"
                 #stateField="ngModel"
                 [class.is-invalid]="stateField.invalid && (stateField.dirty || stateField.touched)"
                 [(ngModel)]="state" required [placeholder]="'AUTH.REGISTER_PRO.STATE' | translate" />
          <small class="field-error" *ngIf="stateField.invalid && (stateField.dirty || stateField.touched)">{{ 'AUTH.REGISTER_PRO.STATE_REQUIRED' | translate }}</small>
        </div>
        <div class="form-group">
          <label for="country">{{ 'AUTH.REGISTER_PRO.COUNTRY' | translate }} <span class="required">*</span></label>
          <input type="text" id="country" name="country" class="form-control"
                 #countryField="ngModel"
                 [class.is-invalid]="countryField.invalid && (countryField.dirty || countryField.touched)"
                 [(ngModel)]="country" required [placeholder]="'AUTH.REGISTER_PRO.COUNTRY' | translate" />
          <small class="field-error" *ngIf="countryField.invalid && (countryField.dirty || countryField.touched)">{{ 'AUTH.REGISTER_PRO.COUNTRY_REQUIRED' | translate }}</small>
        </div>
      </div>

      <div class="error-msg" *ngIf="step2Error">{{ step2Error }}</div>

      <div class="step2-actions">
        <button type="button" class="btn-back" (click)="goBack()">{{ 'AUTH.REGISTER_PRO.BACK' | translate }}</button>
        <button type="submit" class="btn-submit" [disabled]="!step2Form.valid || step2Loading">
          {{ step2Loading ? ('AUTH.REGISTER_PRO.CREATING' | translate) : ('AUTH.REGISTER_PRO.COMPLETE' | translate) }}
        </button>
      </div>

    </form>

  </div>
</div>
`, styles: ['/* src/app/auth/register-pro/register-pro.scss */\n.register-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(118, 75, 162, 0.35);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.step-indicator {\n  display: flex;\n  align-items: center;\n  margin-bottom: 28px;\n}\n.step-item {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 6px;\n}\n.step-item .step-circle {\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  border: 2px solid #e5e7eb;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 13px;\n  font-weight: 700;\n  color: #9ca3af;\n  transition: all 0.2s;\n}\n.step-item .step-circle .check {\n  font-size: 14px;\n}\n.step-item .step-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  white-space: nowrap;\n  transition: color 0.2s;\n}\n.step-item.active .step-circle {\n  border-color: #764ba2;\n  background: #764ba2;\n  color: #fff;\n}\n.step-item.active .step-label {\n  color: #764ba2;\n}\n.step-item.done .step-circle {\n  border-color: #764ba2;\n  background: #764ba2;\n  color: #fff;\n}\n.step-item.done .step-label {\n  color: #374151;\n}\n.step-connector {\n  flex: 1;\n  height: 2px;\n  background: #e5e7eb;\n  margin: 0 10px 20px;\n  transition: background 0.2s;\n}\n.step-connector.done {\n  background: #764ba2;\n}\n.step2-banner {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #166534;\n  margin-bottom: 20px;\n}\n.step2-banner .banner-icon {\n  font-size: 15px;\n  color: #16a34a;\n  font-weight: 700;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.step2-actions {\n  display: flex;\n  gap: 10px;\n  margin-top: 8px;\n}\n.step2-actions .btn-submit {\n  flex: 1;\n  margin-top: 0;\n}\n.btn-back {\n  padding: 12px 16px;\n  background: none;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  font-weight: 600;\n  color: #6b7280;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-back:hover {\n  border-color: #9ca3af;\n  color: #374151;\n}\n.btn-arrow {\n  margin-left: 6px;\n}\n.error-msg {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 10px 14px;\n  color: #b91c1c;\n  font-size: 13px;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.error-login-link {\n  color: #764ba2;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n  white-space: nowrap;\n}\n.error-login-link:hover {\n  text-decoration: underline;\n}\n.login-link {\n  text-align: center;\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 16px;\n  margin-bottom: 0;\n}\n.login-link a {\n  color: #764ba2;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link a:hover {\n  text-decoration: underline;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required {\n  color: #ef4444;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.12);\n}\n.form-control::placeholder {\n  color: #9ca3af;\n}\n.form-control.is-invalid {\n  border-color: #ef4444;\n}\n.form-control.is-invalid:focus {\n  box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.12);\n}\n.field-error {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.text-muted {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.autocomplete-container {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item:hover {\n  background: rgba(118, 75, 162, 0.06);\n}\n.address-item:last-child {\n  border-bottom: none;\n}\n.address-main {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container {\n    padding: 16px 12px;\n  }\n  .register-card {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=register-pro.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: Router }, { type: AddressService }, { type: ChangeDetectorRef }], { addressInput: [{
    type: ViewChild,
    args: ["addressInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterProComponent, { className: "RegisterProComponent", filePath: "src/app/auth/register-pro/register-pro.ts", lineNumber: 18 });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterChoiceComponent, selectors: [["app-register-choice"]], decls: 82, vars: 66, consts: [[1, "register-choice-wrapper"], [1, "hero"], [1, "hero-content"], [1, "registration-options"], [1, "container"], [1, "options-grid"], [1, "option-card", "user-card"], [1, "card-icon", "user-icon"], [1, "card-subtitle"], [1, "card-description"], [1, "features-list"], [1, "btn-primary", 3, "click"], [1, "option-card", "pro-card"], [1, "card-icon", "pro-icon"], [1, "btn-secondary", 3, "click"], [1, "info-section"], [1, "login-links"], ["href", "javascript:void(0)", 3, "click"]], template: function RegisterChoiceComponent_Template(rf, ctx) {
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
      \u0275\u0275domElementStart(21, "p", 9);
      \u0275\u0275text(22);
      \u0275\u0275pipe(23, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "ul", 10)(25, "li");
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
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "li");
      \u0275\u0275text(38);
      \u0275\u0275pipe(39, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(40, "button", 11);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_button_click_40_listener() {
        return ctx.navigateTo("/auth/register/user");
      });
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(43, "div", 12)(44, "div", 13);
      \u0275\u0275text(45, "P");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "h2");
      \u0275\u0275text(47);
      \u0275\u0275pipe(48, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(49, "p", 8);
      \u0275\u0275text(50);
      \u0275\u0275pipe(51, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(52, "p", 9);
      \u0275\u0275text(53);
      \u0275\u0275pipe(54, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(55, "ul", 10)(56, "li");
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
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(65, "li");
      \u0275\u0275text(66);
      \u0275\u0275pipe(67, "translate");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(68, "li");
      \u0275\u0275text(69);
      \u0275\u0275pipe(70, "translate");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(71, "button", 14);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_button_click_71_listener() {
        return ctx.navigateTo("/auth/register/pro");
      });
      \u0275\u0275text(72);
      \u0275\u0275pipe(73, "translate");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(74, "div", 15)(75, "div", 16)(76, "p");
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275domElementStart(79, "a", 17);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_a_click_79_listener() {
        return ctx.navigateTo("/auth/login");
      });
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275domElementEnd()()()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 22, "AUTH.REGISTER_CHOICE.HERO_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 24, "AUTH.REGISTER_CHOICE.HERO_SUB"));
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 26, "AUTH.REGISTER_CHOICE.USER_HEADING"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 28, "AUTH.REGISTER_CHOICE.USER_SUBTITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 30, "AUTH.REGISTER_CHOICE.USER_DESC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 32, "AUTH.REGISTER_CHOICE.USER_FEAT1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 34, "AUTH.REGISTER_CHOICE.USER_FEAT2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 36, "AUTH.REGISTER_CHOICE.USER_FEAT3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 38, "AUTH.REGISTER_CHOICE.USER_FEAT4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 40, "AUTH.REGISTER_CHOICE.USER_FEAT5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 42, "AUTH.REGISTER_CHOICE.USER_BTN"), " ");
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 44, "AUTH.REGISTER_CHOICE.PRO_HEADING"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 46, "AUTH.REGISTER_CHOICE.PRO_SUBTITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 48, "AUTH.REGISTER_CHOICE.PRO_DESC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 50, "AUTH.REGISTER_CHOICE.PRO_FEAT1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 52, "AUTH.REGISTER_CHOICE.PRO_FEAT2"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 54, "AUTH.REGISTER_CHOICE.PRO_FEAT3"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 56, "AUTH.REGISTER_CHOICE.PRO_FEAT4"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 58, "AUTH.REGISTER_CHOICE.PRO_FEAT5"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(73, 60, "AUTH.REGISTER_CHOICE.PRO_BTN"), " ");
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 62, "AUTH.REGISTER_CHOICE.HAVE_ACCOUNT"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 64, "AUTH.REGISTER_CHOICE.SIGN_IN"));
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
          <h2>{{ 'AUTH.REGISTER_CHOICE.USER_HEADING' | translate }}</h2>
          <p class="card-subtitle">{{ 'AUTH.REGISTER_CHOICE.USER_SUBTITLE' | translate }}</p>
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
          <h2>{{ 'AUTH.REGISTER_CHOICE.PRO_HEADING' | translate }}</h2>
          <p class="card-subtitle">{{ 'AUTH.REGISTER_CHOICE.PRO_SUBTITLE' | translate }}</p>
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
//# sourceMappingURL=chunk-CYSKDPG4.js.map

