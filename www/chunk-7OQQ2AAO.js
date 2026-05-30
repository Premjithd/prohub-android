import {
  AddressService
} from "./chunk-JVAWAJWH.js";
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
} from "./chunk-QP32PFWE.js";
import {
  ApiService,
  Auth
} from "./chunk-A4EHLAJD.js";
import "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterModule
} from "./chunk-NMZ5GJTW.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  ViewChild,
  setClassMetadata,
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
} from "./chunk-ANTPJ2CK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/auth/login/login.ts
var _c0 = () => ["/auth/forgot-password"];
var _c1 = () => ["/auth/register"];
function LoginComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.errorMessage);
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LoginComponent, selectors: [["app-login"]], decls: 39, vars: 11, consts: [["loginForm", "ngForm"], [1, "login-wrapper"], [1, "login-card"], [1, "login-header"], [1, "logo-circle"], [1, "header-text"], [1, "subtitle"], [1, "user-type-selector"], [1, "type-buttons"], ["type", "button", 1, "type-btn", 3, "click"], ["class", "error-banner", 4, "ngIf"], [3, "ngSubmit"], [1, "form-group"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "ngModel", "", "required", "", "placeholder", "Enter your email", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "name", "password", "ngModel", "", "required", "", "placeholder", "Enter your password", 1, "form-control"], [1, "forgot-link"], [3, "routerLink"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "register-link"], [1, "error-banner"]], template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "div", 4);
      \u0275\u0275text(4, "yP");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 5)(6, "h2");
      \u0275\u0275text(7, "Welcome Back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 6);
      \u0275\u0275text(9, "Sign in to your yProHub account");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "div", 7)(11, "label");
      \u0275\u0275text(12, "Sign in as");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "div", 8)(14, "button", 9);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_14_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.userType = "user");
      });
      \u0275\u0275text(15, " Customer ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 9);
      \u0275\u0275listener("click", function LoginComponent_Template_button_click_16_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.userType = "pro");
      });
      \u0275\u0275text(17, " Professional ");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(18, LoginComponent_div_18_Template, 2, 1, "div", 10);
      \u0275\u0275elementStart(19, "form", 11, 0);
      \u0275\u0275listener("ngSubmit", function LoginComponent_Template_form_ngSubmit_19_listener() {
        \u0275\u0275restoreView(_r1);
        const loginForm_r3 = \u0275\u0275reference(20);
        return \u0275\u0275resetView(ctx.onSubmit(loginForm_r3));
      });
      \u0275\u0275elementStart(21, "div", 12)(22, "label", 13);
      \u0275\u0275text(23, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 12)(26, "label", 15);
      \u0275\u0275text(27, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 16);
      \u0275\u0275elementStart(29, "div", 17)(30, "a", 18);
      \u0275\u0275text(31, "Forgot password?");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(32, "button", 19);
      \u0275\u0275text(33);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(34, "div", 20)(35, "p");
      \u0275\u0275text(36, "Don't have an account? ");
      \u0275\u0275elementStart(37, "a", 18);
      \u0275\u0275text(38, "Create one here");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      const loginForm_r3 = \u0275\u0275reference(20);
      \u0275\u0275advance(14);
      \u0275\u0275classProp("active", ctx.userType === "user");
      \u0275\u0275advance(2);
      \u0275\u0275classProp("active", ctx.userType === "pro");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance(12);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", !loginForm_r3.valid || ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isLoading ? "Signing in\u2026" : "Sign In", " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c1));
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, NgModel, NgForm, RouterModule, RouterLink], styles: ['\n\n.login-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.login-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 420px;\n}\n.login-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n}\n.user-type-selector[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.user-type-selector[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.type-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 8px;\n}\n.type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px 12px;\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  color: #6b7280;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.type-btn[_ngcontent-%COMP%]:hover:not(.active) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #374151;\n}\n.type-btn.active[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-color: transparent;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.forgot-link[_ngcontent-%COMP%] {\n  text-align: right;\n  margin-top: 6px;\n}\n.forgot-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.forgot-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n  color: #764ba2;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.register-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #f3f4f6;\n}\n.register-link[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.register-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .login-wrapper[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n    align-items: flex-start;\n  }\n  .login-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=login.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LoginComponent, [{
    type: Component,
    args: [{ selector: "app-login", imports: [CommonModule, FormsModule, RouterModule], template: `<div class="login-wrapper">
  <div class="login-card">

    <div class="login-header">
      <div class="logo-circle">yP</div>
      <div class="header-text">
        <h2>Welcome Back</h2>
        <p class="subtitle">Sign in to your yProHub account</p>
      </div>
    </div>

    <!-- User Type Selection -->
    <div class="user-type-selector">
      <label>Sign in as</label>
      <div class="type-buttons">
        <button
          type="button"
          class="type-btn"
          [class.active]="userType === 'user'"
          (click)="userType = 'user'"
        >
          Customer
        </button>
        <button
          type="button"
          class="type-btn"
          [class.active]="userType === 'pro'"
          (click)="userType = 'pro'"
        >
          Professional
        </button>
      </div>
    </div>

    <div *ngIf="errorMessage" class="error-banner">{{ errorMessage }}</div>

    <form #loginForm="ngForm" (ngSubmit)="onSubmit(loginForm)">
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          class="form-control"
          ngModel
          required
          placeholder="Enter your email"
        />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          class="form-control"
          ngModel
          required
          placeholder="Enter your password"
        />
        <div class="forgot-link">
          <a [routerLink]="['/auth/forgot-password']">Forgot password?</a>
        </div>
      </div>

      <button type="submit" class="btn-submit" [disabled]="!loginForm.valid || isLoading">
        {{ isLoading ? 'Signing in\u2026' : 'Sign In' }}
      </button>
    </form>

    <div class="register-link">
      <p>Don't have an account? <a [routerLink]="['/auth/register']">Create one here</a></p>
    </div>

  </div>
</div>
`, styles: ['/* src/app/auth/login/login.scss */\n.login-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.login-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 420px;\n}\n.login-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 16px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n}\n.user-type-selector {\n  margin-bottom: 24px;\n}\n.user-type-selector label {\n  display: block;\n  margin-bottom: 8px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.type-buttons {\n  display: flex;\n  gap: 8px;\n}\n.type-btn {\n  flex: 1;\n  padding: 9px 12px;\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  font-family: inherit;\n  color: #6b7280;\n  cursor: pointer;\n  transition:\n    border-color 0.15s,\n    background 0.15s,\n    color 0.15s;\n}\n.type-btn:hover:not(.active) {\n  background: #f3f4f6;\n  border-color: #d1d5db;\n  color: #374151;\n}\n.type-btn.active {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border-color: transparent;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control::placeholder {\n  color: #9ca3af;\n}\n.forgot-link {\n  text-align: right;\n  margin-top: 6px;\n}\n.forgot-link a {\n  font-size: 12px;\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.forgot-link a:hover {\n  text-decoration: underline;\n  color: #764ba2;\n}\n.btn-submit {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.error-banner {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n  padding: 10px 14px;\n  border-radius: 8px;\n  margin-bottom: 16px;\n  font-size: 13px;\n}\n.register-link {\n  text-align: center;\n  margin-top: 20px;\n  padding-top: 20px;\n  border-top: 1px solid #f3f4f6;\n}\n.register-link p {\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n}\n.register-link a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.register-link a:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n@media (max-width: 480px) {\n  .login-wrapper {\n    padding: 16px 12px;\n    align-items: flex-start;\n  }\n  .login-card {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=login.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: Router }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LoginComponent, { className: "LoginComponent", filePath: "src/app/auth/login/login.ts", lineNumber: 13 });
})();

// src/app/auth/register/register.ts
var _c02 = ["addressInput"];
function RegisterUserComponent_div_46_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46);
    \u0275\u0275listener("click", function RegisterUserComponent_div_46_div_1_Template_div_click_0_listener() {
      const prediction_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      const registerForm_r2 = \u0275\u0275reference(11);
      return \u0275\u0275resetView(ctx_r4.onAddressSelected(prediction_r4, registerForm_r2));
    });
    \u0275\u0275elementStart(1, "div", 47);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 48);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prediction_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r4.mainText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r4.secondaryText);
  }
}
function RegisterUserComponent_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275template(1, RegisterUserComponent_div_46_div_1_Template, 5, 2, "div", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.addressPredictions);
  }
}
function RegisterUserComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275text(1, "Searching...");
    \u0275\u0275elementEnd();
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
  }, decls: 92, vars: 3, consts: [["registerForm", "ngForm"], ["addressInput", ""], [1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "logo-circle"], [1, "header-text"], [1, "subtitle"], [3, "ngSubmit"], [1, "name-row"], [1, "form-group"], ["for", "FirstName"], ["type", "text", "id", "FirstName", "name", "FirstName", "ngModel", "", "required", "", 1, "form-control"], ["for", "LastName"], ["type", "text", "id", "LastName", "name", "LastName", "ngModel", "", "required", "", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "name", "Email", "ngModel", "", "required", "", "email", "", "placeholder", "name@example.com", 1, "form-control"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "PhoneNumber", "ngModel", "", "required", "", "pattern", "^[0-9]{10}$", "placeholder", "10-digit number", 1, "form-control"], [1, "text-muted"], ["for", "password"], ["type", "password", "id", "password", "name", "Password", "ngModel", "", "required", "", "minlength", "6", "placeholder", "At least 6 characters", 1, "form-control"], [1, "address-section"], [1, "required"], ["for", "addressAutocomplete"], [1, "autocomplete-container"], ["type", "text", "id", "addressAutocomplete", "placeholder", "Start typing your address...", "autocomplete", "off", 1, "form-control", 3, "input", "blur"], ["class", "address-dropdown", 4, "ngIf"], ["class", "address-loading", 4, "ngIf"], ["for", "houseNameNumber"], ["type", "text", "id", "houseNameNumber", "name", "houseNameNumber", "ngModel", "", "required", "", 1, "form-control"], ["for", "street1"], ["type", "text", "id", "street1", "name", "street1", "ngModel", "", "required", "", 1, "form-control"], ["for", "street2"], ["type", "text", "id", "street2", "name", "street2", 1, "form-control"], ["for", "city"], ["type", "text", "id", "city", "name", "city", "ngModel", "", "required", "", 1, "form-control"], ["for", "state"], ["type", "text", "id", "state", "name", "state", "ngModel", "", "required", "", 1, "form-control"], ["for", "country"], ["type", "text", "id", "country", "name", "country", "ngModel", "", "required", "", 1, "form-control"], ["for", "zipPostalCode"], ["type", "text", "id", "zipPostalCode", "name", "zipPostalCode", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "address-dropdown"], ["class", "address-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "address-item", 3, "click"], [1, "address-main"], [1, "address-secondary"], [1, "address-loading"]], template: function RegisterUserComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
      \u0275\u0275text(4, "U");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 6)(6, "h2");
      \u0275\u0275text(7, "User Registration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Create an account to book services and manage your appointments.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "form", 8, 0);
      \u0275\u0275listener("ngSubmit", function RegisterUserComponent_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        const registerForm_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(ctx.onSubmit(registerForm_r2));
      });
      \u0275\u0275elementStart(12, "div", 9)(13, "div", 10)(14, "label", 11);
      \u0275\u0275text(15, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "div", 10)(18, "label", 13);
      \u0275\u0275text(19, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 14);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "div", 10)(22, "label", 15);
      \u0275\u0275text(23, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 16);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 10)(26, "label", 17);
      \u0275\u0275text(27, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 18);
      \u0275\u0275elementStart(29, "small", 19);
      \u0275\u0275text(30, "Format: 10 digits (e.g., 9876543210)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(31, "div", 10)(32, "label", 20);
      \u0275\u0275text(33, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(34, "input", 21);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 22)(36, "h3");
      \u0275\u0275text(37, "Address ");
      \u0275\u0275elementStart(38, "span", 23);
      \u0275\u0275text(39, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 10)(41, "label", 24);
      \u0275\u0275text(42, "Search Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "div", 25)(44, "input", 26, 1);
      \u0275\u0275listener("input", function RegisterUserComponent_Template_input_input_44_listener($event) {
        \u0275\u0275restoreView(_r1);
        const registerForm_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(ctx.onAddressInput($event, registerForm_r2));
      })("blur", function RegisterUserComponent_Template_input_blur_44_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.hideAddressList());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(46, RegisterUserComponent_div_46_Template, 2, 1, "div", 27)(47, RegisterUserComponent_div_47_Template, 2, 0, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "small", 19);
      \u0275\u0275text(49, "Start typing to search for your address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(50, "div", 10)(51, "label", 29);
      \u0275\u0275text(52, "House Name/Number ");
      \u0275\u0275elementStart(53, "span", 23);
      \u0275\u0275text(54, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(55, "input", 30);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 10)(57, "label", 31);
      \u0275\u0275text(58, "Street 1 ");
      \u0275\u0275elementStart(59, "span", 23);
      \u0275\u0275text(60, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(61, "input", 32);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "div", 10)(63, "label", 33);
      \u0275\u0275text(64, "Street 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(65, "input", 34);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 10)(67, "label", 35);
      \u0275\u0275text(68, "City ");
      \u0275\u0275elementStart(69, "span", 23);
      \u0275\u0275text(70, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(71, "input", 36);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(72, "div", 10)(73, "label", 37);
      \u0275\u0275text(74, "State ");
      \u0275\u0275elementStart(75, "span", 23);
      \u0275\u0275text(76, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(77, "input", 38);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(78, "div", 10)(79, "label", 39);
      \u0275\u0275text(80, "Country ");
      \u0275\u0275elementStart(81, "span", 23);
      \u0275\u0275text(82, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(83, "input", 40);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "div", 10)(85, "label", 41);
      \u0275\u0275text(86, "Zip/Postal Code ");
      \u0275\u0275elementStart(87, "span", 23);
      \u0275\u0275text(88, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(89, "input", 42);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "button", 43);
      \u0275\u0275text(91, " Create Account ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const registerForm_r2 = \u0275\u0275reference(11);
      \u0275\u0275advance(46);
      \u0275\u0275property("ngIf", ctx.showAddressList && ctx.addressPredictions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.addressLoading);
      \u0275\u0275advance(43);
      \u0275\u0275property("disabled", !registerForm_r2.valid);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, PatternValidator, EmailValidator, NgModel, NgForm], styles: ['\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.name-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.address-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1.5px solid #f3f4f6;\n}\n.address-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item[_ngcontent-%COMP%]:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.address-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.address-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n  .name-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterUserComponent, [{
    type: Component,
    args: [{ selector: "app-register-user", imports: [CommonModule, FormsModule], template: '<div class="register-container">\n  <div class="register-card">\n    <div class="register-header">\n      <div class="logo-circle">U</div>\n      <div class="header-text">\n        <h2>User Registration</h2>\n        <p class="subtitle">Create an account to book services and manage your appointments.</p>\n      </div>\n    </div>\n\n    <form #registerForm="ngForm" (ngSubmit)="onSubmit(registerForm)">\n      <div class="name-row">\n        <div class="form-group">\n          <label for="FirstName">First Name</label>\n          <input\n            type="text"\n            id="FirstName"\n            name="FirstName"\n            class="form-control"\n            ngModel\n            required\n          />\n        </div>\n        <div class="form-group">\n          <label for="LastName">Last Name</label>\n          <input\n            type="text"\n            id="LastName"\n            name="LastName"\n            class="form-control"\n            ngModel\n            required\n          />\n        </div>\n      </div>\n\n      <div class="form-group">\n        <label for="email">Email</label>\n        <input\n          type="email"\n          id="email"\n          name="Email"\n          class="form-control"\n          ngModel\n          required\n          email\n          placeholder="name@example.com"\n        />\n      </div>\n\n      <div class="form-group">\n        <label for="phone">Phone Number</label>\n        <input\n          type="tel"\n          id="phone"\n          name="PhoneNumber"\n          class="form-control"\n          ngModel\n          required\n          pattern="^[0-9]{10}$"\n          placeholder="10-digit number"\n        />\n        <small class="text-muted">Format: 10 digits (e.g., 9876543210)</small>\n      </div>\n\n      <div class="form-group">\n        <label for="password">Password</label>\n        <input\n          type="password"\n          id="password"\n          name="Password"\n          class="form-control"\n          ngModel\n          required\n          minlength="6"\n          placeholder="At least 6 characters"\n        />\n      </div>\n\n      <div class="address-section">\n        <h3>Address <span class="required">*</span></h3>\n\n        <div class="form-group">\n          <label for="addressAutocomplete">Search Address</label>\n          <div class="autocomplete-container">\n            <input\n              #addressInput\n              type="text"\n              id="addressAutocomplete"\n              class="form-control"\n              placeholder="Start typing your address..."\n              (input)="onAddressInput($event, registerForm)"\n              (blur)="hideAddressList()"\n              autocomplete="off"\n            />\n            <div class="address-dropdown" *ngIf="showAddressList && addressPredictions.length > 0">\n              <div\n                *ngFor="let prediction of addressPredictions"\n                class="address-item"\n                (click)="onAddressSelected(prediction, registerForm)"\n              >\n                <div class="address-main">{{ prediction.mainText }}</div>\n                <div class="address-secondary">{{ prediction.secondaryText }}</div>\n              </div>\n            </div>\n            <div class="address-loading" *ngIf="addressLoading">Searching...</div>\n          </div>\n          <small class="text-muted">Start typing to search for your address</small>\n        </div>\n\n        <div class="form-group">\n          <label for="houseNameNumber">House Name/Number <span class="required">*</span></label>\n          <input type="text" id="houseNameNumber" name="houseNameNumber" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="street1">Street 1 <span class="required">*</span></label>\n          <input type="text" id="street1" name="street1" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="street2">Street 2</label>\n          <input type="text" id="street2" name="street2" class="form-control" />\n        </div>\n\n        <div class="form-group">\n          <label for="city">City <span class="required">*</span></label>\n          <input type="text" id="city" name="city" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="state">State <span class="required">*</span></label>\n          <input type="text" id="state" name="state" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="country">Country <span class="required">*</span></label>\n          <input type="text" id="country" name="country" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="zipPostalCode">Zip/Postal Code <span class="required">*</span></label>\n          <input type="text" id="zipPostalCode" name="zipPostalCode" class="form-control" ngModel required />\n        </div>\n      </div>\n\n      <button type="submit" class="btn-submit" [disabled]="!registerForm.valid">\n        Create Account\n      </button>\n    </form>\n  </div>\n</div>\n', styles: ['/* src/app/auth/register/register.scss */\n.register-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.name-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required {\n  color: #ef4444;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control::placeholder {\n  color: #9ca3af;\n}\n.text-muted {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.address-section {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1.5px solid #f3f4f6;\n}\n.address-section h3 {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.autocomplete-container {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item:hover {\n  background: rgba(102, 126, 234, 0.06);\n}\n.address-item:last-child {\n  border-bottom: none;\n}\n.address-main {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container {\n    padding: 16px 12px;\n  }\n  .register-card {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n  .name-row {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=register.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: Router }, { type: AddressService }], { addressInput: [{
    type: ViewChild,
    args: ["addressInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterUserComponent, { className: "RegisterUserComponent", filePath: "src/app/auth/register/register.ts", lineNumber: 14 });
})();

// src/app/auth/register-pro/register-pro.ts
var _c03 = ["addressInput"];
function RegisterProComponent_div_43_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275listener("click", function RegisterProComponent_div_43_div_1_Template_div_click_0_listener() {
      const prediction_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r4 = \u0275\u0275nextContext(2);
      const regForm_r2 = \u0275\u0275reference(11);
      return \u0275\u0275resetView(ctx_r4.onAddressSelected(prediction_r4, regForm_r2));
    });
    \u0275\u0275elementStart(1, "div", 46);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 47);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const prediction_r4 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r4.mainText);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(prediction_r4.secondaryText);
  }
}
function RegisterProComponent_div_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275template(1, RegisterProComponent_div_43_div_1_Template, 5, 2, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r4.addressPredictions);
  }
}
function RegisterProComponent_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1, "Searching...");
    \u0275\u0275elementEnd();
  }
}
var RegisterProComponent = class _RegisterProComponent {
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
      this.auth.registerPro(payload).subscribe({
        next: (response) => {
          console.log("Pro registration successful:", response);
          alert("Pro registered successfully!");
          this.router.navigate(["/"]);
        },
        error: (error) => {
          console.error("Pro registration failed:", error);
          alert("Registration failed. Please try again.");
        }
      });
    }
  }
  static \u0275fac = function RegisterProComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _RegisterProComponent)(\u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(AddressService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterProComponent, selectors: [["app-register-pro"]], viewQuery: function RegisterProComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c03, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.addressInput = _t.first);
    }
  }, decls: 89, vars: 3, consts: [["regForm", "ngForm"], ["addressInput", ""], [1, "register-container"], [1, "register-card"], [1, "register-header"], [1, "logo-circle"], [1, "header-text"], [1, "subtitle"], [3, "ngSubmit"], [1, "form-group"], ["for", "BusinessName"], ["type", "text", "id", "BusinessName", "name", "BusinessName", "ngModel", "", "required", "", "placeholder", "e.g. Alice & Co", 1, "form-control"], ["for", "Name"], ["type", "text", "id", "Name", "name", "Name", "ngModel", "", "required", "", "placeholder", "Your full name", 1, "form-control"], ["for", "email"], ["type", "email", "id", "email", "name", "Email", "ngModel", "", "required", "", "placeholder", "name@company.com", 1, "form-control"], ["for", "phone"], ["type", "tel", "id", "phone", "name", "PhoneNumber", "ngModel", "", "required", "", "placeholder", "+1 555 555 5555", 1, "form-control"], ["for", "password"], ["type", "password", "id", "password", "name", "Password", "ngModel", "", "required", "", "minlength", "6", "placeholder", "At least 6 characters", 1, "form-control"], [1, "address-section"], [1, "required"], ["for", "addressAutocomplete"], [1, "autocomplete-container"], ["type", "text", "id", "addressAutocomplete", "placeholder", "Start typing your address...", "autocomplete", "off", 1, "form-control", 3, "input", "blur"], ["class", "address-dropdown", 4, "ngIf"], ["class", "address-loading", 4, "ngIf"], [1, "text-muted"], ["for", "houseNameNumber"], ["type", "text", "id", "houseNameNumber", "name", "houseNameNumber", "ngModel", "", "required", "", 1, "form-control"], ["for", "street1"], ["type", "text", "id", "street1", "name", "street1", "ngModel", "", "required", "", 1, "form-control"], ["for", "street2"], ["type", "text", "id", "street2", "name", "street2", 1, "form-control"], ["for", "city"], ["type", "text", "id", "city", "name", "city", "ngModel", "", "required", "", 1, "form-control"], ["for", "state"], ["type", "text", "id", "state", "name", "state", "ngModel", "", "required", "", 1, "form-control"], ["for", "country"], ["type", "text", "id", "country", "name", "country", "ngModel", "", "required", "", 1, "form-control"], ["for", "zipPostalCode"], ["type", "text", "id", "zipPostalCode", "name", "zipPostalCode", "ngModel", "", "required", "", 1, "form-control"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "address-dropdown"], ["class", "address-item", 3, "click", 4, "ngFor", "ngForOf"], [1, "address-item", 3, "click"], [1, "address-main"], [1, "address-secondary"], [1, "address-loading"]], template: function RegisterProComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r1 = \u0275\u0275getCurrentView();
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "div", 5);
      \u0275\u0275text(4, "P");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div", 6)(6, "h2");
      \u0275\u0275text(7, "Register as Professional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 7);
      \u0275\u0275text(9, "Create your pro account to manage services, clients and bookings.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(10, "form", 8, 0);
      \u0275\u0275listener("ngSubmit", function RegisterProComponent_Template_form_ngSubmit_10_listener() {
        \u0275\u0275restoreView(_r1);
        const regForm_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(ctx.onSubmit(regForm_r2));
      });
      \u0275\u0275elementStart(12, "div", 9)(13, "label", 10);
      \u0275\u0275text(14, "Business Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(15, "input", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "div", 9)(17, "label", 12);
      \u0275\u0275text(18, "Full Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(19, "input", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "div", 9)(21, "label", 14);
      \u0275\u0275text(22, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 9)(25, "label", 16);
      \u0275\u0275text(26, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(27, "input", 17);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "div", 9)(29, "label", 18);
      \u0275\u0275text(30, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(31, "input", 19);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 20)(33, "h3");
      \u0275\u0275text(34, "Address ");
      \u0275\u0275elementStart(35, "span", 21);
      \u0275\u0275text(36, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(37, "div", 9)(38, "label", 22);
      \u0275\u0275text(39, "Search Address");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(40, "div", 23)(41, "input", 24, 1);
      \u0275\u0275listener("input", function RegisterProComponent_Template_input_input_41_listener($event) {
        \u0275\u0275restoreView(_r1);
        const regForm_r2 = \u0275\u0275reference(11);
        return \u0275\u0275resetView(ctx.onAddressInput($event, regForm_r2));
      })("blur", function RegisterProComponent_Template_input_blur_41_listener() {
        \u0275\u0275restoreView(_r1);
        return \u0275\u0275resetView(ctx.hideAddressList());
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(43, RegisterProComponent_div_43_Template, 2, 1, "div", 25)(44, RegisterProComponent_div_44_Template, 2, 0, "div", 26);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "small", 27);
      \u0275\u0275text(46, "Start typing to search for your address");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "div", 9)(48, "label", 28);
      \u0275\u0275text(49, "House Name/Number ");
      \u0275\u0275elementStart(50, "span", 21);
      \u0275\u0275text(51, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(52, "input", 29);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 9)(54, "label", 30);
      \u0275\u0275text(55, "Street 1 ");
      \u0275\u0275elementStart(56, "span", 21);
      \u0275\u0275text(57, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(58, "input", 31);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "div", 9)(60, "label", 32);
      \u0275\u0275text(61, "Street 2");
      \u0275\u0275elementEnd();
      \u0275\u0275element(62, "input", 33);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(63, "div", 9)(64, "label", 34);
      \u0275\u0275text(65, "City ");
      \u0275\u0275elementStart(66, "span", 21);
      \u0275\u0275text(67, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(68, "input", 35);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "div", 9)(70, "label", 36);
      \u0275\u0275text(71, "State ");
      \u0275\u0275elementStart(72, "span", 21);
      \u0275\u0275text(73, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(74, "input", 37);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 9)(76, "label", 38);
      \u0275\u0275text(77, "Country ");
      \u0275\u0275elementStart(78, "span", 21);
      \u0275\u0275text(79, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(80, "input", 39);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "div", 9)(82, "label", 40);
      \u0275\u0275text(83, "Zip/Postal Code ");
      \u0275\u0275elementStart(84, "span", 21);
      \u0275\u0275text(85, "*");
      \u0275\u0275elementEnd()();
      \u0275\u0275element(86, "input", 41);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "button", 42);
      \u0275\u0275text(88, " Create Pro Account ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      const regForm_r2 = \u0275\u0275reference(11);
      \u0275\u0275advance(43);
      \u0275\u0275property("ngIf", ctx.showAddressList && ctx.addressPredictions.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.addressLoading);
      \u0275\u0275advance(43);
      \u0275\u0275property("disabled", !regForm_r2.valid);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm], styles: ['\n\n.register-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(118, 75, 162, 0.35);\n}\n.header-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.12);\n}\n.form-control[_ngcontent-%COMP%]::placeholder {\n  color: #9ca3af;\n}\n.text-muted[_ngcontent-%COMP%] {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.address-section[_ngcontent-%COMP%] {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1.5px solid #f3f4f6;\n}\n.address-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.autocomplete-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item[_ngcontent-%COMP%]:hover {\n  background: rgba(118, 75, 162, 0.06);\n}\n.address-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.address-main[_ngcontent-%COMP%] {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading[_ngcontent-%COMP%] {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n  .register-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=register-pro.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterProComponent, [{
    type: Component,
    args: [{ selector: "app-register-pro", standalone: true, imports: [CommonModule, RouterModule, FormsModule], template: '<div class="register-container">\n  <div class="register-card">\n    <div class="register-header">\n      <div class="logo-circle">P</div>\n      <div class="header-text">\n        <h2>Register as Professional</h2>\n        <p class="subtitle">Create your pro account to manage services, clients and bookings.</p>\n      </div>\n    </div>\n\n    <form #regForm="ngForm" (ngSubmit)="onSubmit(regForm)">\n      <div class="form-group">\n        <label for="BusinessName">Business Name</label>\n        <input\n          type="text"\n          id="BusinessName"\n          name="BusinessName"\n          class="form-control"\n          ngModel\n          required\n          placeholder="e.g. Alice & Co"\n        />\n      </div>\n\n      <div class="form-group">\n        <label for="Name">Full Name</label>\n        <input\n          type="text"\n          id="Name"\n          name="Name"\n          class="form-control"\n          ngModel\n          required\n          placeholder="Your full name"\n        />\n      </div>\n\n      <div class="form-group">\n        <label for="email">Email</label>\n        <input\n          type="email"\n          id="email"\n          name="Email"\n          class="form-control"\n          ngModel\n          required\n          placeholder="name@company.com"\n        />\n      </div>\n\n      <div class="form-group">\n        <label for="phone">Phone Number</label>\n        <input\n          type="tel"\n          id="phone"\n          name="PhoneNumber"\n          class="form-control"\n          ngModel\n          required\n          placeholder="+1 555 555 5555"\n        />\n      </div>\n\n      <div class="form-group">\n        <label for="password">Password</label>\n        <input\n          type="password"\n          id="password"\n          name="Password"\n          class="form-control"\n          ngModel\n          required\n          minlength="6"\n          placeholder="At least 6 characters"\n        />\n      </div>\n\n      <div class="address-section">\n        <h3>Address <span class="required">*</span></h3>\n\n        <div class="form-group">\n          <label for="addressAutocomplete">Search Address</label>\n          <div class="autocomplete-container">\n            <input\n              #addressInput\n              type="text"\n              id="addressAutocomplete"\n              class="form-control"\n              placeholder="Start typing your address..."\n              (input)="onAddressInput($event, regForm)"\n              (blur)="hideAddressList()"\n              autocomplete="off"\n            />\n            <div class="address-dropdown" *ngIf="showAddressList && addressPredictions.length > 0">\n              <div\n                *ngFor="let prediction of addressPredictions"\n                class="address-item"\n                (click)="onAddressSelected(prediction, regForm)"\n              >\n                <div class="address-main">{{ prediction.mainText }}</div>\n                <div class="address-secondary">{{ prediction.secondaryText }}</div>\n              </div>\n            </div>\n            <div class="address-loading" *ngIf="addressLoading">Searching...</div>\n          </div>\n          <small class="text-muted">Start typing to search for your address</small>\n        </div>\n\n        <div class="form-group">\n          <label for="houseNameNumber">House Name/Number <span class="required">*</span></label>\n          <input type="text" id="houseNameNumber" name="houseNameNumber" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="street1">Street 1 <span class="required">*</span></label>\n          <input type="text" id="street1" name="street1" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="street2">Street 2</label>\n          <input type="text" id="street2" name="street2" class="form-control" />\n        </div>\n\n        <div class="form-group">\n          <label for="city">City <span class="required">*</span></label>\n          <input type="text" id="city" name="city" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="state">State <span class="required">*</span></label>\n          <input type="text" id="state" name="state" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="country">Country <span class="required">*</span></label>\n          <input type="text" id="country" name="country" class="form-control" ngModel required />\n        </div>\n\n        <div class="form-group">\n          <label for="zipPostalCode">Zip/Postal Code <span class="required">*</span></label>\n          <input type="text" id="zipPostalCode" name="zipPostalCode" class="form-control" ngModel required />\n        </div>\n      </div>\n\n      <button type="submit" class="btn-submit" [disabled]="!regForm.valid">\n        Create Pro Account\n      </button>\n    </form>\n  </div>\n</div>\n', styles: ['/* src/app/auth/register-pro/register-pro.scss */\n.register-container {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  padding: 40px 20px;\n}\n.register-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 16px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n  width: 100%;\n  max-width: 480px;\n}\n.register-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(118, 75, 162, 0.35);\n}\n.header-text h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.subtitle {\n  margin: 4px 0 0;\n  color: #6b7280;\n  font-size: 13px;\n  line-height: 1.4;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  font-size: 13px;\n  color: #374151;\n}\n.required {\n  color: #ef4444;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.12);\n}\n.form-control::placeholder {\n  color: #9ca3af;\n}\n.text-muted {\n  font-size: 11px;\n  color: #9ca3af;\n  display: block;\n  margin-top: 4px;\n}\n.address-section {\n  margin-top: 24px;\n  padding-top: 20px;\n  border-top: 1.5px solid #f3f4f6;\n}\n.address-section h3 {\n  font-size: 13px;\n  font-weight: 700;\n  margin: 0 0 16px;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.autocomplete-container {\n  position: relative;\n  width: 100%;\n}\n.address-dropdown {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  background: white;\n  border: 1.5px solid #e5e7eb;\n  border-top: none;\n  border-radius: 0 0 8px 8px;\n  max-height: 240px;\n  overflow-y: auto;\n  z-index: 1000;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);\n}\n.address-item {\n  padding: 10px 14px;\n  border-bottom: 1px solid #f3f4f6;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.address-item:hover {\n  background: rgba(118, 75, 162, 0.06);\n}\n.address-item:last-child {\n  border-bottom: none;\n}\n.address-main {\n  font-weight: 500;\n  color: #1f2937;\n  font-size: 13px;\n}\n.address-secondary {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-top: 2px;\n}\n.address-loading {\n  padding: 12px 14px;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 13px;\n}\n.btn-submit {\n  width: 100%;\n  margin-top: 8px;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-family: inherit;\n  font-weight: 600;\n  color: white;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n  min-height: 48px;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n@media (max-width: 540px) {\n  .register-container {\n    padding: 16px 12px;\n  }\n  .register-card {\n    padding: 24px 20px;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=register-pro.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: Router }, { type: AddressService }], { addressInput: [{
    type: ViewChild,
    args: ["addressInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterProComponent, { className: "RegisterProComponent", filePath: "src/app/auth/register-pro/register-pro.ts", lineNumber: 15 });
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RegisterChoiceComponent, selectors: [["app-register-choice"]], decls: 60, vars: 0, consts: [[1, "register-choice-wrapper"], [1, "hero"], [1, "hero-content"], [1, "registration-options"], [1, "container"], [1, "options-grid"], [1, "option-card", "user-card"], [1, "card-icon", "user-icon"], [1, "card-subtitle"], [1, "card-description"], [1, "features-list"], [1, "btn-primary", 3, "click"], [1, "option-card", "pro-card"], [1, "card-icon", "pro-icon"], [1, "btn-secondary", 3, "click"], [1, "info-section"], [1, "login-links"], ["href", "javascript:void(0)", 3, "click"]], template: function RegisterChoiceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Join yProHub");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(5, "p");
      \u0275\u0275text(6, "Choose how you want to get started");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(7, "section", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "div", 7);
      \u0275\u0275text(12, "U");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(13, "h2");
      \u0275\u0275text(14, "Looking for a Professional?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(15, "p", 8);
      \u0275\u0275text(16, "Register as a User");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(17, "p", 9);
      \u0275\u0275text(18, " Find and hire verified professionals for your projects. Post jobs, compare bids, and manage your work all in one place. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(19, "ul", 10)(20, "li");
      \u0275\u0275text(21, "Post unlimited jobs");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(22, "li");
      \u0275\u0275text(23, "Get multiple quotes");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(24, "li");
      \u0275\u0275text(25, "Secure payment system");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(26, "li");
      \u0275\u0275text(27, "Direct messaging");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(28, "li");
      \u0275\u0275text(29, "Project tracking");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(30, "button", 11);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_button_click_30_listener() {
        return ctx.navigateTo("/auth/register/user");
      });
      \u0275\u0275text(31, " Register as User ");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(32, "div", 12)(33, "div", 13);
      \u0275\u0275text(34, "P");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(35, "h2");
      \u0275\u0275text(36, "Ready to Work?");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(37, "p", 8);
      \u0275\u0275text(38, "Register as a Professional");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(39, "p", 9);
      \u0275\u0275text(40, " Grow your business and reach thousands of potential clients. Showcase your skills, manage bids, and build your reputation. ");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(41, "ul", 10)(42, "li");
      \u0275\u0275text(43, "Build your portfolio");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(44, "li");
      \u0275\u0275text(45, "Receive job bids");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(46, "li");
      \u0275\u0275text(47, "Secure payments");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(48, "li");
      \u0275\u0275text(49, "Professional reviews");
      \u0275\u0275domElementEnd();
      \u0275\u0275domElementStart(50, "li");
      \u0275\u0275text(51, "Business analytics");
      \u0275\u0275domElementEnd()();
      \u0275\u0275domElementStart(52, "button", 14);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_button_click_52_listener() {
        return ctx.navigateTo("/auth/register/pro");
      });
      \u0275\u0275text(53, " Register as Professional ");
      \u0275\u0275domElementEnd()()();
      \u0275\u0275domElementStart(54, "div", 15)(55, "div", 16)(56, "p");
      \u0275\u0275text(57, " Already have an account? ");
      \u0275\u0275domElementStart(58, "a", 17);
      \u0275\u0275domListener("click", function RegisterChoiceComponent_Template_a_click_58_listener() {
        return ctx.navigateTo("/auth/login");
      });
      \u0275\u0275text(59, "Sign in here");
      \u0275\u0275domElementEnd()()()()()()();
    }
  }, dependencies: [CommonModule], styles: ['@charset "UTF-8";\n\n\n\n.register-choice-wrapper[_ngcontent-%COMP%] {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: #1f2937;\n  background: #fff;\n}\n.hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 12px;\n  line-height: 1.1;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.95;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.registration-options[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.options-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));\n  gap: 40px;\n  margin-bottom: 40px;\n}\n.option-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px 32px;\n  border-radius: 16px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  border: 2px solid transparent;\n  display: flex;\n  flex-direction: column;\n  transition:\n    transform 0.25s,\n    box-shadow 0.25s,\n    border-color 0.25s;\n}\n.option-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);\n  border-color: #667eea;\n}\n.card-icon[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 26px;\n  font-weight: 700;\n  color: white;\n  letter-spacing: 0.5px;\n  margin-bottom: 20px;\n  flex-shrink: 0;\n}\n.card-icon.user-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.3);\n}\n.card-icon.pro-icon[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  box-shadow: 0 6px 16px rgba(118, 75, 162, 0.3);\n}\n.option-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  margin: 0 0 6px;\n  color: #1f2937;\n}\n.card-subtitle[_ngcontent-%COMP%] {\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n  margin: 0 0 12px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.pro-card[_ngcontent-%COMP%]   .card-subtitle[_ngcontent-%COMP%] {\n  color: #764ba2;\n}\n.card-description[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.65;\n  margin-bottom: 24px;\n}\n.features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 32px;\n  flex: 1;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4b5563;\n  padding: 7px 0;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  border-bottom: 1px solid #f3f4f6;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  content: "\\2713";\n  font-weight: 700;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.pro-card[_ngcontent-%COMP%]   .features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]::before {\n  color: #764ba2;\n}\n.btn-primary[_ngcontent-%COMP%], \n.btn-secondary[_ngcontent-%COMP%] {\n  padding: 13px 28px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 15px;\n  cursor: pointer;\n  font-family: inherit;\n  text-align: center;\n  min-height: 48px;\n  transition: transform 0.15s, box-shadow 0.15s;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n}\n.btn-primary[_ngcontent-%COMP%]:hover, \n.btn-secondary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.3);\n}\n.btn-secondary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n}\n.btn-secondary[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 8px 20px rgba(118, 75, 162, 0.3);\n}\n.info-section[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 28px 20px;\n  background: white;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);\n}\n.login-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 15px;\n  color: #6b7280;\n}\n.login-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 600;\n}\n.login-links[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n@media (max-width: 768px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 48px 16px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n  .registration-options[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .options-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n    margin-bottom: 20px;\n  }\n  .option-card[_ngcontent-%COMP%] {\n    padding: 28px 24px;\n  }\n  .option-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);\n  }\n  .btn-primary[_ngcontent-%COMP%], \n   .btn-secondary[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 36px 12px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .registration-options[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .option-card[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .card-icon[_ngcontent-%COMP%] {\n    width: 60px;\n    height: 60px;\n    font-size: 22px;\n    margin-bottom: 16px;\n  }\n  .option-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 19px;\n  }\n}\n/*# sourceMappingURL=register-choice.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RegisterChoiceComponent, [{
    type: Component,
    args: [{ selector: "app-register-choice", standalone: true, imports: [CommonModule], template: `<div class="register-choice-wrapper">
  <!-- Hero Section -->
  <section class="hero">
    <div class="hero-content">
      <h1>Join yProHub</h1>
      <p>Choose how you want to get started</p>
    </div>
  </section>

  <!-- Registration Options -->
  <section class="registration-options">
    <div class="container">
      <div class="options-grid">
        <!-- Register as User -->
        <div class="option-card user-card">
          <div class="card-icon user-icon">U</div>
          <h2>Looking for a Professional?</h2>
          <p class="card-subtitle">Register as a User</p>
          <p class="card-description">
            Find and hire verified professionals for your projects. Post jobs, compare bids, and manage your work all in one place.
          </p>
          <ul class="features-list">
            <li>Post unlimited jobs</li>
            <li>Get multiple quotes</li>
            <li>Secure payment system</li>
            <li>Direct messaging</li>
            <li>Project tracking</li>
          </ul>
          <button class="btn-primary" (click)="navigateTo('/auth/register/user')">
            Register as User
          </button>
        </div>

        <!-- Register as Professional -->
        <div class="option-card pro-card">
          <div class="card-icon pro-icon">P</div>
          <h2>Ready to Work?</h2>
          <p class="card-subtitle">Register as a Professional</p>
          <p class="card-description">
            Grow your business and reach thousands of potential clients. Showcase your skills, manage bids, and build your reputation.
          </p>
          <ul class="features-list">
            <li>Build your portfolio</li>
            <li>Receive job bids</li>
            <li>Secure payments</li>
            <li>Professional reviews</li>
            <li>Business analytics</li>
          </ul>
          <button class="btn-secondary" (click)="navigateTo('/auth/register/pro')">
            Register as Professional
          </button>
        </div>
      </div>

      <!-- Info Section -->
      <div class="info-section">
        <div class="login-links">
          <p>
            Already have an account?
            <a href="javascript:void(0)" (click)="navigateTo('/auth/login')">Sign in here</a>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RegisterChoiceComponent, { className: "RegisterChoiceComponent", filePath: "src/app/auth/register-choice/register-choice.ts", lineNumber: 12 });
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
function ForgotPasswordComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 8)(3, "a", 9);
    \u0275\u0275text(4, "Back to Login");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ForgotPasswordComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ForgotPasswordComponent_form_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11, 0);
    \u0275\u0275listener("ngSubmit", function ForgotPasswordComponent_form_8_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const fpForm_r3 = \u0275\u0275reference(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit(fpForm_r3));
    });
    \u0275\u0275elementStart(2, "div", 12)(3, "label");
    \u0275\u0275text(4, "Account Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 13)(6, "button", 14);
    \u0275\u0275listener("click", function ForgotPasswordComponent_form_8_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.userType = "User");
    });
    \u0275\u0275text(7, "Customer");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 14);
    \u0275\u0275listener("click", function ForgotPasswordComponent_form_8_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.userType = "Pro");
    });
    \u0275\u0275text(9, "Professional");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 12)(11, "label", 15);
    \u0275\u0275text(12, "Email Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ForgotPasswordComponent_form_8_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.email, $event) || (ctx_r0.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "button", 17);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 8)(17, "a", 9);
    \u0275\u0275text(18, "Back to Login");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const fpForm_r3 = \u0275\u0275reference(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r0.userType === "User");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.userType === "Pro");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.email);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !fpForm_r3.valid || ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? "Sending\u2026" : "Send Reset Link", " ");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ForgotPasswordComponent, selectors: [["app-forgot-password"]], decls: 9, vars: 3, consts: [["fpForm", "ngForm"], [1, "fp-wrapper"], [1, "fp-card"], [1, "subtitle"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-success"], [1, "back-link"], ["routerLink", "/auth/login"], [1, "alert", "alert-error"], [3, "ngSubmit"], [1, "form-group"], [1, "type-buttons"], ["type", "button", 1, "type-btn", 3, "click"], ["for", "email"], ["type", "email", "id", "email", "name", "email", "required", "", "email", "", "placeholder", "Enter your email", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "submit-btn", 3, "disabled"]], template: function ForgotPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
      \u0275\u0275text(3, "Forgot Password");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Enter your email and we'll send you a reset link.");
      \u0275\u0275elementEnd();
      \u0275\u0275template(6, ForgotPasswordComponent_div_6_Template, 5, 1, "div", 4)(7, ForgotPasswordComponent_div_7_Template, 2, 1, "div", 5)(8, ForgotPasswordComponent_form_8_Template, 19, 7, "form", 6);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.successMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, EmailValidator, NgModel, NgForm, RouterModule, RouterLink], styles: ["\n\n.fp-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  font-family: Arial, sans-serif;\n}\n.fp-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n.fp-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n  color: #333;\n}\n.fp-card[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 24px;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: left;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  text-align: left;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #444;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.type-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n}\n.type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 9px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #555;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.type-btn.active[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #667eea;\n  color: #fff;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: opacity 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 14px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=forgot-password.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ForgotPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-forgot-password", imports: [CommonModule, FormsModule, RouterModule], template: `<div class="fp-wrapper">
  <div class="fp-card">
    <h2>Forgot Password</h2>
    <p class="subtitle">Enter your email and we'll send you a reset link.</p>

    <div *ngIf="successMessage" class="alert alert-success">
      {{ successMessage }}
      <div class="back-link"><a routerLink="/auth/login">Back to Login</a></div>
    </div>

    <div *ngIf="errorMessage" class="alert alert-error">{{ errorMessage }}</div>

    <form *ngIf="!successMessage" #fpForm="ngForm" (ngSubmit)="onSubmit(fpForm)">
      <div class="form-group">
        <label>Account Type</label>
        <div class="type-buttons">
          <button type="button" class="type-btn" [class.active]="userType === 'User'" (click)="userType = 'User'">Customer</button>
          <button type="button" class="type-btn" [class.active]="userType === 'Pro'" (click)="userType = 'Pro'">Professional</button>
        </div>
      </div>

      <div class="form-group">
        <label for="email">Email Address</label>
        <input
          type="email"
          id="email"
          name="email"
          [(ngModel)]="email"
          required
          email
          placeholder="Enter your email"
        />
      </div>

      <button type="submit" [disabled]="!fpForm.valid || isLoading" class="submit-btn">
        {{ isLoading ? 'Sending\u2026' : 'Send Reset Link' }}
      </button>

      <p class="back-link"><a routerLink="/auth/login">Back to Login</a></p>
    </form>
  </div>
</div>
`, styles: ["/* src/app/auth/forgot-password/forgot-password.scss */\n.fp-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  font-family: Arial, sans-serif;\n}\n.fp-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n.fp-card h2 {\n  margin-bottom: 8px;\n  color: #333;\n}\n.fp-card .subtitle {\n  color: #666;\n  font-size: 14px;\n  margin-bottom: 24px;\n}\n.alert {\n  padding: 14px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: left;\n}\n.alert.alert-success {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.alert.alert-error {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.form-group {\n  margin-bottom: 18px;\n  text-align: left;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #444;\n  font-size: 14px;\n}\n.form-group input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.type-buttons {\n  display: flex;\n  gap: 10px;\n}\n.type-btn {\n  flex: 1;\n  padding: 9px;\n  border: 2px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #555;\n  font-size: 14px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.type-btn.active {\n  border-color: #667eea;\n  background: #667eea;\n  color: #fff;\n}\n.submit-btn {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: opacity 0.2s;\n}\n.submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.back-link {\n  margin-top: 16px;\n  font-size: 14px;\n}\n.back-link a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.back-link a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=forgot-password.css.map */\n"] }]
  }], () => [{ type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ForgotPasswordComponent, { className: "ForgotPasswordComponent", filePath: "src/app/auth/forgot-password/forgot-password.ts", lineNumber: 13 });
})();

// src/app/auth/reset-password/reset-password.ts
function ResetPasswordComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3, "Redirecting to login\u2026");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.successMessage, " ");
  }
}
function ResetPasswordComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "div", 9)(3, "a", 10);
    \u0275\u0275text(4, "Request a new reset link");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.errorMessage, " ");
  }
}
function ResetPasswordComponent_form_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ResetPasswordComponent_form_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 11, 0);
    \u0275\u0275listener("ngSubmit", function ResetPasswordComponent_form_6_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const rpForm_r3 = \u0275\u0275reference(1);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onSubmit(rpForm_r3));
    });
    \u0275\u0275template(2, ResetPasswordComponent_form_6_div_2_Template, 2, 1, "div", 4);
    \u0275\u0275elementStart(3, "div", 12)(4, "label", 13);
    \u0275\u0275text(5, "New Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_form_6_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.newPassword, $event) || (ctx_r0.newPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 12)(8, "label", 15);
    \u0275\u0275text(9, "Confirm Password");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function ResetPasswordComponent_form_6_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.confirmPassword, $event) || (ctx_r0.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 17);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "p", 9)(14, "a", 18);
    \u0275\u0275text(15, "Back to Login");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rpForm_r3 = \u0275\u0275reference(1);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.newPassword);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !rpForm_r3.valid || ctx_r0.isLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isLoading ? "Saving\u2026" : "Set New Password", " ");
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ResetPasswordComponent, selectors: [["app-reset-password"]], decls: 7, vars: 3, consts: [["rpForm", "ngForm"], [1, "rp-wrapper"], [1, "rp-card"], ["class", "alert alert-success", 4, "ngIf"], ["class", "alert alert-error", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "alert", "alert-success"], [1, "sub-note"], [1, "alert", "alert-error"], [1, "back-link"], ["routerLink", "/auth/forgot-password"], [3, "ngSubmit"], [1, "form-group"], ["for", "newPassword"], ["type", "password", "id", "newPassword", "name", "newPassword", "required", "", "minlength", "8", "placeholder", "At least 8 characters", 3, "ngModelChange", "ngModel"], ["for", "confirmPassword"], ["type", "password", "id", "confirmPassword", "name", "confirmPassword", "required", "", "minlength", "8", "placeholder", "Repeat new password", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["routerLink", "/auth/login"]], template: function ResetPasswordComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2");
      \u0275\u0275text(3, "Set New Password");
      \u0275\u0275elementEnd();
      \u0275\u0275template(4, ResetPasswordComponent_div_4_Template, 4, 1, "div", 3)(5, ResetPasswordComponent_div_5_Template, 5, 1, "div", 4)(6, ResetPasswordComponent_form_6_Template, 16, 5, "form", 5);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.successMessage);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.errorMessage && !ctx.token);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.token && !ctx.successMessage);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterModule, RouterLink], styles: ["\n\n.rp-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  font-family: Arial, sans-serif;\n}\n.rp-card[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n.rp-card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n  color: #333;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 14px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: left;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.alert[_ngcontent-%COMP%]   .sub-note[_ngcontent-%COMP%] {\n  margin-top: 6px;\n  font-size: 13px;\n  opacity: 0.8;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 18px;\n  text-align: left;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #444;\n  font-size: 14px;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: opacity 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.back-link[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  font-size: 14px;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.back-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=reset-password.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ResetPasswordComponent, [{
    type: Component,
    args: [{ selector: "app-reset-password", imports: [CommonModule, FormsModule, RouterModule], template: `<div class="rp-wrapper">
  <div class="rp-card">
    <h2>Set New Password</h2>

    <div *ngIf="successMessage" class="alert alert-success">
      {{ successMessage }}
      <div class="sub-note">Redirecting to login\u2026</div>
    </div>

    <div *ngIf="errorMessage && !token" class="alert alert-error">
      {{ errorMessage }}
      <div class="back-link"><a routerLink="/auth/forgot-password">Request a new reset link</a></div>
    </div>

    <form *ngIf="token && !successMessage" #rpForm="ngForm" (ngSubmit)="onSubmit(rpForm)">
      <div *ngIf="errorMessage" class="alert alert-error">{{ errorMessage }}</div>

      <div class="form-group">
        <label for="newPassword">New Password</label>
        <input
          type="password"
          id="newPassword"
          name="newPassword"
          [(ngModel)]="newPassword"
          required
          minlength="8"
          placeholder="At least 8 characters"
        />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          [(ngModel)]="confirmPassword"
          required
          minlength="8"
          placeholder="Repeat new password"
        />
      </div>

      <button type="submit" [disabled]="!rpForm.valid || isLoading" class="submit-btn">
        {{ isLoading ? 'Saving\u2026' : 'Set New Password' }}
      </button>

      <p class="back-link"><a routerLink="/auth/login">Back to Login</a></p>
    </form>
  </div>
</div>
`, styles: ["/* src/app/auth/reset-password/reset-password.scss */\n.rp-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  font-family: Arial, sans-serif;\n}\n.rp-card {\n  background: #fff;\n  padding: 36px 40px;\n  border-radius: 12px;\n  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);\n  width: 100%;\n  max-width: 400px;\n  text-align: center;\n}\n.rp-card h2 {\n  margin-bottom: 24px;\n  color: #333;\n}\n.alert {\n  padding: 14px 16px;\n  border-radius: 8px;\n  margin-bottom: 20px;\n  font-size: 14px;\n  text-align: left;\n}\n.alert.alert-success {\n  background: #f0fdf4;\n  border: 1px solid #86efac;\n  color: #166534;\n}\n.alert.alert-error {\n  background: #fef2f2;\n  border: 1px solid #fca5a5;\n  color: #991b1b;\n}\n.alert .sub-note {\n  margin-top: 6px;\n  font-size: 13px;\n  opacity: 0.8;\n}\n.form-group {\n  margin-bottom: 18px;\n  text-align: left;\n}\n.form-group label {\n  display: block;\n  margin-bottom: 6px;\n  font-weight: 600;\n  color: #444;\n  font-size: 14px;\n}\n.form-group input {\n  width: 100%;\n  padding: 10px 12px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 15px;\n  box-sizing: border-box;\n  transition: border-color 0.2s;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.submit-btn {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: opacity 0.2s;\n}\n.submit-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.submit-btn:hover:not(:disabled) {\n  opacity: 0.9;\n}\n.back-link {\n  margin-top: 16px;\n  font-size: 14px;\n}\n.back-link a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n}\n.back-link a:hover {\n  text-decoration: underline;\n}\n/*# sourceMappingURL=reset-password.css.map */\n"] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: ApiService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ResetPasswordComponent, { className: "ResetPasswordComponent", filePath: "src/app/auth/reset-password/reset-password.ts", lineNumber: 13 });
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
//# sourceMappingURL=chunk-7OQQ2AAO.js.map

