import {
  CheckboxControlValueAccessor,
  CheckboxRequiredValidator,
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  NgControlStatus,
  NgControlStatusGroup,
  NgSelectOption,
  ReactiveFormsModule,
  RequiredValidator,
  SelectControlValueAccessor,
  Validators,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-QP32PFWE.js";
import {
  RouterModule
} from "./chunk-NMZ5GJTW.js";
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-ANTPJ2CK.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/contact/contact/contact.ts
function ContactComponent_span_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, " Name is required ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, " Email is required ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, " Please enter a valid email ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_span_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, " Please select a subject ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_span_52_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, " Message is required ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_span_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1, " You must agree to be contacted ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1, " \u2713 Thank you! Your message has been sent successfully. We'll get back to you soon. ");
    \u0275\u0275elementEnd();
  }
}
function ContactComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1, " \u2717 There was an error sending your message. Please try again. ");
    \u0275\u0275elementEnd();
  }
}
var ContactComponent = class _ContactComponent {
  formBuilder;
  contactForm;
  isSubmitted = false;
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;
  constructor(formBuilder) {
    this.formBuilder = formBuilder;
  }
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm() {
    this.contactForm = this.formBuilder.group({
      name: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      phone: [""],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required]],
      terms: [false, [Validators.requiredTrue]]
    });
  }
  onSubmit() {
    this.isSubmitted = true;
    this.submitSuccess = false;
    this.submitError = false;
    if (!this.contactForm.valid) {
      return;
    }
    this.isSubmitting = true;
    const formData = this.contactForm.value;
    setTimeout(() => {
      console.log("Contact form submitted:", formData);
      this.isSubmitting = false;
      this.submitSuccess = true;
      this.contactForm.reset();
      this.isSubmitted = false;
      setTimeout(() => {
        this.submitSuccess = false;
      }, 5e3);
    }, 1500);
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)(\u0275\u0275directiveInject(FormBuilder));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 146, vars: 11, consts: [[1, "contact-wrapper"], [1, "contact-hero"], [1, "hero-content"], [1, "contact-content"], [1, "section-container"], [1, "contact-grid"], [1, "contact-form-section"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "placeholder", "Your name", "required", ""], ["class", "error", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "placeholder", "your.email@example.com", "required", ""], ["for", "phone"], ["type", "tel", "id", "phone", "formControlName", "phone", "placeholder", "(555) 123-4567"], ["for", "subject"], ["id", "subject", "formControlName", "subject", "required", ""], ["value", ""], ["value", "general"], ["value", "support"], ["value", "billing"], ["value", "partnership"], ["value", "feedback"], ["value", "other"], ["for", "message"], ["id", "message", "formControlName", "message", "placeholder", "Tell us more about your inquiry...", "rows", "6", "required", ""], [1, "form-checkbox"], ["type", "checkbox", "id", "terms", "formControlName", "terms", "required", ""], ["for", "terms"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "contact-info-section"], [1, "info-card"], [1, "info-icon"], ["href", "mailto:support@yprohub.com"], ["href", "mailto:partnerships@yprohub.com"], ["href", "tel:+1-555-123-4567"], [1, "chat-btn"], [1, "social-section"], [1, "social-links"], ["href", "#", "title", "Facebook", 1, "social-link"], ["href", "#", "title", "Twitter", 1, "social-link"], ["href", "#", "title", "LinkedIn", 1, "social-link"], ["href", "#", "title", "Instagram", 1, "social-link"], [1, "faq-section"], [1, "faq-grid"], [1, "faq-item"], [1, "error"], [1, "success-message"], [1, "error-message"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "section", 1)(2, "div", 2)(3, "h1");
      \u0275\u0275text(4, "Get In Touch");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "p");
      \u0275\u0275text(6, "Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(7, "section", 3)(8, "div", 4)(9, "div", 5)(10, "div", 6)(11, "h2");
      \u0275\u0275text(12, "Send us a Message");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "form", 7);
      \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_13_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(14, "div", 8)(15, "label", 9);
      \u0275\u0275text(16, "Full Name *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(17, "input", 10);
      \u0275\u0275template(18, ContactComponent_span_18_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(19, "div", 8)(20, "label", 12);
      \u0275\u0275text(21, "Email Address *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(22, "input", 13);
      \u0275\u0275template(23, ContactComponent_span_23_Template, 2, 0, "span", 11)(24, ContactComponent_span_24_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(25, "div", 8)(26, "label", 14);
      \u0275\u0275text(27, "Phone Number");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "div", 8)(30, "label", 16);
      \u0275\u0275text(31, "Subject *");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "select", 17)(33, "option", 18);
      \u0275\u0275text(34, "Select a subject");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "option", 19);
      \u0275\u0275text(36, "General Inquiry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(37, "option", 20);
      \u0275\u0275text(38, "Technical Support");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "option", 21);
      \u0275\u0275text(40, "Billing Question");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(41, "option", 22);
      \u0275\u0275text(42, "Partnership Opportunity");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "option", 23);
      \u0275\u0275text(44, "Feedback");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "option", 24);
      \u0275\u0275text(46, "Other");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(47, ContactComponent_span_47_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "div", 8)(49, "label", 25);
      \u0275\u0275text(50, "Message *");
      \u0275\u0275elementEnd();
      \u0275\u0275element(51, "textarea", 26);
      \u0275\u0275template(52, ContactComponent_span_52_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "div", 27);
      \u0275\u0275element(54, "input", 28);
      \u0275\u0275elementStart(55, "label", 29);
      \u0275\u0275text(56, "I agree to be contacted about my inquiry *");
      \u0275\u0275elementEnd();
      \u0275\u0275template(57, ContactComponent_span_57_Template, 2, 0, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "button", 30);
      \u0275\u0275text(59);
      \u0275\u0275elementEnd();
      \u0275\u0275template(60, ContactComponent_div_60_Template, 2, 0, "div", 31)(61, ContactComponent_div_61_Template, 2, 0, "div", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(62, "div", 33)(63, "h2");
      \u0275\u0275text(64, "Contact Information");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(65, "div", 34)(66, "div", 35);
      \u0275\u0275text(67, "\u{1F4CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "h3");
      \u0275\u0275text(69, "Our Office");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(70, "p");
      \u0275\u0275text(71, "yProHub Headquarters");
      \u0275\u0275element(72, "br");
      \u0275\u0275text(73, "San Francisco, CA 94102");
      \u0275\u0275element(74, "br");
      \u0275\u0275text(75, "United States");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(76, "div", 34)(77, "div", 35);
      \u0275\u0275text(78, "\u{1F4E7}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "h3");
      \u0275\u0275text(80, "Email Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "p")(82, "a", 36);
      \u0275\u0275text(83, "support@yprohub.com");
      \u0275\u0275elementEnd();
      \u0275\u0275element(84, "br");
      \u0275\u0275elementStart(85, "a", 37);
      \u0275\u0275text(86, "partnerships@yprohub.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(87, "div", 34)(88, "div", 35);
      \u0275\u0275text(89, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(90, "h3");
      \u0275\u0275text(91, "Call Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(92, "p")(93, "a", 38);
      \u0275\u0275text(94, "(555) 123-4567");
      \u0275\u0275elementEnd();
      \u0275\u0275element(95, "br");
      \u0275\u0275text(96, " Mon - Fri, 9AM - 6PM PST");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(97, "div", 34)(98, "div", 35);
      \u0275\u0275text(99, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(100, "h3");
      \u0275\u0275text(101, "Live Chat");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "p");
      \u0275\u0275text(103, "Available on our website");
      \u0275\u0275element(104, "br");
      \u0275\u0275text(105, " during business hours");
      \u0275\u0275element(106, "br");
      \u0275\u0275elementStart(107, "button", 39);
      \u0275\u0275text(108, "Start Chat");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(109, "div", 40)(110, "h3");
      \u0275\u0275text(111, "Follow Us");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "div", 41)(113, "a", 42);
      \u0275\u0275text(114, "f");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "a", 43);
      \u0275\u0275text(116, "\u{1D54F}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(117, "a", 44);
      \u0275\u0275text(118, "in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(119, "a", 45);
      \u0275\u0275text(120, "\u{1F4F7}");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(121, "section", 46)(122, "div", 4)(123, "h2");
      \u0275\u0275text(124, "Frequently Asked Questions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(125, "div", 47)(126, "div", 48)(127, "h3");
      \u0275\u0275text(128, "How quickly will I hear back?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(129, "p");
      \u0275\u0275text(130, "We aim to respond to all inquiries within 24 business hours. Urgent support requests may be prioritized.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(131, "div", 48)(132, "h3");
      \u0275\u0275text(133, "What's the best way to report an issue?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(134, "p");
      \u0275\u0275text(135, `Use our contact form above and select "Technical Support" as the subject. Include as much detail as possible about the issue you're experiencing.`);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(136, "div", 48)(137, "h3");
      \u0275\u0275text(138, "How can I become a partner?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(139, "p");
      \u0275\u0275text(140, `We're always interested in partnerships! Select "Partnership Opportunity" when contacting us, and let us know how you'd like to collaborate.`);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(141, "div", 48)(142, "h3");
      \u0275\u0275text(143, "Do you have a physical office I can visit?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "p");
      \u0275\u0275text(145, "Yes! Our headquarters is in San Francisco. Contact us to schedule a visit or learn about our other office locations.");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_1_0;
      let tmp_2_0;
      let tmp_3_0;
      let tmp_4_0;
      let tmp_5_0;
      let tmp_6_0;
      \u0275\u0275advance(13);
      \u0275\u0275property("formGroup", ctx.contactForm);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isSubmitted && ((tmp_1_0 = ctx.contactForm.get("name")) == null ? null : tmp_1_0.hasError("required")));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isSubmitted && ((tmp_2_0 = ctx.contactForm.get("email")) == null ? null : tmp_2_0.hasError("required")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.isSubmitted && ((tmp_3_0 = ctx.contactForm.get("email")) == null ? null : tmp_3_0.hasError("email")));
      \u0275\u0275advance(23);
      \u0275\u0275property("ngIf", ctx.isSubmitted && ((tmp_4_0 = ctx.contactForm.get("subject")) == null ? null : tmp_4_0.hasError("required")));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isSubmitted && ((tmp_5_0 = ctx.contactForm.get("message")) == null ? null : tmp_5_0.hasError("required")));
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.isSubmitted && ((tmp_6_0 = ctx.contactForm.get("terms")) == null ? null : tmp_6_0.hasError("required")));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? "Sending..." : "Send Message", " ");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitError);
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, FormGroupDirective, FormControlName], styles: ["\n\n.contact-wrapper[_ngcontent-%COMP%] {\n  color: #1f2937;\n  background: #fff;\n}\n.contact-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.1;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .contact-hero[_ngcontent-%COMP%] {\n    padding: 48px 16px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.contact-content[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n}\n.contact-form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.contact-info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n.contact-form-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  color: #1f2937;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.form-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: auto;\n  margin-top: 3px;\n  cursor: pointer;\n}\n.form-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n  font-weight: 500;\n}\n.error[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc2626;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.success-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 8px;\n  font-size: 14px;\n  border-left: 4px solid #10b981;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #fee2e2;\n  color: #7f1d1d;\n  border-radius: 8px;\n  font-size: 14px;\n  border-left: 4px solid #ef4444;\n}\n.contact-info-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 28px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  text-align: center;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.info-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.info-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n.chat-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: #fff;\n  border: 0;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: background 0.2s;\n}\n.chat-btn[_ngcontent-%COMP%]:hover {\n  background: #764ba2;\n}\n.social-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  text-align: center;\n}\n.social-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1f2937;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n.social-link[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  text-decoration: none;\n  border-radius: 50%;\n  font-weight: 600;\n  transition: transform 0.2s;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n@media (max-width: 768px) {\n  .section-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .contact-content[_ngcontent-%COMP%] {\n    padding: 36px 16px;\n  }\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .contact-form-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .contact-form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .contact-info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 18px 20px;\n    text-align: left;\n    display: flex;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .info-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  }\n  .info-icon[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 0;\n    flex-shrink: 0;\n  }\n  .info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-bottom: 6px;\n  }\n  .faq-item[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: none;\n  }\n}\n.faq-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.faq-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.faq-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 28px 24px;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.faq-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.1);\n}\n.faq-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.faq-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .faq-section[_ngcontent-%COMP%] {\n    padding: 36px 16px;\n  }\n  .faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 28px;\n  }\n  .faq-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .faq-item[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-hero[_ngcontent-%COMP%] {\n    padding: 36px 16px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contact-content[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .contact-form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 8px;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    border-radius: 8px;\n  }\n  .social-section[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 8px;\n  }\n  .faq-section[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .faq-item[_ngcontent-%COMP%] {\n    padding: 16px 14px;\n  }\n}\n/*# sourceMappingURL=contact.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", imports: [CommonModule, ReactiveFormsModule], template: `<div class="contact-wrapper">\r
  <!-- Hero Section -->\r
  <section class="contact-hero">\r
    <div class="hero-content">\r
      <h1>Get In Touch</h1>\r
      <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>\r
    </div>\r
  </section>\r
\r
  <!-- Contact Content -->\r
  <section class="contact-content">\r
    <div class="section-container">\r
      <div class="contact-grid">\r
        <!-- Contact Form -->\r
        <div class="contact-form-section">\r
          <h2>Send us a Message</h2>\r
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">\r
            <div class="form-group">\r
              <label for="name">Full Name *</label>\r
              <input \r
                type="text" \r
                id="name" \r
                formControlName="name"\r
                placeholder="Your name"\r
                required>\r
              <span class="error" *ngIf="isSubmitted && contactForm.get('name')?.hasError('required')">\r
                Name is required\r
              </span>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="email">Email Address *</label>\r
              <input \r
                type="email" \r
                id="email" \r
                formControlName="email"\r
                placeholder="your.email@example.com"\r
                required>\r
              <span class="error" *ngIf="isSubmitted && contactForm.get('email')?.hasError('required')">\r
                Email is required\r
              </span>\r
              <span class="error" *ngIf="isSubmitted && contactForm.get('email')?.hasError('email')">\r
                Please enter a valid email\r
              </span>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="phone">Phone Number</label>\r
              <input \r
                type="tel" \r
                id="phone" \r
                formControlName="phone"\r
                placeholder="(555) 123-4567">\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="subject">Subject *</label>\r
              <select id="subject" formControlName="subject" required>\r
                <option value="">Select a subject</option>\r
                <option value="general">General Inquiry</option>\r
                <option value="support">Technical Support</option>\r
                <option value="billing">Billing Question</option>\r
                <option value="partnership">Partnership Opportunity</option>\r
                <option value="feedback">Feedback</option>\r
                <option value="other">Other</option>\r
              </select>\r
              <span class="error" *ngIf="isSubmitted && contactForm.get('subject')?.hasError('required')">\r
                Please select a subject\r
              </span>\r
            </div>\r
\r
            <div class="form-group">\r
              <label for="message">Message *</label>\r
              <textarea \r
                id="message" \r
                formControlName="message"\r
                placeholder="Tell us more about your inquiry..."\r
                rows="6"\r
                required></textarea>\r
              <span class="error" *ngIf="isSubmitted && contactForm.get('message')?.hasError('required')">\r
                Message is required\r
              </span>\r
            </div>\r
\r
            <div class="form-checkbox">\r
              <input \r
                type="checkbox" \r
                id="terms" \r
                formControlName="terms"\r
                required>\r
              <label for="terms">I agree to be contacted about my inquiry *</label>\r
              <span class="error" *ngIf="isSubmitted && contactForm.get('terms')?.hasError('required')">\r
                You must agree to be contacted\r
              </span>\r
            </div>\r
\r
            <button type="submit" class="submit-btn" [disabled]="isSubmitting">\r
              {{ isSubmitting ? 'Sending...' : 'Send Message' }}\r
            </button>\r
\r
            <div class="success-message" *ngIf="submitSuccess">\r
              \u2713 Thank you! Your message has been sent successfully. We'll get back to you soon.\r
            </div>\r
            <div class="error-message" *ngIf="submitError">\r
              \u2717 There was an error sending your message. Please try again.\r
            </div>\r
          </form>\r
        </div>\r
\r
        <!-- Contact Information -->\r
        <div class="contact-info-section">\r
          <h2>Contact Information</h2>\r
\r
          <div class="info-card">\r
            <div class="info-icon">\u{1F4CD}</div>\r
            <h3>Our Office</h3>\r
            <p>yProHub Headquarters<br>San Francisco, CA 94102<br>United States</p>\r
          </div>\r
\r
          <div class="info-card">\r
            <div class="info-icon">\u{1F4E7}</div>\r
            <h3>Email Us</h3>\r
            <p><a href="mailto:support@yprohub.com">support@yprohub.com</a><br>\r
            <a href="mailto:partnerships@yprohub.com">partnerships@yprohub.com</a></p>\r
          </div>\r
\r
          <div class="info-card">\r
            <div class="info-icon">\u{1F4DE}</div>\r
            <h3>Call Us</h3>\r
            <p><a href="tel:+1-555-123-4567">(555) 123-4567</a><br>\r
            Mon - Fri, 9AM - 6PM PST</p>\r
          </div>\r
\r
          <div class="info-card">\r
            <div class="info-icon">\u{1F4AC}</div>\r
            <h3>Live Chat</h3>\r
            <p>Available on our website<br>\r
            during business hours<br>\r
            <button class="chat-btn">Start Chat</button></p>\r
          </div>\r
\r
          <div class="social-section">\r
            <h3>Follow Us</h3>\r
            <div class="social-links">\r
              <a href="#" class="social-link" title="Facebook">f</a>\r
              <a href="#" class="social-link" title="Twitter">\u{1D54F}</a>\r
              <a href="#" class="social-link" title="LinkedIn">in</a>\r
              <a href="#" class="social-link" title="Instagram">\u{1F4F7}</a>\r
            </div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
\r
  <!-- FAQ Section -->\r
  <section class="faq-section">\r
    <div class="section-container">\r
      <h2>Frequently Asked Questions</h2>\r
      <div class="faq-grid">\r
        <div class="faq-item">\r
          <h3>How quickly will I hear back?</h3>\r
          <p>We aim to respond to all inquiries within 24 business hours. Urgent support requests may be prioritized.</p>\r
        </div>\r
        <div class="faq-item">\r
          <h3>What's the best way to report an issue?</h3>\r
          <p>Use our contact form above and select "Technical Support" as the subject. Include as much detail as possible about the issue you're experiencing.</p>\r
        </div>\r
        <div class="faq-item">\r
          <h3>How can I become a partner?</h3>\r
          <p>We're always interested in partnerships! Select "Partnership Opportunity" when contacting us, and let us know how you'd like to collaborate.</p>\r
        </div>\r
        <div class="faq-item">\r
          <h3>Do you have a physical office I can visit?</h3>\r
          <p>Yes! Our headquarters is in San Francisco. Contact us to schedule a visit or learn about our other office locations.</p>\r
        </div>\r
      </div>\r
    </div>\r
  </section>\r
</div>\r
`, styles: ["/* src/app/features/contact/contact/contact.scss */\n.contact-wrapper {\n  color: #1f2937;\n  background: #fff;\n}\n.contact-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.1;\n}\n.hero-content p {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .contact-hero {\n    padding: 48px 16px;\n  }\n  .hero-content h1 {\n    font-size: 30px;\n  }\n  .hero-content p {\n    font-size: 15px;\n  }\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.contact-content {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.contact-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n}\n.contact-form-section h2,\n.contact-info-section h2 {\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n.contact-form-section {\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-group label {\n  display: block;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  color: #1f2937;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group textarea {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-checkbox {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.form-checkbox input[type=checkbox] {\n  width: auto;\n  margin-top: 3px;\n  cursor: pointer;\n}\n.form-checkbox label {\n  margin-bottom: 0;\n  cursor: pointer;\n  font-weight: 500;\n}\n.error {\n  display: block;\n  color: #dc2626;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.submit-btn {\n  width: 100%;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n}\n.submit-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.success-message {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 8px;\n  font-size: 14px;\n  border-left: 4px solid #10b981;\n}\n.error-message {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #fee2e2;\n  color: #7f1d1d;\n  border-radius: 8px;\n  font-size: 14px;\n  border-left: 4px solid #ef4444;\n}\n.contact-info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.info-card {\n  background: white;\n  padding: 28px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  text-align: center;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.info-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);\n}\n.info-icon {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.info-card h3 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.info-card p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.info-card a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.info-card a:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n.chat-btn {\n  background: #667eea;\n  color: #fff;\n  border: 0;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: background 0.2s;\n}\n.chat-btn:hover {\n  background: #764ba2;\n}\n.social-section {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  text-align: center;\n}\n.social-section h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1f2937;\n}\n.social-links {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n.social-link {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  text-decoration: none;\n  border-radius: 50%;\n  font-weight: 600;\n  transition: transform 0.2s;\n}\n.social-link:hover {\n  transform: translateY(-4px);\n}\n@media (max-width: 768px) {\n  .section-container {\n    padding: 0;\n  }\n  .contact-content {\n    padding: 36px 16px;\n  }\n  .contact-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .contact-form-section {\n    padding: 20px;\n  }\n  .contact-form-section h2,\n  .contact-info-section h2 {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .info-card {\n    padding: 18px 20px;\n    text-align: left;\n    display: flex;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .info-card:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  }\n  .info-icon {\n    font-size: 28px;\n    margin-bottom: 0;\n    flex-shrink: 0;\n  }\n  .info-card h3 {\n    font-size: 15px;\n    margin-bottom: 6px;\n  }\n  .faq-item:hover {\n    transform: none;\n    box-shadow: none;\n  }\n}\n.faq-section {\n  padding: 80px 20px;\n  background: white;\n}\n.faq-section h2 {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.faq-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.faq-item {\n  background: #f9fafb;\n  padding: 28px 24px;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.faq-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.1);\n}\n.faq-item h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.faq-item p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .faq-section {\n    padding: 36px 16px;\n  }\n  .faq-section h2 {\n    font-size: 24px;\n    margin-bottom: 28px;\n  }\n  .faq-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .faq-item {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-hero {\n    padding: 36px 16px;\n  }\n  .hero-content h1 {\n    font-size: 26px;\n  }\n  .hero-content p {\n    font-size: 14px;\n  }\n  .contact-content {\n    padding: 28px 12px;\n  }\n  .contact-form-section {\n    padding: 16px;\n    border-radius: 8px;\n  }\n  .form-group {\n    margin-bottom: 16px;\n  }\n  .form-group input,\n  .form-group select,\n  .form-group textarea {\n    padding: 10px 12px;\n  }\n  .info-card {\n    padding: 14px 16px;\n    border-radius: 8px;\n  }\n  .social-section {\n    padding: 16px;\n    border-radius: 8px;\n  }\n  .faq-section {\n    padding: 28px 12px;\n  }\n  .faq-section h2 {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .faq-item {\n    padding: 16px 14px;\n  }\n}\n/*# sourceMappingURL=contact.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/features/contact/contact/contact.ts", lineNumber: 11 });
})();

// src/app/features/contact/contact-routing-module.ts
var routes = [
  { path: "", component: ContactComponent }
];
var ContactRoutingModule = class _ContactRoutingModule {
  static \u0275fac = function ContactRoutingModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactRoutingModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactRoutingModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [RouterModule.forChild(routes), RouterModule] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactRoutingModule, [{
    type: NgModule,
    args: [{
      imports: [RouterModule.forChild(routes)],
      exports: [RouterModule]
    }]
  }], null, null);
})();

// src/app/features/contact/contact-module.ts
var ContactModule = class _ContactModule {
  static \u0275fac = function ContactModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ContactModule });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
    CommonModule,
    ContactRoutingModule
  ] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        CommonModule,
        ContactRoutingModule
      ]
    }]
  }], null, null);
})();
export {
  ContactModule
};
//# sourceMappingURL=chunk-VVS76ZHQ.js.map

