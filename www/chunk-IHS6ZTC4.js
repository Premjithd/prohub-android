import {
  MaintenanceService
} from "./chunk-CAKNACU2.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-RUKCNJZP.js";
import "./chunk-LW3HGLL7.js";
import "./chunk-UGJKRHBV.js";
import {
  Router
} from "./chunk-BALEJLRX.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-O3FI6JPK.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/maintenance/maintenance.component.ts
var MaintenanceComponent = class _MaintenanceComponent {
  maintenance;
  router;
  cdr;
  message = "yProHub is undergoing scheduled maintenance. We'll be back shortly.";
  constructor(maintenance, router, cdr) {
    this.maintenance = maintenance;
    this.router = router;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.maintenance.getStatus().subscribe({
      next: (status) => {
        if (!status.enabled) {
          this.router.navigate(["/"]);
          return;
        }
        if (status.message)
          this.message = status.message;
        this.cdr.markForCheck();
      },
      // If the status call itself fails, just keep the default message.
      error: () => {
      }
    });
  }
  static \u0275fac = function MaintenanceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaintenanceComponent)(\u0275\u0275directiveInject(MaintenanceService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaintenanceComponent, selectors: [["app-maintenance"]], decls: 12, vars: 1, consts: [[1, "mnt-wrap"], [1, "mnt-card"], [1, "mnt-banner"], ["src", "assets/logo/logo-lockup-white.svg", "alt", "yProHub", 1, "mnt-logo"], [1, "mnt-body"], [1, "mnt-badge"], [1, "mnt-title"], [1, "mnt-message"]], template: function MaintenanceComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
      \u0275\u0275element(3, "img", 3);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "div", 4)(5, "div", 5)(6, "mat-icon");
      \u0275\u0275text(7, "construction");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "h1", 6);
      \u0275\u0275text(9, "We'll be right back");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "p", 7);
      \u0275\u0275text(11);
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.message);
    }
  }, dependencies: [CommonModule, MatIconModule, MatIcon], styles: ["\n\n.mnt-wrap[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: var(--color-bg-light);\n}\n.mnt-card[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 460px;\n  text-align: center;\n  background: #fff;\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.12);\n}\n.mnt-banner[_ngcontent-%COMP%] {\n  background: var(--color-primary-gradient);\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mnt-logo[_ngcontent-%COMP%] {\n  height: 30px;\n  width: auto;\n}\n.mnt-body[_ngcontent-%COMP%] {\n  padding: 2.25rem 2rem 2.5rem;\n}\n.mnt-badge[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 1.25rem;\n  border-radius: 18px;\n  background: var(--color-primary-gradient);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mnt-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.mnt-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: var(--text-h1);\n  font-weight: 700;\n  color: var(--color-text);\n}\n.mnt-message[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: var(--text-body);\n  color: var(--color-text-muted);\n  line-height: 1.6;\n}\n/*# sourceMappingURL=maintenance.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaintenanceComponent, [{
    type: Component,
    args: [{ selector: "app-maintenance", standalone: true, imports: [CommonModule, MatIconModule], template: `
    <div class="mnt-wrap">
      <div class="mnt-card">
        <!-- Brand banner header (app primary gradient) -->
        <div class="mnt-banner">
          <img src="assets/logo/logo-lockup-white.svg" alt="yProHub" class="mnt-logo" />
        </div>

        <div class="mnt-body">
          <div class="mnt-badge"><mat-icon>construction</mat-icon></div>

          <h1 class="mnt-title">We'll be right back</h1>
          <p class="mnt-message">{{ message }}</p>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;2c3c451ad2ac743ec61a5a2522d96bfd7c1c025d9d3416b529ce3902b403d6bd;C:/repos/yProHub/prohub-ui/src/app/features/maintenance/maintenance.component.ts */\n.mnt-wrap {\n  min-height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 1.5rem;\n  background: var(--color-bg-light);\n}\n.mnt-card {\n  width: 100%;\n  max-width: 460px;\n  text-align: center;\n  background: #fff;\n  border: 1px solid var(--color-border);\n  border-radius: 16px;\n  overflow: hidden;\n  box-shadow: 0 10px 40px rgba(102, 126, 234, 0.12);\n}\n.mnt-banner {\n  background: var(--color-primary-gradient);\n  padding: 1.5rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mnt-logo {\n  height: 30px;\n  width: auto;\n}\n.mnt-body {\n  padding: 2.25rem 2rem 2.5rem;\n}\n.mnt-badge {\n  width: 64px;\n  height: 64px;\n  margin: 0 auto 1.25rem;\n  border-radius: 18px;\n  background: var(--color-primary-gradient);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mnt-badge mat-icon {\n  color: #fff;\n  font-size: 32px;\n  width: 32px;\n  height: 32px;\n}\n.mnt-title {\n  margin: 0 0 0.75rem;\n  font-size: var(--text-h1);\n  font-weight: 700;\n  color: var(--color-text);\n}\n.mnt-message {\n  margin: 0;\n  font-size: var(--text-body);\n  color: var(--color-text-muted);\n  line-height: 1.6;\n}\n/*# sourceMappingURL=maintenance.component.css.map */\n"] }]
  }], () => [{ type: MaintenanceService }, { type: Router }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaintenanceComponent, { className: "MaintenanceComponent", filePath: "src/app/features/maintenance/maintenance.component.ts", lineNumber: 101 });
})();
export {
  MaintenanceComponent
};
//# sourceMappingURL=chunk-IHS6ZTC4.js.map

