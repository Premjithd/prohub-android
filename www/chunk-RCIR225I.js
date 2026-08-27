import {
  DefaultValueAccessor,
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-WDC3QMAT.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  RouterModule
} from "./chunk-BALEJLRX.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  HttpClient,
  NgForOf,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
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

// src/app/features/my-users/my-users.ts
function MyUsersComponent_div_9_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inviteError);
  }
}
function MyUsersComponent_div_9_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.inviteSuccess);
  }
}
function MyUsersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11)(2, "h3");
    \u0275\u0275text(3, "Invite a User");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 12);
    \u0275\u0275text(5, "Enter the email address of the person you'd like to add to your team. They'll receive a link to set up their account.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13)(7, "label");
    \u0275\u0275text(8, "Email address");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function MyUsersComponent_div_9_Template_input_ngModelChange_9_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.inviteEmail, $event) || (ctx_r1.inviteEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown.enter", function MyUsersComponent_div_9_Template_input_keydown_enter_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendInvite());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, MyUsersComponent_div_9_div_10_Template, 2, 1, "div", 15)(11, MyUsersComponent_div_9_div_11_Template, 2, 1, "div", 16);
    \u0275\u0275elementStart(12, "div", 17)(13, "button", 18);
    \u0275\u0275listener("click", function MyUsersComponent_div_9_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.closeInvitePanel());
    });
    \u0275\u0275text(14, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 19);
    \u0275\u0275listener("click", function MyUsersComponent_div_9_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.sendInvite());
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.inviteEmail);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inviteError);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.inviteSuccess);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r1.inviteLoading);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.inviteLoading ? "Sending\u2026" : "Send Invitation", " ");
  }
}
function MyUsersComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275element(1, "div", 23);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading team members\u2026");
    \u0275\u0275elementEnd()();
  }
}
function MyUsersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.error);
  }
}
function MyUsersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 25)(1, "div", 26);
    \u0275\u0275text(2, "\u{1F465}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "No team members yet");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Invite users to join your business. They'll be linked to your business name and activities.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 4);
    \u0275\u0275listener("click", function MyUsersComponent_div_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.openInvitePanel());
    });
    \u0275\u0275text(8, "+ Invite your first user");
    \u0275\u0275elementEnd()();
  }
}
function MyUsersComponent_div_13_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const u_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(u_r5.user.email);
  }
}
function MyUsersComponent_div_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "div", 30);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 31)(4, "div", 32);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, MyUsersComponent_div_13_div_1_div_6_Template, 2, 1, "div", 33);
    \u0275\u0275elementStart(7, "div", 34)(8, "span", 35);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 36);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "button", 37);
    \u0275\u0275listener("click", function MyUsersComponent_div_13_div_1_Template_button_click_13_listener() {
      const u_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.revoke(u_r5.id));
    });
    \u0275\u0275text(14, "\u2715");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const u_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_3_0 = ctx_r1.displayName(u_r5)[0]) == null ? null : tmp_3_0.toUpperCase()) || "?", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.displayName(u_r5));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", u_r5.user);
    \u0275\u0275advance(2);
    \u0275\u0275classMap("status-" + u_r5.status.toLowerCase());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", u_r5.status, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Added ", \u0275\u0275pipeBind2(12, 7, u_r5.createdAt, "mediumDate"));
  }
}
function MyUsersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275template(1, MyUsersComponent_div_13_div_1_Template, 15, 10, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.users);
  }
}
var MyUsersComponent = class _MyUsersComponent {
  http;
  cdr;
  users = [];
  loading = true;
  error = "";
  showInvitePanel = false;
  inviteEmail = "";
  inviteLoading = false;
  inviteError = "";
  inviteSuccess = "";
  api = `${environment.apiUrl}/pro-users`;
  constructor(http, cdr) {
    this.http = http;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loadUsers();
  }
  loadUsers() {
    this.loading = true;
    this.http.get(this.api).subscribe({
      next: (users) => {
        this.users = users;
        this.loading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.error = "Could not load team members.";
        this.loading = false;
        this.cdr.detectChanges();
      }
    });
  }
  openInvitePanel() {
    this.showInvitePanel = true;
    this.inviteEmail = "";
    this.inviteError = "";
    this.inviteSuccess = "";
  }
  closeInvitePanel() {
    this.showInvitePanel = false;
  }
  sendInvite() {
    if (!this.inviteEmail?.trim()) {
      this.inviteError = "Please enter an email address.";
      return;
    }
    this.inviteLoading = true;
    this.inviteError = "";
    this.inviteSuccess = "";
    this.http.post(`${this.api}/invite`, {
      email: this.inviteEmail.trim(),
      baseUrl: window.location.origin
    }).subscribe({
      next: (res) => {
        this.inviteSuccess = res.message || "Invitation sent!";
        this.inviteLoading = false;
        this.inviteEmail = "";
        this.loadUsers();
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.inviteError = err.error?.message || "Could not send invitation.";
        this.inviteLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  revoke(id) {
    if (!confirm("Remove this user from your team?"))
      return;
    this.http.delete(`${this.api}/${id}`).subscribe({
      next: () => {
        this.users = this.users.filter((u) => u.id !== id);
        this.cdr.detectChanges();
      },
      error: () => {
        alert("Could not remove user. Please try again.");
      }
    });
  }
  displayName(u) {
    if (u.user)
      return `${u.user.firstName} ${u.user.lastName}`;
    return u.inviteEmail;
  }
  static \u0275fac = function MyUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyUsersComponent)(\u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyUsersComponent, selectors: [["app-my-users"]], decls: 14, vars: 5, consts: [[1, "my-users-page"], [1, "page-header"], [1, "header-text"], [1, "subtitle"], [1, "btn-invite", 3, "click"], ["class", "invite-panel", 4, "ngIf"], ["class", "loading-state", 4, "ngIf"], ["class", "error-state", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], ["class", "user-list", 4, "ngIf"], [1, "invite-panel"], [1, "invite-card"], [1, "invite-hint"], [1, "form-group"], ["type", "email", "placeholder", "name@example.com", 1, "form-control", 3, "ngModelChange", "keydown.enter", "ngModel"], ["class", "invite-error", 4, "ngIf"], ["class", "invite-success", 4, "ngIf"], [1, "invite-actions"], [1, "btn-cancel", 3, "click"], [1, "btn-send", 3, "click", "disabled"], [1, "invite-error"], [1, "invite-success"], [1, "loading-state"], [1, "spinner"], [1, "error-state"], [1, "empty-state"], [1, "empty-icon"], [1, "user-list"], ["class", "user-card", 4, "ngFor", "ngForOf"], [1, "user-card"], [1, "user-avatar"], [1, "user-info"], [1, "user-name"], ["class", "user-email", 4, "ngIf"], [1, "user-meta"], [1, "status-badge"], [1, "joined-date"], ["title", "Remove from team", 1, "btn-revoke", 3, "click"], [1, "user-email"]], template: function MyUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "My Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p", 3);
      \u0275\u0275text(6, "Users linked to your business");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(7, "button", 4);
      \u0275\u0275listener("click", function MyUsersComponent_Template_button_click_7_listener() {
        return ctx.openInvitePanel();
      });
      \u0275\u0275text(8, "+ Invite User");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(9, MyUsersComponent_div_9_Template, 17, 5, "div", 5)(10, MyUsersComponent_div_10_Template, 4, 0, "div", 6)(11, MyUsersComponent_div_11_Template, 2, 1, "div", 7)(12, MyUsersComponent_div_12_Template, 9, 0, "div", 8)(13, MyUsersComponent_div_13_Template, 2, 1, "div", 9);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275property("ngIf", ctx.showInvitePanel);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error && !ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && !ctx.error && ctx.users.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.users.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, RouterModule, DatePipe], styles: ["\n\n.my-users-page[_ngcontent-%COMP%] {\n  max-width: 680px;\n  margin: 0 auto;\n  padding: 24px 16px 80px;\n}\n.page-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #6b7280;\n}\n.btn-invite[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  padding: 10px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-invite[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.invite-panel[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.invite-card[_ngcontent-%COMP%] {\n  background: #f8f7ff;\n  border: 1.5px solid #c4b5fd;\n  border-radius: 12px;\n  padding: 20px;\n}\n.invite-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 6px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.invite-card[_ngcontent-%COMP%]   .invite-hint[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0 0 16px;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 12px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.form-control[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #1f2937;\n  background: #fff;\n}\n.form-control[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.invite-error[_ngcontent-%COMP%] {\n  color: #ef4444;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.invite-success[_ngcontent-%COMP%] {\n  color: #10b981;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.invite-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.btn-cancel[_ngcontent-%COMP%] {\n  padding: 9px 18px;\n  background: #f3f4f6;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  cursor: pointer;\n}\n.btn-cancel[_ngcontent-%COMP%]:hover {\n  background: #e5e7eb;\n}\n.btn-send[_ngcontent-%COMP%] {\n  padding: 9px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-send[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.loading-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 48px 0;\n}\n.loading-state[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%] {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: _ngcontent-%COMP%_spin 0.8s linear infinite;\n  margin: 0 auto 12px;\n}\n.loading-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 14px;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-state[_ngcontent-%COMP%] {\n  padding: 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #ef4444;\n  font-size: 14px;\n  text-align: center;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 64px 24px;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 14px;\n  margin: 0 0 24px;\n}\n.user-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.user-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 16px;\n  transition: box-shadow 0.15s;\n}\n.user-card[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 6px;\n}\n.status-badge[_ngcontent-%COMP%] {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.status-badge.status-active[_ngcontent-%COMP%] {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge.status-revoked[_ngcontent-%COMP%] {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.joined-date[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.btn-revoke[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: transparent;\n  border: 1.5px solid #e5e7eb;\n  color: #9ca3af;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.btn-revoke[_ngcontent-%COMP%]:hover {\n  background: #fee2e2;\n  border-color: #fca5a5;\n  color: #ef4444;\n}\n/*# sourceMappingURL=my-users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyUsersComponent, [{
    type: Component,
    args: [{ selector: "app-my-users", standalone: true, imports: [CommonModule, FormsModule, RouterModule], template: `<div class="my-users-page">

  <div class="page-header">
    <div class="header-text">
      <h1>My Team</h1>
      <p class="subtitle">Users linked to your business</p>
    </div>
    <button class="btn-invite" (click)="openInvitePanel()">+ Invite User</button>
  </div>

  <!-- Invite Panel -->
  <div class="invite-panel" *ngIf="showInvitePanel">
    <div class="invite-card">
      <h3>Invite a User</h3>
      <p class="invite-hint">Enter the email address of the person you'd like to add to your team. They'll receive a link to set up their account.</p>

      <div class="form-group">
        <label>Email address</label>
        <input
          type="email"
          class="form-control"
          [(ngModel)]="inviteEmail"
          placeholder="name@example.com"
          (keydown.enter)="sendInvite()"
        />
      </div>

      <div class="invite-error" *ngIf="inviteError">{{ inviteError }}</div>
      <div class="invite-success" *ngIf="inviteSuccess">{{ inviteSuccess }}</div>

      <div class="invite-actions">
        <button class="btn-cancel" (click)="closeInvitePanel()">Cancel</button>
        <button class="btn-send" [disabled]="inviteLoading" (click)="sendInvite()">
          {{ inviteLoading ? 'Sending\u2026' : 'Send Invitation' }}
        </button>
      </div>
    </div>
  </div>

  <!-- Loading -->
  <div class="loading-state" *ngIf="loading">
    <div class="spinner"></div>
    <p>Loading team members\u2026</p>
  </div>

  <!-- Error -->
  <div class="error-state" *ngIf="error && !loading">{{ error }}</div>

  <!-- Empty state -->
  <div class="empty-state" *ngIf="!loading && !error && users.length === 0">
    <div class="empty-icon">\u{1F465}</div>
    <h3>No team members yet</h3>
    <p>Invite users to join your business. They'll be linked to your business name and activities.</p>
    <button class="btn-invite" (click)="openInvitePanel()">+ Invite your first user</button>
  </div>

  <!-- User list -->
  <div class="user-list" *ngIf="!loading && users.length > 0">
    <div class="user-card" *ngFor="let u of users">
      <div class="user-avatar">
        {{ displayName(u)[0]?.toUpperCase() || '?' }}
      </div>
      <div class="user-info">
        <div class="user-name">{{ displayName(u) }}</div>
        <div class="user-email" *ngIf="u.user">{{ u.user.email }}</div>
        <div class="user-meta">
          <span class="status-badge" [class]="'status-' + u.status.toLowerCase()">
            {{ u.status }}
          </span>
          <span class="joined-date">Added {{ u.createdAt | date:'mediumDate' }}</span>
        </div>
      </div>
      <button class="btn-revoke" (click)="revoke(u.id)" title="Remove from team">\u2715</button>
    </div>
  </div>

</div>
`, styles: ["/* src/app/features/my-users/my-users.scss */\n.my-users-page {\n  max-width: 680px;\n  margin: 0 auto;\n  padding: 24px 16px 80px;\n}\n.page-header {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.page-header h1 {\n  margin: 0;\n  font-size: 22px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.page-header .subtitle {\n  margin: 4px 0 0;\n  font-size: 13px;\n  color: #6b7280;\n}\n.btn-invite {\n  flex-shrink: 0;\n  padding: 10px 18px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: transform 0.15s, box-shadow 0.15s;\n}\n.btn-invite:hover {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.35);\n}\n.invite-panel {\n  margin-bottom: 24px;\n}\n.invite-card {\n  background: #f8f7ff;\n  border: 1.5px solid #c4b5fd;\n  border-radius: 12px;\n  padding: 20px;\n}\n.invite-card h3 {\n  margin: 0 0 6px;\n  font-size: 16px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.invite-card .invite-hint {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 0 0 16px;\n}\n.form-group {\n  margin-bottom: 12px;\n}\n.form-group label {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: #374151;\n  margin-bottom: 6px;\n}\n.form-control {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 10px 14px;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  color: #1f2937;\n  background: #fff;\n}\n.form-control:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.12);\n}\n.invite-error {\n  color: #ef4444;\n  font-size: 13px;\n  margin-bottom: 10px;\n}\n.invite-success {\n  color: #10b981;\n  font-size: 13px;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.invite-actions {\n  display: flex;\n  gap: 10px;\n  justify-content: flex-end;\n}\n.btn-cancel {\n  padding: 9px 18px;\n  background: #f3f4f6;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  color: #374151;\n  cursor: pointer;\n}\n.btn-cancel:hover {\n  background: #e5e7eb;\n}\n.btn-send {\n  padding: 9px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n.btn-send:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.loading-state {\n  text-align: center;\n  padding: 48px 0;\n}\n.loading-state .spinner {\n  width: 36px;\n  height: 36px;\n  border: 3px solid #e5e7eb;\n  border-top-color: #667eea;\n  border-radius: 50%;\n  animation: spin 0.8s linear infinite;\n  margin: 0 auto 12px;\n}\n.loading-state p {\n  color: #9ca3af;\n  font-size: 14px;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.error-state {\n  padding: 16px;\n  background: #fef2f2;\n  border: 1px solid #fecaca;\n  border-radius: 8px;\n  color: #ef4444;\n  font-size: 14px;\n  text-align: center;\n}\n.empty-state {\n  text-align: center;\n  padding: 64px 24px;\n}\n.empty-state .empty-icon {\n  font-size: 48px;\n  margin-bottom: 16px;\n}\n.empty-state h3 {\n  margin: 0 0 8px;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.empty-state p {\n  color: #6b7280;\n  font-size: 14px;\n  margin: 0 0 24px;\n}\n.user-list {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n}\n.user-card {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  background: #fff;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 14px 16px;\n  transition: box-shadow 0.15s;\n}\n.user-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.07);\n}\n.user-avatar {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  font-size: 18px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.user-info {\n  flex: 1;\n  min-width: 0;\n}\n.user-info .user-name {\n  font-weight: 600;\n  font-size: 15px;\n  color: #1f2937;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info .user-email {\n  font-size: 13px;\n  color: #6b7280;\n  margin-top: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.user-info .user-meta {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  margin-top: 6px;\n}\n.status-badge {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n.status-badge.status-active {\n  background: #d1fae5;\n  color: #065f46;\n}\n.status-badge.status-pending {\n  background: #fef3c7;\n  color: #92400e;\n}\n.status-badge.status-revoked {\n  background: #fee2e2;\n  color: #991b1b;\n}\n.joined-date {\n  font-size: 12px;\n  color: #9ca3af;\n}\n.btn-revoke {\n  flex-shrink: 0;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: transparent;\n  border: 1.5px solid #e5e7eb;\n  color: #9ca3af;\n  font-size: 13px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition:\n    background 0.15s,\n    color 0.15s,\n    border-color 0.15s;\n}\n.btn-revoke:hover {\n  background: #fee2e2;\n  border-color: #fca5a5;\n  color: #ef4444;\n}\n/*# sourceMappingURL=my-users.css.map */\n"] }]
  }], () => [{ type: HttpClient }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyUsersComponent, { className: "MyUsersComponent", filePath: "src/app/features/my-users/my-users.ts", lineNumber: 30 });
})();
export {
  MyUsersComponent
};
//# sourceMappingURL=chunk-RCIR225I.js.map

