import {
  Auth
} from "./chunk-6CNFBV5T.js";
import {
  Router
} from "./chunk-VRKQDNIA.js";
import {
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UQSUYH4V.js";

// src/app/core/guards/auth.guard.ts
var AuthGuard = class _AuthGuard {
  auth;
  router;
  constructor(auth, router) {
    this.auth = auth;
    this.router = router;
  }
  canActivate(route, state) {
    if (this.auth.isAuthenticated()) {
      return true;
    }
    this.router.navigate(["/auth/login"], { queryParams: { returnUrl: state.url } });
    return false;
  }
  static \u0275fac = function AuthGuard_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AuthGuard)(\u0275\u0275inject(Auth), \u0275\u0275inject(Router));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AuthGuard, factory: _AuthGuard.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AuthGuard, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: Auth }, { type: Router }], null);
})();

export {
  AuthGuard
};
//# sourceMappingURL=chunk-WMSYBUTB.js.map

