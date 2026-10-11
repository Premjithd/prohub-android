import {
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule
} from "./chunk-K2ESI5TN.js";
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from "./chunk-WZS53GDD.js";
import {
  MatFormFieldModule,
  MatInput,
  MatInputModule
} from "./chunk-MUGY7NAV.js";
import {
  MatFormField,
  MatHint,
  MatLabel
} from "./chunk-NGTIMUYF.js";
import {
  MatButton,
  MatButtonModule,
  MatIconButton
} from "./chunk-JRMOFBWD.js";
import {
  MatIcon,
  MatIconModule
} from "./chunk-GBPGCUBR.js";
import {
  DefaultValueAccessor,
  FormsModule,
  MaxValidator,
  MinValidator,
  NgControlStatus,
  NgModel,
  NumberValueAccessor
} from "./chunk-BUUU66NZ.js";
import {
  CommonModule,
  Component,
  DecimalPipe,
  Inject,
  NgIf,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdirectiveInject,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-CTKGZTQY.js";

// src/app/features/payments/pay-amount-dialog.component.ts
function PayAmountDialogComponent_p_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 19)(1, "mat-icon");
    \u0275\u0275text(2, "request_quote");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " The professional requested ");
    \u0275\u0275elementStart(4, "strong");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd();
    \u0275\u0275text(7, ". ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1("\xA0\u20B9", \u0275\u0275pipeBind2(6, 1, ctx_r0.requestedAmount, "1.2-2"));
  }
}
function PayAmountDialogComponent_mat_radio_button_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "number");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Pay requested \u2014 \u20B9", \u0275\u0275pipeBind2(2, 1, ctx_r0.requestedAmount, "1.2-2"), " ");
  }
}
function PayAmountDialogComponent_mat_form_field_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 21)(1, "mat-label");
    \u0275\u0275text(2, "Amount to pay (\u20B9)");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "input", 22);
    \u0275\u0275twoWayListener("ngModelChange", function PayAmountDialogComponent_mat_form_field_47_Template_input_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.customAmount, $event) || (ctx_r0.customAmount = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-hint");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275pipe(7, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.customAmount);
    \u0275\u0275property("min", ctx_r0.floor)("max", ctx_r0.data.remaining);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("Between \u20B9", \u0275\u0275pipeBind2(6, 5, ctx_r0.floor, "1.2-2"), " and \u20B9", \u0275\u0275pipeBind2(7, 8, ctx_r0.data.remaining, "1.2-2"), ".");
  }
}
function PayAmountDialogComponent_div_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "mat-icon");
    \u0275\u0275text(2, "error_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.error);
  }
}
var PayAmountDialogComponent = class _PayAmountDialogComponent {
  dialogRef;
  data;
  choice = "full";
  customAmount = null;
  error = "";
  constructor(dialogRef, data) {
    this.dialogRef = dialogRef;
    this.data = data;
    const req = data.activeRequest;
    this.requestedAmount = req && req.requestType !== "None" ? req.requestedAmount : 0;
    if (this.requestedAmount > 0 && this.requestedAmount <= data.remaining + 0.01) {
      this.choice = "requested";
    }
    this.customAmount = Math.min(this.requestedAmount || data.remaining, data.remaining);
  }
  requestedAmount = 0;
  /** Minimum allowed for a custom amount: the Pro's floor (minAmount), else any positive amount. */
  get floor() {
    const min = this.data.activeRequest?.minAmount ?? 0;
    return Math.min(Math.max(min, 0), this.data.remaining);
  }
  proceed() {
    this.error = "";
    let amount;
    if (this.choice === "requested") {
      amount = this.requestedAmount;
    } else if (this.choice === "full") {
      amount = this.data.remaining;
    } else {
      amount = this.customAmount || 0;
      if (amount + 0.01 < this.floor) {
        this.error = `Minimum payment is \u20B9${this.floor.toFixed(2)}.`;
        return;
      }
    }
    if (amount <= 0) {
      this.error = "Enter an amount greater than zero.";
      return;
    }
    if (amount > this.data.remaining + 0.01) {
      this.error = `Amount cannot exceed the remaining balance of \u20B9${this.data.remaining.toFixed(2)}.`;
      return;
    }
    this.dialogRef.close(Math.min(amount, this.data.remaining));
  }
  static \u0275fac = function PayAmountDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _PayAmountDialogComponent)(\u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PayAmountDialogComponent, selectors: [["app-pay-amount-dialog"]], decls: 56, vars: 18, consts: [[1, "pa-dialog"], [1, "pa-head"], [1, "pa-head-icon"], [1, "pa-head-text"], ["mat-icon-button", "", 1, "pa-close", 3, "click"], [1, "pa-body"], [1, "pa-section"], [1, "pa-section-header"], [1, "pa-balance"], ["class", "pa-requested", 4, "ngIf"], [1, "pa-radio-group", 3, "ngModelChange", "ngModel"], ["value", "requested", 4, "ngIf"], ["value", "full"], ["value", "custom"], ["appearance", "outline", "class", "pa-field", 4, "ngIf"], ["class", "pa-error", 4, "ngIf"], [1, "pa-footer"], ["mat-button", "", 1, "pa-cancel-btn", 3, "click"], [1, "pa-pay-btn", 3, "click"], [1, "pa-requested"], ["value", "requested"], ["appearance", "outline", 1, "pa-field"], ["matInput", "", "type", "number", 3, "ngModelChange", "ngModel", "min", "max"], [1, "pa-error"]], template: function PayAmountDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "mat-icon");
      \u0275\u0275text(4, "currency_rupee");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(5, "div", 3)(6, "h2");
      \u0275\u0275text(7, "Choose Payment Amount");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(10, "button", 4);
      \u0275\u0275listener("click", function PayAmountDialogComponent_Template_button_click_10_listener() {
        return ctx.dialogRef.close();
      });
      \u0275\u0275elementStart(11, "mat-icon");
      \u0275\u0275text(12, "close");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(13, "div", 5)(14, "div", 6)(15, "div", 7)(16, "mat-icon");
      \u0275\u0275text(17, "account_balance_wallet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(18, "span");
      \u0275\u0275text(19, "Balance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(20, "div", 8)(21, "div")(22, "span");
      \u0275\u0275text(23, "Agreed total");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(24, "strong");
      \u0275\u0275text(25);
      \u0275\u0275pipe(26, "number");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(27, "div")(28, "span");
      \u0275\u0275text(29, "Remaining");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(30, "strong");
      \u0275\u0275text(31);
      \u0275\u0275pipe(32, "number");
      \u0275\u0275elementEnd()()();
      \u0275\u0275template(33, PayAmountDialogComponent_p_33_Template, 8, 4, "p", 9);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(34, "div", 6)(35, "div", 7)(36, "mat-icon");
      \u0275\u0275text(37, "payments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(38, "span");
      \u0275\u0275text(39, "Amount to Pay");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(40, "mat-radio-group", 10);
      \u0275\u0275twoWayListener("ngModelChange", function PayAmountDialogComponent_Template_mat_radio_group_ngModelChange_40_listener($event) {
        \u0275\u0275twoWayBindingSet(ctx.choice, $event) || (ctx.choice = $event);
        return $event;
      });
      \u0275\u0275listener("ngModelChange", function PayAmountDialogComponent_Template_mat_radio_group_ngModelChange_40_listener() {
        return ctx.error = "";
      });
      \u0275\u0275template(41, PayAmountDialogComponent_mat_radio_button_41_Template, 3, 4, "mat-radio-button", 11);
      \u0275\u0275elementStart(42, "mat-radio-button", 12);
      \u0275\u0275text(43);
      \u0275\u0275pipe(44, "number");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(45, "mat-radio-button", 13);
      \u0275\u0275text(46, "Custom amount");
      \u0275\u0275elementEnd()();
      \u0275\u0275template(47, PayAmountDialogComponent_mat_form_field_47_Template, 8, 11, "mat-form-field", 14);
      \u0275\u0275elementEnd();
      \u0275\u0275template(48, PayAmountDialogComponent_div_48_Template, 4, 1, "div", 15);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(49, "div", 16)(50, "button", 17);
      \u0275\u0275listener("click", function PayAmountDialogComponent_Template_button_click_50_listener() {
        return ctx.dialogRef.close();
      });
      \u0275\u0275text(51, "Cancel");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(52, "button", 18);
      \u0275\u0275listener("click", function PayAmountDialogComponent_Template_button_click_52_listener() {
        return ctx.proceed();
      });
      \u0275\u0275elementStart(53, "mat-icon");
      \u0275\u0275text(54, "lock");
      \u0275\u0275elementEnd();
      \u0275\u0275text(55, " Continue to Pay ");
      \u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      \u0275\u0275advance(9);
      \u0275\u0275textInterpolate(ctx.data.jobTitle);
      \u0275\u0275advance(16);
      \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(26, 9, ctx.data.bidAmount, "1.2-2"));
      \u0275\u0275advance(6);
      \u0275\u0275textInterpolate1("\u20B9", \u0275\u0275pipeBind2(32, 12, ctx.data.remaining, "1.2-2"));
      \u0275\u0275advance(2);
      \u0275\u0275property("ngIf", ctx.requestedAmount > 0);
      \u0275\u0275advance(7);
      \u0275\u0275twoWayProperty("ngModel", ctx.choice);
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.requestedAmount > 0 && ctx.requestedAmount <= ctx.data.remaining + 0.01);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate1(" Pay remaining (full) \u2014 \u20B9", \u0275\u0275pipeBind2(44, 15, ctx.data.remaining, "1.2-2"), " ");
      \u0275\u0275advance(4);
      \u0275\u0275property("ngIf", ctx.choice === "custom");
      \u0275\u0275advance();
      \u0275\u0275property("ngIf", ctx.error);
    }
  }, dependencies: [CommonModule, NgIf, FormsModule, DefaultValueAccessor, NumberValueAccessor, NgControlStatus, MinValidator, MaxValidator, NgModel, MatDialogModule, MatButtonModule, MatButton, MatIconButton, MatIconModule, MatIcon, MatFormFieldModule, MatFormField, MatLabel, MatHint, MatInputModule, MatInput, MatRadioModule, MatRadioGroup, MatRadioButton, DecimalPipe], styles: ["\n\n.pa-dialog[_ngcontent-%COMP%] {\n  width: 100%;\n  min-width: 320px;\n  max-width: 440px;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.pa-head[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.2rem 1.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.pa-head-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: var(--color-primary-gradient);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pa-head-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: white;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.pa-head-text[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.pa-head-text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 0.1rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.pa-head-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pa-close[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  color: #aaa;\n}\n.pa-body[_ngcontent-%COMP%] {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.5rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.pa-section[_ngcontent-%COMP%] {\n  background: #fafbff;\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 0.9rem 1rem;\n}\n.pa-section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 0.85rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.pa-section-header[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n  color: var(--color-primary);\n}\n.pa-balance[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2rem;\n}\n.pa-balance[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n.pa-balance[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.pa-balance[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-text);\n}\n.pa-requested[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  margin: 0.75rem 0 0;\n}\n.pa-requested[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--color-primary);\n}\n.pa-requested[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%] {\n  color: var(--color-text);\n}\n.pa-radio-group[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pa-field[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-top: 0.75rem;\n}\n.pa-error[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 0.9rem;\n  background: #fff0f0;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  color: var(--color-error);\n  font-size: 0.87rem;\n}\n.pa-error[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.pa-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--color-border);\n  background: white;\n}\n.pa-cancel-btn[_ngcontent-%COMP%] {\n  color: var(--color-text-muted);\n}\n.pa-pay-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.65rem 1.6rem;\n  background: var(--color-primary-gradient);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.pa-pay-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.pa-pay-btn[_ngcontent-%COMP%]:hover {\n  opacity: 0.91;\n}\n/*# sourceMappingURL=pay-amount-dialog.component.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PayAmountDialogComponent, [{
    type: Component,
    args: [{ selector: "app-pay-amount-dialog", standalone: true, imports: [
      CommonModule,
      FormsModule,
      MatDialogModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatRadioModule
    ], template: `
    <div class="pa-dialog">

      <!-- Header -->
      <div class="pa-head">
        <div class="pa-head-icon">
          <mat-icon>currency_rupee</mat-icon>
        </div>
        <div class="pa-head-text">
          <h2>Choose Payment Amount</h2>
          <p>{{ data.jobTitle }}</p>
        </div>
        <button mat-icon-button class="pa-close" (click)="dialogRef.close()">
          <mat-icon>close</mat-icon>
        </button>
      </div>

      <div class="pa-body">

        <!-- Balance -->
        <div class="pa-section">
          <div class="pa-section-header">
            <mat-icon>account_balance_wallet</mat-icon>
            <span>Balance</span>
          </div>
          <div class="pa-balance">
            <div><span>Agreed total</span><strong>\u20B9{{ data.bidAmount | number:'1.2-2' }}</strong></div>
            <div><span>Remaining</span><strong>\u20B9{{ data.remaining | number:'1.2-2' }}</strong></div>
          </div>
          <p *ngIf="requestedAmount > 0" class="pa-requested">
            <mat-icon>request_quote</mat-icon>
            The professional requested <strong>&nbsp;\u20B9{{ requestedAmount | number:'1.2-2' }}</strong>.
          </p>
        </div>

        <!-- Amount choice -->
        <div class="pa-section">
          <div class="pa-section-header">
            <mat-icon>payments</mat-icon>
            <span>Amount to Pay</span>
          </div>
          <mat-radio-group [(ngModel)]="choice" class="pa-radio-group" (ngModelChange)="error = ''">
            <mat-radio-button *ngIf="requestedAmount > 0 && requestedAmount <= data.remaining + 0.01" value="requested">
              Pay requested \u2014 \u20B9{{ requestedAmount | number:'1.2-2' }}
            </mat-radio-button>
            <mat-radio-button value="full">
              Pay remaining (full) \u2014 \u20B9{{ data.remaining | number:'1.2-2' }}
            </mat-radio-button>
            <mat-radio-button value="custom">Custom amount</mat-radio-button>
          </mat-radio-group>

          <mat-form-field *ngIf="choice === 'custom'" appearance="outline" class="pa-field">
            <mat-label>Amount to pay (\u20B9)</mat-label>
            <input matInput type="number" [(ngModel)]="customAmount" [min]="floor" [max]="data.remaining">
            <mat-hint>Between \u20B9{{ floor | number:'1.2-2' }} and \u20B9{{ data.remaining | number:'1.2-2' }}.</mat-hint>
          </mat-form-field>
        </div>

        <div *ngIf="error" class="pa-error"><mat-icon>error_outline</mat-icon> {{ error }}</div>
      </div>

      <!-- Footer -->
      <div class="pa-footer">
        <button mat-button class="pa-cancel-btn" (click)="dialogRef.close()">Cancel</button>
        <button class="pa-pay-btn" (click)="proceed()">
          <mat-icon>lock</mat-icon> Continue to Pay
        </button>
      </div>
    </div>
  `, styles: ["/* angular:styles/component:scss;2f92e86658dc4c08dc103dad3b44864d5202b48d35ca75e6d1237c4f83339688;C:/repos/yProHub/prohub-ui/src/app/features/payments/pay-amount-dialog.component.ts */\n.pa-dialog {\n  width: 100%;\n  min-width: 320px;\n  max-width: 440px;\n  display: flex;\n  flex-direction: column;\n  max-height: 90vh;\n}\n.pa-head {\n  display: flex;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1.2rem 1.5rem;\n  border-bottom: 1px solid var(--color-border);\n}\n.pa-head-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 12px;\n  background: var(--color-primary-gradient);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.pa-head-icon mat-icon {\n  color: white;\n  font-size: 1.2rem;\n  width: 1.2rem;\n  height: 1.2rem;\n}\n.pa-head-text {\n  flex: 1;\n  min-width: 0;\n}\n.pa-head-text h2 {\n  margin: 0 0 0.1rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  color: var(--color-text);\n}\n.pa-head-text p {\n  margin: 0;\n  font-size: 0.82rem;\n  color: var(--color-text-muted);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.pa-close {\n  flex-shrink: 0;\n  color: #aaa;\n}\n.pa-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 1rem 1.5rem 0.5rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n}\n.pa-section {\n  background: #fafbff;\n  border: 1px solid var(--color-border);\n  border-radius: 12px;\n  padding: 0.9rem 1rem;\n}\n.pa-section-header {\n  display: flex;\n  align-items: center;\n  gap: 0.45rem;\n  margin-bottom: 0.85rem;\n  font-size: 0.78rem;\n  font-weight: 700;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.06em;\n}\n.pa-section-header mat-icon {\n  font-size: 0.9rem;\n  width: 0.9rem;\n  height: 0.9rem;\n  color: var(--color-primary);\n}\n.pa-balance {\n  display: flex;\n  gap: 2rem;\n}\n.pa-balance > div {\n  display: flex;\n  flex-direction: column;\n}\n.pa-balance span {\n  font-size: 0.72rem;\n  color: var(--color-text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n}\n.pa-balance strong {\n  font-size: 1rem;\n  color: var(--color-text);\n}\n.pa-requested {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 0.85rem;\n  color: var(--color-text-muted);\n  margin: 0.75rem 0 0;\n}\n.pa-requested mat-icon {\n  font-size: 1.1rem;\n  width: 1.1rem;\n  height: 1.1rem;\n  color: var(--color-primary);\n}\n.pa-requested strong {\n  color: var(--color-text);\n}\n.pa-radio-group {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n.pa-field {\n  width: 100%;\n  margin-top: 0.75rem;\n}\n.pa-error {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 0.9rem;\n  background: #fff0f0;\n  border: 1px solid #ffcdd2;\n  border-radius: 8px;\n  color: var(--color-error);\n  font-size: 0.87rem;\n}\n.pa-error mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.pa-footer {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 0.75rem;\n  padding: 1rem 1.5rem;\n  border-top: 1px solid var(--color-border);\n  background: white;\n}\n.pa-cancel-btn {\n  color: var(--color-text-muted);\n}\n.pa-pay-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.65rem 1.6rem;\n  background: var(--color-primary-gradient);\n  color: white;\n  border: none;\n  border-radius: 10px;\n  font-size: 0.95rem;\n  font-weight: 700;\n  cursor: pointer;\n  transition: opacity 0.15s;\n}\n.pa-pay-btn mat-icon {\n  font-size: 1rem;\n  width: 1rem;\n  height: 1rem;\n}\n.pa-pay-btn:hover {\n  opacity: 0.91;\n}\n/*# sourceMappingURL=pay-amount-dialog.component.css.map */\n"] }]
  }], () => [{ type: MatDialogRef }, { type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PayAmountDialogComponent, { className: "PayAmountDialogComponent", filePath: "src/app/features/payments/pay-amount-dialog.component.ts", lineNumber: 235 });
})();

export {
  PayAmountDialogComponent
};
//# sourceMappingURL=chunk-MW3QXUQR.js.map

