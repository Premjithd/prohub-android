import {
  DefaultValueAccessor,
  FormsModule,
  MinLengthValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-WDC3QMAT.js";
import {
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
  CommonModule,
  Component,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O3FI6JPK.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/accept-pro-user-invite/accept-pro-user-invite.ts
function AcceptProUserInviteComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.error);
  }
}
function AcceptProUserInviteComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.success);
  }
}
function AcceptProUserInviteComponent_form_12_small_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "small", 22);
    \u0275\u0275text(1, "Passwords do not match");
    \u0275\u0275elementEnd();
  }
}
function AcceptProUserInviteComponent_form_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "form", 12);
    \u0275\u0275listener("ngSubmit", function AcceptProUserInviteComponent_form_12_Template_form_ngSubmit_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.submit());
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "label");
    \u0275\u0275text(4, "First Name ");
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "input", 16);
    \u0275\u0275twoWayListener("ngModelChange", function AcceptProUserInviteComponent_form_12_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.firstName, $event) || (ctx_r0.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "label");
    \u0275\u0275text(10, "Last Name ");
    \u0275\u0275elementStart(11, "span", 15);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 17);
    \u0275\u0275twoWayListener("ngModelChange", function AcceptProUserInviteComponent_form_12_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.lastName, $event) || (ctx_r0.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 14)(15, "label");
    \u0275\u0275text(16, "Password ");
    \u0275\u0275elementStart(17, "span", 15);
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "input", 18);
    \u0275\u0275twoWayListener("ngModelChange", function AcceptProUserInviteComponent_form_12_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.password, $event) || (ctx_r0.password = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 14)(21, "label");
    \u0275\u0275text(22, "Confirm Password ");
    \u0275\u0275elementStart(23, "span", 15);
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "input", 19);
    \u0275\u0275twoWayListener("ngModelChange", function AcceptProUserInviteComponent_form_12_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.confirmPassword, $event) || (ctx_r0.confirmPassword = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AcceptProUserInviteComponent_form_12_small_26_Template, 2, 0, "small", 20);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "button", 21);
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.firstName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.lastName);
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.password);
    \u0275\u0275advance(6);
    \u0275\u0275classProp("is-invalid", ctx_r0.passwordMismatch);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.confirmPassword);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.passwordMismatch);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.loading || ctx_r0.passwordMismatch);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.loading ? "Creating account\u2026" : "Create Account", " ");
  }
}
var AcceptProUserInviteComponent = class _AcceptProUserInviteComponent {
  route;
  router;
  auth;
  token = "";
  firstName = "";
  lastName = "";
  password = "";
  confirmPassword = "";
  loading = false;
  error = "";
  success = "";
  constructor(route, router, auth) {
    this.route = route;
    this.router = router;
    this.auth = auth;
  }
  ngOnInit() {
    this.token = this.route.snapshot.queryParamMap.get("token") ?? "";
    if (!this.token) {
      this.error = "No invitation token found. Please use the link from your invitation email.";
    }
  }
  get passwordMismatch() {
    return !!this.confirmPassword && this.password !== this.confirmPassword;
  }
  submit() {
    if (!this.firstName || !this.lastName || !this.password || !this.confirmPassword) {
      this.error = "Please fill in all fields.";
      return;
    }
    if (this.passwordMismatch) {
      this.error = "Passwords do not match.";
      return;
    }
    if (this.password.length < 6) {
      this.error = "Password must be at least 6 characters.";
      return;
    }
    this.loading = true;
    this.error = "";
    this.auth.acceptProUserInvite(this.token, this.firstName, this.lastName, this.password).subscribe({
      next: () => {
        this.success = "Welcome! Your account has been created. Redirecting\u2026";
        this.loading = false;
        setTimeout(() => this.router.navigate(["/"]), 2e3);
      },
      error: (err) => {
        this.error = err.error?.message || "Could not process invitation. Please try again.";
        this.loading = false;
      }
    });
  }
  static \u0275fac = function AcceptProUserInviteComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AcceptProUserInviteComponent)(\u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Auth));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AcceptProUserInviteComponent, selectors: [["app-accept-pro-user-invite"]], decls: 17, vars: 3, consts: [[1, "invite-page"], [1, "invite-card"], [1, "card-header"], [1, "logo-circle"], [1, "subtitle"], ["class", "error-banner", 4, "ngIf"], ["class", "success-banner", 4, "ngIf"], [3, "ngSubmit", 4, "ngIf"], [1, "login-link"], ["routerLink", "/auth/login"], [1, "error-banner"], [1, "success-banner"], [3, "ngSubmit"], [1, "name-row"], [1, "form-group"], [1, "req"], ["type", "text", "name", "firstName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "required", "", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "password", "required", "", "minlength", "6", "placeholder", "At least 6 characters", 1, "form-control", 3, "ngModelChange", "ngModel"], ["type", "password", "name", "confirmPassword", "required", "", "placeholder", "Re-enter your password", 1, "form-control", 3, "ngModelChange", "ngModel"], ["class", "field-error", 4, "ngIf"], ["type", "submit", 1, "btn-submit", 3, "disabled"], [1, "field-error"]], template: function AcceptProUserInviteComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
      \u0275\u0275text(4, "P");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "div")(6, "h2");
      \u0275\u0275text(7, "Join the Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "Set up your yProHub account to get started");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(10, AcceptProUserInviteComponent_div_10_Template, 2, 1, "div", 5)(11, AcceptProUserInviteComponent_div_11_Template, 2, 1, "div", 6)(12, AcceptProUserInviteComponent_form_12_Template, 29, 9, "form", 7);
      \u0275\u0275elementStart(13, "p", 8);
      \u0275\u0275text(14, "Already have an account? ");
      \u0275\u0275elementStart(15, "a", 9);
      \u0275\u0275text(16, "Sign in");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.error && !ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.success);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.success && ctx.token);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MinLengthValidator, NgModel, NgForm, RouterModule, RouterLink], styles: ['\n\n.invite-page[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 40px 20px;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n}\n.invite-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  padding: 36px 40px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.card-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #6b7280;\n}\n.logo-circle[_ngcontent-%COMP%] {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.name-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.req[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control.is-invalid[_ngcontent-%COMP%] {\n  border-color: #ef4444;\n}\n.field-error[_ngcontent-%COMP%] {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.error-banner[_ngcontent-%COMP%] {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 12px 14px;\n  color: #ef4444;\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n.success-banner[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 12px 14px;\n  color: #166534;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.btn-submit[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  min-height: 48px;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-submit[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.login-link[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n@media (max-width: 540px) {\n  .invite-card[_ngcontent-%COMP%] {\n    padding: 24px 20px;\n  }\n  .name-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=accept-pro-user-invite.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AcceptProUserInviteComponent, [{
    type: Component,
    args: [{ selector: "app-accept-pro-user-invite", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="invite-page">
  <div class="invite-card">

    <div class="card-header">
      <div class="logo-circle">P</div>
      <div>
        <h2>Join the Team</h2>
        <p class="subtitle">Set up your yProHub account to get started</p>
      </div>
    </div>

    <div class="error-banner" *ngIf="error && !success">{{ error }}</div>
    <div class="success-banner" *ngIf="success">{{ success }}</div>

    <form (ngSubmit)="submit()" *ngIf="!success && token">

      <div class="name-row">
        <div class="form-group">
          <label>First Name <span class="req">*</span></label>
          <input type="text" class="form-control" [(ngModel)]="firstName" name="firstName" required />
        </div>
        <div class="form-group">
          <label>Last Name <span class="req">*</span></label>
          <input type="text" class="form-control" [(ngModel)]="lastName" name="lastName" required />
        </div>
      </div>

      <div class="form-group">
        <label>Password <span class="req">*</span></label>
        <input type="password" class="form-control" [(ngModel)]="password" name="password" required minlength="6" placeholder="At least 6 characters" />
      </div>

      <div class="form-group">
        <label>Confirm Password <span class="req">*</span></label>
        <input type="password" class="form-control" [class.is-invalid]="passwordMismatch" [(ngModel)]="confirmPassword" name="confirmPassword" required placeholder="Re-enter your password" />
        <small class="field-error" *ngIf="passwordMismatch">Passwords do not match</small>
      </div>

      <button type="submit" class="btn-submit" [disabled]="loading || passwordMismatch">
        {{ loading ? 'Creating account\u2026' : 'Create Account' }}
      </button>

    </form>

    <p class="login-link">Already have an account? <a routerLink="/auth/login">Sign in</a></p>

  </div>
</div>
`, styles: ['/* src/app/features/accept-pro-user-invite/accept-pro-user-invite.scss */\n.invite-page {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  min-height: 100vh;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  padding: 40px 20px;\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    sans-serif;\n}\n.invite-card {\n  background: #fff;\n  border-radius: 16px;\n  padding: 36px 40px;\n  width: 100%;\n  max-width: 480px;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);\n}\n.card-header {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 28px;\n}\n.card-header h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.card-header .subtitle {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #6b7280;\n}\n.logo-circle {\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 20px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.name-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 12px;\n}\n.form-group {\n  margin-bottom: 16px;\n}\n.form-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.req {\n  color: #ef4444;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #1f2937;\n  background: #fff;\n  transition: border-color 0.2s;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.form-control.is-invalid {\n  border-color: #ef4444;\n}\n.field-error {\n  display: block;\n  color: #ef4444;\n  font-size: 12px;\n  margin-top: 4px;\n}\n.error-banner {\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  padding: 12px 14px;\n  color: #ef4444;\n  font-size: 13px;\n  margin-bottom: 20px;\n}\n.success-banner {\n  background: #f0fdf4;\n  border: 1px solid #bbf7d0;\n  border-radius: 8px;\n  padding: 12px 14px;\n  color: #166534;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 20px;\n}\n.btn-submit {\n  width: 100%;\n  padding: 12px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  min-height: 48px;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-submit:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.35);\n}\n.btn-submit:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.login-link {\n  text-align: center;\n  margin-top: 20px;\n  font-size: 13px;\n  color: #6b7280;\n}\n.login-link a {\n  color: #667eea;\n  font-weight: 600;\n  text-decoration: none;\n}\n.login-link a:hover {\n  text-decoration: underline;\n}\n@media (max-width: 540px) {\n  .invite-card {\n    padding: 24px 20px;\n  }\n  .name-row {\n    grid-template-columns: 1fr;\n    gap: 0;\n  }\n}\n/*# sourceMappingURL=accept-pro-user-invite.css.map */\n'] }]
  }], () => [{ type: ActivatedRoute }, { type: Router }, { type: Auth }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AcceptProUserInviteComponent, { className: "AcceptProUserInviteComponent", filePath: "src/app/features/accept-pro-user-invite/accept-pro-user-invite.ts", lineNumber: 14 });
})();
export {
  AcceptProUserInviteComponent
};
//# sourceMappingURL=chunk-4ADBOOCY.js.map

