import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-BUIODQUP.js";
import {
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-36N2I3TM.js";
import {
  ProUsersService
} from "./chunk-7B4UUW6G.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-5P6744AO.js";
import "./chunk-KOQ7ZT3J.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-WDBRP2V4.js";
import {
  MatError,
  MatFormField,
  MatLabel
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
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  RadioControlValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-DLR4BDQH.js";
import {
  Auth
} from "./chunk-MJ2Z243I.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  Router
} from "./chunk-Z7MI56JG.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  Injectable,
  NgClass,
  NgForOf,
  NgIf,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/core/services/admin-users.service.ts
var AdminUsersService = class _AdminUsersService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // Search for users by email or name
  searchUsers(query) {
    return this.http.get(`${this.apiUrl}/admin/users/search`, {
      params: { query }
    });
  }
  // Search for pros by email or name
  searchPros(query) {
    return this.http.get(`${this.apiUrl}/admin/pros/search`, {
      params: { query }
    });
  }
  // Get user details
  getUserDetails(userId) {
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }
  // Get pro details
  getProDetails(proId) {
    return this.http.get(`${this.apiUrl}/pros/${proId}`);
  }
  // Get user's job history
  getUserJobs(userId) {
    return this.http.get(`${this.apiUrl}/jobs/users/${userId}/jobs`);
  }
  // Get pro's job history
  getProJobs(proId) {
    return this.http.get(`${this.apiUrl}/jobs/pros/${proId}/jobs`);
  }
  // Get user's messages/conversations
  getUserConversations(userId) {
    return this.http.get(`${this.apiUrl}/messages/conversations`, {
      params: { userId: userId.toString(), userType: "User" }
    });
  }
  // Get pro's messages/conversations
  getProConversations(proId) {
    return this.http.get(`${this.apiUrl}/messages/conversations`, {
      params: { userId: proId.toString(), userType: "Pro" }
    });
  }
  // Get messages for a specific conversation
  getMessages(userId1, userType1, userId2, userType2) {
    return this.http.get(`${this.apiUrl}/messages`, {
      params: {
        userId1: userId1.toString(),
        userType1,
        userId2: userId2.toString(),
        userType2
      }
    });
  }
  // Impersonate as a user
  impersonateUser(userId, userType) {
    return this.http.post(`${this.apiUrl}/admin/impersonate`, {
      targetUserId: userId,
      targetUserType: userType
    });
  }
  // Invite a new admin
  inviteAdmin(email) {
    console.log("inviteAdmin service called with email:", email);
    const body = { email };
    console.log("Sending request body:", body);
    return this.http.post(`${this.apiUrl}/admin/invite`, body);
  }
  // Get admin invitations
  getAdminInvitations(pendingOnly = true) {
    return this.http.get(`${this.apiUrl}/admin/invitations`, {
      params: { pendingOnly: pendingOnly.toString() }
    });
  }
  // Resend admin invitation
  resendAdminInvitation(invitationId) {
    return this.http.post(`${this.apiUrl}/admin/invitations/${invitationId}/resend`, {});
  }
  createUser(payload) {
    return this.http.post(`${this.apiUrl}/users`, payload);
  }
  createPro(payload) {
    return this.http.post(`${this.apiUrl}/pros`, payload);
  }
  geocodeBackfillPros() {
    return this.http.post(`${this.apiUrl}/admin/pros/geocode-backfill`, {});
  }
  geocodeBackfillUsers() {
    return this.http.post(`${this.apiUrl}/admin/users/geocode-backfill`, {});
  }
  updateProServiceRadius(proId, serviceRadiusKm) {
    return this.http.patch(`${this.apiUrl}/admin/pros/${proId}/service-radius`, { serviceRadiusKm });
  }
  getDisputes() {
    return this.http.get(`${this.apiUrl}/admin/disputes`);
  }
  resolveDispute(jobId, resolution, notes) {
    return this.http.post(`${this.apiUrl}/admin/jobs/${jobId}/completion/resolve`, { resolution, notes });
  }
  static \u0275fac = function AdminUsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminUsersService, factory: _AdminUsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/admin-users/admin-users.ts
function AdminUsersComponent_div_28_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275text(6, "Could not geocode");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.proBackfillResult.failed);
  }
}
function AdminUsersComponent_div_28_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "mat-icon");
    \u0275\u0275text(4, "my_location");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Pros Geocode Complete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function AdminUsersComponent_div_28_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.proBackfillResult = null);
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "span", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 34);
    \u0275\u0275text(14, "Pros found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "mat-icon");
    \u0275\u0275text(17, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 34);
    \u0275\u0275text(21, "Updated");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, AdminUsersComponent_div_28_div_1_div_22_Template, 7, 1, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.proBackfillResult.total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.proBackfillResult.updated);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.proBackfillResult.failed > 0);
  }
}
function AdminUsersComponent_div_28_div_2_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 33);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 34);
    \u0275\u0275text(6, "Could not geocode");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.userBackfillResult.failed);
  }
}
function AdminUsersComponent_div_28_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "div", 28)(2, "div", 29)(3, "mat-icon");
    \u0275\u0275text(4, "person_pin_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5, " Users Geocode Complete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 30);
    \u0275\u0275listener("click", function AdminUsersComponent_div_28_div_2_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.userBackfillResult = null);
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 31)(10, "div", 32)(11, "span", 33);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 34);
    \u0275\u0275text(14, "Users found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 35)(16, "mat-icon");
    \u0275\u0275text(17, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "span", 33);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 34);
    \u0275\u0275text(21, "Updated");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(22, AdminUsersComponent_div_28_div_2_div_22_Template, 7, 1, "div", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(ctx_r1.userBackfillResult.total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.userBackfillResult.updated);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.userBackfillResult.failed > 0);
  }
}
function AdminUsersComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, AdminUsersComponent_div_28_div_1_Template, 23, 3, "div", 26)(2, AdminUsersComponent_div_28_div_2_Template, 23, 3, "div", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.proBackfillResult);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.userBackfillResult);
  }
}
function AdminUsersComponent_div_30_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 43);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.disputes.length);
  }
}
function AdminUsersComponent_div_30_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 44);
    \u0275\u0275element(1, "mat-spinner", 45);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading disputes...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_30_div_7_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 56)(1, "strong");
    \u0275\u0275text(2, "Pro notes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", d_r5.completionNotes);
  }
}
function AdminUsersComponent_div_30_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47)(2, "span", 48);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 49);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 50)(8, "span")(9, "mat-icon");
    \u0275\u0275text(10, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span")(13, "mat-icon");
    \u0275\u0275text(14, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 51)(17, "strong");
    \u0275\u0275text(18, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdminUsersComponent_div_30_div_7_p_20_Template, 4, 1, "p", 52);
    \u0275\u0275elementStart(21, "div", 53)(22, "button", 54);
    \u0275\u0275listener("click", function AdminUsersComponent_div_30_div_7_Template_button_click_22_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resolveDispute(d_r5.jobId, "complete"));
    });
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Complete for Pro ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 55);
    \u0275\u0275listener("click", function AdminUsersComponent_div_30_div_7_Template_button_click_26_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.resolveDispute(d_r5.jobId, "refund"));
    });
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Refund & Reopen ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r5.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 10, d_r5.disputedAt, "MMM d, y"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" Consumer: ", d_r5.consumer == null ? null : d_r5.consumer.name, " (", d_r5.consumer == null ? null : d_r5.consumer.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Pro: ", (d_r5.pro == null ? null : d_r5.pro.businessName) || (d_r5.pro == null ? null : d_r5.pro.name), " (", d_r5.pro == null ? null : d_r5.pro.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", d_r5.disputeReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r5.completionNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r1.resolvingDisputeId === d_r5.jobId);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.resolvingDisputeId === d_r5.jobId);
  }
}
function AdminUsersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "h2", 39)(2, "mat-icon");
    \u0275\u0275text(3, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Open Disputes ");
    \u0275\u0275template(5, AdminUsersComponent_div_30_span_5_Template, 2, 1, "span", 40);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminUsersComponent_div_30_div_6_Template, 4, 0, "div", 41)(7, AdminUsersComponent_div_30_div_7_Template, 30, 13, "div", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r1.disputes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingDisputes);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.disputes);
  }
}
function AdminUsersComponent_div_47_div_2_div_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Email Verified ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_47_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function AdminUsersComponent_div_47_div_2_div_3_Template_div_click_0_listener() {
      const user_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectUser(user_r7));
    });
    \u0275\u0275elementStart(1, "div", 63)(2, "div", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275template(7, AdminUsersComponent_div_47_div_2_div_3_span_7_Template, 4, 0, "span", 67);
    \u0275\u0275elementStart(8, "span", 68);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r1.selectedUser == null ? null : ctx_r1.selectedUser.id) === user_r7.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r7.firstName, " ", user_r7.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r7.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r7.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined: ", ctx_r1.formatDate(user_r7.createdAt));
  }
}
function AdminUsersComponent_div_47_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminUsersComponent_div_47_div_2_div_3_Template, 10, 7, "div", 61);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Users (", ctx_r1.users.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.users);
  }
}
function AdminUsersComponent_div_47_div_3_div_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Email Verified ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_47_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function AdminUsersComponent_div_47_div_3_div_3_Template_div_click_0_listener() {
      const pro_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.selectPro(pro_r9));
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "div", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 75);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 76);
    \u0275\u0275template(9, AdminUsersComponent_div_47_div_3_div_3_span_9_Template, 4, 0, "span", 67);
    \u0275\u0275elementStart(10, "span", 77);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pro_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("selected", (ctx_r1.selectedPro == null ? null : ctx_r1.selectedPro.id) === pro_r9.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pro_r9.proName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r9.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r9.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pro_r9.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined: ", ctx_r1.formatDate(pro_r9.createdAt));
  }
}
function AdminUsersComponent_div_47_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminUsersComponent_div_47_div_3_div_3_Template, 12, 7, "div", 70);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Professionals (", ctx_r1.pros.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pros);
  }
}
function AdminUsersComponent_div_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275template(2, AdminUsersComponent_div_47_div_2_Template, 4, 2, "div", 59)(3, AdminUsersComponent_div_47_div_3_Template, 4, 2, "div", 59);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.users.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.pros.length > 0);
  }
}
function AdminUsersComponent_div_48_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r1.selectedUser.firstName, " ", ctx_r1.selectedUser.lastName);
  }
}
function AdminUsersComponent_div_48_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.proName);
  }
}
function AdminUsersComponent_div_48_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Profile ");
  }
}
function AdminUsersComponent_div_48_div_15_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4("", ctx_r1.selectedUser.street1, ", ", ctx_r1.selectedUser.city, ", ", ctx_r1.selectedUser.state, " ", ctx_r1.selectedUser.zipPostalCode);
  }
}
function AdminUsersComponent_div_48_div_15_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not provided");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "label");
    \u0275\u0275text(3, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 93)(7, "label");
    \u0275\u0275text(8, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 93)(12, "label");
    \u0275\u0275text(13, "Email Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 93)(18, "label");
    \u0275\u0275text(19, "Phone Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "mat-icon");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 93)(24, "label");
    \u0275\u0275text(25, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AdminUsersComponent_div_48_div_15_span_26_Template, 2, 4, "span", 80)(27, AdminUsersComponent_div_48_div_15_span_27_Template, 2, 0, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 93)(29, "label");
    \u0275\u0275text(30, "Joined:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedUser.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("verified", ctx_r1.selectedUser.isEmailVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedUser.isEmailVerified ? "check_circle" : "cancel");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("verified", ctx_r1.selectedUser.isPhoneVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedUser.isPhoneVerified ? "check_circle" : "cancel");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedUser.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedUser.street1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedUser.createdAt));
  }
}
function AdminUsersComponent_div_48_div_16_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4("", ctx_r1.selectedPro.street1, ", ", ctx_r1.selectedPro.city, ", ", ctx_r1.selectedPro.state, " ", ctx_r1.selectedPro.zipPostalCode);
  }
}
function AdminUsersComponent_div_48_div_16_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not provided");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_16_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 94);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_div_16_ng_container_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.startEditRadius());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r1.selectedPro.serviceRadiusKm ?? 25, " km");
  }
}
function AdminUsersComponent_div_48_div_16_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 95);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_div_48_div_16_ng_container_47_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r1.editRadiusValue, $event) || (ctx_r1.editRadiusValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 96);
    \u0275\u0275text(3, "km");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 97);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_div_16_ng_container_47_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.saveRadius());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 98);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_div_16_ng_container_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.cancelEditRadius());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.editRadiusValue);
  }
}
function AdminUsersComponent_div_48_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "div", 93)(2, "label");
    \u0275\u0275text(3, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 93)(7, "label");
    \u0275\u0275text(8, "Business:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 93)(12, "label");
    \u0275\u0275text(13, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 93)(17, "label");
    \u0275\u0275text(18, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 93)(22, "label");
    \u0275\u0275text(23, "Email Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span")(25, "mat-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 93)(28, "label");
    \u0275\u0275text(29, "Phone Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span")(31, "mat-icon");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 93)(34, "label");
    \u0275\u0275text(35, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_div_48_div_16_span_36_Template, 2, 4, "span", 80)(37, AdminUsersComponent_div_48_div_16_span_37_Template, 2, 0, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 93)(39, "label");
    \u0275\u0275text(40, "Joined:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 93)(44, "label");
    \u0275\u0275text(45, "Service Radius:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, AdminUsersComponent_div_48_div_16_ng_container_46_Template, 6, 1, "ng-container", 80)(47, AdminUsersComponent_div_48_div_16_ng_container_47_Template, 10, 1, "ng-container", 80);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.proName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.businessName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("verified", ctx_r1.selectedPro.isEmailVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.isEmailVerified ? "check_circle" : "cancel");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("verified", ctx_r1.selectedPro.isPhoneVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.selectedPro.isPhoneVerified ? "check_circle" : "cancel");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedPro.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedPro.street1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(ctx_r1.selectedPro.createdAt));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r1.isEditingRadius);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isEditingRadius);
  }
}
function AdminUsersComponent_div_48_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Job History ");
  }
}
function AdminUsersComponent_div_48_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "mat-spinner", 100);
    \u0275\u0275text(2, " Loading job history... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_21_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112)(1, "mat-icon");
    \u0275\u0275text(2, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bid Job");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_21_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r13.description);
  }
}
function AdminUsersComponent_div_48_div_21_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Assigned To:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r13.assignedProBusinessName);
  }
}
function AdminUsersComponent_div_48_div_21_div_1_div_31_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r13 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r13.jobPhases, " ");
  }
}
function AdminUsersComponent_div_48_div_21_div_1_div_31_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1, "No phases defined");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_21_div_1_div_31_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "strong");
    \u0275\u0275text(2, "Attachments:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 120);
    \u0275\u0275text(4, "Multiple files");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_48_div_21_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "strong");
    \u0275\u0275text(3, "Job Phases:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminUsersComponent_div_48_div_21_div_1_div_31_div_4_Template, 2, 1, "div", 116)(5, AdminUsersComponent_div_48_div_21_div_1_div_31_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_div_48_div_21_div_1_div_31_div_7_Template, 5, 0, "div", 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noPhases_r14 = \u0275\u0275reference(6);
    const job_r13 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", job_r13.jobPhases)("ngIfElse", noPhases_r14);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", job_r13.attachments);
  }
}
function AdminUsersComponent_div_48_div_21_div_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Updated:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r13 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(job_r13.updatedAt));
  }
}
function AdminUsersComponent_div_48_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "div", 105)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_div_48_div_21_div_1_span_5_Template, 4, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 107);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 108);
    \u0275\u0275template(9, AdminUsersComponent_div_48_div_21_div_1_div_9_Template, 5, 1, "div", 109);
    \u0275\u0275elementStart(10, "div")(11, "strong");
    \u0275\u0275text(12, "Category:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "strong");
    \u0275\u0275text(16, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20, "Budget:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "strong");
    \u0275\u0275text(24, "Timeline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "strong");
    \u0275\u0275text(28, "Posted by:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AdminUsersComponent_div_48_div_21_div_1_div_30_Template, 4, 1, "div", 80)(31, AdminUsersComponent_div_48_div_21_div_1_div_31_Template, 8, 3, "div", 110);
    \u0275\u0275elementStart(32, "div", 111)(33, "span")(34, "strong");
    \u0275\u0275text(35, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, AdminUsersComponent_div_48_div_21_div_1_span_37_Template, 4, 1, "span", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r13 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("job-in-progress", job_r13.status === "In Progress");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r13.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r13.isBid);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + job_r13.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r13.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r13.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (job_r13.category == null ? null : job_r13.category.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r13.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r13.budget);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r13.timeline);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r13.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r13.assignedProId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r13.status === "In Progress");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(job_r13.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r13.updatedAt);
  }
}
function AdminUsersComponent_div_48_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275template(1, AdminUsersComponent_div_48_div_21_div_1_Template, 38, 16, "div", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.userJobs);
  }
}
function AdminUsersComponent_div_48_div_22_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112)(1, "mat-icon");
    \u0275\u0275text(2, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bid Job");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_22_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r15.description);
  }
}
function AdminUsersComponent_div_48_div_22_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Assigned To:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r15.assignedProBusinessName);
  }
}
function AdminUsersComponent_div_48_div_22_div_1_div_31_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 118);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r15 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r15.jobPhases, " ");
  }
}
function AdminUsersComponent_div_48_div_22_div_1_div_31_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 119);
    \u0275\u0275text(1, "No phases defined");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_22_div_1_div_31_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "strong");
    \u0275\u0275text(2, "Attachments:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 120);
    \u0275\u0275text(4, "Multiple files");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_48_div_22_div_1_div_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "div", 115)(2, "strong");
    \u0275\u0275text(3, "Job Phases:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminUsersComponent_div_48_div_22_div_1_div_31_div_4_Template, 2, 1, "div", 116)(5, AdminUsersComponent_div_48_div_22_div_1_div_31_ng_template_5_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_div_48_div_22_div_1_div_31_div_7_Template, 5, 0, "div", 117);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const noPhases_r16 = \u0275\u0275reference(6);
    const job_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", job_r15.jobPhases)("ngIfElse", noPhases_r16);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", job_r15.attachments);
  }
}
function AdminUsersComponent_div_48_div_22_div_1_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Updated:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(job_r15.updatedAt));
  }
}
function AdminUsersComponent_div_48_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 103)(1, "div", 104)(2, "div", 105)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_div_48_div_22_div_1_span_5_Template, 4, 0, "span", 106);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 107);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 108);
    \u0275\u0275template(9, AdminUsersComponent_div_48_div_22_div_1_div_9_Template, 5, 1, "div", 109);
    \u0275\u0275elementStart(10, "div")(11, "strong");
    \u0275\u0275text(12, "Category:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "strong");
    \u0275\u0275text(16, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20, "Budget:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "strong");
    \u0275\u0275text(24, "Timeline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "strong");
    \u0275\u0275text(28, "Posted by:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AdminUsersComponent_div_48_div_22_div_1_div_30_Template, 4, 1, "div", 80)(31, AdminUsersComponent_div_48_div_22_div_1_div_31_Template, 8, 3, "div", 110);
    \u0275\u0275elementStart(32, "div", 111)(33, "span")(34, "strong");
    \u0275\u0275text(35, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(36);
    \u0275\u0275elementEnd();
    \u0275\u0275template(37, AdminUsersComponent_div_48_div_22_div_1_span_37_Template, 4, 1, "span", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r15 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("job-in-progress", job_r15.status === "In Progress");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r15.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r15.isBid);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + job_r15.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r15.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r15.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (job_r15.category == null ? null : job_r15.category.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r15.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r15.budget);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r15.timeline);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r15.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r15.assignedProId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r15.status === "In Progress");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(job_r15.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r15.updatedAt);
  }
}
function AdminUsersComponent_div_48_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101);
    \u0275\u0275template(1, AdminUsersComponent_div_48_div_22_div_1_Template, 38, 16, "div", 102);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.proJobs);
  }
}
function AdminUsersComponent_div_48_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "mat-icon");
    \u0275\u0275text(2, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No job history found");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_48_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Chat History ");
  }
}
function AdminUsersComponent_div_48_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "mat-spinner", 100);
    \u0275\u0275text(2, " Loading chat history... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_28_div_4_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(conversation_r18.lastMessageTime), " ");
  }
}
function AdminUsersComponent_div_48_div_28_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_div_28_div_4_div_1_Template_div_click_0_listener() {
      const conversation_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectConversation(conversation_r18));
    });
    \u0275\u0275elementStart(1, "div", 131)(2, "div", 132);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminUsersComponent_div_48_div_28_div_4_div_1_div_6_Template, 2, 1, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r1.selectedConversation == null ? null : ctx_r1.selectedConversation.userId) === conversation_r18.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r18.userName || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conversation_r18.userType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conversation_r18.lastMessageTime);
  }
}
function AdminUsersComponent_div_48_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275template(1, AdminUsersComponent_div_48_div_28_div_4_div_1_Template, 7, 5, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.userConversations);
  }
}
function AdminUsersComponent_div_48_div_28_div_5_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(conversation_r20.lastMessageTime), " ");
  }
}
function AdminUsersComponent_div_48_div_28_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 130);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_div_28_div_5_div_1_Template_div_click_0_listener() {
      const conversation_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.selectConversation(conversation_r20));
    });
    \u0275\u0275elementStart(1, "div", 131)(2, "div", 132);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 133);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminUsersComponent_div_48_div_28_div_5_div_1_div_6_Template, 2, 1, "div", 134);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r20 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r1.selectedConversation == null ? null : ctx_r1.selectedConversation.userId) === conversation_r20.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r20.userName || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conversation_r20.userType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conversation_r20.lastMessageTime);
  }
}
function AdminUsersComponent_div_48_div_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275template(1, AdminUsersComponent_div_48_div_28_div_5_div_1_Template, 7, 5, "div", 129);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.proConversations);
  }
}
function AdminUsersComponent_div_48_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 136)(1, "p");
    \u0275\u0275text(2, "No conversations");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_48_div_28_div_7_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 145)(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Read ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_28_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "div", 141);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 142);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 143);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_div_48_div_28_div_7_div_4_div_7_Template, 4, 0, "div", 144);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r21 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("ngClass", "message-" + (message_r21.senderType ? message_r21.senderType.toLowerCase() : "unknown"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r21.senderType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r21.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(message_r21.sentAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r21.isRead);
  }
}
function AdminUsersComponent_div_48_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 137)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 138);
    \u0275\u0275template(4, AdminUsersComponent_div_48_div_28_div_7_div_4_Template, 8, 5, "div", 139);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Messages - ", ctx_r1.selectedConversation.userName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r1.conversationMessages);
  }
}
function AdminUsersComponent_div_48_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "p");
    \u0275\u0275text(2, "Select a conversation to view messages");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_48_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 122)(1, "div", 123)(2, "h3");
    \u0275\u0275text(3, "Conversations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminUsersComponent_div_48_div_28_div_4_Template, 2, 1, "div", 124)(5, AdminUsersComponent_div_48_div_28_div_5_Template, 2, 1, "div", 124)(6, AdminUsersComponent_div_48_div_28_div_6_Template, 3, 0, "div", 125);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_div_48_div_28_div_7_Template, 5, 2, "div", 126)(8, AdminUsersComponent_div_48_div_28_div_8_Template, 3, 0, "div", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedUser && ctx_r1.userConversations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPro && ctx_r1.proConversations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedUser && ctx_r1.userConversations.length === 0 || ctx_r1.selectedPro && ctx_r1.proConversations.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedConversation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.selectedConversation && (ctx_r1.userConversations.length > 0 || ctx_r1.proConversations.length > 0));
  }
}
function AdminUsersComponent_div_48_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "mail_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Pending Invitations ");
  }
}
function AdminUsersComponent_div_48_div_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "mat-spinner", 100);
    \u0275\u0275text(2, " Loading invitations... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 158)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Used ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 159)(1, "mat-icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pending ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 160)(1, "mat-icon");
    \u0275\u0275text(2, "close_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Expired ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 161);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invitation_r22 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", invitation_r22.daysUntilExpiry, " days ");
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 162);
    \u0275\u0275text(1, "Expired");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 163);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invitation_r22 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.formatDate(invitation_r22.usedAt), " ");
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 164);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_div_33_tr_15_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const invitation_r22 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.resendInvitation(invitation_r22.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Resend ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 165);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_33_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275template(4, AdminUsersComponent_div_48_div_33_tr_15_span_4_Template, 4, 0, "span", 150)(5, AdminUsersComponent_div_48_div_33_tr_15_span_5_Template, 4, 0, "span", 151)(6, AdminUsersComponent_div_48_div_33_tr_15_span_6_Template, 4, 0, "span", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275template(10, AdminUsersComponent_div_48_div_33_tr_15_span_10_Template, 2, 1, "span", 153)(11, AdminUsersComponent_div_48_div_33_tr_15_span_11_Template, 2, 0, "span", 154)(12, AdminUsersComponent_div_48_div_33_tr_15_span_12_Template, 2, 1, "span", 155);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td");
    \u0275\u0275template(14, AdminUsersComponent_div_48_div_33_tr_15_button_14_Template, 4, 0, "button", 156)(15, AdminUsersComponent_div_48_div_33_tr_15_span_15_Template, 2, 0, "span", 157);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invitation_r22 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("expired", invitation_r22.isExpired);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invitation_r22.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", invitation_r22.isUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !invitation_r22.isUsed && !invitation_r22.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !invitation_r22.isUsed && invitation_r22.isExpired);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.formatDate(invitation_r22.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !invitation_r22.isExpired && !invitation_r22.isUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r22.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r22.isUsed);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !invitation_r22.isUsed && !invitation_r22.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r22.isUsed || invitation_r22.isExpired);
  }
}
function AdminUsersComponent_div_48_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 147)(1, "table", 148)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Expires In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, AdminUsersComponent_div_48_div_33_tr_15_Template, 16, 12, "tr", 149);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r1.adminInvitations);
  }
}
function AdminUsersComponent_div_48_div_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No pending invitations");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_48_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Relationships ");
  }
}
function AdminUsersComponent_div_48_div_38_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "mat-spinner", 171);
    \u0275\u0275text(2, " Loading linked clients... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_38_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "mat-icon");
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No users linked to this pro");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_48_div_38_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 174)(1, "mat-icon");
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 175)(4, "div", 176);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 177);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 178);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_div_38_div_12_div_1_Template_button_click_8_listener() {
      const u_r26 = \u0275\u0275restoreView(_r25).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.removeUserFromPro(u_r26.id));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "link_off");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r26 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r26.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r26.email, " \xA0\xB7\xA0 ID: ", u_r26.id);
  }
}
function AdminUsersComponent_div_48_div_38_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275template(1, AdminUsersComponent_div_48_div_38_div_12_div_1_Template, 11, 3, "div", 173);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.linkedUsers);
  }
}
function AdminUsersComponent_div_48_div_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 166)(2, "mat-form-field", 167)(3, "mat-label");
    \u0275\u0275text(4, "Add User by ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 168);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_div_48_div_38_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.addUserId, $event) || (ctx_r1.addUserId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 169);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_div_38_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.addUserToPro());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Link User ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminUsersComponent_div_48_div_38_div_10_Template, 3, 0, "div", 87)(11, AdminUsersComponent_div_48_div_38_div_11_Template, 5, 0, "div", 89)(12, AdminUsersComponent_div_48_div_38_div_12_Template, 2, 1, "div", 170);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.addUserId);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.addUserId);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingRelationships);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingRelationships && ctx_r1.linkedUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingRelationships && ctx_r1.linkedUsers.length > 0);
  }
}
function AdminUsersComponent_div_48_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 99);
    \u0275\u0275element(1, "mat-spinner", 171);
    \u0275\u0275text(2, " Loading linked pros... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_48_div_39_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121)(1, "mat-icon");
    \u0275\u0275text(2, "handshake");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No pros linked to this user");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_48_div_39_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174)(1, "mat-icon");
    \u0275\u0275text(2, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 175)(4, "div", 176);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 177);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r27 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r27.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r27.businessName, " \xA0\xB7\xA0 ", p_r27.email);
  }
}
function AdminUsersComponent_div_48_div_39_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172);
    \u0275\u0275template(1, AdminUsersComponent_div_48_div_39_div_3_div_1_Template, 8, 3, "div", 173);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.linkedPros);
  }
}
function AdminUsersComponent_div_48_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminUsersComponent_div_48_div_39_div_1_Template, 3, 0, "div", 87)(2, AdminUsersComponent_div_48_div_39_div_2_Template, 5, 0, "div", 89)(3, AdminUsersComponent_div_48_div_39_div_3_Template, 2, 1, "div", 170);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isLoadingRelationships);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingRelationships && ctx_r1.linkedPros.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingRelationships && ctx_r1.linkedPros.length > 0);
  }
}
function AdminUsersComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275template(2, AdminUsersComponent_div_48_h2_2_Template, 2, 2, "h2", 80)(3, AdminUsersComponent_div_48_h2_3_Template, 2, 1, "h2", 80);
    \u0275\u0275elementStart(4, "button", 81);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.impersonate());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Impersonate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 82);
    \u0275\u0275listener("click", function AdminUsersComponent_div_48_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearSelection());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "mat-tab-group", 83)(12, "mat-tab");
    \u0275\u0275template(13, AdminUsersComponent_div_48_ng_template_13_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(14, "div", 85);
    \u0275\u0275template(15, AdminUsersComponent_div_48_div_15_Template, 33, 11, "div", 86)(16, AdminUsersComponent_div_48_div_16_Template, 48, 15, "div", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-tab");
    \u0275\u0275template(18, AdminUsersComponent_div_48_ng_template_18_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(19, "div", 85);
    \u0275\u0275template(20, AdminUsersComponent_div_48_div_20_Template, 3, 0, "div", 87)(21, AdminUsersComponent_div_48_div_21_Template, 2, 1, "div", 88)(22, AdminUsersComponent_div_48_div_22_Template, 2, 1, "div", 88)(23, AdminUsersComponent_div_48_div_23_Template, 5, 0, "div", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-tab");
    \u0275\u0275template(25, AdminUsersComponent_div_48_ng_template_25_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(26, "div", 85);
    \u0275\u0275template(27, AdminUsersComponent_div_48_div_27_Template, 3, 0, "div", 87)(28, AdminUsersComponent_div_48_div_28_Template, 9, 5, "div", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-tab");
    \u0275\u0275template(30, AdminUsersComponent_div_48_ng_template_30_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(31, "div", 85);
    \u0275\u0275template(32, AdminUsersComponent_div_48_div_32_Template, 3, 0, "div", 87)(33, AdminUsersComponent_div_48_div_33_Template, 16, 1, "div", 91)(34, AdminUsersComponent_div_48_div_34_Template, 5, 0, "div", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "mat-tab");
    \u0275\u0275template(36, AdminUsersComponent_div_48_ng_template_36_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(37, "div", 85);
    \u0275\u0275template(38, AdminUsersComponent_div_48_div_38_Template, 13, 5, "div", 80)(39, AdminUsersComponent_div_48_div_39_Template, 4, 3, "div", 80);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.selectedUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPro);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r1.selectedUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedPro);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingDetails && ctx_r1.selectedUser && ctx_r1.userJobs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingDetails && ctx_r1.selectedPro && ctx_r1.proJobs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingDetails && (ctx_r1.selectedUser && ctx_r1.userJobs.length === 0 || ctx_r1.selectedPro && ctx_r1.proJobs.length === 0));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingDetails);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.isLoadingInvitations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingInvitations && ctx_r1.adminInvitations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isLoadingInvitations && ctx_r1.adminInvitations.length === 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r1.selectedPro);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.selectedUser);
  }
}
function AdminUsersComponent_div_49_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179)(1, "mat-icon");
    \u0275\u0275text(2, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Search for Users or Professionals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Enter a name or email address to find user accounts or professional offerings");
    \u0275\u0275elementEnd()();
  }
}
function CreateUserDialogComponent_mat_error_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateUserDialogComponent_mat_error_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateUserDialogComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateUserDialogComponent_mat_error_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Invalid email");
    \u0275\u0275elementEnd();
  }
}
function CreateUserDialogComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateUserDialogComponent_mat_error_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 6 characters");
    \u0275\u0275elementEnd();
  }
}
function CreateProDialogComponent_mat_error_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateProDialogComponent_mat_error_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateProDialogComponent_mat_error_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateProDialogComponent_mat_error_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Invalid email");
    \u0275\u0275elementEnd();
  }
}
function CreateProDialogComponent_mat_error_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Required");
    \u0275\u0275elementEnd();
  }
}
function CreateProDialogComponent_mat_error_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275text(1, "Minimum 6 characters");
    \u0275\u0275elementEnd();
  }
}
var _c0 = "\n\n.create-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 8px;\n  min-width: 380px;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n}\n.half-width[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=admin-users.css.map */";
var AdminUsersComponent = class _AdminUsersComponent {
  adminUsersService;
  auth;
  cdr;
  router;
  dialog;
  fb;
  proUsersService;
  snack;
  searchQuery = "";
  searchType = "user";
  isSearching = false;
  isLoadingDetails = false;
  users = [];
  pros = [];
  selectedUser = null;
  selectedPro = null;
  userJobs = [];
  proJobs = [];
  userConversations = [];
  proConversations = [];
  selectedConversation = null;
  conversationMessages = [];
  // Invitations tracking
  adminInvitations = [];
  isLoadingInvitations = false;
  // Geocode backfill
  isBackfillingPros = false;
  isBackfillingUsers = false;
  proBackfillResult = null;
  userBackfillResult = null;
  // Service radius inline edit
  isEditingRadius = false;
  editRadiusValue = 25;
  // Disputes
  disputes = [];
  isLoadingDisputes = false;
  resolvingDisputeId = null;
  // Pro-User relationships
  linkedUsers = [];
  linkedPros = [];
  isLoadingRelationships = false;
  addUserId = null;
  constructor(adminUsersService, auth, cdr, router, dialog, fb, proUsersService, snack) {
    this.adminUsersService = adminUsersService;
    this.auth = auth;
    this.cdr = cdr;
    this.router = router;
    this.dialog = dialog;
    this.fb = fb;
    this.proUsersService = proUsersService;
    this.snack = snack;
  }
  ngOnInit() {
    const userType = this.auth.getUserType();
    if (userType !== "Admin") {
      this.router.navigate(["/"]);
    } else {
      this.loadInvitations();
      this.loadDisputes();
    }
  }
  loadDisputes() {
    this.isLoadingDisputes = true;
    this.adminUsersService.getDisputes().subscribe({
      next: (disputes) => {
        this.disputes = disputes ?? [];
        this.isLoadingDisputes = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingDisputes = false;
        this.cdr.markForCheck();
      }
    });
  }
  resolveDispute(jobId, resolution) {
    this.resolvingDisputeId = jobId;
    this.adminUsersService.resolveDispute(jobId, resolution).subscribe({
      next: (result) => {
        this.disputes = this.disputes.filter((d) => d.jobId !== jobId);
        this.resolvingDisputeId = null;
        this.snack.open(result.message, "OK", { duration: 4e3, panelClass: "snack-success" });
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.resolvingDisputeId = null;
        const msg = err?.error?.message ?? "Failed to resolve dispute.";
        this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
        this.cdr.markForCheck();
      }
    });
  }
  loadInvitations() {
    this.isLoadingInvitations = true;
    this.adminUsersService.getAdminInvitations(true).subscribe({
      next: (invitations) => {
        this.adminInvitations = invitations || [];
        this.isLoadingInvitations = false;
      },
      error: (error) => {
        this.isLoadingInvitations = false;
      }
    });
  }
  resendInvitation(invitationId) {
    this.adminUsersService.resendAdminInvitation(invitationId).subscribe({
      next: (response) => {
        this.loadInvitations();
      },
      error: (error) => {
      }
    });
  }
  search() {
    if (!this.searchQuery || !this.searchQuery.trim()) {
      return;
    }
    this.isSearching = true;
    this.users = [];
    this.pros = [];
    if (this.searchType === "user") {
      this.adminUsersService.searchUsers(this.searchQuery).subscribe({
        next: (response) => {
          this.users = Array.isArray(response) ? response : response.$values || response.data || [];
          this.isSearching = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.isSearching = false;
          this.cdr.markForCheck();
        }
      });
    } else {
      this.adminUsersService.searchPros(this.searchQuery).subscribe({
        next: (response) => {
          this.pros = Array.isArray(response) ? response : response.$values || response.data || [];
          this.isSearching = false;
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.isSearching = false;
          this.cdr.markForCheck();
        }
      });
    }
  }
  selectUser(user) {
    this.selectedUser = user;
    this.selectedPro = null;
    this.linkedUsers = [];
    this.linkedPros = [];
    this.addUserId = null;
    this.loadUserDetails(user.id);
    this.loadRelationships("user", user.id);
  }
  selectPro(pro) {
    this.selectedPro = pro;
    this.selectedUser = null;
    this.linkedUsers = [];
    this.linkedPros = [];
    this.addUserId = null;
    this.loadProDetails(pro.id);
    this.loadRelationships("pro", pro.id);
  }
  loadUserDetails(userId) {
    this.isLoadingDetails = true;
    this.selectedConversation = null;
    this.conversationMessages = [];
    this.userJobs = [];
    this.userConversations = [];
    this.adminUsersService.getUserJobs(userId).subscribe({
      next: (response) => {
        this.userJobs = Array.isArray(response) ? response : response.$values || response.data || [];
        this.cdr.markForCheck();
      },
      error: (error) => {
      }
    });
    this.adminUsersService.getUserConversations(userId).subscribe({
      next: (response) => {
        this.userConversations = Array.isArray(response) ? response : response.$values || response.data || [];
        this.isLoadingDetails = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.isLoadingDetails = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadProDetails(proId) {
    this.isLoadingDetails = true;
    this.selectedConversation = null;
    this.conversationMessages = [];
    this.proJobs = [];
    this.proConversations = [];
    this.adminUsersService.getProJobs(proId).subscribe({
      next: (response) => {
        this.proJobs = Array.isArray(response) ? response : response.$values || response.data || [];
        this.cdr.markForCheck();
      },
      error: (error) => {
      }
    });
    this.adminUsersService.getProConversations(proId).subscribe({
      next: (response) => {
        this.proConversations = Array.isArray(response) ? response : response.$values || response.data || [];
        this.isLoadingDetails = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        this.isLoadingDetails = false;
        this.cdr.markForCheck();
      }
    });
  }
  selectConversation(conversation) {
    this.selectedConversation = conversation;
    const userType = this.selectedUser ? "User" : "Pro";
    const currentUserId = this.selectedUser ? this.selectedUser.id : this.selectedPro.id;
    this.adminUsersService.getMessages(currentUserId, userType, conversation.userId, conversation.userType).subscribe({
      next: (response) => {
        this.conversationMessages = Array.isArray(response) ? response : response.$values || response.data || [];
        this.cdr.markForCheck();
      },
      error: (error) => {
      }
    });
  }
  impersonate() {
    if (!this.selectedUser && !this.selectedPro)
      return;
    const userId = this.selectedUser ? this.selectedUser.id : this.selectedPro.id;
    const userType = this.selectedUser ? "User" : "Pro";
    const displayName = this.selectedUser ? `${this.selectedUser.firstName} ${this.selectedUser.lastName}` : this.selectedPro.proName;
    if (!confirm(`Impersonate ${displayName} (${userType})?

You will browse the app as this ${userType.toLowerCase()}. An "Exit Impersonation" banner will appear at the top of every page.`))
      return;
    this.adminUsersService.impersonateUser(userId, userType).subscribe({
      next: (data) => {
        this.auth.startImpersonation(data.token, data.userId, data.userType, displayName);
        this.router.navigate(["/"]);
      },
      error: (err) => {
        const msg = err?.error?.message ?? "Impersonation failed.";
        this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
      }
    });
  }
  getDisplayName(user, pro) {
    if (user) {
      return `${user.firstName} ${user.lastName}`;
    }
    if (pro) {
      return pro.proName;
    }
    return "";
  }
  formatDate(date) {
    if (!date) {
      return "";
    }
    return new Date(date).toLocaleDateString();
  }
  clearSelection() {
    this.selectedUser = null;
    this.selectedPro = null;
    this.userJobs = [];
    this.proJobs = [];
    this.userConversations = [];
    this.proConversations = [];
    this.selectedConversation = null;
    this.conversationMessages = [];
    this.linkedUsers = [];
    this.linkedPros = [];
    this.addUserId = null;
  }
  loadRelationships(type, id) {
    this.isLoadingRelationships = true;
    const req = type === "pro" ? this.proUsersService.getUsersUnderPro(id) : this.proUsersService.getProsForUser(id);
    req.subscribe({
      next: (res) => {
        const items = Array.isArray(res) ? res : res?.$values ?? [];
        if (type === "pro")
          this.linkedUsers = items;
        else
          this.linkedPros = items;
        this.isLoadingRelationships = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingRelationships = false;
        this.cdr.markForCheck();
      }
    });
  }
  addUserToPro() {
    if (!this.selectedPro || !this.addUserId)
      return;
    this.proUsersService.addUserToPro(this.selectedPro.id, this.addUserId).subscribe({
      next: () => {
        this.snack.open("User linked.", "OK", { duration: 3e3 });
        this.addUserId = null;
        this.loadRelationships("pro", this.selectedPro.id);
      },
      error: (err) => {
        const msg = err?.error?.message ?? "Failed to link user.";
        this.snack.open(msg, "OK", { duration: 4e3 });
      }
    });
  }
  removeUserFromPro(userId) {
    if (!this.selectedPro)
      return;
    this.proUsersService.removeUserFromPro(this.selectedPro.id, userId).subscribe({
      next: () => {
        this.linkedUsers = this.linkedUsers.filter((u) => u.id !== userId);
        this.snack.open("User unlinked.", "OK", { duration: 3e3 });
        this.cdr.markForCheck();
      },
      error: () => this.snack.open("Failed to unlink user.", "OK", { duration: 3e3 })
    });
  }
  startEditRadius() {
    this.editRadiusValue = this.selectedPro?.serviceRadiusKm ?? 25;
    this.isEditingRadius = true;
  }
  cancelEditRadius() {
    this.isEditingRadius = false;
  }
  saveRadius() {
    if (!this.selectedPro || !this.editRadiusValue)
      return;
    this.adminUsersService.updateProServiceRadius(this.selectedPro.id, this.editRadiusValue).subscribe({
      next: (result) => {
        this.selectedPro.serviceRadiusKm = result.serviceRadiusKm;
        this.isEditingRadius = false;
        this.snack.open(`Service radius updated to ${result.serviceRadiusKm} km.`, "OK", { duration: 3e3, panelClass: "snack-success" });
        this.cdr.markForCheck();
      },
      error: (err) => {
        const msg = err?.error?.message ?? "Failed to update service radius.";
        this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
      }
    });
  }
  runGeocodeBackfillPros() {
    this.isBackfillingPros = true;
    this.proBackfillResult = null;
    this.adminUsersService.geocodeBackfillPros().subscribe({
      next: (result) => {
        this.isBackfillingPros = false;
        this.proBackfillResult = result;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.isBackfillingPros = false;
        const msg = err?.error?.message ?? "Pro geocode backfill failed.";
        this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
        this.cdr.markForCheck();
      }
    });
  }
  runGeocodeBackfillUsers() {
    this.isBackfillingUsers = true;
    this.userBackfillResult = null;
    this.adminUsersService.geocodeBackfillUsers().subscribe({
      next: (result) => {
        this.isBackfillingUsers = false;
        this.userBackfillResult = result;
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.isBackfillingUsers = false;
        const msg = err?.error?.message ?? "User geocode backfill failed.";
        this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
        this.cdr.markForCheck();
      }
    });
  }
  inviteAdmin() {
    const dialogRef = this.dialog.open(InviteAdminDialogComponent, {
      width: "400px",
      data: {}
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result && result.email) {
        this.adminUsersService.inviteAdmin(result.email).subscribe({
          next: (response) => {
            alert("Invitation sent to " + result.email);
            this.cdr.markForCheck();
          },
          error: (error) => {
            alert("Failed to send invitation. Please try again.");
          }
        });
      }
    });
  }
  openCreateUser() {
    const dialogRef = this.dialog.open(CreateUserDialogComponent, { width: "480px" });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.adminUsersService.createUser(result).subscribe({
          next: (user) => {
            this.snack.open(`User "${user.firstName} ${user.lastName}" created successfully.`, "OK", {
              duration: 4e3,
              panelClass: "snack-success"
            });
          },
          error: (err) => {
            const msg = err?.error?.message ?? err?.error?.title ?? "Failed to create user.";
            this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
          }
        });
      }
    });
  }
  openCreatePro() {
    const dialogRef = this.dialog.open(CreateProDialogComponent, { width: "480px" });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.adminUsersService.createPro(result).subscribe({
          next: (pro) => {
            this.snack.open(`Professional "${pro.proName}" created successfully.`, "OK", {
              duration: 4e3,
              panelClass: "snack-success"
            });
          },
          error: (err) => {
            const msg = err?.error?.message ?? err?.error?.title ?? "Failed to create professional.";
            this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
          }
        });
      }
    });
  }
  static \u0275fac = function AdminUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersComponent)(\u0275\u0275directiveInject(AdminUsersService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(ProUsersService), \u0275\u0275directiveInject(MatSnackBar));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], decls: 50, vars: 17, consts: [["noPhases", ""], [1, "admin-users-container"], [1, "admin-header"], [1, "header-top"], [1, "header-actions"], [1, "create-btn", "create-user-btn", 3, "click"], [1, "create-btn", "create-pro-btn", 3, "click"], [1, "invite-admin-btn", 3, "click"], ["title", "Set lat/lon for pros missing map coordinates", 1, "create-btn", 3, "click", "disabled"], ["title", "Set lat/lon for users missing map coordinates", 1, "create-btn", 3, "click", "disabled"], ["class", "backfill-results-row", 4, "ngIf"], [1, "admin-content"], ["class", "disputes-section", 4, "ngIf"], [1, "search-section"], [1, "search-form", 3, "ngSubmit"], [1, "search-controls"], [1, "search-input-group"], ["type", "text", "name", "searchQuery", "placeholder", "Search by email or name...", 1, "search-input", 3, "ngModelChange", "ngModel"], ["type", "submit", 1, "search-btn", 3, "disabled"], [1, "search-type"], ["type", "radio", "value", "user", "name", "searchType", 3, "ngModelChange", "ngModel"], ["type", "radio", "value", "pro", "name", "searchType", 3, "ngModelChange", "ngModel"], ["class", "search-results", 4, "ngIf"], ["class", "details-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "backfill-results-row"], ["class", "backfill-result", 4, "ngIf"], [1, "backfill-result"], [1, "backfill-result-header"], [1, "backfill-result-title"], ["title", "Dismiss", 1, "backfill-dismiss", 3, "click"], [1, "backfill-stats"], [1, "backfill-stat", "backfill-stat-total"], [1, "stat-value"], [1, "stat-label"], [1, "backfill-stat", "backfill-stat-updated"], ["class", "backfill-stat backfill-stat-failed", 4, "ngIf"], [1, "backfill-stat", "backfill-stat-failed"], [1, "disputes-section"], [1, "disputes-title"], ["class", "dispute-count", 4, "ngIf"], ["class", "disputes-loading", 4, "ngIf"], ["class", "dispute-card", 4, "ngFor", "ngForOf"], [1, "dispute-count"], [1, "disputes-loading"], ["diameter", "28"], [1, "dispute-card"], [1, "dispute-card-header"], [1, "dispute-job-title"], [1, "dispute-date"], [1, "dispute-parties"], [1, "dispute-reason"], ["class", "dispute-completion-notes", 4, "ngIf"], [1, "dispute-actions"], ["mat-raised-button", "", "color", "accent", "title", "Mark the job as Completed in favour of the professional", 3, "click", "disabled"], ["mat-raised-button", "", "color", "warn", "title", "Reopen the job for rebidding in favour of the consumer", 3, "click", "disabled"], [1, "dispute-completion-notes"], [1, "search-results"], [1, "results-list"], ["class", "results-group", 4, "ngIf"], [1, "results-group"], ["class", "user-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "user-item", 3, "click"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "user-meta"], ["class", "badge badge-verified", 4, "ngIf"], [1, "user-date"], [1, "badge", "badge-verified"], ["class", "pro-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "pro-item", 3, "click"], [1, "pro-info"], [1, "pro-name"], [1, "pro-business"], [1, "pro-email"], [1, "pro-meta"], [1, "pro-date"], [1, "details-section"], [1, "details-header"], [4, "ngIf"], [1, "impersonate-btn", 3, "click"], [1, "clear-btn", 3, "click"], [1, "details-tabs"], ["mat-tab-label", ""], [1, "tab-content"], ["class", "profile-details", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "jobs-list", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["class", "chat-section", 4, "ngIf"], ["class", "invitations-table", 4, "ngIf"], [1, "profile-details"], [1, "detail-row"], ["title", "Edit service radius", 1, "inline-edit-btn", 3, "click"], ["type", "number", "min", "1", "max", "500", 1, "radius-input", 3, "ngModelChange", "ngModel"], [1, "radius-unit"], [1, "inline-save-btn", 3, "click"], [1, "inline-cancel-btn", 3, "click"], [1, "loading"], ["diameter", "40"], [1, "jobs-list"], ["class", "job-card", 3, "job-in-progress", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-header"], [1, "job-title-section"], ["class", "bid-badge", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "job-details"], ["class", "job-description", 4, "ngIf"], ["class", "in-progress-details", 4, "ngIf"], [1, "job-dates"], [1, "bid-badge"], [1, "job-description"], [1, "in-progress-details"], [1, "detail-section"], ["class", "phases-info", 4, "ngIf", "ngIfElse"], ["class", "detail-section", 4, "ngIf"], [1, "phases-info"], [1, "no-phases"], [1, "attachment-count"], [1, "no-data"], [1, "chat-section"], [1, "conversations-panel"], ["class", "conversations-list", 4, "ngIf"], ["class", "no-conversations", 4, "ngIf"], ["class", "messages-panel", 4, "ngIf"], ["class", "no-conversation-selected", 4, "ngIf"], [1, "conversations-list"], ["class", "conversation-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "conversation-item", 3, "click"], [1, "conversation-info"], [1, "conversation-name"], [1, "conversation-meta"], ["class", "conversation-time", 4, "ngIf"], [1, "conversation-time"], [1, "no-conversations"], [1, "messages-panel"], [1, "messages-list"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "message", 3, "ngClass"], [1, "message-sender"], [1, "message-content"], [1, "message-time"], ["class", "message-status", 4, "ngIf"], [1, "message-status"], [1, "no-conversation-selected"], [1, "invitations-table"], [1, "invitations-list"], [3, "expired", 4, "ngFor", "ngForOf"], ["class", "badge badge-used", 4, "ngIf"], ["class", "badge badge-pending", 4, "ngIf"], ["class", "badge badge-expired", 4, "ngIf"], ["class", "expires", 4, "ngIf"], ["class", "expired-text", 4, "ngIf"], ["class", "used-text", 4, "ngIf"], ["class", "action-btn resend-btn", "title", "Resend invitation email", 3, "click", 4, "ngIf"], ["class", "action-disabled", 4, "ngIf"], [1, "badge", "badge-used"], [1, "badge", "badge-pending"], [1, "badge", "badge-expired"], [1, "expires"], [1, "expired-text"], [1, "used-text"], ["title", "Resend invitation email", 1, "action-btn", "resend-btn", 3, "click"], [1, "action-disabled"], [1, "rel-add-row"], ["appearance", "outline", 1, "rel-input"], ["matInput", "", "type", "number", "placeholder", "User ID", "name", "addUserId", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["class", "rel-list", 4, "ngIf"], ["diameter", "36"], [1, "rel-list"], ["class", "rel-item", 4, "ngFor", "ngForOf"], [1, "rel-item"], [1, "rel-info"], [1, "rel-name"], [1, "rel-email"], ["mat-icon-button", "", "color", "warn", "title", "Remove", 3, "click"], [1, "empty-state"]], template: function AdminUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h1")(4, "mat-icon");
      \u0275\u0275text(5, "admin_panel_settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Admin Users Management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_8_listener() {
        return ctx.openCreateUser();
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10, "person_add_alt_1");
      \u0275\u0275elementEnd();
      \u0275\u0275text(11, " Create User ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "button", 6);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_12_listener() {
        return ctx.openCreatePro();
      });
      \u0275\u0275elementStart(13, "mat-icon");
      \u0275\u0275text(14, "engineering");
      \u0275\u0275elementEnd();
      \u0275\u0275text(15, " Create Pro ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "button", 7);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_16_listener() {
        return ctx.inviteAdmin();
      });
      \u0275\u0275elementStart(17, "mat-icon");
      \u0275\u0275text(18, "person_add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(19, " Invite Admin ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "button", 8);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_20_listener() {
        return ctx.runGeocodeBackfillPros();
      });
      \u0275\u0275elementStart(21, "mat-icon");
      \u0275\u0275text(22);
      \u0275\u0275elementEnd();
      \u0275\u0275text(23);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "button", 9);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_24_listener() {
        return ctx.runGeocodeBackfillUsers();
      });
      \u0275\u0275elementStart(25, "mat-icon");
      \u0275\u0275text(26);
      \u0275\u0275elementEnd();
      \u0275\u0275text(27);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(28, AdminUsersComponent_div_28_Template, 3, 2, "div", 10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 11);
      \u0275\u0275template(30, AdminUsersComponent_div_30_Template, 8, 3, "div", 12);
      \u0275\u0275elementStart(31, "div", 13)(32, "form", 14);
      \u0275\u0275listener("ngSubmit", function AdminUsersComponent_Template_form_ngSubmit_32_listener() {
        return ctx.search();
      });
      \u0275\u0275elementStart(33, "div", 15)(34, "div", 16)(35, "input", 17);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchQuery, $event) || (ctx.searchQuery = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(36, "button", 18)(37, "mat-icon");
      \u0275\u0275text(38);
      \u0275\u0275elementEnd();
      \u0275\u0275text(39);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "div", 19)(41, "label")(42, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchType, $event) || (ctx.searchType = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(43, " Users ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "label")(45, "input", 21);
      \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_Template_input_ngModelChange_45_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchType, $event) || (ctx.searchType = $event);
        return $event;
      });
      \u0275\u0275elementEnd();
      \u0275\u0275text(46, " Professionals ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(47, AdminUsersComponent_div_47_Template, 4, 2, "div", 22);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, AdminUsersComponent_div_48_Template, 40, 15, "div", 23)(49, AdminUsersComponent_div_49_Template, 7, 0, "div", 24);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(20);
      \u0275\u0275property("disabled", ctx.isBackfillingPros);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isBackfillingPros ? "hourglass_empty" : "my_location");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isBackfillingPros ? "Geocoding..." : "Geocode Pros", " ");
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isBackfillingUsers);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isBackfillingUsers ? "hourglass_empty" : "person_pin_circle");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isBackfillingUsers ? "Geocoding..." : "Geocode Users", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.proBackfillResult || ctx.userBackfillResult);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.disputes.length > 0 || ctx.isLoadingDisputes);
      \u0275\u0275advance(5);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchQuery);
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSearching || !ctx.searchQuery.trim());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.isSearching ? "hourglass_empty" : "search");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSearching ? "Searching..." : "Search", " ");
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchType);
      \u0275\u0275advance(3);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchType);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.users.length > 0 || ctx.pros.length > 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedUser || ctx.selectedPro);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.selectedUser && !ctx.selectedPro && ctx.users.length === 0 && ctx.pros.length === 0);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    FormsModule,
    \u0275NgNoValidate,
    DefaultValueAccessor,
    NumberValueAccessor,
    RadioControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MinValidator,
    MaxValidator,
    NgModel,
    NgForm,
    MatIconModule,
    MatIcon,
    MatTabsModule,
    MatTabLabel,
    MatTab,
    MatTabGroup,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatDialogModule,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    ReactiveFormsModule,
    MatSnackBarModule,
    DatePipe
  ], styles: ["\n\n.admin-users-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background-color: #f5f6fa;\n}\n.admin-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.admin-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1.8rem;\n  flex: 1;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n.admin-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.admin-header[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.25rem;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.admin-header[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.admin-header[_ngcontent-%COMP%]   .create-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.admin-header[_ngcontent-%COMP%]   .create-user-btn[_ngcontent-%COMP%] {\n  background: rgba(76, 175, 80, 0.25);\n  color: white;\n  border-color: rgba(76, 175, 80, 0.6);\n}\n.admin-header[_ngcontent-%COMP%]   .create-user-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(76, 175, 80, 0.4);\n  border-color: rgba(76, 175, 80, 0.8);\n}\n.admin-header[_ngcontent-%COMP%]   .create-pro-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 152, 0, 0.25);\n  color: white;\n  border-color: rgba(255, 152, 0, 0.6);\n}\n.admin-header[_ngcontent-%COMP%]   .create-pro-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 152, 0, 0.4);\n  border-color: rgba(255, 152, 0, 0.8);\n}\n.admin-header[_ngcontent-%COMP%]   .invite-admin-btn[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n}\n.admin-header[_ngcontent-%COMP%]   .invite-admin-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.admin-header[_ngcontent-%COMP%]   .invite-admin-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.admin-header[_ngcontent-%COMP%]   .invite-admin-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.disputes-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.disputes-section[_ngcontent-%COMP%]   .disputes-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #c62828;\n  margin-bottom: 1rem;\n}\n.disputes-section[_ngcontent-%COMP%]   .disputes-title[_ngcontent-%COMP%]   .dispute-count[_ngcontent-%COMP%] {\n  background: #c62828;\n  color: white;\n  border-radius: 12px;\n  padding: 2px 8px;\n  font-size: 0.8rem;\n}\n.disputes-section[_ngcontent-%COMP%]   .disputes-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #666;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ef9a9a;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 0.75rem;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.5rem;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%]   .dispute-job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%]   .dispute-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.5rem;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-reason[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #333;\n  margin: 0.25rem 0;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-completion-notes[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #555;\n  margin: 0.25rem 0;\n}\n.disputes-section[_ngcontent-%COMP%]   .dispute-card[_ngcontent-%COMP%]   .dispute-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n.backfill-results-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1.25rem;\n  flex-wrap: wrap;\n}\n.backfill-result[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 260px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-result-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-result-header[_ngcontent-%COMP%]   .backfill-result-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  color: white;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-result-header[_ngcontent-%COMP%]   .backfill-result-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-result-header[_ngcontent-%COMP%]   .backfill-dismiss[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-result-header[_ngcontent-%COMP%]   .backfill-dismiss[_ngcontent-%COMP%]:hover {\n  color: white;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-result-header[_ngcontent-%COMP%]   .backfill-dismiss[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  color: white;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  opacity: 0.85;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-stat.backfill-stat-updated[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #a5d6a7;\n}\n.backfill-result[_ngcontent-%COMP%]   .backfill-stat.backfill-stat-failed[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ffcc80;\n}\n.admin-content[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n  display: flex;\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n  .admin-content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.search-section[_ngcontent-%COMP%] {\n  flex: 0 0 350px;\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: 100vh;\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .search-section[_ngcontent-%COMP%] {\n    flex: 1;\n    max-height: none;\n  }\n}\n.search-controls[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.search-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  background-color: #667eea;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background-color: #5568d3;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.search-type[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n}\n.search-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.search-type[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.search-results[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .results-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.search-results[_ngcontent-%COMP%]   .results-list[_ngcontent-%COMP%]   .results-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 0.5rem;\n}\n.user-item[_ngcontent-%COMP%], \n.pro-item[_ngcontent-%COMP%] {\n  padding: 0.875rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  margin-bottom: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.user-item[_ngcontent-%COMP%]:hover, \n.pro-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.15);\n}\n.user-item.selected[_ngcontent-%COMP%], \n.pro-item.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background-color: #f0f4ff;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-email[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-email[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n  margin-bottom: 0.5rem;\n}\n.user-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-meta[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  color: #999;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  border-radius: 3px;\n  font-weight: 500;\n}\n.badge.badge-verified[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.user-date[_ngcontent-%COMP%], \n.pro-date[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.details-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 1024px) {\n  .details-section[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n.details-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #333;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%], \n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%] {\n  background-color: #4caf50;\n  color: white;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%]:hover {\n  background-color: #45a049;\n}\n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background-color: #f5f5f5;\n  color: #333;\n}\n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {\n  background-color: #e0e0e0;\n}\n.details-tabs[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n  min-width: 120px !important;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 300px);\n}\n.profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  min-width: 120px;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n  text-align: right;\n  flex: 1;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon.verified[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.jobs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 1rem;\n  background-color: #fafafa;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 1rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-in-progress[_ngcontent-%COMP%] {\n  background-color: #cfe2ff;\n  color: #084298;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-completed[_ngcontent-%COMP%] {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #842029;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n  margin-right: 0.5rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #ddd;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  line-height: 1.4;\n  max-height: 100px;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-dates[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #ddd;\n  font-size: 0.85rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-dates[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card.job-in-progress[_ngcontent-%COMP%] {\n  border-left: 4px solid #2196f3;\n  background-color: #f0f8ff;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .bid-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background-color: #fff3cd;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .bid-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .in-progress-details[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: rgba(33, 150, 243, 0.05);\n  border-radius: 4px;\n  border-left: 3px solid #2196f3;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .in-progress-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .in-progress-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #333;\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .in-progress-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .in-progress-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .phases-info[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #666;\n  font-family: monospace;\n  background-color: white;\n  padding: 0.5rem;\n  border-radius: 3px;\n  max-height: 80px;\n  overflow-y: auto;\n  word-break: break-word;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .in-progress-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .no-phases[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #999;\n  font-style: italic;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .in-progress-details[_ngcontent-%COMP%]   .detail-section[_ngcontent-%COMP%]   .attachment-count[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.chat-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%] {\n  flex: 0 0 250px;\n  border-right: 1px solid #e0e0e0;\n  padding-right: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n  color: #333;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   .no-conversations[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #999;\n  padding: 2rem 0;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  color: #333;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 0.5rem;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem 0;\n}\n.chat-section[_ngcontent-%COMP%]   .no-conversation-selected[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #999;\n}\n.conversation-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.conversation-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background-color: #f9f9f9;\n}\n.conversation-item.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background-color: #f0f4ff;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-info[_ngcontent-%COMP%]   .conversation-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 0.25rem;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-info[_ngcontent-%COMP%]   .conversation-meta[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #999;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #999;\n  margin-top: 0.25rem;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border-radius: 6px;\n  background-color: #f5f5f5;\n}\n.message.message-user[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  margin-left: 2rem;\n}\n.message.message-pro[_ngcontent-%COMP%] {\n  background-color: #f3e5f5;\n  margin-right: 2rem;\n}\n.message[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: #666;\n  margin-bottom: 0.25rem;\n}\n.message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.5rem;\n  word-wrap: break-word;\n}\n.message[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #999;\n}\n.message[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #4caf50;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.message[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 2rem;\n  color: #666;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 3rem 1rem;\n  color: #999;\n}\n.no-data[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.empty-state[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #999;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  opacity: 0.3;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0;\n  max-width: 300px;\n  text-align: center;\n}\n.invitations-table[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow-x: auto;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background-color: #f5f6fa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #333;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n  color: #555;\n  vertical-align: middle;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background-color 0.2s ease;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background-color: #fafafa;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.badge.badge-pending[_ngcontent-%COMP%] {\n  background-color: #fff3e0;\n  color: #e65100;\n}\n.badge.badge-used[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-expired[_ngcontent-%COMP%] {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.badge.badge-verified[_ngcontent-%COMP%] {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-verified[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n}\n.expires[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 500;\n}\n.expired-text[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 500;\n}\n.used-text[_ngcontent-%COMP%] {\n  color: #388e3c;\n  font-weight: 500;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.action-btn.resend-btn[_ngcontent-%COMP%] {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.action-btn.resend-btn[_ngcontent-%COMP%]:hover {\n  background-color: #bbdefb;\n  transform: translateY(-2px);\n  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);\n}\n.action-btn.resend-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n.action-disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.rel-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rel-add-row[_ngcontent-%COMP%]   .rel-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 200px;\n}\n.rel-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.rel-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rel-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rel-info[_ngcontent-%COMP%]   .rel-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n.rel-info[_ngcontent-%COMP%]   .rel-email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #666;\n}\n/*# sourceMappingURL=admin-users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsersComponent, [{
    type: Component,
    args: [{ selector: "app-admin-users", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      MatTabsModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      ReactiveFormsModule,
      MatSnackBarModule
    ], template: `<div class="admin-users-container">\r
  <div class="admin-header">\r
    <div class="header-top">\r
      <h1><mat-icon>admin_panel_settings</mat-icon> Admin Users Management</h1>\r
      <div class="header-actions">\r
        <button (click)="openCreateUser()" class="create-btn create-user-btn">\r
          <mat-icon>person_add_alt_1</mat-icon>\r
          Create User\r
        </button>\r
        <button (click)="openCreatePro()" class="create-btn create-pro-btn">\r
          <mat-icon>engineering</mat-icon>\r
          Create Pro\r
        </button>\r
        <button (click)="inviteAdmin()" class="invite-admin-btn">\r
          <mat-icon>person_add</mat-icon>\r
          Invite Admin\r
        </button>\r
        <button (click)="runGeocodeBackfillPros()" class="create-btn" [disabled]="isBackfillingPros" title="Set lat/lon for pros missing map coordinates">\r
          <mat-icon>{{ isBackfillingPros ? 'hourglass_empty' : 'my_location' }}</mat-icon>\r
          {{ isBackfillingPros ? 'Geocoding...' : 'Geocode Pros' }}\r
        </button>\r
        <button (click)="runGeocodeBackfillUsers()" class="create-btn" [disabled]="isBackfillingUsers" title="Set lat/lon for users missing map coordinates">\r
          <mat-icon>{{ isBackfillingUsers ? 'hourglass_empty' : 'person_pin_circle' }}</mat-icon>\r
          {{ isBackfillingUsers ? 'Geocoding...' : 'Geocode Users' }}\r
        </button>\r
      </div>\r
    </div>\r
    <div class="backfill-results-row" *ngIf="proBackfillResult || userBackfillResult">\r
      <div *ngIf="proBackfillResult" class="backfill-result">\r
        <div class="backfill-result-header">\r
          <div class="backfill-result-title">\r
            <mat-icon>my_location</mat-icon>\r
            Pros Geocode Complete\r
          </div>\r
          <button class="backfill-dismiss" (click)="proBackfillResult = null" title="Dismiss">\r
            <mat-icon>close</mat-icon>\r
          </button>\r
        </div>\r
        <div class="backfill-stats">\r
          <div class="backfill-stat backfill-stat-total">\r
            <span class="stat-value">{{ proBackfillResult.total }}</span>\r
            <span class="stat-label">Pros found</span>\r
          </div>\r
          <div class="backfill-stat backfill-stat-updated">\r
            <mat-icon>check_circle</mat-icon>\r
            <span class="stat-value">{{ proBackfillResult.updated }}</span>\r
            <span class="stat-label">Updated</span>\r
          </div>\r
          <div class="backfill-stat backfill-stat-failed" *ngIf="proBackfillResult.failed > 0">\r
            <mat-icon>warning</mat-icon>\r
            <span class="stat-value">{{ proBackfillResult.failed }}</span>\r
            <span class="stat-label">Could not geocode</span>\r
          </div>\r
        </div>\r
      </div>\r
\r
      <div *ngIf="userBackfillResult" class="backfill-result">\r
        <div class="backfill-result-header">\r
          <div class="backfill-result-title">\r
            <mat-icon>person_pin_circle</mat-icon>\r
            Users Geocode Complete\r
          </div>\r
          <button class="backfill-dismiss" (click)="userBackfillResult = null" title="Dismiss">\r
            <mat-icon>close</mat-icon>\r
          </button>\r
        </div>\r
        <div class="backfill-stats">\r
          <div class="backfill-stat backfill-stat-total">\r
            <span class="stat-value">{{ userBackfillResult.total }}</span>\r
            <span class="stat-label">Users found</span>\r
          </div>\r
          <div class="backfill-stat backfill-stat-updated">\r
            <mat-icon>check_circle</mat-icon>\r
            <span class="stat-value">{{ userBackfillResult.updated }}</span>\r
            <span class="stat-label">Updated</span>\r
          </div>\r
          <div class="backfill-stat backfill-stat-failed" *ngIf="userBackfillResult.failed > 0">\r
            <mat-icon>warning</mat-icon>\r
            <span class="stat-value">{{ userBackfillResult.failed }}</span>\r
            <span class="stat-label">Could not geocode</span>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <div class="admin-content">\r
\r
    <!-- Disputes Section -->\r
    <div class="disputes-section" *ngIf="disputes.length > 0 || isLoadingDisputes">\r
      <h2 class="disputes-title">\r
        <mat-icon>flag</mat-icon>\r
        Open Disputes\r
        <span class="dispute-count" *ngIf="disputes.length > 0">{{ disputes.length }}</span>\r
      </h2>\r
\r
      <div *ngIf="isLoadingDisputes" class="disputes-loading">\r
        <mat-spinner diameter="28"></mat-spinner>\r
        <span>Loading disputes...</span>\r
      </div>\r
\r
      <div *ngFor="let d of disputes" class="dispute-card">\r
        <div class="dispute-card-header">\r
          <span class="dispute-job-title">{{ d.jobTitle }}</span>\r
          <span class="dispute-date">{{ d.disputedAt | date:'MMM d, y' }}</span>\r
        </div>\r
        <div class="dispute-parties">\r
          <span><mat-icon>person</mat-icon> Consumer: {{ d.consumer?.name }} ({{ d.consumer?.email }})</span>\r
          <span><mat-icon>engineering</mat-icon> Pro: {{ d.pro?.businessName || d.pro?.name }} ({{ d.pro?.email }})</span>\r
        </div>\r
        <p class="dispute-reason"><strong>Reason:</strong> {{ d.disputeReason }}</p>\r
        <p *ngIf="d.completionNotes" class="dispute-completion-notes"><strong>Pro notes:</strong> {{ d.completionNotes }}</p>\r
        <div class="dispute-actions">\r
          <button\r
            mat-raised-button\r
            color="accent"\r
            (click)="resolveDispute(d.jobId, 'complete')"\r
            [disabled]="resolvingDisputeId === d.jobId"\r
            title="Mark the job as Completed in favour of the professional">\r
            <mat-icon>check_circle</mat-icon>\r
            Complete for Pro\r
          </button>\r
          <button\r
            mat-raised-button\r
            color="warn"\r
            (click)="resolveDispute(d.jobId, 'refund')"\r
            [disabled]="resolvingDisputeId === d.jobId"\r
            title="Reopen the job for rebidding in favour of the consumer">\r
            <mat-icon>replay</mat-icon>\r
            Refund &amp; Reopen\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Search Section -->\r
    <div class="search-section">\r
      <form (ngSubmit)="search()" class="search-form">\r
        <div class="search-controls">\r
          <div class="search-input-group">\r
            <input\r
              type="text"\r
              [(ngModel)]="searchQuery"\r
              name="searchQuery"\r
              placeholder="Search by email or name..."\r
              class="search-input"\r
            />\r
            <button type="submit" class="search-btn" [disabled]="isSearching || !searchQuery.trim()">\r
              <mat-icon>{{ isSearching ? 'hourglass_empty' : 'search' }}</mat-icon>\r
              {{ isSearching ? 'Searching...' : 'Search' }}\r
            </button>\r
          </div>\r
\r
          <div class="search-type">\r
            <label>\r
              <input type="radio" [(ngModel)]="searchType" value="user" name="searchType" />\r
              Users\r
            </label>\r
            <label>\r
              <input type="radio" [(ngModel)]="searchType" value="pro" name="searchType" />\r
              Professionals\r
            </label>\r
          </div>\r
        </div>\r
      </form>\r
\r
      <!-- Search Results -->\r
      <div class="search-results" *ngIf="users.length > 0 || pros.length > 0">\r
        <div class="results-list">\r
          <!-- Users Results -->\r
          <div *ngIf="users.length > 0" class="results-group">\r
            <h3>Users ({{ users.length }})</h3>\r
            <div class="user-item" *ngFor="let user of users" (click)="selectUser(user)" [class.selected]="selectedUser?.id === user.id">\r
              <div class="user-info">\r
                <div class="user-name">{{ user.firstName }} {{ user.lastName }}</div>\r
                <div class="user-email">{{ user.email }}</div>\r
                <div class="user-meta">\r
                  <span *ngIf="user.isEmailVerified" class="badge badge-verified">\r
                    <mat-icon>verified</mat-icon> Email Verified\r
                  </span>\r
                  <span class="user-date">Joined: {{ formatDate(user.createdAt) }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Pros Results -->\r
          <div *ngIf="pros.length > 0" class="results-group">\r
            <h3>Professionals ({{ pros.length }})</h3>\r
            <div class="pro-item" *ngFor="let pro of pros" (click)="selectPro(pro)" [class.selected]="selectedPro?.id === pro.id">\r
              <div class="pro-info">\r
                <div class="pro-name">{{ pro.proName }}</div>\r
                <div class="pro-business">{{ pro.businessName }}</div>\r
                <div class="pro-email">{{ pro.email }}</div>\r
                <div class="pro-meta">\r
                  <span *ngIf="pro.isEmailVerified" class="badge badge-verified">\r
                    <mat-icon>verified</mat-icon> Email Verified\r
                  </span>\r
                  <span class="pro-date">Joined: {{ formatDate(pro.createdAt) }}</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
\r
    <!-- Details Section -->\r
    <div class="details-section" *ngIf="selectedUser || selectedPro">\r
      <div class="details-header">\r
        <h2 *ngIf="selectedUser">{{ selectedUser.firstName }} {{ selectedUser.lastName }}</h2>\r
        <h2 *ngIf="selectedPro">{{ selectedPro.proName }}</h2>\r
        <button (click)="impersonate()" class="impersonate-btn">\r
          <mat-icon>person_add</mat-icon>\r
          Impersonate\r
        </button>\r
        <button (click)="clearSelection()" class="clear-btn">\r
          <mat-icon>close</mat-icon>\r
        </button>\r
      </div>\r
\r
      <mat-tab-group class="details-tabs">\r
        <!-- Profile Tab -->\r
        <mat-tab>\r
          <ng-template mat-tab-label>\r
            <mat-icon>person</mat-icon>\r
            Profile\r
          </ng-template>\r
          <div class="tab-content">\r
            <div *ngIf="selectedUser" class="profile-details">\r
              <div class="detail-row">\r
                <label>Email:</label>\r
                <span>{{ selectedUser.email }}</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Phone:</label>\r
                <span>{{ selectedUser.phoneNumber }}</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Email Verified:</label>\r
                <span><mat-icon [class.verified]="selectedUser.isEmailVerified">{{ selectedUser.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Phone Verified:</label>\r
                <span><mat-icon [class.verified]="selectedUser.isPhoneVerified">{{ selectedUser.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Address:</label>\r
                <span *ngIf="selectedUser.street1">{{ selectedUser.street1 }}, {{ selectedUser.city }}, {{ selectedUser.state }} {{ selectedUser.zipPostalCode }}</span>\r
                <span *ngIf="!selectedUser.street1">Not provided</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Joined:</label>\r
                <span>{{ formatDate(selectedUser.createdAt) }}</span>\r
              </div>\r
            </div>\r
\r
            <div *ngIf="selectedPro" class="profile-details">\r
              <div class="detail-row">\r
                <label>Name:</label>\r
                <span>{{ selectedPro.proName }}</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Business:</label>\r
                <span>{{ selectedPro.businessName }}</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Email:</label>\r
                <span>{{ selectedPro.email }}</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Phone:</label>\r
                <span>{{ selectedPro.phoneNumber }}</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Email Verified:</label>\r
                <span><mat-icon [class.verified]="selectedPro.isEmailVerified">{{ selectedPro.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Phone Verified:</label>\r
                <span><mat-icon [class.verified]="selectedPro.isPhoneVerified">{{ selectedPro.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Address:</label>\r
                <span *ngIf="selectedPro.street1">{{ selectedPro.street1 }}, {{ selectedPro.city }}, {{ selectedPro.state }} {{ selectedPro.zipPostalCode }}</span>\r
                <span *ngIf="!selectedPro.street1">Not provided</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Joined:</label>\r
                <span>{{ formatDate(selectedPro.createdAt) }}</span>\r
              </div>\r
              <div class="detail-row">\r
                <label>Service Radius:</label>\r
                <ng-container *ngIf="!isEditingRadius">\r
                  <span>{{ selectedPro.serviceRadiusKm ?? 25 }} km</span>\r
                  <button class="inline-edit-btn" (click)="startEditRadius()" title="Edit service radius">\r
                    <mat-icon>edit</mat-icon>\r
                  </button>\r
                </ng-container>\r
                <ng-container *ngIf="isEditingRadius">\r
                  <input type="number" [(ngModel)]="editRadiusValue" min="1" max="500" class="radius-input" />\r
                  <span class="radius-unit">km</span>\r
                  <button class="inline-save-btn" (click)="saveRadius()"><mat-icon>check</mat-icon></button>\r
                  <button class="inline-cancel-btn" (click)="cancelEditRadius()"><mat-icon>close</mat-icon></button>\r
                </ng-container>\r
              </div>\r
            </div>\r
          </div>\r
        </mat-tab>\r
\r
        <!-- Job History Tab -->\r
        <mat-tab>\r
          <ng-template mat-tab-label>\r
            <mat-icon>work</mat-icon>\r
            Job History\r
          </ng-template>\r
          <div class="tab-content">\r
            <div *ngIf="isLoadingDetails" class="loading">\r
              <mat-spinner diameter="40"></mat-spinner>\r
              Loading job history...\r
            </div>\r
\r
            <div *ngIf="!isLoadingDetails && selectedUser && userJobs.length > 0" class="jobs-list">\r
              <div class="job-card" *ngFor="let job of userJobs" [class.job-in-progress]="job.status === 'In Progress'">\r
                <div class="job-header">\r
                  <div class="job-title-section">\r
                    <h4>{{ job.title }}</h4>\r
                    <span *ngIf="job.isBid" class="bid-badge"><mat-icon>local_offer</mat-icon> Bid Job</span>\r
                  </div>\r
                  <span class="status-badge" [ngClass]="'status-' + job.status">{{ job.status }}</span>\r
                </div>\r
                <div class="job-details">\r
                  <div *ngIf="job.description" class="job-description">\r
                    <strong>Description:</strong>\r
                    <p>{{ job.description }}</p>\r
                  </div>\r
                  <div><strong>Category:</strong> {{ job.category?.name || 'N/A' }}</div>\r
                  <div><strong>Location:</strong> {{ job.location }}</div>\r
                  <div><strong>Budget:</strong> {{ job.budget }}</div>\r
                  <div><strong>Timeline:</strong> {{ job.timeline }}</div>\r
                  <div><strong>Posted by:</strong> {{ job.userName }}</div>\r
                  <div *ngIf="job.assignedProId"><strong>Assigned To:</strong> {{ job.assignedProBusinessName }}</div>\r
                  \r
                  <!-- In-Progress Job Details -->\r
                  <div *ngIf="job.status === 'In Progress'" class="in-progress-details">\r
                    <div class="detail-section">\r
                      <strong>Job Phases:</strong>\r
                      <div class="phases-info" *ngIf="job.jobPhases; else noPhases">\r
                        {{ job.jobPhases }}\r
                      </div>\r
                      <ng-template #noPhases>\r
                        <div class="no-phases">No phases defined</div>\r
                      </ng-template>\r
                    </div>\r
                    <div class="detail-section" *ngIf="job.attachments">\r
                      <strong>Attachments:</strong>\r
                      <span class="attachment-count">Multiple files</span>\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="job-dates">\r
                    <span><strong>Created:</strong> {{ formatDate(job.createdAt) }}</span>\r
                    <span *ngIf="job.updatedAt"><strong>Updated:</strong> {{ formatDate(job.updatedAt) }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div *ngIf="!isLoadingDetails && selectedPro && proJobs.length > 0" class="jobs-list">\r
              <div class="job-card" *ngFor="let job of proJobs" [class.job-in-progress]="job.status === 'In Progress'">\r
                <div class="job-header">\r
                  <div class="job-title-section">\r
                    <h4>{{ job.title }}</h4>\r
                    <span *ngIf="job.isBid" class="bid-badge"><mat-icon>local_offer</mat-icon> Bid Job</span>\r
                  </div>\r
                  <span class="status-badge" [ngClass]="'status-' + job.status">{{ job.status }}</span>\r
                </div>\r
                <div class="job-details">\r
                  <div *ngIf="job.description" class="job-description">\r
                    <strong>Description:</strong>\r
                    <p>{{ job.description }}</p>\r
                  </div>\r
                  <div><strong>Category:</strong> {{ job.category?.name || 'N/A' }}</div>\r
                  <div><strong>Location:</strong> {{ job.location }}</div>\r
                  <div><strong>Budget:</strong> {{ job.budget }}</div>\r
                  <div><strong>Timeline:</strong> {{ job.timeline }}</div>\r
                  <div><strong>Posted by:</strong> {{ job.userName }}</div>\r
                  <div *ngIf="job.assignedProId"><strong>Assigned To:</strong> {{ job.assignedProBusinessName }}</div>\r
                  \r
                  <!-- In-Progress Job Details -->\r
                  <div *ngIf="job.status === 'In Progress'" class="in-progress-details">\r
                    <div class="detail-section">\r
                      <strong>Job Phases:</strong>\r
                      <div class="phases-info" *ngIf="job.jobPhases; else noPhases">\r
                        {{ job.jobPhases }}\r
                      </div>\r
                      <ng-template #noPhases>\r
                        <div class="no-phases">No phases defined</div>\r
                      </ng-template>\r
                    </div>\r
                    <div class="detail-section" *ngIf="job.attachments">\r
                      <strong>Attachments:</strong>\r
                      <span class="attachment-count">Multiple files</span>\r
                    </div>\r
                  </div>\r
                  \r
                  <div class="job-dates">\r
                    <span><strong>Created:</strong> {{ formatDate(job.createdAt) }}</span>\r
                    <span *ngIf="job.updatedAt"><strong>Updated:</strong> {{ formatDate(job.updatedAt) }}</span>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <div *ngIf="!isLoadingDetails && ((selectedUser && userJobs.length === 0) || (selectedPro && proJobs.length === 0))" class="no-data">\r
              <mat-icon>folder_open</mat-icon>\r
              <p>No job history found</p>\r
            </div>\r
          </div>\r
        </mat-tab>\r
\r
        <!-- Chat History Tab -->\r
        <mat-tab>\r
          <ng-template mat-tab-label>\r
            <mat-icon>message</mat-icon>\r
            Chat History\r
          </ng-template>\r
          <div class="tab-content">\r
            <div *ngIf="isLoadingDetails" class="loading">\r
              <mat-spinner diameter="40"></mat-spinner>\r
              Loading chat history...\r
            </div>\r
\r
            <div class="chat-section" *ngIf="!isLoadingDetails">\r
              <div class="conversations-panel">\r
                <h3>Conversations</h3>\r
                <div *ngIf="selectedUser && userConversations.length > 0" class="conversations-list">\r
                  <div\r
                    class="conversation-item"\r
                    *ngFor="let conversation of userConversations"\r
                    (click)="selectConversation(conversation)"\r
                    [class.selected]="selectedConversation?.userId === conversation.userId"\r
                  >\r
                    <div class="conversation-info">\r
                      <div class="conversation-name">{{ conversation.userName || 'Unknown User' }}</div>\r
                      <div class="conversation-meta">{{ conversation.userType }}</div>\r
                    </div>\r
                    <div class="conversation-time" *ngIf="conversation.lastMessageTime">\r
                      {{ formatDate(conversation.lastMessageTime) }}\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div *ngIf="selectedPro && proConversations.length > 0" class="conversations-list">\r
                  <div\r
                    class="conversation-item"\r
                    *ngFor="let conversation of proConversations"\r
                    (click)="selectConversation(conversation)"\r
                    [class.selected]="selectedConversation?.userId === conversation.userId"\r
                  >\r
                    <div class="conversation-info">\r
                      <div class="conversation-name">{{ conversation.userName || 'Unknown User' }}</div>\r
                      <div class="conversation-meta">{{ conversation.userType }}</div>\r
                    </div>\r
                    <div class="conversation-time" *ngIf="conversation.lastMessageTime">\r
                      {{ formatDate(conversation.lastMessageTime) }}\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div *ngIf="((selectedUser && userConversations.length === 0) || (selectedPro && proConversations.length === 0))" class="no-conversations">\r
                  <p>No conversations</p>\r
                </div>\r
              </div>\r
\r
              <div class="messages-panel" *ngIf="selectedConversation">\r
                <h3>Messages - {{ selectedConversation.userName }}</h3>\r
                <div class="messages-list">\r
                  <div class="message" *ngFor="let message of conversationMessages" [ngClass]="'message-' + (message.senderType ? message.senderType.toLowerCase() : 'unknown')">\r
                    <div class="message-sender">{{ message.senderType }}</div>\r
                    <div class="message-content">{{ message.content }}</div>\r
                    <div class="message-time">{{ formatDate(message.sentAt) }}</div>\r
                    <div class="message-status" *ngIf="message.isRead">\r
                      <mat-icon>done_all</mat-icon> Read\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="no-conversation-selected" *ngIf="!selectedConversation && (userConversations.length > 0 || proConversations.length > 0)">\r
                <p>Select a conversation to view messages</p>\r
              </div>\r
            </div>\r
          </div>\r
        </mat-tab>\r
\r
        <!-- Pending Invitations Tab -->\r
        <mat-tab>\r
          <ng-template mat-tab-label>\r
            <mat-icon>mail_outline</mat-icon>\r
            Pending Invitations\r
          </ng-template>\r
          <div class="tab-content">\r
            <div *ngIf="isLoadingInvitations" class="loading">\r
              <mat-spinner diameter="40"></mat-spinner>\r
              Loading invitations...\r
            </div>\r
\r
            <div *ngIf="!isLoadingInvitations && adminInvitations.length > 0" class="invitations-table">\r
              <table class="invitations-list">\r
                <thead>\r
                  <tr>\r
                    <th>Email</th>\r
                    <th>Status</th>\r
                    <th>Created</th>\r
                    <th>Expires In</th>\r
                    <th>Actions</th>\r
                  </tr>\r
                </thead>\r
                <tbody>\r
                  <tr *ngFor="let invitation of adminInvitations" [class.expired]="invitation.isExpired">\r
                    <td>{{ invitation.email }}</td>\r
                    <td>\r
                      <span *ngIf="invitation.isUsed" class="badge badge-used">\r
                        <mat-icon>check_circle</mat-icon> Used\r
                      </span>\r
                      <span *ngIf="!invitation.isUsed && !invitation.isExpired" class="badge badge-pending">\r
                        <mat-icon>schedule</mat-icon> Pending\r
                      </span>\r
                      <span *ngIf="!invitation.isUsed && invitation.isExpired" class="badge badge-expired">\r
                        <mat-icon>close_circle</mat-icon> Expired\r
                      </span>\r
                    </td>\r
                    <td>{{ formatDate(invitation.createdAt) }}</td>\r
                    <td>\r
                      <span *ngIf="!invitation.isExpired && !invitation.isUsed" class="expires">\r
                        {{ invitation.daysUntilExpiry }} days\r
                      </span>\r
                      <span *ngIf="invitation.isExpired" class="expired-text">Expired</span>\r
                      <span *ngIf="invitation.isUsed" class="used-text">\r
                        {{ formatDate(invitation.usedAt) }}\r
                      </span>\r
                    </td>\r
                    <td>\r
                      <button \r
                        *ngIf="!invitation.isUsed && !invitation.isExpired"\r
                        (click)="resendInvitation(invitation.id)"\r
                        class="action-btn resend-btn"\r
                        title="Resend invitation email">\r
                        <mat-icon>mail</mat-icon>\r
                        Resend\r
                      </button>\r
                      <span *ngIf="invitation.isUsed || invitation.isExpired" class="action-disabled">-</span>\r
                    </td>\r
                  </tr>\r
                </tbody>\r
              </table>\r
            </div>\r
\r
            <div *ngIf="!isLoadingInvitations && adminInvitations.length === 0" class="no-data">\r
              <mat-icon>inbox</mat-icon>\r
              <p>No pending invitations</p>\r
            </div>\r
          </div>\r
        </mat-tab>\r
        <!-- Relationships Tab -->\r
        <mat-tab>\r
          <ng-template mat-tab-label>\r
            <mat-icon>people</mat-icon>\r
            Relationships\r
          </ng-template>\r
          <div class="tab-content">\r
            <!-- Pro selected: show linked users + add/remove -->\r
            <div *ngIf="selectedPro">\r
              <div class="rel-add-row">\r
                <mat-form-field appearance="outline" class="rel-input">\r
                  <mat-label>Add User by ID</mat-label>\r
                  <input matInput type="number" [(ngModel)]="addUserId" placeholder="User ID" name="addUserId">\r
                </mat-form-field>\r
                <button mat-raised-button color="primary" [disabled]="!addUserId" (click)="addUserToPro()">\r
                  <mat-icon>person_add</mat-icon> Link User\r
                </button>\r
              </div>\r
\r
              <div *ngIf="isLoadingRelationships" class="loading">\r
                <mat-spinner diameter="36"></mat-spinner> Loading linked clients...\r
              </div>\r
\r
              <div *ngIf="!isLoadingRelationships && linkedUsers.length === 0" class="no-data">\r
                <mat-icon>group_off</mat-icon>\r
                <p>No users linked to this pro</p>\r
              </div>\r
\r
              <div *ngIf="!isLoadingRelationships && linkedUsers.length > 0" class="rel-list">\r
                <div class="rel-item" *ngFor="let u of linkedUsers">\r
                  <mat-icon>person</mat-icon>\r
                  <div class="rel-info">\r
                    <div class="rel-name">{{ u.name }}</div>\r
                    <div class="rel-email">{{ u.email }} &nbsp;\xB7&nbsp; ID: {{ u.id }}</div>\r
                  </div>\r
                  <button mat-icon-button color="warn" title="Remove" (click)="removeUserFromPro(u.id)">\r
                    <mat-icon>link_off</mat-icon>\r
                  </button>\r
                </div>\r
              </div>\r
            </div>\r
\r
            <!-- User selected: show linked pros (read-only) -->\r
            <div *ngIf="selectedUser">\r
              <div *ngIf="isLoadingRelationships" class="loading">\r
                <mat-spinner diameter="36"></mat-spinner> Loading linked pros...\r
              </div>\r
\r
              <div *ngIf="!isLoadingRelationships && linkedPros.length === 0" class="no-data">\r
                <mat-icon>handshake</mat-icon>\r
                <p>No pros linked to this user</p>\r
              </div>\r
\r
              <div *ngIf="!isLoadingRelationships && linkedPros.length > 0" class="rel-list">\r
                <div class="rel-item" *ngFor="let p of linkedPros">\r
                  <mat-icon>engineering</mat-icon>\r
                  <div class="rel-info">\r
                    <div class="rel-name">{{ p.name }}</div>\r
                    <div class="rel-email">{{ p.businessName }} &nbsp;\xB7&nbsp; {{ p.email }}</div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </mat-tab>\r
      </mat-tab-group>\r
    </div>\r
\r
    <!-- Empty State -->\r
    <div class="empty-state" *ngIf="!selectedUser && !selectedPro && users.length === 0 && pros.length === 0">\r
      <mat-icon>search</mat-icon>\r
      <h3>Search for Users or Professionals</h3>\r
      <p>Enter a name or email address to find user accounts or professional offerings</p>\r
    </div>\r
  </div>\r
</div>\r
`, styles: ["/* src/app/features/admin-users/admin-users.scss */\n.admin-users-container {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  background-color: #f5f6fa;\n}\n.admin-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);\n}\n.admin-header .header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 2rem;\n}\n.admin-header h1 {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  font-size: 1.8rem;\n  flex: 1;\n}\n.admin-header h1 mat-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n}\n.admin-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.admin-header .create-btn {\n  padding: 0.75rem 1.25rem;\n  border-radius: 6px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n  border: 2px solid transparent;\n}\n.admin-header .create-btn mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.admin-header .create-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.admin-header .create-user-btn {\n  background: rgba(76, 175, 80, 0.25);\n  color: white;\n  border-color: rgba(76, 175, 80, 0.6);\n}\n.admin-header .create-user-btn:hover {\n  background: rgba(76, 175, 80, 0.4);\n  border-color: rgba(76, 175, 80, 0.8);\n}\n.admin-header .create-pro-btn {\n  background: rgba(255, 152, 0, 0.25);\n  color: white;\n  border-color: rgba(255, 152, 0, 0.6);\n}\n.admin-header .create-pro-btn:hover {\n  background: rgba(255, 152, 0, 0.4);\n  border-color: rgba(255, 152, 0, 0.8);\n}\n.admin-header .invite-admin-btn {\n  background: rgba(255, 255, 255, 0.2);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  padding: 0.75rem 1.5rem;\n  border-radius: 6px;\n  font-size: 1rem;\n  font-weight: 600;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  transition: all 0.3s ease;\n}\n.admin-header .invite-admin-btn mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.admin-header .invite-admin-btn:hover {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.6);\n  transform: translateY(-2px);\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);\n}\n.admin-header .invite-admin-btn:active {\n  transform: translateY(0);\n}\n.disputes-section {\n  margin-bottom: 1.5rem;\n}\n.disputes-section .disputes-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.1rem;\n  font-weight: 600;\n  color: #c62828;\n  margin-bottom: 1rem;\n}\n.disputes-section .disputes-title .dispute-count {\n  background: #c62828;\n  color: white;\n  border-radius: 12px;\n  padding: 2px 8px;\n  font-size: 0.8rem;\n}\n.disputes-section .disputes-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #666;\n}\n.disputes-section .dispute-card {\n  background: white;\n  border: 1px solid #ef9a9a;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 0.75rem;\n}\n.disputes-section .dispute-card .dispute-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.5rem;\n}\n.disputes-section .dispute-card .dispute-card-header .dispute-job-title {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.disputes-section .dispute-card .dispute-card-header .dispute-date {\n  font-size: 0.8rem;\n  color: #888;\n}\n.disputes-section .dispute-card .dispute-parties {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.5rem;\n}\n.disputes-section .dispute-card .dispute-parties span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.disputes-section .dispute-card .dispute-parties mat-icon {\n  font-size: 16px;\n  width: 16px;\n  height: 16px;\n}\n.disputes-section .dispute-card .dispute-reason {\n  font-size: 0.9rem;\n  color: #333;\n  margin: 0.25rem 0;\n}\n.disputes-section .dispute-card .dispute-completion-notes {\n  font-size: 0.85rem;\n  color: #555;\n  margin: 0.25rem 0;\n}\n.disputes-section .dispute-card .dispute-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n.backfill-results-row {\n  display: flex;\n  gap: 1rem;\n  margin-top: 1.25rem;\n  flex-wrap: wrap;\n}\n.backfill-result {\n  flex: 1;\n  min-width: 260px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.3);\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.backfill-result .backfill-result-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 0.75rem;\n}\n.backfill-result .backfill-result-header .backfill-result-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 1rem;\n  color: white;\n}\n.backfill-result .backfill-result-header .backfill-result-title mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.backfill-result .backfill-result-header .backfill-dismiss {\n  background: none;\n  border: none;\n  color: rgba(255, 255, 255, 0.7);\n  cursor: pointer;\n  padding: 0.25rem;\n  border-radius: 4px;\n  display: flex;\n  align-items: center;\n  transition: color 0.2s;\n}\n.backfill-result .backfill-result-header .backfill-dismiss:hover {\n  color: white;\n}\n.backfill-result .backfill-result-header .backfill-dismiss mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.backfill-result .backfill-stats {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.backfill-result .backfill-stat {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  background: rgba(0, 0, 0, 0.2);\n  border-radius: 6px;\n  padding: 0.5rem 1rem;\n  color: white;\n}\n.backfill-result .backfill-stat mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.backfill-result .backfill-stat .stat-value {\n  font-size: 1.2rem;\n  font-weight: 700;\n  line-height: 1;\n}\n.backfill-result .backfill-stat .stat-label {\n  font-size: 0.8rem;\n  opacity: 0.85;\n}\n.backfill-result .backfill-stat.backfill-stat-updated mat-icon {\n  color: #a5d6a7;\n}\n.backfill-result .backfill-stat.backfill-stat-failed mat-icon {\n  color: #ffcc80;\n}\n.admin-content {\n  flex: 1;\n  overflow-y: auto;\n  padding: 2rem;\n  display: flex;\n  gap: 2rem;\n}\n@media (max-width: 1024px) {\n  .admin-content {\n    flex-direction: column;\n  }\n}\n.search-section {\n  flex: 0 0 350px;\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: 100vh;\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .search-section {\n    flex: 1;\n    max-height: none;\n  }\n}\n.search-controls {\n  margin-bottom: 1.5rem;\n}\n.search-input-group {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.search-input-group .search-input {\n  flex: 1;\n  padding: 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.9rem;\n}\n.search-input-group .search-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-input-group .search-btn {\n  padding: 0.75rem 1.5rem;\n  background-color: #667eea;\n  color: white;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n  transition: background-color 0.2s;\n}\n.search-input-group .search-btn:hover:not(:disabled) {\n  background-color: #5568d3;\n}\n.search-input-group .search-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-input-group .search-btn mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.search-type {\n  display: flex;\n  gap: 1rem;\n}\n.search-type label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n  font-size: 0.9rem;\n}\n.search-type label input[type=radio] {\n  cursor: pointer;\n}\n.search-results .results-list .results-group {\n  margin-bottom: 1.5rem;\n}\n.search-results .results-list .results-group h3 {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 0.5rem;\n}\n.user-item,\n.pro-item {\n  padding: 0.875rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  margin-bottom: 0.75rem;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.user-item:hover,\n.pro-item:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.15);\n}\n.user-item.selected,\n.pro-item.selected {\n  border-color: #667eea;\n  background-color: #f0f4ff;\n  box-shadow: 0 2px 8px rgba(102, 126, 234, 0.2);\n}\n.user-info .user-name,\n.user-info .pro-name,\n.pro-info .user-name,\n.pro-info .pro-name {\n  font-weight: 600;\n  margin-bottom: 0.25rem;\n}\n.user-info .user-email,\n.user-info .pro-email,\n.user-info .pro-business,\n.pro-info .user-email,\n.pro-info .pro-email,\n.pro-info .pro-business {\n  font-size: 0.85rem;\n  color: #666;\n  margin-bottom: 0.5rem;\n}\n.user-info .user-meta,\n.user-info .pro-meta,\n.pro-info .user-meta,\n.pro-info .pro-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  color: #999;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background-color: #e8f5e9;\n  color: #2e7d32;\n  border-radius: 3px;\n  font-weight: 500;\n}\n.badge.badge-verified mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.user-date,\n.pro-date {\n  margin-left: auto;\n}\n.details-section {\n  flex: 1;\n  background: white;\n  border-radius: 8px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n@media (max-width: 1024px) {\n  .details-section {\n    flex: 1;\n  }\n}\n.details-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-header h2 {\n  margin: 0;\n  font-size: 1.5rem;\n  color: #333;\n}\n.details-header .impersonate-btn,\n.details-header .clear-btn {\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 500;\n  transition: all 0.2s;\n}\n.details-header .impersonate-btn mat-icon,\n.details-header .clear-btn mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.details-header .impersonate-btn {\n  background-color: #4caf50;\n  color: white;\n}\n.details-header .impersonate-btn:hover {\n  background-color: #45a049;\n}\n.details-header .clear-btn {\n  background-color: #f5f5f5;\n  color: #333;\n}\n.details-header .clear-btn:hover {\n  background-color: #e0e0e0;\n}\n.details-tabs {\n  flex: 1;\n  overflow: auto;\n}\n.details-tabs ::ng-deep .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-tabs ::ng-deep .mat-mdc-tab {\n  min-width: 120px !important;\n}\n.tab-content {\n  padding: 1.5rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 300px);\n}\n.profile-details {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.profile-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f0f0f0;\n}\n.profile-details .detail-row label {\n  font-weight: 600;\n  color: #333;\n  min-width: 120px;\n}\n.profile-details .detail-row span {\n  color: #666;\n  text-align: right;\n  flex: 1;\n}\n.profile-details .detail-row span mat-icon {\n  vertical-align: middle;\n  margin-right: 0.5rem;\n}\n.profile-details .detail-row span mat-icon.verified {\n  color: #4caf50;\n}\n.jobs-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.jobs-list .job-card {\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  padding: 1rem;\n  background-color: #fafafa;\n}\n.jobs-list .job-card .job-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.jobs-list .job-card .job-header h4 {\n  margin: 0;\n  color: #333;\n  font-size: 1rem;\n}\n.jobs-list .job-card .job-header .status-badge {\n  padding: 0.25rem 0.75rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 500;\n  text-transform: uppercase;\n}\n.jobs-list .job-card .job-header .status-badge.status-pending {\n  background-color: #fff3cd;\n  color: #856404;\n}\n.jobs-list .job-card .job-header .status-badge.status-in-progress {\n  background-color: #cfe2ff;\n  color: #084298;\n}\n.jobs-list .job-card .job-header .status-badge.status-completed {\n  background-color: #d1e7dd;\n  color: #0f5132;\n}\n.jobs-list .job-card .job-header .status-badge.status-cancelled {\n  background-color: #f8d7da;\n  color: #842029;\n}\n.jobs-list .job-card .job-details {\n  font-size: 0.9rem;\n  color: #666;\n}\n.jobs-list .job-card .job-details div {\n  margin-bottom: 0.5rem;\n}\n.jobs-list .job-card .job-details div strong {\n  color: #333;\n  margin-right: 0.5rem;\n}\n.jobs-list .job-card .job-details .job-description {\n  margin-bottom: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #ddd;\n}\n.jobs-list .job-card .job-details .job-description strong {\n  display: block;\n  color: #333;\n  margin-bottom: 0.5rem;\n}\n.jobs-list .job-card .job-details .job-description p {\n  margin: 0;\n  color: #666;\n  line-height: 1.4;\n  max-height: 100px;\n  overflow-y: auto;\n  padding-right: 0.5rem;\n}\n.jobs-list .job-card .job-details .job-dates {\n  display: flex;\n  gap: 1.5rem;\n  margin-top: 1rem;\n  padding-top: 1rem;\n  border-top: 1px solid #ddd;\n  font-size: 0.85rem;\n}\n.jobs-list .job-card .job-details .job-dates span strong {\n  color: #333;\n}\n.jobs-list .job-card.job-in-progress {\n  border-left: 4px solid #2196f3;\n  background-color: #f0f8ff;\n}\n.jobs-list .job-card .job-title-section {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.jobs-list .job-card .job-title-section h4 {\n  margin: 0;\n}\n.jobs-list .job-card .job-title-section .bid-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  padding: 0.25rem 0.5rem;\n  background-color: #fff3cd;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.jobs-list .job-card .job-title-section .bid-badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.jobs-list .job-card .in-progress-details {\n  margin-top: 1rem;\n  padding: 1rem;\n  background-color: rgba(33, 150, 243, 0.05);\n  border-radius: 4px;\n  border-left: 3px solid #2196f3;\n}\n.jobs-list .job-card .in-progress-details .detail-section {\n  margin-bottom: 0.75rem;\n}\n.jobs-list .job-card .in-progress-details .detail-section strong {\n  color: #333;\n  display: block;\n  margin-bottom: 0.5rem;\n  font-size: 0.9rem;\n}\n.jobs-list .job-card .in-progress-details .detail-section:last-child {\n  margin-bottom: 0;\n}\n.jobs-list .job-card .in-progress-details .detail-section .phases-info {\n  font-size: 0.85rem;\n  color: #666;\n  font-family: monospace;\n  background-color: white;\n  padding: 0.5rem;\n  border-radius: 3px;\n  max-height: 80px;\n  overflow-y: auto;\n  word-break: break-word;\n}\n.jobs-list .job-card .in-progress-details .detail-section .no-phases {\n  font-size: 0.85rem;\n  color: #999;\n  font-style: italic;\n}\n.jobs-list .job-card .in-progress-details .detail-section .attachment-count {\n  display: inline-block;\n  padding: 0.25rem 0.5rem;\n  background-color: #e3f2fd;\n  color: #1976d2;\n  border-radius: 3px;\n  font-weight: 500;\n  font-size: 0.85rem;\n}\n.chat-section {\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n}\n.chat-section .conversations-panel {\n  flex: 0 0 250px;\n  border-right: 1px solid #e0e0e0;\n  padding-right: 1rem;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section .conversations-panel h3 {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n  color: #333;\n}\n.chat-section .conversations-panel .conversations-list {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.chat-section .conversations-panel .no-conversations {\n  text-align: center;\n  color: #999;\n  padding: 2rem 0;\n}\n.chat-section .messages-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section .messages-panel h3 {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  color: #333;\n  border-bottom: 1px solid #e0e0e0;\n  padding-bottom: 0.5rem;\n}\n.chat-section .messages-panel .messages-list {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem 0;\n}\n.chat-section .no-conversation-selected {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #999;\n}\n.conversation-item {\n  padding: 0.75rem;\n  border: 1px solid #e0e0e0;\n  border-radius: 4px;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.conversation-item:hover {\n  border-color: #667eea;\n  background-color: #f9f9f9;\n}\n.conversation-item.selected {\n  border-color: #667eea;\n  background-color: #f0f4ff;\n}\n.conversation-item .conversation-info .conversation-name {\n  font-weight: 600;\n  color: #333;\n  margin-bottom: 0.25rem;\n}\n.conversation-item .conversation-info .conversation-meta {\n  font-size: 0.8rem;\n  color: #999;\n}\n.conversation-item .conversation-time {\n  font-size: 0.8rem;\n  color: #999;\n  margin-top: 0.25rem;\n}\n.message {\n  padding: 0.75rem;\n  border-radius: 6px;\n  background-color: #f5f5f5;\n}\n.message.message-user {\n  background-color: #e3f2fd;\n  margin-left: 2rem;\n}\n.message.message-pro {\n  background-color: #f3e5f5;\n  margin-right: 2rem;\n}\n.message .message-sender {\n  font-weight: 600;\n  font-size: 0.8rem;\n  color: #666;\n  margin-bottom: 0.25rem;\n}\n.message .message-content {\n  color: #333;\n  margin-bottom: 0.5rem;\n  word-wrap: break-word;\n}\n.message .message-time {\n  font-size: 0.75rem;\n  color: #999;\n}\n.message .message-status {\n  font-size: 0.75rem;\n  color: #4caf50;\n  margin-top: 0.25rem;\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.message .message-status mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.loading {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 2rem;\n  color: #666;\n}\n.no-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 3rem 1rem;\n  color: #999;\n}\n.no-data mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n  opacity: 0.5;\n}\n.no-data p {\n  font-size: 1rem;\n}\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1rem;\n  padding: 3rem;\n  color: #999;\n}\n.empty-state mat-icon {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  opacity: 0.3;\n}\n.empty-state h3 {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #666;\n}\n.empty-state p {\n  margin: 0.5rem 0 0;\n  max-width: 300px;\n  text-align: center;\n}\n.invitations-table {\n  width: 100%;\n  overflow-x: auto;\n}\n.invitations-table .invitations-list {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 1rem;\n}\n.invitations-table .invitations-list thead {\n  background-color: #f5f6fa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.invitations-table .invitations-list th {\n  padding: 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #333;\n  font-size: 0.9rem;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.invitations-table .invitations-list td {\n  padding: 1rem;\n  border-bottom: 1px solid #e0e0e0;\n  color: #555;\n  vertical-align: middle;\n}\n.invitations-table .invitations-list tbody tr {\n  transition: background-color 0.2s ease;\n}\n.invitations-table .invitations-list tbody tr:hover {\n  background-color: #fafafa;\n}\n.invitations-table .invitations-list tbody tr.expired {\n  opacity: 0.6;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.4rem 0.8rem;\n  border-radius: 20px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.badge.badge-pending {\n  background-color: #fff3e0;\n  color: #e65100;\n}\n.badge.badge-used {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-expired {\n  background-color: #ffebee;\n  color: #c62828;\n}\n.badge.badge-verified {\n  background-color: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-verified mat-icon {\n  font-size: 0.85rem;\n}\n.expires {\n  color: #666;\n  font-weight: 500;\n}\n.expired-text {\n  color: #d32f2f;\n  font-weight: 500;\n}\n.used-text {\n  color: #388e3c;\n  font-weight: 500;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.5rem 1rem;\n  border: none;\n  border-radius: 4px;\n  font-size: 0.85rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.3s ease;\n}\n.action-btn mat-icon {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n}\n.action-btn.resend-btn {\n  background-color: #e3f2fd;\n  color: #1976d2;\n}\n.action-btn.resend-btn:hover {\n  background-color: #bbdefb;\n  transform: translateY(-2px);\n  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);\n}\n.action-btn.resend-btn:active {\n  transform: translateY(0);\n}\n.action-disabled {\n  color: #ccc;\n  font-size: 1.2rem;\n  font-weight: bold;\n}\n.rel-add-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rel-add-row .rel-input {\n  flex: 1;\n  max-width: 200px;\n}\n.rel-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rel-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.rel-item mat-icon {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rel-info {\n  flex: 1;\n  min-width: 0;\n}\n.rel-info .rel-name {\n  font-weight: 500;\n  font-size: 0.95rem;\n}\n.rel-info .rel-email {\n  font-size: 0.8rem;\n  color: #666;\n}\n/*# sourceMappingURL=admin-users.css.map */\n"] }]
  }], () => [{ type: AdminUsersService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }, { type: MatDialog }, { type: FormBuilder }, { type: ProUsersService }, { type: MatSnackBar }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 39 });
})();
var CreateUserDialogComponent = class _CreateUserDialogComponent {
  dialogRef;
  fb;
  form;
  constructor(dialogRef, fb) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.form = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      passwordHash: ["", [Validators.required, Validators.minLength(6)]],
      phoneNumber: [""]
    });
  }
  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
  static \u0275fac = function CreateUserDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateUserDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateUserDialogComponent, selectors: [["app-create-user-dialog"]], decls: 36, vars: 8, consts: [["mat-dialog-title", ""], [1, "create-form", 3, "formGroup"], [1, "form-row"], ["appearance", "outline", 1, "half-width"], ["matInput", "", "formControlName", "firstName"], [4, "ngIf"], ["matInput", "", "formControlName", "lastName"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "passwordHash"], ["matInput", "", "formControlName", "phoneNumber"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"]], template: function CreateUserDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "Create New User");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "div", 2)(5, "mat-form-field", 3)(6, "mat-label");
      \u0275\u0275text(7, "First Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(8, "input", 4);
      \u0275\u0275template(9, CreateUserDialogComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "mat-form-field", 3)(11, "mat-label");
      \u0275\u0275text(12, "Last Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(13, "input", 6);
      \u0275\u0275template(14, CreateUserDialogComponent_mat_error_14_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(15, "mat-form-field", 7)(16, "mat-label");
      \u0275\u0275text(17, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "input", 8);
      \u0275\u0275template(19, CreateUserDialogComponent_mat_error_19_Template, 2, 0, "mat-error", 5)(20, CreateUserDialogComponent_mat_error_20_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-form-field", 7)(22, "mat-label");
      \u0275\u0275text(23, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "input", 9);
      \u0275\u0275template(25, CreateUserDialogComponent_mat_error_25_Template, 2, 0, "mat-error", 5)(26, CreateUserDialogComponent_mat_error_26_Template, 2, 0, "mat-error", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(27, "mat-form-field", 7)(28, "mat-label");
      \u0275\u0275text(29, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(30, "input", 10);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(31, "mat-dialog-actions", 11)(32, "button", 12);
      \u0275\u0275listener("click", function CreateUserDialogComponent_Template_button_click_32_listener() {
        return ctx.dialogRef.close();
      });
      \u0275\u0275text(33, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "button", 13);
      \u0275\u0275listener("click", function CreateUserDialogComponent_Template_button_click_34_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(35, "Create User");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(6);
      \u0275\u0275property("ngIf", (tmp_1_0 = ctx.form.get("firstName")) == null ? null : tmp_1_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("lastName")) == null ? null : tmp_2_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.hasError("email"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("passwordHash")) == null ? null : tmp_5_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.form.get("passwordHash")) == null ? null : tmp_6_0.hasError("minlength"));
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.form.invalid);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatFormFieldModule, MatButtonModule, MatButton], styles: [_c0] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateUserDialogComponent, [{
    type: Component,
    args: [{ selector: "app-create-user-dialog", standalone: true, imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule], template: `
    <h2 mat-dialog-title>Create New User</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="create-form">
        <div class="form-row">
          <mat-form-field appearance="outline" class="half-width">
            <mat-label>First Name</mat-label>
            <input matInput formControlName="firstName" />
            <mat-error *ngIf="form.get('firstName')?.hasError('required')">Required</mat-error>
          </mat-form-field>
          <mat-form-field appearance="outline" class="half-width">
            <mat-label>Last Name</mat-label>
            <input matInput formControlName="lastName" />
            <mat-error *ngIf="form.get('lastName')?.hasError('required')">Required</mat-error>
          </mat-form-field>
        </div>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput type="email" formControlName="email" />
          <mat-error *ngIf="form.get('email')?.hasError('required')">Required</mat-error>
          <mat-error *ngIf="form.get('email')?.hasError('email')">Invalid email</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Password</mat-label>
          <input matInput type="password" formControlName="passwordHash" />
          <mat-error *ngIf="form.get('passwordHash')?.hasError('required')">Required</mat-error>
          <mat-error *ngIf="form.get('passwordHash')?.hasError('minlength')">Minimum 6 characters</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Phone Number</mat-label>
          <input matInput formControlName="phoneNumber" />
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button mat-raised-button color="primary" (click)="submit()" [disabled]="form.invalid">Create User</button>
    </mat-dialog-actions>
  `, styles: ["/* angular:styles/component:scss;9e73ce750f8b05b562441ea07cb53f746844f8746296bd9504f1214b6186ca3d;C:/repos/yProHub/prohub-ui/src/app/features/admin-users/admin-users.ts */\n.create-form {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 8px;\n  min-width: 380px;\n}\n.full-width {\n  width: 100%;\n}\n.form-row {\n  display: flex;\n  gap: 12px;\n}\n.half-width {\n  flex: 1;\n}\n/*# sourceMappingURL=admin-users.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateUserDialogComponent, { className: "CreateUserDialogComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 579 });
})();
var CreateProDialogComponent = class _CreateProDialogComponent {
  dialogRef;
  fb;
  form;
  constructor(dialogRef, fb) {
    this.dialogRef = dialogRef;
    this.fb = fb;
    this.form = this.fb.group({
      proName: ["", Validators.required],
      businessName: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      passwordHash: ["", [Validators.required, Validators.minLength(6)]],
      phoneNumber: [""]
    });
  }
  submit() {
    if (this.form.valid) {
      this.dialogRef.close(this.form.value);
    }
  }
  static \u0275fac = function CreateProDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CreateProDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CreateProDialogComponent, selectors: [["app-create-pro-dialog"]], decls: 35, vars: 8, consts: [["mat-dialog-title", ""], [1, "create-form", 3, "formGroup"], ["appearance", "outline", 1, "full-width"], ["matInput", "", "formControlName", "proName"], [4, "ngIf"], ["matInput", "", "formControlName", "businessName"], ["matInput", "", "type", "email", "formControlName", "email"], ["matInput", "", "type", "password", "formControlName", "passwordHash"], ["matInput", "", "formControlName", "phoneNumber"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"]], template: function CreateProDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "Create New Professional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "mat-form-field", 2)(5, "mat-label");
      \u0275\u0275text(6, "Pro Name (Full Name)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(7, "input", 3);
      \u0275\u0275template(8, CreateProDialogComponent_mat_error_8_Template, 2, 0, "mat-error", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(9, "mat-form-field", 2)(10, "mat-label");
      \u0275\u0275text(11, "Business Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 5);
      \u0275\u0275template(13, CreateProDialogComponent_mat_error_13_Template, 2, 0, "mat-error", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-form-field", 2)(15, "mat-label");
      \u0275\u0275text(16, "Email");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 6);
      \u0275\u0275template(18, CreateProDialogComponent_mat_error_18_Template, 2, 0, "mat-error", 4)(19, CreateProDialogComponent_mat_error_19_Template, 2, 0, "mat-error", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(20, "mat-form-field", 2)(21, "mat-label");
      \u0275\u0275text(22, "Password");
      \u0275\u0275elementEnd();
      \u0275\u0275element(23, "input", 7);
      \u0275\u0275template(24, CreateProDialogComponent_mat_error_24_Template, 2, 0, "mat-error", 4)(25, CreateProDialogComponent_mat_error_25_Template, 2, 0, "mat-error", 4);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "mat-form-field", 2)(27, "mat-label");
      \u0275\u0275text(28, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(29, "input", 8);
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(30, "mat-dialog-actions", 9)(31, "button", 10);
      \u0275\u0275listener("click", function CreateProDialogComponent_Template_button_click_31_listener() {
        return ctx.dialogRef.close();
      });
      \u0275\u0275text(32, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "button", 11);
      \u0275\u0275listener("click", function CreateProDialogComponent_Template_button_click_33_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(34, "Create Professional");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(3);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_1_0 = ctx.form.get("proName")) == null ? null : tmp_1_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_2_0 = ctx.form.get("businessName")) == null ? null : tmp_2_0.hasError("required"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_3_0 = ctx.form.get("email")) == null ? null : tmp_3_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_4_0 = ctx.form.get("email")) == null ? null : tmp_4_0.hasError("email"));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", (tmp_5_0 = ctx.form.get("passwordHash")) == null ? null : tmp_5_0.hasError("required"));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (tmp_6_0 = ctx.form.get("passwordHash")) == null ? null : tmp_6_0.hasError("minlength"));
      \u0275\u0275advance(8);
      \u0275\u0275property("disabled", ctx.form.invalid);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatError, MatFormFieldModule, MatButtonModule, MatButton], styles: [_c0] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CreateProDialogComponent, [{
    type: Component,
    args: [{ selector: "app-create-pro-dialog", standalone: true, imports: [CommonModule, ReactiveFormsModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule], template: `
    <h2 mat-dialog-title>Create New Professional</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="create-form">
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Pro Name (Full Name)</mat-label>
          <input matInput formControlName="proName" />
          <mat-error *ngIf="form.get('proName')?.hasError('required')">Required</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Business Name</mat-label>
          <input matInput formControlName="businessName" />
          <mat-error *ngIf="form.get('businessName')?.hasError('required')">Required</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Email</mat-label>
          <input matInput type="email" formControlName="email" />
          <mat-error *ngIf="form.get('email')?.hasError('required')">Required</mat-error>
          <mat-error *ngIf="form.get('email')?.hasError('email')">Invalid email</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Password</mat-label>
          <input matInput type="password" formControlName="passwordHash" />
          <mat-error *ngIf="form.get('passwordHash')?.hasError('required')">Required</mat-error>
          <mat-error *ngIf="form.get('passwordHash')?.hasError('minlength')">Minimum 6 characters</mat-error>
        </mat-form-field>
        <mat-form-field appearance="outline" class="full-width">
          <mat-label>Phone Number</mat-label>
          <input matInput formControlName="phoneNumber" />
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close()">Cancel</button>
      <button mat-raised-button color="accent" (click)="submit()" [disabled]="form.invalid">Create Professional</button>
    </mat-dialog-actions>
  `, styles: ["/* angular:styles/component:scss;9e73ce750f8b05b562441ea07cb53f746844f8746296bd9504f1214b6186ca3d;C:/repos/yProHub/prohub-ui/src/app/features/admin-users/admin-users.ts */\n.create-form {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  padding-top: 8px;\n  min-width: 380px;\n}\n.full-width {\n  width: 100%;\n}\n.form-row {\n  display: flex;\n  gap: 12px;\n}\n.half-width {\n  flex: 1;\n}\n/*# sourceMappingURL=admin-users.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CreateProDialogComponent, { className: "CreateProDialogComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 645 });
})();
var InviteAdminDialogComponent = class _InviteAdminDialogComponent {
  dialogRef;
  email = "";
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  isEmailValid() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this.email);
  }
  onConfirm() {
    if (this.isEmailValid()) {
      this.dialogRef.close({ email: this.email });
    }
  }
  onCancel() {
    this.dialogRef.close();
  }
  static \u0275fac = function InviteAdminDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InviteAdminDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteAdminDialogComponent, selectors: [["app-invite-admin-dialog"]], decls: 15, vars: 2, consts: [[1, "invite-admin-dialog"], ["mat-dialog-title", ""], [1, "full-width"], ["matInput", "", "placeholder", "admin@example.com", 3, "ngModelChange", "ngModel"], [1, "info-text"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"]], template: function InviteAdminDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Invite New Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
      \u0275\u0275text(6, "Admin Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function InviteAdminDialogComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "Enter the email address of the person you want to invite as a platform administrator.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-dialog-actions", 5)(11, "button", 6);
      \u0275\u0275listener("click", function InviteAdminDialogComponent_Template_button_click_11_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(12, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function InviteAdminDialogComponent_Template_button_click_13_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(14, " Send Invite ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !ctx.isEmailValid());
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatFormFieldModule, MatButtonModule, MatButton], styles: ["\n\n.invite-admin-dialog[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.info-text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.9rem;\n  color: #666;\n}\n/*# sourceMappingURL=admin-users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteAdminDialogComponent, [{
    type: Component,
    args: [{ selector: "app-invite-admin-dialog", standalone: true, imports: [CommonModule, FormsModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule], template: `
    <div class="invite-admin-dialog">
      <h2 mat-dialog-title>Invite New Admin</h2>
      <mat-dialog-content>
        <mat-form-field class="full-width">
          <mat-label>Admin Email</mat-label>
          <input matInput [(ngModel)]="email" placeholder="admin@example.com" />
        </mat-form-field>
        <p class="info-text">Enter the email address of the person you want to invite as a platform administrator.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-raised-button color="primary" (click)="onConfirm()" [disabled]="!isEmailValid()">
          Send Invite
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;2805327a31090760c2a10534b50c3bbf20da1c4acf3f6f345f1e48488bc3c0e1;C:/repos/yProHub/prohub-ui/src/app/features/admin-users/admin-users.ts */\n.invite-admin-dialog {\n  padding: 0;\n}\n.full-width {\n  width: 100%;\n}\n.info-text {\n  margin-top: 1rem;\n  font-size: 0.9rem;\n  color: #666;\n}\n/*# sourceMappingURL=admin-users.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteAdminDialogComponent, { className: "InviteAdminDialogComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 704 });
})();
export {
  AdminUsersComponent,
  CreateProDialogComponent,
  CreateUserDialogComponent,
  InviteAdminDialogComponent
};
//# sourceMappingURL=chunk-PG7CDLAM.js.map

