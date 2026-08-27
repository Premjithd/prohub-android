import {
  BannerService
} from "./chunk-DXFSZNM4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-RUKCNJZP.js";
import "./chunk-LW3HGLL7.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  NgControlStatus,
  NgModel,
  PatternValidator
} from "./chunk-WDC3QMAT.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-CESE7TJL.js";
import {
  Auth
} from "./chunk-SNFMA3C7.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-BALEJLRX.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  NgIf,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
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

// src/app/features/home/announcement-banner.component.ts
function AnnouncementBannerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.message);
  }
}
var AnnouncementBannerComponent = class _AnnouncementBannerComponent {
  banner;
  cdr;
  enabled = false;
  message = "";
  constructor(banner, cdr) {
    this.banner = banner;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.banner.getBanner().subscribe({
      next: (b) => {
        this.enabled = b.enabled;
        this.message = b.message;
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
  }
  static \u0275fac = function AnnouncementBannerComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AnnouncementBannerComponent)(\u0275\u0275directiveInject(BannerService), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AnnouncementBannerComponent, selectors: [["app-announcement-banner"]], decls: 1, vars: 1, consts: [["class", "ann-banner", "role", "status", "aria-live", "polite", 4, "ngIf"], ["role", "status", "aria-live", "polite", 1, "ann-banner"], [1, "ann-text"]], template: function AnnouncementBannerComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275template(0, AnnouncementBannerComponent_div_0_Template, 3, 1, "div", 0);
    }
    if (rf & 2) {
      \u0275\u0275property("ngIf", ctx.enabled && ctx.message);
    }
  }, dependencies: [CommonModule, NgIf], styles: ["\n\n.ann-banner[_ngcontent-%COMP%] {\n  background: var(--color-primary-gradient);\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 0.55rem 0;\n  font-size: var(--text-small);\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n.ann-text[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding-left: 100%;\n  will-change: transform;\n  animation: _ngcontent-%COMP%_ann-marquee 20s linear infinite;\n}\n.ann-banner[_ngcontent-%COMP%]:hover   .ann-text[_ngcontent-%COMP%] {\n  animation-play-state: paused;\n}\n@keyframes _ngcontent-%COMP%_ann-marquee {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .ann-text[_ngcontent-%COMP%] {\n    animation: none;\n    padding-left: 0;\n    display: block;\n    text-align: center;\n    white-space: normal;\n  }\n}\n/*# sourceMappingURL=announcement-banner.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AnnouncementBannerComponent, [{
    type: Component,
    args: [{ selector: "app-announcement-banner", standalone: true, imports: [CommonModule], template: `
    <div class="ann-banner" *ngIf="enabled && message" role="status" aria-live="polite">
      <span class="ann-text">{{ message }}</span>
    </div>
  `, styles: ["/* angular:styles/component:scss;cee42b4cd7587bba24c9735e8bd4983ba11cca3ce9e5d92d6468dc74e77c9fd0;C:/repos/yProHub/prohub-ui/src/app/features/home/announcement-banner.component.ts */\n.ann-banner {\n  background: var(--color-primary-gradient);\n  color: #fff;\n  overflow: hidden;\n  white-space: nowrap;\n  padding: 0.55rem 0;\n  font-size: var(--text-small);\n  font-weight: 600;\n  letter-spacing: 0.02em;\n}\n.ann-text {\n  display: inline-block;\n  padding-left: 100%;\n  will-change: transform;\n  animation: ann-marquee 20s linear infinite;\n}\n.ann-banner:hover .ann-text {\n  animation-play-state: paused;\n}\n@keyframes ann-marquee {\n  from {\n    transform: translateX(0);\n  }\n  to {\n    transform: translateX(-100%);\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .ann-text {\n    animation: none;\n    padding-left: 0;\n    display: block;\n    text-align: center;\n    white-space: normal;\n  }\n}\n/*# sourceMappingURL=announcement-banner.component.css.map */\n"] }]
  }], () => [{ type: BannerService }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AnnouncementBannerComponent, { className: "AnnouncementBannerComponent", filePath: "src/app/features/home/announcement-banner.component.ts", lineNumber: 58 });
})();

// src/app/features/home/home/home.ts
var _c0 = () => ({ category: "plumbing" });
var _c1 = () => ({ category: "electrical" });
var _c2 = () => ({ category: "carpentry" });
var _c3 = () => ({ category: "painting" });
var _c4 = () => ({ category: "cleaning" });
var _c5 = (a0) => ({ name: a0 });
var _c6 = () => ({ role: "pro" });
function HomeComponent_section_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "section", 4);
    \u0275\u0275element(1, "img", 5)(2, "div", 6);
    \u0275\u0275elementStart(3, "div", 7)(4, "span", 8)(5, "mat-icon");
    \u0275\u0275text(6, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "h1", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 10);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "mat-icon", 12);
    \u0275\u0275text(17, "search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 13);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_section_2_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchText, $event) || (ctx_r1.searchText = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function HomeComponent_section_2_Template_input_keyup_enter_18_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startJob());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(21, "span", 14);
    \u0275\u0275elementStart(22, "span", 15)(23, "mat-icon");
    \u0275\u0275text(24, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "input", 16);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function HomeComponent_section_2_Template_input_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.searchPin, $event) || (ctx_r1.searchPin = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function HomeComponent_section_2_Template_input_keyup_enter_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startJob());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "button", 17);
    \u0275\u0275listener("click", function HomeComponent_section_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.startJob());
    });
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 18)(32, "a", 19)(33, "mat-icon");
    \u0275\u0275text(34, "build");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "a", 19)(38, "mat-icon");
    \u0275\u0275text(39, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "a", 19)(43, "mat-icon");
    \u0275\u0275text(44, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "a", 19)(48, "mat-icon");
    \u0275\u0275text(49, "home_repair_service");
    \u0275\u0275elementEnd();
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "a", 19)(53, "mat-icon");
    \u0275\u0275text(54, "cleaning_services");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 20, "HOME.HERO_BADGE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 22, "HOME.HERO_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 24, "HOME.HERO_SUB"));
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchText);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(19, 26, "HOME.SEARCH_PLACEHOLDER"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(20, 28, "HOME.HERO_TITLE"));
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.searchPin);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(26, 30, "HOME.SEARCH_PLACE"));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(27, 32, "HOME.SEARCH_PLACE"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 34, "HOME.GET_QUOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(46, _c0));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 36, "HOME.CAT_PLUMBING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(47, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(41, 38, "HOME.CAT_ELECTRICAL"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(48, _c2));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 40, "HOME.CAT_CARPENTRY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(49, _c3));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 42, "HOME.CAT_PAINTING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(50, _c4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(56, 44, "HOME.CAT_CLEANING"), " ");
  }
}
function HomeComponent_div_3_section_1_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "HOME.ADMIN_SUBTITLE"));
  }
}
function HomeComponent_div_3_section_1_p_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "HOME.PRO_SUBTITLE"));
  }
}
function HomeComponent_div_3_section_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 22)(1, "div", 23)(2, "div", 24)(3, "h1");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, HomeComponent_div_3_section_1_p_6_Template, 3, 3, "p", 3)(7, HomeComponent_div_3_section_1_p_7_Template, 3, 3, "p", 3);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 3, "HOME.WELCOME_BACK", \u0275\u0275pureFunction1(6, _c5, ctx_r1.auth.getName())));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProUser());
  }
}
function HomeComponent_div_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 25)(2, "div", 26)(3, "div", 27)(4, "button", 28);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/post-job"));
    });
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 30);
    \u0275\u0275element(7, "path", 31)(8, "rect", 32)(9, "path", 33);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(10, "div", 34)(11, "strong");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/pending-jobs"));
    });
    \u0275\u0275elementStart(18, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(19, "svg", 30);
    \u0275\u0275element(20, "path", 36);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 34)(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_2_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/messages"));
    });
    \u0275\u0275elementStart(29, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 30);
    \u0275\u0275element(31, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 34)(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_2_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/find-a-pro"));
    });
    \u0275\u0275elementStart(40, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 30);
    \u0275\u0275element(42, "circle", 38)(43, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(44, "div", 34)(45, "strong");
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "span");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 8, "HOME.POST_JOB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 10, "HOME.POST_JOB_DESC"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 12, "NAV.MY_JOBS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 14, "HOME.MY_JOBS_DESC"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 16, "NAV.MESSAGES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 18, "HOME.MESSAGES_DESC_USER"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(47, 20, "HOME.BROWSE_PROS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 22, "HOME.BROWSE_PROS_DESC"));
  }
}
function HomeComponent_div_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 25)(2, "div", 26)(3, "div", 27)(4, "button", 28);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_3_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/available-jobs"));
    });
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 30);
    \u0275\u0275element(7, "circle", 38)(8, "path", 39);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(9, "div", 34)(10, "strong");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_3_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/my-jobs-pro"));
    });
    \u0275\u0275elementStart(17, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(18, "svg", 30);
    \u0275\u0275element(19, "path", 40)(20, "path", 41);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(21, "div", 34)(22, "strong");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "span");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_3_Template_button_click_28_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/my-services"));
    });
    \u0275\u0275elementStart(29, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(30, "svg", 30);
    \u0275\u0275element(31, "path", 42);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(32, "div", 34)(33, "strong");
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "span");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(39, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_3_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/messages"));
    });
    \u0275\u0275elementStart(40, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(41, "svg", 30);
    \u0275\u0275element(42, "path", 37);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(43, "div", 34)(44, "strong");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "span");
    \u0275\u0275text(48);
    \u0275\u0275pipe(49, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "NAV.FIND_JOBS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 10, "HOME.FIND_JOBS_DESC"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 12, "NAV.MY_WORK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 14, "HOME.MY_WORK_DESC"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 16, "NAV.MY_SERVICES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 18, "HOME.MY_SERVICES_DESC"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 20, "NAV.MESSAGES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 22, "HOME.MESSAGES_DESC_PRO"));
  }
}
function HomeComponent_div_3_ng_container_4_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 45)(11, "div", 46);
    \u0275\u0275text(12, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 45)(20, "div", 46);
    \u0275\u0275text(21, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 45)(29, "div", 46);
    \u0275\u0275text(30, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h3");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "HOME.PRO_STEP1_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "HOME.PRO_STEP1_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "HOME.PRO_STEP2_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "HOME.PRO_STEP2_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 16, "HOME.PRO_STEP3_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 18, "HOME.PRO_STEP3_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 20, "HOME.PRO_STEP4_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 22, "HOME.PRO_STEP4_DESC"));
  }
}
function HomeComponent_div_3_ng_container_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46);
    \u0275\u0275text(3, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "h3");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 45)(11, "div", 46);
    \u0275\u0275text(12, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3");
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 45)(20, "div", 46);
    \u0275\u0275text(21, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "h3");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "p");
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 45)(29, "div", 46);
    \u0275\u0275text(30, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "h3");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 8, "HOME.USER_STEP1_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 10, "HOME.USER_STEP1_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 12, "HOME.USER_STEP2_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "HOME.USER_STEP2_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 16, "HOME.USER_STEP3_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(27, 18, "HOME.USER_STEP3_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 20, "HOME.USER_STEP4_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 22, "HOME.USER_STEP4_DESC"));
  }
}
function HomeComponent_div_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 43)(2, "div", 26)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 44);
    \u0275\u0275template(7, HomeComponent_div_3_ng_container_4_ng_container_7_Template, 37, 24, "ng-container", 3)(8, HomeComponent_div_3_ng_container_4_ng_container_8_Template, 37, 24, "ng-container", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, "HOME.HOW_WORKS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.isProUser());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isProUser());
  }
}
function HomeComponent_div_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 25)(2, "div", 26)(3, "div", 47)(4, "button", 28);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin-users", { view: "dashboard" }));
    });
    \u0275\u0275elementStart(5, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(6, "svg", 30);
    \u0275\u0275element(7, "path", 48)(8, "rect", 49)(9, "rect", 50)(10, "rect", 51);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(11, "div", 34)(12, "strong");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(18, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_5_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin-users", { view: "disputes" }));
    });
    \u0275\u0275elementStart(19, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(20, "svg", 30);
    \u0275\u0275element(21, "path", 52)(22, "path", 53)(23, "path", 54)(24, "path", 55)(25, "path", 56);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(26, "div", 34)(27, "strong");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_5_Template_button_click_33_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin-users", { view: "search" }));
    });
    \u0275\u0275elementStart(34, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(35, "svg", 30);
    \u0275\u0275element(36, "path", 57);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(37, "div", 34)(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_5_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin-materials"));
    });
    \u0275\u0275elementStart(45, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(46, "svg", 30);
    \u0275\u0275element(47, "path", 58)(48, "path", 59)(49, "path", 60);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(50, "div", 34)(51, "strong");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "span");
    \u0275\u0275text(55);
    \u0275\u0275pipe(56, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(57, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_5_Template_button_click_57_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin-users", { view: "service-areas" }));
    });
    \u0275\u0275elementStart(58, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(59, "svg", 30);
    \u0275\u0275element(60, "path", 61)(61, "path", 62);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(62, "div", 34)(63, "strong");
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(69, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_5_Template_button_click_69_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/notifications"));
    });
    \u0275\u0275elementStart(70, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(71, "svg", 30);
    \u0275\u0275element(72, "path", 63)(73, "path", 64);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(74, "div", 34)(75, "strong");
    \u0275\u0275text(76);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(81, "button", 35);
    \u0275\u0275listener("click", function HomeComponent_div_3_ng_container_5_Template_button_click_81_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/profile"));
    });
    \u0275\u0275elementStart(82, "span", 29);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(83, "svg", 30);
    \u0275\u0275element(84, "circle", 65)(85, "path", 66);
    \u0275\u0275elementEnd()();
    \u0275\u0275namespaceHTML();
    \u0275\u0275elementStart(86, "div", 34)(87, "strong");
    \u0275\u0275text(88);
    \u0275\u0275pipe(89, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "span");
    \u0275\u0275text(91);
    \u0275\u0275pipe(92, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 14, "HOME.DASHBOARD"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 16, "HOME.DASHBOARD_DESC"));
    \u0275\u0275advance(12);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 18, "HOME.DISPUTES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 20, "HOME.DISPUTES_DESC"));
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 22, "HOME.USER_MGMT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 24, "HOME.USER_MGMT_DESC"));
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 26, "NAV.MATERIALS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(56, 28, "HOME.MATERIALS_DESC"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 30, "HOME.SERVICE_AREAS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 32, "HOME.SERVICE_AREAS_DESC"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(77, 34, "NAV.NOTIFICATIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(80, 36, "HOME.NOTIF_DESC"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 38, "NAV.PROFILE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(92, 40, "HOME.PROFILE_DESC"));
  }
}
function HomeComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275template(1, HomeComponent_div_3_section_1_Template, 8, 8, "section", 21)(2, HomeComponent_div_3_ng_container_2_Template, 51, 24, "ng-container", 3)(3, HomeComponent_div_3_ng_container_3_Template, 50, 24, "ng-container", 3)(4, HomeComponent_div_3_ng_container_4_Template, 9, 5, "ng-container", 3)(5, HomeComponent_div_3_ng_container_5_Template, 93, 42, "ng-container", 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProUser() || ctx_r1.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isProUser() && !ctx_r1.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProUser());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isAdmin());
  }
}
function HomeComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 67)(2, "div", 68)(3, "header", 69)(4, "h2");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 70)(11, "article", 71)(12, "mat-icon", 72);
    \u0275\u0275text(13, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "p");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "article", 71)(21, "mat-icon", 72);
    \u0275\u0275text(22, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "h3");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "p");
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "article", 71)(30, "mat-icon", 72);
    \u0275\u0275text(31, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "h3");
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "p");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(38, "section", 73)(39, "div", 74)(40, "div")(41, "h2");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "p");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 75)(48, "a", 76);
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "a", 77);
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 13, "HOME.WHY_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 15, "HOME.WHY_SUB"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 17, "HOME.BENEFIT1_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "HOME.BENEFIT1_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(25, 21, "HOME.BENEFIT2_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 23, "HOME.BENEFIT2_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, "HOME.BENEFIT3_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 27, "HOME.BENEFIT3_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 29, "HOME.CTA_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 31, "HOME.CTA_SUB"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 33, "HOME.CTA_BTN"));
    \u0275\u0275advance(2);
    \u0275\u0275property("queryParams", \u0275\u0275pureFunction0(37, _c6));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 35, "HOME.BECOME_PRO"), " ");
  }
}
var HomeComponent = class _HomeComponent {
  router;
  auth;
  searchText = "";
  searchPin = "";
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
  }
  /** Take the hero search text + PIN to the Post a Job page to pre-fill it. */
  startJob() {
    const queryParams = {};
    const text = this.searchText.trim();
    const pin = this.searchPin.trim();
    if (text)
      queryParams["title"] = text;
    if (pin)
      queryParams["pin"] = pin;
    this.router.navigate(["/post-job"], { queryParams });
  }
  isProUser() {
    return this.auth.getUserType() === "Pro";
  }
  isAdmin() {
    return this.auth.getUserType() === "Admin";
  }
  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
  navigateTo(path, queryParams) {
    const extras = queryParams ? { queryParams } : {};
    if (path === "/post-job" || path === "/add-service") {
      if (!this.auth.isAuthenticated()) {
        this.router.navigate(["/auth/login"]);
      } else {
        this.router.navigate([path], extras);
      }
    } else {
      this.router.navigate([path], extras);
    }
  }
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Auth));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 5, vars: 3, consts: [[1, "home"], ["class", "hero", 4, "ngIf"], ["class", "home-dash", 4, "ngIf"], [4, "ngIf"], [1, "hero"], ["src", "assets/images/hero-bg.png", "alt", "", "aria-hidden", "true", 1, "hero-photo"], [1, "hero-wash"], [1, "hero-inner"], [1, "hero-badge"], [1, "hero-title"], [1, "hero-sub"], [1, "hero-search"], [1, "search-icon"], ["type", "text", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], [1, "search-divider"], [1, "search-place"], ["type", "text", "maxlength", "6", "inputmode", "numeric", "pattern", "[0-9]*", 1, "search-pin", 3, "ngModelChange", "keyup.enter", "ngModel", "placeholder"], ["type", "button", 1, "search-btn", 3, "click"], [1, "hero-chips"], ["routerLink", "/services", 1, "hero-chip", 3, "queryParams"], [1, "home-dash"], ["class", "dash-header", 4, "ngIf"], [1, "dash-header"], [1, "dash-header-inner"], [1, "dash-greeting"], [1, "quick-actions"], [1, "section-container"], [1, "action-grid"], [1, "action-card", "primary-action", 3, "click"], [1, "action-badge"], ["viewBox", "0 0 24 24"], ["d", "M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"], ["x", "9", "y", "3", "width", "6", "height", "4", "rx", "1"], ["d", "M9 12h6M9 16h6"], [1, "card-text"], [1, "action-card", 3, "click"], ["d", "M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"], ["d", "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"], ["cx", "11", "cy", "11", "r", "7"], ["d", "m21 21-4.3-4.3"], ["d", "M22 11.08V12a10 10 0 1 1-5.93-9.14"], ["d", "M22 4 12 14.01l-3-3"], ["d", "M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.3a4 4 0 0 0 5.3-5.4l-2.6 2.6-2.3-2.3z"], [1, "how-works"], [1, "steps"], [1, "step"], [1, "step-num"], [1, "action-grid", "admin-grid"], ["d", "M3 21h18"], ["x", "6", "y", "11", "width", "3", "height", "7", "rx", "1"], ["x", "11", "y", "7", "width", "3", "height", "11", "rx", "1"], ["x", "16", "y", "13", "width", "3", "height", "5", "rx", "1"], ["d", "M12 3v18"], ["d", "M7 6h10"], ["d", "M5 6 2 13a3 3 0 0 0 6 0z"], ["d", "M19 6l-3 7a3 3 0 0 0 6 0z"], ["d", "M8 21h8"], ["d", "M12 3 5 6v5c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6z"], ["d", "M21 8 12 3 3 8v8l9 5 9-5z"], ["d", "M3 8l9 5 9-5"], ["d", "M12 13v8"], ["d", "m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z"], ["d", "M9 4v14M15 6v14"], ["d", "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"], ["d", "M13.7 21a2 2 0 0 1-3.4 0"], ["cx", "12", "cy", "8", "r", "4"], ["d", "M4 21a8 8 0 0 1 16 0"], [1, "section", "section--white"], [1, "container"], [1, "section-head"], [1, "benefit-grid"], [1, "benefit-card"], [1, "benefit-icon"], [1, "cta"], [1, "container", "cta-inner"], [1, "cta-actions"], ["routerLink", "/register", 1, "cta-btn", "cta-btn--primary"], ["routerLink", "/register", 1, "cta-btn", "cta-btn--ghost", 3, "queryParams"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275element(1, "app-announcement-banner");
      \u0275\u0275template(2, HomeComponent_section_2_Template, 57, 51, "section", 1)(3, HomeComponent_div_3_Template, 6, 5, "div", 2)(4, HomeComponent_ng_container_4_Template, 54, 38, "ng-container", 3);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", !ctx.isProUser() && !ctx.isAdmin());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.auth.isAuthenticated());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.auth.isAuthenticated());
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NgControlStatus, MaxLengthValidator, PatternValidator, NgModel, RouterModule, RouterLink, MatIconModule, MatIcon, TranslateModule, AnnouncementBannerComponent, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.home[_ngcontent-%COMP%] {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: #1f2937;\n  background: #fff;\n}\n.container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero[_ngcontent-%COMP%] {\n  position: relative;\n  min-height: 640px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.hero-photo[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.hero-wash[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.94) 0%,\n      rgba(118, 75, 162, 0.88) 100%);\n}\n.hero-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  max-width: 1200px;\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 26px;\n  text-align: center;\n}\n.hero-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 16px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n.hero-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hero-title[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 60px;\n  line-height: 1.08;\n  font-weight: 700;\n  color: #fff;\n  max-width: 900px;\n  text-wrap: balance;\n}\n.hero-sub[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 19px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.9);\n  max-width: 620px;\n  text-wrap: pretty;\n}\n.hero-search[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  max-width: 760px;\n  margin-top: 6px;\n  padding: 10px 10px 10px 20px;\n  box-sizing: border-box;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);\n}\n.hero-search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%] {\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: none;\n  font: inherit;\n  font-size: 17px;\n  color: #1f2937;\n  background: transparent;\n}\n.search-input[_ngcontent-%COMP%]::placeholder {\n  color: #6b7280;\n}\n.search-divider[_ngcontent-%COMP%] {\n  width: 1px;\n  height: 28px;\n  background: #e5e7eb;\n  flex-shrink: 0;\n}\n.search-place[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 6px;\n  font-size: 15px;\n  color: #1f2937;\n  white-space: nowrap;\n}\n.search-place[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n  color: #667eea;\n}\n.search-pin[_ngcontent-%COMP%] {\n  width: 88px;\n  border: 0;\n  outline: none;\n  background: transparent;\n  font: inherit;\n  font-size: 15px;\n  color: #1f2937;\n}\n.search-pin[_ngcontent-%COMP%]::placeholder {\n  color: rgba(31, 41, 55, 0.45);\n}\n.search-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 14px 26px;\n  border: none;\n  cursor: pointer;\n  border-radius: 8px;\n  background: #667eea;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.4);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.search-btn[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.55);\n}\n.search-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.4);\n}\n.hero-chips[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 10px;\n}\n.hero-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 18px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.2s ease;\n}\n.hero-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hero-chip[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.section[_ngcontent-%COMP%] {\n  padding: 80px 0;\n}\n.section--white[_ngcontent-%COMP%] {\n  background: #fff;\n}\n.section--gray[_ngcontent-%COMP%] {\n  background: #f9fafb;\n}\n.section-head[_ngcontent-%COMP%] {\n  margin: 0 0 44px;\n}\n.section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 12px;\n  font-size: 36px;\n  line-height: 1.15;\n  font-weight: 700;\n}\n.section-head[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 640px;\n  font-size: 17px;\n  line-height: 1.6;\n  color: #6b7280;\n  text-wrap: pretty;\n}\n.section-head--row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 40px;\n}\n.section-link[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #667eea;\n  text-decoration: none;\n}\n.section-link[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.section-link[_ngcontent-%COMP%]:hover {\n  text-decoration: underline;\n}\n.benefit-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.benefit-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 28px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.benefit-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.benefit-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: #6b7280;\n  text-wrap: pretty;\n}\n.benefit-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);\n  border-color: #667eea;\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n  color: #667eea;\n}\n.steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 32px;\n}\n.step[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: #6b7280;\n  text-wrap: pretty;\n}\n.step-num[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #667eea;\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n}\n.service-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.service-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.service-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);\n}\n.service-thumb[_ngcontent-%COMP%] {\n  position: relative;\n  height: 150px;\n  background: #f3f4f6;\n}\n.service-thumb[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.service-tag[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 12px;\n  bottom: 12px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n}\n.service-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px;\n}\n.service-body[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 600;\n}\n.service-pro[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n}\n.service-price[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.cta[_ngcontent-%COMP%] {\n  padding: 80px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 14px;\n  font-size: 36px;\n  line-height: 1.15;\n  font-weight: 700;\n  color: #fff;\n  text-wrap: balance;\n}\n.cta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  max-width: 620px;\n  font-size: 18px;\n  line-height: 1.65;\n  color: rgba(255, 255, 255, 0.9);\n  text-wrap: pretty;\n}\n.cta-inner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 64px;\n}\n.cta-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 16px 32px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.cta-btn--primary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #667eea;\n  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.4);\n}\n.cta-btn--primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.55);\n}\n.cta-btn--ghost[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.45);\n  color: #fff;\n}\n.cta-btn--ghost[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.25);\n}\n.cta-btn[_ngcontent-%COMP%]:active {\n  transform: translateY(0);\n}\n@media (max-width: 1024px) {\n  .benefit-grid[_ngcontent-%COMP%], \n   .service-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .steps[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n    row-gap: 40px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 44px;\n  }\n}\n@media (max-width: 768px) {\n  .cta-inner[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 32px;\n  }\n  .section-head--row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 600px) {\n  .container[_ngcontent-%COMP%] {\n    padding: 0 16px;\n  }\n  .section[_ngcontent-%COMP%], \n   .cta[_ngcontent-%COMP%] {\n    padding: 48px 0;\n  }\n  .hero[_ngcontent-%COMP%] {\n    min-height: 0;\n  }\n  .hero-photo[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-wash[_ngcontent-%COMP%] {\n    background:\n      linear-gradient(\n        135deg,\n        #667eea 0%,\n        #764ba2 100%);\n  }\n  .hero-inner[_ngcontent-%COMP%] {\n    padding: 48px 16px;\n  }\n  .hero-title[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .hero-sub[_ngcontent-%COMP%] {\n    font-size: 17px;\n  }\n  .hero-search[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    padding: 12px;\n  }\n  .hero-search[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n    flex: 1 0 100%;\n    order: -1;\n    padding: 4px 0 8px;\n  }\n  .hero-search[_ngcontent-%COMP%]   .search-icon[_ngcontent-%COMP%], \n   .hero-search[_ngcontent-%COMP%]   .search-divider[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-search[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .benefit-grid[_ngcontent-%COMP%], \n   .service-grid[_ngcontent-%COMP%], \n   .steps[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .section-head[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .cta[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .cta-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-self: stretch;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    justify-content: center;\n  }\n}\n.home-dash[_ngcontent-%COMP%]   .dash-header[_ngcontent-%COMP%] {\n  background:\n    radial-gradient(\n      at 18% 20%,\n      #7f7fff 0,\n      transparent 45%),\n    radial-gradient(\n      at 82% 28%,\n      #b16cea 0,\n      transparent 42%),\n    radial-gradient(\n      at 50% 92%,\n      #5a4fd6 0,\n      transparent 55%),\n    linear-gradient(\n      135deg,\n      #5b6ef0,\n      #7d4fc0);\n}\n.home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .action-badge[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #9b6ce0);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.38);\n  flex-shrink: 0;\n}\n.home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .action-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  fill: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.home-dash[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.home-dash[_ngcontent-%COMP%]   .dash-header[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  color: white;\n  padding: 40px 20px 36px;\n}\n.home-dash[_ngcontent-%COMP%]   .dash-header[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  right: -60px;\n  top: -90px;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.18),\n      transparent 70%);\n  pointer-events: none;\n}\n.home-dash[_ngcontent-%COMP%]   .dash-header-inner[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.home-dash[_ngcontent-%COMP%]   .dash-greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0 0 6px;\n}\n.home-dash[_ngcontent-%COMP%]   .dash-greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-body, 1rem);\n  opacity: 0.9;\n  margin: 0;\n}\n.home-dash[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n  padding: 40px 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #f3f2fb,\n      var(--color-bg-light, #f9fafb));\n}\n.home-dash[_ngcontent-%COMP%]   .action-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.home-dash[_ngcontent-%COMP%]   .admin-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .home-dash[_ngcontent-%COMP%]   .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  background: #fff;\n  border: 1px solid #edf0f5;\n  border-radius: 16px;\n  padding: 24px 20px;\n  cursor: pointer;\n  text-align: left;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 22px rgba(80, 70, 180, 0.07);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  font-family: inherit;\n}\n.home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .action-badge[_ngcontent-%COMP%] {\n  margin-bottom: 14px;\n}\n.home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-body, 1rem);\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--color-text, #1f2937);\n}\n.home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.4;\n}\n.home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 18px 40px rgba(102, 126, 234, 0.18);\n  border-color: rgba(102, 126, 234, 0.4);\n}\n.home-dash[_ngcontent-%COMP%]   .action-card.primary-action[_ngcontent-%COMP%] {\n  border-color: rgba(102, 126, 234, 0.4);\n  background: rgba(102, 126, 234, 0.04);\n}\n.home-dash[_ngcontent-%COMP%]   .action-card.primary-action[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-primary, #667eea);\n}\n@media (max-width: 480px) {\n  .home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    gap: 14px;\n    padding: 16px;\n  }\n  .home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .action-badge[_ngcontent-%COMP%] {\n    width: 42px;\n    height: 42px;\n    border-radius: 12px;\n    margin: 0;\n  }\n  .home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .action-badge[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    width: 22px;\n    height: 22px;\n  }\n  .home-dash[_ngcontent-%COMP%]   .action-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n.home-dash[_ngcontent-%COMP%]   .how-works[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #fff;\n}\n.home-dash[_ngcontent-%COMP%]   .how-works[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n  color: var(--color-text, #1f2937);\n}\n.home-dash[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 32px;\n}\n.home-dash[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.home-dash[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--text-h2, 1.125rem);\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.home-dash[_ngcontent-%COMP%]   .step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.55;\n}\n.home-dash[_ngcontent-%COMP%]   .step-num[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  background: var(--color-primary, #667eea);\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n}\n@media (max-width: 768px) {\n  .home-dash[_ngcontent-%COMP%]   .section-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .home-dash[_ngcontent-%COMP%]   .how-works[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .home-dash[_ngcontent-%COMP%]   .how-works[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n  }\n  .home-dash[_ngcontent-%COMP%]   .dash-header[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .home-dash[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .home-dash[_ngcontent-%COMP%]   .how-works[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .home-dash[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .home-dash[_ngcontent-%COMP%]   .dash-header[_ngcontent-%COMP%] {\n    padding: 20px 12px;\n  }\n  .home-dash[_ngcontent-%COMP%]   .dash-greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .home-dash[_ngcontent-%COMP%]   .quick-actions[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n}\n/*# sourceMappingURL=home.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, FormsModule, RouterModule, MatIconModule, TranslateModule, AnnouncementBannerComponent], template: `<div class="home">

  <!-- ROLLING ANNOUNCEMENT BANNER (admin-controlled) -->
  <app-announcement-banner></app-announcement-banner>

  <!-- \u2550\u2550 HERO SEARCH \u2014 logged-out visitors AND signed-in regular users \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <section class="hero" *ngIf="!isProUser() && !isAdmin()">
    <img class="hero-photo" src="assets/images/hero-bg.png" alt="" aria-hidden="true" />
    <div class="hero-wash"></div>

    <div class="hero-inner">
      <span class="hero-badge">
        <mat-icon>place</mat-icon>
        {{ 'HOME.HERO_BADGE' | translate }}
      </span>

      <h1 class="hero-title">{{ 'HOME.HERO_TITLE' | translate }}</h1>
      <p class="hero-sub">{{ 'HOME.HERO_SUB' | translate }}</p>

      <div class="hero-search">
        <mat-icon class="search-icon">search</mat-icon>
        <input
          class="search-input"
          type="text"
          [(ngModel)]="searchText"
          (keyup.enter)="startJob()"
          [attr.aria-label]="'HOME.HERO_TITLE' | translate"
          [placeholder]="'HOME.SEARCH_PLACEHOLDER' | translate" />
        <span class="search-divider"></span>
        <span class="search-place">
          <mat-icon>place</mat-icon>
          <input
            class="search-pin"
            type="text"
            [(ngModel)]="searchPin"
            (keyup.enter)="startJob()"
            maxlength="6"
            inputmode="numeric"
            pattern="[0-9]*"
            [attr.aria-label]="'HOME.SEARCH_PLACE' | translate"
            [placeholder]="'HOME.SEARCH_PLACE' | translate" />
        </span>
        <button type="button" class="search-btn" (click)="startJob()">{{ 'HOME.GET_QUOTES' | translate }}</button>
      </div>

      <div class="hero-chips">
        <a class="hero-chip" routerLink="/services" [queryParams]="{ category: 'plumbing' }">
          <mat-icon>build</mat-icon> {{ 'HOME.CAT_PLUMBING' | translate }}
        </a>
        <a class="hero-chip" routerLink="/services" [queryParams]="{ category: 'electrical' }">
          <mat-icon>bolt</mat-icon> {{ 'HOME.CAT_ELECTRICAL' | translate }}
        </a>
        <a class="hero-chip" routerLink="/services" [queryParams]="{ category: 'carpentry' }">
          <mat-icon>engineering</mat-icon> {{ 'HOME.CAT_CARPENTRY' | translate }}
        </a>
        <a class="hero-chip" routerLink="/services" [queryParams]="{ category: 'painting' }">
          <mat-icon>home_repair_service</mat-icon> {{ 'HOME.CAT_PAINTING' | translate }}
        </a>
        <a class="hero-chip" routerLink="/services" [queryParams]="{ category: 'cleaning' }">
          <mat-icon>cleaning_services</mat-icon> {{ 'HOME.CAT_CLEANING' | translate }}
        </a>
      </div>
    </div>
  </section>

  <!-- \u2550\u2550 AUTHENTICATED ROLE DASHBOARD \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <div class="home-dash" *ngIf="auth.isAuthenticated()">

    <!-- Dashboard header (pros & admins; regular users get the hero search above) -->
    <section class="dash-header" *ngIf="isProUser() || isAdmin()">
      <div class="dash-header-inner">
        <div class="dash-greeting">
          <h1>{{ 'HOME.WELCOME_BACK' | translate: { name: auth.getName() } }}</h1>
          <p *ngIf="isAdmin()">{{ 'HOME.ADMIN_SUBTITLE' | translate }}</p>
          <p *ngIf="isProUser()">{{ 'HOME.PRO_SUBTITLE' | translate }}</p>
        </div>
      </div>
    </section>

    <!-- Quick actions \u2014 regular user -->
    <ng-container *ngIf="!isProUser() && !isAdmin()">
      <section class="quick-actions">
        <div class="section-container">
          <div class="action-grid">
            <button class="action-card primary-action" (click)="navigateTo('/post-job')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/><rect x="9" y="3" width="6" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'HOME.POST_JOB' | translate }}</strong>
                <span>{{ 'HOME.POST_JOB_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/pending-jobs')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M3 7a2 2 0 0 1 2-2h4l2 2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.MY_JOBS' | translate }}</strong>
                <span>{{ 'HOME.MY_JOBS_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/messages')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.MESSAGES' | translate }}</strong>
                <span>{{ 'HOME.MESSAGES_DESC_USER' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/find-a-pro')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'HOME.BROWSE_PROS' | translate }}</strong>
                <span>{{ 'HOME.BROWSE_PROS_DESC' | translate }}</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </ng-container>

    <!-- Quick actions \u2014 pro user -->
    <ng-container *ngIf="isProUser()">
      <section class="quick-actions">
        <div class="section-container">
          <div class="action-grid">
            <button class="action-card primary-action" (click)="navigateTo('/available-jobs')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.FIND_JOBS' | translate }}</strong>
                <span>{{ 'HOME.FIND_JOBS_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/my-jobs-pro')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><path d="M22 4 12 14.01l-3-3"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.MY_WORK' | translate }}</strong>
                <span>{{ 'HOME.MY_WORK_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/my-services')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M14.7 6.3a4 4 0 0 0-5.4 5.3L3 18l3 3 6.4-6.3a4 4 0 0 0 5.3-5.4l-2.6 2.6-2.3-2.3z"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.MY_SERVICES' | translate }}</strong>
                <span>{{ 'HOME.MY_SERVICES_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/messages')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8z"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.MESSAGES' | translate }}</strong>
                <span>{{ 'HOME.MESSAGES_DESC_PRO' | translate }}</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </ng-container>

    <!-- How it works (non-admin) -->
    <ng-container *ngIf="!isAdmin()">
      <section class="how-works">
        <div class="section-container">
          <h2>{{ 'HOME.HOW_WORKS' | translate }}</h2>
          <div class="steps">
            <ng-container *ngIf="isProUser()">
              <div class="step"><div class="step-num">1</div><h3>{{ 'HOME.PRO_STEP1_TITLE' | translate }}</h3><p>{{ 'HOME.PRO_STEP1_DESC' | translate }}</p></div>
              <div class="step"><div class="step-num">2</div><h3>{{ 'HOME.PRO_STEP2_TITLE' | translate }}</h3><p>{{ 'HOME.PRO_STEP2_DESC' | translate }}</p></div>
              <div class="step"><div class="step-num">3</div><h3>{{ 'HOME.PRO_STEP3_TITLE' | translate }}</h3><p>{{ 'HOME.PRO_STEP3_DESC' | translate }}</p></div>
              <div class="step"><div class="step-num">4</div><h3>{{ 'HOME.PRO_STEP4_TITLE' | translate }}</h3><p>{{ 'HOME.PRO_STEP4_DESC' | translate }}</p></div>
            </ng-container>
            <ng-container *ngIf="!isProUser()">
              <div class="step"><div class="step-num">1</div><h3>{{ 'HOME.USER_STEP1_TITLE' | translate }}</h3><p>{{ 'HOME.USER_STEP1_DESC' | translate }}</p></div>
              <div class="step"><div class="step-num">2</div><h3>{{ 'HOME.USER_STEP2_TITLE' | translate }}</h3><p>{{ 'HOME.USER_STEP2_DESC' | translate }}</p></div>
              <div class="step"><div class="step-num">3</div><h3>{{ 'HOME.USER_STEP3_TITLE' | translate }}</h3><p>{{ 'HOME.USER_STEP3_DESC' | translate }}</p></div>
              <div class="step"><div class="step-num">4</div><h3>{{ 'HOME.USER_STEP4_TITLE' | translate }}</h3><p>{{ 'HOME.USER_STEP4_DESC' | translate }}</p></div>
            </ng-container>
          </div>
        </div>
      </section>
    </ng-container>

    <!-- Admin quick actions -->
    <ng-container *ngIf="isAdmin()">
      <section class="quick-actions">
        <div class="section-container">
          <div class="action-grid admin-grid">
            <button class="action-card primary-action" (click)="navigateTo('/admin-users', {view: 'dashboard'})">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M3 21h18"/><rect x="6" y="11" width="3" height="7" rx="1"/><rect x="11" y="7" width="3" height="11" rx="1"/><rect x="16" y="13" width="3" height="5" rx="1"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'HOME.DASHBOARD' | translate }}</strong>
                <span>{{ 'HOME.DASHBOARD_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/admin-users', {view: 'disputes'})">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M12 3v18"/><path d="M7 6h10"/><path d="M5 6 2 13a3 3 0 0 0 6 0z"/><path d="M19 6l-3 7a3 3 0 0 0 6 0z"/><path d="M8 21h8"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'HOME.DISPUTES' | translate }}</strong>
                <span>{{ 'HOME.DISPUTES_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/admin-users', {view: 'search'})">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M12 3 5 6v5c0 4 3 7.5 7 9 4-1.5 7-5 7-9V6z"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'HOME.USER_MGMT' | translate }}</strong>
                <span>{{ 'HOME.USER_MGMT_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/admin-materials')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><path d="M12 13v8"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.MATERIALS' | translate }}</strong>
                <span>{{ 'HOME.MATERIALS_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/admin-users', {view: 'service-areas'})">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="m9 4-6 2v14l6-2 6 2 6-2V4l-6 2-6-2z"/><path d="M9 4v14M15 6v14"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'HOME.SERVICE_AREAS' | translate }}</strong>
                <span>{{ 'HOME.SERVICE_AREAS_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/notifications')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.NOTIFICATIONS' | translate }}</strong>
                <span>{{ 'HOME.NOTIF_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/profile')">
              <span class="action-badge">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4"/><path d="M4 21a8 8 0 0 1 16 0"/></svg>
              </span>
              <div class="card-text">
                <strong>{{ 'NAV.PROFILE' | translate }}</strong>
                <span>{{ 'HOME.PROFILE_DESC' | translate }}</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </ng-container>

  </div>

  <!-- \u2550\u2550 MARKETING LANDING (logged-out visitors) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="!auth.isAuthenticated()">

  <!-- WHY -->
  <section class="section section--white">
    <div class="container">
      <header class="section-head">
        <h2>{{ 'HOME.WHY_TITLE' | translate }}</h2>
        <p>{{ 'HOME.WHY_SUB' | translate }}</p>
      </header>

      <div class="benefit-grid">
        <article class="benefit-card">
          <mat-icon class="benefit-icon">task_alt</mat-icon>
          <h3>{{ 'HOME.BENEFIT1_TITLE' | translate }}</h3>
          <p>{{ 'HOME.BENEFIT1_DESC' | translate }}</p>
        </article>
        <article class="benefit-card">
          <mat-icon class="benefit-icon">bolt</mat-icon>
          <h3>{{ 'HOME.BENEFIT2_TITLE' | translate }}</h3>
          <p>{{ 'HOME.BENEFIT2_DESC' | translate }}</p>
        </article>
        <article class="benefit-card">
          <mat-icon class="benefit-icon">lock</mat-icon>
          <h3>{{ 'HOME.BENEFIT3_TITLE' | translate }}</h3>
          <p>{{ 'HOME.BENEFIT3_DESC' | translate }}</p>
        </article>
      </div>
    </div>
  </section>

  <!-- CLOSING CTA -->
  <section class="cta">
    <div class="container cta-inner">
      <div>
        <h2>{{ 'HOME.CTA_TITLE' | translate }}</h2>
        <p>{{ 'HOME.CTA_SUB' | translate }}</p>
      </div>
      <div class="cta-actions">
        <a class="cta-btn cta-btn--primary" routerLink="/register">{{ 'HOME.CTA_BTN' | translate }}</a>
        <a class="cta-btn cta-btn--ghost" routerLink="/register" [queryParams]="{ role: 'pro' }">
          {{ 'HOME.BECOME_PRO' | translate }}
        </a>
      </div>
    </div>
  </section>

  </ng-container>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/home/home/home.scss */\n.home {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: #1f2937;\n  background: #fff;\n}\n.container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.hero {\n  position: relative;\n  min-height: 640px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  overflow: hidden;\n}\n.hero-photo {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.hero-wash {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      135deg,\n      rgba(102, 126, 234, 0.94) 0%,\n      rgba(118, 75, 162, 0.88) 100%);\n}\n.hero-inner {\n  position: relative;\n  width: 100%;\n  max-width: 1200px;\n  padding: 80px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 26px;\n  text-align: center;\n}\n.hero-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n  padding: 7px 16px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  font-size: 14px;\n  font-weight: 500;\n}\n.hero-badge mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hero-title {\n  margin: 0;\n  font-size: 60px;\n  line-height: 1.08;\n  font-weight: 700;\n  color: #fff;\n  max-width: 900px;\n  text-wrap: balance;\n}\n.hero-sub {\n  margin: 0;\n  font-size: 19px;\n  line-height: 1.6;\n  color: rgba(255, 255, 255, 0.9);\n  max-width: 620px;\n  text-wrap: pretty;\n}\n.hero-search {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  width: 100%;\n  max-width: 760px;\n  margin-top: 6px;\n  padding: 10px 10px 10px 20px;\n  box-sizing: border-box;\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);\n}\n.hero-search .search-icon {\n  color: #6b7280;\n  flex-shrink: 0;\n}\n.search-input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: none;\n  font: inherit;\n  font-size: 17px;\n  color: #1f2937;\n  background: transparent;\n}\n.search-input::placeholder {\n  color: #6b7280;\n}\n.search-divider {\n  width: 1px;\n  height: 28px;\n  background: #e5e7eb;\n  flex-shrink: 0;\n}\n.search-place {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 0 6px;\n  font-size: 15px;\n  color: #1f2937;\n  white-space: nowrap;\n}\n.search-place mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n  color: #667eea;\n}\n.search-pin {\n  width: 88px;\n  border: 0;\n  outline: none;\n  background: transparent;\n  font: inherit;\n  font-size: 15px;\n  color: #1f2937;\n}\n.search-pin::placeholder {\n  color: rgba(31, 41, 55, 0.45);\n}\n.search-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 14px 26px;\n  border: none;\n  cursor: pointer;\n  border-radius: 8px;\n  background: #667eea;\n  color: #fff;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  white-space: nowrap;\n  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.4);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.search-btn:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.55);\n}\n.search-btn:active {\n  transform: translateY(0);\n  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.4);\n}\n.hero-chips {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n  margin-top: 10px;\n}\n.hero-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 7px;\n  padding: 9px 18px;\n  border-radius: 20px;\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  color: #fff;\n  font-size: 15px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.2s ease;\n}\n.hero-chip mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.hero-chip:hover {\n  background: rgba(255, 255, 255, 0.28);\n}\n.section {\n  padding: 80px 0;\n}\n.section--white {\n  background: #fff;\n}\n.section--gray {\n  background: #f9fafb;\n}\n.section-head {\n  margin: 0 0 44px;\n}\n.section-head h2 {\n  margin: 0 0 12px;\n  font-size: 36px;\n  line-height: 1.15;\n  font-weight: 700;\n}\n.section-head p {\n  margin: 0;\n  max-width: 640px;\n  font-size: 17px;\n  line-height: 1.6;\n  color: #6b7280;\n  text-wrap: pretty;\n}\n.section-head--row {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 24px;\n  margin-bottom: 40px;\n}\n.section-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  flex-shrink: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #667eea;\n  text-decoration: none;\n}\n.section-link mat-icon {\n  font-size: 19px;\n  width: 19px;\n  height: 19px;\n}\n.section-link:hover {\n  text-decoration: underline;\n}\n.benefit-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 24px;\n}\n.benefit-card {\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  padding: 28px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition:\n    transform 0.2s ease,\n    box-shadow 0.2s ease,\n    border-color 0.2s ease;\n}\n.benefit-card h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.benefit-card p {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: #6b7280;\n  text-wrap: pretty;\n}\n.benefit-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);\n  border-color: #667eea;\n}\n.benefit-icon {\n  font-size: 30px;\n  width: 30px;\n  height: 30px;\n  color: #667eea;\n}\n.steps {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 32px;\n}\n.step {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.step h3 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 600;\n}\n.step p {\n  margin: 0;\n  font-size: 16px;\n  line-height: 1.6;\n  color: #6b7280;\n  text-wrap: pretty;\n}\n.step-num {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  border-radius: 50%;\n  background: #667eea;\n  color: #fff;\n  font-size: 22px;\n  font-weight: 700;\n}\n.service-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 24px;\n}\n.service-card {\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.service-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);\n}\n.service-thumb {\n  position: relative;\n  height: 150px;\n  background: #f3f4f6;\n}\n.service-thumb img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  display: block;\n}\n.service-tag {\n  position: absolute;\n  left: 12px;\n  bottom: 12px;\n  padding: 5px 12px;\n  border-radius: 20px;\n  background: rgba(0, 0, 0, 0.55);\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n}\n.service-body {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  padding: 20px;\n}\n.service-body h3 {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 600;\n}\n.service-pro {\n  margin: 0;\n  font-size: 14px;\n  color: #6b7280;\n}\n.service-price {\n  margin: 2px 0 0;\n  font-size: 16px;\n  font-weight: 700;\n}\n.cta {\n  padding: 80px 0;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n}\n.cta h2 {\n  margin: 0 0 14px;\n  font-size: 36px;\n  line-height: 1.15;\n  font-weight: 700;\n  color: #fff;\n  text-wrap: balance;\n}\n.cta p {\n  margin: 0;\n  max-width: 620px;\n  font-size: 18px;\n  line-height: 1.65;\n  color: rgba(255, 255, 255, 0.9);\n  text-wrap: pretty;\n}\n.cta-inner {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 64px;\n}\n.cta-actions {\n  display: flex;\n  gap: 16px;\n  flex-shrink: 0;\n}\n.cta-btn {\n  display: inline-flex;\n  align-items: center;\n  padding: 16px 32px;\n  border-radius: 8px;\n  font-size: 16px;\n  font-weight: 600;\n  text-decoration: none;\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.cta-btn--primary {\n  background: #fff;\n  color: #667eea;\n  box-shadow: 0 3px 10px rgba(102, 126, 234, 0.4);\n}\n.cta-btn--primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.55);\n}\n.cta-btn--ghost {\n  background: rgba(255, 255, 255, 0.15);\n  border: 1px solid rgba(255, 255, 255, 0.45);\n  color: #fff;\n}\n.cta-btn--ghost:hover {\n  transform: translateY(-2px);\n  background: rgba(255, 255, 255, 0.25);\n}\n.cta-btn:active {\n  transform: translateY(0);\n}\n@media (max-width: 1024px) {\n  .benefit-grid,\n  .service-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n  .steps {\n    grid-template-columns: repeat(2, 1fr);\n    row-gap: 40px;\n  }\n  .hero-title {\n    font-size: 44px;\n  }\n}\n@media (max-width: 768px) {\n  .cta-inner {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 32px;\n  }\n  .section-head--row {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n@media (max-width: 600px) {\n  .container {\n    padding: 0 16px;\n  }\n  .section,\n  .cta {\n    padding: 48px 0;\n  }\n  .hero {\n    min-height: 0;\n  }\n  .hero-photo {\n    display: none;\n  }\n  .hero-wash {\n    background:\n      linear-gradient(\n        135deg,\n        #667eea 0%,\n        #764ba2 100%);\n  }\n  .hero-inner {\n    padding: 48px 16px;\n  }\n  .hero-title {\n    font-size: 32px;\n  }\n  .hero-sub {\n    font-size: 17px;\n  }\n  .hero-search {\n    flex-wrap: wrap;\n    padding: 12px;\n  }\n  .hero-search .search-input {\n    flex: 1 0 100%;\n    order: -1;\n    padding: 4px 0 8px;\n  }\n  .hero-search .search-icon,\n  .hero-search .search-divider {\n    display: none;\n  }\n  .hero-search .search-btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .benefit-grid,\n  .service-grid,\n  .steps {\n    grid-template-columns: 1fr;\n  }\n  .section-head h2,\n  .cta h2 {\n    font-size: 28px;\n  }\n  .cta-actions {\n    flex-direction: column;\n    align-self: stretch;\n  }\n  .cta-btn {\n    justify-content: center;\n  }\n}\n.home-dash .dash-header {\n  background:\n    radial-gradient(\n      at 18% 20%,\n      #7f7fff 0,\n      transparent 45%),\n    radial-gradient(\n      at 82% 28%,\n      #b16cea 0,\n      transparent 42%),\n    radial-gradient(\n      at 50% 92%,\n      #5a4fd6 0,\n      transparent 55%),\n    linear-gradient(\n      135deg,\n      #5b6ef0,\n      #7d4fc0);\n}\n.home-dash .action-card .action-badge {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 48px;\n  height: 48px;\n  border-radius: 14px;\n  color: #fff;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #9b6ce0);\n  box-shadow: 0 6px 16px rgba(102, 126, 234, 0.38);\n  flex-shrink: 0;\n}\n.home-dash .action-card .action-badge svg {\n  width: 24px;\n  height: 24px;\n  stroke: currentColor;\n  stroke-width: 1.8;\n  fill: none;\n  stroke-linecap: round;\n  stroke-linejoin: round;\n}\n.home-dash .section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.home-dash .dash-header {\n  position: relative;\n  overflow: hidden;\n  color: white;\n  padding: 40px 20px 36px;\n}\n.home-dash .dash-header::after {\n  content: "";\n  position: absolute;\n  right: -60px;\n  top: -90px;\n  width: 260px;\n  height: 260px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.18),\n      transparent 70%);\n  pointer-events: none;\n}\n.home-dash .dash-header-inner {\n  position: relative;\n  z-index: 1;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.home-dash .dash-greeting h1 {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  margin: 0 0 6px;\n}\n.home-dash .dash-greeting p {\n  font-size: var(--text-body, 1rem);\n  opacity: 0.9;\n  margin: 0;\n}\n.home-dash .quick-actions {\n  padding: 40px 20px;\n  background:\n    linear-gradient(\n      180deg,\n      #f3f2fb,\n      var(--color-bg-light, #f9fafb));\n}\n.home-dash .action-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 20px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.home-dash .admin-grid {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .home-dash .admin-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.home-dash .action-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  background: #fff;\n  border: 1px solid #edf0f5;\n  border-radius: 16px;\n  padding: 24px 20px;\n  cursor: pointer;\n  text-align: left;\n  box-shadow: 0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 22px rgba(80, 70, 180, 0.07);\n  transition:\n    transform 0.25s ease,\n    box-shadow 0.25s ease,\n    border-color 0.25s ease;\n  font-family: inherit;\n}\n.home-dash .action-card .action-badge {\n  margin-bottom: 14px;\n}\n.home-dash .action-card .card-text {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.home-dash .action-card strong {\n  font-size: var(--text-body, 1rem);\n  font-weight: 600;\n  letter-spacing: -0.01em;\n  color: var(--color-text, #1f2937);\n}\n.home-dash .action-card .card-text span {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.4;\n}\n.home-dash .action-card:hover {\n  transform: translateY(-5px);\n  box-shadow: 0 18px 40px rgba(102, 126, 234, 0.18);\n  border-color: rgba(102, 126, 234, 0.4);\n}\n.home-dash .action-card.primary-action {\n  border-color: rgba(102, 126, 234, 0.4);\n  background: rgba(102, 126, 234, 0.04);\n}\n.home-dash .action-card.primary-action strong {\n  color: var(--color-primary, #667eea);\n}\n@media (max-width: 480px) {\n  .home-dash .action-card {\n    flex-direction: row;\n    align-items: center;\n    gap: 14px;\n    padding: 16px;\n  }\n  .home-dash .action-card .action-badge {\n    width: 42px;\n    height: 42px;\n    border-radius: 12px;\n    margin: 0;\n  }\n  .home-dash .action-card .action-badge svg {\n    width: 22px;\n    height: 22px;\n  }\n  .home-dash .action-card .card-text {\n    flex: 1;\n    min-width: 0;\n  }\n}\n.home-dash .how-works {\n  padding: 80px 20px;\n  background: #fff;\n}\n.home-dash .how-works h2 {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n  color: var(--color-text, #1f2937);\n}\n.home-dash .steps {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 32px;\n}\n.home-dash .step {\n  text-align: center;\n}\n.home-dash .step h3 {\n  font-size: var(--text-h2, 1.125rem);\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.home-dash .step p {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.55;\n}\n.home-dash .step-num {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  background: var(--color-primary, #667eea);\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n}\n@media (max-width: 768px) {\n  .home-dash .section-container {\n    padding: 0;\n  }\n  .home-dash .how-works {\n    padding: 40px 16px;\n  }\n  .home-dash .how-works h2 {\n    margin-bottom: 28px;\n  }\n  .home-dash .dash-header {\n    padding: 24px 16px;\n  }\n  .home-dash .quick-actions {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .home-dash .how-works {\n    padding: 28px 12px;\n  }\n  .home-dash .steps {\n    gap: 12px;\n  }\n  .home-dash .dash-header {\n    padding: 20px 12px;\n  }\n  .home-dash .dash-greeting h1 {\n    font-size: 1.3rem;\n  }\n  .home-dash .quick-actions {\n    padding: 16px 12px;\n  }\n}\n/*# sourceMappingURL=home.css.map */\n'] }]
  }], () => [{ type: Router }, { type: Auth }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home/home.ts", lineNumber: 17 });
})();

// src/app/features/home/home-routing-module.ts
var routes = [
  { path: "", component: HomeComponent }
];
var HomeRoutingModule = class _HomeRoutingModule {
  static \u0275fac = function HomeRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/home/home-module.ts
var HomeModule = class _HomeModule {
  static \u0275fac = function HomeModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _HomeModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    HomeRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        HomeRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  HomeModule
};
//# sourceMappingURL=chunk-WUCHPFEM.js.map

