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
  CommonModule,
  Component,
  NgIf,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
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
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/home/home/home.ts
var _c0 = (a0) => ({ name: a0 });
function HomeComponent_ng_container_1_p_7_Template(rf, ctx) {
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
function HomeComponent_ng_container_1_p_8_Template(rf, ctx) {
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
function HomeComponent_ng_container_1_p_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "HOME.USER_SUBTITLE"));
  }
}
function HomeComponent_ng_container_1_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 5)(2, "div", 6)(3, "div", 7)(4, "button", 8);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/post-job"));
    });
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "\u{1F4CB}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_10_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/pending-jobs"));
    });
    \u0275\u0275elementStart(15, "span", 9);
    \u0275\u0275text(16, "\u{1F4C1}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_10_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/messages"));
    });
    \u0275\u0275elementStart(25, "span", 9);
    \u0275\u0275text(26, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 10)(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_10_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/find-a-pro"));
    });
    \u0275\u0275elementStart(35, "span", 9);
    \u0275\u0275text(36, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 10)(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "HOME.POST_JOB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "HOME.POST_JOB_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, "NAV.MY_JOBS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 14, "HOME.MY_JOBS_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 16, "NAV.MESSAGES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 18, "HOME.MESSAGES_DESC_USER"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 20, "HOME.BROWSE_PROS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 22, "HOME.BROWSE_PROS_DESC"));
  }
}
function HomeComponent_ng_container_1_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 5)(2, "div", 6)(3, "div", 7)(4, "button", 8);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/available-jobs"));
    });
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "\u{1F50D}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_11_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/my-jobs-pro"));
    });
    \u0275\u0275elementStart(15, "span", 9);
    \u0275\u0275text(16, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_11_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/my-services"));
    });
    \u0275\u0275elementStart(25, "span", 9);
    \u0275\u0275text(26, "\u{1F6E0}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 10)(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_11_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/messages"));
    });
    \u0275\u0275elementStart(35, "span", 9);
    \u0275\u0275text(36, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 10)(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 8, "NAV.FIND_JOBS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 10, "HOME.FIND_JOBS_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 12, "NAV.MY_WORK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 14, "HOME.MY_WORK_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 16, "NAV.MY_SERVICES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 18, "HOME.MY_SERVICES_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 20, "NAV.MESSAGES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 22, "HOME.MESSAGES_DESC_PRO"));
  }
}
function HomeComponent_ng_container_1_ng_container_12_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 15);
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
    \u0275\u0275elementStart(10, "div", 14)(11, "div", 15);
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
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
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
    \u0275\u0275elementStart(28, "div", 14)(29, "div", 15);
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
function HomeComponent_ng_container_1_ng_container_12_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 14)(2, "div", 15);
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
    \u0275\u0275elementStart(10, "div", 14)(11, "div", 15);
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
    \u0275\u0275elementStart(19, "div", 14)(20, "div", 15);
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
    \u0275\u0275elementStart(28, "div", 14)(29, "div", 15);
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
function HomeComponent_ng_container_1_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 12)(2, "div", 6)(3, "h2");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 13);
    \u0275\u0275template(7, HomeComponent_ng_container_1_ng_container_12_ng_container_7_Template, 37, 24, "ng-container", 1)(8, HomeComponent_ng_container_1_ng_container_12_ng_container_8_Template, 37, 24, "ng-container", 1);
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
function HomeComponent_ng_container_1_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 5)(2, "div", 6)(3, "div", 16)(4, "button", 8);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin-users"));
    });
    \u0275\u0275elementStart(5, "span", 9);
    \u0275\u0275text(6, "\u{1F6E1}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 10)(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_13_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin-materials"));
    });
    \u0275\u0275elementStart(15, "span", 9);
    \u0275\u0275text(16, "\u{1F4E6}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 10)(18, "strong");
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_13_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/admin-users", { view: "service-areas" }));
    });
    \u0275\u0275elementStart(25, "span", 9);
    \u0275\u0275text(26, "\u{1F5FA}\uFE0F");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 10)(28, "strong");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_13_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/messages"));
    });
    \u0275\u0275elementStart(35, "span", 9);
    \u0275\u0275text(36, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 10)(38, "strong");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(44, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_13_Template_button_click_44_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/notifications"));
    });
    \u0275\u0275elementStart(45, "span", 9);
    \u0275\u0275text(46, "\u{1F514}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(47, "div", 10)(48, "strong");
    \u0275\u0275text(49);
    \u0275\u0275pipe(50, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span");
    \u0275\u0275text(52);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(54, "button", 11);
    \u0275\u0275listener("click", function HomeComponent_ng_container_1_ng_container_13_Template_button_click_54_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.navigateTo("/profile"));
    });
    \u0275\u0275elementStart(55, "span", 9);
    \u0275\u0275text(56, "\u{1F464}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "div", 10)(58, "strong");
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(61, "span");
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd()()()()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 12, "HOME.USER_MGMT"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 14, "HOME.USER_MGMT_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 16, "NAV.MATERIALS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 18, "HOME.MATERIALS_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 20, "HOME.SERVICE_AREAS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 22, "HOME.SERVICE_AREAS_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 24, "NAV.MESSAGES"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 26, "HOME.MESSAGES_DESC_ADMIN"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(50, 28, "NAV.NOTIFICATIONS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 30, "HOME.NOTIF_DESC"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 32, "NAV.PROFILE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 34, "HOME.PROFILE_DESC"));
  }
}
function HomeComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 2)(2, "div", 3)(3, "div", 4)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, HomeComponent_ng_container_1_p_7_Template, 3, 3, "p", 1)(8, HomeComponent_ng_container_1_p_8_Template, 3, 3, "p", 1)(9, HomeComponent_ng_container_1_p_9_Template, 3, 3, "p", 1);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, HomeComponent_ng_container_1_ng_container_10_Template, 44, 24, "ng-container", 1)(11, HomeComponent_ng_container_1_ng_container_11_Template, 44, 24, "ng-container", 1)(12, HomeComponent_ng_container_1_ng_container_12_Template, 9, 5, "ng-container", 1)(13, HomeComponent_ng_container_1_ng_container_13_Template, 64, 36, "ng-container", 1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 8, "HOME.WELCOME_BACK", \u0275\u0275pureFunction1(11, _c0, ctx_r1.auth.getName())));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isAdmin());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.isProUser());
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.isProUser() && !ctx_r1.isAdmin());
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
function HomeComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "section", 17)(2, "div", 18)(3, "div", 19)(4, "h1");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 20)(11, "button", 21);
    \u0275\u0275listener("click", function HomeComponent_ng_container_2_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateTo("/auth/register"));
    });
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 22);
    \u0275\u0275listener("click", function HomeComponent_ng_container_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateTo("/auth/register/pro"));
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 23);
    \u0275\u0275element(18, "img", 24);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "section", 25)(20, "div", 6)(21, "h2");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 26)(25, "div", 27)(26, "span", 28);
    \u0275\u0275text(27, "\u2705");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "h3");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "p");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "div", 27)(35, "span", 28);
    \u0275\u0275text(36, "\u26A1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "h3");
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "p");
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 27)(44, "span", 28);
    \u0275\u0275text(45, "\u{1F512}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "h3");
    \u0275\u0275text(47);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "p");
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(52, "div", 27)(53, "span", 28);
    \u0275\u0275text(54, "\u{1F4AC}");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "h3");
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "p");
    \u0275\u0275text(59);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(61, "section", 12)(62, "div", 6)(63, "h2");
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "div", 13)(67, "div", 14)(68, "div", 15);
    \u0275\u0275text(69, "1");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(70, "h3");
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "p");
    \u0275\u0275text(74);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(76, "div", 14)(77, "div", 15);
    \u0275\u0275text(78, "2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "h3");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "p");
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(85, "div", 14)(86, "div", 15);
    \u0275\u0275text(87, "3");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "h3");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(91, "p");
    \u0275\u0275text(92);
    \u0275\u0275pipe(93, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(94, "div", 14)(95, "div", 15);
    \u0275\u0275text(96, "4");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(97, "h3");
    \u0275\u0275text(98);
    \u0275\u0275pipe(99, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(100, "p");
    \u0275\u0275text(101);
    \u0275\u0275pipe(102, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(103, "section", 29)(104, "div", 30)(105, "h2");
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(108, "p");
    \u0275\u0275text(109);
    \u0275\u0275pipe(110, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "button", 31);
    \u0275\u0275listener("click", function HomeComponent_ng_container_2_Template_button_click_111_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.navigateTo("/auth/register"));
    });
    \u0275\u0275text(112);
    \u0275\u0275pipe(113, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 25, "HOME.HERO_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 27, "HOME.HERO_SUB"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 29, "HOME.JOIN_AS_USER"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 31, "HOME.BECOME_PRO"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 33, "HOME.WHY_TITLE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 35, "HOME.BENEFIT1_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(33, 37, "HOME.BENEFIT1_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 39, "HOME.BENEFIT2_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 41, "HOME.BENEFIT2_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(48, 43, "HOME.BENEFIT3_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(51, 45, "HOME.BENEFIT3_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 47, "HOME.BENEFIT4_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 49, "HOME.BENEFIT4_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 51, "HOME.HOW_WORKS"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 53, "HOME.USER_STEP1_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(75, 55, "HOME.USER_STEP1_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 57, "HOME.USER_STEP2_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(84, 59, "HOME.USER_STEP2_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 61, "HOME.USER_STEP3_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(93, 63, "HOME.USER_STEP3_DESC"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 65, "HOME.USER_STEP4_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(102, 67, "HOME.USER_STEP4_DESC"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 69, "HOME.CTA_TITLE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 71, "HOME.CTA_SUB"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(113, 73, "HOME.CTA_BTN"));
  }
}
var HomeComponent = class _HomeComponent {
  router;
  auth;
  constructor(router, auth) {
    this.router = router;
    this.auth = auth;
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 3, vars: 2, consts: [[1, "home-wrapper"], [4, "ngIf"], [1, "dash-header"], [1, "dash-header-inner"], [1, "dash-greeting"], [1, "quick-actions"], [1, "section-container"], [1, "action-grid"], [1, "action-card", "primary-action", 3, "click"], [1, "action-icon"], [1, "card-text"], [1, "action-card", 3, "click"], [1, "how-works"], [1, "steps"], [1, "step"], [1, "step-num"], [1, "action-grid", "admin-grid"], [1, "hero"], [1, "hero-container"], [1, "hero-left"], [1, "hero-cta"], [1, "cta-btn", "primary", 3, "click"], [1, "cta-btn", "secondary", 3, "click"], [1, "hero-right"], ["src", "images/Image_yprohub_home.png", "alt", "yProHub platform"], [1, "benefits"], [1, "benefits-grid"], [1, "benefit-item"], [1, "benefit-icon"], [1, "cta-banner"], [1, "cta-content"], [1, "cta-btn", "large", 3, "click"]], template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275template(1, HomeComponent_ng_container_1_Template, 14, 13, "ng-container", 1)(2, HomeComponent_ng_container_2_Template, 114, 75, "ng-container", 1);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.auth.isAuthenticated());
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.auth.isAuthenticated());
    }
  }, dependencies: [CommonModule, NgIf, TranslateModule, TranslatePipe], styles: ['@charset "UTF-8";\n\n\n\n.home-wrapper[_ngcontent-%COMP%] {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: var(--color-text, #1f2937);\n  background: #fff;\n}\n.hero[_ngcontent-%COMP%] {\n  background: var(--color-primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));\n  color: white;\n  padding: 80px 20px;\n}\n.hero-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.hero-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-display, 2.25rem);\n  font-weight: 700;\n  line-height: 1.15;\n  margin-bottom: 16px;\n}\n.hero-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-body, 1rem);\n  opacity: 0.95;\n  margin-bottom: 32px;\n  line-height: 1.65;\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.hero-right[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.cta-btn[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: var(--text-body, 1rem);\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n  font-family: inherit;\n  min-height: 48px;\n}\n.cta-btn.primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n}\n.cta-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);\n}\n.cta-btn.secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.7);\n}\n.cta-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.cta-btn.large[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n  padding: 14px 36px;\n  font-size: 1rem;\n}\n.cta-btn.large[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.benefits[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: var(--color-bg-light, #f9fafb);\n}\n.benefits[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n  color: var(--color-text, #1f2937);\n}\n.benefits-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 24px;\n}\n.benefit-item[_ngcontent-%COMP%] {\n  background: #fff;\n  padding: 28px 20px;\n  border-radius: 12px;\n  text-align: center;\n  border: 1px solid var(--color-border, #e5e7eb);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.benefit-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);\n}\n.benefit-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.benefit-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--text-h2, 1.125rem);\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.benefit-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.55;\n}\n.how-works[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #fff;\n}\n.how-works[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n  color: var(--color-text, #1f2937);\n}\n.steps[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 32px;\n}\n.step[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.step-num[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  background: var(--color-primary, #667eea);\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n}\n.step[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: var(--text-h2, 1.125rem);\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.step[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.55;\n}\n.cta-banner[_ngcontent-%COMP%] {\n  padding: 60px 20px;\n  background: var(--color-primary-gradient, linear-gradient(135deg, #667eea, #764ba2));\n  color: white;\n  text-align: center;\n}\n.cta-content[_ngcontent-%COMP%] {\n  max-width: 560px;\n  margin: 0 auto;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-body, 1rem);\n  opacity: 0.95;\n  margin-bottom: 28px;\n}\n.admin-grid[_ngcontent-%COMP%] {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .admin-grid[_ngcontent-%COMP%] {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.dash-header[_ngcontent-%COMP%] {\n  background: var(--color-primary, #667eea);\n  color: white;\n  padding: 36px 20px 32px;\n}\n.dash-header-inner[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.dash-greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.dash-greeting[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: var(--text-body, 1rem);\n  opacity: 0.9;\n  margin: 0;\n}\n.quick-actions[_ngcontent-%COMP%] {\n  padding: 32px 20px;\n  background: var(--color-bg-light, #f9fafb);\n}\n.action-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.action-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  background: #fff;\n  border: 1.5px solid var(--color-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 20px 16px;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    border-color 0.15s ease;\n  font-family: inherit;\n}\n.action-card[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n  font-size: 28px;\n  margin-bottom: 6px;\n  flex-shrink: 0;\n}\n.action-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.action-card[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: var(--text-body, 1rem);\n  font-weight: 600;\n  color: var(--color-text, #1f2937);\n}\n.action-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.4;\n}\n.action-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n  border-color: var(--color-primary, #667eea);\n}\n.action-card.primary-action[_ngcontent-%COMP%] {\n  border-color: var(--color-primary, #667eea);\n  background: rgba(102, 126, 234, 0.04);\n}\n.action-card.primary-action[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-primary, #667eea);\n}\n@media (max-width: 480px) {\n  .action-card[_ngcontent-%COMP%] {\n    flex-direction: row;\n    align-items: center;\n    gap: 12px;\n  }\n  .action-card[_ngcontent-%COMP%]   .action-icon[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin: 0;\n  }\n  .action-card[_ngcontent-%COMP%]   .card-text[_ngcontent-%COMP%] {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 768px) {\n  .section-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding: 48px 16px 56px;\n  }\n  .hero-container[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .hero-right[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero-cta[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 100%;\n    text-align: center;\n  }\n  .benefits[_ngcontent-%COMP%], \n   .how-works[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .benefits[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .how-works[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    margin-bottom: 28px;\n  }\n  .benefit-item[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  }\n  .cta-banner[_ngcontent-%COMP%] {\n    padding: 36px 16px;\n  }\n  .dash-header[_ngcontent-%COMP%] {\n    padding: 24px 16px;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .hero[_ngcontent-%COMP%] {\n    padding: 36px 12px 48px;\n  }\n  .hero-left[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.6rem;\n  }\n  .benefits[_ngcontent-%COMP%], \n   .how-works[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .benefits-grid[_ngcontent-%COMP%], \n   .steps[_ngcontent-%COMP%] {\n    gap: 12px;\n  }\n  .cta-banner[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .dash-header[_ngcontent-%COMP%] {\n    padding: 20px 12px;\n  }\n  .dash-greeting[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n  }\n  .quick-actions[_ngcontent-%COMP%] {\n    padding: 16px 12px;\n  }\n}\n/*# sourceMappingURL=home.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HomeComponent, [{
    type: Component,
    args: [{ selector: "app-home", standalone: true, imports: [CommonModule, TranslateModule], template: `<div class="home-wrapper">

  <!-- \u2550\u2550 AUTHENTICATED DASHBOARD \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="auth.isAuthenticated()">

    <!-- \u2500\u2500 Dashboard header \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <section class="dash-header">
      <div class="dash-header-inner">
        <div class="dash-greeting">
          <h1>{{ 'HOME.WELCOME_BACK' | translate: { name: auth.getName() } }}</h1>
          <p *ngIf="isAdmin()">{{ 'HOME.ADMIN_SUBTITLE' | translate }}</p>
          <p *ngIf="isProUser()">{{ 'HOME.PRO_SUBTITLE' | translate }}</p>
          <p *ngIf="!isProUser() && !isAdmin()">{{ 'HOME.USER_SUBTITLE' | translate }}</p>
        </div>
      </div>
    </section>

    <!-- \u2500\u2500 Quick actions \u2014 regular user \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isProUser() && !isAdmin()">
      <section class="quick-actions">
        <div class="section-container">
          <div class="action-grid">
            <button class="action-card primary-action" (click)="navigateTo('/post-job')">
              <span class="action-icon">\u{1F4CB}</span>
              <div class="card-text">
                <strong>{{ 'HOME.POST_JOB' | translate }}</strong>
                <span>{{ 'HOME.POST_JOB_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/pending-jobs')">
              <span class="action-icon">\u{1F4C1}</span>
              <div class="card-text">
                <strong>{{ 'NAV.MY_JOBS' | translate }}</strong>
                <span>{{ 'HOME.MY_JOBS_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/messages')">
              <span class="action-icon">\u{1F4AC}</span>
              <div class="card-text">
                <strong>{{ 'NAV.MESSAGES' | translate }}</strong>
                <span>{{ 'HOME.MESSAGES_DESC_USER' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/find-a-pro')">
              <span class="action-icon">\u{1F50D}</span>
              <div class="card-text">
                <strong>{{ 'HOME.BROWSE_PROS' | translate }}</strong>
                <span>{{ 'HOME.BROWSE_PROS_DESC' | translate }}</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </ng-container>

    <!-- \u2500\u2500 Quick actions \u2014 pro user \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="isProUser()">
      <section class="quick-actions">
        <div class="section-container">
          <div class="action-grid">
            <button class="action-card primary-action" (click)="navigateTo('/available-jobs')">
              <span class="action-icon">\u{1F50D}</span>
              <div class="card-text">
                <strong>{{ 'NAV.FIND_JOBS' | translate }}</strong>
                <span>{{ 'HOME.FIND_JOBS_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/my-jobs-pro')">
              <span class="action-icon">\u2705</span>
              <div class="card-text">
                <strong>{{ 'NAV.MY_WORK' | translate }}</strong>
                <span>{{ 'HOME.MY_WORK_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/my-services')">
              <span class="action-icon">\u{1F6E0}\uFE0F</span>
              <div class="card-text">
                <strong>{{ 'NAV.MY_SERVICES' | translate }}</strong>
                <span>{{ 'HOME.MY_SERVICES_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/messages')">
              <span class="action-icon">\u{1F4AC}</span>
              <div class="card-text">
                <strong>{{ 'NAV.MESSAGES' | translate }}</strong>
                <span>{{ 'HOME.MESSAGES_DESC_PRO' | translate }}</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </ng-container>

    <!-- \u2500\u2500 How it works (non-admin only) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="!isAdmin()">
      <section class="how-works">
        <div class="section-container">
          <h2>{{ 'HOME.HOW_WORKS' | translate }}</h2>
          <div class="steps">
            <ng-container *ngIf="isProUser()">
              <div class="step">
                <div class="step-num">1</div>
                <h3>{{ 'HOME.PRO_STEP1_TITLE' | translate }}</h3>
                <p>{{ 'HOME.PRO_STEP1_DESC' | translate }}</p>
              </div>
              <div class="step">
                <div class="step-num">2</div>
                <h3>{{ 'HOME.PRO_STEP2_TITLE' | translate }}</h3>
                <p>{{ 'HOME.PRO_STEP2_DESC' | translate }}</p>
              </div>
              <div class="step">
                <div class="step-num">3</div>
                <h3>{{ 'HOME.PRO_STEP3_TITLE' | translate }}</h3>
                <p>{{ 'HOME.PRO_STEP3_DESC' | translate }}</p>
              </div>
              <div class="step">
                <div class="step-num">4</div>
                <h3>{{ 'HOME.PRO_STEP4_TITLE' | translate }}</h3>
                <p>{{ 'HOME.PRO_STEP4_DESC' | translate }}</p>
              </div>
            </ng-container>
            <ng-container *ngIf="!isProUser()">
              <div class="step">
                <div class="step-num">1</div>
                <h3>{{ 'HOME.USER_STEP1_TITLE' | translate }}</h3>
                <p>{{ 'HOME.USER_STEP1_DESC' | translate }}</p>
              </div>
              <div class="step">
                <div class="step-num">2</div>
                <h3>{{ 'HOME.USER_STEP2_TITLE' | translate }}</h3>
                <p>{{ 'HOME.USER_STEP2_DESC' | translate }}</p>
              </div>
              <div class="step">
                <div class="step-num">3</div>
                <h3>{{ 'HOME.USER_STEP3_TITLE' | translate }}</h3>
                <p>{{ 'HOME.USER_STEP3_DESC' | translate }}</p>
              </div>
              <div class="step">
                <div class="step-num">4</div>
                <h3>{{ 'HOME.USER_STEP4_TITLE' | translate }}</h3>
                <p>{{ 'HOME.USER_STEP4_DESC' | translate }}</p>
              </div>
            </ng-container>
          </div>
        </div>
      </section>
    </ng-container>

    <!-- \u2500\u2500 Admin quick actions \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
    <ng-container *ngIf="isAdmin()">
      <section class="quick-actions">
        <div class="section-container">
          <div class="action-grid admin-grid">
            <button class="action-card primary-action" (click)="navigateTo('/admin-users')">
              <span class="action-icon">\u{1F6E1}\uFE0F</span>
              <div class="card-text">
                <strong>{{ 'HOME.USER_MGMT' | translate }}</strong>
                <span>{{ 'HOME.USER_MGMT_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/admin-materials')">
              <span class="action-icon">\u{1F4E6}</span>
              <div class="card-text">
                <strong>{{ 'NAV.MATERIALS' | translate }}</strong>
                <span>{{ 'HOME.MATERIALS_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/admin-users', {view: 'service-areas'})">
              <span class="action-icon">\u{1F5FA}\uFE0F</span>
              <div class="card-text">
                <strong>{{ 'HOME.SERVICE_AREAS' | translate }}</strong>
                <span>{{ 'HOME.SERVICE_AREAS_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/messages')">
              <span class="action-icon">\u{1F4AC}</span>
              <div class="card-text">
                <strong>{{ 'NAV.MESSAGES' | translate }}</strong>
                <span>{{ 'HOME.MESSAGES_DESC_ADMIN' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/notifications')">
              <span class="action-icon">\u{1F514}</span>
              <div class="card-text">
                <strong>{{ 'NAV.NOTIFICATIONS' | translate }}</strong>
                <span>{{ 'HOME.NOTIF_DESC' | translate }}</span>
              </div>
            </button>
            <button class="action-card" (click)="navigateTo('/profile')">
              <span class="action-icon">\u{1F464}</span>
              <div class="card-text">
                <strong>{{ 'NAV.PROFILE' | translate }}</strong>
                <span>{{ 'HOME.PROFILE_DESC' | translate }}</span>
              </div>
            </button>
          </div>
        </div>
      </section>
    </ng-container>

  </ng-container>

  <!-- \u2550\u2550 MARKETING LANDING (unauthenticated) \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
  <ng-container *ngIf="!auth.isAuthenticated()">

    <!-- Hero -->
    <section class="hero">
      <div class="hero-container">
        <div class="hero-left">
          <h1>{{ 'HOME.HERO_TITLE' | translate }}</h1>
          <p>{{ 'HOME.HERO_SUB' | translate }}</p>
          <div class="hero-cta">
            <button class="cta-btn primary" (click)="navigateTo('/auth/register')">{{ 'HOME.JOIN_AS_USER' | translate }}</button>
            <button class="cta-btn secondary" (click)="navigateTo('/auth/register/pro')">{{ 'HOME.BECOME_PRO' | translate }}</button>
          </div>
        </div>
        <div class="hero-right">
          <img src="images/Image_yprohub_home.png" alt="yProHub platform" />
        </div>
      </div>
    </section>

    <!-- Benefits -->
    <section class="benefits">
      <div class="section-container">
        <h2>{{ 'HOME.WHY_TITLE' | translate }}</h2>
        <div class="benefits-grid">
          <div class="benefit-item">
            <span class="benefit-icon">\u2705</span>
            <h3>{{ 'HOME.BENEFIT1_TITLE' | translate }}</h3>
            <p>{{ 'HOME.BENEFIT1_DESC' | translate }}</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">\u26A1</span>
            <h3>{{ 'HOME.BENEFIT2_TITLE' | translate }}</h3>
            <p>{{ 'HOME.BENEFIT2_DESC' | translate }}</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">\u{1F512}</span>
            <h3>{{ 'HOME.BENEFIT3_TITLE' | translate }}</h3>
            <p>{{ 'HOME.BENEFIT3_DESC' | translate }}</p>
          </div>
          <div class="benefit-item">
            <span class="benefit-icon">\u{1F4AC}</span>
            <h3>{{ 'HOME.BENEFIT4_TITLE' | translate }}</h3>
            <p>{{ 'HOME.BENEFIT4_DESC' | translate }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="how-works">
      <div class="section-container">
        <h2>{{ 'HOME.HOW_WORKS' | translate }}</h2>
        <div class="steps">
          <div class="step">
            <div class="step-num">1</div>
            <h3>{{ 'HOME.USER_STEP1_TITLE' | translate }}</h3>
            <p>{{ 'HOME.USER_STEP1_DESC' | translate }}</p>
          </div>
          <div class="step">
            <div class="step-num">2</div>
            <h3>{{ 'HOME.USER_STEP2_TITLE' | translate }}</h3>
            <p>{{ 'HOME.USER_STEP2_DESC' | translate }}</p>
          </div>
          <div class="step">
            <div class="step-num">3</div>
            <h3>{{ 'HOME.USER_STEP3_TITLE' | translate }}</h3>
            <p>{{ 'HOME.USER_STEP3_DESC' | translate }}</p>
          </div>
          <div class="step">
            <div class="step-num">4</div>
            <h3>{{ 'HOME.USER_STEP4_TITLE' | translate }}</h3>
            <p>{{ 'HOME.USER_STEP4_DESC' | translate }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="cta-banner">
      <div class="cta-content">
        <h2>{{ 'HOME.CTA_TITLE' | translate }}</h2>
        <p>{{ 'HOME.CTA_SUB' | translate }}</p>
        <button class="cta-btn large" (click)="navigateTo('/auth/register')">{{ 'HOME.CTA_BTN' | translate }}</button>
      </div>
    </section>

  </ng-container>

</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/home/home/home.scss */\n.home-wrapper {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: var(--color-text, #1f2937);\n  background: #fff;\n}\n.hero {\n  background: var(--color-primary-gradient, linear-gradient(135deg, #667eea 0%, #764ba2 100%));\n  color: white;\n  padding: 80px 20px;\n}\n.hero-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.hero-left h1 {\n  font-size: var(--text-display, 2.25rem);\n  font-weight: 700;\n  line-height: 1.15;\n  margin-bottom: 16px;\n}\n.hero-left p {\n  font-size: var(--text-body, 1rem);\n  opacity: 0.95;\n  margin-bottom: 32px;\n  line-height: 1.65;\n}\n.hero-cta {\n  display: flex;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n.hero-right img {\n  width: 100%;\n  border-radius: 12px;\n  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);\n}\n.cta-btn {\n  padding: 12px 28px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: var(--text-body, 1rem);\n  cursor: pointer;\n  transition: transform 0.15s ease, box-shadow 0.15s ease;\n  font-family: inherit;\n  min-height: 48px;\n}\n.cta-btn.primary {\n  background: white;\n  color: #667eea;\n}\n.cta-btn.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);\n}\n.cta-btn.secondary {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 1.5px solid rgba(255, 255, 255, 0.7);\n}\n.cta-btn.secondary:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n.cta-btn.large {\n  background: white;\n  color: #667eea;\n  padding: 14px 36px;\n  font-size: 1rem;\n}\n.cta-btn.large:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.18);\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.benefits {\n  padding: 80px 20px;\n  background: var(--color-bg-light, #f9fafb);\n}\n.benefits h2 {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n  color: var(--color-text, #1f2937);\n}\n.benefits-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));\n  gap: 24px;\n}\n.benefit-item {\n  background: #fff;\n  padding: 28px 20px;\n  border-radius: 12px;\n  text-align: center;\n  border: 1px solid var(--color-border, #e5e7eb);\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: transform 0.2s ease, box-shadow 0.2s ease;\n}\n.benefit-item:hover {\n  transform: translateY(-6px);\n  box-shadow: 0 10px 24px rgba(0, 0, 0, 0.08);\n}\n.benefit-icon {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.benefit-item h3 {\n  font-size: var(--text-h2, 1.125rem);\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.benefit-item p {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.55;\n}\n.how-works {\n  padding: 80px 20px;\n  background: #fff;\n}\n.how-works h2 {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n  color: var(--color-text, #1f2937);\n}\n.steps {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n  gap: 32px;\n}\n.step {\n  text-align: center;\n}\n.step-num {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 56px;\n  height: 56px;\n  background: var(--color-primary, #667eea);\n  color: white;\n  font-size: 22px;\n  font-weight: 700;\n  border-radius: 50%;\n  margin: 0 auto 16px;\n}\n.step h3 {\n  font-size: var(--text-h2, 1.125rem);\n  font-weight: 600;\n  margin-bottom: 8px;\n}\n.step p {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.55;\n}\n.cta-banner {\n  padding: 60px 20px;\n  background: var(--color-primary-gradient, linear-gradient(135deg, #667eea, #764ba2));\n  color: white;\n  text-align: center;\n}\n.cta-content {\n  max-width: 560px;\n  margin: 0 auto;\n}\n.cta-content h2 {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.cta-content p {\n  font-size: var(--text-body, 1rem);\n  opacity: 0.95;\n  margin-bottom: 28px;\n}\n.admin-grid {\n  grid-template-columns: repeat(3, 1fr);\n}\n@media (max-width: 768px) {\n  .admin-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n.dash-header {\n  background: var(--color-primary, #667eea);\n  color: white;\n  padding: 36px 20px 32px;\n}\n.dash-header-inner {\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.dash-greeting h1 {\n  font-size: var(--text-h1, 1.75rem);\n  font-weight: 700;\n  margin: 0 0 6px;\n}\n.dash-greeting p {\n  font-size: var(--text-body, 1rem);\n  opacity: 0.9;\n  margin: 0;\n}\n.quick-actions {\n  padding: 32px 20px;\n  background: var(--color-bg-light, #f9fafb);\n}\n.action-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));\n  gap: 16px;\n  max-width: 1200px;\n  margin: 0 auto;\n}\n.action-card {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n  background: #fff;\n  border: 1.5px solid var(--color-border, #e5e7eb);\n  border-radius: 12px;\n  padding: 20px 16px;\n  cursor: pointer;\n  text-align: left;\n  transition:\n    transform 0.15s ease,\n    box-shadow 0.15s ease,\n    border-color 0.15s ease;\n  font-family: inherit;\n}\n.action-card .action-icon {\n  font-size: 28px;\n  margin-bottom: 6px;\n  flex-shrink: 0;\n}\n.action-card .card-text {\n  display: flex;\n  flex-direction: column;\n  gap: 3px;\n  min-width: 0;\n}\n.action-card strong {\n  font-size: var(--text-body, 1rem);\n  font-weight: 600;\n  color: var(--color-text, #1f2937);\n}\n.action-card .card-text span {\n  font-size: var(--text-small, 0.8125rem);\n  color: var(--color-text-muted, #6b7280);\n  line-height: 1.4;\n}\n.action-card:hover {\n  transform: translateY(-3px);\n  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);\n  border-color: var(--color-primary, #667eea);\n}\n.action-card.primary-action {\n  border-color: var(--color-primary, #667eea);\n  background: rgba(102, 126, 234, 0.04);\n}\n.action-card.primary-action strong {\n  color: var(--color-primary, #667eea);\n}\n@media (max-width: 480px) {\n  .action-card {\n    flex-direction: row;\n    align-items: center;\n    gap: 12px;\n  }\n  .action-card .action-icon {\n    font-size: 24px;\n    margin: 0;\n  }\n  .action-card .card-text {\n    flex: 1;\n    min-width: 0;\n  }\n}\n@media (max-width: 768px) {\n  .section-container {\n    padding: 0;\n  }\n  .hero {\n    padding: 48px 16px 56px;\n  }\n  .hero-container {\n    grid-template-columns: 1fr;\n    gap: 32px;\n  }\n  .hero-right {\n    display: none;\n  }\n  .hero-cta {\n    flex-direction: column;\n  }\n  .cta-btn {\n    width: 100%;\n    text-align: center;\n  }\n  .benefits,\n  .how-works {\n    padding: 40px 16px;\n  }\n  .benefits h2,\n  .how-works h2 {\n    margin-bottom: 28px;\n  }\n  .benefit-item:hover {\n    transform: none;\n    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  }\n  .cta-banner {\n    padding: 36px 16px;\n  }\n  .dash-header {\n    padding: 24px 16px;\n  }\n  .quick-actions {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .hero {\n    padding: 36px 12px 48px;\n  }\n  .hero-left h1 {\n    font-size: 1.6rem;\n  }\n  .benefits,\n  .how-works {\n    padding: 28px 12px;\n  }\n  .benefits-grid,\n  .steps {\n    gap: 12px;\n  }\n  .cta-banner {\n    padding: 28px 12px;\n  }\n  .dash-header {\n    padding: 20px 12px;\n  }\n  .dash-greeting h1 {\n    font-size: 1.3rem;\n  }\n  .quick-actions {\n    padding: 16px 12px;\n  }\n}\n/*# sourceMappingURL=home.css.map */\n'] }]
  }], () => [{ type: Router }, { type: Auth }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/features/home/home/home.ts", lineNumber: 14 });
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
//# sourceMappingURL=chunk-4VKFX2ZB.js.map

