import {
  PayoutService
} from "./chunk-BLBEIKI7.js";
import {
  ServiceAreaService
} from "./chunk-IYIOAUDF.js";
import {
  UserService
} from "./chunk-RYM562GK.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AQNNVN3U.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-B4QCWAPP.js";
import "./chunk-SOWTMXOK.js";
import {
  ReviewService
} from "./chunk-WPDQA74A.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  RequiredValidator,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-A6TK5TPK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ZGXDPMMN.js";
import {
  ApiService,
  Auth
} from "./chunk-6CNFBV5T.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  RouterModule
} from "./chunk-VRKQDNIA.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  HttpClient,
  Injectable,
  LowerCasePipe,
  NgForOf,
  NgIf,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/core/services/pro.ts
var ProService = class _ProService {
  api;
  constructor(api) {
    this.api = api;
  }
  getPro(proId) {
    return this.api.get(`pros/${proId}`);
  }
  updatePro(proData) {
    return this.api.put(`pros/${proData.id}`, proData);
  }
  getBankDetails(proId) {
    return this.api.get(`pros/${proId}/bank-details`);
  }
  updateBankDetails(proId, req) {
    return this.api.put(`pros/${proId}/bank-details`, req);
  }
  static \u0275fac = function ProService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProService)(\u0275\u0275inject(ApiService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProService, factory: _ProService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }], null);
})();

// src/app/core/services/verification.service.ts
var VerificationService = class _VerificationService {
  http;
  apiUrl = `${environment.apiUrl}/verification`;
  constructor(http) {
    this.http = http;
  }
  sendEmailCode(contact, userType) {
    return this.http.post(`${this.apiUrl}/send-email-code`, { contact, userType });
  }
  verifyEmail(contact, code, userType) {
    return this.http.post(`${this.apiUrl}/verify-email`, { contact, code, userType });
  }
  static \u0275fac = function VerificationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VerificationService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VerificationService, factory: _VerificationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VerificationService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/profile/profile/profile.ts
var _c0 = () => [5, 4, 3, 2, 1];
function ProfileComponent_ng_container_1_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.user.city);
  }
}
function ProfileComponent_ng_container_1_nav_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 16)(1, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_nav_22_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectUserSection("info"));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_nav_22_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectUserSection("payment"));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_nav_22_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectUserSection("reviews"));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.userSection === "info");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "PROFILE.TAB_PROFILE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.userSection === "payment");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 11, "PROFILE.TAB_PAYMENT"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.userSection === "reviews");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 13, "PROFILE.TAB_REVIEWS"));
  }
}
function ProfileComponent_ng_container_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "PROFILE.BACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "PROFILE.EDIT_PROFILE"));
  }
}
function ProfileComponent_ng_container_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_button_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_25_button_46_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailVerification());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROFILE.VERIFY_NOW"));
  }
}
function ProfileComponent_ng_container_1_ng_container_25_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROFILE.SENDING"));
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_48_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emailVerifError);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 41)(7, "input", 42);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_ng_container_25_div_48_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailVerifCode, $event) || (ctx_r0.emailVerifCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_25_div_48_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmEmailCode());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_25_div_48_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEmailVerification());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ProfileComponent_ng_container_1_ng_container_25_div_48_span_15_Template, 2, 1, "span", 44);
    \u0275\u0275elementStart(16, "button", 45);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_25_div_48_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailVerification());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 8, "PROFILE.EMAIL_CODE_PROMPT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailVerifCode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.emailVerifStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailVerifStep === "verifying" ? \u0275\u0275pipeBind1(10, 10, "PROFILE.VERIFYING") : \u0275\u0275pipeBind1(11, 12, "PROFILE.CONFIRM"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "PROFILE.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.emailVerifError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "PROFILE.RESEND_CODE"));
  }
}
function ProfileComponent_ng_container_1_ng_container_25_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("badge-ok", ctx_r0.user.isPhoneVerified)("badge-warn", !ctx_r0.user.isPhoneVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.user.isPhoneVerified ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.isPhoneVerified ? \u0275\u0275pipeBind1(4, 6, "PROFILE.VERIFIED") : \u0275\u0275pipeBind1(5, 8, "PROFILE.UNVERIFIED"), " ");
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.user.houseNameNumber, ", ");
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.user.street2);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_8_ng_container_2_Template, 2, 1, "ng-container", 3);
    \u0275\u0275text(3, ", ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.user.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.street2);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_9_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.user.state);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_9_ng_container_2_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.user.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.state);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.user.country);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r0.user.zipPostalCode);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "h3", 26)(2, "mat-icon");
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275template(7, ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_7_Template, 2, 1, "ng-container", 3)(8, ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_8_Template, 4, 2, "ng-container", 3)(9, ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_9_Template, 3, 2, "ng-container", 3)(10, ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_10_Template, 2, 1, "ng-container", 3)(11, ProfileComponent_ng_container_1_ng_container_25_div_58_ng_container_11_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 6, "PROFILE.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.user.houseNameNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.zipPostalCode);
  }
}
function ProfileComponent_ng_container_1_ng_container_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 22)(2, "button", 23);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_25_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 25)(9, "h3", 26)(10, "mat-icon");
    \u0275\u0275text(11, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 27)(15, "div", 28)(16, "span", 29);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 30);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 28)(22, "span", 29);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 30);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(27, "div", 25)(28, "h3", 26)(29, "mat-icon");
    \u0275\u0275text(30, "contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 28)(34, "span", 29);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 31)(38, "span");
    \u0275\u0275text(39);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "span", 32)(41, "mat-icon");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd();
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, ProfileComponent_ng_container_1_ng_container_25_button_46_Template, 3, 3, "button", 33)(47, ProfileComponent_ng_container_1_ng_container_25_span_47_Template, 3, 3, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(48, ProfileComponent_ng_container_1_ng_container_25_div_48_Template, 19, 18, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div", 28)(50, "span", 29);
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(53, "div", 31)(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, ProfileComponent_ng_container_1_ng_container_25_span_57_Template, 6, 10, "span", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(58, ProfileComponent_ng_container_1_ng_container_25_div_58_Template, 12, 8, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 22, "PROFILE.EDIT_PROFILE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 24, "PROFILE.PERSONAL"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 26, "PROFILE.FIRST_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.user.firstName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 28, "PROFILE.LAST_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.user.lastName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 30, "PROFILE.CONTACT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 32, "PROFILE.EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.user.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-ok", ctx_r0.user.isEmailVerified)("badge-warn", !ctx_r0.user.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.user.isEmailVerified ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.isEmailVerified ? \u0275\u0275pipeBind1(44, 34, "PROFILE.VERIFIED") : \u0275\u0275pipeBind1(45, 36, "PROFILE.UNVERIFIED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.user.isEmailVerified && ctx_r0.emailVerifStep === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailVerifStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.user.isEmailVerified && (ctx_r0.emailVerifStep === "code-sent" || ctx_r0.emailVerifStep === "verifying"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 38, "PROFILE.PHONE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.user.phoneNumber || \u0275\u0275pipeBind1(56, 40, "PROFILE.NOT_SET"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.user.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.houseNameNumber || ctx_r0.user.street1 || ctx_r0.user.city);
  }
}
function ProfileComponent_ng_container_1_ng_container_26_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_26_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startEditPayment());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.upiVpa ? "Edit" : "Add", " ");
  }
}
function ProfileComponent_ng_container_1_ng_container_26_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.paymentSuccessMessage);
  }
}
function ProfileComponent_ng_container_1_ng_container_26_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.paymentErrorMessage);
  }
}
function ProfileComponent_ng_container_1_ng_container_26_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-icon");
    \u0275\u0275text(2, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "PROFILE.NO_UPI"));
  }
}
function ProfileComponent_ng_container_1_ng_container_26_ng_container_11_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "span", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 31)(5, "mat-icon", 61);
    \u0275\u0275text(6, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "span", 62);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "PROFILE.SAVED_UPI"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.user.upiVpa);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 5, "PROFILE.UPI_HINT"));
  }
}
function ProfileComponent_ng_container_1_ng_container_26_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProfileComponent_ng_container_1_ng_container_26_ng_container_11_div_1_Template, 6, 3, "div", 58)(2, ProfileComponent_ng_container_1_ng_container_26_ng_container_11_div_2_Template, 12, 7, "div", 59);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.user.upiVpa);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.upiVpa);
  }
}
function ProfileComponent_ng_container_1_ng_container_26_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 65);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_ng_container_26_div_12_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.paymentUpiVpa, $event) || (ctx_r0.paymentUpiVpa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 66);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 67)(11, "button", 43);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_26_div_12_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.savePaymentDetails());
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_26_div_12_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEditPayment());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "PROFILE.UPI_LABEL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.paymentUpiVpa);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 9, "PROFILE.UPI_PLACEHOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 11, "PROFILE.UPI_BLANK_HINT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r0.paymentSaveLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.paymentSaveLoading ? \u0275\u0275pipeBind1(15, 13, "PROFILE.SAVING") : \u0275\u0275pipeBind1(16, 15, "PROFILE.SAVE_CHANGES"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 17, "PROFILE.CANCEL"), " ");
  }
}
function ProfileComponent_ng_container_1_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 50)(3, "h3", 26)(4, "mat-icon");
    \u0275\u0275text(5, "account_balance_wallet");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProfileComponent_ng_container_1_ng_container_26_button_8_Template, 4, 1, "button", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProfileComponent_ng_container_1_ng_container_26_div_9_Template, 5, 1, "div", 52)(10, ProfileComponent_ng_container_1_ng_container_26_div_10_Template, 5, 1, "div", 53)(11, ProfileComponent_ng_container_1_ng_container_26_ng_container_11_Template, 3, 2, "ng-container", 3)(12, ProfileComponent_ng_container_1_ng_container_26_div_12_Template, 22, 19, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, "PROFILE.PAYMENT_DETAILS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPayment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentSuccessMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.paymentErrorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditingPayment);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingPayment);
  }
}
function ProfileComponent_ng_container_1_ng_container_27_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "mat-spinner", 71);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "mat-icon");
    \u0275\u0275text(2, "rate_review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "PROFILE.NO_REVIEWS_USER"));
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r9 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("filled", ctx_r0.starFilled(ctx_r0.userRatingSummary.averageRating, i_r9 - 1));
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86);
    \u0275\u0275element(4, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r10 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r10, "\u2605");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.ratingBarWidth(ctx_r0.userRatingSummary.ratingBreakdown[s_r10 - 1] || 0, ctx_r0.userRatingSummary.totalReviews));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.userRatingSummary.ratingBreakdown[s_r10 - 1] || 0);
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r11 = ctx.$implicit;
    const review_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("filled", ctx_r0.starFilled(review_r12.rating, i_r11 - 1));
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", review_r12.jobTitle);
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_div_4_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r12 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r12.comment);
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94);
    \u0275\u0275template(2, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_div_4_span_2_Template, 2, 2, "span", 95);
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_div_4_span_5_Template, 2, 1, "span", 97);
    \u0275\u0275elementStart(6, "span", 98);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_div_4_p_9_Template, 2, 1, "p", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r12 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.starsArray);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r12.reviewerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r12.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 5, review_r12.createdAt, "d MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", review_r12.comment);
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.loadMoreUserReviews());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROFILE.LOAD_MORE"), " ");
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "h4", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_div_4_Template, 10, 8, "div", 91)(5, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_button_5_Template, 3, 3, "button", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "PROFILE.RECENT_REVIEWS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.userReviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userReviews.length < ctx_r0.userReviewsTotal);
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 74)(2, "div", 75)(3, "div", 76);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 77);
    \u0275\u0275template(7, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_span_7_Template, 2, 2, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 79);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 80);
    \u0275\u0275template(11, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_11_Template, 7, 4, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_div_12_Template, 6, 5, "div", 82);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, ctx_r0.userRatingSummary.averageRating, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.starsArray);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.userRatingSummary.totalReviews, " review", ctx_r0.userRatingSummary.totalReviews !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userReviews.length > 0);
  }
}
function ProfileComponent_ng_container_1_ng_container_27_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_div_1_Template, 6, 3, "div", 72)(2, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_ng_container_2_Template, 13, 10, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.userRatingSummary || ctx_r0.userRatingSummary.totalReviews === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.userRatingSummary && ctx_r0.userRatingSummary.totalReviews > 0);
  }
}
function ProfileComponent_ng_container_1_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "h3", 26)(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProfileComponent_ng_container_1_ng_container_27_div_7_Template, 2, 0, "div", 69)(8, ProfileComponent_ng_container_1_ng_container_27_ng_container_8_Template, 3, 2, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "PROFILE.REVIEWS_FROM_PROS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.userReviewsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.userReviewsLoading);
  }
}
function ProfileComponent_ng_container_1_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function ProfileComponent_ng_container_1_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ProfileComponent_ng_container_1_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275template(1, ProfileComponent_ng_container_1_div_28_div_1_Template, 5, 1, "div", 14)(2, ProfileComponent_ng_container_1_div_28_div_2_Template, 5, 1, "div", 105);
    \u0275\u0275elementStart(3, "form", 106, 0);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_ng_container_1_div_28_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r14);
      const profileForm_r15 = \u0275\u0275reference(4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateProfile(profileForm_r15));
    });
    \u0275\u0275elementStart(5, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.id, $event) || (ctx_r0.user.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4", 108);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 109)(10, "div", 64)(11, "label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 110);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.firstName, $event) || (ctx_r0.user.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 64)(16, "label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 111);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.lastName, $event) || (ctx_r0.user.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "h4", 108);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 109)(24, "div", 64)(25, "label");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_28_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.email, $event) || (ctx_r0.user.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 64)(30, "label");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_33_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.phoneNumber, $event) || (ctx_r0.user.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "h4", 108);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 109)(38, "div", 64)(39, "label");
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 114);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.houseNameNumber, $event) || (ctx_r0.user.houseNameNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 64)(44, "label");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_47_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.street1, $event) || (ctx_r0.user.street1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(48, "div", 109)(49, "div", 64)(50, "label");
    \u0275\u0275text(51, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_52_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.city, $event) || (ctx_r0.user.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(53, "div", 64)(54, "label");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_57_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.state, $event) || (ctx_r0.user.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(58, "div", 109)(59, "div", 64)(60, "label");
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.country, $event) || (ctx_r0.user.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(64, "div", 64)(65, "label");
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(68, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_28_Template_input_ngModelChange_68_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.zipPostalCode, $event) || (ctx_r0.user.zipPostalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "div", 67)(70, "button", 120)(71, "mat-icon");
    \u0275\u0275text(72, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "button", 121);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_div_28_Template_button_click_76_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275elementStart(77, "mat-icon");
    \u0275\u0275text(78, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const profileForm_r15 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 28, "PROFILE.PERSONAL"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 30, "PROFILE.FIRST_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.firstName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 32, "PROFILE.LAST_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 34, "PROFILE.CONTACT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 36, "PROFILE.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 38, "PROFILE.PHONE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.phoneNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 40, "PROFILE.ADDRESS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 42, "PROFILE.HOUSE_NUMBER"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.houseNameNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 44, "PROFILE.STREET"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.street1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 46, "PROFILE.STATE_PROVINCE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.state);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 48, "PROFILE.COUNTRY"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.country);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 50, "PROFILE.POSTAL_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.zipPostalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !profileForm_r15.valid || ctx_r0.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.isLoading ? \u0275\u0275pipeBind1(74, 52, "PROFILE.SAVING") : \u0275\u0275pipeBind1(75, 54, "PROFILE.SAVE_CHANGES"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(80, 56, "PROFILE.CANCEL"), " ");
  }
}
function ProfileComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 7)(6, "span", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 9)(9, "mat-icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "date");
    \u0275\u0275template(18, ProfileComponent_ng_container_1_span_18_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "span", 11)(20, "mat-icon");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, ProfileComponent_ng_container_1_nav_22_Template, 19, 15, "nav", 12)(23, ProfileComponent_ng_container_1_div_23_Template, 9, 6, "div", 13)(24, ProfileComponent_ng_container_1_div_24_Template, 5, 1, "div", 14)(25, ProfileComponent_ng_container_1_ng_container_25_Template, 59, 42, "ng-container", 3)(26, ProfileComponent_ng_container_1_ng_container_26_Template, 13, 8, "ng-container", 3)(27, ProfileComponent_ng_container_1_ng_container_27_Template, 9, 5, "ng-container", 3)(28, ProfileComponent_ng_container_1_div_28_Template, 81, 58, "div", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.user.firstName || "?")[0]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.user.firstName, " ", ctx_r0.user.lastName);
    \u0275\u0275advance();
    \u0275\u0275classProp("chip-admin", ctx_r0.userType === "Admin")("chip-user", ctx_r0.userType !== "Admin");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.userType === "Admin" ? "admin_panel_settings" : "person");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.userType === "Admin" ? \u0275\u0275pipeBind1(12, 22, "PROFILE.ADMIN") : \u0275\u0275pipeBind1(13, 24, "PROFILE.USER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(16, 26, "PROFILE.MEMBER_SINCE"), " ", \u0275\u0275pipeBind2(17, 28, ctx_r0.user.createdAt, "MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.user.city);
    \u0275\u0275advance();
    \u0275\u0275classProp("verified", ctx_r0.user.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.user.isEmailVerified ? "verified" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage && !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing && ctx_r0.userSection === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing && ctx_r0.userSection === "payment");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing && ctx_r0.userSection === "reviews");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditing);
  }
}
function ProfileComponent_ng_container_2_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r0.pro.city);
  }
}
function ProfileComponent_ng_container_2_nav_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "nav", 16)(1, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_nav_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectProSection("info"));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_nav_23_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectProSection("payout"));
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_nav_23_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectProSection("earnings"));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "button", 17);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_nav_23_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.selectProSection("reviews"));
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "span");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r0.proSection === "info");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "PROFILE.TAB_PROFILE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.proSection === "payout");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "PROFILE.TAB_PAYOUT"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.proSection === "earnings");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "PROFILE.TAB_EARNINGS"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.proSection === "reviews");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 18, "PROFILE.TAB_REVIEWS"));
  }
}
function ProfileComponent_ng_container_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_div_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "arrow_back");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 20);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, "PROFILE.BACK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "PROFILE.EDIT_PROFILE"));
  }
}
function ProfileComponent_ng_container_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_button_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_26_button_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailVerification());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROFILE.VERIFY_NOW"));
  }
}
function ProfileComponent_ng_container_2_ng_container_26_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 39);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PROFILE.SENDING"));
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_53_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emailVerifError);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_53_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 41)(7, "input", 128);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_ng_container_26_div_53_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailVerifCode, $event) || (ctx_r0.emailVerifCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 43);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_26_div_53_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmEmailCode());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_26_div_53_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEmailVerification());
    });
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ProfileComponent_ng_container_2_ng_container_26_div_53_span_15_Template, 2, 1, "span", 44);
    \u0275\u0275elementStart(16, "button", 45);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_26_div_53_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r20);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailVerification());
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 8, "PROFILE.EMAIL_CODE_PROMPT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.pro.email);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailVerifCode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.emailVerifStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailVerifStep === "verifying" ? \u0275\u0275pipeBind1(10, 10, "PROFILE.VERIFYING") : \u0275\u0275pipeBind1(11, 12, "PROFILE.CONFIRM"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "PROFILE.CANCEL"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.emailVerifError);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 16, "PROFILE.RESEND_CODE"));
  }
}
function ProfileComponent_ng_container_2_ng_container_26_span_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 32)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("badge-ok", ctx_r0.pro.isPhoneVerified)("badge-warn", !ctx_r0.pro.isPhoneVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pro.isPhoneVerified ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pro.isPhoneVerified ? \u0275\u0275pipeBind1(4, 6, "PROFILE.VERIFIED") : \u0275\u0275pipeBind1(5, 8, "PROFILE.UNVERIFIED"), " ");
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.pro.houseNameNumber, ", ");
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.pro.street2);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_8_ng_container_2_Template, 2, 1, "ng-container", 3);
    \u0275\u0275text(3, ", ");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pro.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.street2);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pro.city);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.pro.district);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.pro.state);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.pro.country);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2014 ", ctx_r0.pro.zipPostalCode);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_div_63_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 47)(1, "h3", 26)(2, "mat-icon");
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p", 48);
    \u0275\u0275template(7, ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_7_Template, 2, 1, "ng-container", 3)(8, ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_8_Template, 4, 2, "ng-container", 3)(9, ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_9_Template, 2, 1, "ng-container", 3)(10, ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_10_Template, 2, 1, "ng-container", 3)(11, ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_11_Template, 2, 1, "ng-container", 3)(12, ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_12_Template, 2, 1, "ng-container", 3)(13, ProfileComponent_ng_container_2_ng_container_26_div_63_ng_container_13_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "PROFILE.ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.pro.houseNameNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.district);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.state);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.zipPostalCode);
  }
}
function ProfileComponent_ng_container_2_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 22)(2, "button", 23);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_26_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275elementStart(3, "mat-icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 24)(8, "div", 25)(9, "h3", 26)(10, "mat-icon");
    \u0275\u0275text(11, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28)(15, "span", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "div", 28)(21, "span", 29);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 30);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 28)(27, "span", 29);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 30);
    \u0275\u0275text(31);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 25)(33, "h3", 26)(34, "mat-icon");
    \u0275\u0275text(35, "contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 28)(39, "span", 29);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 31)(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "span", 32)(46, "mat-icon");
    \u0275\u0275text(47);
    \u0275\u0275elementEnd();
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(51, ProfileComponent_ng_container_2_ng_container_26_button_51_Template, 3, 3, "button", 33)(52, ProfileComponent_ng_container_2_ng_container_26_span_52_Template, 3, 3, "span", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(53, ProfileComponent_ng_container_2_ng_container_26_div_53_Template, 19, 18, "div", 35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 28)(55, "span", 29);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "div", 31)(59, "span");
    \u0275\u0275text(60);
    \u0275\u0275pipe(61, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, ProfileComponent_ng_container_2_ng_container_26_span_62_Template, 6, 10, "span", 36);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(63, ProfileComponent_ng_container_2_ng_container_26_div_63_Template, 14, 10, "div", 37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 24, "PROFILE.EDIT_PROFILE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 26, "PROFILE.BUSINESS"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 28, "PROFILE.PRO_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.pro.proName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 30, "PROFILE.BUSINESS_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.pro.businessName || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 32, "PROFILE.SERVICE_RADIUS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.pro.serviceRadiusKm ?? 25, " km");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 34, "PROFILE.CONTACT"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 36, "PROFILE.EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.pro.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-ok", ctx_r0.pro.isEmailVerified)("badge-warn", !ctx_r0.pro.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pro.isEmailVerified ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pro.isEmailVerified ? \u0275\u0275pipeBind1(49, 38, "PROFILE.VERIFIED") : \u0275\u0275pipeBind1(50, 40, "PROFILE.UNVERIFIED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !ctx_r0.pro.isEmailVerified && ctx_r0.emailVerifStep === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailVerifStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pro.isEmailVerified && (ctx_r0.emailVerifStep === "code-sent" || ctx_r0.emailVerifStep === "verifying"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 42, "PROFILE.PHONE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.pro.phoneNumber || \u0275\u0275pipeBind1(61, 44, "PROFILE.NOT_SET"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.pro.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.houseNameNumber || ctx_r0.pro.street1 || ctx_r0.pro.city);
  }
}
function ProfileComponent_ng_container_2_ng_container_27_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_27_button_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.startEditBank());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.hasBankDetails) ? "Edit" : "Add", " ");
  }
}
function ProfileComponent_ng_container_2_ng_container_27_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275element(1, "mat-spinner", 131);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_2_ng_container_27_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 56)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bankSuccessMessage);
  }
}
function ProfileComponent_ng_container_2_ng_container_27_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.bankErrorMessage);
  }
}
function ProfileComponent_ng_container_2_ng_container_27_ng_container_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "PROFILE.NO_PAYOUT"));
  }
}
function ProfileComponent_ng_container_2_ng_container_27_ng_container_12_ng_container_2_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 28)(2, "span", 29);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 30);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "PROFILE.UPI_VPA"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.upiVpa);
  }
}
function ProfileComponent_ng_container_2_ng_container_27_ng_container_12_ng_container_2_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28)(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 28)(9, "span", 29);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 30);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 28)(15, "span", 29);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 30);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "PROFILE.ACCOUNT_HOLDER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.bankAccountHolderName) || "\u2014");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "PROFILE.ACCOUNT_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("****", ((ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.bankAccountNumber) ?? "").slice(-4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 10, "PROFILE.IFSC"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.bankIfsc);
  }
}
function ProfileComponent_ng_container_2_ng_container_27_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 27)(2, "div", 28)(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 30);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(8, ProfileComponent_ng_container_2_ng_container_27_ng_container_12_ng_container_2_ng_container_8_Template, 7, 4, "ng-container", 3)(9, ProfileComponent_ng_container_2_ng_container_27_ng_container_12_ng_container_2_ng_container_9_Template, 20, 12, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 4, "PROFILE.PAYOUT_METHOD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.payoutMethod);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.payoutMethod) === "UPI");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.payoutMethod) === "Bank");
  }
}
function ProfileComponent_ng_container_2_ng_container_27_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProfileComponent_ng_container_2_ng_container_27_ng_container_12_div_1_Template, 6, 3, "div", 58)(2, ProfileComponent_ng_container_2_ng_container_27_ng_container_12_ng_container_2_Template, 10, 6, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.hasBankDetails));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bankDetails == null ? null : ctx_r0.bankDetails.hasBankDetails);
  }
}
function ProfileComponent_ng_container_2_ng_container_27_div_13_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 109)(2, "div", 64)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "input", 134);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_ng_container_27_div_13_ng_container_16_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.bankForm.bankAccountHolderName, $event) || (ctx_r0.bankForm.bankAccountHolderName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 64)(8, "label");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "input", 135);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_ng_container_27_div_13_ng_container_16_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.bankForm.bankAccountNumber, $event) || (ctx_r0.bankForm.bankAccountNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 136)(13, "label");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 137);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_ng_container_27_div_13_ng_container_16_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r23);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.bankForm.bankIfsc, $event) || (ctx_r0.bankForm.bankIfsc = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 6, "PROFILE.ACCT_HOLDER_LABEL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bankForm.bankAccountHolderName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "PROFILE.ACCT_NUMBER_LABEL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bankForm.bankAccountNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "PROFILE.IFSC_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bankForm.bankIfsc);
  }
}
function ProfileComponent_ng_container_2_ng_container_27_div_13_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 136)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 138);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_ng_container_27_div_13_ng_container_17_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r0 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r0.bankForm.upiVpa, $event) || (ctx_r0.bankForm.upiVpa = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "PROFILE.UPI_VPA"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.bankForm.upiVpa);
  }
}
function ProfileComponent_ng_container_2_ng_container_27_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 63)(1, "div", 64)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 132)(6, "button", 133);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_27_div_13_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.bankForm.payoutMethod = "Bank");
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 133);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_27_div_13_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.bankForm.payoutMethod = "UPI");
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13, "qr_code");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(16, ProfileComponent_ng_container_2_ng_container_27_div_13_ng_container_16_Template, 17, 12, "ng-container", 3)(17, ProfileComponent_ng_container_2_ng_container_27_div_13_ng_container_17_Template, 6, 4, "ng-container", 3);
    \u0275\u0275elementStart(18, "div", 67)(19, "button", 43);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_27_div_13_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.saveBankDetails());
    });
    \u0275\u0275elementStart(20, "mat-icon");
    \u0275\u0275text(21, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "button", 19);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_27_div_13_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEditBank());
    });
    \u0275\u0275elementStart(26, "mat-icon");
    \u0275\u0275text(27, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 12, "PROFILE.PAYOUT_METHOD"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("active", ctx_r0.bankForm.payoutMethod === "Bank");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, "PROFILE.BANK_ACCOUNT"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r0.bankForm.payoutMethod === "UPI");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 16, "PROFILE.UPI"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.bankForm.payoutMethod === "Bank");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bankForm.payoutMethod === "UPI");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r0.bankSaveLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.bankSaveLoading ? \u0275\u0275pipeBind1(23, 18, "PROFILE.SAVING") : \u0275\u0275pipeBind1(24, 20, "PROFILE.SAVE_CHANGES"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 22, "PROFILE.CANCEL"), " ");
  }
}
function ProfileComponent_ng_container_2_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 49)(2, "div", 50)(3, "h3", 26)(4, "mat-icon");
    \u0275\u0275text(5, "account_balance");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ProfileComponent_ng_container_2_ng_container_27_button_8_Template, 4, 1, "button", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, ProfileComponent_ng_container_2_ng_container_27_div_9_Template, 2, 0, "div", 129)(10, ProfileComponent_ng_container_2_ng_container_27_div_10_Template, 5, 1, "div", 52)(11, ProfileComponent_ng_container_2_ng_container_27_div_11_Template, 5, 1, "div", 53)(12, ProfileComponent_ng_container_2_ng_container_27_ng_container_12_Template, 3, 2, "ng-container", 3)(13, ProfileComponent_ng_container_2_ng_container_27_div_13_Template, 30, 24, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 7, "PROFILE.PAYOUT_BANK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r0.isEditingBank);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bankDetailsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bankSuccessMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.bankErrorMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.bankDetailsLoading && !ctx_r0.isEditingBank);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditingBank);
  }
}
function ProfileComponent_ng_container_2_ng_container_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 143);
    \u0275\u0275element(1, "mat-spinner", 131);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_2_ng_container_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 144)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "PROFILE.NO_PAYOUTS"));
  }
}
function ProfileComponent_ng_container_2_ng_container_28_div_9_div_1_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r25 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r25.failureReason, " ");
  }
}
function ProfileComponent_ng_container_2_ng_container_28_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "div", 148)(2, "div", 149);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 150);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 151)(9, "span", 152);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 153);
    \u0275\u0275pipe(13, "lowercase");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, ProfileComponent_ng_container_2_ng_container_28_div_9_div_1_div_15_Template, 4, 1, "div", 154);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r25 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(p_r25.jobTitle || "Job #" + p_r25.jobId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(6, 8, p_r25.createdAt, "d MMM yyyy"), " \xB7 ", p_r25.mode || \u0275\u0275pipeBind1(7, 11, "PROFILE.PENDING_METHOD"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(11, 13, p_r25.amount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275classMap("ps-" + \u0275\u0275pipeBind1(13, 16, p_r25.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r25.status);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r25.failureReason);
  }
}
function ProfileComponent_ng_container_2_ng_container_28_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145);
    \u0275\u0275template(1, ProfileComponent_ng_container_2_ng_container_28_div_9_div_1_Template, 16, 18, "div", 146);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.payouts);
  }
}
function ProfileComponent_ng_container_2_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 139)(2, "h3", 26)(3, "mat-icon");
    \u0275\u0275text(4, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProfileComponent_ng_container_2_ng_container_28_div_7_Template, 2, 0, "div", 140)(8, ProfileComponent_ng_container_2_ng_container_28_div_8_Template, 6, 3, "div", 141)(9, ProfileComponent_ng_container_2_ng_container_28_div_9_Template, 2, 1, "div", 142);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "PROFILE.EARNINGS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.payoutsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.payoutsLoading && ctx_r0.payouts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.payoutsLoading && ctx_r0.payouts.length > 0);
  }
}
function ProfileComponent_ng_container_2_ng_container_29_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70);
    \u0275\u0275element(1, "mat-spinner", 71);
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 73)(1, "mat-icon");
    \u0275\u0275text(2, "rate_review");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "PROFILE.NO_REVIEWS_PRO"));
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 83);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r26 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("filled", ctx_r0.starFilled(ctx_r0.ratingSummary.averageRating, i_r26 - 1));
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 84)(1, "span", 85);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 86);
    \u0275\u0275element(4, "div", 87);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 88);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const s_r27 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", s_r27, "\u2605");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r0.ratingBarWidth(ctx_r0.ratingSummary.ratingBreakdown[s_r27 - 1] || 0, ctx_r0.ratingSummary.totalReviews));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.ratingSummary.ratingBreakdown[s_r27 - 1] || 0);
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_div_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 100);
    \u0275\u0275text(1, "\u2605");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r28 = ctx.$implicit;
    const review_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275classProp("filled", ctx_r0.starFilled(review_r29.rating, i_r28 - 1));
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_div_4_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 101);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\xB7 ", review_r29.jobTitle);
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_div_4_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 102);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(review_r29.comment);
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94);
    \u0275\u0275template(2, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_div_4_span_2_Template, 2, 2, "span", 95);
    \u0275\u0275elementStart(3, "span", 96);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_div_4_span_5_Template, 2, 1, "span", 97);
    \u0275\u0275elementStart(6, "span", 98);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_div_4_p_9_Template, 2, 1, "p", 99);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const review_r29 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(6);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.starsArray);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(review_r29.reviewerName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", review_r29.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(8, 5, review_r29.createdAt, "d MMM yyyy"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", review_r29.comment);
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 103);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const ctx_r0 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r0.loadMoreReviews());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "PROFILE.LOAD_MORE"), " ");
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89)(1, "h4", 90);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_div_4_Template, 10, 8, "div", 91)(5, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_button_5_Template, 3, 3, "button", 92);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "PROFILE.RECENT_REVIEWS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.reviews);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviews.length < ctx_r0.reviewsTotal);
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 74)(2, "div", 75)(3, "div", 76);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 77);
    \u0275\u0275template(7, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_span_7_Template, 2, 2, "span", 78);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 79);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 80);
    \u0275\u0275template(11, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_11_Template, 7, 4, "div", 81);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_div_12_Template, 6, 5, "div", 82);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, ctx_r0.ratingSummary.averageRating, "1.1-1"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r0.starsArray);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.ratingSummary.totalReviews, " review", ctx_r0.ratingSummary.totalReviews !== 1 ? "s" : "");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pureFunction0(9, _c0));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.reviews.length > 0);
  }
}
function ProfileComponent_ng_container_2_ng_container_29_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_div_1_Template, 6, 3, "div", 72)(2, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_ng_container_2_Template, 13, 10, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.ratingSummary || ctx_r0.ratingSummary.totalReviews === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.ratingSummary && ctx_r0.ratingSummary.totalReviews > 0);
  }
}
function ProfileComponent_ng_container_2_ng_container_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 68)(2, "h3", 26)(3, "mat-icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, ProfileComponent_ng_container_2_ng_container_29_div_7_Template, 2, 0, "div", 69)(8, ProfileComponent_ng_container_2_ng_container_29_ng_container_8_Template, 3, 2, "ng-container", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "PROFILE.REVIEWS_RATINGS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.reviewsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.reviewsLoading);
  }
}
function ProfileComponent_ng_container_2_div_30_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.successMessage);
  }
}
function ProfileComponent_ng_container_2_div_30_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function ProfileComponent_ng_container_2_div_30_select_71_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 165);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r34 = ctx.$implicit;
    \u0275\u0275property("value", d_r34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r34);
  }
}
function ProfileComponent_ng_container_2_div_30_select_71_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "select", 162);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_select_71_Template_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.district, $event) || (ctx_r0.pro.district = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementStart(1, "option", 163);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ProfileComponent_ng_container_2_div_30_select_71_option_4_Template, 2, 2, "option", 164);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.district);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "PROFILE.SELECT_DISTRICT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.proDistrictOptions);
  }
}
function ProfileComponent_ng_container_2_div_30_input_72_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 166);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_input_72_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.district, $event) || (ctx_r0.pro.district = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.district);
  }
}
function ProfileComponent_ng_container_2_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 104);
    \u0275\u0275template(1, ProfileComponent_ng_container_2_div_30_div_1_Template, 5, 1, "div", 14)(2, ProfileComponent_ng_container_2_div_30_div_2_Template, 5, 1, "div", 105);
    \u0275\u0275elementStart(3, "form", 106, 1);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_ng_container_2_div_30_Template_form_ngSubmit_3_listener() {
      \u0275\u0275restoreView(_r31);
      const proForm_r32 = \u0275\u0275reference(4);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateProfile(proForm_r32));
    });
    \u0275\u0275elementStart(5, "input", 107);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.id, $event) || (ctx_r0.pro.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h4", 108);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 109)(10, "div", 64)(11, "label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 156);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.proName, $event) || (ctx_r0.pro.proName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 64)(16, "label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 157);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.businessName, $event) || (ctx_r0.pro.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 136)(21, "label");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "input", 158);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.serviceRadiusKm, $event) || (ctx_r0.pro.serviceRadiusKm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span", 66);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "h4", 108);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 109)(32, "div", 64)(33, "label");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 112);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.email, $event) || (ctx_r0.pro.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 64)(38, "label");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "input", 113);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_41_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.phoneNumber, $event) || (ctx_r0.pro.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "h4", 108);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 109)(46, "div", 64)(47, "label");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(50, "input", 159);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.houseNameNumber, $event) || (ctx_r0.pro.houseNameNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(51, "div", 64)(52, "label");
    \u0275\u0275text(53);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 115);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.street1, $event) || (ctx_r0.pro.street1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 109)(57, "div", 64)(58, "label");
    \u0275\u0275text(59, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 116);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.city, $event) || (ctx_r0.pro.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 64)(62, "label");
    \u0275\u0275text(63);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "input", 117);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_65_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.state, $event) || (ctx_r0.pro.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(66, "div", 109)(67, "div", 64)(68, "label");
    \u0275\u0275text(69);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(71, ProfileComponent_ng_container_2_div_30_select_71_Template, 5, 5, "select", 160)(72, ProfileComponent_ng_container_2_div_30_input_72_Template, 1, 1, "input", 161);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "div", 64)(74, "label");
    \u0275\u0275text(75);
    \u0275\u0275pipe(76, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(77, "input", 118);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_77_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.country, $event) || (ctx_r0.pro.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 109)(79, "div", 64)(80, "label");
    \u0275\u0275text(81);
    \u0275\u0275pipe(82, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(83, "input", 119);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_30_Template_input_ngModelChange_83_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.zipPostalCode, $event) || (ctx_r0.pro.zipPostalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(84, "div", 67)(85, "button", 120)(86, "mat-icon");
    \u0275\u0275text(87, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "button", 121);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_div_30_Template_button_click_91_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275elementStart(92, "mat-icon");
    \u0275\u0275text(93, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const proForm_r32 = \u0275\u0275reference(4);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 34, "PROFILE.BUSINESS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 36, "PROFILE.PRO_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.proName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 38, "PROFILE.BUSINESS_NAME"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.businessName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(23, 40, "PROFILE.SERVICE_RADIUS"), " (km)");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.serviceRadiusKm);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 42, "PROFILE.SERVICE_RADIUS_HINT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 44, "PROFILE.CONTACT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 46, "PROFILE.EMAIL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 48, "PROFILE.PHONE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.phoneNumber);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 50, "PROFILE.ADDRESS"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 52, "PROFILE.HOUSE_NUMBER"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.houseNameNumber);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(54, 54, "PROFILE.STREET"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.street1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.city);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 56, "PROFILE.STATE_PROVINCE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.state);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(70, 58, "PROFILE.DISTRICT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.proDistrictOptions.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.proDistrictOptions.length === 0);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(76, 60, "PROFILE.COUNTRY"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.country);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(82, 62, "PROFILE.POSTAL_CODE"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.zipPostalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !proForm_r32.valid || ctx_r0.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.isLoading ? \u0275\u0275pipeBind1(89, 64, "PROFILE.SAVING") : \u0275\u0275pipeBind1(90, 66, "PROFILE.SAVE_CHANGES"), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(95, 68, "PROFILE.CANCEL"), " ");
  }
}
function ProfileComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 123)(2, "div", 124);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 6)(5, "div", 125);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 7)(8, "span", 126);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 127)(11, "mat-icon");
    \u0275\u0275text(12, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275pipe(18, "date");
    \u0275\u0275template(19, ProfileComponent_ng_container_2_span_19_Template, 2, 1, "span", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "span", 11)(21, "mat-icon");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(23, ProfileComponent_ng_container_2_nav_23_Template, 25, 20, "nav", 12)(24, ProfileComponent_ng_container_2_div_24_Template, 9, 6, "div", 13)(25, ProfileComponent_ng_container_2_div_25_Template, 5, 1, "div", 14)(26, ProfileComponent_ng_container_2_ng_container_26_Template, 64, 46, "ng-container", 3)(27, ProfileComponent_ng_container_2_ng_container_27_Template, 14, 9, "ng-container", 3)(28, ProfileComponent_ng_container_2_ng_container_28_Template, 10, 6, "ng-container", 3)(29, ProfileComponent_ng_container_2_ng_container_29_Template, 9, 5, "ng-container", 3)(30, ProfileComponent_ng_container_2_div_30_Template, 96, 70, "div", 15);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate((ctx_r0.pro.businessName || ctx_r0.pro.proName || "?")[0]);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.pro.businessName);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.pro.proName);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 18, "PROFILE.PROFESSIONAL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind1(17, 20, "PROFILE.MEMBER_SINCE"), " ", \u0275\u0275pipeBind2(18, 22, ctx_r0.pro.createdAt, "MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.pro.city);
    \u0275\u0275advance();
    \u0275\u0275classProp("verified", ctx_r0.pro.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pro.isEmailVerified ? "verified" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage && !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing && ctx_r0.proSection === "info");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing && ctx_r0.proSection === "payout");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing && ctx_r0.proSection === "earnings");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing && ctx_r0.proSection === "reviews");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditing);
  }
}
var ProfileComponent = class _ProfileComponent {
  userService;
  proService;
  auth;
  cdr;
  verificationService;
  reviewService;
  payoutService;
  serviceAreaService;
  user = {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    isEmailVerified: false,
    isPhoneVerified: false,
    userType: "",
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  };
  pro = {
    id: 0,
    proName: "",
    email: "",
    phoneNumber: "",
    businessName: "",
    isEmailVerified: false,
    isPhoneVerified: false,
    createdAt: /* @__PURE__ */ new Date(),
    updatedAt: /* @__PURE__ */ new Date()
  };
  isEditing = false;
  userId = 0;
  isLoading = false;
  successMessage = "";
  errorMessage = "";
  userType = null;
  // Reviews (Pro only — reviews received from users)
  ratingSummary = null;
  reviews = [];
  reviewsLoading = false;
  reviewsPage = 1;
  reviewsTotal = 0;
  reviewsPageSize = 5;
  starsArray = [1, 2, 3, 4, 5];
  // User section nav (lazy-load)
  userSection = "info";
  userReviewsLoaded = false;
  // User reviews — reviews received from pros
  userRatingSummary = null;
  userReviews = [];
  userReviewsLoading = false;
  userReviewsPage = 1;
  userReviewsTotal = 0;
  // User payment details
  isEditingPayment = false;
  paymentUpiVpa = "";
  paymentSaveLoading = false;
  paymentSuccessMessage = "";
  paymentErrorMessage = "";
  // Email verification flow
  emailVerifStep = "idle";
  emailVerifCode = "";
  emailVerifError = "";
  // Pro section nav (lazy-load)
  proSection = "info";
  bankDetailsLoaded = false;
  payoutsLoaded = false;
  reviewsLoaded = false;
  selectUserSection(section) {
    this.userSection = section;
    if (section === "reviews" && !this.userReviewsLoaded) {
      this.userReviewsLoaded = true;
      this.loadUserRatings(this.userId);
    }
  }
  selectProSection(section) {
    this.proSection = section;
    if (section === "payout" && !this.bankDetailsLoaded) {
      this.bankDetailsLoaded = true;
      this.loadBankDetails(this.userId);
    }
    if (section === "earnings" && !this.payoutsLoaded) {
      this.payoutsLoaded = true;
      this.loadPayouts();
    }
    if (section === "reviews" && !this.reviewsLoaded) {
      this.reviewsLoaded = true;
      this.loadProRatings(this.userId);
    }
  }
  // Bank details (Pro only)
  bankDetails = null;
  bankDetailsLoading = false;
  isEditingBank = false;
  bankForm = { payoutMethod: "Bank" };
  bankSaveLoading = false;
  bankSuccessMessage = "";
  bankErrorMessage = "";
  // Earnings / payouts (Pro only)
  payouts = [];
  payoutsLoading = false;
  // Service area cascading dropdowns for pro address
  serviceAreas = [];
  get proDistrictOptions() {
    if (!this.pro.state)
      return [];
    return [...new Set(this.serviceAreas.filter((a) => a.state?.toLowerCase() === this.pro.state.toLowerCase() && a.district).map((a) => a.district))].sort();
  }
  constructor(userService, proService, auth, cdr, verificationService, reviewService, payoutService, serviceAreaService) {
    this.userService = userService;
    this.proService = proService;
    this.auth = auth;
    this.cdr = cdr;
    this.verificationService = verificationService;
    this.reviewService = reviewService;
    this.payoutService = payoutService;
    this.serviceAreaService = serviceAreaService;
  }
  ngOnInit() {
    this.userType = this.auth.getUserType();
    this.loadProfile();
    if (this.auth.getUserType() === "Pro") {
      this.serviceAreaService.getActive().subscribe({
        next: (areas) => {
          this.serviceAreas = areas;
          this.cdr.markForCheck();
        },
        error: () => {
        }
      });
    }
  }
  loadProfile() {
    const userIdStr = this.auth.getUserId();
    if (userIdStr) {
      this.userId = Number(userIdStr);
      if (this.userType === "Pro") {
        this.loadPro(this.userId);
      } else {
        this.loadUser(this.userId);
      }
    } else {
      console.warn("User ID not found in storage");
    }
  }
  loadUser(userId) {
    this.userService.getUser(userId).subscribe({
      next: (response) => {
        this.user = response;
        console.log("User data loaded:", this.user);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error fetching user data:", error);
        this.errorMessage = "Failed to load user profile information";
      }
    });
  }
  loadPro(proId) {
    this.proService.getPro(proId).subscribe({
      next: (response) => {
        this.pro = response?.data || response;
        console.log("Pro data loaded:", this.pro);
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error fetching pro data:", error);
        this.errorMessage = "Failed to load professional profile information";
      }
    });
  }
  toggleEdit() {
    this.proSection = "info";
    this.userSection = "info";
    this.isEditing = true;
  }
  cancelEdit() {
    this.isEditing = false;
    this.isEditingPayment = false;
    this.loadProfile();
  }
  updateProfile(form) {
    if (form.valid) {
      this.isLoading = true;
      this.successMessage = "";
      this.errorMessage = "";
      if (this.userType === "Pro") {
        this.updateProProfile();
      } else {
        this.updateUserProfile();
      }
    }
  }
  updateUserProfile() {
    const updateData = {
      id: this.user.id,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      phoneNumber: this.user.phoneNumber,
      houseNameNumber: this.user.houseNameNumber,
      street1: this.user.street1,
      street2: this.user.street2,
      city: this.user.city,
      state: this.user.state,
      country: this.user.country,
      zipPostalCode: this.user.zipPostalCode
    };
    this.userService.updateUser(updateData).subscribe({
      next: (response) => {
        const updatedUser = response?.data || response;
        if (updatedUser) {
          this.user = updatedUser;
        }
        this.isEditing = false;
        this.isLoading = false;
        this.emailVerifStep = "idle";
        this.emailVerifCode = "";
        this.emailVerifError = "";
        this.successMessage = "Profile updated successfully!";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.successMessage = "";
          this.cdr.markForCheck();
        }, 3e3);
      },
      error: (error) => {
        console.error("Error updating profile:", error);
        this.isLoading = false;
        let errorMsg = "Failed to update profile. Please try again.";
        if (error?.status === 401 || error?.status === 403) {
          errorMsg = "Authorization failed. Please login again.";
        } else if (error?.error?.message) {
          errorMsg = error.error.message;
        } else if (error?.statusText) {
          errorMsg = error.statusText;
        }
        this.errorMessage = errorMsg;
        this.cdr.markForCheck();
        setTimeout(() => {
          this.errorMessage = "";
          this.cdr.markForCheck();
        }, 5e3);
      }
    });
  }
  // ── Email verification ────────────────────────────────────────────────────
  sendEmailVerification() {
    const email = this.userType === "Pro" ? this.pro.email : this.user.email;
    const userType = this.userType === "Pro" ? "Pro" : "User";
    this.emailVerifStep = "sending";
    this.emailVerifError = "";
    this.emailVerifCode = "";
    this.verificationService.sendEmailCode(email, userType).subscribe({
      next: () => {
        this.emailVerifStep = "code-sent";
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.emailVerifError = err?.error?.message || "Failed to send verification email. Please try again.";
        this.emailVerifStep = "idle";
        this.cdr.markForCheck();
      }
    });
  }
  confirmEmailCode() {
    if (!this.emailVerifCode || this.emailVerifCode.length !== 6) {
      this.emailVerifError = "Please enter the 6-digit code.";
      return;
    }
    const email = this.userType === "Pro" ? this.pro.email : this.user.email;
    const userType = this.userType === "Pro" ? "Pro" : "User";
    this.emailVerifStep = "verifying";
    this.emailVerifError = "";
    this.verificationService.verifyEmail(email, this.emailVerifCode, userType).subscribe({
      next: () => {
        if (this.userType === "Pro") {
          this.pro.isEmailVerified = true;
        } else {
          this.user.isEmailVerified = true;
        }
        this.emailVerifStep = "idle";
        this.successMessage = "Email verified successfully!";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.successMessage = "";
          this.cdr.markForCheck();
        }, 4e3);
      },
      error: (err) => {
        this.emailVerifError = err?.error?.message || "Invalid or expired code. Please try again.";
        this.emailVerifStep = "code-sent";
        this.cdr.markForCheck();
      }
    });
  }
  loadProRatings(proId) {
    this.reviewsLoading = true;
    this.reviewService.getProRatingSummary(proId).subscribe({
      next: (summary) => {
        this.ratingSummary = summary;
        this.cdr.markForCheck();
      },
      error: () => {
        this.cdr.markForCheck();
      }
    });
    this.reviewService.getProReviews(proId, 1, this.reviewsPageSize).subscribe({
      next: (result) => {
        this.reviews = result.reviews ?? [];
        this.reviewsTotal = result.total ?? 0;
        this.reviewsLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.reviewsLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadMoreReviews() {
    this.reviewsPage++;
    this.reviewService.getProReviews(this.userId, this.reviewsPage, this.reviewsPageSize).subscribe({
      next: (result) => {
        this.reviews = [...this.reviews, ...result.reviews ?? []];
        this.reviewsTotal = result.total ?? 0;
        this.cdr.markForCheck();
      }
    });
  }
  loadUserRatings(userId) {
    this.userReviewsLoading = true;
    this.reviewService.getUserRatingSummary(userId).subscribe({
      next: (summary) => {
        this.userRatingSummary = summary;
        this.cdr.markForCheck();
      },
      error: () => {
        this.cdr.markForCheck();
      }
    });
    this.reviewService.getUserReviews(userId, 1, this.reviewsPageSize).subscribe({
      next: (result) => {
        this.userReviews = result.reviews ?? [];
        this.userReviewsTotal = result.total ?? 0;
        this.userReviewsLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.userReviewsLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadMoreUserReviews() {
    this.userReviewsPage++;
    this.reviewService.getUserReviews(this.userId, this.userReviewsPage, this.reviewsPageSize).subscribe({
      next: (result) => {
        this.userReviews = [...this.userReviews, ...result.reviews ?? []];
        this.userReviewsTotal = result.total ?? 0;
        this.cdr.markForCheck();
      }
    });
  }
  starFilled(rating, index) {
    return index + 1 <= Math.round(rating);
  }
  ratingBarWidth(count, total) {
    return total ? `${Math.round(count / total * 100)}%` : "0%";
  }
  cancelEmailVerification() {
    this.emailVerifStep = "idle";
    this.emailVerifCode = "";
    this.emailVerifError = "";
  }
  // ── User payment details ──────────────────────────────────────────────────
  startEditPayment() {
    this.paymentUpiVpa = this.user.upiVpa ?? "";
    this.isEditingPayment = true;
    this.paymentSuccessMessage = "";
    this.paymentErrorMessage = "";
  }
  cancelEditPayment() {
    this.isEditingPayment = false;
  }
  savePaymentDetails() {
    this.paymentSaveLoading = true;
    this.paymentSuccessMessage = "";
    this.paymentErrorMessage = "";
    this.userService.savePaymentDetails(this.userId, this.paymentUpiVpa).subscribe({
      next: () => {
        this.user.upiVpa = this.paymentUpiVpa || void 0;
        this.isEditingPayment = false;
        this.paymentSaveLoading = false;
        this.paymentSuccessMessage = "Payment details saved!";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.paymentSuccessMessage = "";
          this.cdr.markForCheck();
        }, 4e3);
      },
      error: (err) => {
        this.paymentSaveLoading = false;
        this.paymentErrorMessage = err?.error?.message ?? "Failed to save payment details.";
        this.cdr.markForCheck();
      }
    });
  }
  // ── Bank details ─────────────────────────────────────────────────────────
  loadBankDetails(proId) {
    this.bankDetailsLoading = true;
    this.proService.getBankDetails(proId).subscribe({
      next: (details) => {
        this.bankDetails = details?.data ?? details;
        this.bankDetailsLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.bankDetailsLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  startEditBank() {
    this.bankForm = {
      payoutMethod: this.bankDetails?.payoutMethod ?? "Bank",
      bankAccountHolderName: this.bankDetails?.bankAccountHolderName ?? "",
      bankAccountNumber: this.bankDetails?.bankAccountNumber ?? "",
      bankIfsc: this.bankDetails?.bankIfsc ?? "",
      upiVpa: this.bankDetails?.upiVpa ?? ""
    };
    this.isEditingBank = true;
    this.bankSuccessMessage = "";
    this.bankErrorMessage = "";
  }
  cancelEditBank() {
    this.isEditingBank = false;
  }
  saveBankDetails() {
    this.bankSaveLoading = true;
    this.bankSuccessMessage = "";
    this.bankErrorMessage = "";
    this.proService.updateBankDetails(this.userId, this.bankForm).subscribe({
      next: () => {
        this.bankSaveLoading = false;
        this.isEditingBank = false;
        this.payoutsLoaded = false;
        this.loadBankDetails(this.userId);
        this.bankSuccessMessage = "Bank details saved successfully!";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.bankSuccessMessage = "";
          this.cdr.markForCheck();
        }, 4e3);
      },
      error: (err) => {
        this.bankSaveLoading = false;
        this.bankErrorMessage = err?.error?.message ?? "Failed to save bank details.";
        this.cdr.markForCheck();
      }
    });
  }
  // ── Payouts ───────────────────────────────────────────────────────────────
  loadPayouts() {
    this.payoutsLoading = true;
    this.payoutService.getMyPayouts().subscribe({
      next: (data) => {
        this.payouts = data;
        this.payoutsLoading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.payoutsLoading = false;
        this.cdr.markForCheck();
      }
    });
  }
  updateProProfile() {
    const updateData = {
      id: this.pro.id,
      proName: this.pro.proName,
      email: this.pro.email,
      phoneNumber: this.pro.phoneNumber,
      businessName: this.pro.businessName,
      houseNameNumber: this.pro.houseNameNumber,
      street1: this.pro.street1,
      street2: this.pro.street2,
      city: this.pro.city,
      district: this.pro.district,
      state: this.pro.state,
      country: this.pro.country,
      zipPostalCode: this.pro.zipPostalCode,
      serviceRadiusKm: this.pro.serviceRadiusKm ?? 25
    };
    this.proService.updatePro(updateData).subscribe({
      next: (response) => {
        console.log("Pro profile updated successfully:", response);
        const updatedPro = response?.data || response;
        if (updatedPro) {
          this.pro = updatedPro;
        }
        this.isEditing = false;
        this.isLoading = false;
        this.emailVerifStep = "idle";
        this.emailVerifCode = "";
        this.emailVerifError = "";
        this.successMessage = "Profile updated successfully!";
        this.cdr.markForCheck();
        setTimeout(() => {
          this.successMessage = "";
          this.cdr.markForCheck();
        }, 3e3);
      },
      error: (error) => {
        console.error("Error updating pro profile:", error);
        this.isLoading = false;
        let errorMsg = "Failed to update profile. Please try again.";
        if (error?.status === 401 || error?.status === 403) {
          errorMsg = "Authorization failed. Please login again.";
        } else if (error?.error?.message) {
          errorMsg = error.error.message;
        } else if (error?.statusText) {
          errorMsg = error.statusText;
        }
        this.errorMessage = errorMsg;
        this.cdr.markForCheck();
        setTimeout(() => {
          this.errorMessage = "";
          this.cdr.markForCheck();
        }, 5e3);
      }
    });
  }
  static \u0275fac = function ProfileComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ProService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(VerificationService), \u0275\u0275directiveInject(ReviewService), \u0275\u0275directiveInject(PayoutService), \u0275\u0275directiveInject(ServiceAreaService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 2, consts: [["profileForm", "ngForm"], ["proForm", "ngForm"], [1, "profile-page"], [4, "ngIf"], [1, "pro-hero-strip"], [1, "phs-avatar"], [1, "phs-info"], [1, "phs-name-row"], [1, "phs-name"], [1, "phs-role-chip"], [1, "phs-sub"], [1, "phs-badge"], ["class", "pro-tab-bar", 4, "ngIf"], ["class", "pro-edit-header", 4, "ngIf"], ["class", "alert success-alert", 4, "ngIf"], ["class", "profile-card edit-card", 4, "ngIf"], [1, "pro-tab-bar"], [1, "ptb-tab", 3, "click"], [1, "pro-edit-header"], [1, "btn", "btn-cancel", "btn-sm", 3, "click"], [1, "pro-edit-title"], [1, "alert", "success-alert"], [1, "pro-section-actions"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "sections-grid"], [1, "profile-card", "info-card"], [1, "section-title"], [1, "field-row"], [1, "field"], [1, "field-label"], [1, "field-value"], [1, "field-value", "contact-row"], [1, "badge"], ["class", "btn-link", 3, "click", 4, "ngIf"], ["class", "muted-text", 4, "ngIf"], ["class", "verif-panel", 4, "ngIf"], ["class", "badge", 3, "badge-ok", "badge-warn", 4, "ngIf"], ["class", "profile-card info-card full-width", 4, "ngIf"], [1, "btn-link", 3, "click"], [1, "muted-text"], [1, "verif-panel"], [1, "verif-row"], ["type", "text", "maxlength", "6", "placeholder", "000000", "name", "ecUser", 1, "code-input", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], ["class", "error-text", 4, "ngIf"], [1, "btn-link", "small", 3, "click"], [1, "error-text"], [1, "profile-card", "info-card", "full-width"], [1, "address-text"], [1, "profile-card", "bank-card"], [1, "bank-card-header"], ["class", "btn btn-secondary btn-sm", 3, "click", 4, "ngIf"], ["class", "alert success-alert sm", 4, "ngIf"], ["class", "alert error-alert sm", 4, "ngIf"], ["class", "bank-edit-form", 4, "ngIf"], [1, "btn", "btn-secondary", "btn-sm", 3, "click"], [1, "alert", "success-alert", "sm"], [1, "alert", "error-alert", "sm"], ["class", "bank-empty", 4, "ngIf"], ["class", "field", 4, "ngIf"], [1, "bank-empty"], [2, "font-size", "18px", "color", "#16a34a"], [1, "field-hint", 2, "margin-top", "4px"], [1, "bank-edit-form"], [1, "form-group"], ["type", "text", "name", "paymentUpi", 3, "ngModelChange", "ngModel", "placeholder"], [1, "field-hint"], [1, "form-actions"], [1, "profile-card", "reviews-card"], ["class", "reviews-loading", 4, "ngIf"], [1, "reviews-loading"], ["diameter", "28"], ["class", "reviews-empty", 4, "ngIf"], [1, "reviews-empty"], [1, "rating-summary"], [1, "rating-avg-block"], [1, "rating-avg-num"], [1, "rating-stars-row"], ["class", "star", 3, "filled", 4, "ngFor", "ngForOf"], [1, "rating-count"], [1, "rating-breakdown"], ["class", "breakdown-row", 4, "ngFor", "ngForOf"], ["class", "reviews-list", 4, "ngIf"], [1, "star"], [1, "breakdown-row"], [1, "bd-label"], [1, "bd-bar-wrap"], [1, "bd-bar-fill"], [1, "bd-count"], [1, "reviews-list"], [1, "reviews-list-title"], ["class", "review-card", 4, "ngFor", "ngForOf"], ["class", "btn-load-more", 3, "click", 4, "ngIf"], [1, "review-card"], [1, "review-header"], ["class", "star sm", 3, "filled", 4, "ngFor", "ngForOf"], [1, "review-author"], ["class", "review-job", 4, "ngIf"], [1, "review-date"], ["class", "review-comment", 4, "ngIf"], [1, "star", "sm"], [1, "review-job"], [1, "review-comment"], [1, "btn-load-more", 3, "click"], [1, "profile-card", "edit-card"], ["class", "alert error-alert", 4, "ngIf"], [3, "ngSubmit"], ["type", "hidden", "name", "id", 3, "ngModelChange", "ngModel"], [1, "form-section-label"], [1, "form-row"], ["type", "text", "name", "firstName", "required", "", "placeholder", "First name", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "required", "", "placeholder", "Last name", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "Email address", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phoneNumber", "placeholder", "Phone number", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "houseNameNumber", "placeholder", "e.g. 42 or Flat 3B", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "street1", "placeholder", "Street name", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "city", "placeholder", "City", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "state", "placeholder", "State", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "country", "placeholder", "Country", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "zipPostalCode", "placeholder", "ZIP / PIN", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "alert", "error-alert"], [1, "pro-hero-strip", "pro-hero-strip--pro"], [1, "phs-avatar", "phs-avatar--pro"], [1, "phs-business-name"], [1, "phs-name", "phs-name--sub"], [1, "phs-role-chip", "chip-pro"], ["type", "text", "maxlength", "6", "placeholder", "000000", "name", "ecPro", 1, "code-input", 3, "ngModelChange", "ngModel"], ["class", "bank-loading", 4, "ngIf"], [1, "bank-loading"], ["diameter", "24"], [1, "method-toggle"], [1, "method-btn", 3, "click"], ["type", "text", "name", "bankHolderName", "placeholder", "As per bank records", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "bankAccNum", "placeholder", "Bank account number", 3, "ngModelChange", "ngModel"], [1, "form-group", "half-width"], ["type", "text", "name", "bankIfsc", "placeholder", "e.g. HDFC0001234", 2, "text-transform", "uppercase", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "upiVpa", "placeholder", "e.g. yourname@upi", 3, "ngModelChange", "ngModel"], [1, "profile-card", "earnings-card"], ["class", "payouts-loading", 4, "ngIf"], ["class", "payouts-empty", 4, "ngIf"], ["class", "payouts-list", 4, "ngIf"], [1, "payouts-loading"], [1, "payouts-empty"], [1, "payouts-list"], ["class", "payout-card", 4, "ngFor", "ngForOf"], [1, "payout-card"], [1, "payout-card-left"], [1, "payout-job"], [1, "payout-meta"], [1, "payout-card-right"], [1, "payout-amount"], [1, "payout-status"], ["class", "payout-failure", 4, "ngIf"], [1, "payout-failure"], ["type", "text", "name", "proName", "required", "", "placeholder", "Your name", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "businessName", "required", "", "placeholder", "Business name", 3, "ngModelChange", "ngModel"], ["type", "number", "name", "serviceRadiusKm", "min", "1", "max", "500", "placeholder", "e.g. 25", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "houseNameNumber", "placeholder", "e.g. 42 or Shop 7", 3, "ngModelChange", "ngModel"], ["name", "district", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["type", "text", "name", "district", "placeholder", "District", 3, "ngModel", "ngModelChange", 4, "ngIf"], ["name", "district", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["type", "text", "name", "district", "placeholder", "District", 3, "ngModelChange", "ngModel"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, ProfileComponent_ng_container_1_Template, 29, 31, "ng-container", 3)(2, ProfileComponent_ng_container_2_Template, 31, 25, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userType !== "Pro");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userType === "Pro");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, NumberValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm, CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, TranslateModule, LowerCasePipe, DecimalPipe, DatePipe, TranslatePipe], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 32px 16px 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 28px 32px;\n}\n@media (max-width: 600px) {\n  .profile-card[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.hero-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n@media (max-width: 600px) {\n  .hero-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: -1px;\n}\n.avatar-initials.pro[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.active-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #10b981;\n  border: 2px solid #fff;\n}\n.hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.hero-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.hero-info[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 14px;\n  color: #6b7280;\n}\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #f3f4f6;\n  color: #374151;\n}\n.meta-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.meta-chip.pro-chip[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(240, 147, 251, 0.1333333333),\n      rgba(245, 87, 108, 0.1333333333));\n  color: #c026d3;\n}\n.meta-chip.verify-chip.verified[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.meta-chip.verify-chip.unverified[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .edit-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n.sections-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 680px) {\n  .sections-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.info-card.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 500px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.field-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.contact-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.address-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.badge.badge-ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warn[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.verif-panel[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: #f8faff;\n  border: 1px solid #c7d4f5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.verif-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 10px;\n}\n.verif-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.code-input[_ngcontent-%COMP%] {\n  width: 110px;\n  padding: 8px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 18px;\n  letter-spacing: 4px;\n  text-align: center;\n}\n.code-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.error-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  display: block;\n  margin-top: 6px;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 6px;\n  display: block;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n.muted-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.form-section-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin: 24px 0 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.form-section-label[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.form-group.half-width[_ngcontent-%COMP%] {\n  max-width: 280px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #f9fafb;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #d1d5db;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 28px;\n  flex-wrap: wrap;\n}\n@media (max-width: 500px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #059669;\n}\n.btn.btn-secondary[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n  border: 1.5px solid #d1d5db;\n}\n.btn.btn-secondary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.btn.btn-cancel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1.5px solid #e5e7eb;\n}\n.btn.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 13px;\n}\n.reviews-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.reviews-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 1.5rem 0;\n}\n.reviews-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #9ca3af;\n  padding: 0.25rem 0;\n}\n.reviews-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #d1d5db;\n}\n.reviews-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n}\n.rating-summary[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 32px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n.rating-avg-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  min-width: 80px;\n}\n.rating-avg-num[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  color: #1f2937;\n  line-height: 1;\n}\n.rating-stars-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2px;\n}\n.rating-count[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.star[_ngcontent-%COMP%] {\n  color: #d1d5db;\n  font-size: 20px;\n  line-height: 1;\n}\n.star.filled[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.star.sm[_ngcontent-%COMP%] {\n  font-size: 15px;\n}\n.rating-breakdown[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.breakdown-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bd-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #6b7280;\n  width: 24px;\n  flex-shrink: 0;\n}\n.bd-bar-wrap[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 8px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bd-bar-fill[_ngcontent-%COMP%] {\n  height: 100%;\n  background: #f59e0b;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n.bd-count[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  width: 24px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.reviews-list[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  padding-top: 20px;\n}\n.reviews-list-title[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 14px;\n}\n.review-card[_ngcontent-%COMP%] {\n  padding: 14px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.review-card[_ngcontent-%COMP%]:last-of-type {\n  border-bottom: none;\n}\n.review-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n}\n.review-author[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.review-job[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.review-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-left: auto;\n}\n.review-comment[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #4b5563;\n  margin: 0;\n  line-height: 1.55;\n}\n.btn-load-more[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  width: 100%;\n  padding: 10px;\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #667eea;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.btn-load-more[_ngcontent-%COMP%]:hover {\n  background: #f0f0ff;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.alert.success-alert[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert.success-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.alert.error-alert[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.alert.error-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.alert.sm[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  font-size: 0.85rem;\n}\n.pro-hero-strip[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--color-primary, #6366f1);\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-business-name[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 2px;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-name-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-name[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-name.phs-name--sub[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #374151;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-role-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-role-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-role-chip.chip-pro[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  color: #fff;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-role-chip.chip-admin[_ngcontent-%COMP%] {\n  background: #dc2626;\n  color: #fff;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-role-chip.chip-user[_ngcontent-%COMP%] {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-info[_ngcontent-%COMP%]   .phs-sub[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 2px;\n}\n.pro-hero-strip.pro-hero-strip--pro[_ngcontent-%COMP%]   .phs-avatar--pro[_ngcontent-%COMP%] {\n  width: 54px;\n  height: 54px;\n  font-size: 1.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-badge[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-badge.verified[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.pro-hero-strip[_ngcontent-%COMP%]   .phs-badge[_ngcontent-%COMP%]:not(.verified)   mat-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n}\n.pro-tab-bar[_ngcontent-%COMP%] {\n  display: flex;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 6px 8px;\n  gap: 4px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.pro-tab-bar[_ngcontent-%COMP%]::-webkit-scrollbar {\n  display: none;\n}\n.pro-tab-bar[_ngcontent-%COMP%]   .ptb-tab[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 8px 8px;\n  border: none;\n  border-bottom: 3px solid transparent;\n  border-radius: 10px 10px 0 0;\n  background: transparent;\n  cursor: pointer;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  white-space: nowrap;\n}\n.pro-tab-bar[_ngcontent-%COMP%]   .ptb-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n.pro-tab-bar[_ngcontent-%COMP%]   .ptb-tab[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  color: #374151;\n}\n.pro-tab-bar[_ngcontent-%COMP%]   .ptb-tab.active[_ngcontent-%COMP%] {\n  color: var(--color-primary, #6366f1);\n  border-bottom-color: var(--color-primary, #6366f1);\n  background: #eef2ff;\n  font-weight: 700;\n}\n@media (max-width: 480px) {\n  .pro-tab-bar[_ngcontent-%COMP%]   .ptb-tab[_ngcontent-%COMP%] {\n    font-size: 0.72rem;\n    padding: 10px 6px 8px;\n  }\n}\n.pro-section-actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: -8px;\n}\n.pro-edit-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 14px 20px;\n}\n.pro-edit-header[_ngcontent-%COMP%]   .pro-edit-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n}\n.bank-card[_ngcontent-%COMP%]   .bank-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.bank-card[_ngcontent-%COMP%]   .bank-card-header[_ngcontent-%COMP%]   .section-title[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.bank-card[_ngcontent-%COMP%]   .bank-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.bank-card[_ngcontent-%COMP%]   .bank-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #b45309;\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 14px 16px;\n  font-size: 0.9rem;\n}\n.bank-card[_ngcontent-%COMP%]   .bank-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #f59e0b;\n  font-size: 20px;\n}\n.bank-card[_ngcontent-%COMP%]   .method-toggle[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.bank-card[_ngcontent-%COMP%]   .method-toggle[_ngcontent-%COMP%]   .method-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #374151;\n  transition: border-color 0.15s, background 0.15s;\n}\n.bank-card[_ngcontent-%COMP%]   .method-toggle[_ngcontent-%COMP%]   .method-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n}\n.bank-card[_ngcontent-%COMP%]   .method-toggle[_ngcontent-%COMP%]   .method-btn.active[_ngcontent-%COMP%] {\n  border-color: var(--color-primary, #6366f1);\n  background: #eef2ff;\n  color: var(--color-primary, #6366f1);\n  font-weight: 600;\n}\n.bank-card[_ngcontent-%COMP%]   .bank-edit-form[_ngcontent-%COMP%] {\n  margin-top: 12px;\n}\n.earnings-card[_ngcontent-%COMP%]   .payouts-loading[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.earnings-card[_ngcontent-%COMP%]   .payouts-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #6b7280;\n  font-size: 0.9rem;\n  padding: 12px 0;\n}\n.earnings-card[_ngcontent-%COMP%]   .payouts-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #9ca3af;\n}\n.earnings-card[_ngcontent-%COMP%]   .payouts-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 12px;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fafafa;\n  flex-wrap: wrap;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card-left[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card-right[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-job[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #111827;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-amount[_ngcontent-%COMP%] {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #059669;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 12px;\n  text-transform: capitalize;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-status.ps-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-status.ps-processing[_ngcontent-%COMP%] {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-status.ps-processed[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-status.ps-failed[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-status.ps-reversed[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #374151;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-failure[_ngcontent-%COMP%] {\n  flex-basis: 100%;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #dc2626;\n  margin-top: 4px;\n}\n.earnings-card[_ngcontent-%COMP%]   .payout-card[_ngcontent-%COMP%]   .payout-failure[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=profile.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [FormsModule, CommonModule, MatIconModule, MatProgressSpinnerModule, TranslateModule], template: `<div class="profile-page">

  <!-- \u2500\u2500 USER PROFILE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <ng-container *ngIf="userType !== 'Pro'">

    <!-- Compact hero strip -->
    <div class="pro-hero-strip">
      <div class="phs-avatar">{{ (user.firstName || '?')[0] }}</div>
      <div class="phs-info">
        <div class="phs-name-row">
          <span class="phs-name">{{ user.firstName }} {{ user.lastName }}</span>
          <span class="phs-role-chip" [class.chip-admin]="userType === 'Admin'" [class.chip-user]="userType !== 'Admin'">
            <mat-icon>{{ userType === 'Admin' ? 'admin_panel_settings' : 'person' }}</mat-icon>
            {{ userType === 'Admin' ? ('PROFILE.ADMIN' | translate) : ('PROFILE.USER' | translate) }}
          </span>
        </div>
        <div class="phs-sub">{{ 'PROFILE.MEMBER_SINCE' | translate }} {{ user.createdAt | date:'MMM yyyy' }}<span *ngIf="user.city"> \xB7 {{ user.city }}</span></div>
      </div>
      <span class="phs-badge" [class.verified]="user.isEmailVerified">
        <mat-icon>{{ user.isEmailVerified ? 'verified' : 'error_outline' }}</mat-icon>
      </span>
    </div>

    <!-- Tab bar -->
    <nav class="pro-tab-bar" *ngIf="!isEditing">
      <button class="ptb-tab" [class.active]="userSection === 'info'"    (click)="selectUserSection('info')">
        <mat-icon>person</mat-icon><span>{{ 'PROFILE.TAB_PROFILE' | translate }}</span>
      </button>
      <button class="ptb-tab" [class.active]="userSection === 'payment'" (click)="selectUserSection('payment')">
        <mat-icon>account_balance_wallet</mat-icon><span>{{ 'PROFILE.TAB_PAYMENT' | translate }}</span>
      </button>
      <button class="ptb-tab" [class.active]="userSection === 'reviews'" (click)="selectUserSection('reviews')">
        <mat-icon>star</mat-icon><span>{{ 'PROFILE.TAB_REVIEWS' | translate }}</span>
      </button>
    </nav>

    <!-- Edit mode header -->
    <div class="pro-edit-header" *ngIf="isEditing">
      <button class="btn btn-cancel btn-sm" (click)="cancelEdit()">
        <mat-icon>arrow_back</mat-icon> {{ 'PROFILE.BACK' | translate }}
      </button>
      <span class="pro-edit-title">{{ 'PROFILE.EDIT_PROFILE' | translate }}</span>
    </div>

    <!-- Alerts -->
    <div class="alert success-alert" *ngIf="successMessage && !isEditing">
      <mat-icon>check_circle</mat-icon><span>{{ successMessage }}</span>
    </div>

    <!-- \u2500\u2500 PROFILE section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isEditing && userSection === 'info'">
      <div class="pro-section-actions">
        <button class="btn btn-primary btn-sm" (click)="toggleEdit()">
          <mat-icon>edit</mat-icon> {{ 'PROFILE.EDIT_PROFILE' | translate }}
        </button>
      </div>
      <div class="sections-grid">
        <!-- Personal -->
        <div class="profile-card info-card">
          <h3 class="section-title"><mat-icon>person</mat-icon> {{ 'PROFILE.PERSONAL' | translate }}</h3>
          <div class="field-row">
            <div class="field">
              <span class="field-label">{{ 'PROFILE.FIRST_NAME' | translate }}</span>
              <span class="field-value">{{ user.firstName || '\u2014' }}</span>
            </div>
            <div class="field">
              <span class="field-label">{{ 'PROFILE.LAST_NAME' | translate }}</span>
              <span class="field-value">{{ user.lastName || '\u2014' }}</span>
            </div>
          </div>
        </div>

        <!-- Contact -->
        <div class="profile-card info-card">
          <h3 class="section-title"><mat-icon>contacts</mat-icon> {{ 'PROFILE.CONTACT' | translate }}</h3>
          <div class="field">
            <span class="field-label">{{ 'PROFILE.EMAIL' | translate }}</span>
            <div class="field-value contact-row">
              <span>{{ user.email }}</span>
              <span class="badge" [class.badge-ok]="user.isEmailVerified" [class.badge-warn]="!user.isEmailVerified">
                <mat-icon>{{ user.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon>
                {{ user.isEmailVerified ? ('PROFILE.VERIFIED' | translate) : ('PROFILE.UNVERIFIED' | translate) }}
              </span>
              <button *ngIf="!user.isEmailVerified && emailVerifStep === 'idle'" class="btn-link" (click)="sendEmailVerification()">{{ 'PROFILE.VERIFY_NOW' | translate }}</button>
              <span *ngIf="emailVerifStep === 'sending'" class="muted-text">{{ 'PROFILE.SENDING' | translate }}</span>
            </div>
            <div class="verif-panel" *ngIf="!user.isEmailVerified && (emailVerifStep === 'code-sent' || emailVerifStep === 'verifying')">
              <p>{{ 'PROFILE.EMAIL_CODE_PROMPT' | translate }} <strong>{{ user.email }}</strong></p>
              <div class="verif-row">
                <input class="code-input" type="text" maxlength="6" placeholder="000000" [(ngModel)]="emailVerifCode" name="ecUser" />
                <button class="btn btn-success btn-sm" (click)="confirmEmailCode()" [disabled]="emailVerifStep === 'verifying'">
                  {{ emailVerifStep === 'verifying' ? ('PROFILE.VERIFYING' | translate) : ('PROFILE.CONFIRM' | translate) }}
                </button>
                <button class="btn btn-cancel btn-sm" (click)="cancelEmailVerification()">{{ 'PROFILE.CANCEL' | translate }}</button>
              </div>
              <span class="error-text" *ngIf="emailVerifError">{{ emailVerifError }}</span>
              <button class="btn-link small" (click)="sendEmailVerification()">{{ 'PROFILE.RESEND_CODE' | translate }}</button>
            </div>
          </div>
          <div class="field">
            <span class="field-label">{{ 'PROFILE.PHONE' | translate }}</span>
            <div class="field-value contact-row">
              <span>{{ user.phoneNumber || ('PROFILE.NOT_SET' | translate) }}</span>
              <span *ngIf="user.phoneNumber" class="badge" [class.badge-ok]="user.isPhoneVerified" [class.badge-warn]="!user.isPhoneVerified">
                <mat-icon>{{ user.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon>
                {{ user.isPhoneVerified ? ('PROFILE.VERIFIED' | translate) : ('PROFILE.UNVERIFIED' | translate) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Address -->
        <div class="profile-card info-card full-width" *ngIf="user.houseNameNumber || user.street1 || user.city">
          <h3 class="section-title"><mat-icon>location_on</mat-icon> {{ 'PROFILE.ADDRESS' | translate }}</h3>
          <p class="address-text">
            <ng-container *ngIf="user.houseNameNumber">{{ user.houseNameNumber }}, </ng-container>
            <ng-container *ngIf="user.street1">{{ user.street1 }}<ng-container *ngIf="user.street2">, {{ user.street2 }}</ng-container>, </ng-container>
            <ng-container *ngIf="user.city">{{ user.city }}<ng-container *ngIf="user.state">, {{ user.state }}</ng-container></ng-container>
            <ng-container *ngIf="user.country">, {{ user.country }}</ng-container>
            <ng-container *ngIf="user.zipPostalCode"> \u2014 {{ user.zipPostalCode }}</ng-container>
          </p>
        </div>
      </div>
    </ng-container>

    <!-- \u2500\u2500 PAYMENT section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isEditing && userSection === 'payment'">
      <div class="profile-card bank-card">
        <div class="bank-card-header">
          <h3 class="section-title"><mat-icon>account_balance_wallet</mat-icon> {{ 'PROFILE.PAYMENT_DETAILS' | translate }}</h3>
          <button class="btn btn-secondary btn-sm" (click)="startEditPayment()" *ngIf="!isEditingPayment">
            <mat-icon>edit</mat-icon> {{ user.upiVpa ? 'Edit' : 'Add' }}
          </button>
        </div>

        <div class="alert success-alert sm" *ngIf="paymentSuccessMessage">
          <mat-icon>check_circle</mat-icon><span>{{ paymentSuccessMessage }}</span>
        </div>
        <div class="alert error-alert sm" *ngIf="paymentErrorMessage">
          <mat-icon>error</mat-icon><span>{{ paymentErrorMessage }}</span>
        </div>

        <!-- View mode -->
        <ng-container *ngIf="!isEditingPayment">
          <div *ngIf="!user.upiVpa" class="bank-empty">
            <mat-icon>info</mat-icon>
            <p>{{ 'PROFILE.NO_UPI' | translate }}</p>
          </div>
          <div *ngIf="user.upiVpa" class="field">
            <span class="field-label">{{ 'PROFILE.SAVED_UPI' | translate }}</span>
            <div class="field-value contact-row">
              <mat-icon style="font-size:18px;color:#16a34a">qr_code</mat-icon>
              <span>{{ user.upiVpa }}</span>
            </div>
            <span class="field-hint" style="margin-top:4px">{{ 'PROFILE.UPI_HINT' | translate }}</span>
          </div>
        </ng-container>

        <!-- Edit form -->
        <div class="bank-edit-form" *ngIf="isEditingPayment">
          <div class="form-group">
            <label>{{ 'PROFILE.UPI_LABEL' | translate }}</label>
            <input type="text" [(ngModel)]="paymentUpiVpa" name="paymentUpi" [placeholder]="'PROFILE.UPI_PLACEHOLDER' | translate" />
            <span class="field-hint">{{ 'PROFILE.UPI_BLANK_HINT' | translate }}</span>
          </div>
          <div class="form-actions">
            <button class="btn btn-success btn-sm" (click)="savePaymentDetails()" [disabled]="paymentSaveLoading">
              <mat-icon>save</mat-icon>{{ paymentSaveLoading ? ('PROFILE.SAVING' | translate) : ('PROFILE.SAVE_CHANGES' | translate) }}
            </button>
            <button class="btn btn-cancel btn-sm" (click)="cancelEditPayment()">
              <mat-icon>close</mat-icon> {{ 'PROFILE.CANCEL' | translate }}
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <!-- \u2500\u2500 REVIEWS section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isEditing && userSection === 'reviews'">
      <div class="profile-card reviews-card">
        <h3 class="section-title"><mat-icon>star</mat-icon> {{ 'PROFILE.REVIEWS_FROM_PROS' | translate }}</h3>

        <div *ngIf="userReviewsLoading" class="reviews-loading">
          <mat-spinner diameter="28"></mat-spinner>
        </div>

        <ng-container *ngIf="!userReviewsLoading">
          <div *ngIf="!userRatingSummary || userRatingSummary.totalReviews === 0" class="reviews-empty">
            <mat-icon>rate_review</mat-icon>
            <p>{{ 'PROFILE.NO_REVIEWS_USER' | translate }}</p>
          </div>

          <ng-container *ngIf="userRatingSummary && userRatingSummary.totalReviews > 0">
            <div class="rating-summary">
              <div class="rating-avg-block">
                <div class="rating-avg-num">{{ userRatingSummary.averageRating | number:'1.1-1' }}</div>
                <div class="rating-stars-row">
                  <span *ngFor="let i of starsArray" class="star" [class.filled]="starFilled(userRatingSummary.averageRating, i - 1)">\u2605</span>
                </div>
                <div class="rating-count">{{ userRatingSummary.totalReviews }} review{{ userRatingSummary.totalReviews !== 1 ? 's' : '' }}</div>
              </div>
              <div class="rating-breakdown">
                <div *ngFor="let s of [5,4,3,2,1]" class="breakdown-row">
                  <span class="bd-label">{{ s }}\u2605</span>
                  <div class="bd-bar-wrap">
                    <div class="bd-bar-fill" [style.width]="ratingBarWidth(userRatingSummary.ratingBreakdown[s - 1] || 0, userRatingSummary.totalReviews)"></div>
                  </div>
                  <span class="bd-count">{{ userRatingSummary.ratingBreakdown[s - 1] || 0 }}</span>
                </div>
              </div>
            </div>

            <div class="reviews-list" *ngIf="userReviews.length > 0">
              <h4 class="reviews-list-title">{{ 'PROFILE.RECENT_REVIEWS' | translate }}</h4>
              <div *ngFor="let review of userReviews" class="review-card">
                <div class="review-header">
                  <span *ngFor="let i of starsArray" class="star sm" [class.filled]="starFilled(review.rating, i - 1)">\u2605</span>
                  <span class="review-author">{{ review.reviewerName }}</span>
                  <span class="review-job" *ngIf="review.jobTitle">\xB7 {{ review.jobTitle }}</span>
                  <span class="review-date">{{ review.createdAt | date:'d MMM yyyy' }}</span>
                </div>
                <p *ngIf="review.comment" class="review-comment">{{ review.comment }}</p>
              </div>
              <button *ngIf="userReviews.length < userReviewsTotal" class="btn-load-more" (click)="loadMoreUserReviews()">
                {{ 'PROFILE.LOAD_MORE' | translate }}
              </button>
            </div>
          </ng-container>
        </ng-container>
      </div>
    </ng-container>

    <!-- Edit Form -->
    <div class="profile-card edit-card" *ngIf="isEditing">
      <div class="alert success-alert" *ngIf="successMessage">
        <mat-icon>check_circle</mat-icon><span>{{ successMessage }}</span>
      </div>
      <div class="alert error-alert" *ngIf="errorMessage">
        <mat-icon>error</mat-icon><span>{{ errorMessage }}</span>
      </div>

      <form #profileForm="ngForm" (ngSubmit)="updateProfile(profileForm)">
        <input type="hidden" name="id" [(ngModel)]="user.id" />

        <h4 class="form-section-label">{{ 'PROFILE.PERSONAL' | translate }}</h4>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.FIRST_NAME' | translate }}</label>
            <input type="text" name="firstName" [(ngModel)]="user.firstName" required placeholder="First name" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.LAST_NAME' | translate }}</label>
            <input type="text" name="lastName" [(ngModel)]="user.lastName" required placeholder="Last name" />
          </div>
        </div>

        <h4 class="form-section-label">{{ 'PROFILE.CONTACT' | translate }}</h4>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.EMAIL' | translate }}</label>
            <input type="email" name="email" [(ngModel)]="user.email" required placeholder="Email address" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.PHONE' | translate }}</label>
            <input type="text" name="phoneNumber" [(ngModel)]="user.phoneNumber" placeholder="Phone number" />
          </div>
        </div>

        <h4 class="form-section-label">{{ 'PROFILE.ADDRESS' | translate }}</h4>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.HOUSE_NUMBER' | translate }}</label>
            <input type="text" name="houseNameNumber" [(ngModel)]="user.houseNameNumber" placeholder="e.g. 42 or Flat 3B" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.STREET' | translate }}</label>
            <input type="text" name="street1" [(ngModel)]="user.street1" placeholder="Street name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>City</label>
            <input type="text" name="city" [(ngModel)]="user.city" placeholder="City" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.STATE_PROVINCE' | translate }}</label>
            <input type="text" name="state" [(ngModel)]="user.state" placeholder="State" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.COUNTRY' | translate }}</label>
            <input type="text" name="country" [(ngModel)]="user.country" placeholder="Country" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.POSTAL_CODE' | translate }}</label>
            <input type="text" name="zipPostalCode" [(ngModel)]="user.zipPostalCode" placeholder="ZIP / PIN" />
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-success" [disabled]="!profileForm.valid || isLoading">
            <mat-icon>save</mat-icon>{{ isLoading ? ('PROFILE.SAVING' | translate) : ('PROFILE.SAVE_CHANGES' | translate) }}
          </button>
          <button type="button" class="btn btn-cancel" (click)="cancelEdit()">
            <mat-icon>close</mat-icon> {{ 'PROFILE.CANCEL' | translate }}
          </button>
        </div>
      </form>
    </div>

  </ng-container>

  <!-- \u2500\u2500 PRO PROFILE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <ng-container *ngIf="userType === 'Pro'">

    <!-- Compact hero strip -->
    <div class="pro-hero-strip pro-hero-strip--pro">
      <div class="phs-avatar phs-avatar--pro">{{ (pro.businessName || pro.proName || '?')[0] }}</div>
      <div class="phs-info">
        <div class="phs-business-name">{{ pro.businessName }}</div>
        <div class="phs-name-row">
          <span class="phs-name phs-name--sub">{{ pro.proName }}</span>
          <span class="phs-role-chip chip-pro">
            <mat-icon>engineering</mat-icon>{{ 'PROFILE.PROFESSIONAL' | translate }}
          </span>
        </div>
        <div class="phs-sub">{{ 'PROFILE.MEMBER_SINCE' | translate }} {{ pro.createdAt | date:'MMM yyyy' }}<span *ngIf="pro.city"> \xB7 {{ pro.city }}</span></div>
      </div>
      <span class="phs-badge" [class.verified]="pro.isEmailVerified">
        <mat-icon>{{ pro.isEmailVerified ? 'verified' : 'error_outline' }}</mat-icon>
      </span>
    </div>

    <!-- Tab bar -->
    <nav class="pro-tab-bar" *ngIf="!isEditing">
      <button class="ptb-tab" [class.active]="proSection === 'info'"     (click)="selectProSection('info')">
        <mat-icon>person</mat-icon><span>{{ 'PROFILE.TAB_PROFILE' | translate }}</span>
      </button>
      <button class="ptb-tab" [class.active]="proSection === 'payout'"   (click)="selectProSection('payout')">
        <mat-icon>account_balance</mat-icon><span>{{ 'PROFILE.TAB_PAYOUT' | translate }}</span>
      </button>
      <button class="ptb-tab" [class.active]="proSection === 'earnings'" (click)="selectProSection('earnings')">
        <mat-icon>payments</mat-icon><span>{{ 'PROFILE.TAB_EARNINGS' | translate }}</span>
      </button>
      <button class="ptb-tab" [class.active]="proSection === 'reviews'"  (click)="selectProSection('reviews')">
        <mat-icon>star</mat-icon><span>{{ 'PROFILE.TAB_REVIEWS' | translate }}</span>
      </button>
    </nav>

    <!-- Edit mode header -->
    <div class="pro-edit-header" *ngIf="isEditing">
      <button class="btn btn-cancel btn-sm" (click)="cancelEdit()">
        <mat-icon>arrow_back</mat-icon> {{ 'PROFILE.BACK' | translate }}
      </button>
      <span class="pro-edit-title">{{ 'PROFILE.EDIT_PROFILE' | translate }}</span>
    </div>

    <!-- Alerts -->
    <div class="alert success-alert" *ngIf="successMessage && !isEditing">
      <mat-icon>check_circle</mat-icon><span>{{ successMessage }}</span>
    </div>

    <!-- \u2500\u2500 PROFILE section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isEditing && proSection === 'info'">
      <div class="pro-section-actions">
        <button class="btn btn-primary btn-sm" (click)="toggleEdit()">
          <mat-icon>edit</mat-icon> {{ 'PROFILE.EDIT_PROFILE' | translate }}
        </button>
      </div>
      <div class="sections-grid">
        <!-- Business Info -->
        <div class="profile-card info-card">
          <h3 class="section-title"><mat-icon>store</mat-icon> {{ 'PROFILE.BUSINESS' | translate }}</h3>
          <div class="field">
            <span class="field-label">{{ 'PROFILE.PRO_NAME' | translate }}</span>
            <span class="field-value">{{ pro.proName || '\u2014' }}</span>
          </div>
          <div class="field">
            <span class="field-label">{{ 'PROFILE.BUSINESS_NAME' | translate }}</span>
            <span class="field-value">{{ pro.businessName || '\u2014' }}</span>
          </div>
          <div class="field">
            <span class="field-label">{{ 'PROFILE.SERVICE_RADIUS' | translate }}</span>
            <span class="field-value">{{ pro.serviceRadiusKm ?? 25 }} km</span>
          </div>
        </div>

        <!-- Contact -->
        <div class="profile-card info-card">
          <h3 class="section-title"><mat-icon>contacts</mat-icon> {{ 'PROFILE.CONTACT' | translate }}</h3>
          <div class="field">
            <span class="field-label">{{ 'PROFILE.EMAIL' | translate }}</span>
            <div class="field-value contact-row">
              <span>{{ pro.email }}</span>
              <span class="badge" [class.badge-ok]="pro.isEmailVerified" [class.badge-warn]="!pro.isEmailVerified">
                <mat-icon>{{ pro.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon>
                {{ pro.isEmailVerified ? ('PROFILE.VERIFIED' | translate) : ('PROFILE.UNVERIFIED' | translate) }}
              </span>
              <button *ngIf="!pro.isEmailVerified && emailVerifStep === 'idle'" class="btn-link" (click)="sendEmailVerification()">{{ 'PROFILE.VERIFY_NOW' | translate }}</button>
              <span *ngIf="emailVerifStep === 'sending'" class="muted-text">{{ 'PROFILE.SENDING' | translate }}</span>
            </div>
            <div class="verif-panel" *ngIf="!pro.isEmailVerified && (emailVerifStep === 'code-sent' || emailVerifStep === 'verifying')">
              <p>{{ 'PROFILE.EMAIL_CODE_PROMPT' | translate }} <strong>{{ pro.email }}</strong></p>
              <div class="verif-row">
                <input class="code-input" type="text" maxlength="6" placeholder="000000" [(ngModel)]="emailVerifCode" name="ecPro" />
                <button class="btn btn-success btn-sm" (click)="confirmEmailCode()" [disabled]="emailVerifStep === 'verifying'">
                  {{ emailVerifStep === 'verifying' ? ('PROFILE.VERIFYING' | translate) : ('PROFILE.CONFIRM' | translate) }}
                </button>
                <button class="btn btn-cancel btn-sm" (click)="cancelEmailVerification()">{{ 'PROFILE.CANCEL' | translate }}</button>
              </div>
              <span class="error-text" *ngIf="emailVerifError">{{ emailVerifError }}</span>
              <button class="btn-link small" (click)="sendEmailVerification()">{{ 'PROFILE.RESEND_CODE' | translate }}</button>
            </div>
          </div>
          <div class="field">
            <span class="field-label">{{ 'PROFILE.PHONE' | translate }}</span>
            <div class="field-value contact-row">
              <span>{{ pro.phoneNumber || ('PROFILE.NOT_SET' | translate) }}</span>
              <span *ngIf="pro.phoneNumber" class="badge" [class.badge-ok]="pro.isPhoneVerified" [class.badge-warn]="!pro.isPhoneVerified">
                <mat-icon>{{ pro.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon>
                {{ pro.isPhoneVerified ? ('PROFILE.VERIFIED' | translate) : ('PROFILE.UNVERIFIED' | translate) }}
              </span>
            </div>
          </div>
        </div>

        <!-- Address -->
        <div class="profile-card info-card full-width" *ngIf="pro.houseNameNumber || pro.street1 || pro.city">
          <h3 class="section-title"><mat-icon>location_on</mat-icon> {{ 'PROFILE.ADDRESS' | translate }}</h3>
          <p class="address-text">
            <ng-container *ngIf="pro.houseNameNumber">{{ pro.houseNameNumber }}, </ng-container>
            <ng-container *ngIf="pro.street1">{{ pro.street1 }}<ng-container *ngIf="pro.street2">, {{ pro.street2 }}</ng-container>, </ng-container>
            <ng-container *ngIf="pro.city">{{ pro.city }}</ng-container>
            <ng-container *ngIf="pro.district">, {{ pro.district }}</ng-container>
            <ng-container *ngIf="pro.state">, {{ pro.state }}</ng-container>
            <ng-container *ngIf="pro.country">, {{ pro.country }}</ng-container>
            <ng-container *ngIf="pro.zipPostalCode"> \u2014 {{ pro.zipPostalCode }}</ng-container>
          </p>
        </div>
      </div>
    </ng-container>

    <!-- \u2500\u2500 PAYOUT section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isEditing && proSection === 'payout'">
      <div class="profile-card bank-card">
        <div class="bank-card-header">
          <h3 class="section-title"><mat-icon>account_balance</mat-icon> {{ 'PROFILE.PAYOUT_BANK' | translate }}</h3>
          <button class="btn btn-secondary btn-sm" (click)="startEditBank()" *ngIf="!isEditingBank">
            <mat-icon>edit</mat-icon> {{ bankDetails?.hasBankDetails ? 'Edit' : 'Add' }}
          </button>
        </div>

        <div *ngIf="bankDetailsLoading" class="bank-loading">
          <mat-spinner diameter="24"></mat-spinner>
        </div>

        <div class="alert success-alert sm" *ngIf="bankSuccessMessage">
          <mat-icon>check_circle</mat-icon><span>{{ bankSuccessMessage }}</span>
        </div>
        <div class="alert error-alert sm" *ngIf="bankErrorMessage">
          <mat-icon>error</mat-icon><span>{{ bankErrorMessage }}</span>
        </div>

        <ng-container *ngIf="!bankDetailsLoading && !isEditingBank">
          <div *ngIf="!bankDetails?.hasBankDetails" class="bank-empty">
            <mat-icon>warning</mat-icon>
            <p>{{ 'PROFILE.NO_PAYOUT' | translate }}</p>
          </div>
          <ng-container *ngIf="bankDetails?.hasBankDetails">
            <div class="field-row">
              <div class="field">
                <span class="field-label">{{ 'PROFILE.PAYOUT_METHOD' | translate }}</span>
                <span class="field-value">{{ bankDetails?.payoutMethod }}</span>
              </div>
            </div>
            <ng-container *ngIf="bankDetails?.payoutMethod === 'UPI'">
              <div class="field">
                <span class="field-label">{{ 'PROFILE.UPI_VPA' | translate }}</span>
                <span class="field-value">{{ bankDetails?.upiVpa }}</span>
              </div>
            </ng-container>
            <ng-container *ngIf="bankDetails?.payoutMethod === 'Bank'">
              <div class="field-row">
                <div class="field">
                  <span class="field-label">{{ 'PROFILE.ACCOUNT_HOLDER' | translate }}</span>
                  <span class="field-value">{{ bankDetails?.bankAccountHolderName || '\u2014' }}</span>
                </div>
                <div class="field">
                  <span class="field-label">{{ 'PROFILE.ACCOUNT_NUMBER' | translate }}</span>
                  <span class="field-value">****{{ (bankDetails?.bankAccountNumber ?? '').slice(-4) }}</span>
                </div>
              </div>
              <div class="field">
                <span class="field-label">{{ 'PROFILE.IFSC' | translate }}</span>
                <span class="field-value">{{ bankDetails?.bankIfsc }}</span>
              </div>
            </ng-container>
          </ng-container>
        </ng-container>

        <!-- Edit bank form -->
        <div class="bank-edit-form" *ngIf="isEditingBank">
          <div class="form-group">
            <label>{{ 'PROFILE.PAYOUT_METHOD' | translate }}</label>
            <div class="method-toggle">
              <button class="method-btn" [class.active]="bankForm.payoutMethod === 'Bank'" (click)="bankForm.payoutMethod = 'Bank'">
                <mat-icon>account_balance</mat-icon> {{ 'PROFILE.BANK_ACCOUNT' | translate }}
              </button>
              <button class="method-btn" [class.active]="bankForm.payoutMethod === 'UPI'" (click)="bankForm.payoutMethod = 'UPI'">
                <mat-icon>qr_code</mat-icon> {{ 'PROFILE.UPI' | translate }}
              </button>
            </div>
          </div>

          <ng-container *ngIf="bankForm.payoutMethod === 'Bank'">
            <div class="form-row">
              <div class="form-group">
                <label>{{ 'PROFILE.ACCT_HOLDER_LABEL' | translate }}</label>
                <input type="text" [(ngModel)]="bankForm.bankAccountHolderName" name="bankHolderName" placeholder="As per bank records" />
              </div>
              <div class="form-group">
                <label>{{ 'PROFILE.ACCT_NUMBER_LABEL' | translate }}</label>
                <input type="text" [(ngModel)]="bankForm.bankAccountNumber" name="bankAccNum" placeholder="Bank account number" />
              </div>
            </div>
            <div class="form-group half-width">
              <label>{{ 'PROFILE.IFSC_CODE' | translate }}</label>
              <input type="text" [(ngModel)]="bankForm.bankIfsc" name="bankIfsc" placeholder="e.g. HDFC0001234" style="text-transform:uppercase" />
            </div>
          </ng-container>

          <ng-container *ngIf="bankForm.payoutMethod === 'UPI'">
            <div class="form-group half-width">
              <label>{{ 'PROFILE.UPI_VPA' | translate }}</label>
              <input type="text" [(ngModel)]="bankForm.upiVpa" name="upiVpa" placeholder="e.g. yourname@upi" />
            </div>
          </ng-container>

          <div class="form-actions">
            <button class="btn btn-success btn-sm" (click)="saveBankDetails()" [disabled]="bankSaveLoading">
              <mat-icon>save</mat-icon>{{ bankSaveLoading ? ('PROFILE.SAVING' | translate) : ('PROFILE.SAVE_CHANGES' | translate) }}
            </button>
            <button class="btn btn-cancel btn-sm" (click)="cancelEditBank()">
              <mat-icon>close</mat-icon> {{ 'PROFILE.CANCEL' | translate }}
            </button>
          </div>
        </div>
      </div>
    </ng-container>

    <!-- \u2500\u2500 EARNINGS section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isEditing && proSection === 'earnings'">
      <div class="profile-card earnings-card">
        <h3 class="section-title"><mat-icon>payments</mat-icon> {{ 'PROFILE.EARNINGS' | translate }}</h3>

        <div *ngIf="payoutsLoading" class="payouts-loading">
          <mat-spinner diameter="24"></mat-spinner>
        </div>

        <div *ngIf="!payoutsLoading && payouts.length === 0" class="payouts-empty">
          <mat-icon>inbox</mat-icon>
          <p>{{ 'PROFILE.NO_PAYOUTS' | translate }}</p>
        </div>

        <div class="payouts-list" *ngIf="!payoutsLoading && payouts.length > 0">
          <div *ngFor="let p of payouts" class="payout-card">
            <div class="payout-card-left">
              <div class="payout-job">{{ p.jobTitle || ('Job #' + p.jobId) }}</div>
              <div class="payout-meta">{{ p.createdAt | date:'d MMM yyyy' }} \xB7 {{ p.mode || ('PROFILE.PENDING_METHOD' | translate) }}</div>
            </div>
            <div class="payout-card-right">
              <span class="payout-amount">&#8377;{{ p.amount | number:'1.2-2' }}</span>
              <span class="payout-status" [class]="'ps-' + (p.status | lowercase)">{{ p.status }}</span>
            </div>
            <div class="payout-failure" *ngIf="p.failureReason">
              <mat-icon>error_outline</mat-icon> {{ p.failureReason }}
            </div>
          </div>
        </div>
      </div>
    </ng-container>

    <!-- \u2500\u2500 REVIEWS section \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isEditing && proSection === 'reviews'">
      <div class="profile-card reviews-card">
        <h3 class="section-title"><mat-icon>star</mat-icon> {{ 'PROFILE.REVIEWS_RATINGS' | translate }}</h3>

        <div *ngIf="reviewsLoading" class="reviews-loading">
          <mat-spinner diameter="28"></mat-spinner>
        </div>

        <ng-container *ngIf="!reviewsLoading">
          <div *ngIf="!ratingSummary || ratingSummary.totalReviews === 0" class="reviews-empty">
            <mat-icon>rate_review</mat-icon>
            <p>{{ 'PROFILE.NO_REVIEWS_PRO' | translate }}</p>
          </div>

          <ng-container *ngIf="ratingSummary && ratingSummary.totalReviews > 0">
            <div class="rating-summary">
              <div class="rating-avg-block">
                <div class="rating-avg-num">{{ ratingSummary.averageRating | number:'1.1-1' }}</div>
                <div class="rating-stars-row">
                  <span *ngFor="let i of starsArray" class="star" [class.filled]="starFilled(ratingSummary.averageRating, i - 1)">\u2605</span>
                </div>
                <div class="rating-count">{{ ratingSummary.totalReviews }} review{{ ratingSummary.totalReviews !== 1 ? 's' : '' }}</div>
              </div>
              <div class="rating-breakdown">
                <div *ngFor="let s of [5,4,3,2,1]" class="breakdown-row">
                  <span class="bd-label">{{ s }}\u2605</span>
                  <div class="bd-bar-wrap">
                    <div class="bd-bar-fill" [style.width]="ratingBarWidth(ratingSummary.ratingBreakdown[s - 1] || 0, ratingSummary.totalReviews)"></div>
                  </div>
                  <span class="bd-count">{{ ratingSummary.ratingBreakdown[s - 1] || 0 }}</span>
                </div>
              </div>
            </div>

            <div class="reviews-list" *ngIf="reviews.length > 0">
              <h4 class="reviews-list-title">{{ 'PROFILE.RECENT_REVIEWS' | translate }}</h4>
              <div *ngFor="let review of reviews" class="review-card">
                <div class="review-header">
                  <span *ngFor="let i of starsArray" class="star sm" [class.filled]="starFilled(review.rating, i - 1)">\u2605</span>
                  <span class="review-author">{{ review.reviewerName }}</span>
                  <span class="review-job" *ngIf="review.jobTitle">\xB7 {{ review.jobTitle }}</span>
                  <span class="review-date">{{ review.createdAt | date:'d MMM yyyy' }}</span>
                </div>
                <p *ngIf="review.comment" class="review-comment">{{ review.comment }}</p>
              </div>
              <button *ngIf="reviews.length < reviewsTotal" class="btn-load-more" (click)="loadMoreReviews()">
                {{ 'PROFILE.LOAD_MORE' | translate }}
              </button>
            </div>
          </ng-container>
        </ng-container>
      </div>
    </ng-container>

    <!-- Edit Form -->
    <div class="profile-card edit-card" *ngIf="isEditing">
      <div class="alert success-alert" *ngIf="successMessage">
        <mat-icon>check_circle</mat-icon><span>{{ successMessage }}</span>
      </div>
      <div class="alert error-alert" *ngIf="errorMessage">
        <mat-icon>error</mat-icon><span>{{ errorMessage }}</span>
      </div>

      <form #proForm="ngForm" (ngSubmit)="updateProfile(proForm)">
        <input type="hidden" name="id" [(ngModel)]="pro.id" />

        <h4 class="form-section-label">{{ 'PROFILE.BUSINESS' | translate }}</h4>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.PRO_NAME' | translate }}</label>
            <input type="text" name="proName" [(ngModel)]="pro.proName" required placeholder="Your name" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.BUSINESS_NAME' | translate }}</label>
            <input type="text" name="businessName" [(ngModel)]="pro.businessName" required placeholder="Business name" />
          </div>
        </div>
        <div class="form-group half-width">
          <label>{{ 'PROFILE.SERVICE_RADIUS' | translate }} (km)</label>
          <input type="number" name="serviceRadiusKm" [(ngModel)]="pro.serviceRadiusKm" min="1" max="500" placeholder="e.g. 25" />
          <span class="field-hint">{{ 'PROFILE.SERVICE_RADIUS_HINT' | translate }}</span>
        </div>

        <h4 class="form-section-label">{{ 'PROFILE.CONTACT' | translate }}</h4>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.EMAIL' | translate }}</label>
            <input type="email" name="email" [(ngModel)]="pro.email" required placeholder="Email address" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.PHONE' | translate }}</label>
            <input type="text" name="phoneNumber" [(ngModel)]="pro.phoneNumber" placeholder="Phone number" />
          </div>
        </div>

        <h4 class="form-section-label">{{ 'PROFILE.ADDRESS' | translate }}</h4>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.HOUSE_NUMBER' | translate }}</label>
            <input type="text" name="houseNameNumber" [(ngModel)]="pro.houseNameNumber" placeholder="e.g. 42 or Shop 7" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.STREET' | translate }}</label>
            <input type="text" name="street1" [(ngModel)]="pro.street1" placeholder="Street name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>City</label>
            <input type="text" name="city" [(ngModel)]="pro.city" placeholder="City" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.STATE_PROVINCE' | translate }}</label>
            <input type="text" name="state" [(ngModel)]="pro.state" placeholder="State" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.DISTRICT' | translate }}</label>
            <select *ngIf="proDistrictOptions.length > 0" name="district" [(ngModel)]="pro.district">
              <option value="">{{ 'PROFILE.SELECT_DISTRICT' | translate }}</option>
              <option *ngFor="let d of proDistrictOptions" [value]="d">{{ d }}</option>
            </select>
            <input *ngIf="proDistrictOptions.length === 0" type="text" name="district" [(ngModel)]="pro.district" placeholder="District" />
          </div>
          <div class="form-group">
            <label>{{ 'PROFILE.COUNTRY' | translate }}</label>
            <input type="text" name="country" [(ngModel)]="pro.country" placeholder="Country" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>{{ 'PROFILE.POSTAL_CODE' | translate }}</label>
            <input type="text" name="zipPostalCode" [(ngModel)]="pro.zipPostalCode" placeholder="ZIP / PIN" />
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-success" [disabled]="!proForm.valid || isLoading">
            <mat-icon>save</mat-icon>{{ isLoading ? ('PROFILE.SAVING' | translate) : ('PROFILE.SAVE_CHANGES' | translate) }}
          </button>
          <button type="button" class="btn btn-cancel" (click)="cancelEdit()">
            <mat-icon>close</mat-icon> {{ 'PROFILE.CANCEL' | translate }}
          </button>
        </div>
      </form>
    </div>

  </ng-container>

</div>
`, styles: ["/* src/app/features/profile/profile/profile.scss */\n.profile-page {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 32px 16px 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profile-card {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 28px 32px;\n}\n@media (max-width: 600px) {\n  .profile-card {\n    padding: 20px 16px;\n  }\n}\n.hero-card {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n@media (max-width: 600px) {\n  .hero-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n.avatar-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-initials {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: -1px;\n}\n.avatar-initials.pro {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.active-dot {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #10b981;\n  border: 2px solid #fff;\n}\n.hero-info {\n  flex: 1;\n}\n.hero-info h1 {\n  margin: 0 0 4px;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.hero-info .hero-sub {\n  margin: 0 0 12px;\n  font-size: 14px;\n  color: #6b7280;\n}\n.hero-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #f3f4f6;\n  color: #374151;\n}\n.meta-chip mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.meta-chip.pro-chip {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(240, 147, 251, 0.1333333333),\n      rgba(245, 87, 108, 0.1333333333));\n  color: #c026d3;\n}\n.meta-chip.verify-chip.verified {\n  background: #d1fae5;\n  color: #065f46;\n}\n.meta-chip.verify-chip.unverified {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.edit-btn {\n  margin-left: auto;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .edit-btn {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n.sections-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 680px) {\n  .sections-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.info-card {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.info-card.full-width {\n  grid-column: 1/-1;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-title mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 500px) {\n  .field-row {\n    grid-template-columns: 1fr;\n  }\n}\n.field-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.field-value {\n  font-size: 15px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.contact-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.address-text {\n  font-size: 15px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.badge.badge-ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warn {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.verif-panel {\n  margin-top: 8px;\n  background: #f8faff;\n  border: 1px solid #c7d4f5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.verif-panel p {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 10px;\n}\n.verif-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.code-input {\n  width: 110px;\n  padding: 8px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 18px;\n  letter-spacing: 4px;\n  text-align: center;\n}\n.code-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.error-text {\n  font-size: 12px;\n  color: #dc2626;\n  display: block;\n  margin-top: 6px;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link.small {\n  font-size: 12px;\n  margin-top: 6px;\n  display: block;\n}\n.btn-link:hover {\n  color: #4f46e5;\n}\n.muted-text {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.form-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.form-section-label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin: 24px 0 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.form-section-label:first-of-type {\n  margin-top: 0;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.form-group.half-width {\n  max-width: 280px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-group input {\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #f9fafb;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group input::placeholder {\n  color: #d1d5db;\n}\n.field-hint {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 28px;\n  flex-wrap: wrap;\n}\n@media (max-width: 500px) {\n  .form-actions {\n    flex-direction: column;\n  }\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn.btn-success {\n  background: #10b981;\n  color: #fff;\n}\n.btn.btn-success:hover:not(:disabled) {\n  background: #059669;\n}\n.btn.btn-secondary {\n  background: #f3f4f6;\n  color: #374151;\n  border: 1.5px solid #d1d5db;\n}\n.btn.btn-secondary:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.btn.btn-cancel {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1.5px solid #e5e7eb;\n}\n.btn.btn-cancel:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.btn.btn-sm {\n  padding: 6px 12px;\n  font-size: 13px;\n}\n.reviews-card {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.reviews-loading {\n  display: flex;\n  justify-content: center;\n  padding: 1.5rem 0;\n}\n.reviews-empty {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  color: #9ca3af;\n  padding: 0.25rem 0;\n}\n.reviews-empty mat-icon {\n  font-size: 24px;\n  width: 24px;\n  height: 24px;\n  color: #d1d5db;\n}\n.reviews-empty p {\n  margin: 0;\n  font-size: 14px;\n}\n.rating-summary {\n  display: flex;\n  gap: 32px;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  margin-bottom: 24px;\n}\n.rating-avg-block {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  min-width: 80px;\n}\n.rating-avg-num {\n  font-size: 48px;\n  font-weight: 700;\n  color: #1f2937;\n  line-height: 1;\n}\n.rating-stars-row {\n  display: flex;\n  gap: 2px;\n}\n.rating-count {\n  font-size: 13px;\n  color: #6b7280;\n  white-space: nowrap;\n}\n.star {\n  color: #d1d5db;\n  font-size: 20px;\n  line-height: 1;\n}\n.star.filled {\n  color: #f59e0b;\n}\n.star.sm {\n  font-size: 15px;\n}\n.rating-breakdown {\n  flex: 1;\n  min-width: 160px;\n  display: flex;\n  flex-direction: column;\n  gap: 7px;\n}\n.breakdown-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.bd-label {\n  font-size: 12px;\n  color: #6b7280;\n  width: 24px;\n  flex-shrink: 0;\n}\n.bd-bar-wrap {\n  flex: 1;\n  height: 8px;\n  background: #f3f4f6;\n  border-radius: 4px;\n  overflow: hidden;\n}\n.bd-bar-fill {\n  height: 100%;\n  background: #f59e0b;\n  border-radius: 4px;\n  transition: width 0.4s ease;\n}\n.bd-count {\n  font-size: 12px;\n  color: #9ca3af;\n  width: 24px;\n  text-align: right;\n  flex-shrink: 0;\n}\n.reviews-list {\n  border-top: 1px solid #f0f0f0;\n  padding-top: 20px;\n}\n.reviews-list-title {\n  font-size: 12px;\n  font-weight: 700;\n  color: #374151;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  margin: 0 0 14px;\n}\n.review-card {\n  padding: 14px 0;\n  border-bottom: 1px solid #f3f4f6;\n}\n.review-card:last-of-type {\n  border-bottom: none;\n}\n.review-header {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n  margin-bottom: 5px;\n}\n.review-author {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.review-job {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.review-date {\n  font-size: 12px;\n  color: #9ca3af;\n  margin-left: auto;\n}\n.review-comment {\n  font-size: 14px;\n  color: #4b5563;\n  margin: 0;\n  line-height: 1.55;\n}\n.btn-load-more {\n  margin-top: 16px;\n  width: 100%;\n  padding: 10px;\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #667eea;\n  cursor: pointer;\n  font-family: inherit;\n  transition: background 0.15s;\n}\n.btn-load-more:hover {\n  background: #f0f0ff;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.alert mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.alert.success-alert {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert.success-alert mat-icon {\n  color: #10b981;\n}\n.alert.error-alert {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.alert.error-alert mat-icon {\n  color: #ef4444;\n}\n.alert.sm {\n  padding: 10px 14px;\n  font-size: 0.85rem;\n}\n.pro-hero-strip {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 16px 20px;\n}\n.pro-hero-strip .phs-avatar {\n  flex-shrink: 0;\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: var(--color-primary, #6366f1);\n  color: #fff;\n  font-size: 1.4rem;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  text-transform: uppercase;\n}\n.pro-hero-strip .phs-info {\n  flex: 1;\n  min-width: 0;\n}\n.pro-hero-strip .phs-info .phs-business-name {\n  font-size: 1.2rem;\n  font-weight: 800;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  background-clip: text;\n  margin-bottom: 2px;\n}\n.pro-hero-strip .phs-info .phs-name-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.pro-hero-strip .phs-info .phs-name {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #111827;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pro-hero-strip .phs-info .phs-name.phs-name--sub {\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #374151;\n}\n.pro-hero-strip .phs-info .phs-role-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 8px;\n  border-radius: 20px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n.pro-hero-strip .phs-info .phs-role-chip mat-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.pro-hero-strip .phs-info .phs-role-chip.chip-pro {\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  color: #fff;\n}\n.pro-hero-strip .phs-info .phs-role-chip.chip-admin {\n  background: #dc2626;\n  color: #fff;\n}\n.pro-hero-strip .phs-info .phs-role-chip.chip-user {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n.pro-hero-strip .phs-info .phs-sub {\n  font-size: 0.8rem;\n  color: #6b7280;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-top: 2px;\n}\n.pro-hero-strip.pro-hero-strip--pro .phs-avatar--pro {\n  width: 54px;\n  height: 54px;\n  font-size: 1.6rem;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n}\n.pro-hero-strip .phs-badge {\n  flex-shrink: 0;\n}\n.pro-hero-strip .phs-badge mat-icon {\n  font-size: 22px;\n}\n.pro-hero-strip .phs-badge.verified mat-icon {\n  color: #10b981;\n}\n.pro-hero-strip .phs-badge:not(.verified) mat-icon {\n  color: #f59e0b;\n}\n.pro-tab-bar {\n  display: flex;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 6px 8px;\n  gap: 4px;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  scrollbar-width: none;\n}\n.pro-tab-bar::-webkit-scrollbar {\n  display: none;\n}\n.pro-tab-bar .ptb-tab {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 4px;\n  padding: 10px 8px 8px;\n  border: none;\n  border-bottom: 3px solid transparent;\n  border-radius: 10px 10px 0 0;\n  background: transparent;\n  cursor: pointer;\n  font-size: 0.78rem;\n  font-weight: 500;\n  color: #6b7280;\n  transition:\n    color 0.15s,\n    border-color 0.15s,\n    background 0.15s;\n  white-space: nowrap;\n}\n.pro-tab-bar .ptb-tab mat-icon {\n  font-size: 20px;\n  height: 20px;\n  width: 20px;\n}\n.pro-tab-bar .ptb-tab:hover {\n  background: #f9fafb;\n  color: #374151;\n}\n.pro-tab-bar .ptb-tab.active {\n  color: var(--color-primary, #6366f1);\n  border-bottom-color: var(--color-primary, #6366f1);\n  background: #eef2ff;\n  font-weight: 700;\n}\n@media (max-width: 480px) {\n  .pro-tab-bar .ptb-tab {\n    font-size: 0.72rem;\n    padding: 10px 6px 8px;\n  }\n}\n.pro-section-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: -8px;\n}\n.pro-edit-header {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 14px 20px;\n}\n.pro-edit-header .pro-edit-title {\n  font-size: 1rem;\n  font-weight: 700;\n  color: #111827;\n}\n.bank-card .bank-card-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 16px;\n}\n.bank-card .bank-card-header .section-title {\n  margin-bottom: 0;\n}\n.bank-card .bank-loading {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.bank-card .bank-empty {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #b45309;\n  background: #fffbeb;\n  border: 1px solid #fde68a;\n  border-radius: 8px;\n  padding: 14px 16px;\n  font-size: 0.9rem;\n}\n.bank-card .bank-empty mat-icon {\n  color: #f59e0b;\n  font-size: 20px;\n}\n.bank-card .method-toggle {\n  display: flex;\n  gap: 10px;\n  margin-bottom: 4px;\n}\n.bank-card .method-toggle .method-btn {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 18px;\n  border: 2px solid #e5e7eb;\n  border-radius: 8px;\n  background: #f9fafb;\n  cursor: pointer;\n  font-size: 0.9rem;\n  color: #374151;\n  transition: border-color 0.15s, background 0.15s;\n}\n.bank-card .method-toggle .method-btn mat-icon {\n  font-size: 18px;\n}\n.bank-card .method-toggle .method-btn.active {\n  border-color: var(--color-primary, #6366f1);\n  background: #eef2ff;\n  color: var(--color-primary, #6366f1);\n  font-weight: 600;\n}\n.bank-card .bank-edit-form {\n  margin-top: 12px;\n}\n.earnings-card .payouts-loading {\n  display: flex;\n  justify-content: center;\n  padding: 16px 0;\n}\n.earnings-card .payouts-empty {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  color: #6b7280;\n  font-size: 0.9rem;\n  padding: 12px 0;\n}\n.earnings-card .payouts-empty mat-icon {\n  color: #9ca3af;\n}\n.earnings-card .payouts-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  margin-top: 12px;\n}\n.earnings-card .payout-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  background: #fafafa;\n  flex-wrap: wrap;\n}\n.earnings-card .payout-card-left {\n  flex: 1;\n  min-width: 160px;\n}\n.earnings-card .payout-card-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.earnings-card .payout-card .payout-job {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #111827;\n}\n.earnings-card .payout-card .payout-meta {\n  font-size: 0.8rem;\n  color: #6b7280;\n  margin-top: 2px;\n}\n.earnings-card .payout-card .payout-amount {\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #059669;\n}\n.earnings-card .payout-card .payout-status {\n  font-size: 0.75rem;\n  font-weight: 600;\n  padding: 3px 9px;\n  border-radius: 12px;\n  text-transform: capitalize;\n}\n.earnings-card .payout-card .payout-status.ps-pending {\n  background: #fef3c7;\n  color: #92400e;\n}\n.earnings-card .payout-card .payout-status.ps-processing {\n  background: #dbeafe;\n  color: #1e40af;\n}\n.earnings-card .payout-card .payout-status.ps-processed {\n  background: #d1fae5;\n  color: #065f46;\n}\n.earnings-card .payout-card .payout-status.ps-failed {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.earnings-card .payout-card .payout-status.ps-reversed {\n  background: #f3f4f6;\n  color: #374151;\n}\n.earnings-card .payout-card .payout-failure {\n  flex-basis: 100%;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.8rem;\n  color: #dc2626;\n  margin-top: 4px;\n}\n.earnings-card .payout-card .payout-failure mat-icon {\n  font-size: 16px;\n}\n/*# sourceMappingURL=profile.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: ProService }, { type: Auth }, { type: ChangeDetectorRef }, { type: VerificationService }, { type: ReviewService }, { type: PayoutService }, { type: ServiceAreaService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile/profile.ts", lineNumber: 25 });
})();

// src/app/features/profile/profile-routing-module.ts
var routes = [
  { path: "", component: ProfileComponent }
];
var ProfileRoutingModule = class _ProfileRoutingModule {
  static \u0275fac = function ProfileRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProfileRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/profile/profile-module.ts
var ProfileModule = class _ProfileModule {
  static \u0275fac = function ProfileModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProfileModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ProfileModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ProfileRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ProfileRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  ProfileModule
};
//# sourceMappingURL=chunk-MIXBHTBL.js.map

