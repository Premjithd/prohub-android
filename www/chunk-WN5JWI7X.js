import {
  ProUsersService
} from "./chunk-N5T2MOQM.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AQNNVN3U.js";
import {
  MatButtonModule,
  MatIconButton
} from "./chunk-QKBPBGFS.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-B4QCWAPP.js";
import "./chunk-SOWTMXOK.js";
import {
  Auth
} from "./chunk-6CNFBV5T.js";
import "./chunk-UGJKRHBV.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-VRKQDNIA.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
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
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/my-pros/my-pros.ts
function MyProsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function MyProsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon");
    \u0275\u0275text(2, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No professionals linked yet. They appear here once you complete a job together.");
    \u0275\u0275elementEnd()();
  }
}
function MyProsComponent_div_12_div_1_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.businessName);
  }
}
function MyProsComponent_div_12_div_1_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(p_r1.phoneNumber);
  }
}
function MyProsComponent_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "mat-icon");
    \u0275\u0275text(3, "engineering");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 15)(5, "div", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, MyProsComponent_div_12_div_1_div_7_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(8, "div", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 19);
    \u0275\u0275template(11, MyProsComponent_div_12_div_1_span_11_Template, 2, 1, "span", 20);
    \u0275\u0275elementStart(12, "span", 21)(13, "mat-icon");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r1 = ctx.$implicit;
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(p_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r1.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r1.phoneNumber);
    \u0275\u0275advance();
    \u0275\u0275classProp("verified", p_r1.isEmailVerified)("unverified", !p_r1.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r1.isEmailVerified ? "verified" : "unpublished");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", p_r1.isEmailVerified ? "Verified" : "Unverified", " ");
  }
}
function MyProsComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275template(1, MyProsComponent_div_12_div_1_Template, 16, 10, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r1.pros);
  }
}
var MyProsComponent = class _MyProsComponent {
  proUsersService;
  auth;
  cdr;
  pros = [];
  loading = true;
  userId;
  constructor(proUsersService, auth, cdr) {
    this.proUsersService = proUsersService;
    this.auth = auth;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.userId = Number(this.auth.getUserId());
    this.proUsersService.getProsForUser(this.userId).subscribe({
      next: (res) => {
        this.pros = Array.isArray(res) ? res : res?.$values ?? [];
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  static \u0275fac = function MyProsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyProsComponent)(\u0275\u0275directiveInject(ProUsersService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MyProsComponent, selectors: [["app-my-pros"]], decls: 13, vars: 3, consts: [[1, "mp-wrapper"], [1, "mp-header"], [1, "mp-title"], ["routerLink", "/pending-jobs", "mat-icon-button", "", 1, "back-btn"], [1, "mp-subtitle"], ["class", "mp-loading", 4, "ngIf"], ["class", "mp-empty", 4, "ngIf"], ["class", "mp-list", 4, "ngIf"], [1, "mp-loading"], ["diameter", "40"], [1, "mp-empty"], [1, "mp-list"], ["class", "mp-card", 4, "ngFor", "ngForOf"], [1, "mp-card"], [1, "mp-avatar"], [1, "mp-info"], [1, "mp-name"], ["class", "mp-business", 4, "ngIf"], [1, "mp-email"], [1, "mp-meta"], ["class", "mp-phone", 4, "ngIf"], [1, "mp-badge"], [1, "mp-business"], [1, "mp-phone"]], template: function MyProsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "a", 3)(4, "mat-icon");
      \u0275\u0275text(5, "arrow_back");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(6, "h1");
      \u0275\u0275text(7, "My Professionals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "span", 4);
      \u0275\u0275text(9, "Professionals you have worked with");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(10, MyProsComponent_div_10_Template, 2, 0, "div", 5)(11, MyProsComponent_div_11_Template, 5, 0, "div", 6)(12, MyProsComponent_div_12_Template, 2, 1, "div", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pros.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.pros.length > 0);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, RouterModule, RouterLink, MatIconModule, MatIcon, MatButtonModule, MatIconButton, MatProgressSpinnerModule, MatProgressSpinner], styles: ["\n\n.mp-wrapper[_ngcontent-%COMP%] {\n  max-width: 720px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.mp-header[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n.mp-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.mp-title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.75rem;\n}\n.back-btn[_ngcontent-%COMP%] {\n  color: inherit;\n}\n.mp-subtitle[_ngcontent-%COMP%] {\n  display: block;\n  margin-top: 4px;\n  padding-left: 48px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.mp-loading[_ngcontent-%COMP%], \n.mp-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #888;\n}\n.mp-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.mp-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n}\n.mp-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.mp-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  max-width: 380px;\n}\n.mp-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mp-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.mp-avatar[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #e8f5e9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mp-avatar[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #388e3c;\n}\n.mp-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.mp-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.mp-business[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #444;\n  margin: 1px 0;\n}\n.mp-email[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #666;\n}\n.mp-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 4px;\n}\n.mp-phone[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.mp-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.mp-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.mp-badge.verified[_ngcontent-%COMP%] {\n  color: #2e7d32;\n}\n.mp-badge.unverified[_ngcontent-%COMP%] {\n  color: #b71c1c;\n}\n/*# sourceMappingURL=my-pros.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyProsComponent, [{
    type: Component,
    args: [{ selector: "app-my-pros", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [CommonModule, RouterModule, MatIconModule, MatButtonModule, MatProgressSpinnerModule], template: `
    <div class="mp-wrapper">
      <div class="mp-header">
        <div class="mp-title">
          <a routerLink="/pending-jobs" mat-icon-button class="back-btn">
            <mat-icon>arrow_back</mat-icon>
          </a>
          <h1>My Professionals</h1>
        </div>
        <span class="mp-subtitle">Professionals you have worked with</span>
      </div>

      <div *ngIf="loading" class="mp-loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>

      <div *ngIf="!loading && pros.length === 0" class="mp-empty">
        <mat-icon>engineering</mat-icon>
        <p>No professionals linked yet. They appear here once you complete a job together.</p>
      </div>

      <div *ngIf="!loading && pros.length > 0" class="mp-list">
        <div class="mp-card" *ngFor="let p of pros">
          <div class="mp-avatar">
            <mat-icon>engineering</mat-icon>
          </div>
          <div class="mp-info">
            <div class="mp-name">{{ p.name }}</div>
            <div class="mp-business" *ngIf="p.businessName">{{ p.businessName }}</div>
            <div class="mp-email">{{ p.email }}</div>
            <div class="mp-meta">
              <span *ngIf="p.phoneNumber" class="mp-phone">{{ p.phoneNumber }}</span>
              <span class="mp-badge" [class.verified]="p.isEmailVerified" [class.unverified]="!p.isEmailVerified">
                <mat-icon>{{ p.isEmailVerified ? 'verified' : 'unpublished' }}</mat-icon>
                {{ p.isEmailVerified ? 'Verified' : 'Unverified' }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;81ab905ab68c026e216c835b08d80008882159b8f4c84cd04f3f8d99e3341ae1;C:/repos/yProHub/prohub-ui/src/app/features/my-pros/my-pros.ts */\n.mp-wrapper {\n  max-width: 720px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.mp-header {\n  margin-bottom: 2rem;\n}\n.mp-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n}\n.mp-title h1 {\n  margin: 0;\n  font-size: 1.75rem;\n}\n.back-btn {\n  color: inherit;\n}\n.mp-subtitle {\n  display: block;\n  margin-top: 4px;\n  padding-left: 48px;\n  font-size: 0.9rem;\n  color: #666;\n}\n.mp-loading,\n.mp-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #888;\n}\n.mp-loading mat-icon,\n.mp-empty mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n}\n.mp-loading p,\n.mp-empty p {\n  margin: 0;\n  text-align: center;\n  max-width: 380px;\n}\n.mp-list {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.mp-card {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  padding: 1rem 1.25rem;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.08);\n}\n.mp-avatar {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  background: #e8f5e9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.mp-avatar mat-icon {\n  color: #388e3c;\n}\n.mp-info {\n  flex: 1;\n  min-width: 0;\n}\n.mp-name {\n  font-weight: 600;\n  font-size: 1rem;\n}\n.mp-business {\n  font-size: 0.88rem;\n  color: #444;\n  margin: 1px 0;\n}\n.mp-email {\n  font-size: 0.83rem;\n  color: #666;\n}\n.mp-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 4px;\n}\n.mp-phone {\n  font-size: 0.8rem;\n  color: #888;\n}\n.mp-badge {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 0.75rem;\n  font-weight: 500;\n}\n.mp-badge mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.mp-badge.verified {\n  color: #2e7d32;\n}\n.mp-badge.unverified {\n  color: #b71c1c;\n}\n/*# sourceMappingURL=my-pros.css.map */\n"] }]
  }], () => [{ type: ProUsersService }, { type: Auth }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MyProsComponent, { className: "MyProsComponent", filePath: "src/app/features/my-pros/my-pros.ts", lineNumber: 144 });
})();
export {
  MyProsComponent
};
//# sourceMappingURL=chunk-WN5JWI7X.js.map

