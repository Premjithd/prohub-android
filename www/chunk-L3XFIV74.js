import {
  RouterModule
} from "./chunk-Z7MI56JG.js";
import {
  CommonModule,
  Component,
  NgForOf,
  NgIf,
  NgModule,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/faq/faq.ts
function FAQComponent_div_11_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r4.answer);
  }
}
function FAQComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275listener("click", function FAQComponent_div_11_Template_button_click_1_listener() {
      const i_r2 = \u0275\u0275restoreView(_r1).index;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleFAQ(i_r2));
    });
    \u0275\u0275elementStart(2, "span", 15);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 16);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(5, "svg", 17);
    \u0275\u0275element(6, "polyline", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(7, FAQComponent_div_11_div_7_Template, 3, 1, "div", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275classProp("open", item_r4.open);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.question);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", item_r4.open);
  }
}
var FAQComponent = class _FAQComponent {
  faqItems = [
    {
      question: "What is yProHub?",
      answer: "yProHub is a marketplace platform that connects customers with verified local professionals. Whether you need plumbing, electrical work, house cleaning, tutoring, or any other service, yProHub makes it easy to find, hire, and manage trusted professionals in your area.",
      open: false
    },
    {
      question: "How do I post a job?",
      answer: 'To post a job, first create a user account on yProHub. Then navigate to "Post a Job" from your dashboard, describe your project, set your budget, and specify your location. Within minutes, qualified professionals will start sending you bids.',
      open: false
    },
    {
      question: "How much does it cost to use yProHub?",
      answer: "For customers, posting jobs and receiving bids is completely free. yProHub charges professionals (Pros) a small commission on completed jobs. There are no hidden fees for customers using our platform.",
      open: false
    },
    {
      question: "How do I become a Pro?",
      answer: "To become a Pro, sign up with a Pro account on yProHub. You'll need to provide your business information, verify your identity, and upload documentation of your credentials and insurance. Once approved, you can start bidding on jobs in your service area.",
      open: false
    },
    {
      question: "Are professionals on yProHub verified?",
      answer: "Yes! All professionals on yProHub go through an identity verification process. We verify their credentials, check background information, and maintain a rating system based on customer reviews. This ensures you're working with trustworthy professionals.",
      open: false
    },
    {
      question: "How are payments handled?",
      answer: "Payments on yProHub are secured through our escrow system. When you accept a bid, funds are held securely. The professional receives payment only after you confirm the work is complete. This protects both customers and professionals.",
      open: false
    },
    {
      question: "What if I'm not satisfied with the work?",
      answer: "We take quality seriously. If you're not satisfied with the work, you can dispute the job within 7 days. Our support team will review the situation and work with both parties to reach a fair resolution. You can also leave honest reviews to help other customers.",
      open: false
    },
    {
      question: "Can I communicate directly with professionals?",
      answer: "Absolutely! yProHub provides in-app messaging so you can communicate with professionals before, during, and after the job. This allows you to discuss project details, ask questions, and stay updated on progress.",
      open: false
    },
    {
      question: "How is my personal information protected?",
      answer: "We take data security very seriously. yProHub uses industry-standard encryption to protect your personal and payment information. We never share your details with third parties without your consent. Read our Privacy Policy for more details.",
      open: false
    },
    {
      question: "What service categories are available?",
      answer: "yProHub offers a wide range of service categories including Home Repair, Cleaning, Tutoring, IT Support, Photography, Writing, Graphic Design, and many more. Browse our services page to see all available categories and find what you need.",
      open: false
    },
    {
      question: "How do I leave a review?",
      answer: "After a job is completed, both customers and professionals can leave reviews. You'll receive a notification to rate your experience. Your honest feedback helps maintain quality on the platform and helps others make informed decisions.",
      open: false
    },
    {
      question: "What if I have more questions?",
      answer: "We're here to help! Visit our Contact page to reach our support team, or check out our Help Center for additional resources. You can also email us at support@yprohub.com or call our customer support line.",
      open: false
    }
  ];
  toggleFAQ(index) {
    this.faqItems[index].open = !this.faqItems[index].open;
  }
  static \u0275fac = function FAQComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FAQComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FAQComponent, selectors: [["app-faq"]], decls: 23, vars: 1, consts: [[1, "faq-wrapper"], [1, "faq-hero"], [1, "faq-hero-content"], [1, "faq-section"], [1, "section-container"], [1, "faq-container"], [1, "faq-list"], ["class", "faq-item", 3, "open", 4, "ngFor", "ngForOf"], [1, "cta-section"], [1, "cta-content"], [1, "cta-buttons"], ["onclick", "window.location.href='/contact'", 1, "cta-btn", "primary"], ["onclick", "window.location.href='/about'", 1, "cta-btn", "secondary"], [1, "faq-item"], [1, "faq-question", 3, "click"], [1, "question-text"], [1, "toggle-icon"], ["width", "24", "height", "24", "viewBox", "0 0 24 24", "fill", "none", "stroke", "currentColor", "stroke-width", "2"], ["points", "6 9 12 15 18 9"], ["class", "faq-answer", 4, "ngIf"], [1, "faq-answer"]], template: function FAQComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Find answers to common questions about yProHub, how it works, and how to get started.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6);
      \u0275\u0275template(11, FAQComponent_div_11_Template, 8, 4, "div", 7);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(12, "section", 8)(13, "div", 9)(14, "h2");
      \u0275\u0275text(15, "Still have questions?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(16, "p");
      \u0275\u0275text(17, "Can't find the answer you're looking for? Our support team is here to help.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "div", 10)(19, "button", 11);
      \u0275\u0275text(20, "Contact Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "button", 12);
      \u0275\u0275text(22, "Learn More");
      \u0275\u0275elementEnd()()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.faqItems);
    }
  }, dependencies: [CommonModule, NgForOf, NgIf], styles: ['\n\n.faq-wrapper[_ngcontent-%COMP%] {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: #1f2937;\n  background: #fff;\n}\n.faq-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 80px 20px;\n  text-align: center;\n}\n.faq-hero-content[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.faq-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.faq-hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .faq-hero[_ngcontent-%COMP%] {\n    padding: 60px 20px;\n  }\n  .faq-hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 32px;\n  }\n  .faq-hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 16px;\n  }\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.faq-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.faq-container[_ngcontent-%COMP%] {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.faq-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.faq-item[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.faq-item[_ngcontent-%COMP%]:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.faq-item.open[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);\n}\n.faq-question[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 20px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  transition: all 0.3s ease;\n}\n.faq-question[_ngcontent-%COMP%]:hover {\n  color: #667eea;\n}\n.faq-item.open[_ngcontent-%COMP%]   .faq-question[_ngcontent-%COMP%] {\n  color: #667eea;\n  font-weight: 700;\n}\n.question-text[_ngcontent-%COMP%] {\n  text-align: left;\n  flex: 1;\n}\n.toggle-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #667eea;\n  transition: transform 0.3s ease;\n}\n.faq-item.open[_ngcontent-%COMP%]   .toggle-icon[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.toggle-icon[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 24px;\n}\n.faq-answer[_ngcontent-%COMP%] {\n  padding: 0 20px 20px 20px;\n  border-top: 1px solid #e5e7eb;\n  animation: _ngcontent-%COMP%_slideDown 0.3s ease;\n}\n@keyframes _ngcontent-%COMP%_slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.faq-answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #4b5563;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .faq-section[_ngcontent-%COMP%] {\n    padding: 60px 20px;\n  }\n  .faq-question[_ngcontent-%COMP%] {\n    padding: 16px;\n    font-size: 15px;\n  }\n  .faq-answer[_ngcontent-%COMP%] {\n    padding: 0 16px 16px 16px;\n  }\n  .faq-answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n.cta-section[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 80px 20px;\n  text-align: center;\n}\n.cta-content[_ngcontent-%COMP%] {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.cta-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 32px;\n  line-height: 1.6;\n}\n.cta-buttons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn[_ngcontent-%COMP%] {\n  padding: 12px 28px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.cta-btn.primary[_ngcontent-%COMP%] {\n  background: white;\n  color: #667eea;\n}\n.cta-btn.primary[_ngcontent-%COMP%]:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-btn.secondary[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 1px solid white;\n}\n.cta-btn.secondary[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .cta-section[_ngcontent-%COMP%] {\n    padding: 60px 20px;\n  }\n  .cta-content[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .cta-buttons[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .cta-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=faq.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FAQComponent, [{
    type: Component,
    args: [{ selector: "app-faq", standalone: true, imports: [CommonModule], template: `<div class="faq-wrapper">\r
  <!-- Hero Section -->\r
  <section class="faq-hero">\r
    <div class="faq-hero-content">\r
      <h1>Frequently Asked Questions</h1>\r
      <p>Find answers to common questions about yProHub, how it works, and how to get started.</p>\r
    </div>\r
  </section>\r
\r
  <!-- FAQ Items Section -->\r
  <section class="faq-section">\r
    <div class="section-container">\r
      <div class="faq-container">\r
        <div class="faq-list">\r
          <div *ngFor="let item of faqItems; let i = index" \r
               class="faq-item" \r
               [class.open]="item.open">\r
            <button class="faq-question" (click)="toggleFAQ(i)">\r
              <span class="question-text">{{ item.question }}</span>\r
              <span class="toggle-icon">\r
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">\r
                  <polyline points="6 9 12 15 18 9"></polyline>\r
                </svg>\r
              </span>\r
            </button>\r
            <div class="faq-answer" *ngIf="item.open">\r
              <p>{{ item.answer }}</p>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- CTA Section -->\r
  <section class="cta-section">\r
    <div class="cta-content">\r
      <h2>Still have questions?</h2>\r
      <p>Can't find the answer you're looking for? Our support team is here to help.</p>\r
      <div class="cta-buttons">\r
        <button class="cta-btn primary" onclick="window.location.href='/contact'">Contact Us</button>\r
        <button class="cta-btn secondary" onclick="window.location.href='/about'">Learn More</button>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ['/* src/app/features/faq/faq.scss */\n.faq-wrapper {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    "Segoe UI",\n    "Helvetica Neue",\n    sans-serif;\n  color: #1f2937;\n  background: #fff;\n}\n.faq-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 80px 20px;\n  text-align: center;\n}\n.faq-hero-content {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.faq-hero-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.faq-hero-content p {\n  font-size: 18px;\n  opacity: 0.95;\n  line-height: 1.6;\n}\n@media (max-width: 768px) {\n  .faq-hero {\n    padding: 60px 20px;\n  }\n  .faq-hero-content h1 {\n    font-size: 32px;\n  }\n  .faq-hero-content p {\n    font-size: 16px;\n  }\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.faq-section {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.faq-container {\n  max-width: 800px;\n  margin: 0 auto;\n}\n.faq-list {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n.faq-item {\n  background: white;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  overflow: hidden;\n  transition: all 0.3s ease;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n.faq-item:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);\n}\n.faq-item.open {\n  border-color: #667eea;\n  box-shadow: 0 4px 12px rgba(102, 126, 234, 0.15);\n}\n.faq-question {\n  width: 100%;\n  padding: 20px;\n  background: transparent;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 16px;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n  transition: all 0.3s ease;\n}\n.faq-question:hover {\n  color: #667eea;\n}\n.faq-item.open .faq-question {\n  color: #667eea;\n  font-weight: 700;\n}\n.question-text {\n  text-align: left;\n  flex: 1;\n}\n.toggle-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  color: #667eea;\n  transition: transform 0.3s ease;\n}\n.faq-item.open .toggle-icon {\n  transform: rotate(180deg);\n}\n.toggle-icon svg {\n  width: 24px;\n  height: 24px;\n}\n.faq-answer {\n  padding: 0 20px 20px 20px;\n  border-top: 1px solid #e5e7eb;\n  animation: slideDown 0.3s ease;\n}\n@keyframes slideDown {\n  from {\n    opacity: 0;\n    transform: translateY(-10px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.faq-answer p {\n  font-size: 15px;\n  line-height: 1.8;\n  color: #4b5563;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .faq-section {\n    padding: 60px 20px;\n  }\n  .faq-question {\n    padding: 16px;\n    font-size: 15px;\n  }\n  .faq-answer {\n    padding: 0 16px 16px 16px;\n  }\n  .faq-answer p {\n    font-size: 14px;\n  }\n}\n.cta-section {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 80px 20px;\n  text-align: center;\n}\n.cta-content {\n  max-width: 600px;\n  margin: 0 auto;\n}\n.cta-content h2 {\n  font-size: 36px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.2;\n}\n.cta-content p {\n  font-size: 16px;\n  opacity: 0.95;\n  margin-bottom: 32px;\n  line-height: 1.6;\n}\n.cta-buttons {\n  display: flex;\n  gap: 16px;\n  justify-content: center;\n  flex-wrap: wrap;\n}\n.cta-btn {\n  padding: 12px 28px;\n  border: none;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: all 0.2s;\n  font-family: inherit;\n}\n.cta-btn.primary {\n  background: white;\n  color: #667eea;\n}\n.cta-btn.primary:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);\n}\n.cta-btn.secondary {\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 1px solid white;\n}\n.cta-btn.secondary:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-2px);\n}\n@media (max-width: 768px) {\n  .cta-section {\n    padding: 60px 20px;\n  }\n  .cta-content h2 {\n    font-size: 28px;\n  }\n  .cta-buttons {\n    flex-direction: column;\n  }\n  .cta-btn {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=faq.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FAQComponent, { className: "FAQComponent", filePath: "src/app/features/faq/faq.ts", lineNumber: 17 });
})();

// src/app/features/faq/faq-routing-module.ts
var routes = [
  { path: "", component: FAQComponent }
];
var FAQRoutingModule = class _FAQRoutingModule {
  static \u0275fac = function FAQRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FAQRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FAQRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FAQRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/faq/faq-module.ts
var FAQModule = class _FAQModule {
  static \u0275fac = function FAQModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FAQModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FAQModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    FAQRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FAQModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        FAQRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  FAQModule
};
//# sourceMappingURL=chunk-L3XFIV74.js.map

