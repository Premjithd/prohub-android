import {
  ReviewService
} from "./chunk-7SLTPWLP.js";
import {
  Auth
} from "./chunk-MJ2Z243I.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterModule
} from "./chunk-Z7MI56JG.js";
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/about/about/about.ts
function AboutComponent_span_39_Template(rf, ctx) {
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 152, vars: 5, consts: [[1, "about-wrapper"], [1, "about-hero"], [1, "hero-content"], [1, "mission-section"], [1, "section-container"], [1, "mission-grid"], [1, "mission-left"], [1, "mission-right"], [1, "stat-box"], [1, "stat-number"], [1, "stat-label"], [4, "ngIf"], [1, "values-section"], [1, "values-grid"], [1, "value-card"], [1, "value-icon"], [1, "how-we-work"], [1, "difference-grid"], [1, "difference-item"], [1, "team-section"], [1, "team-intro"], [1, "team-grid"], [1, "team-member"], [1, "member-avatar"], [1, "member-role"], [1, "member-bio"], [1, "about-cta"], [1, "cta-content"], [1, "cta-buttons"], [1, "cta-btn", "primary", 3, "click"], [1, "cta-btn", "secondary", 3, "click"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "About yProHub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Connecting talented professionals with customers who need them");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "h2");
      \u0275\u0275text(12, "Our Mission");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "p");
      \u0275\u0275text(14, " yProHub was built with a simple mission: make it easy for people to find trusted professionals for any service, and give skilled workers a platform to grow their business. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16, " We believe in transparency, security, and community. Every professional on yProHub is verified, every customer is protected, and every transaction is secure. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(17, "div", 7)(18, "div", 8)(19, "h3", 9);
      \u0275\u0275text(20, "50K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "p", 10);
      \u0275\u0275text(22, "Active Professionals");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(23, "div", 8)(24, "h3", 9);
      \u0275\u0275text(25, "100K+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(26, "p", 10);
      \u0275\u0275text(27, "Happy Customers");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(28, "div", 8)(29, "h3", 9);
      \u0275\u0275text(30, "1M+");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p", 10);
      \u0275\u0275text(32, "Jobs Completed");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(33, "div", 8)(34, "h3", 9);
      \u0275\u0275text(35);
      \u0275\u0275pipe(36, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "p", 10);
      \u0275\u0275text(38, "Average Rating ");
      \u0275\u0275template(39, AboutComponent_span_39_Template, 2, 1, "span", 11);
      \u0275\u0275elementEnd()()()()()();
      \u0275\u0275elementStart(40, "section", 12)(41, "div", 4)(42, "h2");
      \u0275\u0275text(43, "Our Core Values");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "div", 13)(45, "div", 14)(46, "div", 15);
      \u0275\u0275text(47, "\u{1F91D}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "h3");
      \u0275\u0275text(49, "Trust & Transparency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "p");
      \u0275\u0275text(51, " We believe in transparent dealings and building long-term trust with both professionals and customers. No hidden fees, no surprises. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(52, "div", 14)(53, "div", 15);
      \u0275\u0275text(54, "\u{1F512}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(55, "h3");
      \u0275\u0275text(56, "Security First");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(57, "p");
      \u0275\u0275text(58, " Your data and transactions are protected with industry-leading encryption and verification processes. We take security seriously. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(59, "div", 14)(60, "div", 15);
      \u0275\u0275text(61, "\u2B50");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "h3");
      \u0275\u0275text(63, "Quality & Excellence");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(64, "p");
      \u0275\u0275text(65, " We maintain high standards for all professionals on our platform through verification, reviews, and community feedback. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(66, "div", 14)(67, "div", 15);
      \u0275\u0275text(68, "\u{1F331}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(69, "h3");
      \u0275\u0275text(70, "Community Growth");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(71, "p");
      \u0275\u0275text(72, " We're committed to helping professionals grow their businesses and customers find the right help for their needs. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(73, "section", 16)(74, "div", 4)(75, "h2");
      \u0275\u0275text(76, "How We're Different");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "div", 17)(78, "div", 18)(79, "h3");
      \u0275\u0275text(80, "Verification Matters");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p");
      \u0275\u0275text(82, " Every professional completes identity verification, background checks, and skill validation. Customers hire with confidence. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(83, "div", 18)(84, "h3");
      \u0275\u0275text(85, "Fair Pricing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "p");
      \u0275\u0275text(87, " Transparent pricing with no surprise fees. Professionals set their rates, and customers know exactly what they'll pay upfront. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "div", 18)(89, "h3");
      \u0275\u0275text(90, "Secure Payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "p");
      \u0275\u0275text(92, " Payment escrow ensures both sides are protected. Money is held until work is complete and approved. ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(93, "div", 18)(94, "h3");
      \u0275\u0275text(95, "Community Driven");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(96, "p");
      \u0275\u0275text(97, " Reviews, ratings, and feedback build our community. Professionals who deliver excellence rise to the top. ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(98, "section", 19)(99, "div", 4)(100, "h2");
      \u0275\u0275text(101, "Our Team");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p", 20);
      \u0275\u0275text(103, " We're a passionate team of technologists, entrepreneurs, and service industry veterans dedicated to revolutionizing how people connect for services. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "div", 21)(105, "div", 22)(106, "div", 23);
      \u0275\u0275text(107, "\u{1F468}\u200D\u{1F4BC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "h3");
      \u0275\u0275text(109, "John Smith");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(110, "p", 24);
      \u0275\u0275text(111, "Founder & CEO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p", 25);
      \u0275\u0275text(113, "10+ years in marketplace tech and service industry innovation.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(114, "div", 22)(115, "div", 23);
      \u0275\u0275text(116, "\u{1F469}\u200D\u{1F4BB}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "h3");
      \u0275\u0275text(118, "Sarah Chen");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "p", 24);
      \u0275\u0275text(120, "CTO");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(121, "p", 25);
      \u0275\u0275text(122, "Full-stack engineer with expertise in secure payment systems and scalable platforms.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(123, "div", 22)(124, "div", 23);
      \u0275\u0275text(125, "\u{1F468}\u200D\u{1F527}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(126, "h3");
      \u0275\u0275text(127, "Mike Johnson");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(128, "p", 24);
      \u0275\u0275text(129, "VP of Operations");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p", 25);
      \u0275\u0275text(131, "20+ years in service industry management and professional networks.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(132, "div", 22)(133, "div", 23);
      \u0275\u0275text(134, "\u{1F469}\u200D\u{1F4CA}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(135, "h3");
      \u0275\u0275text(136, "Emma Rodriguez");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "p", 24);
      \u0275\u0275text(138, "Head of Trust & Safety");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "p", 25);
      \u0275\u0275text(140, "Leading our verification and community safety initiatives.");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(141, "section", 26)(142, "div", 27)(143, "h2");
      \u0275\u0275text(144, "Ready to Get Started?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(145, "p");
      \u0275\u0275text(146, "Join thousands of professionals and customers already using yProHub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(147, "div", 28)(148, "button", 29);
      \u0275\u0275listener("click", function AboutComponent_Template_button_click_148_listener() {
        return ctx.navigateTo("/auth/login");
      });
      \u0275\u0275text(149, "Find a Professional");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(150, "button", 30);
      \u0275\u0275listener("click", function AboutComponent_Template_button_click_150_listener() {
        return ctx.navigateTo("/auth/register/pro");
      });
      \u0275\u0275text(151, "Become a Pro");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(35);
      \u0275\u0275textInterpolate(ctx.platformStats ? \u0275\u0275pipeBind2(36, 2, ctx.platformStats.averageRating, "1.1-1") + "\u2605" : "\u2014");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.platformStats);
    }
  }, dependencies: [CommonModule, NgIf, DecimalPipe], styles: ["\n\n.about-wrapper[_ngcontent-%COMP%] {\n  color: #1f2937;\n  background: #fff;\n}\n.about-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 100px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 52px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.1;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 20px;\n  opacity: 0.95;\n}\n@media (max-width: 768px) {\n  .about-hero[_ngcontent-%COMP%] {\n    padding: 60px 20px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.mission-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #fff;\n}\n.mission-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.mission-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 24px;\n}\n.mission-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.mission-right[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.stat-box[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 30px 20px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);\n}\n.stat-number[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.stat-label[_ngcontent-%COMP%] {\n  font-size: 14px;\n  opacity: 0.9;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .mission-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .mission-left[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .mission-right[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.values-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.values-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.values-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.value-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 32px 24px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.value-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);\n}\n.value-icon[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 16px;\n}\n.value-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.value-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.how-we-work[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.how-we-work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.difference-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.difference-item[_ngcontent-%COMP%] {\n  padding: 32px 24px;\n  border-left: 4px solid #667eea;\n  background: #f9fafb;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.difference-item[_ngcontent-%COMP%]:hover {\n  background: white;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);\n}\n.difference-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.difference-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.team-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.team-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 16px;\n}\n.team-intro[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 16px;\n  color: #6b7280;\n  max-width: 600px;\n  margin: 0 auto 48px;\n}\n.team-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.team-member[_ngcontent-%COMP%] {\n  background: white;\n  padding: 32px 24px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s;\n}\n.team-member[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n}\n.member-avatar[_ngcontent-%COMP%] {\n  font-size: 64px;\n  display: block;\n  margin-bottom: 16px;\n}\n.team-member[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.member-role[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #667eea;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.member-bio[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0;\n}\n.about-cta[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-align: center;\n}\n.cta-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 32px;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.cta-btn.primary[_ngcontent-%COMP%] {\n  background: #fff;\n  color: #667eea;\n}\n.cta-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-btn.secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border: 1px solid #fff;\n}\n.cta-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .mission-right[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .values-grid[_ngcontent-%COMP%], \n   .difference-grid[_ngcontent-%COMP%], \n   .team-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=about.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AboutComponent, [{
    type: Component,
    args: [{ selector: "app-about", standalone: true, imports: [CommonModule], template: `<div class="about-wrapper">\r
  <!-- Hero Section -->\r
  <section class="about-hero">\r
    <div class="hero-content">\r
      <h1>About yProHub</h1>\r
      <p>Connecting talented professionals with customers who need them</p>\r
    </div>\r
  </section>\r
\r
  <!-- Mission Section -->\r
  <section class="mission-section">\r
    <div class="section-container">\r
      <div class="mission-grid">\r
        <div class="mission-left">\r
          <h2>Our Mission</h2>\r
          <p>\r
            yProHub was built with a simple mission: make it easy for people to find trusted professionals\r
            for any service, and give skilled workers a platform to grow their business.\r
          </p>\r
          <p>\r
            We believe in transparency, security, and community. Every professional on yProHub is verified,\r
            every customer is protected, and every transaction is secure.\r
          </p>\r
        </div>\r
        <div class="mission-right">\r
          <div class="stat-box">\r
            <h3 class="stat-number">50K+</h3>\r
            <p class="stat-label">Active Professionals</p>\r
          </div>\r
          <div class="stat-box">\r
            <h3 class="stat-number">100K+</h3>\r
            <p class="stat-label">Happy Customers</p>\r
          </div>\r
          <div class="stat-box">\r
            <h3 class="stat-number">1M+</h3>\r
            <p class="stat-label">Jobs Completed</p>\r
          </div>\r
          <div class="stat-box">\r
            <h3 class="stat-number">{{ platformStats ? (platformStats.averageRating | number:'1.1-1') + '\u2605' : '\u2014' }}</h3>\r
            <p class="stat-label">Average Rating <span *ngIf="platformStats">({{ platformStats.totalReviews }} reviews)</span></p>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Values Section -->\r
  <section class="values-section">\r
    <div class="section-container">\r
      <h2>Our Core Values</h2>\r
      <div class="values-grid">\r
        <div class="value-card">\r
          <div class="value-icon">\u{1F91D}</div>\r
          <h3>Trust & Transparency</h3>\r
          <p>\r
            We believe in transparent dealings and building long-term trust with both professionals and customers.\r
            No hidden fees, no surprises.\r
          </p>\r
        </div>\r
        <div class="value-card">\r
          <div class="value-icon">\u{1F512}</div>\r
          <h3>Security First</h3>\r
          <p>\r
            Your data and transactions are protected with industry-leading encryption and verification processes.\r
            We take security seriously.\r
          </p>\r
        </div>\r
        <div class="value-card">\r
          <div class="value-icon">\u2B50</div>\r
          <h3>Quality & Excellence</h3>\r
          <p>\r
            We maintain high standards for all professionals on our platform through verification, reviews,\r
            and community feedback.\r
          </p>\r
        </div>\r
        <div class="value-card">\r
          <div class="value-icon">\u{1F331}</div>\r
          <h3>Community Growth</h3>\r
          <p>\r
            We're committed to helping professionals grow their businesses and customers find the right help\r
            for their needs.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- How We Work Section -->\r
  <section class="how-we-work">\r
    <div class="section-container">\r
      <h2>How We're Different</h2>\r
      <div class="difference-grid">\r
        <div class="difference-item">\r
          <h3>Verification Matters</h3>\r
          <p>\r
            Every professional completes identity verification, background checks, and skill validation.\r
            Customers hire with confidence.\r
          </p>\r
        </div>\r
        <div class="difference-item">\r
          <h3>Fair Pricing</h3>\r
          <p>\r
            Transparent pricing with no surprise fees. Professionals set their rates, and customers know\r
            exactly what they'll pay upfront.\r
          </p>\r
        </div>\r
        <div class="difference-item">\r
          <h3>Secure Payments</h3>\r
          <p>\r
            Payment escrow ensures both sides are protected. Money is held until work is complete and approved.\r
          </p>\r
        </div>\r
        <div class="difference-item">\r
          <h3>Community Driven</h3>\r
          <p>\r
            Reviews, ratings, and feedback build our community. Professionals who deliver excellence rise to the top.\r
          </p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- Team Section -->\r
  <section class="team-section">\r
    <div class="section-container">\r
      <h2>Our Team</h2>\r
      <p class="team-intro">\r
        We're a passionate team of technologists, entrepreneurs, and service industry veterans\r
        dedicated to revolutionizing how people connect for services.\r
      </p>\r
      <div class="team-grid">\r
        <div class="team-member">\r
          <div class="member-avatar">\u{1F468}\u200D\u{1F4BC}</div>\r
          <h3>John Smith</h3>\r
          <p class="member-role">Founder & CEO</p>\r
          <p class="member-bio">10+ years in marketplace tech and service industry innovation.</p>\r
        </div>\r
        <div class="team-member">\r
          <div class="member-avatar">\u{1F469}\u200D\u{1F4BB}</div>\r
          <h3>Sarah Chen</h3>\r
          <p class="member-role">CTO</p>\r
          <p class="member-bio">Full-stack engineer with expertise in secure payment systems and scalable platforms.</p>\r
        </div>\r
        <div class="team-member">\r
          <div class="member-avatar">\u{1F468}\u200D\u{1F527}</div>\r
          <h3>Mike Johnson</h3>\r
          <p class="member-role">VP of Operations</p>\r
          <p class="member-bio">20+ years in service industry management and professional networks.</p>\r
        </div>\r
        <div class="team-member">\r
          <div class="member-avatar">\u{1F469}\u200D\u{1F4CA}</div>\r
          <h3>Emma Rodriguez</h3>\r
          <p class="member-role">Head of Trust & Safety</p>\r
          <p class="member-bio">Leading our verification and community safety initiatives.</p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CTA Section -->\r
  <section class="about-cta">\r
    <div class="cta-content">\r
      <h2>Ready to Get Started?</h2>\r
      <p>Join thousands of professionals and customers already using yProHub</p>\r
      <div class="cta-buttons">\r
        <button class="cta-btn primary" (click)="navigateTo('/auth/login')">Find a Professional</button>\r
        <button class="cta-btn secondary" (click)="navigateTo('/auth/register/pro')">Become a Pro</button>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/features/about/about/about.scss */\n.about-wrapper {\n  color: #1f2937;\n  background: #fff;\n}\n.about-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 100px 20px;\n  text-align: center;\n}\n.hero-content h1 {\n  font-size: 52px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.1;\n}\n.hero-content p {\n  font-size: 20px;\n  opacity: 0.95;\n}\n@media (max-width: 768px) {\n  .about-hero {\n    padding: 60px 20px;\n  }\n  .hero-content h1 {\n    font-size: 36px;\n  }\n  .hero-content p {\n    font-size: 16px;\n  }\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.mission-section {\n  padding: 80px 20px;\n  background: #fff;\n}\n.mission-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n  align-items: center;\n}\n.mission-left h2 {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 24px;\n}\n.mission-left p {\n  font-size: 16px;\n  line-height: 1.8;\n  color: #4b5563;\n  margin-bottom: 20px;\n}\n.mission-right {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 20px;\n}\n.stat-box {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 30px 20px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);\n}\n.stat-number {\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 8px;\n}\n.stat-label {\n  font-size: 14px;\n  opacity: 0.9;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .mission-grid {\n    grid-template-columns: 1fr;\n    gap: 40px;\n  }\n  .mission-left h2 {\n    font-size: 32px;\n  }\n  .mission-right {\n    grid-template-columns: 1fr 1fr;\n  }\n}\n.values-section {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.values-section h2 {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.values-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.value-card {\n  background: white;\n  padding: 32px 24px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.value-card:hover {\n  transform: translateY(-8px);\n  box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);\n}\n.value-icon {\n  font-size: 48px;\n  display: block;\n  margin-bottom: 16px;\n}\n.value-card h3 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.value-card p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n}\n.how-we-work {\n  padding: 80px 20px;\n  background: white;\n}\n.how-we-work h2 {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.difference-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.difference-item {\n  padding: 32px 24px;\n  border-left: 4px solid #667eea;\n  background: #f9fafb;\n  border-radius: 8px;\n  transition: all 0.3s;\n}\n.difference-item:hover {\n  background: white;\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);\n}\n.difference-item h3 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.difference-item p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.team-section {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.team-section h2 {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 16px;\n}\n.team-intro {\n  text-align: center;\n  font-size: 16px;\n  color: #6b7280;\n  max-width: 600px;\n  margin: 0 auto 48px;\n}\n.team-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.team-member {\n  background: white;\n  padding: 32px 24px;\n  border-radius: 12px;\n  text-align: center;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  transition: transform 0.3s;\n}\n.team-member:hover {\n  transform: translateY(-8px);\n}\n.member-avatar {\n  font-size: 64px;\n  display: block;\n  margin-bottom: 16px;\n}\n.team-member h3 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 4px;\n}\n.member-role {\n  font-size: 14px;\n  color: #667eea;\n  font-weight: 600;\n  margin-bottom: 12px;\n}\n.member-bio {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.5;\n  margin: 0;\n}\n.about-cta {\n  padding: 80px 20px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  text-align: center;\n}\n.cta-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-content h2 {\n  font-size: 40px;\n  font-weight: 700;\n  margin-bottom: 12px;\n}\n.cta-content p {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 32px;\n}\n.cta-buttons {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn {\n  padding: 12px 28px;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.cta-btn.primary {\n  background: #fff;\n  color: #667eea;\n}\n.cta-btn.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-btn.secondary {\n  background: rgba(255, 255, 255, 0.15);\n  color: #fff;\n  border: 1px solid #fff;\n}\n.cta-btn.secondary:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .mission-right {\n    grid-template-columns: 1fr;\n  }\n  .values-grid,\n  .difference-grid,\n  .team-grid {\n    grid-template-columns: 1fr;\n  }\n  .cta-buttons {\n    flex-direction: column;\n  }\n  .cta-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=about.css.map */\n"] }]
  }], () => [{ type: Router }, { type: Auth }, { type: ReviewService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/features/about/about/about.ts", lineNumber: 15 });
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
//# sourceMappingURL=chunk-DJVAJXKM.js.map

