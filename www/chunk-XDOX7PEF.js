import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-WXFHFUZO.js";
import {
  PayoutService
} from "./chunk-BLBEIKI7.js";
import {
  ServiceAreaService
} from "./chunk-IYIOAUDF.js";
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
} from "./chunk-Z4JBADQW.js";
import {
  ProUsersService
} from "./chunk-N5T2MOQM.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-AF7MVYJA.js";
import {
  CdkPortalOutlet,
  PortalModule,
  createBlockScrollStrategy,
  createGlobalPositionStrategy
} from "./chunk-MNMOPJB6.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-DUKA3TCG.js";
import {
  MatFormField,
  MatLabel
} from "./chunk-ATW3VVJF.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-AQNNVN3U.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-QKBPBGFS.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-B4QCWAPP.js";
import {
  BreakpointObserver,
  Breakpoints,
  ESCAPE,
  MatCommonModule,
  _animationsDisabled,
  hasModifierKey
} from "./chunk-SOWTMXOK.js";
import {
  SettingsService
} from "./chunk-MRJYQQOO.js";
import {
  ServiceCategoryService
} from "./chunk-YRPSZ7MM.js";
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
} from "./chunk-A6TK5TPK.js";
import {
  Auth
} from "./chunk-6CNFBV5T.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-VRKQDNIA.js";
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
  filter,
  firstValueFrom,
  inject,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate4,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UQSUYH4V.js";
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
function AdminUsersComponent_div_16_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.disputes.length);
  }
}
function AdminUsersComponent_div_16_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading disputes...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_div_16_div_7_div_1_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 33)(1, "strong");
    \u0275\u0275text(2, "Pro notes:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", d_r4.completionNotes);
  }
}
function AdminUsersComponent_div_16_div_7_div_1_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 34)(1, "mat-icon");
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
    const d_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" \xE2\u201A\xB9", \u0275\u0275pipeBind2(6, 1, d_r4.paymentAmount, "1.2-2"), " ");
  }
}
function AdminUsersComponent_div_16_div_7_div_1_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "p", 36)(2, "mat-icon");
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " This will refund ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " to the consumer and reopen the job for rebidding. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 37)(10, "mat-label");
    \u0275\u0275text(11, "Reason for refund");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "textarea", 38);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_div_16_div_7_div_1_div_22_Template_textarea_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.refundNotes, $event) || (ctx_r2.refundNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 39)(14, "button", 40);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_div_7_div_1_div_22_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.refundConfirmJobId = null);
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 41);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_div_7_div_1_div_22_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r5);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.confirmRefund(d_r4.jobId));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xE2\u201A\xB9", \u0275\u0275pipeBind2(7, 6, d_r4.paymentAmount, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.refundNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r4.jobId);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r4.jobId);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.resolvingDisputeId === d_r4.jobId ? "hourglass_empty" : "currency_rupee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.resolvingDisputeId === d_r4.jobId ? "Processing..." : "Confirm Refund", " ");
  }
}
function AdminUsersComponent_div_16_div_7_div_1_div_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 42)(1, "button", 43);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_div_7_div_1_div_23_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resolveDispute(d_r4.jobId, "complete"));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Complete for Pro ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 44);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_div_7_div_1_div_23_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r6);
      const d_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.openRefundConfirm(d_r4.jobId));
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " Refund & Reopen ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const d_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r4.jobId);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r4.jobId);
  }
}
function AdminUsersComponent_div_16_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24)(2, "span", 25);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 27)(8, "span")(9, "mat-icon");
    \u0275\u0275text(10, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span")(13, "mat-icon");
    \u0275\u0275text(14, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p", 28)(17, "strong");
    \u0275\u0275text(18, "Reason:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, AdminUsersComponent_div_16_div_7_div_1_p_20_Template, 4, 1, "p", 29)(21, AdminUsersComponent_div_16_div_7_div_1_p_21_Template, 7, 4, "p", 30)(22, AdminUsersComponent_div_16_div_7_div_1_div_22_Template, 20, 9, "div", 31)(23, AdminUsersComponent_div_16_div_7_div_1_div_23_Template, 9, 2, "div", 32);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const d_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r4.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 11, d_r4.disputedAt, "MMM d, y"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" Consumer: ", d_r4.consumer == null ? null : d_r4.consumer.name, " (", d_r4.consumer == null ? null : d_r4.consumer.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Pro: ", (d_r4.pro == null ? null : d_r4.pro.businessName) || (d_r4.pro == null ? null : d_r4.pro.name), " (", d_r4.pro == null ? null : d_r4.pro.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", d_r4.disputeReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r4.completionNotes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r4.paymentAmount != null);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.refundConfirmJobId === d_r4.jobId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.refundConfirmJobId !== d_r4.jobId);
  }
}
function AdminUsersComponent_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, AdminUsersComponent_div_16_div_7_div_1_Template, 24, 14, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.disputes);
  }
}
function AdminUsersComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14)(2, "mat-icon");
    \u0275\u0275text(3, "flag");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Open Disputes ");
    \u0275\u0275template(5, AdminUsersComponent_div_16_span_5_Template, 2, 1, "span", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, AdminUsersComponent_div_16_div_6_Template, 4, 0, "div", 16)(7, AdminUsersComponent_div_16_div_7_Template, 2, 1, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx_r2.disputes.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isLoadingDisputes);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingDisputes);
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_2_div_3_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Email Verified ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 62);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_20_div_2_div_3_Template_div_click_0_listener() {
      const user_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectUser(user_r9));
    });
    \u0275\u0275elementStart(1, "div", 63)(2, "div", 64);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 66);
    \u0275\u0275template(7, AdminUsersComponent_ng_container_18_div_20_div_2_div_3_span_7_Template, 4, 0, "span", 67);
    \u0275\u0275elementStart(8, "span", 68);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.id) === user_r9.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r9.firstName, " ", user_r9.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r9.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r9.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined: ", ctx_r2.formatDate(user_r9.createdAt));
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminUsersComponent_ng_container_18_div_20_div_2_div_3_Template, 10, 7, "div", 61);
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
function AdminUsersComponent_ng_container_18_div_20_div_3_div_3_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 69)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Email Verified ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 71);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_20_div_3_div_3_Template_div_click_0_listener() {
      const pro_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectPro(pro_r11));
    });
    \u0275\u0275elementStart(1, "div", 72)(2, "div", 73);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 74);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 75);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 76);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_18_div_20_div_3_div_3_span_9_Template, 4, 0, "span", 67);
    \u0275\u0275elementStart(10, "span", 77);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pro_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r2.selectedPro == null ? null : ctx_r2.selectedPro.id) === pro_r11.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pro_r11.proName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r11.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r11.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pro_r11.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined: ", ctx_r2.formatDate(pro_r11.createdAt));
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminUsersComponent_ng_container_18_div_20_div_3_div_3_Template, 12, 7, "div", 70);
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
function AdminUsersComponent_ng_container_18_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "div", 58);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_18_div_20_div_2_Template, 4, 2, "div", 59)(3, AdminUsersComponent_ng_container_18_div_20_div_3_Template, 4, 2, "div", 59);
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
function AdminUsersComponent_ng_container_18_div_21_h2_2_Template(rf, ctx) {
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
function AdminUsersComponent_ng_container_18_div_21_h2_3_Template(rf, ctx) {
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
function AdminUsersComponent_ng_container_18_div_21_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Profile");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_15_span_26_Template(rf, ctx) {
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
function AdminUsersComponent_ng_container_18_div_21_div_15_span_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not provided");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "label");
    \u0275\u0275text(3, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 94)(7, "label");
    \u0275\u0275text(8, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 94)(12, "label");
    \u0275\u0275text(13, "Email Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 94)(18, "label");
    \u0275\u0275text(19, "Phone Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "mat-icon");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 94)(24, "label");
    \u0275\u0275text(25, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AdminUsersComponent_ng_container_18_div_21_div_15_span_26_Template, 2, 4, "span", 80)(27, AdminUsersComponent_ng_container_18_div_21_div_15_span_27_Template, 2, 0, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 94)(29, "label");
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
function AdminUsersComponent_ng_container_18_div_21_div_16_span_36_Template(rf, ctx) {
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
function AdminUsersComponent_ng_container_18_div_21_div_16_span_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, "Not provided");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_46_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 95);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r13);
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
function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 96);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editRadiusValue, $event) || (ctx_r2.editRadiusValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 97);
    \u0275\u0275text(3, "km");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 98);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveRadius());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 99);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
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
function AdminUsersComponent_ng_container_18_div_21_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 93)(1, "div", 94)(2, "label");
    \u0275\u0275text(3, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 94)(7, "label");
    \u0275\u0275text(8, "Business:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 94)(12, "label");
    \u0275\u0275text(13, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 94)(17, "label");
    \u0275\u0275text(18, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 94)(22, "label");
    \u0275\u0275text(23, "Email Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span")(25, "mat-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 94)(28, "label");
    \u0275\u0275text(29, "Phone Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span")(31, "mat-icon");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 94)(34, "label");
    \u0275\u0275text(35, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_18_div_21_div_16_span_36_Template, 2, 4, "span", 80)(37, AdminUsersComponent_ng_container_18_div_21_div_16_span_37_Template, 2, 0, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 94)(39, "label");
    \u0275\u0275text(40, "Joined:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 94)(44, "label");
    \u0275\u0275text(45, "Service Radius:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_46_Template, 6, 1, "ng-container", 80)(47, AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template, 10, 1, "ng-container", 80);
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
function AdminUsersComponent_ng_container_18_div_21_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "work");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Job History");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "mat-spinner", 101);
    \u0275\u0275text(2, " Loading job history... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112)(1, "mat-icon");
    \u0275\u0275text(2, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bid Job");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r15.description);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Assigned To:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r15 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r15.assignedProBusinessName);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_div_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Updated:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r15 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r15.updatedAt));
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div", 106)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_span_5_Template, 4, 0, "span", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 108);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 109);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_div_9_Template, 5, 1, "div", 110);
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
    \u0275\u0275template(30, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_div_30_Template, 4, 1, "div", 80);
    \u0275\u0275elementStart(31, "div", 111)(32, "span")(33, "strong");
    \u0275\u0275text(34, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_span_36_Template, 4, 1, "span", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r15 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("job-in-progress", job_r15.status === "In Progress");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r15.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r15.isBid);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + job_r15.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r15.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r15.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (job_r15.category == null ? null : job_r15.category.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r15.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r15.budget);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r15.timeline);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r15.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r15.assignedProId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r15.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r15.updatedAt);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_Template, 37, 15, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.userJobs);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 112)(1, "mat-icon");
    \u0275\u0275text(2, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bid Job");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 113)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r16.description);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "strong");
    \u0275\u0275text(2, "Assigned To:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r16 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r16.assignedProBusinessName);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_span_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "strong");
    \u0275\u0275text(2, "Updated:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const job_r16 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r16.updatedAt));
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 104)(1, "div", 105)(2, "div", 106)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_span_5_Template, 4, 0, "span", 107);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 108);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 109);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_div_9_Template, 5, 1, "div", 110);
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
    \u0275\u0275template(30, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_div_30_Template, 4, 1, "div", 80);
    \u0275\u0275elementStart(31, "div", 111)(32, "span")(33, "strong");
    \u0275\u0275text(34, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_span_36_Template, 4, 1, "span", 80);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r16 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("job-in-progress", job_r16.status === "In Progress");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r16.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r16.isBid);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + job_r16.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r16.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r16.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (job_r16.category == null ? null : job_r16.category.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r16.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r16.budget);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r16.timeline);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r16.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r16.assignedProId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r16.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r16.updatedAt);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_Template, 37, 15, "div", 103);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.proJobs);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "mat-icon");
    \u0275\u0275text(2, "folder_open");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No job history found");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "message");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Chat History");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "mat-spinner", 101);
    \u0275\u0275text(2, " Loading chat history... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r18 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(conversation_r18.lastMessageTime), " ");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_Template_div_click_0_listener() {
      const conversation_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.selectConversation(conversation_r18));
    });
    \u0275\u0275elementStart(1, "div", 124)(2, "div", 125);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 126);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_div_6_Template, 2, 1, "div", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r18 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", (ctx_r2.selectedConversation == null ? null : ctx_r2.selectedConversation.userId) === conversation_r18.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r18.userName || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conversation_r18.userType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conversation_r18.lastMessageTime);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_Template, 7, 5, "div", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.userConversations);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 128);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r20 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(conversation_r20.lastMessageTime), " ");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 123);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_Template_div_click_0_listener() {
      const conversation_r20 = \u0275\u0275restoreView(_r19).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.selectConversation(conversation_r20));
    });
    \u0275\u0275elementStart(1, "div", 124)(2, "div", 125);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 126);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_div_6_Template, 2, 1, "div", 127);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", (ctx_r2.selectedConversation == null ? null : ctx_r2.selectedConversation.userId) === conversation_r20.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r20.userName || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conversation_r20.userType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conversation_r20.lastMessageTime);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 121);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_Template, 7, 5, "div", 122);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.proConversations);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 129)(1, "p");
    \u0275\u0275text(2, "No conversations");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_7_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 138)(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Read ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133)(1, "div", 134);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 135);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 136);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_18_div_21_div_28_div_7_div_4_div_7_Template, 4, 0, "div", 137);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r21 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", "message-" + (message_r21.senderType ? message_r21.senderType.toLowerCase() : "unknown"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r21.senderType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r21.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(message_r21.sentAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r21.isRead);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 130)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 131);
    \u0275\u0275template(4, AdminUsersComponent_ng_container_18_div_21_div_28_div_7_div_4_Template, 8, 5, "div", 132);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Messages \xE2\u20AC\u201D ", ctx_r2.selectedConversation.userName);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r2.conversationMessages);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 139)(1, "p");
    \u0275\u0275text(2, "Select a conversation to view messages");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115)(1, "div", 116)(2, "h3");
    \u0275\u0275text(3, "Conversations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminUsersComponent_ng_container_18_div_21_div_28_div_4_Template, 2, 1, "div", 117)(5, AdminUsersComponent_ng_container_18_div_21_div_28_div_5_Template, 2, 1, "div", 117)(6, AdminUsersComponent_ng_container_18_div_21_div_28_div_6_Template, 3, 0, "div", 118);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_18_div_21_div_28_div_7_Template, 5, 2, "div", 119)(8, AdminUsersComponent_ng_container_18_div_21_div_28_div_8_Template, 3, 0, "div", 120);
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
function AdminUsersComponent_ng_container_18_div_21_ng_template_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Relationships");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_32_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "mat-spinner", 145);
    \u0275\u0275text(2, " Loading linked clients... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "mat-icon");
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No users linked to this pro");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_32_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 148)(1, "mat-icon");
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 149)(4, "div", 150);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 151);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 152);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_32_div_12_div_1_Template_button_click_8_listener() {
      const u_r24 = \u0275\u0275restoreView(_r23).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeUserFromPro(u_r24.id));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "link_off");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r24 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r24.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r24.email, " \xA0\xC2\xB7\xA0 ID: ", u_r24.id);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_32_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_32_div_12_div_1_Template, 11, 3, "div", 147);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.linkedUsers);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 140)(2, "mat-form-field", 141)(3, "mat-label");
    \u0275\u0275text(4, "Add User by ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 142);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_div_21_div_32_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.addUserId, $event) || (ctx_r2.addUserId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 143);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_32_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r22);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addUserToPro());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Link User ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminUsersComponent_ng_container_18_div_21_div_32_div_10_Template, 3, 0, "div", 87)(11, AdminUsersComponent_ng_container_18_div_21_div_32_div_11_Template, 5, 0, "div", 89)(12, AdminUsersComponent_ng_container_18_div_21_div_32_div_12_Template, 2, 1, "div", 144);
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
function AdminUsersComponent_ng_container_18_div_21_div_33_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "mat-spinner", 145);
    \u0275\u0275text(2, " Loading linked pros... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "mat-icon");
    \u0275\u0275text(2, "handshake");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No pros linked to this user");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_33_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 148)(1, "mat-icon");
    \u0275\u0275text(2, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 149)(4, "div", 150);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 151);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r25 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r25.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r25.businessName, " \xA0\xC2\xB7\xA0 ", p_r25.email);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_33_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 146);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_33_div_3_div_1_Template, 8, 3, "div", 147);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.linkedPros);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_33_div_1_Template, 3, 0, "div", 87)(2, AdminUsersComponent_ng_container_18_div_21_div_33_div_2_Template, 5, 0, "div", 89)(3, AdminUsersComponent_ng_container_18_div_21_div_33_div_3_Template, 2, 1, "div", 144);
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
function AdminUsersComponent_ng_container_18_div_21_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-icon");
    \u0275\u0275text(1, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275text(2, " Payments");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "mat-spinner", 20);
    \u0275\u0275text(2, " Loading payments... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "mat-icon");
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
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_span_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Paid ", \u0275\u0275pipeBind2(4, 1, p_r26.completedAt, "d MMM y"));
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r26.failureReason, " ");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_37_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 180)(1, "span", 176);
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 177);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r26.refundReason);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 172)(1, "div", 173)(2, "mat-icon");
    \u0275\u0275text(3, "currency_rupee");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Refund Details");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 174)(6, "span", 175)(7, "span", 176);
    \u0275\u0275text(8, "Refunded");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 177);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 175)(13, "span", 176);
    \u0275\u0275text(14, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "span", 178);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(18, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_37_div_18_Template, 5, 1, "div", 179);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(11, 3, p_r26.refundedAt, "d MMM y, h:mm a"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xE2\u201A\xB9", \u0275\u0275pipeBind2(17, 6, p_r26.refundAmount ?? p_r26.amount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r26.refundReason);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_38_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Order: ", p_r26.razorpayOrderId);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_38_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("Payment: ", p_r26.razorpayPaymentId);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_38_span_1_Template, 2, 1, "span", 80)(2, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_38_span_2_Template, 2, 1, "span", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r26.razorpayOrderId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r26.razorpayPaymentId);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 185)(1, "p", 186)(2, "mat-icon");
    \u0275\u0275text(3, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Refund ");
    \u0275\u0275elementStart(5, "strong");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(8, " to consumer? ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-form-field", 187)(10, "mat-label");
    \u0275\u0275text(11, "Reason (optional)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 188);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_div_1_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(6);
      \u0275\u0275twoWayBindingSet(ctx_r2.refundDirectNotes, $event) || (ctx_r2.refundDirectNotes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 189)(14, "button", 40);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_div_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r27);
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.refundConfirmPaymentId = null);
    });
    \u0275\u0275text(15, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 41);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_div_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r27);
      const p_r26 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.confirmDirectRefund(p_r26.id));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xE2\u201A\xB9", \u0275\u0275pipeBind2(7, 6, p_r26.amount, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.refundDirectNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.refundingPaymentId === p_r26.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.refundingPaymentId === p_r26.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.refundingPaymentId === p_r26.id ? "hourglass_empty" : "currency_rupee");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.refundingPaymentId === p_r26.id ? "Processing..." : "Confirm Refund", " ");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 190);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_button_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r28);
      const p_r26 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.openDirectRefundConfirm(p_r26.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "currency_rupee");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Issue Refund ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 182);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_div_1_Template, 20, 9, "div", 183)(2, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_button_2_Template, 4, 0, "button", 184);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.refundConfirmPaymentId === p_r26.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.refundConfirmPaymentId !== p_r26.id);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156)(1, "div", 157)(2, "div", 158)(3, "span", 159);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 160);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 161);
    \u0275\u0275pipe(8, "lowercase");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 162)(11, "div", 163)(12, "span", 164);
    \u0275\u0275text(13, "Total paid");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 165);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 163)(18, "span", 164);
    \u0275\u0275text(19, "Platform fee");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span", 165);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "div", 163)(24, "span", 164);
    \u0275\u0275text(25, "Pro payout");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "span", 165);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "number");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div", 166)(30, "span")(31, "mat-icon");
    \u0275\u0275text(32, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_span_35_Template, 5, 4, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_36_Template, 4, 1, "div", 167)(37, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_37_Template, 19, 9, "div", 168)(38, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_38_Template, 3, 2, "div", 169)(39, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_div_39_Template, 3, 2, "div", 170);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r26 = ctx.$implicit;
    \u0275\u0275classProp("ep-refunded", p_r26.status === "Refunded")("ep-failed", p_r26.status === "Failed");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", p_r26.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r26.jobTitle ?? "Job #" + p_r26.jobId);
    \u0275\u0275advance();
    \u0275\u0275classMap("epst-" + \u0275\u0275pipeBind1(8, 18, p_r26.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r26.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xE2\u201A\xB9", \u0275\u0275pipeBind2(16, 20, p_r26.amount, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xE2\u201A\xB9", \u0275\u0275pipeBind2(22, 23, p_r26.platformFee, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\xE2\u201A\xB9", \u0275\u0275pipeBind2(28, 26, p_r26.proPayOut, "1.2-2"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(34, 29, p_r26.createdAt, "d MMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r26.completedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r26.status === "Failed" && p_r26.failureReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r26.status === "Refunded");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r26.razorpayOrderId || p_r26.razorpayPaymentId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r26.status === "Completed");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_39_div_1_Template, 40, 32, "div", 155);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.entityPayments);
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 193);
    \u0275\u0275element(1, "mat-spinner", 194);
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "mat-icon");
    \u0275\u0275text(2, "payments");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No payouts found for this professional.");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 163)(1, "span", 164);
    \u0275\u0275text(2, "Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 165);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(p_r29.mode);
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_span_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span")(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" Processed ", \u0275\u0275pipeBind2(4, 1, p_r29.processedAt, "d MMM y"));
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 171)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", p_r29.failureReason, " ");
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Razorpay: ", p_r29.razorpayPayoutId);
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 182)(1, "button", 197);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_27_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r30);
      const p_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.retryPayout(p_r29.id));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const p_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r2.retryingPayoutId === p_r29.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.retryingPayoutId === p_r29.id ? "hourglass_empty" : "refresh");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.retryingPayoutId === p_r29.id ? "Retrying\u2026" : "Retry Payout", " ");
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 156)(1, "div", 157)(2, "div", 158)(3, "span", 159);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 160);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 161);
    \u0275\u0275pipe(8, "lowercase");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 162)(11, "div", 163)(12, "span", 164);
    \u0275\u0275text(13, "Amount");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span", 165);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "number");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(17, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_17_Template, 5, 1, "div", 196);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 166)(19, "span")(20, "mat-icon");
    \u0275\u0275text(21, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(24, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_span_24_Template, 5, 4, "span", 80);
    \u0275\u0275elementEnd();
    \u0275\u0275template(25, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_25_Template, 4, 1, "div", 167)(26, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_26_Template, 3, 1, "div", 169)(27, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_div_27_Template, 5, 3, "div", 170);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r29 = ctx.$implicit;
    \u0275\u0275classProp("ep-failed", p_r29.status === "Failed");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("#", p_r29.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r29.jobTitle ?? "Job #" + p_r29.jobId);
    \u0275\u0275advance();
    \u0275\u0275classMap("epst-" + \u0275\u0275pipeBind1(8, 14, p_r29.status));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(p_r29.status);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(16, 16, p_r29.amount, "1.2-2"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r29.mode);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Created ", \u0275\u0275pipeBind2(23, 19, p_r29.createdAt, "d MMM y"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", p_r29.processedAt);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r29.failureReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r29.razorpayPayoutId);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", p_r29.status === "Pending" || p_r29.status === "Failed");
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 154);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_div_1_Template, 28, 22, "div", 195);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.proPayouts);
  }
}
function AdminUsersComponent_ng_container_18_div_21_mat_tab_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-tab", 191)(1, "div", 85);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_2_Template, 2, 0, "div", 192)(3, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_3_Template, 5, 0, "div", 56)(4, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_div_4_Template, 2, 1, "div", 91);
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
function AdminUsersComponent_ng_container_18_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 78)(1, "div", 79);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_18_div_21_h2_2_Template, 2, 2, "h2", 80)(3, AdminUsersComponent_ng_container_18_div_21_h2_3_Template, 2, 1, "h2", 80);
    \u0275\u0275elementStart(4, "button", 81);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.impersonate());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Impersonate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 82);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearSelection());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "mat-tab-group", 83)(12, "mat-tab");
    \u0275\u0275template(13, AdminUsersComponent_ng_container_18_div_21_ng_template_13_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(14, "div", 85);
    \u0275\u0275template(15, AdminUsersComponent_ng_container_18_div_21_div_15_Template, 33, 11, "div", 86)(16, AdminUsersComponent_ng_container_18_div_21_div_16_Template, 48, 15, "div", 86);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-tab");
    \u0275\u0275template(18, AdminUsersComponent_ng_container_18_div_21_ng_template_18_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(19, "div", 85);
    \u0275\u0275template(20, AdminUsersComponent_ng_container_18_div_21_div_20_Template, 3, 0, "div", 87)(21, AdminUsersComponent_ng_container_18_div_21_div_21_Template, 2, 1, "div", 88)(22, AdminUsersComponent_ng_container_18_div_21_div_22_Template, 2, 1, "div", 88)(23, AdminUsersComponent_ng_container_18_div_21_div_23_Template, 5, 0, "div", 89);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-tab");
    \u0275\u0275template(25, AdminUsersComponent_ng_container_18_div_21_ng_template_25_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(26, "div", 85);
    \u0275\u0275template(27, AdminUsersComponent_ng_container_18_div_21_div_27_Template, 3, 0, "div", 87)(28, AdminUsersComponent_ng_container_18_div_21_div_28_Template, 9, 5, "div", 90);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-tab");
    \u0275\u0275template(30, AdminUsersComponent_ng_container_18_div_21_ng_template_30_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(31, "div", 85);
    \u0275\u0275template(32, AdminUsersComponent_ng_container_18_div_21_div_32_Template, 13, 5, "div", 80)(33, AdminUsersComponent_ng_container_18_div_21_div_33_Template, 4, 3, "div", 80);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "mat-tab");
    \u0275\u0275template(35, AdminUsersComponent_ng_container_18_div_21_ng_template_35_Template, 3, 0, "ng-template", 84);
    \u0275\u0275elementStart(36, "div", 85);
    \u0275\u0275template(37, AdminUsersComponent_ng_container_18_div_21_div_37_Template, 3, 0, "div", 87)(38, AdminUsersComponent_ng_container_18_div_21_div_38_Template, 5, 1, "div", 56)(39, AdminUsersComponent_ng_container_18_div_21_div_39_Template, 2, 1, "div", 91);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(40, AdminUsersComponent_ng_container_18_div_21_mat_tab_40_Template, 5, 3, "mat-tab", 92);
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
function AdminUsersComponent_ng_container_18_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 153)(1, "mat-icon");
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
function AdminUsersComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 45)(2, "div", 46)(3, "form", 47)(4, "div", 48)(5, "div", 49)(6, "input", 50);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminUsersComponent_ng_container_18_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.search());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 51);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.search());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 52)(12, "button", 53);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSearchType("user"));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Users ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 53);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSearchType("pro"));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Professionals ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, AdminUsersComponent_ng_container_18_div_20_Template, 4, 2, "div", 54);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AdminUsersComponent_ng_container_18_div_21_Template, 41, 16, "div", 55)(22, AdminUsersComponent_ng_container_18_div_22_Template, 7, 0, "div", 56);
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
function AdminUsersComponent_ng_container_19_span_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 212);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r2.serviceAreas.length, ")");
  }
}
function AdminUsersComponent_ng_container_19_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 213);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.areaErrorMsg);
  }
}
function AdminUsersComponent_ng_container_19_div_26_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 229);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r33 = ctx.$implicit;
    \u0275\u0275property("value", c_r33);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r33);
  }
}
function AdminUsersComponent_ng_container_19_div_26_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 229);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r34 = ctx.$implicit;
    \u0275\u0275property("value", s_r34);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r34);
  }
}
function AdminUsersComponent_ng_container_19_div_26_span_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 230);
    \u0275\u0275element(1, "mat-spinner", 231);
    \u0275\u0275text(2, " Locating\xE2\u20AC\xA6 ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_26_p_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 232);
    \u0275\u0275text(1, " No areas match the current filter. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 214)(1, "div", 215)(2, "select", 216);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_19_div_26_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMapCountryChange($event));
    });
    \u0275\u0275elementStart(3, "option", 217);
    \u0275\u0275text(4, "All Countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_19_div_26_option_5_Template, 2, 2, "option", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 219);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_19_div_26_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMapStateChange($event));
    });
    \u0275\u0275elementStart(7, "option", 217);
    \u0275\u0275text(8, "All States");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminUsersComponent_ng_container_19_div_26_option_9_Template, 2, 2, "option", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 220);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_26_Template_div_click_10_listener($event) {
      \u0275\u0275restoreView(_r32);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(11, "input", 221);
    \u0275\u0275listener("change", function AdminUsersComponent_ng_container_19_div_26_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onMapInactiveChange($event.target.checked));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 222);
    \u0275\u0275text(13, "Show inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 223);
    \u0275\u0275element(15, "span", 224);
    \u0275\u0275text(16, " Active ");
    \u0275\u0275element(17, "span", 225);
    \u0275\u0275text(18, " Inactive ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, AdminUsersComponent_ng_container_19_div_26_span_19_Template, 3, 0, "span", 226);
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 227);
    \u0275\u0275template(21, AdminUsersComponent_ng_container_19_div_26_p_21_Template, 2, 0, "p", 228);
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
function AdminUsersComponent_ng_container_19_ng_container_27_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 229);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r36 = ctx.$implicit;
    \u0275\u0275property("value", c_r36);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r36);
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "option", 229);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r37 = ctx.$implicit;
    \u0275\u0275property("value", s_r37);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(s_r37);
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_span_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 238);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r2.filteredListAreas.length, " of ", ctx_r2.serviceAreas.length, " ");
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "mat-spinner", 194);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading service areas...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_tr_20_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 250)(1, "mat-icon");
    \u0275\u0275text(2, "autorenew");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Auto ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_tr_20_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 251);
    \u0275\u0275text(1, "Manual");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(9, "td")(10, "span", 243)(11, "mat-icon");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_tr_20_span_15_Template, 4, 0, "span", 244)(16, AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_tr_20_span_16_Template, 2, 0, "span", 245);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 246);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 247)(20, "button", 248);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_tr_20_Template_button_click_20_listener() {
      const area_r39 = \u0275\u0275restoreView(_r38).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.toggleServiceArea(area_r39.id));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 249);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_tr_20_Template_button_click_23_listener() {
      const area_r39 = \u0275\u0275restoreView(_r38).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.deleteServiceArea(area_r39));
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const area_r39 = ctx.$implicit;
    \u0275\u0275classProp("area-row-inactive", !area_r39.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r39.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r39.state || "\xE2\u20AC\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r39.district || "\xE2\u20AC\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r39.pinCode || "\xE2\u20AC\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("area-badge-active", area_r39.isActive)("area-badge-inactive", !area_r39.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r39.isActive ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", area_r39.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", area_r39.isAutoEnrolled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !area_r39.isAutoEnrolled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r39.notes || "\xE2\u20AC\u201D");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", area_r39.isActive ? "Disable this area" : "Enable this area");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r39.isActive ? "toggle_on" : "toggle_off");
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 241)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275template(20, AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_tr_20_Template, 26, 17, "tr", 242);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r2.filteredListAreas);
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_div_16_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "mat-icon");
    \u0275\u0275text(2, "location_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No service areas defined. Add one above \xE2\u20AC\u201D currently accepting jobs from anywhere.");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_div_16_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "mat-icon");
    \u0275\u0275text(2, "filter_alt_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No areas match the current filter.");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_ng_container_27_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 239);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_ng_container_27_div_16_table_1_Template, 21, 1, "table", 240)(2, AdminUsersComponent_ng_container_19_ng_container_27_div_16_div_2_Template, 5, 0, "div", 89)(3, AdminUsersComponent_ng_container_19_ng_container_27_div_16_div_3_Template, 5, 0, "div", 89);
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
function AdminUsersComponent_ng_container_19_ng_container_27_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 233)(2, "select", 216);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_19_ng_container_27_Template_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onListCountryChange($event));
    });
    \u0275\u0275elementStart(3, "option", 217);
    \u0275\u0275text(4, "All Countries");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_19_ng_container_27_option_5_Template, 2, 2, "option", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "select", 219);
    \u0275\u0275listener("ngModelChange", function AdminUsersComponent_ng_container_19_ng_container_27_Template_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.onListStateChange($event));
    });
    \u0275\u0275elementStart(7, "option", 217);
    \u0275\u0275text(8, "All States");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, AdminUsersComponent_ng_container_19_ng_container_27_option_9_Template, 2, 2, "option", 218);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 220);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_ng_container_27_Template_div_click_10_listener($event) {
      \u0275\u0275restoreView(_r35);
      return \u0275\u0275resetView($event.stopPropagation());
    });
    \u0275\u0275elementStart(11, "input", 234);
    \u0275\u0275listener("change", function AdminUsersComponent_ng_container_19_ng_container_27_Template_input_change_11_listener($event) {
      \u0275\u0275restoreView(_r35);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.listShowInactive = $event.target.checked);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "label", 235);
    \u0275\u0275text(13, "Show inactive");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AdminUsersComponent_ng_container_19_ng_container_27_span_14_Template, 2, 2, "span", 236);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, AdminUsersComponent_ng_container_19_ng_container_27_div_15_Template, 4, 0, "div", 87)(16, AdminUsersComponent_ng_container_19_ng_container_27_div_16_Template, 4, 3, "div", 237);
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
function AdminUsersComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 198)(2, "div", 199)(3, "mat-icon");
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Service Areas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_19_span_7_Template, 2, 1, "span", 200);
    \u0275\u0275elementStart(8, "button", 201);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleMapView());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 202)(13, "h3");
    \u0275\u0275text(14, "Add Service Area");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 203)(16, "input", 204);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.country, $event) || (ctx_r2.newArea.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 205);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.state, $event) || (ctx_r2.newArea.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("blur", function AdminUsersComponent_ng_container_19_Template_input_blur_17_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.expandNewAreaState());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "input", 206);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_18_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.district, $event) || (ctx_r2.newArea.district = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "input", 207);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.pinCode, $event) || (ctx_r2.newArea.pinCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "input", 208);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.notes, $event) || (ctx_r2.newArea.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "button", 209);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addServiceArea());
    });
    \u0275\u0275elementStart(22, "mat-icon");
    \u0275\u0275text(23, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(25, AdminUsersComponent_ng_container_19_div_25_Template, 2, 1, "div", 210);
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AdminUsersComponent_ng_container_19_div_26_Template, 22, 8, "div", 211)(27, AdminUsersComponent_ng_container_19_ng_container_27_Template, 17, 9, "ng-container", 80);
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
function AdminUsersComponent_ng_container_20_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 261)(1, "mat-icon");
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
function AdminUsersComponent_ng_container_20_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 262)(1, "mat-icon");
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
function AdminUsersComponent_ng_container_20_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100);
    \u0275\u0275element(1, "mat-spinner", 194);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading invitations...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 279)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Used ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 280)(1, "mat-icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pending ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 281)(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Expired ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 282);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invitation_r41 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", invitation_r41.daysUntilExpiry, " days");
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 283);
    \u0275\u0275text(1, "Expired");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 284);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invitation_r41 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(invitation_r41.usedAt));
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 285);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_div_24_tr_15_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r42);
      const invitation_r41 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resendInvitation(invitation_r41.id));
    });
    \u0275\u0275elementStart(1, "mat-icon");
    \u0275\u0275text(2, "mail");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Resend ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 286);
    \u0275\u0275text(1, "\xE2\u20AC\u201D");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 266);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 267);
    \u0275\u0275template(4, AdminUsersComponent_ng_container_20_div_24_tr_15_span_4_Template, 4, 0, "span", 268)(5, AdminUsersComponent_ng_container_20_div_24_tr_15_span_5_Template, 4, 0, "span", 269)(6, AdminUsersComponent_ng_container_20_div_24_tr_15_span_6_Template, 4, 0, "span", 270);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 271);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 272);
    \u0275\u0275template(10, AdminUsersComponent_ng_container_20_div_24_tr_15_span_10_Template, 2, 1, "span", 273)(11, AdminUsersComponent_ng_container_20_div_24_tr_15_span_11_Template, 2, 0, "span", 274)(12, AdminUsersComponent_ng_container_20_div_24_tr_15_span_12_Template, 2, 1, "span", 275);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 276);
    \u0275\u0275template(14, AdminUsersComponent_ng_container_20_div_24_tr_15_button_14_Template, 4, 0, "button", 277)(15, AdminUsersComponent_ng_container_20_div_24_tr_15_span_15_Template, 2, 0, "span", 278);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invitation_r41 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("expired", invitation_r41.isExpired);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invitation_r41.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", invitation_r41.isUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !invitation_r41.isUsed && !invitation_r41.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !invitation_r41.isUsed && invitation_r41.isExpired);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(invitation_r41.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !invitation_r41.isExpired && !invitation_r41.isUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r41.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r41.isUsed);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !invitation_r41.isUsed && !invitation_r41.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r41.isUsed || invitation_r41.isExpired);
  }
}
function AdminUsersComponent_ng_container_20_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 263)(1, "table", 264)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(15, AdminUsersComponent_ng_container_20_div_24_tr_15_Template, 16, 12, "tr", 265);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(15);
    \u0275\u0275property("ngForOf", ctx_r2.adminInvitations);
  }
}
function AdminUsersComponent_ng_container_20_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 114)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No invitations sent yet");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 198)(2, "div", 199)(3, "mat-icon");
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Invite Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 252)(8, "h3");
    \u0275\u0275text(9, "Send Invitation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 253);
    \u0275\u0275text(11, "Enter the email address of the person you want to invite as a platform administrator. They will receive an invitation link valid for 7 days.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 254)(13, "input", 255);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_20_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.inviteEmail, $event) || (ctx_r2.inviteEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminUsersComponent_ng_container_20_Template_input_keyup_enter_13_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendInviteInline());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 256);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r40);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendInviteInline());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, AdminUsersComponent_ng_container_20_div_18_Template, 4, 1, "div", 257)(19, AdminUsersComponent_ng_container_20_div_19_Template, 4, 1, "div", 258);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 259)(21, "h3");
    \u0275\u0275text(22, "Pending Invitations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdminUsersComponent_ng_container_20_div_23_Template, 4, 0, "div", 87)(24, AdminUsersComponent_ng_container_20_div_24_Template, 16, 1, "div", 260)(25, AdminUsersComponent_ng_container_20_div_25_Template, 5, 0, "div", 89);
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
function AdminUsersComponent_ng_container_21_div_22_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 302)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 298);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 299);
    \u0275\u0275text(6, "Could not geocode");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.proBackfillResult.failed);
  }
}
function AdminUsersComponent_ng_container_21_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r44 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 293)(1, "div", 294)(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Pros Geocode Complete ");
    \u0275\u0275elementStart(5, "button", 295);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r44);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.proBackfillResult = null);
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 296)(9, "div", 297)(10, "span", 298);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 299);
    \u0275\u0275text(13, "Found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 300)(15, "mat-icon");
    \u0275\u0275text(16, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 298);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 299);
    \u0275\u0275text(20, "Updated");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AdminUsersComponent_ng_container_21_div_22_div_21_Template, 7, 1, "div", 301);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.proBackfillResult.total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.proBackfillResult.updated);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.proBackfillResult.failed > 0);
  }
}
function AdminUsersComponent_ng_container_21_div_35_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 302)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 298);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 299);
    \u0275\u0275text(6, "Could not geocode");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.userBackfillResult.failed);
  }
}
function AdminUsersComponent_ng_container_21_div_35_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 293)(1, "div", 294)(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Users Geocode Complete ");
    \u0275\u0275elementStart(5, "button", 295);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r45);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.userBackfillResult = null);
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 296)(9, "div", 297)(10, "span", 298);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 299);
    \u0275\u0275text(13, "Found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 300)(15, "mat-icon");
    \u0275\u0275text(16, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 298);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 299);
    \u0275\u0275text(20, "Updated");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AdminUsersComponent_ng_container_21_div_35_div_21_Template, 7, 1, "div", 301);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate(ctx_r2.userBackfillResult.total);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r2.userBackfillResult.updated);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.userBackfillResult.failed > 0);
  }
}
function AdminUsersComponent_ng_container_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 198)(2, "div", 199)(3, "mat-icon");
    \u0275\u0275text(4, "my_location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Geocode Backfill");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 287);
    \u0275\u0275text(8, "Set latitude/longitude coordinates for accounts that are missing map data. Coordinates are looked up from their registered address via the Nominatim API.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 288)(10, "div", 289)(11, "div", 290)(12, "mat-icon");
    \u0275\u0275text(13, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275text(15, "Professionals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Find and geocode all pro accounts that have an address but no coordinates.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 291);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.runGeocodeBackfillPros());
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdminUsersComponent_ng_container_21_div_22_Template, 22, 3, "div", 292);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 289)(24, "div", 290)(25, "mat-icon");
    \u0275\u0275text(26, "person_pin_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "Users");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Find and geocode all user accounts that have an address but no coordinates.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 291);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r43);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.runGeocodeBackfillUsers());
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AdminUsersComponent_ng_container_21_div_35_Template, 22, 3, "div", 292);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(18);
    \u0275\u0275property("disabled", ctx_r2.isBackfillingPros);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isBackfillingPros ? "hourglass_empty" : "my_location");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBackfillingPros ? "Geocoding Pros..." : "Run Geocode \xE2\u20AC\u201D Pros", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.proBackfillResult);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r2.isBackfillingUsers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isBackfillingUsers ? "hourglass_empty" : "person_pin_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBackfillingUsers ? "Geocoding Users..." : "Run Geocode \xE2\u20AC\u201D Users", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.userBackfillResult);
  }
}
function AdminUsersComponent_ng_container_22_div_15_p_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 321);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.newCategoryError);
  }
}
function AdminUsersComponent_ng_container_22_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r47 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 310)(1, "div", 311)(2, "div", 312)(3, "label");
    \u0275\u0275text(4, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 313);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_22_div_15_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r47);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCategory.icon, $event) || (ctx_r2.newCategory.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "small");
    \u0275\u0275text(7, "Paste an emoji");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 314)(9, "label");
    \u0275\u0275text(10, "Name ");
    \u0275\u0275elementStart(11, "span", 315);
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "input", 316);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_22_div_15_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r47);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCategory.name, $event) || (ctx_r2.newCategory.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 317)(15, "label");
    \u0275\u0275text(16, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "input", 318);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_22_div_15_Template_input_ngModelChange_17_listener($event) {
      \u0275\u0275restoreView(_r47);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.newCategory.description, $event) || (ctx_r2.newCategory.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 319);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_div_15_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r47);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.submitNewCategory());
    });
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(20, AdminUsersComponent_ng_container_22_div_15_p_20_Template, 2, 1, "p", 320);
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
function AdminUsersComponent_ng_container_22_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 322);
    \u0275\u0275element(1, "mat-spinner", 323);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading categories\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r48 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 335);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 327);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 336);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span", 329);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 330)(10, "span", 337);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "span", 331)(13, "button", 338);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_1_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r48);
      const cat_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.startEditCategory(cat_r49));
    });
    \u0275\u0275elementStart(14, "mat-icon");
    \u0275\u0275text(15, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "button", 339);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_1_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r48);
      const cat_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.toggleCategoryActive(cat_r49));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r49 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r49.icon || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r49.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r49.description || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r49.serviceCount);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("active", cat_r49.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", cat_r49.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("deactivate", cat_r49.isActive);
    \u0275\u0275property("disabled", ctx_r2.savingCategoryId === cat_r49.id)("title", cat_r49.isActive ? "Deactivate" : "Activate");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r49.isActive ? "visibility_off" : "visibility");
  }
}
function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span", 326)(2, "input", 340);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_2_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCategory.icon, $event) || (ctx_r2.editCategory.icon = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "span", 327)(4, "input", 341);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_2_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCategory.name, $event) || (ctx_r2.editCategory.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "span", 328)(6, "input", 342);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_2_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCategory.description, $event) || (ctx_r2.editCategory.description = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 329);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 330)(10, "label", 343)(11, "input", 344);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_2_Template_input_ngModelChange_11_listener($event) {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editCategory.isActive, $event) || (ctx_r2.editCategory.isActive = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, " Active ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "span", 331)(14, "button", 345);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_2_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r50);
      const cat_r49 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.saveEditCategory(cat_r49));
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 346);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_2_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r50);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.cancelEditCategory());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const cat_r49 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCategory.icon);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCategory.name);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCategory.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(cat_r49.serviceCount);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.editCategory.isActive);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx_r2.editCategory.name.trim() || ctx_r2.savingCategoryId === cat_r49.id);
  }
}
function AdminUsersComponent_ng_container_22_div_17_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 334);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_1_Template, 19, 12, "ng-container", 80)(2, AdminUsersComponent_ng_container_22_div_17_div_14_ng_container_2_Template, 20, 6, "ng-container", 80);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const cat_r49 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("inactive", !cat_r49.isActive)("editing", ctx_r2.editingCategoryId === cat_r49.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingCategoryId !== cat_r49.id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.editingCategoryId === cat_r49.id);
  }
}
function AdminUsersComponent_ng_container_22_div_17_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 347);
    \u0275\u0275text(1, " No categories yet. Add one above. ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_22_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 324)(1, "div", 325)(2, "span", 326);
    \u0275\u0275text(3, "Icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 327);
    \u0275\u0275text(5, "Name");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 328);
    \u0275\u0275text(7, "Description");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "span", 329);
    \u0275\u0275text(9, "Pros");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span", 330);
    \u0275\u0275text(11, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 331);
    \u0275\u0275text(13, "Actions");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(14, AdminUsersComponent_ng_container_22_div_17_div_14_Template, 3, 6, "div", 332)(15, AdminUsersComponent_ng_container_22_div_17_div_15_Template, 2, 0, "div", 333);
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
function AdminUsersComponent_ng_container_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r46 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 303)(2, "div", 304)(3, "div", 305)(4, "mat-icon");
    \u0275\u0275text(5, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div")(7, "h2");
    \u0275\u0275text(8, "Service Categories");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "button", 306);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_22_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r46);
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.showAddCategoryForm = !ctx_r2.showAddCategoryForm;
      return \u0275\u0275resetView(ctx_r2.newCategoryError = "");
    });
    \u0275\u0275elementStart(12, "mat-icon");
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, AdminUsersComponent_ng_container_22_div_15_Template, 21, 6, "div", 307)(16, AdminUsersComponent_ng_container_22_div_16_Template, 4, 0, "div", 308)(17, AdminUsersComponent_ng_container_22_div_17_Template, 16, 2, "div", 309);
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
function AdminUsersComponent_ng_container_23_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 352);
    \u0275\u0275element(1, "mat-spinner", 323);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading settings\u2026");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_23_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 288)(1, "div", 289)(2, "div", 290)(3, "mat-icon");
    \u0275\u0275text(4, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h3");
    \u0275\u0275text(6, "Show Pro Count on Categories");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p");
    \u0275\u0275text(8, "Display the number of registered professionals under each service category on the Services page.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 353)(10, "span", 354);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "button", 291);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_23_div_11_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r51);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.toggleShowProCount(!ctx_r2.showProCountOnCategories));
    });
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()()()();
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
function AdminUsersComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 348)(2, "div", 349)(3, "mat-icon");
    \u0275\u0275text(4, "tune");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div")(6, "h2");
    \u0275\u0275text(7, "Platform Settings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p");
    \u0275\u0275text(9, "Control site-wide display options.");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, AdminUsersComponent_ng_container_23_div_10_Template, 4, 0, "div", 350)(11, AdminUsersComponent_ng_container_23_div_11_Template, 14, 5, "div", 351);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngIf", ctx_r2.settingsLoading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.settingsLoading);
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
  serviceCategoryService;
  // ── Navigation ────────────────────────────────────────────────────────────
  activeView = "search";
  showToolsMenu = false;
  navItems = [
    { id: "search", label: "User / Pro Search", icon: "manage_search" },
    { id: "service-areas", label: "Service Areas", icon: "location_on" },
    { id: "categories", label: "Categories", icon: "category" },
    { id: "invite-admin", label: "Invite Admin", icon: "person_add" },
    { id: "geocode", label: "Geocode", icon: "my_location" },
    { id: "settings", label: "Settings", icon: "tune" }
  ];
  setView(view) {
    this.activeView = view;
    this.showToolsMenu = false;
    if (view === "settings")
      this.loadSettings();
    if (view === "categories")
      this.loadAdminCategories();
  }
  getActiveViewLabel() {
    return this.navItems.find((n) => n.id === this.activeView)?.label ?? "";
  }
  getActiveViewIcon() {
    return this.navItems.find((n) => n.id === this.activeView)?.icon ?? "menu";
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
  // ── Settings ──────────────────��───────────────────────────────────────────
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
  constructor(adminUsersService, auth, cdr, router, route, dialog, proUsersService, snack, serviceAreaService, bottomSheet, http, payoutService, settingsService, serviceCategoryService) {
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
    this.serviceCategoryService = serviceCategoryService;
  }
  ngOnInit() {
    if (this.auth.getUserType() !== "Admin") {
      this.router.navigate(["/"]);
      return;
    }
    const view = this.route.snapshot.queryParamMap.get("view");
    if (view && this.navItems.some((n) => n.id === view)) {
      this.activeView = view;
    }
    this.loadInvitations();
    this.loadDisputes();
    this.loadServiceAreas();
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
  openRefundConfirm(jobId) {
    this.refundConfirmJobId = jobId;
    this.refundNotes = "";
  }
  confirmRefund(jobId) {
    this.resolveDispute(jobId, "refund", this.refundNotes.trim() || void 0);
  }
  resolveDispute(jobId, resolution, notes) {
    this.resolvingDisputeId = jobId;
    this.adminUsersService.resolveDispute(jobId, resolution, notes).subscribe({
      next: (result) => {
        this.disputes = this.disputes.filter((d) => d.jobId !== jobId);
        this.resolvingDisputeId = null;
        this.refundConfirmJobId = null;
        this.refundNotes = "";
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
  runGeocodeBackfillPros() {
    this.isBackfillingPros = true;
    this.proBackfillResult = null;
    this.adminUsersService.geocodeBackfillPros().subscribe({
      next: (result) => {
        this.isBackfillingPros = false;
        this.proBackfillResult = result;
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
    const map = this.STATE_ABBREVIATIONS[country.trim().toLowerCase()];
    if (!map)
      return state;
    return map[state.trim().toUpperCase()] ?? state;
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
    return new (__ngFactoryType__ || _AdminUsersComponent)(\u0275\u0275directiveInject(AdminUsersService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ProUsersService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ServiceAreaService), \u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(HttpClient), \u0275\u0275directiveInject(PayoutService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ServiceCategoryService));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], decls: 24, vars: 13, consts: [[1, "admin-users-container", 3, "click"], [1, "admin-header"], [1, "header-top"], [1, "tools-dropdown", 3, "click"], [1, "tools-trigger", 3, "click"], [1, "chevron-icon"], ["class", "tools-menu", 4, "ngIf"], ["class", "disputes-banner", 4, "ngIf"], [1, "admin-panel-area", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "tools-menu"], ["class", "tools-menu-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tools-menu-item", 3, "click"], [1, "disputes-banner"], [1, "disputes-banner-title"], ["class", "dispute-count", 4, "ngIf"], ["class", "disputes-loading", 4, "ngIf"], ["class", "disputes-list", 4, "ngIf"], [1, "dispute-count"], [1, "disputes-loading"], ["diameter", "24"], [1, "disputes-list"], ["class", "dispute-card", 4, "ngFor", "ngForOf"], [1, "dispute-card"], [1, "dispute-card-header"], [1, "dispute-job-title"], [1, "dispute-date"], [1, "dispute-parties"], [1, "dispute-reason"], ["class", "dispute-completion-notes", 4, "ngIf"], ["class", "dispute-payment-amount", 4, "ngIf"], ["class", "refund-confirm-form", 4, "ngIf"], ["class", "dispute-actions", 4, "ngIf"], [1, "dispute-completion-notes"], [1, "dispute-payment-amount"], [1, "refund-confirm-form"], [1, "refund-confirm-warning"], ["appearance", "outline", 1, "refund-notes-field"], ["matInput", "", "rows", "2", "placeholder", "Briefly explain the reason for this refund...", 3, "ngModelChange", "ngModel"], [1, "refund-confirm-actions"], ["mat-stroked-button", "", 3, "click", "disabled"], ["mat-raised-button", "", "color", "warn", 3, "click", "disabled"], [1, "dispute-actions"], ["mat-raised-button", "", "color", "accent", "title", "Mark the job as Completed in favour of the professional", 3, "click", "disabled"], ["mat-raised-button", "", "color", "warn", "title", "Reopen the job for rebidding in favour of the consumer", 3, "click", "disabled"], [1, "panel-search-layout"], [1, "search-section"], [1, "search-form"], [1, "search-controls"], [1, "search-input-group"], ["type", "text", "name", "searchQuery", "placeholder", "Search by email or name...", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "search-btn", 3, "click", "disabled"], [1, "search-type"], ["type", "button", 1, "type-btn", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "details-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "search-results"], [1, "results-list"], ["class", "results-group", 4, "ngIf"], [1, "results-group"], ["class", "user-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "user-item", 3, "click"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "user-meta"], ["class", "badge badge-verified", 4, "ngIf"], [1, "user-date"], [1, "badge", "badge-verified"], ["class", "pro-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "pro-item", 3, "click"], [1, "pro-info"], [1, "pro-name"], [1, "pro-business"], [1, "pro-email"], [1, "pro-meta"], [1, "pro-date"], [1, "details-section"], [1, "details-header"], [4, "ngIf"], [1, "impersonate-btn", 3, "click"], [1, "clear-btn", 3, "click"], [1, "details-tabs"], ["mat-tab-label", ""], [1, "tab-content"], ["class", "profile-details", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "jobs-list", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["class", "chat-section", 4, "ngIf"], ["class", "entity-payments-list", 4, "ngIf"], ["label", "Payouts", 4, "ngIf"], [1, "profile-details"], [1, "detail-row"], ["title", "Edit service radius", 1, "inline-edit-btn", 3, "click"], ["type", "number", "min", "1", "max", "500", 1, "radius-input", 3, "ngModelChange", "ngModel"], [1, "radius-unit"], [1, "inline-save-btn", 3, "click"], [1, "inline-cancel-btn", 3, "click"], [1, "loading"], ["diameter", "40"], [1, "jobs-list"], ["class", "job-card", 3, "job-in-progress", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-header"], [1, "job-title-section"], ["class", "bid-badge", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "job-details"], ["class", "job-description", 4, "ngIf"], [1, "job-dates"], [1, "bid-badge"], [1, "job-description"], [1, "no-data"], [1, "chat-section"], [1, "conversations-panel"], ["class", "conversations-list", 4, "ngIf"], ["class", "no-conversations", 4, "ngIf"], ["class", "messages-panel", 4, "ngIf"], ["class", "no-conversation-selected", 4, "ngIf"], [1, "conversations-list"], ["class", "conversation-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "conversation-item", 3, "click"], [1, "conversation-info"], [1, "conversation-name"], [1, "conversation-meta"], ["class", "conversation-time", 4, "ngIf"], [1, "conversation-time"], [1, "no-conversations"], [1, "messages-panel"], [1, "messages-list"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "message", 3, "ngClass"], [1, "message-sender"], [1, "message-content"], [1, "message-time"], ["class", "message-status", 4, "ngIf"], [1, "message-status"], [1, "no-conversation-selected"], [1, "rel-add-row"], ["appearance", "outline", 1, "rel-input"], ["matInput", "", "type", "number", "placeholder", "User ID", "name", "addUserId", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["class", "rel-list", 4, "ngIf"], ["diameter", "36"], [1, "rel-list"], ["class", "rel-item", 4, "ngFor", "ngForOf"], [1, "rel-item"], [1, "rel-info"], [1, "rel-name"], [1, "rel-email"], ["mat-icon-button", "", "color", "warn", "title", "Remove", 3, "click"], [1, "empty-state"], [1, "entity-payments-list"], ["class", "entity-payment-card", 3, "ep-refunded", "ep-failed", 4, "ngFor", "ngForOf"], [1, "entity-payment-card"], [1, "ep-header"], [1, "ep-title"], [1, "ep-id"], [1, "ep-job"], [1, "ep-status"], [1, "ep-amounts"], [1, "ep-amount-item"], [1, "ep-amt-label"], [1, "ep-amt-value"], [1, "ep-dates"], ["class", "ep-failure", 4, "ngIf"], ["class", "ep-refund-block", 4, "ngIf"], ["class", "ep-provider-ids", 4, "ngIf"], ["class", "ep-refund-action", 4, "ngIf"], [1, "ep-failure"], [1, "ep-refund-block"], [1, "ep-refund-header"], [1, "ep-refund-row"], [1, "ep-rd-item"], [1, "ep-rd-label"], [1, "ep-rd-value"], [1, "ep-rd-value", "ep-refund-amount"], ["class", "ep-rd-reason", 4, "ngIf"], [1, "ep-rd-reason"], [1, "ep-provider-ids"], [1, "ep-refund-action"], ["class", "ep-refund-confirm", 4, "ngIf"], ["mat-stroked-button", "", "color", "warn", "class", "ep-refund-btn", 3, "click", 4, "ngIf"], [1, "ep-refund-confirm"], [1, "ep-refund-warn"], ["appearance", "outline", 1, "ep-refund-notes"], ["matInput", "", "placeholder", "Reason for refund...", 3, "ngModelChange", "ngModel"], [1, "ep-refund-confirm-btns"], ["mat-stroked-button", "", "color", "warn", 1, "ep-refund-btn", 3, "click"], ["label", "Payouts"], ["class", "loading-state", 4, "ngIf"], [1, "loading-state"], ["diameter", "32"], ["class", "entity-payment-card", 3, "ep-failed", 4, "ngFor", "ngForOf"], ["class", "ep-amount-item", 4, "ngIf"], ["mat-stroked-button", "", "color", "primary", 3, "click", "disabled"], [1, "panel-card"], [1, "panel-card-header"], ["class", "panel-count", 4, "ngIf"], ["title", "Toggle map view", 1, "map-view-btn", 3, "click"], [1, "add-area-form"], [1, "area-form-row"], ["type", "text", "placeholder", "Country *", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "State (optional)", 1, "area-input", 3, "ngModelChange", "blur", "ngModel"], ["type", "text", "placeholder", "District (optional)", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "PIN Code (optional)", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Notes (optional)", 1, "area-input", "area-input-notes", 3, "ngModelChange", "ngModel"], [1, "add-area-btn", 3, "click", "disabled"], ["class", "area-error", 4, "ngIf"], ["class", "map-section", 4, "ngIf"], [1, "panel-count"], [1, "area-error"], [1, "map-section"], [1, "map-filters"], [1, "map-select", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], [1, "map-select", 3, "ngModelChange", "ngModel", "disabled"], [1, "map-inactive-label", 3, "click"], ["type", "checkbox", "id", "map-inactive-toggle", 3, "change", "checked"], ["for", "map-inactive-toggle"], [1, "map-legend"], [1, "map-legend-dot", "active"], [1, "map-legend-dot", "inactive"], ["class", "map-geocoding", 4, "ngIf"], ["id", "service-area-map", 1, "map-container"], ["class", "map-empty", 4, "ngIf"], [3, "value"], [1, "map-geocoding"], ["diameter", "14"], [1, "map-empty"], [1, "list-filters"], ["type", "checkbox", "id", "list-inactive-toggle", 3, "change", "checked"], ["for", "list-inactive-toggle"], ["class", "list-filter-count", 4, "ngIf"], ["class", "areas-table-wrap", 4, "ngIf"], [1, "list-filter-count"], [1, "areas-table-wrap"], ["class", "areas-table", 4, "ngIf"], [1, "areas-table"], [3, "area-row-inactive", 4, "ngFor", "ngForOf"], [1, "area-badge"], ["class", "auto-badge", "title", "Auto-enrolled during pro registration", 4, "ngIf"], ["class", "manual-badge", 4, "ngIf"], [1, "notes-cell"], [1, "area-actions"], [1, "area-action-btn", "toggle-btn", 3, "click", "title"], ["title", "Delete area", 1, "area-action-btn", "delete-btn", 3, "click"], ["title", "Auto-enrolled during pro registration", 1, "auto-badge"], [1, "manual-badge"], [1, "invite-form-section"], [1, "invite-description"], [1, "invite-form-row"], ["type", "email", "placeholder", "admin@example.com", 1, "invite-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "invite-send-btn", 3, "click", "disabled"], ["class", "invite-success", 4, "ngIf"], ["class", "invite-error", 4, "ngIf"], [1, "invitations-section"], ["class", "invitations-table", 4, "ngIf"], [1, "invite-success"], [1, "invite-error"], [1, "invitations-table"], [1, "invitations-list"], [3, "expired", 4, "ngFor", "ngForOf"], ["data-label", "Email"], ["data-label", "Status"], ["class", "badge badge-used", 4, "ngIf"], ["class", "badge badge-pending", 4, "ngIf"], ["class", "badge badge-expired", 4, "ngIf"], ["data-label", "Created"], ["data-label", "Expires"], ["class", "expires", 4, "ngIf"], ["class", "expired-text", 4, "ngIf"], ["class", "used-text", 4, "ngIf"], ["data-label", "Actions"], ["class", "action-btn resend-btn", "title", "Resend invitation email", 3, "click", 4, "ngIf"], ["class", "action-disabled", 4, "ngIf"], [1, "badge", "badge-used"], [1, "badge", "badge-pending"], [1, "badge", "badge-expired"], [1, "expires"], [1, "expired-text"], [1, "used-text"], ["title", "Resend invitation email", 1, "action-btn", "resend-btn", 3, "click"], [1, "action-disabled"], [1, "panel-description"], [1, "geocode-grid"], [1, "geocode-item"], [1, "geocode-item-header"], [1, "geocode-run-btn", 3, "click", "disabled"], ["class", "geocode-result", 4, "ngIf"], [1, "geocode-result"], [1, "geocode-result-title"], [1, "dismiss-btn", 3, "click"], [1, "geocode-stats"], [1, "geocode-stat"], [1, "stat-value"], [1, "stat-label"], [1, "geocode-stat", "stat-updated"], ["class", "geocode-stat stat-failed", 4, "ngIf"], [1, "geocode-stat", "stat-failed"], [1, "cat-admin-panel"], [1, "cat-admin-header"], [1, "cat-admin-title"], [1, "cat-add-btn", 3, "click"], ["class", "cat-add-form", 4, "ngIf"], ["class", "cat-loading", 4, "ngIf"], ["class", "cat-list", 4, "ngIf"], [1, "cat-add-form"], [1, "cat-form-row"], [1, "cat-form-field", "cat-form-icon"], ["type", "text", "placeholder", "\u{1F527}", "maxlength", "10", 3, "ngModelChange", "ngModel"], [1, "cat-form-field", "cat-form-name"], [1, "required"], ["type", "text", "placeholder", "e.g. Plumbing", "maxlength", "100", 3, "ngModelChange", "ngModel"], [1, "cat-form-field", "cat-form-desc"], ["type", "text", "placeholder", "Short description (optional)", "maxlength", "500", 3, "ngModelChange", "ngModel"], [1, "cat-save-btn", 3, "click", "disabled"], ["class", "cat-form-error", 4, "ngIf"], [1, "cat-form-error"], [1, "cat-loading"], ["diameter", "28"], [1, "cat-list"], [1, "cat-list-header"], [1, "col-icon"], [1, "col-name"], [1, "col-desc"], [1, "col-pros"], [1, "col-status"], [1, "col-actions"], ["class", "cat-row", 3, "inactive", "editing", 4, "ngFor", "ngForOf"], ["class", "cat-empty", 4, "ngIf"], [1, "cat-row"], [1, "col-icon", "cat-icon-cell"], [1, "col-desc", "cat-desc-cell"], [1, "status-badge"], ["title", "Edit", 1, "row-btn", "edit-btn", 3, "click"], [1, "row-btn", "toggle-btn", 3, "click", "disabled", "title"], ["type", "text", "maxlength", "10", "placeholder", "\u{1F527}", 1, "edit-input", "icon-input", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "100", 1, "edit-input", 3, "ngModelChange", "ngModel"], ["type", "text", "maxlength", "500", "placeholder", "Description", 1, "edit-input", 3, "ngModelChange", "ngModel"], [1, "toggle-label"], ["type", "checkbox", 3, "ngModelChange", "ngModel"], [1, "row-btn", "save-btn", 3, "click", "disabled"], [1, "row-btn", "cancel-btn", 3, "click"], [1, "cat-empty"], [1, "geocode-panel"], [1, "geocode-header"], ["class", "geocode-loading", 4, "ngIf"], ["class", "geocode-grid", 4, "ngIf"], [1, "geocode-loading"], [1, "setting-toggle-row"], [1, "setting-status"]], template: function AdminUsersComponent_Template(rf, ctx) {
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
      \u0275\u0275template(16, AdminUsersComponent_div_16_Template, 8, 3, "div", 7);
      \u0275\u0275elementStart(17, "div", 8);
      \u0275\u0275template(18, AdminUsersComponent_ng_container_18_Template, 23, 11, "ng-container", 9)(19, AdminUsersComponent_ng_container_19_Template, 28, 15, "ng-container", 9)(20, AdminUsersComponent_ng_container_20_Template, 26, 9, "ng-container", 9)(21, AdminUsersComponent_ng_container_21_Template, 36, 8, "ng-container", 9)(22, AdminUsersComponent_ng_container_22_Template, 18, 7, "ng-container", 9)(23, AdminUsersComponent_ng_container_23_Template, 12, 2, "ng-container", 9);
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
      \u0275\u0275property("ngIf", ctx.disputes.length > 0 || ctx.isLoadingDisputes);
      \u0275\u0275advance();
      \u0275\u0275property("ngSwitch", ctx.activeView);
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
  ], styles: ['\n\n.admin-users-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.admin-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 100;\n}\n.admin-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.tools-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tools-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  padding: 0.6rem 1.1rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.tools-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.tools-trigger[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n  opacity: 0.8;\n}\n.tools-trigger[_ngcontent-%COMP%]   .chevron-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.tools-trigger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.55);\n}\n.tools-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  min-width: 210px;\n  z-index: 200;\n  animation: _ngcontent-%COMP%_menuSlide 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_menuSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tools-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.85rem 1.25rem;\n  background: none;\n  border: none;\n  color: #333;\n  font-size: 0.92rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.tools-menu-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: #667eea;\n}\n.tools-menu-item[_ngcontent-%COMP%]:hover {\n  background: #f5f6fa;\n}\n.tools-menu-item.active[_ngcontent-%COMP%] {\n  background: #eef0fd;\n  color: #667eea;\n  font-weight: 700;\n}\n.tools-menu-item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.tools-menu-item[_ngcontent-%COMP%]    + .tools-menu-item[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n}\n.disputes-banner[_ngcontent-%COMP%] {\n  background: #fff8f8;\n  border-bottom: 3px solid #ef9a9a;\n  padding: 1rem 2rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #c62828;\n  margin-bottom: 0.75rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%]   .dispute-count[_ngcontent-%COMP%] {\n  background: #c62828;\n  color: white;\n  border-radius: 12px;\n  padding: 1px 8px;\n  font-size: 0.78rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #888;\n  font-size: 0.9rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.dispute-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ef9a9a;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.4rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%]   .dispute-job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%]   .dispute-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.4rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-reason[_ngcontent-%COMP%], \n.dispute-card[_ngcontent-%COMP%]   .dispute-completion-notes[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #444;\n  margin: 0.2rem 0;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-payment-amount[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.88rem;\n  color: #1b5e20;\n  margin: 0.4rem 0 0;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-payment-amount[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding: 0.75rem;\n  background: #fff3e0;\n  border: 1px solid #ffb74d;\n  border-radius: 6px;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%]   .refund-confirm-warning[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.88rem;\n  color: #e65100;\n  margin: 0 0 0.75rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%]   .refund-confirm-warning[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%]   .refund-notes-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.dispute-card[_ngcontent-%COMP%]   .refund-confirm-form[_ngcontent-%COMP%]   .refund-confirm-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n.admin-panel-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.75rem 2rem;\n  overflow-y: auto;\n}\n.panel-search-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 1024px) {\n  .panel-search-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.search-section[_ngcontent-%COMP%] {\n  flex: 0 0 340px;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: calc(100vh - 180px);\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .search-section[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n    max-height: none;\n  }\n}\n.search-controls[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.search-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.1rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 500;\n  font-size: 0.88rem;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5568d3;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-type[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.75rem;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  background: white;\n  color: #666;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%] {\n  background: #667eea;\n  border-color: #667eea;\n  color: white;\n  font-weight: 600;\n}\n.search-results[_ngcontent-%COMP%]   .results-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.search-results[_ngcontent-%COMP%]   .results-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.85rem;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 0.4rem;\n  font-weight: 700;\n}\n.user-item[_ngcontent-%COMP%], \n.pro-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  margin-bottom: 0.6rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.user-item[_ngcontent-%COMP%]:hover, \n.pro-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.12);\n}\n.user-item.selected[_ngcontent-%COMP%], \n.pro-item.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.2rem;\n  font-size: 0.95rem;\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-email[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-email[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #666;\n  margin-bottom: 0.35rem;\n}\n.user-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-meta[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  color: #999;\n}\n.user-date[_ngcontent-%COMP%], \n.pro-date[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.details-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n@media (max-width: 1024px) {\n  .details-section[_ngcontent-%COMP%] {\n    flex: none;\n  }\n}\n.details-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e8e8e8;\n}\n.details-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  flex: 1;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%], \n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.875rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 500;\n  font-size: 0.87rem;\n  transition: all 0.2s;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: white;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%]:hover {\n  background: #43a047;\n}\n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #555;\n}\n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.details-tabs[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n  min-width: 100px !important;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 320px);\n}\n.profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f5f5f5;\n  gap: 0.5rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #444;\n  min-width: 130px;\n  font-size: 0.9rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n  text-align: right;\n  font-size: 0.9rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon.verified[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.inline-edit-btn[_ngcontent-%COMP%], \n.inline-save-btn[_ngcontent-%COMP%], \n.inline-cancel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.2rem 0.4rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  margin-left: 0.4rem;\n  transition: background 0.15s;\n}\n.inline-edit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.inline-save-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.inline-cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.inline-edit-btn[_ngcontent-%COMP%]:hover, \n.inline-save-btn[_ngcontent-%COMP%]:hover, \n.inline-cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.inline-save-btn[_ngcontent-%COMP%] {\n  border-color: #4caf50;\n}\n.inline-save-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.inline-cancel-btn[_ngcontent-%COMP%] {\n  border-color: #e53935;\n}\n.inline-cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.radius-input[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  margin-left: 0.4rem;\n}\n.radius-unit[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin-left: 0.25rem;\n}\n.jobs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #fafafa;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 0.95rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-in-progress[_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge[class*="In Progress"][_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-completed[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .bid-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.45rem;\n  background: #fff3cd;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 0.73rem;\n  font-weight: 500;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .bid-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #444;\n  margin-right: 0.4rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #eee;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #444;\n  margin-bottom: 0.35rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.4;\n  max-height: 80px;\n  overflow-y: auto;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-dates[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #eee;\n  font-size: 0.83rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card.job-in-progress[_ngcontent-%COMP%] {\n  border-left: 4px solid #2196f3;\n  background: #f0f8ff;\n}\n.chat-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%] {\n  flex: 0 0 220px;\n  border-right: 1px solid #e8e8e8;\n  padding-right: 1rem;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 0.9rem;\n  color: #444;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   .no-conversations[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #aaa;\n  padding: 1.5rem 0;\n  font-size: 0.88rem;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #444;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 0.5rem;\n  font-weight: 700;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.chat-section[_ngcontent-%COMP%]   .no-conversation-selected[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  font-size: 0.9rem;\n}\n.conversation-item[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.conversation-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f9f9f9;\n}\n.conversation-item.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.88rem;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #aaa;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #bbb;\n  margin-top: 0.2rem;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 0.65rem;\n  border-radius: 6px;\n  background: #f5f5f5;\n}\n.message.message-user[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  margin-left: 2rem;\n}\n.message.message-pro[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  margin-right: 2rem;\n}\n.message[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.2rem;\n}\n.message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.35rem;\n  word-wrap: break-word;\n  font-size: 0.9rem;\n}\n.message[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #bbb;\n}\n.message[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #4caf50;\n  margin-top: 0.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.message[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.rel-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rel-add-row[_ngcontent-%COMP%]   .rel-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 200px;\n}\n.rel-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.rel-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rel-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rel-info[_ngcontent-%COMP%]   .rel-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.rel-info[_ngcontent-%COMP%]   .rel-email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #777;\n}\n.panel-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.panel-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.75rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f0f0f0;\n}\n.panel-card-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #667eea;\n}\n.panel-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  font-weight: 700;\n}\n.panel-card-header[_ngcontent-%COMP%]   .panel-count[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #888;\n  font-weight: 400;\n}\n.panel-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.92rem;\n  margin: -1rem 0 1.5rem;\n  line-height: 1.5;\n}\n.add-area-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.add-area-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #555;\n}\n.area-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n.area-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.area-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n}\n.area-input.area-input-notes[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.add-area-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.5rem 1.1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  white-space: nowrap;\n}\n.add-area-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.add-area-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.area-error[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: #c62828;\n  font-size: 0.83rem;\n}\n.areas-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.areas-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.areas-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.6rem 0.75rem;\n  background: #f5f6fa;\n  color: #555;\n  font-weight: 600;\n  border-bottom: 2px solid #e0e0e0;\n  white-space: nowrap;\n}\n.areas-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.areas-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.areas-table[_ngcontent-%COMP%]   .area-row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.area-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 12px;\n}\n.area-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.area-badge.area-badge-active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.area-badge.area-badge-inactive[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.auto-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #f57c00;\n}\n.auto-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.manual-badge[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #999;\n}\n.notes-cell[_ngcontent-%COMP%] {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #777;\n}\n.area-actions[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.area-action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 4px;\n  transition: background 0.15s;\n  display: inline-flex;\n  align-items: center;\n}\n.area-action-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.area-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.area-action-btn.toggle-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.area-action-btn.delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.map-view-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-left: auto;\n  padding: 0.4rem 0.9rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.map-view-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.map-view-btn[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n  background: #f5f3ff;\n}\n.map-view-btn.active[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #667eea;\n  color: #fff;\n}\n.map-section[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n}\n.map-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.75rem;\n}\n.map-select[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.7rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  outline: none;\n  background: #fff;\n  min-width: 140px;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.map-select[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n}\n.map-select[_ngcontent-%COMP%]:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.map-inactive-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #555;\n  cursor: pointer;\n}\n.map-inactive-label[_ngcontent-%COMP%]   input[type=checkbox][_ngcontent-%COMP%] {\n  accent-color: #667eea;\n  cursor: pointer;\n}\n.map-legend[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin-left: 0.25rem;\n}\n.map-legend-dot[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.map-legend-dot.active[_ngcontent-%COMP%] {\n  background: #10b981;\n}\n.map-legend-dot.inactive[_ngcontent-%COMP%] {\n  background: #9ca3af;\n}\n.map-geocoding[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-style: italic;\n}\n.map-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 440px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .map-container[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n.list-filters[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0.25rem 0 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.list-filter-count[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-style: italic;\n}\n.map-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.88rem;\n  margin-top: 0.5rem;\n}\n.invite-form-section[_ngcontent-%COMP%] {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.invite-form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.invite-form-section[_ngcontent-%COMP%]   .invite-description[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\n.invite-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 380px;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.invite-send-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.invite-send-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.invite-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.invite-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #c62828;\n  font-size: 0.9rem;\n}\n.invite-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invitations-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .geocode-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.geocode-item[_ngcontent-%COMP%] {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n.geocode-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0.25rem 0 1rem;\n  line-height: 1.5;\n}\n.geocode-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.5rem;\n}\n.geocode-item-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #667eea;\n}\n.geocode-item-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-run-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1.25rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.geocode-run-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-run-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5568d3;\n}\n.geocode-run-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.geocode-result[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #2e7d32;\n  margin-bottom: 0.75rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #aaa;\n  padding: 0.15rem;\n  border-radius: 4px;\n  transition: color 0.15s;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]:hover {\n  color: #555;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: #f5f5f5;\n  border-radius: 6px;\n  padding: 0.4rem 0.75rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n  color: #888;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #777;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat.stat-updated[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat.stat-failed[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.cat-admin-panel[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  max-width: 1100px;\n}\n.cat-admin-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.cat-admin-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cat-admin-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.6rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  color: #667eea;\n}\n.cat-admin-title[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.cat-admin-title[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 2px 0 0;\n  font-size: 0.82rem;\n  color: #6b7280;\n}\n.cat-add-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1.1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cat-add-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.cat-add-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.88;\n}\n.cat-add-form[_ngcontent-%COMP%] {\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.cat-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.cat-form-field[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cat-form-field[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #374151;\n}\n.cat-form-field[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #9ca3af;\n}\n.cat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-family: inherit;\n  color: #1f2937;\n  background: white;\n}\n.cat-form-field[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.1);\n}\n.cat-form-icon[_ngcontent-%COMP%] {\n  width: 80px;\n}\n.cat-form-name[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 160px;\n}\n.cat-form-desc[_ngcontent-%COMP%] {\n  flex: 2;\n  min-width: 200px;\n}\n.cat-save-btn[_ngcontent-%COMP%] {\n  padding: 0.5rem 1.25rem;\n  background: #764ba2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  align-self: flex-end;\n}\n.cat-save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5e3a82;\n}\n.cat-save-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.cat-form-error[_ngcontent-%COMP%] {\n  margin: 0.6rem 0 0;\n  font-size: 0.82rem;\n  color: #b91c1c;\n}\n.required[_ngcontent-%COMP%] {\n  color: #ef4444;\n}\n.cat-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 0;\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n.cat-list[_ngcontent-%COMP%] {\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.cat-list-header[_ngcontent-%COMP%], \n.cat-row[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 56px 1fr 2fr 60px 90px 100px;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 1rem;\n}\n.cat-list-header[_ngcontent-%COMP%] {\n  background: #f3f4f6;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1.5px solid #e5e7eb;\n}\n.cat-row[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 0.88rem;\n  color: #374151;\n  transition: background 0.12s;\n}\n.cat-row[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.cat-row[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.cat-row.inactive[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.cat-row.editing[_ngcontent-%COMP%] {\n  background: #faf5ff;\n}\n.cat-icon-cell[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n}\n.cat-desc-cell[_ngcontent-%COMP%] {\n  color: #6b7280;\n  font-size: 0.82rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.status-badge.active[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.col-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n.row-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  background: #f3f4f6;\n  color: #374151;\n  transition: background 0.15s;\n}\n.row-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.row-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.row-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.row-btn.edit-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.row-btn.save-btn[_ngcontent-%COMP%] {\n  background: #dcfce7;\n  color: #166534;\n}\n.row-btn.save-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #bbf7d0;\n}\n.row-btn.cancel-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.row-btn.deactivate[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #fff3cd;\n  color: #92400e;\n}\n.edit-input[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0.3rem 0.5rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 5px;\n  font-size: 0.85rem;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.edit-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #764ba2;\n}\n.icon-input[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.1rem;\n}\n.toggle-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.82rem;\n  cursor: pointer;\n}\n.cat-empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.setting-toggle-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.75rem;\n}\n.setting-status[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.3rem 0.75rem;\n  border-radius: 20px;\n  background: #f5f5f5;\n  color: #888;\n}\n.setting-status.enabled[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.badge.badge-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge.badge-used[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-expired[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge.badge-verified[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.expires[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 500;\n}\n.expired-text[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 500;\n}\n.used-text[_ngcontent-%COMP%] {\n  color: #388e3c;\n  font-weight: 500;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.875rem;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.83rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.action-btn.resend-btn[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.action-btn.resend-btn[_ngcontent-%COMP%]:hover {\n  background: #bbdefb;\n}\n.action-disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 2rem;\n  color: #777;\n  font-size: 0.9rem;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem 1rem;\n  color: #bbb;\n}\n.no-data[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  width: 2.75rem;\n  height: 2.75rem;\n  opacity: 0.5;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin: 0;\n  color: #aaa;\n}\n.empty-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  color: #bbb;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  opacity: 0.25;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #888;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  max-width: 280px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.invitations-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #444;\n  font-size: 0.83rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: #555;\n  font-size: 0.9rem;\n  vertical-align: middle;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .admin-users-container[_ngcontent-%COMP%] {\n    margin: -1rem -1rem 0;\n    width: calc(100% + 2rem);\n    min-height: unset;\n  }\n  .admin-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    gap: 0.5rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .tools-trigger[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.85rem;\n  }\n  .tools-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .disputes-banner[_ngcontent-%COMP%] {\n    padding: 0.875rem 1rem;\n  }\n  .admin-panel-area[_ngcontent-%COMP%] {\n    padding: 1rem 0.75rem;\n  }\n  .panel-card[_ngcontent-%COMP%] {\n    padding: 1rem 0.875rem;\n  }\n  .panel-search-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n    max-height: none;\n    padding: 1rem;\n  }\n  .details-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .details-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .details-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    flex: 1 1 100%;\n  }\n  .details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%], \n   .details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n    min-width: 0 !important;\n    padding: 0 8px !important;\n    flex-grow: 1;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label {\n    font-size: 0.7rem;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mat-icon {\n    font-size: 0.95rem;\n    width: 0.95rem;\n    height: 0.95rem;\n  }\n  .tab-content[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    max-height: none;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.15rem;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .chat-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n  }\n  .chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%] {\n    flex: none;\n    border-right: none;\n    border-bottom: 1px solid #e8e8e8;\n    padding-right: 0;\n    padding-bottom: 0.75rem;\n    margin-bottom: 0.75rem;\n    max-height: 160px;\n    overflow-y: auto;\n  }\n  .rel-add-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .rel-add-row[_ngcontent-%COMP%]   .rel-input[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .dispute-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .dispute-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .invite-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    border: 1px solid #e8e8e8;\n    border-radius: 8px;\n    margin-bottom: 0.75rem;\n    padding: 0.5rem 0.75rem;\n    background: white;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.4rem 0;\n    border-bottom: 1px solid #f5f5f5;\n    font-size: 0.83rem;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #555;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n    flex-shrink: 0;\n    margin-right: 0.75rem;\n  }\n}\n.entity-payments-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.5rem 0;\n}\n.entity-payment-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-left: 4px solid #4caf50;\n  border-radius: 8px;\n  padding: 0.9rem 1.1rem;\n}\n.entity-payment-card.ep-refunded[_ngcontent-%COMP%] {\n  border-left-color: #ff9800;\n}\n.entity-payment-card.ep-failed[_ngcontent-%COMP%] {\n  border-left-color: #f44336;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: baseline;\n  gap: 0.4rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-title[_ngcontent-%COMP%]   .ep-id[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #aaa;\n  font-family: monospace;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-title[_ngcontent-%COMP%]   .ep-job[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.18rem 0.55rem;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status.epst-completed[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status.epst-refunded[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status.epst-failed[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-status.epst-pending[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-amounts[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.45rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-amounts[_ngcontent-%COMP%]   .ep-amount-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-amounts[_ngcontent-%COMP%]   .ep-amount-item[_ngcontent-%COMP%]   .ep-amt-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-amounts[_ngcontent-%COMP%]   .ep-amount-item[_ngcontent-%COMP%]   .ep-amt-value[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #222;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-dates[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.3rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-dates[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-dates[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-failure[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.82rem;\n  color: #c62828;\n  margin-top: 0.35rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-failure[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%] {\n  margin-top: 0.65rem;\n  padding: 0.65rem 0.85rem;\n  background: #fff8e1;\n  border: 1px solid #ffe082;\n  border-radius: 6px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-refund-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: #e65100;\n  margin-bottom: 0.4rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-refund-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-refund-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 0.25rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-item[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-reason[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-value[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #333;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-block[_ngcontent-%COMP%]   .ep-rd-value.ep-refund-amount[_ngcontent-%COMP%] {\n  font-weight: 700;\n  color: #e65100;\n  font-size: 0.95rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-provider-ids[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 0.4rem;\n  font-size: 0.7rem;\n  color: #bbb;\n  font-family: monospace;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%] {\n  margin-top: 0.75rem;\n  padding-top: 0.65rem;\n  border-top: 1px solid #eee;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-btn[_ngcontent-%COMP%] {\n  font-size: 0.82rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%] {\n  padding: 0.65rem;\n  background: #fff3e0;\n  border: 1px solid #ffb74d;\n  border-radius: 6px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%]   .ep-refund-warn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #e65100;\n  margin: 0 0 0.6rem;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%]   .ep-refund-warn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%]   .ep-refund-notes[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.entity-payment-card[_ngcontent-%COMP%]   .ep-refund-action[_ngcontent-%COMP%]   .ep-refund-confirm[_ngcontent-%COMP%]   .ep-refund-confirm-btns[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 0.4rem;\n}\n@media (max-width: 480px) {\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label span:not(.mat-icon) {\n    display: none;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mat-icon {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=admin-users.css.map */'] });
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
  <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC HEADER \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->\r
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
  <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC DISPUTES BANNER (always visible) \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->\r
  <div class="disputes-banner" *ngIf="disputes.length > 0 || isLoadingDisputes">\r
    <div class="disputes-banner-title">\r
      <mat-icon>flag</mat-icon>\r
      Open Disputes\r
      <span class="dispute-count" *ngIf="disputes.length > 0">{{ disputes.length }}</span>\r
    </div>\r
\r
    <div *ngIf="isLoadingDisputes" class="disputes-loading">\r
      <mat-spinner diameter="24"></mat-spinner>\r
      <span>Loading disputes...</span>\r
    </div>\r
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
          <strong>Payment amount:</strong> \xE2\u201A\xB9{{ d.paymentAmount | number:'1.2-2' }}\r
        </p>\r
\r
        <!-- Inline refund confirm form -->\r
        <div *ngIf="refundConfirmJobId === d.jobId" class="refund-confirm-form">\r
          <p class="refund-confirm-warning">\r
            <mat-icon>warning</mat-icon>\r
            This will refund <strong>\xE2\u201A\xB9{{ d.paymentAmount | number:'1.2-2' }}</strong> to the consumer and reopen the job for rebidding.\r
          </p>\r
          <mat-form-field appearance="outline" class="refund-notes-field">\r
            <mat-label>Reason for refund</mat-label>\r
            <textarea matInput [(ngModel)]="refundNotes" rows="2" placeholder="Briefly explain the reason for this refund..."></textarea>\r
          </mat-form-field>\r
          <div class="refund-confirm-actions">\r
            <button mat-stroked-button (click)="refundConfirmJobId = null" [disabled]="resolvingDisputeId === d.jobId">\r
              Cancel\r
            </button>\r
            <button mat-raised-button color="warn" (click)="confirmRefund(d.jobId)" [disabled]="resolvingDisputeId === d.jobId">\r
              <mat-icon>{{ resolvingDisputeId === d.jobId ? 'hourglass_empty' : 'currency_rupee' }}</mat-icon>\r
              {{ resolvingDisputeId === d.jobId ? 'Processing...' : 'Confirm Refund' }}\r
            </button>\r
          </div>\r
        </div>\r
\r
        <div class="dispute-actions" *ngIf="refundConfirmJobId !== d.jobId">\r
          <button\r
            mat-raised-button color="accent"\r
            (click)="resolveDispute(d.jobId, 'complete')"\r
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
  </div>\r
\r
  <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC PANEL AREA \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->\r
  <div class="admin-panel-area" [ngSwitch]="activeView">\r
\r
    <!-- \xE2\u2022\x90\xE2\u2022\x90 SEARCH PANEL \xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90 -->\r
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
                    <h3>Messages \xE2\u20AC\u201D {{ selectedConversation.userName }}</h3>\r
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
                        <div class="rel-email">{{ u.email }} &nbsp;\xC2\xB7&nbsp; ID: {{ u.id }}</div>\r
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
                        <div class="rel-email">{{ p.businessName }} &nbsp;\xC2\xB7&nbsp; {{ p.email }}</div>\r
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
                        <span class="ep-amt-value">\xE2\u201A\xB9{{ p.amount | number:'1.2-2' }}</span>\r
                      </div>\r
                      <div class="ep-amount-item">\r
                        <span class="ep-amt-label">Platform fee</span>\r
                        <span class="ep-amt-value">\xE2\u201A\xB9{{ p.platformFee | number:'1.2-2' }}</span>\r
                      </div>\r
                      <div class="ep-amount-item">\r
                        <span class="ep-amt-label">Pro payout</span>\r
                        <span class="ep-amt-value">\xE2\u201A\xB9{{ p.proPayOut | number:'1.2-2' }}</span>\r
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
                          <span class="ep-rd-value ep-refund-amount">\xE2\u201A\xB9{{ (p.refundAmount ?? p.amount) | number:'1.2-2' }}</span>\r
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
                          Refund <strong>\xE2\u201A\xB9{{ p.amount | number:'1.2-2' }}</strong> to consumer?\r
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
    <!-- \xE2\u2022\x90\xE2\u2022\x90 SERVICE AREAS PANEL \xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90 -->\r
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
        <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC MAP VIEW \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->\r
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
              <mat-spinner diameter="14"></mat-spinner> Locating\xE2\u20AC\xA6\r
            </span>\r
          </div>\r
          <div id="service-area-map" class="map-container"></div>\r
          <p *ngIf="!isGeocodingAreas && filteredMapAreas.length === 0" class="map-empty">\r
            No areas match the current filter.\r
          </p>\r
        </div>\r
\r
        <!-- \xE2\u201D\u20AC\xE2\u201D\u20AC LIST VIEW \xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC\xE2\u201D\u20AC -->\r
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
                  <td>{{ area.state || '\xE2\u20AC\u201D' }}</td>\r
                  <td>{{ area.district || '\xE2\u20AC\u201D' }}</td>\r
                  <td>{{ area.pinCode || '\xE2\u20AC\u201D' }}</td>\r
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
                  <td class="notes-cell">{{ area.notes || '\xE2\u20AC\u201D' }}</td>\r
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
              <p>No service areas defined. Add one above \xE2\u20AC\u201D currently accepting jobs from anywhere.</p>\r
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
    <!-- \xE2\u2022\x90\xE2\u2022\x90 INVITE ADMIN PANEL \xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90 -->\r
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
                    <span *ngIf="invitation.isUsed || invitation.isExpired" class="action-disabled">\xE2\u20AC\u201D</span>\r
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
    <!-- \xE2\u2022\x90\xE2\u2022\x90 GEOCODE PANEL \xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90\xE2\u2022\x90 -->\r
    <ng-container *ngSwitchCase="'geocode'">\r
      <div class="panel-card">\r
        <div class="panel-card-header">\r
          <mat-icon>my_location</mat-icon>\r
          <h2>Geocode Backfill</h2>\r
        </div>\r
        <p class="panel-description">Set latitude/longitude coordinates for accounts that are missing map data. Coordinates are looked up from their registered address via the Nominatim API.</p>\r
\r
        <div class="geocode-grid">\r
          <!-- Pros -->\r
          <div class="geocode-item">\r
            <div class="geocode-item-header">\r
              <mat-icon>engineering</mat-icon>\r
              <h3>Professionals</h3>\r
            </div>\r
            <p>Find and geocode all pro accounts that have an address but no coordinates.</p>\r
            <button class="geocode-run-btn" (click)="runGeocodeBackfillPros()" [disabled]="isBackfillingPros">\r
              <mat-icon>{{ isBackfillingPros ? 'hourglass_empty' : 'my_location' }}</mat-icon>\r
              {{ isBackfillingPros ? 'Geocoding Pros...' : 'Run Geocode \xE2\u20AC\u201D Pros' }}\r
            </button>\r
\r
            <div *ngIf="proBackfillResult" class="geocode-result">\r
              <div class="geocode-result-title">\r
                <mat-icon>check_circle</mat-icon>\r
                Pros Geocode Complete\r
                <button class="dismiss-btn" (click)="proBackfillResult = null"><mat-icon>close</mat-icon></button>\r
              </div>\r
              <div class="geocode-stats">\r
                <div class="geocode-stat">\r
                  <span class="stat-value">{{ proBackfillResult.total }}</span>\r
                  <span class="stat-label">Found</span>\r
                </div>\r
                <div class="geocode-stat stat-updated">\r
                  <mat-icon>check_circle</mat-icon>\r
                  <span class="stat-value">{{ proBackfillResult.updated }}</span>\r
                  <span class="stat-label">Updated</span>\r
                </div>\r
                <div class="geocode-stat stat-failed" *ngIf="proBackfillResult.failed > 0">\r
                  <mat-icon>warning</mat-icon>\r
                  <span class="stat-value">{{ proBackfillResult.failed }}</span>\r
                  <span class="stat-label">Could not geocode</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
\r
          <!-- Users -->\r
          <div class="geocode-item">\r
            <div class="geocode-item-header">\r
              <mat-icon>person_pin_circle</mat-icon>\r
              <h3>Users</h3>\r
            </div>\r
            <p>Find and geocode all user accounts that have an address but no coordinates.</p>\r
            <button class="geocode-run-btn" (click)="runGeocodeBackfillUsers()" [disabled]="isBackfillingUsers">\r
              <mat-icon>{{ isBackfillingUsers ? 'hourglass_empty' : 'person_pin_circle' }}</mat-icon>\r
              {{ isBackfillingUsers ? 'Geocoding Users...' : 'Run Geocode \xE2\u20AC\u201D Users' }}\r
            </button>\r
\r
            <div *ngIf="userBackfillResult" class="geocode-result">\r
              <div class="geocode-result-title">\r
                <mat-icon>check_circle</mat-icon>\r
                Users Geocode Complete\r
                <button class="dismiss-btn" (click)="userBackfillResult = null"><mat-icon>close</mat-icon></button>\r
              </div>\r
              <div class="geocode-stats">\r
                <div class="geocode-stat">\r
                  <span class="stat-value">{{ userBackfillResult.total }}</span>\r
                  <span class="stat-label">Found</span>\r
                </div>\r
                <div class="geocode-stat stat-updated">\r
                  <mat-icon>check_circle</mat-icon>\r
                  <span class="stat-value">{{ userBackfillResult.updated }}</span>\r
                  <span class="stat-label">Updated</span>\r
                </div>\r
                <div class="geocode-stat stat-failed" *ngIf="userBackfillResult.failed > 0">\r
                  <mat-icon>warning</mat-icon>\r
                  <span class="stat-value">{{ userBackfillResult.failed }}</span>\r
                  <span class="stat-label">Could not geocode</span>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
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
      <div class="geocode-panel">\r
        <div class="geocode-header">\r
          <mat-icon>tune</mat-icon>\r
          <div>\r
            <h2>Platform Settings</h2>\r
            <p>Control site-wide display options.</p>\r
          </div>\r
        </div>\r
\r
        <div *ngIf="settingsLoading" class="geocode-loading">\r
          <mat-spinner diameter="28"></mat-spinner>\r
          <span>Loading settings\u2026</span>\r
        </div>\r
\r
        <div class="geocode-grid" *ngIf="!settingsLoading">\r
          <div class="geocode-item">\r
            <div class="geocode-item-header">\r
              <mat-icon>groups</mat-icon>\r
              <h3>Show Pro Count on Categories</h3>\r
            </div>\r
            <p>Display the number of registered professionals under each service category on the Services page.</p>\r
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
        </div>\r
      </div>\r
    </ng-container>\r
\r
  </div><!-- /admin-panel-area -->\r
\r
\r
</div><!-- /admin-users-container -->\r
`, styles: ['/* src/app/features/admin-users/admin-users.scss */\n.admin-users-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.admin-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 100;\n}\n.admin-header .header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.admin-header h1 {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.admin-header h1 mat-icon {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.tools-dropdown {\n  position: relative;\n}\n.tools-trigger {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  padding: 0.6rem 1.1rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.tools-trigger mat-icon {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.tools-trigger .chevron-icon {\n  transition: transform 0.2s;\n  opacity: 0.8;\n}\n.tools-trigger .chevron-icon.rotated {\n  transform: rotate(180deg);\n}\n.tools-trigger:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.55);\n}\n.tools-menu {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  min-width: 210px;\n  z-index: 200;\n  animation: menuSlide 0.15s ease;\n}\n@keyframes menuSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tools-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.85rem 1.25rem;\n  background: none;\n  border: none;\n  color: #333;\n  font-size: 0.92rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.tools-menu-item mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: #667eea;\n}\n.tools-menu-item:hover {\n  background: #f5f6fa;\n}\n.tools-menu-item.active {\n  background: #eef0fd;\n  color: #667eea;\n  font-weight: 700;\n}\n.tools-menu-item.active mat-icon {\n  color: #667eea;\n}\n.tools-menu-item + .tools-menu-item {\n  border-top: 1px solid #f0f0f0;\n}\n.disputes-banner {\n  background: #fff8f8;\n  border-bottom: 3px solid #ef9a9a;\n  padding: 1rem 2rem;\n}\n.disputes-banner .disputes-banner-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #c62828;\n  margin-bottom: 0.75rem;\n}\n.disputes-banner .disputes-banner-title mat-icon {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.disputes-banner .disputes-banner-title .dispute-count {\n  background: #c62828;\n  color: white;\n  border-radius: 12px;\n  padding: 1px 8px;\n  font-size: 0.78rem;\n}\n.disputes-banner .disputes-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #888;\n  font-size: 0.9rem;\n}\n.disputes-banner .disputes-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.dispute-card {\n  background: white;\n  border: 1px solid #ef9a9a;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.dispute-card .dispute-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.4rem;\n}\n.dispute-card .dispute-card-header .dispute-job-title {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.dispute-card .dispute-card-header .dispute-date {\n  font-size: 0.8rem;\n  color: #888;\n}\n.dispute-card .dispute-parties {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.4rem;\n}\n.dispute-card .dispute-parties span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dispute-card .dispute-parties mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card .dispute-reason,\n.dispute-card .dispute-completion-notes {\n  font-size: 0.88rem;\n  color: #444;\n  margin: 0.2rem 0;\n}\n.dispute-card .dispute-payment-amount {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.88rem;\n  color: #1b5e20;\n  margin: 0.4rem 0 0;\n}\n.dispute-card .dispute-payment-amount mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card .refund-confirm-form {\n  margin-top: 0.75rem;\n  padding: 0.75rem;\n  background: #fff3e0;\n  border: 1px solid #ffb74d;\n  border-radius: 6px;\n}\n.dispute-card .refund-confirm-form .refund-confirm-warning {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.88rem;\n  color: #e65100;\n  margin: 0 0 0.75rem;\n}\n.dispute-card .refund-confirm-form .refund-confirm-warning mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.dispute-card .refund-confirm-form .refund-notes-field {\n  width: 100%;\n}\n.dispute-card .refund-confirm-form .refund-confirm-actions {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n.dispute-card .dispute-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n.admin-panel-area {\n  flex: 1;\n  padding: 1.75rem 2rem;\n  overflow-y: auto;\n}\n.panel-search-layout {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 1024px) {\n  .panel-search-layout {\n    flex-direction: column;\n  }\n}\n.search-section {\n  flex: 0 0 340px;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: calc(100vh - 180px);\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .search-section {\n    flex: none;\n    width: 100%;\n    max-height: none;\n  }\n}\n.search-controls {\n  margin-bottom: 1.25rem;\n}\n.search-input-group {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n}\n.search-input-group .search-input {\n  flex: 1;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.search-input-group .search-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-input-group .search-btn {\n  padding: 0.7rem 1.1rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 500;\n  font-size: 0.88rem;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.search-input-group .search-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.search-input-group .search-btn:hover:not(:disabled) {\n  background: #5568d3;\n}\n.search-input-group .search-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-type {\n  display: flex;\n  gap: 0.5rem;\n}\n.search-type .type-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.75rem;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  background: white;\n  color: #666;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.search-type .type-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-type .type-btn:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.search-type .type-btn.active {\n  background: #667eea;\n  border-color: #667eea;\n  color: white;\n  font-weight: 600;\n}\n.search-results .results-group {\n  margin-bottom: 1.25rem;\n}\n.search-results .results-group h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.85rem;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 0.4rem;\n  font-weight: 700;\n}\n.user-item,\n.pro-item {\n  padding: 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  margin-bottom: 0.6rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.user-item:hover,\n.pro-item:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.12);\n}\n.user-item.selected,\n.pro-item.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.user-info .user-name,\n.user-info .pro-name,\n.pro-info .user-name,\n.pro-info .pro-name {\n  font-weight: 600;\n  margin-bottom: 0.2rem;\n  font-size: 0.95rem;\n}\n.user-info .user-email,\n.user-info .pro-email,\n.user-info .pro-business,\n.pro-info .user-email,\n.pro-info .pro-email,\n.pro-info .pro-business {\n  font-size: 0.83rem;\n  color: #666;\n  margin-bottom: 0.35rem;\n}\n.user-info .user-meta,\n.user-info .pro-meta,\n.pro-info .user-meta,\n.pro-info .pro-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  color: #999;\n}\n.user-date,\n.pro-date {\n  margin-left: auto;\n}\n.details-section {\n  flex: 1;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n@media (max-width: 1024px) {\n  .details-section {\n    flex: none;\n  }\n}\n.details-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e8e8e8;\n}\n.details-header h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  flex: 1;\n}\n.details-header .impersonate-btn,\n.details-header .clear-btn {\n  padding: 0.45rem 0.875rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 500;\n  font-size: 0.87rem;\n  transition: all 0.2s;\n}\n.details-header .impersonate-btn mat-icon,\n.details-header .clear-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.details-header .impersonate-btn {\n  background: #4caf50;\n  color: white;\n}\n.details-header .impersonate-btn:hover {\n  background: #43a047;\n}\n.details-header .clear-btn {\n  background: #f0f0f0;\n  color: #555;\n}\n.details-header .clear-btn:hover {\n  background: #e0e0e0;\n}\n.details-tabs {\n  flex: 1;\n  overflow: auto;\n}\n.details-tabs ::ng-deep .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-tabs ::ng-deep .mat-mdc-tab {\n  min-width: 100px !important;\n}\n.tab-content {\n  padding: 1.25rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 320px);\n}\n.profile-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.profile-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f5f5f5;\n  gap: 0.5rem;\n}\n.profile-details .detail-row label {\n  font-weight: 600;\n  color: #444;\n  min-width: 130px;\n  font-size: 0.9rem;\n}\n.profile-details .detail-row span {\n  color: #666;\n  text-align: right;\n  font-size: 0.9rem;\n}\n.profile-details .detail-row span mat-icon {\n  vertical-align: middle;\n}\n.profile-details .detail-row span mat-icon.verified {\n  color: #4caf50;\n}\n.inline-edit-btn,\n.inline-save-btn,\n.inline-cancel-btn {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.2rem 0.4rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  margin-left: 0.4rem;\n  transition: background 0.15s;\n}\n.inline-edit-btn mat-icon,\n.inline-save-btn mat-icon,\n.inline-cancel-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.inline-edit-btn:hover,\n.inline-save-btn:hover,\n.inline-cancel-btn:hover {\n  background: #f0f0f0;\n}\n.inline-save-btn {\n  border-color: #4caf50;\n}\n.inline-save-btn mat-icon {\n  color: #4caf50;\n}\n.inline-cancel-btn {\n  border-color: #e53935;\n}\n.inline-cancel-btn mat-icon {\n  color: #e53935;\n}\n.radius-input {\n  width: 70px;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  margin-left: 0.4rem;\n}\n.radius-unit {\n  font-size: 0.9rem;\n  color: #666;\n  margin-left: 0.25rem;\n}\n.jobs-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.jobs-list .job-card {\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #fafafa;\n}\n.jobs-list .job-card .job-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.jobs-list .job-card .job-header h4 {\n  margin: 0;\n  color: #333;\n  font-size: 0.95rem;\n}\n.jobs-list .job-card .job-header .status-badge {\n  padding: 0.2rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.jobs-list .job-card .job-header .status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.jobs-list .job-card .job-header .status-badge.status-in-progress {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list .job-card .job-header .status-badge[class*="In Progress"] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list .job-card .job-header .status-badge.status-completed {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.jobs-list .job-card .job-header .status-badge.status-cancelled {\n  background: #f8d7da;\n  color: #842029;\n}\n.jobs-list .job-card .job-title-section {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.jobs-list .job-card .job-title-section .bid-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.45rem;\n  background: #fff3cd;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 0.73rem;\n  font-weight: 500;\n}\n.jobs-list .job-card .job-title-section .bid-badge mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.jobs-list .job-card .job-details {\n  font-size: 0.88rem;\n  color: #666;\n}\n.jobs-list .job-card .job-details div {\n  margin-bottom: 0.4rem;\n}\n.jobs-list .job-card .job-details div strong {\n  color: #444;\n  margin-right: 0.4rem;\n}\n.jobs-list .job-card .job-details .job-description {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #eee;\n}\n.jobs-list .job-card .job-details .job-description strong {\n  display: block;\n  color: #444;\n  margin-bottom: 0.35rem;\n}\n.jobs-list .job-card .job-details .job-description p {\n  margin: 0;\n  line-height: 1.4;\n  max-height: 80px;\n  overflow-y: auto;\n}\n.jobs-list .job-card .job-details .job-dates {\n  display: flex;\n  gap: 1.25rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #eee;\n  font-size: 0.83rem;\n}\n.jobs-list .job-card.job-in-progress {\n  border-left: 4px solid #2196f3;\n  background: #f0f8ff;\n}\n.chat-section {\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n}\n.chat-section .conversations-panel {\n  flex: 0 0 220px;\n  border-right: 1px solid #e8e8e8;\n  padding-right: 1rem;\n}\n.chat-section .conversations-panel h3 {\n  margin: 0 0 0.6rem;\n  font-size: 0.9rem;\n  color: #444;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.chat-section .conversations-panel .conversations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.chat-section .conversations-panel .no-conversations {\n  text-align: center;\n  color: #aaa;\n  padding: 1.5rem 0;\n  font-size: 0.88rem;\n}\n.chat-section .messages-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section .messages-panel h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #444;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 0.5rem;\n  font-weight: 700;\n}\n.chat-section .messages-panel .messages-list {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.chat-section .no-conversation-selected {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  font-size: 0.9rem;\n}\n.conversation-item {\n  padding: 0.65rem 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.conversation-item:hover {\n  border-color: #667eea;\n  background: #f9f9f9;\n}\n.conversation-item.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.conversation-item .conversation-name {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.88rem;\n}\n.conversation-item .conversation-meta {\n  font-size: 0.78rem;\n  color: #aaa;\n}\n.conversation-item .conversation-time {\n  font-size: 0.75rem;\n  color: #bbb;\n  margin-top: 0.2rem;\n}\n.message {\n  padding: 0.65rem;\n  border-radius: 6px;\n  background: #f5f5f5;\n}\n.message.message-user {\n  background: #e3f2fd;\n  margin-left: 2rem;\n}\n.message.message-pro {\n  background: #f3e5f5;\n  margin-right: 2rem;\n}\n.message .message-sender {\n  font-weight: 600;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.2rem;\n}\n.message .message-content {\n  color: #333;\n  margin-bottom: 0.35rem;\n  word-wrap: break-word;\n  font-size: 0.9rem;\n}\n.message .message-time {\n  font-size: 0.72rem;\n  color: #bbb;\n}\n.message .message-status {\n  font-size: 0.72rem;\n  color: #4caf50;\n  margin-top: 0.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.message .message-status mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.rel-add-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rel-add-row .rel-input {\n  flex: 1;\n  max-width: 200px;\n}\n.rel-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rel-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.rel-item mat-icon {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rel-info {\n  flex: 1;\n  min-width: 0;\n}\n.rel-info .rel-name {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.rel-info .rel-email {\n  font-size: 0.8rem;\n  color: #777;\n}\n.panel-card {\n  background: white;\n  border-radius: 10px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.panel-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.75rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f0f0f0;\n}\n.panel-card-header mat-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #667eea;\n}\n.panel-card-header h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  font-weight: 700;\n}\n.panel-card-header .panel-count {\n  font-size: 0.9rem;\n  color: #888;\n  font-weight: 400;\n}\n.panel-description {\n  color: #666;\n  font-size: 0.92rem;\n  margin: -1rem 0 1.5rem;\n  line-height: 1.5;\n}\n.add-area-form {\n  margin-bottom: 1.5rem;\n}\n.add-area-form h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #555;\n}\n.area-form-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n.area-input {\n  flex: 1;\n  min-width: 120px;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.area-input:focus {\n  border-color: #667eea;\n}\n.area-input.area-input-notes {\n  min-width: 180px;\n}\n.add-area-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.5rem 1.1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  white-space: nowrap;\n}\n.add-area-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.add-area-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.area-error {\n  margin-top: 0.5rem;\n  color: #c62828;\n  font-size: 0.83rem;\n}\n.areas-table-wrap {\n  overflow-x: auto;\n}\n.areas-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.areas-table th {\n  text-align: left;\n  padding: 0.6rem 0.75rem;\n  background: #f5f6fa;\n  color: #555;\n  font-weight: 600;\n  border-bottom: 2px solid #e0e0e0;\n  white-space: nowrap;\n}\n.areas-table td {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.areas-table tr:last-child td {\n  border-bottom: none;\n}\n.areas-table .area-row-inactive td {\n  opacity: 0.55;\n}\n.area-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 12px;\n}\n.area-badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.area-badge.area-badge-active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.area-badge.area-badge-inactive {\n  background: #ffebee;\n  color: #c62828;\n}\n.auto-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #f57c00;\n}\n.auto-badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.manual-badge {\n  font-size: 0.78rem;\n  color: #999;\n}\n.notes-cell {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #777;\n}\n.area-actions {\n  white-space: nowrap;\n}\n.area-action-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 4px;\n  transition: background 0.15s;\n  display: inline-flex;\n  align-items: center;\n}\n.area-action-btn:hover {\n  background: #f0f0f0;\n}\n.area-action-btn mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.area-action-btn.toggle-btn mat-icon {\n  color: #667eea;\n}\n.area-action-btn.delete-btn mat-icon {\n  color: #e53935;\n}\n.map-view-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  margin-left: auto;\n  padding: 0.4rem 0.9rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 6px;\n  background: #fff;\n  color: #374151;\n  font-size: 0.85rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.map-view-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.map-view-btn:hover {\n  border-color: #667eea;\n  color: #667eea;\n  background: #f5f3ff;\n}\n.map-view-btn.active {\n  border-color: #667eea;\n  background: #667eea;\n  color: #fff;\n}\n.map-section {\n  margin-top: 0.5rem;\n}\n.map-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.75rem;\n}\n.map-select {\n  padding: 0.4rem 0.7rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.85rem;\n  outline: none;\n  background: #fff;\n  min-width: 140px;\n  cursor: pointer;\n  transition: border-color 0.15s;\n}\n.map-select:focus {\n  border-color: #667eea;\n}\n.map-select:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.map-inactive-label {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #555;\n  cursor: pointer;\n}\n.map-inactive-label input[type=checkbox] {\n  accent-color: #667eea;\n  cursor: pointer;\n}\n.map-legend {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 0.82rem;\n  color: #6b7280;\n  margin-left: 0.25rem;\n}\n.map-legend-dot {\n  display: inline-block;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  border: 2px solid #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);\n}\n.map-legend-dot.active {\n  background: #10b981;\n}\n.map-legend-dot.inactive {\n  background: #9ca3af;\n}\n.map-geocoding {\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-style: italic;\n}\n.map-container {\n  width: 100%;\n  height: 440px;\n  border-radius: 8px;\n  border: 1px solid #e5e7eb;\n  overflow: hidden;\n}\n@media (max-width: 768px) {\n  .map-container {\n    height: 320px;\n  }\n}\n.list-filters {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 0.6rem;\n  margin: 0.25rem 0 0.75rem;\n  position: relative;\n  z-index: 1;\n}\n.list-filter-count {\n  font-size: 0.82rem;\n  color: #9ca3af;\n  font-style: italic;\n}\n.map-empty {\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.88rem;\n  margin-top: 0.5rem;\n}\n.invite-form-section {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.invite-form-section h3 {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.invite-form-section .invite-description {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\n.invite-form-row {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.invite-form-row .invite-input {\n  flex: 1;\n  max-width: 380px;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.invite-form-row .invite-input:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.invite-send-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.invite-send-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-send-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.invite-success {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.invite-success mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #c62828;\n  font-size: 0.9rem;\n}\n.invite-error mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invitations-section h3 {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .geocode-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.geocode-item {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n.geocode-item p {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0.25rem 0 1rem;\n  line-height: 1.5;\n}\n.geocode-item-header {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.5rem;\n}\n.geocode-item-header mat-icon {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #667eea;\n}\n.geocode-item-header h3 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-run-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1.25rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.geocode-run-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-run-btn:hover:not(:disabled) {\n  background: #5568d3;\n}\n.geocode-run-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.geocode-result {\n  margin-top: 1.25rem;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.geocode-result .geocode-result-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #2e7d32;\n  margin-bottom: 0.75rem;\n}\n.geocode-result .geocode-result-title mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-result .geocode-result-title .dismiss-btn {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #aaa;\n  padding: 0.15rem;\n  border-radius: 4px;\n  transition: color 0.15s;\n}\n.geocode-result .geocode-result-title .dismiss-btn:hover {\n  color: #555;\n}\n.geocode-result .geocode-result-title .dismiss-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.geocode-result .geocode-stats {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.geocode-result .geocode-stat {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: #f5f5f5;\n  border-radius: 6px;\n  padding: 0.4rem 0.75rem;\n}\n.geocode-result .geocode-stat mat-icon {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n  color: #888;\n}\n.geocode-result .geocode-stat .stat-value {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-result .geocode-stat .stat-label {\n  font-size: 0.78rem;\n  color: #777;\n}\n.geocode-result .geocode-stat.stat-updated mat-icon {\n  color: #4caf50;\n}\n.geocode-result .geocode-stat.stat-failed mat-icon {\n  color: #ff9800;\n}\n.cat-admin-panel {\n  padding: 1.5rem;\n  max-width: 1100px;\n}\n.cat-admin-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n}\n.cat-admin-title {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n}\n.cat-admin-title mat-icon {\n  font-size: 1.6rem;\n  width: 1.6rem;\n  height: 1.6rem;\n  color: #667eea;\n}\n.cat-admin-title h2 {\n  margin: 0;\n  font-size: 1.2rem;\n  font-weight: 700;\n  color: #1f2937;\n}\n.cat-admin-title p {\n  margin: 2px 0 0;\n  font-size: 0.82rem;\n  color: #6b7280;\n}\n.cat-add-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.55rem 1.1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #764ba2,\n      #667eea);\n  color: white;\n  border: none;\n  border-radius: 8px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.cat-add-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.cat-add-btn:hover {\n  opacity: 0.88;\n}\n.cat-add-form {\n  background: #f9fafb;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 1rem 1.25rem;\n  margin-bottom: 1.25rem;\n}\n.cat-form-row {\n  display: flex;\n  gap: 0.75rem;\n  align-items: flex-end;\n  flex-wrap: wrap;\n}\n.cat-form-field {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n.cat-form-field label {\n  font-size: 0.78rem;\n  font-weight: 600;\n  color: #374151;\n}\n.cat-form-field small {\n  font-size: 0.72rem;\n  color: #9ca3af;\n}\n.cat-form-field input {\n  padding: 0.5rem 0.75rem;\n  border: 1.5px solid #e5e7eb;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-family: inherit;\n  color: #1f2937;\n  background: white;\n}\n.cat-form-field input:focus {\n  outline: none;\n  border-color: #764ba2;\n  box-shadow: 0 0 0 3px rgba(118, 75, 162, 0.1);\n}\n.cat-form-icon {\n  width: 80px;\n}\n.cat-form-name {\n  flex: 1;\n  min-width: 160px;\n}\n.cat-form-desc {\n  flex: 2;\n  min-width: 200px;\n}\n.cat-save-btn {\n  padding: 0.5rem 1.25rem;\n  background: #764ba2;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  align-self: flex-end;\n}\n.cat-save-btn:hover:not(:disabled) {\n  background: #5e3a82;\n}\n.cat-save-btn:disabled {\n  opacity: 0.55;\n  cursor: not-allowed;\n}\n.cat-form-error {\n  margin: 0.6rem 0 0;\n  font-size: 0.82rem;\n  color: #b91c1c;\n}\n.required {\n  color: #ef4444;\n}\n.cat-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 1rem 0;\n  color: #6b7280;\n  font-size: 0.9rem;\n}\n.cat-list {\n  border: 1.5px solid #e5e7eb;\n  border-radius: 10px;\n  overflow: hidden;\n}\n.cat-list-header,\n.cat-row {\n  display: grid;\n  grid-template-columns: 56px 1fr 2fr 60px 90px 100px;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.6rem 1rem;\n}\n.cat-list-header {\n  background: #f3f4f6;\n  font-size: 0.75rem;\n  font-weight: 700;\n  color: #6b7280;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  border-bottom: 1.5px solid #e5e7eb;\n}\n.cat-row {\n  border-bottom: 1px solid #f3f4f6;\n  font-size: 0.88rem;\n  color: #374151;\n  transition: background 0.12s;\n}\n.cat-row:last-child {\n  border-bottom: none;\n}\n.cat-row:hover {\n  background: #fafafa;\n}\n.cat-row.inactive {\n  opacity: 0.55;\n}\n.cat-row.editing {\n  background: #faf5ff;\n}\n.cat-icon-cell {\n  font-size: 1.25rem;\n}\n.cat-desc-cell {\n  color: #6b7280;\n  font-size: 0.82rem;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.status-badge {\n  display: inline-block;\n  padding: 0.2rem 0.6rem;\n  border-radius: 20px;\n  font-size: 0.75rem;\n  font-weight: 600;\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.status-badge.active {\n  background: #dcfce7;\n  color: #166534;\n}\n.col-actions {\n  display: flex;\n  gap: 0.4rem;\n}\n.row-btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  background: #f3f4f6;\n  color: #374151;\n  transition: background 0.15s;\n}\n.row-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.row-btn:hover:not(:disabled) {\n  background: #e5e7eb;\n}\n.row-btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n.row-btn.edit-btn:hover:not(:disabled) {\n  background: #e0e7ff;\n  color: #4f46e5;\n}\n.row-btn.save-btn {\n  background: #dcfce7;\n  color: #166534;\n}\n.row-btn.save-btn:hover:not(:disabled) {\n  background: #bbf7d0;\n}\n.row-btn.cancel-btn:hover:not(:disabled) {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n.row-btn.deactivate:hover:not(:disabled) {\n  background: #fff3cd;\n  color: #92400e;\n}\n.edit-input {\n  width: 100%;\n  padding: 0.3rem 0.5rem;\n  border: 1.5px solid #d1d5db;\n  border-radius: 5px;\n  font-size: 0.85rem;\n  font-family: inherit;\n  box-sizing: border-box;\n}\n.edit-input:focus {\n  outline: none;\n  border-color: #764ba2;\n}\n.icon-input {\n  text-align: center;\n  font-size: 1.1rem;\n}\n.toggle-label {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.82rem;\n  cursor: pointer;\n}\n.cat-empty {\n  padding: 2rem;\n  text-align: center;\n  color: #9ca3af;\n  font-size: 0.9rem;\n}\n.setting-toggle-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-top: 0.75rem;\n}\n.setting-status {\n  font-size: 0.85rem;\n  font-weight: 600;\n  padding: 0.3rem 0.75rem;\n  border-radius: 20px;\n  background: #f5f5f5;\n  color: #888;\n}\n.setting-status.enabled {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.badge.badge-pending {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge.badge-used {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-expired {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge.badge-verified {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.expires {\n  color: #666;\n  font-weight: 500;\n}\n.expired-text {\n  color: #d32f2f;\n  font-weight: 500;\n}\n.used-text {\n  color: #388e3c;\n  font-weight: 500;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.875rem;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.83rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.action-btn mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.action-btn.resend-btn {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.action-btn.resend-btn:hover {\n  background: #bbdefb;\n}\n.action-disabled {\n  color: #ccc;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 2rem;\n  color: #777;\n  font-size: 0.9rem;\n}\n.no-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem 1rem;\n  color: #bbb;\n}\n.no-data mat-icon {\n  font-size: 2.75rem;\n  width: 2.75rem;\n  height: 2.75rem;\n  opacity: 0.5;\n}\n.no-data p {\n  font-size: 0.95rem;\n  margin: 0;\n  color: #aaa;\n}\n.empty-state {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  color: #bbb;\n}\n.empty-state mat-icon {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  opacity: 0.25;\n}\n.empty-state h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #888;\n}\n.empty-state p {\n  margin: 0.25rem 0 0;\n  max-width: 280px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.invitations-table {\n  overflow-x: auto;\n}\n.invitations-table .invitations-list {\n  width: 100%;\n  border-collapse: collapse;\n}\n.invitations-table .invitations-list thead {\n  background: #f5f6fa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.invitations-table .invitations-list th {\n  padding: 0.875rem 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #444;\n  font-size: 0.83rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.invitations-table .invitations-list td {\n  padding: 0.875rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: #555;\n  font-size: 0.9rem;\n  vertical-align: middle;\n}\n.invitations-table .invitations-list tbody tr {\n  transition: background 0.15s;\n}\n.invitations-table .invitations-list tbody tr:hover {\n  background: #fafafa;\n}\n.invitations-table .invitations-list tbody tr.expired {\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .admin-users-container {\n    margin: -1rem -1rem 0;\n    width: calc(100% + 2rem);\n    min-height: unset;\n  }\n  .admin-header {\n    padding: 1rem;\n  }\n  .admin-header .header-top {\n    gap: 0.75rem;\n  }\n  .admin-header h1 {\n    font-size: 1.1rem;\n    gap: 0.5rem;\n  }\n  .admin-header h1 mat-icon {\n    font-size: 1.3rem;\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .tools-trigger {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.85rem;\n  }\n  .tools-trigger span {\n    display: none;\n  }\n  .disputes-banner {\n    padding: 0.875rem 1rem;\n  }\n  .admin-panel-area {\n    padding: 1rem 0.75rem;\n  }\n  .panel-card {\n    padding: 1rem 0.875rem;\n  }\n  .panel-search-layout {\n    flex-direction: column;\n  }\n  .search-section {\n    flex: none;\n    width: 100%;\n    max-height: none;\n    padding: 1rem;\n  }\n  .details-section {\n    padding: 1rem;\n  }\n  .details-header {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .details-header h2 {\n    font-size: 1.1rem;\n    flex: 1 1 100%;\n  }\n  .details-header .impersonate-btn,\n  .details-header .clear-btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab {\n    min-width: 0 !important;\n    padding: 0 8px !important;\n    flex-grow: 1;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mdc-tab__text-label {\n    font-size: 0.7rem;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mat-icon {\n    font-size: 0.95rem;\n    width: 0.95rem;\n    height: 0.95rem;\n  }\n  .tab-content {\n    padding: 0.75rem;\n    max-height: none;\n  }\n  .profile-details .detail-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.15rem;\n  }\n  .profile-details .detail-row label {\n    min-width: unset;\n  }\n  .profile-details .detail-row span {\n    text-align: left;\n  }\n  .chat-section {\n    flex-direction: column;\n    height: auto;\n  }\n  .chat-section .conversations-panel {\n    flex: none;\n    border-right: none;\n    border-bottom: 1px solid #e8e8e8;\n    padding-right: 0;\n    padding-bottom: 0.75rem;\n    margin-bottom: 0.75rem;\n    max-height: 160px;\n    overflow-y: auto;\n  }\n  .rel-add-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .rel-add-row .rel-input {\n    max-width: none;\n  }\n  .dispute-actions {\n    flex-direction: column;\n  }\n  .dispute-actions button {\n    width: 100%;\n  }\n  .invite-form-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .invite-form-row .invite-input {\n    max-width: none;\n  }\n  .invitations-table .invitations-list thead {\n    display: none;\n  }\n  .invitations-table .invitations-list tbody tr {\n    display: block;\n    border: 1px solid #e8e8e8;\n    border-radius: 8px;\n    margin-bottom: 0.75rem;\n    padding: 0.5rem 0.75rem;\n    background: white;\n  }\n  .invitations-table .invitations-list td {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.4rem 0;\n    border-bottom: 1px solid #f5f5f5;\n    font-size: 0.83rem;\n  }\n  .invitations-table .invitations-list td:last-child {\n    border-bottom: none;\n  }\n  .invitations-table .invitations-list td::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #555;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n    flex-shrink: 0;\n    margin-right: 0.75rem;\n  }\n}\n.entity-payments-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n  padding: 0.5rem 0;\n}\n.entity-payment-card {\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-left: 4px solid #4caf50;\n  border-radius: 8px;\n  padding: 0.9rem 1.1rem;\n}\n.entity-payment-card.ep-refunded {\n  border-left-color: #ff9800;\n}\n.entity-payment-card.ep-failed {\n  border-left-color: #f44336;\n}\n.entity-payment-card .ep-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 0.5rem;\n}\n.entity-payment-card .ep-title {\n  display: flex;\n  align-items: baseline;\n  gap: 0.4rem;\n}\n.entity-payment-card .ep-title .ep-id {\n  font-size: 0.75rem;\n  color: #aaa;\n  font-family: monospace;\n}\n.entity-payment-card .ep-title .ep-job {\n  font-weight: 600;\n  font-size: 0.9rem;\n}\n.entity-payment-card .ep-status {\n  font-size: 0.72rem;\n  font-weight: 700;\n  padding: 0.18rem 0.55rem;\n  border-radius: 10px;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.entity-payment-card .ep-status.epst-completed {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.entity-payment-card .ep-status.epst-refunded {\n  background: #fff3e0;\n  color: #e65100;\n}\n.entity-payment-card .ep-status.epst-failed {\n  background: #ffebee;\n  color: #c62828;\n}\n.entity-payment-card .ep-status.epst-pending {\n  background: #e3f2fd;\n  color: #1565c0;\n}\n.entity-payment-card .ep-amounts {\n  display: flex;\n  gap: 1.25rem;\n  flex-wrap: wrap;\n  margin-bottom: 0.45rem;\n}\n.entity-payment-card .ep-amounts .ep-amount-item {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card .ep-amounts .ep-amount-item .ep-amt-label {\n  font-size: 0.7rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.entity-payment-card .ep-amounts .ep-amount-item .ep-amt-value {\n  font-size: 0.92rem;\n  font-weight: 600;\n  color: #222;\n}\n.entity-payment-card .ep-dates {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.3rem;\n}\n.entity-payment-card .ep-dates span {\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.entity-payment-card .ep-dates mat-icon {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n.entity-payment-card .ep-failure {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.82rem;\n  color: #c62828;\n  margin-top: 0.35rem;\n}\n.entity-payment-card .ep-failure mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.entity-payment-card .ep-refund-block {\n  margin-top: 0.65rem;\n  padding: 0.65rem 0.85rem;\n  background: #fff8e1;\n  border: 1px solid #ffe082;\n  border-radius: 6px;\n}\n.entity-payment-card .ep-refund-block .ep-refund-header {\n  display: flex;\n  align-items: center;\n  gap: 0.3rem;\n  font-size: 0.75rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  color: #e65100;\n  margin-bottom: 0.4rem;\n}\n.entity-payment-card .ep-refund-block .ep-refund-header mat-icon {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n}\n.entity-payment-card .ep-refund-block .ep-refund-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 0.25rem;\n}\n.entity-payment-card .ep-refund-block .ep-rd-item {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card .ep-refund-block .ep-rd-reason {\n  display: flex;\n  flex-direction: column;\n}\n.entity-payment-card .ep-refund-block .ep-rd-label {\n  font-size: 0.7rem;\n  color: #999;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n.entity-payment-card .ep-refund-block .ep-rd-value {\n  font-size: 0.88rem;\n  color: #333;\n}\n.entity-payment-card .ep-refund-block .ep-rd-value.ep-refund-amount {\n  font-weight: 700;\n  color: #e65100;\n  font-size: 0.95rem;\n}\n.entity-payment-card .ep-provider-ids {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.6rem;\n  margin-top: 0.4rem;\n  font-size: 0.7rem;\n  color: #bbb;\n  font-family: monospace;\n}\n.entity-payment-card .ep-refund-action {\n  margin-top: 0.75rem;\n  padding-top: 0.65rem;\n  border-top: 1px solid #eee;\n}\n.entity-payment-card .ep-refund-action .ep-refund-btn {\n  font-size: 0.82rem;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm {\n  padding: 0.65rem;\n  background: #fff3e0;\n  border: 1px solid #ffb74d;\n  border-radius: 6px;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm .ep-refund-warn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  font-size: 0.85rem;\n  color: #e65100;\n  margin: 0 0 0.6rem;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm .ep-refund-warn mat-icon {\n  font-size: 17px;\n  width: 17px;\n  height: 17px;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm .ep-refund-notes {\n  width: 100%;\n}\n.entity-payment-card .ep-refund-action .ep-refund-confirm .ep-refund-confirm-btns {\n  display: flex;\n  gap: 0.5rem;\n  justify-content: flex-end;\n  margin-top: 0.4rem;\n}\n@media (max-width: 480px) {\n  .details-tabs ::ng-deep .mat-mdc-tab .mdc-tab__text-label span:not(.mat-icon) {\n    display: none;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mat-icon {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=admin-users.css.map */\n'] }]
  }], () => [{ type: AdminUsersService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }, { type: ActivatedRoute }, { type: MatDialog }, { type: ProUsersService }, { type: MatSnackBar }, { type: ServiceAreaService }, { type: MatBottomSheet }, { type: HttpClient }, { type: PayoutService }, { type: SettingsService }, { type: ServiceCategoryService }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 49 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImpersonateSheetComponent, { className: "ImpersonateSheetComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 1240 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteAreaSheetComponent, { className: "DeleteAreaSheetComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 1278 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteAdminDialogComponent, { className: "InviteAdminDialogComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 1315 });
})();
export {
  AdminUsersComponent,
  DeleteAreaSheetComponent,
  ImpersonateSheetComponent,
  InviteAdminDialogComponent
};
//# sourceMappingURL=chunk-XDOX7PEF.js.map

