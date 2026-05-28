import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-Z4O25NSQ.js";
import {
  MatExpansionModule,
  MatExpansionPanel,
  MatExpansionPanelHeader,
  MatExpansionPanelTitle
} from "./chunk-C7KRIYYS.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-IDA4WQTH.js";
import {
  MatTooltipModule
} from "./chunk-XQNZX362.js";
import "./chunk-X2U3U5BY.js";
import {
  JobService
} from "./chunk-K4TKB7U5.js";
import "./chunk-SCUIT22V.js";
import "./chunk-IQQAMAZF.js";
import "./chunk-ZIGP4DPN.js";
import "./chunk-KOQ7ZT3J.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-WDBRP2V4.js";
import {
  MatFormField,
  MatLabel,
  MatPrefix,
  MatSuffix
} from "./chunk-XYJWITZW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-XDOJRKTW.js";
import {
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MatButton,
  MatButtonModule,
  MatIconButton,
  MatRipple,
  MatRippleModule,
  RippleState,
  _StructuralStylesLoader
} from "./chunk-KQMSNT2S.js";
import {
  _animationsDisabled
} from "./chunk-XBTNCZLM.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-Z4HON7ZA.js";
import {
  Directionality,
  MatCommonModule,
  Platform,
  _CdkPrivateStyleLoader
} from "./chunk-24VDEUMT.js";
import {
  MapViewComponent
} from "./chunk-NFAJWHCI.js";
import {
  ServiceCategoryService
} from "./chunk-JPYXDVHJ.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MinValidator,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-DLR4BDQH.js";
import {
  Auth
} from "./chunk-MJ2Z243I.js";
import "./chunk-UGJKRHBV.js";
import {
  Router,
  RouterModule
} from "./chunk-Z7MI56JG.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DatePipe,
  DecimalPipe,
  Directive,
  ElementRef,
  EventEmitter,
  InjectionToken,
  Input,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  SlicePipe,
  Subject,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  booleanAttribute,
  debounceTime,
  distinctUntilChanged,
  forwardRef,
  inject,
  numberAttribute,
  setClassMetadata,
  signal,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinterpolate1,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-STXT6R65.js";
import "./chunk-7WUTQBRG.js";

// node_modules/@angular/material/fesm2022/slider.mjs
var _c0 = ["knob"];
var _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c2 = ["trackActive"];
var _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275conditionalCreate(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  _cdr = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _slider = inject(MAT_SLIDER);
  _renderer = inject(Renderer2);
  _listenerCleanups;
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  discrete;
  /** Indicates which slider thumb this input corresponds to. */
  thumbPosition;
  /** The display value of the slider thumb. */
  valueIndicatorText;
  /** The MatRipple for this slider thumb. */
  _ripple;
  /** The slider thumb knob. */
  _knob;
  /** The slider thumb value indicator container. */
  _valueIndicatorContainer;
  /** The slider input corresponding to this slider thumb. */
  _sliderInput;
  /** The native html element of the slider input corresponding to this thumb. */
  _sliderInputEl;
  /** The RippleRef for the slider thumbs hover state. */
  _hoverRippleRef;
  /** The RippleRef for the slider thumbs focus state. */
  _focusRippleRef;
  /** The RippleRef for the slider thumbs active state. */
  _activeRippleRef;
  /** Whether the slider thumb is currently being hovered. */
  _isHovered = false;
  /** Whether the slider thumb is currently being pressed. */
  _isActive = false;
  /** Whether the value indicator tooltip is visible. */
  _isValueIndicatorVisible = false;
  /** The host native HTML input element. */
  _hostElement = inject(ElementRef).nativeElement;
  _platform = inject(Platform);
  constructor() {
  }
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input = this._sliderInputEl;
      const renderer = this._renderer;
      this._listenerCleanups = [renderer.listen(input, "pointermove", this._onPointerMove), renderer.listen(input, "pointerdown", this._onDragStart), renderer.listen(input, "pointerup", this._onDragEnd), renderer.listen(input, "pointerleave", this._onMouseLeave), renderer.listen(input, "focus", this._onFocus), renderer.listen(input, "blur", this._onBlur)];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  _onPointerMove = (event) => {
    if (this._sliderInput._isFocused) {
      return;
    }
    const rect = this._hostElement.getBoundingClientRect();
    const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
    this._isHovered = isHovered;
    if (isHovered) {
      this._showHoverRipple();
    } else {
      this._hideRipple(this._hoverRippleRef);
    }
  };
  _onMouseLeave = () => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };
  _onFocus = () => {
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
    this._hostElement.classList.add("mdc-slider__thumb--focused");
  };
  _onBlur = () => {
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._isHovered) {
      this._showHoverRipple();
    }
    this._hostElement.classList.remove("mdc-slider__thumb--focused");
  };
  _onDragStart = (event) => {
    if (event.button !== 0) {
      return;
    }
    this._isActive = true;
    this._showActiveRipple();
  };
  _onDragEnd = () => {
    this._isActive = false;
    this._hideRipple(this._activeRippleRef);
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._platform.SAFARI) {
      this._showHoverRipple();
    }
  };
  /** Handles displaying the hover ripple. */
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  /** Handles displaying the focus ripple. */
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  /** Handles displaying the active ripple. */
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  /** Whether the given rippleRef is currently fading in or visible. */
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  /** Manually launches the slider thumb ripple using the specified ripple animation config. */
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  /**
   * Fades out the given ripple.
   * Also hides the value indicator if no ripple is showing.
   */
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  /** Shows the value indicator ui. */
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  /** Hides the value indicator ui. */
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  /** Gets the value indicator container's native HTML element. */
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  /** Gets the native HTML element of the slider thumb knob. */
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static \u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderVisualThumb)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatRipple, 5);
        \u0275\u0275viewQuery(_c0, 5);
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: _MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
        \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.discrete ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", true);
      }
    },
    dependencies: [MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple{height:100%;width:100%}.mat-mdc-slider .mdc-slider__tick-marks{justify-content:start}.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive{position:absolute;left:2px}\n"]
    }]
  }], () => [], {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  _ngZone = inject(NgZone);
  _cdr = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  /** The active portion of the slider track. */
  _trackActive;
  /** The slider thumb(s). */
  _thumbs;
  /** The sliders hidden range input(s). */
  _input;
  /** The sliders hidden range input(s). */
  _inputs;
  /** Whether the slider is disabled. */
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  _disabled = false;
  /** Whether the slider displays a numeric value label upon pressing the thumb. */
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  _discrete = false;
  /** Whether the slider displays tick marks along the slider track. */
  get showTickMarks() {
    return this._showTickMarks;
  }
  set showTickMarks(value) {
    this._showTickMarks = value;
    if (this._hasViewInitialized) {
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
    }
  }
  _showTickMarks = false;
  /** The minimum value that the slider can have. */
  get min() {
    return this._min;
  }
  set min(v) {
    const min = v === void 0 || v === null || isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _min = 0;
  /**
   * Theme color of the slider. This API is supported in M2 themes only, it
   * has no effect in M3 themes. For color customization in M3, see https://material.angular.dev/components/slider/styling.
   *
   * For information on applying color variants in M3, see
   * https://material.angular.dev/guide/material-2-theming#optional-add-backwards-compatibility-styles-for-color-variants
   */
  color;
  /** Whether ripples are disabled in the slider. */
  disableRipple = false;
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.min = min;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The maximum value that the slider can have. */
  get max() {
    return this._max;
  }
  set max(v) {
    const max = v === void 0 || v === null || isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _max = 100;
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.max = max;
      input._updateThumbUIByValue();
      this._updateTrackUI(input);
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /** The values at which the thumb will snap. */
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _step = 1;
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input = this._getInput(_MatThumb.END);
    if (input) {
      const oldValue = input.value;
      input.step = this._step;
      if (this._platform.SAFARI) {
        input.value = input.value;
      }
      input._updateThumbUIByValue();
      if (oldValue !== input.value) {
        this._onValueChange(input);
      }
    }
  }
  /**
   * Function that will be used to format the value before it is displayed
   * in the thumb label. Can be used to format very large number in order
   * for them to fit into the slider thumb.
   */
  displayWith = (value) => `${value}`;
  /** Used to keep track of & render the active & inactive tick marks on the slider track. */
  _tickMarks;
  /** Whether animations have been disabled. */
  _noopAnimations = _animationsDisabled();
  /** Subscription to changes to the directionality (LTR / RTL) context for the application. */
  _dirChangeSubscription;
  /** Observer used to monitor size changes in the slider. */
  _resizeObserver;
  // Stored dimensions to avoid calling getBoundingClientRect redundantly.
  _cachedWidth;
  _cachedLeft;
  _rippleRadius = 24;
  // The value indicator tooltip text for the visual slider thumb(s).
  /** @docs-private */
  startValueIndicatorText = "";
  /** @docs-private */
  endValueIndicatorText = "";
  // Used to control the translateX of the visual slider thumb(s).
  _endThumbTransform;
  _startThumbTransform;
  _isRange = false;
  /** Whether the slider is rtl. */
  _isRtl = false;
  _hasViewInitialized = false;
  /**
   * The width of the tick mark track.
   * The tick mark track width is different from full track width
   */
  _tickMarkTrackWidth = 0;
  _hasAnimation = false;
  _resizeTimer = null;
  _platform = inject(Platform);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    if (this._dir) {
      this._dirChangeSubscription = this._dir.change.subscribe(() => this._onDirChange());
      this._isRtl = this._dir.value === "rtl";
    }
  }
  /** The radius of the native slider's knob. AFAIK there is no way to avoid hardcoding this. */
  _knobRadius = 8;
  _inputPadding;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._dirChangeSubscription.unsubscribe();
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  /** Handles updating the slider ui after a dir change. */
  _onDirChange() {
    this._isRtl = this._dir?.value === "rtl";
    this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
    this._updateTickMarkUI();
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input = this._getInput(_MatThumb.END);
    input._updateThumbUIByValue();
  }
  /** Starts observing and updating the slider if the host changes its size. */
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  /** Whether any of the thumbs are currently active. */
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input = this._getInput(thumbPosition);
    if (!input) {
      return this.min;
    }
    return input.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  /** Stores the slider dimensions. */
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  /** Sets the styles for the active portion of the track. */
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  /** Returns the translateX positioning for a tick mark based on it's index. */
  _calcTickMarkTransform(index) {
    const offset = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    const translateX = this._isRtl ? this._cachedWidth - 6 - offset : offset;
    return `translateX(${translateX}px`;
  }
  // Handlers for updating the slider ui.
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  /** Whether or not the slider thumbs overlap. */
  _thumbsOverlap = false;
  /** Returns true if the slider knobs are overlapping one another. */
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  /**
   * Updates the class names of overlapping slider thumbs so
   * that the current active thumb is styled to be on "top".
   */
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  /** Updates the UI of slider thumbs when they begin or stop overlapping. */
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  // _MatThumb styles update conditions
  //
  // 1. TranslateX, resize, or dir change
  //    - Reason: The thumb styles need to be updated according to the new translateX.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the translateX of the given thumb. */
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  // Value indicator text update conditions
  //
  // 1. Value
  //    - Reason: The value displayed needs to be updated.
  // 2. Min, max, or step
  //    - Reason: The value may have silently changed.
  /** Updates the value indicator tooltip ui for the given thumb. */
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  /** Updates all value indicator UIs in the slider. */
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  // Update Tick Mark Track Width
  //
  // 1. Min, max, or step
  //    - Reason: The maximum reachable value may have changed.
  //    - Side note: The maximum reachable value is different from the maximum value set by the
  //      user. For example, a slider with [min: 5, max: 100, step: 10] would have a maximum
  //      reachable value of 95.
  // 2. Resize
  //    - Reason: The position for the maximum reachable value needs to be recalculated.
  /** Updates the width of the tick mark track. */
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = (this._cachedWidth - 6) * percentage;
  }
  // Track active update conditions
  //
  // 1. TranslateX
  //    - Reason: The track active should line up with the new thumb position.
  // 2. Min or max
  //    - Reason #1: The 'active' percentage needs to be recalculated.
  //    - Reason #2: The value may have silently changed.
  // 3. Step
  //    - Reason: The value may have silently changed causing the thumb(s) to shift.
  // 4. Dir change
  //    - Reason: The track active will need to be updated according to the new thumb position(s).
  // 5. Resize
  //    - Reason: The total width the 'active' tracks translateX is based on has changed.
  /** Updates the scale on the active portion of the track. */
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  // Tick mark update conditions
  //
  // 1. Value
  //    - Reason: a tick mark which was once active might now be inactive or vice versa.
  // 2. Min, max, or step
  //    - Reason #1: the number of tick marks may have changed.
  //    - Reason #2: The value may have silently changed.
  /** Updates the dots along the slider track. */
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0) + 1;
    let numInactive = Math.max(Math.round((this.max - value) / step), 0) - 1;
    this._isRtl ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  /** Gets the slider thumb input of the given thumb position. */
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  /** Gets the slider thumb HTML input element of the given thumb position. */
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  /** Whether the given pointer event occurred within the bounds of the slider pointer's DOM Rect. */
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static \u0275fac = function MatSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5);
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5);
        \u0275\u0275viewQuery(MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 12,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      discrete: [2, "discrete", "discrete", booleanAttribute],
      showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER,
      useExisting: _MatSlider
    }])],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 5,
    consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275element(4, "div", 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
        \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isRange ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:bottom;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}\n'],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track{position:absolute;top:50%;transform:translateY(-50%);width:100%;pointer-events:none;height:var(--mat-slider-inactive-track-height, 4px)}.mdc-slider__track--active,.mdc-slider__track--inactive{display:flex;height:100%;position:absolute;width:100%}.mdc-slider__track--active{overflow:hidden;border-radius:var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));height:var(--mat-slider-active-track-height, 4px);top:calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px))/2)}.mdc-slider__track--active_fill{border-top-style:solid;box-sizing:border-box;height:100%;width:100%;position:relative;transform-origin:left;transition:transform 80ms ease;border-color:var(--mat-slider-active-track-color, var(--mat-sys-primary));border-top-width:var(--mat-slider-active-track-height, 4px)}.mdc-slider--disabled .mdc-slider__track--active_fill{border-color:var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface))}[dir=rtl] .mdc-slider__track--active_fill{-webkit-transform-origin:right;transform-origin:right}.mdc-slider__track--inactive{left:0;top:0;opacity:.24;background-color:var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));height:var(--mat-slider-inactive-track-height, 4px);border-radius:var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full))}.mdc-slider--disabled .mdc-slider__track--inactive{background-color:var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));opacity:.24}.mdc-slider__track--inactive::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__track--inactive::before{border-color:CanvasText}}.mdc-slider__value-indicator-container{bottom:44px;left:50%;pointer-events:none;position:absolute;transform:var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg))}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container{pointer-events:auto}.mdc-slider__value-indicator{display:flex;align-items:center;transform:scale(0);transform-origin:bottom;transition:transform 100ms cubic-bezier(0.4, 0, 1, 1);word-break:normal;background-color:var(--mat-slider-label-container-color, var(--mat-sys-primary));color:var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));width:var(--mat-slider-value-indicator-width, 28px);height:var(--mat-slider-value-indicator-height, 28px);padding:var(--mat-slider-value-indicator-padding, 0);opacity:var(--mat-slider-value-indicator-opacity, 1);border-radius:var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0)}.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator{transition:transform 100ms cubic-bezier(0, 0, 0.2, 1);transform:scale(1)}.mdc-slider__value-indicator::before{border-left:6px solid rgba(0,0,0,0);border-right:6px solid rgba(0,0,0,0);border-top:6px solid;bottom:-5px;content:"";height:0;left:50%;position:absolute;transform:translateX(-50%);width:0;display:var(--mat-slider-value-indicator-caret-display, none);border-top-color:var(--mat-slider-label-container-color, var(--mat-sys-primary))}.mdc-slider__value-indicator::after{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media(forced-colors: active){.mdc-slider__value-indicator::after{border-color:CanvasText}}.mdc-slider__value-indicator-text{text-align:center;width:var(--mat-slider-value-indicator-width, 28px);transform:var(--mat-slider-value-indicator-text-transform, rotate(45deg));font-family:var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));font-size:var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));font-weight:var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));line-height:var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));letter-spacing:var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking))}.mdc-slider__thumb{-webkit-user-select:none;user-select:none;display:flex;left:-24px;outline:none;position:absolute;height:48px;width:48px;pointer-events:none}.mdc-slider--discrete .mdc-slider__thumb{transition:transform 80ms ease}.mdc-slider--disabled .mdc-slider__thumb{pointer-events:none}.mdc-slider__thumb--top{z-index:1}.mdc-slider__thumb-knob{position:absolute;box-sizing:border-box;left:50%;top:50%;transform:translate(-50%, -50%);border-style:solid;width:var(--mat-slider-handle-width, 20px);height:var(--mat-slider-handle-height, 20px);border-width:calc(var(--mat-slider-handle-height, 20px)/2) calc(var(--mat-slider-handle-width, 20px)/2);box-shadow:var(--mat-slider-handle-elevation, var(--mat-sys-level1));background-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-handle-color, var(--mat-sys-primary));border-radius:var(--mat-slider-handle-shape, var(--mat-sys-corner-full))}.mdc-slider__thumb:hover .mdc-slider__thumb-knob{background-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-hover-handle-color, var(--mat-sys-primary))}.mdc-slider__thumb--focused .mdc-slider__thumb-knob{background-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary));border-color:var(--mat-slider-focus-handle-color, var(--mat-sys-primary))}.mdc-slider--disabled .mdc-slider__thumb-knob{background-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));border-color:var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface))}.mdc-slider__thumb--top .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob,.mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob{border:solid 1px #fff;box-sizing:content-box;border-color:var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));border-width:var(--mat-slider-with-overlap-handle-outline-width, 1px)}.mdc-slider__tick-marks{align-items:center;box-sizing:border-box;display:flex;height:100%;justify-content:space-between;padding:0 1px;position:absolute;width:100%}.mdc-slider__tick-mark--active,.mdc-slider__tick-mark--inactive{width:var(--mat-slider-with-tick-marks-container-size, 2px);height:var(--mat-slider-with-tick-marks-container-size, 2px);border-radius:var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full))}.mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant))}.mdc-slider--disabled .mdc-slider__tick-mark--inactive{opacity:var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface))}.mdc-slider__tick-mark--active{opacity:var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);background-color:var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary))}.mdc-slider__input{cursor:pointer;left:2px;margin:0;height:44px;opacity:0;position:absolute;top:2px;width:44px;box-sizing:content-box}.mdc-slider__input.mat-mdc-slider-input-no-pointer-events{pointer-events:none}.mdc-slider__input.mat-slider__right-input{left:auto;right:0}.mat-mdc-slider{display:inline-block;box-sizing:border-box;outline:none;vertical-align:middle;cursor:pointer;height:48px;margin:0 8px;position:relative;touch-action:pan-y;width:auto;min-width:112px;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-slider.mdc-slider--disabled{cursor:auto;opacity:.38}.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input{cursor:auto}.mat-mdc-slider .mdc-slider__thumb,.mat-mdc-slider .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill{transition-duration:0ms}.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill{transition-duration:80ms}.mat-mdc-slider .mat-ripple .mat-ripple-element{background-color:var(--mat-slider-ripple-color, var(--mat-sys-primary))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple{background-color:var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent))}.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple{background-color:var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent))}.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb,.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator{transition:none}.mat-mdc-slider .mat-focus-indicator::before{border-radius:50%}.mdc-slider__thumb--focused .mat-focus-indicator::before{content:""}\n']
    }]
  }], () => [], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _cdr = inject(ChangeDetectorRef);
  _slider = inject(MAT_SLIDER);
  _platform = inject(Platform);
  _listenerCleanups;
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    if (value === null) {
      value = this._getDefaultValue();
    }
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  /**
   * Handles programmatic value setting. This has been split out to
   * allow the range thumb to override it and add additional necessary logic.
   */
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  /** Event emitted when the `value` is changed. */
  valueChange = new EventEmitter();
  /** Event emitted when the slider thumb starts being dragged. */
  dragStart = new EventEmitter();
  /** Event emitted when the slider thumb stops being dragged. */
  dragEnd = new EventEmitter();
  /**
   * The current translateX in px of the slider visual thumb.
   * @docs-private
   */
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  _translateX;
  /**
   * Indicates whether this thumb is the start or end thumb.
   * @docs-private
   */
  thumbPosition = _MatThumb.END;
  /** @docs-private */
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  /** @docs-private */
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  /** The percentage of the slider that coincides with the value. */
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  /** @docs-private */
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  /** The host native HTML input element. */
  _hostElement = this._elementRef.nativeElement;
  /** The aria-valuetext string representation of the input's value. */
  _valuetext = signal("", ...ngDevMode ? [{
    debugName: "_valuetext"
  }] : []);
  /** The radius of a native html slider's knob. */
  _knobRadius = 8;
  /** The distance in px from the start of the slider track to the first tick mark. */
  _tickMarkOffset = 3;
  /** Whether user's cursor is currently in a mouse down state on the input. */
  _isActive = false;
  /** Whether the input is currently focused (either by tab or after clicking). */
  _isFocused = false;
  /** Used to relay updates to _isFocused to the slider visual thumbs. */
  _setIsFocused(v) {
    this._isFocused = v;
  }
  /**
   * Whether the initial value has been set.
   * This exists because the initial value cannot be immediately set because the min and max
   * must first be relayed from the parent MatSlider component, which can only happen later
   * in the component lifecycle.
   */
  _hasSetInitialValue = false;
  /** The stored initial value. */
  _initialValue;
  /** Defined when a user is using a form control to manage slider value & validation. */
  _formControl;
  /** Emits when the component is destroyed. */
  _destroyed = new Subject();
  /**
   * Indicates whether UI updates should be skipped.
   *
   * This flag is used to avoid flickering
   * when correcting values on pointer up/down.
   */
  _skipUIUpdate = false;
  /** Callback called when the slider input value changes. */
  _onChangeFn;
  /** Callback called when the slider input has been touched. */
  _onTouchedFn = () => {
  };
  /**
   * Whether the NgModel has been initialized.
   *
   * This flag is used to ignore ghost null calls to
   * writeValue which can break slider initialization.
   *
   * See https://github.com/angular/angular/issues/14988.
   */
  _isControlInitialized = false;
  constructor() {
    const renderer = inject(Renderer2);
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [renderer.listen(this._hostElement, "pointerdown", this._onPointerDown.bind(this)), renderer.listen(this._hostElement, "pointermove", this._onPointerMove.bind(this)), renderer.listen(this._hostElement, "pointerup", this._onPointerUp.bind(this))];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups.forEach((cleanup) => cleanup());
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  /** @docs-private */
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  /** @docs-private */
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  /**
   * Corrects the value of the slider on pointer up/down.
   *
   * Called on pointer down and up because the value is set based
   * on the inactive width instead of the active width.
   */
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  /** Corrects the value of the slider based on the pointer event's position. */
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  /**
   * Used to set the slider width to the correct
   * dimensions while the user is dragging.
   */
  _updateWidthActive() {
  }
  /**
   * Sets the slider input to disproportionate dimensions to allow for touch
   * events to be captured on touch devices.
   */
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  /**
   * Registers a callback to be invoked when the input's value changes from user input.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  /**
   * Registers a callback to be invoked when the input is blurred by the user.
   * @param fn The callback to register
   * @docs-private
   */
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  /**
   * Sets the disabled state of the slider.
   * @param isDisabled The new disabled state
   * @docs-private
   */
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static \u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: _MatSliderThumb
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        // TODO(wagnermaciel): Consider using a global event listener instead.
        // Reason: I have found a semi-consistent way to mouse up without triggering this event.
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  _cdr = inject(ChangeDetectorRef);
  /** @docs-private */
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  _sibling;
  /**
   * Returns the minimum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  /**
   * Returns the maximum translateX position allowed for this slider input's visual thumb.
   * @docs-private
   */
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl || !this._isEndThumb && !this._slider._isRtl;
  }
  /** Whether this slider corresponds to the input on the left hand side. */
  _isLeftThumb;
  /** Whether this slider corresponds to the input with greater value. */
  _isEndThumb;
  constructor() {
    super();
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  /**
   * Sets the input's value.
   * @param value The new value of the input
   * @docs-private
   */
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static \u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderRangeThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: _MatSliderRangeThumb
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [], null);
})();
var MatSliderModule = class _MatSliderModule {
  static \u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSliderModule,
    imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
    exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, MatRippleModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb]
    }]
  }], null, null);
})();

// src/app/features/available-jobs/available-jobs.ts
function AvailableJobsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31)(1, "mat-icon");
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.errorMessage);
  }
}
function AvailableJobsComponent_button_31_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function AvailableJobsComponent_button_31_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      ctx_r0.searchText = "";
      return \u0275\u0275resetView(ctx_r0.onFilterChange());
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function AvailableJobsComponent_mat_option_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r3 = ctx.$implicit;
    \u0275\u0275property("value", cat_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(cat_r3.name);
  }
}
function AvailableJobsComponent_button_57_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function AvailableJobsComponent_button_57_Template_button_click_0_listener() {
      const opt_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.selectRadius(opt_r5.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("radius-active", ctx_r0.selectedRadiusKm === opt_r5.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", opt_r5.label, " ");
  }
}
function AvailableJobsComponent_div_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "mat-icon");
    \u0275\u0275text(2, "my_location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Showing jobs within ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " of your location");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r0.activeRadiusKm, " km");
  }
}
function AvailableJobsComponent_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35)(1, "mat-icon");
    \u0275\u0275text(2, "location_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "Set your location in your profile to enable distance filtering");
    \u0275\u0275elementEnd()();
  }
}
function AvailableJobsComponent_div_60_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36);
    \u0275\u0275element(1, "mat-spinner");
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Loading available jobs...");
    \u0275\u0275elementEnd()();
  }
}
function AvailableJobsComponent_div_61_div_2_p_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " No jobs are within ");
    \u0275\u0275elementStart(2, "strong");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " of your location. Try widening the distance filter or selecting ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "All");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ". ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.activeRadiusKm, " km");
  }
}
function AvailableJobsComponent_div_61_div_2_p_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, " No open jobs match your current filters. Try adjusting your search or category. ");
    \u0275\u0275elementEnd();
  }
}
function AvailableJobsComponent_div_61_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "mat-icon", 46);
    \u0275\u0275text(2, "assignment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2");
    \u0275\u0275text(4, "No Jobs Found");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AvailableJobsComponent_div_61_div_2_p_5_Template, 8, 1, "p", 47)(6, AvailableJobsComponent_div_61_div_2_p_6_Template, 2, 0, "p", 47);
    \u0275\u0275elementStart(7, "button", 6);
    \u0275\u0275listener("click", function AvailableJobsComponent_div_61_div_2_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.resetFilters());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "restart_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10, " Clear All Filters ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r0.proximityFilterApplied);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.proximityFilterApplied);
  }
}
function AvailableJobsComponent_div_61_div_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", ctx_r0.filteredJobs.length - ctx_r0.mapMarkers.length, " without coordinates) ");
  }
}
function AvailableJobsComponent_div_61_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 48);
    \u0275\u0275text(1);
    \u0275\u0275template(2, AvailableJobsComponent_div_61_div_3_span_2_Template, 2, 1, "span", 49);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" Showing ", ctx_r0.filteredJobs.length, " of ", ctx_r0.total, " jobs ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.mapMarkers.length < ctx_r0.filteredJobs.length);
  }
}
function AvailableJobsComponent_div_61_div_5_mat_chip_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-chip", 69)(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngClass", "priority-" + job_r8.priority.toLowerCase());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.getPriorityIcon(job_r8.priority));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", job_r8.priority, " ");
  }
}
function AvailableJobsComponent_div_61_div_5_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-icon");
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", job_r8.serviceAddressCity, ", ", job_r8.serviceAddressState);
  }
}
function AvailableJobsComponent_div_61_div_5_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 67)(1, "mat-icon");
    \u0275\u0275text(2, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r8.location);
  }
}
function AvailableJobsComponent_div_61_div_5_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 70)(1, "mat-icon");
    \u0275\u0275text(2, "directions");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 71);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(5, 1, job_r8.distanceKm, "1.1-1"), " km away");
  }
}
function AvailableJobsComponent_div_61_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("mouseenter", function AvailableJobsComponent_div_61_div_5_Template_div_mouseenter_0_listener() {
      const job_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hoverJob(job_r8.id));
    })("mouseleave", function AvailableJobsComponent_div_61_div_5_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.hoverJob(null));
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53)(3, "h2", 54);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 55)(6, "mat-chip-set")(7, "mat-chip", 56);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AvailableJobsComponent_div_61_div_5_mat_chip_9_Template, 4, 3, "mat-chip", 57);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "div", 58)(11, "span", 59);
    \u0275\u0275text(12, "Budget");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "span", 60);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "div", 61)(16, "div", 62)(17, "h3");
    \u0275\u0275text(18, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 63);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "slice");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 64);
    \u0275\u0275template(23, AvailableJobsComponent_div_61_div_5_div_23_Template, 5, 2, "div", 65)(24, AvailableJobsComponent_div_61_div_5_div_24_Template, 5, 1, "div", 65)(25, AvailableJobsComponent_div_61_div_5_div_25_Template, 6, 4, "div", 66);
    \u0275\u0275elementStart(26, "div", 67)(27, "mat-icon");
    \u0275\u0275text(28, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 67)(32, "mat-icon");
    \u0275\u0275text(33, "calendar_today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "span");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "date");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(37, "div", 68)(38, "button", 6);
    \u0275\u0275listener("click", function AvailableJobsComponent_div_61_div_5_Template_button_click_38_listener() {
      const job_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.viewJobDetails(job_r8.id));
    });
    \u0275\u0275elementStart(39, "mat-icon");
    \u0275\u0275text(40, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275text(41, " View Details & Bid ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r8 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("highlighted", ctx_r0.highlightedJobId === job_r8.id);
    \u0275\u0275property("id", \u0275\u0275interpolate1("job-card-", job_r8.id));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r8.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate((job_r8.category == null ? null : job_r8.category.name) || "Uncategorized");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r8.priority);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.formatPrice(job_r8.budget));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind3(21, 15, job_r8.description, 0, 150), "", job_r8.description && job_r8.description.length > 150 ? "..." : "");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", job_r8.serviceAddressCity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !job_r8.serviceAddressCity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r8.distanceKm != null);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(job_r8.timeline);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("Posted: ", \u0275\u0275pipeBind2(36, 19, job_r8.createdAt, "MMM dd, yyyy"));
  }
}
function AvailableJobsComponent_div_61_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 74)(1, "button", 75);
    \u0275\u0275listener("click", function AvailableJobsComponent_div_61_div_6_div_1_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.prevPage());
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "span", 76);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 75);
    \u0275\u0275listener("click", function AvailableJobsComponent_div_61_div_6_div_1_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.nextPage());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page === 1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("Page ", ctx_r0.page, " of ", ctx_r0.totalPages);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r0.page >= ctx_r0.totalPages);
  }
}
function AvailableJobsComponent_div_61_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 72);
    \u0275\u0275template(1, AvailableJobsComponent_div_61_div_6_div_1_Template, 9, 4, "div", 73);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.totalPages > 1);
  }
}
function AvailableJobsComponent_div_61_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 77)(1, "app-map-view", 78);
    \u0275\u0275listener("markerClick", function AvailableJobsComponent_div_61_div_7_Template_app_map_view_markerClick_1_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.onMapMarkerClick($event));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("markers", ctx_r0.mapMarkers)("loading", ctx_r0.loading)("highlightedId", ctx_r0.highlightedJobId);
  }
}
function AvailableJobsComponent_div_61_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "div", 38);
    \u0275\u0275template(2, AvailableJobsComponent_div_61_div_2_Template, 11, 2, "div", 39)(3, AvailableJobsComponent_div_61_div_3_Template, 3, 3, "div", 40);
    \u0275\u0275elementStart(4, "div", 41);
    \u0275\u0275template(5, AvailableJobsComponent_div_61_div_5_Template, 42, 22, "div", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AvailableJobsComponent_div_61_div_6_Template, 2, 1, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AvailableJobsComponent_div_61_div_7_Template, 2, 3, "div", 44);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("map-hidden", !ctx_r0.showMap);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r0.filteredJobs.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.filteredJobs.length > 0);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r0.filteredJobs);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.total > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.showMap);
  }
}
var AvailableJobsComponent = class _AvailableJobsComponent {
  jobService;
  auth;
  router;
  cdr;
  serviceCategoryService;
  jobs = [];
  filteredJobs = [];
  loading = true;
  errorMessage = "";
  showMap = true;
  mapMarkers = [];
  highlightedJobId = null;
  destroy$ = new Subject();
  mapView;
  // Pagination
  page = 1;
  pageSize = 20;
  total = 0;
  get totalPages() {
    return Math.max(1, Math.ceil(this.total / this.pageSize));
  }
  // Filters — category & search are server-side; budget is client-side within current page
  selectedCategoryId = null;
  searchText = "";
  minBudget = null;
  maxBudget = null;
  categories = [];
  search$ = new Subject();
  // Proximity radius filter (null = all jobs)
  selectedRadiusKm = null;
  proximityFilterApplied = false;
  proLocationSet = false;
  activeRadiusKm = null;
  radiusOptions = [
    { label: "All", value: null },
    { label: "5 km", value: 5 },
    { label: "15 km", value: 15 },
    { label: "25 km", value: 25 },
    { label: "50 km", value: 50 },
    { label: "100 km", value: 100 }
  ];
  constructor(jobService, auth, router, cdr, serviceCategoryService) {
    this.jobService = jobService;
    this.auth = auth;
    this.router = router;
    this.cdr = cdr;
    this.serviceCategoryService = serviceCategoryService;
  }
  ngOnInit() {
    if (!this.auth.isAuthenticated() || this.auth.getUserType() !== "Pro") {
      this.errorMessage = "You must be logged in as a professional to view available jobs.";
      this.router.navigate(["/"]);
      return;
    }
    this.serviceCategoryService.getCategories().pipe(takeUntil(this.destroy$)).subscribe({
      next: (cats) => {
        this.categories = cats;
        this.cdr.markForCheck();
      }
    });
    this.search$.pipe(debounceTime(400), distinctUntilChanged(), takeUntil(this.destroy$)).subscribe(() => {
      this.page = 1;
      this.loadAvailableJobs();
    });
    this.loadAvailableJobs();
  }
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
    this.search$.complete();
  }
  loadAvailableJobs() {
    this.loading = true;
    this.cdr.markForCheck();
    this.jobService.getAvailableJobs(this.page, this.pageSize, this.selectedCategoryId, this.selectedRadiusKm, this.searchText.trim() || void 0).pipe(takeUntil(this.destroy$)).subscribe({
      next: (result) => {
        this.jobs = result.items;
        this.total = result.total;
        this.proximityFilterApplied = result.proximityFilterApplied;
        this.proLocationSet = result.proLocationSet;
        this.activeRadiusKm = result.radiusKm;
        this.applyBudgetFilter();
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: (error) => {
        console.error("Error loading available jobs:", error);
        this.errorMessage = "Failed to load available jobs. Please try again later.";
        this.jobs = [];
        this.total = 0;
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  toggleMap() {
    this.showMap = !this.showMap;
    this.cdr.markForCheck();
  }
  hoverJob(id) {
    this.highlightedJobId = id;
    this.cdr.markForCheck();
  }
  onMapMarkerClick(id) {
    this.highlightedJobId = id;
    this.cdr.markForCheck();
    const el = document.getElementById(`job-card-${id}`);
    el?.scrollIntoView({ behavior: "smooth", block: "nearest" });
  }
  buildMapMarkers() {
    this.mapMarkers = this.filteredJobs.filter((j) => j.latitude != null && j.longitude != null).map((j) => ({
      id: j.id,
      lat: j.latitude,
      lng: j.longitude,
      title: j.title,
      subtitle: [j.serviceAddressCity, j.serviceAddressState].filter(Boolean).join(", ") || j.location,
      type: "job"
    }));
  }
  applyBudgetFilter() {
    this.filteredJobs = this.jobs.filter((job) => {
      const v = this.parseBudgetValue(job.budget);
      if (this.minBudget != null && v < this.minBudget)
        return false;
      if (this.maxBudget != null && v > this.maxBudget)
        return false;
      return true;
    });
    this.buildMapMarkers();
  }
  parseBudgetValue(budget) {
    if (!budget)
      return 0;
    const parsed = parseFloat(budget);
    if (!isNaN(parsed))
      return parsed;
    if (typeof budget === "string" && budget.includes("-")) {
      return parseFloat(budget.split("-")[0]) || 0;
    }
    return 0;
  }
  onSearchChange() {
    this.search$.next(this.searchText);
  }
  onFilterChange() {
    this.page = 1;
    this.loadAvailableJobs();
  }
  onBudgetFilterChange() {
    this.applyBudgetFilter();
    this.cdr.markForCheck();
  }
  selectRadius(value) {
    this.selectedRadiusKm = value;
    this.page = 1;
    this.loadAvailableJobs();
  }
  resetFilters() {
    this.selectedCategoryId = null;
    this.searchText = "";
    this.minBudget = null;
    this.maxBudget = null;
    this.selectedRadiusKm = null;
    this.page = 1;
    this.loadAvailableJobs();
  }
  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadAvailableJobs();
    }
  }
  nextPage() {
    if (this.page < this.totalPages) {
      this.page++;
      this.loadAvailableJobs();
    }
  }
  formatPrice(price) {
    if (!price)
      return "Contact for price";
    if (typeof price === "string") {
      const parsed = parseFloat(price);
      return isNaN(parsed) ? price : `\u20B9${parsed.toLocaleString("en-IN")}`;
    }
    return `\u20B9${parseFloat(price).toLocaleString("en-IN")}`;
  }
  getPriorityColor(priority) {
    switch (priority?.toLowerCase()) {
      case "urgent":
        return "warn";
      case "high":
        return "#ff5722";
      case "medium":
        return "accent";
      default:
        return "#9e9e9e";
    }
  }
  getPriorityIcon(priority) {
    switch (priority?.toLowerCase()) {
      case "urgent":
        return "priority_high";
      case "high":
        return "arrow_upward";
      case "medium":
        return "remove";
      default:
        return "arrow_downward";
    }
  }
  navigateTo(path) {
    if (this.auth.isAuthenticated()) {
      this.router.navigate([path]);
    } else {
      this.router.navigate(["/auth/login"]);
    }
  }
  viewJobDetails(jobId) {
    this.router.navigate(["/job-details"], { queryParams: { id: jobId } });
  }
  goHome() {
    this.router.navigate(["/"]);
  }
  static \u0275fac = function AvailableJobsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AvailableJobsComponent)(\u0275\u0275directiveInject(JobService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(ServiceCategoryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AvailableJobsComponent, selectors: [["app-available-jobs"]], viewQuery: function AvailableJobsComponent_Query(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275viewQuery(MapViewComponent, 5);
    }
    if (rf & 2) {
      let _t;
      \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.mapView = _t.first);
    }
  }, decls: 62, vars: 16, consts: [[1, "available-jobs-wrapper"], [1, "page-header"], [1, "header-content"], [1, "subtitle"], [1, "header-actions"], ["mat-stroked-button", "", 1, "map-toggle-btn", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"], ["class", "alert alert-error", 4, "ngIf"], [1, "filters-panel", 3, "expanded"], [1, "filters-grid"], ["appearance", "outline", 1, "filter-field", "search-field"], ["matPrefix", ""], ["matInput", "", "placeholder", "Title or description...", 3, "ngModelChange", "ngModel"], ["matSuffix", "", "mat-icon-button", "", 3, "click", 4, "ngIf"], ["appearance", "outline", 1, "filter-field"], [3, "ngModelChange", "selectionChange", "ngModel"], [3, "value"], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "filter-field", "budget-field"], ["matInput", "", "type", "number", "min", "0", "placeholder", "0", 3, "ngModelChange", "ngModel"], ["matInput", "", "type", "number", "min", "0", "placeholder", "Any", 3, "ngModelChange", "ngModel"], ["mat-stroked-button", "", 1, "reset-btn", 3, "click"], [1, "radius-row"], [1, "radius-icon"], [1, "radius-label"], [1, "radius-chips"], ["mat-stroked-button", "", "class", "radius-chip", 3, "radius-active", "click", 4, "ngFor", "ngForOf"], ["class", "proximity-banner", 4, "ngIf"], ["class", "proximity-warning", 4, "ngIf"], ["class", "loading-container", 4, "ngIf"], ["class", "split-layout", 3, "map-hidden", 4, "ngIf"], [1, "alert", "alert-error"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["mat-stroked-button", "", 1, "radius-chip", 3, "click"], [1, "proximity-banner"], [1, "proximity-warning"], [1, "loading-container"], [1, "split-layout"], [1, "jobs-panel"], ["class", "empty-state", 4, "ngIf"], ["class", "jobs-count-bar", 4, "ngIf"], [1, "jobs-list"], ["class", "job-card", 3, "id", "highlighted", "mouseenter", "mouseleave", 4, "ngFor", "ngForOf"], ["class", "pagination-row", 4, "ngIf"], ["class", "map-panel", 4, "ngIf"], [1, "empty-state"], [1, "empty-icon"], [4, "ngIf"], [1, "jobs-count-bar"], ["class", "no-loc-note", 4, "ngIf"], [1, "no-loc-note"], [1, "job-card", 3, "mouseenter", "mouseleave", "id"], [1, "job-header"], [1, "job-title-section"], [1, "job-title"], [1, "job-meta"], [1, "category-chip"], [3, "ngClass", 4, "ngIf"], [1, "job-budget"], [1, "budget-label"], [1, "price"], [1, "job-content"], [1, "job-section"], [1, "description"], [1, "job-details"], ["class", "detail-item", 4, "ngIf"], ["class", "detail-item distance-item", 4, "ngIf"], [1, "detail-item"], [1, "job-actions"], [3, "ngClass"], [1, "detail-item", "distance-item"], [1, "distance-badge"], [1, "pagination-row"], ["class", "pagination-controls", 4, "ngIf"], [1, "pagination-controls"], ["mat-icon-button", "", 3, "click", "disabled"], [1, "page-info"], [1, "map-panel"], [3, "markerClick", "markers", "loading", "highlightedId"]], template: function AvailableJobsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div")(4, "h1");
      \u0275\u0275text(5, "Available Jobs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 3);
      \u0275\u0275text(7, "Find jobs posted by customers. Search by keyword, filter by category, budget & distance.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
      \u0275\u0275listener("click", function AvailableJobsComponent_Template_button_click_9_listener() {
        return ctx.toggleMap();
      });
      \u0275\u0275elementStart(10, "mat-icon");
      \u0275\u0275text(11);
      \u0275\u0275elementEnd();
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 6);
      \u0275\u0275listener("click", function AvailableJobsComponent_Template_button_click_13_listener() {
        return ctx.goHome();
      });
      \u0275\u0275elementStart(14, "mat-icon");
      \u0275\u0275text(15, "home");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Back to Home ");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275template(17, AvailableJobsComponent_div_17_Template, 5, 1, "div", 7);
      \u0275\u0275elementStart(18, "mat-expansion-panel", 8)(19, "mat-expansion-panel-header")(20, "mat-panel-title")(21, "mat-icon");
      \u0275\u0275text(22, "tune");
      \u0275\u0275elementEnd();
      \u0275\u0275text(23, " Filters & Sorting ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(24, "div", 9)(25, "mat-form-field", 10)(26, "mat-label");
      \u0275\u0275text(27, "Search jobs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(28, "mat-icon", 11);
      \u0275\u0275text(29, "search");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "input", 12);
      \u0275\u0275twoWayListener("ngModelChange", function AvailableJobsComponent_Template_input_ngModelChange_30_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.searchText, $event) || (ctx.searchText = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AvailableJobsComponent_Template_input_ngModelChange_30_listener() {
        return ctx.onSearchChange();
      });
      \u0275\u0275elementEnd();
      \u0275\u0275template(31, AvailableJobsComponent_button_31_Template, 3, 0, "button", 13);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(32, "mat-form-field", 14)(33, "mat-label");
      \u0275\u0275text(34, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "mat-select", 15);
      \u0275\u0275twoWayListener("ngModelChange", function AvailableJobsComponent_Template_mat_select_ngModelChange_35_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.selectedCategoryId, $event) || (ctx.selectedCategoryId = $event);
        return $event;
      });
      \u0275\u0275listener("selectionChange", function AvailableJobsComponent_Template_mat_select_selectionChange_35_listener() {
        return ctx.onFilterChange();
      });
      \u0275\u0275elementStart(36, "mat-option", 16);
      \u0275\u0275text(37, "All Categories");
      \u0275\u0275elementEnd();
      \u0275\u0275template(38, AvailableJobsComponent_mat_option_38_Template, 2, 2, "mat-option", 17);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(39, "mat-form-field", 18)(40, "mat-label");
      \u0275\u0275text(41, "Min Budget (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "input", 19);
      \u0275\u0275twoWayListener("ngModelChange", function AvailableJobsComponent_Template_input_ngModelChange_42_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.minBudget, $event) || (ctx.minBudget = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AvailableJobsComponent_Template_input_ngModelChange_42_listener() {
        return ctx.onBudgetFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(43, "mat-form-field", 18)(44, "mat-label");
      \u0275\u0275text(45, "Max Budget (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "input", 20);
      \u0275\u0275twoWayListener("ngModelChange", function AvailableJobsComponent_Template_input_ngModelChange_46_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.maxBudget, $event) || (ctx.maxBudget = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function AvailableJobsComponent_Template_input_ngModelChange_46_listener() {
        return ctx.onBudgetFilterChange();
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(47, "button", 21);
      \u0275\u0275listener("click", function AvailableJobsComponent_Template_button_click_47_listener() {
        return ctx.resetFilters();
      });
      \u0275\u0275elementStart(48, "mat-icon");
      \u0275\u0275text(49, "restart_alt");
      \u0275\u0275elementEnd();
      \u0275\u0275text(50, " Reset ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(51, "div", 22)(52, "mat-icon", 23);
      \u0275\u0275text(53, "my_location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(54, "span", 24);
      \u0275\u0275text(55, "Distance:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "div", 25);
      \u0275\u0275template(57, AvailableJobsComponent_button_57_Template, 2, 3, "button", 26);
      \u0275\u0275elementEnd()();
      \u0275\u0275template(58, AvailableJobsComponent_div_58_Template, 8, 1, "div", 27)(59, AvailableJobsComponent_div_59_Template, 5, 0, "div", 28);
      \u0275\u0275elementEnd();
      \u0275\u0275template(60, AvailableJobsComponent_div_60_Template, 4, 0, "div", 29)(61, AvailableJobsComponent_div_61_Template, 8, 7, "div", 30);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(11);
      \u0275\u0275textInterpolate(ctx.showMap ? "view_list" : "map");
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.showMap ? "List only" : "Show map", " ");
      \u0275\u0275advance(5);
      \u0275\u0275property("ngIf", ctx.errorMessage);
      \u0275\u0275advance();
      \u0275\u0275property("expanded", true);
      \u0275\u0275advance(12);
      \u0275\u0275twoWayProperty("ngModel", ctx.searchText);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.searchText);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.selectedCategoryId);
      \u0275\u0275advance();
      \u0275\u0275property("value", null);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngForOf", ctx.categories);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.minBudget);
      \u0275\u0275advance(4);
      \u0275\u0275twoWayProperty("ngModel", ctx.maxBudget);
      \u0275\u0275advance(11);
      \u0275\u0275property("ngForOf", ctx.radiusOptions);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.proximityFilterApplied && ctx.activeRadiusKm);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.selectedRadiusKm != null && !ctx.proLocationSet);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading);
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    RouterModule,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatIconModule,
    MatIcon,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatFormFieldModule,
    MatFormField,
    MatLabel,
    MatPrefix,
    MatSuffix,
    MatInputModule,
    MatInput,
    MatSelectModule,
    MatSelect,
    MatOption,
    MatSliderModule,
    MatChipsModule,
    MatChip,
    MatChipSet,
    MatExpansionModule,
    MatExpansionPanel,
    MatExpansionPanelHeader,
    MatExpansionPanelTitle,
    MatTooltipModule,
    FormsModule,
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    MinValidator,
    NgModel,
    MapViewComponent,
    SlicePipe,
    DecimalPipe,
    DatePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.available-jobs-wrapper[_ngcontent-%COMP%] {\n  padding: 0;\n  max-width: none;\n  margin: -2rem -1rem 0;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - var(--nav-height, 64px));\n  overflow: hidden;\n}\n.page-header[_ngcontent-%COMP%] {\n  padding: 1.5rem 2rem 1rem;\n  background: white;\n  border-bottom: 1px solid #e0e0e0;\n}\n.page-header[_ngcontent-%COMP%]   .header-content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  margin: 0 0 0.25rem;\n  color: #333;\n}\n.page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  color: #666;\n  margin: 0;\n}\n.page-header[_ngcontent-%COMP%]   .header-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.page-header[_ngcontent-%COMP%]   .map-toggle-btn[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.split-layout[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 420px 1fr;\n  flex: 1;\n  overflow: hidden;\n  min-height: 0;\n}\n.split-layout.map-hidden[_ngcontent-%COMP%] {\n  grid-template-columns: 1fr;\n}\n@media (max-width: 900px) {\n  .split-layout[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 320px;\n  }\n  .split-layout.map-hidden[_ngcontent-%COMP%] {\n    grid-template-rows: 1fr;\n  }\n}\n.jobs-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: #fafafa;\n  border-right: 1px solid #e0e0e0;\n}\n.jobs-count-bar[_ngcontent-%COMP%] {\n  padding: 0.6rem 1.25rem;\n  font-size: 0.85rem;\n  color: #666;\n  background: white;\n  border-bottom: 1px solid #f0f0f0;\n}\n.jobs-count-bar[_ngcontent-%COMP%]   .no-loc-note[_ngcontent-%COMP%] {\n  color: #f57c00;\n  margin-left: 0.25rem;\n}\n.jobs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.map-panel[_ngcontent-%COMP%] {\n  position: relative;\n  overflow: hidden;\n  background: #e8e8e8;\n}\n.map-panel[_ngcontent-%COMP%]   app-map-view[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n}\n.alert[_ngcontent-%COMP%] {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1rem;\n}\n.alert[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.alert.alert-error[_ngcontent-%COMP%] {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  min-height: 400px;\n}\n.loading-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 1.1rem;\n  color: #666;\n}\n.empty-state[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 3rem;\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state[_ngcontent-%COMP%]   .empty-icon[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  width: 5rem;\n  height: 5rem;\n  color: #999;\n  margin-bottom: 1rem;\n}\n.empty-state[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  margin: 1rem 0 0.5rem 0;\n  color: #333;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 2rem;\n}\n.jobs-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.job-card[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  border-radius: 0;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: none;\n  transition: background 0.15s, border-left 0.15s;\n  background: white;\n  overflow: hidden;\n  cursor: default;\n}\n.job-card[_ngcontent-%COMP%]:hover {\n  background: #f5f5f5;\n}\n.job-card.highlighted[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  border-left: 3px solid #667eea;\n}\n.job-header[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.job-title-section[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin: 0 0 0.5rem 0;\n  color: #333;\n  word-break: break-word;\n}\n.job-meta[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.job-meta[_ngcontent-%COMP%]   .job-category[_ngcontent-%COMP%] {\n  display: inline-block;\n  background-color: #e8f4f8;\n  color: #0277bd;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.job-budget[_ngcontent-%COMP%] {\n  text-align: right;\n  white-space: nowrap;\n}\n.job-budget[_ngcontent-%COMP%]   .budget-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.85rem;\n  color: #999;\n  margin-bottom: 0.25rem;\n}\n.job-budget[_ngcontent-%COMP%]   .price[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #667eea;\n}\n.job-content[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.5rem;\n}\n.job-section[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.job-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n}\n.job-section[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n  word-break: break-word;\n  max-height: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n.job-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid #f0f0f0;\n}\n.job-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n.job-details[_ngcontent-%COMP%]   .detail-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: #999;\n}\n.job-actions[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.job-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.job-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.filters-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.filters-grid[_ngcontent-%COMP%]   .filter-field[_ngcontent-%COMP%] {\n  min-width: 160px;\n}\n.filters-grid[_ngcontent-%COMP%]   .search-field[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 220px;\n}\n.filters-grid[_ngcontent-%COMP%]   .budget-field[_ngcontent-%COMP%] {\n  width: 140px;\n}\n.filters-grid[_ngcontent-%COMP%]   .reset-btn[_ngcontent-%COMP%] {\n  height: 56px;\n  align-self: flex-start;\n}\n.radius-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 1rem;\n  flex-wrap: wrap;\n}\n.radius-row[_ngcontent-%COMP%]   .radius-icon[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.radius-row[_ngcontent-%COMP%]   .radius-label[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #555;\n  white-space: nowrap;\n}\n.radius-row[_ngcontent-%COMP%]   .radius-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.radius-row[_ngcontent-%COMP%]   .radius-chip[_ngcontent-%COMP%] {\n  min-width: unset;\n  padding: 0 0.75rem;\n  height: 32px;\n  font-size: 0.85rem;\n  border-radius: 16px;\n  line-height: 30px;\n}\n.radius-row[_ngcontent-%COMP%]   .radius-chip.radius-active[_ngcontent-%COMP%] {\n  background-color: var(--color-primary, #3f51b5);\n  color: white;\n  border-color: var(--color-primary, #3f51b5);\n}\n.proximity-banner[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding: 0.5rem 0.75rem;\n  background: #e3f2fd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  color: #1565c0;\n}\n.proximity-banner[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.proximity-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding: 0.5rem 0.75rem;\n  background: #fff8e1;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  color: #e65100;\n}\n.proximity-warning[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.distance-item[_ngcontent-%COMP%]   .distance-badge[_ngcontent-%COMP%] {\n  color: #1565c0;\n  font-weight: 500;\n}\n@media (max-width: 600px) {\n  .available-jobs-wrapper[_ngcontent-%COMP%] {\n    margin: -1rem -0.75rem 0;\n    height: calc(100vh - var(--nav-height, 56px) - var(--bottom-nav-height, 60px));\n  }\n  .page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.75rem;\n  }\n  .page-header[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    font-size: 0.95rem;\n  }\n  .jobs-grid[_ngcontent-%COMP%] {\n    gap: 1rem;\n  }\n  .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .job-card[_ngcontent-%COMP%]   .job-content[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .job-card[_ngcontent-%COMP%]   .job-actions[_ngcontent-%COMP%] {\n    padding: 0.75rem 1rem;\n  }\n}\n/*# sourceMappingURL=available-jobs.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AvailableJobsComponent, [{
    type: Component,
    args: [{ selector: "app-available-jobs", standalone: true, imports: [
      CommonModule,
      RouterModule,
      MatProgressSpinnerModule,
      MatIconModule,
      MatButtonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatSliderModule,
      MatChipsModule,
      MatExpansionModule,
      MatTooltipModule,
      FormsModule,
      MapViewComponent
    ], template: `<div class="available-jobs-wrapper">
  <!-- Page Header -->
  <div class="page-header">
    <div class="header-content">
      <div>
        <h1>Available Jobs</h1>
        <p class="subtitle">Find jobs posted by customers. Search by keyword, filter by category, budget &amp; distance.</p>
      </div>
      <div class="header-actions">
        <button mat-stroked-button (click)="toggleMap()" class="map-toggle-btn">
          <mat-icon>{{ showMap ? 'view_list' : 'map' }}</mat-icon>
          {{ showMap ? 'List only' : 'Show map' }}
        </button>
        <button mat-raised-button color="primary" (click)="goHome()">
          <mat-icon>home</mat-icon>
          Back to Home
        </button>
      </div>
    </div>
  </div>

  <!-- Error Message -->
  <div *ngIf="errorMessage" class="alert alert-error">
    <mat-icon>error</mat-icon>
    <span>{{ errorMessage }}</span>
  </div>

  <!-- Filters Section (full width) -->
  <mat-expansion-panel class="filters-panel" [expanded]="true">
    <mat-expansion-panel-header>
      <mat-panel-title>
        <mat-icon>tune</mat-icon>
        Filters &amp; Sorting
      </mat-panel-title>
    </mat-expansion-panel-header>

    <div class="filters-grid">
      <mat-form-field appearance="outline" class="filter-field search-field">
        <mat-label>Search jobs</mat-label>
        <mat-icon matPrefix>search</mat-icon>
        <input matInput [(ngModel)]="searchText" (ngModelChange)="onSearchChange()" placeholder="Title or description...">
        <button *ngIf="searchText" matSuffix mat-icon-button (click)="searchText=''; onFilterChange()">
          <mat-icon>close</mat-icon>
        </button>
      </mat-form-field>

      <mat-form-field appearance="outline" class="filter-field">
        <mat-label>Category</mat-label>
        <mat-select [(ngModel)]="selectedCategoryId" (selectionChange)="onFilterChange()">
          <mat-option [value]="null">All Categories</mat-option>
          <mat-option *ngFor="let cat of categories" [value]="cat.id">{{ cat.name }}</mat-option>
        </mat-select>
      </mat-form-field>

      <mat-form-field appearance="outline" class="filter-field budget-field">
        <mat-label>Min Budget (\u20B9)</mat-label>
        <input matInput type="number" [(ngModel)]="minBudget" (ngModelChange)="onBudgetFilterChange()" min="0" placeholder="0">
      </mat-form-field>

      <mat-form-field appearance="outline" class="filter-field budget-field">
        <mat-label>Max Budget (\u20B9)</mat-label>
        <input matInput type="number" [(ngModel)]="maxBudget" (ngModelChange)="onBudgetFilterChange()" min="0" placeholder="Any">
      </mat-form-field>

      <button mat-stroked-button (click)="resetFilters()" class="reset-btn">
        <mat-icon>restart_alt</mat-icon>
        Reset
      </button>
    </div>

    <div class="radius-row">
      <mat-icon class="radius-icon">my_location</mat-icon>
      <span class="radius-label">Distance:</span>
      <div class="radius-chips">
        <button
          *ngFor="let opt of radiusOptions"
          mat-stroked-button
          [class.radius-active]="selectedRadiusKm === opt.value"
          (click)="selectRadius(opt.value)"
          class="radius-chip">
          {{ opt.label }}
        </button>
      </div>
    </div>

    <div *ngIf="proximityFilterApplied && activeRadiusKm" class="proximity-banner">
      <mat-icon>my_location</mat-icon>
      <span>Showing jobs within <strong>{{ activeRadiusKm }} km</strong> of your location</span>
    </div>
    <div *ngIf="selectedRadiusKm != null && !proLocationSet" class="proximity-warning">
      <mat-icon>location_off</mat-icon>
      <span>Set your location in your profile to enable distance filtering</span>
    </div>
  </mat-expansion-panel>

  <!-- Loading State -->
  <div *ngIf="loading" class="loading-container">
    <mat-spinner></mat-spinner>
    <p>Loading available jobs...</p>
  </div>

  <!-- Split layout: list + map -->
  <div *ngIf="!loading" class="split-layout" [class.map-hidden]="!showMap">
    <!-- Left: job list -->
    <div class="jobs-panel">
      <!-- Empty State -->
      <div *ngIf="filteredJobs.length === 0" class="empty-state">
        <mat-icon class="empty-icon">assignment</mat-icon>
        <h2>No Jobs Found</h2>
        <p *ngIf="proximityFilterApplied">
          No jobs are within <strong>{{ activeRadiusKm }} km</strong> of your location.
          Try widening the distance filter or selecting <strong>All</strong>.
        </p>
        <p *ngIf="!proximityFilterApplied">
          No open jobs match your current filters. Try adjusting your search or category.
        </p>
        <button mat-raised-button color="primary" (click)="resetFilters()">
          <mat-icon>restart_alt</mat-icon>
          Clear All Filters
        </button>
      </div>

      <div *ngIf="filteredJobs.length > 0" class="jobs-count-bar">
        Showing {{ filteredJobs.length }} of {{ total }} jobs
        <span *ngIf="mapMarkers.length < filteredJobs.length" class="no-loc-note">
          ({{ filteredJobs.length - mapMarkers.length }} without coordinates)
        </span>
      </div>

      <!-- Jobs List -->
      <div class="jobs-list">
        <div
          *ngFor="let job of filteredJobs"
          id="job-card-{{ job.id }}"
          class="job-card"
          [class.highlighted]="highlightedJobId === job.id"
          (mouseenter)="hoverJob(job.id)"
          (mouseleave)="hoverJob(null)"
        >
          <div class="job-header">
            <div class="job-title-section">
              <h2 class="job-title">{{ job.title }}</h2>
              <div class="job-meta">
                <mat-chip-set>
                  <mat-chip class="category-chip">{{ job.category?.name || 'Uncategorized' }}</mat-chip>
                  <mat-chip *ngIf="job.priority" [ngClass]="'priority-' + job.priority.toLowerCase()">
                    <mat-icon>{{ getPriorityIcon(job.priority) }}</mat-icon>
                    {{ job.priority }}
                  </mat-chip>
                </mat-chip-set>
              </div>
            </div>
            <div class="job-budget">
              <span class="budget-label">Budget</span>
              <span class="price">{{ formatPrice(job.budget) }}</span>
            </div>
          </div>

          <div class="job-content">
            <div class="job-section">
              <h3>Description</h3>
              <p class="description">{{ (job.description | slice:0:150) }}{{ (job.description && job.description.length > 150) ? '...' : '' }}</p>
            </div>

            <div class="job-details">
              <div class="detail-item" *ngIf="job.serviceAddressCity">
                <mat-icon>location_on</mat-icon>
                <span>{{ job.serviceAddressCity }}, {{ job.serviceAddressState }}</span>
              </div>
              <div class="detail-item" *ngIf="!job.serviceAddressCity">
                <mat-icon>location_on</mat-icon>
                <span>{{ job.location }}</span>
              </div>
              <div class="detail-item distance-item" *ngIf="job.distanceKm != null">
                <mat-icon>directions</mat-icon>
                <span class="distance-badge">{{ job.distanceKm | number:'1.1-1' }} km away</span>
              </div>
              <div class="detail-item">
                <mat-icon>schedule</mat-icon>
                <span>{{ job.timeline }}</span>
              </div>
              <div class="detail-item">
                <mat-icon>calendar_today</mat-icon>
                <span>Posted: {{ job.createdAt | date: 'MMM dd, yyyy' }}</span>
              </div>
            </div>
          </div>

          <div class="job-actions">
            <button mat-raised-button color="primary" (click)="viewJobDetails(job.id)">
              <mat-icon>visibility</mat-icon>
              View Details &amp; Bid
            </button>
          </div>
        </div>
      </div>

      <!-- Pagination -->
      <div *ngIf="total > 0" class="pagination-row">
        <div class="pagination-controls" *ngIf="totalPages > 1">
          <button mat-icon-button (click)="prevPage()" [disabled]="page === 1">
            <mat-icon>chevron_left</mat-icon>
          </button>
          <span class="page-info">Page {{ page }} of {{ totalPages }}</span>
          <button mat-icon-button (click)="nextPage()" [disabled]="page >= totalPages">
            <mat-icon>chevron_right</mat-icon>
          </button>
        </div>
      </div>
    </div>

    <!-- Right: map -->
    <div class="map-panel" *ngIf="showMap">
      <app-map-view
        [markers]="mapMarkers"
        [loading]="loading"
        [highlightedId]="highlightedJobId"
        (markerClick)="onMapMarkerClick($event)"
      ></app-map-view>
    </div>
  </div>
</div>
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/available-jobs/available-jobs.scss */\n.available-jobs-wrapper {\n  padding: 0;\n  max-width: none;\n  margin: -2rem -1rem 0;\n  display: flex;\n  flex-direction: column;\n  height: calc(100vh - var(--nav-height, 64px));\n  overflow: hidden;\n}\n.page-header {\n  padding: 1.5rem 2rem 1rem;\n  background: white;\n  border-bottom: 1px solid #e0e0e0;\n}\n.page-header .header-content {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-bottom: 0;\n}\n.page-header h1 {\n  font-size: 2rem;\n  margin: 0 0 0.25rem;\n  color: #333;\n}\n.page-header .subtitle {\n  font-size: 0.95rem;\n  color: #666;\n  margin: 0;\n}\n.page-header .header-actions {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.page-header .map-toggle-btn {\n  white-space: nowrap;\n}\n.split-layout {\n  display: grid;\n  grid-template-columns: 420px 1fr;\n  flex: 1;\n  overflow: hidden;\n  min-height: 0;\n}\n.split-layout.map-hidden {\n  grid-template-columns: 1fr;\n}\n@media (max-width: 900px) {\n  .split-layout {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 320px;\n  }\n  .split-layout.map-hidden {\n    grid-template-rows: 1fr;\n  }\n}\n.jobs-panel {\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  background: #fafafa;\n  border-right: 1px solid #e0e0e0;\n}\n.jobs-count-bar {\n  padding: 0.6rem 1.25rem;\n  font-size: 0.85rem;\n  color: #666;\n  background: white;\n  border-bottom: 1px solid #f0f0f0;\n}\n.jobs-count-bar .no-loc-note {\n  color: #f57c00;\n  margin-left: 0.25rem;\n}\n.jobs-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n}\n.map-panel {\n  position: relative;\n  overflow: hidden;\n  background: #e8e8e8;\n}\n.map-panel app-map-view {\n  display: block;\n  height: 100%;\n}\n.alert {\n  padding: 1rem;\n  margin-bottom: 1.5rem;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1rem;\n}\n.alert mat-icon {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n}\n.alert.alert-error {\n  background-color: #f8d7da;\n  color: #721c24;\n  border: 1px solid #f5c6cb;\n}\n.loading-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  padding: 3rem;\n  min-height: 400px;\n}\n.loading-container p {\n  margin-top: 1rem;\n  font-size: 1.1rem;\n  color: #666;\n}\n.empty-state {\n  text-align: center;\n  padding: 3rem;\n  min-height: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n.empty-state .empty-icon {\n  font-size: 5rem;\n  width: 5rem;\n  height: 5rem;\n  color: #999;\n  margin-bottom: 1rem;\n}\n.empty-state h2 {\n  font-size: 1.75rem;\n  margin: 1rem 0 0.5rem 0;\n  color: #333;\n}\n.empty-state p {\n  font-size: 1.1rem;\n  color: #666;\n  margin-bottom: 2rem;\n}\n.jobs-grid {\n  display: flex;\n  flex-direction: column;\n}\n.job-card {\n  display: flex;\n  flex-direction: column;\n  border-radius: 0;\n  border-bottom: 1px solid #e0e0e0;\n  box-shadow: none;\n  transition: background 0.15s, border-left 0.15s;\n  background: white;\n  overflow: hidden;\n  cursor: default;\n}\n.job-card:hover {\n  background: #f5f5f5;\n}\n.job-card.highlighted {\n  background: #e8eaf6;\n  border-left: 3px solid #667eea;\n}\n.job-header {\n  padding: 1.5rem;\n  border-bottom: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.job-title-section {\n  flex: 1;\n}\n.job-title {\n  font-size: 1.5rem;\n  margin: 0 0 0.5rem 0;\n  color: #333;\n  word-break: break-word;\n}\n.job-meta {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.5rem;\n}\n.job-meta .job-category {\n  display: inline-block;\n  background-color: #e8f4f8;\n  color: #0277bd;\n  padding: 0.25rem 0.75rem;\n  border-radius: 12px;\n  font-size: 0.85rem;\n  font-weight: 500;\n}\n.job-budget {\n  text-align: right;\n  white-space: nowrap;\n}\n.job-budget .budget-label {\n  display: block;\n  font-size: 0.85rem;\n  color: #999;\n  margin-bottom: 0.25rem;\n}\n.job-budget .price {\n  display: block;\n  font-size: 1.3rem;\n  font-weight: 600;\n  color: #667eea;\n}\n.job-content {\n  flex: 1;\n  padding: 1.5rem;\n}\n.job-section {\n  margin-bottom: 1.5rem;\n}\n.job-section h3 {\n  font-size: 1rem;\n  font-weight: 600;\n  color: #333;\n  margin: 0 0 0.5rem 0;\n}\n.job-section .description {\n  margin: 0;\n  color: #666;\n  line-height: 1.6;\n  word-break: break-word;\n  max-height: 100px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  line-clamp: 3;\n  -webkit-box-orient: vertical;\n}\n.job-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding-top: 1rem;\n  border-top: 1px solid #f0f0f0;\n}\n.job-details .detail-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #666;\n  font-size: 0.9rem;\n}\n.job-details .detail-item mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: #999;\n}\n.job-actions {\n  padding: 1rem 1.5rem;\n  border-top: 1px solid #f0f0f0;\n  display: flex;\n  justify-content: center;\n  gap: 0.5rem;\n}\n.job-actions button {\n  flex: 1;\n}\n.job-actions button mat-icon {\n  margin-right: 0.5rem;\n}\n.filters-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  align-items: flex-start;\n}\n.filters-grid .filter-field {\n  min-width: 160px;\n}\n.filters-grid .search-field {\n  flex: 2;\n  min-width: 220px;\n}\n.filters-grid .budget-field {\n  width: 140px;\n}\n.filters-grid .reset-btn {\n  height: 56px;\n  align-self: flex-start;\n}\n.radius-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 1rem;\n  flex-wrap: wrap;\n}\n.radius-row .radius-icon {\n  color: #666;\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.radius-row .radius-label {\n  font-size: 0.9rem;\n  color: #555;\n  white-space: nowrap;\n}\n.radius-row .radius-chips {\n  display: flex;\n  gap: 0.5rem;\n  flex-wrap: wrap;\n}\n.radius-row .radius-chip {\n  min-width: unset;\n  padding: 0 0.75rem;\n  height: 32px;\n  font-size: 0.85rem;\n  border-radius: 16px;\n  line-height: 30px;\n}\n.radius-row .radius-chip.radius-active {\n  background-color: var(--color-primary, #3f51b5);\n  color: white;\n  border-color: var(--color-primary, #3f51b5);\n}\n.proximity-banner {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding: 0.5rem 0.75rem;\n  background: #e3f2fd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  color: #1565c0;\n}\n.proximity-banner mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.proximity-warning {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 1rem;\n  padding: 0.5rem 0.75rem;\n  background: #fff8e1;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  color: #e65100;\n}\n.proximity-warning mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.distance-item .distance-badge {\n  color: #1565c0;\n  font-weight: 500;\n}\n@media (max-width: 600px) {\n  .available-jobs-wrapper {\n    margin: -1rem -0.75rem 0;\n    height: calc(100vh - var(--nav-height, 56px) - var(--bottom-nav-height, 60px));\n  }\n  .page-header h1 {\n    font-size: 1.75rem;\n  }\n  .page-header .subtitle {\n    font-size: 0.95rem;\n  }\n  .jobs-grid {\n    gap: 1rem;\n  }\n  .job-card .job-header {\n    padding: 1rem;\n    flex-direction: column;\n  }\n  .job-card .job-content {\n    padding: 1rem;\n  }\n  .job-card .job-actions {\n    padding: 0.75rem 1rem;\n  }\n}\n/*# sourceMappingURL=available-jobs.css.map */\n'] }]
  }], () => [{ type: JobService }, { type: Auth }, { type: Router }, { type: ChangeDetectorRef }, { type: ServiceCategoryService }], { mapView: [{
    type: ViewChild,
    args: [MapViewComponent]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AvailableJobsComponent, { className: "AvailableJobsComponent", filePath: "src/app/features/available-jobs/available-jobs.ts", lineNumber: 45 });
})();
export {
  AvailableJobsComponent
};
//# sourceMappingURL=chunk-AGF7KNQM.js.map

