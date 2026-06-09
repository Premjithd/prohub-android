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
} from "./chunk-A6TK5TPK.js";
import {
  TranslateModule,
  TranslatePipe
} from "./chunk-ZGXDPMMN.js";
import {
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UQSUYH4V.js";
import "./chunk-7WUTQBRG.js";

// src/app/features/contact/contact/contact.ts
function ContactComponent_span_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.NAME_REQUIRED"), " ");
  }
}
function ContactComponent_span_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.EMAIL_REQUIRED"), " ");
  }
}
function ContactComponent_span_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.EMAIL_INVALID"), " ");
  }
}
function ContactComponent_span_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.PHONE_INVALID"), " ");
  }
}
function ContactComponent_span_65_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.SUBJECT_REQUIRED"), " ");
  }
}
function ContactComponent_span_72_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.MESSAGE_REQUIRED"), " ");
  }
}
function ContactComponent_span_73_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.MESSAGE_MIN"), " ");
  }
}
function ContactComponent_span_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.MESSAGE_MAX"), " ");
  }
}
function ContactComponent_span_80_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 49);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.AGREE_REQUIRED"), " ");
  }
}
function ContactComponent_div_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.SUCCESS"), " ");
  }
}
function ContactComponent_div_86_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CONTACT.ERROR"), " ");
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
      phone: ["", [Validators.pattern("^[0-9]{10}$")]],
      subject: ["", [Validators.required]],
      message: ["", [Validators.required, Validators.minLength(20), Validators.maxLength(1e3)]],
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
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 184, vars: 135, consts: [[1, "contact-wrapper"], [1, "contact-hero"], [1, "hero-content"], [1, "contact-content"], [1, "section-container"], [1, "contact-grid"], [1, "contact-form-section"], [3, "ngSubmit", "formGroup"], [1, "form-group"], ["for", "name"], ["type", "text", "id", "name", "formControlName", "name", "required", "", 3, "placeholder"], ["class", "error", 4, "ngIf"], ["for", "email"], ["type", "email", "id", "email", "formControlName", "email", "required", "", 3, "placeholder"], ["for", "phone"], ["type", "tel", "id", "phone", "formControlName", "phone", 3, "placeholder"], ["for", "subject"], ["id", "subject", "formControlName", "subject", "required", ""], ["value", ""], ["value", "general"], ["value", "support"], ["value", "billing"], ["value", "partnership"], ["value", "feedback"], ["value", "other"], ["for", "message"], ["id", "message", "formControlName", "message", "rows", "6", "required", "", 3, "placeholder"], [1, "form-checkbox"], ["type", "checkbox", "id", "terms", "formControlName", "terms", "required", ""], ["for", "terms"], ["type", "submit", 1, "submit-btn", 3, "disabled"], ["class", "success-message", 4, "ngIf"], ["class", "error-message", 4, "ngIf"], [1, "contact-info-section"], [1, "info-card"], [1, "info-icon"], ["href", "mailto:support@yprohub.com"], ["href", "mailto:partnerships@yprohub.com"], ["href", "tel:+1-555-123-4567"], [1, "chat-btn"], [1, "social-section"], [1, "social-links"], ["href", "#", "title", "Facebook", 1, "social-link"], ["href", "#", "title", "Twitter", 1, "social-link"], ["href", "#", "title", "LinkedIn", 1, "social-link"], ["href", "#", "title", "Instagram", 1, "social-link"], [1, "faq-section"], [1, "faq-grid"], [1, "faq-item"], [1, "error"], [1, "success-message"], [1, "error-message"]], template: function ContactComponent_Template(rf, ctx) {
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
      \u0275\u0275elementStart(16, "form", 7);
      \u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_16_listener() {
        return ctx.onSubmit();
      });
      \u0275\u0275elementStart(17, "div", 8)(18, "label", 9);
      \u0275\u0275text(19);
      \u0275\u0275pipe(20, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(21, "input", 10);
      \u0275\u0275pipe(22, "translate");
      \u0275\u0275template(23, ContactComponent_span_23_Template, 3, 3, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "div", 8)(25, "label", 12);
      \u0275\u0275text(26);
      \u0275\u0275pipe(27, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(28, "input", 13);
      \u0275\u0275pipe(29, "translate");
      \u0275\u0275template(30, ContactComponent_span_30_Template, 3, 3, "span", 11)(31, ContactComponent_span_31_Template, 3, 3, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "div", 8)(33, "label", 14);
      \u0275\u0275text(34);
      \u0275\u0275pipe(35, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(36, "input", 15);
      \u0275\u0275pipe(37, "translate");
      \u0275\u0275template(38, ContactComponent_span_38_Template, 3, 3, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "div", 8)(40, "label", 16);
      \u0275\u0275text(41);
      \u0275\u0275pipe(42, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(43, "select", 17)(44, "option", 18);
      \u0275\u0275text(45);
      \u0275\u0275pipe(46, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(47, "option", 19);
      \u0275\u0275text(48);
      \u0275\u0275pipe(49, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(50, "option", 20);
      \u0275\u0275text(51);
      \u0275\u0275pipe(52, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "option", 21);
      \u0275\u0275text(54);
      \u0275\u0275pipe(55, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "option", 22);
      \u0275\u0275text(57);
      \u0275\u0275pipe(58, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(59, "option", 23);
      \u0275\u0275text(60);
      \u0275\u0275pipe(61, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(62, "option", 24);
      \u0275\u0275text(63);
      \u0275\u0275pipe(64, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(65, ContactComponent_span_65_Template, 3, 3, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(66, "div", 8)(67, "label", 25);
      \u0275\u0275text(68);
      \u0275\u0275pipe(69, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(70, "textarea", 26);
      \u0275\u0275pipe(71, "translate");
      \u0275\u0275template(72, ContactComponent_span_72_Template, 3, 3, "span", 11)(73, ContactComponent_span_73_Template, 3, 3, "span", 11)(74, ContactComponent_span_74_Template, 3, 3, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "div", 27);
      \u0275\u0275element(76, "input", 28);
      \u0275\u0275elementStart(77, "label", 29);
      \u0275\u0275text(78);
      \u0275\u0275pipe(79, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(80, ContactComponent_span_80_Template, 3, 3, "span", 11);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(81, "button", 30);
      \u0275\u0275text(82);
      \u0275\u0275pipe(83, "translate");
      \u0275\u0275pipe(84, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275template(85, ContactComponent_div_85_Template, 3, 3, "div", 31)(86, ContactComponent_div_86_Template, 3, 3, "div", 32);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(87, "div", 33)(88, "h2");
      \u0275\u0275text(89);
      \u0275\u0275pipe(90, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(91, "div", 34)(92, "div", 35);
      \u0275\u0275text(93, "\u{1F4CD}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(94, "h3");
      \u0275\u0275text(95);
      \u0275\u0275pipe(96, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98);
      \u0275\u0275pipe(99, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(100, "div", 34)(101, "div", 35);
      \u0275\u0275text(102, "\u{1F4E7}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(103, "h3");
      \u0275\u0275text(104);
      \u0275\u0275pipe(105, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "p")(107, "a", 36);
      \u0275\u0275text(108, "support@yprohub.com");
      \u0275\u0275elementEnd();
      \u0275\u0275element(109, "br");
      \u0275\u0275elementStart(110, "a", 37);
      \u0275\u0275text(111, "partnerships@yprohub.com");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(112, "div", 34)(113, "div", 35);
      \u0275\u0275text(114, "\u{1F4DE}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(115, "h3");
      \u0275\u0275text(116);
      \u0275\u0275pipe(117, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(118, "p")(119, "a", 38);
      \u0275\u0275text(120, "(555) 123-4567");
      \u0275\u0275elementEnd();
      \u0275\u0275element(121, "br");
      \u0275\u0275text(122);
      \u0275\u0275pipe(123, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(124, "div", 34)(125, "div", 35);
      \u0275\u0275text(126, "\u{1F4AC}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(127, "h3");
      \u0275\u0275text(128);
      \u0275\u0275pipe(129, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(130, "p");
      \u0275\u0275text(131);
      \u0275\u0275pipe(132, "translate");
      \u0275\u0275element(133, "br");
      \u0275\u0275elementStart(134, "button", 39);
      \u0275\u0275text(135);
      \u0275\u0275pipe(136, "translate");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(137, "div", 40)(138, "h3");
      \u0275\u0275text(139);
      \u0275\u0275pipe(140, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(141, "div", 41)(142, "a", 42);
      \u0275\u0275text(143, "f");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(144, "a", 43);
      \u0275\u0275text(145, "\u{1D54F}");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(146, "a", 44);
      \u0275\u0275text(147, "in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(148, "a", 45);
      \u0275\u0275text(149, "\u{1F4F7}");
      \u0275\u0275elementEnd()()()()()()();
      \u0275\u0275elementStart(150, "section", 46)(151, "div", 4)(152, "h2");
      \u0275\u0275text(153);
      \u0275\u0275pipe(154, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(155, "div", 47)(156, "div", 48)(157, "h3");
      \u0275\u0275text(158);
      \u0275\u0275pipe(159, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(160, "p");
      \u0275\u0275text(161);
      \u0275\u0275pipe(162, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(163, "div", 48)(164, "h3");
      \u0275\u0275text(165);
      \u0275\u0275pipe(166, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(167, "p");
      \u0275\u0275text(168);
      \u0275\u0275pipe(169, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(170, "div", 48)(171, "h3");
      \u0275\u0275text(172);
      \u0275\u0275pipe(173, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(174, "p");
      \u0275\u0275text(175);
      \u0275\u0275pipe(176, "translate");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(177, "div", 48)(178, "h3");
      \u0275\u0275text(179);
      \u0275\u0275pipe(180, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(181, "p");
      \u0275\u0275text(182);
      \u0275\u0275pipe(183, "translate");
      \u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      let tmp_6_0;
      let tmp_9_0;
      let tmp_10_0;
      let tmp_13_0;
      let tmp_22_0;
      let tmp_25_0;
      let tmp_26_0;
      let tmp_27_0;
      let tmp_29_0;
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 53, "CONTACT.HERO_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 55, "CONTACT.HERO_SUB"));
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 57, "CONTACT.FORM_TITLE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.contactForm);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(20, 59, "CONTACT.NAME"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(22, 61, "CONTACT.NAME_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_6_0 = ctx.contactForm.get("name")) == null ? null : tmp_6_0.touched)) && ((tmp_6_0 = ctx.contactForm.get("name")) == null ? null : tmp_6_0.hasError("required")));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(27, 63, "CONTACT.EMAIL"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(29, 65, "CONTACT.EMAIL_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_9_0 = ctx.contactForm.get("email")) == null ? null : tmp_9_0.touched)) && ((tmp_9_0 = ctx.contactForm.get("email")) == null ? null : tmp_9_0.hasError("required")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_10_0 = ctx.contactForm.get("email")) == null ? null : tmp_10_0.touched)) && ((tmp_10_0 = ctx.contactForm.get("email")) == null ? null : tmp_10_0.hasError("email")));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(35, 67, "CONTACT.PHONE"));
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(37, 69, "CONTACT.PHONE_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_13_0 = ctx.contactForm.get("phone")) == null ? null : tmp_13_0.touched)) && ((tmp_13_0 = ctx.contactForm.get("phone")) == null ? null : tmp_13_0.hasError("pattern")));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(42, 71, "CONTACT.SUBJECT"), " *");
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(46, 73, "CONTACT.SUBJECT_PLACEHOLDER"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(49, 75, "CONTACT.SUBJECT_GENERAL"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 77, "CONTACT.SUBJECT_SUPPORT"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(55, 79, "CONTACT.SUBJECT_BILLING"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 81, "CONTACT.SUBJECT_PARTNERSHIP"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(61, 83, "CONTACT.SUBJECT_FEEDBACK"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(64, 85, "CONTACT.SUBJECT_OTHER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_22_0 = ctx.contactForm.get("subject")) == null ? null : tmp_22_0.touched)) && ((tmp_22_0 = ctx.contactForm.get("subject")) == null ? null : tmp_22_0.hasError("required")));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(69, 87, "CONTACT.MESSAGE"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(71, 89, "CONTACT.MESSAGE_PLACEHOLDER"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_25_0 = ctx.contactForm.get("message")) == null ? null : tmp_25_0.touched)) && ((tmp_25_0 = ctx.contactForm.get("message")) == null ? null : tmp_25_0.hasError("required")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_26_0 = ctx.contactForm.get("message")) == null ? null : tmp_26_0.touched)) && ((tmp_26_0 = ctx.contactForm.get("message")) == null ? null : tmp_26_0.hasError("minlength")));
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_27_0 = ctx.contactForm.get("message")) == null ? null : tmp_27_0.touched)) && ((tmp_27_0 = ctx.contactForm.get("message")) == null ? null : tmp_27_0.hasError("maxlength")));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(79, 91, "CONTACT.AGREE"), " *");
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", (ctx.isSubmitted || ((tmp_29_0 = ctx.contactForm.get("terms")) == null ? null : tmp_29_0.touched)) && ((tmp_29_0 = ctx.contactForm.get("terms")) == null ? null : tmp_29_0.hasError("required")));
      \u0275\u0275advance();
      \u0275\u0275property("disabled", ctx.isSubmitting);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.isSubmitting ? \u0275\u0275pipeBind1(83, 93, "CONTACT.SENDING") : \u0275\u0275pipeBind1(84, 95, "CONTACT.SEND"), " ");
      \u0275\u0275advance(3);
      \u0275\u0275property("ngIf", ctx.submitSuccess);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.submitError);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(90, 97, "CONTACT.INFO_TITLE"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(96, 99, "CONTACT.OFFICE_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(99, 101, "CONTACT.OFFICE_TEXT"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(105, 103, "CONTACT.EMAIL_US_TITLE"));
      \u0275\u0275advance(12);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(117, 105, "CONTACT.CALL_TITLE"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(123, 107, "CONTACT.CALL_HOURS"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(129, 109, "CONTACT.CHAT_TITLE"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(132, 111, "CONTACT.CHAT_DESC"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(136, 113, "CONTACT.CHAT_BTN"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(140, 115, "CONTACT.FOLLOW_TITLE"));
      \u0275\u0275advance(14);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(154, 117, "CONTACT.FAQ_TITLE"));
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(159, 119, "CONTACT.FAQ1_Q"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(162, 121, "CONTACT.FAQ1_A"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(166, 123, "CONTACT.FAQ2_Q"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(169, 125, "CONTACT.FAQ2_A"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(173, 127, "CONTACT.FAQ3_Q"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(176, 129, "CONTACT.FAQ3_A"));
      \u0275\u0275advance(4);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(180, 131, "CONTACT.FAQ4_Q"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(183, 133, "CONTACT.FAQ4_A"));
    }
  }, dependencies: [CommonModule, NgIf, ReactiveFormsModule, \u0275NgNoValidate, NgSelectOption, \u0275NgSelectMultipleOption, DefaultValueAccessor, CheckboxControlValueAccessor, SelectControlValueAccessor, NgControlStatus, NgControlStatusGroup, RequiredValidator, CheckboxRequiredValidator, FormGroupDirective, FormControlName, TranslateModule, TranslatePipe], styles: ["\n\n.contact-wrapper[_ngcontent-%COMP%] {\n  color: #1f2937;\n  background: #fff;\n}\n.contact-hero[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.1;\n}\n.hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .contact-hero[_ngcontent-%COMP%] {\n    padding: 48px 16px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n.section-container[_ngcontent-%COMP%] {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.contact-content[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.contact-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n}\n.contact-form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n.contact-info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n.contact-form-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 24px;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  color: #1f2937;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus, \n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-checkbox[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.form-checkbox[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  width: auto;\n  margin-top: 3px;\n  cursor: pointer;\n}\n.form-checkbox[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  cursor: pointer;\n  font-weight: 500;\n}\n.error[_ngcontent-%COMP%] {\n  display: block;\n  color: #dc2626;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.submit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n}\n.submit-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.success-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 8px;\n  font-size: 14px;\n  border-left: 4px solid #10b981;\n}\n.error-message[_ngcontent-%COMP%] {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #fee2e2;\n  color: #7f1d1d;\n  border-radius: 8px;\n  font-size: 14px;\n  border-left: 4px solid #ef4444;\n}\n.contact-info-section[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.info-card[_ngcontent-%COMP%] {\n  background: white;\n  padding: 28px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  text-align: center;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.info-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);\n}\n.info-icon[_ngcontent-%COMP%] {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.info-card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.info-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.info-card[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n.chat-btn[_ngcontent-%COMP%] {\n  background: #667eea;\n  color: #fff;\n  border: 0;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: background 0.2s;\n}\n.chat-btn[_ngcontent-%COMP%]:hover {\n  background: #764ba2;\n}\n.social-section[_ngcontent-%COMP%] {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  text-align: center;\n}\n.social-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1f2937;\n}\n.social-links[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n.social-link[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  text-decoration: none;\n  border-radius: 50%;\n  font-weight: 600;\n  transition: transform 0.2s;\n}\n.social-link[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n}\n@media (max-width: 768px) {\n  .section-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  .contact-content[_ngcontent-%COMP%] {\n    padding: 36px 16px;\n  }\n  .contact-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .contact-form-section[_ngcontent-%COMP%] {\n    padding: 20px;\n  }\n  .contact-form-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], \n   .contact-info-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 18px 20px;\n    text-align: left;\n    display: flex;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .info-card[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  }\n  .info-icon[_ngcontent-%COMP%] {\n    font-size: 28px;\n    margin-bottom: 0;\n    flex-shrink: 0;\n  }\n  .info-card[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 15px;\n    margin-bottom: 6px;\n  }\n  .faq-item[_ngcontent-%COMP%]:hover {\n    transform: none;\n    box-shadow: none;\n  }\n}\n.faq-section[_ngcontent-%COMP%] {\n  padding: 80px 20px;\n  background: white;\n}\n.faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.faq-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.faq-item[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  padding: 28px 24px;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.faq-item[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.1);\n}\n.faq-item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.faq-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .faq-section[_ngcontent-%COMP%] {\n    padding: 36px 16px;\n  }\n  .faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-bottom: 28px;\n  }\n  .faq-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .faq-item[_ngcontent-%COMP%] {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-hero[_ngcontent-%COMP%] {\n    padding: 36px 16px;\n  }\n  .hero-content[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .hero-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n  .contact-content[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .contact-form-section[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 8px;\n  }\n  .form-group[_ngcontent-%COMP%] {\n    margin-bottom: 16px;\n  }\n  .form-group[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], \n   .form-group[_ngcontent-%COMP%]   select[_ngcontent-%COMP%], \n   .form-group[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    padding: 10px 12px;\n  }\n  .info-card[_ngcontent-%COMP%] {\n    padding: 14px 16px;\n    border-radius: 8px;\n  }\n  .social-section[_ngcontent-%COMP%] {\n    padding: 16px;\n    border-radius: 8px;\n  }\n  .faq-section[_ngcontent-%COMP%] {\n    padding: 28px 12px;\n  }\n  .faq-section[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .faq-item[_ngcontent-%COMP%] {\n    padding: 16px 14px;\n  }\n}\n/*# sourceMappingURL=contact.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactComponent, [{
    type: Component,
    args: [{ selector: "app-contact", imports: [CommonModule, ReactiveFormsModule, TranslateModule], template: `<div class="contact-wrapper">
  <!-- Hero Section -->
  <section class="contact-hero">
    <div class="hero-content">
      <h1>{{ 'CONTACT.HERO_TITLE' | translate }}</h1>
      <p>{{ 'CONTACT.HERO_SUB' | translate }}</p>
    </div>
  </section>

  <!-- Contact Content -->
  <section class="contact-content">
    <div class="section-container">
      <div class="contact-grid">
        <!-- Contact Form -->
        <div class="contact-form-section">
          <h2>{{ 'CONTACT.FORM_TITLE' | translate }}</h2>
          <form [formGroup]="contactForm" (ngSubmit)="onSubmit()">
            <div class="form-group">
              <label for="name">{{ 'CONTACT.NAME' | translate }} *</label>
              <input
                type="text"
                id="name"
                formControlName="name"
                [placeholder]="'CONTACT.NAME_PLACEHOLDER' | translate"
                required>
              <span class="error" *ngIf="(isSubmitted || contactForm.get('name')?.touched) && contactForm.get('name')?.hasError('required')">
                {{ 'CONTACT.NAME_REQUIRED' | translate }}
              </span>
            </div>

            <div class="form-group">
              <label for="email">{{ 'CONTACT.EMAIL' | translate }} *</label>
              <input
                type="email"
                id="email"
                formControlName="email"
                [placeholder]="'CONTACT.EMAIL_PLACEHOLDER' | translate"
                required>
              <span class="error" *ngIf="(isSubmitted || contactForm.get('email')?.touched) && contactForm.get('email')?.hasError('required')">
                {{ 'CONTACT.EMAIL_REQUIRED' | translate }}
              </span>
              <span class="error" *ngIf="(isSubmitted || contactForm.get('email')?.touched) && contactForm.get('email')?.hasError('email')">
                {{ 'CONTACT.EMAIL_INVALID' | translate }}
              </span>
            </div>

            <div class="form-group">
              <label for="phone">{{ 'CONTACT.PHONE' | translate }}</label>
              <input
                type="tel"
                id="phone"
                formControlName="phone"
                [placeholder]="'CONTACT.PHONE_PLACEHOLDER' | translate">
              <span class="error" *ngIf="(isSubmitted || contactForm.get('phone')?.touched) && contactForm.get('phone')?.hasError('pattern')">
                {{ 'CONTACT.PHONE_INVALID' | translate }}
              </span>
            </div>

            <div class="form-group">
              <label for="subject">{{ 'CONTACT.SUBJECT' | translate }} *</label>
              <select id="subject" formControlName="subject" required>
                <option value="">{{ 'CONTACT.SUBJECT_PLACEHOLDER' | translate }}</option>
                <option value="general">{{ 'CONTACT.SUBJECT_GENERAL' | translate }}</option>
                <option value="support">{{ 'CONTACT.SUBJECT_SUPPORT' | translate }}</option>
                <option value="billing">{{ 'CONTACT.SUBJECT_BILLING' | translate }}</option>
                <option value="partnership">{{ 'CONTACT.SUBJECT_PARTNERSHIP' | translate }}</option>
                <option value="feedback">{{ 'CONTACT.SUBJECT_FEEDBACK' | translate }}</option>
                <option value="other">{{ 'CONTACT.SUBJECT_OTHER' | translate }}</option>
              </select>
              <span class="error" *ngIf="(isSubmitted || contactForm.get('subject')?.touched) && contactForm.get('subject')?.hasError('required')">
                {{ 'CONTACT.SUBJECT_REQUIRED' | translate }}
              </span>
            </div>

            <div class="form-group">
              <label for="message">{{ 'CONTACT.MESSAGE' | translate }} *</label>
              <textarea
                id="message"
                formControlName="message"
                [placeholder]="'CONTACT.MESSAGE_PLACEHOLDER' | translate"
                rows="6"
                required></textarea>
              <span class="error" *ngIf="(isSubmitted || contactForm.get('message')?.touched) && contactForm.get('message')?.hasError('required')">
                {{ 'CONTACT.MESSAGE_REQUIRED' | translate }}
              </span>
              <span class="error" *ngIf="(isSubmitted || contactForm.get('message')?.touched) && contactForm.get('message')?.hasError('minlength')">
                {{ 'CONTACT.MESSAGE_MIN' | translate }}
              </span>
              <span class="error" *ngIf="(isSubmitted || contactForm.get('message')?.touched) && contactForm.get('message')?.hasError('maxlength')">
                {{ 'CONTACT.MESSAGE_MAX' | translate }}
              </span>
            </div>

            <div class="form-checkbox">
              <input
                type="checkbox"
                id="terms"
                formControlName="terms"
                required>
              <label for="terms">{{ 'CONTACT.AGREE' | translate }} *</label>
              <span class="error" *ngIf="(isSubmitted || contactForm.get('terms')?.touched) && contactForm.get('terms')?.hasError('required')">
                {{ 'CONTACT.AGREE_REQUIRED' | translate }}
              </span>
            </div>

            <button type="submit" class="submit-btn" [disabled]="isSubmitting">
              {{ isSubmitting ? ('CONTACT.SENDING' | translate) : ('CONTACT.SEND' | translate) }}
            </button>

            <div class="success-message" *ngIf="submitSuccess">
              {{ 'CONTACT.SUCCESS' | translate }}
            </div>
            <div class="error-message" *ngIf="submitError">
              {{ 'CONTACT.ERROR' | translate }}
            </div>
          </form>
        </div>

        <!-- Contact Information -->
        <div class="contact-info-section">
          <h2>{{ 'CONTACT.INFO_TITLE' | translate }}</h2>

          <div class="info-card">
            <div class="info-icon">\u{1F4CD}</div>
            <h3>{{ 'CONTACT.OFFICE_TITLE' | translate }}</h3>
            <p>{{ 'CONTACT.OFFICE_TEXT' | translate }}</p>
          </div>

          <div class="info-card">
            <div class="info-icon">\u{1F4E7}</div>
            <h3>{{ 'CONTACT.EMAIL_US_TITLE' | translate }}</h3>
            <p><a href="mailto:support@yprohub.com">support@yprohub.com</a><br>
            <a href="mailto:partnerships@yprohub.com">partnerships@yprohub.com</a></p>
          </div>

          <div class="info-card">
            <div class="info-icon">\u{1F4DE}</div>
            <h3>{{ 'CONTACT.CALL_TITLE' | translate }}</h3>
            <p><a href="tel:+1-555-123-4567">(555) 123-4567</a><br>
            {{ 'CONTACT.CALL_HOURS' | translate }}</p>
          </div>

          <div class="info-card">
            <div class="info-icon">\u{1F4AC}</div>
            <h3>{{ 'CONTACT.CHAT_TITLE' | translate }}</h3>
            <p>{{ 'CONTACT.CHAT_DESC' | translate }}<br>
            <button class="chat-btn">{{ 'CONTACT.CHAT_BTN' | translate }}</button></p>
          </div>

          <div class="social-section">
            <h3>{{ 'CONTACT.FOLLOW_TITLE' | translate }}</h3>
            <div class="social-links">
              <a href="#" class="social-link" title="Facebook">f</a>
              <a href="#" class="social-link" title="Twitter">\u{1D54F}</a>
              <a href="#" class="social-link" title="LinkedIn">in</a>
              <a href="#" class="social-link" title="Instagram">\u{1F4F7}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- FAQ Section -->
  <section class="faq-section">
    <div class="section-container">
      <h2>{{ 'CONTACT.FAQ_TITLE' | translate }}</h2>
      <div class="faq-grid">
        <div class="faq-item">
          <h3>{{ 'CONTACT.FAQ1_Q' | translate }}</h3>
          <p>{{ 'CONTACT.FAQ1_A' | translate }}</p>
        </div>
        <div class="faq-item">
          <h3>{{ 'CONTACT.FAQ2_Q' | translate }}</h3>
          <p>{{ 'CONTACT.FAQ2_A' | translate }}</p>
        </div>
        <div class="faq-item">
          <h3>{{ 'CONTACT.FAQ3_Q' | translate }}</h3>
          <p>{{ 'CONTACT.FAQ3_A' | translate }}</p>
        </div>
        <div class="faq-item">
          <h3>{{ 'CONTACT.FAQ4_Q' | translate }}</h3>
          <p>{{ 'CONTACT.FAQ4_A' | translate }}</p>
        </div>
      </div>
    </div>
  </section>
</div>
`, styles: ["/* src/app/features/contact/contact/contact.scss */\n.contact-wrapper {\n  color: #1f2937;\n  background: #fff;\n}\n.contact-hero {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  padding: 80px 20px;\n  text-align: center;\n}\n.hero-content h1 {\n  font-size: 48px;\n  font-weight: 700;\n  margin-bottom: 16px;\n  line-height: 1.1;\n}\n.hero-content p {\n  font-size: 18px;\n  opacity: 0.95;\n  max-width: 600px;\n  margin: 0 auto;\n}\n@media (max-width: 768px) {\n  .contact-hero {\n    padding: 48px 16px;\n  }\n  .hero-content h1 {\n    font-size: 30px;\n  }\n  .hero-content p {\n    font-size: 15px;\n  }\n}\n.section-container {\n  max-width: 1200px;\n  margin: 0 auto;\n  padding: 0 20px;\n}\n.contact-content {\n  padding: 80px 20px;\n  background: #f9fafb;\n}\n.contact-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 60px;\n}\n.contact-form-section h2,\n.contact-info-section h2 {\n  font-size: 28px;\n  font-weight: 700;\n  margin-bottom: 32px;\n}\n.contact-form-section {\n  background: white;\n  padding: 40px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n}\n.form-group {\n  margin-bottom: 24px;\n}\n.form-group label {\n  display: block;\n  font-weight: 600;\n  font-size: 14px;\n  margin-bottom: 8px;\n  color: #1f2937;\n}\n.form-group input,\n.form-group select,\n.form-group textarea {\n  width: 100%;\n  box-sizing: border-box;\n  padding: 12px 16px;\n  border: 1px solid #e5e7eb;\n  border-radius: 8px;\n  font-size: 14px;\n  font-family: inherit;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.form-group input:focus,\n.form-group select:focus,\n.form-group textarea:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.form-group textarea {\n  resize: vertical;\n  min-height: 120px;\n}\n.form-checkbox {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n  margin-bottom: 24px;\n}\n.form-checkbox input[type=checkbox] {\n  width: auto;\n  margin-top: 3px;\n  cursor: pointer;\n}\n.form-checkbox label {\n  margin-bottom: 0;\n  cursor: pointer;\n  font-weight: 500;\n}\n.error {\n  display: block;\n  color: #dc2626;\n  font-size: 13px;\n  margin-top: 4px;\n}\n.submit-btn {\n  width: 100%;\n  padding: 12px 24px;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  border: 0;\n  border-radius: 8px;\n  font-weight: 600;\n  font-size: 16px;\n  cursor: pointer;\n  transition: transform 0.2s, box-shadow 0.2s;\n}\n.submit-btn:hover:not(:disabled) {\n  transform: translateY(-2px);\n  box-shadow: 0 10px 25px rgba(102, 126, 234, 0.3);\n}\n.submit-btn:disabled {\n  opacity: 0.7;\n  cursor: not-allowed;\n}\n.success-message {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #d1fae5;\n  color: #065f46;\n  border-radius: 8px;\n  font-size: 14px;\n  border-left: 4px solid #10b981;\n}\n.error-message {\n  margin-top: 16px;\n  padding: 12px 16px;\n  background: #fee2e2;\n  color: #7f1d1d;\n  border-radius: 8px;\n  font-size: 14px;\n  border-left: 4px solid #ef4444;\n}\n.contact-info-section {\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n}\n.info-card {\n  background: white;\n  padding: 28px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  text-align: center;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.info-card:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.15);\n}\n.info-icon {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 12px;\n}\n.info-card h3 {\n  font-size: 18px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.info-card p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n.info-card a {\n  color: #667eea;\n  text-decoration: none;\n  font-weight: 500;\n  transition: color 0.2s;\n}\n.info-card a:hover {\n  color: #764ba2;\n  text-decoration: underline;\n}\n.chat-btn {\n  background: #667eea;\n  color: #fff;\n  border: 0;\n  padding: 8px 16px;\n  border-radius: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  margin-top: 8px;\n  transition: background 0.2s;\n}\n.chat-btn:hover {\n  background: #764ba2;\n}\n.social-section {\n  background: white;\n  padding: 24px;\n  border-radius: 12px;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  text-align: center;\n}\n.social-section h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 16px;\n  color: #1f2937;\n}\n.social-links {\n  display: flex;\n  justify-content: center;\n  gap: 16px;\n}\n.social-link {\n  width: 44px;\n  height: 44px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: #fff;\n  text-decoration: none;\n  border-radius: 50%;\n  font-weight: 600;\n  transition: transform 0.2s;\n}\n.social-link:hover {\n  transform: translateY(-4px);\n}\n@media (max-width: 768px) {\n  .section-container {\n    padding: 0;\n  }\n  .contact-content {\n    padding: 36px 16px;\n  }\n  .contact-grid {\n    grid-template-columns: 1fr;\n    gap: 20px;\n  }\n  .contact-form-section {\n    padding: 20px;\n  }\n  .contact-form-section h2,\n  .contact-info-section h2 {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .info-card {\n    padding: 18px 20px;\n    text-align: left;\n    display: flex;\n    align-items: flex-start;\n    gap: 16px;\n  }\n  .info-card:hover {\n    transform: none;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);\n  }\n  .info-icon {\n    font-size: 28px;\n    margin-bottom: 0;\n    flex-shrink: 0;\n  }\n  .info-card h3 {\n    font-size: 15px;\n    margin-bottom: 6px;\n  }\n  .faq-item:hover {\n    transform: none;\n    box-shadow: none;\n  }\n}\n.faq-section {\n  padding: 80px 20px;\n  background: white;\n}\n.faq-section h2 {\n  font-size: 40px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 48px;\n}\n.faq-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));\n  gap: 32px;\n}\n.faq-item {\n  background: #f9fafb;\n  padding: 28px 24px;\n  border-radius: 12px;\n  border-left: 4px solid #667eea;\n  transition: transform 0.3s, box-shadow 0.3s;\n}\n.faq-item:hover {\n  transform: translateY(-4px);\n  box-shadow: 0 8px 20px rgba(102, 126, 234, 0.1);\n}\n.faq-item h3 {\n  font-size: 16px;\n  font-weight: 600;\n  margin-bottom: 12px;\n  color: #1f2937;\n}\n.faq-item p {\n  font-size: 14px;\n  color: #6b7280;\n  line-height: 1.6;\n  margin: 0;\n}\n@media (max-width: 768px) {\n  .faq-section {\n    padding: 36px 16px;\n  }\n  .faq-section h2 {\n    font-size: 24px;\n    margin-bottom: 28px;\n  }\n  .faq-grid {\n    grid-template-columns: 1fr;\n    gap: 16px;\n  }\n  .faq-item {\n    padding: 20px 16px;\n  }\n}\n@media (max-width: 480px) {\n  .contact-hero {\n    padding: 36px 16px;\n  }\n  .hero-content h1 {\n    font-size: 26px;\n  }\n  .hero-content p {\n    font-size: 14px;\n  }\n  .contact-content {\n    padding: 28px 12px;\n  }\n  .contact-form-section {\n    padding: 16px;\n    border-radius: 8px;\n  }\n  .form-group {\n    margin-bottom: 16px;\n  }\n  .form-group input,\n  .form-group select,\n  .form-group textarea {\n    padding: 10px 12px;\n  }\n  .info-card {\n    padding: 14px 16px;\n    border-radius: 8px;\n  }\n  .social-section {\n    padding: 16px;\n    border-radius: 8px;\n  }\n  .faq-section {\n    padding: 28px 12px;\n  }\n  .faq-section h2 {\n    font-size: 22px;\n    margin-bottom: 20px;\n  }\n  .faq-item {\n    padding: 16px 14px;\n  }\n}\n/*# sourceMappingURL=contact.css.map */\n"] }]
  }], () => [{ type: FormBuilder }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/features/contact/contact/contact.ts", lineNumber: 12 });
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
//# sourceMappingURL=chunk-5GOY5IGK.js.map

