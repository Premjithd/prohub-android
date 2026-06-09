import {
  ReviewService
} from "./chunk-WPDQA74A.js";
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
  DecimalPipe,
  NgIf,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/about/about/about.ts
function AboutComponent_span_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r0.platformStats.totalReviews, " reviews)");
  }
}
var AboutComponent = class _AboutComponent {
  router;
  auth;
  reviewService;
  platformStats = null;
  constructor(router, auth, reviewService) {
    this.router = router;
    this.auth = auth;
    this.reviewService = reviewService;
  }
  ngOnInit() {
    this.reviewService.getPlatformStats().subscribe({
      next: (stats) => {
        this.platformStats = stats;
      }
    });
  }
  navigateTo(path) {
    if (path === "/auth/login") {
      if (this.auth.isAuthenticated()) {
        this.router.navigate(["/services"]);
      } else {
        this.router.navigate(["/auth/login"]);
      }
    } else {
      this.router.navigate([path]);
    }
  }
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)(\u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ReviewService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 189, vars: 104, consts: [[1, "about-wrapper"], [1, "about-hero"], [1, "hero-content"], [1, "mission-section"], [1, "section-container"], [1, "mission-grid"], [1, "mission-left"], [1, "mission-right"], [1, "stat-box"], [1, "stat-number"], [1, "stat-label"], [4, "ngIf"], [1, "values-section"], [1, "values-grid"], [1, "value-card"], [1, "value-icon"], [1, "how-we-work"], [1, "difference-grid"], [1, "difference-item"], [1, "team-section"], [1, "team-intro"], [1, "team-grid"], [1, "team-member"], [1, "member-avatar", "avatar-js"], [1, "member-info"], [1, "member-role"], [1, "member-bio"], [1, "member-avatar", "avatar-sc"], [1, "member-avatar", "avatar-mj"], [1, "member-avatar", "avatar-er"], [1, "about-cta"], [1, "cta-content"], [1, "cta-buttons"], [1, "cta-btn", "primary", 3, "click"], [1, "cta-btn", "secondary", 3, "click"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4);
      \u0275\u0275pipe(5, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p");
      \u0275\u0275text(7);
      \u0275\u0275pipe(8, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(9, "section", 3)(10, "div", 4)(11, "div", 5)(12, "div", 6)(13, "h2");
      \u0275\u0275text(14);
      \u0275\u0275pipe(15, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17);
      \u0275\u0275pipe(18, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "p");
      \u0275\u0275text(20);
      \u0275\u0275pipe(21, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(22, "div", 7)(23, "div", 8)(24, "h3", 9);
      \u0275\u0275text(25, "50K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 10);
      \u0275\u0275text(27);
      \u0275\u0275pipe(28, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(29, "div", 8)(30, "h3", 9);
      \u0275\u0275text(31, "100K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "p", 10);
      \u0275\u0275text(33);
      \u0275\u0275pipe(34, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(35, "div", 8)(36, "h3", 9);
      \u0275\u0275text(37, "1M+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "p", 10);
      \u0275\u0275text(39);
      \u0275\u0275pipe(40, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(41, "div", 8)(42, "h3", 9);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "p", 10);
      \u0275\u0275text(46);
      \u0275\u0275pipe(47, "translate");
      \u0275\u0275template(48, AboutComponent_span_48_Template, 2, 1, "span", 11);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(49, "section", 12)(50, "div", 4)(51, "h2");
      \u0275\u0275text(52);
      \u0275\u0275pipe(53, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "div", 13)(55, "div", 14)(56, "div", 15);
      \u0275\u0275text(57, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "h3");
      \u0275\u0275text(59);
      \u0275\u0275pipe(60, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(61, "p");
      \u0275\u0275text(62);
      \u0275\u0275pipe(63, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(64, "div", 14)(65, "div", 15);
      \u0275\u0275text(66, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(67, "h3");
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p");
      \u0275\u0275text(71);
      \u0275\u0275pipe(72, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(73, "div", 14)(74, "div", 15);
      \u0275\u0275text(75, "\u2B50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(76, "h3");
      \u0275\u0275text(77);
      \u0275\u0275pipe(78, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "p");
      \u0275\u0275text(80);
      \u0275\u0275pipe(81, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(82, "div", 14)(83, "div", 15);
      \u0275\u0275text(84, "\u{1F331}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(85, "h3");
      \u0275\u0275text(86);
      \u0275\u0275pipe(87, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(88, "p");
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(91, "section", 16)(92, "div", 4)(93, "h2");
      \u0275\u0275text(94);
      \u0275\u0275pipe(95, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "div", 17)(97, "div", 18)(98, "h3");
      \u0275\u0275text(99);
      \u0275\u0275pipe(100, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(101, "p");
      \u0275\u0275text(102);
      \u0275\u0275pipe(103, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(104, "div", 18)(105, "h3");
      \u0275\u0275text(106);
      \u0275\u0275pipe(107, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "p");
      \u0275\u0275text(109);
      \u0275\u0275pipe(110, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(111, "div", 18)(112, "h3");
      \u0275\u0275text(113);
      \u0275\u0275pipe(114, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "p");
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(118, "div", 18)(119, "h3");
      \u0275\u0275text(120);
      \u0275\u0275pipe(121, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(122, "p");
      \u0275\u0275text(123);
      \u0275\u0275pipe(124, "translate");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(125, "section", 19)(126, "div", 4)(127, "h2");
      \u0275\u0275text(128);
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p", 20);
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(133, "div", 21)(134, "div", 22)(135, "div", 23);
      \u0275\u0275text(136, "JS");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "div", 24)(138, "h3");
      \u0275\u0275text(139, "John Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(140, "p", 25);
      \u0275\u0275text(141, "Founder & CEO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(142, "p", 26);
      \u0275\u0275text(143, "10+ years in marketplace tech and service industry innovation.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(144, "div", 22)(145, "div", 27);
      \u0275\u0275text(146, "SC");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 24)(148, "h3");
      \u0275\u0275text(149, "Sarah Chen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "p", 25);
      \u0275\u0275text(151, "CTO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(152, "p", 26);
      \u0275\u0275text(153, "Full-stack engineer with expertise in secure payment systems and scalable platforms.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(154, "div", 22)(155, "div", 28);
      \u0275\u0275text(156, "MJ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(157, "div", 24)(158, "h3");
      \u0275\u0275text(159, "Mike Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "p", 25);
      \u0275\u0275text(161, "VP of Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(162, "p", 26);
      \u0275\u0275text(163, "20+ years in service industry management and professional networks.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(164, "div", 22)(165, "div", 29);
      \u0275\u0275text(166, "ER");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "div", 24)(168, "h3");
      \u0275\u0275text(169, "Emma Rodriguez");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(170, "p", 25);
      \u0275\u0275text(171, "Head of Trust & Safety");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(172, "p", 26);
      \u0275\u0275text(173, "Leading our verification and community safety initiatives.");
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(174, "section", 30)(175, "div", 31)(176, "h2");
      \u0275\u0275text(177);
      \u0275\u0275pipe(178, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(179, "p");
      \u0275\u0275text(180);
      \u0275\u0275pipe(181, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(182, "div", 32)(183, "button", 33);
      \u0275\u0275listener("click", function AboutComponent_Template_button_click_183_listener() {
        return ctx.navigateTo("/auth/login");
      });
      \u0275\u0275text(184);
      \u0275\u0275pipe(185, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(186, "button", 34);
      \u0275\u0275listener("click", function AboutComponent_Template_button_click_186_listener() {
        return ctx.navigateTo("/auth/register/pro");
      });
      \u0275\u0275text(187);
      \u0275\u0275pipe(188, "translate");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 35, "ABOUT.HERO_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 37, "ABOUT.HERO_SUB"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 39, "ABOUT.MISSION_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 41, "ABOUT.MISSION_P1"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 43, "ABOUT.MISSION_P2"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 45, "ABOUT.STAT_PROS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 47, "ABOUT.STAT_CUSTOMERS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 49, "ABOUT.STAT_JOBS"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(ctx.platformStats ? \u0275\u0275pipeBind2(44, 51, ctx.platformStats.averageRating, "1.1-1") + "\u2605" : "\u2014");
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(47, 54, "ABOUT.STAT_RATING"), " ");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.platformStats);
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(53, 56, "ABOUT.VALUES_TITLE"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(60, 58, "ABOUT.VAL1_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 60, "ABOUT.VAL1_DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 62, "ABOUT.VAL2_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 64, "ABOUT.VAL2_DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 66, "ABOUT.VAL3_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 68, "ABOUT.VAL3_DESC"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(87, 70, "ABOUT.VAL4_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 72, "ABOUT.VAL4_DESC"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(95, 74, "ABOUT.DIFF_TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(100, 76, "ABOUT.DIFF1_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 78, "ABOUT.DIFF1_DESC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(107, 80, "ABOUT.DIFF2_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(110, 82, "ABOUT.DIFF2_DESC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(114, 84, "ABOUT.DIFF3_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 86, "ABOUT.DIFF3_DESC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(121, 88, "ABOUT.DIFF4_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(124, 90, "ABOUT.DIFF4_DESC"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 92, "ABOUT.TEAM_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(132, 94, "ABOUT.TEAM_INTRO"));
      \u0275\u0275advance(46);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(178, 96, "ABOUT.CTA_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(181, 98, "ABOUT.CTA_SUB"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(185, 100, "ABOUT.CTA_FIND_PRO"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(188, 102, "ABOUT.CTA_BECOME_PRO"));
    }
  }, dependencies: [CommonModule, NgIf, TranslateModule, DecimalPipe, TranslatePipe], styles: ["\n\n.about-wrapper[_ngcontent-%COMP%] {\n  color: #1f2937;\n  background: #fff;\n}\n.about-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 100px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.1;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.95;\n}\n@media (max-width: 768px) {\n  .about-hero[_ngcontent-%COMP%] {\n    padding: 48px 16px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.mission-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #fff;\n}\n.mission-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.mission-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 24px;\n}\n.mission-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.mission-right[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.stat-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 30px 20px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.9;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .section-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .mission-section[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .mission-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .mission-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    margin-bottom: 16px;\n  }\n  .mission-right[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.values-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.values-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.value-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 32px 24px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.value-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);\n}\n.value-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 16px;\n}\n.value-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.how-we-work[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.how-we-work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.difference-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.difference-item[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  border-left: 4px solid #667eea;\n  background: #f9fafb;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.difference-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);\n}\n.difference-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.difference-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.team-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.team-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 16px;\n}\n.team-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  color: #6b7280;\n  max-width: 600px;\n  margin: 0 auto 48px;\n}\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.team-member[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: white;\n  padding: 20px 24px;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.team-member[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.12);\n  border-color: #c7d2fe;\n}\n.member-avatar[_ngcontent-%COMP%] {\n  width: 72px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  flex-shrink: 0;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: #fff;\n}\n.member-avatar.avatar-js[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n}\n.member-avatar.avatar-sc[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.member-avatar.avatar-mj[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n  color: #1a4a6b;\n}\n.member-avatar.avatar-er[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b,\n      #38f9d7);\n  color: #0d4a2e;\n}\n.member-info[_ngcontent-%COMP%] {\n  min-width: 0;\n}\n.team-member[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 2px;\n  color: #1f2937;\n}\n.member-role[_ngcontent-%COMP%] {\n  font-size: 12px;\n  color: #667eea;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin: 0 0 8px;\n}\n.member-bio[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0;\n}\n.about-cta[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-align: center;\n}\n.cta-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 32px;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.cta-btn.primary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #667eea;\n}\n.cta-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-btn.secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border: 1px solid #fff;\n}\n.cta-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .mission-right[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .values-section[_ngcontent-%COMP%], \n   .how-we-work[_ngcontent-%COMP%], \n   .team-section[_ngcontent-%COMP%], \n   .about-cta[_ngcontent-%COMP%] {\n    padding: 40px 16px;\n  }\n  .values-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .how-we-work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .team-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n    margin-bottom: 28px;\n  }\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .values-grid[_ngcontent-%COMP%], \n   .difference-grid[_ngcontent-%COMP%], \n   .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .value-card[_ngcontent-%COMP%], \n   .difference-item[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .value-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  }\n  .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .team-member[_ngcontent-%COMP%] {\n    padding: 16px;\n    gap: 16px;\n  }\n  .member-avatar[_ngcontent-%COMP%] {\n    width: 56px;\n    height: 56px;\n    font-size: 18px;\n  }\n  .difference-item[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: none;\n    background: #f9fafb;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .about-hero[_ngcontent-%COMP%] {\n    padding: 32px 16px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .mission-section[_ngcontent-%COMP%], \n   .values-section[_ngcontent-%COMP%], \n   .how-we-work[_ngcontent-%COMP%], \n   .team-section[_ngcontent-%COMP%], \n   .about-cta[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .mission-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .values-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .how-we-work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .team-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .stat-box[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n  .stat-number[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=about.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: true, imports: [CommonModule, TranslateModule], template: `<div class="about-wrapper">
  <!-- Hero Section -->
  <section class="about-hero">
    <div class="hero-content">
      <h1>{{ 'ABOUT.HERO_TITLE' | translate }}</h1>
      <p>{{ 'ABOUT.HERO_SUB' | translate }}</p>
    </div>
  </section>

  <!-- Mission Section -->
  <section class="mission-section">
    <div class="section-container">
      <div class="mission-grid">
        <div class="mission-left">
          <h2>{{ 'ABOUT.MISSION_TITLE' | translate }}</h2>
          <p>{{ 'ABOUT.MISSION_P1' | translate }}</p>
          <p>{{ 'ABOUT.MISSION_P2' | translate }}</p>
        </div>
        <div class="mission-right">
          <div class="stat-box">
            <h3 class="stat-number">50K+</h3>
            <p class="stat-label">{{ 'ABOUT.STAT_PROS' | translate }}</p>
          </div>
          <div class="stat-box">
            <h3 class="stat-number">100K+</h3>
            <p class="stat-label">{{ 'ABOUT.STAT_CUSTOMERS' | translate }}</p>
          </div>
          <div class="stat-box">
            <h3 class="stat-number">1M+</h3>
            <p class="stat-label">{{ 'ABOUT.STAT_JOBS' | translate }}</p>
          </div>
          <div class="stat-box">
            <h3 class="stat-number">{{ platformStats ? (platformStats.averageRating | number:'1.1-1') + '\u2605' : '\u2014' }}</h3>
            <p class="stat-label">{{ 'ABOUT.STAT_RATING' | translate }} <span *ngIf="platformStats">({{ platformStats.totalReviews }} reviews)</span></p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Values Section -->
  <section class="values-section">
    <div class="section-container">
      <h2>{{ 'ABOUT.VALUES_TITLE' | translate }}</h2>
      <div class="values-grid">
        <div class="value-card">
          <div class="value-icon">\u{1F91D}</div>
          <h3>{{ 'ABOUT.VAL1_TITLE' | translate }}</h3>
          <p>{{ 'ABOUT.VAL1_DESC' | translate }}</p>
        </div>
        <div class="value-card">
          <div class="value-icon">\u{1F512}</div>
          <h3>{{ 'ABOUT.VAL2_TITLE' | translate }}</h3>
          <p>{{ 'ABOUT.VAL2_DESC' | translate }}</p>
        </div>
        <div class="value-card">
          <div class="value-icon">\u2B50</div>
          <h3>{{ 'ABOUT.VAL3_TITLE' | translate }}</h3>
          <p>{{ 'ABOUT.VAL3_DESC' | translate }}</p>
        </div>
        <div class="value-card">
          <div class="value-icon">\u{1F331}</div>
          <h3>{{ 'ABOUT.VAL4_TITLE' | translate }}</h3>
          <p>{{ 'ABOUT.VAL4_DESC' | translate }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- How We Work Section -->
  <section class="how-we-work">
    <div class="section-container">
      <h2>{{ 'ABOUT.DIFF_TITLE' | translate }}</h2>
      <div class="difference-grid">
        <div class="difference-item">
          <h3>{{ 'ABOUT.DIFF1_TITLE' | translate }}</h3>
          <p>{{ 'ABOUT.DIFF1_DESC' | translate }}</p>
        </div>
        <div class="difference-item">
          <h3>{{ 'ABOUT.DIFF2_TITLE' | translate }}</h3>
          <p>{{ 'ABOUT.DIFF2_DESC' | translate }}</p>
        </div>
        <div class="difference-item">
          <h3>{{ 'ABOUT.DIFF3_TITLE' | translate }}</h3>
          <p>{{ 'ABOUT.DIFF3_DESC' | translate }}</p>
        </div>
        <div class="difference-item">
          <h3>{{ 'ABOUT.DIFF4_TITLE' | translate }}</h3>
          <p>{{ 'ABOUT.DIFF4_DESC' | translate }}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Team Section -->
  <section class="team-section">
    <div class="section-container">
      <h2>{{ 'ABOUT.TEAM_TITLE' | translate }}</h2>
      <p class="team-intro">{{ 'ABOUT.TEAM_INTRO' | translate }}</p>
      <div class="team-grid">
        <div class="team-member">
          <div class="member-avatar avatar-js">JS</div>
          <div class="member-info">
            <h3>John Smith</h3>
            <p class="member-role">Founder &amp; CEO</p>
            <p class="member-bio">10+ years in marketplace tech and service industry innovation.</p>
          </div>
        </div>
        <div class="team-member">
          <div class="member-avatar avatar-sc">SC</div>
          <div class="member-info">
            <h3>Sarah Chen</h3>
            <p class="member-role">CTO</p>
            <p class="member-bio">Full-stack engineer with expertise in secure payment systems and scalable platforms.</p>
          </div>
        </div>
        <div class="team-member">
          <div class="member-avatar avatar-mj">MJ</div>
          <div class="member-info">
            <h3>Mike Johnson</h3>
            <p class="member-role">VP of Operations</p>
            <p class="member-bio">20+ years in service industry management and professional networks.</p>
          </div>
        </div>
        <div class="team-member">
          <div class="member-avatar avatar-er">ER</div>
          <div class="member-info">
            <h3>Emma Rodriguez</h3>
            <p class="member-role">Head of Trust &amp; Safety</p>
            <p class="member-bio">Leading our verification and community safety initiatives.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA Section -->
  <section class="about-cta">
    <div class="cta-content">
      <h2>{{ 'ABOUT.CTA_TITLE' | translate }}</h2>
      <p>{{ 'ABOUT.CTA_SUB' | translate }}</p>
      <div class="cta-buttons">
        <button class="cta-btn primary" (click)="navigateTo('/auth/login')">{{ 'ABOUT.CTA_FIND_PRO' | translate }}</button>
        <button class="cta-btn secondary" (click)="navigateTo('/auth/register/pro')">{{ 'ABOUT.CTA_BECOME_PRO' | translate }}</button>
      </div>
    </div>
  </section>
</div>
`, styles: ["/* src/app/features/about/about/about.scss */\n.about-wrapper {\n  color: #1f2937;\n  background: #fff;\n}\n.about-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 100px 20px;\n  text-align: center;\n}\n.hero-content h1 {\n  font-size: 52px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.1;\n}\n.hero-content p {\n  font-size: 20px;\n  opacity: 0.95;\n}\n@media (max-width: 768px) {\n  .about-hero {\n    padding: 48px 16px;\n  }\n  .hero-content h1 {\n    font-size: 28px;\n  }\n  .hero-content p {\n    font-size: 15px;\n  }\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.mission-section {\n  padding: 80px 20px;\n  background: #fff;\n}\n.mission-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.mission-left h2 {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 24px;\n}\n.mission-left p {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.mission-right {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.stat-box {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 30px 20px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);\n}\n.stat-number {\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.stat-label {\n  font-size: 14px;\n  opacity: 0.9;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .section-container {\n    padding: 0;\n  }\n  .mission-section {\n    padding: 40px 16px;\n  }\n  .mission-grid {\n    grid-template-columns: 1fr;\n    gap: 24px;\n  }\n  .mission-left h2 {\n    font-size: 26px;\n    margin-bottom: 16px;\n  }\n  .mission-right {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.values-section {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.values-section h2 {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.values-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.value-card {\n  background: white;\n  padding: 32px 24px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.value-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);\n}\n.value-icon {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 16px;\n}\n.value-card h3 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.value-card p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.how-we-work {\n  padding: 80px 20px;\n  background: white;\n}\n.how-we-work h2 {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.difference-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.difference-item {\n  padding: 32px 24px;\n  border-left: 4px solid #667eea;\n  background: #f9fafb;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.difference-item:hover {\n  background: white;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);\n}\n.difference-item h3 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.difference-item p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.team-section {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.team-section h2 {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 16px;\n}\n.team-intro {\n  text-align: center;\n  font-size: 16px;\n  color: #6b7280;\n  max-width: 600px;\n  margin: 0 auto 48px;\n}\n.team-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 16px;\n}\n.team-member {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  background: white;\n  padding: 20px 24px;\n  border-radius: 12px;\n  border: 1px solid #e5e7eb;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);\n  transition: box-shadow 0.2s, border-color 0.2s;\n}\n.team-member:hover {\n  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.12);\n  border-color: #c7d2fe;\n}\n.member-avatar {\n  width: 72px;\n  height: 72px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  flex-shrink: 0;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: #fff;\n}\n.member-avatar.avatar-js {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n}\n.member-avatar.avatar-sc {\n  background:\n    linear-gradient(\n      135deg,\n      #f093fb,\n      #f5576c);\n}\n.member-avatar.avatar-mj {\n  background:\n    linear-gradient(\n      135deg,\n      #4facfe,\n      #00f2fe);\n  color: #1a4a6b;\n}\n.member-avatar.avatar-er {\n  background:\n    linear-gradient(\n      135deg,\n      #43e97b,\n      #38f9d7);\n  color: #0d4a2e;\n}\n.member-info {\n  min-width: 0;\n}\n.team-member h3 {\n  font-size: 16px;\n  font-weight: 700;\n  margin: 0 0 2px;\n  color: #1f2937;\n}\n.member-role {\n  font-size: 12px;\n  color: #667eea;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin: 0 0 8px;\n}\n.member-bio {\n  font-size: 13px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0;\n}\n.about-cta {\n  padding: 80px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-align: center;\n}\n.cta-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-content h2 {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.cta-content p {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 32px;\n}\n.cta-buttons {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn {\n  padding: 12px 28px;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.cta-btn.primary {\n  background: #fff;\n  color: #667eea;\n}\n.cta-btn.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-btn.secondary {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border: 1px solid #fff;\n}\n.cta-btn.secondary:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .mission-right {\n    grid-template-columns: 1fr;\n  }\n  .values-section,\n  .how-we-work,\n  .team-section,\n  .about-cta {\n    padding: 40px 16px;\n  }\n  .values-section h2,\n  .how-we-work h2,\n  .team-section h2 {\n    font-size: 26px;\n    margin-bottom: 28px;\n  }\n  .cta-content h2 {\n    font-size: 26px;\n  }\n  .values-grid,\n  .difference-grid,\n  .team-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .value-card,\n  .difference-item {\n    padding: 20px 16px;\n  }\n  .value-card:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  }\n  .team-grid {\n    grid-template-columns: 1fr;\n  }\n  .team-member {\n    padding: 16px;\n    gap: 16px;\n  }\n  .member-avatar {\n    width: 56px;\n    height: 56px;\n    font-size: 18px;\n  }\n  .difference-item:hover {\n    transform: none;\n    box-shadow: none;\n    background: #f9fafb;\n  }\n  .cta-buttons {\n    flex-direction: column;\n  }\n  .cta-btn {\n    width: 100%;\n  }\n}\n@media (max-width: 480px) {\n  .about-hero {\n    padding: 32px 16px;\n  }\n  .hero-content h1 {\n    font-size: 24px;\n  }\n  .hero-content p {\n    font-size: 14px;\n  }\n  .mission-section,\n  .values-section,\n  .how-we-work,\n  .team-section,\n  .about-cta {\n    padding: 28px 12px;\n  }\n  .mission-left h2 {\n    font-size: 22px;\n  }\n  .values-section h2,\n  .how-we-work h2,\n  .team-section h2 {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .cta-content h2 {\n    font-size: 22px;\n  }\n  .stat-box {\n    padding: 20px 16px;\n  }\n  .stat-number {\n    font-size: 28px;\n  }\n}\n/*# sourceMappingURL=about.css.map */\n"] }]
  }], () => [{ type: Router }, { type: Auth }, { type: ReviewService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/features/about/about/about.ts", lineNumber: 16 });
})();

// src/app/features/about/about-routing-module.ts
var routes = [
  { path: "", component: AboutComponent }
];
var AboutRoutingModule = class _AboutRoutingModule {
  static \u0275fac = function AboutRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/about/about-module.ts
var AboutModule = class _AboutModule {
  static \u0275fac = function AboutModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AboutModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    AboutRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        AboutRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  AboutModule
};
//# sourceMappingURL=chunk-QCEETGXP.js.map

