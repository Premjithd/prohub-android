import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-JXK3CY2S.js";
import {
  MatTooltipModule
} from "./chunk-EBH4ZGAC.js";
import {
  MatTooltip
} from "./chunk-CD562ZEU.js";
import {
  ProUsersService
} from "./chunk-SWCRQUIJ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-Z5YC3QOU.js";
import "./chunk-YFVGD4AB.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KUT34PAX.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-LWBGNZR5.js";
import "./chunk-B52SAYO3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-GE3YQJYL.js";
import "./chunk-CSFNIUM5.js";
import {
  Auth
} from "./chunk-A4EHLAJD.js";
import "./chunk-UGJKRHBV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-NMZ5GJTW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  Inject,
  NgForOf,
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
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-ANTPJ2CK.js";
import "./chunk-7WUTQBRG.js";

// src/app/shared/confirm-dialog/confirm-dialog.component.ts
var ConfirmDialogComponent = class _ConfirmDialogComponent {
  dialogRef;
  data;
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
  }
  static \u0275fac = function ConfirmDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ConfirmDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 9, vars: 1, consts: [["mat-dialog-title", ""], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function ConfirmDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1, "Confirm");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content");
      \u0275\u0275text(3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "mat-dialog-actions", 1)(5, "button", 2);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_5_listener() {
        return ctx.dialogRef.close(false);
      });
      \u0275\u0275text(6, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "button", 3);
      \u0275\u0275listener("click", function ConfirmDialogComponent_Template_button_click_7_listener() {
        return ctx.dialogRef.close(true);
      });
      \u0275\u0275text(8, "Confirm");
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(ctx.data.message);
    }
  }, dependencies: [MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatButtonModule, MatButton], encapsulation: 2 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmDialogComponent, [{
    type: Component,
    args: [{
      selector: "app-confirm-dialog",
      standalone: true,
      imports: [MatDialogModule, MatButtonModule],
      template: `
    <h2 mat-dialog-title>Confirm</h2>
    <mat-dialog-content>{{ data.message }}</mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button (click)="dialogRef.close(false)">Cancel</button>
      <button mat-raised-button color="warn" (click)="dialogRef.close(true)">Confirm</button>
    </mat-dialog-actions>
  `
    }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmDialogComponent, { className: "ConfirmDialogComponent", filePath: "src/app/shared/confirm-dialog/confirm-dialog.component.ts", lineNumber: 18 });
})();

// src/app/features/my-clients/my-clients.ts
function MyClientsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function MyClientsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon");
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No clients linked yet. Clients appear here once an admin links them or you complete jobs together.");
    \u0275\u0275elementEnd()();
  }
}
function MyClientsComponent_div_12_div_1_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r2.phoneNumber);
  }
}
function MyClientsComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "mat-icon");
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 15)(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 17);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 18);
    \u0275\u0275template(10, MyClientsComponent_div_12_div_1_span_10_Template, 2, 1, "span", 19);
    \u0275\u0275elementStart(11, "span", 20)(12, "mat-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 21);
    \u0275\u0275listener("click", function MyClientsComponent_div_12_div_1_Template_button_click_15_listener() {
      const c_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.confirmRemove(c_r2));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17, "person_remove");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const c_r2 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(c_r2.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", c_r2.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275classProp("verified", c_r2.isEmailVerified)("unverified", !c_r2.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(c_r2.isEmailVerified ? "verified" : "unpublished");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", c_r2.isEmailVerified ? "Email verified" : "Email unverified", " ");
  }
}
function MyClientsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, MyClientsComponent_div_12_div_1_Template, 18, 9, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.clients);
  }
}
var MyClientsComponent = class _MyClientsComponent {
  proUsersService;
  auth;
  dialog;
  snack;
  cdr;
  clients = [];
  loading = true;
  proId;
  constructor(proUsersService, auth, dialog, snack, cdr) {
    this.proUsersService = proUsersService;
    this.auth = auth;
    this.dialog = dialog;
    this.snack = snack;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.proId = Number(this.auth.getUserId());
    this.load();
  }
  load() {
    this.loading = true;
    this.proUsersService.getUsersUnderPro(this.proId).subscribe({
      next: (res) => {
        this.clients = Array.isArray(res) ? res : res?.$values ?? [];
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  confirmRemove(client) {
    const ref = this.dialog.open(ConfirmDialogComponent, {
      data: { message: `Remove ${client.name} from your clients?` }
    });
    ref.afterClosed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.proUsersService.removeUserFromPro(this.proId, client.id).subscribe({
        next: () => {
          this.clients = this.clients.filter((c) => c.id !== client.id);
          this.snack.open("Client removed.", "OK", { duration: 3e3 });
          this.cdr.markForCheck();
        },
        error: () => this.snack.open("Failed to remove client.", "OK", { duration: 3e3 })
      });
    });
  }
  static \u0275fac = function MyClientsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyClientsComponent)(\u0275\u0275directiveInject(ProUsersService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyClientsComponent, selectors: [["app-my-clients"]], decls: 13, vars: 3, consts: [[1, "mc-wrapper"], [1, "mc-header"], [1, "mc-title"], ["routerLink", "/my-jobs-pro", "mat-icon-button", "", 1, "back-btn"], [1, "mc-subtitle"], ["class", "mc-loading", 4, "ngIf"], ["class", "mc-empty", 4, "ngIf"], ["class", "mc-list", 4, "ngIf"], [1, "mc-loading"], ["diameter", "40"], [1, "mc-empty"], [1, "mc-list"], ["class", "mc-card", 4, "ngFor", "ngForOf"], [1, "mc-card"], [1, "mc-avatar"], [1, "mc-info"], [1, "mc-name"], [1, "mc-email"], [1, "mc-meta"], ["class", "mc-phone", 4, "ngIf"], [1, "mc-badge"], ["mat-icon-button", "", "color", "warn", "matTooltip", "Remove client", 3, "click"], [1, "mc-phone"]], template: function MyClientsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "mat-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "My Clients");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275text(9, "Users you have worked with");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, MyClientsComponent_div_10_Template, 2, 0, "div", 5)(11, MyClientsComponent_div_11_Template, 5, 0, "div", 6)(12, MyClientsComponent_div_12_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.clients.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.clients.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, MatIconModule, MatIcon, MatButtonModule, MatIconButton, MatProgressSpinnerModule, MatProgressSpinner, MatTooltipModule, MatTooltip, MatSnackBarModule, MatDialogModule, RouterModule, RouterLink], styles: ["\n\n.mc-wrapper[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.mc-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.mc-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.mc-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.75rem;\n}\n.back-btn[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mc-subtitle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  padding-left: 48px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.mc-loading[_ngcontent-%COMP%], \n.mc-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #888;\n}\n.mc-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.mc-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n}\n.mc-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.mc-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  max-width: 380px;\n}\n.mc-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mc-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.mc-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #e8eeff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mc-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.mc-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.mc-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.mc-email[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: #555;\n  margin: 2px 0;\n}\n.mc-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 4px;\n}\n.mc-phone[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.mc-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.mc-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.mc-badge.verified[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.mc-badge.unverified[_ngcontent-%COMP%] {\n  color: #b71c1c;\n}\n/*# sourceMappingURL=my-clients.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyClientsComponent, [{
    type: Component,
    args: [{ selector: "app-my-clients", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CommonModule,
      MatIconModule,
      MatButtonModule,
      MatProgressSpinnerModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatDialogModule,
      RouterModule
    ], template: `
    <div class="mc-wrapper">
      <div class="mc-header">
        <div class="mc-title">
          <a routerLink="/my-jobs-pro" mat-icon-button class="back-btn">
            <mat-icon>arrow_back</mat-icon>
          </a>
          <h1>My Clients</h1>
        </div>
        <span class="mc-subtitle">Users you have worked with</span>
      </div>

      <div *ngIf="loading" class="mc-loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>

      <div *ngIf="!loading && clients.length === 0" class="mc-empty">
        <mat-icon>group_off</mat-icon>
        <p>No clients linked yet. Clients appear here once an admin links them or you complete jobs together.</p>
      </div>

      <div *ngIf="!loading && clients.length > 0" class="mc-list">
        <div class="mc-card" *ngFor="let c of clients">
          <div class="mc-avatar">
            <mat-icon>person</mat-icon>
          </div>
          <div class="mc-info">
            <div class="mc-name">{{ c.name }}</div>
            <div class="mc-email">{{ c.email }}</div>
            <div class="mc-meta">
              <span *ngIf="c.phoneNumber" class="mc-phone">{{ c.phoneNumber }}</span>
              <span class="mc-badge" [class.verified]="c.isEmailVerified" [class.unverified]="!c.isEmailVerified">
                <mat-icon>{{ c.isEmailVerified ? 'verified' : 'unpublished' }}</mat-icon>
                {{ c.isEmailVerified ? 'Email verified' : 'Email unverified' }}
              </span>
            </div>
          </div>
          <button mat-icon-button color="warn" matTooltip="Remove client"
                  (click)="confirmRemove(c)">
            <mat-icon>person_remove</mat-icon>
          </button>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;f1832c68bef8cedd7dc784595afb1a27753404f9ac2c32f6c2306e260a44c259;C:/repos/yProHub/prohub-ui/src/app/features/my-clients/my-clients.ts */\n.mc-wrapper {\n  max-width: 720px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.mc-header {\n  margin-bottom: 2rem;\n}\n.mc-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.mc-title h1 {\n  margin: 0;\n  font-size: 1.75rem;\n}\n.back-btn {\n  color: inherit;\n}\n.mc-subtitle {\n  display: block;\n  margin-top: 4px;\n  padding-left: 48px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.mc-loading,\n.mc-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #888;\n}\n.mc-loading mat-icon,\n.mc-empty mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n}\n.mc-loading p,\n.mc-empty p {\n  margin: 0;\n  text-align: center;\n  max-width: 380px;\n}\n.mc-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mc-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.mc-avatar {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #e8eeff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mc-avatar mat-icon {\n  color: #667eea;\n}\n.mc-info {\n  flex: 1;\n  min-width: 0;\n}\n.mc-name {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.mc-email {\n  font-size: 0.85rem;\n  color: #555;\n  margin: 2px 0;\n}\n.mc-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 4px;\n}\n.mc-phone {\n  font-size: 0.8rem;\n  color: #888;\n}\n.mc-badge {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.mc-badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.mc-badge.verified {\n  color: #2e7d32;\n}\n.mc-badge.unverified {\n  color: #b71c1c;\n}\n/*# sourceMappingURL=my-clients.css.map */\n"] }]
  }], () => [{ type: ProUsersService }, { type: Auth }, { type: MatDialog }, { type: MatSnackBar }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyClientsComponent, { className: "MyClientsComponent", filePath: "src/app/features/my-clients/my-clients.ts", lineNumber: 163 });
})();
export {
  MyClientsComponent
};
//# sourceMappingURL=chunk-FDIEI2IH.js.map

