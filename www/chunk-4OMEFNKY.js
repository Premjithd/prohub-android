import {
  MatChipsModule
} from "./chunk-AWXWAKBZ.js";
import {
  NotificationService,
  SignalRService
} from "./chunk-Q7FKXJ3J.js";
import "./chunk-ATW3VVJF.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AQNNVN3U.js";
import {
  MatButton,
  MatButtonModule
} from "./chunk-QKBPBGFS.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-B4QCWAPP.js";
import "./chunk-SOWTMXOK.js";
import "./chunk-A6TK5TPK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ZGXDPMMN.js";
import {
  Auth
} from "./chunk-6CNFBV5T.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterModule
} from "./chunk-VRKQDNIA.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  NgForOf,
  NgIf,
  Subject,
  setClassMetadata,
  takeUntil,
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
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/notifications/notifications.ts
function NotificationsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
}
function NotificationsComponent_div_11_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "NOTIF.EMPTY_PRO"));
  }
}
function NotificationsComponent_div_11_p_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "NOTIF.EMPTY_USER"));
  }
}
function NotificationsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "mat-icon");
    \u0275\u0275text(2, "notifications_none");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, NotificationsComponent_div_11_p_3_Template, 3, 3, "p", 9)(4, NotificationsComponent_div_11_p_4_Template, 3, 3, "p", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r0.isPro());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.isPro());
  }
}
function NotificationsComponent_div_12_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 19);
  }
}
function NotificationsComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275listener("click", function NotificationsComponent_div_12_div_1_Template_div_click_0_listener() {
      const n_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.openNotification(n_r3));
    });
    \u0275\u0275elementStart(1, "div", 13)(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 14)(5, "p", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 17);
    \u0275\u0275template(11, NotificationsComponent_div_12_div_1_span_11_Template, 1, 0, "span", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const n_r3 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("unread", !n_r3.isRead);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.notifIcon(n_r3.notificationType));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(n_r3.message);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(9, 6, n_r3.createdAt, "MMM d, y, h:mm a"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !n_r3.isRead);
  }
}
function NotificationsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, NotificationsComponent_div_12_div_1_Template, 12, 9, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r0.notifications);
  }
}
var NotificationsComponent = class _NotificationsComponent {
  notificationService;
  signalRService;
  router;
  cdr;
  auth;
  notifications = [];
  loading = true;
  unreadCount = 0;
  destroy$ = new Subject();
  constructor(notificationService, signalRService, router, cdr, auth) {
    this.notificationService = notificationService;
    this.signalRService = signalRService;
    this.router = router;
    this.cdr = cdr;
    this.auth = auth;
  }
  ngOnInit() {
    this.load();
    this.signalRService.onNewNotification$.pipe(takeUntil(this.destroy$)).subscribe(() => this.load());
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
  load() {
    this.loading = true;
    this.notificationService.getNotifications().subscribe({
      next: (res) => {
        const raw = res?.notifications;
        this.notifications = Array.isArray(raw) ? raw : raw?.$values ?? [];
        this.unreadCount = this.notifications.filter((n) => !n.isRead).length;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  isPro() {
    return this.auth.getUserType() === "Pro";
  }
  notifIcon(type) {
    switch (type) {
      case "JobPosted":
      case "JobUpdated":
        return "work";
      case "BidReceived":
        return "gavel";
      case "PaymentConfirmed":
        return "payment";
      case "JobCompleted":
        return "task_alt";
      default:
        return "notifications";
    }
  }
  openNotification(n) {
    if (!n.isRead) {
      this.notificationService.markRead(n.id).subscribe(() => {
        n.isRead = true;
        this.unreadCount = Math.max(0, this.unreadCount - 1);
        this.cdr.markForCheck();
      });
    }
    if (n.jobId) {
      this.router.navigate([this.isPro() ? "/available-jobs" : "/pending-jobs"]);
    }
  }
  markAllRead() {
    this.notificationService.markAllRead().subscribe(() => {
      this.notifications.forEach((n) => n.isRead = true);
      this.unreadCount = 0;
      this.cdr.markForCheck();
    });
  }
  static \u0275fac = function NotificationsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NotificationsComponent)(\u0275\u0275directiveInject(NotificationService), \u0275\u0275directiveInject(SignalRService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Auth));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NotificationsComponent, selectors: [["app-notifications"]], decls: 13, vars: 10, consts: [[1, "notif-wrapper"], [1, "notif-header"], ["mat-stroked-button", "", 3, "click", "disabled"], ["class", "notif-loading", 4, "ngIf"], ["class", "notif-empty", 4, "ngIf"], ["class", "notif-list", 4, "ngIf"], [1, "notif-loading"], ["diameter", "40"], [1, "notif-empty"], [4, "ngIf"], [1, "notif-list"], ["class", "notif-item", 3, "unread", "click", 4, "ngFor", "ngForOf"], [1, "notif-item", 3, "click"], [1, "notif-icon"], [1, "notif-body"], [1, "notif-message"], [1, "notif-time"], [1, "notif-status"], ["class", "unread-dot", 4, "ngIf"], [1, "unread-dot"]], template: function NotificationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "button", 2);
      \u0275\u0275listener("click", function NotificationsComponent_Template_button_click_5_listener() {
        return ctx.markAllRead();
      });
      \u0275\u0275elementStart(6, "mat-icon");
      \u0275\u0275text(7, "done_all");
      \u0275\u0275elementEnd();
      \u0275\u0275text(8);
      \u0275\u0275pipe(9, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, NotificationsComponent_div_10_Template, 2, 0, "div", 3)(11, NotificationsComponent_div_11_Template, 5, 2, "div", 4)(12, NotificationsComponent_div_12_Template, 2, 1, "div", 5);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "NOTIF.TITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("disabled", ctx.unreadCount === 0);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "NOTIF.MARK_ALL"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.notifications.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.notifications.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, TranslateModule, MatIconModule, MatIcon, MatButtonModule, MatButton, MatProgressSpinnerModule, MatProgressSpinner, MatChipsModule, DatePipe, TranslatePipe], styles: ["\n\n.notif-wrapper[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.notif-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.notif-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-h1, 1.75rem);\n}\n.notif-loading[_ngcontent-%COMP%], \n.notif-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #888;\n}\n.notif-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.notif-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n}\n.notif-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.notif-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n}\n.notif-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.notif-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.notif-item[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.notif-item.unread[_ngcontent-%COMP%] {\n  background: #f0f4ff;\n}\n.notif-item.unread[_ngcontent-%COMP%]:hover {\n  background: #e8eeff;\n}\n.notif-item[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e8eeff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-item[_ngcontent-%COMP%]   .notif-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.notif-item[_ngcontent-%COMP%]   .notif-body[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.notif-item[_ngcontent-%COMP%]   .notif-body[_ngcontent-%COMP%]   .notif-message[_ngcontent-%COMP%] {\n  margin: 0 0 4px;\n  font-size: 0.95rem;\n  color: #333;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.notif-item[_ngcontent-%COMP%]   .notif-body[_ngcontent-%COMP%]   .notif-time[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.notif-item[_ngcontent-%COMP%]   .notif-status[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n.notif-item[_ngcontent-%COMP%]   .notif-status[_ngcontent-%COMP%]   .unread-dot[_ngcontent-%COMP%] {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #667eea;\n}\n/*# sourceMappingURL=notifications.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NotificationsComponent, [{
    type: Component,
    args: [{ selector: "app-notifications", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, TranslateModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule, MatChipsModule], template: `
    <div class="notif-wrapper">
      <div class="notif-header">
        <h1>{{ 'NOTIF.TITLE' | translate }}</h1>
        <button mat-stroked-button (click)="markAllRead()" [disabled]="unreadCount === 0">
          <mat-icon>done_all</mat-icon> {{ 'NOTIF.MARK_ALL' | translate }}
        </button>
      </div>

      <div *ngIf="loading" class="notif-loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>

      <div *ngIf="!loading && notifications.length === 0" class="notif-empty">
        <mat-icon>notifications_none</mat-icon>
        <p *ngIf="isPro()">{{ 'NOTIF.EMPTY_PRO' | translate }}</p>
        <p *ngIf="!isPro()">{{ 'NOTIF.EMPTY_USER' | translate }}</p>
      </div>

      <div *ngIf="!loading && notifications.length > 0" class="notif-list">
        <div *ngFor="let n of notifications"
             class="notif-item"
             [class.unread]="!n.isRead"
             (click)="openNotification(n)">
          <div class="notif-icon">
            <mat-icon>{{ notifIcon(n.notificationType) }}</mat-icon>
          </div>
          <div class="notif-body">
            <p class="notif-message">{{ n.message }}</p>
            <span class="notif-time">{{ n.createdAt | date: 'MMM d, y, h:mm a' }}</span>
          </div>
          <div class="notif-status">
            <span *ngIf="!n.isRead" class="unread-dot"></span>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;e4ac692eab5b88b14d8ea882a22eec969c523f66f6484d404627fa0d06557f2b;C:/repos/yProHub/prohub-ui/src/app/features/notifications/notifications.ts */\n.notif-wrapper {\n  max-width: 720px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.notif-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.notif-header h1 {\n  margin: 0;\n  font-size: var(--text-h1, 1.75rem);\n}\n.notif-loading,\n.notif-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #888;\n}\n.notif-loading mat-icon,\n.notif-empty mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n}\n.notif-loading p,\n.notif-empty p {\n  margin: 0;\n  text-align: center;\n}\n.notif-list {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n.notif-item {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: white;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.notif-item:hover {\n  background: #f5f5f5;\n}\n.notif-item.unread {\n  background: #f0f4ff;\n}\n.notif-item.unread:hover {\n  background: #e8eeff;\n}\n.notif-item .notif-icon {\n  flex-shrink: 0;\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  background: #e8eeff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.notif-item .notif-icon mat-icon {\n  color: #667eea;\n}\n.notif-item .notif-body {\n  flex: 1;\n  min-width: 0;\n}\n.notif-item .notif-body .notif-message {\n  margin: 0 0 4px;\n  font-size: 0.95rem;\n  color: #333;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.notif-item .notif-body .notif-time {\n  font-size: 0.8rem;\n  color: #888;\n}\n.notif-item .notif-status {\n  flex-shrink: 0;\n}\n.notif-item .notif-status .unread-dot {\n  display: block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background: #667eea;\n}\n/*# sourceMappingURL=notifications.css.map */\n"] }]
  }], () => [{ type: NotificationService }, { type: SignalRService }, { type: Router }, { type: ChangeDetectorRef }, { type: Auth }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NotificationsComponent, { className: "NotificationsComponent", filePath: "src/app/features/notifications/notifications.ts", lineNumber: 155 });
})();
export {
  NotificationsComponent
};
//# sourceMappingURL=chunk-4OMEFNKY.js.map

