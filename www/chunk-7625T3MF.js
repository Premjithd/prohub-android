import {
  ProUsersService
} from "./chunk-HL2HZ67P.js";
import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-Y5KOLZA5.js";
import {
  CdkDialogContainer,
  Dialog,
  DialogModule,
  MatDialog,
  MatDialogActions,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-KW3BHJG2.js";
import {
  ServiceCategoryService
} from "./chunk-ITBAOVBM.js";
import {
  PayoutService
} from "./chunk-I7JHY77P.js";
import {
  ServiceAreaService
} from "./chunk-ESOBEPC2.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-4PQFBWS5.js";
import {
  CdkPortalOutlet,
  PortalModule,
  createBlockScrollStrategy,
  createGlobalPositionStrategy
} from "./chunk-VXJRTODK.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-SMZXZX62.js";
import {
  MatFormField,
  MatLabel
} from "./chunk-ISI3VGLP.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-HKDS7TNR.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-OO5WGF54.js";
import {
  Breakpoints,
  _animationsDisabled
} from "./chunk-CCCBJG6P.js";
import {
  BannerService
} from "./chunk-DXFSZNM4.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-RUKCNJZP.js";
import {
  BreakpointObserver,
  ESCAPE,
  MatCommonModule,
  hasModifierKey
} from "./chunk-LW3HGLL7.js";
import {
  CheckboxControlValueAccessor,
  DefaultValueAccessor,
  FormsModule,
  MaxLengthValidator,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NgSelectOption,
  NumberValueAccessor,
  SelectControlValueAccessor,
  ɵNgNoValidate,
  ɵNgSelectMultipleOption
} from "./chunk-WDC3QMAT.js";
import {
  TeamService
} from "./chunk-HCVU7FON.js";
import {
  SettingsService
} from "./chunk-OKQBR4QR.js";
import {
  Auth
} from "./chunk-SNFMA3C7.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-BALEJLRX.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  EventEmitter,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  LowerCasePipe,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  Subject,
  ViewEncapsulation,
  distinctUntilChanged,
  filter,
  firstValueFrom,
  inject,
  map,
  merge,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-O3FI6JPK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/@angular/material/fesm2022/bottom-sheet.mjs
function MatBottomSheetContainer_ng_template_0_Template(rf, ctx) {
}
var ENTER_ANIMATION = "_mat-bottom-sheet-enter";
var EXIT_ANIMATION = "_mat-bottom-sheet-exit";
var MatBottomSheetContainer = class _MatBottomSheetContainer extends CdkDialogContainer {
  _breakpointSubscription;
  _animationsDisabled = _animationsDisabled();
  /** The state of the bottom sheet animations. */
  _animationState = "void";
  /** Emits whenever the state of the animation changes. */
  _animationStateChanged = new EventEmitter();
  /** Whether the component has been destroyed. */
  _destroyed;
  constructor() {
    super();
    const breakpointObserver = inject(BreakpointObserver);
    this._breakpointSubscription = breakpointObserver.observe([Breakpoints.Medium, Breakpoints.Large, Breakpoints.XLarge]).subscribe(() => {
      const classList = this._elementRef.nativeElement.classList;
      classList.toggle("mat-bottom-sheet-container-medium", breakpointObserver.isMatched(Breakpoints.Medium));
      classList.toggle("mat-bottom-sheet-container-large", breakpointObserver.isMatched(Breakpoints.Large));
      classList.toggle("mat-bottom-sheet-container-xlarge", breakpointObserver.isMatched(Breakpoints.XLarge));
    });
  }
  /** Begin animation of bottom sheet entrance into view. */
  enter() {
    if (!this._destroyed) {
      this._animationState = "visible";
      this._changeDetectorRef.markForCheck();
      this._changeDetectorRef.detectChanges();
      if (this._animationsDisabled) {
        this._simulateAnimation(ENTER_ANIMATION);
      }
    }
  }
  /** Begin animation of the bottom sheet exiting from view. */
  exit() {
    if (!this._destroyed) {
      this._elementRef.nativeElement.setAttribute("mat-exit", "");
      this._animationState = "hidden";
      this._changeDetectorRef.markForCheck();
      if (this._animationsDisabled) {
        this._simulateAnimation(EXIT_ANIMATION);
      }
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._breakpointSubscription.unsubscribe();
    this._destroyed = true;
  }
  _simulateAnimation(name) {
    this._ngZone.run(() => {
      this._handleAnimationEvent(true, name);
      setTimeout(() => this._handleAnimationEvent(false, name));
    });
  }
  _trapFocus() {
    super._trapFocus({
      preventScroll: true
    });
  }
  _handleAnimationEvent(isStart, animationName) {
    const isEnter = animationName === ENTER_ANIMATION;
    const isExit = animationName === EXIT_ANIMATION;
    if (isEnter || isExit) {
      this._animationStateChanged.emit({
        toState: isEnter ? "visible" : "hidden",
        phase: isStart ? "start" : "done"
      });
    }
  }
  static \u0275fac = function MatBottomSheetContainer_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetContainer)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatBottomSheetContainer,
    selectors: [["mat-bottom-sheet-container"]],
    hostAttrs: ["tabindex", "-1", 1, "mat-bottom-sheet-container"],
    hostVars: 9,
    hostBindings: function MatBottomSheetContainer_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("animationstart", function MatBottomSheetContainer_animationstart_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(true, $event.animationName);
        })("animationend", function MatBottomSheetContainer_animationend_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName);
        })("animationcancel", function MatBottomSheetContainer_animationcancel_HostBindingHandler($event) {
          return ctx._handleAnimationEvent(false, $event.animationName);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("role", ctx._config.role)("aria-modal", ctx._config.ariaModal)("aria-label", ctx._config.ariaLabel);
        \u0275\u0275classProp("mat-bottom-sheet-container-animations-enabled", !ctx._animationsDisabled)("mat-bottom-sheet-container-enter", ctx._animationState === "visible")("mat-bottom-sheet-container-exit", ctx._animationState === "hidden");
      }
    },
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkPortalOutlet", ""]],
    template: function MatBottomSheetContainer_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275template(0, MatBottomSheetContainer_ng_template_0_Template, 0, 0, "ng-template", 0);
      }
    },
    dependencies: [CdkPortalOutlet],
    styles: ["@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetContainer, [{
    type: Component,
    args: [{
      selector: "mat-bottom-sheet-container",
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      host: {
        "class": "mat-bottom-sheet-container",
        "[class.mat-bottom-sheet-container-animations-enabled]": "!_animationsDisabled",
        "[class.mat-bottom-sheet-container-enter]": '_animationState === "visible"',
        "[class.mat-bottom-sheet-container-exit]": '_animationState === "hidden"',
        "tabindex": "-1",
        "[attr.role]": "_config.role",
        "[attr.aria-modal]": "_config.ariaModal",
        "[attr.aria-label]": "_config.ariaLabel",
        "(animationstart)": "_handleAnimationEvent(true, $event.animationName)",
        "(animationend)": "_handleAnimationEvent(false, $event.animationName)",
        "(animationcancel)": "_handleAnimationEvent(false, $event.animationName)"
      },
      imports: [CdkPortalOutlet],
      template: "<ng-template cdkPortalOutlet></ng-template>\r\n",
      styles: ["@keyframes _mat-bottom-sheet-enter{from{transform:translateY(100%)}to{transform:none}}@keyframes _mat-bottom-sheet-exit{from{transform:none}to{transform:translateY(100%)}}.mat-bottom-sheet-container{box-shadow:0px 8px 10px -5px rgba(0, 0, 0, 0.2), 0px 16px 24px 2px rgba(0, 0, 0, 0.14), 0px 6px 30px 5px rgba(0, 0, 0, 0.12);padding:8px 16px;min-width:100vw;box-sizing:border-box;display:block;outline:0;max-height:80vh;overflow:auto;position:relative;background:var(--mat-bottom-sheet-container-background-color, var(--mat-sys-surface-container-low));color:var(--mat-bottom-sheet-container-text-color, var(--mat-sys-on-surface));font-family:var(--mat-bottom-sheet-container-text-font, var(--mat-sys-body-large-font));font-size:var(--mat-bottom-sheet-container-text-size, var(--mat-sys-body-large-size));line-height:var(--mat-bottom-sheet-container-text-line-height, var(--mat-sys-body-large-line-height));font-weight:var(--mat-bottom-sheet-container-text-weight, var(--mat-sys-body-large-weight));letter-spacing:var(--mat-bottom-sheet-container-text-tracking, var(--mat-sys-body-large-tracking))}@media(forced-colors: active){.mat-bottom-sheet-container{outline:1px solid}}.mat-bottom-sheet-container-animations-enabled{transform:translateY(100%)}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-enter{animation:_mat-bottom-sheet-enter 195ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-bottom-sheet-container-animations-enabled.mat-bottom-sheet-container-exit{animation:_mat-bottom-sheet-exit 375ms cubic-bezier(0.4, 0, 1, 1) backwards}.mat-bottom-sheet-container-xlarge,.mat-bottom-sheet-container-large,.mat-bottom-sheet-container-medium{border-top-left-radius:var(--mat-bottom-sheet-container-shape, 28px);border-top-right-radius:var(--mat-bottom-sheet-container-shape, 28px)}.mat-bottom-sheet-container-medium{min-width:384px;max-width:calc(100vw - 128px)}.mat-bottom-sheet-container-large{min-width:512px;max-width:calc(100vw - 256px)}.mat-bottom-sheet-container-xlarge{min-width:576px;max-width:calc(100vw - 384px)}\n"]
    }]
  }], () => [], null);
})();
var MAT_BOTTOM_SHEET_DATA = new InjectionToken("MatBottomSheetData");
var MatBottomSheetConfig = class {
  /** The view container to place the overlay for the bottom sheet into. */
  viewContainerRef;
  /** Extra CSS classes to be added to the bottom sheet container. */
  panelClass;
  /** Text layout direction for the bottom sheet. */
  direction;
  /** Data being injected into the child component. */
  data = null;
  /** Whether the bottom sheet has a backdrop. */
  hasBackdrop = true;
  /** Custom class for the backdrop. */
  backdropClass;
  /** Whether the user can use escape or clicking outside to close the bottom sheet. */
  disableClose = false;
  /** Aria label to assign to the bottom sheet element. */
  ariaLabel = null;
  /**
   * Whether this is a modal dialog. Used to set the `aria-modal` attribute. Off by default,
   * because it can interfere with other overlay-based components (e.g. `mat-select`) and because
   * it is redundant since the dialog marks all outside content as `aria-hidden` anyway.
   */
  ariaModal = false;
  /**
   * Whether the bottom sheet should close when the user goes backwards/forwards in history.
   * Note that this usually doesn't include clicking on links (unless the user is using
   * the `HashLocationStrategy`).
   */
  closeOnNavigation = true;
  /**
   * Where the bottom sheet should focus on open.
   * @breaking-change 14.0.0 Remove boolean option from autoFocus. Use string or
   * AutoFocusTarget instead.
   */
  autoFocus = "first-tabbable";
  /**
   * Whether the bottom sheet should restore focus to the
   * previously-focused element, after it's closed.
   */
  restoreFocus = true;
  /** Scroll strategy to be used for the bottom sheet. */
  scrollStrategy;
  /** Height for the bottom sheet. */
  height = "";
  /** Minimum height for the bottom sheet. If a number is provided, assumes pixel units. */
  minHeight;
  /** Maximum height for the bottom sheet. If a number is provided, assumes pixel units. */
  maxHeight;
};
var MatBottomSheetRef = class {
  _ref;
  /** Instance of the component making up the content of the bottom sheet. */
  get instance() {
    return this._ref.componentInstance;
  }
  /**
   * `ComponentRef` of the component opened into the bottom sheet. Will be
   * null when the bottom sheet is opened using a `TemplateRef`.
   */
  get componentRef() {
    return this._ref.componentRef;
  }
  /**
   * Instance of the component into which the bottom sheet content is projected.
   * @docs-private
   */
  containerInstance;
  /** Whether the user is allowed to close the bottom sheet. */
  disableClose;
  /** Subject for notifying the user that the bottom sheet has opened and appeared. */
  _afterOpened = new Subject();
  /** Result to be passed down to the `afterDismissed` stream. */
  _result;
  /** Handle to the timeout that's running as a fallback in case the exit animation doesn't fire. */
  _closeFallbackTimeout;
  constructor(_ref, config, containerInstance) {
    this._ref = _ref;
    this.containerInstance = containerInstance;
    this.disableClose = config.disableClose;
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "visible"), take(1)).subscribe(() => {
      this._afterOpened.next();
      this._afterOpened.complete();
    });
    containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "done" && event.toState === "hidden"), take(1)).subscribe(() => {
      clearTimeout(this._closeFallbackTimeout);
      this._ref.close(this._result);
    });
    _ref.overlayRef.detachments().subscribe(() => {
      this._ref.close(this._result);
    });
    merge(this.backdropClick(), this.keydownEvents().pipe(filter((event) => event.keyCode === ESCAPE))).subscribe((event) => {
      if (!this.disableClose && (event.type !== "keydown" || !hasModifierKey(event))) {
        event.preventDefault();
        this.dismiss();
      }
    });
  }
  /**
   * Dismisses the bottom sheet.
   * @param result Data to be passed back to the bottom sheet opener.
   */
  dismiss(result) {
    if (!this.containerInstance) {
      return;
    }
    this.containerInstance._animationStateChanged.pipe(filter((event) => event.phase === "start"), take(1)).subscribe(() => {
      this._closeFallbackTimeout = setTimeout(() => this._ref.close(this._result), 500);
      this._ref.overlayRef.detachBackdrop();
    });
    this._result = result;
    this.containerInstance.exit();
    this.containerInstance = null;
  }
  /** Gets an observable that is notified when the bottom sheet is finished closing. */
  afterDismissed() {
    return this._ref.closed;
  }
  /** Gets an observable that is notified when the bottom sheet has opened and appeared. */
  afterOpened() {
    return this._afterOpened;
  }
  /**
   * Gets an observable that emits when the overlay's backdrop has been clicked.
   */
  backdropClick() {
    return this._ref.backdropClick;
  }
  /**
   * Gets an observable that emits when keydown events are targeted on the overlay.
   */
  keydownEvents() {
    return this._ref.keydownEvents;
  }
};
var MAT_BOTTOM_SHEET_DEFAULT_OPTIONS = new InjectionToken("mat-bottom-sheet-default-options");
var MatBottomSheet = class _MatBottomSheet {
  _injector = inject(Injector);
  _parentBottomSheet = inject(_MatBottomSheet, {
    optional: true,
    skipSelf: true
  });
  _animationsDisabled = _animationsDisabled();
  _defaultOptions = inject(MAT_BOTTOM_SHEET_DEFAULT_OPTIONS, {
    optional: true
  });
  _bottomSheetRefAtThisLevel = null;
  _dialog = inject(Dialog);
  /** Reference to the currently opened bottom sheet. */
  get _openedBottomSheetRef() {
    const parent = this._parentBottomSheet;
    return parent ? parent._openedBottomSheetRef : this._bottomSheetRefAtThisLevel;
  }
  set _openedBottomSheetRef(value) {
    if (this._parentBottomSheet) {
      this._parentBottomSheet._openedBottomSheetRef = value;
    } else {
      this._bottomSheetRefAtThisLevel = value;
    }
  }
  constructor() {
  }
  open(componentOrTemplateRef, config) {
    const _config = __spreadValues(__spreadValues({}, this._defaultOptions || new MatBottomSheetConfig()), config);
    let ref;
    this._dialog.open(componentOrTemplateRef, __spreadProps(__spreadValues({}, _config), {
      // Disable closing since we need to sync it up to the animation ourselves.
      disableClose: true,
      // Disable closing on detachments so that we can sync up the animation.
      closeOnOverlayDetachments: false,
      maxWidth: "100%",
      container: MatBottomSheetContainer,
      scrollStrategy: _config.scrollStrategy || createBlockScrollStrategy(this._injector),
      positionStrategy: createGlobalPositionStrategy(this._injector).centerHorizontally().bottom("0"),
      disableAnimations: this._animationsDisabled,
      templateContext: () => ({
        bottomSheetRef: ref
      }),
      providers: (cdkRef, _cdkConfig, container) => {
        ref = new MatBottomSheetRef(cdkRef, _config, container);
        return [{
          provide: MatBottomSheetRef,
          useValue: ref
        }, {
          provide: MAT_BOTTOM_SHEET_DATA,
          useValue: _config.data
        }];
      }
    }));
    ref.afterDismissed().subscribe(() => {
      if (this._openedBottomSheetRef === ref) {
        this._openedBottomSheetRef = null;
      }
    });
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.afterDismissed().subscribe(() => ref.containerInstance?.enter());
      this._openedBottomSheetRef.dismiss();
    } else {
      ref.containerInstance.enter();
    }
    this._openedBottomSheetRef = ref;
    return ref;
  }
  /**
   * Dismisses the currently-visible bottom sheet.
   * @param result Data to pass to the bottom sheet instance.
   */
  dismiss(result) {
    if (this._openedBottomSheetRef) {
      this._openedBottomSheetRef.dismiss(result);
    }
  }
  ngOnDestroy() {
    if (this._bottomSheetRefAtThisLevel) {
      this._bottomSheetRefAtThisLevel.dismiss();
    }
  }
  static \u0275fac = function MatBottomSheet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheet)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _MatBottomSheet,
    factory: _MatBottomSheet.\u0275fac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheet, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();
var MatBottomSheetModule = class _MatBottomSheetModule {
  static \u0275fac = function MatBottomSheetModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatBottomSheetModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatBottomSheetModule,
    imports: [DialogModule, MatCommonModule, PortalModule, MatBottomSheetContainer],
    exports: [MatBottomSheetContainer, MatCommonModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    providers: [MatBottomSheet],
    imports: [DialogModule, MatCommonModule, PortalModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatBottomSheetModule, [{
    type: NgModule,
    args: [{
      imports: [DialogModule, MatCommonModule, PortalModule, MatBottomSheetContainer],
      exports: [MatBottomSheetContainer, MatCommonModule],
      providers: [MatBottomSheet]
    }]
  }], null, null);
})();

// src/app/core/services/admin-users.service.ts
var AdminUsersService = class _AdminUsersService {
  http;
  apiUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  // Search for users by email or name
  searchUsers(query) {
    return this.http.get(`${this.apiUrl}/admin/users/search`, {
      params: { query }
    });
  }
  // Search for pros by email or name
  searchPros(query) {
    return this.http.get(`${this.apiUrl}/admin/pros/search`, {
      params: { query }
    });
  }
  // Get user details
  getUserDetails(userId) {
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }
  // Get pro details
  getProDetails(proId) {
    return this.http.get(`${this.apiUrl}/pros/${proId}`);
  }
  // Get user's job history
  getUserJobs(userId) {
    return this.http.get(`${this.apiUrl}/jobs/users/${userId}/jobs`);
  }
  // Get pro's job history
  getProJobs(proId) {
    return this.http.get(`${this.apiUrl}/jobs/pros/${proId}/jobs`);
  }
  // Get user's messages/conversations
  getUserConversations(userId) {
    return this.http.get(`${this.apiUrl}/messages/conversations`, {
      params: { userId: userId.toString(), userType: "User" }
    });
  }
  // Get pro's messages/conversations
  getProConversations(proId) {
    return this.http.get(`${this.apiUrl}/messages/conversations`, {
      params: { userId: proId.toString(), userType: "Pro" }
    });
  }
  // Get messages for a specific conversation
  getMessages(userId1, userType1, userId2, userType2) {
    return this.http.get(`${this.apiUrl}/messages`, {
      params: {
        userId1: userId1.toString(),
        userType1,
        userId2: userId2.toString(),
        userType2
      }
    });
  }
  // Impersonate as a user
  impersonateUser(userId, userType) {
    return this.http.post(`${this.apiUrl}/admin/impersonate`, {
      targetUserId: userId,
      targetUserType: userType
    });
  }
  // Invite a new admin
  inviteAdmin(email) {
    console.log("inviteAdmin service called with email:", email);
    const body = { email };
    console.log("Sending request body:", body);
    return this.http.post(`${this.apiUrl}/admin/invite`, body);
  }
  // Get admin invitations
  getAdminInvitations(pendingOnly = true) {
    return this.http.get(`${this.apiUrl}/admin/invitations`, {
      params: { pendingOnly: pendingOnly.toString() }
    });
  }
  // Resend admin invitation
  resendAdminInvitation(invitationId) {
    return this.http.post(`${this.apiUrl}/admin/invitations/${invitationId}/resend`, {});
  }
  createUser(payload) {
    return this.http.post(`${this.apiUrl}/users`, payload);
  }
  createPro(payload) {
    return this.http.post(`${this.apiUrl}/pros`, payload);
  }
  getPendingGeocodePros() {
    return this.http.get(`${this.apiUrl}/admin/pros/geocode-backfill/pending`);
  }
  getPendingGeocodeUsers() {
    return this.http.get(`${this.apiUrl}/admin/users/geocode-backfill/pending`);
  }
  geocodeBackfillPros() {
    return this.http.post(`${this.apiUrl}/admin/pros/geocode-backfill`, {});
  }
  geocodeBackfillUsers() {
    return this.http.post(`${this.apiUrl}/admin/users/geocode-backfill`, {});
  }
  updateProServiceRadius(proId, serviceRadiusKm) {
    return this.http.patch(`${this.apiUrl}/admin/pros/${proId}/service-radius`, { serviceRadiusKm });
  }
  getDisputes() {
    return this.http.get(`${this.apiUrl}/admin/disputes`);
  }
  // History of resolved disputes, with optional date range (ISO) and free-text search.
  getResolvedDisputes(from, to, search) {
    const params = {};
    if (from)
      params["from"] = from;
    if (to)
      params["to"] = to;
    if (search)
      params["search"] = search;
    return this.http.get(`${this.apiUrl}/admin/disputes/resolved`, { params });
  }
  // Dashboard: counts of users/pros/businesses joined in a time frame (ISO timestamps).
  getRegistrationMetrics(from, to) {
    const params = {};
    if (from)
      params["from"] = from;
    if (to)
      params["to"] = to;
    return this.http.get(`${this.apiUrl}/admin/metrics/registrations`, { params });
  }
  // Dashboard: job counts per category for a selected region/date range.
  getJobsByCategory(filter2 = {}) {
    const params = {};
    if (filter2.country)
      params["country"] = filter2.country;
    if (filter2.state)
      params["state"] = filter2.state;
    if (filter2.district)
      params["district"] = filter2.district;
    if (filter2.from)
      params["from"] = filter2.from;
    if (filter2.to)
      params["to"] = filter2.to;
    return this.http.get(`${this.apiUrl}/admin/metrics/jobs-by-category`, { params });
  }
  getAdminPayments(status, userId, proId) {
    const parts = [];
    if (status)
      parts.push(`status=${status}`);
    if (userId)
      parts.push(`userId=${userId}`);
    if (proId)
      parts.push(`proId=${proId}`);
    const qs = parts.length ? `?${parts.join("&")}` : "";
    return this.http.get(`${this.apiUrl}/payments/admin${qs}`);
  }
  refundPayment(paymentId, reason) {
    return this.http.post(`${this.apiUrl}/payments/${paymentId}/refund`, { reason });
  }
  resolveDispute(jobId, resolution, notes) {
    return this.http.post(`${this.apiUrl}/admin/jobs/${jobId}/completion/resolve`, { resolution, notes });
  }
  getCommissionConfig() {
    return this.http.get(`${this.apiUrl}/admin/commission-config`);
  }
  updateCommissionConfig(config) {
    return this.http.put(`${this.apiUrl}/admin/commission-config`, config);
  }
  static \u0275fac = function AdminUsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AdminUsersService, factory: _AdminUsersService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/features/admin-users/admin-users.ts
function AdminUsersComponent_div_15_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function AdminUsersComponent_div_15_button_1_Template_button_click_0_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setView(item_r2.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("active", ctx_r2.activeView === item_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r2.label, " ");
  }
}
function AdminUsersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275template(1, AdminUsersComponent_div_15_button_1_Template, 4, 4, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.navItems);
  }
}
function AdminUsersComponent_div_16_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.disputes.length);
  }
}
function AdminUsersComponent_div_16_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading disputes...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_16_ng_container_11_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No open disputes. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38)(1, "strong");
    \u0275\u0275text(2, "Pro notes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", d_r5.completionNotes);
  }
}
function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39)(1, "mat-icon");
    \u0275\u0275text(2, "currency_rupee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Payment amount:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(6, 1, d_r5.paymentAmount, "1.2-2"), " ");
  }
}
function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "p", 41)(2, "mat-icon");
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " This will refund ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " to the consumer and reopen the job for rebidding. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 42)(10, "mat-label");
    \u0275\u0275text(11, "Reason for refund");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 43);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_22_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r2.refundNotes, $event) || (ctx_r2.refundNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 44)(14, "button", 45);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_22_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.refundConfirmJobId = null);
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 46);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_22_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const d_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.confirmRefund(d_r5.jobId));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 6, d_r5.paymentAmount, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.refundNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r5.jobId);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r5.jobId || !ctx_r2.refundNotes.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.resolvingDisputeId === d_r5.jobId ? "hourglass_empty" : "currency_rupee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.resolvingDisputeId === d_r5.jobId ? "Processing..." : "Confirm Refund", " ");
  }
}
function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 40)(1, "p", 47)(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " This marks the job ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6, "Completed in the pro's favour");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " and releases payment. Add a comment explaining the decision. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "mat-form-field", 42)(9, "mat-label");
    \u0275\u0275text(10, "Resolution comment (required)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "textarea", 48);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_23_Template_textarea_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(5);
      \u0275\u0275twoWayBindingSet(ctx_r2.completeNotes, $event) || (ctx_r2.completeNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 44)(13, "button", 45);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_23_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.completeConfirmJobId = null);
    });
    \u0275\u0275text(14, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "button", 49);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_23_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r7);
      const d_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.confirmComplete(d_r5.jobId));
    });
    \u0275\u0275elementStart(16, "mat-icon");
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.completeNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r5.jobId);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r5.jobId || !ctx_r2.completeNotes.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.resolvingDisputeId === d_r5.jobId ? "hourglass_empty" : "check_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.resolvingDisputeId === d_r5.jobId ? "Processing..." : "Confirm Complete", " ");
  }
}
function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 50)(1, "button", 51);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_24_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const d_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openCompleteConfirm(d_r5.jobId));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Complete for Pro ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 52);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_24_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r8);
      const d_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openRefundConfirm(d_r5.jobId));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Refund & Reopen ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r5.jobId);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r5.jobId);
  }
}
function AdminUsersComponent_div_16_ng_container_11_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 31);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 32)(8, "span")(9, "mat-icon");
    \u0275\u0275text(10, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span")(13, "mat-icon");
    \u0275\u0275text(14, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 33)(17, "strong");
    \u0275\u0275text(18, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdminUsersComponent_div_16_ng_container_11_div_3_div_1_p_20_Template, 4, 1, "p", 34)(21, AdminUsersComponent_div_16_ng_container_11_div_3_div_1_p_21_Template, 7, 4, "p", 35)(22, AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_22_Template, 20, 9, "div", 36)(23, AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_23_Template, 19, 5, "div", 36)(24, AdminUsersComponent_div_16_ng_container_11_div_3_div_1_div_24_Template, 9, 2, "div", 37);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r5.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 12, d_r5.disputedAt, "MMM d, y"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" Consumer: ", d_r5.consumer == null ? null : d_r5.consumer.name, " (", d_r5.consumer == null ? null : d_r5.consumer.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Pro: ", (d_r5.pro == null ? null : d_r5.pro.businessName) || (d_r5.pro == null ? null : d_r5.pro.name), " (", d_r5.pro == null ? null : d_r5.pro.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", d_r5.disputeReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r5.completionNotes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r5.paymentAmount != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.refundConfirmJobId === d_r5.jobId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.completeConfirmJobId === d_r5.jobId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.refundConfirmJobId !== d_r5.jobId && ctx_r2.completeConfirmJobId !== d_r5.jobId);
  }
}
function AdminUsersComponent_div_16_ng_container_11_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AdminUsersComponent_div_16_ng_container_11_div_3_div_1_Template, 25, 15, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.disputes);
  }
}
function AdminUsersComponent_div_16_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminUsersComponent_div_16_ng_container_11_div_1_Template, 4, 0, "div", 20)(2, AdminUsersComponent_div_16_ng_container_11_p_2_Template, 4, 0, "p", 21)(3, AdminUsersComponent_div_16_ng_container_11_div_3_Template, 2, 1, "div", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingDisputes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDisputes && ctx_r2.disputes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDisputes);
  }
}
function AdminUsersComponent_div_16_ng_container_12_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_ng_container_12_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.clearResolvedFilters());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_16_ng_container_12_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_16_ng_container_12_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25)(1, "mat-icon");
    \u0275\u0275text(2, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " No resolved disputes for these filters. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_div_16_ng_container_12_div_14_div_1_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", r_r11.pro == null ? null : r_r11.pro.email, ")");
  }
}
function AdminUsersComponent_div_16_ng_container_12_div_14_div_1_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 38)(1, "strong");
    \u0275\u0275text(2, "Resolution comment:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", r_r11.resolutionNotes);
  }
}
function AdminUsersComponent_div_16_ng_container_12_div_14_div_1_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 39)(1, "mat-icon");
    \u0275\u0275text(2, "currency_rupee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "strong");
    \u0275\u0275text(4, "Payment:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \u20B9", \u0275\u0275pipeBind2(6, 1, r_r11.paymentAmount, "1.2-2"), " ");
  }
}
function AdminUsersComponent_div_16_ng_container_12_div_14_div_1_span_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon");
    \u0275\u0275text(2, "admin_panel_settings");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const r_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" By ", r_r11.resolvedBy.name);
  }
}
function AdminUsersComponent_div_16_ng_container_12_div_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "div", 29)(2, "span", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 61);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 32)(7, "span")(8, "mat-icon");
    \u0275\u0275text(9, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "span")(12, "mat-icon");
    \u0275\u0275text(13, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275template(15, AdminUsersComponent_div_16_ng_container_12_div_14_div_1_ng_container_15_Template, 2, 1, "ng-container", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 33)(17, "strong");
    \u0275\u0275text(18, "Dispute reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdminUsersComponent_div_16_ng_container_12_div_14_div_1_p_20_Template, 4, 1, "p", 34)(21, AdminUsersComponent_div_16_ng_container_12_div_14_div_1_p_21_Template, 7, 4, "p", 35);
    \u0275\u0275elementStart(22, "div", 62)(23, "span")(24, "mat-icon");
    \u0275\u0275text(25, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(28, AdminUsersComponent_div_16_ng_container_12_div_14_div_1_span_28_Template, 4, 1, "span", 18);
    \u0275\u0275elementStart(29, "span")(30, "mat-icon");
    \u0275\u0275text(31, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "date");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const r_r11 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(r_r11.jobTitle);
    \u0275\u0275advance();
    \u0275\u0275classProp("refund", r_r11.resolution === "refund")("complete", r_r11.resolution === "complete");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", r_r11.resolution === "refund" ? "Refunded" : "Completed for Pro", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" Consumer: ", r_r11.consumer == null ? null : r_r11.consumer.name, " (", r_r11.consumer == null ? null : r_r11.consumer.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Pro: ", (r_r11.pro == null ? null : r_r11.pro.businessName) || (r_r11.pro == null ? null : r_r11.pro.name) || "\u2014");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r11.pro == null ? null : r_r11.pro.email);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", r_r11.disputeReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r11.resolutionNotes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", r_r11.paymentAmount != null);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Resolved ", \u0275\u0275pipeBind2(27, 16, r_r11.resolvedAt, "MMM d, y, h:mm a"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", r_r11.resolvedBy);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Disputed ", \u0275\u0275pipeBind2(33, 19, r_r11.disputedAt, "MMM d, y"));
  }
}
function AdminUsersComponent_div_16_ng_container_12_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275template(1, AdminUsersComponent_div_16_ng_container_12_div_14_div_1_Template, 34, 22, "div", 59);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.resolvedDisputes);
  }
}
function AdminUsersComponent_div_16_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 53)(2, "label");
    \u0275\u0275text(3, "From ");
    \u0275\u0275elementStart(4, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_div_16_ng_container_12_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.resolvedFrom, $event) || (ctx_r2.resolvedFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "label");
    \u0275\u0275text(6, "To ");
    \u0275\u0275elementStart(7, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_div_16_ng_container_12_Template_input_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.resolvedTo, $event) || (ctx_r2.resolvedTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "input", 55);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_div_16_ng_container_12_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.resolvedSearch, $event) || (ctx_r2.resolvedSearch = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminUsersComponent_div_16_ng_container_12_Template_input_keyup_enter_8_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyResolvedFilters());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 56);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_ng_container_12_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.applyResolvedFilters());
    });
    \u0275\u0275text(10, "Apply");
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminUsersComponent_div_16_ng_container_12_button_11_Template, 2, 0, "button", 57);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, AdminUsersComponent_div_16_ng_container_12_div_12_Template, 4, 0, "div", 20)(13, AdminUsersComponent_div_16_ng_container_12_p_13_Template, 4, 0, "p", 21)(14, AdminUsersComponent_div_16_ng_container_12_div_14_Template, 2, 1, "div", 22);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.resolvedFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.resolvedTo);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.resolvedSearch);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.resolvedFrom || ctx_r2.resolvedTo || ctx_r2.resolvedSearch);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingResolved);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingResolved && ctx_r2.resolvedDisputes.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingResolved && ctx_r2.resolvedDisputes.length > 0);
  }
}
function AdminUsersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "mat-icon");
    \u0275\u0275text(3, "gavel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Disputes ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "button", 16);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDisputeTab("open"));
    });
    \u0275\u0275text(7, " Open ");
    \u0275\u0275template(8, AdminUsersComponent_div_16_span_8_Template, 2, 1, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 16);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDisputeTab("resolved"));
    });
    \u0275\u0275text(10, " Resolved ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(11, AdminUsersComponent_div_16_ng_container_11_Template, 4, 3, "ng-container", 18)(12, AdminUsersComponent_div_16_ng_container_12_Template, 15, 7, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("active", ctx_r2.disputeTab === "open");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.disputes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.disputeTab === "resolved");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.disputeTab === "open");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.disputeTab === "resolved");
  }
}
function AdminUsersComponent_ng_container_18_option_58_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r13 = ctx.$implicit;
    \u0275\u0275property("value", c_r13);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r13);
  }
}
function AdminUsersComponent_ng_container_18_option_62_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r14 = ctx.$implicit;
    \u0275\u0275property("value", s_r14);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r14);
  }
}
function AdminUsersComponent_ng_container_18_option_66_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r15 = ctx.$implicit;
    \u0275\u0275property("value", d_r15);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(d_r15);
  }
}
function AdminUsersComponent_ng_container_18_button_67_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 87);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_button_67_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearDashRegion());
    });
    \u0275\u0275text(1, "Clear");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_68_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 88);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_p_69_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 89);
    \u0275\u0275text(1, " No jobs posted for the selected region and time frame. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_70_div_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 98);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r17.categoryIcon);
  }
}
function AdminUsersComponent_ng_container_18_div_70_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 92)(1, "span", 93);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_18_div_70_div_1_span_2_Template, 2, 1, "span", 94);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 95);
    \u0275\u0275element(5, "span", 96);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 97);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", row_r17.categoryIcon);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r17.categoryName, " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("width", ctx_r2.barPct(row_r17.count), "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r17.count);
  }
}
function AdminUsersComponent_ng_container_18_div_70_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 90);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_70_div_1_Template, 8, 5, "div", 91);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.jobsByCategory);
  }
}
function AdminUsersComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 63)(2, "div", 64)(3, "div", 65)(4, "button", 16);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset("7d"));
    });
    \u0275\u0275text(5, "7 days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 16);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset("30d"));
    });
    \u0275\u0275text(7, "30 days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 16);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset("90d"));
    });
    \u0275\u0275text(9, "90 days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 16);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset("year"));
    });
    \u0275\u0275text(11, "This year");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 16);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyPreset("all"));
    });
    \u0275\u0275text(13, "All time");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 66)(15, "label");
    \u0275\u0275text(16, "From ");
    \u0275\u0275elementStart(17, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customFrom, $event) || (ctx_r2.customFrom = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "label");
    \u0275\u0275text(19, "To ");
    \u0275\u0275elementStart(20, "input", 54);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.customTo, $event) || (ctx_r2.customTo = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 67);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.applyCustomRange());
    });
    \u0275\u0275text(22, "Apply");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 68)(24, "div", 69)(25, "mat-icon", 70);
    \u0275\u0275text(26, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 71)(28, "span", 72);
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span", 73);
    \u0275\u0275text(31, "Users joined");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 69)(33, "mat-icon", 74);
    \u0275\u0275text(34, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 71)(36, "span", 72);
    \u0275\u0275text(37);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "span", 73);
    \u0275\u0275text(39, "Pros joined");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "div", 69)(41, "mat-icon", 75);
    \u0275\u0275text(42, "storefront");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 71)(44, "span", 72);
    \u0275\u0275text(45);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(46, "span", 73);
    \u0275\u0275text(47, "Businesses joined");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(48, "div", 76)(49, "div", 77)(50, "h2")(51, "mat-icon");
    \u0275\u0275text(52, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275text(53, " Jobs posted by category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(54, "div", 78)(55, "select", 79);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_18_Template_select_ngModelChange_55_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDashCountryChange($event));
    });
    \u0275\u0275elementStart(56, "option", 80);
    \u0275\u0275text(57, "All countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(58, AdminUsersComponent_ng_container_18_option_58_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(59, "select", 79);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_18_Template_select_ngModelChange_59_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDashStateChange($event));
    });
    \u0275\u0275elementStart(60, "option", 80);
    \u0275\u0275text(61, "All states");
    \u0275\u0275elementEnd();
    \u0275\u0275template(62, AdminUsersComponent_ng_container_18_option_62_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "select", 79);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_18_Template_select_ngModelChange_63_listener($event) {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDashDistrictChange($event));
    });
    \u0275\u0275elementStart(64, "option", 80);
    \u0275\u0275text(65, "All districts");
    \u0275\u0275elementEnd();
    \u0275\u0275template(66, AdminUsersComponent_ng_container_18_option_66_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275template(67, AdminUsersComponent_ng_container_18_button_67_Template, 2, 0, "button", 82);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(68, AdminUsersComponent_ng_container_18_div_68_Template, 4, 0, "div", 83)(69, AdminUsersComponent_ng_container_18_p_69_Template, 2, 0, "p", 84)(70, AdminUsersComponent_ng_container_18_div_70_Template, 2, 1, "div", 85);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.dateRangePreset === "7d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.dateRangePreset === "30d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.dateRangePreset === "90d");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.dateRangePreset === "year");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.dateRangePreset === "all");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customFrom);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.customTo);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.customFrom && !ctx_r2.customTo);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingMetrics ? "\u2026" : (ctx_r2.metrics == null ? null : ctx_r2.metrics.users) ?? 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingMetrics ? "\u2026" : (ctx_r2.metrics == null ? null : ctx_r2.metrics.pros) ?? 0);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate(ctx_r2.isLoadingMetrics ? "\u2026" : (ctx_r2.metrics == null ? null : ctx_r2.metrics.businesses) ?? 0);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r2.dashCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.dashCountries);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.dashState);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.dashStates);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.dashDistrict);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.dashDistricts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.dashCountry || ctx_r2.dashState || ctx_r2.dashDistrict);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingJobsByCat);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingJobsByCat && ctx_r2.jobsByCategory.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingJobsByCat && ctx_r2.jobsByCategory.length > 0);
  }
}
function AdminUsersComponent_ng_container_19_div_20_div_2_div_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Email Verified ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_20_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 116);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_20_div_2_div_3_Template_div_click_0_listener() {
      const user_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectUser(user_r20));
    });
    \u0275\u0275elementStart(1, "div", 117)(2, "div", 118);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 119);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 120);
    \u0275\u0275template(7, AdminUsersComponent_ng_container_19_div_20_div_2_div_3_span_7_Template, 4, 0, "span", 121);
    \u0275\u0275elementStart(8, "span", 122);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.id) === user_r20.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r20.firstName, " ", user_r20.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r20.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r20.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined: ", ctx_r2.formatDate(user_r20.createdAt));
  }
}
function AdminUsersComponent_ng_container_19_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminUsersComponent_ng_container_19_div_20_div_2_div_3_Template, 10, 7, "div", 115);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Users (", ctx_r2.users.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.users);
  }
}
function AdminUsersComponent_ng_container_19_div_20_div_3_div_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 123)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Email Verified ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_20_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 125);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_20_div_3_div_3_Template_div_click_0_listener() {
      const pro_r22 = \u0275\u0275restoreView(_r21).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectPro(pro_r22));
    });
    \u0275\u0275elementStart(1, "div", 126)(2, "div", 127);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 128);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 129);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 130);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_19_div_20_div_3_div_3_span_9_Template, 4, 0, "span", 121);
    \u0275\u0275elementStart(10, "span", 131);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pro_r22 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r2.selectedPro == null ? null : ctx_r2.selectedPro.id) === pro_r22.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pro_r22.proName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r22.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r22.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pro_r22.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined: ", ctx_r2.formatDate(pro_r22.createdAt));
  }
}
function AdminUsersComponent_ng_container_19_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminUsersComponent_ng_container_19_div_20_div_3_div_3_Template, 12, 7, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Professionals (", ctx_r2.pros.length, ")");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.pros);
  }
}
function AdminUsersComponent_ng_container_19_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 111)(1, "div", 112);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_19_div_20_div_2_Template, 4, 2, "div", 113)(3, AdminUsersComponent_ng_container_19_div_20_div_3_Template, 4, 2, "div", 113);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.users.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pros.length > 0);
  }
}
function AdminUsersComponent_ng_container_19_div_21_h2_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", ctx_r2.selectedUser.firstName, " ", ctx_r2.selectedUser.lastName);
  }
}
function AdminUsersComponent_ng_container_19_div_21_h2_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPro.proName);
  }
}
function AdminUsersComponent_ng_container_19_div_21_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Profile");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_15_span_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4("", ctx_r2.selectedUser.street1, ", ", ctx_r2.selectedUser.city, ", ", ctx_r2.selectedUser.state, " ", ctx_r2.selectedUser.zipPostalCode);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_15_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not provided");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147)(2, "label");
    \u0275\u0275text(3, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 147)(7, "label");
    \u0275\u0275text(8, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 147)(12, "label");
    \u0275\u0275text(13, "Email Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 147)(18, "label");
    \u0275\u0275text(19, "Phone Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "mat-icon");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 147)(24, "label");
    \u0275\u0275text(25, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AdminUsersComponent_ng_container_19_div_21_div_15_span_26_Template, 2, 4, "span", 18)(27, AdminUsersComponent_ng_container_19_div_21_div_15_span_27_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 147)(29, "label");
    \u0275\u0275text(30, "Joined:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "span");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedUser.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedUser.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("verified", ctx_r2.selectedUser.isEmailVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedUser.isEmailVerified ? "check_circle" : "cancel");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("verified", ctx_r2.selectedUser.isPhoneVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedUser.isPhoneVerified ? "check_circle" : "cancel");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.selectedUser.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedUser.street1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.selectedUser.createdAt));
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_16_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate4("", ctx_r2.selectedPro.street1, ", ", ctx_r2.selectedPro.city, ", ", ctx_r2.selectedPro.state, " ", ctx_r2.selectedPro.zipPostalCode);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_16_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not provided");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_16_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 148);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_16_ng_container_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.startEditRadius());
    });
    \u0275\u0275elementStart(4, "mat-icon");
    \u0275\u0275text(5, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.selectedPro.serviceRadiusKm ?? 25, " km");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_16_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 149);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_div_21_div_16_ng_container_47_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editRadiusValue, $event) || (ctx_r2.editRadiusValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 150);
    \u0275\u0275text(3, "km");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 151);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_16_ng_container_47_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveRadius());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 152);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_16_ng_container_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelEditRadius());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editRadiusValue);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146)(1, "div", 147)(2, "label");
    \u0275\u0275text(3, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 147)(7, "label");
    \u0275\u0275text(8, "Business:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 147)(12, "label");
    \u0275\u0275text(13, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 147)(17, "label");
    \u0275\u0275text(18, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 147)(22, "label");
    \u0275\u0275text(23, "Email Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span")(25, "mat-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 147)(28, "label");
    \u0275\u0275text(29, "Phone Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span")(31, "mat-icon");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 147)(34, "label");
    \u0275\u0275text(35, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_19_div_21_div_16_span_36_Template, 2, 4, "span", 18)(37, AdminUsersComponent_ng_container_19_div_21_div_16_span_37_Template, 2, 0, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 147)(39, "label");
    \u0275\u0275text(40, "Joined:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 147)(44, "label");
    \u0275\u0275text(45, "Service Radius:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, AdminUsersComponent_ng_container_19_div_21_div_16_ng_container_46_Template, 6, 1, "ng-container", 18)(47, AdminUsersComponent_ng_container_19_div_21_div_16_ng_container_47_Template, 10, 1, "ng-container", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPro.proName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPro.businessName);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPro.email);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.selectedPro.phoneNumber);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("verified", ctx_r2.selectedPro.isEmailVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPro.isEmailVerified ? "check_circle" : "cancel");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("verified", ctx_r2.selectedPro.isPhoneVerified);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.selectedPro.isPhoneVerified ? "check_circle" : "cancel");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.selectedPro.street1);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedPro.street1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(ctx_r2.selectedPro.createdAt));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx_r2.isEditingRadius);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isEditingRadius);
  }
}
function AdminUsersComponent_ng_container_19_div_21_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Job History");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "mat-spinner", 154);
    \u0275\u0275text(2, " Loading job history... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_21_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 165)(1, "mat-icon");
    \u0275\u0275text(2, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bid Job");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_21_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r26.description);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_21_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Assigned To:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r26.assignedProBusinessName);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_21_div_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Updated:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r26.updatedAt));
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "div", 159)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_19_div_21_div_21_div_1_span_5_Template, 4, 0, "span", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 161);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 162);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_19_div_21_div_21_div_1_div_9_Template, 5, 1, "div", 163);
    \u0275\u0275elementStart(10, "div")(11, "strong");
    \u0275\u0275text(12, "Category:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "strong");
    \u0275\u0275text(16, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20, "Budget:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "strong");
    \u0275\u0275text(24, "Timeline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "strong");
    \u0275\u0275text(28, "Posted by:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AdminUsersComponent_ng_container_19_div_21_div_21_div_1_div_30_Template, 4, 1, "div", 18);
    \u0275\u0275elementStart(31, "div", 164)(32, "span")(33, "strong");
    \u0275\u0275text(34, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_19_div_21_div_21_div_1_span_36_Template, 4, 1, "span", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r26 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("job-in-progress", job_r26.status === "In Progress");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r26.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r26.isBid);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + job_r26.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r26.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r26.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (job_r26.category == null ? null : job_r26.category.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r26.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r26.budget);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r26.timeline);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r26.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r26.assignedProId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r26.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r26.updatedAt);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_21_div_1_Template, 37, 15, "div", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.userJobs);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_22_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 165)(1, "mat-icon");
    \u0275\u0275text(2, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bid Job");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_22_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 166)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r27.description);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_22_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Assigned To:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r27 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r27.assignedProBusinessName);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_22_div_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Updated:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r27 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r27.updatedAt));
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157)(1, "div", 158)(2, "div", 159)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_19_div_21_div_22_div_1_span_5_Template, 4, 0, "span", 160);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 161);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 162);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_19_div_21_div_22_div_1_div_9_Template, 5, 1, "div", 163);
    \u0275\u0275elementStart(10, "div")(11, "strong");
    \u0275\u0275text(12, "Category:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div")(15, "strong");
    \u0275\u0275text(16, "Location:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div")(19, "strong");
    \u0275\u0275text(20, "Budget:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div")(23, "strong");
    \u0275\u0275text(24, "Timeline:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div")(27, "strong");
    \u0275\u0275text(28, "Posted by:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29);
    \u0275\u0275elementEnd();
    \u0275\u0275template(30, AdminUsersComponent_ng_container_19_div_21_div_22_div_1_div_30_Template, 4, 1, "div", 18);
    \u0275\u0275elementStart(31, "div", 164)(32, "span")(33, "strong");
    \u0275\u0275text(34, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_19_div_21_div_22_div_1_span_36_Template, 4, 1, "span", 18);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r27 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("job-in-progress", job_r27.status === "In Progress");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r27.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r27.isBid);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + job_r27.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r27.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r27.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (job_r27.category == null ? null : job_r27.category.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r27.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r27.budget);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r27.timeline);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r27.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r27.assignedProId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r27.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r27.updatedAt);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_22_div_1_Template, 37, 15, "div", 156);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.proJobs);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "mat-icon");
    \u0275\u0275text(2, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No job history found");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_div_21_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Chat History");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "mat-spinner", 154);
    \u0275\u0275text(2, " Loading chat history... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_4_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(conversation_r29.lastMessageTime), " ");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_28_div_4_div_1_Template_div_click_0_listener() {
      const conversation_r29 = \u0275\u0275restoreView(_r28).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.selectConversation(conversation_r29));
    });
    \u0275\u0275elementStart(1, "div", 177)(2, "div", 178);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 179);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminUsersComponent_ng_container_19_div_21_div_28_div_4_div_1_div_6_Template, 2, 1, "div", 180);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", (ctx_r2.selectedConversation == null ? null : ctx_r2.selectedConversation.userId) === conversation_r29.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r29.userName || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conversation_r29.userType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conversation_r29.lastMessageTime);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_28_div_4_div_1_Template, 7, 5, "div", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.userConversations);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_5_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r31 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(conversation_r31.lastMessageTime), " ");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 176);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_28_div_5_div_1_Template_div_click_0_listener() {
      const conversation_r31 = \u0275\u0275restoreView(_r30).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.selectConversation(conversation_r31));
    });
    \u0275\u0275elementStart(1, "div", 177)(2, "div", 178);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 179);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminUsersComponent_ng_container_19_div_21_div_28_div_5_div_1_div_6_Template, 2, 1, "div", 180);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r31 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", (ctx_r2.selectedConversation == null ? null : ctx_r2.selectedConversation.userId) === conversation_r31.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r31.userName || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conversation_r31.userType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conversation_r31.lastMessageTime);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 174);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_28_div_5_div_1_Template, 7, 5, "div", 175);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.proConversations);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182)(1, "p");
    \u0275\u0275text(2, "No conversations");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_7_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 191)(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Read ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 186)(1, "div", 187);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 188);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 189);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_19_div_21_div_28_div_7_div_4_div_7_Template, 4, 0, "div", 190);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r32 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", "message-" + (message_r32.senderType ? message_r32.senderType.toLowerCase() : "unknown"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r32.senderType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r32.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(message_r32.sentAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r32.isRead);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 183)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 184);
    \u0275\u0275template(4, AdminUsersComponent_ng_container_19_div_21_div_28_div_7_div_4_Template, 8, 5, "div", 185);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Messages \u2014 ", ctx_r2.selectedConversation.userName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.conversationMessages);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 192)(1, "p");
    \u0275\u0275text(2, "Select a conversation to view messages");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 168)(1, "div", 169)(2, "h3");
    \u0275\u0275text(3, "Conversations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminUsersComponent_ng_container_19_div_21_div_28_div_4_Template, 2, 1, "div", 170)(5, AdminUsersComponent_ng_container_19_div_21_div_28_div_5_Template, 2, 1, "div", 170)(6, AdminUsersComponent_ng_container_19_div_21_div_28_div_6_Template, 3, 0, "div", 171);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_19_div_21_div_28_div_7_Template, 5, 2, "div", 172)(8, AdminUsersComponent_ng_container_19_div_21_div_28_div_8_Template, 3, 0, "div", 173);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.selectedUser && ctx_r2.userConversations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPro && ctx_r2.proConversations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedUser && ctx_r2.userConversations.length === 0 || ctx_r2.selectedPro && ctx_r2.proConversations.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedConversation);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedConversation && (ctx_r2.userConversations.length > 0 || ctx_r2.proConversations.length > 0));
  }
}
function AdminUsersComponent_ng_container_19_div_21_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Relationships");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_32_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "mat-spinner", 198);
    \u0275\u0275text(2, " Loading linked clients... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "mat-icon");
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No users linked to this pro");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_32_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 201)(1, "mat-icon");
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 202)(4, "div", 203);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 204);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 205);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_32_div_12_div_1_Template_button_click_8_listener() {
      const u_r35 = \u0275\u0275restoreView(_r34).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeUserFromPro(u_r35.id));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "link_off");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r35 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r35.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r35.email, " \xA0\xB7\xA0 ID: ", u_r35.id);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_32_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_32_div_12_div_1_Template, 11, 3, "div", 200);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.linkedUsers);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 193)(2, "mat-form-field", 194)(3, "mat-label");
    \u0275\u0275text(4, "Add User by ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 195);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_div_21_div_32_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.addUserId, $event) || (ctx_r2.addUserId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 196);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_32_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addUserToPro());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Link User ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminUsersComponent_ng_container_19_div_21_div_32_div_10_Template, 3, 0, "div", 140)(11, AdminUsersComponent_ng_container_19_div_21_div_32_div_11_Template, 5, 0, "div", 142)(12, AdminUsersComponent_ng_container_19_div_21_div_32_div_12_Template, 2, 1, "div", 197);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.addUserId);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.addUserId);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingRelationships);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingRelationships && ctx_r2.linkedUsers.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingRelationships && ctx_r2.linkedUsers.length > 0);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "mat-spinner", 198);
    \u0275\u0275text(2, " Loading linked pros... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "mat-icon");
    \u0275\u0275text(2, "handshake");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No pros linked to this user");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_33_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 201)(1, "mat-icon");
    \u0275\u0275text(2, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 202)(4, "div", 203);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 204);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r36 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r36.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r36.businessName, " \xA0\xB7\xA0 ", p_r36.email);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_33_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 199);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_33_div_3_div_1_Template, 8, 3, "div", 200);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.linkedPros);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_33_div_1_Template, 3, 0, "div", 140)(2, AdminUsersComponent_ng_container_19_div_21_div_33_div_2_Template, 5, 0, "div", 142)(3, AdminUsersComponent_ng_container_19_div_21_div_33_div_3_Template, 2, 1, "div", 197);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingRelationships);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingRelationships && ctx_r2.linkedPros.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingRelationships && ctx_r2.linkedPros.length > 0);
  }
}
function AdminUsersComponent_ng_container_19_div_21_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Payments");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275text(2, " Loading payments... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 206)(1, "mat-icon");
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("No payments found for this ", ctx_r2.selectedUser ? "user" : "professional", ".");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Paid ", \u0275\u0275pipeBind2(4, 1, p_r37.completedAt, "d MMM y"));
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r37.failureReason, " ");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_37_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 233)(1, "span", 229);
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 230);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r37.refundReason);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 225)(1, "div", 226)(2, "mat-icon");
    \u0275\u0275text(3, "currency_rupee");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Refund Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 227)(6, "span", 228)(7, "span", 229);
    \u0275\u0275text(8, "Refunded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 230);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 228)(13, "span", 229);
    \u0275\u0275text(14, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 231);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_37_div_18_Template, 5, 1, "div", 232);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 3, p_r37.refundedAt, "d MMM y, h:mm a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(17, 6, p_r37.refundAmount ?? p_r37.amount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r37.refundReason);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Order: ", p_r37.razorpayOrderId);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_38_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Payment: ", p_r37.razorpayPaymentId);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_38_span_1_Template, 2, 1, "span", 18)(2, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_38_span_2_Template, 2, 1, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r37.razorpayOrderId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r37.razorpayPaymentId);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 238)(1, "p", 239)(2, "mat-icon");
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Refund ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " to consumer? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 240)(10, "mat-label");
    \u0275\u0275text(11, "Reason (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 241);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_div_1_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r38);
      const ctx_r2 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r2.refundDirectNotes, $event) || (ctx_r2.refundDirectNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 242)(14, "button", 45);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_div_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r38);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.refundConfirmPaymentId = null);
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 46);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_div_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r38);
      const p_r37 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.confirmDirectRefund(p_r37.id));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(7, 6, p_r37.amount, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.refundDirectNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.refundingPaymentId === p_r37.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.refundingPaymentId === p_r37.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.refundingPaymentId === p_r37.id ? "hourglass_empty" : "currency_rupee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.refundingPaymentId === p_r37.id ? "Processing..." : "Confirm Refund", " ");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r39 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 243);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r39);
      const p_r37 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openDirectRefundConfirm(p_r37.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "currency_rupee");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Issue Refund ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 235);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_div_1_Template, 20, 9, "div", 236)(2, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_button_2_Template, 4, 0, "button", 237);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.refundConfirmPaymentId === p_r37.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.refundConfirmPaymentId !== p_r37.id);
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "div", 210)(2, "div", 211)(3, "span", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 213);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 214);
    \u0275\u0275pipe(8, "lowercase");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 215)(11, "div", 216)(12, "span", 217);
    \u0275\u0275text(13, "Total paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 218);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 216)(18, "span", 217);
    \u0275\u0275text(19, "Platform fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 218);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 216)(24, "span", 217);
    \u0275\u0275text(25, "Pro payout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 218);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 219)(30, "span")(31, "mat-icon");
    \u0275\u0275text(32, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_span_35_Template, 5, 4, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_36_Template, 4, 1, "div", 220)(37, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_37_Template, 19, 9, "div", 221)(38, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_38_Template, 3, 2, "div", 222)(39, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_div_39_Template, 3, 2, "div", 223);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r37 = ctx.$implicit;
    \u0275\u0275classProp("ep-refunded", p_r37.status === "Refunded")("ep-failed", p_r37.status === "Failed");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", p_r37.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r37.jobTitle ?? "Job #" + p_r37.jobId);
    \u0275\u0275advance();
    \u0275\u0275classMap("epst-" + \u0275\u0275pipeBind1(8, 18, p_r37.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r37.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(16, 20, p_r37.amount, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(22, 23, p_r37.platformFee, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(28, 26, p_r37.proPayOut, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 29, p_r37.createdAt, "d MMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r37.completedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r37.status === "Failed" && p_r37.failureReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r37.status === "Refunded");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r37.razorpayOrderId || p_r37.razorpayPaymentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r37.status === "Completed");
  }
}
function AdminUsersComponent_ng_container_19_div_21_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_div_39_div_1_Template, 40, 32, "div", 208);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.entityPayments);
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 246);
    \u0275\u0275element(1, "mat-spinner", 247);
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 206)(1, "mat-icon");
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No payouts found for this professional.");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 216)(1, "span", 217);
    \u0275\u0275text(2, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 218);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r40 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r40.mode);
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r40 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Processed ", \u0275\u0275pipeBind2(4, 1, p_r40.processedAt, "d MMM y"));
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 224)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r40 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r40.failureReason, " ");
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 234)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r40 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Razorpay: ", p_r40.razorpayPayoutId);
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 235)(1, "button", 250);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r41);
      const p_r40 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.retryPayout(p_r40.id));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r40 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.retryingPayoutId === p_r40.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.retryingPayoutId === p_r40.id ? "hourglass_empty" : "refresh");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.retryingPayoutId === p_r40.id ? "Retrying\u2026" : "Retry Payout", " ");
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 209)(1, "div", 210)(2, "div", 211)(3, "span", 212);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 213);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 214);
    \u0275\u0275pipe(8, "lowercase");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 215)(11, "div", 216)(12, "span", 217);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 218);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_17_Template, 5, 1, "div", 249);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 219)(19, "span")(20, "mat-icon");
    \u0275\u0275text(21, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_span_24_Template, 5, 4, "span", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_25_Template, 4, 1, "div", 220)(26, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_26_Template, 3, 1, "div", 222)(27, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_div_27_Template, 5, 3, "div", 223);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r40 = ctx.$implicit;
    \u0275\u0275classProp("ep-failed", p_r40.status === "Failed");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", p_r40.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r40.jobTitle ?? "Job #" + p_r40.jobId);
    \u0275\u0275advance();
    \u0275\u0275classMap("epst-" + \u0275\u0275pipeBind1(8, 14, p_r40.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r40.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(16, 16, p_r40.amount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r40.mode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Created ", \u0275\u0275pipeBind2(23, 19, p_r40.createdAt, "d MMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r40.processedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r40.failureReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r40.razorpayPayoutId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r40.status === "Pending" || p_r40.status === "Failed");
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 207);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_div_1_Template, 28, 22, "div", 248);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.proPayouts);
  }
}
function AdminUsersComponent_ng_container_19_div_21_mat_tab_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 244)(1, "div", 138);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_2_Template, 2, 0, "div", 245)(3, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_3_Template, 5, 0, "div", 110)(4, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_div_4_Template, 2, 1, "div", 144);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingProPayouts);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingProPayouts && ctx_r2.proPayouts.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingProPayouts && ctx_r2.proPayouts.length > 0);
  }
}
function AdminUsersComponent_ng_container_19_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 132)(1, "div", 133);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_19_div_21_h2_2_Template, 2, 2, "h2", 18)(3, AdminUsersComponent_ng_container_19_div_21_h2_3_Template, 2, 1, "h2", 18);
    \u0275\u0275elementStart(4, "button", 134);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.impersonate());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Impersonate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 135);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_21_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r23);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearSelection());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "mat-tab-group", 136)(12, "mat-tab");
    \u0275\u0275template(13, AdminUsersComponent_ng_container_19_div_21_ng_template_13_Template, 3, 0, "ng-template", 137);
    \u0275\u0275elementStart(14, "div", 138);
    \u0275\u0275template(15, AdminUsersComponent_ng_container_19_div_21_div_15_Template, 33, 11, "div", 139)(16, AdminUsersComponent_ng_container_19_div_21_div_16_Template, 48, 15, "div", 139);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-tab");
    \u0275\u0275template(18, AdminUsersComponent_ng_container_19_div_21_ng_template_18_Template, 3, 0, "ng-template", 137);
    \u0275\u0275elementStart(19, "div", 138);
    \u0275\u0275template(20, AdminUsersComponent_ng_container_19_div_21_div_20_Template, 3, 0, "div", 140)(21, AdminUsersComponent_ng_container_19_div_21_div_21_Template, 2, 1, "div", 141)(22, AdminUsersComponent_ng_container_19_div_21_div_22_Template, 2, 1, "div", 141)(23, AdminUsersComponent_ng_container_19_div_21_div_23_Template, 5, 0, "div", 142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-tab");
    \u0275\u0275template(25, AdminUsersComponent_ng_container_19_div_21_ng_template_25_Template, 3, 0, "ng-template", 137);
    \u0275\u0275elementStart(26, "div", 138);
    \u0275\u0275template(27, AdminUsersComponent_ng_container_19_div_21_div_27_Template, 3, 0, "div", 140)(28, AdminUsersComponent_ng_container_19_div_21_div_28_Template, 9, 5, "div", 143);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-tab");
    \u0275\u0275template(30, AdminUsersComponent_ng_container_19_div_21_ng_template_30_Template, 3, 0, "ng-template", 137);
    \u0275\u0275elementStart(31, "div", 138);
    \u0275\u0275template(32, AdminUsersComponent_ng_container_19_div_21_div_32_Template, 13, 5, "div", 18)(33, AdminUsersComponent_ng_container_19_div_21_div_33_Template, 4, 3, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-tab");
    \u0275\u0275template(35, AdminUsersComponent_ng_container_19_div_21_ng_template_35_Template, 3, 0, "ng-template", 137);
    \u0275\u0275elementStart(36, "div", 138);
    \u0275\u0275template(37, AdminUsersComponent_ng_container_19_div_21_div_37_Template, 3, 0, "div", 140)(38, AdminUsersComponent_ng_container_19_div_21_div_38_Template, 5, 1, "div", 110)(39, AdminUsersComponent_ng_container_19_div_21_div_39_Template, 2, 1, "div", 144);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, AdminUsersComponent_ng_container_19_div_21_mat_tab_40_Template, 5, 3, "mat-tab", 145);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.selectedUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPro);
    \u0275\u0275advance(12);
    \u0275\u0275property("ngIf", ctx_r2.selectedUser);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPro);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.selectedUser && ctx_r2.userJobs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && ctx_r2.selectedPro && ctx_r2.proJobs.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails && (ctx_r2.selectedUser && ctx_r2.userJobs.length === 0 || ctx_r2.selectedPro && ctx_r2.proJobs.length === 0));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingDetails);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDetails);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.selectedPro);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedUser);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingEntityPayments);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingEntityPayments && ctx_r2.entityPayments.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingEntityPayments && ctx_r2.entityPayments.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedPro);
  }
}
function AdminUsersComponent_ng_container_19_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 206)(1, "mat-icon");
    \u0275\u0275text(2, "manage_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3");
    \u0275\u0275text(4, "Search for Users or Professionals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6, "Enter a name or email address to find user accounts or professional profiles");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 99)(2, "div", 100)(3, "form", 101)(4, "div", 102)(5, "div", 103)(6, "input", 104);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminUsersComponent_ng_container_19_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.search());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 105);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.search());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 106)(12, "button", 107);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSearchType("user"));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Users ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 107);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSearchType("pro"));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Professionals ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, AdminUsersComponent_ng_container_19_div_20_Template, 4, 2, "div", 108);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AdminUsersComponent_ng_container_19_div_21_Template, 41, 16, "div", 109)(22, AdminUsersComponent_ng_container_19_div_22_Template, 7, 0, "div", 110);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.searchQuery);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isSearching || !ctx_r2.searchQuery.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isSearching ? "hourglass_empty" : "search");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSearching ? "Searching..." : "Search", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", ctx_r2.searchType === "user");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("active", ctx_r2.searchType === "pro");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.users.length > 0 || ctx_r2.pros.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.selectedUser || ctx_r2.selectedPro);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.selectedUser && !ctx_r2.selectedPro && ctx_r2.users.length === 0 && ctx_r2.pros.length === 0);
  }
}
function AdminUsersComponent_ng_container_20_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 265);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r2.serviceAreas.length, ")");
  }
}
function AdminUsersComponent_ng_container_20_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 266);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.areaErrorMsg);
  }
}
function AdminUsersComponent_ng_container_20_div_26_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r44 = ctx.$implicit;
    \u0275\u0275property("value", c_r44);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r44);
  }
}
function AdminUsersComponent_ng_container_20_div_26_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r45 = ctx.$implicit;
    \u0275\u0275property("value", s_r45);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r45);
  }
}
function AdminUsersComponent_ng_container_20_div_26_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 280);
    \u0275\u0275element(1, "mat-spinner", 281);
    \u0275\u0275text(2, " Locating... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_26_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 282);
    \u0275\u0275text(1, " No areas match the current filter. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 267)(1, "div", 268)(2, "select", 269);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_20_div_26_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMapCountryChange($event));
    });
    \u0275\u0275elementStart(3, "option", 80);
    \u0275\u0275text(4, "All Countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_20_div_26_option_5_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 270);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_20_div_26_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMapStateChange($event));
    });
    \u0275\u0275elementStart(7, "option", 80);
    \u0275\u0275text(8, "All States");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminUsersComponent_ng_container_20_div_26_option_9_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 271);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_div_26_Template_div_click_10_listener($event) {
      \u0275\u0275restoreView(_r43);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(11, "input", 272);
    \u0275\u0275listener("change", function AdminUsersComponent_ng_container_20_div_26_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r43);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMapInactiveChange($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 273);
    \u0275\u0275text(13, "Show inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 274);
    \u0275\u0275element(15, "span", 275);
    \u0275\u0275text(16, " Active ");
    \u0275\u0275element(17, "span", 276);
    \u0275\u0275text(18, " Inactive ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminUsersComponent_ng_container_20_div_26_span_19_Template, 3, 0, "span", 277);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 278);
    \u0275\u0275template(21, AdminUsersComponent_ng_container_20_div_26_p_21_Template, 2, 0, "p", 279);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.mapFilterCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.mapCountries);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.mapFilterState)("disabled", !ctx_r2.mapFilterCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.mapStates);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.mapShowInactive);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngIf", ctx_r2.isGeocodingAreas);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r2.isGeocodingAreas && ctx_r2.filteredMapAreas.length === 0);
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r47 = ctx.$implicit;
    \u0275\u0275property("value", c_r47);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r47);
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 86);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r48 = ctx.$implicit;
    \u0275\u0275property("value", s_r48);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r48);
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 288);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.filteredListAreas.length, " of ", ctx_r2.serviceAreas.length, " ");
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "mat-spinner", 247);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading service areas...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_tr_20_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 300)(1, "mat-icon");
    \u0275\u0275text(2, "autorenew");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Auto ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_tr_20_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 301);
    \u0275\u0275text(1, "Manual");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r49 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td")(10, "span", 293)(11, "mat-icon");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_tr_20_span_15_Template, 4, 0, "span", 294)(16, AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_tr_20_span_16_Template, 2, 0, "span", 295);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 296);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 297)(20, "button", 298);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_tr_20_Template_button_click_20_listener() {
      const area_r50 = \u0275\u0275restoreView(_r49).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleServiceArea(area_r50.id));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 299);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_tr_20_Template_button_click_23_listener() {
      const area_r50 = \u0275\u0275restoreView(_r49).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.deleteServiceArea(area_r50));
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const area_r50 = ctx.$implicit;
    \u0275\u0275classProp("area-row-inactive", !area_r50.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r50.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r50.state || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r50.district || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r50.pinCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("area-badge-active", area_r50.isActive)("area-badge-inactive", !area_r50.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r50.isActive ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", area_r50.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", area_r50.isAutoEnrolled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !area_r50.isAutoEnrolled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r50.notes || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", area_r50.isActive ? "Disable this area" : "Enable this area");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r50.isActive ? "toggle_on" : "toggle_off");
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 291)(1, "thead")(2, "tr")(3, "th");
    \u0275\u0275text(4, "Country");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "th");
    \u0275\u0275text(6, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "th");
    \u0275\u0275text(8, "District");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "th");
    \u0275\u0275text(10, "PIN");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "th");
    \u0275\u0275text(12, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "th");
    \u0275\u0275text(14, "Type");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "th");
    \u0275\u0275text(16, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "th");
    \u0275\u0275text(18, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "tbody");
    \u0275\u0275template(20, AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_tr_20_Template, 26, 17, "tr", 292);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r2.filteredListAreas);
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "mat-icon");
    \u0275\u0275text(2, "location_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No service areas defined. Add one above \u2014 currently accepting jobs from anywhere.");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "mat-icon");
    \u0275\u0275text(2, "filter_alt_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No areas match the current filter.");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 289);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_20_ng_container_27_div_16_table_1_Template, 21, 1, "table", 290)(2, AdminUsersComponent_ng_container_20_ng_container_27_div_16_div_2_Template, 5, 0, "div", 142)(3, AdminUsersComponent_ng_container_20_ng_container_27_div_16_div_3_Template, 5, 0, "div", 142);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.filteredListAreas.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.serviceAreas.length === 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.serviceAreas.length > 0 && ctx_r2.filteredListAreas.length === 0);
  }
}
function AdminUsersComponent_ng_container_20_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 283)(2, "select", 269);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_20_ng_container_27_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onListCountryChange($event));
    });
    \u0275\u0275elementStart(3, "option", 80);
    \u0275\u0275text(4, "All Countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_20_ng_container_27_option_5_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 270);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_20_ng_container_27_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onListStateChange($event));
    });
    \u0275\u0275elementStart(7, "option", 80);
    \u0275\u0275text(8, "All States");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminUsersComponent_ng_container_20_ng_container_27_option_9_Template, 2, 2, "option", 81);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 271);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_ng_container_27_Template_div_click_10_listener($event) {
      \u0275\u0275restoreView(_r46);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(11, "input", 284);
    \u0275\u0275listener("change", function AdminUsersComponent_ng_container_20_ng_container_27_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.listShowInactive = $event.target.checked);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 285);
    \u0275\u0275text(13, "Show inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AdminUsersComponent_ng_container_20_ng_container_27_span_14_Template, 2, 2, "span", 286);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AdminUsersComponent_ng_container_20_ng_container_27_div_15_Template, 4, 0, "div", 140)(16, AdminUsersComponent_ng_container_20_ng_container_27_div_16_Template, 4, 3, "div", 287);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.listFilterCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.mapCountries);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r2.listFilterState)("disabled", !ctx_r2.listFilterCountry);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r2.listStates);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.listShowInactive);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.listFilterCountry || ctx_r2.listFilterState || ctx_r2.listShowInactive);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingAreas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingAreas);
  }
}
function AdminUsersComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 251)(2, "div", 252)(3, "mat-icon");
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Service Areas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_20_span_7_Template, 2, 1, "span", 253);
    \u0275\u0275elementStart(8, "button", 254);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMapView());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 255)(13, "h3");
    \u0275\u0275text(14, "Add Service Area");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 256)(16, "input", 257);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_20_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.country, $event) || (ctx_r2.newArea.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 258);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_20_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.state, $event) || (ctx_r2.newArea.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function AdminUsersComponent_ng_container_20_Template_input_blur_17_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandNewAreaState());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 259);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_20_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.district, $event) || (ctx_r2.newArea.district = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 260);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_20_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.pinCode, $event) || (ctx_r2.newArea.pinCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 261);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_20_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.notes, $event) || (ctx_r2.newArea.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 262);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r42);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addServiceArea());
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AdminUsersComponent_ng_container_20_div_25_Template, 2, 1, "div", 263);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AdminUsersComponent_ng_container_20_div_26_Template, 22, 8, "div", 264)(27, AdminUsersComponent_ng_container_20_ng_container_27_Template, 17, 9, "ng-container", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.serviceAreas.length);
    \u0275\u0275advance();
    \u0275\u0275classProp("active", ctx_r2.showMapView);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.showMapView ? "list" : "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.showMapView ? "List View" : "Map View", " ");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newArea.country);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newArea.state);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newArea.district);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newArea.pinCode);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newArea.notes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newArea.country || ctx_r2.isSavingArea);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.isSavingArea ? "Adding..." : "Add", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.areaErrorMsg);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showMapView);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.showMapView);
  }
}
function AdminUsersComponent_ng_container_21_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 311)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.inviteSuccess, " ");
  }
}
function AdminUsersComponent_ng_container_21_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 312)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.inviteError, " ");
  }
}
function AdminUsersComponent_ng_container_21_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153);
    \u0275\u0275element(1, "mat-spinner", 247);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading invitations...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 329)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Used ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 330)(1, "mat-icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pending ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 331)(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Expired ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 332);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invitation_r52 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", invitation_r52.daysUntilExpiry, " days");
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 333);
    \u0275\u0275text(1, "Expired");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 334);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invitation_r52 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(invitation_r52.usedAt));
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r53 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 335);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_div_24_tr_15_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r53);
      const invitation_r52 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resendInvitation(invitation_r52.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Resend ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 336);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_21_div_24_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 316);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 317);
    \u0275\u0275template(4, AdminUsersComponent_ng_container_21_div_24_tr_15_span_4_Template, 4, 0, "span", 318)(5, AdminUsersComponent_ng_container_21_div_24_tr_15_span_5_Template, 4, 0, "span", 319)(6, AdminUsersComponent_ng_container_21_div_24_tr_15_span_6_Template, 4, 0, "span", 320);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 321);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 322);
    \u0275\u0275template(10, AdminUsersComponent_ng_container_21_div_24_tr_15_span_10_Template, 2, 1, "span", 323)(11, AdminUsersComponent_ng_container_21_div_24_tr_15_span_11_Template, 2, 0, "span", 324)(12, AdminUsersComponent_ng_container_21_div_24_tr_15_span_12_Template, 2, 1, "span", 325);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 326);
    \u0275\u0275template(14, AdminUsersComponent_ng_container_21_div_24_tr_15_button_14_Template, 4, 0, "button", 327)(15, AdminUsersComponent_ng_container_21_div_24_tr_15_span_15_Template, 2, 0, "span", 328);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invitation_r52 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("expired", invitation_r52.isExpired);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invitation_r52.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", invitation_r52.isUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !invitation_r52.isUsed && !invitation_r52.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !invitation_r52.isUsed && invitation_r52.isExpired);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(invitation_r52.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !invitation_r52.isExpired && !invitation_r52.isUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r52.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r52.isUsed);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !invitation_r52.isUsed && !invitation_r52.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r52.isUsed || invitation_r52.isExpired);
  }
}
function AdminUsersComponent_ng_container_21_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 313)(1, "table", 314)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "Created");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Expires In");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, AdminUsersComponent_ng_container_21_div_24_tr_15_Template, 16, 12, "tr", 315);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.adminInvitations);
  }
}
function AdminUsersComponent_ng_container_21_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 167)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No invitations sent yet");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 251)(2, "div", 252)(3, "mat-icon");
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Invite Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 302)(8, "h3");
    \u0275\u0275text(9, "Send Invitation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 303);
    \u0275\u0275text(11, "Enter the email address of the person you want to invite as a platform administrator. They will receive an invitation link valid for 7 days.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 304)(13, "input", 305);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_21_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r51);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.inviteEmail, $event) || (ctx_r2.inviteEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminUsersComponent_ng_container_21_Template_input_keyup_enter_13_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendInviteInline());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 306);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendInviteInline());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, AdminUsersComponent_ng_container_21_div_18_Template, 4, 1, "div", 307)(19, AdminUsersComponent_ng_container_21_div_19_Template, 4, 1, "div", 308);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 309)(21, "h3");
    \u0275\u0275text(22, "Pending Invitations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdminUsersComponent_ng_container_21_div_23_Template, 4, 0, "div", 140)(24, AdminUsersComponent_ng_container_21_div_24_Template, 16, 1, "div", 310)(25, AdminUsersComponent_ng_container_21_div_25_Template, 5, 0, "div", 142);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.inviteEmail);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.inviteSending || !ctx_r2.inviteEmail.trim());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.inviteSending ? "hourglass_empty" : "send");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.inviteSending ? "Sending..." : "Send Invite", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inviteSuccess);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.inviteError);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingInvitations);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingInvitations && ctx_r2.adminInvitations.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingInvitations && ctx_r2.adminInvitations.length === 0);
  }
}
function AdminUsersComponent_ng_container_22_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 342);
    \u0275\u0275element(1, "mat-spinner", 343);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Checking records...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 346)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " All professionals are geocoded. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_ng_container_2_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 352);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r55 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r55.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r55.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r55.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r55.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r55.country);
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 347)(2, "mat-icon");
    \u0275\u0275text(3, "location_searching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 348)(9, "table", 349)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Country");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, AdminUsersComponent_ng_container_22_ng_container_19_ng_container_2_tr_23_Template, 11, 5, "tr", 350);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 351);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_ng_container_19_ng_container_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r54);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.runGeocodeBackfillPros());
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.pendingProGeocodes.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" professional", ctx_r2.pendingProGeocodes.length !== 1 ? "s" : "", " need geocoding");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.pendingProGeocodes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isBackfillingPros);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isBackfillingPros ? "hourglass_empty" : "my_location");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBackfillingPros ? "Geocoding..." : "Geocode " + ctx_r2.pendingProGeocodes.length + " record" + (ctx_r2.pendingProGeocodes.length !== 1 ? "s" : ""), " ");
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_div_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 363);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.proBackfillResult.failed, " failed");
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_div_3_div_15_tr_15_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r57 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(2, 2, d_r57.lat, "1.4-4"), ", ", \u0275\u0275pipeBind2(3, 5, d_r57.lng, "1.4-4"));
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_div_3_div_15_tr_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 369);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_div_3_div_15_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 352);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 366);
    \u0275\u0275template(8, AdminUsersComponent_ng_container_22_ng_container_19_div_3_div_15_tr_15_span_8_Template, 4, 8, "span", 18)(9, AdminUsersComponent_ng_container_22_ng_container_19_div_3_div_15_tr_15_span_9_Template, 2, 0, "span", 367);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 368)(12, "mat-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r57 = ctx.$implicit;
    \u0275\u0275classProp("row-failed", d_r57.status === "failed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r57.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r57.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r57.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r57.lat != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r57.lat == null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("chip-updated", d_r57.status === "updated")("chip-failed", d_r57.status === "failed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r57.status === "updated" ? "check_circle" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r57.status, " ");
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 348)(1, "table", 364)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Coordinates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, AdminUsersComponent_ng_container_22_ng_container_19_div_3_div_15_tr_15_Template, 15, 13, "tr", 365);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.proBackfillResult.details);
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 353)(1, "div", 354)(2, "mat-icon", 355);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 356);
    \u0275\u0275text(5, "Geocoding complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 357)(7, "span", 358);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 359);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminUsersComponent_ng_container_22_ng_container_19_div_3_span_11_Template, 2, 1, "span", 360);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 361);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_ng_container_19_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r56);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.proBackfillResult = null);
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, AdminUsersComponent_ng_container_22_ng_container_19_div_3_div_15_Template, 16, 1, "div", 362);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r2.proBackfillResult.total, " total");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.proBackfillResult.updated, " updated");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.proBackfillResult.failed > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.proBackfillResult.details && ctx_r2.proBackfillResult.details.length > 0);
  }
}
function AdminUsersComponent_ng_container_22_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_22_ng_container_19_div_1_Template, 4, 0, "div", 344)(2, AdminUsersComponent_ng_container_22_ng_container_19_ng_container_2_Template, 28, 6, "ng-container", 18)(3, AdminUsersComponent_ng_container_22_ng_container_19_div_3_Template, 16, 4, "div", 345);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pendingProGeocodes.length === 0 && !ctx_r2.proBackfillResult && !ctx_r2.isBackfillingPros);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pendingProGeocodes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.proBackfillResult);
  }
}
function AdminUsersComponent_ng_container_22_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 342);
    \u0275\u0275element(1, "mat-spinner", 343);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Checking records...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 346)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " All users are geocoded. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_ng_container_2_tr_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 352);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const r_r59 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r59.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r59.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r59.city);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r59.state);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(r_r59.country);
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 347)(2, "mat-icon");
    \u0275\u0275text(3, "location_searching");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span")(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 348)(9, "table", 349)(10, "thead")(11, "tr")(12, "th");
    \u0275\u0275text(13, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "th");
    \u0275\u0275text(15, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "th");
    \u0275\u0275text(17, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "th");
    \u0275\u0275text(19, "State");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "th");
    \u0275\u0275text(21, "Country");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(22, "tbody");
    \u0275\u0275template(23, AdminUsersComponent_ng_container_22_ng_container_31_ng_container_2_tr_23_Template, 11, 5, "tr", 350);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "button", 351);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_ng_container_31_ng_container_2_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r58);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.runGeocodeBackfillUsers());
    });
    \u0275\u0275elementStart(25, "mat-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.pendingUserGeocodes.length);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" user", ctx_r2.pendingUserGeocodes.length !== 1 ? "s" : "", " need geocoding");
    \u0275\u0275advance(16);
    \u0275\u0275property("ngForOf", ctx_r2.pendingUserGeocodes);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.isBackfillingUsers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isBackfillingUsers ? "hourglass_empty" : "person_pin_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBackfillingUsers ? "Geocoding..." : "Geocode " + ctx_r2.pendingUserGeocodes.length + " record" + (ctx_r2.pendingUserGeocodes.length !== 1 ? "s" : ""), " ");
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_div_3_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 363);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r2.userBackfillResult.failed, " failed");
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_div_3_div_15_tr_15_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275pipe(3, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r61 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2("", \u0275\u0275pipeBind2(2, 2, d_r61.lat, "1.4-4"), ", ", \u0275\u0275pipeBind2(3, 5, d_r61.lng, "1.4-4"));
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_div_3_div_15_tr_15_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 369);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_div_3_div_15_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 352);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "td");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 366);
    \u0275\u0275template(8, AdminUsersComponent_ng_container_22_ng_container_31_div_3_div_15_tr_15_span_8_Template, 4, 8, "span", 18)(9, AdminUsersComponent_ng_container_22_ng_container_31_div_3_div_15_tr_15_span_9_Template, 2, 0, "span", 367);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "td")(11, "span", 368)(12, "mat-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r61 = ctx.$implicit;
    \u0275\u0275classProp("row-failed", d_r61.status === "failed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r61.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r61.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r61.city);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", d_r61.lat != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r61.lat == null);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("chip-updated", d_r61.status === "updated")("chip-failed", d_r61.status === "failed");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(d_r61.status === "updated" ? "check_circle" : "error_outline");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", d_r61.status, " ");
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_div_3_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 348)(1, "table", 364)(2, "thead")(3, "tr")(4, "th");
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "th");
    \u0275\u0275text(7, "Email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "th");
    \u0275\u0275text(9, "City");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "th");
    \u0275\u0275text(11, "Coordinates");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "th");
    \u0275\u0275text(13, "Status");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "tbody");
    \u0275\u0275template(15, AdminUsersComponent_ng_container_22_ng_container_31_div_3_div_15_tr_15_Template, 15, 13, "tr", 365);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.userBackfillResult.details);
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 353)(1, "div", 354)(2, "mat-icon", 355);
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 356);
    \u0275\u0275text(5, "Geocoding complete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 357)(7, "span", 358);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 359);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(11, AdminUsersComponent_ng_container_22_ng_container_31_div_3_span_11_Template, 2, 1, "span", 360);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 361);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_ng_container_31_div_3_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r60);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.userBackfillResult = null);
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(15, AdminUsersComponent_ng_container_22_ng_container_31_div_3_div_15_Template, 16, 1, "div", 362);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", ctx_r2.userBackfillResult.total, " total");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r2.userBackfillResult.updated, " updated");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.userBackfillResult.failed > 0);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx_r2.userBackfillResult.details && ctx_r2.userBackfillResult.details.length > 0);
  }
}
function AdminUsersComponent_ng_container_22_ng_container_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_22_ng_container_31_div_1_Template, 4, 0, "div", 344)(2, AdminUsersComponent_ng_container_22_ng_container_31_ng_container_2_Template, 28, 6, "ng-container", 18)(3, AdminUsersComponent_ng_container_22_ng_container_31_div_3_Template, 16, 4, "div", 345);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pendingUserGeocodes.length === 0 && !ctx_r2.userBackfillResult && !ctx_r2.isBackfillingUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.pendingUserGeocodes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.userBackfillResult);
  }
}
function AdminUsersComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 251)(2, "div", 252)(3, "mat-icon");
    \u0275\u0275text(4, "my_location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Geocode Backfill");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 337);
    \u0275\u0275text(8, "Set latitude/longitude coordinates for accounts that are missing map data. Coordinates are looked up from their registered address via the Nominatim API.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 338)(10, "div", 339)(11, "mat-icon");
    \u0275\u0275text(12, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div")(14, "h3");
    \u0275\u0275text(15, "Professionals");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Pro accounts that have an address but are missing map coordinates.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, AdminUsersComponent_ng_container_22_div_18_Template, 4, 0, "div", 340)(19, AdminUsersComponent_ng_container_22_ng_container_19_Template, 4, 3, "ng-container", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 341);
    \u0275\u0275elementStart(21, "div", 338)(22, "div", 339)(23, "mat-icon");
    \u0275\u0275text(24, "person_pin_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div")(26, "h3");
    \u0275\u0275text(27, "Users");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "p");
    \u0275\u0275text(29, "User accounts that have an address but are missing map coordinates.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(30, AdminUsersComponent_ng_container_22_div_30_Template, 4, 0, "div", 340)(31, AdminUsersComponent_ng_container_22_ng_container_31_Template, 4, 3, "ng-container", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingPendingPros);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingPendingPros);
    \u0275\u0275advance(11);
    \u0275\u0275property("ngIf", ctx_r2.isLoadingPendingUsers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingPendingUsers);
  }
}
function AdminUsersComponent_ng_container_23_div_15_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 388);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.newCategoryError);
  }
}
function AdminUsersComponent_ng_container_23_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r63 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 377)(1, "div", 378)(2, "div", 379)(3, "label");
    \u0275\u0275text(4, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 380);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_23_div_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCategory.icon, $event) || (ctx_r2.newCategory.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Paste an emoji");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 381)(9, "label");
    \u0275\u0275text(10, "Name ");
    \u0275\u0275elementStart(11, "span", 382);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 383);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_23_div_15_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCategory.name, $event) || (ctx_r2.newCategory.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 384)(15, "label");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 385);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_23_div_15_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r63);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCategory.description, $event) || (ctx_r2.newCategory.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 386);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_23_div_15_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r63);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitNewCategory());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AdminUsersComponent_ng_container_23_div_15_p_20_Template, 2, 1, "p", 387);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCategory.icon);
    \u0275\u0275advance(8);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCategory.name);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newCategory.description);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r2.newCategory.name.trim() || ctx_r2.addingCategory);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.addingCategory ? "Adding\u2026" : "Add", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.newCategoryError);
  }
}
function AdminUsersComponent_ng_container_23_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 389);
    \u0275\u0275element(1, "mat-spinner", 390);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading categories\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r64 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 402);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 394);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 403);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 396);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 397)(10, "span", 404);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 398)(13, "button", 405);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r64);
      const cat_r65 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEditCategory(cat_r65));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 406);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r64);
      const cat_r65 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleCategoryActive(cat_r65));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r65 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r65.icon || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r65.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r65.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r65.serviceCount);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", cat_r65.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r65.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("deactivate", cat_r65.isActive);
    \u0275\u0275property("disabled", ctx_r2.savingCategoryId === cat_r65.id)("title", cat_r65.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r65.isActive ? "visibility_off" : "visibility");
  }
}
function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r66 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 393)(2, "input", 407);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_2_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r66);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCategory.icon, $event) || (ctx_r2.editCategory.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span", 394)(4, "input", 408);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r66);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCategory.name, $event) || (ctx_r2.editCategory.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 395)(6, "input", 409);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_2_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r66);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCategory.description, $event) || (ctx_r2.editCategory.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 396);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 397)(10, "label", 410)(11, "input", 411);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r66);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCategory.isActive, $event) || (ctx_r2.editCategory.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 398)(14, "button", 412);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r66);
      const cat_r65 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveEditCategory(cat_r65));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 413);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r66);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelEditCategory());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r65 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCategory.icon);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCategory.name);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCategory.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r65.serviceCount);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCategory.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.editCategory.name.trim() || ctx_r2.savingCategoryId === cat_r65.id);
  }
}
function AdminUsersComponent_ng_container_23_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 401);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_1_Template, 19, 12, "ng-container", 18)(2, AdminUsersComponent_ng_container_23_div_17_div_14_ng_container_2_Template, 20, 6, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r65 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("inactive", !cat_r65.isActive)("editing", ctx_r2.editingCategoryId === cat_r65.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingCategoryId !== cat_r65.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingCategoryId === cat_r65.id);
  }
}
function AdminUsersComponent_ng_container_23_div_17_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 414);
    \u0275\u0275text(1, " No categories yet. Add one above. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_23_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 391)(1, "div", 392)(2, "span", 393);
    \u0275\u0275text(3, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 394);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 395);
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 396);
    \u0275\u0275text(9, "Pros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 397);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 398);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AdminUsersComponent_ng_container_23_div_17_div_14_Template, 3, 6, "div", 399)(15, AdminUsersComponent_ng_container_23_div_17_div_15_Template, 2, 0, "div", 400);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(14);
    \u0275\u0275property("ngForOf", ctx_r2.adminCategories);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.adminCategories.length === 0);
  }
}
function AdminUsersComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r62 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 370)(2, "div", 371)(3, "div", 372)(4, "mat-icon");
    \u0275\u0275text(5, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h2");
    \u0275\u0275text(8, "Service Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 373);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_23_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r62);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showAddCategoryForm = !ctx_r2.showAddCategoryForm;
      return \u0275\u0275resetView(ctx_r2.newCategoryError = "");
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, AdminUsersComponent_ng_container_23_div_15_Template, 21, 6, "div", 374)(16, AdminUsersComponent_ng_container_23_div_16_Template, 4, 0, "div", 375)(17, AdminUsersComponent_ng_container_23_div_17_Template, 16, 2, "div", 376);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate2("", ctx_r2.adminCategories.length, " categories \xB7 ", ctx_r2.activeCategoryCount, " active");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r2.showAddCategoryForm ? "close" : "add");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.showAddCategoryForm ? "Cancel" : "Add Category", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showAddCategoryForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.categoriesLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.categoriesLoading);
  }
}
function AdminUsersComponent_ng_container_24_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 342);
    \u0275\u0275element(1, "mat-spinner", 390);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_24_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r68 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 416)(1, "div", 417)(2, "mat-icon");
    \u0275\u0275text(3, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div")(5, "h3");
    \u0275\u0275text(6, "Show Pro Count on Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Display the number of registered professionals under each service category on the Services page.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 418)(10, "span", 419);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 351);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_10_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r68);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleShowProCount(!ctx_r2.showProCountOnCategories));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(10);
    \u0275\u0275classProp("enabled", ctx_r2.showProCountOnCategories);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.showProCountOnCategories ? "Enabled" : "Disabled", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.settingsSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.settingsSaving ? "Saving\u2026" : ctx_r2.showProCountOnCategories ? "Turn Off" : "Turn On", " ");
  }
}
function AdminUsersComponent_ng_container_24_div_25_Template(rf, ctx) {
  if (rf & 1) {
    const _r69 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 425)(1, "span", 426);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 427);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_25_Template_a_click_3_listener() {
      \u0275\u0275restoreView(_r69);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.startEditBannerMessage());
    });
    \u0275\u0275text(4, "Edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.bannerMessage || "No message set");
  }
}
function AdminUsersComponent_ng_container_24_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 428)(1, "mat-form-field", 429)(2, "mat-label");
    \u0275\u0275text(3, "Banner message");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "textarea", 430);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_26_Template_textarea_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r70);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.bannerMessageDraft, $event) || (ctx_r2.bannerMessageDraft = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 418)(6, "button", 351);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_26_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r70);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.saveBannerMessage());
    });
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 431);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_26_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r70);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.cancelEditBannerMessage());
    });
    \u0275\u0275text(9, " Cancel ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.bannerMessageDraft);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.bannerMessageSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.bannerMessageSaving ? "Saving\u2026" : "Save message", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.bannerMessageSaving);
  }
}
function AdminUsersComponent_ng_container_24_div_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 342);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading team\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r71 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 436);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 437)(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "span", 438);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 439);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_1_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r71);
      const m_r72 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEditTeamMember(m_r72));
    });
    \u0275\u0275elementStart(11, "mat-icon");
    \u0275\u0275text(12, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 440);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r71);
      const m_r72 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.deleteTeamMember(m_r72));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "delete");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const m_r72 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r72.initials);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(m_r72.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r72.role);
    \u0275\u0275advance();
    \u0275\u0275classProp("off", !m_r72.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r72.isActive ? "Active" : "Hidden");
  }
}
function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r73 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 441);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r73);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editTeamMember.name, $event) || (ctx_r2.editTeamMember.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 442);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r73);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editTeamMember.role, $event) || (ctx_r2.editTeamMember.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 443);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r73);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editTeamMember.initials, $event) || (ctx_r2.editTeamMember.initials = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 444);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r73);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editTeamMember.displayOrder, $event) || (ctx_r2.editTeamMember.displayOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 445);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r73);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editTeamMember.bio, $event) || (ctx_r2.editTeamMember.bio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "label", 446)(7, "input", 447);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template_input_click_7_listener($event) {
      \u0275\u0275restoreView(_r73);
      const ctx_r2 = \u0275\u0275nextContext(4);
      $event.preventDefault();
      return \u0275\u0275resetView(ctx_r2.editTeamMember.isActive = !ctx_r2.editTeamMember.isActive);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Active ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 448);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r73);
      const m_r72 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveTeamMember(m_r72));
    });
    \u0275\u0275elementStart(10, "mat-icon");
    \u0275\u0275text(11, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 449);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r73);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelEditTeamMember());
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "close");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const m_r72 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editTeamMember.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editTeamMember.role);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editTeamMember.initials);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editTeamMember.displayOrder);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editTeamMember.bio);
    \u0275\u0275advance(2);
    \u0275\u0275property("checked", ctx_r2.editTeamMember.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.savingTeamMemberId === m_r72.id);
  }
}
function AdminUsersComponent_ng_container_24_div_42_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 435);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_1_Template, 16, 6, "ng-container", 18)(2, AdminUsersComponent_ng_container_24_div_42_div_1_ng_container_2_Template, 15, 7, "ng-container", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r72 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingTeamMemberId !== m_r72.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingTeamMemberId === m_r72.id);
  }
}
function AdminUsersComponent_ng_container_24_div_42_p_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 450);
    \u0275\u0275text(1, "No team members yet.");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_24_div_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 432);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_24_div_42_div_1_Template, 3, 2, "div", 433)(2, AdminUsersComponent_ng_container_24_div_42_p_2_Template, 2, 0, "p", 434);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.teamMembers);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.teamMembers.length === 0);
  }
}
function AdminUsersComponent_ng_container_24_button_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r74 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 451);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_button_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r74);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showAddTeamForm = true);
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Add member ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_24_div_44_Template(rf, ctx) {
  if (rf & 1) {
    const _r75 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 452)(1, "input", 453);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_44_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newTeamMember.name, $event) || (ctx_r2.newTeamMember.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "input", 442);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_44_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newTeamMember.role, $event) || (ctx_r2.newTeamMember.role = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 454);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_44_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newTeamMember.initials, $event) || (ctx_r2.newTeamMember.initials = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 455);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_44_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newTeamMember.displayOrder, $event) || (ctx_r2.newTeamMember.displayOrder = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "textarea", 445);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_div_44_Template_textarea_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newTeamMember.bio, $event) || (ctx_r2.newTeamMember.bio = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 456)(7, "button", 457);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_44_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.showAddTeamForm = false);
    });
    \u0275\u0275text(8, "Cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 351);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_div_44_Template_button_click_9_listener() {
      \u0275\u0275restoreView(_r75);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitNewTeamMember());
    });
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTeamMember.name);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTeamMember.role);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTeamMember.initials);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTeamMember.displayOrder);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.newTeamMember.bio);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.addingTeamMember || !ctx_r2.newTeamMember.name);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.addingTeamMember ? "Adding\u2026" : "Add member", " ");
  }
}
function AdminUsersComponent_ng_container_24_div_54_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 342);
    \u0275\u0275element(1, "mat-spinner", 390);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading commission settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_24_ng_container_55_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r76 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 460)(1, "div", 461)(2, "div", 462)(3, "span", 463);
    \u0275\u0275text(4, "User Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 464);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 465);
    \u0275\u0275text(8, "added on top of bid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 462)(10, "span", 463);
    \u0275\u0275text(11, "Pro Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 464);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 465);
    \u0275\u0275text(15, "deducted from payout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 462)(17, "span", 463);
    \u0275\u0275text(18, "GST on User Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 464);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 462)(22, "span", 463);
    \u0275\u0275text(23, "Min Platform Fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span", 464);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 462)(27, "span", 463);
    \u0275\u0275text(28, "Max User Charge Cap");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "span", 464);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(31, "button", 466);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_ng_container_55_div_1_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r76);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEditingCommission());
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275text(34, " Edit ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", ctx_r2.commissionConfig.userCommissionPercent, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.commissionConfig.proCommissionPercent, "%");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1("", ctx_r2.commissionConfig.gstPercent, "%");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\u20B9", ctx_r2.commissionConfig.minPlatformFee);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("", ctx_r2.commissionConfig.maxCommissionPercent, "%");
  }
}
function AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r77 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 467)(1, "div", 468)(2, "div", 469)(3, "h4");
    \u0275\u0275text(4, "User-side Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 470)(6, "label");
    \u0275\u0275text(7, "User Commission % ");
    \u0275\u0275elementStart(8, "span", 471);
    \u0275\u0275text(9, "Added on top of the bid \u2014 paid by the user");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 472)(11, "input", 473);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.commissionDraft.userCommissionPercent, $event) || (ctx_r2.commissionDraft.userCommissionPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 474);
    \u0275\u0275text(13, "%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "div", 470)(15, "label");
    \u0275\u0275text(16, "GST on User Commission % ");
    \u0275\u0275elementStart(17, "span", 471);
    \u0275\u0275text(18, "Applied to the user commission amount");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 472)(20, "input", 475);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.commissionDraft.gstPercent, $event) || (ctx_r2.commissionDraft.gstPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span", 474);
    \u0275\u0275text(22, "%");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 470)(24, "label");
    \u0275\u0275text(25, "Minimum Platform Fee ");
    \u0275\u0275elementStart(26, "span", 471);
    \u0275\u0275text(27, "Floor charge regardless of percentage");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(28, "div", 472)(29, "span", 476);
    \u0275\u0275text(30, "\u20B9");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "input", 477);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template_input_ngModelChange_31_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.commissionDraft.minPlatformFee, $event) || (ctx_r2.commissionDraft.minPlatformFee = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(32, "div", 470)(33, "label");
    \u0275\u0275text(34, "Max User Charge Cap % ");
    \u0275\u0275elementStart(35, "span", 471);
    \u0275\u0275text(36, "User commission will never exceed this % of the bid");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "div", 472)(38, "input", 473);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template_input_ngModelChange_38_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.commissionDraft.maxCommissionPercent, $event) || (ctx_r2.commissionDraft.maxCommissionPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "span", 474);
    \u0275\u0275text(40, "%");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 469)(42, "h4");
    \u0275\u0275text(43, "Pro-side Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 470)(45, "label");
    \u0275\u0275text(46, "Pro Commission % ");
    \u0275\u0275elementStart(47, "span", 471);
    \u0275\u0275text(48, "Deducted from the pro's payout");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(49, "div", 472)(50, "input", 473);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template_input_ngModelChange_50_listener($event) {
      \u0275\u0275restoreView(_r77);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.commissionDraft.proCommissionPercent, $event) || (ctx_r2.commissionDraft.proCommissionPercent = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(51, "span", 474);
    \u0275\u0275text(52, "%");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(53, "div", 478)(54, "div", 479)(55, "mat-icon");
    \u0275\u0275text(56, "calculate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(57, "span");
    \u0275\u0275text(58);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(59, "div", 480)(60, "div", 481)(61, "h5");
    \u0275\u0275text(62, "Consumer Pays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(63, "div", 482)(64, "span");
    \u0275\u0275text(65, "Job bid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(69, "div", 482)(70, "span");
    \u0275\u0275text(71);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "span");
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(75, "div", 482)(76, "span");
    \u0275\u0275text(77);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(78, "span");
    \u0275\u0275text(79);
    \u0275\u0275pipe(80, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(81, "div", 483)(82, "span");
    \u0275\u0275text(83, "Total charged");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(84, "span");
    \u0275\u0275text(85);
    \u0275\u0275pipe(86, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(87, "div", 481)(88, "h5");
    \u0275\u0275text(89, "Pro Receives");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(90, "div", 482)(91, "span");
    \u0275\u0275text(92, "Job bid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(93, "span");
    \u0275\u0275text(94);
    \u0275\u0275pipe(95, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(96, "div", 482)(97, "span");
    \u0275\u0275text(98);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(99, "span");
    \u0275\u0275text(100);
    \u0275\u0275pipe(101, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(102, "div", 483)(103, "span");
    \u0275\u0275text(104, "Pro payout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(105, "span");
    \u0275\u0275text(106);
    \u0275\u0275pipe(107, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(108, "div", 484)(109, "h5");
    \u0275\u0275text(110, "Platform Earns");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(111, "div", 482)(112, "span");
    \u0275\u0275text(113, "From user");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(114, "span");
    \u0275\u0275text(115);
    \u0275\u0275pipe(116, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(117, "div", 482)(118, "span");
    \u0275\u0275text(119, "From pro");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(120, "span");
    \u0275\u0275text(121);
    \u0275\u0275pipe(122, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(123, "div", 483)(124, "span");
    \u0275\u0275text(125, "Total (before GST remittance)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(126, "span");
    \u0275\u0275text(127);
    \u0275\u0275pipe(128, "number");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(129, "div", 485)(130, "button", 486);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template_button_click_130_listener() {
      \u0275\u0275restoreView(_r77);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.cancelEditingCommission());
    });
    \u0275\u0275text(131, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(132, "button", 351);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template_button_click_132_listener() {
      \u0275\u0275restoreView(_r77);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveCommissionConfig());
    });
    \u0275\u0275text(133);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.commissionDraft.userCommissionPercent);
    \u0275\u0275advance(9);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.commissionDraft.gstPercent);
    \u0275\u0275advance(11);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.commissionDraft.minPlatformFee);
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.commissionDraft.maxCommissionPercent);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.commissionDraft.proCommissionPercent);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("Live Preview \u2014 \u20B9", ctx_r2.previewBid, " job");
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(68, 22, ctx_r2.previewBid, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Platform fee (", ctx_r2.commissionDraft.userCommissionPercent, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ \u20B9", \u0275\u0275pipeBind2(74, 25, ctx_r2.previewUserCommission, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("GST on fee (", ctx_r2.commissionDraft.gstPercent, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("+ \u20B9", \u0275\u0275pipeBind2(80, 28, ctx_r2.previewGst, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(86, 31, ctx_r2.previewUserTotal, "1.2-2"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(95, 34, ctx_r2.previewBid, "1.2-2"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Platform deduction (", ctx_r2.commissionDraft.proCommissionPercent, "%)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("\u2212 \u20B9", \u0275\u0275pipeBind2(101, 37, ctx_r2.previewProDeduction, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(107, 40, ctx_r2.previewProPayout, "1.2-2"));
    \u0275\u0275advance(9);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(116, 43, ctx_r2.previewUserCommission, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(122, 46, ctx_r2.previewProDeduction, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(128, 49, ctx_r2.previewPlatformEarnings, "1.2-2"));
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.commissionSaving);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.commissionSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.commissionSaving ? "Saving\u2026" : "Save Commission Settings", " ");
  }
}
function AdminUsersComponent_ng_container_24_ng_container_55_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_24_ng_container_55_div_1_Template, 35, 5, "div", 458)(2, AdminUsersComponent_ng_container_24_ng_container_55_div_2_Template, 134, 52, "div", 459);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.commissionEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.commissionEditing);
  }
}
function AdminUsersComponent_ng_container_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 251)(2, "div", 252)(3, "mat-icon");
    \u0275\u0275text(4, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Platform Settings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 337);
    \u0275\u0275text(8, "Control site-wide display options.");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminUsersComponent_ng_container_24_div_9_Template, 4, 0, "div", 340)(10, AdminUsersComponent_ng_container_24_div_10_Template, 14, 5, "div", 415);
    \u0275\u0275elementStart(11, "div", 416)(12, "div", 417)(13, "mat-icon");
    \u0275\u0275text(14, "campaign");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div")(16, "h3");
    \u0275\u0275text(17, "Home Page Banner");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "p");
    \u0275\u0275text(19, "Show a scrolling announcement banner at the top of the home page.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "div", 418)(21, "span", 419);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "button", 351);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_Template_button_click_23_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBanner(!ctx_r2.bannerEnabled));
    });
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AdminUsersComponent_ng_container_24_div_25_Template, 5, 1, "div", 420)(26, AdminUsersComponent_ng_container_24_div_26_Template, 10, 4, "div", 421);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 416)(28, "div", 417)(29, "mat-icon");
    \u0275\u0275text(30, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div")(32, "h3");
    \u0275\u0275text(33, "Our Team Section");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "p");
    \u0275\u0275text(35, "Manage the team shown on the public About page and control whether it appears.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(36, "div", 418)(37, "span", 419);
    \u0275\u0275text(38);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "button", 351);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_24_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r67);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleOurTeam(!ctx_r2.showOurTeam));
    });
    \u0275\u0275text(40);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(41, AdminUsersComponent_ng_container_24_div_41_Template, 4, 0, "div", 340)(42, AdminUsersComponent_ng_container_24_div_42_Template, 3, 2, "div", 422)(43, AdminUsersComponent_ng_container_24_button_43_Template, 4, 0, "button", 423)(44, AdminUsersComponent_ng_container_24_div_44_Template, 11, 7, "div", 424);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 416)(46, "div", 417)(47, "mat-icon");
    \u0275\u0275text(48, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(49, "div")(50, "h3");
    \u0275\u0275text(51, "Platform Commission");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(52, "p");
    \u0275\u0275text(53, "Control the fee charged to users and the deduction from pro payouts on each transaction.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(54, AdminUsersComponent_ng_container_24_div_54_Template, 4, 0, "div", 340)(55, AdminUsersComponent_ng_container_24_ng_container_55_Template, 3, 2, "ng-container", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("ngIf", ctx_r2.settingsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.settingsLoading);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("enabled", ctx_r2.bannerEnabled);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.bannerEnabled ? "Enabled" : "Disabled", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.bannerSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.bannerSaving ? "Saving\u2026" : ctx_r2.bannerEnabled ? "Turn Off" : "Turn On", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.bannerMessageEditing);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.bannerMessageEditing);
    \u0275\u0275advance(11);
    \u0275\u0275classProp("enabled", ctx_r2.showOurTeam);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.showOurTeam ? "Visible on /about" : "Hidden", " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.ourTeamSaving);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.ourTeamSaving ? "Saving\u2026" : ctx_r2.showOurTeam ? "Hide section" : "Show section", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.teamLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.teamLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.showAddTeamForm);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.showAddTeamForm);
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.commissionLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.commissionLoading && ctx_r2.commissionConfig);
  }
}
var AdminUsersComponent = class _AdminUsersComponent {
  adminUsersService;
  auth;
  cdr;
  router;
  route;
  dialog;
  proUsersService;
  snack;
  serviceAreaService;
  bottomSheet;
  http;
  payoutService;
  settingsService;
  bannerService;
  serviceCategoryService;
  teamService;
  // ── Navigation ────────────────────────────────────────────────────────────
  activeView = "dashboard";
  showToolsMenu = false;
  viewSub;
  navItems = [
    { id: "dashboard", label: "Dashboard", icon: "dashboard" },
    { id: "disputes", label: "Disputes", icon: "gavel" },
    { id: "search", label: "User / Pro Search", icon: "manage_search" },
    { id: "service-areas", label: "Service Areas", icon: "location_on" },
    { id: "categories", label: "Categories", icon: "category" },
    { id: "invite-admin", label: "Invite Admin", icon: "person_add" },
    { id: "geocode", label: "Geocode", icon: "my_location" },
    { id: "settings", label: "Settings", icon: "tune" }
  ];
  setView(view) {
    this.showToolsMenu = false;
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { view },
      queryParamsHandling: "merge"
    });
  }
  applyView(view) {
    this.activeView = view;
    if (view === "dashboard")
      this.loadDashboard();
    if (view === "disputes")
      this.loadDisputes();
    if (view === "settings") {
      this.loadSettings();
      this.loadCommissionConfig();
      this.loadTeamSettings();
    }
    if (view === "categories")
      this.loadAdminCategories();
    if (view === "geocode")
      this.loadPendingGeocodes();
    this.cdr.markForCheck();
  }
  getActiveViewLabel() {
    return this.navItems.find((n) => n.id === this.activeView)?.label ?? "";
  }
  getActiveViewIcon() {
    return this.navItems.find((n) => n.id === this.activeView)?.icon ?? "menu";
  }
  // ── Dashboard ─────────────────────────────────────────────────────────────
  dateRangePreset = "30d";
  customFrom = "";
  customTo = "";
  metrics = null;
  isLoadingMetrics = false;
  jobsByCategory = [];
  isLoadingJobsByCat = false;
  dashCountry = "";
  dashState = "";
  dashDistrict = "";
  loadDashboard() {
    this.loadRegistrationMetrics();
    this.loadJobsByCategory();
  }
  computeRange() {
    const now = /* @__PURE__ */ new Date();
    const iso = (d) => d.toISOString();
    const daysAgo = (n) => iso(new Date(now.getTime() - n * 864e5));
    if (this.dateRangePreset === "all")
      return {};
    if (this.dateRangePreset === "custom") {
      const r = {};
      if (this.customFrom)
        r.from = new Date(this.customFrom).toISOString();
      if (this.customTo) {
        const t = new Date(this.customTo);
        t.setDate(t.getDate() + 1);
        r.to = t.toISOString();
      }
      return r;
    }
    if (this.dateRangePreset === "year")
      return { from: iso(new Date(now.getFullYear(), 0, 1)), to: iso(now) };
    const days = this.dateRangePreset === "7d" ? 7 : this.dateRangePreset === "90d" ? 90 : 30;
    return { from: daysAgo(days), to: iso(now) };
  }
  applyPreset(preset) {
    this.dateRangePreset = preset;
    this.loadDashboard();
  }
  applyCustomRange() {
    this.dateRangePreset = "custom";
    this.loadDashboard();
  }
  loadRegistrationMetrics() {
    const { from, to } = this.computeRange();
    this.isLoadingMetrics = true;
    this.adminUsersService.getRegistrationMetrics(from, to).subscribe({
      next: (m) => {
        this.metrics = m;
        this.isLoadingMetrics = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingMetrics = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadJobsByCategory() {
    const { from, to } = this.computeRange();
    this.isLoadingJobsByCat = true;
    this.adminUsersService.getJobsByCategory({
      country: this.dashCountry || void 0,
      state: this.dashState || void 0,
      district: this.dashDistrict || void 0,
      from,
      to
    }).subscribe({
      next: (rows) => {
        this.jobsByCategory = rows ?? [];
        this.isLoadingJobsByCat = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingJobsByCat = false;
        this.cdr.markForCheck();
      }
    });
  }
  get jobsByCategoryMax() {
    return this.jobsByCategory.reduce((m, r) => Math.max(m, r.count), 0);
  }
  barPct(count) {
    const max = this.jobsByCategoryMax;
    return max > 0 ? Math.round(count / max * 100) : 0;
  }
  // Region dropdown options, reusing the service areas already loaded in ngOnInit.
  get dashCountries() {
    return [...new Set(this.serviceAreas.map((a) => a.country).filter((c) => !!c))].sort();
  }
  get dashStates() {
    const src = this.dashCountry ? this.serviceAreas.filter((a) => a.country === this.dashCountry) : this.serviceAreas;
    return [...new Set(src.map((a) => a.state).filter((s) => !!s))].sort();
  }
  get dashDistricts() {
    const src = this.serviceAreas.filter((a) => (!this.dashCountry || a.country === this.dashCountry) && (!this.dashState || a.state === this.dashState));
    return [...new Set(src.map((a) => a.district).filter((d) => !!d))].sort();
  }
  onDashCountryChange(val) {
    this.dashCountry = val;
    this.dashState = "";
    this.dashDistrict = "";
    this.loadJobsByCategory();
  }
  onDashStateChange(val) {
    this.dashState = val;
    this.dashDistrict = "";
    this.loadJobsByCategory();
  }
  onDashDistrictChange(val) {
    this.dashDistrict = val;
    this.loadJobsByCategory();
  }
  clearDashRegion() {
    this.dashCountry = "";
    this.dashState = "";
    this.dashDistrict = "";
    this.loadJobsByCategory();
  }
  // ── Search ────────────────────────────────────────────────────────────────
  searchQuery = "";
  searchType = "user";
  setSearchType(type) {
    this.searchType = type;
    this.users = [];
    this.pros = [];
    this.selectedUser = null;
    this.selectedPro = null;
    this.cdr.detectChanges();
  }
  isSearching = false;
  isLoadingDetails = false;
  users = [];
  pros = [];
  selectedUser = null;
  selectedPro = null;
  userJobs = [];
  proJobs = [];
  userConversations = [];
  proConversations = [];
  selectedConversation = null;
  conversationMessages = [];
  // ── Invite Admin ──────────────────────────────────────────────────────────
  adminInvitations = [];
  isLoadingInvitations = false;
  inviteEmail = "";
  inviteSending = false;
  inviteSuccess = "";
  inviteError = "";
  // ── Geocode ───────────────────────────────────────────────────────────────
  isBackfillingPros = false;
  isBackfillingUsers = false;
  isLoadingPendingPros = false;
  isLoadingPendingUsers = false;
  pendingProGeocodes = [];
  pendingUserGeocodes = [];
  proBackfillResult = null;
  userBackfillResult = null;
  // ── Service Radius ────────────────────────────────────────────────────────
  isEditingRadius = false;
  editRadiusValue = 25;
  // ── Entity Payments (user/pro detail tab) ────────────────────────────────
  entityPayments = [];
  isLoadingEntityPayments = false;
  refundingPaymentId = null;
  refundConfirmPaymentId = null;
  refundDirectNotes = "";
  // ── Pro Payouts (admin payout management) ────────────────────────────────
  proPayouts = [];
  isLoadingProPayouts = false;
  retryingPayoutId = null;
  loadEntityPayments() {
    const userId = this.selectedUser?.id;
    const proId = this.selectedPro?.id;
    if (!userId && !proId)
      return;
    this.isLoadingEntityPayments = true;
    this.adminUsersService.getAdminPayments(void 0, userId, proId).subscribe({
      next: (payments) => {
        this.entityPayments = payments ?? [];
        this.isLoadingEntityPayments = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingEntityPayments = false;
        this.cdr.markForCheck();
      }
    });
  }
  openDirectRefundConfirm(paymentId) {
    this.refundConfirmPaymentId = paymentId;
    this.refundDirectNotes = "";
  }
  confirmDirectRefund(paymentId) {
    this.refundingPaymentId = paymentId;
    this.adminUsersService.refundPayment(paymentId, this.refundDirectNotes.trim() || "Admin-initiated refund").subscribe({
      next: () => {
        const p = this.entityPayments.find((x) => x.id === paymentId);
        if (p) {
          p.status = "Refunded";
          p.refundedAt = (/* @__PURE__ */ new Date()).toISOString();
          p.refundAmount = p.amount;
          p.refundReason = this.refundDirectNotes.trim() || "Admin-initiated refund";
        }
        this.refundingPaymentId = null;
        this.refundConfirmPaymentId = null;
        this.snack.open("Refund processed successfully.", "OK", { duration: 4e3, panelClass: "snack-success" });
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.refundingPaymentId = null;
        const msg = err?.error?.message ?? "Failed to process refund.";
        this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
        this.cdr.markForCheck();
      }
    });
  }
  loadProPayouts(proId) {
    this.isLoadingProPayouts = true;
    this.payoutService.getAdminPayouts(proId).subscribe({
      next: (payouts) => {
        this.proPayouts = payouts ?? [];
        this.isLoadingProPayouts = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingProPayouts = false;
        this.cdr.markForCheck();
      }
    });
  }
  retryPayout(payoutId) {
    this.retryingPayoutId = payoutId;
    this.payoutService.retryPayout(payoutId).subscribe({
      next: () => {
        const p = this.proPayouts.find((x) => x.id === payoutId);
        if (p)
          p.status = "Processing";
        this.retryingPayoutId = null;
        this.snack.open("Payout retry initiated.", "OK", { duration: 3e3, panelClass: "snack-success" });
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.retryingPayoutId = null;
        const msg = err?.error?.message ?? "Payout retry failed.";
        this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
        this.cdr.markForCheck();
      }
    });
  }
  // ── Disputes ──────────────────────────────────────────────────────────────
  disputes = [];
  isLoadingDisputes = false;
  resolvingDisputeId = null;
  refundConfirmJobId = null;
  refundNotes = "";
  completeConfirmJobId = null;
  completeNotes = "";
  // Disputes view sub-tabs (open vs resolved history)
  disputeTab = "open";
  resolvedDisputes = [];
  isLoadingResolved = false;
  resolvedFrom = "";
  resolvedTo = "";
  resolvedSearch = "";
  // ── Relationships ─────────────────────────────────────────────────────────
  linkedUsers = [];
  linkedPros = [];
  isLoadingRelationships = false;
  addUserId = null;
  // ── Service Areas ─────────────────────────────────────────────────────────
  serviceAreas = [];
  isLoadingAreas = false;
  isSavingArea = false;
  areaErrorMsg = "";
  newArea = { country: "", state: "", district: "", pinCode: "", notes: "", isActive: true };
  // ── Service Area List Filter ───────────────────────────────────────────────
  listFilterCountry = "";
  listFilterState = "";
  listShowInactive = false;
  get listStates() {
    const src = this.listFilterCountry ? this.serviceAreas.filter((a) => a.country === this.listFilterCountry) : this.serviceAreas;
    return [...new Set(src.map((a) => a.state).filter((s) => !!s))].sort();
  }
  get filteredListAreas() {
    return this.serviceAreas.filter((a) => {
      if (!this.listShowInactive && !a.isActive)
        return false;
      if (this.listFilterCountry && a.country !== this.listFilterCountry)
        return false;
      if (this.listFilterState && a.state !== this.listFilterState)
        return false;
      return true;
    });
  }
  onListCountryChange(val) {
    this.listFilterCountry = val;
    this.listFilterState = "";
  }
  onListStateChange(val) {
    this.listFilterState = val;
  }
  onListInactiveChange(val) {
    this.listShowInactive = val;
  }
  // ── Service Area Map ───────────────────────────────────────────────────────
  showMapView = false;
  mapFilterCountry = "";
  mapFilterState = "";
  mapShowInactive = false;
  isGeocodingAreas = false;
  leafletMap = null;
  mapMarkers = [];
  geocodeCache = /* @__PURE__ */ new Map();
  regionBoundsCache = /* @__PURE__ */ new Map();
  mapLoadId = 0;
  lastGeocodeMs = 0;
  get mapCountries() {
    return [...new Set(this.serviceAreas.map((a) => a.country))].sort();
  }
  get mapStates() {
    const src = this.mapFilterCountry ? this.serviceAreas.filter((a) => a.country === this.mapFilterCountry) : this.serviceAreas;
    return [...new Set(src.map((a) => a.state).filter((s) => !!s))].sort();
  }
  get filteredMapAreas() {
    return this.serviceAreas.filter((a) => {
      if (!this.mapShowInactive && !a.isActive)
        return false;
      if (this.mapFilterCountry && a.country !== this.mapFilterCountry)
        return false;
      if (this.mapFilterState && a.state !== this.mapFilterState)
        return false;
      return true;
    });
  }
  // ── Categories ────────────────────────────────────────────────────────────
  adminCategories = [];
  categoriesLoading = false;
  showAddCategoryForm = false;
  addingCategory = false;
  newCategory = { name: "", description: "", icon: "" };
  newCategoryError = "";
  editingCategoryId = null;
  editCategory = { name: "", description: "", icon: "", isActive: true };
  savingCategoryId = null;
  get activeCategoryCount() {
    return this.adminCategories.filter((c) => c.isActive).length;
  }
  loadAdminCategories() {
    this.categoriesLoading = true;
    this.serviceCategoryService.getAllCategories().subscribe({
      next: (cats) => {
        this.adminCategories = cats;
        this.categoriesLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.categoriesLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  submitNewCategory() {
    if (!this.newCategory.name.trim())
      return;
    this.addingCategory = true;
    this.newCategoryError = "";
    this.serviceCategoryService.createCategory({
      name: this.newCategory.name.trim(),
      description: this.newCategory.description.trim() || void 0,
      icon: this.newCategory.icon.trim() || void 0
    }).subscribe({
      next: (cat) => {
        cat.serviceCount = 0;
        this.adminCategories = [...this.adminCategories, cat].sort((a, b) => a.name.localeCompare(b.name));
        this.newCategory = { name: "", description: "", icon: "" };
        this.showAddCategoryForm = false;
        this.addingCategory = false;
        this.cdr.detectChanges();
        this.snack.open(`Category "${cat.name}" created`, "OK", { duration: 2500, panelClass: "snack-success" });
      },
      error: (err) => {
        this.newCategoryError = err.error?.message || err.error?.title || "Failed to create category.";
        this.addingCategory = false;
        this.cdr.detectChanges();
      }
    });
  }
  startEditCategory(cat) {
    this.editingCategoryId = cat.id;
    this.editCategory = { name: cat.name, description: cat.description ?? "", icon: cat.icon ?? "", isActive: cat.isActive };
    this.cdr.detectChanges();
  }
  cancelEditCategory() {
    this.editingCategoryId = null;
    this.cdr.detectChanges();
  }
  saveEditCategory(cat) {
    if (!this.editCategory.name.trim())
      return;
    this.savingCategoryId = cat.id;
    this.serviceCategoryService.updateCategory(cat.id, __spreadProps(__spreadValues({}, cat), {
      name: this.editCategory.name.trim(),
      description: this.editCategory.description.trim() || void 0,
      icon: this.editCategory.icon.trim() || void 0,
      isActive: this.editCategory.isActive
    })).subscribe({
      next: (updated) => {
        const idx = this.adminCategories.findIndex((c) => c.id === cat.id);
        if (idx >= 0)
          this.adminCategories[idx] = __spreadProps(__spreadValues({}, updated), { serviceCount: cat.serviceCount });
        this.adminCategories = [...this.adminCategories].sort((a, b) => a.name.localeCompare(b.name));
        this.editingCategoryId = null;
        this.savingCategoryId = null;
        this.cdr.detectChanges();
        this.snack.open("Category updated", "OK", { duration: 2e3, panelClass: "snack-success" });
      },
      error: () => {
        this.savingCategoryId = null;
        this.cdr.detectChanges();
        this.snack.open("Failed to update category", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  toggleCategoryActive(cat) {
    this.savingCategoryId = cat.id;
    this.serviceCategoryService.updateCategory(cat.id, __spreadProps(__spreadValues({}, cat), { isActive: !cat.isActive })).subscribe({
      next: (updated) => {
        const idx = this.adminCategories.findIndex((c) => c.id === cat.id);
        if (idx >= 0)
          this.adminCategories[idx] = __spreadProps(__spreadValues({}, updated), { serviceCount: cat.serviceCount });
        this.adminCategories = [...this.adminCategories];
        this.savingCategoryId = null;
        this.cdr.detectChanges();
      },
      error: () => {
        this.savingCategoryId = null;
        this.cdr.detectChanges();
        this.snack.open("Failed to update category", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  // ── Settings ───────────────────────────────────────────────────────────────
  settingsLoading = false;
  settingsSaving = false;
  showProCountOnCategories = false;
  loadSettings() {
    this.settingsLoading = true;
    this.settingsService.getSetting("show_pro_count_on_categories").subscribe((value) => {
      this.showProCountOnCategories = value === "true";
      this.settingsLoading = false;
      this.cdr.detectChanges();
    });
    this.loadBannerSettings();
  }
  // ── Home page announcement banner ────────────────────────────────────────────
  bannerEnabled = false;
  bannerMessage = "";
  bannerSaving = false;
  // enable/disable toggle save in flight
  bannerMessageEditing = false;
  bannerMessageDraft = "";
  bannerMessageSaving = false;
  loadBannerSettings() {
    this.bannerService.getBanner().subscribe((b) => {
      this.bannerEnabled = b.enabled;
      this.bannerMessage = b.message;
      this.cdr.detectChanges();
    });
  }
  // The on/off toggle persists immediately, like the other platform settings.
  toggleBanner(enabled) {
    this.bannerSaving = true;
    this.settingsService.updateSetting("banner_enabled", String(enabled)).subscribe({
      next: () => {
        this.bannerEnabled = enabled;
        this.bannerSaving = false;
        this.cdr.detectChanges();
        this.snack.open(`Home banner ${enabled ? "enabled" : "disabled"}`, "OK", { duration: 2500, panelClass: "snack-success" });
      },
      error: () => {
        this.bannerSaving = false;
        this.cdr.detectChanges();
        this.snack.open("Failed to update banner", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  startEditBannerMessage() {
    this.bannerMessageDraft = this.bannerMessage;
    this.bannerMessageEditing = true;
    this.cdr.detectChanges();
  }
  cancelEditBannerMessage() {
    this.bannerMessageEditing = false;
    this.cdr.detectChanges();
  }
  saveBannerMessage() {
    this.bannerMessageSaving = true;
    this.settingsService.updateSetting("banner_message", this.bannerMessageDraft).subscribe({
      next: () => {
        this.bannerMessage = this.bannerMessageDraft;
        this.bannerMessageEditing = false;
        this.bannerMessageSaving = false;
        this.cdr.detectChanges();
        this.snack.open("Banner message updated", "OK", { duration: 2500, panelClass: "snack-success" });
      },
      error: () => {
        this.bannerMessageSaving = false;
        this.cdr.detectChanges();
        this.snack.open("Failed to save banner message", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  toggleShowProCount(enabled) {
    this.settingsSaving = true;
    this.settingsService.updateSetting("show_pro_count_on_categories", String(enabled)).subscribe({
      next: () => {
        this.showProCountOnCategories = enabled;
        this.settingsSaving = false;
        this.cdr.detectChanges();
        this.snack.open(`Pro count display ${enabled ? "enabled" : "disabled"}`, "OK", { duration: 2500, panelClass: "snack-success" });
      },
      error: () => {
        this.settingsSaving = false;
        this.cdr.detectChanges();
        this.snack.open("Failed to save setting", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  // ── Our Team management (platform settings) ────────────────────────────────
  showOurTeam = false;
  ourTeamSaving = false;
  teamMembers = [];
  teamLoading = false;
  showAddTeamForm = false;
  addingTeamMember = false;
  newTeamMember = { name: "", role: "", bio: "", initials: "", displayOrder: 0, isActive: true };
  editingTeamMemberId = null;
  editTeamMember = {};
  savingTeamMemberId = null;
  loadTeamSettings() {
    this.settingsService.getSetting("show_our_team").subscribe((value) => {
      this.showOurTeam = value === "true";
      this.cdr.detectChanges();
    });
    this.teamLoading = true;
    this.teamService.getAll().subscribe({
      next: (members) => {
        this.teamMembers = members ?? [];
        this.teamLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.teamLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  toggleOurTeam(enabled) {
    this.ourTeamSaving = true;
    this.settingsService.updateSetting("show_our_team", String(enabled)).subscribe({
      next: () => {
        this.showOurTeam = enabled;
        this.ourTeamSaving = false;
        this.cdr.detectChanges();
        this.snack.open(`Our Team section ${enabled ? "shown" : "hidden"}`, "OK", { duration: 2500, panelClass: "snack-success" });
      },
      error: () => {
        this.ourTeamSaving = false;
        this.cdr.detectChanges();
        this.snack.open("Failed to save setting", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  submitNewTeamMember() {
    if (!this.newTeamMember.name?.trim())
      return;
    this.addingTeamMember = true;
    this.teamService.create(this.newTeamMember).subscribe({
      next: (m) => {
        this.teamMembers = [...this.teamMembers, m].sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
        this.newTeamMember = { name: "", role: "", bio: "", initials: "", displayOrder: 0, isActive: true };
        this.showAddTeamForm = false;
        this.addingTeamMember = false;
        this.cdr.detectChanges();
        this.snack.open("Team member added", "OK", { duration: 2e3, panelClass: "snack-success" });
      },
      error: () => {
        this.addingTeamMember = false;
        this.cdr.detectChanges();
        this.snack.open("Failed to add member", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  startEditTeamMember(m) {
    this.editingTeamMemberId = m.id;
    this.editTeamMember = __spreadValues({}, m);
    this.cdr.detectChanges();
  }
  cancelEditTeamMember() {
    this.editingTeamMemberId = null;
    this.cdr.detectChanges();
  }
  saveTeamMember(m) {
    if (!this.editTeamMember.name?.trim())
      return;
    this.savingTeamMemberId = m.id;
    this.teamService.update(m.id, this.editTeamMember).subscribe({
      next: (updated) => {
        const idx = this.teamMembers.findIndex((x) => x.id === m.id);
        if (idx >= 0)
          this.teamMembers[idx] = updated;
        this.teamMembers = [...this.teamMembers].sort((a, b) => (a.displayOrder ?? 0) - (b.displayOrder ?? 0));
        this.editingTeamMemberId = null;
        this.savingTeamMemberId = null;
        this.cdr.detectChanges();
        this.snack.open("Team member updated", "OK", { duration: 2e3, panelClass: "snack-success" });
      },
      error: () => {
        this.savingTeamMemberId = null;
        this.cdr.detectChanges();
        this.snack.open("Failed to update member", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  deleteTeamMember(m) {
    this.teamService.remove(m.id).subscribe({
      next: () => {
        this.teamMembers = this.teamMembers.filter((x) => x.id !== m.id);
        this.cdr.detectChanges();
        this.snack.open("Team member removed", "OK", { duration: 2e3, panelClass: "snack-info" });
      },
      error: () => {
        this.snack.open("Failed to remove member", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  // ── Commission Config ─────────────────────────────────────────────────────
  commissionConfig = null;
  commissionDraft = {
    userCommissionPercent: 10,
    proCommissionPercent: 10,
    gstPercent: 18,
    minPlatformFee: 10,
    maxCommissionPercent: 20
  };
  commissionLoading = false;
  commissionSaving = false;
  commissionEditing = false;
  previewBid = 1e3;
  get previewUserCommission() {
    const c = this.commissionDraft;
    let fee = this.previewBid * c.userCommissionPercent / 100;
    fee = Math.max(fee, c.minPlatformFee);
    fee = Math.min(fee, this.previewBid * c.maxCommissionPercent / 100);
    return Math.round(fee * 100) / 100;
  }
  get previewGst() {
    return Math.round(this.previewUserCommission * this.commissionDraft.gstPercent) / 100;
  }
  get previewUserTotal() {
    return this.previewBid + this.previewUserCommission + this.previewGst;
  }
  get previewProDeduction() {
    return Math.round(this.previewBid * this.commissionDraft.proCommissionPercent / 100 * 100) / 100;
  }
  get previewProPayout() {
    return this.previewBid - this.previewProDeduction;
  }
  get previewPlatformEarnings() {
    return this.previewUserCommission + this.previewProDeduction;
  }
  loadCommissionConfig() {
    this.commissionLoading = true;
    this.adminUsersService.getCommissionConfig().subscribe({
      next: (config) => {
        this.commissionConfig = config;
        this.commissionDraft = __spreadValues({}, config);
        this.commissionEditing = false;
        this.commissionLoading = false;
        this.cdr.detectChanges();
      },
      error: () => {
        this.commissionLoading = false;
        this.cdr.detectChanges();
      }
    });
  }
  startEditingCommission() {
    if (this.commissionConfig)
      this.commissionDraft = __spreadValues({}, this.commissionConfig);
    this.commissionEditing = true;
  }
  cancelEditingCommission() {
    if (this.commissionConfig)
      this.commissionDraft = __spreadValues({}, this.commissionConfig);
    this.commissionEditing = false;
  }
  saveCommissionConfig() {
    this.commissionSaving = true;
    this.adminUsersService.updateCommissionConfig(this.commissionDraft).subscribe({
      next: () => {
        this.commissionConfig = __spreadValues({}, this.commissionDraft);
        this.commissionEditing = false;
        this.commissionSaving = false;
        this.cdr.detectChanges();
        this.snack.open("Commission settings saved", "OK", { duration: 2500, panelClass: "snack-success" });
      },
      error: () => {
        this.commissionSaving = false;
        this.cdr.detectChanges();
        this.snack.open("Failed to save commission settings", "OK", { duration: 3e3, panelClass: "snack-error" });
      }
    });
  }
  constructor(adminUsersService, auth, cdr, router, route, dialog, proUsersService, snack, serviceAreaService, bottomSheet, http, payoutService, settingsService, bannerService, serviceCategoryService, teamService) {
    this.adminUsersService = adminUsersService;
    this.auth = auth;
    this.cdr = cdr;
    this.router = router;
    this.route = route;
    this.dialog = dialog;
    this.proUsersService = proUsersService;
    this.snack = snack;
    this.serviceAreaService = serviceAreaService;
    this.bottomSheet = bottomSheet;
    this.http = http;
    this.payoutService = payoutService;
    this.settingsService = settingsService;
    this.bannerService = bannerService;
    this.serviceCategoryService = serviceCategoryService;
    this.teamService = teamService;
  }
  ngOnInit() {
    if (this.auth.getUserType() !== "Admin") {
      this.router.navigate(["/"]);
      return;
    }
    this.loadInvitations();
    this.loadServiceAreas();
    this.viewSub = this.route.queryParamMap.pipe(map((params) => {
      const view = params.get("view");
      return view && this.navItems.some((n) => n.id === view) ? view : "dashboard";
    }), distinctUntilChanged()).subscribe((view) => this.applyView(view));
  }
  // ── Disputes ──────────────────────────────────────────────────────────────
  loadDisputes() {
    this.isLoadingDisputes = true;
    this.adminUsersService.getDisputes().subscribe({
      next: (disputes) => {
        this.disputes = disputes ?? [];
        this.isLoadingDisputes = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingDisputes = false;
        this.cdr.markForCheck();
      }
    });
  }
  setDisputeTab(tab) {
    this.disputeTab = tab;
    if (tab === "resolved" && this.resolvedDisputes.length === 0)
      this.loadResolvedDisputes();
  }
  openCompleteConfirm(jobId) {
    this.completeConfirmJobId = jobId;
    this.completeNotes = "";
    this.refundConfirmJobId = null;
  }
  confirmComplete(jobId) {
    if (!this.completeNotes.trim())
      return;
    this.resolveDispute(jobId, "complete", this.completeNotes.trim());
  }
  openRefundConfirm(jobId) {
    this.refundConfirmJobId = jobId;
    this.refundNotes = "";
    this.completeConfirmJobId = null;
  }
  confirmRefund(jobId) {
    if (!this.refundNotes.trim())
      return;
    this.resolveDispute(jobId, "refund", this.refundNotes.trim());
  }
  resolveDispute(jobId, resolution, notes) {
    this.resolvingDisputeId = jobId;
    this.adminUsersService.resolveDispute(jobId, resolution, notes).subscribe({
      next: (result) => {
        this.disputes = this.disputes.filter((d) => d.jobId !== jobId);
        this.resolvingDisputeId = null;
        this.refundConfirmJobId = null;
        this.refundNotes = "";
        this.completeConfirmJobId = null;
        this.completeNotes = "";
        this.resolvedDisputes = [];
        this.snack.open(result.message, "OK", { duration: 4e3, panelClass: "snack-success" });
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.resolvingDisputeId = null;
        const msg = err?.error?.message ?? "Failed to resolve dispute.";
        this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
        this.cdr.markForCheck();
      }
    });
  }
  loadResolvedDisputes() {
    this.isLoadingResolved = true;
    const from = this.resolvedFrom ? new Date(this.resolvedFrom).toISOString() : void 0;
    let to;
    if (this.resolvedTo) {
      const t = new Date(this.resolvedTo);
      t.setDate(t.getDate() + 1);
      to = t.toISOString();
    }
    this.adminUsersService.getResolvedDisputes(from, to, this.resolvedSearch.trim() || void 0).subscribe({
      next: (rows) => {
        this.resolvedDisputes = rows ?? [];
        this.isLoadingResolved = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingResolved = false;
        this.cdr.markForCheck();
      }
    });
  }
  applyResolvedFilters() {
    this.loadResolvedDisputes();
  }
  clearResolvedFilters() {
    this.resolvedFrom = "";
    this.resolvedTo = "";
    this.resolvedSearch = "";
    this.loadResolvedDisputes();
  }
  // ── Invitations ───────────────────────────────────────────────────────────
  loadInvitations() {
    this.isLoadingInvitations = true;
    this.adminUsersService.getAdminInvitations(true).subscribe({
      next: (invitations) => {
        this.adminInvitations = invitations || [];
        this.isLoadingInvitations = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingInvitations = false;
      }
    });
  }
  resendInvitation(invitationId) {
    this.adminUsersService.resendAdminInvitation(invitationId).subscribe({
      next: () => this.loadInvitations(),
      error: () => {
      }
    });
  }
  sendInviteInline() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(this.inviteEmail)) {
      this.inviteError = "Enter a valid email address.";
      return;
    }
    this.inviteSending = true;
    this.inviteSuccess = "";
    this.inviteError = "";
    this.adminUsersService.inviteAdmin(this.inviteEmail).subscribe({
      next: () => {
        this.inviteSuccess = `Invitation sent to ${this.inviteEmail}`;
        this.inviteEmail = "";
        this.inviteSending = false;
        this.loadInvitations();
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.inviteError = err?.error?.message ?? "Failed to send invitation.";
        this.inviteSending = false;
        this.cdr.markForCheck();
      }
    });
  }
  // ── Search ────────────────────────────────────────────────────────────────
  search() {
    if (!this.searchQuery?.trim())
      return;
    this.isSearching = true;
    this.selectedUser = null;
    this.selectedPro = null;
    this.users = [];
    this.pros = [];
    this.cdr.detectChanges();
    if (this.searchType === "user") {
      this.adminUsersService.searchUsers(this.searchQuery).subscribe({
        next: (response) => {
          this.users = Array.isArray(response) ? response : response.$values || response.data || [];
          this.isSearching = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.isSearching = false;
          this.cdr.detectChanges();
        }
      });
    } else {
      this.adminUsersService.searchPros(this.searchQuery).subscribe({
        next: (response) => {
          this.pros = Array.isArray(response) ? response : response.$values || response.data || [];
          this.isSearching = false;
          this.cdr.detectChanges();
        },
        error: () => {
          this.isSearching = false;
          this.cdr.detectChanges();
        }
      });
    }
  }
  selectUser(user) {
    this.selectedUser = user;
    this.selectedPro = null;
    this.linkedUsers = [];
    this.linkedPros = [];
    this.addUserId = null;
    this.entityPayments = [];
    this.refundConfirmPaymentId = null;
    this.loadUserDetails(user.id);
    this.loadRelationships("user", user.id);
    this.loadEntityPayments();
  }
  selectPro(pro) {
    this.selectedPro = pro;
    this.selectedUser = null;
    this.linkedUsers = [];
    this.linkedPros = [];
    this.addUserId = null;
    this.entityPayments = [];
    this.proPayouts = [];
    this.refundConfirmPaymentId = null;
    this.loadProDetails(pro.id);
    this.loadRelationships("pro", pro.id);
    this.loadEntityPayments();
    this.loadProPayouts(pro.id);
  }
  loadUserDetails(userId) {
    this.isLoadingDetails = true;
    this.selectedConversation = null;
    this.conversationMessages = [];
    this.userJobs = [];
    this.userConversations = [];
    this.adminUsersService.getUserJobs(userId).subscribe({
      next: (response) => {
        this.userJobs = Array.isArray(response) ? response : response.$values || response.data || [];
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
    this.adminUsersService.getUserConversations(userId).subscribe({
      next: (response) => {
        this.userConversations = Array.isArray(response) ? response : response.$values || response.data || [];
        this.isLoadingDetails = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingDetails = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadProDetails(proId) {
    this.isLoadingDetails = true;
    this.selectedConversation = null;
    this.conversationMessages = [];
    this.proJobs = [];
    this.proConversations = [];
    this.adminUsersService.getProJobs(proId).subscribe({
      next: (response) => {
        this.proJobs = Array.isArray(response) ? response : response.$values || response.data || [];
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
    this.adminUsersService.getProConversations(proId).subscribe({
      next: (response) => {
        this.proConversations = Array.isArray(response) ? response : response.$values || response.data || [];
        this.isLoadingDetails = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingDetails = false;
        this.cdr.markForCheck();
      }
    });
  }
  selectConversation(conversation) {
    this.selectedConversation = conversation;
    const userType = this.selectedUser ? "User" : "Pro";
    const currentUserId = this.selectedUser ? this.selectedUser.id : this.selectedPro.id;
    this.adminUsersService.getMessages(currentUserId, userType, conversation.userId, conversation.userType).subscribe({
      next: (response) => {
        this.conversationMessages = Array.isArray(response) ? response : response.$values || response.data || [];
        this.cdr.markForCheck();
      },
      error: () => {
      }
    });
  }
  impersonate() {
    if (!this.selectedUser && !this.selectedPro)
      return;
    const userId = this.selectedUser ? this.selectedUser.id : this.selectedPro.id;
    const userType = this.selectedUser ? "User" : "Pro";
    const displayName = this.selectedUser ? `${this.selectedUser.firstName} ${this.selectedUser.lastName}` : this.selectedPro.proName;
    const ref = this.bottomSheet.open(ImpersonateSheetComponent, {
      data: { displayName, userType }
    });
    ref.afterDismissed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.adminUsersService.impersonateUser(userId, userType).subscribe({
        next: (data) => {
          this.auth.startImpersonation(data.token, data.userId, data.userType, displayName);
          this.router.navigate(["/"]);
        },
        error: (err) => {
          const msg = err?.error?.message ?? "Impersonation failed.";
          this.snack.open(msg, "OK", { duration: 4e3, panelClass: "snack-error" });
        }
      });
    });
  }
  getDisplayName(user, pro) {
    if (user)
      return `${user.firstName} ${user.lastName}`;
    if (pro)
      return pro.proName;
    return "";
  }
  formatDate(date) {
    if (!date)
      return "";
    return new Date(date).toLocaleDateString();
  }
  clearSelection() {
    this.selectedUser = null;
    this.selectedPro = null;
    this.userJobs = [];
    this.proJobs = [];
    this.userConversations = [];
    this.proConversations = [];
    this.selectedConversation = null;
    this.conversationMessages = [];
    this.linkedUsers = [];
    this.linkedPros = [];
    this.addUserId = null;
  }
  loadRelationships(type, id) {
    this.isLoadingRelationships = true;
    const req = type === "pro" ? this.proUsersService.getUsersUnderPro(id) : this.proUsersService.getProsForUser(id);
    req.subscribe({
      next: (res) => {
        const items = Array.isArray(res) ? res : res?.$values ?? [];
        if (type === "pro")
          this.linkedUsers = items;
        else
          this.linkedPros = items;
        this.isLoadingRelationships = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingRelationships = false;
        this.cdr.markForCheck();
      }
    });
  }
  addUserToPro() {
    if (!this.selectedPro || !this.addUserId)
      return;
    this.proUsersService.addUserToPro(this.selectedPro.id, this.addUserId).subscribe({
      next: () => {
        this.snack.open("User linked.", "OK", { duration: 3e3 });
        this.addUserId = null;
        this.loadRelationships("pro", this.selectedPro.id);
      },
      error: (err) => {
        this.snack.open(err?.error?.message ?? "Failed to link user.", "OK", { duration: 4e3 });
      }
    });
  }
  removeUserFromPro(userId) {
    if (!this.selectedPro)
      return;
    this.proUsersService.removeUserFromPro(this.selectedPro.id, userId).subscribe({
      next: () => {
        this.linkedUsers = this.linkedUsers.filter((u) => u.id !== userId);
        this.snack.open("User unlinked.", "OK", { duration: 3e3 });
        this.cdr.markForCheck();
      },
      error: () => this.snack.open("Failed to unlink user.", "OK", { duration: 3e3 })
    });
  }
  startEditRadius() {
    this.editRadiusValue = this.selectedPro?.serviceRadiusKm ?? 25;
    this.isEditingRadius = true;
  }
  cancelEditRadius() {
    this.isEditingRadius = false;
  }
  saveRadius() {
    if (!this.selectedPro || !this.editRadiusValue)
      return;
    this.adminUsersService.updateProServiceRadius(this.selectedPro.id, this.editRadiusValue).subscribe({
      next: (result) => {
        this.selectedPro.serviceRadiusKm = result.serviceRadiusKm;
        this.isEditingRadius = false;
        this.snack.open(`Service radius updated to ${result.serviceRadiusKm} km.`, "OK", { duration: 3e3, panelClass: "snack-success" });
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.snack.open(err?.error?.message ?? "Failed to update service radius.", "OK", { duration: 4e3, panelClass: "snack-error" });
      }
    });
  }
  // ── Geocode ───────────────────────────────────────────────────────────────
  loadPendingGeocodes() {
    this.loadPendingGeocodePros();
    this.loadPendingGeocodeUsers();
  }
  loadPendingGeocodePros() {
    this.isLoadingPendingPros = true;
    this.adminUsersService.getPendingGeocodePros().subscribe({
      next: (data) => {
        this.pendingProGeocodes = data;
        this.isLoadingPendingPros = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingPendingPros = false;
        this.cdr.markForCheck();
      }
    });
  }
  loadPendingGeocodeUsers() {
    this.isLoadingPendingUsers = true;
    this.adminUsersService.getPendingGeocodeUsers().subscribe({
      next: (data) => {
        this.pendingUserGeocodes = data;
        this.isLoadingPendingUsers = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingPendingUsers = false;
        this.cdr.markForCheck();
      }
    });
  }
  runGeocodeBackfillPros() {
    this.isBackfillingPros = true;
    this.proBackfillResult = null;
    this.adminUsersService.geocodeBackfillPros().subscribe({
      next: (result) => {
        this.isBackfillingPros = false;
        this.proBackfillResult = result;
        this.loadPendingGeocodePros();
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.isBackfillingPros = false;
        this.snack.open(err?.error?.message ?? "Pro geocode backfill failed.", "OK", { duration: 4e3, panelClass: "snack-error" });
        this.cdr.markForCheck();
      }
    });
  }
  runGeocodeBackfillUsers() {
    this.isBackfillingUsers = true;
    this.userBackfillResult = null;
    this.adminUsersService.geocodeBackfillUsers().subscribe({
      next: (result) => {
        this.isBackfillingUsers = false;
        this.userBackfillResult = result;
        this.loadPendingGeocodeUsers();
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.isBackfillingUsers = false;
        this.snack.open(err?.error?.message ?? "User geocode backfill failed.", "OK", { duration: 4e3, panelClass: "snack-error" });
        this.cdr.markForCheck();
      }
    });
  }
  // ── State abbreviation expansion ──────────────────────────────────────────
  STATE_ABBREVIATIONS = {
    india: {
      AN: "Andaman and Nicobar Islands",
      AP: "Andhra Pradesh",
      AR: "Arunachal Pradesh",
      AS: "Assam",
      BR: "Bihar",
      CH: "Chandigarh",
      CG: "Chhattisgarh",
      CT: "Chhattisgarh",
      DN: "Dadra and Nagar Haveli and Daman and Diu",
      DL: "Delhi",
      GA: "Goa",
      GJ: "Gujarat",
      HR: "Haryana",
      HP: "Himachal Pradesh",
      JK: "Jammu and Kashmir",
      JH: "Jharkhand",
      KA: "Karnataka",
      KL: "Kerala",
      LA: "Ladakh",
      LD: "Lakshadweep",
      MP: "Madhya Pradesh",
      MH: "Maharashtra",
      MN: "Manipur",
      ML: "Meghalaya",
      MZ: "Mizoram",
      NL: "Nagaland",
      OD: "Odisha",
      OR: "Odisha",
      PY: "Puducherry",
      PB: "Punjab",
      RJ: "Rajasthan",
      SK: "Sikkim",
      TN: "Tamil Nadu",
      TS: "Telangana",
      TG: "Telangana",
      TR: "Tripura",
      UP: "Uttar Pradesh",
      UK: "Uttarakhand",
      UT: "Uttarakhand",
      WB: "West Bengal"
    },
    canada: {
      AB: "Alberta",
      BC: "British Columbia",
      MB: "Manitoba",
      NB: "New Brunswick",
      NL: "Newfoundland and Labrador",
      NS: "Nova Scotia",
      NT: "Northwest Territories",
      NU: "Nunavut",
      ON: "Ontario",
      PE: "Prince Edward Island",
      QC: "Quebec",
      SK: "Saskatchewan",
      YT: "Yukon"
    },
    "united states": {
      AL: "Alabama",
      AK: "Alaska",
      AZ: "Arizona",
      AR: "Arkansas",
      CA: "California",
      CO: "Colorado",
      CT: "Connecticut",
      DE: "Delaware",
      FL: "Florida",
      GA: "Georgia",
      HI: "Hawaii",
      ID: "Idaho",
      IL: "Illinois",
      IN: "Indiana",
      IA: "Iowa",
      KS: "Kansas",
      KY: "Kentucky",
      LA: "Louisiana",
      ME: "Maine",
      MD: "Maryland",
      MA: "Massachusetts",
      MI: "Michigan",
      MN: "Minnesota",
      MS: "Mississippi",
      MO: "Missouri",
      MT: "Montana",
      NE: "Nebraska",
      NV: "Nevada",
      NH: "New Hampshire",
      NJ: "New Jersey",
      NM: "New Mexico",
      NY: "New York",
      NC: "North Carolina",
      ND: "North Dakota",
      OH: "Ohio",
      OK: "Oklahoma",
      OR: "Oregon",
      PA: "Pennsylvania",
      RI: "Rhode Island",
      SC: "South Carolina",
      SD: "South Dakota",
      TN: "Tennessee",
      TX: "Texas",
      UT: "Utah",
      VT: "Vermont",
      VA: "Virginia",
      WA: "Washington",
      WV: "West Virginia",
      WI: "Wisconsin",
      WY: "Wyoming",
      DC: "District of Columbia"
    },
    australia: {
      ACT: "Australian Capital Territory",
      NSW: "New South Wales",
      NT: "Northern Territory",
      QLD: "Queensland",
      SA: "South Australia",
      TAS: "Tasmania",
      VIC: "Victoria",
      WA: "Western Australia"
    },
    "united kingdom": {
      ENG: "England",
      SCT: "Scotland",
      WLS: "Wales",
      NIR: "Northern Ireland"
    }
  };
  expandStateAbbrev(country, state) {
    if (!state?.trim())
      return state;
    const map2 = this.STATE_ABBREVIATIONS[country.trim().toLowerCase()];
    if (!map2)
      return state;
    return map2[state.trim().toUpperCase()] ?? state;
  }
  expandNewAreaState() {
    if (this.newArea.state && this.newArea.country) {
      this.newArea.state = this.expandStateAbbrev(this.newArea.country, this.newArea.state);
    }
  }
  // ── Service Areas ─────────────────────────────────────────────────────────
  loadServiceAreas() {
    this.isLoadingAreas = true;
    this.serviceAreaService.getAll().subscribe({
      next: (areas) => {
        this.serviceAreas = Array.isArray(areas) ? areas : areas?.$values ?? [];
        this.isLoadingAreas = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.isLoadingAreas = false;
        this.cdr.markForCheck();
      }
    });
  }
  addServiceArea() {
    if (!this.newArea.country.trim())
      return;
    this.isSavingArea = true;
    this.areaErrorMsg = "";
    const state = this.expandStateAbbrev(this.newArea.country, this.newArea.state.trim());
    this.serviceAreaService.add({
      country: this.newArea.country.trim(),
      state: state || void 0,
      district: this.newArea.district.trim() || void 0,
      pinCode: this.newArea.pinCode.trim() || void 0,
      notes: this.newArea.notes.trim() || void 0,
      isActive: true
    }).subscribe({
      next: (area) => {
        this.serviceAreas = [...this.serviceAreas, area];
        this.newArea = { country: "", state: "", district: "", pinCode: "", notes: "", isActive: true };
        this.isSavingArea = false;
        this.snack.open("Service area added.", "OK", { duration: 3e3, panelClass: "snack-success" });
        if (this.showMapView)
          this.loadMapMarkers();
        this.cdr.markForCheck();
      },
      error: (err) => {
        this.isSavingArea = false;
        this.areaErrorMsg = err?.error?.message ?? "Failed to add service area.";
        this.cdr.markForCheck();
      }
    });
  }
  toggleServiceArea(id) {
    this.serviceAreaService.toggle(id).subscribe({
      next: (result) => {
        const area = this.serviceAreas.find((a) => a.id === id);
        if (area)
          area.isActive = result.isActive;
        this.snack.open(result.isActive ? "Area enabled." : "Area disabled.", "OK", {
          duration: 2500,
          panelClass: result.isActive ? "snack-success" : "snack-info"
        });
        if (this.showMapView)
          this.loadMapMarkers();
        this.cdr.markForCheck();
      },
      error: () => this.snack.open("Failed to update area.", "OK", { duration: 3e3, panelClass: "snack-error" })
    });
  }
  deleteServiceArea(area) {
    const ref = this.bottomSheet.open(DeleteAreaSheetComponent, {
      data: { breadcrumb: [area.country, area.state, area.district, area.pinCode].filter(Boolean).join(" \u203A ") }
    });
    ref.afterDismissed().subscribe((confirmed) => {
      if (!confirmed)
        return;
      this.serviceAreaService.delete(area.id).subscribe({
        next: () => {
          this.serviceAreas = this.serviceAreas.filter((a) => a.id !== area.id);
          this.snack.open("Service area deleted.", "OK", { duration: 3e3, panelClass: "snack-success" });
          this.cdr.detectChanges();
        },
        error: () => this.snack.open("Failed to delete area.", "OK", { duration: 3e3, panelClass: "snack-error" })
      });
    });
  }
  ngOnDestroy() {
    this.viewSub?.unsubscribe();
    if (this.leafletMap) {
      this.leafletMap.remove();
      this.leafletMap = null;
    }
  }
  // ── Service Area Map ───────────────────────────────────────────────────────
  toggleMapView() {
    this.showMapView = !this.showMapView;
    if (this.showMapView) {
      this.geocodeCache.clear();
      this.regionBoundsCache.clear();
      this.mapFilterCountry = this.mapCountries.includes("India") ? "India" : this.mapCountries[0] ?? "";
      this.mapFilterState = "";
      setTimeout(() => this.initMap(), 150);
    } else {
      if (this.leafletMap) {
        this.leafletMap.remove();
        this.leafletMap = null;
      }
    }
  }
  onMapCountryChange(val) {
    this.mapFilterCountry = val;
    this.mapFilterState = "";
    this.loadMapMarkers();
  }
  onMapStateChange(val) {
    this.mapFilterState = val;
    this.loadMapMarkers();
  }
  onMapInactiveChange(val) {
    this.mapShowInactive = val;
    this.loadMapMarkers();
  }
  async geocodeArea(area) {
    const pin = area.pinCode ? this.formatPostalCode(area.pinCode) : void 0;
    const key = [pin, area.district, area.state, area.country].filter(Boolean).join("|");
    if (this.geocodeCache.has(key))
      return this.geocodeCache.get(key) ?? null;
    const wait = 1150 - (Date.now() - this.lastGeocodeMs);
    if (wait > 0)
      await new Promise((r) => setTimeout(r, wait));
    this.lastGeocodeMs = Date.now();
    const base = { format: "json", limit: "1", "accept-language": "en", polygon_geojson: "1" };
    const queries = [];
    if (pin) {
      const q = [pin, area.district, area.state, area.country].filter(Boolean).join(", ");
      queries.push(__spreadProps(__spreadValues({}, base), { q }));
      if (area.district) {
        const structured = __spreadProps(__spreadValues({}, base), { county: area.district, country: area.country });
        if (area.state)
          structured["state"] = area.state;
        queries.push(structured, __spreadProps(__spreadValues({}, base), { q: [area.district, area.state, area.country].filter(Boolean).join(", ") }));
      } else if (area.state) {
        queries.push(__spreadProps(__spreadValues({}, base), { state: area.state, country: area.country }));
      } else {
        queries.push(__spreadProps(__spreadValues({}, base), { country: area.country }));
      }
    } else if (area.district) {
      const structured = __spreadProps(__spreadValues({}, base), { county: area.district, country: area.country });
      if (area.state)
        structured["state"] = area.state;
      const freeText = [area.district, area.state, area.country].filter(Boolean).join(", ");
      queries.push(structured, __spreadProps(__spreadValues({}, base), { q: freeText }));
    } else if (area.state) {
      queries.push(__spreadProps(__spreadValues({}, base), { state: area.state, country: area.country }));
    } else {
      queries.push(__spreadProps(__spreadValues({}, base), { country: area.country }));
    }
    for (const qparams of queries) {
      if (qparams !== queries[0]) {
        const w2 = 1150 - (Date.now() - this.lastGeocodeMs);
        if (w2 > 0)
          await new Promise((r) => setTimeout(r, w2));
        this.lastGeocodeMs = Date.now();
      }
      try {
        const results = await firstValueFrom(this.http.get("https://nominatim.openstreetmap.org/search", { params: qparams }));
        if (results && results.length > 0) {
          const r = results[0];
          const pos = {
            lat: parseFloat(r.lat),
            lng: parseFloat(r.lon),
            geojson: r.geojson && r.geojson.type !== "Point" ? r.geojson : void 0
          };
          this.geocodeCache.set(key, pos);
          return pos;
        }
      } catch {
      }
    }
    this.geocodeCache.set(key, null);
    return null;
  }
  async initMap() {
    const container = document.getElementById("service-area-map");
    if (!container)
      return;
    const L = await import("./chunk-34LDLRB4.js");
    if (this.leafletMap) {
      this.leafletMap.remove();
      this.leafletMap = null;
    }
    this.leafletMap = L.map(container).setView([20, 78], 5);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18
    }).addTo(this.leafletMap);
    await this.loadMapMarkers();
  }
  async loadMapMarkers() {
    if (!this.leafletMap)
      return;
    const L = await import("./chunk-34LDLRB4.js");
    const loadId = ++this.mapLoadId;
    this.mapMarkers.forEach((m) => m.remove());
    this.mapMarkers = [];
    this.isGeocodingAreas = true;
    this.cdr.markForCheck();
    const areas = this.filteredMapAreas;
    const latLngs = [];
    for (const area of areas) {
      if (loadId !== this.mapLoadId)
        return;
      const pos = await this.geocodeArea(area);
      if (loadId !== this.mapLoadId)
        return;
      if (!pos)
        continue;
      latLngs.push([pos.lat, pos.lng]);
      const color = area.isActive ? "#10b981" : "#9ca3af";
      const icon = L.divIcon({
        className: "",
        html: `<div style="width:14px;height:14px;border-radius:50%;background:${color};border:2px solid #fff;box-shadow:0 1px 5px rgba(0,0,0,0.35)"></div>`,
        iconSize: [14, 14],
        iconAnchor: [7, 7]
      });
      const breadcrumb = [area.district, area.state, area.country].filter(Boolean).map((s) => this.escHtml(s)).join(", ");
      const popup = `<div style="font-family:Roboto,sans-serif;min-width:160px;line-height:1.5">
        <p style="margin:0 0 4px;font-size:14px;font-weight:700;color:#1f2937">${this.escHtml(area.district || area.state || area.country)}</p>
        ${area.district && area.state ? `<p style="margin:0 0 2px;font-size:12px;color:#6b7280">${this.escHtml(area.state)}</p>` : ""}
        <p style="margin:0 0 4px;font-size:12px;color:#6b7280">${this.escHtml(area.country)}</p>
        ${area.pinCode ? `<p style="margin:0 0 4px;font-size:12px;color:#9ca3af">PIN: ${this.escHtml(area.pinCode)}</p>` : ""}
        <span style="font-size:12px;font-weight:600;color:${area.isActive ? "#10b981" : "#9ca3af"}">${area.isActive ? "\u2713 Active" : "\u2717 Inactive"}</span>
        ${area.isAutoEnrolled ? '<span style="font-size:11px;color:#f57c00;margin-left:6px">\xB7 Auto-enrolled</span>' : ""}
      </div>`;
      if (pos.geojson) {
        const fillColor = area.isActive ? "#10b981" : "#9ca3af";
        const poly = L.geoJSON(pos.geojson, {
          style: { color: fillColor, weight: 2, opacity: 0.7, fillColor, fillOpacity: 0.12 }
        }).bindPopup(popup, { maxWidth: 240 }).addTo(this.leafletMap);
        this.mapMarkers.push(poly);
      }
      const marker = L.marker([pos.lat, pos.lng], { icon, title: breadcrumb }).bindPopup(popup, { maxWidth: 240 }).addTo(this.leafletMap);
      this.mapMarkers.push(marker);
    }
    if (loadId !== this.mapLoadId)
      return;
    if (this.mapFilterCountry) {
      const fitted = await this.fitToRegion(loadId);
      if (!fitted && latLngs.length > 0) {
        this.leafletMap.fitBounds(latLngs, { padding: [40, 40], maxZoom: 10 });
      }
    } else if (latLngs.length > 0) {
      this.leafletMap.fitBounds(latLngs, { padding: [40, 40], maxZoom: 10 });
    }
    if (loadId !== this.mapLoadId)
      return;
    this.isGeocodingAreas = false;
    this.cdr.markForCheck();
  }
  async fitToRegion(loadId) {
    const regionKey = [this.mapFilterState, this.mapFilterCountry].filter(Boolean).join(", ");
    if (!this.regionBoundsCache.has(regionKey)) {
      const wait = 1150 - (Date.now() - this.lastGeocodeMs);
      if (wait > 0)
        await new Promise((r) => setTimeout(r, wait));
      if (loadId !== this.mapLoadId)
        return true;
      this.lastGeocodeMs = Date.now();
      try {
        const results = await firstValueFrom(this.http.get("https://nominatim.openstreetmap.org/search", {
          params: { q: regionKey, format: "json", limit: "1", "accept-language": "en" }
        }));
        if (results?.length > 0 && results[0].boundingbox) {
          const [s, n, w, e] = results[0].boundingbox.map(Number);
          this.regionBoundsCache.set(regionKey, [[s, w], [n, e]]);
        } else {
          this.regionBoundsCache.set(regionKey, null);
        }
      } catch {
        this.regionBoundsCache.set(regionKey, null);
      }
    }
    if (loadId !== this.mapLoadId)
      return true;
    const bounds = this.regionBoundsCache.get(regionKey) ?? null;
    if (bounds && this.leafletMap) {
      this.leafletMap.fitBounds(bounds, { padding: [30, 30] });
      return true;
    }
    return false;
  }
  formatPostalCode(code) {
    const clean = code.replace(/\s/g, "");
    if (/^[A-Za-z]\d[A-Za-z]\d[A-Za-z]\d$/.test(clean)) {
      return clean.substring(0, 3) + " " + clean.substring(3);
    }
    return code;
  }
  escHtml(s) {
    return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  static \u0275fac = function AdminUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersComponent)(\u0275\u0275directiveInject(AdminUsersService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ProUsersService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ServiceAreaService), \u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(PayoutService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(BannerService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(TeamService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], decls: 25, vars: 14, consts: [[1, "admin-users-container", 3, "click"], [1, "admin-header"], [1, "header-top"], [1, "tools-dropdown", 3, "click"], [1, "tools-trigger", 3, "click"], [1, "chevron-icon"], ["class", "tools-menu", 4, "ngIf"], ["class", "disputes-banner", 4, "ngIf"], [1, "admin-panel-area", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "tools-menu"], ["class", "tools-menu-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tools-menu-item", 3, "click"], [1, "disputes-banner"], [1, "disputes-banner-title"], [1, "dispute-tabs"], ["type", "button", 3, "click"], ["class", "dispute-count", 4, "ngIf"], [4, "ngIf"], [1, "dispute-count"], ["class", "disputes-loading", 4, "ngIf"], ["class", "disputes-empty", 4, "ngIf"], ["class", "disputes-list", 4, "ngIf"], [1, "disputes-loading"], ["diameter", "24"], [1, "disputes-empty"], [1, "disputes-list"], ["class", "dispute-card", 4, "ngFor", "ngForOf"], [1, "dispute-card"], [1, "dispute-card-header"], [1, "dispute-job-title"], [1, "dispute-date"], [1, "dispute-parties"], [1, "dispute-reason"], ["class", "dispute-completion-notes", 4, "ngIf"], ["class", "dispute-payment-amount", 4, "ngIf"], ["class", "refund-confirm-form", 4, "ngIf"], ["class", "dispute-actions", 4, "ngIf"], [1, "dispute-completion-notes"], [1, "dispute-payment-amount"], [1, "refund-confirm-form"], [1, "refund-confirm-warning"], ["appearance", "outline", 1, "refund-notes-field"], ["matInput", "", "rows", "2", "placeholder", "Briefly explain the reason for this refund...", 3, "ngModelChange", "ngModel"], [1, "refund-confirm-actions"], ["mat-stroked-button", "", 3, "click", "disabled"], ["mat-raised-button", "", "color", "warn", 3, "click", "disabled"], [1, "refund-confirm-warning", "complete-warning"], ["matInput", "", "rows", "2", "placeholder", "Explain why the work is being marked complete...", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "accent", 3, "click", "disabled"], [1, "dispute-actions"], ["mat-raised-button", "", "color", "accent", "title", "Mark the job as Completed in favour of the professional", 3, "click", "disabled"], ["mat-raised-button", "", "color", "warn", "title", "Reopen the job for rebidding in favour of the consumer", 3, "click", "disabled"], [1, "resolved-filters"], ["type", "date", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Search job, consumer or pro...", 1, "resolved-search", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "resolved-apply", 3, "click"], ["type", "button", "class", "resolved-clear", 3, "click", 4, "ngIf"], ["type", "button", 1, "resolved-clear", 3, "click"], ["class", "dispute-card resolved-card", 4, "ngFor", "ngForOf"], [1, "dispute-card", "resolved-card"], [1, "resolution-badge"], [1, "resolved-meta"], [1, "dashboard-panel"], [1, "dash-daterange"], [1, "dash-presets"], [1, "dash-custom"], ["type", "button", 1, "dash-apply", 3, "click", "disabled"], [1, "dash-metrics"], [1, "metric-card"], [1, "metric-icon", "users"], [1, "metric-body"], [1, "metric-value"], [1, "metric-label"], [1, "metric-icon", "pros"], [1, "metric-icon", "biz"], [1, "dash-jobs"], [1, "dash-jobs-header"], [1, "dash-region"], [3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["type", "button", "class", "dash-region-clear", 3, "click", 4, "ngIf"], ["class", "dash-loading", 4, "ngIf"], ["class", "dash-empty", 4, "ngIf"], ["class", "cat-bars", 4, "ngIf"], [3, "value"], ["type", "button", 1, "dash-region-clear", 3, "click"], [1, "dash-loading"], [1, "dash-empty"], [1, "cat-bars"], ["class", "cat-bar-row", 4, "ngFor", "ngForOf"], [1, "cat-bar-row"], [1, "cat-bar-label"], ["class", "cat-bar-icon", 4, "ngIf"], [1, "cat-bar-track"], [1, "cat-bar-fill"], [1, "cat-bar-count"], [1, "cat-bar-icon"], [1, "panel-search-layout"], [1, "search-section"], [1, "search-form"], [1, "search-controls"], [1, "search-input-group"], ["type", "text", "name", "searchQuery", "placeholder", "Search by email or name...", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "search-btn", 3, "click", "disabled"], [1, "search-type"], ["type", "button", 1, "type-btn", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "details-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "search-results"], [1, "results-list"], ["class", "results-group", 4, "ngIf"], [1, "results-group"], ["class", "user-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "user-item", 3, "click"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "user-meta"], ["class", "badge badge-verified", 4, "ngIf"], [1, "user-date"], [1, "badge", "badge-verified"], ["class", "pro-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "pro-item", 3, "click"], [1, "pro-info"], [1, "pro-name"], [1, "pro-business"], [1, "pro-email"], [1, "pro-meta"], [1, "pro-date"], [1, "details-section"], [1, "details-header"], [1, "impersonate-btn", 3, "click"], [1, "clear-btn", 3, "click"], [1, "details-tabs"], ["mat-tab-label", ""], [1, "tab-content"], ["class", "profile-details", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "jobs-list", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["class", "chat-section", 4, "ngIf"], ["class", "entity-payments-list", 4, "ngIf"], ["label", "Payouts", 4, "ngIf"], [1, "profile-details"], [1, "detail-row"], ["title", "Edit service radius", 1, "inline-edit-btn", 3, "click"], ["type", "number", "min", "1", "max", "500", 1, "radius-input", 3, "ngModelChange", "ngModel"], [1, "radius-unit"], [1, "inline-save-btn", 3, "click"], [1, "inline-cancel-btn", 3, "click"], [1, "loading"], ["diameter", "40"], [1, "jobs-list"], ["class", "job-card", 3, "job-in-progress", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-header"], [1, "job-title-section"], ["class", "bid-badge", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "job-details"], ["class", "job-description", 4, "ngIf"], [1, "job-dates"], [1, "bid-badge"], [1, "job-description"], [1, "no-data"], [1, "chat-section"], [1, "conversations-panel"], ["class", "conversations-list", 4, "ngIf"], ["class", "no-conversations", 4, "ngIf"], ["class", "messages-panel", 4, "ngIf"], ["class", "no-conversation-selected", 4, "ngIf"], [1, "conversations-list"], ["class", "conversation-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "conversation-item", 3, "click"], [1, "conversation-info"], [1, "conversation-name"], [1, "conversation-meta"], ["class", "conversation-time", 4, "ngIf"], [1, "conversation-time"], [1, "no-conversations"], [1, "messages-panel"], [1, "messages-list"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "message", 3, "ngClass"], [1, "message-sender"], [1, "message-content"], [1, "message-time"], ["class", "message-status", 4, "ngIf"], [1, "message-status"], [1, "no-conversation-selected"], [1, "rel-add-row"], ["appearance", "outline", 1, "rel-input"], ["matInput", "", "type", "number", "placeholder", "User ID", "name", "addUserId", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["class", "rel-list", 4, "ngIf"], ["diameter", "36"], [1, "rel-list"], ["class", "rel-item", 4, "ngFor", "ngForOf"], [1, "rel-item"], [1, "rel-info"], [1, "rel-name"], [1, "rel-email"], ["mat-icon-button", "", "color", "warn", "title", "Remove", 3, "click"], [1, "empty-state"], [1, "entity-payments-list"], ["class", "entity-payment-card", 3, "ep-refunded", "ep-failed", 4, "ngFor", "ngForOf"], [1, "entity-payment-card"], [1, "ep-header"], [1, "ep-title"], [1, "ep-id"], [1, "ep-job"], [1, "ep-status"], [1, "ep-amounts"], [1, "ep-amount-item"], [1, "ep-amt-label"], [1, "ep-amt-value"], [1, "ep-dates"], ["class", "ep-failure", 4, "ngIf"], ["class", "ep-refund-block", 4, "ngIf"], ["class", "ep-provider-ids", 4, "ngIf"], ["class", "ep-refund-action", 4, "ngIf"], [1, "ep-failure"], [1, "ep-refund-block"], [1, "ep-refund-header"], [1, "ep-refund-row"], [1, "ep-rd-item"], [1, "ep-rd-label"], [1, "ep-rd-value"], [1, "ep-rd-value", "ep-refund-amount"], ["class", "ep-rd-reason", 4, "ngIf"], [1, "ep-rd-reason"], [1, "ep-provider-ids"], [1, "ep-refund-action"], ["class", "ep-refund-confirm", 4, "ngIf"], ["mat-stroked-button", "", "color", "warn", "class", "ep-refund-btn", 3, "click", 4, "ngIf"], [1, "ep-refund-confirm"], [1, "ep-refund-warn"], ["appearance", "outline", 1, "ep-refund-notes"], ["matInput", "", "placeholder", "Reason for refund...", 3, "ngModelChange", "ngModel"], [1, "ep-refund-confirm-btns"], ["mat-stroked-button", "", "color", "warn", 1, "ep-refund-btn", 3, "click"], ["label", "Payouts"], ["class", "loading-state", 4, "ngIf"], [1, "loading-state"], ["diameter", "32"], ["class", "entity-payment-card", 3, "ep-failed", 4, "ngFor", "ngForOf"], ["class", "ep-amount-item", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click", "disabled"], [1, "panel-card"], [1, "panel-card-header"], ["class", "panel-count", 4, "ngIf"], ["title", "Toggle map view", 1, "map-view-btn", 3, "click"], [1, "add-area-form"], [1, "area-form-row"], ["type", "text", "placeholder", "Country *", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "State (optional)", 1, "area-input", 3, "ngModelChange", "blur", "ngModel"], ["type", "text", "placeholder", "District (optional)", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "PIN Code (optional)", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Notes (optional)", 1, "area-input", "area-input-notes", 3, "ngModelChange", "ngModel"], [1, "add-area-btn", 3, "click", "disabled"], ["class", "area-error", 4, "ngIf"], ["class", "map-section", 4, "ngIf"], [1, "panel-count"], [1, "area-error"], [1, "map-section"], [1, "map-filters"], [1, "map-select", 3, "ngModelChange", "ngModel"], [1, "map-select", 3, "ngModelChange", "ngModel", "disabled"], [1, "map-inactive-label", 3, "click"], ["type", "checkbox", "id", "map-inactive-toggle", 3, "change", "checked"], ["for", "map-inactive-toggle"], [1, "map-legend"], [1, "map-legend-dot", "active"], [1, "map-legend-dot", "inactive"], ["class", "map-geocoding", 4, "ngIf"], ["id", "service-area-map", 1, "map-container"], ["class", "map-empty", 4, "ngIf"], [1, "map-geocoding"], ["diameter", "14"], [1, "map-empty"], [1, "list-filters"], ["type", "checkbox", "id", "list-inactive-toggle", 3, "change", "checked"], ["for", "list-inactive-toggle"], ["class", "list-filter-count", 4, "ngIf"], ["class", "areas-table-wrap", 4, "ngIf"], [1, "list-filter-count"], [1, "areas-table-wrap"], ["class", "areas-table", 4, "ngIf"], [1, "areas-table"], [3, "area-row-inactive", 4, "ngFor", "ngForOf"], [1, "area-badge"], ["class", "auto-badge", "title", "Auto-enrolled during pro registration", 4, "ngIf"], ["class", "manual-badge", 4, "ngIf"], [1, "notes-cell"], [1, "area-actions"], [1, "area-action-btn", "toggle-btn", 3, "click", "title"], ["title", "Delete area", 1, "area-action-btn", "delete-btn", 3, "click"], ["title", "Auto-enrolled during pro registration", 1, "auto-badge"], [1, "manual-badge"], [1, "invite-form-section"], [1, "invite-description"], [1, "invite-form-row"], ["type", "email", "placeholder", "admin@example.com", 1, "invite-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "invite-send-btn", 3, "click", "disabled"], ["class", "invite-success", 4, "ngIf"], ["class", "invite-error", 4, "ngIf"], [1, "invitations-section"], ["class", "invitations-table", 4, "ngIf"], [1, "invite-success"], [1, "invite-error"], [1, "invitations-table"], [1, "invitations-list"], [3, "expired", 4, "ngFor", "ngForOf"], ["data-label", "Email"], ["data-label", "Status"], ["class", "badge badge-used", 4, "ngIf"], ["class", "badge badge-pending", 4, "ngIf"], ["class", "badge badge-expired", 4, "ngIf"], ["data-label", "Created"], ["data-label", "Expires"], ["class", "expires", 4, "ngIf"], ["class", "expired-text", 4, "ngIf"], ["class", "used-text", 4, "ngIf"], ["data-label", "Actions"], ["class", "action-btn resend-btn", "title", "Resend invitation email", 3, "click", 4, "ngIf"], ["class", "action-disabled", 4, "ngIf"], [1, "badge", "badge-used"], [1, "badge", "badge-pending"], [1, "badge", "badge-expired"], [1, "expires"], [1, "expired-text"], [1, "used-text"], ["title", "Resend invitation email", 1, "action-btn", "resend-btn", 3, "click"], [1, "action-disabled"], [1, "panel-description"], [1, "geocode-section"], [1, "geocode-section-header"], ["class", "geocode-loading-row", 4, "ngIf"], [1, "geocode-divider"], [1, "geocode-loading-row"], ["diameter", "20"], ["class", "geocode-all-done", 4, "ngIf"], ["class", "geocode-result-block", 4, "ngIf"], [1, "geocode-all-done"], [1, "geocode-pending-header"], [1, "geocode-table-wrap"], [1, "geocode-table"], [4, "ngFor", "ngForOf"], [1, "geocode-run-btn", 3, "click", "disabled"], [1, "geocode-email"], [1, "geocode-result-block"], [1, "geocode-result-header"], [1, "icon-done"], [1, "result-title"], [1, "result-chips"], [1, "result-chip", "chip-total"], [1, "result-chip", "chip-updated"], ["class", "result-chip chip-failed", 4, "ngIf"], [1, "dismiss-btn", 3, "click"], ["class", "geocode-table-wrap", 4, "ngIf"], [1, "result-chip", "chip-failed"], [1, "geocode-table", "geocode-result-table"], [3, "row-failed", 4, "ngFor", "ngForOf"], [1, "geocode-coords"], ["class", "no-coords", 4, "ngIf"], [1, "status-chip"], [1, "no-coords"], [1, "cat-admin-panel"], [1, "cat-admin-header"], [1, "cat-admin-title"], [1, "cat-add-btn", 3, "click"], ["class", "cat-add-form", 4, "ngIf"], ["class", "cat-loading", 4, "ngIf"], ["class", "cat-list", 4, "ngIf"], [1, "cat-add-form"], [1, "cat-form-row"], [1, "cat-form-field", "cat-form-icon"], ["type", "text", "placeholder", "\u{1F527}", "maxlength", "10", 3, "ngModelChange", "ngModel"], [1, "cat-form-field", "cat-form-name"], [1, "required"], ["type", "text", "placeholder", "e.g. Plumbing", "maxlength", "100", 3, "ngModelChange", "ngModel"], [1, "cat-form-field", "cat-form-desc"], ["type", "text", "placeholder", "Short description (optional)", "maxlength", "500", 3, "ngModelChange", "ngModel"], [1, "cat-save-btn", 3, "click", "disabled"], ["class", "cat-form-error", 4, "ngIf"], [1, "cat-form-error"], [1, "cat-loading"], ["diameter", "28"], [1, "cat-list"], [1, "cat-list-header"], [1, "col-icon"], [1, "col-name"], [1, "col-desc"], [1, "col-pros"], [1, "col-status"], [1, "col-actions"], ["class", "cat-row", 3, "inactive", "editing", 4, "ngFor", "ngForOf"], ["class", "cat-empty", 4, "ngIf"], [1, "cat-row"], [1, "col-icon", "cat-icon-cell"], [1, "col-desc", "cat-desc-cell"], [1, "status-badge"], ["title", "Edit", 1, "row-btn", "edit-btn", 3, "click"], [1, "row-btn", "toggle-btn", 3, "click", "disabled", "title"], ["type", "text", "maxlength", "10", "placeholder", "\u{1F527}", 1, "edit-input", "icon-input", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "100", 1, "edit-input", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "500", "placeholder", "Description", 1, "edit-input", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "row-btn", "save-btn", 3, "click", "disabled"], [1, "row-btn", "cancel-btn", 3, "click"], [1, "cat-empty"], ["class", "commission-section", 4, "ngIf"], [1, "commission-section"], [1, "commission-section-header"], [1, "setting-toggle-row"], [1, "setting-status"], ["class", "banner-message-view", 4, "ngIf"], ["class", "banner-message-edit", 4, "ngIf"], ["class", "team-admin-list", 4, "ngIf"], ["class", "geocode-run-btn ta-add-btn", 3, "click", 4, "ngIf"], ["class", "team-add-form", 4, "ngIf"], [1, "banner-message-view"], [1, "banner-message-text"], [1, "banner-edit-link", 3, "click"], [1, "banner-message-edit"], ["appearance", "outline", 1, "banner-message-field"], ["matInput", "", "rows", "2", "placeholder", "Welcome to yProHub \u2014 find trusted professionals for any job.", 3, "ngModelChange", "ngModel"], [1, "geocode-run-btn", "secondary", 3, "click", "disabled"], [1, "team-admin-list"], ["class", "team-admin-row", 4, "ngFor", "ngForOf"], ["class", "ta-empty", 4, "ngIf"], [1, "team-admin-row"], [1, "ta-avatar"], [1, "ta-info"], [1, "ta-badge"], ["title", "Edit", 1, "ta-btn", 3, "click"], ["title", "Remove", 1, "ta-btn", "danger", 3, "click"], ["placeholder", "Name", 1, "ta-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Role", 1, "ta-input", 3, "ngModelChange", "ngModel"], ["placeholder", "JS", "maxlength", "4", 1, "ta-input", "ta-input-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "#", 1, "ta-input", "ta-input-sm", 3, "ngModelChange", "ngModel"], ["placeholder", "Short bio", 1, "ta-input", "ta-textarea", 3, "ngModelChange", "ngModel"], [1, "ta-check"], ["type", "checkbox", 3, "click", "checked"], [1, "ta-btn", 3, "click", "disabled"], [1, "ta-btn", 3, "click"], [1, "ta-empty"], [1, "geocode-run-btn", "ta-add-btn", 3, "click"], [1, "team-add-form"], ["placeholder", "Name *", 1, "ta-input", 3, "ngModelChange", "ngModel"], ["placeholder", "Initials (e.g. JS)", "maxlength", "4", 1, "ta-input", "ta-input-sm", 3, "ngModelChange", "ngModel"], ["type", "number", "placeholder", "Order #", 1, "ta-input", "ta-input-sm", 3, "ngModelChange", "ngModel"], [1, "ta-form-actions"], [1, "ta-btn-text", 3, "click"], ["class", "commission-summary", 4, "ngIf"], ["class", "commission-edit-form", 4, "ngIf"], [1, "commission-summary"], [1, "commission-summary-grid"], [1, "commission-stat"], [1, "commission-stat-label"], [1, "commission-stat-value"], [1, "commission-stat-sub"], [1, "commission-edit-btn", 3, "click"], [1, "commission-edit-form"], [1, "commission-fields"], [1, "commission-field-group"], [1, "commission-field-row"], [1, "commission-hint"], [1, "commission-input-wrap"], ["type", "number", "min", "0", "max", "50", "step", "0.5", 1, "commission-input", 3, "ngModelChange", "ngModel"], [1, "commission-input-unit"], ["type", "number", "min", "0", "max", "30", "step", "0.5", 1, "commission-input", 3, "ngModelChange", "ngModel"], [1, "commission-input-prefix"], ["type", "number", "min", "0", "max", "1000", "step", "1", 1, "commission-input", "has-prefix", 3, "ngModelChange", "ngModel"], [1, "commission-preview"], [1, "commission-preview-header"], [1, "commission-preview-grid"], [1, "commission-preview-section"], [1, "preview-row"], [1, "preview-row", "preview-total"], [1, "commission-preview-section", "commission-preview-platform"], [1, "commission-edit-actions"], [1, "commission-cancel-btn", 3, "click", "disabled"]], template: function AdminUsersComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_div_click_0_listener() {
        return ctx.showToolsMenu = false;
      });
      \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "h1")(4, "mat-icon");
      \u0275\u0275text(5, "admin_panel_settings");
      \u0275\u0275elementEnd();
      \u0275\u0275text(6, " Admin Dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "div", 3);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_div_click_7_listener($event) {
        return $event.stopPropagation();
      });
      \u0275\u0275elementStart(8, "button", 4);
      \u0275\u0275listener("click", function AdminUsersComponent_Template_button_click_8_listener() {
        return ctx.showToolsMenu = !ctx.showToolsMenu;
      });
      \u0275\u0275elementStart(9, "mat-icon");
      \u0275\u0275text(10);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(11, "span");
      \u0275\u0275text(12);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-icon", 5);
      \u0275\u0275text(14, "expand_more");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(15, AdminUsersComponent_div_15_Template, 2, 1, "div", 6);
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, AdminUsersComponent_div_16_Template, 13, 7, "div", 7);
      \u0275\u0275elementStart(17, "div", 8);
      \u0275\u0275template(18, AdminUsersComponent_ng_container_18_Template, 71, 26, "ng-container", 9)(19, AdminUsersComponent_ng_container_19_Template, 23, 11, "ng-container", 9)(20, AdminUsersComponent_ng_container_20_Template, 28, 15, "ng-container", 9)(21, AdminUsersComponent_ng_container_21_Template, 26, 9, "ng-container", 9)(22, AdminUsersComponent_ng_container_22_Template, 32, 4, "ng-container", 9)(23, AdminUsersComponent_ng_container_23_Template, 18, 7, "ng-container", 9)(24, AdminUsersComponent_ng_container_24_Template, 56, 20, "ng-container", 9);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275textInterpolate(ctx.getActiveViewIcon());
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.getActiveViewLabel());
      \u0275\u0275advance();
      \u0275\u0275classProp("rotated", ctx.showToolsMenu);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.showToolsMenu);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.activeView === "disputes");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitch", ctx.activeView);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "dashboard");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "search");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "service-areas");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "invite-admin");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "geocode");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "categories");
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitchCase", "settings");
    }
  }, dependencies: [
    CommonModule,
    NgClass,
    NgForOf,
    NgIf,
    NgSwitch,
    NgSwitchCase,
    FormsModule,
    \u0275NgNoValidate,
    NgSelectOption,
    \u0275NgSelectMultipleOption,
    DefaultValueAccessor,
    NumberValueAccessor,
    CheckboxControlValueAccessor,
    SelectControlValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
    MaxLengthValidator,
    MinValidator,
    MaxValidator,
    NgModel,
    NgForm,
    MatIconModule,
    MatIcon,
    MatTabsModule,
    MatTabLabel,
    MatTab,
    MatTabGroup,
    MatProgressSpinnerModule,
    MatProgressSpinner,
    MatDialogModule,
    MatInputModule,
    MatInput,
    MatFormField,
    MatLabel,
    MatFormFieldModule,
    MatButtonModule,
    MatButton,
    MatIconButton,
    MatSnackBarModule,
    MatBottomSheetModule,
    LowerCasePipe,
    DecimalPipe,
    DatePipe
  ], styles: ['@charset "UTF-8";\n\n\n\n.admin-users-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.admin-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 100;\n}\n.admin-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.tools-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tools-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  padding: 0.6rem 1.1rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.tools-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.tools-trigger[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n  opacity: 0.8;\n}\n.tools-trigger[_ngcontent-%COMP%]   .chevron-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.tools-trigger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.55);\n}\n.tools-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  min-width: 210px;\n  z-index: 200;\n  animation: _ngcontent-%COMP%_menuSlide 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_menuSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tools-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.85rem 1.25rem;\n  background: none;\n  border: none;\n  color: #333;\n  font-size: 0.92rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.tools-menu-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: #667eea;\n}\n.tools-menu-item[_ngcontent-%COMP%]:hover {\n  background: #f5f6fa;\n}\n.tools-menu-item.active[_ngcontent-%COMP%] {\n  background: #eef0fd;\n  color: #667eea;\n  font-weight: 700;\n}\n.tools-menu-item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.tools-menu-item[_ngcontent-%COMP%]    + .tools-menu-item[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n}\n.disputes-banner[_ngcontent-%COMP%] {\n  background: #fff8f8;\n  border-bottom: 3px solid #ef9a9a;\n  padding: 1rem 2rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #c62828;\n  margin-bottom: 0.75rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%]   .dispute-count[_ngcontent-%COMP%] {\n  background: #c62828;\n  color: white;\n  border-radius: 12px;\n  padding: 1px 8px;\n  font-size: 0.78rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #888;\n  font-size: 0.9rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.dispute-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ef9a9a;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.4rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%]   .dispute-job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%]   .dispute-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.4rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-reason[_ngcontent-%COMP%], \n.dispute-card[_ngcontent-%COMP%]   .dispute-completion-notes[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #444;\n  margin: 0.2rem 0;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-payment-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.88rem;\n  color: #1b5e20;\n  margin: 0.4rem 0 0;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-payment-amount[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding: 0.75rem;\n  background: #fff3e0;\n  border: 1px solid #ffb74d;\n  border-radius: 6px;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%]   .refund-confirm-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.88rem;\n  color: #e65100;\n  margin: 0 0 0.75rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%]   .refund-confirm-warning[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%]   .refund-notes-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%]   .refund-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n.admin-panel-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.75rem 2rem;\n  overflow-y: auto;\n}\n.panel-search-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 1024px) {\n  .panel-search-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.search-section[_ngcontent-%COMP%] {\n  flex: 0 0 340px;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: calc(100vh - 180px);\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .search-section[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n    max-height: none;\n  }\n}\n.search-controls[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.search-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 600;\n  font-size: 0.88rem;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1565c0;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.search-type[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.75rem;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  background: white;\n  color: #666;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%] {\n  background: #667eea;\n  border-color: #667eea;\n  color: white;\n  font-weight: 600;\n}\n.search-results[_ngcontent-%COMP%]   .results-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.search-results[_ngcontent-%COMP%]   .results-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.85rem;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 0.4rem;\n  font-weight: 700;\n}\n.user-item[_ngcontent-%COMP%], \n.pro-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  margin-bottom: 0.6rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.user-item[_ngcontent-%COMP%]:hover, \n.pro-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.12);\n}\n.user-item.selected[_ngcontent-%COMP%], \n.pro-item.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.2rem;\n  font-size: 0.95rem;\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-email[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-email[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #666;\n  margin-bottom: 0.35rem;\n}\n.user-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-meta[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  color: #999;\n}\n.user-date[_ngcontent-%COMP%], \n.pro-date[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.details-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n@media (max-width: 1024px) {\n  .details-section[_ngcontent-%COMP%] {\n    flex: none;\n  }\n}\n.details-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e8e8e8;\n}\n.details-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  flex: 1;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%], \n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  padding: 0.55rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 600;\n  font-size: 0.88rem;\n  transition: background 0.15s;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%] {\n  background: #1976d2;\n  color: white;\n  border: none;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%]:hover {\n  background: #1565c0;\n}\n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.details-tabs[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n  min-width: 100px !important;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 320px);\n}\n.profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f5f5f5;\n  gap: 0.5rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #444;\n  min-width: 130px;\n  font-size: 0.9rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n  text-align: right;\n  font-size: 0.9rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon.verified[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.inline-edit-btn[_ngcontent-%COMP%], \n.inline-save-btn[_ngcontent-%COMP%], \n.inline-cancel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.2rem 0.4rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  margin-left: 0.4rem;\n  transition: background 0.15s;\n}\n.inline-edit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.inline-save-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.inline-cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.inline-edit-btn[_ngcontent-%COMP%]:hover, \n.inline-save-btn[_ngcontent-%COMP%]:hover, \n.inline-cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.inline-save-btn[_ngcontent-%COMP%] {\n  border-color: #4caf50;\n}\n.inline-save-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.inline-cancel-btn[_ngcontent-%COMP%] {\n  border-color: #e53935;\n}\n.inline-cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.radius-input[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  margin-left: 0.4rem;\n}\n.radius-unit[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin-left: 0.25rem;\n}\n.jobs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #fafafa;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 0.95rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-in-progress[_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge[class*="In Progress"][_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-completed[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .bid-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.45rem;\n  background: #fff3cd;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 0.73rem;\n  font-weight: 500;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .bid-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #444;\n  margin-right: 0.4rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #eee;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #444;\n  margin-bottom: 0.35rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.4;\n  max-height: 80px;\n  overflow-y: auto;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-dates[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #eee;\n  font-size: 0.83rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card.job-in-progress[_ngcontent-%COMP%] {\n  border-left: 4px solid #2196f3;\n  background: #f0f8ff;\n}\n.chat-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%] {\n  flex: 0 0 220px;\n  border-right: 1px solid #e8e8e8;\n  padding-right: 1rem;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 0.9rem;\n  color: #444;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   .no-conversations[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #aaa;\n  padding: 1.5rem 0;\n  font-size: 0.88rem;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #444;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 0.5rem;\n  font-weight: 700;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.chat-section[_ngcontent-%COMP%]   .no-conversation-selected[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  font-size: 0.9rem;\n}\n.conversation-item[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.conversation-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f9f9f9;\n}\n.conversation-item.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.88rem;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #aaa;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #bbb;\n  margin-top: 0.2rem;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 0.65rem;\n  border-radius: 6px;\n  background: #f5f5f5;\n}\n.message.message-user[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  margin-left: 2rem;\n}\n.message.message-pro[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  margin-right: 2rem;\n}\n.message[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.2rem;\n}\n.message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.35rem;\n  word-wrap: break-word;\n  font-size: 0.9rem;\n}\n.message[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #bbb;\n}\n.message[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #4caf50;\n  margin-top: 0.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.message[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.rel-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rel-add-row[_ngcontent-%COMP%]   .rel-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 200px;\n}\n.rel-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.rel-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rel-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rel-info[_ngcontent-%COMP%]   .rel-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.rel-info[_ngcontent-%COMP%]   .rel-email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #777;\n}\n.panel-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.panel-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.75rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f0f0f0;\n}\n.panel-card-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #667eea;\n}\n.panel-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  font-weight: 700;\n}\n.panel-card-header[_ngcontent-%COMP%]   .panel-count[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #888;\n  font-weight: 400;\n}\n.panel-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.92rem;\n  margin: -1rem 0 1.5rem;\n  line-height: 1.5;\n}\n.add-area-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.add-area-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #555;\n}\n.area-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n.area-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.area-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n}\n.area-input.area-input-notes[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.add-area-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.add-area-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1565c0;\n}\n.add-area-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.add-area-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.area-error[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: #c62828;\n  font-size: 0.83rem;\n}\n.areas-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.areas-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.areas-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.6rem 0.75rem;\n  background: #f5f6fa;\n  color: #555;\n  font-weight: 600;\n  border-bottom: 2px solid #e0e0e0;\n  white-space: nowrap;\n}\n.areas-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.areas-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.areas-table[_ngcontent-%COMP%]   .area-row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.area-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 12px;\n}\n.area-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.area-badge.area-badge-active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.area-badge.area-badge-inactive[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.auto-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #f57c00;\n}\n.auto-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.manual-badge[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #999;\n}\n.notes-cell[_ngcontent-%COMP%] {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #777;\n}\n.area-actions[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.area-action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 4px;\n  transition: background 0.15s;\n  display: inline-flex;\n  align-items: center;\n}\n.area-action-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.area-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.area-action-btn.toggle-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.area-action-btn.delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.map-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-left: auto;\n  padding: 0.55rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.map-view-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.map-view-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.map-view-btn.active[_ngcontent-%COMP%] {\n  border-color: #1976d2;\n  background: #1976d2;\n  color: #fff;\n}\n.map-section[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.map-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.75rem;\n}\n.map-select[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.7rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  outline: none;\n  background: #fff;\n  min-width: 140px;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.map-select[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n}\n.map-select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.map-inactive-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #555;\n  cursor: pointer;\n}\n.map-inactive-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #667eea;\n  cursor: pointer;\n}\n.map-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin-left: 0.25rem;\n}\n.map-legend-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.map-legend-dot.active[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.map-legend-dot.inactive[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n.map-geocoding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-style: italic;\n}\n.map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 440px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .map-container[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n.list-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0.25rem 0 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.list-filter-count[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-style: italic;\n}\n.map-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.88rem;\n  margin-top: 0.5rem;\n}\n.invite-form-section[_ngcontent-%COMP%] {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.invite-form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.invite-form-section[_ngcontent-%COMP%]   .invite-description[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\n.invite-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 380px;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.invite-send-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.invite-send-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.invite-send-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1565c0;\n}\n.invite-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.invite-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.invite-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #c62828;\n  font-size: 0.9rem;\n}\n.invite-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invitations-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-section[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.geocode-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.geocode-section-header[_ngcontent-%COMP%]    > mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #667eea;\n  margin-top: 0.1rem;\n  flex-shrink: 0;\n}\n.geocode-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.15rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #666;\n}\n.geocode-divider[_ngcontent-%COMP%] {\n  border-top: 1px solid #e8e8f0;\n  margin: 1.75rem 0;\n}\n.geocode-loading-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #666;\n  font-size: 0.88rem;\n  padding: 0.5rem 0;\n}\n.geocode-all-done[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding: 0.5rem 0;\n}\n.geocode-all-done[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-pending-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: #555;\n  margin-bottom: 0.75rem;\n}\n.geocode-pending-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: #f57c00;\n}\n.geocode-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.geocode-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.geocode-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  background: #f5f5f8;\n  padding: 0.55rem 0.85rem;\n  text-align: left;\n  font-weight: 600;\n  color: #555;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  border-bottom: 1px solid #e0e0e0;\n  white-space: nowrap;\n}\n.geocode-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.85rem;\n  color: #333;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.geocode-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.geocode-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafafe;\n}\n.geocode-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-failed[_ngcontent-%COMP%] {\n  background: #fff8f5;\n}\n.geocode-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.row-failed[_ngcontent-%COMP%]:hover {\n  background: #fff3ee;\n}\n.geocode-email[_ngcontent-%COMP%] {\n  color: #555;\n  font-size: 0.82rem;\n}\n.geocode-coords[_ngcontent-%COMP%] {\n  font-family: monospace;\n  font-size: 0.8rem;\n  color: #444;\n}\n.geocode-coords[_ngcontent-%COMP%]   .no-coords[_ngcontent-%COMP%] {\n  color: #bbb;\n}\n.geocode-run-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1.1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  margin-bottom: 0.5rem;\n}\n.geocode-run-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.geocode-run-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1565c0;\n}\n.geocode-run-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.geocode-result-block[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: #f9fff9;\n  border: 1px solid #c8e6c9;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n}\n.geocode-result-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.geocode-result-header[_ngcontent-%COMP%]   .icon-done[_ngcontent-%COMP%] {\n  color: #2e7d32;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  flex-shrink: 0;\n}\n.geocode-result-header[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #2e7d32;\n}\n.geocode-result-header[_ngcontent-%COMP%]   .result-chips[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n}\n.geocode-result-header[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #aaa;\n  padding: 0.15rem;\n  border-radius: 4px;\n  transition: color 0.15s;\n}\n.geocode-result-header[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]:hover {\n  color: #555;\n}\n.geocode-result-header[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.result-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.result-chip.chip-total[_ngcontent-%COMP%] {\n  background: #e8eaf6;\n  color: #3949ab;\n}\n.result-chip.chip-updated[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.result-chip.chip-failed[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-chip[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.status-chip[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.status-chip.chip-updated[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.chip-updated[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.status-chip.chip-failed[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-chip.chip-failed[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.cat-admin-panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1100px;\n}\n.cat-admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.cat-admin-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cat-admin-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  color: #667eea;\n}\n.cat-admin-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.cat-admin-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.82rem;\n  color: #6b7280;\n}\n.cat-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.cat-add-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.cat-add-btn[_ngcontent-%COMP%]:hover {\n  background: #1565c0;\n}\n.cat-add-form[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.cat-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.cat-form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cat-form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #374151;\n}\n.cat-form-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #9ca3af;\n}\n.cat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-family: inherit;\n  color: #1f2937;\n  background: white;\n}\n.cat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.1);\n}\n.cat-form-icon[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.cat-form-name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.cat-form-desc[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 200px;\n}\n.cat-save-btn[_ngcontent-%COMP%] {\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  align-self: flex-end;\n}\n.cat-save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #1565c0;\n}\n.cat-save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cat-form-error[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0;\n  font-size: 0.82rem;\n  color: #b91c1c;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.cat-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 0;\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n.cat-list[_ngcontent-%COMP%] {\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.cat-list-header[_ngcontent-%COMP%], \n.cat-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px 1fr 2fr 60px 90px 100px;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 1rem;\n}\n.cat-list-header[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1.5px solid #e5e7eb;\n}\n.cat-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 0.88rem;\n  color: #374151;\n  transition: background 0.12s;\n}\n.cat-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cat-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.cat-row.inactive[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.cat-row.editing[_ngcontent-%COMP%] {\n  background: #faf5ff;\n}\n.cat-icon-cell[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.cat-desc-cell[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.82rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.col-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n.row-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  background: #f3f4f6;\n  color: #374151;\n  transition: background 0.15s;\n}\n.row-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.row-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.row-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.row-btn.edit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.row-btn.save-btn[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.row-btn.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #bbf7d0;\n}\n.row-btn.cancel-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.row-btn.deactivate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff3cd;\n  color: #92400e;\n}\n.edit-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.3rem 0.5rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 5px;\n  font-size: 0.85rem;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.edit-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #764ba2;\n}\n.icon-input[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.82rem;\n  cursor: pointer;\n}\n.cat-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.setting-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.75rem;\n}\n.banner-message-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.75rem;\n}\n.banner-message-view[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.85rem;\n}\n.banner-message-text[_ngcontent-%COMP%] {\n  flex: 1;\n  font-size: 0.9rem;\n  color: #444;\n  font-style: italic;\n}\n.banner-edit-link[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-decoration: underline;\n  white-space: nowrap;\n}\n.banner-message-edit[_ngcontent-%COMP%] {\n  margin-top: 0.85rem;\n}\n.geocode-run-btn.secondary[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #555;\n}\n.setting-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.3rem 0.75rem;\n  border-radius: 20px;\n  background: #f5f5f5;\n  color: #888;\n}\n.setting-status.enabled[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.badge.badge-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge.badge-used[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-expired[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge.badge-verified[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.expires[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 500;\n}\n.expired-text[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 500;\n}\n.used-text[_ngcontent-%COMP%] {\n  color: #388e3c;\n  font-weight: 500;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.55rem 1rem;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.action-btn.resend-btn[_ngcontent-%COMP%] {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.action-btn.resend-btn[_ngcontent-%COMP%]:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.action-disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 2rem;\n  color: #777;\n  font-size: 0.9rem;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem 1rem;\n  color: #bbb;\n}\n.no-data[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  width: 2.75rem;\n  height: 2.75rem;\n  opacity: 0.5;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin: 0;\n  color: #aaa;\n}\n.empty-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  color: #bbb;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  opacity: 0.25;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #888;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  max-width: 280px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.invitations-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #444;\n  font-size: 0.83rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: #555;\n  font-size: 0.9rem;\n  vertical-align: middle;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .admin-users-container[_ngcontent-%COMP%] {\n    margin: 0;\n    width: 100%;\n    min-height: unset;\n  }\n  .admin-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    gap: 0.5rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .tools-trigger[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.85rem;\n  }\n  .tools-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .disputes-banner[_ngcontent-%COMP%] {\n    padding: 0.875rem 1rem;\n  }\n  .admin-panel-area[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n  .panel-card[_ngcontent-%COMP%] {\n    padding: 1rem 0.875rem;\n  }\n  .panel-search-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n    max-height: none;\n    padding: 1rem;\n  }\n  .details-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .details-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .details-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    flex: 1 1 100%;\n  }\n  .details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%], \n   .details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n    min-width: 0 !important;\n    padding: 0 8px !important;\n    flex-grow: 1;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label {\n    font-size: 0.7rem;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mat-icon {\n    font-size: 0.95rem;\n    width: 0.95rem;\n    height: 0.95rem;\n  }\n  .tab-content[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    max-height: none;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.15rem;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .chat-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n  }\n  .chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%] {\n    flex: none;\n    border-right: none;\n    border-bottom: 1px solid #e8e8e8;\n    padding-right: 0;\n    padding-bottom: 0.75rem;\n    margin-bottom: 0.75rem;\n    max-height: 160px;\n    overflow-y: auto;\n  }\n  .rel-add-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .rel-add-row[_ngcontent-%COMP%]   .rel-input[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .dispute-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .dispute-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .invite-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    border: 1px solid #e8e8e8;\n    border-radius: 8px;\n    margin-bottom: 0.75rem;\n    padding: 0.5rem 0.75rem;\n    background: white;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.4rem 0;\n    border-bottom: 1px solid #f5f5f5;\n    font-size: 0.83rem;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #555;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n    flex-shrink: 0;\n    margin-right: 0.75rem;\n  }\n}\n.entity-payments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.5rem 0;\n}\n.entity-payment-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-left: 4px solid #4caf50;\n  border-radius: 8px;\n  padding: 0.9rem 1.1rem;\n}\n.entity-payment-card.ep-refunded[_ngcontent-%COMP%] {\n  border-left-color: #ff9800;\n}\n.entity-payment-card.ep-failed[_ngcontent-%COMP%] {\n  border-left-color: #f44336;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.4rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-title[_ngcontent-%COMP%]   .ep-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #aaa;\n  font-family: monospace;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-title[_ngcontent-%COMP%]   .ep-job[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.18rem 0.55rem;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status.epst-completed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status.epst-refunded[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status.epst-failed[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status.epst-pending[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-amounts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.45rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-amounts[_ngcontent-%COMP%]   .ep-amount-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-amounts[_ngcontent-%COMP%]   .ep-amount-item[_ngcontent-%COMP%]   .ep-amt-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-amounts[_ngcontent-%COMP%]   .ep-amount-item[_ngcontent-%COMP%]   .ep-amt-value[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #222;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.3rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-dates[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-dates[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-failure[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.82rem;\n  color: #c62828;\n  margin-top: 0.35rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-failure[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%] {\n  margin-top: 0.65rem;\n  padding: 0.65rem 0.85rem;\n  background: #fff8e1;\n  border: 1px solid #ffe082;\n  border-radius: 6px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-refund-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: #e65100;\n  margin-bottom: 0.4rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-refund-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-refund-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 0.25rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-reason[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #333;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-value.ep-refund-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #e65100;\n  font-size: 0.95rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-provider-ids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 0.4rem;\n  font-size: 0.7rem;\n  color: #bbb;\n  font-family: monospace;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding-top: 0.65rem;\n  border-top: 1px solid #eee;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-btn[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%] {\n  padding: 0.65rem;\n  background: #fff3e0;\n  border: 1px solid #ffb74d;\n  border-radius: 6px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%]   .ep-refund-warn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #e65100;\n  margin: 0 0 0.6rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%]   .ep-refund-warn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%]   .ep-refund-notes[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%]   .ep-refund-confirm-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 0.4rem;\n}\n@media (max-width: 480px) {\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label span:not(.mat-icon) {\n    display: none;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mat-icon {\n    margin-right: 0;\n  }\n}\n.commission-section[_ngcontent-%COMP%] {\n  margin-top: 1.5rem;\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n.commission-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.commission-section-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-top: 2px;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.commission-section-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n}\n.commission-section-header[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.88rem;\n  color: #6b7280;\n}\n.commission-summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.commission-edit-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  border: none;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  align-self: flex-start;\n}\n.commission-edit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.commission-edit-btn[_ngcontent-%COMP%]:hover {\n  background: #1565c0;\n}\n.commission-summary-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.commission-stat[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  min-width: 130px;\n}\n.commission-stat-label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.commission-stat-value[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-primary, #3730a3);\n  line-height: 1.2;\n  margin: 0.2rem 0 0;\n}\n.commission-stat-sub[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.commission-edit-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.commission-fields[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 700px) {\n  .commission-fields[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.commission-field-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.commission-field-group[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0 0 0.25rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 0.4rem;\n}\n.commission-field-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.commission-field-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.commission-hint[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.76rem;\n  font-weight: 400;\n  color: #9ca3af;\n  margin-top: 0.1rem;\n}\n.commission-input-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  overflow: hidden;\n  background: #fff;\n  width: fit-content;\n}\n.commission-input-wrap[_ngcontent-%COMP%]:focus-within {\n  border-color: var(--color-primary, #3730a3);\n}\n.commission-input-prefix[_ngcontent-%COMP%], \n.commission-input-unit[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.6rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 0.88rem;\n  font-weight: 500;\n  border: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.commission-input-prefix[_ngcontent-%COMP%] {\n  border-right: 1px solid #d1d5db;\n}\n.commission-input-unit[_ngcontent-%COMP%] {\n  border-left: 1px solid #d1d5db;\n}\n.commission-input[_ngcontent-%COMP%] {\n  width: 80px;\n  padding: 0.45rem 0.5rem;\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  color: #111827;\n  background: transparent;\n}\n.commission-input.has-prefix[_ngcontent-%COMP%] {\n  border-left: none;\n}\n.commission-preview[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.commission-preview-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  background: var(--color-primary, #3730a3);\n  color: #fff;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.commission-preview-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.commission-preview-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n}\n@media (max-width: 700px) {\n  .commission-preview-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.commission-preview-section[_ngcontent-%COMP%] {\n  padding: 1rem;\n  border-right: 1px solid #e5e7eb;\n}\n.commission-preview-section[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n.commission-preview-section[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.commission-preview-platform[_ngcontent-%COMP%] {\n  background: #f0fdf4;\n}\n.commission-preview-platform[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #15803d;\n}\n.preview-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  color: #374151;\n  padding: 0.2rem 0;\n  gap: 0.5rem;\n}\n.preview-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #6b7280;\n}\n.preview-total[_ngcontent-%COMP%] {\n  margin-top: 0.4rem;\n  padding-top: 0.4rem;\n  border-top: 1px solid #e5e7eb;\n  font-weight: 700;\n  color: #111827 !important;\n}\n.preview-total[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  color: #111827 !important;\n}\n.commission-edit-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.commission-cancel-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.commission-cancel-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.commission-cancel-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.disputes-empty[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0.5rem 0 0;\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.disputes-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #10b981;\n}\n.dashboard-panel[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-presets[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-presets[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.8rem;\n  border: 1px solid #d1d5db;\n  border-radius: 999px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-presets[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-presets[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #667eea;\n  border-color: #667eea;\n  color: #fff;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-custom[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-custom[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-custom[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%] {\n  padding: 0.35rem 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.8rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-custom[_ngcontent-%COMP%]   .dash-apply[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.85rem;\n  border: none;\n  border-radius: 6px;\n  background: #667eea;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-daterange[_ngcontent-%COMP%]   .dash-custom[_ngcontent-%COMP%]   .dash-apply[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.1rem 1.25rem;\n  background: #fff;\n  border: 1px solid #eef0f4;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  padding: 0.55rem;\n  border-radius: 12px;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.users[_ngcontent-%COMP%] {\n  color: #4f46e5;\n  background: #eef2ff;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.pros[_ngcontent-%COMP%] {\n  color: #0d9488;\n  background: #ecfdf5;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-icon.biz[_ngcontent-%COMP%] {\n  color: #b45309;\n  background: #fffbeb;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-body[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-value[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1.1;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%]   .metric-card[_ngcontent-%COMP%]   .metric-label[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #6b7280;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%] {\n  background: #fff;\n  border: 1px solid #eef0f4;\n  border-radius: 14px;\n  padding: 1.25rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-jobs-header[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-jobs-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-jobs-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-jobs-header[_ngcontent-%COMP%]   .dash-region[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-jobs-header[_ngcontent-%COMP%]   .dash-region[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.6rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  background: #fff;\n  color: #374151;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-jobs-header[_ngcontent-%COMP%]   .dash-region[_ngcontent-%COMP%]   .dash-region-clear[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.7rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #6b7280;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-jobs-header[_ngcontent-%COMP%]   .dash-region[_ngcontent-%COMP%]   .dash-region-clear[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.9rem;\n  padding: 1rem 0;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .dash-empty[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.9rem;\n  padding: 1.25rem 0;\n  text-align: center;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .cat-bars[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .cat-bars[_ngcontent-%COMP%]   .cat-bar-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 11rem 1fr 2.5rem;\n  align-items: center;\n  gap: 0.6rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .cat-bars[_ngcontent-%COMP%]   .cat-bar-row[_ngcontent-%COMP%]   .cat-bar-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  color: #374151;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .cat-bars[_ngcontent-%COMP%]   .cat-bar-row[_ngcontent-%COMP%]   .cat-bar-label[_ngcontent-%COMP%]   .cat-bar-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .cat-bars[_ngcontent-%COMP%]   .cat-bar-row[_ngcontent-%COMP%]   .cat-bar-track[_ngcontent-%COMP%] {\n  position: relative;\n  height: 1.1rem;\n  background: #f3f4f6;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .cat-bars[_ngcontent-%COMP%]   .cat-bar-row[_ngcontent-%COMP%]   .cat-bar-track[_ngcontent-%COMP%]   .cat-bar-fill[_ngcontent-%COMP%] {\n  display: block;\n  height: 100%;\n  min-width: 2px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n  transition: width 0.3s ease;\n}\n.dashboard-panel[_ngcontent-%COMP%]   .dash-jobs[_ngcontent-%COMP%]   .cat-bars[_ngcontent-%COMP%]   .cat-bar-row[_ngcontent-%COMP%]   .cat-bar-count[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: right;\n}\n@media (max-width: 640px) {\n  .dashboard-panel[_ngcontent-%COMP%]   .dash-metrics[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dashboard-panel[_ngcontent-%COMP%]   .cat-bars[_ngcontent-%COMP%]   .cat-bar-row[_ngcontent-%COMP%] {\n    grid-template-columns: 8rem 1fr 2rem;\n  }\n}\n.dispute-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n  margin: 0.5rem 0 0.75rem;\n}\n.dispute-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.4rem 0.9rem;\n  border: 1px solid #d1d5db;\n  border-radius: 999px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.dispute-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.dispute-tabs[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  background: #667eea;\n  border-color: #667eea;\n  color: #fff;\n}\n.dispute-tabs[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .dispute-count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 999px;\n  padding: 0 0.4rem;\n  font-size: 0.75rem;\n}\n.complete-warning[_ngcontent-%COMP%] {\n  color: #1b5e20 !important;\n}\n.resolved-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.resolved-filters[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.resolved-filters[_ngcontent-%COMP%]   input[type=date][_ngcontent-%COMP%], \n.resolved-filters[_ngcontent-%COMP%]   .resolved-search[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.6rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.82rem;\n}\n.resolved-filters[_ngcontent-%COMP%]   .resolved-search[_ngcontent-%COMP%] {\n  flex: 1 1 12rem;\n  min-width: 10rem;\n}\n.resolved-filters[_ngcontent-%COMP%]   .resolved-apply[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.9rem;\n  border: none;\n  border-radius: 8px;\n  background: #667eea;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n}\n.resolved-filters[_ngcontent-%COMP%]   .resolved-clear[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.8rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #6b7280;\n  cursor: pointer;\n}\n.resolved-filters[_ngcontent-%COMP%]   .resolved-clear[_ngcontent-%COMP%]:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.resolved-card[_ngcontent-%COMP%]   .resolution-badge[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 0.18rem 0.6rem;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.resolved-card[_ngcontent-%COMP%]   .resolution-badge.complete[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.resolved-card[_ngcontent-%COMP%]   .resolution-badge.refund[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.resolved-card[_ngcontent-%COMP%]   .resolved-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-top: 0.5rem;\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n.resolved-card[_ngcontent-%COMP%]   .resolved-meta[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.resolved-card[_ngcontent-%COMP%]   .resolved-meta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.team-admin-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 0.75rem 0;\n}\n.team-admin-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #eef0f4;\n  border-radius: 10px;\n  background: #fff;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-avatar[_ngcontent-%COMP%] {\n  width: 2rem;\n  height: 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #eef2ff;\n  color: #4f46e5;\n  font-weight: 700;\n  font-size: 0.75rem;\n  flex-shrink: 0;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 8rem;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-info[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #1f2937;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-badge[_ngcontent-%COMP%] {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 0.12rem 0.5rem;\n  border-radius: 999px;\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-badge.off[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  color: #9ca3af;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-btn[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 0.2rem;\n  border-radius: 6px;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-btn[_ngcontent-%COMP%]:hover {\n  background: #f3f4f6;\n  color: #4f46e5;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-btn.danger[_ngcontent-%COMP%]:hover {\n  color: #ef4444;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.team-admin-row[_ngcontent-%COMP%]   .ta-check[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: #374151;\n}\n.ta-input[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.55rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  flex: 1 1 8rem;\n}\n.ta-input-sm[_ngcontent-%COMP%] {\n  flex: 0 0 4.5rem;\n}\n.ta-textarea[_ngcontent-%COMP%] {\n  flex: 1 1 100%;\n  min-height: 3rem;\n  resize: vertical;\n}\n.ta-empty[_ngcontent-%COMP%] {\n  color: #9ca3af;\n  font-size: 0.88rem;\n  padding: 0.5rem 0;\n}\n.ta-add-btn[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.team-add-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.6rem;\n  padding: 0.75rem;\n  border: 1px dashed #d1d5db;\n  border-radius: 10px;\n}\n.ta-form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex: 1 1 100%;\n  align-items: center;\n}\n.ta-btn-text[_ngcontent-%COMP%] {\n  border: none;\n  background: transparent;\n  color: #6b7280;\n  cursor: pointer;\n  font-weight: 600;\n}\n/*# sourceMappingURL=admin-users.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminUsersComponent, [{
    type: Component,
    args: [{ selector: "app-admin-users", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatIconModule,
      MatTabsModule,
      MatProgressSpinnerModule,
      MatDialogModule,
      MatInputModule,
      MatFormFieldModule,
      MatButtonModule,
      MatSnackBarModule,
      MatBottomSheetModule
    ], template: `<div class="admin-users-container" (click)="showToolsMenu = false">\r
\r
  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="admin-header">\r
    <div class="header-top">\r
      <h1><mat-icon>admin_panel_settings</mat-icon> Admin Dashboard</h1>\r
\r
      <div class="tools-dropdown" (click)="$event.stopPropagation()">\r
        <button class="tools-trigger" (click)="showToolsMenu = !showToolsMenu">\r
          <mat-icon>{{ getActiveViewIcon() }}</mat-icon>\r
          <span>{{ getActiveViewLabel() }}</span>\r
          <mat-icon class="chevron-icon" [class.rotated]="showToolsMenu">expand_more</mat-icon>\r
        </button>\r
        <div class="tools-menu" *ngIf="showToolsMenu">\r
          <button\r
            *ngFor="let item of navItems"\r
            class="tools-menu-item"\r
            [class.active]="activeView === item.id"\r
            (click)="setView(item.id)">\r
            <mat-icon>{{ item.icon }}</mat-icon>\r
            {{ item.label }}\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
  </div>\r
\r
  <!-- \u2500\u2500 DISPUTES BANNER (always visible) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="disputes-banner" *ngIf="activeView === 'disputes'">\r
    <div class="disputes-banner-title">\r
      <mat-icon>gavel</mat-icon>\r
      Disputes\r
    </div>\r
\r
    <div class="dispute-tabs">\r
      <button type="button" [class.active]="disputeTab === 'open'" (click)="setDisputeTab('open')">\r
        Open <span class="dispute-count" *ngIf="disputes.length > 0">{{ disputes.length }}</span>\r
      </button>\r
      <button type="button" [class.active]="disputeTab === 'resolved'" (click)="setDisputeTab('resolved')">\r
        Resolved\r
      </button>\r
    </div>\r
\r
    <ng-container *ngIf="disputeTab === 'open'">\r
\r
    <div *ngIf="isLoadingDisputes" class="disputes-loading">\r
      <mat-spinner diameter="24"></mat-spinner>\r
      <span>Loading disputes...</span>\r
    </div>\r
\r
    <p *ngIf="!isLoadingDisputes && disputes.length === 0" class="disputes-empty">\r
      <mat-icon>verified</mat-icon> No open disputes.\r
    </p>\r
\r
    <div class="disputes-list" *ngIf="!isLoadingDisputes">\r
      <div *ngFor="let d of disputes" class="dispute-card">\r
        <div class="dispute-card-header">\r
          <span class="dispute-job-title">{{ d.jobTitle }}</span>\r
          <span class="dispute-date">{{ d.disputedAt | date:'MMM d, y' }}</span>\r
        </div>\r
        <div class="dispute-parties">\r
          <span><mat-icon>person</mat-icon> Consumer: {{ d.consumer?.name }} ({{ d.consumer?.email }})</span>\r
          <span><mat-icon>engineering</mat-icon> Pro: {{ d.pro?.businessName || d.pro?.name }} ({{ d.pro?.email }})</span>\r
        </div>\r
        <p class="dispute-reason"><strong>Reason:</strong> {{ d.disputeReason }}</p>\r
        <p *ngIf="d.completionNotes" class="dispute-completion-notes"><strong>Pro notes:</strong> {{ d.completionNotes }}</p>\r
        <p *ngIf="d.paymentAmount != null" class="dispute-payment-amount">\r
          <mat-icon>currency_rupee</mat-icon>\r
          <strong>Payment amount:</strong> \u20B9{{ d.paymentAmount | number:'1.2-2' }}\r
        </p>\r
\r
        <!-- Inline refund confirm form -->\r
        <div *ngIf="refundConfirmJobId === d.jobId" class="refund-confirm-form">\r
          <p class="refund-confirm-warning">\r
            <mat-icon>warning</mat-icon>\r
            This will refund <strong>\u20B9{{ d.paymentAmount | number:'1.2-2' }}</strong> to the consumer and reopen the job for rebidding.\r
          </p>\r
          <mat-form-field appearance="outline" class="refund-notes-field">\r
            <mat-label>Reason for refund</mat-label>\r
            <textarea matInput [(ngModel)]="refundNotes" rows="2" placeholder="Briefly explain the reason for this refund..."></textarea>\r
          </mat-form-field>\r
          <div class="refund-confirm-actions">\r
            <button mat-stroked-button (click)="refundConfirmJobId = null" [disabled]="resolvingDisputeId === d.jobId">\r
              Cancel\r
            </button>\r
            <button mat-raised-button color="warn" (click)="confirmRefund(d.jobId)" [disabled]="resolvingDisputeId === d.jobId || !refundNotes.trim()">\r
              <mat-icon>{{ resolvingDisputeId === d.jobId ? 'hourglass_empty' : 'currency_rupee' }}</mat-icon>\r
              {{ resolvingDisputeId === d.jobId ? 'Processing...' : 'Confirm Refund' }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Inline complete confirm form (comment required) -->\r
        <div *ngIf="completeConfirmJobId === d.jobId" class="refund-confirm-form">\r
          <p class="refund-confirm-warning complete-warning">\r
            <mat-icon>check_circle</mat-icon>\r
            This marks the job <strong>Completed in the pro's favour</strong> and releases payment. Add a comment explaining the decision.\r
          </p>\r
          <mat-form-field appearance="outline" class="refund-notes-field">\r
            <mat-label>Resolution comment (required)</mat-label>\r
            <textarea matInput [(ngModel)]="completeNotes" rows="2" placeholder="Explain why the work is being marked complete..."></textarea>\r
          </mat-form-field>\r
          <div class="refund-confirm-actions">\r
            <button mat-stroked-button (click)="completeConfirmJobId = null" [disabled]="resolvingDisputeId === d.jobId">\r
              Cancel\r
            </button>\r
            <button mat-raised-button color="accent" (click)="confirmComplete(d.jobId)" [disabled]="resolvingDisputeId === d.jobId || !completeNotes.trim()">\r
              <mat-icon>{{ resolvingDisputeId === d.jobId ? 'hourglass_empty' : 'check_circle' }}</mat-icon>\r
              {{ resolvingDisputeId === d.jobId ? 'Processing...' : 'Confirm Complete' }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="dispute-actions" *ngIf="refundConfirmJobId !== d.jobId && completeConfirmJobId !== d.jobId">\r
          <button\r
            mat-raised-button color="accent"\r
            (click)="openCompleteConfirm(d.jobId)"\r
            [disabled]="resolvingDisputeId === d.jobId"\r
            title="Mark the job as Completed in favour of the professional">\r
            <mat-icon>check_circle</mat-icon>\r
            Complete for Pro\r
          </button>\r
          <button\r
            mat-raised-button color="warn"\r
            (click)="openRefundConfirm(d.jobId)"\r
            [disabled]="resolvingDisputeId === d.jobId"\r
            title="Reopen the job for rebidding in favour of the consumer">\r
            <mat-icon>replay</mat-icon>\r
            Refund &amp; Reopen\r
          </button>\r
        </div>\r
      </div>\r
    </div>\r
    </ng-container>\r
\r
    <!-- RESOLVED TAB -->\r
    <ng-container *ngIf="disputeTab === 'resolved'">\r
      <div class="resolved-filters">\r
        <label>From <input type="date" [(ngModel)]="resolvedFrom"></label>\r
        <label>To <input type="date" [(ngModel)]="resolvedTo"></label>\r
        <input class="resolved-search" type="text" [(ngModel)]="resolvedSearch"\r
               placeholder="Search job, consumer or pro..." (keyup.enter)="applyResolvedFilters()">\r
        <button type="button" class="resolved-apply" (click)="applyResolvedFilters()">Apply</button>\r
        <button type="button" class="resolved-clear" *ngIf="resolvedFrom || resolvedTo || resolvedSearch" (click)="clearResolvedFilters()">Clear</button>\r
      </div>\r
\r
      <div *ngIf="isLoadingResolved" class="disputes-loading">\r
        <mat-spinner diameter="24"></mat-spinner><span>Loading...</span>\r
      </div>\r
\r
      <p *ngIf="!isLoadingResolved && resolvedDisputes.length === 0" class="disputes-empty">\r
        <mat-icon>history</mat-icon> No resolved disputes for these filters.\r
      </p>\r
\r
      <div class="disputes-list" *ngIf="!isLoadingResolved && resolvedDisputes.length > 0">\r
        <div *ngFor="let r of resolvedDisputes" class="dispute-card resolved-card">\r
          <div class="dispute-card-header">\r
            <span class="dispute-job-title">{{ r.jobTitle }}</span>\r
            <span class="resolution-badge"\r
                  [class.refund]="r.resolution === 'refund'"\r
                  [class.complete]="r.resolution === 'complete'">\r
              {{ r.resolution === 'refund' ? 'Refunded' : 'Completed for Pro' }}\r
            </span>\r
          </div>\r
          <div class="dispute-parties">\r
            <span><mat-icon>person</mat-icon> Consumer: {{ r.consumer?.name }} ({{ r.consumer?.email }})</span>\r
            <span><mat-icon>engineering</mat-icon> Pro: {{ r.pro?.businessName || r.pro?.name || '\u2014' }}<ng-container *ngIf="r.pro?.email"> ({{ r.pro?.email }})</ng-container></span>\r
          </div>\r
          <p class="dispute-reason"><strong>Dispute reason:</strong> {{ r.disputeReason }}</p>\r
          <p class="dispute-completion-notes" *ngIf="r.resolutionNotes"><strong>Resolution comment:</strong> {{ r.resolutionNotes }}</p>\r
          <p *ngIf="r.paymentAmount != null" class="dispute-payment-amount">\r
            <mat-icon>currency_rupee</mat-icon><strong>Payment:</strong> \u20B9{{ r.paymentAmount | number:'1.2-2' }}\r
          </p>\r
          <div class="resolved-meta">\r
            <span><mat-icon>event_available</mat-icon> Resolved {{ r.resolvedAt | date:'MMM d, y, h:mm a' }}</span>\r
            <span *ngIf="r.resolvedBy"><mat-icon>admin_panel_settings</mat-icon> By {{ r.resolvedBy.name }}</span>\r
            <span><mat-icon>flag</mat-icon> Disputed {{ r.disputedAt | date:'MMM d, y' }}</span>\r
          </div>\r
        </div>\r
      </div>\r
    </ng-container>\r
  </div>\r
\r
  <!-- \u2500\u2500 PANEL AREA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
  <div class="admin-panel-area" [ngSwitch]="activeView">\r
\r
    <!-- == DASHBOARD PANEL == -->\r
    <ng-container *ngSwitchCase="'dashboard'">\r
      <div class="dashboard-panel">\r
\r
        <!-- Date range -->\r
        <div class="dash-daterange">\r
          <div class="dash-presets">\r
            <button type="button" [class.active]="dateRangePreset === '7d'"   (click)="applyPreset('7d')">7 days</button>\r
            <button type="button" [class.active]="dateRangePreset === '30d'"  (click)="applyPreset('30d')">30 days</button>\r
            <button type="button" [class.active]="dateRangePreset === '90d'"  (click)="applyPreset('90d')">90 days</button>\r
            <button type="button" [class.active]="dateRangePreset === 'year'" (click)="applyPreset('year')">This year</button>\r
            <button type="button" [class.active]="dateRangePreset === 'all'"  (click)="applyPreset('all')">All time</button>\r
          </div>\r
          <div class="dash-custom">\r
            <label>From <input type="date" [(ngModel)]="customFrom"></label>\r
            <label>To <input type="date" [(ngModel)]="customTo"></label>\r
            <button type="button" class="dash-apply" (click)="applyCustomRange()" [disabled]="!customFrom && !customTo">Apply</button>\r
          </div>\r
        </div>\r
\r
        <!-- Metric cards -->\r
        <div class="dash-metrics">\r
          <div class="metric-card">\r
            <mat-icon class="metric-icon users">group</mat-icon>\r
            <div class="metric-body">\r
              <span class="metric-value">{{ isLoadingMetrics ? '\u2026' : (metrics?.users ?? 0) }}</span>\r
              <span class="metric-label">Users joined</span>\r
            </div>\r
          </div>\r
          <div class="metric-card">\r
            <mat-icon class="metric-icon pros">engineering</mat-icon>\r
            <div class="metric-body">\r
              <span class="metric-value">{{ isLoadingMetrics ? '\u2026' : (metrics?.pros ?? 0) }}</span>\r
              <span class="metric-label">Pros joined</span>\r
            </div>\r
          </div>\r
          <div class="metric-card">\r
            <mat-icon class="metric-icon biz">storefront</mat-icon>\r
            <div class="metric-body">\r
              <span class="metric-value">{{ isLoadingMetrics ? '\u2026' : (metrics?.businesses ?? 0) }}</span>\r
              <span class="metric-label">Businesses joined</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Jobs by category -->\r
        <div class="dash-jobs">\r
          <div class="dash-jobs-header">\r
            <h2><mat-icon>category</mat-icon> Jobs posted by category</h2>\r
            <div class="dash-region">\r
              <select [ngModel]="dashCountry" (ngModelChange)="onDashCountryChange($event)">\r
                <option value="">All countries</option>\r
                <option *ngFor="let c of dashCountries" [value]="c">{{ c }}</option>\r
              </select>\r
              <select [ngModel]="dashState" (ngModelChange)="onDashStateChange($event)">\r
                <option value="">All states</option>\r
                <option *ngFor="let s of dashStates" [value]="s">{{ s }}</option>\r
              </select>\r
              <select [ngModel]="dashDistrict" (ngModelChange)="onDashDistrictChange($event)">\r
                <option value="">All districts</option>\r
                <option *ngFor="let d of dashDistricts" [value]="d">{{ d }}</option>\r
              </select>\r
              <button type="button" class="dash-region-clear" *ngIf="dashCountry || dashState || dashDistrict" (click)="clearDashRegion()">Clear</button>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="isLoadingJobsByCat" class="dash-loading">\r
            <mat-spinner diameter="24"></mat-spinner><span>Loading\u2026</span>\r
          </div>\r
\r
          <p *ngIf="!isLoadingJobsByCat && jobsByCategory.length === 0" class="dash-empty">\r
            No jobs posted for the selected region and time frame.\r
          </p>\r
\r
          <div class="cat-bars" *ngIf="!isLoadingJobsByCat && jobsByCategory.length > 0">\r
            <div class="cat-bar-row" *ngFor="let row of jobsByCategory">\r
              <span class="cat-bar-label">\r
                <span class="cat-bar-icon" *ngIf="row.categoryIcon">{{ row.categoryIcon }}</span>\r
                {{ row.categoryName }}\r
              </span>\r
              <span class="cat-bar-track">\r
                <span class="cat-bar-fill" [style.width.%]="barPct(row.count)"></span>\r
              </span>\r
              <span class="cat-bar-count">{{ row.count }}</span>\r
            </div>\r
          </div>\r
        </div>\r
\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2550\u2550 SEARCH PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <ng-container *ngSwitchCase="'search'">\r
      <div class="panel-search-layout">\r
\r
        <!-- Left: Search -->\r
        <div class="search-section">\r
          <form class="search-form">\r
            <div class="search-controls">\r
              <div class="search-input-group">\r
                <input\r
                  type="text"\r
                  [(ngModel)]="searchQuery"\r
                  name="searchQuery"\r
                  placeholder="Search by email or name..."\r
                  class="search-input"\r
                  (keyup.enter)="search()"\r
                />\r
                <button type="button" class="search-btn" [disabled]="isSearching || !searchQuery.trim()" (click)="search()">\r
                  <mat-icon>{{ isSearching ? 'hourglass_empty' : 'search' }}</mat-icon>\r
                  {{ isSearching ? 'Searching...' : 'Search' }}\r
                </button>\r
              </div>\r
              <div class="search-type">\r
                <button type="button" class="type-btn" [class.active]="searchType === 'user'" (click)="setSearchType('user')">\r
                  <mat-icon>person</mat-icon> Users\r
                </button>\r
                <button type="button" class="type-btn" [class.active]="searchType === 'pro'" (click)="setSearchType('pro')">\r
                  <mat-icon>engineering</mat-icon> Professionals\r
                </button>\r
              </div>\r
            </div>\r
          </form>\r
\r
          <!-- Results -->\r
          <div class="search-results" *ngIf="users.length > 0 || pros.length > 0">\r
            <div class="results-list">\r
              <div *ngIf="users.length > 0" class="results-group">\r
                <h3>Users ({{ users.length }})</h3>\r
                <div class="user-item" *ngFor="let user of users" (click)="selectUser(user)" [class.selected]="selectedUser?.id === user.id">\r
                  <div class="user-info">\r
                    <div class="user-name">{{ user.firstName }} {{ user.lastName }}</div>\r
                    <div class="user-email">{{ user.email }}</div>\r
                    <div class="user-meta">\r
                      <span *ngIf="user.isEmailVerified" class="badge badge-verified">\r
                        <mat-icon>verified</mat-icon> Email Verified\r
                      </span>\r
                      <span class="user-date">Joined: {{ formatDate(user.createdAt) }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div *ngIf="pros.length > 0" class="results-group">\r
                <h3>Professionals ({{ pros.length }})</h3>\r
                <div class="pro-item" *ngFor="let pro of pros" (click)="selectPro(pro)" [class.selected]="selectedPro?.id === pro.id">\r
                  <div class="pro-info">\r
                    <div class="pro-name">{{ pro.proName }}</div>\r
                    <div class="pro-business">{{ pro.businessName }}</div>\r
                    <div class="pro-email">{{ pro.email }}</div>\r
                    <div class="pro-meta">\r
                      <span *ngIf="pro.isEmailVerified" class="badge badge-verified">\r
                        <mat-icon>verified</mat-icon> Email Verified\r
                      </span>\r
                      <span class="pro-date">Joined: {{ formatDate(pro.createdAt) }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Right: Details or empty state -->\r
        <div class="details-section" *ngIf="selectedUser || selectedPro">\r
          <div class="details-header">\r
            <h2 *ngIf="selectedUser">{{ selectedUser.firstName }} {{ selectedUser.lastName }}</h2>\r
            <h2 *ngIf="selectedPro">{{ selectedPro.proName }}</h2>\r
            <button (click)="impersonate()" class="impersonate-btn">\r
              <mat-icon>person_add</mat-icon>\r
              Impersonate\r
            </button>\r
            <button (click)="clearSelection()" class="clear-btn">\r
              <mat-icon>close</mat-icon>\r
            </button>\r
          </div>\r
\r
          <mat-tab-group class="details-tabs">\r
            <!-- Profile Tab -->\r
            <mat-tab>\r
              <ng-template mat-tab-label><mat-icon>person</mat-icon> Profile</ng-template>\r
              <div class="tab-content">\r
                <div *ngIf="selectedUser" class="profile-details">\r
                  <div class="detail-row"><label>Email:</label><span>{{ selectedUser.email }}</span></div>\r
                  <div class="detail-row"><label>Phone:</label><span>{{ selectedUser.phoneNumber }}</span></div>\r
                  <div class="detail-row">\r
                    <label>Email Verified:</label>\r
                    <span><mat-icon [class.verified]="selectedUser.isEmailVerified">{{ selectedUser.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>\r
                  </div>\r
                  <div class="detail-row">\r
                    <label>Phone Verified:</label>\r
                    <span><mat-icon [class.verified]="selectedUser.isPhoneVerified">{{ selectedUser.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>\r
                  </div>\r
                  <div class="detail-row">\r
                    <label>Address:</label>\r
                    <span *ngIf="selectedUser.street1">{{ selectedUser.street1 }}, {{ selectedUser.city }}, {{ selectedUser.state }} {{ selectedUser.zipPostalCode }}</span>\r
                    <span *ngIf="!selectedUser.street1">Not provided</span>\r
                  </div>\r
                  <div class="detail-row"><label>Joined:</label><span>{{ formatDate(selectedUser.createdAt) }}</span></div>\r
                </div>\r
\r
                <div *ngIf="selectedPro" class="profile-details">\r
                  <div class="detail-row"><label>Name:</label><span>{{ selectedPro.proName }}</span></div>\r
                  <div class="detail-row"><label>Business:</label><span>{{ selectedPro.businessName }}</span></div>\r
                  <div class="detail-row"><label>Email:</label><span>{{ selectedPro.email }}</span></div>\r
                  <div class="detail-row"><label>Phone:</label><span>{{ selectedPro.phoneNumber }}</span></div>\r
                  <div class="detail-row">\r
                    <label>Email Verified:</label>\r
                    <span><mat-icon [class.verified]="selectedPro.isEmailVerified">{{ selectedPro.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>\r
                  </div>\r
                  <div class="detail-row">\r
                    <label>Phone Verified:</label>\r
                    <span><mat-icon [class.verified]="selectedPro.isPhoneVerified">{{ selectedPro.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>\r
                  </div>\r
                  <div class="detail-row">\r
                    <label>Address:</label>\r
                    <span *ngIf="selectedPro.street1">{{ selectedPro.street1 }}, {{ selectedPro.city }}, {{ selectedPro.state }} {{ selectedPro.zipPostalCode }}</span>\r
                    <span *ngIf="!selectedPro.street1">Not provided</span>\r
                  </div>\r
                  <div class="detail-row"><label>Joined:</label><span>{{ formatDate(selectedPro.createdAt) }}</span></div>\r
                  <div class="detail-row">\r
                    <label>Service Radius:</label>\r
                    <ng-container *ngIf="!isEditingRadius">\r
                      <span>{{ selectedPro.serviceRadiusKm ?? 25 }} km</span>\r
                      <button class="inline-edit-btn" (click)="startEditRadius()" title="Edit service radius">\r
                        <mat-icon>edit</mat-icon>\r
                      </button>\r
                    </ng-container>\r
                    <ng-container *ngIf="isEditingRadius">\r
                      <input type="number" [(ngModel)]="editRadiusValue" min="1" max="500" class="radius-input" />\r
                      <span class="radius-unit">km</span>\r
                      <button class="inline-save-btn" (click)="saveRadius()"><mat-icon>check</mat-icon></button>\r
                      <button class="inline-cancel-btn" (click)="cancelEditRadius()"><mat-icon>close</mat-icon></button>\r
                    </ng-container>\r
                  </div>\r
                </div>\r
              </div>\r
            </mat-tab>\r
\r
            <!-- Job History Tab -->\r
            <mat-tab>\r
              <ng-template mat-tab-label><mat-icon>work</mat-icon> Job History</ng-template>\r
              <div class="tab-content">\r
                <div *ngIf="isLoadingDetails" class="loading">\r
                  <mat-spinner diameter="40"></mat-spinner>\r
                  Loading job history...\r
                </div>\r
\r
                <div *ngIf="!isLoadingDetails && selectedUser && userJobs.length > 0" class="jobs-list">\r
                  <div class="job-card" *ngFor="let job of userJobs" [class.job-in-progress]="job.status === 'In Progress'">\r
                    <div class="job-header">\r
                      <div class="job-title-section">\r
                        <h4>{{ job.title }}</h4>\r
                        <span *ngIf="job.isBid" class="bid-badge"><mat-icon>local_offer</mat-icon> Bid Job</span>\r
                      </div>\r
                      <span class="status-badge" [ngClass]="'status-' + job.status">{{ job.status }}</span>\r
                    </div>\r
                    <div class="job-details">\r
                      <div *ngIf="job.description" class="job-description">\r
                        <strong>Description:</strong><p>{{ job.description }}</p>\r
                      </div>\r
                      <div><strong>Category:</strong> {{ job.category?.name || 'N/A' }}</div>\r
                      <div><strong>Location:</strong> {{ job.location }}</div>\r
                      <div><strong>Budget:</strong> {{ job.budget }}</div>\r
                      <div><strong>Timeline:</strong> {{ job.timeline }}</div>\r
                      <div><strong>Posted by:</strong> {{ job.userName }}</div>\r
                      <div *ngIf="job.assignedProId"><strong>Assigned To:</strong> {{ job.assignedProBusinessName }}</div>\r
                      <div class="job-dates">\r
                        <span><strong>Created:</strong> {{ formatDate(job.createdAt) }}</span>\r
                        <span *ngIf="job.updatedAt"><strong>Updated:</strong> {{ formatDate(job.updatedAt) }}</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div *ngIf="!isLoadingDetails && selectedPro && proJobs.length > 0" class="jobs-list">\r
                  <div class="job-card" *ngFor="let job of proJobs" [class.job-in-progress]="job.status === 'In Progress'">\r
                    <div class="job-header">\r
                      <div class="job-title-section">\r
                        <h4>{{ job.title }}</h4>\r
                        <span *ngIf="job.isBid" class="bid-badge"><mat-icon>local_offer</mat-icon> Bid Job</span>\r
                      </div>\r
                      <span class="status-badge" [ngClass]="'status-' + job.status">{{ job.status }}</span>\r
                    </div>\r
                    <div class="job-details">\r
                      <div *ngIf="job.description" class="job-description">\r
                        <strong>Description:</strong><p>{{ job.description }}</p>\r
                      </div>\r
                      <div><strong>Category:</strong> {{ job.category?.name || 'N/A' }}</div>\r
                      <div><strong>Location:</strong> {{ job.location }}</div>\r
                      <div><strong>Budget:</strong> {{ job.budget }}</div>\r
                      <div><strong>Timeline:</strong> {{ job.timeline }}</div>\r
                      <div><strong>Posted by:</strong> {{ job.userName }}</div>\r
                      <div *ngIf="job.assignedProId"><strong>Assigned To:</strong> {{ job.assignedProBusinessName }}</div>\r
                      <div class="job-dates">\r
                        <span><strong>Created:</strong> {{ formatDate(job.createdAt) }}</span>\r
                        <span *ngIf="job.updatedAt"><strong>Updated:</strong> {{ formatDate(job.updatedAt) }}</span>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div *ngIf="!isLoadingDetails && ((selectedUser && userJobs.length === 0) || (selectedPro && proJobs.length === 0))" class="no-data">\r
                  <mat-icon>folder_open</mat-icon>\r
                  <p>No job history found</p>\r
                </div>\r
              </div>\r
            </mat-tab>\r
\r
            <!-- Chat History Tab -->\r
            <mat-tab>\r
              <ng-template mat-tab-label><mat-icon>message</mat-icon> Chat History</ng-template>\r
              <div class="tab-content">\r
                <div *ngIf="isLoadingDetails" class="loading">\r
                  <mat-spinner diameter="40"></mat-spinner>\r
                  Loading chat history...\r
                </div>\r
                <div class="chat-section" *ngIf="!isLoadingDetails">\r
                  <div class="conversations-panel">\r
                    <h3>Conversations</h3>\r
                    <div *ngIf="selectedUser && userConversations.length > 0" class="conversations-list">\r
                      <div\r
                        class="conversation-item"\r
                        *ngFor="let conversation of userConversations"\r
                        (click)="selectConversation(conversation)"\r
                        [class.selected]="selectedConversation?.userId === conversation.userId">\r
                        <div class="conversation-info">\r
                          <div class="conversation-name">{{ conversation.userName || 'Unknown User' }}</div>\r
                          <div class="conversation-meta">{{ conversation.userType }}</div>\r
                        </div>\r
                        <div class="conversation-time" *ngIf="conversation.lastMessageTime">\r
                          {{ formatDate(conversation.lastMessageTime) }}\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div *ngIf="selectedPro && proConversations.length > 0" class="conversations-list">\r
                      <div\r
                        class="conversation-item"\r
                        *ngFor="let conversation of proConversations"\r
                        (click)="selectConversation(conversation)"\r
                        [class.selected]="selectedConversation?.userId === conversation.userId">\r
                        <div class="conversation-info">\r
                          <div class="conversation-name">{{ conversation.userName || 'Unknown User' }}</div>\r
                          <div class="conversation-meta">{{ conversation.userType }}</div>\r
                        </div>\r
                        <div class="conversation-time" *ngIf="conversation.lastMessageTime">\r
                          {{ formatDate(conversation.lastMessageTime) }}\r
                        </div>\r
                      </div>\r
                    </div>\r
                    <div *ngIf="((selectedUser && userConversations.length === 0) || (selectedPro && proConversations.length === 0))" class="no-conversations">\r
                      <p>No conversations</p>\r
                    </div>\r
                  </div>\r
                  <div class="messages-panel" *ngIf="selectedConversation">\r
                    <h3>Messages \u2014 {{ selectedConversation.userName }}</h3>\r
                    <div class="messages-list">\r
                      <div class="message" *ngFor="let message of conversationMessages"\r
                        [ngClass]="'message-' + (message.senderType ? message.senderType.toLowerCase() : 'unknown')">\r
                        <div class="message-sender">{{ message.senderType }}</div>\r
                        <div class="message-content">{{ message.content }}</div>\r
                        <div class="message-time">{{ formatDate(message.sentAt) }}</div>\r
                        <div class="message-status" *ngIf="message.isRead">\r
                          <mat-icon>done_all</mat-icon> Read\r
                        </div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                  <div class="no-conversation-selected"\r
                    *ngIf="!selectedConversation && (userConversations.length > 0 || proConversations.length > 0)">\r
                    <p>Select a conversation to view messages</p>\r
                  </div>\r
                </div>\r
              </div>\r
            </mat-tab>\r
\r
            <!-- Relationships Tab -->\r
            <mat-tab>\r
              <ng-template mat-tab-label><mat-icon>people</mat-icon> Relationships</ng-template>\r
              <div class="tab-content">\r
                <div *ngIf="selectedPro">\r
                  <div class="rel-add-row">\r
                    <mat-form-field appearance="outline" class="rel-input">\r
                      <mat-label>Add User by ID</mat-label>\r
                      <input matInput type="number" [(ngModel)]="addUserId" placeholder="User ID" name="addUserId">\r
                    </mat-form-field>\r
                    <button mat-raised-button color="primary" [disabled]="!addUserId" (click)="addUserToPro()">\r
                      <mat-icon>person_add</mat-icon> Link User\r
                    </button>\r
                  </div>\r
                  <div *ngIf="isLoadingRelationships" class="loading">\r
                    <mat-spinner diameter="36"></mat-spinner> Loading linked clients...\r
                  </div>\r
                  <div *ngIf="!isLoadingRelationships && linkedUsers.length === 0" class="no-data">\r
                    <mat-icon>group_off</mat-icon>\r
                    <p>No users linked to this pro</p>\r
                  </div>\r
                  <div *ngIf="!isLoadingRelationships && linkedUsers.length > 0" class="rel-list">\r
                    <div class="rel-item" *ngFor="let u of linkedUsers">\r
                      <mat-icon>person</mat-icon>\r
                      <div class="rel-info">\r
                        <div class="rel-name">{{ u.name }}</div>\r
                        <div class="rel-email">{{ u.email }} &nbsp;\xB7&nbsp; ID: {{ u.id }}</div>\r
                      </div>\r
                      <button mat-icon-button color="warn" title="Remove" (click)="removeUserFromPro(u.id)">\r
                        <mat-icon>link_off</mat-icon>\r
                      </button>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div *ngIf="selectedUser">\r
                  <div *ngIf="isLoadingRelationships" class="loading">\r
                    <mat-spinner diameter="36"></mat-spinner> Loading linked pros...\r
                  </div>\r
                  <div *ngIf="!isLoadingRelationships && linkedPros.length === 0" class="no-data">\r
                    <mat-icon>handshake</mat-icon>\r
                    <p>No pros linked to this user</p>\r
                  </div>\r
                  <div *ngIf="!isLoadingRelationships && linkedPros.length > 0" class="rel-list">\r
                    <div class="rel-item" *ngFor="let p of linkedPros">\r
                      <mat-icon>engineering</mat-icon>\r
                      <div class="rel-info">\r
                        <div class="rel-name">{{ p.name }}</div>\r
                        <div class="rel-email">{{ p.businessName }} &nbsp;\xB7&nbsp; {{ p.email }}</div>\r
                      </div>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
            </mat-tab>\r
            <!-- Payments Tab -->\r
            <mat-tab>\r
              <ng-template mat-tab-label><mat-icon>payments</mat-icon> Payments</ng-template>\r
              <div class="tab-content">\r
\r
                <!-- Loading -->\r
                <div *ngIf="isLoadingEntityPayments" class="loading">\r
                  <mat-spinner diameter="24"></mat-spinner> Loading payments...\r
                </div>\r
\r
                <!-- Empty -->\r
                <div *ngIf="!isLoadingEntityPayments && entityPayments.length === 0" class="empty-state">\r
                  <mat-icon>payments</mat-icon>\r
                  <p>No payments found for this {{ selectedUser ? 'user' : 'professional' }}.</p>\r
                </div>\r
\r
                <!-- Payment cards -->\r
                <div class="entity-payments-list" *ngIf="!isLoadingEntityPayments && entityPayments.length > 0">\r
                  <div\r
                    *ngFor="let p of entityPayments"\r
                    class="entity-payment-card"\r
                    [class.ep-refunded]="p.status === 'Refunded'"\r
                    [class.ep-failed]="p.status === 'Failed'">\r
\r
                    <!-- Card header -->\r
                    <div class="ep-header">\r
                      <div class="ep-title">\r
                        <span class="ep-id">#{{ p.id }}</span>\r
                        <span class="ep-job">{{ p.jobTitle ?? ('Job #' + p.jobId) }}</span>\r
                      </div>\r
                      <span class="ep-status" [class]="'epst-' + (p.status | lowercase)">{{ p.status }}</span>\r
                    </div>\r
\r
                    <!-- Amounts -->\r
                    <div class="ep-amounts">\r
                      <div class="ep-amount-item">\r
                        <span class="ep-amt-label">Total paid</span>\r
                        <span class="ep-amt-value">\u20B9{{ p.amount | number:'1.2-2' }}</span>\r
                      </div>\r
                      <div class="ep-amount-item">\r
                        <span class="ep-amt-label">Platform fee</span>\r
                        <span class="ep-amt-value">\u20B9{{ p.platformFee | number:'1.2-2' }}</span>\r
                      </div>\r
                      <div class="ep-amount-item">\r
                        <span class="ep-amt-label">Pro payout</span>\r
                        <span class="ep-amt-value">\u20B9{{ p.proPayOut | number:'1.2-2' }}</span>\r
                      </div>\r
                    </div>\r
\r
                    <!-- Dates -->\r
                    <div class="ep-dates">\r
                      <span><mat-icon>schedule</mat-icon> {{ p.createdAt | date:'d MMM y' }}</span>\r
                      <span *ngIf="p.completedAt"><mat-icon>check_circle</mat-icon> Paid {{ p.completedAt | date:'d MMM y' }}</span>\r
                    </div>\r
\r
                    <!-- Failure reason -->\r
                    <div *ngIf="p.status === 'Failed' && p.failureReason" class="ep-failure">\r
                      <mat-icon>error_outline</mat-icon> {{ p.failureReason }}\r
                    </div>\r
\r
                    <!-- Refund details block -->\r
                    <div *ngIf="p.status === 'Refunded'" class="ep-refund-block">\r
                      <div class="ep-refund-header"><mat-icon>currency_rupee</mat-icon> Refund Details</div>\r
                      <div class="ep-refund-row">\r
                        <span class="ep-rd-item">\r
                          <span class="ep-rd-label">Refunded</span>\r
                          <span class="ep-rd-value">{{ p.refundedAt | date:'d MMM y, h:mm a' }}</span>\r
                        </span>\r
                        <span class="ep-rd-item">\r
                          <span class="ep-rd-label">Amount</span>\r
                          <span class="ep-rd-value ep-refund-amount">\u20B9{{ (p.refundAmount ?? p.amount) | number:'1.2-2' }}</span>\r
                        </span>\r
                      </div>\r
                      <div *ngIf="p.refundReason" class="ep-rd-reason">\r
                        <span class="ep-rd-label">Reason</span>\r
                        <span class="ep-rd-value">{{ p.refundReason }}</span>\r
                      </div>\r
                    </div>\r
\r
                    <!-- Razorpay IDs -->\r
                    <div class="ep-provider-ids" *ngIf="p.razorpayOrderId || p.razorpayPaymentId">\r
                      <span *ngIf="p.razorpayOrderId">Order: {{ p.razorpayOrderId }}</span>\r
                      <span *ngIf="p.razorpayPaymentId">Payment: {{ p.razorpayPaymentId }}</span>\r
                    </div>\r
\r
                    <!-- Admin refund action (Completed payments only) -->\r
                    <div *ngIf="p.status === 'Completed'" class="ep-refund-action">\r
\r
                      <!-- Confirm form -->\r
                      <div *ngIf="refundConfirmPaymentId === p.id" class="ep-refund-confirm">\r
                        <p class="ep-refund-warn">\r
                          <mat-icon>warning</mat-icon>\r
                          Refund <strong>\u20B9{{ p.amount | number:'1.2-2' }}</strong> to consumer?\r
                        </p>\r
                        <mat-form-field appearance="outline" class="ep-refund-notes">\r
                          <mat-label>Reason (optional)</mat-label>\r
                          <input matInput [(ngModel)]="refundDirectNotes" placeholder="Reason for refund...">\r
                        </mat-form-field>\r
                        <div class="ep-refund-confirm-btns">\r
                          <button mat-stroked-button (click)="refundConfirmPaymentId = null" [disabled]="refundingPaymentId === p.id">\r
                            Cancel\r
                          </button>\r
                          <button mat-raised-button color="warn" (click)="confirmDirectRefund(p.id)" [disabled]="refundingPaymentId === p.id">\r
                            <mat-icon>{{ refundingPaymentId === p.id ? 'hourglass_empty' : 'currency_rupee' }}</mat-icon>\r
                            {{ refundingPaymentId === p.id ? 'Processing...' : 'Confirm Refund' }}\r
                          </button>\r
                        </div>\r
                      </div>\r
\r
                      <!-- Refund button -->\r
                      <button\r
                        *ngIf="refundConfirmPaymentId !== p.id"\r
                        mat-stroked-button color="warn"\r
                        (click)="openDirectRefundConfirm(p.id)"\r
                        class="ep-refund-btn">\r
                        <mat-icon>currency_rupee</mat-icon>\r
                        Issue Refund\r
                      </button>\r
                    </div>\r
\r
                  </div>\r
                </div>\r
\r
              </div>\r
            </mat-tab>\r
\r
            <!-- \u2500\u2500 Payouts tab (Pro only) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
            <mat-tab *ngIf="selectedPro" label="Payouts">\r
              <div class="tab-content">\r
\r
                <div *ngIf="isLoadingProPayouts" class="loading-state">\r
                  <mat-spinner diameter="32"></mat-spinner>\r
                </div>\r
\r
                <div *ngIf="!isLoadingProPayouts && proPayouts.length === 0" class="empty-state">\r
                  <mat-icon>payments</mat-icon>\r
                  <p>No payouts found for this professional.</p>\r
                </div>\r
\r
                <div class="entity-payments-list" *ngIf="!isLoadingProPayouts && proPayouts.length > 0">\r
                  <div *ngFor="let p of proPayouts" class="entity-payment-card"\r
                    [class.ep-failed]="p.status === 'Failed'">\r
\r
                    <div class="ep-header">\r
                      <div class="ep-title">\r
                        <span class="ep-id">#{{ p.id }}</span>\r
                        <span class="ep-job">{{ p.jobTitle ?? ('Job #' + p.jobId) }}</span>\r
                      </div>\r
                      <span class="ep-status" [class]="'epst-' + (p.status | lowercase)">{{ p.status }}</span>\r
                    </div>\r
\r
                    <div class="ep-amounts">\r
                      <div class="ep-amount-item">\r
                        <span class="ep-amt-label">Amount</span>\r
                        <span class="ep-amt-value">&#8377;{{ p.amount | number:'1.2-2' }}</span>\r
                      </div>\r
                      <div class="ep-amount-item" *ngIf="p.mode">\r
                        <span class="ep-amt-label">Mode</span>\r
                        <span class="ep-amt-value">{{ p.mode }}</span>\r
                      </div>\r
                    </div>\r
\r
                    <div class="ep-dates">\r
                      <span><mat-icon>schedule</mat-icon> Created {{ p.createdAt | date:'d MMM y' }}</span>\r
                      <span *ngIf="p.processedAt"><mat-icon>check_circle</mat-icon> Processed {{ p.processedAt | date:'d MMM y' }}</span>\r
                    </div>\r
\r
                    <div *ngIf="p.failureReason" class="ep-failure">\r
                      <mat-icon>error_outline</mat-icon> {{ p.failureReason }}\r
                    </div>\r
\r
                    <div *ngIf="p.razorpayPayoutId" class="ep-provider-ids">\r
                      <span>Razorpay: {{ p.razorpayPayoutId }}</span>\r
                    </div>\r
\r
                    <!-- Retry button for Pending or Failed payouts -->\r
                    <div *ngIf="p.status === 'Pending' || p.status === 'Failed'" class="ep-refund-action">\r
                      <button mat-stroked-button color="primary"\r
                        (click)="retryPayout(p.id)"\r
                        [disabled]="retryingPayoutId === p.id">\r
                        <mat-icon>{{ retryingPayoutId === p.id ? 'hourglass_empty' : 'refresh' }}</mat-icon>\r
                        {{ retryingPayoutId === p.id ? 'Retrying\u2026' : 'Retry Payout' }}\r
                      </button>\r
                    </div>\r
\r
                  </div>\r
                </div>\r
\r
              </div>\r
            </mat-tab>\r
\r
          </mat-tab-group>\r
        </div>\r
\r
        <!-- Empty state when no selection -->\r
        <div class="empty-state"\r
          *ngIf="!selectedUser && !selectedPro && users.length === 0 && pros.length === 0">\r
          <mat-icon>manage_search</mat-icon>\r
          <h3>Search for Users or Professionals</h3>\r
          <p>Enter a name or email address to find user accounts or professional profiles</p>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2550\u2550 SERVICE AREAS PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <ng-container *ngSwitchCase="'service-areas'">\r
      <div class="panel-card">\r
        <div class="panel-card-header">\r
          <mat-icon>location_on</mat-icon>\r
          <h2>Service Areas</h2>\r
          <span class="panel-count" *ngIf="serviceAreas.length">({{ serviceAreas.length }})</span>\r
          <button class="map-view-btn" (click)="toggleMapView()" [class.active]="showMapView" title="Toggle map view">\r
            <mat-icon>{{ showMapView ? 'list' : 'map' }}</mat-icon>\r
            {{ showMapView ? 'List View' : 'Map View' }}\r
          </button>\r
        </div>\r
\r
        <!-- Add area form -->\r
        <div class="add-area-form">\r
          <h3>Add Service Area</h3>\r
          <div class="area-form-row">\r
            <input type="text" [(ngModel)]="newArea.country" placeholder="Country *" class="area-input" />\r
            <input type="text" [(ngModel)]="newArea.state" placeholder="State (optional)" class="area-input" (blur)="expandNewAreaState()" />\r
            <input type="text" [(ngModel)]="newArea.district" placeholder="District (optional)" class="area-input" />\r
            <input type="text" [(ngModel)]="newArea.pinCode" placeholder="PIN Code (optional)" class="area-input" />\r
            <input type="text" [(ngModel)]="newArea.notes" placeholder="Notes (optional)" class="area-input area-input-notes" />\r
            <button (click)="addServiceArea()" [disabled]="!newArea.country || isSavingArea" class="add-area-btn">\r
              <mat-icon>add</mat-icon>\r
              {{ isSavingArea ? 'Adding...' : 'Add' }}\r
            </button>\r
          </div>\r
          <div *ngIf="areaErrorMsg" class="area-error">{{ areaErrorMsg }}</div>\r
        </div>\r
\r
        <!-- \u2500\u2500 MAP VIEW \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <div *ngIf="showMapView" class="map-section">\r
          <div class="map-filters">\r
            <select class="map-select" [ngModel]="mapFilterCountry" (ngModelChange)="onMapCountryChange($event)">\r
              <option value="">All Countries</option>\r
              <option *ngFor="let c of mapCountries" [value]="c">{{ c }}</option>\r
            </select>\r
            <select class="map-select" [ngModel]="mapFilterState" (ngModelChange)="onMapStateChange($event)" [disabled]="!mapFilterCountry">\r
              <option value="">All States</option>\r
              <option *ngFor="let s of mapStates" [value]="s">{{ s }}</option>\r
            </select>\r
            <div class="map-inactive-label" (click)="$event.stopPropagation()">\r
              <input type="checkbox" id="map-inactive-toggle"\r
                [checked]="mapShowInactive"\r
                (change)="onMapInactiveChange($any($event.target).checked)" />\r
              <label for="map-inactive-toggle">Show inactive</label>\r
            </div>\r
            <div class="map-legend">\r
              <span class="map-legend-dot active"></span> Active\r
              <span class="map-legend-dot inactive"></span> Inactive\r
            </div>\r
            <span *ngIf="isGeocodingAreas" class="map-geocoding">\r
              <mat-spinner diameter="14"></mat-spinner> Locating...\r
            </span>\r
          </div>\r
          <div id="service-area-map" class="map-container"></div>\r
          <p *ngIf="!isGeocodingAreas && filteredMapAreas.length === 0" class="map-empty">\r
            No areas match the current filter.\r
          </p>\r
        </div>\r
\r
        <!-- \u2500\u2500 LIST VIEW \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
        <ng-container *ngIf="!showMapView">\r
          <!-- List filters -->\r
          <div class="list-filters">\r
            <select class="map-select" [ngModel]="listFilterCountry" (ngModelChange)="onListCountryChange($event)">\r
              <option value="">All Countries</option>\r
              <option *ngFor="let c of mapCountries" [value]="c">{{ c }}</option>\r
            </select>\r
            <select class="map-select" [ngModel]="listFilterState" (ngModelChange)="onListStateChange($event)" [disabled]="!listFilterCountry">\r
              <option value="">All States</option>\r
              <option *ngFor="let s of listStates" [value]="s">{{ s }}</option>\r
            </select>\r
            <div class="map-inactive-label" (click)="$event.stopPropagation()">\r
              <input type="checkbox" id="list-inactive-toggle"\r
                [checked]="listShowInactive"\r
                (change)="listShowInactive = $any($event.target).checked" />\r
              <label for="list-inactive-toggle">Show inactive</label>\r
            </div>\r
            <span class="list-filter-count" *ngIf="listFilterCountry || listFilterState || listShowInactive">\r
              {{ filteredListAreas.length }} of {{ serviceAreas.length }}\r
            </span>\r
          </div>\r
\r
          <!-- Loading -->\r
          <div *ngIf="isLoadingAreas" class="loading">\r
            <mat-spinner diameter="32"></mat-spinner>\r
            <span>Loading service areas...</span>\r
          </div>\r
\r
          <!-- Table -->\r
          <div *ngIf="!isLoadingAreas" class="areas-table-wrap">\r
            <table class="areas-table" *ngIf="filteredListAreas.length > 0">\r
              <thead>\r
                <tr>\r
                  <th>Country</th><th>State</th><th>District</th><th>PIN</th>\r
                  <th>Status</th><th>Type</th><th>Notes</th><th>Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let area of filteredListAreas" [class.area-row-inactive]="!area.isActive">\r
                  <td>{{ area.country }}</td>\r
                  <td>{{ area.state || '\u2014' }}</td>\r
                  <td>{{ area.district || '\u2014' }}</td>\r
                  <td>{{ area.pinCode || '\u2014' }}</td>\r
                  <td>\r
                    <span class="area-badge" [class.area-badge-active]="area.isActive" [class.area-badge-inactive]="!area.isActive">\r
                      <mat-icon>{{ area.isActive ? 'check_circle' : 'cancel' }}</mat-icon>\r
                      {{ area.isActive ? 'Active' : 'Inactive' }}\r
                    </span>\r
                  </td>\r
                  <td>\r
                    <span *ngIf="area.isAutoEnrolled" class="auto-badge" title="Auto-enrolled during pro registration">\r
                      <mat-icon>autorenew</mat-icon> Auto\r
                    </span>\r
                    <span *ngIf="!area.isAutoEnrolled" class="manual-badge">Manual</span>\r
                  </td>\r
                  <td class="notes-cell">{{ area.notes || '\u2014' }}</td>\r
                  <td class="area-actions">\r
                    <button (click)="toggleServiceArea(area.id)" class="area-action-btn toggle-btn"\r
                      [title]="area.isActive ? 'Disable this area' : 'Enable this area'">\r
                      <mat-icon>{{ area.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>\r
                    </button>\r
                    <button (click)="deleteServiceArea(area)" class="area-action-btn delete-btn" title="Delete area">\r
                      <mat-icon>delete_outline</mat-icon>\r
                    </button>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
\r
            <div *ngIf="serviceAreas.length === 0" class="no-data">\r
              <mat-icon>location_off</mat-icon>\r
              <p>No service areas defined. Add one above \u2014 currently accepting jobs from anywhere.</p>\r
            </div>\r
            <div *ngIf="serviceAreas.length > 0 && filteredListAreas.length === 0" class="no-data">\r
              <mat-icon>filter_alt_off</mat-icon>\r
              <p>No areas match the current filter.</p>\r
            </div>\r
          </div>\r
        </ng-container>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2550\u2550 INVITE ADMIN PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <ng-container *ngSwitchCase="'invite-admin'">\r
      <div class="panel-card">\r
        <div class="panel-card-header">\r
          <mat-icon>person_add</mat-icon>\r
          <h2>Invite Admin</h2>\r
        </div>\r
\r
        <!-- Invite form -->\r
        <div class="invite-form-section">\r
          <h3>Send Invitation</h3>\r
          <p class="invite-description">Enter the email address of the person you want to invite as a platform administrator. They will receive an invitation link valid for 7 days.</p>\r
          <div class="invite-form-row">\r
            <input\r
              type="email"\r
              [(ngModel)]="inviteEmail"\r
              placeholder="admin@example.com"\r
              class="invite-input"\r
              (keyup.enter)="sendInviteInline()"\r
            />\r
            <button class="invite-send-btn" (click)="sendInviteInline()" [disabled]="inviteSending || !inviteEmail.trim()">\r
              <mat-icon>{{ inviteSending ? 'hourglass_empty' : 'send' }}</mat-icon>\r
              {{ inviteSending ? 'Sending...' : 'Send Invite' }}\r
            </button>\r
          </div>\r
          <div *ngIf="inviteSuccess" class="invite-success">\r
            <mat-icon>check_circle</mat-icon>\r
            {{ inviteSuccess }}\r
          </div>\r
          <div *ngIf="inviteError" class="invite-error">\r
            <mat-icon>error_outline</mat-icon>\r
            {{ inviteError }}\r
          </div>\r
        </div>\r
\r
        <!-- Invitations table -->\r
        <div class="invitations-section">\r
          <h3>Pending Invitations</h3>\r
\r
          <div *ngIf="isLoadingInvitations" class="loading">\r
            <mat-spinner diameter="32"></mat-spinner>\r
            <span>Loading invitations...</span>\r
          </div>\r
\r
          <div *ngIf="!isLoadingInvitations && adminInvitations.length > 0" class="invitations-table">\r
            <table class="invitations-list">\r
              <thead>\r
                <tr>\r
                  <th>Email</th>\r
                  <th>Status</th>\r
                  <th>Created</th>\r
                  <th>Expires In</th>\r
                  <th>Actions</th>\r
                </tr>\r
              </thead>\r
              <tbody>\r
                <tr *ngFor="let invitation of adminInvitations" [class.expired]="invitation.isExpired">\r
                  <td data-label="Email">{{ invitation.email }}</td>\r
                  <td data-label="Status">\r
                    <span *ngIf="invitation.isUsed" class="badge badge-used">\r
                      <mat-icon>check_circle</mat-icon> Used\r
                    </span>\r
                    <span *ngIf="!invitation.isUsed && !invitation.isExpired" class="badge badge-pending">\r
                      <mat-icon>schedule</mat-icon> Pending\r
                    </span>\r
                    <span *ngIf="!invitation.isUsed && invitation.isExpired" class="badge badge-expired">\r
                      <mat-icon>cancel</mat-icon> Expired\r
                    </span>\r
                  </td>\r
                  <td data-label="Created">{{ formatDate(invitation.createdAt) }}</td>\r
                  <td data-label="Expires">\r
                    <span *ngIf="!invitation.isExpired && !invitation.isUsed" class="expires">{{ invitation.daysUntilExpiry }} days</span>\r
                    <span *ngIf="invitation.isExpired" class="expired-text">Expired</span>\r
                    <span *ngIf="invitation.isUsed" class="used-text">{{ formatDate(invitation.usedAt) }}</span>\r
                  </td>\r
                  <td data-label="Actions">\r
                    <button\r
                      *ngIf="!invitation.isUsed && !invitation.isExpired"\r
                      (click)="resendInvitation(invitation.id)"\r
                      class="action-btn resend-btn"\r
                      title="Resend invitation email">\r
                      <mat-icon>mail</mat-icon> Resend\r
                    </button>\r
                    <span *ngIf="invitation.isUsed || invitation.isExpired" class="action-disabled">\u2014</span>\r
                  </td>\r
                </tr>\r
              </tbody>\r
            </table>\r
          </div>\r
\r
          <div *ngIf="!isLoadingInvitations && adminInvitations.length === 0" class="no-data">\r
            <mat-icon>inbox</mat-icon>\r
            <p>No invitations sent yet</p>\r
          </div>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2550\u2550 GEOCODE PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->\r
    <ng-container *ngSwitchCase="'geocode'">\r
      <div class="panel-card">\r
        <div class="panel-card-header">\r
          <mat-icon>my_location</mat-icon>\r
          <h2>Geocode Backfill</h2>\r
        </div>\r
        <p class="panel-description">Set latitude/longitude coordinates for accounts that are missing map data. Coordinates are looked up from their registered address via the Nominatim API.</p>\r
\r
        <!-- Professionals section -->\r
        <div class="geocode-section">\r
          <div class="geocode-section-header">\r
            <mat-icon>engineering</mat-icon>\r
            <div>\r
              <h3>Professionals</h3>\r
              <p>Pro accounts that have an address but are missing map coordinates.</p>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="isLoadingPendingPros" class="geocode-loading-row">\r
            <mat-spinner diameter="20"></mat-spinner>\r
            <span>Checking records...</span>\r
          </div>\r
\r
          <ng-container *ngIf="!isLoadingPendingPros">\r
            <div *ngIf="pendingProGeocodes.length === 0 && !proBackfillResult && !isBackfillingPros" class="geocode-all-done">\r
              <mat-icon>check_circle</mat-icon>\r
              All professionals are geocoded.\r
            </div>\r
\r
            <ng-container *ngIf="pendingProGeocodes.length > 0">\r
              <div class="geocode-pending-header">\r
                <mat-icon>location_searching</mat-icon>\r
                <span><strong>{{ pendingProGeocodes.length }}</strong> professional{{ pendingProGeocodes.length !== 1 ? 's' : '' }} need geocoding</span>\r
              </div>\r
              <div class="geocode-table-wrap">\r
                <table class="geocode-table">\r
                  <thead><tr><th>Name</th><th>Email</th><th>City</th><th>State</th><th>Country</th></tr></thead>\r
                  <tbody>\r
                    <tr *ngFor="let r of pendingProGeocodes">\r
                      <td>{{ r.name }}</td>\r
                      <td class="geocode-email">{{ r.email }}</td>\r
                      <td>{{ r.city }}</td>\r
                      <td>{{ r.state }}</td>\r
                      <td>{{ r.country }}</td>\r
                    </tr>\r
                  </tbody>\r
                </table>\r
              </div>\r
              <button class="geocode-run-btn" (click)="runGeocodeBackfillPros()" [disabled]="isBackfillingPros">\r
                <mat-icon>{{ isBackfillingPros ? 'hourglass_empty' : 'my_location' }}</mat-icon>\r
                {{ isBackfillingPros ? 'Geocoding...' : 'Geocode ' + pendingProGeocodes.length + ' record' + (pendingProGeocodes.length !== 1 ? 's' : '') }}\r
              </button>\r
            </ng-container>\r
\r
            <div *ngIf="proBackfillResult" class="geocode-result-block">\r
              <div class="geocode-result-header">\r
                <mat-icon class="icon-done">check_circle</mat-icon>\r
                <span class="result-title">Geocoding complete</span>\r
                <div class="result-chips">\r
                  <span class="result-chip chip-total">{{ proBackfillResult.total }} total</span>\r
                  <span class="result-chip chip-updated">{{ proBackfillResult.updated }} updated</span>\r
                  <span class="result-chip chip-failed" *ngIf="proBackfillResult.failed > 0">{{ proBackfillResult.failed }} failed</span>\r
                </div>\r
                <button class="dismiss-btn" (click)="proBackfillResult = null"><mat-icon>close</mat-icon></button>\r
              </div>\r
              <div class="geocode-table-wrap" *ngIf="proBackfillResult.details && proBackfillResult.details.length > 0">\r
                <table class="geocode-table geocode-result-table">\r
                  <thead><tr><th>Name</th><th>Email</th><th>City</th><th>Coordinates</th><th>Status</th></tr></thead>\r
                  <tbody>\r
                    <tr *ngFor="let d of proBackfillResult.details" [class.row-failed]="d.status === 'failed'">\r
                      <td>{{ d.name }}</td>\r
                      <td class="geocode-email">{{ d.email }}</td>\r
                      <td>{{ d.city }}</td>\r
                      <td class="geocode-coords">\r
                        <span *ngIf="d.lat != null">{{ d.lat | number:'1.4-4' }}, {{ d.lng | number:'1.4-4' }}</span>\r
                        <span *ngIf="d.lat == null" class="no-coords">\u2014</span>\r
                      </td>\r
                      <td>\r
                        <span class="status-chip" [class.chip-updated]="d.status === 'updated'" [class.chip-failed]="d.status === 'failed'">\r
                          <mat-icon>{{ d.status === 'updated' ? 'check_circle' : 'error_outline' }}</mat-icon>\r
                          {{ d.status }}\r
                        </span>\r
                      </td>\r
                    </tr>\r
                  </tbody>\r
                </table>\r
              </div>\r
            </div>\r
          </ng-container>\r
        </div>\r
\r
        <div class="geocode-divider"></div>\r
\r
        <!-- Users section -->\r
        <div class="geocode-section">\r
          <div class="geocode-section-header">\r
            <mat-icon>person_pin_circle</mat-icon>\r
            <div>\r
              <h3>Users</h3>\r
              <p>User accounts that have an address but are missing map coordinates.</p>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="isLoadingPendingUsers" class="geocode-loading-row">\r
            <mat-spinner diameter="20"></mat-spinner>\r
            <span>Checking records...</span>\r
          </div>\r
\r
          <ng-container *ngIf="!isLoadingPendingUsers">\r
            <div *ngIf="pendingUserGeocodes.length === 0 && !userBackfillResult && !isBackfillingUsers" class="geocode-all-done">\r
              <mat-icon>check_circle</mat-icon>\r
              All users are geocoded.\r
            </div>\r
\r
            <ng-container *ngIf="pendingUserGeocodes.length > 0">\r
              <div class="geocode-pending-header">\r
                <mat-icon>location_searching</mat-icon>\r
                <span><strong>{{ pendingUserGeocodes.length }}</strong> user{{ pendingUserGeocodes.length !== 1 ? 's' : '' }} need geocoding</span>\r
              </div>\r
              <div class="geocode-table-wrap">\r
                <table class="geocode-table">\r
                  <thead><tr><th>Name</th><th>Email</th><th>City</th><th>State</th><th>Country</th></tr></thead>\r
                  <tbody>\r
                    <tr *ngFor="let r of pendingUserGeocodes">\r
                      <td>{{ r.name }}</td>\r
                      <td class="geocode-email">{{ r.email }}</td>\r
                      <td>{{ r.city }}</td>\r
                      <td>{{ r.state }}</td>\r
                      <td>{{ r.country }}</td>\r
                    </tr>\r
                  </tbody>\r
                </table>\r
              </div>\r
              <button class="geocode-run-btn" (click)="runGeocodeBackfillUsers()" [disabled]="isBackfillingUsers">\r
                <mat-icon>{{ isBackfillingUsers ? 'hourglass_empty' : 'person_pin_circle' }}</mat-icon>\r
                {{ isBackfillingUsers ? 'Geocoding...' : 'Geocode ' + pendingUserGeocodes.length + ' record' + (pendingUserGeocodes.length !== 1 ? 's' : '') }}\r
              </button>\r
            </ng-container>\r
\r
            <div *ngIf="userBackfillResult" class="geocode-result-block">\r
              <div class="geocode-result-header">\r
                <mat-icon class="icon-done">check_circle</mat-icon>\r
                <span class="result-title">Geocoding complete</span>\r
                <div class="result-chips">\r
                  <span class="result-chip chip-total">{{ userBackfillResult.total }} total</span>\r
                  <span class="result-chip chip-updated">{{ userBackfillResult.updated }} updated</span>\r
                  <span class="result-chip chip-failed" *ngIf="userBackfillResult.failed > 0">{{ userBackfillResult.failed }} failed</span>\r
                </div>\r
                <button class="dismiss-btn" (click)="userBackfillResult = null"><mat-icon>close</mat-icon></button>\r
              </div>\r
              <div class="geocode-table-wrap" *ngIf="userBackfillResult.details && userBackfillResult.details.length > 0">\r
                <table class="geocode-table geocode-result-table">\r
                  <thead><tr><th>Name</th><th>Email</th><th>City</th><th>Coordinates</th><th>Status</th></tr></thead>\r
                  <tbody>\r
                    <tr *ngFor="let d of userBackfillResult.details" [class.row-failed]="d.status === 'failed'">\r
                      <td>{{ d.name }}</td>\r
                      <td class="geocode-email">{{ d.email }}</td>\r
                      <td>{{ d.city }}</td>\r
                      <td class="geocode-coords">\r
                        <span *ngIf="d.lat != null">{{ d.lat | number:'1.4-4' }}, {{ d.lng | number:'1.4-4' }}</span>\r
                        <span *ngIf="d.lat == null" class="no-coords">\u2014</span>\r
                      </td>\r
                      <td>\r
                        <span class="status-chip" [class.chip-updated]="d.status === 'updated'" [class.chip-failed]="d.status === 'failed'">\r
                          <mat-icon>{{ d.status === 'updated' ? 'check_circle' : 'error_outline' }}</mat-icon>\r
                          {{ d.status }}\r
                        </span>\r
                      </td>\r
                    </tr>\r
                  </tbody>\r
                </table>\r
              </div>\r
            </div>\r
          </ng-container>\r
        </div>\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2500\u2500 CATEGORIES \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <ng-container *ngSwitchCase="'categories'">\r
      <div class="cat-admin-panel">\r
\r
        <div class="cat-admin-header">\r
          <div class="cat-admin-title">\r
            <mat-icon>category</mat-icon>\r
            <div>\r
              <h2>Service Categories</h2>\r
              <p>{{ adminCategories.length }} categories \xB7 {{ activeCategoryCount }} active</p>\r
            </div>\r
          </div>\r
          <button class="cat-add-btn" (click)="showAddCategoryForm = !showAddCategoryForm; newCategoryError = ''">\r
            <mat-icon>{{ showAddCategoryForm ? 'close' : 'add' }}</mat-icon>\r
            {{ showAddCategoryForm ? 'Cancel' : 'Add Category' }}\r
          </button>\r
        </div>\r
\r
        <!-- Add form -->\r
        <div class="cat-add-form" *ngIf="showAddCategoryForm">\r
          <div class="cat-form-row">\r
            <div class="cat-form-field cat-form-icon">\r
              <label>Icon</label>\r
              <input type="text" [(ngModel)]="newCategory.icon" placeholder="\u{1F527}" maxlength="10" />\r
              <small>Paste an emoji</small>\r
            </div>\r
            <div class="cat-form-field cat-form-name">\r
              <label>Name <span class="required">*</span></label>\r
              <input type="text" [(ngModel)]="newCategory.name" placeholder="e.g. Plumbing" maxlength="100" />\r
            </div>\r
            <div class="cat-form-field cat-form-desc">\r
              <label>Description</label>\r
              <input type="text" [(ngModel)]="newCategory.description" placeholder="Short description (optional)" maxlength="500" />\r
            </div>\r
            <button class="cat-save-btn" [disabled]="!newCategory.name.trim() || addingCategory" (click)="submitNewCategory()">\r
              {{ addingCategory ? 'Adding\u2026' : 'Add' }}\r
            </button>\r
          </div>\r
          <p class="cat-form-error" *ngIf="newCategoryError">{{ newCategoryError }}</p>\r
        </div>\r
\r
        <!-- Loading -->\r
        <div class="cat-loading" *ngIf="categoriesLoading">\r
          <mat-spinner diameter="28"></mat-spinner>\r
          <span>Loading categories\u2026</span>\r
        </div>\r
\r
        <!-- Category list -->\r
        <div class="cat-list" *ngIf="!categoriesLoading">\r
          <div class="cat-list-header">\r
            <span class="col-icon">Icon</span>\r
            <span class="col-name">Name</span>\r
            <span class="col-desc">Description</span>\r
            <span class="col-pros">Pros</span>\r
            <span class="col-status">Status</span>\r
            <span class="col-actions">Actions</span>\r
          </div>\r
\r
          <div\r
            *ngFor="let cat of adminCategories"\r
            class="cat-row"\r
            [class.inactive]="!cat.isActive"\r
            [class.editing]="editingCategoryId === cat.id">\r
\r
            <!-- View mode -->\r
            <ng-container *ngIf="editingCategoryId !== cat.id">\r
              <span class="col-icon cat-icon-cell">{{ cat.icon || '\u2014' }}</span>\r
              <span class="col-name">{{ cat.name }}</span>\r
              <span class="col-desc cat-desc-cell">{{ cat.description || '\u2014' }}</span>\r
              <span class="col-pros">{{ cat.serviceCount }}</span>\r
              <span class="col-status">\r
                <span class="status-badge" [class.active]="cat.isActive">\r
                  {{ cat.isActive ? 'Active' : 'Inactive' }}\r
                </span>\r
              </span>\r
              <span class="col-actions">\r
                <button class="row-btn edit-btn" (click)="startEditCategory(cat)" title="Edit">\r
                  <mat-icon>edit</mat-icon>\r
                </button>\r
                <button\r
                  class="row-btn toggle-btn"\r
                  [class.deactivate]="cat.isActive"\r
                  [disabled]="savingCategoryId === cat.id"\r
                  (click)="toggleCategoryActive(cat)"\r
                  [title]="cat.isActive ? 'Deactivate' : 'Activate'">\r
                  <mat-icon>{{ cat.isActive ? 'visibility_off' : 'visibility' }}</mat-icon>\r
                </button>\r
              </span>\r
            </ng-container>\r
\r
            <!-- Edit mode -->\r
            <ng-container *ngIf="editingCategoryId === cat.id">\r
              <span class="col-icon">\r
                <input class="edit-input icon-input" type="text" [(ngModel)]="editCategory.icon" maxlength="10" placeholder="\u{1F527}" />\r
              </span>\r
              <span class="col-name">\r
                <input class="edit-input" type="text" [(ngModel)]="editCategory.name" maxlength="100" />\r
              </span>\r
              <span class="col-desc">\r
                <input class="edit-input" type="text" [(ngModel)]="editCategory.description" maxlength="500" placeholder="Description" />\r
              </span>\r
              <span class="col-pros">{{ cat.serviceCount }}</span>\r
              <span class="col-status">\r
                <label class="toggle-label">\r
                  <input type="checkbox" [(ngModel)]="editCategory.isActive" />\r
                  Active\r
                </label>\r
              </span>\r
              <span class="col-actions">\r
                <button class="row-btn save-btn" [disabled]="!editCategory.name.trim() || savingCategoryId === cat.id" (click)="saveEditCategory(cat)">\r
                  <mat-icon>check</mat-icon>\r
                </button>\r
                <button class="row-btn cancel-btn" (click)="cancelEditCategory()">\r
                  <mat-icon>close</mat-icon>\r
                </button>\r
              </span>\r
            </ng-container>\r
\r
          </div>\r
\r
          <div class="cat-empty" *ngIf="adminCategories.length === 0">\r
            No categories yet. Add one above.\r
          </div>\r
        </div>\r
\r
      </div>\r
    </ng-container>\r
\r
    <!-- \u2500\u2500 SETTINGS \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->\r
    <ng-container *ngSwitchCase="'settings'">\r
      <div class="panel-card">\r
        <div class="panel-card-header">\r
          <mat-icon>tune</mat-icon>\r
          <h2>Platform Settings</h2>\r
        </div>\r
        <p class="panel-description">Control site-wide display options.</p>\r
\r
        <div *ngIf="settingsLoading" class="geocode-loading-row">\r
          <mat-spinner diameter="28"></mat-spinner>\r
          <span>Loading settings\u2026</span>\r
        </div>\r
\r
        <div class="commission-section" *ngIf="!settingsLoading">\r
          <div class="commission-section-header">\r
            <mat-icon>groups</mat-icon>\r
            <div>\r
              <h3>Show Pro Count on Categories</h3>\r
              <p>Display the number of registered professionals under each service category on the Services page.</p>\r
            </div>\r
          </div>\r
          <div class="setting-toggle-row">\r
            <span class="setting-status" [class.enabled]="showProCountOnCategories">\r
              {{ showProCountOnCategories ? 'Enabled' : 'Disabled' }}\r
            </span>\r
            <button\r
              class="geocode-run-btn"\r
              [disabled]="settingsSaving"\r
              (click)="toggleShowProCount(!showProCountOnCategories)">\r
              {{ settingsSaving ? 'Saving\u2026' : (showProCountOnCategories ? 'Turn Off' : 'Turn On') }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <!-- Home Page Announcement Banner -->\r
        <div class="commission-section">\r
          <div class="commission-section-header">\r
            <mat-icon>campaign</mat-icon>\r
            <div>\r
              <h3>Home Page Banner</h3>\r
              <p>Show a scrolling announcement banner at the top of the home page.</p>\r
            </div>\r
          </div>\r
\r
          <div class="setting-toggle-row">\r
            <span class="setting-status" [class.enabled]="bannerEnabled">\r
              {{ bannerEnabled ? 'Enabled' : 'Disabled' }}\r
            </span>\r
            <button class="geocode-run-btn" [disabled]="bannerSaving" (click)="toggleBanner(!bannerEnabled)">\r
              {{ bannerSaving ? 'Saving\u2026' : (bannerEnabled ? 'Turn Off' : 'Turn On') }}\r
            </button>\r
          </div>\r
\r
          <!-- Message: read-only with an Edit link; reveals the editor when clicked -->\r
          <div class="banner-message-view" *ngIf="!bannerMessageEditing">\r
            <span class="banner-message-text">{{ bannerMessage || 'No message set' }}</span>\r
            <a class="banner-edit-link" (click)="startEditBannerMessage()">Edit</a>\r
          </div>\r
\r
          <div class="banner-message-edit" *ngIf="bannerMessageEditing">\r
            <mat-form-field appearance="outline" class="banner-message-field">\r
              <mat-label>Banner message</mat-label>\r
              <textarea\r
                matInput\r
                rows="2"\r
                [(ngModel)]="bannerMessageDraft"\r
                placeholder="Welcome to yProHub \u2014 find trusted professionals for any job."></textarea>\r
            </mat-form-field>\r
            <div class="setting-toggle-row">\r
              <button class="geocode-run-btn" [disabled]="bannerMessageSaving" (click)="saveBannerMessage()">\r
                {{ bannerMessageSaving ? 'Saving\u2026' : 'Save message' }}\r
              </button>\r
              <button class="geocode-run-btn secondary" [disabled]="bannerMessageSaving" (click)="cancelEditBannerMessage()">\r
                Cancel\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Our Team Section -->\r
        <div class="commission-section">\r
          <div class="commission-section-header">\r
            <mat-icon>groups</mat-icon>\r
            <div>\r
              <h3>Our Team Section</h3>\r
              <p>Manage the team shown on the public About page and control whether it appears.</p>\r
            </div>\r
          </div>\r
\r
          <div class="setting-toggle-row">\r
            <span class="setting-status" [class.enabled]="showOurTeam">\r
              {{ showOurTeam ? 'Visible on /about' : 'Hidden' }}\r
            </span>\r
            <button class="geocode-run-btn" [disabled]="ourTeamSaving" (click)="toggleOurTeam(!showOurTeam)">\r
              {{ ourTeamSaving ? 'Saving\u2026' : (showOurTeam ? 'Hide section' : 'Show section') }}\r
            </button>\r
          </div>\r
\r
          <div *ngIf="teamLoading" class="geocode-loading-row">\r
            <mat-spinner diameter="24"></mat-spinner><span>Loading team\u2026</span>\r
          </div>\r
\r
          <div class="team-admin-list" *ngIf="!teamLoading">\r
            <div class="team-admin-row" *ngFor="let m of teamMembers">\r
              <ng-container *ngIf="editingTeamMemberId !== m.id">\r
                <span class="ta-avatar">{{ m.initials }}</span>\r
                <div class="ta-info">\r
                  <strong>{{ m.name }}</strong>\r
                  <span>{{ m.role }}</span>\r
                </div>\r
                <span class="ta-badge" [class.off]="!m.isActive">{{ m.isActive ? 'Active' : 'Hidden' }}</span>\r
                <button class="ta-btn" title="Edit" (click)="startEditTeamMember(m)"><mat-icon>edit</mat-icon></button>\r
                <button class="ta-btn danger" title="Remove" (click)="deleteTeamMember(m)"><mat-icon>delete</mat-icon></button>\r
              </ng-container>\r
              <ng-container *ngIf="editingTeamMemberId === m.id">\r
                <input [(ngModel)]="editTeamMember.name" placeholder="Name" class="ta-input" />\r
                <input [(ngModel)]="editTeamMember.role" placeholder="Role" class="ta-input" />\r
                <input [(ngModel)]="editTeamMember.initials" placeholder="JS" class="ta-input ta-input-sm" maxlength="4" />\r
                <input type="number" [(ngModel)]="editTeamMember.displayOrder" placeholder="#" class="ta-input ta-input-sm" />\r
                <textarea [(ngModel)]="editTeamMember.bio" placeholder="Short bio" class="ta-input ta-textarea"></textarea>\r
                <label class="ta-check">\r
                  <!-- Zoneless CD races the native toggle against the [checked] binding, so\r
                       we suppress the native toggle and drive state from the model instead. -->\r
                  <input type="checkbox" [checked]="editTeamMember.isActive"\r
                         (click)="$event.preventDefault(); editTeamMember.isActive = !editTeamMember.isActive" />\r
                  Active\r
                </label>\r
                <button class="ta-btn" (click)="saveTeamMember(m)" [disabled]="savingTeamMemberId === m.id"><mat-icon>check</mat-icon></button>\r
                <button class="ta-btn" (click)="cancelEditTeamMember()"><mat-icon>close</mat-icon></button>\r
              </ng-container>\r
            </div>\r
            <p *ngIf="teamMembers.length === 0" class="ta-empty">No team members yet.</p>\r
          </div>\r
\r
          <button class="geocode-run-btn ta-add-btn" *ngIf="!showAddTeamForm" (click)="showAddTeamForm = true">\r
            <mat-icon>add</mat-icon> Add member\r
          </button>\r
          <div class="team-add-form" *ngIf="showAddTeamForm">\r
            <input [(ngModel)]="newTeamMember.name" placeholder="Name *" class="ta-input" />\r
            <input [(ngModel)]="newTeamMember.role" placeholder="Role" class="ta-input" />\r
            <input [(ngModel)]="newTeamMember.initials" placeholder="Initials (e.g. JS)" class="ta-input ta-input-sm" maxlength="4" />\r
            <input type="number" [(ngModel)]="newTeamMember.displayOrder" placeholder="Order #" class="ta-input ta-input-sm" />\r
            <textarea [(ngModel)]="newTeamMember.bio" placeholder="Short bio" class="ta-input ta-textarea"></textarea>\r
            <div class="ta-form-actions">\r
              <button class="ta-btn-text" (click)="showAddTeamForm = false">Cancel</button>\r
              <button class="geocode-run-btn" (click)="submitNewTeamMember()" [disabled]="addingTeamMember || !newTeamMember.name">\r
                {{ addingTeamMember ? 'Adding\u2026' : 'Add member' }}\r
              </button>\r
            </div>\r
          </div>\r
        </div>\r
\r
        <!-- Commission Config -->\r
        <div class="commission-section">\r
          <div class="commission-section-header">\r
            <mat-icon>payments</mat-icon>\r
            <div>\r
              <h3>Platform Commission</h3>\r
              <p>Control the fee charged to users and the deduction from pro payouts on each transaction.</p>\r
            </div>\r
          </div>\r
\r
          <div *ngIf="commissionLoading" class="geocode-loading-row">\r
            <mat-spinner diameter="28"></mat-spinner>\r
            <span>Loading commission settings\u2026</span>\r
          </div>\r
\r
          <ng-container *ngIf="!commissionLoading && commissionConfig">\r
\r
            <!-- Read-only summary -->\r
            <div class="commission-summary" *ngIf="!commissionEditing">\r
              <div class="commission-summary-grid">\r
                <div class="commission-stat">\r
                  <span class="commission-stat-label">User Commission</span>\r
                  <span class="commission-stat-value">{{ commissionConfig.userCommissionPercent }}%</span>\r
                  <span class="commission-stat-sub">added on top of bid</span>\r
                </div>\r
                <div class="commission-stat">\r
                  <span class="commission-stat-label">Pro Commission</span>\r
                  <span class="commission-stat-value">{{ commissionConfig.proCommissionPercent }}%</span>\r
                  <span class="commission-stat-sub">deducted from payout</span>\r
                </div>\r
                <div class="commission-stat">\r
                  <span class="commission-stat-label">GST on User Fee</span>\r
                  <span class="commission-stat-value">{{ commissionConfig.gstPercent }}%</span>\r
                </div>\r
                <div class="commission-stat">\r
                  <span class="commission-stat-label">Min Platform Fee</span>\r
                  <span class="commission-stat-value">\u20B9{{ commissionConfig.minPlatformFee }}</span>\r
                </div>\r
                <div class="commission-stat">\r
                  <span class="commission-stat-label">Max User Charge Cap</span>\r
                  <span class="commission-stat-value">{{ commissionConfig.maxCommissionPercent }}%</span>\r
                </div>\r
              </div>\r
              <button class="commission-edit-btn" (click)="startEditingCommission()">\r
                <mat-icon>edit</mat-icon>\r
                Edit\r
              </button>\r
            </div>\r
\r
            <!-- Edit form -->\r
            <div class="commission-edit-form" *ngIf="commissionEditing">\r
              <div class="commission-fields">\r
                <div class="commission-field-group">\r
                  <h4>User-side Commission</h4>\r
                  <div class="commission-field-row">\r
                    <label>User Commission %\r
                      <span class="commission-hint">Added on top of the bid \u2014 paid by the user</span>\r
                    </label>\r
                    <div class="commission-input-wrap">\r
                      <input type="number" class="commission-input" min="0" max="50" step="0.5"\r
                        [(ngModel)]="commissionDraft.userCommissionPercent">\r
                      <span class="commission-input-unit">%</span>\r
                    </div>\r
                  </div>\r
                  <div class="commission-field-row">\r
                    <label>GST on User Commission %\r
                      <span class="commission-hint">Applied to the user commission amount</span>\r
                    </label>\r
                    <div class="commission-input-wrap">\r
                      <input type="number" class="commission-input" min="0" max="30" step="0.5"\r
                        [(ngModel)]="commissionDraft.gstPercent">\r
                      <span class="commission-input-unit">%</span>\r
                    </div>\r
                  </div>\r
                  <div class="commission-field-row">\r
                    <label>Minimum Platform Fee\r
                      <span class="commission-hint">Floor charge regardless of percentage</span>\r
                    </label>\r
                    <div class="commission-input-wrap">\r
                      <span class="commission-input-prefix">\u20B9</span>\r
                      <input type="number" class="commission-input has-prefix" min="0" max="1000" step="1"\r
                        [(ngModel)]="commissionDraft.minPlatformFee">\r
                    </div>\r
                  </div>\r
                  <div class="commission-field-row">\r
                    <label>Max User Charge Cap %\r
                      <span class="commission-hint">User commission will never exceed this % of the bid</span>\r
                    </label>\r
                    <div class="commission-input-wrap">\r
                      <input type="number" class="commission-input" min="0" max="50" step="0.5"\r
                        [(ngModel)]="commissionDraft.maxCommissionPercent">\r
                      <span class="commission-input-unit">%</span>\r
                    </div>\r
                  </div>\r
                </div>\r
\r
                <div class="commission-field-group">\r
                  <h4>Pro-side Commission</h4>\r
                  <div class="commission-field-row">\r
                    <label>Pro Commission %\r
                      <span class="commission-hint">Deducted from the pro's payout</span>\r
                    </label>\r
                    <div class="commission-input-wrap">\r
                      <input type="number" class="commission-input" min="0" max="50" step="0.5"\r
                        [(ngModel)]="commissionDraft.proCommissionPercent">\r
                      <span class="commission-input-unit">%</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <!-- Live preview -->\r
              <div class="commission-preview">\r
                <div class="commission-preview-header">\r
                  <mat-icon>calculate</mat-icon>\r
                  <span>Live Preview \u2014 \u20B9{{ previewBid }} job</span>\r
                </div>\r
                <div class="commission-preview-grid">\r
                  <div class="commission-preview-section">\r
                    <h5>Consumer Pays</h5>\r
                    <div class="preview-row">\r
                      <span>Job bid</span>\r
                      <span>\u20B9{{ previewBid | number:'1.2-2' }}</span>\r
                    </div>\r
                    <div class="preview-row">\r
                      <span>Platform fee ({{ commissionDraft.userCommissionPercent }}%)</span>\r
                      <span>+ \u20B9{{ previewUserCommission | number:'1.2-2' }}</span>\r
                    </div>\r
                    <div class="preview-row">\r
                      <span>GST on fee ({{ commissionDraft.gstPercent }}%)</span>\r
                      <span>+ \u20B9{{ previewGst | number:'1.2-2' }}</span>\r
                    </div>\r
                    <div class="preview-row preview-total">\r
                      <span>Total charged</span>\r
                      <span>\u20B9{{ previewUserTotal | number:'1.2-2' }}</span>\r
                    </div>\r
                  </div>\r
                  <div class="commission-preview-section">\r
                    <h5>Pro Receives</h5>\r
                    <div class="preview-row">\r
                      <span>Job bid</span>\r
                      <span>\u20B9{{ previewBid | number:'1.2-2' }}</span>\r
                    </div>\r
                    <div class="preview-row">\r
                      <span>Platform deduction ({{ commissionDraft.proCommissionPercent }}%)</span>\r
                      <span>\u2212 \u20B9{{ previewProDeduction | number:'1.2-2' }}</span>\r
                    </div>\r
                    <div class="preview-row preview-total">\r
                      <span>Pro payout</span>\r
                      <span>\u20B9{{ previewProPayout | number:'1.2-2' }}</span>\r
                    </div>\r
                  </div>\r
                  <div class="commission-preview-section commission-preview-platform">\r
                    <h5>Platform Earns</h5>\r
                    <div class="preview-row">\r
                      <span>From user</span>\r
                      <span>\u20B9{{ previewUserCommission | number:'1.2-2' }}</span>\r
                    </div>\r
                    <div class="preview-row">\r
                      <span>From pro</span>\r
                      <span>\u20B9{{ previewProDeduction | number:'1.2-2' }}</span>\r
                    </div>\r
                    <div class="preview-row preview-total">\r
                      <span>Total (before GST remittance)</span>\r
                      <span>\u20B9{{ previewPlatformEarnings | number:'1.2-2' }}</span>\r
                    </div>\r
                  </div>\r
                </div>\r
              </div>\r
\r
              <div class="commission-edit-actions">\r
                <button class="commission-cancel-btn" [disabled]="commissionSaving"\r
                  (click)="cancelEditingCommission()">\r
                  Cancel\r
                </button>\r
                <button class="geocode-run-btn" [disabled]="commissionSaving"\r
                  (click)="saveCommissionConfig()">\r
                  {{ commissionSaving ? 'Saving\u2026' : 'Save Commission Settings' }}\r
                </button>\r
              </div>\r
            </div>\r
\r
          </ng-container>\r
        </div>\r
\r
      </div>\r
    </ng-container>\r
\r
  </div><!-- /admin-panel-area -->\r
\r
\r
</div><!-- /admin-users-container -->\r
`, styles: ['@charset "UTF-8";\n\n/* src/app/features/admin-users/admin-users.scss */\n.admin-users-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.admin-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 100;\n}\n.admin-header .header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.admin-header h1 {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.admin-header h1 mat-icon {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.tools-dropdown {\n  position: relative;\n}\n.tools-trigger {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  padding: 0.6rem 1.1rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.tools-trigger mat-icon {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.tools-trigger .chevron-icon {\n  transition: transform 0.2s;\n  opacity: 0.8;\n}\n.tools-trigger .chevron-icon.rotated {\n  transform: rotate(180deg);\n}\n.tools-trigger:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.55);\n}\n.tools-menu {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  min-width: 210px;\n  z-index: 200;\n  animation: menuSlide 0.15s ease;\n}\n@keyframes menuSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tools-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.85rem 1.25rem;\n  background: none;\n  border: none;\n  color: #333;\n  font-size: 0.92rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.tools-menu-item mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: #667eea;\n}\n.tools-menu-item:hover {\n  background: #f5f6fa;\n}\n.tools-menu-item.active {\n  background: #eef0fd;\n  color: #667eea;\n  font-weight: 700;\n}\n.tools-menu-item.active mat-icon {\n  color: #667eea;\n}\n.tools-menu-item + .tools-menu-item {\n  border-top: 1px solid #f0f0f0;\n}\n.disputes-banner {\n  background: #fff8f8;\n  border-bottom: 3px solid #ef9a9a;\n  padding: 1rem 2rem;\n}\n.disputes-banner .disputes-banner-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #c62828;\n  margin-bottom: 0.75rem;\n}\n.disputes-banner .disputes-banner-title mat-icon {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.disputes-banner .disputes-banner-title .dispute-count {\n  background: #c62828;\n  color: white;\n  border-radius: 12px;\n  padding: 1px 8px;\n  font-size: 0.78rem;\n}\n.disputes-banner .disputes-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #888;\n  font-size: 0.9rem;\n}\n.disputes-banner .disputes-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.dispute-card {\n  background: white;\n  border: 1px solid #ef9a9a;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.dispute-card .dispute-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.4rem;\n}\n.dispute-card .dispute-card-header .dispute-job-title {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.dispute-card .dispute-card-header .dispute-date {\n  font-size: 0.8rem;\n  color: #888;\n}\n.dispute-card .dispute-parties {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.4rem;\n}\n.dispute-card .dispute-parties span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dispute-card .dispute-parties mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card .dispute-reason,\n.dispute-card .dispute-completion-notes {\n  font-size: 0.88rem;\n  color: #444;\n  margin: 0.2rem 0;\n}\n.dispute-card .dispute-payment-amount {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.88rem;\n  color: #1b5e20;\n  margin: 0.4rem 0 0;\n}\n.dispute-card .dispute-payment-amount mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card .refund-confirm-form {\n  margin-top: 0.75rem;\n  padding: 0.75rem;\n  background: #fff3e0;\n  border: 1px solid #ffb74d;\n  border-radius: 6px;\n}\n.dispute-card .refund-confirm-form .refund-confirm-warning {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.88rem;\n  color: #e65100;\n  margin: 0 0 0.75rem;\n}\n.dispute-card .refund-confirm-form .refund-confirm-warning mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.dispute-card .refund-confirm-form .refund-notes-field {\n  width: 100%;\n}\n.dispute-card .refund-confirm-form .refund-confirm-actions {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.dispute-card .dispute-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n.admin-panel-area {\n  flex: 1;\n  padding: 1.75rem 2rem;\n  overflow-y: auto;\n}\n.panel-search-layout {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 1024px) {\n  .panel-search-layout {\n    flex-direction: column;\n  }\n}\n.search-section {\n  flex: 0 0 340px;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: calc(100vh - 180px);\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .search-section {\n    flex: none;\n    width: 100%;\n    max-height: none;\n  }\n}\n.search-controls {\n  margin-bottom: 1.25rem;\n}\n.search-input-group {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n}\n.search-input-group .search-input {\n  flex: 1;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.search-input-group .search-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-input-group .search-btn {\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 600;\n  font-size: 0.88rem;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.search-input-group .search-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-input-group .search-btn:hover:not(:disabled) {\n  background: #1565c0;\n}\n.search-input-group .search-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.search-type {\n  display: flex;\n  gap: 0.5rem;\n}\n.search-type .type-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.75rem;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  background: white;\n  color: #666;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.search-type .type-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-type .type-btn:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.search-type .type-btn.active {\n  background: #667eea;\n  border-color: #667eea;\n  color: white;\n  font-weight: 600;\n}\n.search-results .results-group {\n  margin-bottom: 1.25rem;\n}\n.search-results .results-group h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.85rem;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 0.4rem;\n  font-weight: 700;\n}\n.user-item,\n.pro-item {\n  padding: 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  margin-bottom: 0.6rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.user-item:hover,\n.pro-item:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.12);\n}\n.user-item.selected,\n.pro-item.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.user-info .user-name,\n.user-info .pro-name,\n.pro-info .user-name,\n.pro-info .pro-name {\n  font-weight: 600;\n  margin-bottom: 0.2rem;\n  font-size: 0.95rem;\n}\n.user-info .user-email,\n.user-info .pro-email,\n.user-info .pro-business,\n.pro-info .user-email,\n.pro-info .pro-email,\n.pro-info .pro-business {\n  font-size: 0.83rem;\n  color: #666;\n  margin-bottom: 0.35rem;\n}\n.user-info .user-meta,\n.user-info .pro-meta,\n.pro-info .user-meta,\n.pro-info .pro-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  color: #999;\n}\n.user-date,\n.pro-date {\n  margin-left: auto;\n}\n.details-section {\n  flex: 1;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n@media (max-width: 1024px) {\n  .details-section {\n    flex: none;\n  }\n}\n.details-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e8e8e8;\n}\n.details-header h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  flex: 1;\n}\n.details-header .impersonate-btn,\n.details-header .clear-btn {\n  padding: 0.55rem 1rem;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 600;\n  font-size: 0.88rem;\n  transition: background 0.15s;\n}\n.details-header .impersonate-btn mat-icon,\n.details-header .clear-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.details-header .impersonate-btn {\n  background: #1976d2;\n  color: white;\n  border: none;\n}\n.details-header .impersonate-btn:hover {\n  background: #1565c0;\n}\n.details-header .clear-btn {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.details-header .clear-btn:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.details-tabs {\n  flex: 1;\n  overflow: auto;\n}\n.details-tabs ::ng-deep .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-tabs ::ng-deep .mat-mdc-tab {\n  min-width: 100px !important;\n}\n.tab-content {\n  padding: 1.25rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 320px);\n}\n.profile-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.profile-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f5f5f5;\n  gap: 0.5rem;\n}\n.profile-details .detail-row label {\n  font-weight: 600;\n  color: #444;\n  min-width: 130px;\n  font-size: 0.9rem;\n}\n.profile-details .detail-row span {\n  color: #666;\n  text-align: right;\n  font-size: 0.9rem;\n}\n.profile-details .detail-row span mat-icon {\n  vertical-align: middle;\n}\n.profile-details .detail-row span mat-icon.verified {\n  color: #4caf50;\n}\n.inline-edit-btn,\n.inline-save-btn,\n.inline-cancel-btn {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.2rem 0.4rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  margin-left: 0.4rem;\n  transition: background 0.15s;\n}\n.inline-edit-btn mat-icon,\n.inline-save-btn mat-icon,\n.inline-cancel-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.inline-edit-btn:hover,\n.inline-save-btn:hover,\n.inline-cancel-btn:hover {\n  background: #f0f0f0;\n}\n.inline-save-btn {\n  border-color: #4caf50;\n}\n.inline-save-btn mat-icon {\n  color: #4caf50;\n}\n.inline-cancel-btn {\n  border-color: #e53935;\n}\n.inline-cancel-btn mat-icon {\n  color: #e53935;\n}\n.radius-input {\n  width: 70px;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  margin-left: 0.4rem;\n}\n.radius-unit {\n  font-size: 0.9rem;\n  color: #666;\n  margin-left: 0.25rem;\n}\n.jobs-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.jobs-list .job-card {\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #fafafa;\n}\n.jobs-list .job-card .job-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.jobs-list .job-card .job-header h4 {\n  margin: 0;\n  color: #333;\n  font-size: 0.95rem;\n}\n.jobs-list .job-card .job-header .status-badge {\n  padding: 0.2rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.jobs-list .job-card .job-header .status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.jobs-list .job-card .job-header .status-badge.status-in-progress {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list .job-card .job-header .status-badge[class*="In Progress"] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list .job-card .job-header .status-badge.status-completed {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.jobs-list .job-card .job-header .status-badge.status-cancelled {\n  background: #f8d7da;\n  color: #842029;\n}\n.jobs-list .job-card .job-title-section {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.jobs-list .job-card .job-title-section .bid-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.45rem;\n  background: #fff3cd;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 0.73rem;\n  font-weight: 500;\n}\n.jobs-list .job-card .job-title-section .bid-badge mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.jobs-list .job-card .job-details {\n  font-size: 0.88rem;\n  color: #666;\n}\n.jobs-list .job-card .job-details div {\n  margin-bottom: 0.4rem;\n}\n.jobs-list .job-card .job-details div strong {\n  color: #444;\n  margin-right: 0.4rem;\n}\n.jobs-list .job-card .job-details .job-description {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #eee;\n}\n.jobs-list .job-card .job-details .job-description strong {\n  display: block;\n  color: #444;\n  margin-bottom: 0.35rem;\n}\n.jobs-list .job-card .job-details .job-description p {\n  margin: 0;\n  line-height: 1.4;\n  max-height: 80px;\n  overflow-y: auto;\n}\n.jobs-list .job-card .job-details .job-dates {\n  display: flex;\n  gap: 1.25rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #eee;\n  font-size: 0.83rem;\n}\n.jobs-list .job-card.job-in-progress {\n  border-left: 4px solid #2196f3;\n  background: #f0f8ff;\n}\n.chat-section {\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n}\n.chat-section .conversations-panel {\n  flex: 0 0 220px;\n  border-right: 1px solid #e8e8e8;\n  padding-right: 1rem;\n}\n.chat-section .conversations-panel h3 {\n  margin: 0 0 0.6rem;\n  font-size: 0.9rem;\n  color: #444;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.chat-section .conversations-panel .conversations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.chat-section .conversations-panel .no-conversations {\n  text-align: center;\n  color: #aaa;\n  padding: 1.5rem 0;\n  font-size: 0.88rem;\n}\n.chat-section .messages-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section .messages-panel h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #444;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 0.5rem;\n  font-weight: 700;\n}\n.chat-section .messages-panel .messages-list {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.chat-section .no-conversation-selected {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  font-size: 0.9rem;\n}\n.conversation-item {\n  padding: 0.65rem 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.conversation-item:hover {\n  border-color: #667eea;\n  background: #f9f9f9;\n}\n.conversation-item.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.conversation-item .conversation-name {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.88rem;\n}\n.conversation-item .conversation-meta {\n  font-size: 0.78rem;\n  color: #aaa;\n}\n.conversation-item .conversation-time {\n  font-size: 0.75rem;\n  color: #bbb;\n  margin-top: 0.2rem;\n}\n.message {\n  padding: 0.65rem;\n  border-radius: 6px;\n  background: #f5f5f5;\n}\n.message.message-user {\n  background: #e3f2fd;\n  margin-left: 2rem;\n}\n.message.message-pro {\n  background: #f3e5f5;\n  margin-right: 2rem;\n}\n.message .message-sender {\n  font-weight: 600;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.2rem;\n}\n.message .message-content {\n  color: #333;\n  margin-bottom: 0.35rem;\n  word-wrap: break-word;\n  font-size: 0.9rem;\n}\n.message .message-time {\n  font-size: 0.72rem;\n  color: #bbb;\n}\n.message .message-status {\n  font-size: 0.72rem;\n  color: #4caf50;\n  margin-top: 0.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.message .message-status mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.rel-add-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rel-add-row .rel-input {\n  flex: 1;\n  max-width: 200px;\n}\n.rel-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rel-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.rel-item mat-icon {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rel-info {\n  flex: 1;\n  min-width: 0;\n}\n.rel-info .rel-name {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.rel-info .rel-email {\n  font-size: 0.8rem;\n  color: #777;\n}\n.panel-card {\n  background: white;\n  border-radius: 10px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.panel-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.75rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f0f0f0;\n}\n.panel-card-header mat-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #667eea;\n}\n.panel-card-header h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  font-weight: 700;\n}\n.panel-card-header .panel-count {\n  font-size: 0.9rem;\n  color: #888;\n  font-weight: 400;\n}\n.panel-description {\n  color: #666;\n  font-size: 0.92rem;\n  margin: -1rem 0 1.5rem;\n  line-height: 1.5;\n}\n.add-area-form {\n  margin-bottom: 1.5rem;\n}\n.add-area-form h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #555;\n}\n.area-form-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n.area-input {\n  flex: 1;\n  min-width: 120px;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.area-input:focus {\n  border-color: #667eea;\n}\n.area-input.area-input-notes {\n  min-width: 180px;\n}\n.add-area-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  white-space: nowrap;\n}\n.add-area-btn:hover:not(:disabled) {\n  background: #1565c0;\n}\n.add-area-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.add-area-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.area-error {\n  margin-top: 0.5rem;\n  color: #c62828;\n  font-size: 0.83rem;\n}\n.areas-table-wrap {\n  overflow-x: auto;\n}\n.areas-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.areas-table th {\n  text-align: left;\n  padding: 0.6rem 0.75rem;\n  background: #f5f6fa;\n  color: #555;\n  font-weight: 600;\n  border-bottom: 2px solid #e0e0e0;\n  white-space: nowrap;\n}\n.areas-table td {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.areas-table tr:last-child td {\n  border-bottom: none;\n}\n.areas-table .area-row-inactive td {\n  opacity: 0.55;\n}\n.area-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 12px;\n}\n.area-badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.area-badge.area-badge-active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.area-badge.area-badge-inactive {\n  background: #ffebee;\n  color: #c62828;\n}\n.auto-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #f57c00;\n}\n.auto-badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.manual-badge {\n  font-size: 0.78rem;\n  color: #999;\n}\n.notes-cell {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #777;\n}\n.area-actions {\n  white-space: nowrap;\n}\n.area-action-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 4px;\n  transition: background 0.15s;\n  display: inline-flex;\n  align-items: center;\n}\n.area-action-btn:hover {\n  background: #f0f0f0;\n}\n.area-action-btn mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.area-action-btn.toggle-btn mat-icon {\n  color: #667eea;\n}\n.area-action-btn.delete-btn mat-icon {\n  color: #e53935;\n}\n.map-view-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-left: auto;\n  padding: 0.55rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.map-view-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.map-view-btn:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.map-view-btn.active {\n  border-color: #1976d2;\n  background: #1976d2;\n  color: #fff;\n}\n.map-section {\n  margin-top: 0.5rem;\n}\n.map-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.75rem;\n}\n.map-select {\n  padding: 0.4rem 0.7rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  outline: none;\n  background: #fff;\n  min-width: 140px;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.map-select:focus {\n  border-color: #667eea;\n}\n.map-select:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.map-inactive-label {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #555;\n  cursor: pointer;\n}\n.map-inactive-label input[type=checkbox] {\n  accent-color: #667eea;\n  cursor: pointer;\n}\n.map-legend {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin-left: 0.25rem;\n}\n.map-legend-dot {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.map-legend-dot.active {\n  background: #10b981;\n}\n.map-legend-dot.inactive {\n  background: #9ca3af;\n}\n.map-geocoding {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-style: italic;\n}\n.map-container {\n  width: 100%;\n  height: 440px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .map-container {\n    height: 320px;\n  }\n}\n.list-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0.25rem 0 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.list-filter-count {\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-style: italic;\n}\n.map-empty {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.88rem;\n  margin-top: 0.5rem;\n}\n.invite-form-section {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.invite-form-section h3 {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.invite-form-section .invite-description {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\n.invite-form-row {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.invite-form-row .invite-input {\n  flex: 1;\n  max-width: 380px;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.invite-form-row .invite-input:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.invite-send-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.15s;\n}\n.invite-send-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.invite-send-btn:hover:not(:disabled) {\n  background: #1565c0;\n}\n.invite-send-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.invite-success {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.invite-success mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #c62828;\n  font-size: 0.9rem;\n}\n.invite-error mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invitations-section h3 {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-section {\n  margin-bottom: 0.5rem;\n}\n.geocode-section-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.geocode-section-header > mat-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #667eea;\n  margin-top: 0.1rem;\n  flex-shrink: 0;\n}\n.geocode-section-header h3 {\n  margin: 0 0 0.15rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-section-header p {\n  margin: 0;\n  font-size: 0.85rem;\n  color: #666;\n}\n.geocode-divider {\n  border-top: 1px solid #e8e8f0;\n  margin: 1.75rem 0;\n}\n.geocode-loading-row {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #666;\n  font-size: 0.88rem;\n  padding: 0.5rem 0;\n}\n.geocode-all-done {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n  padding: 0.5rem 0;\n}\n.geocode-all-done mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-pending-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.9rem;\n  color: #555;\n  margin-bottom: 0.75rem;\n}\n.geocode-pending-header mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  color: #f57c00;\n}\n.geocode-table-wrap {\n  overflow-x: auto;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  margin-bottom: 1rem;\n}\n.geocode-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.85rem;\n}\n.geocode-table th {\n  background: #f5f5f8;\n  padding: 0.55rem 0.85rem;\n  text-align: left;\n  font-weight: 600;\n  color: #555;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  border-bottom: 1px solid #e0e0e0;\n  white-space: nowrap;\n}\n.geocode-table td {\n  padding: 0.6rem 0.85rem;\n  color: #333;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.geocode-table tbody tr:last-child td {\n  border-bottom: none;\n}\n.geocode-table tbody tr:hover {\n  background: #fafafe;\n}\n.geocode-table tbody tr.row-failed {\n  background: #fff8f5;\n}\n.geocode-table tbody tr.row-failed:hover {\n  background: #fff3ee;\n}\n.geocode-email {\n  color: #555;\n  font-size: 0.82rem;\n}\n.geocode-coords {\n  font-family: monospace;\n  font-size: 0.8rem;\n  color: #444;\n}\n.geocode-coords .no-coords {\n  color: #bbb;\n}\n.geocode-run-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1.1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  margin-bottom: 0.5rem;\n}\n.geocode-run-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.geocode-run-btn:hover:not(:disabled) {\n  background: #1565c0;\n}\n.geocode-run-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.geocode-result-block {\n  margin-top: 1.25rem;\n  background: #f9fff9;\n  border: 1px solid #c8e6c9;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n}\n.geocode-result-header {\n  display: flex;\n  align-items: center;\n  gap: 0.65rem;\n  margin-bottom: 1rem;\n  flex-wrap: wrap;\n}\n.geocode-result-header .icon-done {\n  color: #2e7d32;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n  flex-shrink: 0;\n}\n.geocode-result-header .result-title {\n  font-weight: 600;\n  font-size: 0.95rem;\n  color: #2e7d32;\n}\n.geocode-result-header .result-chips {\n  display: flex;\n  gap: 0.45rem;\n  flex-wrap: wrap;\n}\n.geocode-result-header .dismiss-btn {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #aaa;\n  padding: 0.15rem;\n  border-radius: 4px;\n  transition: color 0.15s;\n}\n.geocode-result-header .dismiss-btn:hover {\n  color: #555;\n}\n.geocode-result-header .dismiss-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.result-chip {\n  display: inline-flex;\n  align-items: center;\n  padding: 0.2rem 0.6rem;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  font-weight: 600;\n}\n.result-chip.chip-total {\n  background: #e8eaf6;\n  color: #3949ab;\n}\n.result-chip.chip-updated {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.result-chip.chip-failed {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.3rem;\n  padding: 0.2rem 0.6rem;\n  border-radius: 12px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.status-chip mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.status-chip.chip-updated {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.chip-updated mat-icon {\n  color: #4caf50;\n}\n.status-chip.chip-failed {\n  background: #fff3e0;\n  color: #e65100;\n}\n.status-chip.chip-failed mat-icon {\n  color: #ff9800;\n}\n.cat-admin-panel {\n  padding: 1.5rem;\n  max-width: 1100px;\n}\n.cat-admin-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.cat-admin-title {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cat-admin-title mat-icon {\n  font-size: 1.6rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  color: #667eea;\n}\n.cat-admin-title h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.cat-admin-title p {\n  margin: 2px 0 0;\n  font-size: 0.82rem;\n  color: #6b7280;\n}\n.cat-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.cat-add-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.cat-add-btn:hover {\n  background: #1565c0;\n}\n.cat-add-form {\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.cat-form-row {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.cat-form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cat-form-field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #374151;\n}\n.cat-form-field small {\n  font-size: 0.72rem;\n  color: #9ca3af;\n}\n.cat-form-field input {\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-family: inherit;\n  color: #1f2937;\n  background: white;\n}\n.cat-form-field input:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.1);\n}\n.cat-form-icon {\n  width: 80px;\n}\n.cat-form-name {\n  flex: 1;\n  min-width: 160px;\n}\n.cat-form-desc {\n  flex: 2;\n  min-width: 200px;\n}\n.cat-save-btn {\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  align-self: flex-end;\n}\n.cat-save-btn:hover:not(:disabled) {\n  background: #1565c0;\n}\n.cat-save-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.cat-form-error {\n  margin: 0.6rem 0 0;\n  font-size: 0.82rem;\n  color: #b91c1c;\n}\n.required {\n  color: #ef4444;\n}\n.cat-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 0;\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n.cat-list {\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.cat-list-header,\n.cat-row {\n  display: grid;\n  grid-template-columns: 56px 1fr 2fr 60px 90px 100px;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 1rem;\n}\n.cat-list-header {\n  background: #f3f4f6;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1.5px solid #e5e7eb;\n}\n.cat-row {\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 0.88rem;\n  color: #374151;\n  transition: background 0.12s;\n}\n.cat-row:last-child {\n  border-bottom: none;\n}\n.cat-row:hover {\n  background: #fafafa;\n}\n.cat-row.inactive {\n  opacity: 0.55;\n}\n.cat-row.editing {\n  background: #faf5ff;\n}\n.cat-icon-cell {\n  font-size: 1.25rem;\n}\n.cat-desc-cell {\n  color: #6b7280;\n  font-size: 0.82rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.status-badge.active {\n  background: #dcfce7;\n  color: #166534;\n}\n.col-actions {\n  display: flex;\n  gap: 0.4rem;\n}\n.row-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  background: #f3f4f6;\n  color: #374151;\n  transition: background 0.15s;\n}\n.row-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.row-btn:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.row-btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.row-btn.edit-btn:hover:not(:disabled) {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.row-btn.save-btn {\n  background: #dcfce7;\n  color: #166534;\n}\n.row-btn.save-btn:hover:not(:disabled) {\n  background: #bbf7d0;\n}\n.row-btn.cancel-btn:hover:not(:disabled) {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.row-btn.deactivate:hover:not(:disabled) {\n  background: #fff3cd;\n  color: #92400e;\n}\n.edit-input {\n  width: 100%;\n  padding: 0.3rem 0.5rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 5px;\n  font-size: 0.85rem;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.edit-input:focus {\n  outline: none;\n  border-color: #764ba2;\n}\n.icon-input {\n  text-align: center;\n  font-size: 1.1rem;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.82rem;\n  cursor: pointer;\n}\n.cat-empty {\n  padding: 2rem;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.setting-toggle-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.75rem;\n}\n.banner-message-field {\n  width: 100%;\n  margin-top: 0.75rem;\n}\n.banner-message-view {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-top: 0.85rem;\n}\n.banner-message-text {\n  flex: 1;\n  font-size: 0.9rem;\n  color: #444;\n  font-style: italic;\n}\n.banner-edit-link {\n  cursor: pointer;\n  color: var(--color-primary);\n  font-weight: 600;\n  font-size: 0.85rem;\n  text-decoration: underline;\n  white-space: nowrap;\n}\n.banner-message-edit {\n  margin-top: 0.85rem;\n}\n.geocode-run-btn.secondary {\n  background: #f0f0f0;\n  color: #555;\n}\n.setting-status {\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.3rem 0.75rem;\n  border-radius: 20px;\n  background: #f5f5f5;\n  color: #888;\n}\n.setting-status.enabled {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.badge.badge-pending {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge.badge-used {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-expired {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge.badge-verified {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.expires {\n  color: #666;\n  font-weight: 500;\n}\n.expired-text {\n  color: #d32f2f;\n  font-weight: 500;\n}\n.used-text {\n  color: #388e3c;\n  font-weight: 500;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.55rem 1rem;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.action-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.action-btn.resend-btn {\n  background: white;\n  color: #374151;\n  border: 1px solid #d1d5db;\n}\n.action-btn.resend-btn:hover {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.action-disabled {\n  color: #ccc;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 2rem;\n  color: #777;\n  font-size: 0.9rem;\n}\n.no-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem 1rem;\n  color: #bbb;\n}\n.no-data mat-icon {\n  font-size: 2.75rem;\n  width: 2.75rem;\n  height: 2.75rem;\n  opacity: 0.5;\n}\n.no-data p {\n  font-size: 0.95rem;\n  margin: 0;\n  color: #aaa;\n}\n.empty-state {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  color: #bbb;\n}\n.empty-state mat-icon {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  opacity: 0.25;\n}\n.empty-state h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #888;\n}\n.empty-state p {\n  margin: 0.25rem 0 0;\n  max-width: 280px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.invitations-table {\n  overflow-x: auto;\n}\n.invitations-table .invitations-list {\n  width: 100%;\n  border-collapse: collapse;\n}\n.invitations-table .invitations-list thead {\n  background: #f5f6fa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.invitations-table .invitations-list th {\n  padding: 0.875rem 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #444;\n  font-size: 0.83rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.invitations-table .invitations-list td {\n  padding: 0.875rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: #555;\n  font-size: 0.9rem;\n  vertical-align: middle;\n}\n.invitations-table .invitations-list tbody tr {\n  transition: background 0.15s;\n}\n.invitations-table .invitations-list tbody tr:hover {\n  background: #fafafa;\n}\n.invitations-table .invitations-list tbody tr.expired {\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .admin-users-container {\n    margin: 0;\n    width: 100%;\n    min-height: unset;\n  }\n  .admin-header {\n    padding: 1rem;\n  }\n  .admin-header .header-top {\n    gap: 0.75rem;\n  }\n  .admin-header h1 {\n    font-size: 1.1rem;\n    gap: 0.5rem;\n  }\n  .admin-header h1 mat-icon {\n    font-size: 1.3rem;\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .tools-trigger {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.85rem;\n  }\n  .tools-trigger span {\n    display: none;\n  }\n  .disputes-banner {\n    padding: 0.875rem 1rem;\n  }\n  .admin-panel-area {\n    padding: 1rem 0.75rem;\n  }\n  .panel-card {\n    padding: 1rem 0.875rem;\n  }\n  .panel-search-layout {\n    flex-direction: column;\n  }\n  .search-section {\n    flex: none;\n    width: 100%;\n    max-height: none;\n    padding: 1rem;\n  }\n  .details-section {\n    padding: 1rem;\n  }\n  .details-header {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .details-header h2 {\n    font-size: 1.1rem;\n    flex: 1 1 100%;\n  }\n  .details-header .impersonate-btn,\n  .details-header .clear-btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab {\n    min-width: 0 !important;\n    padding: 0 8px !important;\n    flex-grow: 1;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mdc-tab__text-label {\n    font-size: 0.7rem;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mat-icon {\n    font-size: 0.95rem;\n    width: 0.95rem;\n    height: 0.95rem;\n  }\n  .tab-content {\n    padding: 0.75rem;\n    max-height: none;\n  }\n  .profile-details .detail-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.15rem;\n  }\n  .profile-details .detail-row label {\n    min-width: unset;\n  }\n  .profile-details .detail-row span {\n    text-align: left;\n  }\n  .chat-section {\n    flex-direction: column;\n    height: auto;\n  }\n  .chat-section .conversations-panel {\n    flex: none;\n    border-right: none;\n    border-bottom: 1px solid #e8e8e8;\n    padding-right: 0;\n    padding-bottom: 0.75rem;\n    margin-bottom: 0.75rem;\n    max-height: 160px;\n    overflow-y: auto;\n  }\n  .rel-add-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .rel-add-row .rel-input {\n    max-width: none;\n  }\n  .dispute-actions {\n    flex-direction: column;\n  }\n  .dispute-actions button {\n    width: 100%;\n  }\n  .invite-form-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .invite-form-row .invite-input {\n    max-width: none;\n  }\n  .invitations-table .invitations-list thead {\n    display: none;\n  }\n  .invitations-table .invitations-list tbody tr {\n    display: block;\n    border: 1px solid #e8e8e8;\n    border-radius: 8px;\n    margin-bottom: 0.75rem;\n    padding: 0.5rem 0.75rem;\n    background: white;\n  }\n  .invitations-table .invitations-list td {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.4rem 0;\n    border-bottom: 1px solid #f5f5f5;\n    font-size: 0.83rem;\n  }\n  .invitations-table .invitations-list td:last-child {\n    border-bottom: none;\n  }\n  .invitations-table .invitations-list td::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #555;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n    flex-shrink: 0;\n    margin-right: 0.75rem;\n  }\n}\n.entity-payments-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.5rem 0;\n}\n.entity-payment-card {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-left: 4px solid #4caf50;\n  border-radius: 8px;\n  padding: 0.9rem 1.1rem;\n}\n.entity-payment-card.ep-refunded {\n  border-left-color: #ff9800;\n}\n.entity-payment-card.ep-failed {\n  border-left-color: #f44336;\n}\n.entity-payment-card .ep-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.entity-payment-card .ep-title {\n  display: flex;\n  align-items: baseline;\n  gap: 0.4rem;\n}\n.entity-payment-card .ep-title .ep-id {\n  font-size: 0.75rem;\n  color: #aaa;\n  font-family: monospace;\n}\n.entity-payment-card .ep-title .ep-job {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.entity-payment-card .ep-status {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.18rem 0.55rem;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.entity-payment-card .ep-status.epst-completed {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.entity-payment-card .ep-status.epst-refunded {\n  background: #fff3e0;\n  color: #e65100;\n}\n.entity-payment-card .ep-status.epst-failed {\n  background: #ffebee;\n  color: #c62828;\n}\n.entity-payment-card .ep-status.epst-pending {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.entity-payment-card .ep-amounts {\n  display: flex;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.45rem;\n}\n.entity-payment-card .ep-amounts .ep-amount-item {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card .ep-amounts .ep-amount-item .ep-amt-label {\n  font-size: 0.7rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.entity-payment-card .ep-amounts .ep-amount-item .ep-amt-value {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #222;\n}\n.entity-payment-card .ep-dates {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.3rem;\n}\n.entity-payment-card .ep-dates span {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.entity-payment-card .ep-dates mat-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.entity-payment-card .ep-failure {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.82rem;\n  color: #c62828;\n  margin-top: 0.35rem;\n}\n.entity-payment-card .ep-failure mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.entity-payment-card .ep-refund-block {\n  margin-top: 0.65rem;\n  padding: 0.65rem 0.85rem;\n  background: #fff8e1;\n  border: 1px solid #ffe082;\n  border-radius: 6px;\n}\n.entity-payment-card .ep-refund-block .ep-refund-header {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: #e65100;\n  margin-bottom: 0.4rem;\n}\n.entity-payment-card .ep-refund-block .ep-refund-header mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.entity-payment-card .ep-refund-block .ep-refund-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 0.25rem;\n}\n.entity-payment-card .ep-refund-block .ep-rd-item {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card .ep-refund-block .ep-rd-reason {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card .ep-refund-block .ep-rd-label {\n  font-size: 0.7rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.entity-payment-card .ep-refund-block .ep-rd-value {\n  font-size: 0.88rem;\n  color: #333;\n}\n.entity-payment-card .ep-refund-block .ep-rd-value.ep-refund-amount {\n  font-weight: 700;\n  color: #e65100;\n  font-size: 0.95rem;\n}\n.entity-payment-card .ep-provider-ids {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 0.4rem;\n  font-size: 0.7rem;\n  color: #bbb;\n  font-family: monospace;\n}\n.entity-payment-card .ep-refund-action {\n  margin-top: 0.75rem;\n  padding-top: 0.65rem;\n  border-top: 1px solid #eee;\n}\n.entity-payment-card .ep-refund-action .ep-refund-btn {\n  font-size: 0.82rem;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm {\n  padding: 0.65rem;\n  background: #fff3e0;\n  border: 1px solid #ffb74d;\n  border-radius: 6px;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm .ep-refund-warn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #e65100;\n  margin: 0 0 0.6rem;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm .ep-refund-warn mat-icon {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm .ep-refund-notes {\n  width: 100%;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm .ep-refund-confirm-btns {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 0.4rem;\n}\n@media (max-width: 480px) {\n  .details-tabs ::ng-deep .mat-mdc-tab .mdc-tab__text-label span:not(.mat-icon) {\n    display: none;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mat-icon {\n    margin-right: 0;\n  }\n}\n.commission-section {\n  margin-top: 1.5rem;\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n.commission-section-header {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n}\n.commission-section-header mat-icon {\n  margin-top: 2px;\n  color: #667eea;\n  flex-shrink: 0;\n}\n.commission-section-header h3 {\n  margin: 0 0 0.25rem;\n}\n.commission-section-header p {\n  margin: 0;\n  font-size: 0.88rem;\n  color: #6b7280;\n}\n.commission-summary {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.commission-edit-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  background: #1976d2;\n  border: none;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s;\n  align-self: flex-start;\n}\n.commission-edit-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.commission-edit-btn:hover {\n  background: #1565c0;\n}\n.commission-summary-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.commission-stat {\n  display: flex;\n  flex-direction: column;\n  background: #fff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  padding: 0.75rem 1rem;\n  min-width: 130px;\n}\n.commission-stat-label {\n  font-size: 0.75rem;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.commission-stat-value {\n  font-size: 1.5rem;\n  font-weight: 700;\n  color: var(--color-primary, #3730a3);\n  line-height: 1.2;\n  margin: 0.2rem 0 0;\n}\n.commission-stat-sub {\n  font-size: 0.75rem;\n  color: #9ca3af;\n}\n.commission-edit-form {\n  display: flex;\n  flex-direction: column;\n  gap: 1.5rem;\n}\n.commission-fields {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 700px) {\n  .commission-fields {\n    grid-template-columns: 1fr;\n  }\n}\n.commission-field-group {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.commission-field-group h4 {\n  margin: 0 0 0.25rem;\n  font-size: 0.9rem;\n  font-weight: 600;\n  color: #374151;\n  border-bottom: 1px solid #e5e7eb;\n  padding-bottom: 0.4rem;\n}\n.commission-field-row {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.commission-field-row label {\n  font-size: 0.85rem;\n  font-weight: 500;\n  color: #374151;\n}\n.commission-hint {\n  display: block;\n  font-size: 0.76rem;\n  font-weight: 400;\n  color: #9ca3af;\n  margin-top: 0.1rem;\n}\n.commission-input-wrap {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  overflow: hidden;\n  background: #fff;\n  width: fit-content;\n}\n.commission-input-wrap:focus-within {\n  border-color: var(--color-primary, #3730a3);\n}\n.commission-input-prefix,\n.commission-input-unit {\n  padding: 0.45rem 0.6rem;\n  background: #f3f4f6;\n  color: #6b7280;\n  font-size: 0.88rem;\n  font-weight: 500;\n  border: none;\n  -webkit-user-select: none;\n  user-select: none;\n}\n.commission-input-prefix {\n  border-right: 1px solid #d1d5db;\n}\n.commission-input-unit {\n  border-left: 1px solid #d1d5db;\n}\n.commission-input {\n  width: 80px;\n  padding: 0.45rem 0.5rem;\n  border: none;\n  outline: none;\n  font-size: 0.95rem;\n  color: #111827;\n  background: transparent;\n}\n.commission-input.has-prefix {\n  border-left: none;\n}\n.commission-preview {\n  background: #fff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.commission-preview-header {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1rem;\n  background: var(--color-primary, #3730a3);\n  color: #fff;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n.commission-preview-header mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.commission-preview-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 0;\n}\n@media (max-width: 700px) {\n  .commission-preview-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.commission-preview-section {\n  padding: 1rem;\n  border-right: 1px solid #e5e7eb;\n}\n.commission-preview-section:last-child {\n  border-right: none;\n}\n.commission-preview-section h5 {\n  margin: 0 0 0.6rem;\n  font-size: 0.8rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.05em;\n  color: #6b7280;\n}\n.commission-preview-platform {\n  background: #f0fdf4;\n}\n.commission-preview-platform h5 {\n  color: #15803d;\n}\n.preview-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 0.85rem;\n  color: #374151;\n  padding: 0.2rem 0;\n  gap: 0.5rem;\n}\n.preview-row span:first-child {\n  color: #6b7280;\n}\n.preview-total {\n  margin-top: 0.4rem;\n  padding-top: 0.4rem;\n  border-top: 1px solid #e5e7eb;\n  font-weight: 700;\n  color: #111827 !important;\n}\n.preview-total span:first-child {\n  color: #111827 !important;\n}\n.commission-edit-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: flex-end;\n}\n.commission-cancel-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.15s, border-color 0.15s;\n}\n.commission-cancel-btn:hover:not(:disabled) {\n  background: #f9fafb;\n  border-color: #9ca3af;\n}\n.commission-cancel-btn:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.disputes-empty {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0.5rem 0 0;\n  color: #6b7280;\n  font-size: 0.95rem;\n}\n.disputes-empty mat-icon {\n  color: #10b981;\n}\n.dashboard-panel {\n  display: flex;\n  flex-direction: column;\n  gap: 1.25rem;\n}\n.dashboard-panel .dash-daterange {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n}\n.dashboard-panel .dash-daterange .dash-presets {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.dashboard-panel .dash-daterange .dash-presets button {\n  padding: 0.4rem 0.8rem;\n  border: 1px solid #d1d5db;\n  border-radius: 999px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.82rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.dashboard-panel .dash-daterange .dash-presets button:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.dashboard-panel .dash-daterange .dash-presets button.active {\n  background: #667eea;\n  border-color: #667eea;\n  color: #fff;\n}\n.dashboard-panel .dash-daterange .dash-custom {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.dashboard-panel .dash-daterange .dash-custom label {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n}\n.dashboard-panel .dash-daterange .dash-custom input[type=date] {\n  padding: 0.35rem 0.5rem;\n  border: 1px solid #d1d5db;\n  border-radius: 6px;\n  font-size: 0.8rem;\n}\n.dashboard-panel .dash-daterange .dash-custom .dash-apply {\n  padding: 0.4rem 0.85rem;\n  border: none;\n  border-radius: 6px;\n  background: #667eea;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n}\n.dashboard-panel .dash-daterange .dash-custom .dash-apply:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.dashboard-panel .dash-metrics {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  gap: 1rem;\n}\n.dashboard-panel .dash-metrics .metric-card {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.1rem 1.25rem;\n  background: #fff;\n  border: 1px solid #eef0f4;\n  border-radius: 14px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.dashboard-panel .dash-metrics .metric-card .metric-icon {\n  font-size: 2rem;\n  width: 2rem;\n  height: 2rem;\n  padding: 0.55rem;\n  border-radius: 12px;\n}\n.dashboard-panel .dash-metrics .metric-card .metric-icon.users {\n  color: #4f46e5;\n  background: #eef2ff;\n}\n.dashboard-panel .dash-metrics .metric-card .metric-icon.pros {\n  color: #0d9488;\n  background: #ecfdf5;\n}\n.dashboard-panel .dash-metrics .metric-card .metric-icon.biz {\n  color: #b45309;\n  background: #fffbeb;\n}\n.dashboard-panel .dash-metrics .metric-card .metric-body {\n  display: flex;\n  flex-direction: column;\n}\n.dashboard-panel .dash-metrics .metric-card .metric-value {\n  font-size: 1.6rem;\n  font-weight: 800;\n  color: #111827;\n  line-height: 1.1;\n}\n.dashboard-panel .dash-metrics .metric-card .metric-label {\n  font-size: 0.82rem;\n  color: #6b7280;\n}\n.dashboard-panel .dash-jobs {\n  background: #fff;\n  border: 1px solid #eef0f4;\n  border-radius: 14px;\n  padding: 1.25rem;\n}\n.dashboard-panel .dash-jobs .dash-jobs-header {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1rem;\n}\n.dashboard-panel .dash-jobs .dash-jobs-header h2 {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  margin: 0;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.dashboard-panel .dash-jobs .dash-jobs-header h2 mat-icon {\n  color: #667eea;\n}\n.dashboard-panel .dash-jobs .dash-jobs-header .dash-region {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n.dashboard-panel .dash-jobs .dash-jobs-header .dash-region select {\n  padding: 0.4rem 0.6rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.82rem;\n  background: #fff;\n  color: #374151;\n}\n.dashboard-panel .dash-jobs .dash-jobs-header .dash-region .dash-region-clear {\n  padding: 0.4rem 0.7rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #6b7280;\n  font-size: 0.8rem;\n  cursor: pointer;\n}\n.dashboard-panel .dash-jobs .dash-jobs-header .dash-region .dash-region-clear:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.dashboard-panel .dash-jobs .dash-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: #6b7280;\n  font-size: 0.9rem;\n  padding: 1rem 0;\n}\n.dashboard-panel .dash-jobs .dash-empty {\n  color: #9ca3af;\n  font-size: 0.9rem;\n  padding: 1.25rem 0;\n  text-align: center;\n}\n.dashboard-panel .dash-jobs .cat-bars {\n  display: flex;\n  flex-direction: column;\n  gap: 0.55rem;\n}\n.dashboard-panel .dash-jobs .cat-bars .cat-bar-row {\n  display: grid;\n  grid-template-columns: 11rem 1fr 2.5rem;\n  align-items: center;\n  gap: 0.6rem;\n}\n.dashboard-panel .dash-jobs .cat-bars .cat-bar-row .cat-bar-label {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.85rem;\n  color: #374151;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dashboard-panel .dash-jobs .cat-bars .cat-bar-row .cat-bar-label .cat-bar-icon {\n  font-size: 1rem;\n}\n.dashboard-panel .dash-jobs .cat-bars .cat-bar-row .cat-bar-track {\n  position: relative;\n  height: 1.1rem;\n  background: #f3f4f6;\n  border-radius: 999px;\n  overflow: hidden;\n}\n.dashboard-panel .dash-jobs .cat-bars .cat-bar-row .cat-bar-track .cat-bar-fill {\n  display: block;\n  height: 100%;\n  min-width: 2px;\n  border-radius: 999px;\n  background:\n    linear-gradient(\n      90deg,\n      #667eea,\n      #764ba2);\n  transition: width 0.3s ease;\n}\n.dashboard-panel .dash-jobs .cat-bars .cat-bar-row .cat-bar-count {\n  font-size: 0.85rem;\n  font-weight: 700;\n  color: #111827;\n  text-align: right;\n}\n@media (max-width: 640px) {\n  .dashboard-panel .dash-metrics {\n    grid-template-columns: 1fr;\n  }\n  .dashboard-panel .cat-bars .cat-bar-row {\n    grid-template-columns: 8rem 1fr 2rem;\n  }\n}\n.dispute-tabs {\n  display: flex;\n  gap: 0.4rem;\n  margin: 0.5rem 0 0.75rem;\n}\n.dispute-tabs button {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.4rem 0.9rem;\n  border: 1px solid #d1d5db;\n  border-radius: 999px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.dispute-tabs button:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.dispute-tabs button.active {\n  background: #667eea;\n  border-color: #667eea;\n  color: #fff;\n}\n.dispute-tabs button .dispute-count {\n  background: rgba(255, 255, 255, 0.25);\n  border-radius: 999px;\n  padding: 0 0.4rem;\n  font-size: 0.75rem;\n}\n.complete-warning {\n  color: #1b5e20 !important;\n}\n.resolved-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.5rem;\n  margin-bottom: 0.9rem;\n}\n.resolved-filters label {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.resolved-filters input[type=date],\n.resolved-filters .resolved-search {\n  padding: 0.4rem 0.6rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.82rem;\n}\n.resolved-filters .resolved-search {\n  flex: 1 1 12rem;\n  min-width: 10rem;\n}\n.resolved-filters .resolved-apply {\n  padding: 0.45rem 0.9rem;\n  border: none;\n  border-radius: 8px;\n  background: #667eea;\n  color: #fff;\n  font-weight: 600;\n  cursor: pointer;\n}\n.resolved-filters .resolved-clear {\n  padding: 0.45rem 0.8rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  background: #fff;\n  color: #6b7280;\n  cursor: pointer;\n}\n.resolved-filters .resolved-clear:hover {\n  border-color: #ef4444;\n  color: #ef4444;\n}\n.resolved-card .resolution-badge {\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  padding: 0.18rem 0.6rem;\n  border-radius: 999px;\n  white-space: nowrap;\n}\n.resolved-card .resolution-badge.complete {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.resolved-card .resolution-badge.refund {\n  background: #fff3e0;\n  color: #e65100;\n}\n.resolved-card .resolved-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-top: 0.5rem;\n  font-size: 0.78rem;\n  color: #6b7280;\n}\n.resolved-card .resolved-meta span {\n  display: flex;\n  align-items: center;\n  gap: 0.25rem;\n}\n.resolved-card .resolved-meta mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.team-admin-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n  margin: 0.75rem 0;\n}\n.team-admin-row {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex-wrap: wrap;\n  padding: 0.55rem 0.7rem;\n  border: 1px solid #eef0f4;\n  border-radius: 10px;\n  background: #fff;\n}\n.team-admin-row .ta-avatar {\n  width: 2rem;\n  height: 2rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #eef2ff;\n  color: #4f46e5;\n  font-weight: 700;\n  font-size: 0.75rem;\n  flex-shrink: 0;\n}\n.team-admin-row .ta-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 8rem;\n}\n.team-admin-row .ta-info strong {\n  font-size: 0.9rem;\n  color: #1f2937;\n}\n.team-admin-row .ta-info span {\n  font-size: 0.8rem;\n  color: #6b7280;\n}\n.team-admin-row .ta-badge {\n  font-size: 0.68rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  padding: 0.12rem 0.5rem;\n  border-radius: 999px;\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.team-admin-row .ta-badge.off {\n  background: #f3f4f6;\n  color: #9ca3af;\n}\n.team-admin-row .ta-btn {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  color: #6b7280;\n  padding: 0.2rem;\n  border-radius: 6px;\n}\n.team-admin-row .ta-btn:hover {\n  background: #f3f4f6;\n  color: #4f46e5;\n}\n.team-admin-row .ta-btn.danger:hover {\n  color: #ef4444;\n}\n.team-admin-row .ta-btn mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.team-admin-row .ta-check {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.25rem;\n  font-size: 0.8rem;\n  color: #374151;\n}\n.ta-input {\n  padding: 0.4rem 0.55rem;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  font-size: 0.85rem;\n  flex: 1 1 8rem;\n}\n.ta-input-sm {\n  flex: 0 0 4.5rem;\n}\n.ta-textarea {\n  flex: 1 1 100%;\n  min-height: 3rem;\n  resize: vertical;\n}\n.ta-empty {\n  color: #9ca3af;\n  font-size: 0.88rem;\n  padding: 0.5rem 0;\n}\n.ta-add-btn {\n  margin-top: 0.25rem;\n}\n.team-add-form {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-top: 0.6rem;\n  padding: 0.75rem;\n  border: 1px dashed #d1d5db;\n  border-radius: 10px;\n}\n.ta-form-actions {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  flex: 1 1 100%;\n  align-items: center;\n}\n.ta-btn-text {\n  border: none;\n  background: transparent;\n  color: #6b7280;\n  cursor: pointer;\n  font-weight: 600;\n}\n/*# sourceMappingURL=admin-users.css.map */\n'] }]
  }], () => [{ type: AdminUsersService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }, { type: ActivatedRoute }, { type: MatDialog }, { type: ProUsersService }, { type: MatSnackBar }, { type: ServiceAreaService }, { type: MatBottomSheet }, { type: HttpClient }, { type: PayoutService }, { type: SettingsService }, { type: BannerService }, { type: ServiceCategoryService }, { type: TeamService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 51 });
})();
var ImpersonateSheetComponent = class _ImpersonateSheetComponent {
  sheetRef;
  data;
  constructor(sheetRef, data) {
    this.sheetRef = sheetRef;
    this.data = data;
  }
  confirm() {
    this.sheetRef.dismiss(true);
  }
  cancel() {
    this.sheetRef.dismiss(false);
  }
  static \u0275fac = function ImpersonateSheetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ImpersonateSheetComponent)(\u0275\u0275directiveInject(MatBottomSheetRef), \u0275\u0275directiveInject(MAT_BOTTOM_SHEET_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ImpersonateSheetComponent, selectors: [["app-impersonate-sheet"]], decls: 17, vars: 3, consts: [[1, "impersonate-sheet"], [1, "ims-icon-row"], [1, "ims-icon"], [1, "ims-title"], [1, "ims-name"], [1, "ims-warning"], [1, "ims-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click"]], template: function ImpersonateSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3, "manage_accounts");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function ImpersonateSheetComponent_Template_button_click_11_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(12, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275listener("click", function ImpersonateSheetComponent_Template_button_click_13_listener() {
        return ctx.confirm();
      });
      \u0275\u0275elementStart(14, "mat-icon");
      \u0275\u0275text(15, "login");
      \u0275\u0275elementEnd();
      \u0275\u0275text(16, " Impersonate ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(5);
      \u0275\u0275textInterpolate1("Impersonate ", ctx.data.userType, "?");
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(ctx.data.displayName);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1("You will browse the app as this ", ctx.data.userType.toLowerCase(), '. An "Exit Impersonation" banner will appear at the top of every page.');
    }
  }, dependencies: [CommonModule, MatIconModule, MatIcon, MatButtonModule, MatButton], styles: ["\n\n.impersonate-sheet[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 2rem;\n  text-align: center;\n}\n.ims-icon-row[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.ims-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: #667eea;\n}\n.ims-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.3rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.ims-name[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 1rem;\n  color: #444;\n  font-weight: 600;\n}\n.ims-warning[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 0.82rem;\n  color: #888;\n  line-height: 1.5;\n}\n.ims-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n}\n.ims-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 110px;\n}\n.ims-actions[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.2rem;\n}\n/*# sourceMappingURL=admin-users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ImpersonateSheetComponent, [{
    type: Component,
    args: [{ selector: "app-impersonate-sheet", standalone: true, imports: [CommonModule, MatIconModule, MatButtonModule], template: `
    <div class="impersonate-sheet">
      <div class="ims-icon-row">
        <mat-icon class="ims-icon">manage_accounts</mat-icon>
      </div>
      <p class="ims-title">Impersonate {{ data.userType }}?</p>
      <p class="ims-name">{{ data.displayName }}</p>
      <p class="ims-warning">You will browse the app as this {{ data.userType.toLowerCase() }}. An "Exit Impersonation" banner will appear at the top of every page.</p>
      <div class="ims-actions">
        <button mat-stroked-button (click)="cancel()">Cancel</button>
        <button mat-raised-button color="primary" (click)="confirm()">
          <mat-icon>login</mat-icon> Impersonate
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;c968de14efc79e34b3044001520b8bdd57bd88497924979afa7bcdac358db7f8;C:/repos/yProHub/prohub-ui/src/app/features/admin-users/admin-users.ts */\n.impersonate-sheet {\n  padding: 1.5rem 1.5rem 2rem;\n  text-align: center;\n}\n.ims-icon-row {\n  margin-bottom: 0.5rem;\n}\n.ims-icon {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: #667eea;\n}\n.ims-title {\n  margin: 0 0 0.3rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.ims-name {\n  margin: 0 0 0.6rem;\n  font-size: 1rem;\n  color: #444;\n  font-weight: 600;\n}\n.ims-warning {\n  margin: 0 0 1.25rem;\n  font-size: 0.82rem;\n  color: #888;\n  line-height: 1.5;\n}\n.ims-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n}\n.ims-actions button {\n  min-width: 110px;\n}\n.ims-actions mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n  margin-right: 0.2rem;\n}\n/*# sourceMappingURL=admin-users.css.map */\n"] }]
  }], () => [{ type: MatBottomSheetRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_BOTTOM_SHEET_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImpersonateSheetComponent, { className: "ImpersonateSheetComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 1687 });
})();
var DeleteAreaSheetComponent = class _DeleteAreaSheetComponent {
  sheetRef;
  data;
  constructor(sheetRef, data) {
    this.sheetRef = sheetRef;
    this.data = data;
  }
  confirm() {
    this.sheetRef.dismiss(true);
  }
  cancel() {
    this.sheetRef.dismiss(false);
  }
  static \u0275fac = function DeleteAreaSheetComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DeleteAreaSheetComponent)(\u0275\u0275directiveInject(MatBottomSheetRef), \u0275\u0275directiveInject(MAT_BOTTOM_SHEET_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeleteAreaSheetComponent, selectors: [["app-delete-area-sheet"]], decls: 15, vars: 1, consts: [[1, "delete-area-sheet"], [1, "das-icon-row"], [1, "das-icon"], [1, "das-title"], [1, "das-breadcrumb"], [1, "das-warning"], [1, "das-actions"], ["mat-stroked-button", "", 3, "click"], ["mat-raised-button", "", "color", "warn", 3, "click"]], template: function DeleteAreaSheetComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-icon", 2);
      \u0275\u0275text(3, "delete_forever");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(4, "p", 3);
      \u0275\u0275text(5, "Delete service area?");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(6, "p", 4);
      \u0275\u0275text(7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p", 5);
      \u0275\u0275text(9, "This cannot be undone.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(10, "div", 6)(11, "button", 7);
      \u0275\u0275listener("click", function DeleteAreaSheetComponent_Template_button_click_11_listener() {
        return ctx.cancel();
      });
      \u0275\u0275text(12, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 8);
      \u0275\u0275listener("click", function DeleteAreaSheetComponent_Template_button_click_13_listener() {
        return ctx.confirm();
      });
      \u0275\u0275text(14, "Delete");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275textInterpolate(ctx.data.breadcrumb);
    }
  }, dependencies: [CommonModule, MatIconModule, MatIcon, MatButtonModule, MatButton], styles: ["\n\n.delete-area-sheet[_ngcontent-%COMP%] {\n  padding: 1.5rem 1.5rem 2rem;\n  text-align: center;\n}\n.das-icon-row[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.das-icon[_ngcontent-%COMP%] {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: #e53935;\n}\n.das-title[_ngcontent-%COMP%] {\n  margin: 0 0 0.4rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.das-breadcrumb[_ngcontent-%COMP%] {\n  margin: 0 0 0.3rem;\n  font-size: 0.9rem;\n  color: #444;\n  font-weight: 500;\n}\n.das-warning[_ngcontent-%COMP%] {\n  margin: 0 0 1.25rem;\n  font-size: 0.82rem;\n  color: #999;\n}\n.das-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n}\n.das-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  min-width: 100px;\n}\n/*# sourceMappingURL=admin-users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeleteAreaSheetComponent, [{
    type: Component,
    args: [{ selector: "app-delete-area-sheet", standalone: true, imports: [CommonModule, MatIconModule, MatButtonModule], template: `
    <div class="delete-area-sheet">
      <div class="das-icon-row">
        <mat-icon class="das-icon">delete_forever</mat-icon>
      </div>
      <p class="das-title">Delete service area?</p>
      <p class="das-breadcrumb">{{ data.breadcrumb }}</p>
      <p class="das-warning">This cannot be undone.</p>
      <div class="das-actions">
        <button mat-stroked-button (click)="cancel()">Cancel</button>
        <button mat-raised-button color="warn" (click)="confirm()">Delete</button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;8786fff2b767ff00b76ac98f7de3f48976ccbbe393c9e426b0dc48f9ed1e7e68;C:/repos/yProHub/prohub-ui/src/app/features/admin-users/admin-users.ts */\n.delete-area-sheet {\n  padding: 1.5rem 1.5rem 2rem;\n  text-align: center;\n}\n.das-icon-row {\n  margin-bottom: 0.5rem;\n}\n.das-icon {\n  font-size: 2.5rem;\n  width: 2.5rem;\n  height: 2.5rem;\n  color: #e53935;\n}\n.das-title {\n  margin: 0 0 0.4rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: #1a1a1a;\n}\n.das-breadcrumb {\n  margin: 0 0 0.3rem;\n  font-size: 0.9rem;\n  color: #444;\n  font-weight: 500;\n}\n.das-warning {\n  margin: 0 0 1.25rem;\n  font-size: 0.82rem;\n  color: #999;\n}\n.das-actions {\n  display: flex;\n  gap: 0.75rem;\n  justify-content: center;\n}\n.das-actions button {\n  min-width: 100px;\n}\n/*# sourceMappingURL=admin-users.css.map */\n"] }]
  }], () => [{ type: MatBottomSheetRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_BOTTOM_SHEET_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteAreaSheetComponent, { className: "DeleteAreaSheetComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 1725 });
})();
var InviteAdminDialogComponent = class _InviteAdminDialogComponent {
  dialogRef;
  email = "";
  constructor(dialogRef) {
    this.dialogRef = dialogRef;
  }
  isEmailValid() {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email);
  }
  onConfirm() {
    if (this.isEmailValid())
      this.dialogRef.close({ email: this.email });
  }
  onCancel() {
    this.dialogRef.close();
  }
  static \u0275fac = function InviteAdminDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _InviteAdminDialogComponent)(\u0275\u0275directiveInject(MatDialogRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteAdminDialogComponent, selectors: [["app-invite-admin-dialog"]], decls: 15, vars: 2, consts: [[1, "invite-admin-dialog"], ["mat-dialog-title", ""], [1, "full-width"], ["matInput", "", "placeholder", "admin@example.com", 3, "ngModelChange", "ngModel"], [1, "info-text"], ["align", "end"], ["mat-button", "", 3, "click"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"]], template: function InviteAdminDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
      \u0275\u0275text(2, "Invite New Admin");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "mat-dialog-content")(4, "mat-form-field", 2)(5, "mat-label");
      \u0275\u0275text(6, "Admin Email");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "input", 3);
      \u0275\u0275twoWayListener("ngModelChange", function InviteAdminDialogComponent_Template_input_ngModelChange_7_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.email, $event) || (ctx.email = $event);
        return $event;
      });
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "p", 4);
      \u0275\u0275text(9, "Enter the email address of the person you want to invite as a platform administrator.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "mat-dialog-actions", 5)(11, "button", 6);
      \u0275\u0275listener("click", function InviteAdminDialogComponent_Template_button_click_11_listener() {
        return ctx.onCancel();
      });
      \u0275\u0275text(12, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "button", 7);
      \u0275\u0275listener("click", function InviteAdminDialogComponent_Template_button_click_13_listener() {
        return ctx.onConfirm();
      });
      \u0275\u0275text(14, " Send Invite ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.email);
      \u0275\u0275advance(6);
      \u0275\u0275property("disabled", !ctx.isEmailValid());
    }
  }, dependencies: [CommonModule, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, MatDialogModule, MatDialogTitle, MatDialogActions, MatDialogContent, MatInputModule, MatInput, MatFormField, MatLabel, MatFormFieldModule, MatButtonModule, MatButton], styles: ["\n\n.invite-admin-dialog[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.info-text[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-size: 0.9rem;\n  color: #666;\n}\n/*# sourceMappingURL=admin-users.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteAdminDialogComponent, [{
    type: Component,
    args: [{ selector: "app-invite-admin-dialog", standalone: true, imports: [CommonModule, FormsModule, MatDialogModule, MatInputModule, MatFormFieldModule, MatButtonModule], template: `
    <div class="invite-admin-dialog">
      <h2 mat-dialog-title>Invite New Admin</h2>
      <mat-dialog-content>
        <mat-form-field class="full-width">
          <mat-label>Admin Email</mat-label>
          <input matInput [(ngModel)]="email" placeholder="admin@example.com" />
        </mat-form-field>
        <p class="info-text">Enter the email address of the person you want to invite as a platform administrator.</p>
      </mat-dialog-content>
      <mat-dialog-actions align="end">
        <button mat-button (click)="onCancel()">Cancel</button>
        <button mat-raised-button color="primary" (click)="onConfirm()" [disabled]="!isEmailValid()">
          Send Invite
        </button>
      </mat-dialog-actions>
    </div>
  `, styles: ["/* angular:styles/component:scss;8e6bdeb165c743bc90ad51489afbbd2955f7ab4a537a507a0b0c1c065cb06892;C:/repos/yProHub/prohub-ui/src/app/features/admin-users/admin-users.ts */\n.invite-admin-dialog {\n  padding: 0;\n}\n.full-width {\n  width: 100%;\n}\n.info-text {\n  margin-top: 1rem;\n  font-size: 0.9rem;\n  color: #666;\n}\n/*# sourceMappingURL=admin-users.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteAdminDialogComponent, { className: "InviteAdminDialogComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 1762 });
})();
export {
  AdminUsersComponent,
  DeleteAreaSheetComponent,
  ImpersonateSheetComponent,
  InviteAdminDialogComponent
};
//# sourceMappingURL=chunk-7625T3MF.js.map

