import {
  MatTab,
  MatTabGroup,
  MatTabLabel,
  MatTabsModule
} from "./chunk-4G7MVHXG.js";
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
} from "./chunk-JXK3CY2S.js";
import {
  ProUsersService
} from "./chunk-SWCRQUIJ.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-Z5YC3QOU.js";
import {
  CdkPortalOutlet,
  PortalModule,
  createBlockScrollStrategy,
  createGlobalPositionStrategy
} from "./chunk-YFVGD4AB.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-MQXTVBAG.js";
import {
  MatFormField,
  MatLabel
} from "./chunk-RAZWGAZW.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-KUT34PAX.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-LWBGNZR5.js";
import {
  Breakpoints,
  _animationsDisabled
} from "./chunk-B52SAYO3.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-GE3YQJYL.js";
import {
  BreakpointObserver,
  ESCAPE,
  MatCommonModule,
  hasModifierKey
} from "./chunk-CSFNIUM5.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  NumberValueAccessor,
  ɵNgNoValidate
} from "./chunk-QP32PFWE.js";
import {
  Auth
} from "./chunk-A4EHLAJD.js";
import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  Router
} from "./chunk-NMZ5GJTW.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  EventEmitter,
  HttpClient,
  Inject,
  Injectable,
  InjectionToken,
  Injector,
  NgClass,
  NgForOf,
  NgIf,
  NgModule,
  NgSwitch,
  NgSwitchCase,
  Subject,
  ViewEncapsulation,
  filter,
  inject,
  merge,
  setClassMetadata,
  take,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵattribute,
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
} from "./chunk-ANTPJ2CK.js";
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

// src/app/core/services/service-area.service.ts
var ServiceAreaService = class _ServiceAreaService {
  http;
  base = `${environment.apiUrl}/service-areas`;
  constructor(http) {
    this.http = http;
  }
  getAll() {
    return this.http.get(this.base);
  }
  getActive() {
    return this.http.get(`${this.base}/active`);
  }
  add(area) {
    return this.http.post(this.base, area);
  }
  toggle(id) {
    return this.http.post(`${this.base}/${id}/toggle`, {});
  }
  delete(id) {
    return this.http.delete(`${this.base}/${id}`);
  }
  check(country, state, district, pinCode) {
    const params = { country };
    if (state)
      params["state"] = state;
    if (district)
      params["district"] = district;
    if (pinCode)
      params["pinCode"] = pinCode;
    return this.http.get(`${this.base}/check`, { params });
  }
  static \u0275fac = function ServiceAreaService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ServiceAreaService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ServiceAreaService, factory: _ServiceAreaService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ServiceAreaService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
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
    const d_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", d_r5.completionNotes);
  }
}
function AdminUsersComponent_div_16_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
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
    \u0275\u0275template(20, AdminUsersComponent_div_16_div_7_div_1_p_20_Template, 4, 1, "p", 29);
    \u0275\u0275elementStart(21, "div", 30)(22, "button", 31);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_div_7_div_1_Template_button_click_22_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resolveDispute(d_r5.jobId, "complete"));
    });
    \u0275\u0275elementStart(23, "mat-icon");
    \u0275\u0275text(24, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, " Complete for Pro ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "button", 32);
    \u0275\u0275listener("click", function AdminUsersComponent_div_16_div_7_div_1_Template_button_click_26_listener() {
      const d_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resolveDispute(d_r5.jobId, "refund"));
    });
    \u0275\u0275elementStart(27, "mat-icon");
    \u0275\u0275text(28, "replay");
    \u0275\u0275elementEnd();
    \u0275\u0275text(29, " Refund & Reopen ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const d_r5 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(d_r5.jobTitle);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 10, d_r5.disputedAt, "MMM d, y"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" Consumer: ", d_r5.consumer == null ? null : d_r5.consumer.name, " (", d_r5.consumer == null ? null : d_r5.consumer.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Pro: ", (d_r5.pro == null ? null : d_r5.pro.businessName) || (d_r5.pro == null ? null : d_r5.pro.name), " (", d_r5.pro == null ? null : d_r5.pro.email, ")");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", d_r5.disputeReason);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", d_r5.completionNotes);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r5.jobId);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", ctx_r2.resolvingDisputeId === d_r5.jobId);
  }
}
function AdminUsersComponent_div_16_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275template(1, AdminUsersComponent_div_16_div_7_div_1_Template, 30, 13, "div", 22);
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
    \u0275\u0275elementStart(0, "span", 58)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Email Verified ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 51);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_20_div_2_div_3_Template_div_click_0_listener() {
      const user_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectUser(user_r8));
    });
    \u0275\u0275elementStart(1, "div", 52)(2, "div", 53);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 54);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 55);
    \u0275\u0275template(7, AdminUsersComponent_ng_container_18_div_20_div_2_div_3_span_7_Template, 4, 0, "span", 56);
    \u0275\u0275elementStart(8, "span", 57);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r2.selectedUser == null ? null : ctx_r2.selectedUser.id) === user_r8.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2("", user_r8.firstName, " ", user_r8.lastName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(user_r8.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", user_r8.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined: ", ctx_r2.formatDate(user_r8.createdAt));
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminUsersComponent_ng_container_18_div_20_div_2_div_3_Template, 10, 7, "div", 50);
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
    \u0275\u0275elementStart(0, "span", 58)(1, "mat-icon");
    \u0275\u0275text(2, "verified");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Email Verified ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_20_div_3_div_3_Template_div_click_0_listener() {
      const pro_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.selectPro(pro_r10));
    });
    \u0275\u0275elementStart(1, "div", 61)(2, "div", 62);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 63);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 64);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 65);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_18_div_20_div_3_div_3_span_9_Template, 4, 0, "span", 56);
    \u0275\u0275elementStart(10, "span", 66);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const pro_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("selected", (ctx_r2.selectedPro == null ? null : ctx_r2.selectedPro.id) === pro_r10.id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(pro_r10.proName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r10.businessName);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pro_r10.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", pro_r10.isEmailVerified);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Joined: ", ctx_r2.formatDate(pro_r10.createdAt));
  }
}
function AdminUsersComponent_ng_container_18_div_20_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminUsersComponent_ng_container_18_div_20_div_3_div_3_Template, 12, 7, "div", 59);
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
    \u0275\u0275elementStart(0, "div", 46)(1, "div", 47);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_18_div_20_div_2_Template, 4, 2, "div", 48)(3, AdminUsersComponent_ng_container_18_div_20_div_3_Template, 4, 2, "div", 48);
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
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "label");
    \u0275\u0275text(3, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 81)(7, "label");
    \u0275\u0275text(8, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 81)(12, "label");
    \u0275\u0275text(13, "Email Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span")(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 81)(18, "label");
    \u0275\u0275text(19, "Phone Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "span")(21, "mat-icon");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(23, "div", 81)(24, "label");
    \u0275\u0275text(25, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, AdminUsersComponent_ng_container_18_div_21_div_15_span_26_Template, 2, 4, "span", 69)(27, AdminUsersComponent_ng_container_18_div_21_div_15_span_27_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div", 81)(29, "label");
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
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 82);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_46_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r12);
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
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "input", 83);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template_input_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      \u0275\u0275twoWayBindingSet(ctx_r2.editRadiusValue, $event) || (ctx_r2.editRadiusValue = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "span", 84);
    \u0275\u0275text(3, "km");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 85);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.saveRadius());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "check");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 86);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r13);
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
    \u0275\u0275elementStart(0, "div", 80)(1, "div", 81)(2, "label");
    \u0275\u0275text(3, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 81)(7, "label");
    \u0275\u0275text(8, "Business:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 81)(12, "label");
    \u0275\u0275text(13, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "div", 81)(17, "label");
    \u0275\u0275text(18, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 81)(22, "label");
    \u0275\u0275text(23, "Email Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "span")(25, "mat-icon");
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "div", 81)(28, "label");
    \u0275\u0275text(29, "Phone Verified:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "span")(31, "mat-icon");
    \u0275\u0275text(32);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 81)(34, "label");
    \u0275\u0275text(35, "Address:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_18_div_21_div_16_span_36_Template, 2, 4, "span", 69)(37, AdminUsersComponent_ng_container_18_div_21_div_16_span_37_Template, 2, 0, "span", 69);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 81)(39, "label");
    \u0275\u0275text(40, "Joined:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(41, "span");
    \u0275\u0275text(42);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(43, "div", 81)(44, "label");
    \u0275\u0275text(45, "Service Radius:");
    \u0275\u0275elementEnd();
    \u0275\u0275template(46, AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_46_Template, 6, 1, "ng-container", 69)(47, AdminUsersComponent_ng_container_18_div_21_div_16_ng_container_47_Template, 10, 1, "ng-container", 69);
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
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "mat-spinner", 88);
    \u0275\u0275text(2, " Loading job history... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_div_1_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 99)(1, "mat-icon");
    \u0275\u0275text(2, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bid Job");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "strong");
    \u0275\u0275text(2, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const job_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r14.description);
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
    const job_r14 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", job_r14.assignedProBusinessName);
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
    const job_r14 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r14.updatedAt));
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "div", 93)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_span_5_Template, 4, 0, "span", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 95);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 96);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_div_9_Template, 5, 1, "div", 97);
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
    \u0275\u0275template(30, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_div_30_Template, 4, 1, "div", 69);
    \u0275\u0275elementStart(31, "div", 98)(32, "span")(33, "strong");
    \u0275\u0275text(34, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_span_36_Template, 4, 1, "span", 69);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const job_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("job-in-progress", job_r14.status === "In Progress");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(job_r14.title);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r14.isBid);
    \u0275\u0275advance();
    \u0275\u0275property("ngClass", "status-" + job_r14.status);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(job_r14.status);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", job_r14.description);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", (job_r14.category == null ? null : job_r14.category.name) || "N/A");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r14.location);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r14.budget);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r14.timeline);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", job_r14.userName);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r14.assignedProId);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(job_r14.createdAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", job_r14.updatedAt);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_21_div_1_Template, 37, 15, "div", 90);
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
    \u0275\u0275elementStart(0, "span", 99)(1, "mat-icon");
    \u0275\u0275text(2, "local_offer");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Bid Job");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_div_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 100)(1, "strong");
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
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_div_30_Template(rf, ctx) {
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
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_span_36_Template(rf, ctx) {
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
function AdminUsersComponent_ng_container_18_div_21_div_22_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 91)(1, "div", 92)(2, "div", 93)(3, "h4");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_span_5_Template, 4, 0, "span", 94);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span", 95);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 96);
    \u0275\u0275template(9, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_div_9_Template, 5, 1, "div", 97);
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
    \u0275\u0275template(30, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_div_30_Template, 4, 1, "div", 69);
    \u0275\u0275elementStart(31, "div", 98)(32, "span")(33, "strong");
    \u0275\u0275text(34, "Created:");
    \u0275\u0275elementEnd();
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275template(36, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_span_36_Template, 4, 1, "span", 69);
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
function AdminUsersComponent_ng_container_18_div_21_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 89);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_22_div_1_Template, 37, 15, "div", 90);
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
    \u0275\u0275elementStart(0, "div", 101)(1, "mat-icon");
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
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "mat-spinner", 88);
    \u0275\u0275text(2, " Loading chat history... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r17 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(conversation_r17.lastMessageTime), " ");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_Template_div_click_0_listener() {
      const conversation_r17 = \u0275\u0275restoreView(_r16).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.selectConversation(conversation_r17));
    });
    \u0275\u0275elementStart(1, "div", 111)(2, "div", 112);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 113);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_div_6_Template, 2, 1, "div", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r17 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", (ctx_r2.selectedConversation == null ? null : ctx_r2.selectedConversation.userId) === conversation_r17.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r17.userName || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conversation_r17.userType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conversation_r17.lastMessageTime);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_28_div_4_div_1_Template, 7, 5, "div", 109);
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
    \u0275\u0275elementStart(0, "div", 115);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r19 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatDate(conversation_r19.lastMessageTime), " ");
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 110);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_Template_div_click_0_listener() {
      const conversation_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.selectConversation(conversation_r19));
    });
    \u0275\u0275elementStart(1, "div", 111)(2, "div", 112);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 113);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_div_6_Template, 2, 1, "div", 114);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const conversation_r19 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275classProp("selected", (ctx_r2.selectedConversation == null ? null : ctx_r2.selectedConversation.userId) === conversation_r19.userId);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(conversation_r19.userName || "Unknown User");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(conversation_r19.userType);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", conversation_r19.lastMessageTime);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 108);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_28_div_5_div_1_Template, 7, 5, "div", 109);
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
    \u0275\u0275elementStart(0, "div", 116)(1, "p");
    \u0275\u0275text(2, "No conversations");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_7_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 125)(1, "mat-icon");
    \u0275\u0275text(2, "done_all");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Read ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_7_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 120)(1, "div", 121);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 122);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 123);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_18_div_21_div_28_div_7_div_4_div_7_Template, 4, 0, "div", 124);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const message_r20 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275property("ngClass", "message-" + (message_r20.senderType ? message_r20.senderType.toLowerCase() : "unknown"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r20.senderType);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(message_r20.content);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(message_r20.sentAt));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", message_r20.isRead);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 117)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 118);
    \u0275\u0275template(4, AdminUsersComponent_ng_container_18_div_21_div_28_div_7_div_4_Template, 8, 5, "div", 119);
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
function AdminUsersComponent_ng_container_18_div_21_div_28_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 126)(1, "p");
    \u0275\u0275text(2, "Select a conversation to view messages");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 102)(1, "div", 103)(2, "h3");
    \u0275\u0275text(3, "Conversations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AdminUsersComponent_ng_container_18_div_21_div_28_div_4_Template, 2, 1, "div", 104)(5, AdminUsersComponent_ng_container_18_div_21_div_28_div_5_Template, 2, 1, "div", 104)(6, AdminUsersComponent_ng_container_18_div_21_div_28_div_6_Template, 3, 0, "div", 105);
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_18_div_21_div_28_div_7_Template, 5, 2, "div", 106)(8, AdminUsersComponent_ng_container_18_div_21_div_28_div_8_Template, 3, 0, "div", 107);
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
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "mat-spinner", 132);
    \u0275\u0275text(2, " Loading linked clients... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_32_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "mat-icon");
    \u0275\u0275text(2, "group_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No users linked to this pro");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_32_div_12_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 135)(1, "mat-icon");
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 136)(4, "div", 137);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 138);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 139);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_32_div_12_div_1_Template_button_click_8_listener() {
      const u_r23 = \u0275\u0275restoreView(_r22).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.removeUserFromPro(u_r23.id));
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "link_off");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const u_r23 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(u_r23.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", u_r23.email, " \xA0\xB7\xA0 ID: ", u_r23.id);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_32_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_32_div_12_div_1_Template, 11, 3, "div", 134);
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
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div")(1, "div", 127)(2, "mat-form-field", 128)(3, "mat-label");
    \u0275\u0275text(4, "Add User by ID");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 129);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_div_21_div_32_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      \u0275\u0275twoWayBindingSet(ctx_r2.addUserId, $event) || (ctx_r2.addUserId = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 130);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_div_32_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r21);
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.addUserToPro());
    });
    \u0275\u0275elementStart(7, "mat-icon");
    \u0275\u0275text(8, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9, " Link User ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, AdminUsersComponent_ng_container_18_div_21_div_32_div_10_Template, 3, 0, "div", 76)(11, AdminUsersComponent_ng_container_18_div_21_div_32_div_11_Template, 5, 0, "div", 78)(12, AdminUsersComponent_ng_container_18_div_21_div_32_div_12_Template, 2, 1, "div", 131);
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
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "mat-spinner", 132);
    \u0275\u0275text(2, " Loading linked pros... ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_33_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "mat-icon");
    \u0275\u0275text(2, "handshake");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No pros linked to this user");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_33_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 135)(1, "mat-icon");
    \u0275\u0275text(2, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 136)(4, "div", 137);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 138);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const p_r24 = ctx.$implicit;
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(p_r24.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", p_r24.businessName, " \xA0\xB7\xA0 ", p_r24.email);
  }
}
function AdminUsersComponent_ng_container_18_div_21_div_33_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 133);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_33_div_3_div_1_Template, 8, 3, "div", 134);
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
    \u0275\u0275template(1, AdminUsersComponent_ng_container_18_div_21_div_33_div_1_Template, 3, 0, "div", 76)(2, AdminUsersComponent_ng_container_18_div_21_div_33_div_2_Template, 5, 0, "div", 78)(3, AdminUsersComponent_ng_container_18_div_21_div_33_div_3_Template, 2, 1, "div", 131);
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
function AdminUsersComponent_ng_container_18_div_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 67)(1, "div", 68);
    \u0275\u0275template(2, AdminUsersComponent_ng_container_18_div_21_h2_2_Template, 2, 2, "h2", 69)(3, AdminUsersComponent_ng_container_18_div_21_h2_3_Template, 2, 1, "h2", 69);
    \u0275\u0275elementStart(4, "button", 70);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.impersonate());
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, " Impersonate ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "button", 71);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_div_21_Template_button_click_8_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.clearSelection());
    });
    \u0275\u0275elementStart(9, "mat-icon");
    \u0275\u0275text(10, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "mat-tab-group", 72)(12, "mat-tab");
    \u0275\u0275template(13, AdminUsersComponent_ng_container_18_div_21_ng_template_13_Template, 3, 0, "ng-template", 73);
    \u0275\u0275elementStart(14, "div", 74);
    \u0275\u0275template(15, AdminUsersComponent_ng_container_18_div_21_div_15_Template, 33, 11, "div", 75)(16, AdminUsersComponent_ng_container_18_div_21_div_16_Template, 48, 15, "div", 75);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "mat-tab");
    \u0275\u0275template(18, AdminUsersComponent_ng_container_18_div_21_ng_template_18_Template, 3, 0, "ng-template", 73);
    \u0275\u0275elementStart(19, "div", 74);
    \u0275\u0275template(20, AdminUsersComponent_ng_container_18_div_21_div_20_Template, 3, 0, "div", 76)(21, AdminUsersComponent_ng_container_18_div_21_div_21_Template, 2, 1, "div", 77)(22, AdminUsersComponent_ng_container_18_div_21_div_22_Template, 2, 1, "div", 77)(23, AdminUsersComponent_ng_container_18_div_21_div_23_Template, 5, 0, "div", 78);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "mat-tab");
    \u0275\u0275template(25, AdminUsersComponent_ng_container_18_div_21_ng_template_25_Template, 3, 0, "ng-template", 73);
    \u0275\u0275elementStart(26, "div", 74);
    \u0275\u0275template(27, AdminUsersComponent_ng_container_18_div_21_div_27_Template, 3, 0, "div", 76)(28, AdminUsersComponent_ng_container_18_div_21_div_28_Template, 9, 5, "div", 79);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-tab");
    \u0275\u0275template(30, AdminUsersComponent_ng_container_18_div_21_ng_template_30_Template, 3, 0, "ng-template", 73);
    \u0275\u0275elementStart(31, "div", 74);
    \u0275\u0275template(32, AdminUsersComponent_ng_container_18_div_21_div_32_Template, 13, 5, "div", 69)(33, AdminUsersComponent_ng_container_18_div_21_div_33_Template, 4, 3, "div", 69);
    \u0275\u0275elementEnd()()()();
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
  }
}
function AdminUsersComponent_ng_container_18_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 140)(1, "mat-icon");
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
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 34)(2, "div", 35)(3, "form", 36)(4, "div", 37)(5, "div", 38)(6, "input", 39);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_18_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.searchQuery, $event) || (ctx_r2.searchQuery = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminUsersComponent_ng_container_18_Template_input_keyup_enter_6_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.search());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.search());
    });
    \u0275\u0275elementStart(8, "mat-icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 41)(12, "button", 42);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSearchType("user"));
    });
    \u0275\u0275elementStart(13, "mat-icon");
    \u0275\u0275text(14, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275text(15, " Users ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 42);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_18_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setSearchType("pro"));
    });
    \u0275\u0275elementStart(17, "mat-icon");
    \u0275\u0275text(18, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275text(19, " Professionals ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275template(20, AdminUsersComponent_ng_container_18_div_20_Template, 4, 2, "div", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, AdminUsersComponent_ng_container_18_div_21_Template, 34, 12, "div", 44)(22, AdminUsersComponent_ng_container_18_div_22_Template, 7, 0, "div", 45);
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
    \u0275\u0275elementStart(0, "span", 154);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", ctx_r2.serviceAreas.length, ")");
  }
}
function AdminUsersComponent_ng_container_19_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 155);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.areaErrorMsg);
  }
}
function AdminUsersComponent_ng_container_19_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "mat-spinner", 156);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading service areas...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_div_23_table_1_tr_20_span_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 168)(1, "mat-icon");
    \u0275\u0275text(2, "autorenew");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Auto ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_23_table_1_tr_20_span_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 169);
    \u0275\u0275text(1, "Manual");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_19_div_23_table_1_tr_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = \u0275\u0275getCurrentView();
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
    \u0275\u0275elementStart(9, "td")(10, "span", 161)(11, "mat-icon");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "td");
    \u0275\u0275template(15, AdminUsersComponent_ng_container_19_div_23_table_1_tr_20_span_15_Template, 4, 0, "span", 162)(16, AdminUsersComponent_ng_container_19_div_23_table_1_tr_20_span_16_Template, 2, 0, "span", 163);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "td", 164);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "td", 165)(20, "button", 166);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_23_table_1_tr_20_Template_button_click_20_listener() {
      const area_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.toggleServiceArea(area_r27.id));
    });
    \u0275\u0275elementStart(21, "mat-icon");
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(23, "button", 167);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_div_23_table_1_tr_20_Template_button_click_23_listener() {
      const area_r27 = \u0275\u0275restoreView(_r26).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.deleteServiceArea(area_r27));
    });
    \u0275\u0275elementStart(24, "mat-icon");
    \u0275\u0275text(25, "delete_outline");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const area_r27 = ctx.$implicit;
    \u0275\u0275classProp("area-row-inactive", !area_r27.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r27.country);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r27.state || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r27.district || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r27.pinCode || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("area-badge-active", area_r27.isActive)("area-badge-inactive", !area_r27.isActive);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r27.isActive ? "check_circle" : "cancel");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", area_r27.isActive ? "Active" : "Inactive", " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", area_r27.isAutoEnrolled);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !area_r27.isAutoEnrolled);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r27.notes || "\u2014");
    \u0275\u0275advance(2);
    \u0275\u0275property("title", area_r27.isActive ? "Disable this area" : "Enable this area");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(area_r27.isActive ? "toggle_on" : "toggle_off");
  }
}
function AdminUsersComponent_ng_container_19_div_23_table_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 159)(1, "thead")(2, "tr")(3, "th");
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
    \u0275\u0275template(20, AdminUsersComponent_ng_container_19_div_23_table_1_tr_20_Template, 26, 17, "tr", 160);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(20);
    \u0275\u0275property("ngForOf", ctx_r2.serviceAreas);
  }
}
function AdminUsersComponent_ng_container_19_div_23_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 101)(1, "mat-icon");
    \u0275\u0275text(2, "location_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No service areas defined. Add one above \u2014 currently accepting jobs from anywhere.");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_19_div_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 157);
    \u0275\u0275template(1, AdminUsersComponent_ng_container_19_div_23_table_1_Template, 21, 1, "table", 158)(2, AdminUsersComponent_ng_container_19_div_23_div_2_Template, 5, 0, "div", 78);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.serviceAreas.length > 0);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.serviceAreas.length === 0);
  }
}
function AdminUsersComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 141)(2, "div", 142)(3, "mat-icon");
    \u0275\u0275text(4, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Service Areas");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, AdminUsersComponent_ng_container_19_span_7_Template, 2, 1, "span", 143);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 144)(9, "h3");
    \u0275\u0275text(10, "Add Service Area");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 145)(12, "input", 146);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.country, $event) || (ctx_r2.newArea.country = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "input", 147);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.state, $event) || (ctx_r2.newArea.state = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "input", 148);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_14_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.district, $event) || (ctx_r2.newArea.district = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "input", 149);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_15_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.pinCode, $event) || (ctx_r2.newArea.pinCode = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "input", 150);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_19_Template_input_ngModelChange_16_listener($event) {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.newArea.notes, $event) || (ctx_r2.newArea.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 151);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_19_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r25);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.addServiceArea());
    });
    \u0275\u0275elementStart(18, "mat-icon");
    \u0275\u0275text(19, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AdminUsersComponent_ng_container_19_div_21_Template, 2, 1, "div", 152);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdminUsersComponent_ng_container_19_div_22_Template, 4, 0, "div", 76)(23, AdminUsersComponent_ng_container_19_div_23_Template, 3, 2, "div", 153);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ctx_r2.serviceAreas.length);
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
    \u0275\u0275property("ngIf", ctx_r2.isLoadingAreas);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.isLoadingAreas);
  }
}
function AdminUsersComponent_ng_container_20_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 179)(1, "mat-icon");
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
    \u0275\u0275elementStart(0, "div", 180)(1, "mat-icon");
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
    \u0275\u0275elementStart(0, "div", 87);
    \u0275\u0275element(1, "mat-spinner", 156);
    \u0275\u0275elementStart(2, "span");
    \u0275\u0275text(3, "Loading invitations...");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 197)(1, "mat-icon");
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Used ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 198)(1, "mat-icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Pending ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 199)(1, "mat-icon");
    \u0275\u0275text(2, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " Expired ");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 200);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invitation_r29 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", invitation_r29.daysUntilExpiry, " days");
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 201);
    \u0275\u0275text(1, "Expired");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 202);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const invitation_r29 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r2.formatDate(invitation_r29.usedAt));
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 203);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_div_24_tr_15_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r30);
      const invitation_r29 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.resendInvitation(invitation_r29.id));
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
    \u0275\u0275elementStart(0, "span", 204);
    \u0275\u0275text(1, "\u2014");
    \u0275\u0275elementEnd();
  }
}
function AdminUsersComponent_ng_container_20_div_24_tr_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr")(1, "td", 184);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "td", 185);
    \u0275\u0275template(4, AdminUsersComponent_ng_container_20_div_24_tr_15_span_4_Template, 4, 0, "span", 186)(5, AdminUsersComponent_ng_container_20_div_24_tr_15_span_5_Template, 4, 0, "span", 187)(6, AdminUsersComponent_ng_container_20_div_24_tr_15_span_6_Template, 4, 0, "span", 188);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "td", 189);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "td", 190);
    \u0275\u0275template(10, AdminUsersComponent_ng_container_20_div_24_tr_15_span_10_Template, 2, 1, "span", 191)(11, AdminUsersComponent_ng_container_20_div_24_tr_15_span_11_Template, 2, 0, "span", 192)(12, AdminUsersComponent_ng_container_20_div_24_tr_15_span_12_Template, 2, 1, "span", 193);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "td", 194);
    \u0275\u0275template(14, AdminUsersComponent_ng_container_20_div_24_tr_15_button_14_Template, 4, 0, "button", 195)(15, AdminUsersComponent_ng_container_20_div_24_tr_15_span_15_Template, 2, 0, "span", 196);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const invitation_r29 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("expired", invitation_r29.isExpired);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(invitation_r29.email);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", invitation_r29.isUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !invitation_r29.isUsed && !invitation_r29.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !invitation_r29.isUsed && invitation_r29.isExpired);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.formatDate(invitation_r29.createdAt));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !invitation_r29.isExpired && !invitation_r29.isUsed);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r29.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r29.isUsed);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !invitation_r29.isUsed && !invitation_r29.isExpired);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", invitation_r29.isUsed || invitation_r29.isExpired);
  }
}
function AdminUsersComponent_ng_container_20_div_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 181)(1, "table", 182)(2, "thead")(3, "tr")(4, "th");
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
    \u0275\u0275template(15, AdminUsersComponent_ng_container_20_div_24_tr_15_Template, 16, 12, "tr", 183);
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
    \u0275\u0275elementStart(0, "div", 101)(1, "mat-icon");
    \u0275\u0275text(2, "inbox");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No invitations sent yet");
    \u0275\u0275elementEnd()();
  }
}
function AdminUsersComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 141)(2, "div", 142)(3, "mat-icon");
    \u0275\u0275text(4, "person_add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Invite Admin");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 170)(8, "h3");
    \u0275\u0275text(9, "Send Invitation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 171);
    \u0275\u0275text(11, "Enter the email address of the person you want to invite as a platform administrator. They will receive an invitation link valid for 7 days.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 172)(13, "input", 173);
    \u0275\u0275twoWayListener("ngModelChange", function AdminUsersComponent_ng_container_20_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r2.inviteEmail, $event) || (ctx_r2.inviteEmail = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keyup.enter", function AdminUsersComponent_ng_container_20_Template_input_keyup_enter_13_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendInviteInline());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "button", 174);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_20_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r28);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sendInviteInline());
    });
    \u0275\u0275elementStart(15, "mat-icon");
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275text(17);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(18, AdminUsersComponent_ng_container_20_div_18_Template, 4, 1, "div", 175)(19, AdminUsersComponent_ng_container_20_div_19_Template, 4, 1, "div", 176);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 177)(21, "h3");
    \u0275\u0275text(22, "Pending Invitations");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, AdminUsersComponent_ng_container_20_div_23_Template, 4, 0, "div", 76)(24, AdminUsersComponent_ng_container_20_div_24_Template, 16, 1, "div", 178)(25, AdminUsersComponent_ng_container_20_div_25_Template, 5, 0, "div", 78);
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
    \u0275\u0275elementStart(0, "div", 220)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 216);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 217);
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
    const _r32 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 212)(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Pros Geocode Complete ");
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_div_22_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r32);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.proBackfillResult = null);
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 214)(9, "div", 215)(10, "span", 216);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 217);
    \u0275\u0275text(13, "Found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 218)(15, "mat-icon");
    \u0275\u0275text(16, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 216);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 217);
    \u0275\u0275text(20, "Updated");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AdminUsersComponent_ng_container_21_div_22_div_21_Template, 7, 1, "div", 219);
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
    \u0275\u0275elementStart(0, "div", 220)(1, "mat-icon");
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 216);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 217);
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
    const _r33 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 211)(1, "div", 212)(2, "mat-icon");
    \u0275\u0275text(3, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4, " Users Geocode Complete ");
    \u0275\u0275elementStart(5, "button", 213);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_div_35_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r33);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.userBackfillResult = null);
    });
    \u0275\u0275elementStart(6, "mat-icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 214)(9, "div", 215)(10, "span", 216);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "span", 217);
    \u0275\u0275text(13, "Found");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 218)(15, "mat-icon");
    \u0275\u0275text(16, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span", 216);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "span", 217);
    \u0275\u0275text(20, "Updated");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(21, AdminUsersComponent_ng_container_21_div_35_div_21_Template, 7, 1, "div", 219);
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
    const _r31 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 141)(2, "div", 142)(3, "mat-icon");
    \u0275\u0275text(4, "my_location");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "h2");
    \u0275\u0275text(6, "Geocode Backfill");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "p", 205);
    \u0275\u0275text(8, "Set latitude/longitude coordinates for accounts that are missing map data. Coordinates are looked up from their registered address via the Nominatim API.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 206)(10, "div", 207)(11, "div", 208)(12, "mat-icon");
    \u0275\u0275text(13, "engineering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "h3");
    \u0275\u0275text(15, "Professionals");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17, "Find and geocode all pro accounts that have an address but no coordinates.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "button", 209);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_Template_button_click_18_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.runGeocodeBackfillPros());
    });
    \u0275\u0275elementStart(19, "mat-icon");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd();
    \u0275\u0275text(21);
    \u0275\u0275elementEnd();
    \u0275\u0275template(22, AdminUsersComponent_ng_container_21_div_22_Template, 22, 3, "div", 210);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 207)(24, "div", 208)(25, "mat-icon");
    \u0275\u0275text(26, "person_pin_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "h3");
    \u0275\u0275text(28, "Users");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "p");
    \u0275\u0275text(30, "Find and geocode all user accounts that have an address but no coordinates.");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "button", 209);
    \u0275\u0275listener("click", function AdminUsersComponent_ng_container_21_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r31);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.runGeocodeBackfillUsers());
    });
    \u0275\u0275elementStart(32, "mat-icon");
    \u0275\u0275text(33);
    \u0275\u0275elementEnd();
    \u0275\u0275text(34);
    \u0275\u0275elementEnd();
    \u0275\u0275template(35, AdminUsersComponent_ng_container_21_div_35_Template, 22, 3, "div", 210);
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
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBackfillingPros ? "Geocoding Pros..." : "Run Geocode \u2014 Pros", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.proBackfillResult);
    \u0275\u0275advance(9);
    \u0275\u0275property("disabled", ctx_r2.isBackfillingUsers);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isBackfillingUsers ? "hourglass_empty" : "person_pin_circle");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.isBackfillingUsers ? "Geocoding Users..." : "Run Geocode \u2014 Users", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.userBackfillResult);
  }
}
var AdminUsersComponent = class _AdminUsersComponent {
  adminUsersService;
  auth;
  cdr;
  router;
  dialog;
  proUsersService;
  snack;
  serviceAreaService;
  bottomSheet;
  // ── Navigation ────────────────────────────────────────────────────────────
  activeView = "search";
  showToolsMenu = false;
  navItems = [
    { id: "search", label: "User / Pro Search", icon: "manage_search" },
    { id: "service-areas", label: "Service Areas", icon: "location_on" },
    { id: "invite-admin", label: "Invite Admin", icon: "person_add" },
    { id: "geocode", label: "Geocode", icon: "my_location" }
  ];
  setView(view) {
    this.activeView = view;
    this.showToolsMenu = false;
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
  // ── Disputes ──────────────────────────────────────────────────────────────
  disputes = [];
  isLoadingDisputes = false;
  resolvingDisputeId = null;
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
  constructor(adminUsersService, auth, cdr, router, dialog, proUsersService, snack, serviceAreaService, bottomSheet) {
    this.adminUsersService = adminUsersService;
    this.auth = auth;
    this.cdr = cdr;
    this.router = router;
    this.dialog = dialog;
    this.proUsersService = proUsersService;
    this.snack = snack;
    this.serviceAreaService = serviceAreaService;
    this.bottomSheet = bottomSheet;
  }
  ngOnInit() {
    if (this.auth.getUserType() !== "Admin") {
      this.router.navigate(["/"]);
      return;
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
  resolveDispute(jobId, resolution) {
    this.resolvingDisputeId = jobId;
    this.adminUsersService.resolveDispute(jobId, resolution).subscribe({
      next: (result) => {
        this.disputes = this.disputes.filter((d) => d.jobId !== jobId);
        this.resolvingDisputeId = null;
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
    this.loadUserDetails(user.id);
    this.loadRelationships("user", user.id);
  }
  selectPro(pro) {
    this.selectedPro = pro;
    this.selectedUser = null;
    this.linkedUsers = [];
    this.linkedPros = [];
    this.addUserId = null;
    this.loadProDetails(pro.id);
    this.loadRelationships("pro", pro.id);
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
    this.serviceAreaService.add({
      country: this.newArea.country.trim(),
      state: this.newArea.state.trim() || void 0,
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
  static \u0275fac = function AdminUsersComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminUsersComponent)(\u0275\u0275directiveInject(AdminUsersService), \u0275\u0275directiveInject(Auth), \u0275\u0275directiveInject(ChangeDetectorRef), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ProUsersService), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ServiceAreaService), \u0275\u0275directiveInject(MatBottomSheet));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminUsersComponent, selectors: [["app-admin-users"]], decls: 22, vars: 11, consts: [[1, "admin-users-container", 3, "click"], [1, "admin-header"], [1, "header-top"], [1, "tools-dropdown", 3, "click"], [1, "tools-trigger", 3, "click"], [1, "chevron-icon"], ["class", "tools-menu", 4, "ngIf"], ["class", "disputes-banner", 4, "ngIf"], [1, "admin-panel-area", 3, "ngSwitch"], [4, "ngSwitchCase"], [1, "tools-menu"], ["class", "tools-menu-item", 3, "active", "click", 4, "ngFor", "ngForOf"], [1, "tools-menu-item", 3, "click"], [1, "disputes-banner"], [1, "disputes-banner-title"], ["class", "dispute-count", 4, "ngIf"], ["class", "disputes-loading", 4, "ngIf"], ["class", "disputes-list", 4, "ngIf"], [1, "dispute-count"], [1, "disputes-loading"], ["diameter", "24"], [1, "disputes-list"], ["class", "dispute-card", 4, "ngFor", "ngForOf"], [1, "dispute-card"], [1, "dispute-card-header"], [1, "dispute-job-title"], [1, "dispute-date"], [1, "dispute-parties"], [1, "dispute-reason"], ["class", "dispute-completion-notes", 4, "ngIf"], [1, "dispute-actions"], ["mat-raised-button", "", "color", "accent", "title", "Mark the job as Completed in favour of the professional", 3, "click", "disabled"], ["mat-raised-button", "", "color", "warn", "title", "Reopen the job for rebidding in favour of the consumer", 3, "click", "disabled"], [1, "dispute-completion-notes"], [1, "panel-search-layout"], [1, "search-section"], [1, "search-form"], [1, "search-controls"], [1, "search-input-group"], ["type", "text", "name", "searchQuery", "placeholder", "Search by email or name...", 1, "search-input", 3, "ngModelChange", "keyup.enter", "ngModel"], ["type", "button", 1, "search-btn", 3, "click", "disabled"], [1, "search-type"], ["type", "button", 1, "type-btn", 3, "click"], ["class", "search-results", 4, "ngIf"], ["class", "details-section", 4, "ngIf"], ["class", "empty-state", 4, "ngIf"], [1, "search-results"], [1, "results-list"], ["class", "results-group", 4, "ngIf"], [1, "results-group"], ["class", "user-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "user-item", 3, "click"], [1, "user-info"], [1, "user-name"], [1, "user-email"], [1, "user-meta"], ["class", "badge badge-verified", 4, "ngIf"], [1, "user-date"], [1, "badge", "badge-verified"], ["class", "pro-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "pro-item", 3, "click"], [1, "pro-info"], [1, "pro-name"], [1, "pro-business"], [1, "pro-email"], [1, "pro-meta"], [1, "pro-date"], [1, "details-section"], [1, "details-header"], [4, "ngIf"], [1, "impersonate-btn", 3, "click"], [1, "clear-btn", 3, "click"], [1, "details-tabs"], ["mat-tab-label", ""], [1, "tab-content"], ["class", "profile-details", 4, "ngIf"], ["class", "loading", 4, "ngIf"], ["class", "jobs-list", 4, "ngIf"], ["class", "no-data", 4, "ngIf"], ["class", "chat-section", 4, "ngIf"], [1, "profile-details"], [1, "detail-row"], ["title", "Edit service radius", 1, "inline-edit-btn", 3, "click"], ["type", "number", "min", "1", "max", "500", 1, "radius-input", 3, "ngModelChange", "ngModel"], [1, "radius-unit"], [1, "inline-save-btn", 3, "click"], [1, "inline-cancel-btn", 3, "click"], [1, "loading"], ["diameter", "40"], [1, "jobs-list"], ["class", "job-card", 3, "job-in-progress", 4, "ngFor", "ngForOf"], [1, "job-card"], [1, "job-header"], [1, "job-title-section"], ["class", "bid-badge", 4, "ngIf"], [1, "status-badge", 3, "ngClass"], [1, "job-details"], ["class", "job-description", 4, "ngIf"], [1, "job-dates"], [1, "bid-badge"], [1, "job-description"], [1, "no-data"], [1, "chat-section"], [1, "conversations-panel"], ["class", "conversations-list", 4, "ngIf"], ["class", "no-conversations", 4, "ngIf"], ["class", "messages-panel", 4, "ngIf"], ["class", "no-conversation-selected", 4, "ngIf"], [1, "conversations-list"], ["class", "conversation-item", 3, "selected", "click", 4, "ngFor", "ngForOf"], [1, "conversation-item", 3, "click"], [1, "conversation-info"], [1, "conversation-name"], [1, "conversation-meta"], ["class", "conversation-time", 4, "ngIf"], [1, "conversation-time"], [1, "no-conversations"], [1, "messages-panel"], [1, "messages-list"], ["class", "message", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "message", 3, "ngClass"], [1, "message-sender"], [1, "message-content"], [1, "message-time"], ["class", "message-status", 4, "ngIf"], [1, "message-status"], [1, "no-conversation-selected"], [1, "rel-add-row"], ["appearance", "outline", 1, "rel-input"], ["matInput", "", "type", "number", "placeholder", "User ID", "name", "addUserId", 3, "ngModelChange", "ngModel"], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], ["class", "rel-list", 4, "ngIf"], ["diameter", "36"], [1, "rel-list"], ["class", "rel-item", 4, "ngFor", "ngForOf"], [1, "rel-item"], [1, "rel-info"], [1, "rel-name"], [1, "rel-email"], ["mat-icon-button", "", "color", "warn", "title", "Remove", 3, "click"], [1, "empty-state"], [1, "panel-card"], [1, "panel-card-header"], ["class", "panel-count", 4, "ngIf"], [1, "add-area-form"], [1, "area-form-row"], ["type", "text", "placeholder", "Country *", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "State (optional)", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "District (optional)", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "PIN Code (optional)", 1, "area-input", 3, "ngModelChange", "ngModel"], ["type", "text", "placeholder", "Notes (optional)", 1, "area-input", "area-input-notes", 3, "ngModelChange", "ngModel"], [1, "add-area-btn", 3, "click", "disabled"], ["class", "area-error", 4, "ngIf"], ["class", "areas-table-wrap", 4, "ngIf"], [1, "panel-count"], [1, "area-error"], ["diameter", "32"], [1, "areas-table-wrap"], ["class", "areas-table", 4, "ngIf"], [1, "areas-table"], [3, "area-row-inactive", 4, "ngFor", "ngForOf"], [1, "area-badge"], ["class", "auto-badge", "title", "Auto-enrolled during pro registration", 4, "ngIf"], ["class", "manual-badge", 4, "ngIf"], [1, "notes-cell"], [1, "area-actions"], [1, "area-action-btn", "toggle-btn", 3, "click", "title"], ["title", "Delete area", 1, "area-action-btn", "delete-btn", 3, "click"], ["title", "Auto-enrolled during pro registration", 1, "auto-badge"], [1, "manual-badge"], [1, "invite-form-section"], [1, "invite-description"], [1, "invite-form-row"], ["type", "email", "placeholder", "admin@example.com", 1, "invite-input", 3, "ngModelChange", "keyup.enter", "ngModel"], [1, "invite-send-btn", 3, "click", "disabled"], ["class", "invite-success", 4, "ngIf"], ["class", "invite-error", 4, "ngIf"], [1, "invitations-section"], ["class", "invitations-table", 4, "ngIf"], [1, "invite-success"], [1, "invite-error"], [1, "invitations-table"], [1, "invitations-list"], [3, "expired", 4, "ngFor", "ngForOf"], ["data-label", "Email"], ["data-label", "Status"], ["class", "badge badge-used", 4, "ngIf"], ["class", "badge badge-pending", 4, "ngIf"], ["class", "badge badge-expired", 4, "ngIf"], ["data-label", "Created"], ["data-label", "Expires"], ["class", "expires", 4, "ngIf"], ["class", "expired-text", 4, "ngIf"], ["class", "used-text", 4, "ngIf"], ["data-label", "Actions"], ["class", "action-btn resend-btn", "title", "Resend invitation email", 3, "click", 4, "ngIf"], ["class", "action-disabled", 4, "ngIf"], [1, "badge", "badge-used"], [1, "badge", "badge-pending"], [1, "badge", "badge-expired"], [1, "expires"], [1, "expired-text"], [1, "used-text"], ["title", "Resend invitation email", 1, "action-btn", "resend-btn", 3, "click"], [1, "action-disabled"], [1, "panel-description"], [1, "geocode-grid"], [1, "geocode-item"], [1, "geocode-item-header"], [1, "geocode-run-btn", 3, "click", "disabled"], ["class", "geocode-result", 4, "ngIf"], [1, "geocode-result"], [1, "geocode-result-title"], [1, "dismiss-btn", 3, "click"], [1, "geocode-stats"], [1, "geocode-stat"], [1, "stat-value"], [1, "stat-label"], [1, "geocode-stat", "stat-updated"], ["class", "geocode-stat stat-failed", 4, "ngIf"], [1, "geocode-stat", "stat-failed"]], template: function AdminUsersComponent_Template(rf, ctx) {
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
      \u0275\u0275template(18, AdminUsersComponent_ng_container_18_Template, 23, 11, "ng-container", 9)(19, AdminUsersComponent_ng_container_19_Template, 24, 11, "ng-container", 9)(20, AdminUsersComponent_ng_container_20_Template, 26, 9, "ng-container", 9)(21, AdminUsersComponent_ng_container_21_Template, 36, 8, "ng-container", 9);
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
    DefaultValueAccessor,
    NumberValueAccessor,
    NgControlStatus,
    NgControlStatusGroup,
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
    DatePipe
  ], styles: ['\n\n.admin-users-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.admin-header[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 100;\n}\n.admin-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.tools-dropdown[_ngcontent-%COMP%] {\n  position: relative;\n}\n.tools-trigger[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  padding: 0.6rem 1.1rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.tools-trigger[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.tools-trigger[_ngcontent-%COMP%]   .chevron-icon[_ngcontent-%COMP%] {\n  transition: transform 0.2s;\n  opacity: 0.8;\n}\n.tools-trigger[_ngcontent-%COMP%]   .chevron-icon.rotated[_ngcontent-%COMP%] {\n  transform: rotate(180deg);\n}\n.tools-trigger[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.55);\n}\n.tools-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  min-width: 210px;\n  z-index: 200;\n  animation: _ngcontent-%COMP%_menuSlide 0.15s ease;\n}\n@keyframes _ngcontent-%COMP%_menuSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tools-menu-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.85rem 1.25rem;\n  background: none;\n  border: none;\n  color: #333;\n  font-size: 0.92rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.tools-menu-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: #667eea;\n}\n.tools-menu-item[_ngcontent-%COMP%]:hover {\n  background: #f5f6fa;\n}\n.tools-menu-item.active[_ngcontent-%COMP%] {\n  background: #eef0fd;\n  color: #667eea;\n  font-weight: 700;\n}\n.tools-menu-item.active[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.tools-menu-item[_ngcontent-%COMP%]    + .tools-menu-item[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n}\n.disputes-banner[_ngcontent-%COMP%] {\n  background: #fff8f8;\n  border-bottom: 3px solid #ef9a9a;\n  padding: 1rem 2rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #c62828;\n  margin-bottom: 0.75rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-banner-title[_ngcontent-%COMP%]   .dispute-count[_ngcontent-%COMP%] {\n  background: #c62828;\n  color: white;\n  border-radius: 12px;\n  padding: 1px 8px;\n  font-size: 0.78rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #888;\n  font-size: 0.9rem;\n}\n.disputes-banner[_ngcontent-%COMP%]   .disputes-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.dispute-card[_ngcontent-%COMP%] {\n  background: white;\n  border: 1px solid #ef9a9a;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.4rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%]   .dispute-job-title[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-card-header[_ngcontent-%COMP%]   .dispute-date[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.4rem;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-parties[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-reason[_ngcontent-%COMP%], \n.dispute-card[_ngcontent-%COMP%]   .dispute-completion-notes[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #444;\n  margin: 0.2rem 0;\n}\n.dispute-card[_ngcontent-%COMP%]   .dispute-actions[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n.admin-panel-area[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 1.75rem 2rem;\n  overflow-y: auto;\n}\n.panel-search-layout[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 1024px) {\n  .panel-search-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.search-section[_ngcontent-%COMP%] {\n  flex: 0 0 340px;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: calc(100vh - 180px);\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .search-section[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n    max-height: none;\n  }\n}\n.search-controls[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.search-input-group[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%] {\n  flex: 1;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  padding: 0.7rem 1.1rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 500;\n  font-size: 0.88rem;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5568d3;\n}\n.search-input-group[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-type[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.75rem;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  background: white;\n  color: #666;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.search-type[_ngcontent-%COMP%]   .type-btn.active[_ngcontent-%COMP%] {\n  background: #667eea;\n  border-color: #667eea;\n  color: white;\n  font-weight: 600;\n}\n.search-results[_ngcontent-%COMP%]   .results-group[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.search-results[_ngcontent-%COMP%]   .results-group[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.85rem;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 0.4rem;\n  font-weight: 700;\n}\n.user-item[_ngcontent-%COMP%], \n.pro-item[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  margin-bottom: 0.6rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.user-item[_ngcontent-%COMP%]:hover, \n.pro-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.12);\n}\n.user-item.selected[_ngcontent-%COMP%], \n.pro-item.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.user-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-name[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  margin-bottom: 0.2rem;\n  font-size: 0.95rem;\n}\n.user-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-email[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-email[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-email[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-business[_ngcontent-%COMP%] {\n  font-size: 0.83rem;\n  color: #666;\n  margin-bottom: 0.35rem;\n}\n.user-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.user-info[_ngcontent-%COMP%]   .pro-meta[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .user-meta[_ngcontent-%COMP%], \n.pro-info[_ngcontent-%COMP%]   .pro-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  color: #999;\n}\n.user-date[_ngcontent-%COMP%], \n.pro-date[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.details-section[_ngcontent-%COMP%] {\n  flex: 1;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n@media (max-width: 1024px) {\n  .details-section[_ngcontent-%COMP%] {\n    flex: none;\n  }\n}\n.details-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e8e8e8;\n}\n.details-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  flex: 1;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%], \n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  padding: 0.45rem 0.875rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 500;\n  font-size: 0.87rem;\n  transition: all 0.2s;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%] {\n  background: #4caf50;\n  color: white;\n}\n.details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%]:hover {\n  background: #43a047;\n}\n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n  color: #555;\n}\n.details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%]:hover {\n  background: #e0e0e0;\n}\n.details-tabs[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow: auto;\n}\n.details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n  min-width: 100px !important;\n}\n.tab-content[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 320px);\n}\n.profile-details[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f5f5f5;\n  gap: 0.5rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #444;\n  min-width: 130px;\n  font-size: 0.9rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #666;\n  text-align: right;\n  font-size: 0.9rem;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  vertical-align: middle;\n}\n.profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]   mat-icon.verified[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.inline-edit-btn[_ngcontent-%COMP%], \n.inline-save-btn[_ngcontent-%COMP%], \n.inline-cancel-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.2rem 0.4rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  margin-left: 0.4rem;\n  transition: background 0.15s;\n}\n.inline-edit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.inline-save-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.inline-cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.inline-edit-btn[_ngcontent-%COMP%]:hover, \n.inline-save-btn[_ngcontent-%COMP%]:hover, \n.inline-cancel-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.inline-save-btn[_ngcontent-%COMP%] {\n  border-color: #4caf50;\n}\n.inline-save-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.inline-cancel-btn[_ngcontent-%COMP%] {\n  border-color: #e53935;\n}\n.inline-cancel-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.radius-input[_ngcontent-%COMP%] {\n  width: 70px;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  margin-left: 0.4rem;\n}\n.radius-unit[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #666;\n  margin-left: 0.25rem;\n}\n.jobs-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%] {\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #fafafa;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  color: #333;\n  font-size: 0.95rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-pending[_ngcontent-%COMP%] {\n  background: #fff3cd;\n  color: #856404;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-in-progress[_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge[class*="In Progress"][_ngcontent-%COMP%] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-completed[_ngcontent-%COMP%] {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-header[_ngcontent-%COMP%]   .status-badge.status-cancelled[_ngcontent-%COMP%] {\n  background: #f8d7da;\n  color: #842029;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .bid-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.45rem;\n  background: #fff3cd;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 0.73rem;\n  font-weight: 500;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-title-section[_ngcontent-%COMP%]   .bid-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 0.4rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: #444;\n  margin-right: 0.4rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%] {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #eee;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  display: block;\n  color: #444;\n  margin-bottom: 0.35rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  line-height: 1.4;\n  max-height: 80px;\n  overflow-y: auto;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card[_ngcontent-%COMP%]   .job-details[_ngcontent-%COMP%]   .job-dates[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.25rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #eee;\n  font-size: 0.83rem;\n}\n.jobs-list[_ngcontent-%COMP%]   .job-card.job-in-progress[_ngcontent-%COMP%] {\n  border-left: 4px solid #2196f3;\n  background: #f0f8ff;\n}\n.chat-section[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%] {\n  flex: 0 0 220px;\n  border-right: 1px solid #e8e8e8;\n  padding-right: 1rem;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.6rem;\n  font-size: 0.9rem;\n  color: #444;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   .conversations-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%]   .no-conversations[_ngcontent-%COMP%] {\n  text-align: center;\n  color: #aaa;\n  padding: 1.5rem 0;\n  font-size: 0.88rem;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #444;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 0.5rem;\n  font-weight: 700;\n}\n.chat-section[_ngcontent-%COMP%]   .messages-panel[_ngcontent-%COMP%]   .messages-list[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.chat-section[_ngcontent-%COMP%]   .no-conversation-selected[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  font-size: 0.9rem;\n}\n.conversation-item[_ngcontent-%COMP%] {\n  padding: 0.65rem 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.conversation-item[_ngcontent-%COMP%]:hover {\n  border-color: #667eea;\n  background: #f9f9f9;\n}\n.conversation-item.selected[_ngcontent-%COMP%] {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-name[_ngcontent-%COMP%] {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.88rem;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #aaa;\n}\n.conversation-item[_ngcontent-%COMP%]   .conversation-time[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #bbb;\n  margin-top: 0.2rem;\n}\n.message[_ngcontent-%COMP%] {\n  padding: 0.65rem;\n  border-radius: 6px;\n  background: #f5f5f5;\n}\n.message.message-user[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  margin-left: 2rem;\n}\n.message.message-pro[_ngcontent-%COMP%] {\n  background: #f3e5f5;\n  margin-right: 2rem;\n}\n.message[_ngcontent-%COMP%]   .message-sender[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.2rem;\n}\n.message[_ngcontent-%COMP%]   .message-content[_ngcontent-%COMP%] {\n  color: #333;\n  margin-bottom: 0.35rem;\n  word-wrap: break-word;\n  font-size: 0.9rem;\n}\n.message[_ngcontent-%COMP%]   .message-time[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #bbb;\n}\n.message[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: #4caf50;\n  margin-top: 0.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.message[_ngcontent-%COMP%]   .message-status[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.rel-add-row[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rel-add-row[_ngcontent-%COMP%]   .rel-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 200px;\n}\n.rel-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rel-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.rel-item[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rel-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.rel-info[_ngcontent-%COMP%]   .rel-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.rel-info[_ngcontent-%COMP%]   .rel-email[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #777;\n}\n.panel-card[_ngcontent-%COMP%] {\n  background: white;\n  border-radius: 10px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.panel-card-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.75rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f0f0f0;\n}\n.panel-card-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #667eea;\n}\n.panel-card-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  font-weight: 700;\n}\n.panel-card-header[_ngcontent-%COMP%]   .panel-count[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  color: #888;\n  font-weight: 400;\n}\n.panel-description[_ngcontent-%COMP%] {\n  color: #666;\n  font-size: 0.92rem;\n  margin: -1rem 0 1.5rem;\n  line-height: 1.5;\n}\n.add-area-form[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.add-area-form[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #555;\n}\n.area-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n.area-input[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 120px;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.area-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n}\n.area-input.area-input-notes[_ngcontent-%COMP%] {\n  min-width: 180px;\n}\n.add-area-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.5rem 1.1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  white-space: nowrap;\n}\n.add-area-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.add-area-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.area-error[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  color: #c62828;\n  font-size: 0.83rem;\n}\n.areas-table-wrap[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.areas-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.areas-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 0.6rem 0.75rem;\n  background: #f5f6fa;\n  color: #555;\n  font-weight: 600;\n  border-bottom: 2px solid #e0e0e0;\n  white-space: nowrap;\n}\n.areas-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.areas-table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:last-child   td[_ngcontent-%COMP%] {\n  border-bottom: none;\n}\n.areas-table[_ngcontent-%COMP%]   .area-row-inactive[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  opacity: 0.55;\n}\n.area-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 12px;\n}\n.area-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.area-badge.area-badge-active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.area-badge.area-badge-inactive[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.auto-badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #f57c00;\n}\n.auto-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.manual-badge[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #999;\n}\n.notes-cell[_ngcontent-%COMP%] {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #777;\n}\n.area-actions[_ngcontent-%COMP%] {\n  white-space: nowrap;\n}\n.area-action-btn[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 4px;\n  transition: background 0.15s;\n  display: inline-flex;\n  align-items: center;\n}\n.area-action-btn[_ngcontent-%COMP%]:hover {\n  background: #f0f0f0;\n}\n.area-action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.area-action-btn.toggle-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #667eea;\n}\n.area-action-btn.delete-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #e53935;\n}\n.invite-form-section[_ngcontent-%COMP%] {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.invite-form-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.invite-form-section[_ngcontent-%COMP%]   .invite-description[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\n.invite-form-row[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%] {\n  flex: 1;\n  max-width: 380px;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%]:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.invite-send-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.invite-send-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-send-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.invite-success[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.invite-success[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #c62828;\n  font-size: 0.9rem;\n}\n.invite-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invitations-section[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .geocode-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n.geocode-item[_ngcontent-%COMP%] {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n.geocode-item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0.25rem 0 1rem;\n  line-height: 1.5;\n}\n.geocode-item-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.5rem;\n}\n.geocode-item-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #667eea;\n}\n.geocode-item-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-run-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1.25rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.geocode-run-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-run-btn[_ngcontent-%COMP%]:hover:not(:disabled) {\n  background: #5568d3;\n}\n.geocode-run-btn[_ngcontent-%COMP%]:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.geocode-result[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #2e7d32;\n  margin-bottom: 0.75rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%] {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #aaa;\n  padding: 0.15rem;\n  border-radius: 4px;\n  transition: color 0.15s;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]:hover {\n  color: #555;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-result-title[_ngcontent-%COMP%]   .dismiss-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stats[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: #f5f5f5;\n  border-radius: 6px;\n  padding: 0.4rem 0.75rem;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n  color: #888;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: #777;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat.stat-updated[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #4caf50;\n}\n.geocode-result[_ngcontent-%COMP%]   .geocode-stat.stat-failed[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: #ff9800;\n}\n.badge[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.badge.badge-pending[_ngcontent-%COMP%] {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge.badge-used[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-expired[_ngcontent-%COMP%] {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge.badge-verified[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.expires[_ngcontent-%COMP%] {\n  color: #666;\n  font-weight: 500;\n}\n.expired-text[_ngcontent-%COMP%] {\n  color: #d32f2f;\n  font-weight: 500;\n}\n.used-text[_ngcontent-%COMP%] {\n  color: #388e3c;\n  font-weight: 500;\n}\n.action-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.875rem;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.83rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.action-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.action-btn.resend-btn[_ngcontent-%COMP%] {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.action-btn.resend-btn[_ngcontent-%COMP%]:hover {\n  background: #bbdefb;\n}\n.action-disabled[_ngcontent-%COMP%] {\n  color: #ccc;\n}\n.loading[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 2rem;\n  color: #777;\n  font-size: 0.9rem;\n}\n.no-data[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem 1rem;\n  color: #bbb;\n}\n.no-data[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 2.75rem;\n  width: 2.75rem;\n  height: 2.75rem;\n  opacity: 0.5;\n}\n.no-data[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  margin: 0;\n  color: #aaa;\n}\n.empty-state[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  color: #bbb;\n}\n.empty-state[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  opacity: 0.25;\n}\n.empty-state[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #888;\n}\n.empty-state[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0.25rem 0 0;\n  max-width: 280px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.invitations-table[_ngcontent-%COMP%] {\n  overflow-x: auto;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%] {\n  width: 100%;\n  border-collapse: collapse;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n  background: #f5f6fa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #444;\n  font-size: 0.83rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.875rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: #555;\n  font-size: 0.9rem;\n  vertical-align: middle;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  transition: background 0.15s;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:hover {\n  background: #fafafa;\n}\n.invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr.expired[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .admin-header[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   .header-top[_ngcontent-%COMP%] {\n    gap: 0.75rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    gap: 0.5rem;\n  }\n  .admin-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n    font-size: 1.3rem;\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .tools-trigger[_ngcontent-%COMP%] {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.85rem;\n  }\n  .tools-trigger[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .disputes-banner[_ngcontent-%COMP%] {\n    padding: 0.875rem 1rem;\n  }\n  .admin-panel-area[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .panel-card[_ngcontent-%COMP%] {\n    padding: 1.25rem 1rem;\n  }\n  .panel-search-layout[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .search-section[_ngcontent-%COMP%] {\n    flex: none;\n    width: 100%;\n    max-height: none;\n    padding: 1rem;\n  }\n  .details-section[_ngcontent-%COMP%] {\n    padding: 1rem;\n  }\n  .details-header[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .details-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.1rem;\n    flex: 1 1 100%;\n  }\n  .details-header[_ngcontent-%COMP%]   .impersonate-btn[_ngcontent-%COMP%], \n   .details-header[_ngcontent-%COMP%]   .clear-btn[_ngcontent-%COMP%] {\n    flex: 1;\n    justify-content: center;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab {\n    min-width: 0 !important;\n    padding: 0 8px !important;\n    flex-grow: 1;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label {\n    font-size: 0.7rem;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mat-icon {\n    font-size: 0.95rem;\n    width: 0.95rem;\n    height: 0.95rem;\n  }\n  .tab-content[_ngcontent-%COMP%] {\n    padding: 0.75rem;\n    max-height: none;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.15rem;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    min-width: unset;\n  }\n  .profile-details[_ngcontent-%COMP%]   .detail-row[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .chat-section[_ngcontent-%COMP%] {\n    flex-direction: column;\n    height: auto;\n  }\n  .chat-section[_ngcontent-%COMP%]   .conversations-panel[_ngcontent-%COMP%] {\n    flex: none;\n    border-right: none;\n    border-bottom: 1px solid #e8e8e8;\n    padding-right: 0;\n    padding-bottom: 0.75rem;\n    margin-bottom: 0.75rem;\n    max-height: 160px;\n    overflow-y: auto;\n  }\n  .rel-add-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .rel-add-row[_ngcontent-%COMP%]   .rel-input[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .dispute-actions[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .dispute-actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .invite-form-row[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .invite-form-row[_ngcontent-%COMP%]   .invite-input[_ngcontent-%COMP%] {\n    max-width: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n    display: block;\n    border: 1px solid #e8e8e8;\n    border-radius: 8px;\n    margin-bottom: 0.75rem;\n    padding: 0.5rem 0.75rem;\n    background: white;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.4rem 0;\n    border-bottom: 1px solid #f5f5f5;\n    font-size: 0.83rem;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n    border-bottom: none;\n  }\n  .invitations-table[_ngcontent-%COMP%]   .invitations-list[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #555;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n    flex-shrink: 0;\n    margin-right: 0.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mdc-tab__text-label span:not(.mat-icon) {\n    display: none;\n  }\n  .details-tabs[_ngcontent-%COMP%]     .mat-mdc-tab .mat-icon {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=admin-users.css.map */'] });
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
    ], template: `<div class="admin-users-container" (click)="showToolsMenu = false">

  <!-- \u2500\u2500 HEADER \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="admin-header">
    <div class="header-top">
      <h1><mat-icon>admin_panel_settings</mat-icon> Admin Dashboard</h1>

      <div class="tools-dropdown" (click)="$event.stopPropagation()">
        <button class="tools-trigger" (click)="showToolsMenu = !showToolsMenu">
          <mat-icon>{{ getActiveViewIcon() }}</mat-icon>
          <span>{{ getActiveViewLabel() }}</span>
          <mat-icon class="chevron-icon" [class.rotated]="showToolsMenu">expand_more</mat-icon>
        </button>
        <div class="tools-menu" *ngIf="showToolsMenu">
          <button
            *ngFor="let item of navItems"
            class="tools-menu-item"
            [class.active]="activeView === item.id"
            (click)="setView(item.id)">
            <mat-icon>{{ item.icon }}</mat-icon>
            {{ item.label }}
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 DISPUTES BANNER (always visible) \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="disputes-banner" *ngIf="disputes.length > 0 || isLoadingDisputes">
    <div class="disputes-banner-title">
      <mat-icon>flag</mat-icon>
      Open Disputes
      <span class="dispute-count" *ngIf="disputes.length > 0">{{ disputes.length }}</span>
    </div>

    <div *ngIf="isLoadingDisputes" class="disputes-loading">
      <mat-spinner diameter="24"></mat-spinner>
      <span>Loading disputes...</span>
    </div>

    <div class="disputes-list" *ngIf="!isLoadingDisputes">
      <div *ngFor="let d of disputes" class="dispute-card">
        <div class="dispute-card-header">
          <span class="dispute-job-title">{{ d.jobTitle }}</span>
          <span class="dispute-date">{{ d.disputedAt | date:'MMM d, y' }}</span>
        </div>
        <div class="dispute-parties">
          <span><mat-icon>person</mat-icon> Consumer: {{ d.consumer?.name }} ({{ d.consumer?.email }})</span>
          <span><mat-icon>engineering</mat-icon> Pro: {{ d.pro?.businessName || d.pro?.name }} ({{ d.pro?.email }})</span>
        </div>
        <p class="dispute-reason"><strong>Reason:</strong> {{ d.disputeReason }}</p>
        <p *ngIf="d.completionNotes" class="dispute-completion-notes"><strong>Pro notes:</strong> {{ d.completionNotes }}</p>
        <div class="dispute-actions">
          <button
            mat-raised-button color="accent"
            (click)="resolveDispute(d.jobId, 'complete')"
            [disabled]="resolvingDisputeId === d.jobId"
            title="Mark the job as Completed in favour of the professional">
            <mat-icon>check_circle</mat-icon>
            Complete for Pro
          </button>
          <button
            mat-raised-button color="warn"
            (click)="resolveDispute(d.jobId, 'refund')"
            [disabled]="resolvingDisputeId === d.jobId"
            title="Reopen the job for rebidding in favour of the consumer">
            <mat-icon>replay</mat-icon>
            Refund &amp; Reopen
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- \u2500\u2500 PANEL AREA \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 -->
  <div class="admin-panel-area" [ngSwitch]="activeView">

    <!-- \u2550\u2550 SEARCH PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <ng-container *ngSwitchCase="'search'">
      <div class="panel-search-layout">

        <!-- Left: Search -->
        <div class="search-section">
          <form class="search-form">
            <div class="search-controls">
              <div class="search-input-group">
                <input
                  type="text"
                  [(ngModel)]="searchQuery"
                  name="searchQuery"
                  placeholder="Search by email or name..."
                  class="search-input"
                  (keyup.enter)="search()"
                />
                <button type="button" class="search-btn" [disabled]="isSearching || !searchQuery.trim()" (click)="search()">
                  <mat-icon>{{ isSearching ? 'hourglass_empty' : 'search' }}</mat-icon>
                  {{ isSearching ? 'Searching...' : 'Search' }}
                </button>
              </div>
              <div class="search-type">
                <button type="button" class="type-btn" [class.active]="searchType === 'user'" (click)="setSearchType('user')">
                  <mat-icon>person</mat-icon> Users
                </button>
                <button type="button" class="type-btn" [class.active]="searchType === 'pro'" (click)="setSearchType('pro')">
                  <mat-icon>engineering</mat-icon> Professionals
                </button>
              </div>
            </div>
          </form>

          <!-- Results -->
          <div class="search-results" *ngIf="users.length > 0 || pros.length > 0">
            <div class="results-list">
              <div *ngIf="users.length > 0" class="results-group">
                <h3>Users ({{ users.length }})</h3>
                <div class="user-item" *ngFor="let user of users" (click)="selectUser(user)" [class.selected]="selectedUser?.id === user.id">
                  <div class="user-info">
                    <div class="user-name">{{ user.firstName }} {{ user.lastName }}</div>
                    <div class="user-email">{{ user.email }}</div>
                    <div class="user-meta">
                      <span *ngIf="user.isEmailVerified" class="badge badge-verified">
                        <mat-icon>verified</mat-icon> Email Verified
                      </span>
                      <span class="user-date">Joined: {{ formatDate(user.createdAt) }}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div *ngIf="pros.length > 0" class="results-group">
                <h3>Professionals ({{ pros.length }})</h3>
                <div class="pro-item" *ngFor="let pro of pros" (click)="selectPro(pro)" [class.selected]="selectedPro?.id === pro.id">
                  <div class="pro-info">
                    <div class="pro-name">{{ pro.proName }}</div>
                    <div class="pro-business">{{ pro.businessName }}</div>
                    <div class="pro-email">{{ pro.email }}</div>
                    <div class="pro-meta">
                      <span *ngIf="pro.isEmailVerified" class="badge badge-verified">
                        <mat-icon>verified</mat-icon> Email Verified
                      </span>
                      <span class="pro-date">Joined: {{ formatDate(pro.createdAt) }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Details or empty state -->
        <div class="details-section" *ngIf="selectedUser || selectedPro">
          <div class="details-header">
            <h2 *ngIf="selectedUser">{{ selectedUser.firstName }} {{ selectedUser.lastName }}</h2>
            <h2 *ngIf="selectedPro">{{ selectedPro.proName }}</h2>
            <button (click)="impersonate()" class="impersonate-btn">
              <mat-icon>person_add</mat-icon>
              Impersonate
            </button>
            <button (click)="clearSelection()" class="clear-btn">
              <mat-icon>close</mat-icon>
            </button>
          </div>

          <mat-tab-group class="details-tabs">
            <!-- Profile Tab -->
            <mat-tab>
              <ng-template mat-tab-label><mat-icon>person</mat-icon> Profile</ng-template>
              <div class="tab-content">
                <div *ngIf="selectedUser" class="profile-details">
                  <div class="detail-row"><label>Email:</label><span>{{ selectedUser.email }}</span></div>
                  <div class="detail-row"><label>Phone:</label><span>{{ selectedUser.phoneNumber }}</span></div>
                  <div class="detail-row">
                    <label>Email Verified:</label>
                    <span><mat-icon [class.verified]="selectedUser.isEmailVerified">{{ selectedUser.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>
                  </div>
                  <div class="detail-row">
                    <label>Phone Verified:</label>
                    <span><mat-icon [class.verified]="selectedUser.isPhoneVerified">{{ selectedUser.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>
                  </div>
                  <div class="detail-row">
                    <label>Address:</label>
                    <span *ngIf="selectedUser.street1">{{ selectedUser.street1 }}, {{ selectedUser.city }}, {{ selectedUser.state }} {{ selectedUser.zipPostalCode }}</span>
                    <span *ngIf="!selectedUser.street1">Not provided</span>
                  </div>
                  <div class="detail-row"><label>Joined:</label><span>{{ formatDate(selectedUser.createdAt) }}</span></div>
                </div>

                <div *ngIf="selectedPro" class="profile-details">
                  <div class="detail-row"><label>Name:</label><span>{{ selectedPro.proName }}</span></div>
                  <div class="detail-row"><label>Business:</label><span>{{ selectedPro.businessName }}</span></div>
                  <div class="detail-row"><label>Email:</label><span>{{ selectedPro.email }}</span></div>
                  <div class="detail-row"><label>Phone:</label><span>{{ selectedPro.phoneNumber }}</span></div>
                  <div class="detail-row">
                    <label>Email Verified:</label>
                    <span><mat-icon [class.verified]="selectedPro.isEmailVerified">{{ selectedPro.isEmailVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>
                  </div>
                  <div class="detail-row">
                    <label>Phone Verified:</label>
                    <span><mat-icon [class.verified]="selectedPro.isPhoneVerified">{{ selectedPro.isPhoneVerified ? 'check_circle' : 'cancel' }}</mat-icon></span>
                  </div>
                  <div class="detail-row">
                    <label>Address:</label>
                    <span *ngIf="selectedPro.street1">{{ selectedPro.street1 }}, {{ selectedPro.city }}, {{ selectedPro.state }} {{ selectedPro.zipPostalCode }}</span>
                    <span *ngIf="!selectedPro.street1">Not provided</span>
                  </div>
                  <div class="detail-row"><label>Joined:</label><span>{{ formatDate(selectedPro.createdAt) }}</span></div>
                  <div class="detail-row">
                    <label>Service Radius:</label>
                    <ng-container *ngIf="!isEditingRadius">
                      <span>{{ selectedPro.serviceRadiusKm ?? 25 }} km</span>
                      <button class="inline-edit-btn" (click)="startEditRadius()" title="Edit service radius">
                        <mat-icon>edit</mat-icon>
                      </button>
                    </ng-container>
                    <ng-container *ngIf="isEditingRadius">
                      <input type="number" [(ngModel)]="editRadiusValue" min="1" max="500" class="radius-input" />
                      <span class="radius-unit">km</span>
                      <button class="inline-save-btn" (click)="saveRadius()"><mat-icon>check</mat-icon></button>
                      <button class="inline-cancel-btn" (click)="cancelEditRadius()"><mat-icon>close</mat-icon></button>
                    </ng-container>
                  </div>
                </div>
              </div>
            </mat-tab>

            <!-- Job History Tab -->
            <mat-tab>
              <ng-template mat-tab-label><mat-icon>work</mat-icon> Job History</ng-template>
              <div class="tab-content">
                <div *ngIf="isLoadingDetails" class="loading">
                  <mat-spinner diameter="40"></mat-spinner>
                  Loading job history...
                </div>

                <div *ngIf="!isLoadingDetails && selectedUser && userJobs.length > 0" class="jobs-list">
                  <div class="job-card" *ngFor="let job of userJobs" [class.job-in-progress]="job.status === 'In Progress'">
                    <div class="job-header">
                      <div class="job-title-section">
                        <h4>{{ job.title }}</h4>
                        <span *ngIf="job.isBid" class="bid-badge"><mat-icon>local_offer</mat-icon> Bid Job</span>
                      </div>
                      <span class="status-badge" [ngClass]="'status-' + job.status">{{ job.status }}</span>
                    </div>
                    <div class="job-details">
                      <div *ngIf="job.description" class="job-description">
                        <strong>Description:</strong><p>{{ job.description }}</p>
                      </div>
                      <div><strong>Category:</strong> {{ job.category?.name || 'N/A' }}</div>
                      <div><strong>Location:</strong> {{ job.location }}</div>
                      <div><strong>Budget:</strong> {{ job.budget }}</div>
                      <div><strong>Timeline:</strong> {{ job.timeline }}</div>
                      <div><strong>Posted by:</strong> {{ job.userName }}</div>
                      <div *ngIf="job.assignedProId"><strong>Assigned To:</strong> {{ job.assignedProBusinessName }}</div>
                      <div class="job-dates">
                        <span><strong>Created:</strong> {{ formatDate(job.createdAt) }}</span>
                        <span *ngIf="job.updatedAt"><strong>Updated:</strong> {{ formatDate(job.updatedAt) }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div *ngIf="!isLoadingDetails && selectedPro && proJobs.length > 0" class="jobs-list">
                  <div class="job-card" *ngFor="let job of proJobs" [class.job-in-progress]="job.status === 'In Progress'">
                    <div class="job-header">
                      <div class="job-title-section">
                        <h4>{{ job.title }}</h4>
                        <span *ngIf="job.isBid" class="bid-badge"><mat-icon>local_offer</mat-icon> Bid Job</span>
                      </div>
                      <span class="status-badge" [ngClass]="'status-' + job.status">{{ job.status }}</span>
                    </div>
                    <div class="job-details">
                      <div *ngIf="job.description" class="job-description">
                        <strong>Description:</strong><p>{{ job.description }}</p>
                      </div>
                      <div><strong>Category:</strong> {{ job.category?.name || 'N/A' }}</div>
                      <div><strong>Location:</strong> {{ job.location }}</div>
                      <div><strong>Budget:</strong> {{ job.budget }}</div>
                      <div><strong>Timeline:</strong> {{ job.timeline }}</div>
                      <div><strong>Posted by:</strong> {{ job.userName }}</div>
                      <div *ngIf="job.assignedProId"><strong>Assigned To:</strong> {{ job.assignedProBusinessName }}</div>
                      <div class="job-dates">
                        <span><strong>Created:</strong> {{ formatDate(job.createdAt) }}</span>
                        <span *ngIf="job.updatedAt"><strong>Updated:</strong> {{ formatDate(job.updatedAt) }}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div *ngIf="!isLoadingDetails && ((selectedUser && userJobs.length === 0) || (selectedPro && proJobs.length === 0))" class="no-data">
                  <mat-icon>folder_open</mat-icon>
                  <p>No job history found</p>
                </div>
              </div>
            </mat-tab>

            <!-- Chat History Tab -->
            <mat-tab>
              <ng-template mat-tab-label><mat-icon>message</mat-icon> Chat History</ng-template>
              <div class="tab-content">
                <div *ngIf="isLoadingDetails" class="loading">
                  <mat-spinner diameter="40"></mat-spinner>
                  Loading chat history...
                </div>
                <div class="chat-section" *ngIf="!isLoadingDetails">
                  <div class="conversations-panel">
                    <h3>Conversations</h3>
                    <div *ngIf="selectedUser && userConversations.length > 0" class="conversations-list">
                      <div
                        class="conversation-item"
                        *ngFor="let conversation of userConversations"
                        (click)="selectConversation(conversation)"
                        [class.selected]="selectedConversation?.userId === conversation.userId">
                        <div class="conversation-info">
                          <div class="conversation-name">{{ conversation.userName || 'Unknown User' }}</div>
                          <div class="conversation-meta">{{ conversation.userType }}</div>
                        </div>
                        <div class="conversation-time" *ngIf="conversation.lastMessageTime">
                          {{ formatDate(conversation.lastMessageTime) }}
                        </div>
                      </div>
                    </div>
                    <div *ngIf="selectedPro && proConversations.length > 0" class="conversations-list">
                      <div
                        class="conversation-item"
                        *ngFor="let conversation of proConversations"
                        (click)="selectConversation(conversation)"
                        [class.selected]="selectedConversation?.userId === conversation.userId">
                        <div class="conversation-info">
                          <div class="conversation-name">{{ conversation.userName || 'Unknown User' }}</div>
                          <div class="conversation-meta">{{ conversation.userType }}</div>
                        </div>
                        <div class="conversation-time" *ngIf="conversation.lastMessageTime">
                          {{ formatDate(conversation.lastMessageTime) }}
                        </div>
                      </div>
                    </div>
                    <div *ngIf="((selectedUser && userConversations.length === 0) || (selectedPro && proConversations.length === 0))" class="no-conversations">
                      <p>No conversations</p>
                    </div>
                  </div>
                  <div class="messages-panel" *ngIf="selectedConversation">
                    <h3>Messages \u2014 {{ selectedConversation.userName }}</h3>
                    <div class="messages-list">
                      <div class="message" *ngFor="let message of conversationMessages"
                        [ngClass]="'message-' + (message.senderType ? message.senderType.toLowerCase() : 'unknown')">
                        <div class="message-sender">{{ message.senderType }}</div>
                        <div class="message-content">{{ message.content }}</div>
                        <div class="message-time">{{ formatDate(message.sentAt) }}</div>
                        <div class="message-status" *ngIf="message.isRead">
                          <mat-icon>done_all</mat-icon> Read
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="no-conversation-selected"
                    *ngIf="!selectedConversation && (userConversations.length > 0 || proConversations.length > 0)">
                    <p>Select a conversation to view messages</p>
                  </div>
                </div>
              </div>
            </mat-tab>

            <!-- Relationships Tab -->
            <mat-tab>
              <ng-template mat-tab-label><mat-icon>people</mat-icon> Relationships</ng-template>
              <div class="tab-content">
                <div *ngIf="selectedPro">
                  <div class="rel-add-row">
                    <mat-form-field appearance="outline" class="rel-input">
                      <mat-label>Add User by ID</mat-label>
                      <input matInput type="number" [(ngModel)]="addUserId" placeholder="User ID" name="addUserId">
                    </mat-form-field>
                    <button mat-raised-button color="primary" [disabled]="!addUserId" (click)="addUserToPro()">
                      <mat-icon>person_add</mat-icon> Link User
                    </button>
                  </div>
                  <div *ngIf="isLoadingRelationships" class="loading">
                    <mat-spinner diameter="36"></mat-spinner> Loading linked clients...
                  </div>
                  <div *ngIf="!isLoadingRelationships && linkedUsers.length === 0" class="no-data">
                    <mat-icon>group_off</mat-icon>
                    <p>No users linked to this pro</p>
                  </div>
                  <div *ngIf="!isLoadingRelationships && linkedUsers.length > 0" class="rel-list">
                    <div class="rel-item" *ngFor="let u of linkedUsers">
                      <mat-icon>person</mat-icon>
                      <div class="rel-info">
                        <div class="rel-name">{{ u.name }}</div>
                        <div class="rel-email">{{ u.email }} &nbsp;\xB7&nbsp; ID: {{ u.id }}</div>
                      </div>
                      <button mat-icon-button color="warn" title="Remove" (click)="removeUserFromPro(u.id)">
                        <mat-icon>link_off</mat-icon>
                      </button>
                    </div>
                  </div>
                </div>

                <div *ngIf="selectedUser">
                  <div *ngIf="isLoadingRelationships" class="loading">
                    <mat-spinner diameter="36"></mat-spinner> Loading linked pros...
                  </div>
                  <div *ngIf="!isLoadingRelationships && linkedPros.length === 0" class="no-data">
                    <mat-icon>handshake</mat-icon>
                    <p>No pros linked to this user</p>
                  </div>
                  <div *ngIf="!isLoadingRelationships && linkedPros.length > 0" class="rel-list">
                    <div class="rel-item" *ngFor="let p of linkedPros">
                      <mat-icon>engineering</mat-icon>
                      <div class="rel-info">
                        <div class="rel-name">{{ p.name }}</div>
                        <div class="rel-email">{{ p.businessName }} &nbsp;\xB7&nbsp; {{ p.email }}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </mat-tab>
          </mat-tab-group>
        </div>

        <!-- Empty state when no selection -->
        <div class="empty-state"
          *ngIf="!selectedUser && !selectedPro && users.length === 0 && pros.length === 0">
          <mat-icon>manage_search</mat-icon>
          <h3>Search for Users or Professionals</h3>
          <p>Enter a name or email address to find user accounts or professional profiles</p>
        </div>
      </div>
    </ng-container>

    <!-- \u2550\u2550 SERVICE AREAS PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <ng-container *ngSwitchCase="'service-areas'">
      <div class="panel-card">
        <div class="panel-card-header">
          <mat-icon>location_on</mat-icon>
          <h2>Service Areas</h2>
          <span class="panel-count" *ngIf="serviceAreas.length">({{ serviceAreas.length }})</span>
        </div>

        <!-- Add area form -->
        <div class="add-area-form">
          <h3>Add Service Area</h3>
          <div class="area-form-row">
            <input type="text" [(ngModel)]="newArea.country" placeholder="Country *" class="area-input" />
            <input type="text" [(ngModel)]="newArea.state" placeholder="State (optional)" class="area-input" />
            <input type="text" [(ngModel)]="newArea.district" placeholder="District (optional)" class="area-input" />
            <input type="text" [(ngModel)]="newArea.pinCode" placeholder="PIN Code (optional)" class="area-input" />
            <input type="text" [(ngModel)]="newArea.notes" placeholder="Notes (optional)" class="area-input area-input-notes" />
            <button (click)="addServiceArea()" [disabled]="!newArea.country || isSavingArea" class="add-area-btn">
              <mat-icon>add</mat-icon>
              {{ isSavingArea ? 'Adding...' : 'Add' }}
            </button>
          </div>
          <div *ngIf="areaErrorMsg" class="area-error">{{ areaErrorMsg }}</div>
        </div>

        <!-- Loading -->
        <div *ngIf="isLoadingAreas" class="loading">
          <mat-spinner diameter="32"></mat-spinner>
          <span>Loading service areas...</span>
        </div>

        <!-- Table -->
        <div *ngIf="!isLoadingAreas" class="areas-table-wrap">
          <table class="areas-table" *ngIf="serviceAreas.length > 0">
            <thead>
              <tr>
                <th>Country</th><th>State</th><th>District</th><th>PIN</th>
                <th>Status</th><th>Type</th><th>Notes</th><th>Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr *ngFor="let area of serviceAreas" [class.area-row-inactive]="!area.isActive">
                <td>{{ area.country }}</td>
                <td>{{ area.state || '\u2014' }}</td>
                <td>{{ area.district || '\u2014' }}</td>
                <td>{{ area.pinCode || '\u2014' }}</td>
                <td>
                  <span class="area-badge" [class.area-badge-active]="area.isActive" [class.area-badge-inactive]="!area.isActive">
                    <mat-icon>{{ area.isActive ? 'check_circle' : 'cancel' }}</mat-icon>
                    {{ area.isActive ? 'Active' : 'Inactive' }}
                  </span>
                </td>
                <td>
                  <span *ngIf="area.isAutoEnrolled" class="auto-badge" title="Auto-enrolled during pro registration">
                    <mat-icon>autorenew</mat-icon> Auto
                  </span>
                  <span *ngIf="!area.isAutoEnrolled" class="manual-badge">Manual</span>
                </td>
                <td class="notes-cell">{{ area.notes || '\u2014' }}</td>
                <td class="area-actions">
                  <button (click)="toggleServiceArea(area.id)" class="area-action-btn toggle-btn"
                    [title]="area.isActive ? 'Disable this area' : 'Enable this area'">
                    <mat-icon>{{ area.isActive ? 'toggle_on' : 'toggle_off' }}</mat-icon>
                  </button>
                  <button (click)="deleteServiceArea(area)" class="area-action-btn delete-btn" title="Delete area">
                    <mat-icon>delete_outline</mat-icon>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div *ngIf="serviceAreas.length === 0" class="no-data">
            <mat-icon>location_off</mat-icon>
            <p>No service areas defined. Add one above \u2014 currently accepting jobs from anywhere.</p>
          </div>
        </div>
      </div>
    </ng-container>

    <!-- \u2550\u2550 INVITE ADMIN PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <ng-container *ngSwitchCase="'invite-admin'">
      <div class="panel-card">
        <div class="panel-card-header">
          <mat-icon>person_add</mat-icon>
          <h2>Invite Admin</h2>
        </div>

        <!-- Invite form -->
        <div class="invite-form-section">
          <h3>Send Invitation</h3>
          <p class="invite-description">Enter the email address of the person you want to invite as a platform administrator. They will receive an invitation link valid for 7 days.</p>
          <div class="invite-form-row">
            <input
              type="email"
              [(ngModel)]="inviteEmail"
              placeholder="admin@example.com"
              class="invite-input"
              (keyup.enter)="sendInviteInline()"
            />
            <button class="invite-send-btn" (click)="sendInviteInline()" [disabled]="inviteSending || !inviteEmail.trim()">
              <mat-icon>{{ inviteSending ? 'hourglass_empty' : 'send' }}</mat-icon>
              {{ inviteSending ? 'Sending...' : 'Send Invite' }}
            </button>
          </div>
          <div *ngIf="inviteSuccess" class="invite-success">
            <mat-icon>check_circle</mat-icon>
            {{ inviteSuccess }}
          </div>
          <div *ngIf="inviteError" class="invite-error">
            <mat-icon>error_outline</mat-icon>
            {{ inviteError }}
          </div>
        </div>

        <!-- Invitations table -->
        <div class="invitations-section">
          <h3>Pending Invitations</h3>

          <div *ngIf="isLoadingInvitations" class="loading">
            <mat-spinner diameter="32"></mat-spinner>
            <span>Loading invitations...</span>
          </div>

          <div *ngIf="!isLoadingInvitations && adminInvitations.length > 0" class="invitations-table">
            <table class="invitations-list">
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Status</th>
                  <th>Created</th>
                  <th>Expires In</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr *ngFor="let invitation of adminInvitations" [class.expired]="invitation.isExpired">
                  <td data-label="Email">{{ invitation.email }}</td>
                  <td data-label="Status">
                    <span *ngIf="invitation.isUsed" class="badge badge-used">
                      <mat-icon>check_circle</mat-icon> Used
                    </span>
                    <span *ngIf="!invitation.isUsed && !invitation.isExpired" class="badge badge-pending">
                      <mat-icon>schedule</mat-icon> Pending
                    </span>
                    <span *ngIf="!invitation.isUsed && invitation.isExpired" class="badge badge-expired">
                      <mat-icon>cancel</mat-icon> Expired
                    </span>
                  </td>
                  <td data-label="Created">{{ formatDate(invitation.createdAt) }}</td>
                  <td data-label="Expires">
                    <span *ngIf="!invitation.isExpired && !invitation.isUsed" class="expires">{{ invitation.daysUntilExpiry }} days</span>
                    <span *ngIf="invitation.isExpired" class="expired-text">Expired</span>
                    <span *ngIf="invitation.isUsed" class="used-text">{{ formatDate(invitation.usedAt) }}</span>
                  </td>
                  <td data-label="Actions">
                    <button
                      *ngIf="!invitation.isUsed && !invitation.isExpired"
                      (click)="resendInvitation(invitation.id)"
                      class="action-btn resend-btn"
                      title="Resend invitation email">
                      <mat-icon>mail</mat-icon> Resend
                    </button>
                    <span *ngIf="invitation.isUsed || invitation.isExpired" class="action-disabled">\u2014</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <div *ngIf="!isLoadingInvitations && adminInvitations.length === 0" class="no-data">
            <mat-icon>inbox</mat-icon>
            <p>No invitations sent yet</p>
          </div>
        </div>
      </div>
    </ng-container>

    <!-- \u2550\u2550 GEOCODE PANEL \u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550\u2550 -->
    <ng-container *ngSwitchCase="'geocode'">
      <div class="panel-card">
        <div class="panel-card-header">
          <mat-icon>my_location</mat-icon>
          <h2>Geocode Backfill</h2>
        </div>
        <p class="panel-description">Set latitude/longitude coordinates for accounts that are missing map data. Coordinates are looked up from their registered address via the Nominatim API.</p>

        <div class="geocode-grid">
          <!-- Pros -->
          <div class="geocode-item">
            <div class="geocode-item-header">
              <mat-icon>engineering</mat-icon>
              <h3>Professionals</h3>
            </div>
            <p>Find and geocode all pro accounts that have an address but no coordinates.</p>
            <button class="geocode-run-btn" (click)="runGeocodeBackfillPros()" [disabled]="isBackfillingPros">
              <mat-icon>{{ isBackfillingPros ? 'hourglass_empty' : 'my_location' }}</mat-icon>
              {{ isBackfillingPros ? 'Geocoding Pros...' : 'Run Geocode \u2014 Pros' }}
            </button>

            <div *ngIf="proBackfillResult" class="geocode-result">
              <div class="geocode-result-title">
                <mat-icon>check_circle</mat-icon>
                Pros Geocode Complete
                <button class="dismiss-btn" (click)="proBackfillResult = null"><mat-icon>close</mat-icon></button>
              </div>
              <div class="geocode-stats">
                <div class="geocode-stat">
                  <span class="stat-value">{{ proBackfillResult.total }}</span>
                  <span class="stat-label">Found</span>
                </div>
                <div class="geocode-stat stat-updated">
                  <mat-icon>check_circle</mat-icon>
                  <span class="stat-value">{{ proBackfillResult.updated }}</span>
                  <span class="stat-label">Updated</span>
                </div>
                <div class="geocode-stat stat-failed" *ngIf="proBackfillResult.failed > 0">
                  <mat-icon>warning</mat-icon>
                  <span class="stat-value">{{ proBackfillResult.failed }}</span>
                  <span class="stat-label">Could not geocode</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Users -->
          <div class="geocode-item">
            <div class="geocode-item-header">
              <mat-icon>person_pin_circle</mat-icon>
              <h3>Users</h3>
            </div>
            <p>Find and geocode all user accounts that have an address but no coordinates.</p>
            <button class="geocode-run-btn" (click)="runGeocodeBackfillUsers()" [disabled]="isBackfillingUsers">
              <mat-icon>{{ isBackfillingUsers ? 'hourglass_empty' : 'person_pin_circle' }}</mat-icon>
              {{ isBackfillingUsers ? 'Geocoding Users...' : 'Run Geocode \u2014 Users' }}
            </button>

            <div *ngIf="userBackfillResult" class="geocode-result">
              <div class="geocode-result-title">
                <mat-icon>check_circle</mat-icon>
                Users Geocode Complete
                <button class="dismiss-btn" (click)="userBackfillResult = null"><mat-icon>close</mat-icon></button>
              </div>
              <div class="geocode-stats">
                <div class="geocode-stat">
                  <span class="stat-value">{{ userBackfillResult.total }}</span>
                  <span class="stat-label">Found</span>
                </div>
                <div class="geocode-stat stat-updated">
                  <mat-icon>check_circle</mat-icon>
                  <span class="stat-value">{{ userBackfillResult.updated }}</span>
                  <span class="stat-label">Updated</span>
                </div>
                <div class="geocode-stat stat-failed" *ngIf="userBackfillResult.failed > 0">
                  <mat-icon>warning</mat-icon>
                  <span class="stat-value">{{ userBackfillResult.failed }}</span>
                  <span class="stat-label">Could not geocode</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ng-container>

  </div><!-- /admin-panel-area -->


</div><!-- /admin-users-container -->
`, styles: ['/* src/app/features/admin-users/admin-users.scss */\n.admin-users-container {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: #f5f6fa;\n}\n.admin-header {\n  background:\n    linear-gradient(\n      135deg,\n      #667eea 0%,\n      #764ba2 100%);\n  color: white;\n  padding: 1.25rem 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);\n  position: relative;\n  z-index: 100;\n}\n.admin-header .header-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n}\n.admin-header h1 {\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  font-size: 1.5rem;\n  font-weight: 700;\n}\n.admin-header h1 mat-icon {\n  font-size: 1.75rem;\n  width: 1.75rem;\n  height: 1.75rem;\n}\n.tools-dropdown {\n  position: relative;\n}\n.tools-trigger {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  background: rgba(255, 255, 255, 0.15);\n  color: white;\n  border: 2px solid rgba(255, 255, 255, 0.35);\n  padding: 0.6rem 1.1rem;\n  border-radius: 8px;\n  font-size: 0.95rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s, border-color 0.2s;\n  white-space: nowrap;\n}\n.tools-trigger mat-icon {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.tools-trigger .chevron-icon {\n  transition: transform 0.2s;\n  opacity: 0.8;\n}\n.tools-trigger .chevron-icon.rotated {\n  transform: rotate(180deg);\n}\n.tools-trigger:hover {\n  background: rgba(255, 255, 255, 0.25);\n  border-color: rgba(255, 255, 255, 0.55);\n}\n.tools-menu {\n  position: absolute;\n  top: calc(100% + 8px);\n  right: 0;\n  background: white;\n  border-radius: 10px;\n  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.18);\n  overflow: hidden;\n  min-width: 210px;\n  z-index: 200;\n  animation: menuSlide 0.15s ease;\n}\n@keyframes menuSlide {\n  from {\n    opacity: 0;\n    transform: translateY(-6px);\n  }\n  to {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n.tools-menu-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  width: 100%;\n  padding: 0.85rem 1.25rem;\n  background: none;\n  border: none;\n  color: #333;\n  font-size: 0.92rem;\n  font-weight: 500;\n  cursor: pointer;\n  text-align: left;\n  transition: background 0.15s;\n}\n.tools-menu-item mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: #667eea;\n}\n.tools-menu-item:hover {\n  background: #f5f6fa;\n}\n.tools-menu-item.active {\n  background: #eef0fd;\n  color: #667eea;\n  font-weight: 700;\n}\n.tools-menu-item.active mat-icon {\n  color: #667eea;\n}\n.tools-menu-item + .tools-menu-item {\n  border-top: 1px solid #f0f0f0;\n}\n.disputes-banner {\n  background: #fff8f8;\n  border-bottom: 3px solid #ef9a9a;\n  padding: 1rem 2rem;\n}\n.disputes-banner .disputes-banner-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #c62828;\n  margin-bottom: 0.75rem;\n}\n.disputes-banner .disputes-banner-title mat-icon {\n  font-size: 1.15rem;\n  width: 1.15rem;\n  height: 1.15rem;\n}\n.disputes-banner .disputes-banner-title .dispute-count {\n  background: #c62828;\n  color: white;\n  border-radius: 12px;\n  padding: 1px 8px;\n  font-size: 0.78rem;\n}\n.disputes-banner .disputes-loading {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #888;\n  font-size: 0.9rem;\n}\n.disputes-banner .disputes-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.dispute-card {\n  background: white;\n  border: 1px solid #ef9a9a;\n  border-left: 4px solid #c62828;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.dispute-card .dispute-card-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: baseline;\n  margin-bottom: 0.4rem;\n}\n.dispute-card .dispute-card-header .dispute-job-title {\n  font-weight: 600;\n  font-size: 0.95rem;\n}\n.dispute-card .dispute-card-header .dispute-date {\n  font-size: 0.8rem;\n  color: #888;\n}\n.dispute-card .dispute-parties {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-size: 0.85rem;\n  color: #555;\n  margin-bottom: 0.4rem;\n}\n.dispute-card .dispute-parties span {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.dispute-card .dispute-parties mat-icon {\n  font-size: 15px;\n  width: 15px;\n  height: 15px;\n}\n.dispute-card .dispute-reason,\n.dispute-card .dispute-completion-notes {\n  font-size: 0.88rem;\n  color: #444;\n  margin: 0.2rem 0;\n}\n.dispute-card .dispute-actions {\n  display: flex;\n  gap: 0.75rem;\n  margin-top: 0.75rem;\n  flex-wrap: wrap;\n}\n.admin-panel-area {\n  flex: 1;\n  padding: 1.75rem 2rem;\n  overflow-y: auto;\n}\n.panel-search-layout {\n  display: flex;\n  gap: 1.5rem;\n  align-items: flex-start;\n}\n@media (max-width: 1024px) {\n  .panel-search-layout {\n    flex-direction: column;\n  }\n}\n.search-section {\n  flex: 0 0 340px;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  max-height: calc(100vh - 180px);\n  overflow-y: auto;\n}\n@media (max-width: 1024px) {\n  .search-section {\n    flex: none;\n    width: 100%;\n    max-height: none;\n  }\n}\n.search-controls {\n  margin-bottom: 1.25rem;\n}\n.search-input-group {\n  display: flex;\n  gap: 0.5rem;\n  margin-bottom: 0.875rem;\n}\n.search-input-group .search-input {\n  flex: 1;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n}\n.search-input-group .search-input:focus {\n  outline: none;\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.search-input-group .search-btn {\n  padding: 0.7rem 1.1rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 500;\n  font-size: 0.88rem;\n  white-space: nowrap;\n  transition: background 0.2s;\n}\n.search-input-group .search-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.search-input-group .search-btn:hover:not(:disabled) {\n  background: #5568d3;\n}\n.search-input-group .search-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.search-type {\n  display: flex;\n  gap: 0.5rem;\n}\n.search-type .type-btn {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.75rem;\n  border: 1.5px solid #ddd;\n  border-radius: 6px;\n  background: white;\n  color: #666;\n  font-size: 0.85rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.search-type .type-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.search-type .type-btn:hover {\n  border-color: #667eea;\n  color: #667eea;\n}\n.search-type .type-btn.active {\n  background: #667eea;\n  border-color: #667eea;\n  color: white;\n  font-weight: 600;\n}\n.search-results .results-group {\n  margin-bottom: 1.25rem;\n}\n.search-results .results-group h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.85rem;\n  color: #333;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  border-bottom: 2px solid #667eea;\n  padding-bottom: 0.4rem;\n  font-weight: 700;\n}\n.user-item,\n.pro-item {\n  padding: 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  margin-bottom: 0.6rem;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.user-item:hover,\n.pro-item:hover {\n  border-color: #667eea;\n  box-shadow: 0 2px 6px rgba(102, 126, 234, 0.12);\n}\n.user-item.selected,\n.pro-item.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.user-info .user-name,\n.user-info .pro-name,\n.pro-info .user-name,\n.pro-info .pro-name {\n  font-weight: 600;\n  margin-bottom: 0.2rem;\n  font-size: 0.95rem;\n}\n.user-info .user-email,\n.user-info .pro-email,\n.user-info .pro-business,\n.pro-info .user-email,\n.pro-info .pro-email,\n.pro-info .pro-business {\n  font-size: 0.83rem;\n  color: #666;\n  margin-bottom: 0.35rem;\n}\n.user-info .user-meta,\n.user-info .pro-meta,\n.pro-info .user-meta,\n.pro-info .pro-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  font-size: 0.78rem;\n  color: #999;\n}\n.user-date,\n.pro-date {\n  margin-left: auto;\n}\n.details-section {\n  flex: 1;\n  background: white;\n  border-radius: 10px;\n  padding: 1.5rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n@media (max-width: 1024px) {\n  .details-section {\n    flex: none;\n  }\n}\n.details-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.25rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid #e8e8e8;\n}\n.details-header h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  flex: 1;\n}\n.details-header .impersonate-btn,\n.details-header .clear-btn {\n  padding: 0.45rem 0.875rem;\n  border: none;\n  border-radius: 6px;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  gap: 0.4rem;\n  font-weight: 500;\n  font-size: 0.87rem;\n  transition: all 0.2s;\n}\n.details-header .impersonate-btn mat-icon,\n.details-header .clear-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.details-header .impersonate-btn {\n  background: #4caf50;\n  color: white;\n}\n.details-header .impersonate-btn:hover {\n  background: #43a047;\n}\n.details-header .clear-btn {\n  background: #f0f0f0;\n  color: #555;\n}\n.details-header .clear-btn:hover {\n  background: #e0e0e0;\n}\n.details-tabs {\n  flex: 1;\n  overflow: auto;\n}\n.details-tabs ::ng-deep .mat-mdc-tab-labels {\n  border-bottom: 1px solid #e0e0e0;\n}\n.details-tabs ::ng-deep .mat-mdc-tab {\n  min-width: 100px !important;\n}\n.tab-content {\n  padding: 1.25rem;\n  overflow-y: auto;\n  max-height: calc(100vh - 320px);\n}\n.profile-details {\n  display: flex;\n  flex-direction: column;\n  gap: 0.875rem;\n}\n.profile-details .detail-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-bottom: 0.5rem;\n  border-bottom: 1px solid #f5f5f5;\n  gap: 0.5rem;\n}\n.profile-details .detail-row label {\n  font-weight: 600;\n  color: #444;\n  min-width: 130px;\n  font-size: 0.9rem;\n}\n.profile-details .detail-row span {\n  color: #666;\n  text-align: right;\n  font-size: 0.9rem;\n}\n.profile-details .detail-row span mat-icon {\n  vertical-align: middle;\n}\n.profile-details .detail-row span mat-icon.verified {\n  color: #4caf50;\n}\n.inline-edit-btn,\n.inline-save-btn,\n.inline-cancel-btn {\n  background: none;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  padding: 0.2rem 0.4rem;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  margin-left: 0.4rem;\n  transition: background 0.15s;\n}\n.inline-edit-btn mat-icon,\n.inline-save-btn mat-icon,\n.inline-cancel-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.inline-edit-btn:hover,\n.inline-save-btn:hover,\n.inline-cancel-btn:hover {\n  background: #f0f0f0;\n}\n.inline-save-btn {\n  border-color: #4caf50;\n}\n.inline-save-btn mat-icon {\n  color: #4caf50;\n}\n.inline-cancel-btn {\n  border-color: #e53935;\n}\n.inline-cancel-btn mat-icon {\n  color: #e53935;\n}\n.radius-input {\n  width: 70px;\n  padding: 0.25rem 0.5rem;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 0.9rem;\n  margin-left: 0.4rem;\n}\n.radius-unit {\n  font-size: 0.9rem;\n  color: #666;\n  margin-left: 0.25rem;\n}\n.jobs-list {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.jobs-list .job-card {\n  border: 1px solid #e8e8e8;\n  border-radius: 8px;\n  padding: 1rem;\n  background: #fafafa;\n}\n.jobs-list .job-card .job-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin-bottom: 0.75rem;\n}\n.jobs-list .job-card .job-header h4 {\n  margin: 0;\n  color: #333;\n  font-size: 0.95rem;\n}\n.jobs-list .job-card .job-header .status-badge {\n  padding: 0.2rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: uppercase;\n  white-space: nowrap;\n}\n.jobs-list .job-card .job-header .status-badge.status-pending {\n  background: #fff3cd;\n  color: #856404;\n}\n.jobs-list .job-card .job-header .status-badge.status-in-progress {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list .job-card .job-header .status-badge[class*="In Progress"] {\n  background: #cfe2ff;\n  color: #084298;\n}\n.jobs-list .job-card .job-header .status-badge.status-completed {\n  background: #d1e7dd;\n  color: #0f5132;\n}\n.jobs-list .job-card .job-header .status-badge.status-cancelled {\n  background: #f8d7da;\n  color: #842029;\n}\n.jobs-list .job-card .job-title-section {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  flex: 1;\n}\n.jobs-list .job-card .job-title-section .bid-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  padding: 0.2rem 0.45rem;\n  background: #fff3cd;\n  color: #856404;\n  border-radius: 3px;\n  font-size: 0.73rem;\n  font-weight: 500;\n}\n.jobs-list .job-card .job-title-section .bid-badge mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.jobs-list .job-card .job-details {\n  font-size: 0.88rem;\n  color: #666;\n}\n.jobs-list .job-card .job-details div {\n  margin-bottom: 0.4rem;\n}\n.jobs-list .job-card .job-details div strong {\n  color: #444;\n  margin-right: 0.4rem;\n}\n.jobs-list .job-card .job-details .job-description {\n  margin-bottom: 0.75rem;\n  padding-bottom: 0.75rem;\n  border-bottom: 1px solid #eee;\n}\n.jobs-list .job-card .job-details .job-description strong {\n  display: block;\n  color: #444;\n  margin-bottom: 0.35rem;\n}\n.jobs-list .job-card .job-details .job-description p {\n  margin: 0;\n  line-height: 1.4;\n  max-height: 80px;\n  overflow-y: auto;\n}\n.jobs-list .job-card .job-details .job-dates {\n  display: flex;\n  gap: 1.25rem;\n  margin-top: 0.75rem;\n  padding-top: 0.75rem;\n  border-top: 1px solid #eee;\n  font-size: 0.83rem;\n}\n.jobs-list .job-card.job-in-progress {\n  border-left: 4px solid #2196f3;\n  background: #f0f8ff;\n}\n.chat-section {\n  display: flex;\n  gap: 1rem;\n  height: 100%;\n}\n.chat-section .conversations-panel {\n  flex: 0 0 220px;\n  border-right: 1px solid #e8e8e8;\n  padding-right: 1rem;\n}\n.chat-section .conversations-panel h3 {\n  margin: 0 0 0.6rem;\n  font-size: 0.9rem;\n  color: #444;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.chat-section .conversations-panel .conversations-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.4rem;\n}\n.chat-section .conversations-panel .no-conversations {\n  text-align: center;\n  color: #aaa;\n  padding: 1.5rem 0;\n  font-size: 0.88rem;\n}\n.chat-section .messages-panel {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.chat-section .messages-panel h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.9rem;\n  color: #444;\n  border-bottom: 1px solid #eee;\n  padding-bottom: 0.5rem;\n  font-weight: 700;\n}\n.chat-section .messages-panel .messages-list {\n  flex: 1;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n.chat-section .no-conversation-selected {\n  flex: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #aaa;\n  font-size: 0.9rem;\n}\n.conversation-item {\n  padding: 0.65rem 0.75rem;\n  border: 1px solid #e8e8e8;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.conversation-item:hover {\n  border-color: #667eea;\n  background: #f9f9f9;\n}\n.conversation-item.selected {\n  border-color: #667eea;\n  background: #f0f4ff;\n}\n.conversation-item .conversation-name {\n  font-weight: 600;\n  color: #333;\n  font-size: 0.88rem;\n}\n.conversation-item .conversation-meta {\n  font-size: 0.78rem;\n  color: #aaa;\n}\n.conversation-item .conversation-time {\n  font-size: 0.75rem;\n  color: #bbb;\n  margin-top: 0.2rem;\n}\n.message {\n  padding: 0.65rem;\n  border-radius: 6px;\n  background: #f5f5f5;\n}\n.message.message-user {\n  background: #e3f2fd;\n  margin-left: 2rem;\n}\n.message.message-pro {\n  background: #f3e5f5;\n  margin-right: 2rem;\n}\n.message .message-sender {\n  font-weight: 600;\n  font-size: 0.78rem;\n  color: #777;\n  margin-bottom: 0.2rem;\n}\n.message .message-content {\n  color: #333;\n  margin-bottom: 0.35rem;\n  word-wrap: break-word;\n  font-size: 0.9rem;\n}\n.message .message-time {\n  font-size: 0.72rem;\n  color: #bbb;\n}\n.message .message-status {\n  font-size: 0.72rem;\n  color: #4caf50;\n  margin-top: 0.2rem;\n  display: flex;\n  align-items: center;\n  gap: 0.2rem;\n}\n.message .message-status mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.rel-add-row {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-bottom: 1rem;\n}\n.rel-add-row .rel-input {\n  flex: 1;\n  max-width: 200px;\n}\n.rel-list {\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n}\n.rel-item {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  padding: 0.75rem 1rem;\n  background: #f9f9f9;\n  border-radius: 8px;\n}\n.rel-item mat-icon {\n  color: #667eea;\n  flex-shrink: 0;\n}\n.rel-info {\n  flex: 1;\n  min-width: 0;\n}\n.rel-info .rel-name {\n  font-weight: 500;\n  font-size: 0.9rem;\n}\n.rel-info .rel-email {\n  font-size: 0.8rem;\n  color: #777;\n}\n.panel-card {\n  background: white;\n  border-radius: 10px;\n  padding: 2rem;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);\n}\n.panel-card-header {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  margin-bottom: 1.75rem;\n  padding-bottom: 1rem;\n  border-bottom: 2px solid #f0f0f0;\n}\n.panel-card-header mat-icon {\n  font-size: 1.5rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  color: #667eea;\n}\n.panel-card-header h2 {\n  margin: 0;\n  font-size: 1.3rem;\n  color: #222;\n  font-weight: 700;\n}\n.panel-card-header .panel-count {\n  font-size: 0.9rem;\n  color: #888;\n  font-weight: 400;\n}\n.panel-description {\n  color: #666;\n  font-size: 0.92rem;\n  margin: -1rem 0 1.5rem;\n  line-height: 1.5;\n}\n.add-area-form {\n  margin-bottom: 1.5rem;\n}\n.add-area-form h3 {\n  margin: 0 0 0.75rem;\n  font-size: 0.95rem;\n  font-weight: 600;\n  color: #555;\n}\n.area-form-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  align-items: center;\n}\n.area-input {\n  flex: 1;\n  min-width: 120px;\n  padding: 0.5rem 0.75rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.88rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.area-input:focus {\n  border-color: #667eea;\n}\n.area-input.area-input-notes {\n  min-width: 180px;\n}\n.add-area-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.5rem 1.1rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: opacity 0.15s;\n  white-space: nowrap;\n}\n.add-area-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.add-area-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.area-error {\n  margin-top: 0.5rem;\n  color: #c62828;\n  font-size: 0.83rem;\n}\n.areas-table-wrap {\n  overflow-x: auto;\n}\n.areas-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 0.875rem;\n}\n.areas-table th {\n  text-align: left;\n  padding: 0.6rem 0.75rem;\n  background: #f5f6fa;\n  color: #555;\n  font-weight: 600;\n  border-bottom: 2px solid #e0e0e0;\n  white-space: nowrap;\n}\n.areas-table td {\n  padding: 0.6rem 0.75rem;\n  border-bottom: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.areas-table tr:last-child td {\n  border-bottom: none;\n}\n.areas-table .area-row-inactive td {\n  opacity: 0.55;\n}\n.area-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  font-weight: 600;\n  padding: 0.2rem 0.5rem;\n  border-radius: 12px;\n}\n.area-badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.area-badge.area-badge-active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.area-badge.area-badge-inactive {\n  background: #ffebee;\n  color: #c62828;\n}\n.auto-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.2rem;\n  font-size: 0.78rem;\n  color: #f57c00;\n}\n.auto-badge mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.manual-badge {\n  font-size: 0.78rem;\n  color: #999;\n}\n.notes-cell {\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: #777;\n}\n.area-actions {\n  white-space: nowrap;\n}\n.area-action-btn {\n  background: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.3rem;\n  border-radius: 4px;\n  transition: background 0.15s;\n  display: inline-flex;\n  align-items: center;\n}\n.area-action-btn:hover {\n  background: #f0f0f0;\n}\n.area-action-btn mat-icon {\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.area-action-btn.toggle-btn mat-icon {\n  color: #667eea;\n}\n.area-action-btn.delete-btn mat-icon {\n  color: #e53935;\n}\n.invite-form-section {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 8px;\n  padding: 1.5rem;\n  margin-bottom: 2rem;\n}\n.invite-form-section h3 {\n  margin: 0 0 0.5rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.invite-form-section .invite-description {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0 0 1rem;\n  line-height: 1.5;\n}\n.invite-form-row {\n  display: flex;\n  gap: 0.75rem;\n  align-items: center;\n}\n.invite-form-row .invite-input {\n  flex: 1;\n  max-width: 380px;\n  padding: 0.7rem 0.875rem;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  outline: none;\n  transition: border-color 0.15s;\n}\n.invite-form-row .invite-input:focus {\n  border-color: #667eea;\n  box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);\n}\n.invite-send-btn {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 1.25rem;\n  background:\n    linear-gradient(\n      135deg,\n      #667eea,\n      #764ba2);\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: opacity 0.15s;\n}\n.invite-send-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-send-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.invite-success {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #2e7d32;\n  font-size: 0.9rem;\n  font-weight: 500;\n}\n.invite-success mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invite-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  margin-top: 0.875rem;\n  color: #c62828;\n  font-size: 0.9rem;\n}\n.invite-error mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.invitations-section h3 {\n  margin: 0 0 1rem;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.5rem;\n}\n@media (max-width: 768px) {\n  .geocode-grid {\n    grid-template-columns: 1fr;\n  }\n}\n.geocode-item {\n  background: #f8f9ff;\n  border: 1px solid #e3e8ff;\n  border-radius: 10px;\n  padding: 1.5rem;\n}\n.geocode-item p {\n  font-size: 0.88rem;\n  color: #666;\n  margin: 0.25rem 0 1rem;\n  line-height: 1.5;\n}\n.geocode-item-header {\n  display: flex;\n  align-items: center;\n  gap: 0.6rem;\n  margin-bottom: 0.5rem;\n}\n.geocode-item-header mat-icon {\n  font-size: 1.25rem;\n  width: 1.25rem;\n  height: 1.25rem;\n  color: #667eea;\n}\n.geocode-item-header h3 {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-run-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.65rem 1.25rem;\n  background: #667eea;\n  color: white;\n  border: none;\n  border-radius: 6px;\n  font-size: 0.9rem;\n  font-weight: 600;\n  cursor: pointer;\n  transition: background 0.2s;\n}\n.geocode-run-btn mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-run-btn:hover:not(:disabled) {\n  background: #5568d3;\n}\n.geocode-run-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.geocode-result {\n  margin-top: 1.25rem;\n  background: white;\n  border: 1px solid #e0e0e0;\n  border-radius: 8px;\n  padding: 1rem 1.25rem;\n}\n.geocode-result .geocode-result-title {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-weight: 600;\n  font-size: 0.9rem;\n  color: #2e7d32;\n  margin-bottom: 0.75rem;\n}\n.geocode-result .geocode-result-title mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n}\n.geocode-result .geocode-result-title .dismiss-btn {\n  margin-left: auto;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: #aaa;\n  padding: 0.15rem;\n  border-radius: 4px;\n  transition: color 0.15s;\n}\n.geocode-result .geocode-result-title .dismiss-btn:hover {\n  color: #555;\n}\n.geocode-result .geocode-result-title .dismiss-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.geocode-result .geocode-stats {\n  display: flex;\n  gap: 0.75rem;\n  flex-wrap: wrap;\n}\n.geocode-result .geocode-stat {\n  display: flex;\n  align-items: center;\n  gap: 0.35rem;\n  background: #f5f5f5;\n  border-radius: 6px;\n  padding: 0.4rem 0.75rem;\n}\n.geocode-result .geocode-stat mat-icon {\n  font-size: 0.95rem;\n  width: 0.95rem;\n  height: 0.95rem;\n  color: #888;\n}\n.geocode-result .geocode-stat .stat-value {\n  font-size: 1.1rem;\n  font-weight: 700;\n  color: #333;\n}\n.geocode-result .geocode-stat .stat-label {\n  font-size: 0.78rem;\n  color: #777;\n}\n.geocode-result .geocode-stat.stat-updated mat-icon {\n  color: #4caf50;\n}\n.geocode-result .geocode-stat.stat-failed mat-icon {\n  color: #ff9800;\n}\n.badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.65rem;\n  border-radius: 20px;\n  font-size: 0.8rem;\n  font-weight: 600;\n  white-space: nowrap;\n}\n.badge mat-icon {\n  font-size: 0.85rem;\n  width: 0.85rem;\n  height: 0.85rem;\n}\n.badge.badge-pending {\n  background: #fff3e0;\n  color: #e65100;\n}\n.badge.badge-used {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.badge.badge-expired {\n  background: #ffebee;\n  color: #c62828;\n}\n.badge.badge-verified {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.expires {\n  color: #666;\n  font-weight: 500;\n}\n.expired-text {\n  color: #d32f2f;\n  font-weight: 500;\n}\n.used-text {\n  color: #388e3c;\n  font-weight: 500;\n}\n.action-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.45rem 0.875rem;\n  border: none;\n  border-radius: 5px;\n  font-size: 0.83rem;\n  font-weight: 500;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.action-btn mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n}\n.action-btn.resend-btn {\n  background: #e3f2fd;\n  color: #1976d2;\n}\n.action-btn.resend-btn:hover {\n  background: #bbdefb;\n}\n.action-disabled {\n  color: #ccc;\n}\n.loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 2rem;\n  color: #777;\n  font-size: 0.9rem;\n}\n.no-data {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem 1rem;\n  color: #bbb;\n}\n.no-data mat-icon {\n  font-size: 2.75rem;\n  width: 2.75rem;\n  height: 2.75rem;\n  opacity: 0.5;\n}\n.no-data p {\n  font-size: 0.95rem;\n  margin: 0;\n  color: #aaa;\n}\n.empty-state {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 0.75rem;\n  padding: 3rem;\n  color: #bbb;\n}\n.empty-state mat-icon {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n  opacity: 0.25;\n}\n.empty-state h3 {\n  margin: 0;\n  font-size: 1.2rem;\n  color: #888;\n}\n.empty-state p {\n  margin: 0.25rem 0 0;\n  max-width: 280px;\n  text-align: center;\n  font-size: 0.9rem;\n}\n.invitations-table {\n  overflow-x: auto;\n}\n.invitations-table .invitations-list {\n  width: 100%;\n  border-collapse: collapse;\n}\n.invitations-table .invitations-list thead {\n  background: #f5f6fa;\n  border-bottom: 2px solid #e0e0e0;\n}\n.invitations-table .invitations-list th {\n  padding: 0.875rem 1rem;\n  text-align: left;\n  font-weight: 600;\n  color: #444;\n  font-size: 0.83rem;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.invitations-table .invitations-list td {\n  padding: 0.875rem 1rem;\n  border-bottom: 1px solid #f0f0f0;\n  color: #555;\n  font-size: 0.9rem;\n  vertical-align: middle;\n}\n.invitations-table .invitations-list tbody tr {\n  transition: background 0.15s;\n}\n.invitations-table .invitations-list tbody tr:hover {\n  background: #fafafa;\n}\n.invitations-table .invitations-list tbody tr.expired {\n  opacity: 0.6;\n}\n@media (max-width: 768px) {\n  .admin-header {\n    padding: 1rem;\n  }\n  .admin-header .header-top {\n    gap: 0.75rem;\n  }\n  .admin-header h1 {\n    font-size: 1.1rem;\n    gap: 0.5rem;\n  }\n  .admin-header h1 mat-icon {\n    font-size: 1.3rem;\n    width: 1.3rem;\n    height: 1.3rem;\n  }\n  .tools-trigger {\n    padding: 0.5rem 0.75rem;\n    font-size: 0.85rem;\n  }\n  .tools-trigger span {\n    display: none;\n  }\n  .disputes-banner {\n    padding: 0.875rem 1rem;\n  }\n  .admin-panel-area {\n    padding: 1rem;\n  }\n  .panel-card {\n    padding: 1.25rem 1rem;\n  }\n  .panel-search-layout {\n    flex-direction: column;\n  }\n  .search-section {\n    flex: none;\n    width: 100%;\n    max-height: none;\n    padding: 1rem;\n  }\n  .details-section {\n    padding: 1rem;\n  }\n  .details-header {\n    flex-wrap: wrap;\n    gap: 0.5rem;\n  }\n  .details-header h2 {\n    font-size: 1.1rem;\n    flex: 1 1 100%;\n  }\n  .details-header .impersonate-btn,\n  .details-header .clear-btn {\n    flex: 1;\n    justify-content: center;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab {\n    min-width: 0 !important;\n    padding: 0 8px !important;\n    flex-grow: 1;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mdc-tab__text-label {\n    font-size: 0.7rem;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mat-icon {\n    font-size: 0.95rem;\n    width: 0.95rem;\n    height: 0.95rem;\n  }\n  .tab-content {\n    padding: 0.75rem;\n    max-height: none;\n  }\n  .profile-details .detail-row {\n    flex-direction: column;\n    align-items: flex-start;\n    gap: 0.15rem;\n  }\n  .profile-details .detail-row label {\n    min-width: unset;\n  }\n  .profile-details .detail-row span {\n    text-align: left;\n  }\n  .chat-section {\n    flex-direction: column;\n    height: auto;\n  }\n  .chat-section .conversations-panel {\n    flex: none;\n    border-right: none;\n    border-bottom: 1px solid #e8e8e8;\n    padding-right: 0;\n    padding-bottom: 0.75rem;\n    margin-bottom: 0.75rem;\n    max-height: 160px;\n    overflow-y: auto;\n  }\n  .rel-add-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .rel-add-row .rel-input {\n    max-width: none;\n  }\n  .dispute-actions {\n    flex-direction: column;\n  }\n  .dispute-actions button {\n    width: 100%;\n  }\n  .invite-form-row {\n    flex-direction: column;\n    align-items: stretch;\n  }\n  .invite-form-row .invite-input {\n    max-width: none;\n  }\n  .invitations-table .invitations-list thead {\n    display: none;\n  }\n  .invitations-table .invitations-list tbody tr {\n    display: block;\n    border: 1px solid #e8e8e8;\n    border-radius: 8px;\n    margin-bottom: 0.75rem;\n    padding: 0.5rem 0.75rem;\n    background: white;\n  }\n  .invitations-table .invitations-list td {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 0.4rem 0;\n    border-bottom: 1px solid #f5f5f5;\n    font-size: 0.83rem;\n  }\n  .invitations-table .invitations-list td:last-child {\n    border-bottom: none;\n  }\n  .invitations-table .invitations-list td::before {\n    content: attr(data-label);\n    font-weight: 600;\n    color: #555;\n    font-size: 0.75rem;\n    text-transform: uppercase;\n    letter-spacing: 0.3px;\n    flex-shrink: 0;\n    margin-right: 0.75rem;\n  }\n}\n@media (max-width: 480px) {\n  .details-tabs ::ng-deep .mat-mdc-tab .mdc-tab__text-label span:not(.mat-icon) {\n    display: none;\n  }\n  .details-tabs ::ng-deep .mat-mdc-tab .mat-icon {\n    margin-right: 0;\n  }\n}\n/*# sourceMappingURL=admin-users.css.map */\n'] }]
  }], () => [{ type: AdminUsersService }, { type: Auth }, { type: ChangeDetectorRef }, { type: Router }, { type: MatDialog }, { type: ProUsersService }, { type: MatSnackBar }, { type: ServiceAreaService }, { type: MatBottomSheet }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminUsersComponent, { className: "AdminUsersComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 42 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ImpersonateSheetComponent, { className: "ImpersonateSheetComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 602 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeleteAreaSheetComponent, { className: "DeleteAreaSheetComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 640 });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteAdminDialogComponent, { className: "InviteAdminDialogComponent", filePath: "src/app/features/admin-users/admin-users.ts", lineNumber: 677 });
})();
export {
  AdminUsersComponent,
  DeleteAreaSheetComponent,
  ImpersonateSheetComponent,
  InviteAdminDialogComponent
};
//# sourceMappingURL=chunk-SXCHDS54.js.map

