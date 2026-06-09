import {
  MaterialService
} from "./chunk-JK2L7XWB.js";
import {
  MatOption,
  MatSelect,
  MatSelectModule
} from "./chunk-HA4R76K5.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle
} from "./chunk-Z4JBADQW.js";
import {
  MatTooltipModule
} from "./chunk-H3BDPTZW.js";
import {
  MatTooltip
} from "./chunk-GCEIZ77Z.js";
import {
  MatChip,
  MatChipSet,
  MatChipsModule
} from "./chunk-AWXWAKBZ.js";
import "./chunk-CSQZZLOB.js";
import "./chunk-K6U3OKVW.js";
import {
  _DisposeViewRepeaterStrategy
} from "./chunk-VYWCDBJK.js";
import {
  MatSnackBar,
  MatSnackBarModule
} from "./chunk-AF7MVYJA.js";
import {
  ScrollingModule,
  ViewportRuler,
  _RecycleViewRepeaterStrategy,
  _VIEW_REPEATER_STRATEGY,
  _ViewRepeaterOperation,
  isDataSource
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
  Directionality,
  MatCommonModule,
  Platform
} from "./chunk-SOWTMXOK.js";
import {
  ServiceCategoryService
} from "./chunk-YRPSZ7MM.js";
import {
  DefaultValueAccessor,
  FormBuilder,
  FormControlName,
  FormGroupDirective,
  MinValidator,
  NgControlStatus,
  NgControlStatusGroup,
  NumberValueAccessor,
  ReactiveFormsModule,
  Validators,
  ɵNgNoValidate
} from "./chunk-A6TK5TPK.js";
import "./chunk-UGJKRHBV.js";
import {
  BehaviorSubject,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  DOCUMENT,
  DecimalPipe,
  Directive,
  ElementRef,
  EventEmitter,
  HostAttributeToken,
  Inject,
  InjectionToken,
  Injector,
  Input,
  IterableDiffers,
  NgForOf,
  NgIf,
  NgModule,
  Output,
  Subject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  booleanAttribute,
  inject,
  isObservable,
  of,
  setClassMetadata,
  takeUntil,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵelementContainer,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵinterpolate,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind2,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵviewQuery
} from "./chunk-UQSUYH4V.js";
import {
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// node_modules/@angular/cdk/fesm2022/table.mjs
var _c0 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c1 = ["caption", "colgroup, col", "*"];
function CdkTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function CdkTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 0);
    \u0275\u0275elementContainer(3, 2)(4, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 4);
    \u0275\u0275elementEnd();
  }
}
function CdkTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 2)(2, 3)(3, 4);
  }
}
function CdkTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function CdkTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var CDK_TABLE = new InjectionToken("CDK_TABLE");
var TEXT_COLUMN_OPTIONS = new InjectionToken("text-column-options");
var CdkCellDef = class _CdkCellDef {
  /** @docs-private */
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCellDef,
    selectors: [["", "cdkCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkCellDef]"
    }]
  }], () => [], null);
})();
var CdkHeaderCellDef = class _CdkHeaderCellDef {
  /** @docs-private */
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkHeaderCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderCellDef,
    selectors: [["", "cdkHeaderCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderCellDef]"
    }]
  }], () => [], null);
})();
var CdkFooterCellDef = class _CdkFooterCellDef {
  /** @docs-private */
  template = inject(TemplateRef);
  constructor() {
  }
  static \u0275fac = function CdkFooterCellDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterCellDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterCellDef,
    selectors: [["", "cdkFooterCellDef", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterCellDef]"
    }]
  }], () => [], null);
})();
var CdkColumnDef = class _CdkColumnDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  _name;
  /** Whether the cell is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  /**
   * Whether this column should be sticky positioned on the end of the row. Should make sure
   * that it mimics the `CanStick` mixin such that `_hasStickyChanged` is set to true if the value
   * has been changed.
   */
  get stickyEnd() {
    return this._stickyEnd;
  }
  set stickyEnd(value) {
    if (value !== this._stickyEnd) {
      this._stickyEnd = value;
      this._hasStickyChanged = true;
    }
  }
  _stickyEnd = false;
  /** @docs-private */
  cell;
  /** @docs-private */
  headerCell;
  /** @docs-private */
  footerCell;
  /**
   * Transformed version of the column name that can be used as part of a CSS classname. Excludes
   * all non-alphanumeric characters and the special characters '-' and '_'. Any characters that
   * do not match are replaced by the '-' character.
   */
  cssClassFriendlyName;
  /**
   * Class name for cells in this column.
   * @docs-private
   */
  _columnCssClassName;
  constructor() {
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  /**
   * Overridable method that sets the css classes that will be added to every cell in this
   * column.
   * In the future, columnCssClassName will change from type string[] to string and this
   * will set a single string value.
   * @docs-private
   */
  _updateColumnCssClassName() {
    this._columnCssClassName = [`cdk-column-${this.cssClassFriendlyName}`];
  }
  /**
   * This has been extracted to a util because of TS 4 and VE.
   * View Engine doesn't support property rename inheritance.
   * TS 4.0 doesn't allow properties to override accessors or vice-versa.
   * @docs-private
   */
  _setNameInput(value) {
    if (value) {
      this._name = value;
      this.cssClassFriendlyName = value.replace(/[^a-z0-9_-]/gi, "-");
      this._updateColumnCssClassName();
    }
  }
  static \u0275fac = function CdkColumnDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkColumnDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkColumnDef,
    selectors: [["", "cdkColumnDef", ""]],
    contentQueries: function CdkColumnDef_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkCellDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkHeaderCellDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkFooterCellDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.footerCell = _t.first);
      }
    },
    inputs: {
      name: [0, "cdkColumnDef", "name"],
      sticky: [2, "sticky", "sticky", booleanAttribute],
      stickyEnd: [2, "stickyEnd", "stickyEnd", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: "MAT_SORT_HEADER_COLUMN_DEF",
      useExisting: _CdkColumnDef
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkColumnDef, [{
    type: Directive,
    args: [{
      selector: "[cdkColumnDef]",
      providers: [{
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: CdkColumnDef
      }]
    }]
  }], () => [], {
    name: [{
      type: Input,
      args: ["cdkColumnDef"]
    }],
    sticky: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    stickyEnd: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    cell: [{
      type: ContentChild,
      args: [CdkCellDef]
    }],
    headerCell: [{
      type: ContentChild,
      args: [CdkHeaderCellDef]
    }],
    footerCell: [{
      type: ContentChild,
      args: [CdkFooterCellDef]
    }]
  });
})();
var BaseCdkCell = class {
  constructor(columnDef, elementRef) {
    elementRef.nativeElement.classList.add(...columnDef._columnCssClassName);
  }
};
var CdkHeaderCell = class _CdkHeaderCell extends BaseCdkCell {
  constructor() {
    super(inject(CdkColumnDef), inject(ElementRef));
  }
  static \u0275fac = function CdkHeaderCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderCell,
    selectors: [["cdk-header-cell"], ["th", "cdk-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "cdk-header-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderCell, [{
    type: Directive,
    args: [{
      selector: "cdk-header-cell, th[cdk-header-cell]",
      host: {
        "class": "cdk-header-cell",
        "role": "columnheader"
      }
    }]
  }], () => [], null);
})();
var CdkFooterCell = class _CdkFooterCell extends BaseCdkCell {
  constructor() {
    const columnDef = inject(CdkColumnDef);
    const elementRef = inject(ElementRef);
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static \u0275fac = function CdkFooterCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterCell,
    selectors: [["cdk-footer-cell"], ["td", "cdk-footer-cell", ""]],
    hostAttrs: [1, "cdk-footer-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterCell, [{
    type: Directive,
    args: [{
      selector: "cdk-footer-cell, td[cdk-footer-cell]",
      host: {
        "class": "cdk-footer-cell"
      }
    }]
  }], () => [], null);
})();
var CdkCell = class _CdkCell extends BaseCdkCell {
  constructor() {
    const columnDef = inject(CdkColumnDef);
    const elementRef = inject(ElementRef);
    super(columnDef, elementRef);
    const role = columnDef._table?._getCellRole();
    if (role) {
      elementRef.nativeElement.setAttribute("role", role);
    }
  }
  static \u0275fac = function CdkCell_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCell)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCell,
    selectors: [["cdk-cell"], ["td", "cdk-cell", ""]],
    hostAttrs: [1, "cdk-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCell, [{
    type: Directive,
    args: [{
      selector: "cdk-cell, td[cdk-cell]",
      host: {
        "class": "cdk-cell"
      }
    }]
  }], () => [], null);
})();
var CDK_ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var BaseRowDef = class _BaseRowDef {
  template = inject(TemplateRef);
  _differs = inject(IterableDiffers);
  /** The columns to be displayed on this row. */
  columns;
  /** Differ used to check if any changes were made to the columns. */
  _columnsDiffer;
  constructor() {
  }
  ngOnChanges(changes) {
    if (!this._columnsDiffer) {
      const columns = changes["columns"] && changes["columns"].currentValue || [];
      this._columnsDiffer = this._differs.find(columns).create();
      this._columnsDiffer.diff(columns);
    }
  }
  /**
   * Returns the difference between the current columns and the columns from the last diff, or null
   * if there is no difference.
   */
  getColumnsDiff() {
    return this._columnsDiffer.diff(this.columns);
  }
  /** Gets this row def's relevant cell template from the provided column def. */
  extractCellTemplate(column) {
    if (this instanceof CdkHeaderRowDef) {
      return column.headerCell.template;
    }
    if (this instanceof CdkFooterRowDef) {
      return column.footerCell.template;
    } else {
      return column.cell.template;
    }
  }
  static \u0275fac = function BaseRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BaseRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _BaseRowDef,
    features: [\u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseRowDef, [{
    type: Directive
  }], () => [], null);
})();
var CdkHeaderRowDef = class _CdkHeaderRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static \u0275fac = function CdkHeaderRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkHeaderRowDef,
    selectors: [["", "cdkHeaderRowDef", ""]],
    inputs: {
      columns: [0, "cdkHeaderRowDef", "columns"],
      sticky: [2, "cdkHeaderRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkHeaderRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkHeaderRowDef"
      }]
    }]
  }], () => [], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkFooterRowDef = class _CdkFooterRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  _hasStickyChanged = false;
  /** Whether the row is sticky. */
  get sticky() {
    return this._sticky;
  }
  set sticky(value) {
    if (value !== this._sticky) {
      this._sticky = value;
      this._hasStickyChanged = true;
    }
  }
  _sticky = false;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  // Prerender fails to recognize that ngOnChanges in a part of this class through inheritance.
  // Explicitly define it so that the method is called as part of the Angular lifecycle.
  ngOnChanges(changes) {
    super.ngOnChanges(changes);
  }
  /** Whether the sticky state has changed. */
  hasStickyChanged() {
    const hasStickyChanged = this._hasStickyChanged;
    this.resetStickyChanged();
    return hasStickyChanged;
  }
  /** Resets the sticky changed state. */
  resetStickyChanged() {
    this._hasStickyChanged = false;
  }
  static \u0275fac = function CdkFooterRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkFooterRowDef,
    selectors: [["", "cdkFooterRowDef", ""]],
    inputs: {
      columns: [0, "cdkFooterRowDef", "columns"],
      sticky: [2, "cdkFooterRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkFooterRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkFooterRowDef"
      }]
    }]
  }], () => [], {
    sticky: [{
      type: Input,
      args: [{
        alias: "cdkFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  });
})();
var CdkRowDef = class _CdkRowDef extends BaseRowDef {
  _table = inject(CDK_TABLE, {
    optional: true
  });
  /**
   * Function that should return true if this row template should be used for the provided index
   * and row data. If left undefined, this row will be considered the default row template to use
   * when no other when functions return true for the data.
   * For every row, there must be at least one when function that passes or an undefined to default.
   */
  when;
  constructor() {
    super(inject(TemplateRef), inject(IterableDiffers));
  }
  static \u0275fac = function CdkRowDef_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRowDef)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkRowDef,
    selectors: [["", "cdkRowDef", ""]],
    inputs: {
      columns: [0, "cdkRowDefColumns", "columns"],
      when: [0, "cdkRowDefWhen", "when"]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRowDef, [{
    type: Directive,
    args: [{
      selector: "[cdkRowDef]",
      inputs: [{
        name: "columns",
        alias: "cdkRowDefColumns"
      }, {
        name: "when",
        alias: "cdkRowDefWhen"
      }]
    }]
  }], () => [], null);
})();
var CdkCellOutlet = class _CdkCellOutlet {
  _viewContainer = inject(ViewContainerRef);
  /** The ordered list of cells to render within this outlet's view container */
  cells;
  /** The data context to be provided to each cell */
  context;
  /**
   * Static property containing the latest constructed instance of this class.
   * Used by the CDK table when each CdkHeaderRow and CdkRow component is created using
   * createEmbeddedView. After one of these components are created, this property will provide
   * a handle to provide that component's cells and context. After init, the CdkCellOutlet will
   * construct the cells with the provided context.
   */
  static mostRecentCellOutlet = null;
  constructor() {
    _CdkCellOutlet.mostRecentCellOutlet = this;
  }
  ngOnDestroy() {
    if (_CdkCellOutlet.mostRecentCellOutlet === this) {
      _CdkCellOutlet.mostRecentCellOutlet = null;
    }
  }
  static \u0275fac = function CdkCellOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkCellOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkCellOutlet,
    selectors: [["", "cdkCellOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkCellOutlet, [{
    type: Directive,
    args: [{
      selector: "[cdkCellOutlet]"
    }]
  }], () => [], null);
})();
var CdkHeaderRow = class _CdkHeaderRow {
  static \u0275fac = function CdkHeaderRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkHeaderRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkHeaderRow,
    selectors: [["cdk-header-row"], ["tr", "cdk-header-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-header-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkHeaderRow, [{
    type: Component,
    args: [{
      selector: "cdk-header-row, tr[cdk-header-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkFooterRow = class _CdkFooterRow {
  static \u0275fac = function CdkFooterRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkFooterRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkFooterRow,
    selectors: [["cdk-footer-row"], ["tr", "cdk-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-footer-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkFooterRow, [{
    type: Component,
    args: [{
      selector: "cdk-footer-row, tr[cdk-footer-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-footer-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkRow = class _CdkRow {
  static \u0275fac = function CdkRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRow)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkRow,
    selectors: [["cdk-row"], ["tr", "cdk-row", ""]],
    hostAttrs: ["role", "row", 1, "cdk-row"],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function CdkRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRow, [{
    type: Component,
    args: [{
      selector: "cdk-row, tr[cdk-row]",
      template: CDK_ROW_TEMPLATE,
      host: {
        "class": "cdk-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var CdkNoDataRow = class _CdkNoDataRow {
  templateRef = inject(TemplateRef);
  _contentClassName = "cdk-no-data-row";
  constructor() {
  }
  static \u0275fac = function CdkNoDataRow_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkNoDataRow)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkNoDataRow,
    selectors: [["ng-template", "cdkNoDataRow", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[cdkNoDataRow]"
    }]
  }], () => [], null);
})();
var STICKY_DIRECTIONS = ["top", "bottom", "left", "right"];
var StickyStyler = class {
  _isNativeHtmlTable;
  _stickCellCss;
  _isBrowser;
  _needsPositionStickyOnElement;
  direction;
  _positionListener;
  _tableInjector;
  _elemSizeCache = /* @__PURE__ */ new WeakMap();
  _resizeObserver = globalThis?.ResizeObserver ? new globalThis.ResizeObserver((entries) => this._updateCachedSizes(entries)) : null;
  _updatedStickyColumnsParamsToReplay = [];
  _stickyColumnsReplayTimeout = null;
  _cachedCellWidths = [];
  _borderCellCss;
  _destroyed = false;
  /**
   * @param _isNativeHtmlTable Whether the sticky logic should be based on a table
   *     that uses the native `<table>` element.
   * @param _stickCellCss The CSS class that will be applied to every row/cell that has
   *     sticky positioning applied.
   * @param direction The directionality context of the table (ltr/rtl); affects column positioning
   *     by reversing left/right positions.
   * @param _isBrowser Whether the table is currently being rendered on the server or the client.
   * @param _needsPositionStickyOnElement Whether we need to specify position: sticky on cells
   *     using inline styles. If false, it is assumed that position: sticky is included in
   *     the component stylesheet for _stickCellCss.
   * @param _positionListener A listener that is notified of changes to sticky rows/columns
   *     and their dimensions.
   * @param _tableInjector The table's Injector.
   */
  constructor(_isNativeHtmlTable, _stickCellCss, _isBrowser = true, _needsPositionStickyOnElement = true, direction, _positionListener, _tableInjector) {
    this._isNativeHtmlTable = _isNativeHtmlTable;
    this._stickCellCss = _stickCellCss;
    this._isBrowser = _isBrowser;
    this._needsPositionStickyOnElement = _needsPositionStickyOnElement;
    this.direction = direction;
    this._positionListener = _positionListener;
    this._tableInjector = _tableInjector;
    this._borderCellCss = {
      "top": `${_stickCellCss}-border-elem-top`,
      "bottom": `${_stickCellCss}-border-elem-bottom`,
      "left": `${_stickCellCss}-border-elem-left`,
      "right": `${_stickCellCss}-border-elem-right`
    };
  }
  /**
   * Clears the sticky positioning styles from the row and its cells by resetting the `position`
   * style, setting the zIndex to 0, and unsetting each provided sticky direction.
   * @param rows The list of rows that should be cleared from sticking in the provided directions
   * @param stickyDirections The directions that should no longer be set as sticky on the rows.
   */
  clearStickyPositioning(rows, stickyDirections) {
    if (stickyDirections.includes("left") || stickyDirections.includes("right")) {
      this._removeFromStickyColumnReplayQueue(rows);
    }
    const elementsToClear = [];
    for (const row of rows) {
      if (row.nodeType !== row.ELEMENT_NODE) {
        continue;
      }
      elementsToClear.push(row, ...Array.from(row.children));
    }
    afterNextRender({
      write: () => {
        for (const element of elementsToClear) {
          this._removeStickyStyle(element, stickyDirections);
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * Applies sticky left and right positions to the cells of each row according to the sticky
   * states of the rendered column definitions.
   * @param rows The rows that should have its set of cells stuck according to the sticky states.
   * @param stickyStartStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the start of the row.
   * @param stickyEndStates A list of boolean states where each state represents whether the cell
   *     in this index position should be stuck to the end of the row.
   * @param recalculateCellWidths Whether the sticky styler should recalculate the width of each
   *     column cell. If `false` cached widths will be used instead.
   * @param replay Whether to enqueue this call for replay after a ResizeObserver update.
   */
  updateStickyColumns(rows, stickyStartStates, stickyEndStates, recalculateCellWidths = true, replay = true) {
    if (!rows.length || !this._isBrowser || !(stickyStartStates.some((state) => state) || stickyEndStates.some((state) => state))) {
      this._positionListener?.stickyColumnsUpdated({
        sizes: []
      });
      this._positionListener?.stickyEndColumnsUpdated({
        sizes: []
      });
      return;
    }
    const firstRow = rows[0];
    const numCells = firstRow.children.length;
    const isRtl = this.direction === "rtl";
    const start = isRtl ? "right" : "left";
    const end = isRtl ? "left" : "right";
    const lastStickyStart = stickyStartStates.lastIndexOf(true);
    const firstStickyEnd = stickyEndStates.indexOf(true);
    let cellWidths;
    let startPositions;
    let endPositions;
    if (replay) {
      this._updateStickyColumnReplayQueue({
        rows: [...rows],
        stickyStartStates: [...stickyStartStates],
        stickyEndStates: [...stickyEndStates]
      });
    }
    afterNextRender({
      earlyRead: () => {
        cellWidths = this._getCellWidths(firstRow, recalculateCellWidths);
        startPositions = this._getStickyStartColumnPositions(cellWidths, stickyStartStates);
        endPositions = this._getStickyEndColumnPositions(cellWidths, stickyEndStates);
      },
      write: () => {
        for (const row of rows) {
          for (let i = 0; i < numCells; i++) {
            const cell = row.children[i];
            if (stickyStartStates[i]) {
              this._addStickyStyle(cell, start, startPositions[i], i === lastStickyStart);
            }
            if (stickyEndStates[i]) {
              this._addStickyStyle(cell, end, endPositions[i], i === firstStickyEnd);
            }
          }
        }
        if (this._positionListener && cellWidths.some((w) => !!w)) {
          this._positionListener.stickyColumnsUpdated({
            sizes: lastStickyStart === -1 ? [] : cellWidths.slice(0, lastStickyStart + 1).map((width, index) => stickyStartStates[index] ? width : null)
          });
          this._positionListener.stickyEndColumnsUpdated({
            sizes: firstStickyEnd === -1 ? [] : cellWidths.slice(firstStickyEnd).map((width, index) => stickyEndStates[index + firstStickyEnd] ? width : null).reverse()
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * Applies sticky positioning to the row's cells if using the native table layout, and to the
   * row itself otherwise.
   * @param rowsToStick The list of rows that should be stuck according to their corresponding
   *     sticky state and to the provided top or bottom position.
   * @param stickyStates A list of boolean states where each state represents whether the row
   *     should be stuck in the particular top or bottom position.
   * @param position The position direction in which the row should be stuck if that row should be
   *     sticky.
   *
   */
  stickRows(rowsToStick, stickyStates, position) {
    if (!this._isBrowser) {
      return;
    }
    const rows = position === "bottom" ? rowsToStick.slice().reverse() : rowsToStick;
    const states = position === "bottom" ? stickyStates.slice().reverse() : stickyStates;
    const stickyOffsets = [];
    const stickyCellHeights = [];
    const elementsToStick = [];
    afterNextRender({
      earlyRead: () => {
        for (let rowIndex = 0, stickyOffset = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          stickyOffsets[rowIndex] = stickyOffset;
          const row = rows[rowIndex];
          elementsToStick[rowIndex] = this._isNativeHtmlTable ? Array.from(row.children) : [row];
          const height = this._retrieveElementSize(row).height;
          stickyOffset += height;
          stickyCellHeights[rowIndex] = height;
        }
      },
      write: () => {
        const borderedRowIndex = states.lastIndexOf(true);
        for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
          if (!states[rowIndex]) {
            continue;
          }
          const offset = stickyOffsets[rowIndex];
          const isBorderedRowIndex = rowIndex === borderedRowIndex;
          for (const element of elementsToStick[rowIndex]) {
            this._addStickyStyle(element, position, offset, isBorderedRowIndex);
          }
        }
        if (position === "top") {
          this._positionListener?.stickyHeaderRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        } else {
          this._positionListener?.stickyFooterRowsUpdated({
            sizes: stickyCellHeights,
            offsets: stickyOffsets,
            elements: elementsToStick
          });
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /**
   * When using the native table in Safari, sticky footer cells do not stick. The only way to stick
   * footer rows is to apply sticky styling to the tfoot container. This should only be done if
   * all footer rows are sticky. If not all footer rows are sticky, remove sticky positioning from
   * the tfoot element.
   */
  updateStickyFooterContainer(tableElement, stickyStates) {
    if (!this._isNativeHtmlTable) {
      return;
    }
    afterNextRender({
      write: () => {
        const tfoot = tableElement.querySelector("tfoot");
        if (tfoot) {
          if (stickyStates.some((state) => !state)) {
            this._removeStickyStyle(tfoot, ["bottom"]);
          } else {
            this._addStickyStyle(tfoot, "bottom", 0, false);
          }
        }
      }
    }, {
      injector: this._tableInjector
    });
  }
  /** Triggered by the table's OnDestroy hook. */
  destroy() {
    if (this._stickyColumnsReplayTimeout) {
      clearTimeout(this._stickyColumnsReplayTimeout);
    }
    this._resizeObserver?.disconnect();
    this._destroyed = true;
  }
  /**
   * Removes the sticky style on the element by removing the sticky cell CSS class, re-evaluating
   * the zIndex, removing each of the provided sticky directions, and removing the
   * sticky position if there are no more directions.
   */
  _removeStickyStyle(element, stickyDirections) {
    if (!element.classList.contains(this._stickCellCss)) {
      return;
    }
    for (const dir of stickyDirections) {
      element.style[dir] = "";
      element.classList.remove(this._borderCellCss[dir]);
    }
    const hasDirection = STICKY_DIRECTIONS.some((dir) => stickyDirections.indexOf(dir) === -1 && element.style[dir]);
    if (hasDirection) {
      element.style.zIndex = this._getCalculatedZIndex(element);
    } else {
      element.style.zIndex = "";
      if (this._needsPositionStickyOnElement) {
        element.style.position = "";
      }
      element.classList.remove(this._stickCellCss);
    }
  }
  /**
   * Adds the sticky styling to the element by adding the sticky style class, changing position
   * to be sticky (and -webkit-sticky), setting the appropriate zIndex, and adding a sticky
   * direction and value.
   */
  _addStickyStyle(element, dir, dirValue, isBorderElement) {
    element.classList.add(this._stickCellCss);
    if (isBorderElement) {
      element.classList.add(this._borderCellCss[dir]);
    }
    element.style[dir] = `${dirValue}px`;
    element.style.zIndex = this._getCalculatedZIndex(element);
    if (this._needsPositionStickyOnElement) {
      element.style.cssText += "position: -webkit-sticky; position: sticky; ";
    }
  }
  /**
   * Calculate what the z-index should be for the element, depending on what directions (top,
   * bottom, left, right) have been set. It should be true that elements with a top direction
   * should have the highest index since these are elements like a table header. If any of those
   * elements are also sticky in another direction, then they should appear above other elements
   * that are only sticky top (e.g. a sticky column on a sticky header). Bottom-sticky elements
   * (e.g. footer rows) should then be next in the ordering such that they are below the header
   * but above any non-sticky elements. Finally, left/right sticky elements (e.g. sticky columns)
   * should minimally increment so that they are above non-sticky elements but below top and bottom
   * elements.
   */
  _getCalculatedZIndex(element) {
    const zIndexIncrements = {
      top: 100,
      bottom: 10,
      left: 1,
      right: 1
    };
    let zIndex = 0;
    for (const dir of STICKY_DIRECTIONS) {
      if (element.style[dir]) {
        zIndex += zIndexIncrements[dir];
      }
    }
    return zIndex ? `${zIndex}` : "";
  }
  /** Gets the widths for each cell in the provided row. */
  _getCellWidths(row, recalculateCellWidths = true) {
    if (!recalculateCellWidths && this._cachedCellWidths.length) {
      return this._cachedCellWidths;
    }
    const cellWidths = [];
    const firstRowCells = row.children;
    for (let i = 0; i < firstRowCells.length; i++) {
      const cell = firstRowCells[i];
      cellWidths.push(this._retrieveElementSize(cell).width);
    }
    this._cachedCellWidths = cellWidths;
    return cellWidths;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyStartColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = 0; i < widths.length; i++) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Determines the left and right positions of each sticky column cell, which will be the
   * accumulation of all sticky column cell widths to the left and right, respectively.
   * Non-sticky cells do not need to have a value set since their positions will not be applied.
   */
  _getStickyEndColumnPositions(widths, stickyStates) {
    const positions = [];
    let nextPosition = 0;
    for (let i = widths.length; i > 0; i--) {
      if (stickyStates[i]) {
        positions[i] = nextPosition;
        nextPosition += widths[i];
      }
    }
    return positions;
  }
  /**
   * Retreives the most recently observed size of the specified element from the cache, or
   * meaures it directly if not yet cached.
   */
  _retrieveElementSize(element) {
    const cachedSize = this._elemSizeCache.get(element);
    if (cachedSize) {
      return cachedSize;
    }
    const clientRect = element.getBoundingClientRect();
    const size = {
      width: clientRect.width,
      height: clientRect.height
    };
    if (!this._resizeObserver) {
      return size;
    }
    this._elemSizeCache.set(element, size);
    this._resizeObserver.observe(element, {
      box: "border-box"
    });
    return size;
  }
  /**
   * Conditionally enqueue the requested sticky update and clear previously queued updates
   * for the same rows.
   */
  _updateStickyColumnReplayQueue(params) {
    this._removeFromStickyColumnReplayQueue(params.rows);
    if (!this._stickyColumnsReplayTimeout) {
      this._updatedStickyColumnsParamsToReplay.push(params);
    }
  }
  /** Remove updates for the specified rows from the queue. */
  _removeFromStickyColumnReplayQueue(rows) {
    const rowsSet = new Set(rows);
    for (const update of this._updatedStickyColumnsParamsToReplay) {
      update.rows = update.rows.filter((row) => !rowsSet.has(row));
    }
    this._updatedStickyColumnsParamsToReplay = this._updatedStickyColumnsParamsToReplay.filter((update) => !!update.rows.length);
  }
  /** Update _elemSizeCache with the observed sizes. */
  _updateCachedSizes(entries) {
    let needsColumnUpdate = false;
    for (const entry of entries) {
      const newEntry = entry.borderBoxSize?.length ? {
        width: entry.borderBoxSize[0].inlineSize,
        height: entry.borderBoxSize[0].blockSize
      } : {
        width: entry.contentRect.width,
        height: entry.contentRect.height
      };
      if (newEntry.width !== this._elemSizeCache.get(entry.target)?.width && isCell(entry.target)) {
        needsColumnUpdate = true;
      }
      this._elemSizeCache.set(entry.target, newEntry);
    }
    if (needsColumnUpdate && this._updatedStickyColumnsParamsToReplay.length) {
      if (this._stickyColumnsReplayTimeout) {
        clearTimeout(this._stickyColumnsReplayTimeout);
      }
      this._stickyColumnsReplayTimeout = setTimeout(() => {
        if (this._destroyed) {
          return;
        }
        for (const update of this._updatedStickyColumnsParamsToReplay) {
          this.updateStickyColumns(update.rows, update.stickyStartStates, update.stickyEndStates, true, false);
        }
        this._updatedStickyColumnsParamsToReplay = [];
        this._stickyColumnsReplayTimeout = null;
      }, 0);
    }
  }
};
function isCell(element) {
  return ["cdk-cell", "cdk-header-cell", "cdk-footer-cell"].some((klass) => element.classList.contains(klass));
}
function getTableUnknownColumnError(id) {
  return Error(`Could not find column with id "${id}".`);
}
function getTableDuplicateColumnNameError(name) {
  return Error(`Duplicate column definition name provided: "${name}".`);
}
function getTableMultipleDefaultRowDefsError() {
  return Error(`There can only be one default row without a when predicate function. Or set \`multiTemplateDataRows\`.`);
}
function getTableMissingMatchingRowDefError(data) {
  return Error(`Could not find a matching row definition for the provided row data: ${JSON.stringify(data)}`);
}
function getTableMissingRowDefsError() {
  return Error("Missing definitions for header, footer, and row; cannot determine which columns should be rendered.");
}
function getTableUnknownDataSourceError() {
  return Error(`Provided data source did not match an array, Observable, or DataSource`);
}
function getTableTextColumnMissingParentTableError() {
  return Error(`Text column could not find a parent table for registration.`);
}
function getTableTextColumnMissingNameError() {
  return Error(`Table text column must have a name.`);
}
var STICKY_POSITIONING_LISTENER = new InjectionToken("CDK_SPL");
var CdkRecycleRows = class _CdkRecycleRows {
  static \u0275fac = function CdkRecycleRows_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkRecycleRows)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _CdkRecycleRows,
    selectors: [["cdk-table", "recycleRows", ""], ["table", "cdk-table", "", "recycleRows", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _RecycleViewRepeaterStrategy
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkRecycleRows, [{
    type: Directive,
    args: [{
      selector: "cdk-table[recycleRows], table[cdk-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
var DataRowOutlet = class _DataRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._rowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function DataRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _DataRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _DataRowOutlet,
    selectors: [["", "rowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[rowOutlet]"
    }]
  }], () => [], null);
})();
var HeaderRowOutlet = class _HeaderRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._headerRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function HeaderRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeaderRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _HeaderRowOutlet,
    selectors: [["", "headerRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HeaderRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[headerRowOutlet]"
    }]
  }], () => [], null);
})();
var FooterRowOutlet = class _FooterRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._footerRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function FooterRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FooterRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FooterRowOutlet,
    selectors: [["", "footerRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FooterRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[footerRowOutlet]"
    }]
  }], () => [], null);
})();
var NoDataRowOutlet = class _NoDataRowOutlet {
  viewContainer = inject(ViewContainerRef);
  elementRef = inject(ElementRef);
  constructor() {
    const table = inject(CDK_TABLE);
    table._noDataRowOutlet = this;
    table._outletAssigned();
  }
  static \u0275fac = function NoDataRowOutlet_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _NoDataRowOutlet)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _NoDataRowOutlet,
    selectors: [["", "noDataRowOutlet", ""]]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NoDataRowOutlet, [{
    type: Directive,
    args: [{
      selector: "[noDataRowOutlet]"
    }]
  }], () => [], null);
})();
var CdkTable = class _CdkTable {
  _differs = inject(IterableDiffers);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _platform = inject(Platform);
  _viewRepeater = inject(_VIEW_REPEATER_STRATEGY);
  _viewportRuler = inject(ViewportRuler);
  _stickyPositioningListener = inject(STICKY_POSITIONING_LISTENER, {
    optional: true,
    skipSelf: true
  });
  _document = inject(DOCUMENT);
  /** Latest data provided by the data source. */
  _data;
  /** Subject that emits when the component has been destroyed. */
  _onDestroy = new Subject();
  /** List of the rendered rows as identified by their `RenderRow` object. */
  _renderRows;
  /** Subscription that listens for the data provided by the data source. */
  _renderChangeSubscription;
  /**
   * Map of all the user's defined columns (header, data, and footer cell template) identified by
   * name. Collection populated by the column definitions gathered by `ContentChildren` as well as
   * any custom column definitions added to `_customColumnDefs`.
   */
  _columnDefsByName = /* @__PURE__ */ new Map();
  /**
   * Set of all row definitions that can be used by this table. Populated by the rows gathered by
   * using `ContentChildren` as well as any custom row definitions added to `_customRowDefs`.
   */
  _rowDefs;
  /**
   * Set of all header row definitions that can be used by this table. Populated by the rows
   * gathered by using `ContentChildren` as well as any custom row definitions added to
   * `_customHeaderRowDefs`.
   */
  _headerRowDefs;
  /**
   * Set of all row definitions that can be used by this table. Populated by the rows gathered by
   * using `ContentChildren` as well as any custom row definitions added to
   * `_customFooterRowDefs`.
   */
  _footerRowDefs;
  /** Differ used to find the changes in the data provided by the data source. */
  _dataDiffer;
  /** Stores the row definition that does not have a when predicate. */
  _defaultRowDef;
  /**
   * Column definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has
   * column definitions as *its* content child.
   */
  _customColumnDefs = /* @__PURE__ */ new Set();
  /**
   * Data row definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has
   * built-in data rows as *its* content child.
   */
  _customRowDefs = /* @__PURE__ */ new Set();
  /**
   * Header row definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has
   * built-in header rows as *its* content child.
   */
  _customHeaderRowDefs = /* @__PURE__ */ new Set();
  /**
   * Footer row definitions that were defined outside of the direct content children of the table.
   * These will be defined when, e.g., creating a wrapper around the cdkTable that has a
   * built-in footer row as *its* content child.
   */
  _customFooterRowDefs = /* @__PURE__ */ new Set();
  /** No data row that was defined outside of the direct content children of the table. */
  _customNoDataRow;
  /**
   * Whether the header row definition has been changed. Triggers an update to the header row after
   * content is checked. Initialized as true so that the table renders the initial set of rows.
   */
  _headerRowDefChanged = true;
  /**
   * Whether the footer row definition has been changed. Triggers an update to the footer row after
   * content is checked. Initialized as true so that the table renders the initial set of rows.
   */
  _footerRowDefChanged = true;
  /**
   * Whether the sticky column styles need to be updated. Set to `true` when the visible columns
   * change.
   */
  _stickyColumnStylesNeedReset = true;
  /**
   * Whether the sticky styler should recalculate cell widths when applying sticky styles. If
   * `false`, cached values will be used instead. This is only applicable to tables with
   * `_fixedLayout` enabled. For other tables, cell widths will always be recalculated.
   */
  _forceRecalculateCellWidths = true;
  /**
   * Cache of the latest rendered `RenderRow` objects as a map for easy retrieval when constructing
   * a new list of `RenderRow` objects for rendering rows. Since the new list is constructed with
   * the cached `RenderRow` objects when possible, the row identity is preserved when the data
   * and row template matches, which allows the `IterableDiffer` to check rows by reference
   * and understand which rows are added/moved/removed.
   *
   * Implemented as a map of maps where the first key is the `data: T` object and the second is the
   * `CdkRowDef<T>` object. With the two keys, the cache points to a `RenderRow<T>` object that
   * contains an array of created pairs. The array is necessary to handle cases where the data
   * array contains multiple duplicate data objects and each instantiated `RenderRow` must be
   * stored.
   */
  _cachedRenderRowsMap = /* @__PURE__ */ new Map();
  /** Whether the table is applied to a native `<table>`. */
  _isNativeHtmlTable;
  /**
   * Utility class that is responsible for applying the appropriate sticky positioning styles to
   * the table's rows and cells.
   */
  _stickyStyler;
  /**
   * CSS class added to any row or cell that has sticky positioning applied. May be overridden by
   * table subclasses.
   */
  stickyCssClass = "cdk-table-sticky";
  /**
   * Whether to manually add position: sticky to all sticky cell elements. Not needed if
   * the position is set in a selector associated with the value of stickyCssClass. May be
   * overridden by table subclasses
   */
  needsPositionStickyOnElement = true;
  /** Whether the component is being rendered on the server. */
  _isServer;
  /** Whether the no data row is currently showing anything. */
  _isShowingNoDataRow = false;
  /** Whether the table has rendered out all the outlets for the first time. */
  _hasAllOutlets = false;
  /** Whether the table is done initializing. */
  _hasInitialized = false;
  /** Aria role to apply to the table's cells based on the table's own role. */
  _getCellRole() {
    if (this._cellRoleInternal === void 0) {
      const tableRole = this._elementRef.nativeElement.getAttribute("role");
      return tableRole === "grid" || tableRole === "treegrid" ? "gridcell" : "cell";
    }
    return this._cellRoleInternal;
  }
  _cellRoleInternal = void 0;
  /**
   * Tracking function that will be used to check the differences in data changes. Used similarly
   * to `ngFor` `trackBy` function. Optimize row operations by identifying a row based on its data
   * relative to the function to know if a row should be added/removed/moved.
   * Accepts a function that takes two parameters, `index` and `item`.
   */
  get trackBy() {
    return this._trackByFn;
  }
  set trackBy(fn) {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && fn != null && typeof fn !== "function") {
      console.warn(`trackBy must be a function, but received ${JSON.stringify(fn)}.`);
    }
    this._trackByFn = fn;
  }
  _trackByFn;
  /**
   * The table's source of data, which can be provided in three ways (in order of complexity):
   *   - Simple data array (each object represents one table row)
   *   - Stream that emits a data array each time the array changes
   *   - `DataSource` object that implements the connect/disconnect interface.
   *
   * If a data array is provided, the table must be notified when the array's objects are
   * added, removed, or moved. This can be done by calling the `renderRows()` function which will
   * render the diff since the last table render. If the data array reference is changed, the table
   * will automatically trigger an update to the rows.
   *
   * When providing an Observable stream, the table will trigger an update automatically when the
   * stream emits a new array of data.
   *
   * Finally, when providing a `DataSource` object, the table will use the Observable stream
   * provided by the connect function and trigger updates when that stream emits new data array
   * values. During the table's ngOnDestroy or when the data source is removed from the table, the
   * table will call the DataSource's `disconnect` function (may be useful for cleaning up any
   * subscriptions registered during the connect process).
   */
  get dataSource() {
    return this._dataSource;
  }
  set dataSource(dataSource) {
    if (this._dataSource !== dataSource) {
      this._switchDataSource(dataSource);
    }
  }
  _dataSource;
  /**
   * Whether to allow multiple rows per data object by evaluating which rows evaluate their 'when'
   * predicate to true. If `multiTemplateDataRows` is false, which is the default value, then each
   * dataobject will render the first row that evaluates its when predicate to true, in the order
   * defined in the table, or otherwise the default row which does not have a when predicate.
   */
  get multiTemplateDataRows() {
    return this._multiTemplateDataRows;
  }
  set multiTemplateDataRows(value) {
    this._multiTemplateDataRows = value;
    if (this._rowOutlet && this._rowOutlet.viewContainer.length) {
      this._forceRenderDataRows();
      this.updateStickyColumnStyles();
    }
  }
  _multiTemplateDataRows = false;
  /**
   * Whether to use a fixed table layout. Enabling this option will enforce consistent column widths
   * and optimize rendering sticky styles for native tables. No-op for flex tables.
   */
  get fixedLayout() {
    return this._fixedLayout;
  }
  set fixedLayout(value) {
    this._fixedLayout = value;
    this._forceRecalculateCellWidths = true;
    this._stickyColumnStylesNeedReset = true;
  }
  _fixedLayout = false;
  /**
   * Emits when the table completes rendering a set of data rows based on the latest data from the
   * data source, even if the set of rows is empty.
   */
  contentChanged = new EventEmitter();
  // TODO(andrewseguin): Remove max value as the end index
  //   and instead calculate the view on init and scroll.
  /**
   * Stream containing the latest information on what rows are being displayed on screen.
   * Can be used by the data source to as a heuristic of what data should be provided.
   *
   * @docs-private
   */
  viewChange = new BehaviorSubject({
    start: 0,
    end: Number.MAX_VALUE
  });
  // Outlets in the table's template where the header, data rows, and footer will be inserted.
  _rowOutlet;
  _headerRowOutlet;
  _footerRowOutlet;
  _noDataRowOutlet;
  /**
   * The column definitions provided by the user that contain what the header, data, and footer
   * cells should render for each column.
   */
  _contentColumnDefs;
  /** Set of data row definitions that were provided to the table as content children. */
  _contentRowDefs;
  /** Set of header row definitions that were provided to the table as content children. */
  _contentHeaderRowDefs;
  /** Set of footer row definitions that were provided to the table as content children. */
  _contentFooterRowDefs;
  /** Row definition that will only be rendered if there's no data in the table. */
  _noDataRow;
  _injector = inject(Injector);
  constructor() {
    const role = inject(new HostAttributeToken("role"), {
      optional: true
    });
    if (!role) {
      this._elementRef.nativeElement.setAttribute("role", "table");
    }
    this._isServer = !this._platform.isBrowser;
    this._isNativeHtmlTable = this._elementRef.nativeElement.nodeName === "TABLE";
    this._dataDiffer = this._differs.find([]).create((_i, dataRow) => {
      return this.trackBy ? this.trackBy(dataRow.dataIndex, dataRow.data) : dataRow;
    });
  }
  ngOnInit() {
    this._setupStickyStyler();
    this._viewportRuler.change().pipe(takeUntil(this._onDestroy)).subscribe(() => {
      this._forceRecalculateCellWidths = true;
    });
  }
  ngAfterContentInit() {
    this._hasInitialized = true;
  }
  ngAfterContentChecked() {
    if (this._canRender()) {
      this._render();
    }
  }
  ngOnDestroy() {
    this._stickyStyler?.destroy();
    [this._rowOutlet?.viewContainer, this._headerRowOutlet?.viewContainer, this._footerRowOutlet?.viewContainer, this._cachedRenderRowsMap, this._customColumnDefs, this._customRowDefs, this._customHeaderRowDefs, this._customFooterRowDefs, this._columnDefsByName].forEach((def) => {
      def?.clear();
    });
    this._headerRowDefs = [];
    this._footerRowDefs = [];
    this._defaultRowDef = null;
    this._onDestroy.next();
    this._onDestroy.complete();
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
  }
  /**
   * Renders rows based on the table's latest set of data, which was either provided directly as an
   * input or retrieved through an Observable stream (directly or from a DataSource).
   * Checks for differences in the data since the last diff to perform only the necessary
   * changes (add/remove/move rows).
   *
   * If the table's data source is a DataSource or Observable, this will be invoked automatically
   * each time the provided Observable stream emits a new data array. Otherwise if your data is
   * an array, this function will need to be called to render any changes.
   */
  renderRows() {
    this._renderRows = this._getAllRenderRows();
    const changes = this._dataDiffer.diff(this._renderRows);
    if (!changes) {
      this._updateNoDataRow();
      this.contentChanged.next();
      return;
    }
    const viewContainer = this._rowOutlet.viewContainer;
    this._viewRepeater.applyChanges(changes, viewContainer, (record, _adjustedPreviousIndex, currentIndex) => this._getEmbeddedViewArgs(record.item, currentIndex), (record) => record.item.data, (change) => {
      if (change.operation === _ViewRepeaterOperation.INSERTED && change.context) {
        this._renderCellTemplateForItem(change.record.item.rowDef, change.context);
      }
    });
    this._updateRowIndexContext();
    changes.forEachIdentityChange((record) => {
      const rowView = viewContainer.get(record.currentIndex);
      rowView.context.$implicit = record.item.data;
    });
    this._updateNoDataRow();
    this.contentChanged.next();
    this.updateStickyColumnStyles();
  }
  /** Adds a column definition that was not included as part of the content children. */
  addColumnDef(columnDef) {
    this._customColumnDefs.add(columnDef);
  }
  /** Removes a column definition that was not included as part of the content children. */
  removeColumnDef(columnDef) {
    this._customColumnDefs.delete(columnDef);
  }
  /** Adds a row definition that was not included as part of the content children. */
  addRowDef(rowDef) {
    this._customRowDefs.add(rowDef);
  }
  /** Removes a row definition that was not included as part of the content children. */
  removeRowDef(rowDef) {
    this._customRowDefs.delete(rowDef);
  }
  /** Adds a header row definition that was not included as part of the content children. */
  addHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.add(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Removes a header row definition that was not included as part of the content children. */
  removeHeaderRowDef(headerRowDef) {
    this._customHeaderRowDefs.delete(headerRowDef);
    this._headerRowDefChanged = true;
  }
  /** Adds a footer row definition that was not included as part of the content children. */
  addFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.add(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Removes a footer row definition that was not included as part of the content children. */
  removeFooterRowDef(footerRowDef) {
    this._customFooterRowDefs.delete(footerRowDef);
    this._footerRowDefChanged = true;
  }
  /** Sets a no data row definition that was not included as a part of the content children. */
  setNoDataRow(noDataRow) {
    this._customNoDataRow = noDataRow;
  }
  /**
   * Updates the header sticky styles. First resets all applied styles with respect to the cells
   * sticking to the top. Then, evaluating which cells need to be stuck to the top. This is
   * automatically called when the header row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyHeaderRowStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    if (this._isNativeHtmlTable) {
      const thead = closestTableSection(this._headerRowOutlet, "thead");
      if (thead) {
        thead.style.display = headerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._headerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(headerRows, ["top"]);
    this._stickyStyler.stickRows(headerRows, stickyStates, "top");
    this._headerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the footer sticky styles. First resets all applied styles with respect to the cells
   * sticking to the bottom. Then, evaluating which cells need to be stuck to the bottom. This is
   * automatically called when the footer row changes its displayed set of columns, or if its
   * sticky input changes. May be called manually for cases where the cell content changes outside
   * of these events.
   */
  updateStickyFooterRowStyles() {
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable) {
      const tfoot = closestTableSection(this._footerRowOutlet, "tfoot");
      if (tfoot) {
        tfoot.style.display = footerRows.length ? "" : "none";
      }
    }
    const stickyStates = this._footerRowDefs.map((def) => def.sticky);
    this._stickyStyler.clearStickyPositioning(footerRows, ["bottom"]);
    this._stickyStyler.stickRows(footerRows, stickyStates, "bottom");
    this._stickyStyler.updateStickyFooterContainer(this._elementRef.nativeElement, stickyStates);
    this._footerRowDefs.forEach((def) => def.resetStickyChanged());
  }
  /**
   * Updates the column sticky styles. First resets all applied styles with respect to the cells
   * sticking to the left and right. Then sticky styles are added for the left and right according
   * to the column definitions for each cell in each row. This is automatically called when
   * the data source provides a new set of data or when a column definition changes its sticky
   * input. May be called manually for cases where the cell content changes outside of these events.
   */
  updateStickyColumnStyles() {
    const headerRows = this._getRenderedRows(this._headerRowOutlet);
    const dataRows = this._getRenderedRows(this._rowOutlet);
    const footerRows = this._getRenderedRows(this._footerRowOutlet);
    if (this._isNativeHtmlTable && !this._fixedLayout || this._stickyColumnStylesNeedReset) {
      this._stickyStyler.clearStickyPositioning([...headerRows, ...dataRows, ...footerRows], ["left", "right"]);
      this._stickyColumnStylesNeedReset = false;
    }
    headerRows.forEach((headerRow, i) => {
      this._addStickyColumnStyles([headerRow], this._headerRowDefs[i]);
    });
    this._rowDefs.forEach((rowDef) => {
      const rows = [];
      for (let i = 0; i < dataRows.length; i++) {
        if (this._renderRows[i].rowDef === rowDef) {
          rows.push(dataRows[i]);
        }
      }
      this._addStickyColumnStyles(rows, rowDef);
    });
    footerRows.forEach((footerRow, i) => {
      this._addStickyColumnStyles([footerRow], this._footerRowDefs[i]);
    });
    Array.from(this._columnDefsByName.values()).forEach((def) => def.resetStickyChanged());
  }
  /** Invoked whenever an outlet is created and has been assigned to the table. */
  _outletAssigned() {
    if (!this._hasAllOutlets && this._rowOutlet && this._headerRowOutlet && this._footerRowOutlet && this._noDataRowOutlet) {
      this._hasAllOutlets = true;
      if (this._canRender()) {
        this._render();
      }
    }
  }
  /** Whether the table has all the information to start rendering. */
  _canRender() {
    return this._hasAllOutlets && this._hasInitialized;
  }
  /** Renders the table if its state has changed. */
  _render() {
    this._cacheRowDefs();
    this._cacheColumnDefs();
    if (!this._headerRowDefs.length && !this._footerRowDefs.length && !this._rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingRowDefsError();
    }
    const columnsChanged = this._renderUpdatedColumns();
    const rowDefsChanged = columnsChanged || this._headerRowDefChanged || this._footerRowDefChanged;
    this._stickyColumnStylesNeedReset = this._stickyColumnStylesNeedReset || rowDefsChanged;
    this._forceRecalculateCellWidths = rowDefsChanged;
    if (this._headerRowDefChanged) {
      this._forceRenderHeaderRows();
      this._headerRowDefChanged = false;
    }
    if (this._footerRowDefChanged) {
      this._forceRenderFooterRows();
      this._footerRowDefChanged = false;
    }
    if (this.dataSource && this._rowDefs.length > 0 && !this._renderChangeSubscription) {
      this._observeRenderChanges();
    } else if (this._stickyColumnStylesNeedReset) {
      this.updateStickyColumnStyles();
    }
    this._checkStickyStates();
  }
  /**
   * Get the list of RenderRow objects to render according to the current list of data and defined
   * row definitions. If the previous list already contained a particular pair, it should be reused
   * so that the differ equates their references.
   */
  _getAllRenderRows() {
    const renderRows = [];
    const prevCachedRenderRows = this._cachedRenderRowsMap;
    this._cachedRenderRowsMap = /* @__PURE__ */ new Map();
    if (!this._data) {
      return renderRows;
    }
    for (let i = 0; i < this._data.length; i++) {
      let data = this._data[i];
      const renderRowsForData = this._getRenderRowsForData(data, i, prevCachedRenderRows.get(data));
      if (!this._cachedRenderRowsMap.has(data)) {
        this._cachedRenderRowsMap.set(data, /* @__PURE__ */ new WeakMap());
      }
      for (let j = 0; j < renderRowsForData.length; j++) {
        let renderRow = renderRowsForData[j];
        const cache = this._cachedRenderRowsMap.get(renderRow.data);
        if (cache.has(renderRow.rowDef)) {
          cache.get(renderRow.rowDef).push(renderRow);
        } else {
          cache.set(renderRow.rowDef, [renderRow]);
        }
        renderRows.push(renderRow);
      }
    }
    return renderRows;
  }
  /**
   * Gets a list of `RenderRow<T>` for the provided data object and any `CdkRowDef` objects that
   * should be rendered for this data. Reuses the cached RenderRow objects if they match the same
   * `(T, CdkRowDef)` pair.
   */
  _getRenderRowsForData(data, dataIndex, cache) {
    const rowDefs = this._getRowDefs(data, dataIndex);
    return rowDefs.map((rowDef) => {
      const cachedRenderRows = cache && cache.has(rowDef) ? cache.get(rowDef) : [];
      if (cachedRenderRows.length) {
        const dataRow = cachedRenderRows.shift();
        dataRow.dataIndex = dataIndex;
        return dataRow;
      } else {
        return {
          data,
          rowDef,
          dataIndex
        };
      }
    });
  }
  /** Update the map containing the content's column definitions. */
  _cacheColumnDefs() {
    this._columnDefsByName.clear();
    const columnDefs = mergeArrayAndSet(this._getOwnDefs(this._contentColumnDefs), this._customColumnDefs);
    columnDefs.forEach((columnDef) => {
      if (this._columnDefsByName.has(columnDef.name) && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableDuplicateColumnNameError(columnDef.name);
      }
      this._columnDefsByName.set(columnDef.name, columnDef);
    });
  }
  /** Update the list of all available row definitions that can be used. */
  _cacheRowDefs() {
    this._headerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentHeaderRowDefs), this._customHeaderRowDefs);
    this._footerRowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentFooterRowDefs), this._customFooterRowDefs);
    this._rowDefs = mergeArrayAndSet(this._getOwnDefs(this._contentRowDefs), this._customRowDefs);
    const defaultRowDefs = this._rowDefs.filter((def) => !def.when);
    if (!this.multiTemplateDataRows && defaultRowDefs.length > 1 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMultipleDefaultRowDefsError();
    }
    this._defaultRowDef = defaultRowDefs[0];
  }
  /**
   * Check if the header, data, or footer rows have changed what columns they want to display or
   * whether the sticky states have changed for the header or footer. If there is a diff, then
   * re-render that section.
   */
  _renderUpdatedColumns() {
    const columnsDiffReducer = (acc, def) => {
      const diff = !!def.getColumnsDiff();
      return acc || diff;
    };
    const dataColumnsChanged = this._rowDefs.reduce(columnsDiffReducer, false);
    if (dataColumnsChanged) {
      this._forceRenderDataRows();
    }
    const headerColumnsChanged = this._headerRowDefs.reduce(columnsDiffReducer, false);
    if (headerColumnsChanged) {
      this._forceRenderHeaderRows();
    }
    const footerColumnsChanged = this._footerRowDefs.reduce(columnsDiffReducer, false);
    if (footerColumnsChanged) {
      this._forceRenderFooterRows();
    }
    return dataColumnsChanged || headerColumnsChanged || footerColumnsChanged;
  }
  /**
   * Switch to the provided data source by resetting the data and unsubscribing from the current
   * render change subscription if one exists. If the data source is null, interpret this by
   * clearing the row outlet. Otherwise start listening for new data.
   */
  _switchDataSource(dataSource) {
    this._data = [];
    if (isDataSource(this.dataSource)) {
      this.dataSource.disconnect(this);
    }
    if (this._renderChangeSubscription) {
      this._renderChangeSubscription.unsubscribe();
      this._renderChangeSubscription = null;
    }
    if (!dataSource) {
      if (this._dataDiffer) {
        this._dataDiffer.diff([]);
      }
      if (this._rowOutlet) {
        this._rowOutlet.viewContainer.clear();
      }
    }
    this._dataSource = dataSource;
  }
  /** Set up a subscription for the data provided by the data source. */
  _observeRenderChanges() {
    if (!this.dataSource) {
      return;
    }
    let dataStream;
    if (isDataSource(this.dataSource)) {
      dataStream = this.dataSource.connect(this);
    } else if (isObservable(this.dataSource)) {
      dataStream = this.dataSource;
    } else if (Array.isArray(this.dataSource)) {
      dataStream = of(this.dataSource);
    }
    if (dataStream === void 0 && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableUnknownDataSourceError();
    }
    this._renderChangeSubscription = dataStream.pipe(takeUntil(this._onDestroy)).subscribe((data) => {
      this._data = data || [];
      this.renderRows();
    });
  }
  /**
   * Clears any existing content in the header row outlet and creates a new embedded view
   * in the outlet using the header row definition.
   */
  _forceRenderHeaderRows() {
    if (this._headerRowOutlet.viewContainer.length > 0) {
      this._headerRowOutlet.viewContainer.clear();
    }
    this._headerRowDefs.forEach((def, i) => this._renderRow(this._headerRowOutlet, def, i));
    this.updateStickyHeaderRowStyles();
  }
  /**
   * Clears any existing content in the footer row outlet and creates a new embedded view
   * in the outlet using the footer row definition.
   */
  _forceRenderFooterRows() {
    if (this._footerRowOutlet.viewContainer.length > 0) {
      this._footerRowOutlet.viewContainer.clear();
    }
    this._footerRowDefs.forEach((def, i) => this._renderRow(this._footerRowOutlet, def, i));
    this.updateStickyFooterRowStyles();
  }
  /** Adds the sticky column styles for the rows according to the columns' stick states. */
  _addStickyColumnStyles(rows, rowDef) {
    const columnDefs = Array.from(rowDef?.columns || []).map((columnName) => {
      const columnDef = this._columnDefsByName.get(columnName);
      if (!columnDef && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnName);
      }
      return columnDef;
    });
    const stickyStartStates = columnDefs.map((columnDef) => columnDef.sticky);
    const stickyEndStates = columnDefs.map((columnDef) => columnDef.stickyEnd);
    this._stickyStyler.updateStickyColumns(rows, stickyStartStates, stickyEndStates, !this._fixedLayout || this._forceRecalculateCellWidths);
  }
  /** Gets the list of rows that have been rendered in the row outlet. */
  _getRenderedRows(rowOutlet) {
    const renderedRows = [];
    for (let i = 0; i < rowOutlet.viewContainer.length; i++) {
      const viewRef = rowOutlet.viewContainer.get(i);
      renderedRows.push(viewRef.rootNodes[0]);
    }
    return renderedRows;
  }
  /**
   * Get the matching row definitions that should be used for this row data. If there is only
   * one row definition, it is returned. Otherwise, find the row definitions that has a when
   * predicate that returns true with the data. If none return true, return the default row
   * definition.
   */
  _getRowDefs(data, dataIndex) {
    if (this._rowDefs.length == 1) {
      return [this._rowDefs[0]];
    }
    let rowDefs = [];
    if (this.multiTemplateDataRows) {
      rowDefs = this._rowDefs.filter((def) => !def.when || def.when(dataIndex, data));
    } else {
      let rowDef = this._rowDefs.find((def) => def.when && def.when(dataIndex, data)) || this._defaultRowDef;
      if (rowDef) {
        rowDefs.push(rowDef);
      }
    }
    if (!rowDefs.length && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableMissingMatchingRowDefError(data);
    }
    return rowDefs;
  }
  _getEmbeddedViewArgs(renderRow, index) {
    const rowDef = renderRow.rowDef;
    const context = {
      $implicit: renderRow.data
    };
    return {
      templateRef: rowDef.template,
      context,
      index
    };
  }
  /**
   * Creates a new row template in the outlet and fills it with the set of cell templates.
   * Optionally takes a context to provide to the row and cells, as well as an optional index
   * of where to place the new row template in the outlet.
   */
  _renderRow(outlet, rowDef, index, context = {}) {
    const view = outlet.viewContainer.createEmbeddedView(rowDef.template, context, index);
    this._renderCellTemplateForItem(rowDef, context);
    return view;
  }
  _renderCellTemplateForItem(rowDef, context) {
    for (let cellTemplate of this._getCellTemplates(rowDef)) {
      if (CdkCellOutlet.mostRecentCellOutlet) {
        CdkCellOutlet.mostRecentCellOutlet._viewContainer.createEmbeddedView(cellTemplate, context);
      }
    }
    this._changeDetectorRef.markForCheck();
  }
  /**
   * Updates the index-related context for each row to reflect any changes in the index of the rows,
   * e.g. first/last/even/odd.
   */
  _updateRowIndexContext() {
    const viewContainer = this._rowOutlet.viewContainer;
    for (let renderIndex = 0, count = viewContainer.length; renderIndex < count; renderIndex++) {
      const viewRef = viewContainer.get(renderIndex);
      const context = viewRef.context;
      context.count = count;
      context.first = renderIndex === 0;
      context.last = renderIndex === count - 1;
      context.even = renderIndex % 2 === 0;
      context.odd = !context.even;
      if (this.multiTemplateDataRows) {
        context.dataIndex = this._renderRows[renderIndex].dataIndex;
        context.renderIndex = renderIndex;
      } else {
        context.index = this._renderRows[renderIndex].dataIndex;
      }
    }
  }
  /** Gets the column definitions for the provided row def. */
  _getCellTemplates(rowDef) {
    if (!rowDef || !rowDef.columns) {
      return [];
    }
    return Array.from(rowDef.columns, (columnId) => {
      const column = this._columnDefsByName.get(columnId);
      if (!column && (typeof ngDevMode === "undefined" || ngDevMode)) {
        throw getTableUnknownColumnError(columnId);
      }
      return rowDef.extractCellTemplate(column);
    });
  }
  /**
   * Forces a re-render of the data rows. Should be called in cases where there has been an input
   * change that affects the evaluation of which rows should be rendered, e.g. toggling
   * `multiTemplateDataRows` or adding/removing row definitions.
   */
  _forceRenderDataRows() {
    this._dataDiffer.diff([]);
    this._rowOutlet.viewContainer.clear();
    this.renderRows();
  }
  /**
   * Checks if there has been a change in sticky states since last check and applies the correct
   * sticky styles. Since checking resets the "dirty" state, this should only be performed once
   * during a change detection and after the inputs are settled (after content check).
   */
  _checkStickyStates() {
    const stickyCheckReducer = (acc, d) => {
      return acc || d.hasStickyChanged();
    };
    if (this._headerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyHeaderRowStyles();
    }
    if (this._footerRowDefs.reduce(stickyCheckReducer, false)) {
      this.updateStickyFooterRowStyles();
    }
    if (Array.from(this._columnDefsByName.values()).reduce(stickyCheckReducer, false)) {
      this._stickyColumnStylesNeedReset = true;
      this.updateStickyColumnStyles();
    }
  }
  /**
   * Creates the sticky styler that will be used for sticky rows and columns. Listens
   * for directionality changes and provides the latest direction to the styler. Re-applies column
   * stickiness when directionality changes.
   */
  _setupStickyStyler() {
    const direction = this._dir ? this._dir.value : "ltr";
    this._stickyStyler = new StickyStyler(this._isNativeHtmlTable, this.stickyCssClass, this._platform.isBrowser, this.needsPositionStickyOnElement, direction, this._stickyPositioningListener, this._injector);
    (this._dir ? this._dir.change : of()).pipe(takeUntil(this._onDestroy)).subscribe((value) => {
      this._stickyStyler.direction = value;
      this.updateStickyColumnStyles();
    });
  }
  /** Filters definitions that belong to this table from a QueryList. */
  _getOwnDefs(items) {
    return items.filter((item) => !item._table || item._table === this);
  }
  /** Creates or removes the no data row, depending on whether any data is being shown. */
  _updateNoDataRow() {
    const noDataRow = this._customNoDataRow || this._noDataRow;
    if (!noDataRow) {
      return;
    }
    const shouldShow = this._rowOutlet.viewContainer.length === 0;
    if (shouldShow === this._isShowingNoDataRow) {
      return;
    }
    const container = this._noDataRowOutlet.viewContainer;
    if (shouldShow) {
      const view = container.createEmbeddedView(noDataRow.templateRef);
      const rootNode = view.rootNodes[0];
      if (view.rootNodes.length === 1 && rootNode?.nodeType === this._document.ELEMENT_NODE) {
        rootNode.setAttribute("role", "row");
        rootNode.classList.add(noDataRow._contentClassName);
      }
    } else {
      container.clear();
    }
    this._isShowingNoDataRow = shouldShow;
    this._changeDetectorRef.markForCheck();
  }
  static \u0275fac = function CdkTable_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTable)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTable,
    selectors: [["cdk-table"], ["table", "cdk-table", ""]],
    contentQueries: function CdkTable_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, CdkNoDataRow, 5);
        \u0275\u0275contentQuery(dirIndex, CdkColumnDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkRowDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkHeaderRowDef, 5);
        \u0275\u0275contentQuery(dirIndex, CdkFooterRowDef, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._noDataRow = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentColumnDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentRowDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentHeaderRowDefs = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._contentFooterRowDefs = _t);
      }
    },
    hostAttrs: [1, "cdk-table"],
    hostVars: 2,
    hostBindings: function CdkTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("cdk-table-fixed-layout", ctx.fixedLayout);
      }
    },
    inputs: {
      trackBy: "trackBy",
      dataSource: "dataSource",
      multiTemplateDataRows: [2, "multiTemplateDataRows", "multiTemplateDataRows", booleanAttribute],
      fixedLayout: [2, "fixedLayout", "fixedLayout", booleanAttribute]
    },
    outputs: {
      contentChanged: "contentChanged"
    },
    exportAs: ["cdkTable"],
    features: [\u0275\u0275ProvidersFeature([
      {
        provide: CDK_TABLE,
        useExisting: _CdkTable
      },
      {
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _DisposeViewRepeaterStrategy
      },
      // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }
    ])],
    ngContentSelectors: _c1,
    decls: 5,
    vars: 2,
    consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function CdkTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c0);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
        \u0275\u0275conditionalCreate(2, CdkTable_Conditional_2_Template, 1, 0);
        \u0275\u0275conditionalCreate(3, CdkTable_Conditional_3_Template, 7, 0)(4, CdkTable_Conditional_4_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
      }
    },
    dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTable, [{
    type: Component,
    args: [{
      selector: "cdk-table, table[cdk-table]",
      exportAs: "cdkTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "cdk-table",
        "[class.cdk-table-fixed-layout]": "fixedLayout"
      },
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      providers: [
        {
          provide: CDK_TABLE,
          useExisting: CdkTable
        },
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".cdk-table-fixed-layout{table-layout:fixed}\n"]
    }]
  }], () => [], {
    trackBy: [{
      type: Input
    }],
    dataSource: [{
      type: Input
    }],
    multiTemplateDataRows: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fixedLayout: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    contentChanged: [{
      type: Output
    }],
    _contentColumnDefs: [{
      type: ContentChildren,
      args: [CdkColumnDef, {
        descendants: true
      }]
    }],
    _contentRowDefs: [{
      type: ContentChildren,
      args: [CdkRowDef, {
        descendants: true
      }]
    }],
    _contentHeaderRowDefs: [{
      type: ContentChildren,
      args: [CdkHeaderRowDef, {
        descendants: true
      }]
    }],
    _contentFooterRowDefs: [{
      type: ContentChildren,
      args: [CdkFooterRowDef, {
        descendants: true
      }]
    }],
    _noDataRow: [{
      type: ContentChild,
      args: [CdkNoDataRow]
    }]
  });
})();
function mergeArrayAndSet(array, set) {
  return array.concat(Array.from(set));
}
function closestTableSection(outlet, section) {
  const uppercaseSection = section.toUpperCase();
  let current = outlet.viewContainer.element.nativeElement;
  while (current) {
    const nodeName = current.nodeType === 1 ? current.nodeName : null;
    if (nodeName === uppercaseSection) {
      return current;
    } else if (nodeName === "TABLE") {
      break;
    }
    current = current.parentNode;
  }
  return null;
}
var CdkTextColumn = class _CdkTextColumn {
  _table = inject(CdkTable, {
    optional: true
  });
  _options = inject(TEXT_COLUMN_OPTIONS, {
    optional: true
  });
  /** Column name that should be used to reference this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
    this._syncColumnDefName();
  }
  _name;
  /**
   * Text label that should be used for the column header. If this property is not
   * set, the header text will default to the column name with its first letter capitalized.
   */
  headerText;
  /**
   * Accessor function to retrieve the data rendered for each cell. If this
   * property is not set, the data cells will render the value found in the data's property matching
   * the column's name. For example, if the column is named `id`, then the rendered value will be
   * value defined by the data's `id` property.
   */
  dataAccessor;
  /** Alignment of the cell values. */
  justify = "start";
  /** @docs-private */
  columnDef;
  /**
   * The column cell is provided to the column during `ngOnInit` with a static query.
   * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
   * column definition was provided in the same view as the table, which is not the case with this
   * component.
   * @docs-private
   */
  cell;
  /**
   * The column headerCell is provided to the column during `ngOnInit` with a static query.
   * Normally, this will be retrieved by the column using `ContentChild`, but that assumes the
   * column definition was provided in the same view as the table, which is not the case with this
   * component.
   * @docs-private
   */
  headerCell;
  constructor() {
    this._options = this._options || {};
  }
  ngOnInit() {
    this._syncColumnDefName();
    if (this.headerText === void 0) {
      this.headerText = this._createDefaultHeaderText();
    }
    if (!this.dataAccessor) {
      this.dataAccessor = this._options.defaultDataAccessor || ((data, name) => data[name]);
    }
    if (this._table) {
      this.columnDef.cell = this.cell;
      this.columnDef.headerCell = this.headerCell;
      this._table.addColumnDef(this.columnDef);
    } else if (typeof ngDevMode === "undefined" || ngDevMode) {
      throw getTableTextColumnMissingParentTableError();
    }
  }
  ngOnDestroy() {
    if (this._table) {
      this._table.removeColumnDef(this.columnDef);
    }
  }
  /**
   * Creates a default header text. Use the options' header text transformation function if one
   * has been provided. Otherwise simply capitalize the column name.
   */
  _createDefaultHeaderText() {
    const name = this.name;
    if (!name && (typeof ngDevMode === "undefined" || ngDevMode)) {
      throw getTableTextColumnMissingNameError();
    }
    if (this._options && this._options.defaultHeaderTextTransform) {
      return this._options.defaultHeaderTextTransform(name);
    }
    return name[0].toUpperCase() + name.slice(1);
  }
  /** Synchronizes the column definition name with the text column name. */
  _syncColumnDefName() {
    if (this.columnDef) {
      this.columnDef.name = this.name;
    }
  }
  static \u0275fac = function CdkTextColumn_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTextColumn)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _CdkTextColumn,
    selectors: [["cdk-text-column"]],
    viewQuery: function CdkTextColumn_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(CdkColumnDef, 7);
        \u0275\u0275viewQuery(CdkCellDef, 7);
        \u0275\u0275viewQuery(CdkHeaderCellDef, 7);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.columnDef = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.cell = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.headerCell = _t.first);
      }
    },
    inputs: {
      name: "name",
      headerText: "headerText",
      dataAccessor: "dataAccessor",
      justify: "justify"
    },
    decls: 3,
    vars: 0,
    consts: [["cdkColumnDef", ""], ["cdk-header-cell", "", 3, "text-align", 4, "cdkHeaderCellDef"], ["cdk-cell", "", 3, "text-align", 4, "cdkCellDef"], ["cdk-header-cell", ""], ["cdk-cell", ""]],
    template: function CdkTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0, 0);
        \u0275\u0275template(1, CdkTextColumn_th_1_Template, 2, 3, "th", 1)(2, CdkTextColumn_td_2_Template, 2, 3, "td", 2);
        \u0275\u0275elementContainerEnd();
      }
    },
    dependencies: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTextColumn, [{
    type: Component,
    args: [{
      selector: "cdk-text-column",
      template: `
    <ng-container cdkColumnDef>
      <th cdk-header-cell *cdkHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td cdk-cell *cdkCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [CdkColumnDef, CdkHeaderCellDef, CdkHeaderCell, CdkCellDef, CdkCell]
    }]
  }], () => [], {
    name: [{
      type: Input
    }],
    headerText: [{
      type: Input
    }],
    dataAccessor: [{
      type: Input
    }],
    justify: [{
      type: Input
    }],
    columnDef: [{
      type: ViewChild,
      args: [CdkColumnDef, {
        static: true
      }]
    }],
    cell: [{
      type: ViewChild,
      args: [CdkCellDef, {
        static: true
      }]
    }],
    headerCell: [{
      type: ViewChild,
      args: [CdkHeaderCellDef, {
        static: true
      }]
    }]
  });
})();
var EXPORTED_DECLARATIONS = [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet];
var CdkTableModule = class _CdkTableModule {
  static \u0275fac = function CdkTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CdkTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CdkTableModule,
    imports: [ScrollingModule, CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet],
    exports: [CdkTable, CdkRowDef, CdkCellDef, CdkCellOutlet, CdkHeaderCellDef, CdkFooterCellDef, CdkColumnDef, CdkCell, CdkRow, CdkHeaderCell, CdkFooterCell, CdkHeaderRow, CdkHeaderRowDef, CdkFooterRow, CdkFooterRowDef, DataRowOutlet, HeaderRowOutlet, FooterRowOutlet, CdkTextColumn, CdkNoDataRow, CdkRecycleRows, NoDataRowOutlet]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ScrollingModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CdkTableModule, [{
    type: NgModule,
    args: [{
      exports: EXPORTED_DECLARATIONS,
      imports: [ScrollingModule, ...EXPORTED_DECLARATIONS]
    }]
  }], null, null);
})();

// node_modules/@angular/material/fesm2022/table.mjs
var _c02 = [[["caption"]], [["colgroup"], ["col"]], "*"];
var _c12 = ["caption", "colgroup, col", "*"];
function MatTable_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275projection(0, 2);
  }
}
function MatTable_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "thead", 0);
    \u0275\u0275elementContainer(1, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "tbody", 2);
    \u0275\u0275elementContainer(3, 3)(4, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "tfoot", 0);
    \u0275\u0275elementContainer(6, 5);
    \u0275\u0275elementEnd();
  }
}
function MatTable_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0, 1)(1, 3)(2, 4)(3, 5);
  }
}
function MatTextColumn_th_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.headerText, " ");
  }
}
function MatTextColumn_td_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("text-align", ctx_r0.justify);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.dataAccessor(data_r2, ctx_r0.name), " ");
  }
}
var MatRecycleRows = class _MatRecycleRows {
  static \u0275fac = function MatRecycleRows_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatRecycleRows)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRecycleRows,
    selectors: [["mat-table", "recycleRows", ""], ["table", "mat-table", "", "recycleRows", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: _VIEW_REPEATER_STRATEGY,
      useClass: _RecycleViewRepeaterStrategy
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRecycleRows, [{
    type: Directive,
    args: [{
      selector: "mat-table[recycleRows], table[mat-table][recycleRows]",
      providers: [{
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _RecycleViewRepeaterStrategy
      }]
    }]
  }], null, null);
})();
var MatTable = class _MatTable extends CdkTable {
  /** Overrides the sticky CSS class set by the `CdkTable`. */
  stickyCssClass = "mat-mdc-table-sticky";
  /** Overrides the need to add position: sticky on every sticky cell element in `CdkTable`. */
  needsPositionStickyOnElement = false;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTable_BaseFactory;
    return function MatTable_Factory(__ngFactoryType__) {
      return (\u0275MatTable_BaseFactory || (\u0275MatTable_BaseFactory = \u0275\u0275getInheritedFactory(_MatTable)))(__ngFactoryType__ || _MatTable);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTable,
    selectors: [["mat-table"], ["table", "mat-table", ""]],
    hostAttrs: [1, "mat-mdc-table", "mdc-data-table__table"],
    hostVars: 2,
    hostBindings: function MatTable_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classProp("mdc-table-fixed-layout", ctx.fixedLayout);
      }
    },
    exportAs: ["matTable"],
    features: [\u0275\u0275ProvidersFeature([
      {
        provide: CdkTable,
        useExisting: _MatTable
      },
      {
        provide: CDK_TABLE,
        useExisting: _MatTable
      },
      // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
      //  is only included in the build if used.
      {
        provide: _VIEW_REPEATER_STRATEGY,
        useClass: _DisposeViewRepeaterStrategy
      },
      // Prevent nested tables from seeing this table's StickyPositioningListener.
      {
        provide: STICKY_POSITIONING_LISTENER,
        useValue: null
      }
    ]), \u0275\u0275InheritDefinitionFeature],
    ngContentSelectors: _c12,
    decls: 5,
    vars: 2,
    consts: [["role", "rowgroup"], ["headerRowOutlet", ""], ["role", "rowgroup", 1, "mdc-data-table__content"], ["rowOutlet", ""], ["noDataRowOutlet", ""], ["footerRowOutlet", ""]],
    template: function MatTable_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275projection(0);
        \u0275\u0275projection(1, 1);
        \u0275\u0275conditionalCreate(2, MatTable_Conditional_2_Template, 1, 0);
        \u0275\u0275conditionalCreate(3, MatTable_Conditional_3_Template, 7, 0)(4, MatTable_Conditional_4_Template, 4, 0);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx._isServer ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isNativeHtmlTable ? 3 : 4);
      }
    },
    dependencies: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
    styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:var(--mat-table-header-container-height, 56px)}mat-row{min-height:var(--mat-table-row-item-container-height, 52px)}mat-footer-row{min-height:var(--mat-table-footer-container-height, 52px)}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTable, [{
    type: Component,
    args: [{
      selector: "mat-table, table[mat-table]",
      exportAs: "matTable",
      template: `
    <ng-content select="caption"/>
    <ng-content select="colgroup, col"/>

    <!--
      Unprojected content throws a hydration error so we need this to capture it.
      It gets removed on the client so it doesn't affect the layout.
    -->
    @if (_isServer) {
      <ng-content/>
    }

    @if (_isNativeHtmlTable) {
      <thead role="rowgroup">
        <ng-container headerRowOutlet/>
      </thead>
      <tbody class="mdc-data-table__content" role="rowgroup">
        <ng-container rowOutlet/>
        <ng-container noDataRowOutlet/>
      </tbody>
      <tfoot role="rowgroup">
        <ng-container footerRowOutlet/>
      </tfoot>
    } @else {
      <ng-container headerRowOutlet/>
      <ng-container rowOutlet/>
      <ng-container noDataRowOutlet/>
      <ng-container footerRowOutlet/>
    }
  `,
      host: {
        "class": "mat-mdc-table mdc-data-table__table",
        "[class.mdc-table-fixed-layout]": "fixedLayout"
      },
      providers: [
        {
          provide: CdkTable,
          useExisting: MatTable
        },
        {
          provide: CDK_TABLE,
          useExisting: MatTable
        },
        // TODO(michaeljamesparsons) Abstract the view repeater strategy to a directive API so this code
        //  is only included in the build if used.
        {
          provide: _VIEW_REPEATER_STRATEGY,
          useClass: _DisposeViewRepeaterStrategy
        },
        // Prevent nested tables from seeing this table's StickyPositioningListener.
        {
          provide: STICKY_POSITIONING_LISTENER,
          useValue: null
        }
      ],
      encapsulation: ViewEncapsulation.None,
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [HeaderRowOutlet, DataRowOutlet, NoDataRowOutlet, FooterRowOutlet],
      styles: [".mat-mdc-table-sticky{position:sticky !important}mat-table{display:block}mat-header-row{min-height:var(--mat-table-header-container-height, 56px)}mat-row{min-height:var(--mat-table-row-item-container-height, 52px)}mat-footer-row{min-height:var(--mat-table-footer-container-height, 52px)}mat-row,mat-header-row,mat-footer-row{display:flex;border-width:0;border-bottom-width:1px;border-style:solid;align-items:center;box-sizing:border-box}mat-cell:first-of-type,mat-header-cell:first-of-type,mat-footer-cell:first-of-type{padding-left:24px}[dir=rtl] mat-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:first-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:first-of-type:not(:only-of-type){padding-left:0;padding-right:24px}mat-cell:last-of-type,mat-header-cell:last-of-type,mat-footer-cell:last-of-type{padding-right:24px}[dir=rtl] mat-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-header-cell:last-of-type:not(:only-of-type),[dir=rtl] mat-footer-cell:last-of-type:not(:only-of-type){padding-right:0;padding-left:24px}mat-cell,mat-header-cell,mat-footer-cell{flex:1;display:flex;align-items:center;overflow:hidden;word-wrap:break-word;min-height:inherit}.mat-mdc-table{min-width:100%;border:0;border-spacing:0;table-layout:auto;white-space:normal;background-color:var(--mat-table-background-color, var(--mat-sys-surface))}.mdc-data-table__cell{box-sizing:border-box;overflow:hidden;text-align:left;text-overflow:ellipsis}[dir=rtl] .mdc-data-table__cell{text-align:right}.mdc-data-table__cell,.mdc-data-table__header-cell{padding:0 16px}.mat-mdc-header-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-header-container-height, 56px);color:var(--mat-table-header-headline-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-header-headline-font, var(--mat-sys-title-small-font, Roboto, sans-serif));line-height:var(--mat-table-header-headline-line-height, var(--mat-sys-title-small-line-height));font-size:var(--mat-table-header-headline-size, var(--mat-sys-title-small-size, 14px));font-weight:var(--mat-table-header-headline-weight, var(--mat-sys-title-small-weight, 500))}.mat-mdc-row{height:var(--mat-table-row-item-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)))}.mat-mdc-row,.mdc-data-table__content{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;font-family:var(--mat-table-row-item-label-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-row-item-label-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-row-item-label-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-row-item-label-text-weight, var(--mat-sys-body-medium-weight))}.mat-mdc-footer-row{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;height:var(--mat-table-footer-container-height, 52px);color:var(--mat-table-row-item-label-text-color, var(--mat-sys-on-surface, rgba(0, 0, 0, 0.87)));font-family:var(--mat-table-footer-supporting-text-font, var(--mat-sys-body-medium-font, Roboto, sans-serif));line-height:var(--mat-table-footer-supporting-text-line-height, var(--mat-sys-body-medium-line-height));font-size:var(--mat-table-footer-supporting-text-size, var(--mat-sys-body-medium-size, 14px));font-weight:var(--mat-table-footer-supporting-text-weight, var(--mat-sys-body-medium-weight));letter-spacing:var(--mat-table-footer-supporting-text-tracking, var(--mat-sys-body-medium-tracking))}.mat-mdc-header-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-header-headline-tracking, var(--mat-sys-title-small-tracking));font-weight:inherit;line-height:inherit;box-sizing:border-box;text-overflow:ellipsis;overflow:hidden;outline:none;text-align:left}[dir=rtl] .mat-mdc-header-cell{text-align:right}.mdc-data-table__row:last-child>.mat-mdc-header-cell{border-bottom:none}.mat-mdc-cell{border-bottom-color:var(--mat-table-row-item-outline-color, var(--mat-sys-outline, rgba(0, 0, 0, 0.12)));border-bottom-width:var(--mat-table-row-item-outline-width, 1px);border-bottom-style:solid;letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking));line-height:inherit}.mdc-data-table__row:last-child>.mat-mdc-cell{border-bottom:none}.mat-mdc-footer-cell{letter-spacing:var(--mat-table-row-item-label-text-tracking, var(--mat-sys-body-medium-tracking))}mat-row.mat-mdc-row,mat-header-row.mat-mdc-header-row,mat-footer-row.mat-mdc-footer-row{border-bottom:none}.mat-mdc-table tbody,.mat-mdc-table tfoot,.mat-mdc-table thead,.mat-mdc-cell,.mat-mdc-footer-cell,.mat-mdc-header-row,.mat-mdc-row,.mat-mdc-footer-row,.mat-mdc-table .mat-mdc-header-cell{background:inherit}.mat-mdc-table mat-header-row.mat-mdc-header-row,.mat-mdc-table mat-row.mat-mdc-row,.mat-mdc-table mat-footer-row.mat-mdc-footer-cell{height:unset}mat-header-cell.mat-mdc-header-cell,mat-cell.mat-mdc-cell,mat-footer-cell.mat-mdc-footer-cell{align-self:stretch}\n"]
    }]
  }], null, null);
})();
var MatCellDef = class _MatCellDef extends CdkCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCellDef_BaseFactory;
    return function MatCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatCellDef_BaseFactory || (\u0275MatCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatCellDef)))(__ngFactoryType__ || _MatCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCellDef,
    selectors: [["", "matCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkCellDef,
      useExisting: _MatCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCellDef, [{
    type: Directive,
    args: [{
      selector: "[matCellDef]",
      providers: [{
        provide: CdkCellDef,
        useExisting: MatCellDef
      }]
    }]
  }], null, null);
})();
var MatHeaderCellDef = class _MatHeaderCellDef extends CdkHeaderCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderCellDef_BaseFactory;
    return function MatHeaderCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderCellDef_BaseFactory || (\u0275MatHeaderCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCellDef)))(__ngFactoryType__ || _MatHeaderCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderCellDef,
    selectors: [["", "matHeaderCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderCellDef,
      useExisting: _MatHeaderCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCellDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderCellDef]",
      providers: [{
        provide: CdkHeaderCellDef,
        useExisting: MatHeaderCellDef
      }]
    }]
  }], null, null);
})();
var MatFooterCellDef = class _MatFooterCellDef extends CdkFooterCellDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterCellDef_BaseFactory;
    return function MatFooterCellDef_Factory(__ngFactoryType__) {
      return (\u0275MatFooterCellDef_BaseFactory || (\u0275MatFooterCellDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCellDef)))(__ngFactoryType__ || _MatFooterCellDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterCellDef,
    selectors: [["", "matFooterCellDef", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterCellDef,
      useExisting: _MatFooterCellDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCellDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterCellDef]",
      providers: [{
        provide: CdkFooterCellDef,
        useExisting: MatFooterCellDef
      }]
    }]
  }], null, null);
})();
var MatColumnDef = class _MatColumnDef extends CdkColumnDef {
  /** Unique name for this column. */
  get name() {
    return this._name;
  }
  set name(name) {
    this._setNameInput(name);
  }
  /**
   * Add "mat-column-" prefix in addition to "cdk-column-" prefix.
   * In the future, this will only add "mat-column-" and columnCssClassName
   * will change from type string[] to string.
   * @docs-private
   */
  _updateColumnCssClassName() {
    super._updateColumnCssClassName();
    this._columnCssClassName.push(`mat-column-${this.cssClassFriendlyName}`);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatColumnDef_BaseFactory;
    return function MatColumnDef_Factory(__ngFactoryType__) {
      return (\u0275MatColumnDef_BaseFactory || (\u0275MatColumnDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatColumnDef)))(__ngFactoryType__ || _MatColumnDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatColumnDef,
    selectors: [["", "matColumnDef", ""]],
    inputs: {
      name: [0, "matColumnDef", "name"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkColumnDef,
      useExisting: _MatColumnDef
    }, {
      provide: "MAT_SORT_HEADER_COLUMN_DEF",
      useExisting: _MatColumnDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatColumnDef, [{
    type: Directive,
    args: [{
      selector: "[matColumnDef]",
      providers: [{
        provide: CdkColumnDef,
        useExisting: MatColumnDef
      }, {
        provide: "MAT_SORT_HEADER_COLUMN_DEF",
        useExisting: MatColumnDef
      }]
    }]
  }], null, {
    name: [{
      type: Input,
      args: ["matColumnDef"]
    }]
  });
})();
var MatHeaderCell = class _MatHeaderCell extends CdkHeaderCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderCell_BaseFactory;
    return function MatHeaderCell_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderCell_BaseFactory || (\u0275MatHeaderCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderCell)))(__ngFactoryType__ || _MatHeaderCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderCell,
    selectors: [["mat-header-cell"], ["th", "mat-header-cell", ""]],
    hostAttrs: ["role", "columnheader", 1, "mat-mdc-header-cell", "mdc-data-table__header-cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderCell, [{
    type: Directive,
    args: [{
      selector: "mat-header-cell, th[mat-header-cell]",
      host: {
        "class": "mat-mdc-header-cell mdc-data-table__header-cell",
        "role": "columnheader"
      }
    }]
  }], null, null);
})();
var MatFooterCell = class _MatFooterCell extends CdkFooterCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterCell_BaseFactory;
    return function MatFooterCell_Factory(__ngFactoryType__) {
      return (\u0275MatFooterCell_BaseFactory || (\u0275MatFooterCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterCell)))(__ngFactoryType__ || _MatFooterCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterCell,
    selectors: [["mat-footer-cell"], ["td", "mat-footer-cell", ""]],
    hostAttrs: [1, "mat-mdc-footer-cell", "mdc-data-table__cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterCell, [{
    type: Directive,
    args: [{
      selector: "mat-footer-cell, td[mat-footer-cell]",
      host: {
        "class": "mat-mdc-footer-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var MatCell = class _MatCell extends CdkCell {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatCell_BaseFactory;
    return function MatCell_Factory(__ngFactoryType__) {
      return (\u0275MatCell_BaseFactory || (\u0275MatCell_BaseFactory = \u0275\u0275getInheritedFactory(_MatCell)))(__ngFactoryType__ || _MatCell);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatCell,
    selectors: [["mat-cell"], ["td", "mat-cell", ""]],
    hostAttrs: [1, "mat-mdc-cell", "mdc-data-table__cell"],
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatCell, [{
    type: Directive,
    args: [{
      selector: "mat-cell, td[mat-cell]",
      host: {
        "class": "mat-mdc-cell mdc-data-table__cell"
      }
    }]
  }], null, null);
})();
var ROW_TEMPLATE = `<ng-container cdkCellOutlet></ng-container>`;
var MatHeaderRowDef = class _MatHeaderRowDef extends CdkHeaderRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderRowDef_BaseFactory;
    return function MatHeaderRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderRowDef_BaseFactory || (\u0275MatHeaderRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRowDef)))(__ngFactoryType__ || _MatHeaderRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatHeaderRowDef,
    selectors: [["", "matHeaderRowDef", ""]],
    inputs: {
      columns: [0, "matHeaderRowDef", "columns"],
      sticky: [2, "matHeaderRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderRowDef,
      useExisting: _MatHeaderRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRowDef, [{
    type: Directive,
    args: [{
      selector: "[matHeaderRowDef]",
      providers: [{
        provide: CdkHeaderRowDef,
        useExisting: MatHeaderRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matHeaderRowDef"
      }, {
        name: "sticky",
        alias: "matHeaderRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  }], null, null);
})();
var MatFooterRowDef = class _MatFooterRowDef extends CdkFooterRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterRowDef_BaseFactory;
    return function MatFooterRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatFooterRowDef_BaseFactory || (\u0275MatFooterRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRowDef)))(__ngFactoryType__ || _MatFooterRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatFooterRowDef,
    selectors: [["", "matFooterRowDef", ""]],
    inputs: {
      columns: [0, "matFooterRowDef", "columns"],
      sticky: [2, "matFooterRowDefSticky", "sticky", booleanAttribute]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterRowDef,
      useExisting: _MatFooterRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRowDef, [{
    type: Directive,
    args: [{
      selector: "[matFooterRowDef]",
      providers: [{
        provide: CdkFooterRowDef,
        useExisting: MatFooterRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matFooterRowDef"
      }, {
        name: "sticky",
        alias: "matFooterRowDefSticky",
        transform: booleanAttribute
      }]
    }]
  }], null, null);
})();
var MatRowDef = class _MatRowDef extends CdkRowDef {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatRowDef_BaseFactory;
    return function MatRowDef_Factory(__ngFactoryType__) {
      return (\u0275MatRowDef_BaseFactory || (\u0275MatRowDef_BaseFactory = \u0275\u0275getInheritedFactory(_MatRowDef)))(__ngFactoryType__ || _MatRowDef);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatRowDef,
    selectors: [["", "matRowDef", ""]],
    inputs: {
      columns: [0, "matRowDefColumns", "columns"],
      when: [0, "matRowDefWhen", "when"]
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkRowDef,
      useExisting: _MatRowDef
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRowDef, [{
    type: Directive,
    args: [{
      selector: "[matRowDef]",
      providers: [{
        provide: CdkRowDef,
        useExisting: MatRowDef
      }],
      inputs: [{
        name: "columns",
        alias: "matRowDefColumns"
      }, {
        name: "when",
        alias: "matRowDefWhen"
      }]
    }]
  }], null, null);
})();
var MatHeaderRow = class _MatHeaderRow extends CdkHeaderRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatHeaderRow_BaseFactory;
    return function MatHeaderRow_Factory(__ngFactoryType__) {
      return (\u0275MatHeaderRow_BaseFactory || (\u0275MatHeaderRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatHeaderRow)))(__ngFactoryType__ || _MatHeaderRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatHeaderRow,
    selectors: [["mat-header-row"], ["tr", "mat-header-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-header-row", "mdc-data-table__header-row"],
    exportAs: ["matHeaderRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkHeaderRow,
      useExisting: _MatHeaderRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatHeaderRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatHeaderRow, [{
    type: Component,
    args: [{
      selector: "mat-header-row, tr[mat-header-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-header-row mdc-data-table__header-row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matHeaderRow",
      providers: [{
        provide: CdkHeaderRow,
        useExisting: MatHeaderRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatFooterRow = class _MatFooterRow extends CdkFooterRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatFooterRow_BaseFactory;
    return function MatFooterRow_Factory(__ngFactoryType__) {
      return (\u0275MatFooterRow_BaseFactory || (\u0275MatFooterRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatFooterRow)))(__ngFactoryType__ || _MatFooterRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatFooterRow,
    selectors: [["mat-footer-row"], ["tr", "mat-footer-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-footer-row", "mdc-data-table__row"],
    exportAs: ["matFooterRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkFooterRow,
      useExisting: _MatFooterRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatFooterRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatFooterRow, [{
    type: Component,
    args: [{
      selector: "mat-footer-row, tr[mat-footer-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-footer-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matFooterRow",
      providers: [{
        provide: CdkFooterRow,
        useExisting: MatFooterRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatRow = class _MatRow extends CdkRow {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatRow_BaseFactory;
    return function MatRow_Factory(__ngFactoryType__) {
      return (\u0275MatRow_BaseFactory || (\u0275MatRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatRow)))(__ngFactoryType__ || _MatRow);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatRow,
    selectors: [["mat-row"], ["tr", "mat-row", ""]],
    hostAttrs: ["role", "row", 1, "mat-mdc-row", "mdc-data-table__row"],
    exportAs: ["matRow"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkRow,
      useExisting: _MatRow
    }]), \u0275\u0275InheritDefinitionFeature],
    decls: 1,
    vars: 0,
    consts: [["cdkCellOutlet", ""]],
    template: function MatRow_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainer(0, 0);
      }
    },
    dependencies: [CdkCellOutlet],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatRow, [{
    type: Component,
    args: [{
      selector: "mat-row, tr[mat-row]",
      template: ROW_TEMPLATE,
      host: {
        "class": "mat-mdc-row mdc-data-table__row",
        "role": "row"
      },
      // See note on CdkTable for explanation on why this uses the default change detection strategy.
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      encapsulation: ViewEncapsulation.None,
      exportAs: "matRow",
      providers: [{
        provide: CdkRow,
        useExisting: MatRow
      }],
      imports: [CdkCellOutlet]
    }]
  }], null, null);
})();
var MatNoDataRow = class _MatNoDataRow extends CdkNoDataRow {
  _contentClassName = "mat-mdc-no-data-row";
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatNoDataRow_BaseFactory;
    return function MatNoDataRow_Factory(__ngFactoryType__) {
      return (\u0275MatNoDataRow_BaseFactory || (\u0275MatNoDataRow_BaseFactory = \u0275\u0275getInheritedFactory(_MatNoDataRow)))(__ngFactoryType__ || _MatNoDataRow);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatNoDataRow,
    selectors: [["ng-template", "matNoDataRow", ""]],
    features: [\u0275\u0275ProvidersFeature([{
      provide: CdkNoDataRow,
      useExisting: _MatNoDataRow
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatNoDataRow, [{
    type: Directive,
    args: [{
      selector: "ng-template[matNoDataRow]",
      providers: [{
        provide: CdkNoDataRow,
        useExisting: MatNoDataRow
      }]
    }]
  }], null, null);
})();
var MatTextColumn = class _MatTextColumn extends CdkTextColumn {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MatTextColumn_BaseFactory;
    return function MatTextColumn_Factory(__ngFactoryType__) {
      return (\u0275MatTextColumn_BaseFactory || (\u0275MatTextColumn_BaseFactory = \u0275\u0275getInheritedFactory(_MatTextColumn)))(__ngFactoryType__ || _MatTextColumn);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatTextColumn,
    selectors: [["mat-text-column"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 0,
    consts: [["matColumnDef", ""], ["mat-header-cell", "", 3, "text-align", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "text-align", 4, "matCellDef"], ["mat-header-cell", ""], ["mat-cell", ""]],
    template: function MatTextColumn_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementContainerStart(0, 0);
        \u0275\u0275template(1, MatTextColumn_th_1_Template, 2, 3, "th", 1)(2, MatTextColumn_td_2_Template, 2, 3, "td", 2);
        \u0275\u0275elementContainerEnd();
      }
    },
    dependencies: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTextColumn, [{
    type: Component,
    args: [{
      selector: "mat-text-column",
      template: `
    <ng-container matColumnDef>
      <th mat-header-cell *matHeaderCellDef [style.text-align]="justify">
        {{headerText}}
      </th>
      <td mat-cell *matCellDef="let data" [style.text-align]="justify">
        {{dataAccessor(data, name)}}
      </td>
    </ng-container>
  `,
      encapsulation: ViewEncapsulation.None,
      // Change detection is intentionally not set to OnPush. This component's template will be provided
      // to the table to be inserted into its view. This is problematic when change detection runs since
      // the bindings in this template will be evaluated _after_ the table's view is evaluated, which
      // mean's the template in the table's view will not have the updated value (and in fact will cause
      // an ExpressionChangedAfterItHasBeenCheckedError).
      // tslint:disable-next-line:validate-decorators
      changeDetection: ChangeDetectionStrategy.Default,
      imports: [MatColumnDef, MatHeaderCellDef, MatHeaderCell, MatCellDef, MatCell]
    }]
  }], null, null);
})();
var EXPORTED_DECLARATIONS2 = [
  // Table
  MatTable,
  MatRecycleRows,
  // Template defs
  MatHeaderCellDef,
  MatHeaderRowDef,
  MatColumnDef,
  MatCellDef,
  MatRowDef,
  MatFooterCellDef,
  MatFooterRowDef,
  // Cell directives
  MatHeaderCell,
  MatCell,
  MatFooterCell,
  // Row directives
  MatHeaderRow,
  MatRow,
  MatFooterRow,
  MatNoDataRow,
  MatTextColumn
];
var MatTableModule = class _MatTableModule {
  static \u0275fac = function MatTableModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatTableModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatTableModule,
    imports: [
      MatCommonModule,
      CdkTableModule,
      // Table
      MatTable,
      MatRecycleRows,
      // Template defs
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatFooterCellDef,
      MatFooterRowDef,
      // Cell directives
      MatHeaderCell,
      MatCell,
      MatFooterCell,
      // Row directives
      MatHeaderRow,
      MatRow,
      MatFooterRow,
      MatNoDataRow,
      MatTextColumn
    ],
    exports: [
      MatCommonModule,
      // Table
      MatTable,
      MatRecycleRows,
      // Template defs
      MatHeaderCellDef,
      MatHeaderRowDef,
      MatColumnDef,
      MatCellDef,
      MatRowDef,
      MatFooterCellDef,
      MatFooterRowDef,
      // Cell directives
      MatHeaderCell,
      MatCell,
      MatFooterCell,
      // Row directives
      MatHeaderRow,
      MatRow,
      MatFooterRow,
      MatNoDataRow,
      MatTextColumn
    ]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatCommonModule, CdkTableModule, MatCommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatTableModule, [{
    type: NgModule,
    args: [{
      imports: [MatCommonModule, CdkTableModule, ...EXPORTED_DECLARATIONS2],
      exports: [MatCommonModule, EXPORTED_DECLARATIONS2]
    }]
  }], null, null);
})();

// src/app/features/admin-materials/admin-materials.ts
function MaterialFormDialogComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const c_r1 = ctx.$implicit;
    \u0275\u0275property("value", c_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(c_r1.name);
  }
}
function MaterialFormDialogComponent_mat_form_field_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 2)(1, "mat-label");
    \u0275\u0275text(2, "Status");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-select", 14)(4, "mat-option", 13);
    \u0275\u0275text(5, "Active");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 13);
    \u0275\u0275text(7, "Inactive");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function AdminMaterialsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementEnd();
  }
}
function AdminMaterialsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-icon");
    \u0275\u0275text(2, "inventory_2");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p");
    \u0275\u0275text(4, "No materials found.");
    \u0275\u0275elementEnd()();
  }
}
function AdminMaterialsComponent_table_18_th_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Name");
    \u0275\u0275elementEnd();
  }
}
function AdminMaterialsComponent_table_18_td_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r1.brand);
  }
}
function AdminMaterialsComponent_table_18_td_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "div", 23);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, AdminMaterialsComponent_table_18_td_3_div_3_Template, 2, 1, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r1.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", m_r1.brand);
  }
}
function AdminMaterialsComponent_table_18_th_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Category");
    \u0275\u0275elementEnd();
  }
}
function AdminMaterialsComponent_table_18_td_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(m_r2.categoryName);
  }
}
function AdminMaterialsComponent_table_18_th_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Unit Price");
    \u0275\u0275elementEnd();
  }
}
function AdminMaterialsComponent_table_18_td_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const m_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(2, 1, m_r3.unitPrice, "1.2-2"));
  }
}
function AdminMaterialsComponent_table_18_th_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "th", 21);
    \u0275\u0275text(1, "Status");
    \u0275\u0275elementEnd();
  }
}
function AdminMaterialsComponent_table_18_td_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "td", 22)(1, "span", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const m_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("active", m_r4.isActive)("inactive", !m_r4.isActive);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", m_r4.isActive ? "Active" : "Inactive", " ");
  }
}
function AdminMaterialsComponent_table_18_th_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "th", 21);
  }
}
function AdminMaterialsComponent_table_18_td_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "td", 22)(1, "button", 27);
    \u0275\u0275listener("click", function AdminMaterialsComponent_table_18_td_15_Template_button_click_1_listener() {
      const m_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.openEdit(m_r6));
    });
    \u0275\u0275elementStart(2, "mat-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 28);
    \u0275\u0275listener("click", function AdminMaterialsComponent_table_18_td_15_Template_button_click_4_listener() {
      const m_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r6 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r6.toggleActive(m_r6));
    });
    \u0275\u0275elementStart(5, "mat-icon");
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const m_r6 = ctx.$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275interpolate(m_r6.isActive ? "Deactivate" : "Reactivate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(m_r6.isActive ? "visibility_off" : "visibility");
  }
}
function AdminMaterialsComponent_table_18_tr_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 29);
  }
}
function AdminMaterialsComponent_table_18_tr_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "tr", 30);
  }
}
function AdminMaterialsComponent_table_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "table", 11);
    \u0275\u0275elementContainerStart(1, 12);
    \u0275\u0275template(2, AdminMaterialsComponent_table_18_th_2_Template, 2, 0, "th", 13)(3, AdminMaterialsComponent_table_18_td_3_Template, 4, 2, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(4, 15);
    \u0275\u0275template(5, AdminMaterialsComponent_table_18_th_5_Template, 2, 0, "th", 13)(6, AdminMaterialsComponent_table_18_td_6_Template, 2, 1, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(7, 16);
    \u0275\u0275template(8, AdminMaterialsComponent_table_18_th_8_Template, 2, 0, "th", 13)(9, AdminMaterialsComponent_table_18_td_9_Template, 3, 4, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(10, 17);
    \u0275\u0275template(11, AdminMaterialsComponent_table_18_th_11_Template, 2, 0, "th", 13)(12, AdminMaterialsComponent_table_18_td_12_Template, 3, 5, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275elementContainerStart(13, 18);
    \u0275\u0275template(14, AdminMaterialsComponent_table_18_th_14_Template, 1, 0, "th", 13)(15, AdminMaterialsComponent_table_18_td_15_Template, 7, 3, "td", 14);
    \u0275\u0275elementContainerEnd();
    \u0275\u0275template(16, AdminMaterialsComponent_table_18_tr_16_Template, 1, 0, "tr", 19)(17, AdminMaterialsComponent_table_18_tr_17_Template, 1, 0, "tr", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r6 = \u0275\u0275nextContext();
    \u0275\u0275property("dataSource", ctx_r6.filtered);
    \u0275\u0275advance(16);
    \u0275\u0275property("matHeaderRowDef", ctx_r6.columns);
    \u0275\u0275advance();
    \u0275\u0275property("matRowDefColumns", ctx_r6.columns);
  }
}
var MaterialFormDialogComponent = class _MaterialFormDialogComponent {
  fb;
  dialogRef;
  data;
  form;
  constructor(fb, dialogRef, data) {
    this.fb = fb;
    this.dialogRef = dialogRef;
    this.data = data;
    const m = data.material;
    this.form = this.fb.group(__spreadValues({
      serviceCategoryId: [m?.serviceCategoryId ?? null, Validators.required],
      name: [m?.name ?? "", Validators.required],
      brand: [m?.brand ?? ""],
      unitPrice: [m?.unitPrice ?? null, [Validators.required, Validators.min(0.01)]],
      description: [m?.description ?? ""]
    }, m ? { isActive: [m.isActive] } : {}));
  }
  submit() {
    if (this.form.invalid)
      return;
    this.dialogRef.close(this.form.value);
  }
  static \u0275fac = function MaterialFormDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MaterialFormDialogComponent)(\u0275\u0275directiveInject(FormBuilder), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MaterialFormDialogComponent, selectors: [["app-material-form-dialog"]], decls: 31, vars: 6, consts: [["mat-dialog-title", ""], [1, "mat-form", 3, "formGroup"], ["appearance", "outline"], ["formControlName", "serviceCategoryId"], [3, "value", 4, "ngFor", "ngForOf"], ["matInput", "", "formControlName", "name", "placeholder", "Material name"], ["matInput", "", "formControlName", "brand", "placeholder", "Brand (optional)"], ["matInput", "", "type", "number", "formControlName", "unitPrice", "placeholder", "0.00", "min", "0.01", "step", "0.01"], ["matInput", "", "formControlName", "description", "rows", "3", "placeholder", "Optional description"], ["appearance", "outline", 4, "ngIf"], ["align", "end"], ["mat-button", "", "mat-dialog-close", ""], ["mat-raised-button", "", "color", "primary", 3, "click", "disabled"], [3, "value"], ["formControlName", "isActive"]], template: function MaterialFormDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h2", 0);
      \u0275\u0275text(1);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(2, "mat-dialog-content")(3, "form", 1)(4, "mat-form-field", 2)(5, "mat-label");
      \u0275\u0275text(6, "Category");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "mat-select", 3);
      \u0275\u0275template(8, MaterialFormDialogComponent_mat_option_8_Template, 2, 2, "mat-option", 4);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(9, "mat-form-field", 2)(10, "mat-label");
      \u0275\u0275text(11, "Name");
      \u0275\u0275elementEnd();
      \u0275\u0275element(12, "input", 5);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(13, "mat-form-field", 2)(14, "mat-label");
      \u0275\u0275text(15, "Brand");
      \u0275\u0275elementEnd();
      \u0275\u0275element(16, "input", 6);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "mat-form-field", 2)(18, "mat-label");
      \u0275\u0275text(19, "Unit Price (\u20B9)");
      \u0275\u0275elementEnd();
      \u0275\u0275element(20, "input", 7);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(21, "mat-form-field", 2)(22, "mat-label");
      \u0275\u0275text(23, "Description");
      \u0275\u0275elementEnd();
      \u0275\u0275element(24, "textarea", 8);
      \u0275\u0275elementEnd();
      \u0275\u0275template(25, MaterialFormDialogComponent_mat_form_field_25_Template, 8, 2, "mat-form-field", 9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(26, "mat-dialog-actions", 10)(27, "button", 11);
      \u0275\u0275text(28, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(29, "button", 12);
      \u0275\u0275listener("click", function MaterialFormDialogComponent_Template_button_click_29_listener() {
        return ctx.submit();
      });
      \u0275\u0275text(30);
      \u0275\u0275elementEnd()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(ctx.data.material ? "Edit Material" : "Add Material");
      \u0275\u0275advance(2);
      \u0275\u0275property("formGroup", ctx.form);
      \u0275\u0275advance(5);
      \u0275\u0275property("ngForOf", ctx.data.categories);
      \u0275\u0275advance(17);
      \u0275\u0275property("ngIf", ctx.data.material);
      \u0275\u0275advance(4);
      \u0275\u0275property("disabled", ctx.form.invalid);
      \u0275\u0275advance();
      \u0275\u0275textInterpolate1(" ", ctx.data.material ? "Save" : "Add", " ");
    }
  }, dependencies: [CommonModule, NgForOf, NgIf, ReactiveFormsModule, \u0275NgNoValidate, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, NgControlStatusGroup, MinValidator, FormGroupDirective, FormControlName, MatFormFieldModule, MatFormField, MatLabel, MatInputModule, MatInput, MatSelectModule, MatSelect, MatOption, MatButtonModule, MatButton, MatDialogModule, MatDialogClose, MatDialogTitle, MatDialogActions, MatDialogContent], styles: ["\n\n.mat-form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 360px;\n  padding-top: 8px;\n}\n/*# sourceMappingURL=admin-materials.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MaterialFormDialogComponent, [{
    type: Component,
    args: [{ selector: "app-material-form-dialog", standalone: true, imports: [
      CommonModule,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatButtonModule,
      MatDialogModule
    ], template: `
    <h2 mat-dialog-title>{{ data.material ? 'Edit Material' : 'Add Material' }}</h2>
    <mat-dialog-content>
      <form [formGroup]="form" class="mat-form">
        <mat-form-field appearance="outline">
          <mat-label>Category</mat-label>
          <mat-select formControlName="serviceCategoryId">
            <mat-option *ngFor="let c of data.categories" [value]="c.id">{{ c.name }}</mat-option>
          </mat-select>
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Name</mat-label>
          <input matInput formControlName="name" placeholder="Material name">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Brand</mat-label>
          <input matInput formControlName="brand" placeholder="Brand (optional)">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Unit Price (\u20B9)</mat-label>
          <input matInput type="number" formControlName="unitPrice" placeholder="0.00" min="0.01" step="0.01">
        </mat-form-field>

        <mat-form-field appearance="outline">
          <mat-label>Description</mat-label>
          <textarea matInput formControlName="description" rows="3" placeholder="Optional description"></textarea>
        </mat-form-field>

        <mat-form-field *ngIf="data.material" appearance="outline">
          <mat-label>Status</mat-label>
          <mat-select formControlName="isActive">
            <mat-option [value]="true">Active</mat-option>
            <mat-option [value]="false">Inactive</mat-option>
          </mat-select>
        </mat-form-field>
      </form>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>Cancel</button>
      <button mat-raised-button color="primary" [disabled]="form.invalid" (click)="submit()">
        {{ data.material ? 'Save' : 'Add' }}
      </button>
    </mat-dialog-actions>
  `, styles: ["/* angular:styles/component:scss;0604257baccdfa54dd5f5922a8d5e5bd9888744bb24bf90c427edb8813c7eb57;C:/repos/yProHub/prohub-ui/src/app/features/admin-materials/admin-materials.ts */\n.mat-form {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  min-width: 360px;\n  padding-top: 8px;\n}\n/*# sourceMappingURL=admin-materials.css.map */\n"] }]
  }], () => [{ type: FormBuilder }, { type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MaterialFormDialogComponent, { className: "MaterialFormDialogComponent", filePath: "src/app/features/admin-materials/admin-materials.ts", lineNumber: 76 });
})();
var AdminMaterialsComponent = class _AdminMaterialsComponent {
  materialService;
  categoryService;
  dialog;
  snack;
  cdr;
  columns = ["name", "category", "price", "status", "actions"];
  materials = [];
  categories = [];
  loading = true;
  filterActive = true;
  get filtered() {
    if (this.filterActive === null)
      return this.materials;
    return this.materials.filter((m) => m.isActive === this.filterActive);
  }
  constructor(materialService, categoryService, dialog, snack, cdr) {
    this.materialService = materialService;
    this.categoryService = categoryService;
    this.dialog = dialog;
    this.snack = snack;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.categoryService.getCategories().subscribe({
      next: (cats) => {
        this.categories = cats;
        this.load();
      }
    });
  }
  load() {
    this.loading = true;
    this.materialService.getMaterials(void 0, false).subscribe({
      next: (mats) => {
        this.materials = mats;
        this.loading = false;
        this.cdr.markForCheck();
      },
      error: () => {
        this.loading = false;
        this.cdr.markForCheck();
      }
    });
  }
  setFilter(val) {
    this.filterActive = val;
    this.cdr.markForCheck();
  }
  openAdd() {
    this.dialog.open(MaterialFormDialogComponent, {
      data: { categories: this.categories }
    }).afterClosed().subscribe((result) => {
      if (!result)
        return;
      this.materialService.createMaterial(result).subscribe({
        next: () => {
          this.snack.open("Material added.", "OK", { duration: 3e3 });
          this.load();
        },
        error: () => this.snack.open("Failed to add material.", "OK", { duration: 3e3 })
      });
    });
  }
  openEdit(m) {
    this.dialog.open(MaterialFormDialogComponent, {
      data: { material: m, categories: this.categories }
    }).afterClosed().subscribe((result) => {
      if (!result)
        return;
      this.materialService.updateMaterial(m.id, result).subscribe({
        next: () => {
          this.snack.open("Material updated.", "OK", { duration: 3e3 });
          this.load();
        },
        error: () => this.snack.open("Failed to update material.", "OK", { duration: 3e3 })
      });
    });
  }
  toggleActive(m) {
    this.materialService.updateMaterial(m.id, { isActive: !m.isActive }).subscribe({
      next: () => {
        m.isActive = !m.isActive;
        this.snack.open(`Material ${m.isActive ? "activated" : "deactivated"}.`, "OK", { duration: 3e3 });
        this.cdr.markForCheck();
      },
      error: () => this.snack.open("Update failed.", "OK", { duration: 3e3 })
    });
  }
  static \u0275fac = function AdminMaterialsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AdminMaterialsComponent)(\u0275\u0275directiveInject(MaterialService), \u0275\u0275directiveInject(ServiceCategoryService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(MatSnackBar), \u0275\u0275directiveInject(ChangeDetectorRef));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AdminMaterialsComponent, selectors: [["app-admin-materials"]], decls: 19, vars: 6, consts: [[1, "am-wrapper"], [1, "am-header"], ["mat-raised-button", "", "color", "primary", 3, "click"], [1, "filter-row"], [3, "click", "highlighted"], ["class", "am-loading", 4, "ngIf"], ["class", "am-empty", 4, "ngIf"], ["mat-table", "", "class", "am-table", 3, "dataSource", 4, "ngIf"], [1, "am-loading"], ["diameter", "40"], [1, "am-empty"], ["mat-table", "", 1, "am-table", 3, "dataSource"], ["matColumnDef", "name"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "category"], ["matColumnDef", "price"], ["matColumnDef", "status"], ["matColumnDef", "actions"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [1, "mat-name"], ["class", "mat-brand", 4, "ngIf"], [1, "mat-brand"], [1, "status-chip"], ["mat-icon-button", "", "matTooltip", "Edit", 3, "click"], ["mat-icon-button", "", 3, "click", "matTooltip"], ["mat-header-row", ""], ["mat-row", ""]], template: function AdminMaterialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1");
      \u0275\u0275text(3, "Materials Catalogue");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(4, "button", 2);
      \u0275\u0275listener("click", function AdminMaterialsComponent_Template_button_click_4_listener() {
        return ctx.openAdd();
      });
      \u0275\u0275elementStart(5, "mat-icon");
      \u0275\u0275text(6, "add");
      \u0275\u0275elementEnd();
      \u0275\u0275text(7, " Add Material ");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(8, "div", 3)(9, "mat-chip-set")(10, "mat-chip", 4);
      \u0275\u0275listener("click", function AdminMaterialsComponent_Template_mat_chip_click_10_listener() {
        return ctx.setFilter(null);
      });
      \u0275\u0275text(11, "All");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(12, "mat-chip", 4);
      \u0275\u0275listener("click", function AdminMaterialsComponent_Template_mat_chip_click_12_listener() {
        return ctx.setFilter(true);
      });
      \u0275\u0275text(13, "Active");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(14, "mat-chip", 4);
      \u0275\u0275listener("click", function AdminMaterialsComponent_Template_mat_chip_click_14_listener() {
        return ctx.setFilter(false);
      });
      \u0275\u0275text(15, "Inactive");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(16, AdminMaterialsComponent_div_16_Template, 2, 0, "div", 5)(17, AdminMaterialsComponent_div_17_Template, 5, 0, "div", 6)(18, AdminMaterialsComponent_table_18_Template, 18, 3, "table", 7);
      \u0275\u0275elementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance(10);
      \u0275\u0275property("highlighted", ctx.filterActive === null);
      \u0275\u0275advance(2);
      \u0275\u0275property("highlighted", ctx.filterActive === true);
      \u0275\u0275advance(2);
      \u0275\u0275property("highlighted", ctx.filterActive === false);
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.loading);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length === 0);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", !ctx.loading && ctx.filtered.length > 0);
    }
  }, dependencies: [CommonModule, NgIf, MatTableModule, MatTable, MatHeaderCellDef, MatHeaderRowDef, MatColumnDef, MatCellDef, MatRowDef, MatHeaderCell, MatCell, MatHeaderRow, MatRow, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatProgressSpinnerModule, MatProgressSpinner, MatChipsModule, MatChip, MatChipSet, MatTooltipModule, MatTooltip, MatSnackBarModule, MatDialogModule, DecimalPipe], styles: ["\n\n.am-wrapper[_ngcontent-%COMP%] {\n  max-width: 960px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.am-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.am-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 1.75rem;\n}\n.filter-row[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.am-loading[_ngcontent-%COMP%], \n.am-empty[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #888;\n}\n.am-loading[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%], \n.am-empty[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n}\n.am-loading[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], \n.am-empty[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.am-table[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-name[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.mat-brand[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: #888;\n}\n.status-chip[_ngcontent-%COMP%] {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.status-chip.active[_ngcontent-%COMP%] {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.inactive[_ngcontent-%COMP%] {\n  background: #fce4ec;\n  color: #c62828;\n}\n/*# sourceMappingURL=admin-materials.css.map */"], changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AdminMaterialsComponent, [{
    type: Component,
    args: [{ selector: "app-admin-materials", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, imports: [
      CommonModule,
      MatTableModule,
      MatButtonModule,
      MatIconModule,
      MatProgressSpinnerModule,
      MatChipsModule,
      MatTooltipModule,
      MatSnackBarModule,
      MatDialogModule
    ], template: `
    <div class="am-wrapper">
      <div class="am-header">
        <h1>Materials Catalogue</h1>
        <button mat-raised-button color="primary" (click)="openAdd()">
          <mat-icon>add</mat-icon> Add Material
        </button>
      </div>

      <div class="filter-row">
        <mat-chip-set>
          <mat-chip [highlighted]="filterActive === null" (click)="setFilter(null)">All</mat-chip>
          <mat-chip [highlighted]="filterActive === true" (click)="setFilter(true)">Active</mat-chip>
          <mat-chip [highlighted]="filterActive === false" (click)="setFilter(false)">Inactive</mat-chip>
        </mat-chip-set>
      </div>

      <div *ngIf="loading" class="am-loading">
        <mat-spinner diameter="40"></mat-spinner>
      </div>

      <div *ngIf="!loading && filtered.length === 0" class="am-empty">
        <mat-icon>inventory_2</mat-icon>
        <p>No materials found.</p>
      </div>

      <table *ngIf="!loading && filtered.length > 0" mat-table [dataSource]="filtered" class="am-table">
        <ng-container matColumnDef="name">
          <th mat-header-cell *matHeaderCellDef>Name</th>
          <td mat-cell *matCellDef="let m">
            <div class="mat-name">{{ m.name }}</div>
            <div class="mat-brand" *ngIf="m.brand">{{ m.brand }}</div>
          </td>
        </ng-container>

        <ng-container matColumnDef="category">
          <th mat-header-cell *matHeaderCellDef>Category</th>
          <td mat-cell *matCellDef="let m">{{ m.categoryName }}</td>
        </ng-container>

        <ng-container matColumnDef="price">
          <th mat-header-cell *matHeaderCellDef>Unit Price</th>
          <td mat-cell *matCellDef="let m">\u20B9{{ m.unitPrice | number:'1.2-2' }}</td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Status</th>
          <td mat-cell *matCellDef="let m">
            <span class="status-chip" [class.active]="m.isActive" [class.inactive]="!m.isActive">
              {{ m.isActive ? 'Active' : 'Inactive' }}
            </span>
          </td>
        </ng-container>

        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let m">
            <button mat-icon-button matTooltip="Edit" (click)="openEdit(m)">
              <mat-icon>edit</mat-icon>
            </button>
            <button mat-icon-button matTooltip="{{ m.isActive ? 'Deactivate' : 'Reactivate' }}"
                    (click)="toggleActive(m)">
              <mat-icon>{{ m.isActive ? 'visibility_off' : 'visibility' }}</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="columns"></tr>
        <tr mat-row *matRowDef="let row; columns: columns;"></tr>
      </table>
    </div>
  `, styles: ["/* angular:styles/component:scss;0e23ce6b89d001eee58e675bb47a5f02cbaeaf0cf5ffe6bc3d8e7906438e414f;C:/repos/yProHub/prohub-ui/src/app/features/admin-materials/admin-materials.ts */\n.am-wrapper {\n  max-width: 960px;\n  margin: 2rem auto;\n  padding: 0 1rem;\n}\n.am-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.5rem;\n}\n.am-header h1 {\n  margin: 0;\n  font-size: 1.75rem;\n}\n.filter-row {\n  margin-bottom: 1.25rem;\n}\n.am-loading,\n.am-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 1rem;\n  padding: 4rem 0;\n  color: #888;\n}\n.am-loading mat-icon,\n.am-empty mat-icon {\n  font-size: 3rem;\n  width: 3rem;\n  height: 3rem;\n}\n.am-loading p,\n.am-empty p {\n  margin: 0;\n}\n.am-table {\n  width: 100%;\n  border-radius: 8px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);\n}\n.mat-name {\n  font-weight: 500;\n}\n.mat-brand {\n  font-size: 0.8rem;\n  color: #888;\n}\n.status-chip {\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 0.8rem;\n  font-weight: 500;\n}\n.status-chip.active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-chip.inactive {\n  background: #fce4ec;\n  color: #c62828;\n}\n/*# sourceMappingURL=admin-materials.css.map */\n"] }]
  }], () => [{ type: MaterialService }, { type: ServiceCategoryService }, { type: MatDialog }, { type: MatSnackBar }, { type: ChangeDetectorRef }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AdminMaterialsComponent, { className: "AdminMaterialsComponent", filePath: "src/app/features/admin-materials/admin-materials.ts", lineNumber: 234 });
})();
export {
  AdminMaterialsComponent,
  MaterialFormDialogComponent
};
//# sourceMappingURL=chunk-TOQHIOTW.js.map

