import {
  MatIcon,
  MatIconModule
} from "./chunk-GE3YQJYL.js";
import "./chunk-CSFNIUM5.js";
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
  NumberValueAccessor,
  RequiredValidator,
  ɵNgNoValidate
} from "./chunk-QP32PFWE.js";
import {
  ApiService,
  Auth,
  StorageService
} from "./chunk-A4EHLAJD.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  RouterModule
} from "./chunk-NMZ5GJTW.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  NgIf,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-ANTPJ2CK.js";
import "./chunk-7WUTQBRG.js";

// src/app/core/services/user.ts
var UserService = class _UserService {
  api;
  storage;
  constructor(api, storage) {
    this.api = api;
    this.storage = storage;
  }
  getUser(userId) {
    return this.api.getUserById(`users/${userId}`);
  }
  updateUser(userData) {
    return this.api.put(`users/${userData.id}`, userData);
  }
  static \u0275fac = function UserService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserService)(\u0275\u0275inject(ApiService), \u0275\u0275inject(StorageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserService, factory: _UserService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }, { type: StorageService }], null);
})();

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
function ProfileComponent_ng_container_1_span_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17)(1, "mat-icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.user.city, "", ctx_r0.user.state ? ", " + ctx_r0.user.state : "", " ");
  }
}
function ProfileComponent_ng_container_1_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_button_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit Profile ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_1_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
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
function ProfileComponent_ng_container_1_div_20_button_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_div_20_button_32_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailVerification());
    });
    \u0275\u0275text(1, "Verify now");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_1_div_20_span_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Sending\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_1_div_20_div_34_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emailVerifError);
  }
}
function ProfileComponent_ng_container_1_div_20_div_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "p");
    \u0275\u0275text(2, "Enter the 6-digit code sent to ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 37)(6, "input", 38);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_20_div_34_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailVerifCode, $event) || (ctx_r0.emailVerifCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_div_20_div_34_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmEmailCode());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 40);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_div_20_div_34_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEmailVerification());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ProfileComponent_ng_container_1_div_20_div_34_span_11_Template, 2, 1, "span", 41);
    \u0275\u0275elementStart(12, "button", 42);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_div_20_div_34_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailVerification());
    });
    \u0275\u0275text(13, "Resend code");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.user.email);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailVerifCode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.emailVerifStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailVerifStep === "verifying" ? "Verifying\u2026" : "Confirm", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.emailVerifError);
  }
}
function ProfileComponent_ng_container_1_div_20_span_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("badge-ok", ctx_r0.user.isPhoneVerified)("badge-warn", !ctx_r0.user.isPhoneVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.user.isPhoneVerified ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.isPhoneVerified ? "Verified" : "Unverified", " ");
  }
}
function ProfileComponent_ng_container_1_div_20_div_42_ng_container_6_Template(rf, ctx) {
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
function ProfileComponent_ng_container_1_div_20_div_42_ng_container_7_ng_container_2_Template(rf, ctx) {
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
function ProfileComponent_ng_container_1_div_20_div_42_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProfileComponent_ng_container_1_div_20_div_42_ng_container_7_ng_container_2_Template, 2, 1, "ng-container", 3);
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
function ProfileComponent_ng_container_1_div_20_div_42_ng_container_8_ng_container_2_Template(rf, ctx) {
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
function ProfileComponent_ng_container_1_div_20_div_42_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProfileComponent_ng_container_1_div_20_div_42_ng_container_8_ng_container_2_Template, 2, 1, "ng-container", 3);
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
function ProfileComponent_ng_container_1_div_20_div_42_ng_container_9_Template(rf, ctx) {
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
function ProfileComponent_ng_container_1_div_20_div_42_ng_container_10_Template(rf, ctx) {
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
function ProfileComponent_ng_container_1_div_20_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3", 22)(2, "mat-icon");
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275template(6, ProfileComponent_ng_container_1_div_20_div_42_ng_container_6_Template, 2, 1, "ng-container", 3)(7, ProfileComponent_ng_container_1_div_20_div_42_ng_container_7_Template, 4, 2, "ng-container", 3)(8, ProfileComponent_ng_container_1_div_20_div_42_ng_container_8_Template, 3, 2, "ng-container", 3)(9, ProfileComponent_ng_container_1_div_20_div_42_ng_container_9_Template, 2, 1, "ng-container", 3)(10, ProfileComponent_ng_container_1_div_20_div_42_ng_container_10_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
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
function ProfileComponent_ng_container_1_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h3", 22)(3, "mat-icon");
    \u0275\u0275text(4, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Personal Information");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 23)(7, "div", 24)(8, "span", 25);
    \u0275\u0275text(9, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 26);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 24)(13, "span", 25);
    \u0275\u0275text(14, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 26);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(17, "div", 21)(18, "h3", 22)(19, "mat-icon");
    \u0275\u0275text(20, "contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21, " Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 24)(23, "span", 25);
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 27)(26, "span");
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "span", 28)(29, "mat-icon");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275template(32, ProfileComponent_ng_container_1_div_20_button_32_Template, 2, 0, "button", 29)(33, ProfileComponent_ng_container_1_div_20_span_33_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(34, ProfileComponent_ng_container_1_div_20_div_34_Template, 14, 5, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 24)(36, "span", 25);
    \u0275\u0275text(37, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 27)(39, "span");
    \u0275\u0275text(40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(41, ProfileComponent_ng_container_1_div_20_span_41_Template, 4, 6, "span", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(42, ProfileComponent_ng_container_1_div_20_div_42_Template, 11, 5, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.user.firstName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.user.lastName || "\u2014");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.user.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-ok", ctx_r0.user.isEmailVerified)("badge-warn", !ctx_r0.user.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.user.isEmailVerified ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.isEmailVerified ? "Verified" : "Unverified", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.user.isEmailVerified && ctx_r0.emailVerifStep === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailVerifStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.user.isEmailVerified && (ctx_r0.emailVerifStep === "code-sent" || ctx_r0.emailVerifStep === "verifying"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.user.phoneNumber || "Not set");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.user.houseNameNumber || ctx_r0.user.street1 || ctx_r0.user.city);
  }
}
function ProfileComponent_ng_container_1_div_21_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
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
function ProfileComponent_ng_container_1_div_21_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-icon");
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
function ProfileComponent_ng_container_1_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "h2", 47);
    \u0275\u0275text(2, "Edit Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProfileComponent_ng_container_1_div_21_div_3_Template, 5, 1, "div", 14)(4, ProfileComponent_ng_container_1_div_21_div_4_Template, 5, 1, "div", 48);
    \u0275\u0275elementStart(5, "form", 49, 0);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_ng_container_1_div_21_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r5);
      const profileForm_r6 = \u0275\u0275reference(6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateProfile(profileForm_r6));
    });
    \u0275\u0275elementStart(7, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.id, $event) || (ctx_r0.user.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4", 51);
    \u0275\u0275text(9, "Personal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 52)(11, "div", 53)(12, "label");
    \u0275\u0275text(13, "First Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.firstName, $event) || (ctx_r0.user.firstName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 53)(16, "label");
    \u0275\u0275text(17, "Last Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.lastName, $event) || (ctx_r0.user.lastName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "h4", 51);
    \u0275\u0275text(20, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 52)(22, "div", 53)(23, "label");
    \u0275\u0275text(24, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.email, $event) || (ctx_r0.user.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 53)(27, "label");
    \u0275\u0275text(28, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_29_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.phoneNumber, $event) || (ctx_r0.user.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "h4", 51);
    \u0275\u0275text(31, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "div", 52)(33, "div", 53)(34, "label");
    \u0275\u0275text(35, "House / Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "input", 58);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_36_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.houseNameNumber, $event) || (ctx_r0.user.houseNameNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 53)(38, "label");
    \u0275\u0275text(39, "Street");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_40_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.street1, $event) || (ctx_r0.user.street1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 52)(42, "div", 53)(43, "label");
    \u0275\u0275text(44, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_45_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.city, $event) || (ctx_r0.user.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(46, "div", 53)(47, "label");
    \u0275\u0275text(48, "State / Province");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_49_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.state, $event) || (ctx_r0.user.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(50, "div", 52)(51, "div", 53)(52, "label");
    \u0275\u0275text(53, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_54_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.country, $event) || (ctx_r0.user.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "div", 53)(56, "label");
    \u0275\u0275text(57, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_1_div_21_Template_input_ngModelChange_58_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.user.zipPostalCode, $event) || (ctx_r0.user.zipPostalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(59, "div", 64)(60, "button", 65)(61, "mat-icon");
    \u0275\u0275text(62, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(63);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "button", 66);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_1_div_21_Template_button_click_64_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275elementStart(65, "mat-icon");
    \u0275\u0275text(66, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(67, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const profileForm_r6 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.id);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.firstName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.lastName);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.phoneNumber);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.houseNameNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.street1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.state);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.country);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.user.zipPostalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !profileForm_r6.valid || ctx_r0.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.isLoading ? "Saving\u2026" : "Save Changes", " ");
  }
}
function ProfileComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8)(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275template(13, ProfileComponent_ng_container_1_span_13_Template, 4, 2, "span", 11);
    \u0275\u0275elementStart(14, "span", 12)(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, ProfileComponent_ng_container_1_button_18_Template, 4, 0, "button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, ProfileComponent_ng_container_1_div_19_Template, 5, 1, "div", 14)(20, ProfileComponent_ng_container_1_div_20_Template, 43, 15, "div", 15)(21, ProfileComponent_ng_container_1_div_21_Template, 68, 15, "div", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", (ctx_r0.user.firstName || "?")[0], "", (ctx_r0.user.lastName || "")[0]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.user.firstName, " ", ctx_r0.user.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Member since ", \u0275\u0275pipeBind2(11, 16, ctx_r0.user.createdAt, "MMM yyyy"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.user.city);
    \u0275\u0275advance();
    \u0275\u0275classProp("verified", ctx_r0.user.isEmailVerified)("unverified", !ctx_r0.user.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.user.isEmailVerified ? "verified" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.user.isEmailVerified ? "Email verified" : "Email unverified", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage && !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.isEditing);
  }
}
function ProfileComponent_ng_container_2_span_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17)(1, "mat-icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", ctx_r0.pro.city, "", ctx_r0.pro.state ? ", " + ctx_r0.pro.state : "", " ");
  }
}
function ProfileComponent_ng_container_2_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleEdit());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Edit Profile ");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_2_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
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
function ProfileComponent_ng_container_2_div_24_button_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_div_24_button_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailVerification());
    });
    \u0275\u0275text(1, "Verify now");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_2_div_24_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 35);
    \u0275\u0275text(1, "Sending\u2026");
    \u0275\u0275elementEnd();
  }
}
function ProfileComponent_ng_container_2_div_24_div_38_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.emailVerifError);
  }
}
function ProfileComponent_ng_container_2_div_24_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "p");
    \u0275\u0275text(2, "Enter the 6-digit code sent to ");
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 37)(6, "input", 70);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_24_div_38_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r0.emailVerifCode, $event) || (ctx_r0.emailVerifCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 39);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_div_24_div_38_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.confirmEmailCode());
    });
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 40);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_div_24_div_38_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.cancelEmailVerification());
    });
    \u0275\u0275text(10, "Cancel");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, ProfileComponent_ng_container_2_div_24_div_38_span_11_Template, 2, 1, "span", 41);
    \u0275\u0275elementStart(12, "button", 42);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_div_24_div_38_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.sendEmailVerification());
    });
    \u0275\u0275text(13, "Resend code");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.pro.email);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.emailVerifCode);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.emailVerifStep === "verifying");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.emailVerifStep === "verifying" ? "Verifying\u2026" : "Confirm", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.emailVerifError);
  }
}
function ProfileComponent_ng_container_2_div_24_span_45_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("badge-ok", ctx_r0.pro.isPhoneVerified)("badge-warn", !ctx_r0.pro.isPhoneVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pro.isPhoneVerified ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pro.isPhoneVerified ? "Verified" : "Unverified", " ");
  }
}
function ProfileComponent_ng_container_2_div_24_div_46_ng_container_6_Template(rf, ctx) {
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
function ProfileComponent_ng_container_2_div_24_div_46_ng_container_7_ng_container_2_Template(rf, ctx) {
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
function ProfileComponent_ng_container_2_div_24_div_46_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProfileComponent_ng_container_2_div_24_div_46_ng_container_7_ng_container_2_Template, 2, 1, "ng-container", 3);
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
function ProfileComponent_ng_container_2_div_24_div_46_ng_container_8_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(", ", ctx_r0.pro.state);
  }
}
function ProfileComponent_ng_container_2_div_24_div_46_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ProfileComponent_ng_container_2_div_24_div_46_ng_container_8_ng_container_2_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.pro.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.state);
  }
}
function ProfileComponent_ng_container_2_div_24_div_46_ng_container_9_Template(rf, ctx) {
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
function ProfileComponent_ng_container_2_div_24_div_46_ng_container_10_Template(rf, ctx) {
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
function ProfileComponent_ng_container_2_div_24_div_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44)(1, "h3", 22)(2, "mat-icon");
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 45);
    \u0275\u0275template(6, ProfileComponent_ng_container_2_div_24_div_46_ng_container_6_Template, 2, 1, "ng-container", 3)(7, ProfileComponent_ng_container_2_div_24_div_46_ng_container_7_Template, 4, 2, "ng-container", 3)(8, ProfileComponent_ng_container_2_div_24_div_46_ng_container_8_Template, 3, 2, "ng-container", 3)(9, ProfileComponent_ng_container_2_div_24_div_46_ng_container_9_Template, 2, 1, "ng-container", 3)(10, ProfileComponent_ng_container_2_div_24_div_46_ng_container_10_Template, 2, 1, "ng-container", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r0.pro.houseNameNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.city);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.country);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.zipPostalCode);
  }
}
function ProfileComponent_ng_container_2_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "div", 21)(2, "h3", 22)(3, "mat-icon");
    \u0275\u0275text(4, "store");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 24)(7, "span", 25);
    \u0275\u0275text(8, "Professional Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 24)(12, "span", 25);
    \u0275\u0275text(13, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 26);
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 24)(17, "span", 25);
    \u0275\u0275text(18, "Service Radius");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 26);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 21)(22, "h3", 22)(23, "mat-icon");
    \u0275\u0275text(24, "contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 24)(27, "span", 25);
    \u0275\u0275text(28, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 27)(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "span", 28)(33, "mat-icon");
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, ProfileComponent_ng_container_2_div_24_button_36_Template, 2, 0, "button", 29)(37, ProfileComponent_ng_container_2_div_24_span_37_Template, 2, 0, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275template(38, ProfileComponent_ng_container_2_div_24_div_38_Template, 14, 5, "div", 31);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 24)(40, "span", 25);
    \u0275\u0275text(41, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 27)(43, "span");
    \u0275\u0275text(44);
    \u0275\u0275elementEnd();
    \u0275\u0275template(45, ProfileComponent_ng_container_2_div_24_span_45_Template, 4, 6, "span", 32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(46, ProfileComponent_ng_container_2_div_24_div_46_Template, 11, 5, "div", 33);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(ctx_r0.pro.proName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.pro.businessName || "\u2014");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r0.pro.serviceRadiusKm ?? 25, " km");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r0.pro.email);
    \u0275\u0275advance();
    \u0275\u0275classProp("badge-ok", ctx_r0.pro.isEmailVerified)("badge-warn", !ctx_r0.pro.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pro.isEmailVerified ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pro.isEmailVerified ? "Verified" : "Unverified", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pro.isEmailVerified && ctx_r0.emailVerifStep === "idle");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.emailVerifStep === "sending");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.pro.isEmailVerified && (ctx_r0.emailVerifStep === "code-sent" || ctx_r0.emailVerifStep === "verifying"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r0.pro.phoneNumber || "Not set");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.pro.houseNameNumber || ctx_r0.pro.street1 || ctx_r0.pro.city);
  }
}
function ProfileComponent_ng_container_2_div_25_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "mat-icon");
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
function ProfileComponent_ng_container_2_div_25_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-icon");
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
function ProfileComponent_ng_container_2_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "h2", 47);
    \u0275\u0275text(2, "Edit Professional Profile");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ProfileComponent_ng_container_2_div_25_div_3_Template, 5, 1, "div", 14)(4, ProfileComponent_ng_container_2_div_25_div_4_Template, 5, 1, "div", 48);
    \u0275\u0275elementStart(5, "form", 49, 1);
    \u0275\u0275listener("ngSubmit", function ProfileComponent_ng_container_2_div_25_Template_form_ngSubmit_5_listener() {
      \u0275\u0275restoreView(_r10);
      const proForm_r11 = \u0275\u0275reference(6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.updateProfile(proForm_r11));
    });
    \u0275\u0275elementStart(7, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.id, $event) || (ctx_r0.pro.id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h4", 51);
    \u0275\u0275text(9, "Business");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 52)(11, "div", 53)(12, "label");
    \u0275\u0275text(13, "Professional Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 71);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.proName, $event) || (ctx_r0.pro.proName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 53)(16, "label");
    \u0275\u0275text(17, "Business Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 72);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.businessName, $event) || (ctx_r0.pro.businessName = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 73)(20, "label");
    \u0275\u0275text(21, "Service Radius (km)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "input", 74);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_22_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.serviceRadiusKm, $event) || (ctx_r0.pro.serviceRadiusKm = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "span", 75);
    \u0275\u0275text(24, "How far you're willing to travel to jobs");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "h4", 51);
    \u0275\u0275text(26, "Contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 52)(28, "div", 53)(29, "label");
    \u0275\u0275text(30, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 56);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.email, $event) || (ctx_r0.pro.email = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(32, "div", 53)(33, "label");
    \u0275\u0275text(34, "Phone");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "input", 57);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_35_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.phoneNumber, $event) || (ctx_r0.pro.phoneNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "h4", 51);
    \u0275\u0275text(37, "Address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 52)(39, "div", 53)(40, "label");
    \u0275\u0275text(41, "House / Number");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "input", 76);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_42_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.houseNameNumber, $event) || (ctx_r0.pro.houseNameNumber = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 53)(44, "label");
    \u0275\u0275text(45, "Street");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "input", 59);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_46_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.street1, $event) || (ctx_r0.pro.street1 = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(47, "div", 52)(48, "div", 53)(49, "label");
    \u0275\u0275text(50, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "input", 60);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_51_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.city, $event) || (ctx_r0.pro.city = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 53)(53, "label");
    \u0275\u0275text(54, "State / Province");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "input", 61);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.state, $event) || (ctx_r0.pro.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(56, "div", 52)(57, "div", 53)(58, "label");
    \u0275\u0275text(59, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(60, "input", 62);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_60_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.country, $event) || (ctx_r0.pro.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(61, "div", 53)(62, "label");
    \u0275\u0275text(63, "Postal Code");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(64, "input", 63);
    \u0275\u0275twoWayListener("ngModelChange", function ProfileComponent_ng_container_2_div_25_Template_input_ngModelChange_64_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.pro.zipPostalCode, $event) || (ctx_r0.pro.zipPostalCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(65, "div", 64)(66, "button", 65)(67, "mat-icon");
    \u0275\u0275text(68, "save");
    \u0275\u0275elementEnd();
    \u0275\u0275text(69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "button", 66);
    \u0275\u0275listener("click", function ProfileComponent_ng_container_2_div_25_Template_button_click_70_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.cancelEdit());
    });
    \u0275\u0275elementStart(71, "mat-icon");
    \u0275\u0275text(72, "close");
    \u0275\u0275elementEnd();
    \u0275\u0275text(73, " Cancel ");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const proForm_r11 = \u0275\u0275reference(6);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.successMessage);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.errorMessage);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.id);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.proName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.businessName);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.serviceRadiusKm);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.email);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.phoneNumber);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.houseNameNumber);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.street1);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.city);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.state);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.country);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.pro.zipPostalCode);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !proForm_r11.valid || ctx_r0.isLoading);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.isLoading ? "Saving\u2026" : "Save Changes", " ");
  }
}
function ProfileComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 68);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "span", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8)(7, "h1");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10)(13, "span", 69)(14, "mat-icon");
    \u0275\u0275text(15, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, "Professional");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ProfileComponent_ng_container_2_span_17_Template, 4, 2, "span", 11);
    \u0275\u0275elementStart(18, "span", 12)(19, "mat-icon");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, ProfileComponent_ng_container_2_button_22_Template, 4, 0, "button", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, ProfileComponent_ng_container_2_div_23_Template, 5, 1, "div", 14)(24, ProfileComponent_ng_container_2_div_24_Template, 47, 16, "div", 15)(25, ProfileComponent_ng_container_2_div_25_Template, 74, 16, "div", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((ctx_r0.pro.proName || "?")[0]);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.pro.proName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", ctx_r0.pro.businessName, " \xB7 Member since ", \u0275\u0275pipeBind2(11, 15, ctx_r0.pro.createdAt, "MMM yyyy"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r0.pro.city);
    \u0275\u0275advance();
    \u0275\u0275classProp("verified", ctx_r0.pro.isEmailVerified)("unverified", !ctx_r0.pro.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.pro.isEmailVerified ? "verified" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.pro.isEmailVerified ? "Email verified" : "Email unverified", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.successMessage && !ctx_r0.isEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isEditing);
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
  // Email verification flow
  emailVerifStep = "idle";
  emailVerifCode = "";
  emailVerifError = "";
  constructor(userService, proService, auth, cdr, verificationService) {
    this.userService = userService;
    this.proService = proService;
    this.auth = auth;
    this.cdr = cdr;
    this.verificationService = verificationService;
  }
  ngOnInit() {
    this.userType = this.auth.getUserType();
    this.loadProfile();
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
    this.isEditing = true;
  }
  cancelEdit() {
    this.isEditing = false;
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
        console.log("Profile updated successfully:", response);
        const updatedUser = response?.data || response;
        if (updatedUser) {
          this.user = updatedUser;
        }
        this.isEditing = false;
        this.isLoading = false;
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
  cancelEmailVerification() {
    this.emailVerifStep = "idle";
    this.emailVerifCode = "";
    this.emailVerifError = "";
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
    return new (__ngFactoryType__ || _ProfileComponent)(\u0275\u0275directiveInject(UserService), \u0275\u0275directiveInject(ProService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(VerificationService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ProfileComponent, selectors: [["app-profile"]], decls: 3, vars: 2, consts: [["profileForm", "ngForm"], ["proForm", "ngForm"], [1, "profile-page"], [4, "ngIf"], [1, "profile-card", "hero-card"], [1, "avatar-wrap"], [1, "avatar-initials"], [1, "active-dot"], [1, "hero-info"], [1, "hero-sub"], [1, "hero-meta"], ["class", "meta-chip", 4, "ngIf"], [1, "meta-chip", "verify-chip"], ["class", "btn btn-primary edit-btn", 3, "click", 4, "ngIf"], ["class", "alert success-alert", 4, "ngIf"], ["class", "sections-grid", 4, "ngIf"], ["class", "profile-card edit-card", 4, "ngIf"], [1, "meta-chip"], [1, "btn", "btn-primary", "edit-btn", 3, "click"], [1, "alert", "success-alert"], [1, "sections-grid"], [1, "profile-card", "info-card"], [1, "section-title"], [1, "field-row"], [1, "field"], [1, "field-label"], [1, "field-value"], [1, "field-value", "contact-row"], [1, "badge"], ["class", "btn-link", 3, "click", 4, "ngIf"], ["class", "muted-text", 4, "ngIf"], ["class", "verif-panel", 4, "ngIf"], ["class", "badge", 3, "badge-ok", "badge-warn", 4, "ngIf"], ["class", "profile-card info-card full-width", 4, "ngIf"], [1, "btn-link", 3, "click"], [1, "muted-text"], [1, "verif-panel"], [1, "verif-row"], ["type", "text", "maxlength", "6", "placeholder", "000000", "name", "ecUser", 1, "code-input", 3, "ngModelChange", "ngModel"], [1, "btn", "btn-success", "btn-sm", 3, "click", "disabled"], [1, "btn", "btn-cancel", "btn-sm", 3, "click"], ["class", "error-text", 4, "ngIf"], [1, "btn-link", "small", 3, "click"], [1, "error-text"], [1, "profile-card", "info-card", "full-width"], [1, "address-text"], [1, "profile-card", "edit-card"], [1, "form-title"], ["class", "alert error-alert", 4, "ngIf"], [3, "ngSubmit"], ["type", "hidden", "name", "id", 3, "ngModelChange", "ngModel"], [1, "form-section-label"], [1, "form-row"], [1, "form-group"], ["type", "text", "name", "firstName", "required", "", "placeholder", "First name", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "lastName", "required", "", "placeholder", "Last name", 3, "ngModelChange", "ngModel"], ["type", "email", "name", "email", "required", "", "placeholder", "Email address", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "phoneNumber", "placeholder", "Phone number", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "houseNameNumber", "placeholder", "e.g. 42 or Flat 3B", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "street1", "placeholder", "Street name", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "city", "placeholder", "City", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "state", "placeholder", "State", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "country", "placeholder", "Country", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "zipPostalCode", "placeholder", "ZIP / PIN", 3, "ngModelChange", "ngModel"], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-success", 3, "disabled"], ["type", "button", 1, "btn", "btn-cancel", 3, "click"], [1, "alert", "error-alert"], [1, "avatar-initials", "pro"], [1, "meta-chip", "pro-chip"], ["type", "text", "maxlength", "6", "placeholder", "000000", "name", "ecPro", 1, "code-input", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "proName", "required", "", "placeholder", "Your name", 3, "ngModelChange", "ngModel"], ["type", "text", "name", "businessName", "required", "", "placeholder", "Business name", 3, "ngModelChange", "ngModel"], [1, "form-group", "half-width"], ["type", "number", "name", "serviceRadiusKm", "min", "1", "max", "500", "placeholder", "e.g. 25", 3, "ngModelChange", "ngModel"], [1, "field-hint"], ["type", "text", "name", "houseNameNumber", "placeholder", "e.g. 42 or Shop 7", 3, "ngModelChange", "ngModel"]], template: function ProfileComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 2);
      \u0275\u0275template(1, ProfileComponent_ng_container_1_Template, 22, 19, "ng-container", 3)(2, ProfileComponent_ng_container_2_Template, 26, 18, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userType !== "Pro");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.userType === "Pro");
    }
  }, dependencies: [FormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, MaxLengthValidator, MinValidator, MaxValidator, NgModel, NgForm, CommonModule, NgIf, MatIconModule, MatIcon, DatePipe], styles: ["\n\n.profile-page[_ngcontent-%COMP%] {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 32px 16px 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profile-card[_ngcontent-%COMP%] {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 28px 32px;\n}\n@media (max-width: 600px) {\n  .profile-card[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n.hero-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n@media (max-width: 600px) {\n  .hero-card[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n.avatar-wrap[_ngcontent-%COMP%] {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: -1px;\n}\n.avatar-initials.pro[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.active-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #10b981;\n  border: 2px solid #fff;\n}\n.hero-info[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.hero-info[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.hero-info[_ngcontent-%COMP%]   .hero-sub[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 14px;\n  color: #6b7280;\n}\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.meta-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #f3f4f6;\n  color: #374151;\n}\n.meta-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.meta-chip.pro-chip[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(240, 147, 251, 0.1333333333),\n      rgba(245, 87, 108, 0.1333333333));\n  color: #c026d3;\n}\n.meta-chip.verify-chip.verified[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.meta-chip.verify-chip.unverified[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.edit-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .edit-btn[_ngcontent-%COMP%] {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n.sections-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 680px) {\n  .sections-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.info-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.info-card.full-width[_ngcontent-%COMP%] {\n  grid-column: 1/-1;\n}\n.section-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 500px) {\n  .field-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.field-label[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.field-value[_ngcontent-%COMP%] {\n  font-size: 15px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.contact-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.address-text[_ngcontent-%COMP%] {\n  font-size: 15px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.badge.badge-ok[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warn[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.verif-panel[_ngcontent-%COMP%] {\n  margin-top: 8px;\n  background: #f8faff;\n  border: 1px solid #c7d4f5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.verif-panel[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 10px;\n}\n.verif-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.code-input[_ngcontent-%COMP%] {\n  width: 110px;\n  padding: 8px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 18px;\n  letter-spacing: 4px;\n  text-align: center;\n}\n.code-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.error-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #dc2626;\n  display: block;\n  margin-top: 6px;\n}\n.btn-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link.small[_ngcontent-%COMP%] {\n  font-size: 12px;\n  margin-top: 6px;\n  display: block;\n}\n.btn-link[_ngcontent-%COMP%]:hover {\n  color: #4f46e5;\n}\n.muted-text[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.form-title[_ngcontent-%COMP%] {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.form-section-label[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin: 24px 0 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.form-section-label[_ngcontent-%COMP%]:first-of-type {\n  margin-top: 0;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .form-row[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.form-group.half-width[_ngcontent-%COMP%] {\n  max-width: 280px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #f9fafb;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: #d1d5db;\n}\n.field-hint[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  margin-top: 28px;\n  flex-wrap: wrap;\n}\n@media (max-width: 500px) {\n  .form-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn.btn-primary[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn.btn-primary[_ngcontent-%COMP%]:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn.btn-success[_ngcontent-%COMP%] {\n  background: #10b981;\n  color: #fff;\n}\n.btn.btn-success[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #059669;\n}\n.btn.btn-cancel[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1.5px solid #e5e7eb;\n}\n.btn.btn-cancel[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.btn.btn-sm[_ngcontent-%COMP%] {\n  padding: 6px 12px;\n  font-size: 13px;\n}\n.alert[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.alert.success-alert[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert.success-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.alert.error-alert[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.alert.error-alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n/*# sourceMappingURL=profile.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProfileComponent, [{
    type: Component,
    args: [{ selector: "app-profile", imports: [FormsModule, CommonModule, MatIconModule], template: `<div class="profile-page">

  <!-- \u2500\u2500 USER PROFILE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <ng-container *ngIf="userType !== 'Pro'">

    <!-- Header Card -->
    <div class="profile-card hero-card">
      <div class="avatar-wrap">
        <div class="avatar-initials">{{ (user.firstName || '?')[0] }}{{ (user.lastName || '')[0] }}</div>
        <span class="active-dot"></span>
      </div>
      <div class="hero-info">
        <h1>{{ user.firstName }} {{ user.lastName }}</h1>
        <p class="hero-sub">Member since {{ user.createdAt | date:'MMM yyyy' }}</p>
        <div class="hero-meta">
          <span class="meta-chip" *ngIf="user.city">
            <mat-icon>place</mat-icon>{{ user.city }}{{ user.state ? ', ' + user.state : '' }}
          </span>
          <span class="meta-chip verify-chip" [class.verified]="user.isEmailVerified" [class.unverified]="!user.isEmailVerified">
            <mat-icon>{{ user.isEmailVerified ? 'verified' : 'error_outline' }}</mat-icon>
            {{ user.isEmailVerified ? 'Email verified' : 'Email unverified' }}
          </span>
        </div>
      </div>
      <button class="btn btn-primary edit-btn" (click)="toggleEdit()" *ngIf="!isEditing">
        <mat-icon>edit</mat-icon> Edit Profile
      </button>
    </div>

    <!-- Alerts -->
    <div class="alert success-alert" *ngIf="successMessage && !isEditing">
      <mat-icon>check_circle</mat-icon><span>{{ successMessage }}</span>
    </div>

    <!-- Info Sections (view mode) -->
    <div class="sections-grid" *ngIf="!isEditing">
      <!-- Personal -->
      <div class="profile-card info-card">
        <h3 class="section-title"><mat-icon>person</mat-icon> Personal Information</h3>
        <div class="field-row">
          <div class="field">
            <span class="field-label">First Name</span>
            <span class="field-value">{{ user.firstName || '\u2014' }}</span>
          </div>
          <div class="field">
            <span class="field-label">Last Name</span>
            <span class="field-value">{{ user.lastName || '\u2014' }}</span>
          </div>
        </div>
      </div>

      <!-- Contact -->
      <div class="profile-card info-card">
        <h3 class="section-title"><mat-icon>contacts</mat-icon> Contact</h3>
        <div class="field">
          <span class="field-label">Email</span>
          <div class="field-value contact-row">
            <span>{{ user.email }}</span>
            <span class="badge" [class.badge-ok]="user.isEmailVerified" [class.badge-warn]="!user.isEmailVerified">
              <mat-icon>{{ user.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon>
              {{ user.isEmailVerified ? 'Verified' : 'Unverified' }}
            </span>
            <button *ngIf="!user.isEmailVerified && emailVerifStep === 'idle'" class="btn-link" (click)="sendEmailVerification()">Verify now</button>
            <span *ngIf="emailVerifStep === 'sending'" class="muted-text">Sending\u2026</span>
          </div>
          <!-- Code panel -->
          <div class="verif-panel" *ngIf="!user.isEmailVerified && (emailVerifStep === 'code-sent' || emailVerifStep === 'verifying')">
            <p>Enter the 6-digit code sent to <strong>{{ user.email }}</strong></p>
            <div class="verif-row">
              <input class="code-input" type="text" maxlength="6" placeholder="000000" [(ngModel)]="emailVerifCode" name="ecUser" />
              <button class="btn btn-success btn-sm" (click)="confirmEmailCode()" [disabled]="emailVerifStep === 'verifying'">
                {{ emailVerifStep === 'verifying' ? 'Verifying\u2026' : 'Confirm' }}
              </button>
              <button class="btn btn-cancel btn-sm" (click)="cancelEmailVerification()">Cancel</button>
            </div>
            <span class="error-text" *ngIf="emailVerifError">{{ emailVerifError }}</span>
            <button class="btn-link small" (click)="sendEmailVerification()">Resend code</button>
          </div>
        </div>
        <div class="field">
          <span class="field-label">Phone</span>
          <div class="field-value contact-row">
            <span>{{ user.phoneNumber || 'Not set' }}</span>
            <span *ngIf="user.phoneNumber" class="badge" [class.badge-ok]="user.isPhoneVerified" [class.badge-warn]="!user.isPhoneVerified">
              <mat-icon>{{ user.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon>
              {{ user.isPhoneVerified ? 'Verified' : 'Unverified' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Address -->
      <div class="profile-card info-card full-width" *ngIf="user.houseNameNumber || user.street1 || user.city">
        <h3 class="section-title"><mat-icon>location_on</mat-icon> Address</h3>
        <p class="address-text">
          <ng-container *ngIf="user.houseNameNumber">{{ user.houseNameNumber }}, </ng-container>
          <ng-container *ngIf="user.street1">{{ user.street1 }}<ng-container *ngIf="user.street2">, {{ user.street2 }}</ng-container>, </ng-container>
          <ng-container *ngIf="user.city">{{ user.city }}<ng-container *ngIf="user.state">, {{ user.state }}</ng-container></ng-container>
          <ng-container *ngIf="user.country">, {{ user.country }}</ng-container>
          <ng-container *ngIf="user.zipPostalCode"> \u2014 {{ user.zipPostalCode }}</ng-container>
        </p>
      </div>
    </div>

    <!-- Edit Form -->
    <div class="profile-card edit-card" *ngIf="isEditing">
      <h2 class="form-title">Edit Profile</h2>

      <div class="alert success-alert" *ngIf="successMessage">
        <mat-icon>check_circle</mat-icon><span>{{ successMessage }}</span>
      </div>
      <div class="alert error-alert" *ngIf="errorMessage">
        <mat-icon>error</mat-icon><span>{{ errorMessage }}</span>
      </div>

      <form #profileForm="ngForm" (ngSubmit)="updateProfile(profileForm)">
        <input type="hidden" name="id" [(ngModel)]="user.id" />

        <h4 class="form-section-label">Personal</h4>
        <div class="form-row">
          <div class="form-group">
            <label>First Name</label>
            <input type="text" name="firstName" [(ngModel)]="user.firstName" required placeholder="First name" />
          </div>
          <div class="form-group">
            <label>Last Name</label>
            <input type="text" name="lastName" [(ngModel)]="user.lastName" required placeholder="Last name" />
          </div>
        </div>

        <h4 class="form-section-label">Contact</h4>
        <div class="form-row">
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" [(ngModel)]="user.email" required placeholder="Email address" />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input type="text" name="phoneNumber" [(ngModel)]="user.phoneNumber" placeholder="Phone number" />
          </div>
        </div>

        <h4 class="form-section-label">Address</h4>
        <div class="form-row">
          <div class="form-group">
            <label>House / Number</label>
            <input type="text" name="houseNameNumber" [(ngModel)]="user.houseNameNumber" placeholder="e.g. 42 or Flat 3B" />
          </div>
          <div class="form-group">
            <label>Street</label>
            <input type="text" name="street1" [(ngModel)]="user.street1" placeholder="Street name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>City</label>
            <input type="text" name="city" [(ngModel)]="user.city" placeholder="City" />
          </div>
          <div class="form-group">
            <label>State / Province</label>
            <input type="text" name="state" [(ngModel)]="user.state" placeholder="State" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Country</label>
            <input type="text" name="country" [(ngModel)]="user.country" placeholder="Country" />
          </div>
          <div class="form-group">
            <label>Postal Code</label>
            <input type="text" name="zipPostalCode" [(ngModel)]="user.zipPostalCode" placeholder="ZIP / PIN" />
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-success" [disabled]="!profileForm.valid || isLoading">
            <mat-icon>save</mat-icon>{{ isLoading ? 'Saving\u2026' : 'Save Changes' }}
          </button>
          <button type="button" class="btn btn-cancel" (click)="cancelEdit()">
            <mat-icon>close</mat-icon> Cancel
          </button>
        </div>
      </form>
    </div>

  </ng-container>

  <!-- \u2500\u2500 PRO PROFILE \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <ng-container *ngIf="userType === 'Pro'">

    <!-- Header Card -->
    <div class="profile-card hero-card">
      <div class="avatar-wrap">
        <div class="avatar-initials pro">{{ (pro.proName || '?')[0] }}</div>
        <span class="active-dot"></span>
      </div>
      <div class="hero-info">
        <h1>{{ pro.proName }}</h1>
        <p class="hero-sub">{{ pro.businessName }} \xB7 Member since {{ pro.createdAt | date:'MMM yyyy' }}</p>
        <div class="hero-meta">
          <span class="meta-chip pro-chip"><mat-icon>engineering</mat-icon>Professional</span>
          <span class="meta-chip" *ngIf="pro.city">
            <mat-icon>place</mat-icon>{{ pro.city }}{{ pro.state ? ', ' + pro.state : '' }}
          </span>
          <span class="meta-chip verify-chip" [class.verified]="pro.isEmailVerified" [class.unverified]="!pro.isEmailVerified">
            <mat-icon>{{ pro.isEmailVerified ? 'verified' : 'error_outline' }}</mat-icon>
            {{ pro.isEmailVerified ? 'Email verified' : 'Email unverified' }}
          </span>
        </div>
      </div>
      <button class="btn btn-primary edit-btn" (click)="toggleEdit()" *ngIf="!isEditing">
        <mat-icon>edit</mat-icon> Edit Profile
      </button>
    </div>

    <!-- Alerts -->
    <div class="alert success-alert" *ngIf="successMessage && !isEditing">
      <mat-icon>check_circle</mat-icon><span>{{ successMessage }}</span>
    </div>

    <!-- Info Sections (view mode) -->
    <div class="sections-grid" *ngIf="!isEditing">
      <!-- Business Info -->
      <div class="profile-card info-card">
        <h3 class="section-title"><mat-icon>store</mat-icon> Business</h3>
        <div class="field">
          <span class="field-label">Professional Name</span>
          <span class="field-value">{{ pro.proName || '\u2014' }}</span>
        </div>
        <div class="field">
          <span class="field-label">Business Name</span>
          <span class="field-value">{{ pro.businessName || '\u2014' }}</span>
        </div>
        <div class="field">
          <span class="field-label">Service Radius</span>
          <span class="field-value">{{ pro.serviceRadiusKm ?? 25 }} km</span>
        </div>
      </div>

      <!-- Contact -->
      <div class="profile-card info-card">
        <h3 class="section-title"><mat-icon>contacts</mat-icon> Contact</h3>
        <div class="field">
          <span class="field-label">Email</span>
          <div class="field-value contact-row">
            <span>{{ pro.email }}</span>
            <span class="badge" [class.badge-ok]="pro.isEmailVerified" [class.badge-warn]="!pro.isEmailVerified">
              <mat-icon>{{ pro.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon>
              {{ pro.isEmailVerified ? 'Verified' : 'Unverified' }}
            </span>
            <button *ngIf="!pro.isEmailVerified && emailVerifStep === 'idle'" class="btn-link" (click)="sendEmailVerification()">Verify now</button>
            <span *ngIf="emailVerifStep === 'sending'" class="muted-text">Sending\u2026</span>
          </div>
          <div class="verif-panel" *ngIf="!pro.isEmailVerified && (emailVerifStep === 'code-sent' || emailVerifStep === 'verifying')">
            <p>Enter the 6-digit code sent to <strong>{{ pro.email }}</strong></p>
            <div class="verif-row">
              <input class="code-input" type="text" maxlength="6" placeholder="000000" [(ngModel)]="emailVerifCode" name="ecPro" />
              <button class="btn btn-success btn-sm" (click)="confirmEmailCode()" [disabled]="emailVerifStep === 'verifying'">
                {{ emailVerifStep === 'verifying' ? 'Verifying\u2026' : 'Confirm' }}
              </button>
              <button class="btn btn-cancel btn-sm" (click)="cancelEmailVerification()">Cancel</button>
            </div>
            <span class="error-text" *ngIf="emailVerifError">{{ emailVerifError }}</span>
            <button class="btn-link small" (click)="sendEmailVerification()">Resend code</button>
          </div>
        </div>
        <div class="field">
          <span class="field-label">Phone</span>
          <div class="field-value contact-row">
            <span>{{ pro.phoneNumber || 'Not set' }}</span>
            <span *ngIf="pro.phoneNumber" class="badge" [class.badge-ok]="pro.isPhoneVerified" [class.badge-warn]="!pro.isPhoneVerified">
              <mat-icon>{{ pro.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon>
              {{ pro.isPhoneVerified ? 'Verified' : 'Unverified' }}
            </span>
          </div>
        </div>
      </div>

      <!-- Address -->
      <div class="profile-card info-card full-width" *ngIf="pro.houseNameNumber || pro.street1 || pro.city">
        <h3 class="section-title"><mat-icon>location_on</mat-icon> Address</h3>
        <p class="address-text">
          <ng-container *ngIf="pro.houseNameNumber">{{ pro.houseNameNumber }}, </ng-container>
          <ng-container *ngIf="pro.street1">{{ pro.street1 }}<ng-container *ngIf="pro.street2">, {{ pro.street2 }}</ng-container>, </ng-container>
          <ng-container *ngIf="pro.city">{{ pro.city }}<ng-container *ngIf="pro.state">, {{ pro.state }}</ng-container></ng-container>
          <ng-container *ngIf="pro.country">, {{ pro.country }}</ng-container>
          <ng-container *ngIf="pro.zipPostalCode"> \u2014 {{ pro.zipPostalCode }}</ng-container>
        </p>
      </div>
    </div>

    <!-- Edit Form -->
    <div class="profile-card edit-card" *ngIf="isEditing">
      <h2 class="form-title">Edit Professional Profile</h2>

      <div class="alert success-alert" *ngIf="successMessage">
        <mat-icon>check_circle</mat-icon><span>{{ successMessage }}</span>
      </div>
      <div class="alert error-alert" *ngIf="errorMessage">
        <mat-icon>error</mat-icon><span>{{ errorMessage }}</span>
      </div>

      <form #proForm="ngForm" (ngSubmit)="updateProfile(proForm)">
        <input type="hidden" name="id" [(ngModel)]="pro.id" />

        <h4 class="form-section-label">Business</h4>
        <div class="form-row">
          <div class="form-group">
            <label>Professional Name</label>
            <input type="text" name="proName" [(ngModel)]="pro.proName" required placeholder="Your name" />
          </div>
          <div class="form-group">
            <label>Business Name</label>
            <input type="text" name="businessName" [(ngModel)]="pro.businessName" required placeholder="Business name" />
          </div>
        </div>
        <div class="form-group half-width">
          <label>Service Radius (km)</label>
          <input type="number" name="serviceRadiusKm" [(ngModel)]="pro.serviceRadiusKm" min="1" max="500" placeholder="e.g. 25" />
          <span class="field-hint">How far you're willing to travel to jobs</span>
        </div>

        <h4 class="form-section-label">Contact</h4>
        <div class="form-row">
          <div class="form-group">
            <label>Email</label>
            <input type="email" name="email" [(ngModel)]="pro.email" required placeholder="Email address" />
          </div>
          <div class="form-group">
            <label>Phone</label>
            <input type="text" name="phoneNumber" [(ngModel)]="pro.phoneNumber" placeholder="Phone number" />
          </div>
        </div>

        <h4 class="form-section-label">Address</h4>
        <div class="form-row">
          <div class="form-group">
            <label>House / Number</label>
            <input type="text" name="houseNameNumber" [(ngModel)]="pro.houseNameNumber" placeholder="e.g. 42 or Shop 7" />
          </div>
          <div class="form-group">
            <label>Street</label>
            <input type="text" name="street1" [(ngModel)]="pro.street1" placeholder="Street name" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>City</label>
            <input type="text" name="city" [(ngModel)]="pro.city" placeholder="City" />
          </div>
          <div class="form-group">
            <label>State / Province</label>
            <input type="text" name="state" [(ngModel)]="pro.state" placeholder="State" />
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>Country</label>
            <input type="text" name="country" [(ngModel)]="pro.country" placeholder="Country" />
          </div>
          <div class="form-group">
            <label>Postal Code</label>
            <input type="text" name="zipPostalCode" [(ngModel)]="pro.zipPostalCode" placeholder="ZIP / PIN" />
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-success" [disabled]="!proForm.valid || isLoading">
            <mat-icon>save</mat-icon>{{ isLoading ? 'Saving\u2026' : 'Save Changes' }}
          </button>
          <button type="button" class="btn btn-cancel" (click)="cancelEdit()">
            <mat-icon>close</mat-icon> Cancel
          </button>
        </div>
      </form>
    </div>

  </ng-container>

</div>
`, styles: ["/* src/app/features/profile/profile/profile.scss */\n.profile-page {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 32px 16px 64px;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n}\n.profile-card {\n  background: #fff;\n  border-radius: 16px;\n  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.07);\n  padding: 28px 32px;\n}\n@media (max-width: 600px) {\n  .profile-card {\n    padding: 20px 16px;\n  }\n}\n.hero-card {\n  display: flex;\n  align-items: center;\n  gap: 24px;\n}\n@media (max-width: 600px) {\n  .hero-card {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 16px;\n  }\n}\n.avatar-wrap {\n  position: relative;\n  flex-shrink: 0;\n}\n.avatar-initials {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  font-size: 28px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  letter-spacing: -1px;\n}\n.avatar-initials.pro {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.active-dot {\n  position: absolute;\n  bottom: 4px;\n  right: 4px;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: #10b981;\n  border: 2px solid #fff;\n}\n.hero-info {\n  flex: 1;\n}\n.hero-info h1 {\n  margin: 0 0 4px;\n  font-size: 24px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.hero-info .hero-sub {\n  margin: 0 0 12px;\n  font-size: 14px;\n  color: #6b7280;\n}\n.hero-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n}\n.meta-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 500;\n  background: #f3f4f6;\n  color: #374151;\n}\n.meta-chip mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.meta-chip.pro-chip {\n  background:\n    linear-gradient(\n      135deg,\n      rgba(240, 147, 251, 0.1333333333),\n      rgba(245, 87, 108, 0.1333333333));\n  color: #c026d3;\n}\n.meta-chip.verify-chip.verified {\n  background: #d1fae5;\n  color: #065f46;\n}\n.meta-chip.verify-chip.unverified {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.edit-btn {\n  margin-left: auto;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n@media (max-width: 600px) {\n  .edit-btn {\n    margin-left: 0;\n    width: 100%;\n  }\n}\n.sections-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n@media (max-width: 680px) {\n  .sections-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.info-card {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.info-card.full-width {\n  grid-column: 1/-1;\n}\n.section-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0 0 4px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.section-title mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.field-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 500px) {\n  .field-row {\n    grid-template-columns: 1fr;\n  }\n}\n.field-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9ca3af;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.field-value {\n  font-size: 15px;\n  font-weight: 500;\n  color: #1f2937;\n}\n.contact-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n}\n.address-text {\n  font-size: 15px;\n  color: #374151;\n  line-height: 1.6;\n  margin: 0;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.badge.badge-ok {\n  background: #d1fae5;\n  color: #065f46;\n}\n.badge.badge-warn {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.verif-panel {\n  margin-top: 8px;\n  background: #f8faff;\n  border: 1px solid #c7d4f5;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n.verif-panel p {\n  font-size: 13px;\n  color: #374151;\n  margin: 0 0 10px;\n}\n.verif-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.code-input {\n  width: 110px;\n  padding: 8px 10px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 18px;\n  letter-spacing: 4px;\n  text-align: center;\n}\n.code-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.15);\n}\n.error-text {\n  font-size: 12px;\n  color: #dc2626;\n  display: block;\n  margin-top: 6px;\n}\n.btn-link {\n  background: none;\n  border: none;\n  color: #667eea;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  padding: 0;\n  text-decoration: underline;\n}\n.btn-link.small {\n  font-size: 12px;\n  margin-top: 6px;\n  display: block;\n}\n.btn-link:hover {\n  color: #4f46e5;\n}\n.muted-text {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.form-title {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 24px;\n}\n.form-section-label {\n  font-size: 12px;\n  font-weight: 700;\n  color: #667eea;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  margin: 24px 0 12px;\n  padding-bottom: 8px;\n  border-bottom: 1px solid #e5e7eb;\n}\n.form-section-label:first-of-type {\n  margin-top: 0;\n}\n.form-row {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n@media (max-width: 600px) {\n  .form-row {\n    grid-template-columns: 1fr;\n  }\n}\n.form-group {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  margin-bottom: 4px;\n}\n.form-group.half-width {\n  max-width: 280px;\n}\n.form-group label {\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n}\n.form-group input {\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  background: #f9fafb;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group input:focus {\n  outline: none;\n  border-color: #667eea;\n  background: #fff;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group input::placeholder {\n  color: #d1d5db;\n}\n.field-hint {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.form-actions {\n  display: flex;\n  gap: 12px;\n  margin-top: 28px;\n  flex-wrap: wrap;\n}\n@media (max-width: 500px) {\n  .form-actions {\n    flex-direction: column;\n  }\n}\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 10px 20px;\n  border: none;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.btn.btn-primary {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n}\n.btn.btn-primary:hover:not(:disabled) {\n  opacity: 0.9;\n  transform: translateY(-1px);\n}\n.btn.btn-success {\n  background: #10b981;\n  color: #fff;\n}\n.btn.btn-success:hover:not(:disabled) {\n  background: #059669;\n}\n.btn.btn-cancel {\n  background: #f3f4f6;\n  color: #6b7280;\n  border: 1.5px solid #e5e7eb;\n}\n.btn.btn-cancel:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.btn.btn-sm {\n  padding: 6px 12px;\n  font-size: 13px;\n}\n.alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 16px;\n  border-radius: 10px;\n  font-size: 14px;\n  font-weight: 500;\n}\n.alert mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n  flex-shrink: 0;\n}\n.alert.success-alert {\n  background: #d1fae5;\n  color: #065f46;\n  border: 1px solid #a7f3d0;\n}\n.alert.success-alert mat-icon {\n  color: #10b981;\n}\n.alert.error-alert {\n  background: #fee2e2;\n  color: #991b1b;\n  border: 1px solid #fecaca;\n}\n.alert.error-alert mat-icon {\n  color: #ef4444;\n}\n/*# sourceMappingURL=profile.css.map */\n"] }]
  }], () => [{ type: UserService }, { type: ProService }, { type: Auth }, { type: ChangeDetectorRef }, { type: VerificationService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ProfileComponent, { className: "ProfileComponent", filePath: "src/app/features/profile/profile/profile.ts", lineNumber: 18 });
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
//# sourceMappingURL=chunk-SDPST2MD.js.map

