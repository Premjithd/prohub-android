import {
  PaymentMethodService
} from "./chunk-FATKVMQ4.js";
import {
  ProService,
  UserService,
  VerificationService
} from "./chunk-K7M6VCS6.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XYXJ3G2H.js";
import "./chunk-PNKNM5OB.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-GBPGCUBR.js";
import "./chunk-NIIRLI7V.js";
import {
  BusinessService
} from "./chunk-IYXXOFE3.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BUUU66NZ.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-KRKF3QD5.js";
import {
  Auth
} from "./chunk-YKIUM4NK.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-F22IK7JB.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
  ViewChild,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-CTKGZTQY.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/core/services/kyc.service.ts
var KycService = class _KycService {
  http;
  apiUrl = `${environment.apiUrl}/kyc`;
  constructor(http) {
    this.http = http;
  }
  getStatus() {
    return this.http.get(`${this.apiUrl}/status`);
  }
  uploadAadhaar(file) {
    const form = new FormData();
    form.append("file", file);
    return this.http.post(`${this.apiUrl}/upload/aadhaar`, form);
  }
  uploadPan(file) {
    const form = new FormData();
    form.append("file", file);
    return this.http.post(`${this.apiUrl}/upload/pan`, form);
  }
  submitKyc() {
    return this.http.post(`${this.apiUrl}/submit`, {});
  }
  static \u0275fac = function KycService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _KycService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _KycService, factory: _KycService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(KycService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/settings/settings.ts
var _c0 = ["aadhaarInput"];
var _c1 = ["panInput"];
function SettingsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function SettingsComponent_ng_container_12_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.userEmail);
  }
}
function SettingsComponent_ng_container_12_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("verified", ctx_r0.isEmailVerified)("unverified", !ctx_r0.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isEmailVerified ? "verified" : "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isEmailVerified ? \u0275\u0275pipeBind1(4, 6, "SETTINGS.VERIFIED") : \u0275\u0275pipeBind1(5, 8, "SETTINGS.UNVERIFIED"), " ");
  }
}
function SettingsComponent_ng_container_12_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEditEmail());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.CHANGE"), " ");
  }
}
function SettingsComponent_ng_container_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailSuccess, " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_13_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_13_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_13_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailEditError);
  }
}
function SettingsComponent_ng_container_12_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 22)(2, "input", 23);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_13_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailDraft, $event) || (ctx_r0.emailDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function SettingsComponent_ng_container_12_ng_container_13_Template_input_keyup_enter_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEmail());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_13_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.saveEmail());
    });
    \u0275\u0275template(4, SettingsComponent_ng_container_12_ng_container_13_mat_spinner_4_Template, 1, 0, "mat-spinner", 25)(5, SettingsComponent_ng_container_12_ng_container_13_mat_icon_5_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 26);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_13_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEditEmail());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SettingsComponent_ng_container_12_ng_container_13_p_12_Template, 4, 1, "p", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailDraft);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.savingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.savingEmail);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingEmail ? \u0275\u0275pipeBind1(7, 8, "SETTINGS.SENDING") : \u0275\u0275pipeBind1(8, 10, "COMMON.SAVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.savingEmail);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "COMMON.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.emailEditError);
  }
}
function SettingsComponent_ng_container_12_ng_container_14_div_4_mat_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_14_div_4_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_14_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_14_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailCode());
    });
    \u0275\u0275template(2, SettingsComponent_ng_container_12_ng_container_14_div_4_mat_spinner_2_Template, 1, 0, "mat-spinner", 25)(3, SettingsComponent_ng_container_12_ng_container_14_div_4_mat_icon_3_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.emailStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailStep !== "sending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailStep === "sending" ? \u0275\u0275pipeBind1(5, 4, "SETTINGS.SENDING") : \u0275\u0275pipeBind1(6, 6, "SETTINGS.SEND_CODE"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_14_div_5_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_14_div_5_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_14_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "input", 34);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_14_div_5_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailCode, $event) || (ctx_r0.emailCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function SettingsComponent_ng_container_12_ng_container_14_div_5_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmEmailCode());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_14_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmEmailCode());
    });
    \u0275\u0275template(4, SettingsComponent_ng_container_12_ng_container_14_div_5_mat_spinner_4_Template, 1, 0, "mat-spinner", 25)(5, SettingsComponent_ng_container_12_ng_container_14_div_5_mat_icon_5_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 35);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_14_div_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailCode());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 8, "SETTINGS.ENTER_CODE")));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.emailStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailStep !== "verifying");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailStep === "verifying" ? \u0275\u0275pipeBind1(7, 10, "SETTINGS.VERIFYING") : \u0275\u0275pipeBind1(8, 12, "SETTINGS.VERIFY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "SETTINGS.RESEND"));
  }
}
function SettingsComponent_ng_container_12_ng_container_14_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailError);
  }
}
function SettingsComponent_ng_container_12_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_ng_container_12_ng_container_14_div_4_Template, 7, 8, "div", 30)(5, SettingsComponent_ng_container_12_ng_container_14_div_5_Template, 12, 16, "div", 31)(6, SettingsComponent_ng_container_12_ng_container_14_p_6_Template, 4, 1, "p", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "SETTINGS.EMAIL_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.emailStep === "idle" || ctx_r0.emailStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailStep === "code-sent" || ctx_r0.emailStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailError);
  }
}
function SettingsComponent_ng_container_12_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.EMAIL_VERIFIED_MSG"), " ");
  }
}
function SettingsComponent_ng_container_12_p_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.userPhone);
  }
}
function SettingsComponent_ng_container_12_span_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("verified", ctx_r0.isPhoneVerified)("unverified", !ctx_r0.isPhoneVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.isPhoneVerified ? "verified" : "warning");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.isPhoneVerified ? \u0275\u0275pipeBind1(4, 6, "SETTINGS.VERIFIED") : \u0275\u0275pipeBind1(5, 8, "SETTINGS.UNVERIFIED"), " ");
  }
}
function SettingsComponent_ng_container_12_button_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_button_26_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.startEditPhone());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.CHANGE"), " ");
  }
}
function SettingsComponent_ng_container_12_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.phoneSuccess, " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_28_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_28_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_28_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.phoneEditError);
  }
}
function SettingsComponent_ng_container_12_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 22)(2, "input", 37);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_28_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.phoneDraft, $event) || (ctx_r0.phoneDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function SettingsComponent_ng_container_12_ng_container_28_Template_input_keyup_enter_2_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePhone());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_28_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.savePhone());
    });
    \u0275\u0275template(4, SettingsComponent_ng_container_12_ng_container_28_mat_spinner_4_Template, 1, 0, "mat-spinner", 25)(5, SettingsComponent_ng_container_12_ng_container_28_mat_icon_5_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 26);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_28_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEditPhone());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SettingsComponent_ng_container_12_ng_container_28_p_12_Template, 4, 1, "p", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.phoneDraft);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.savingPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.savingPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.savingPhone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingPhone ? \u0275\u0275pipeBind1(7, 8, "SETTINGS.SENDING") : \u0275\u0275pipeBind1(8, 10, "COMMON.SAVE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.savingPhone);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 12, "COMMON.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.phoneEditError);
  }
}
function SettingsComponent_ng_container_12_ng_container_29_div_4_mat_spinner_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_29_div_4_mat_icon_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "sms");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_29_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_29_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendPhoneCode());
    });
    \u0275\u0275template(2, SettingsComponent_ng_container_12_ng_container_29_div_4_mat_spinner_2_Template, 1, 0, "mat-spinner", 25)(3, SettingsComponent_ng_container_12_ng_container_29_div_4_mat_icon_3_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.phoneStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.phoneStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.phoneStep !== "sending");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.phoneStep === "sending" ? \u0275\u0275pipeBind1(5, 4, "SETTINGS.SENDING") : \u0275\u0275pipeBind1(6, 6, "SETTINGS.SEND_OTP"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_29_div_5_mat_spinner_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_29_div_5_mat_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "check");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_29_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "input", 34);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_29_div_5_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.phoneCode, $event) || (ctx_r0.phoneCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function SettingsComponent_ng_container_12_ng_container_29_div_5_Template_input_keyup_enter_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmPhoneCode());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_29_div_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmPhoneCode());
    });
    \u0275\u0275template(4, SettingsComponent_ng_container_12_ng_container_29_div_5_mat_spinner_4_Template, 1, 0, "mat-spinner", 25)(5, SettingsComponent_ng_container_12_ng_container_29_div_5_mat_icon_5_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 35);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_29_div_5_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendPhoneCode());
    });
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("placeholder", \u0275\u0275interpolate(\u0275\u0275pipeBind1(2, 8, "SETTINGS.ENTER_OTP")));
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.phoneCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.phoneStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.phoneStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.phoneStep !== "verifying");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.phoneStep === "verifying" ? \u0275\u0275pipeBind1(7, 10, "SETTINGS.VERIFYING") : \u0275\u0275pipeBind1(8, 12, "SETTINGS.VERIFY"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "SETTINGS.RESEND"));
  }
}
function SettingsComponent_ng_container_12_ng_container_29_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.phoneError);
  }
}
function SettingsComponent_ng_container_12_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, SettingsComponent_ng_container_12_ng_container_29_div_4_Template, 7, 8, "div", 30)(5, SettingsComponent_ng_container_12_ng_container_29_div_5_Template, 12, 16, "div", 31)(6, SettingsComponent_ng_container_12_ng_container_29_p_6_Template, 4, 1, "p", 27);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "SETTINGS.PHONE_HINT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.phoneStep === "idle" || ctx_r0.phoneStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.phoneStep === "code-sent" || ctx_r0.phoneStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.phoneError);
  }
}
function SettingsComponent_ng_container_12_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.PHONE_VERIFIED_MSG"), " ");
  }
}
function SettingsComponent_ng_container_12_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "mat-spinner", 39);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "mat-icon");
    \u0275\u0275text(2, "credit_card_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "SETTINGS.PM_EMPTY"));
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", pm_r11.label);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 60)(1, "mat-icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 1, "SETTINGS.PM_DEFAULT_BADGE"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r11.upiVpa);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_14_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 62);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(pm_r11.bankIfsc);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275template(2, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_14_span_2_Template, 2, 1, "span", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const pm_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", pm_r11.bankAccountHolderName ? pm_r11.bankAccountHolderName + " \xB7 " : "", "", pm_r11.bankAccountNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pm_r11.bankIfsc);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 63);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const pm_r11 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.setDefaultPaymentMethod(pm_r11.id));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "star_border");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("title", \u0275\u0275interpolate(\u0275\u0275pipeBind1(1, 2, "SETTINGS.PM_SET_DEFAULT_CHECK")));
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_mat_spinner_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 64);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_mat_icon_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "delete_outline");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "div", 48)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 49)(5, "div", 50)(6, "span", 51);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_10_Template, 2, 1, "span", 52)(11, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_11_Template, 5, 3, "span", 53);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 54);
    \u0275\u0275template(13, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_13_Template, 2, 1, "span", 5)(14, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_span_14_Template, 3, 3, "span", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 55);
    \u0275\u0275template(16, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_button_16_Template, 4, 4, "button", 56);
    \u0275\u0275elementStart(17, "button", 57);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_Template_button_click_17_listener() {
      const pm_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.deletePaymentMethod(pm_r11.id));
    });
    \u0275\u0275template(18, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_mat_spinner_18_Template, 1, 0, "mat-spinner", 58)(19, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_mat_icon_19_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const pm_r11 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275classProp("upi", pm_r11.type === "UPI")("bank", pm_r11.type === "Bank");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pm_r11.type === "UPI" ? "qr_code_2" : "account_balance");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(pm_r11.type === "UPI" ? \u0275\u0275pipeBind1(8, 14, "SETTINGS.PM_TYPE_UPI") : \u0275\u0275pipeBind1(9, 16, "SETTINGS.PM_TYPE_BANK"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", pm_r11.label);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pm_r11.isDefault);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pm_r11.type === "UPI");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", pm_r11.type === "Bank");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !pm_r11.isDefault);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.pmDeleteId === pm_r11.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pmDeleteId === pm_r11.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pmDeleteId !== pm_r11.id);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 45);
    \u0275\u0275template(1, SettingsComponent_ng_container_12_ng_container_47_div_2_div_1_Template, 20, 18, "div", 46);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.paymentMethods);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 77);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_47_div_3_div_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.pmUpiVpa, $event) || (ctx_r0.pmUpiVpa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "SETTINGS.PM_UPI_VPA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pmUpiVpa);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_3_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 69)(1, "div", 70)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 78);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_47_div_3_div_16_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.pmBankHolder, $event) || (ctx_r0.pmBankHolder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 70)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 79);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_47_div_3_div_16_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.pmBankAccount, $event) || (ctx_r0.pmBankAccount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 70)(12, "label");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 80);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_47_div_3_div_16_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.pmBankIfsc, $event) || (ctx_r0.pmBankIfsc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "SETTINGS.PM_BANK_HOLDER"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pmBankHolder);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 8, "SETTINGS.PM_BANK_ACCOUNT"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pmBankAccount);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 10, "SETTINGS.PM_BANK_IFSC"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pmBankIfsc);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_3_p_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.pmSaveError);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_3_mat_spinner_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_3_mat_icon_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "save");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 65)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 66)(5, "button", 67);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_47_div_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.pmType = "UPI");
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "qr_code_2");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 67);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_47_div_3_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.pmType = "Bank");
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SettingsComponent_ng_container_12_ng_container_47_div_3_div_15_Template, 6, 4, "div", 68)(16, SettingsComponent_ng_container_12_ng_container_47_div_3_div_16_Template, 16, 12, "div", 68);
    \u0275\u0275elementStart(17, "div", 69)(18, "div", 70)(19, "label");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementStart(22, "span", 71);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_47_div_3_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.pmLabel, $event) || (ctx_r0.pmLabel = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 73)(27, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_47_div_3_Template_input_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.pmIsDefault, $event) || (ctx_r0.pmIsDefault = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "label", 75);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(31, SettingsComponent_ng_container_12_ng_container_47_div_3_p_31_Template, 4, 1, "p", 27);
    \u0275\u0275elementStart(32, "div", 76)(33, "button", 24);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_47_div_3_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.addPaymentMethod());
    });
    \u0275\u0275template(34, SettingsComponent_ng_container_12_ng_container_47_div_3_mat_spinner_34_Template, 1, 0, "mat-spinner", 25)(35, SettingsComponent_ng_container_12_ng_container_47_div_3_mat_icon_35_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 35);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_47_div_3_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(3);
      ctx_r0.showAddPm = false;
      return \u0275\u0275resetView(ctx_r0.resetPmForm());
    });
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 20, "SETTINGS.PM_ADD_HEADER"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.pmType === "UPI");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 22, "SETTINGS.PM_TYPE_UPI"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.pmType === "Bank");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 24, "SETTINGS.PM_TYPE_BANK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.pmType === "UPI");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pmType === "Bank");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(21, 26, "SETTINGS.PM_LABEL_FIELD"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(24, 28, "COMMON.OPTIONAL"), ")");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pmLabel);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pmIsDefault);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 30, "SETTINGS.PM_SET_DEFAULT_CHECK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.pmSaveError);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.pmSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pmSaving);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pmSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pmSaving ? \u0275\u0275pipeBind1(37, 32, "SETTINGS.PM_SAVING") : \u0275\u0275pipeBind1(38, 34, "COMMON.SAVE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 36, "COMMON.CANCEL"));
  }
}
function SettingsComponent_ng_container_12_ng_container_47_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 81)(1, "button", 82);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_47_div_4_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.showAddPm = true);
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(5, 1, "SETTINGS.PM_ADD"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SettingsComponent_ng_container_12_ng_container_47_div_1_Template, 6, 3, "div", 40)(2, SettingsComponent_ng_container_12_ng_container_47_div_2_Template, 2, 1, "div", 41)(3, SettingsComponent_ng_container_12_ng_container_47_div_3_Template, 42, 38, "div", 42)(4, SettingsComponent_ng_container_12_ng_container_47_div_4_Template, 6, 3, "div", 43);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentMethods.length === 0 && !ctx_r0.showAddPm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentMethods.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showAddPm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.showAddPm);
  }
}
function SettingsComponent_ng_container_12_ng_container_48_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_48_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startEditProRadius());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.CHANGE"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_48_div_11_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 93)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Saved");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_48_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88)(1, "div", 89)(2, "span", 90);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 91);
    \u0275\u0275text(5, "km radius");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, SettingsComponent_ng_container_12_ng_container_48_div_11_span_6_Template, 4, 0, "span", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.proRadius);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.proRadiusSaved);
  }
}
function SettingsComponent_ng_container_12_ng_container_48_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 94)(1, "label", 95);
    \u0275\u0275text(2, "Service radius (km)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_48_div_12_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.proRadius, $event) || (ctx_r0.proRadius = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 97);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_48_div_12_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveProRadius());
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 98);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_48_div_12_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEditProRadius());
    });
    \u0275\u0275text(7, "Cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.proRadius);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.savingProRadius || !ctx_r0.proRadius);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingProRadius ? "Saving\u2026" : "Save", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.savingProRadius);
  }
}
function SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 102);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 91);
    \u0275\u0275text(4, "km");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 87);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_ng_container_3_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r19);
      const biz_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.startEditBizRadius(biz_r20));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const biz_r20 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(biz_r20.serviceRadiusKm);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 2, "SETTINGS.CHANGE"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_ng_container_4_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r21);
      const biz_r20 = \u0275\u0275nextContext().$implicit;
      \u0275\u0275twoWayBindingSet(biz_r20.serviceRadiusKm, $event) || (biz_r20.serviceRadiusKm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 91);
    \u0275\u0275text(3, "km");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 97);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_ng_container_4_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r21);
      const biz_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.saveBizRadius(biz_r20));
    });
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 98);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_ng_container_4_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const biz_r20 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.cancelEditBizRadius(biz_r20));
    });
    \u0275\u0275text(7, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const biz_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", biz_r20.serviceRadiusKm);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.savingBizRadiusId === biz_r20.id || !biz_r20.serviceRadiusKm);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.savingBizRadiusId === biz_r20.id ? "Saving\u2026" : "Save", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.savingBizRadiusId === biz_r20.id);
  }
}
function SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "span", 101);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_ng_container_3_Template, 10, 4, "ng-container", 5)(4, SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_ng_container_4_Template, 8, 4, "ng-container", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const biz_r20 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(biz_r20.businessName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingBizRadiusId !== biz_r20.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.editingBizRadiusId === biz_r20.id);
  }
}
function SettingsComponent_ng_container_12_ng_container_48_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 9)(2, "mat-icon");
    \u0275\u0275text(3, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h2");
    \u0275\u0275text(6, "Business Service Areas");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 15);
    \u0275\u0275text(8, "Service radius for each of your businesses");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(9, SettingsComponent_ng_container_12_ng_container_48_div_15_div_9_Template, 5, 3, "div", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(9);
    \u0275\u0275property("ngForOf", ctx_r0.ownedBusinesses);
  }
}
function SettingsComponent_ng_container_12_ng_container_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "mat-icon");
    \u0275\u0275text(4, "my_location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7, "Service Area");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 15);
    \u0275\u0275text(9, "How far you travel for jobs");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, SettingsComponent_ng_container_12_ng_container_48_button_10_Template, 5, 3, "button", 83);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, SettingsComponent_ng_container_12_ng_container_48_div_11_Template, 7, 2, "div", 84)(12, SettingsComponent_ng_container_12_ng_container_48_div_12_Template, 8, 4, "div", 85);
    \u0275\u0275elementStart(13, "p", 16);
    \u0275\u0275text(14, "Jobs posted within this distance of your address will reach you.");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, SettingsComponent_ng_container_12_ng_container_48_div_15_Template, 10, 1, "div", 86);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingProRadius);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditingProRadius);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingProRadius);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.ownedBusinesses.length > 0);
  }
}
function SettingsComponent_ng_container_12_ng_container_49_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 105);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275property("ngClass", ctx_r0.kycStatusClass(ctx_r0.kycStatus.kycStatus));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.kycStatusLabel(ctx_r0.kycStatus.kycStatus), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275element(1, "mat-spinner", 106);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "COMMON.LOADING"));
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108)(1, "mat-icon");
    \u0275\u0275text(2, "verified_user");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.KYC_APPROVED_MSG"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 119);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_13_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 123);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275property("src", ctx_r0.aadhaarPreview, \u0275\u0275sanitizeUrl);
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "mat-icon");
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " PDF uploaded ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275template(1, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_13_img_1_Template, 1, 1, "img", 121)(2, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_13_div_2_Template, 4, 0, "div", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.aadhaarPreview !== "pdf");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.aadhaarPreview === "pdf");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "a", 125)(2, "mat-icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.kycStatus.aadhaarUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "SETTINGS.VIEW_DOCUMENT"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_spinner_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "upload_file");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon", 119);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_32_img_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 127);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275property("src", ctx_r0.panPreview, \u0275\u0275sanitizeUrl);
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_32_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 124)(1, "mat-icon");
    \u0275\u0275text(2, "picture_as_pdf");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " PDF uploaded ");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120);
    \u0275\u0275template(1, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_32_img_1_Template, 1, 1, "img", 126)(2, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_32_div_2_Template, 4, 0, "div", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.panPreview !== "pdf");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.panPreview === "pdf");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "a", 125)(2, "mat-icon");
    \u0275\u0275text(3, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("href", ctx_r0.kycStatus.panUrl, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "SETTINGS.VIEW_DOCUMENT"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_spinner_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "upload_file");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_p_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 29)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.kycError);
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.kycSuccess, " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_p_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 128)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.KYC_UPLOAD_BOTH"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_spinner_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 28);
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "send");
    \u0275\u0275elementEnd();
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "p", 16);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 109)(5, "div", 110)(6, "div", 111)(7, "mat-icon");
    \u0275\u0275text(8, "credit_card");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_12_Template, 2, 0, "mat-icon", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_13_Template, 3, 2, "div", 113)(14, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_14_Template, 6, 4, "div", 113);
    \u0275\u0275elementStart(15, "button", 114);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.triggerAadhaarUpload());
    });
    \u0275\u0275template(16, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_spinner_16_Template, 1, 0, "mat-spinner", 25)(17, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_17_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 115, 0);
    \u0275\u0275listener("change", function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_Template_input_change_22_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onAadhaarSelected($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 110)(25, "div", 111)(26, "mat-icon");
    \u0275\u0275text(27, "article");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(31, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_31_Template, 2, 0, "mat-icon", 112);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_32_Template, 3, 2, "div", 113)(33, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_33_Template, 6, 4, "div", 113);
    \u0275\u0275elementStart(34, "button", 114);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.triggerPanUpload());
    });
    \u0275\u0275template(35, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_spinner_35_Template, 1, 0, "mat-spinner", 25)(36, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_36_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 115, 1);
    \u0275\u0275listener("change", function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_Template_input_change_41_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.onPanSelected($event));
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(43, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_p_43_Template, 4, 1, "p", 27)(44, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_div_44_Template, 4, 1, "div", 13);
    \u0275\u0275elementStart(45, "div", 116);
    \u0275\u0275template(46, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_p_46_Template, 5, 3, "p", 117);
    \u0275\u0275elementStart(47, "button", 118);
    \u0275\u0275listener("click", function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.submitKyc());
    });
    \u0275\u0275template(48, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_spinner_48_Template, 1, 0, "mat-spinner", 25)(49, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_mat_icon_49_Template, 2, 0, "mat-icon", 5);
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 28, "SETTINGS.KYC_HINT"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("uploaded", ctx_r0.kycStatus.aadhaarUploaded);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 30, "SETTINGS.AADHAAR"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.kycStatus.aadhaarUploaded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.aadhaarPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.aadhaarPreview && ctx_r0.kycStatus.aadhaarUploaded && ctx_r0.kycStatus.aadhaarUrl);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.aadhaarUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.aadhaarUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.aadhaarUploading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.aadhaarUploading ? \u0275\u0275pipeBind1(19, 32, "SETTINGS.UPLOADING") : ctx_r0.kycStatus.aadhaarUploaded ? \u0275\u0275pipeBind1(20, 34, "SETTINGS.REPLACE") : \u0275\u0275pipeBind1(21, 36, "SETTINGS.UPLOAD"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275classProp("uploaded", ctx_r0.kycStatus.panUploaded);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 38, "SETTINGS.PAN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.kycStatus.panUploaded);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.panPreview);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.panPreview && ctx_r0.kycStatus.panUploaded && ctx_r0.kycStatus.panUrl);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.panUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.panUploading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.panUploading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.panUploading ? \u0275\u0275pipeBind1(38, 40, "SETTINGS.UPLOADING") : ctx_r0.kycStatus.panUploaded ? \u0275\u0275pipeBind1(39, 42, "SETTINGS.REPLACE") : \u0275\u0275pipeBind1(40, 44, "SETTINGS.UPLOAD"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.kycError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kycSuccess);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.kycStatus.aadhaarUploaded || !ctx_r0.kycStatus.panUploaded);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r0.canSubmitKyc || ctx_r0.kycSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kycSubmitting);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.kycSubmitting);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.kycSubmitting ? \u0275\u0275pipeBind1(51, 46, "SETTINGS.SUBMITTING") : \u0275\u0275pipeBind1(52, 48, "SETTINGS.SUBMIT_KYC"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_1_Template, 5, 3, "div", 107)(2, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_div_2_Template, 53, 50, "div", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kycStatus.kycStatus === "Approved");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kycStatus.kycStatus !== "Approved");
  }
}
function SettingsComponent_ng_container_12_ng_container_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 103)(2, "div", 9)(3, "mat-icon");
    \u0275\u0275text(4, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, SettingsComponent_ng_container_12_ng_container_49_span_12_Template, 2, 2, "span", 104);
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, SettingsComponent_ng_container_12_ng_container_49_div_13_Template, 5, 3, "div", 17)(14, SettingsComponent_ng_container_12_ng_container_49_ng_container_14_Template, 3, 2, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 5, "SETTINGS.KYC_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 7, "SETTINGS.KYC_SUBTITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.kycStatus);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.kycLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.kycLoading && ctx_r0.kycStatus);
  }
}
function SettingsComponent_ng_container_12_ng_container_50_ng_container_15_a_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 131)(1, "mat-icon");
    \u0275\u0275text(2, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.MANAGE_BUSINESSES"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_50_ng_container_15_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 131)(1, "mat-icon");
    \u0275\u0275text(2, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "SETTINGS.BUSINESS_BTN"), " ");
  }
}
function SettingsComponent_ng_container_12_ng_container_50_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, SettingsComponent_ng_container_12_ng_container_50_ng_container_15_a_1_Template, 5, 3, "a", 130)(2, SettingsComponent_ng_container_12_ng_container_50_ng_container_15_a_2_Template, 5, 3, "a", 130);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ownsBusiness);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.ownsBusiness);
  }
}
function SettingsComponent_ng_container_12_ng_container_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "mat-icon", 129);
    \u0275\u0275text(4, "business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 15);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "p", 16);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, SettingsComponent_ng_container_12_ng_container_50_ng_container_15_Template, 3, 2, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "SETTINGS.BUSINESS_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 6, "SETTINGS.BUSINESS_SUBTITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 8, ctx_r0.isBusinessMember ? "SETTINGS.BUSINESS_HINT_MEMBER" : "SETTINGS.BUSINESS_HINT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.businessesLoading);
  }
}
function SettingsComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 8)(2, "div", 9)(3, "mat-icon");
    \u0275\u0275text(4, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, SettingsComponent_ng_container_12_p_9_Template, 2, 1, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(10, SettingsComponent_ng_container_12_span_10_Template, 6, 10, "span", 11)(11, SettingsComponent_ng_container_12_button_11_Template, 5, 3, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, SettingsComponent_ng_container_12_div_12_Template, 4, 1, "div", 13)(13, SettingsComponent_ng_container_12_ng_container_13_Template, 13, 14, "ng-container", 5)(14, SettingsComponent_ng_container_12_ng_container_14_Template, 7, 6, "ng-container", 5)(15, SettingsComponent_ng_container_12_div_15_Template, 5, 3, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 8)(17, "div", 9)(18, "mat-icon");
    \u0275\u0275text(19, "phone_iphone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div")(21, "h2");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, SettingsComponent_ng_container_12_p_24_Template, 2, 1, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, SettingsComponent_ng_container_12_span_25_Template, 6, 10, "span", 11)(26, SettingsComponent_ng_container_12_button_26_Template, 5, 3, "button", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275template(27, SettingsComponent_ng_container_12_div_27_Template, 4, 1, "div", 13)(28, SettingsComponent_ng_container_12_ng_container_28_Template, 13, 14, "ng-container", 5)(29, SettingsComponent_ng_container_12_ng_container_29_Template, 7, 6, "ng-container", 5)(30, SettingsComponent_ng_container_12_div_30_Template, 5, 3, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 8)(32, "div", 9)(33, "mat-icon");
    \u0275\u0275text(34, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div")(36, "h2");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "p", 15);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "p", 16);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, SettingsComponent_ng_container_12_div_46_Template, 5, 3, "div", 17)(47, SettingsComponent_ng_container_12_ng_container_47_Template, 5, 4, "ng-container", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, SettingsComponent_ng_container_12_ng_container_48_Template, 16, 4, "ng-container", 5)(49, SettingsComponent_ng_container_12_ng_container_49_Template, 15, 9, "ng-container", 5)(50, SettingsComponent_ng_container_12_ng_container_50_Template, 16, 10, "ng-container", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 24, "SETTINGS.EMAIL_TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEmailVerified && !ctx_r0.isEditingEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEmailVerified && !ctx_r0.isEditingEmail);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 26, "SETTINGS.PHONE_TITLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.phoneSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isPhoneVerified && !ctx_r0.isEditingPhone);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isPhoneVerified && !ctx_r0.isEditingPhone);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 28, "SETTINGS.PM_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 30, "SETTINGS.PM_SUBTITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.isPro ? \u0275\u0275pipeBind1(44, 32, "SETTINGS.PM_HINT_PRO") : \u0275\u0275pipeBind1(45, 34, "SETTINGS.PM_HINT_USER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.pmLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pmLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isPro);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isPro);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isPro);
  }
}
var SettingsComponent = class _SettingsComponent {
  auth;
  userService;
  proService;
  verificationService;
  kycService;
  pmService;
  businessService;
  cdr;
  userType = null;
  userEmail = "";
  userPhone = "";
  isEmailVerified = false;
  isPhoneVerified = false;
  isLoading = true;
  // Email verification
  emailStep = "idle";
  emailCode = "";
  emailError = "";
  emailSuccess = "";
  // Phone verification
  phoneStep = "idle";
  phoneCode = "";
  phoneError = "";
  phoneSuccess = "";
  // Editable contact details (all user types)
  userData = null;
  // full user object for non-pros (pros use proData)
  isEditingEmail = false;
  emailDraft = "";
  savingEmail = false;
  emailEditError = "";
  isEditingPhone = false;
  phoneDraft = "";
  savingPhone = false;
  phoneEditError = "";
  // Payment methods (all users)
  paymentMethods = [];
  pmLoading = false;
  showAddPm = false;
  pmType = "UPI";
  pmUpiVpa = "";
  pmBankHolder = "";
  pmBankAccount = "";
  pmBankIfsc = "";
  pmLabel = "";
  pmIsDefault = false;
  pmSaving = false;
  pmSaveError = "";
  pmDeleteId = null;
  // Service area (Pro only)
  proData = null;
  proRadius = null;
  savingProRadius = false;
  proRadiusSaved = false;
  isEditingProRadius = false;
  proRadiusBackup = null;
  // Businesses (Pro only) — editable service radius per owned business
  myBusinesses = [];
  businessesLoading = false;
  savingBizRadiusId = null;
  editingBizRadiusId = null;
  bizRadiusBackup = null;
  // KYC (Pro only)
  kycStatus = null;
  kycLoading = false;
  kycError = "";
  kycSuccess = "";
  aadhaarUploading = false;
  panUploading = false;
  kycSubmitting = false;
  aadhaarPreview = null;
  panPreview = null;
  aadhaarInput;
  panInput;
  constructor(auth, userService, proService, verificationService, kycService, pmService, businessService, cdr) {
    this.auth = auth;
    this.userService = userService;
    this.proService = proService;
    this.verificationService = verificationService;
    this.kycService = kycService;
    this.pmService = pmService;
    this.businessService = businessService;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.userType = this.auth.getUserType();
    this.loadProfile();
    this.loadPaymentMethods();
  }
  get isPro() {
    return this.userType === "Pro";
  }
  get ownsBusiness() {
    return this.myBusinesses.some((b) => b.role === "Owner");
  }
  get isBusinessMember() {
    return this.myBusinesses.length > 0 && !this.ownsBusiness;
  }
  get ownedBusinesses() {
    return this.myBusinesses.filter((b) => b.role === "Owner");
  }
  loadProfile() {
    const id = Number(this.auth.getUserId());
    if (this.isPro) {
      this.proService.getPro(id).subscribe({
        next: (response) => {
          const pro = response?.data || response;
          this.userEmail = pro.email;
          this.userPhone = pro.phoneNumber;
          this.isEmailVerified = pro.isEmailVerified;
          this.isPhoneVerified = pro.isPhoneVerified;
          this.proData = pro;
          this.proRadius = pro.serviceRadiusKm ?? 25;
          this.isLoading = false;
          this.cdr.markForCheck();
          this.loadKycStatus();
          this.loadBusinesses();
        },
        error: () => {
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
    } else {
      this.userService.getUser(id).subscribe({
        next: (user) => {
          this.userData = user;
          this.userEmail = user.email;
          this.userPhone = user.phoneNumber;
          this.isEmailVerified = user.isEmailVerified;
          this.isPhoneVerified = user.isPhoneVerified;
          this.isLoading = false;
          this.cdr.markForCheck();
        },
        error: () => {
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
    }
  }
  loadKycStatus() {
    this.kycLoading = true;
    this.kycService.getStatus().subscribe({
      next: (status) => {
        this.kycStatus = status;
        this.kycLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.kycLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  // ── Service area (Pro) ─────────────────────────────────────────────────────
  startEditProRadius() {
    this.proRadiusBackup = this.proRadius;
    this.isEditingProRadius = true;
    this.proRadiusSaved = false;
  }
  cancelEditProRadius() {
    this.proRadius = this.proRadiusBackup;
    this.isEditingProRadius = false;
  }
  saveProRadius() {
    if (!this.proData || !this.proRadius)
      return;
    this.savingProRadius = true;
    this.proRadiusSaved = false;
    this.proService.updatePro(__spreadProps(__spreadValues({}, this.proData), { serviceRadiusKm: this.proRadius })).subscribe({
      next: () => {
        this.savingProRadius = false;
        this.isEditingProRadius = false;
        this.proRadiusSaved = true;
        this.cdr.markForCheck();
        setTimeout(() => {
          this.proRadiusSaved = false;
          this.cdr.markForCheck();
        }, 3e3);
      },
      error: () => {
        this.savingProRadius = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadBusinesses() {
    this.businessesLoading = true;
    this.businessService.getMyBusinesses().subscribe({
      next: (list) => {
        this.myBusinesses = (list ?? []).map((b) => __spreadProps(__spreadValues({}, b), { serviceRadiusKm: b.serviceRadiusKm ?? 25 }));
        this.businessesLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.businessesLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  startEditBizRadius(biz) {
    this.bizRadiusBackup = biz.serviceRadiusKm ?? null;
    this.editingBizRadiusId = biz.id;
  }
  cancelEditBizRadius(biz) {
    biz.serviceRadiusKm = this.bizRadiusBackup;
    this.editingBizRadiusId = null;
  }
  saveBizRadius(biz) {
    this.savingBizRadiusId = biz.id;
    this.businessService.updateBusiness(biz.id, { serviceRadiusKm: biz.serviceRadiusKm ?? void 0 }).subscribe({
      next: () => {
        this.savingBizRadiusId = null;
        this.editingBizRadiusId = null;
        this.cdr.markForCheck();
      },
      error: () => {
        this.savingBizRadiusId = null;
        this.cdr.markForCheck();
      }
    });
  }
  // ── Edit contact details (email / phone) ───────────────────────────────────
  get contactEntity() {
    return this.isPro ? this.proData : this.userData;
  }
  saveContact(payload) {
    return this.isPro ? this.proService.updatePro(payload) : this.userService.updateUser(payload);
  }
  startEditEmail() {
    this.emailDraft = this.userEmail;
    this.isEditingEmail = true;
    this.emailEditError = "";
    this.emailSuccess = "";
    this.emailStep = "idle";
    this.emailCode = "";
    this.emailError = "";
  }
  cancelEditEmail() {
    this.isEditingEmail = false;
    this.emailEditError = "";
  }
  saveEmail() {
    const next = (this.emailDraft || "").trim();
    if (!next || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next)) {
      this.emailEditError = "Enter a valid email address.";
      return;
    }
    if (next.toLowerCase() === this.userEmail.toLowerCase()) {
      this.isEditingEmail = false;
      return;
    }
    this.savingEmail = true;
    this.emailEditError = "";
    this.saveContact(__spreadProps(__spreadValues({}, this.contactEntity), { email: next })).subscribe({
      next: (resp) => {
        const updated = resp?.data ?? resp ?? {};
        if (this.isPro)
          this.proData = __spreadProps(__spreadValues({}, this.proData), { email: next, isEmailVerified: false });
        else
          this.userData = __spreadProps(__spreadValues({}, this.userData), { email: next, isEmailVerified: false });
        this.userEmail = updated.email ?? next;
        this.isEmailVerified = false;
        this.savingEmail = false;
        this.isEditingEmail = false;
        this.emailStep = "idle";
        this.emailCode = "";
        this.emailSuccess = "Email updated \u2014 please verify your new address.";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.emailSuccess = "";
          this.cdr.markForCheck();
        }, 5e3);
      },
      error: (err) => {
        this.savingEmail = false;
        this.emailEditError = err?.error?.message || "Failed to update email.";
        this.cdr.markForCheck();
      }
    });
  }
  startEditPhone() {
    this.phoneDraft = this.userPhone;
    this.isEditingPhone = true;
    this.phoneEditError = "";
    this.phoneSuccess = "";
    this.phoneStep = "idle";
    this.phoneCode = "";
    this.phoneError = "";
  }
  cancelEditPhone() {
    this.isEditingPhone = false;
    this.phoneEditError = "";
  }
  savePhone() {
    const next = (this.phoneDraft || "").trim();
    if (!next || next.replace(/\D/g, "").length < 7) {
      this.phoneEditError = "Enter a valid phone number.";
      return;
    }
    if (next === (this.userPhone || "")) {
      this.isEditingPhone = false;
      return;
    }
    this.savingPhone = true;
    this.phoneEditError = "";
    this.saveContact(__spreadProps(__spreadValues({}, this.contactEntity), { phoneNumber: next })).subscribe({
      next: (resp) => {
        const updated = resp?.data ?? resp ?? {};
        if (this.isPro)
          this.proData = __spreadProps(__spreadValues({}, this.proData), { phoneNumber: next, isPhoneVerified: false });
        else
          this.userData = __spreadProps(__spreadValues({}, this.userData), { phoneNumber: next, isPhoneVerified: false });
        this.userPhone = updated.phoneNumber ?? next;
        this.isPhoneVerified = false;
        this.savingPhone = false;
        this.isEditingPhone = false;
        this.phoneStep = "idle";
        this.phoneCode = "";
        this.phoneSuccess = "Phone number updated \u2014 please verify your new number.";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.phoneSuccess = "";
          this.cdr.markForCheck();
        }, 5e3);
      },
      error: (err) => {
        this.savingPhone = false;
        this.phoneEditError = err?.error?.message || "Failed to update phone number.";
        this.cdr.markForCheck();
      }
    });
  }
  // ── Email verification ─────────────────────────────────────────────────────
  sendEmailCode() {
    this.emailStep = "sending";
    this.emailError = "";
    this.emailCode = "";
    const uType = this.isPro ? "Pro" : "User";
    this.verificationService.sendEmailCode(this.userEmail, uType).subscribe({
      next: () => {
        this.emailStep = "code-sent";
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.emailError = err?.error?.message || "Failed to send verification email.";
        this.emailStep = "idle";
        this.cdr.markForCheck();
      }
    });
  }
  confirmEmailCode() {
    if (!this.emailCode || this.emailCode.length !== 6) {
      this.emailError = "Enter the 6-digit code sent to your email.";
      return;
    }
    this.emailStep = "verifying";
    this.emailError = "";
    const uType = this.isPro ? "Pro" : "User";
    this.verificationService.verifyEmail(this.userEmail, this.emailCode, uType).subscribe({
      next: () => {
        this.isEmailVerified = true;
        this.emailStep = "idle";
        this.emailSuccess = "Email verified successfully!";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.emailSuccess = "";
          this.cdr.markForCheck();
        }, 4e3);
      },
      error: (err) => {
        this.emailError = err?.error?.message || "Invalid or expired code.";
        this.emailStep = "code-sent";
        this.cdr.markForCheck();
      }
    });
  }
  // ── Phone verification ─────────────────────────────────────────────────────
  sendPhoneCode() {
    this.phoneStep = "sending";
    this.phoneError = "";
    this.phoneCode = "";
    const uType = this.isPro ? "Pro" : "User";
    this.verificationService.sendPhoneCode(this.userPhone, uType).subscribe({
      next: () => {
        this.phoneStep = "code-sent";
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.phoneError = err?.error?.message || "Failed to send OTP.";
        this.phoneStep = "idle";
        this.cdr.markForCheck();
      }
    });
  }
  confirmPhoneCode() {
    if (!this.phoneCode || this.phoneCode.length < 4) {
      this.phoneError = "Enter the OTP sent to your phone.";
      return;
    }
    this.phoneStep = "verifying";
    this.phoneError = "";
    const uType = this.isPro ? "Pro" : "User";
    this.verificationService.verifyPhone(this.userPhone, this.phoneCode, uType).subscribe({
      next: () => {
        this.isPhoneVerified = true;
        this.phoneStep = "idle";
        this.phoneSuccess = "Phone number verified successfully!";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.phoneSuccess = "";
          this.cdr.markForCheck();
        }, 4e3);
      },
      error: (err) => {
        this.phoneError = err?.error?.message || "Invalid or expired OTP.";
        this.phoneStep = "code-sent";
        this.cdr.markForCheck();
      }
    });
  }
  // ── KYC Documents ──────────────────────────────────────────────────────────
  triggerAadhaarUpload() {
    this.aadhaarInput.nativeElement.click();
  }
  triggerPanUpload() {
    this.panInput.nativeElement.click();
  }
  onAadhaarSelected(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (!this.validateFile(file))
      return;
    this.aadhaarUploading = true;
    this.kycError = "";
    this.setPreview(file, "aadhaar");
    this.kycService.uploadAadhaar(file).subscribe({
      next: (res) => {
        this.aadhaarUploading = false;
        if (this.kycStatus) {
          this.kycStatus.aadhaarUploaded = true;
          this.kycStatus.aadhaarUrl = res.url;
        }
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.aadhaarUploading = false;
        this.kycError = err?.error?.message || "Failed to upload Aadhaar document.";
        this.aadhaarPreview = null;
        this.cdr.markForCheck();
      }
    });
  }
  onPanSelected(event) {
    const file = event.target.files?.[0];
    if (!file)
      return;
    if (!this.validateFile(file))
      return;
    this.panUploading = true;
    this.kycError = "";
    this.setPreview(file, "pan");
    this.kycService.uploadPan(file).subscribe({
      next: (res) => {
        this.panUploading = false;
        if (this.kycStatus) {
          this.kycStatus.panUploaded = true;
          this.kycStatus.panUrl = res.url;
        }
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.panUploading = false;
        this.kycError = err?.error?.message || "Failed to upload PAN document.";
        this.panPreview = null;
        this.cdr.markForCheck();
      }
    });
  }
  submitKyc() {
    this.kycSubmitting = true;
    this.kycError = "";
    this.kycService.submitKyc().subscribe({
      next: () => {
        this.kycSubmitting = false;
        if (this.kycStatus)
          this.kycStatus.kycStatus = "Submitted";
        this.kycSuccess = "KYC submitted! You will be notified once verified.";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.kycSuccess = "";
          this.cdr.markForCheck();
        }, 5e3);
      },
      error: (err) => {
        this.kycSubmitting = false;
        this.kycError = err?.error?.message || "Failed to submit KYC.";
        this.cdr.markForCheck();
      }
    });
  }
  validateFile(file) {
    const allowed = ["application/pdf", "image/jpeg", "image/jpg", "image/png"];
    if (!allowed.includes(file.type)) {
      this.kycError = "Only PDF, JPG, and PNG files are allowed.";
      this.cdr.markForCheck();
      return false;
    }
    if (file.size > 5 * 1024 * 1024) {
      this.kycError = "File size must not exceed 5 MB.";
      this.cdr.markForCheck();
      return false;
    }
    return true;
  }
  setPreview(file, type) {
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        if (type === "aadhaar")
          this.aadhaarPreview = e.target?.result;
        else
          this.panPreview = e.target?.result;
        this.cdr.markForCheck();
      };
      reader.readAsDataURL(file);
    } else {
      if (type === "aadhaar")
        this.aadhaarPreview = "pdf";
      else
        this.panPreview = "pdf";
    }
  }
  get canSubmitKyc() {
    return !!(this.kycStatus?.aadhaarUploaded && this.kycStatus?.panUploaded && this.kycStatus?.kycStatus !== "Approved");
  }
  // ── Payment Methods ────────────────────────────────────────────────────────
  loadPaymentMethods() {
    this.pmLoading = true;
    this.pmService.getAll().subscribe({
      next: (methods) => {
        this.paymentMethods = methods;
        this.pmLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.pmLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  addPaymentMethod() {
    this.pmSaveError = "";
    if (this.pmType === "UPI" && !this.pmUpiVpa.trim()) {
      this.pmSaveError = "UPI ID is required.";
      return;
    }
    if (this.pmType === "Bank" && (!this.pmBankAccount.trim() || !this.pmBankIfsc.trim())) {
      this.pmSaveError = "Account number and IFSC code are required.";
      return;
    }
    this.pmSaving = true;
    this.pmService.create({
      type: this.pmType,
      label: this.pmLabel.trim() || void 0,
      isDefault: this.pmIsDefault,
      upiVpa: this.pmType === "UPI" ? this.pmUpiVpa.trim() : void 0,
      bankAccountHolderName: this.pmType === "Bank" ? this.pmBankHolder.trim() : void 0,
      bankAccountNumber: this.pmType === "Bank" ? this.pmBankAccount.trim() : void 0,
      bankIfsc: this.pmType === "Bank" ? this.pmBankIfsc.trim() : void 0
    }).subscribe({
      next: (pm) => {
        if (pm.isDefault) {
          this.paymentMethods = this.paymentMethods.map((m) => __spreadProps(__spreadValues({}, m), { isDefault: false }));
        }
        this.paymentMethods = [...this.paymentMethods, pm];
        this.pmSaving = false;
        this.showAddPm = false;
        this.resetPmForm();
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.pmSaveError = err?.error?.message || "Failed to save payment method.";
        this.pmSaving = false;
        this.cdr.markForCheck();
      }
    });
  }
  deletePaymentMethod(id) {
    this.pmDeleteId = id;
    this.pmService.delete(id).subscribe({
      next: () => {
        this.paymentMethods = this.paymentMethods.filter((m) => m.id !== id);
        this.pmDeleteId = null;
        this.cdr.markForCheck();
      },
      error: () => {
        this.pmDeleteId = null;
        this.cdr.markForCheck();
      }
    });
  }
  setDefaultPaymentMethod(id) {
    this.pmService.setDefault(id).subscribe({
      next: () => {
        this.paymentMethods = this.paymentMethods.map((m) => __spreadProps(__spreadValues({}, m), { isDefault: m.id === id }));
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
  }
  resetPmForm() {
    this.pmType = "UPI";
    this.pmUpiVpa = "";
    this.pmBankHolder = "";
    this.pmBankAccount = "";
    this.pmBankIfsc = "";
    this.pmLabel = "";
    this.pmIsDefault = false;
    this.pmSaveError = "";
  }
  kycStatusLabel(status) {
    switch (status) {
      case "Submitted":
        return "Under Review";
      case "Approved":
        return "Approved";
      case "Rejected":
        return "Rejected \u2014 Please re-upload";
      default:
        return "Not Submitted";
    }
  }
  kycStatusClass(status) {
    switch (status) {
      case "Submitted":
        return "status-pending";
      case "Approved":
        return "status-approved";
      case "Rejected":
        return "status-rejected";
      default:
        return "status-none";
    }
  }
  static \u0275fac = function SettingsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SettingsComponent)(\u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ProService), \u0275\u0275directiveInject(VerificationService), \u0275\u0275directiveInject(KycService), \u0275\u0275directiveInject(PaymentMethodService), \u0275\u0275directiveInject(BusinessService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsComponent, selectors: [["app-settings"]], viewQuery: function SettingsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(_c0, 5);
      \u0275\u0275viewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.aadhaarInput = _t.first);
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panInput = _t.first);
    }
  }, decls: 13, vars: 8, consts: [["aadhaarInput", ""], ["panInput", ""], [1, "settings-wrapper"], [1, "settings-header"], ["class", "settings-loading", 4, "ngIf"], [4, "ngIf"], [1, "settings-loading"], ["diameter", "36"], [1, "settings-card"], [1, "card-section-header"], ["class", "contact-display", 4, "ngIf"], ["class", "verif-badge", 3, "verified", "unverified", 4, "ngIf"], ["class", "btn-change", 3, "click", 4, "ngIf"], ["class", "alert alert-success", 4, "ngIf"], ["class", "verif-done", 4, "ngIf"], [1, "card-hint-inline"], [1, "card-hint"], ["class", "kyc-loading", 4, "ngIf"], [1, "contact-display"], [1, "verif-badge"], [1, "btn-change", 3, "click"], [1, "alert", "alert-success"], [1, "contact-edit-row"], ["type", "email", "placeholder", "you@example.com", 1, "contact-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "btn-verify", 3, "click", "disabled"], ["diameter", "16", 4, "ngIf"], [1, "btn-resend", 3, "click", "disabled"], ["class", "verif-error", 4, "ngIf"], ["diameter", "16"], [1, "verif-error"], ["class", "verif-action", 4, "ngIf"], ["class", "verif-code-row", 4, "ngIf"], [1, "verif-action"], [1, "verif-code-row"], ["type", "text", "maxlength", "6", 1, "code-input", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], [1, "btn-resend", 3, "click"], [1, "verif-done"], ["type", "tel", "placeholder", "+91 90000 00000", 1, "contact-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "kyc-loading"], ["diameter", "20"], ["class", "pm-empty", 4, "ngIf"], ["class", "pm-list", 4, "ngIf"], ["class", "pm-add-panel", 4, "ngIf"], ["class", "pm-add-trigger", 4, "ngIf"], [1, "pm-empty"], [1, "pm-list"], ["class", "pm-item", 4, "ngFor", "ngForOf"], [1, "pm-item"], [1, "pm-icon-badge"], [1, "pm-item-info"], [1, "pm-item-title"], [1, "pm-type-label"], ["class", "pm-custom-label", 4, "ngIf"], ["class", "pm-default-badge", 4, "ngIf"], [1, "pm-item-meta"], [1, "pm-actions"], ["class", "btn-pm-ghost", 3, "title", "click", 4, "ngIf"], [1, "btn-pm-danger", 3, "click", "disabled"], ["diameter", "14", 4, "ngIf"], [1, "pm-custom-label"], [1, "pm-default-badge"], ["class", "pm-ifsc", 4, "ngIf"], [1, "pm-ifsc"], [1, "btn-pm-ghost", 3, "click", "title"], ["diameter", "14"], [1, "pm-add-panel"], [1, "pm-type-toggle"], [3, "click"], ["class", "pm-form-fields", 4, "ngIf"], [1, "pm-form-fields"], [1, "pm-field"], [1, "optional-hint"], ["type", "text", "placeholder", "e.g. Personal, Business", 1, "pm-input", 3, "ngModelChange", "ngModel"], [1, "pm-default-check"], ["type", "checkbox", "id", "pmIsDefault", 3, "ngModelChange", "ngModel"], ["for", "pmIsDefault"], [1, "pm-form-actions"], ["type", "text", "placeholder", "yourname@upi", 1, "pm-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Account holder name", 1, "pm-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Account number", 1, "pm-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "e.g. SBIN0001234", 1, "pm-input", 3, "ngModelChange", "ngModel"], [1, "pm-add-trigger"], [1, "btn-pm-add", 3, "click"], ["class", "btn-edit-sa", 3, "click", 4, "ngIf"], ["class", "sa-display", 4, "ngIf"], ["class", "sa-row", 4, "ngIf"], ["class", "settings-card", 4, "ngIf"], [1, "btn-edit-sa", 3, "click"], [1, "sa-display"], [1, "sa-value-block"], [1, "sa-value"], [1, "sa-unit"], ["class", "sa-saved", 4, "ngIf"], [1, "sa-saved"], [1, "sa-row"], [1, "sa-label"], ["type", "number", "min", "1", "max", "500", 1, "sa-input", 3, "ngModelChange", "ngModel"], [1, "btn-save-sa", 3, "click", "disabled"], [1, "btn-cancel-sa", 3, "click", "disabled"], ["class", "biz-sa-row", 4, "ngFor", "ngForOf"], [1, "biz-sa-row"], [1, "biz-sa-name"], [1, "sa-value", "sa-value--sm"], [1, "settings-card", "kyc-card"], ["class", "kyc-status-badge", 3, "ngClass", 4, "ngIf"], [1, "kyc-status-badge", 3, "ngClass"], ["diameter", "24"], ["class", "alert alert-success kyc-approved", 4, "ngIf"], [1, "alert", "alert-success", "kyc-approved"], [1, "doc-grid"], [1, "doc-card"], [1, "doc-card-header"], ["class", "doc-status-icon", 4, "ngIf"], ["class", "doc-preview", 4, "ngIf"], [1, "btn-upload", 3, "click", "disabled"], ["type", "file", "accept", ".pdf,.jpg,.jpeg,.png", 2, "display", "none", 3, "change"], [1, "kyc-submit-row"], ["class", "kyc-submit-hint", 4, "ngIf"], [1, "btn-submit-kyc", 3, "click", "disabled"], [1, "doc-status-icon"], [1, "doc-preview"], ["alt", "Aadhaar preview", 3, "src", 4, "ngIf"], ["class", "pdf-badge", 4, "ngIf"], ["alt", "Aadhaar preview", 3, "src"], [1, "pdf-badge"], ["target", "_blank", 1, "doc-link", 3, "href"], ["alt", "PAN preview", 3, "src", 4, "ngIf"], ["alt", "PAN preview", 3, "src"], [1, "kyc-submit-hint"], [1, "card-icon"], ["routerLink", "/my-businesses", "class", "btn-manage-biz", 4, "ngIf"], ["routerLink", "/my-businesses", 1, "btn-manage-biz"]], template: function SettingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "mat-icon");
      \u0275\u0275text(3, "settings");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div")(5, "h1");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(11, SettingsComponent_div_11_Template, 5, 3, "div", 4)(12, SettingsComponent_ng_container_12_Template, 51, 36, "ng-container", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 4, "SETTINGS.TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 6, "SETTINGS.SUBTITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.isLoading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.isLoading);
    }
  }, dependencies: [CommonModule, NgClass, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, CheckboxControlValueAccessor, NgControlStatus, MaxLengthValidator, MinValidator, MaxValidator, NgModel, RouterModule, RouterLink, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslateModule, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.settings-wrapper[_ngcontent-%COMP%] {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 4rem;\n}\n.settings-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.settings-header[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: var(--color-primary);\n}\n.settings-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 0.15rem;\n  font-size: var(--text-h1);\n  font-weight: 700;\n  color: var(--color-text);\n}\n.settings-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.btn-edit-sa[_ngcontent-%COMP%], \n.btn-cancel-sa[_ngcontent-%COMP%], \n.btn-resend[_ngcontent-%COMP%], \n.btn-change[_ngcontent-%COMP%], \n.btn-save-sa[_ngcontent-%COMP%], \n.btn-manage-biz[_ngcontent-%COMP%], \n.btn-submit-kyc[_ngcontent-%COMP%], \n.btn-verify[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.625rem 1.25rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    opacity 0.15s,\n    transform 0.15s,\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.btn-edit-sa[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.btn-cancel-sa[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.btn-resend[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.btn-change[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.btn-save-sa[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.btn-manage-biz[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.btn-submit-kyc[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.btn-verify[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.btn-edit-sa[_ngcontent-%COMP%]:disabled, \n.btn-cancel-sa[_ngcontent-%COMP%]:disabled, \n.btn-resend[_ngcontent-%COMP%]:disabled, \n.btn-change[_ngcontent-%COMP%]:disabled, \n.btn-save-sa[_ngcontent-%COMP%]:disabled, \n.btn-manage-biz[_ngcontent-%COMP%]:disabled, \n.btn-submit-kyc[_ngcontent-%COMP%]:disabled, \n.btn-verify[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-save-sa[_ngcontent-%COMP%], \n.btn-manage-biz[_ngcontent-%COMP%], \n.btn-submit-kyc[_ngcontent-%COMP%], \n.btn-verify[_ngcontent-%COMP%] {\n  background: var(--color-primary-gradient);\n  color: #fff;\n}\n.btn-save-sa[_ngcontent-%COMP%]:hover:not(:disabled), \n.btn-manage-biz[_ngcontent-%COMP%]:hover:not(:disabled), \n.btn-submit-kyc[_ngcontent-%COMP%]:hover:not(:disabled), \n.btn-verify[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-edit-sa[_ngcontent-%COMP%], \n.btn-cancel-sa[_ngcontent-%COMP%], \n.btn-resend[_ngcontent-%COMP%], \n.btn-change[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n  border: 1.5px solid var(--color-border);\n}\n.btn-edit-sa[_ngcontent-%COMP%]:hover:not(:disabled), \n.btn-cancel-sa[_ngcontent-%COMP%]:hover:not(:disabled), \n.btn-resend[_ngcontent-%COMP%]:hover:not(:disabled), \n.btn-change[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.settings-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n}\n.settings-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e8e8f0;\n  border-radius: 14px;\n  padding: 1.5rem;\n  margin-bottom: 1.25rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n  margin-bottom: 1rem;\n}\n.card-section-header[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: var(--color-primary);\n  margin-top: 0.1rem;\n  flex-shrink: 0;\n}\n.card-section-header[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.card-section-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.contact-display[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.btn-change[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 0.4rem 0.85rem;\n  font-size: 0.82rem;\n}\n.btn-change[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.contact-edit-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n}\n.contact-input[_ngcontent-%COMP%] {\n  flex: 1 1 12rem;\n  min-width: 0;\n  padding: 0.6rem 0.85rem;\n  border: 1.5px solid #dde0f0;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.contact-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n.card-hint[_ngcontent-%COMP%] {\n  font-size: 0.87rem;\n  color: var(--color-text-muted);\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\n.card-hint-inline[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.verif-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.25rem 0.7rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.verif-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.verif-badge.verified[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.verif-badge.verified[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.verif-badge.unverified[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.verif-badge.unverified[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.verif-action[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.verif-code-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n}\n.code-input[_ngcontent-%COMP%] {\n  width: 140px;\n  padding: 0.6rem 0.85rem;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 1rem;\n  letter-spacing: 0.15em;\n  text-align: center;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.code-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n.verif-done[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.verif-done[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: #4caf50;\n}\n.verif-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: #c62828;\n  font-size: 0.85rem;\n  margin: 0.5rem 0 0;\n}\n.verif-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  font-weight: 500;\n  margin-bottom: 0.75rem;\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.alert.alert-success[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.alert.alert-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.kyc-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--color-text-muted);\n  font-size: 0.88rem;\n}\n.kyc-status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.kyc-status-badge.status-none[_ngcontent-%COMP%] {\n  background: #f5f5f5;\n  color: #777;\n}\n.kyc-status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.kyc-status-badge.status-approved[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.kyc-status-badge.status-rejected[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.kyc-approved.alert-success[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.doc-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 560px) {\n  .doc-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.doc-card[_ngcontent-%COMP%] {\n  border: 2px dashed #dde1ff;\n  border-radius: 12px;\n  padding: 1.1rem;\n  background: #fafbff;\n  transition: border-color 0.2s, background 0.2s;\n}\n.doc-card.uploaded[_ngcontent-%COMP%] {\n  border-style: solid;\n  border-color: #c8e6c9;\n  background: #f9fff9;\n}\n.doc-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--color-text);\n}\n.doc-card-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: var(--color-primary);\n}\n.doc-card-header[_ngcontent-%COMP%]   .doc-status-icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #4caf50;\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.doc-preview[_ngcontent-%COMP%] {\n  margin-bottom: 0.85rem;\n}\n.doc-preview[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  max-height: 140px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n}\n.pdf-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: #fce4ec;\n  color: #c62828;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.pdf-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.doc-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: var(--color-primary);\n  font-size: 0.85rem;\n  text-decoration: none;\n}\n.doc-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.doc-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.btn-upload[_ngcontent-%COMP%] {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1rem;\n  background: white;\n  color: var(--color-primary);\n  border: 1.5px solid var(--color-primary);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-upload[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.btn-upload[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: var(--color-primary);\n  color: white;\n}\n.btn-upload[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.kyc-submit-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  border-top: 1px solid #f0f0f5;\n  padding-top: 1rem;\n}\n.kyc-submit-hint[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.84rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.kyc-submit-hint[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.btn-manage-biz[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.pm-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  color: var(--color-text-muted);\n  font-size: 0.88rem;\n  margin: 0.25rem 0 1rem;\n}\n.pm-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #ccc;\n}\n.pm-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n}\n.pm-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.85rem 1rem;\n  background: #fafbff;\n  border: 1px solid #eaecf5;\n  border-radius: 10px;\n}\n.pm-icon-badge[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pm-icon-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.pm-icon-badge.upi[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n}\n.pm-icon-badge.upi[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #1565c0;\n}\n.pm-icon-badge.bank[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n}\n.pm-icon-badge.bank[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.pm-item-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pm-item-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.15rem;\n}\n.pm-type-label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--color-text);\n}\n.pm-custom-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n}\n.pm-default-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  background: #fff8e1;\n  color: #f57f17;\n  border-radius: 20px;\n  padding: 0.1rem 0.55rem;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.pm-default-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.74rem;\n  width: 0.74rem;\n  height: 0.74rem;\n}\n.pm-item-meta[_ngcontent-%COMP%] {\n  font-size: 0.84rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-ifsc[_ngcontent-%COMP%] {\n  margin-left: 0.45rem;\n  font-size: 0.78rem;\n  color: var(--color-text-muted);\n  background: #f0f0f5;\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n}\n.pm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  flex-shrink: 0;\n}\n.btn-pm-ghost[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #bbb;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-pm-ghost[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.btn-pm-ghost[_ngcontent-%COMP%]:hover {\n  border-color: #f57f17;\n  color: #f57f17;\n}\n.btn-pm-danger[_ngcontent-%COMP%] {\n  width: 34px;\n  height: 34px;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  background: #fff5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #c62828;\n  transition: background 0.15s;\n}\n.btn-pm-danger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.btn-pm-danger[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #ffebee;\n}\n.btn-pm-danger[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pm-add-trigger[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.btn-pm-add[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.1rem;\n  background: white;\n  color: var(--color-primary);\n  border: 1.5px dashed #aab4f5;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-pm-add[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.btn-pm-add[_ngcontent-%COMP%]:hover {\n  background: #f0f2ff;\n  border-color: var(--color-primary);\n}\n.pm-add-panel[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding: 1rem 1.1rem;\n  background: #fafbff;\n  border: 1px solid #eaecf5;\n  border-radius: 10px;\n}\n.pm-add-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.9rem;\n  font-size: 0.93rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.pm-type-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.pm-type-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.5rem 0.9rem;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  background: white;\n  color: var(--color-text-muted);\n  font-size: 0.86rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pm-type-toggle[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.pm-type-toggle[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-color: var(--color-primary);\n  background: #f0f2ff;\n  color: #4a5fc1;\n  font-weight: 700;\n}\n.pm-form-fields[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  margin-bottom: 0.7rem;\n}\n.pm-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.pm-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.pm-input[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.85rem;\n  border: 1.5px solid #dde0f0;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  outline: none;\n  background: white;\n  transition: border-color 0.15s;\n}\n.pm-input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-primary);\n}\n.pm-default-check[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.88rem;\n  color: var(--color-text);\n  cursor: pointer;\n}\n.pm-default-check[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  cursor: pointer;\n  accent-color: var(--color-primary);\n}\n.pm-default-check[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  margin: 0;\n}\n.pm-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n  align-items: center;\n  margin-top: 0.9rem;\n  padding-top: 0.9rem;\n  border-top: 1px solid #eaecf5;\n}\n.optional-hint[_ngcontent-%COMP%] {\n  font-weight: 400;\n  color: var(--color-text-muted);\n}\n.sa-row[_ngcontent-%COMP%], \n.biz-sa-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n  margin: 0.5rem 0;\n}\n.sa-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: var(--color-text);\n  font-weight: 600;\n}\n.biz-sa-name[_ngcontent-%COMP%] {\n  flex: 1 1 10rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.sa-input[_ngcontent-%COMP%] {\n  width: 6rem;\n  padding: 0.45rem 0.6rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.9rem;\n}\n.sa-unit[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n  font-size: 0.85rem;\n}\n.btn-save-sa[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.1rem;\n}\n.btn-cancel-sa[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.1rem;\n}\n.sa-saved[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: #2e7d32;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.sa-saved[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-edit-sa[_ngcontent-%COMP%] {\n  margin-left: auto;\n  padding: 0.4rem 0.85rem;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n.btn-edit-sa[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.sa-display[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0.5rem 0;\n}\n.sa-value-block[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.35rem;\n}\n.sa-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1;\n}\n.sa-value--sm[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n}\n/*# sourceMappingURL=settings.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsComponent, [{
    type: Component,
    args: [{ selector: "app-settings", standalone: true, imports: [CommonModule, FormsModule, RouterModule, MatIconModule, MatProgressSpinnerModule, TranslateModule], template: `<div class="settings-wrapper">

  <div class="settings-header">
    <mat-icon>settings</mat-icon>
    <div>
      <h1>{{ 'SETTINGS.TITLE' | translate }}</h1>
      <p>{{ 'SETTINGS.SUBTITLE' | translate }}</p>
    </div>
  </div>

  <div *ngIf="isLoading" class="settings-loading">
    <mat-spinner diameter="36"></mat-spinner>
    <span>{{ 'COMMON.LOADING' | translate }}</span>
  </div>

  <ng-container *ngIf="!isLoading">

    <!-- \u2500\u2500 Email Verification \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="settings-card">
      <div class="card-section-header">
        <mat-icon>email</mat-icon>
        <div>
          <h2>{{ 'SETTINGS.EMAIL_TITLE' | translate }}</h2>
          <p class="contact-display" *ngIf="!isEditingEmail">{{ userEmail }}</p>
        </div>
        <span class="verif-badge" *ngIf="!isEditingEmail" [class.verified]="isEmailVerified" [class.unverified]="!isEmailVerified">
          <mat-icon>{{ isEmailVerified ? 'verified' : 'warning' }}</mat-icon>
          {{ isEmailVerified ? ('SETTINGS.VERIFIED' | translate) : ('SETTINGS.UNVERIFIED' | translate) }}
        </span>
        <button class="btn-change" *ngIf="!isEditingEmail" (click)="startEditEmail()">
          <mat-icon>edit</mat-icon> {{ 'SETTINGS.CHANGE' | translate }}
        </button>
      </div>

      <div *ngIf="emailSuccess" class="alert alert-success">
        <mat-icon>check_circle</mat-icon> {{ emailSuccess }}
      </div>

      <!-- Edit email -->
      <ng-container *ngIf="isEditingEmail">
        <div class="contact-edit-row">
          <input
            type="email"
            [(ngModel)]="emailDraft"
            placeholder="you@example.com"
            class="contact-input"
            (keyup.enter)="saveEmail()" />
          <button class="btn-verify" (click)="saveEmail()" [disabled]="savingEmail">
            <mat-spinner *ngIf="savingEmail" diameter="16"></mat-spinner>
            <mat-icon *ngIf="!savingEmail">save</mat-icon>
            {{ savingEmail ? ('SETTINGS.SENDING' | translate) : ('COMMON.SAVE' | translate) }}
          </button>
          <button class="btn-resend" (click)="cancelEditEmail()" [disabled]="savingEmail">{{ 'COMMON.CANCEL' | translate }}</button>
        </div>
        <p *ngIf="emailEditError" class="verif-error"><mat-icon>error_outline</mat-icon> {{ emailEditError }}</p>
      </ng-container>

      <ng-container *ngIf="!isEmailVerified && !isEditingEmail">
        <p class="card-hint">{{ 'SETTINGS.EMAIL_HINT' | translate }}</p>

        <div *ngIf="emailStep === 'idle' || emailStep === 'sending'" class="verif-action">
          <button class="btn-verify" (click)="sendEmailCode()" [disabled]="emailStep === 'sending'">
            <mat-spinner *ngIf="emailStep === 'sending'" diameter="16"></mat-spinner>
            <mat-icon *ngIf="emailStep !== 'sending'">send</mat-icon>
            {{ emailStep === 'sending' ? ('SETTINGS.SENDING' | translate) : ('SETTINGS.SEND_CODE' | translate) }}
          </button>
        </div>

        <div *ngIf="emailStep === 'code-sent' || emailStep === 'verifying'" class="verif-code-row">
          <input
            type="text"
            [(ngModel)]="emailCode"
            maxlength="6"
            placeholder="{{ 'SETTINGS.ENTER_CODE' | translate }}"
            class="code-input"
            (keyup.enter)="confirmEmailCode()" />
          <button class="btn-verify" (click)="confirmEmailCode()" [disabled]="emailStep === 'verifying'">
            <mat-spinner *ngIf="emailStep === 'verifying'" diameter="16"></mat-spinner>
            <mat-icon *ngIf="emailStep !== 'verifying'">check</mat-icon>
            {{ emailStep === 'verifying' ? ('SETTINGS.VERIFYING' | translate) : ('SETTINGS.VERIFY' | translate) }}
          </button>
          <button class="btn-resend" (click)="sendEmailCode()">{{ 'SETTINGS.RESEND' | translate }}</button>
        </div>

        <p *ngIf="emailError" class="verif-error"><mat-icon>error_outline</mat-icon> {{ emailError }}</p>
      </ng-container>

      <div *ngIf="isEmailVerified && !isEditingEmail" class="verif-done">
        <mat-icon>check_circle</mat-icon>
        {{ 'SETTINGS.EMAIL_VERIFIED_MSG' | translate }}
      </div>
    </div>

    <!-- \u2500\u2500 Phone Verification \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="settings-card">
      <div class="card-section-header">
        <mat-icon>phone_iphone</mat-icon>
        <div>
          <h2>{{ 'SETTINGS.PHONE_TITLE' | translate }}</h2>
          <p class="contact-display" *ngIf="!isEditingPhone">{{ userPhone }}</p>
        </div>
        <span class="verif-badge" *ngIf="!isEditingPhone" [class.verified]="isPhoneVerified" [class.unverified]="!isPhoneVerified">
          <mat-icon>{{ isPhoneVerified ? 'verified' : 'warning' }}</mat-icon>
          {{ isPhoneVerified ? ('SETTINGS.VERIFIED' | translate) : ('SETTINGS.UNVERIFIED' | translate) }}
        </span>
        <button class="btn-change" *ngIf="!isEditingPhone" (click)="startEditPhone()">
          <mat-icon>edit</mat-icon> {{ 'SETTINGS.CHANGE' | translate }}
        </button>
      </div>

      <div *ngIf="phoneSuccess" class="alert alert-success">
        <mat-icon>check_circle</mat-icon> {{ phoneSuccess }}
      </div>

      <!-- Edit phone -->
      <ng-container *ngIf="isEditingPhone">
        <div class="contact-edit-row">
          <input
            type="tel"
            [(ngModel)]="phoneDraft"
            placeholder="+91 90000 00000"
            class="contact-input"
            (keyup.enter)="savePhone()" />
          <button class="btn-verify" (click)="savePhone()" [disabled]="savingPhone">
            <mat-spinner *ngIf="savingPhone" diameter="16"></mat-spinner>
            <mat-icon *ngIf="!savingPhone">save</mat-icon>
            {{ savingPhone ? ('SETTINGS.SENDING' | translate) : ('COMMON.SAVE' | translate) }}
          </button>
          <button class="btn-resend" (click)="cancelEditPhone()" [disabled]="savingPhone">{{ 'COMMON.CANCEL' | translate }}</button>
        </div>
        <p *ngIf="phoneEditError" class="verif-error"><mat-icon>error_outline</mat-icon> {{ phoneEditError }}</p>
      </ng-container>

      <ng-container *ngIf="!isPhoneVerified && !isEditingPhone">
        <p class="card-hint">{{ 'SETTINGS.PHONE_HINT' | translate }}</p>

        <div *ngIf="phoneStep === 'idle' || phoneStep === 'sending'" class="verif-action">
          <button class="btn-verify" (click)="sendPhoneCode()" [disabled]="phoneStep === 'sending'">
            <mat-spinner *ngIf="phoneStep === 'sending'" diameter="16"></mat-spinner>
            <mat-icon *ngIf="phoneStep !== 'sending'">sms</mat-icon>
            {{ phoneStep === 'sending' ? ('SETTINGS.SENDING' | translate) : ('SETTINGS.SEND_OTP' | translate) }}
          </button>
        </div>

        <div *ngIf="phoneStep === 'code-sent' || phoneStep === 'verifying'" class="verif-code-row">
          <input
            type="text"
            [(ngModel)]="phoneCode"
            maxlength="6"
            placeholder="{{ 'SETTINGS.ENTER_OTP' | translate }}"
            class="code-input"
            (keyup.enter)="confirmPhoneCode()" />
          <button class="btn-verify" (click)="confirmPhoneCode()" [disabled]="phoneStep === 'verifying'">
            <mat-spinner *ngIf="phoneStep === 'verifying'" diameter="16"></mat-spinner>
            <mat-icon *ngIf="phoneStep !== 'verifying'">check</mat-icon>
            {{ phoneStep === 'verifying' ? ('SETTINGS.VERIFYING' | translate) : ('SETTINGS.VERIFY' | translate) }}
          </button>
          <button class="btn-resend" (click)="sendPhoneCode()">{{ 'SETTINGS.RESEND' | translate }}</button>
        </div>

        <p *ngIf="phoneError" class="verif-error"><mat-icon>error_outline</mat-icon> {{ phoneError }}</p>
      </ng-container>

      <div *ngIf="isPhoneVerified && !isEditingPhone" class="verif-done">
        <mat-icon>check_circle</mat-icon>
        {{ 'SETTINGS.PHONE_VERIFIED_MSG' | translate }}
      </div>
    </div>

    <!-- \u2500\u2500 Payment Methods \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <div class="settings-card">
      <div class="card-section-header">
        <mat-icon>account_balance_wallet</mat-icon>
        <div>
          <h2>{{ 'SETTINGS.PM_TITLE' | translate }}</h2>
          <p class="card-hint-inline">{{ 'SETTINGS.PM_SUBTITLE' | translate }}</p>
        </div>
      </div>

      <p class="card-hint">
        {{ isPro ? ('SETTINGS.PM_HINT_PRO' | translate) : ('SETTINGS.PM_HINT_USER' | translate) }}
      </p>

      <div *ngIf="pmLoading" class="kyc-loading">
        <mat-spinner diameter="20"></mat-spinner>
        <span>{{ 'COMMON.LOADING' | translate }}</span>
      </div>

      <ng-container *ngIf="!pmLoading">

        <div *ngIf="paymentMethods.length === 0 && !showAddPm" class="pm-empty">
          <mat-icon>credit_card_off</mat-icon>
          <span>{{ 'SETTINGS.PM_EMPTY' | translate }}</span>
        </div>

        <div class="pm-list" *ngIf="paymentMethods.length > 0">
          <div class="pm-item" *ngFor="let pm of paymentMethods">
            <div class="pm-icon-badge" [class.upi]="pm.type === 'UPI'" [class.bank]="pm.type === 'Bank'">
              <mat-icon>{{ pm.type === 'UPI' ? 'qr_code_2' : 'account_balance' }}</mat-icon>
            </div>
            <div class="pm-item-info">
              <div class="pm-item-title">
                <span class="pm-type-label">{{ pm.type === 'UPI' ? ('SETTINGS.PM_TYPE_UPI' | translate) : ('SETTINGS.PM_TYPE_BANK' | translate) }}</span>
                <span *ngIf="pm.label" class="pm-custom-label">\xB7 {{ pm.label }}</span>
                <span *ngIf="pm.isDefault" class="pm-default-badge">
                  <mat-icon>star</mat-icon>{{ 'SETTINGS.PM_DEFAULT_BADGE' | translate }}
                </span>
              </div>
              <div class="pm-item-meta">
                <span *ngIf="pm.type === 'UPI'">{{ pm.upiVpa }}</span>
                <span *ngIf="pm.type === 'Bank'">
                  {{ pm.bankAccountHolderName ? pm.bankAccountHolderName + ' \xB7 ' : '' }}{{ pm.bankAccountNumber }}<span *ngIf="pm.bankIfsc" class="pm-ifsc">{{ pm.bankIfsc }}</span>
                </span>
              </div>
            </div>
            <div class="pm-actions">
              <button *ngIf="!pm.isDefault" class="btn-pm-ghost" (click)="setDefaultPaymentMethod(pm.id)" title="{{ 'SETTINGS.PM_SET_DEFAULT_CHECK' | translate }}">
                <mat-icon>star_border</mat-icon>
              </button>
              <button class="btn-pm-danger" (click)="deletePaymentMethod(pm.id)" [disabled]="pmDeleteId === pm.id">
                <mat-spinner *ngIf="pmDeleteId === pm.id" diameter="14"></mat-spinner>
                <mat-icon *ngIf="pmDeleteId !== pm.id">delete_outline</mat-icon>
              </button>
            </div>
          </div>
        </div>

        <!-- Add form panel -->
        <div class="pm-add-panel" *ngIf="showAddPm">
          <h3>{{ 'SETTINGS.PM_ADD_HEADER' | translate }}</h3>

          <div class="pm-type-toggle">
            <button [class.active]="pmType === 'UPI'" (click)="pmType = 'UPI'">
              <mat-icon>qr_code_2</mat-icon>{{ 'SETTINGS.PM_TYPE_UPI' | translate }}
            </button>
            <button [class.active]="pmType === 'Bank'" (click)="pmType = 'Bank'">
              <mat-icon>account_balance</mat-icon>{{ 'SETTINGS.PM_TYPE_BANK' | translate }}
            </button>
          </div>

          <div *ngIf="pmType === 'UPI'" class="pm-form-fields">
            <div class="pm-field">
              <label>{{ 'SETTINGS.PM_UPI_VPA' | translate }}</label>
              <input type="text" [(ngModel)]="pmUpiVpa" placeholder="yourname@upi" class="pm-input" />
            </div>
          </div>

          <div *ngIf="pmType === 'Bank'" class="pm-form-fields">
            <div class="pm-field">
              <label>{{ 'SETTINGS.PM_BANK_HOLDER' | translate }}</label>
              <input type="text" [(ngModel)]="pmBankHolder" placeholder="Account holder name" class="pm-input" />
            </div>
            <div class="pm-field">
              <label>{{ 'SETTINGS.PM_BANK_ACCOUNT' | translate }}</label>
              <input type="text" [(ngModel)]="pmBankAccount" placeholder="Account number" class="pm-input" />
            </div>
            <div class="pm-field">
              <label>{{ 'SETTINGS.PM_BANK_IFSC' | translate }}</label>
              <input type="text" [(ngModel)]="pmBankIfsc" placeholder="e.g. SBIN0001234" class="pm-input" />
            </div>
          </div>

          <div class="pm-form-fields">
            <div class="pm-field">
              <label>{{ 'SETTINGS.PM_LABEL_FIELD' | translate }} <span class="optional-hint">({{ 'COMMON.OPTIONAL' | translate }})</span></label>
              <input type="text" [(ngModel)]="pmLabel" placeholder="e.g. Personal, Business" class="pm-input" />
            </div>
            <div class="pm-default-check">
              <input type="checkbox" id="pmIsDefault" [(ngModel)]="pmIsDefault" />
              <label for="pmIsDefault">{{ 'SETTINGS.PM_SET_DEFAULT_CHECK' | translate }}</label>
            </div>
          </div>

          <p *ngIf="pmSaveError" class="verif-error"><mat-icon>error_outline</mat-icon> {{ pmSaveError }}</p>

          <div class="pm-form-actions">
            <button class="btn-verify" (click)="addPaymentMethod()" [disabled]="pmSaving">
              <mat-spinner *ngIf="pmSaving" diameter="16"></mat-spinner>
              <mat-icon *ngIf="!pmSaving">save</mat-icon>
              {{ pmSaving ? ('SETTINGS.PM_SAVING' | translate) : ('COMMON.SAVE' | translate) }}
            </button>
            <button class="btn-resend" (click)="showAddPm = false; resetPmForm()">{{ 'COMMON.CANCEL' | translate }}</button>
          </div>
        </div>

        <div class="pm-add-trigger" *ngIf="!showAddPm">
          <button class="btn-pm-add" (click)="showAddPm = true">
            <mat-icon>add</mat-icon>{{ 'SETTINGS.PM_ADD' | translate }}
          </button>
        </div>

      </ng-container>
    </div>

    <!-- \u2500\u2500 KYC Documents (Pros only) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <!-- Service Area (Pros only) -->
    <ng-container *ngIf="isPro">
      <div class="settings-card">
        <div class="card-section-header">
          <mat-icon>my_location</mat-icon>
          <div>
            <h2>Service Area</h2>
            <p class="card-hint-inline">How far you travel for jobs</p>
          </div>
          <button class="btn-edit-sa" *ngIf="!isEditingProRadius" (click)="startEditProRadius()">
            <mat-icon>edit</mat-icon> {{ 'SETTINGS.CHANGE' | translate }}
          </button>
        </div>

        <!-- View mode -->
        <div class="sa-display" *ngIf="!isEditingProRadius">
          <div class="sa-value-block">
            <span class="sa-value">{{ proRadius }}</span>
            <span class="sa-unit">km radius</span>
          </div>
          <span class="sa-saved" *ngIf="proRadiusSaved"><mat-icon>check_circle</mat-icon> Saved</span>
        </div>

        <!-- Edit mode -->
        <div class="sa-row" *ngIf="isEditingProRadius">
          <label class="sa-label">Service radius (km)</label>
          <input type="number" min="1" max="500" [(ngModel)]="proRadius" class="sa-input" />
          <button class="btn-save-sa" (click)="saveProRadius()" [disabled]="savingProRadius || !proRadius">
            {{ savingProRadius ? 'Saving\u2026' : 'Save' }}
          </button>
          <button class="btn-cancel-sa" (click)="cancelEditProRadius()" [disabled]="savingProRadius">Cancel</button>
        </div>

        <p class="card-hint">Jobs posted within this distance of your address will reach you.</p>
      </div>

      <!-- Businesses service radius -->
      <div class="settings-card" *ngIf="ownedBusinesses.length > 0">
        <div class="card-section-header">
          <mat-icon>storefront</mat-icon>
          <div>
            <h2>Business Service Areas</h2>
            <p class="card-hint-inline">Service radius for each of your businesses</p>
          </div>
        </div>
        <div class="biz-sa-row" *ngFor="let biz of ownedBusinesses">
          <span class="biz-sa-name">{{ biz.businessName }}</span>

          <!-- View mode -->
          <ng-container *ngIf="editingBizRadiusId !== biz.id">
            <span class="sa-value sa-value--sm">{{ biz.serviceRadiusKm }}</span>
            <span class="sa-unit">km</span>
            <button class="btn-edit-sa" (click)="startEditBizRadius(biz)">
              <mat-icon>edit</mat-icon> {{ 'SETTINGS.CHANGE' | translate }}
            </button>
          </ng-container>

          <!-- Edit mode -->
          <ng-container *ngIf="editingBizRadiusId === biz.id">
            <input type="number" min="1" max="500" [(ngModel)]="biz.serviceRadiusKm" class="sa-input" />
            <span class="sa-unit">km</span>
            <button class="btn-save-sa" (click)="saveBizRadius(biz)" [disabled]="savingBizRadiusId === biz.id || !biz.serviceRadiusKm">
              {{ savingBizRadiusId === biz.id ? 'Saving\u2026' : 'Save' }}
            </button>
            <button class="btn-cancel-sa" (click)="cancelEditBizRadius(biz)" [disabled]="savingBizRadiusId === biz.id">Cancel</button>
          </ng-container>
        </div>
      </div>
    </ng-container>

    <!-- KYC Documents (Pros only) -->
    <ng-container *ngIf="isPro">
      <div class="settings-card kyc-card">
        <div class="card-section-header">
          <mat-icon>badge</mat-icon>
          <div>
            <h2>{{ 'SETTINGS.KYC_TITLE' | translate }}</h2>
            <p class="card-hint-inline">{{ 'SETTINGS.KYC_SUBTITLE' | translate }}</p>
          </div>
          <span *ngIf="kycStatus" class="kyc-status-badge" [ngClass]="kycStatusClass(kycStatus.kycStatus)">
            {{ kycStatusLabel(kycStatus.kycStatus) }}
          </span>
        </div>

        <div *ngIf="kycLoading" class="kyc-loading">
          <mat-spinner diameter="24"></mat-spinner>
          <span>{{ 'COMMON.LOADING' | translate }}</span>
        </div>

        <ng-container *ngIf="!kycLoading && kycStatus">

          <div *ngIf="kycStatus.kycStatus === 'Approved'" class="alert alert-success kyc-approved">
            <mat-icon>verified_user</mat-icon>
            {{ 'SETTINGS.KYC_APPROVED_MSG' | translate }}
          </div>

          <div *ngIf="kycStatus.kycStatus !== 'Approved'">
            <p class="card-hint">{{ 'SETTINGS.KYC_HINT' | translate }}</p>

            <div class="doc-grid">

              <!-- Aadhaar -->
              <div class="doc-card" [class.uploaded]="kycStatus.aadhaarUploaded">
                <div class="doc-card-header">
                  <mat-icon>credit_card</mat-icon>
                  <span>{{ 'SETTINGS.AADHAAR' | translate }}</span>
                  <mat-icon class="doc-status-icon" *ngIf="kycStatus.aadhaarUploaded">check_circle</mat-icon>
                </div>

                <div class="doc-preview" *ngIf="aadhaarPreview">
                  <img *ngIf="aadhaarPreview !== 'pdf'" [src]="aadhaarPreview" alt="Aadhaar preview" />
                  <div *ngIf="aadhaarPreview === 'pdf'" class="pdf-badge">
                    <mat-icon>picture_as_pdf</mat-icon> PDF uploaded
                  </div>
                </div>
                <div class="doc-preview" *ngIf="!aadhaarPreview && kycStatus.aadhaarUploaded && kycStatus.aadhaarUrl">
                  <a [href]="kycStatus.aadhaarUrl" target="_blank" class="doc-link">
                    <mat-icon>open_in_new</mat-icon> {{ 'SETTINGS.VIEW_DOCUMENT' | translate }}
                  </a>
                </div>

                <button class="btn-upload" (click)="triggerAadhaarUpload()" [disabled]="aadhaarUploading">
                  <mat-spinner *ngIf="aadhaarUploading" diameter="16"></mat-spinner>
                  <mat-icon *ngIf="!aadhaarUploading">upload_file</mat-icon>
                  {{ aadhaarUploading ? ('SETTINGS.UPLOADING' | translate) : (kycStatus.aadhaarUploaded ? ('SETTINGS.REPLACE' | translate) : ('SETTINGS.UPLOAD' | translate)) }}
                </button>
                <input #aadhaarInput type="file" accept=".pdf,.jpg,.jpeg,.png" style="display:none" (change)="onAadhaarSelected($event)" />
              </div>

              <!-- PAN -->
              <div class="doc-card" [class.uploaded]="kycStatus.panUploaded">
                <div class="doc-card-header">
                  <mat-icon>article</mat-icon>
                  <span>{{ 'SETTINGS.PAN' | translate }}</span>
                  <mat-icon class="doc-status-icon" *ngIf="kycStatus.panUploaded">check_circle</mat-icon>
                </div>

                <div class="doc-preview" *ngIf="panPreview">
                  <img *ngIf="panPreview !== 'pdf'" [src]="panPreview" alt="PAN preview" />
                  <div *ngIf="panPreview === 'pdf'" class="pdf-badge">
                    <mat-icon>picture_as_pdf</mat-icon> PDF uploaded
                  </div>
                </div>
                <div class="doc-preview" *ngIf="!panPreview && kycStatus.panUploaded && kycStatus.panUrl">
                  <a [href]="kycStatus.panUrl" target="_blank" class="doc-link">
                    <mat-icon>open_in_new</mat-icon> {{ 'SETTINGS.VIEW_DOCUMENT' | translate }}
                  </a>
                </div>

                <button class="btn-upload" (click)="triggerPanUpload()" [disabled]="panUploading">
                  <mat-spinner *ngIf="panUploading" diameter="16"></mat-spinner>
                  <mat-icon *ngIf="!panUploading">upload_file</mat-icon>
                  {{ panUploading ? ('SETTINGS.UPLOADING' | translate) : (kycStatus.panUploaded ? ('SETTINGS.REPLACE' | translate) : ('SETTINGS.UPLOAD' | translate)) }}
                </button>
                <input #panInput type="file" accept=".pdf,.jpg,.jpeg,.png" style="display:none" (change)="onPanSelected($event)" />
              </div>

            </div>

            <p *ngIf="kycError" class="verif-error"><mat-icon>error_outline</mat-icon> {{ kycError }}</p>
            <div *ngIf="kycSuccess" class="alert alert-success">
              <mat-icon>check_circle</mat-icon> {{ kycSuccess }}
            </div>

            <div class="kyc-submit-row">
              <p class="kyc-submit-hint" *ngIf="!kycStatus.aadhaarUploaded || !kycStatus.panUploaded">
                <mat-icon>info</mat-icon> {{ 'SETTINGS.KYC_UPLOAD_BOTH' | translate }}
              </p>
              <button
                class="btn-submit-kyc"
                (click)="submitKyc()"
                [disabled]="!canSubmitKyc || kycSubmitting">
                <mat-spinner *ngIf="kycSubmitting" diameter="16"></mat-spinner>
                <mat-icon *ngIf="!kycSubmitting">send</mat-icon>
                {{ kycSubmitting ? ('SETTINGS.SUBMITTING' | translate) : ('SETTINGS.SUBMIT_KYC' | translate) }}
              </button>
            </div>
          </div>
        </ng-container>
      </div>
    </ng-container>

    <!-- \u2500\u2500 Business Account (Pros only) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="isPro">
      <div class="settings-card">
        <div class="card-section-header">
          <mat-icon class="card-icon">business</mat-icon>
          <div>
            <h2>{{ 'SETTINGS.BUSINESS_TITLE' | translate }}</h2>
            <p class="card-hint-inline">{{ 'SETTINGS.BUSINESS_SUBTITLE' | translate }}</p>
          </div>
        </div>
        <p class="card-hint">
          {{ (isBusinessMember ? 'SETTINGS.BUSINESS_HINT_MEMBER' : 'SETTINGS.BUSINESS_HINT') | translate }}
        </p>
        <ng-container *ngIf="!businessesLoading">
          <a *ngIf="ownsBusiness" routerLink="/my-businesses" class="btn-manage-biz">
            <mat-icon>business</mat-icon>
            {{ 'SETTINGS.MANAGE_BUSINESSES' | translate }}
          </a>
          <a *ngIf="!ownsBusiness" routerLink="/my-businesses" class="btn-manage-biz">
            <mat-icon>business</mat-icon>
            {{ 'SETTINGS.BUSINESS_BTN' | translate }}
          </a>
        </ng-container>
      </div>
    </ng-container>

  </ng-container>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/settings/settings.scss */\n.settings-wrapper {\n  max-width: 700px;\n  margin: 0 auto;\n  padding: 1.5rem 1rem 4rem;\n}\n.settings-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 2rem;\n}\n.settings-header > mat-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  color: var(--color-primary);\n}\n.settings-header h1 {\n  margin: 0 0 0.15rem;\n  font-size: var(--text-h1);\n  font-weight: 700;\n  color: var(--color-text);\n}\n.settings-header p {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.btn-edit-sa,\n.btn-cancel-sa,\n.btn-resend,\n.btn-change,\n.btn-save-sa,\n.btn-manage-biz,\n.btn-submit-kyc,\n.btn-verify {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.625rem 1.25rem;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.875rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition:\n    opacity 0.15s,\n    transform 0.15s,\n    background 0.15s,\n    border-color 0.15s,\n    color 0.15s;\n}\n.btn-edit-sa mat-icon,\n.btn-cancel-sa mat-icon,\n.btn-resend mat-icon,\n.btn-change mat-icon,\n.btn-save-sa mat-icon,\n.btn-manage-biz mat-icon,\n.btn-submit-kyc mat-icon,\n.btn-verify mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.btn-edit-sa:disabled,\n.btn-cancel-sa:disabled,\n.btn-resend:disabled,\n.btn-change:disabled,\n.btn-save-sa:disabled,\n.btn-manage-biz:disabled,\n.btn-submit-kyc:disabled,\n.btn-verify:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.btn-save-sa,\n.btn-manage-biz,\n.btn-submit-kyc,\n.btn-verify {\n  background: var(--color-primary-gradient);\n  color: #fff;\n}\n.btn-save-sa:hover:not(:disabled),\n.btn-manage-biz:hover:not(:disabled),\n.btn-submit-kyc:hover:not(:disabled),\n.btn-verify:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn-edit-sa,\n.btn-cancel-sa,\n.btn-resend,\n.btn-change {\n  background: #f3f4f6;\n  color: #374151;\n  border: 1.5px solid var(--color-border);\n}\n.btn-edit-sa:hover:not(:disabled),\n.btn-cancel-sa:hover:not(:disabled),\n.btn-resend:hover:not(:disabled),\n.btn-change:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.settings-loading {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 2rem;\n  color: var(--color-text-muted);\n  font-size: 0.9rem;\n}\n.settings-card {\n  background: white;\n  border: 1px solid #e8e8f0;\n  border-radius: 14px;\n  padding: 1.5rem;\n  margin-bottom: 1.25rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n}\n.card-section-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.85rem;\n  margin-bottom: 1rem;\n}\n.card-section-header > mat-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: var(--color-primary);\n  margin-top: 0.1rem;\n  flex-shrink: 0;\n}\n.card-section-header > div {\n  flex: 1;\n}\n.card-section-header h2 {\n  margin: 0 0 0.1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.contact-display {\n  margin: 0;\n  font-size: 0.9rem;\n  color: var(--color-text-muted);\n}\n.btn-change {\n  flex-shrink: 0;\n  padding: 0.4rem 0.85rem;\n  font-size: 0.82rem;\n}\n.btn-change mat-icon {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.contact-edit-row {\n  display: flex;\n  gap: 0.65rem;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n}\n.contact-input {\n  flex: 1 1 12rem;\n  min-width: 0;\n  padding: 0.6rem 0.85rem;\n  border: 1.5px solid #dde0f0;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.contact-input:focus {\n  border-color: var(--color-primary);\n}\n.card-hint {\n  font-size: 0.87rem;\n  color: var(--color-text-muted);\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\n.card-hint-inline {\n  margin: 0;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n}\n.verif-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.25rem 0.7rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.verif-badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.verif-badge.verified {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.verif-badge.verified mat-icon {\n  color: #4caf50;\n}\n.verif-badge.unverified {\n  background: #fff3e0;\n  color: #e65100;\n}\n.verif-badge.unverified mat-icon {\n  color: #ff9800;\n}\n.verif-action {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.verif-code-row {\n  display: flex;\n  gap: 0.65rem;\n  align-items: center;\n  flex-wrap: wrap;\n  margin-bottom: 0.5rem;\n}\n.code-input {\n  width: 140px;\n  padding: 0.6rem 0.85rem;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  font-size: 1rem;\n  letter-spacing: 0.15em;\n  text-align: center;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.code-input:focus {\n  border-color: var(--color-primary);\n}\n.verif-done {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.verif-done mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: #4caf50;\n}\n.verif-error {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: #c62828;\n  font-size: 0.85rem;\n  margin: 0.5rem 0 0;\n}\n.verif-error mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  font-weight: 500;\n  margin-bottom: 0.75rem;\n}\n.alert mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.alert.alert-success {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.alert.alert-success mat-icon {\n  color: #4caf50;\n}\n.kyc-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: var(--color-text-muted);\n  font-size: 0.88rem;\n}\n.kyc-status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.kyc-status-badge.status-none {\n  background: #f5f5f5;\n  color: #777;\n}\n.kyc-status-badge.status-pending {\n  background: #fff8e1;\n  color: #f57f17;\n}\n.kyc-status-badge.status-approved {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.kyc-status-badge.status-rejected {\n  background: #ffebee;\n  color: #c62828;\n}\n.kyc-approved.alert-success {\n  font-size: 0.95rem;\n}\n.doc-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1rem;\n  margin-bottom: 1.25rem;\n}\n@media (max-width: 560px) {\n  .doc-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.doc-card {\n  border: 2px dashed #dde1ff;\n  border-radius: 12px;\n  padding: 1.1rem;\n  background: #fafbff;\n  transition: border-color 0.2s, background 0.2s;\n}\n.doc-card.uploaded {\n  border-style: solid;\n  border-color: #c8e6c9;\n  background: #f9fff9;\n}\n.doc-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--color-text);\n}\n.doc-card-header mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: var(--color-primary);\n}\n.doc-card-header .doc-status-icon {\n  margin-left: auto;\n  color: #4caf50;\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.doc-preview {\n  margin-bottom: 0.85rem;\n}\n.doc-preview img {\n  width: 100%;\n  max-height: 140px;\n  object-fit: cover;\n  border-radius: 8px;\n  border: 1px solid #e0e0e0;\n}\n.pdf-badge {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: #fce4ec;\n  color: #c62828;\n  padding: 0.5rem 0.75rem;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.pdf-badge mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.doc-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  color: var(--color-primary);\n  font-size: 0.85rem;\n  text-decoration: none;\n}\n.doc-link:hover {\n  text-decoration: underline;\n}\n.doc-link mat-icon {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.btn-upload {\n  width: 100%;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1rem;\n  background: white;\n  color: var(--color-primary);\n  border: 1.5px solid var(--color-primary);\n  border-radius: 8px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, color 0.15s;\n}\n.btn-upload mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.btn-upload:hover:not(:disabled) {\n  background: var(--color-primary);\n  color: white;\n}\n.btn-upload:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.kyc-submit-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  border-top: 1px solid #f0f0f5;\n  padding-top: 1rem;\n}\n.kyc-submit-hint {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.84rem;\n  color: var(--color-text-muted);\n  margin: 0;\n}\n.kyc-submit-hint mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.btn-manage-biz {\n  text-decoration: none;\n}\n.pm-empty {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  color: var(--color-text-muted);\n  font-size: 0.88rem;\n  margin: 0.25rem 0 1rem;\n}\n.pm-empty mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  color: #ccc;\n}\n.pm-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n}\n.pm-item {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.85rem 1rem;\n  background: #fafbff;\n  border: 1px solid #eaecf5;\n  border-radius: 10px;\n}\n.pm-icon-badge {\n  width: 38px;\n  height: 38px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pm-icon-badge mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.pm-icon-badge.upi {\n  background: #e3f2fd;\n}\n.pm-icon-badge.upi mat-icon {\n  color: #1565c0;\n}\n.pm-icon-badge.bank {\n  background: #e8f5e9;\n}\n.pm-icon-badge.bank mat-icon {\n  color: #2e7d32;\n}\n.pm-item-info {\n  flex: 1;\n  min-width: 0;\n}\n.pm-item-title {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.15rem;\n}\n.pm-type-label {\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: var(--color-text);\n}\n.pm-custom-label {\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n}\n.pm-default-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  background: #fff8e1;\n  color: #f57f17;\n  border-radius: 20px;\n  padding: 0.1rem 0.55rem;\n  font-size: 0.74rem;\n  font-weight: 700;\n}\n.pm-default-badge mat-icon {\n  font-size: 0.74rem;\n  width: 0.74rem;\n  height: 0.74rem;\n}\n.pm-item-meta {\n  font-size: 0.84rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pm-ifsc {\n  margin-left: 0.45rem;\n  font-size: 0.78rem;\n  color: var(--color-text-muted);\n  background: #f0f0f5;\n  padding: 0.1rem 0.4rem;\n  border-radius: 4px;\n}\n.pm-actions {\n  display: flex;\n  gap: 0.4rem;\n  flex-shrink: 0;\n}\n.btn-pm-ghost {\n  width: 34px;\n  height: 34px;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  background: white;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #bbb;\n  transition: border-color 0.15s, color 0.15s;\n}\n.btn-pm-ghost mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.btn-pm-ghost:hover {\n  border-color: #f57f17;\n  color: #f57f17;\n}\n.btn-pm-danger {\n  width: 34px;\n  height: 34px;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  background: #fff5f5;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #c62828;\n  transition: background 0.15s;\n}\n.btn-pm-danger mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.btn-pm-danger:hover:not(:disabled) {\n  background: #ffebee;\n}\n.btn-pm-danger:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.pm-add-trigger {\n  margin-top: 0.25rem;\n}\n.btn-pm-add {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.6rem 1.1rem;\n  background: white;\n  color: var(--color-primary);\n  border: 1.5px dashed #aab4f5;\n  border-radius: 8px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.btn-pm-add mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.btn-pm-add:hover {\n  background: #f0f2ff;\n  border-color: var(--color-primary);\n}\n.pm-add-panel {\n  margin-top: 0.75rem;\n  padding: 1rem 1.1rem;\n  background: #fafbff;\n  border: 1px solid #eaecf5;\n  border-radius: 10px;\n}\n.pm-add-panel h3 {\n  margin: 0 0 0.9rem;\n  font-size: 0.93rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.pm-type-toggle {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.pm-type-toggle button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.5rem 0.9rem;\n  border: 1.5px solid #ddd;\n  border-radius: 8px;\n  background: white;\n  color: var(--color-text-muted);\n  font-size: 0.86rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.pm-type-toggle button mat-icon {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.pm-type-toggle button.active {\n  border-color: var(--color-primary);\n  background: #f0f2ff;\n  color: #4a5fc1;\n  font-weight: 700;\n}\n.pm-form-fields {\n  display: flex;\n  flex-direction: column;\n  gap: 0.7rem;\n  margin-bottom: 0.7rem;\n}\n.pm-field {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.pm-field label {\n  font-size: 0.82rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.pm-input {\n  padding: 0.6rem 0.85rem;\n  border: 1.5px solid #dde0f0;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  outline: none;\n  background: white;\n  transition: border-color 0.15s;\n}\n.pm-input:focus {\n  border-color: var(--color-primary);\n}\n.pm-default-check {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.88rem;\n  color: var(--color-text);\n  cursor: pointer;\n}\n.pm-default-check input[type=checkbox] {\n  cursor: pointer;\n  accent-color: var(--color-primary);\n}\n.pm-default-check label {\n  cursor: pointer;\n  margin: 0;\n}\n.pm-form-actions {\n  display: flex;\n  gap: 0.65rem;\n  align-items: center;\n  margin-top: 0.9rem;\n  padding-top: 0.9rem;\n  border-top: 1px solid #eaecf5;\n}\n.optional-hint {\n  font-weight: 400;\n  color: var(--color-text-muted);\n}\n.sa-row,\n.biz-sa-row {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n  margin: 0.5rem 0;\n}\n.sa-label {\n  font-size: 0.9rem;\n  color: var(--color-text);\n  font-weight: 600;\n}\n.biz-sa-name {\n  flex: 1 1 10rem;\n  font-weight: 600;\n  color: var(--color-text);\n}\n.sa-input {\n  width: 6rem;\n  padding: 0.45rem 0.6rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.9rem;\n}\n.sa-unit {\n  color: var(--color-text-muted);\n  font-size: 0.85rem;\n}\n.btn-save-sa {\n  padding: 0.5rem 1.1rem;\n}\n.btn-cancel-sa {\n  padding: 0.5rem 1.1rem;\n}\n.sa-saved {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  color: #2e7d32;\n  font-size: 0.85rem;\n  font-weight: 600;\n}\n.sa-saved mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.btn-edit-sa {\n  margin-left: auto;\n  padding: 0.4rem 0.85rem;\n  font-size: 0.82rem;\n  white-space: nowrap;\n}\n.btn-edit-sa mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.sa-display {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin: 0.5rem 0;\n}\n.sa-value-block {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 0.35rem;\n}\n.sa-value {\n  font-size: 1.6rem;\n  font-weight: 700;\n  color: var(--color-text);\n  line-height: 1;\n}\n.sa-value--sm {\n  font-size: 1.05rem;\n}\n/*# sourceMappingURL=settings.css.map */\n'] }]
  }], () => [{ type: Auth }, { type: UserService }, { type: ProService }, { type: VerificationService }, { type: KycService }, { type: PaymentMethodService }, { type: BusinessService }, { type: ChangeDetectorRef }], { aadhaarInput: [{
    type: ViewChild,
    args: ["aadhaarInput"]
  }], panInput: [{
    type: ViewChild,
    args: ["panInput"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsComponent, { className: "SettingsComponent", filePath: "src/app/features/settings/settings.ts", lineNumber: 26 });
})();
export {
  SettingsComponent
};
//# sourceMappingURL=chunk-KLFYVUBQ.js.map

