import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  PLATFORM_ID,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  tap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-STXT6R65.js";

// src/app/core/services/api.ts
var ApiService = class _ApiService {
  http;
  baseUrl = environment.apiUrl;
  constructor(http) {
    this.http = http;
  }
  get(path) {
    return this.http.get(`${this.baseUrl}/${path}`);
  }
  post(path, body) {
    return this.http.post(`${this.baseUrl}/${path}`, body);
  }
  put(path, body) {
    return this.http.put(`${this.baseUrl}/${path}`, body);
  }
  delete(path) {
    return this.http.delete(`${this.baseUrl}/${path}`);
  }
  loginUser(path, body) {
    return this.http.post(`${this.baseUrl}/${path}`, body);
  }
  getUserById(path) {
    return this.http.get(`${this.baseUrl}/${path}`);
  }
  static \u0275fac = function ApiService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ApiService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApiService, factory: _ApiService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApiService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

// src/app/core/services/storage.ts
var StorageService = class _StorageService {
  platformId = inject(PLATFORM_ID);
  memoryStorage = /* @__PURE__ */ new Map();
  getItem(key) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        return localStorage.getItem(key);
      } catch (e) {
        console.error(`StorageService.getItem failed from localStorage for key=${key}`, e);
        return this.memoryStorage.get(key) || null;
      }
    }
    return this.memoryStorage.get(key) || null;
  }
  setItem(key, value) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.setItem(key, value);
      } catch (e) {
        console.error(`StorageService.setItem failed for key=${key}`, e);
        this.memoryStorage.set(key, value);
      }
    } else {
      this.memoryStorage.set(key, value);
    }
  }
  removeItem(key) {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.removeItem(key);
      } catch {
        this.memoryStorage.delete(key);
      }
    } else {
      this.memoryStorage.delete(key);
    }
  }
  clear() {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.clear();
      } catch {
        this.memoryStorage.clear();
      }
    } else {
      this.memoryStorage.clear();
    }
  }
  static \u0275fac = function StorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StorageService, factory: _StorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StorageService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/core/services/auth.ts
var Auth = class _Auth {
  api;
  storage;
  AUTH_TOKEN_KEY = "auth_token";
  REFRESH_TOKEN_KEY = "refresh_token";
  USER_TYPE_KEY = "user_type";
  USER_NAME_KEY = "user_name";
  USER_ID_KEY = "user_id";
  // Keys used to preserve admin session while impersonating
  ADMIN_TOKEN_KEY = "admin_restore_token";
  ADMIN_REFRESH_KEY = "admin_restore_refresh_token";
  ADMIN_TYPE_KEY = "admin_restore_type";
  ADMIN_NAME_KEY = "admin_restore_name";
  ADMIN_ID_KEY = "admin_restore_id";
  constructor(api, storage) {
    this.api = api;
    this.storage = storage;
  }
  login(credentials) {
    return this.api.loginUser("auth/user/login", credentials).pipe(tap((response) => {
      if (response)
        this.storeSession(response);
    }));
  }
  loginPro(credentials) {
    return this.api.loginUser("auth/pro/login", credentials).pipe(tap((response) => {
      if (response)
        this.storeSession(response);
    }));
  }
  registerUser(userData) {
    return this.api.post("auth/user/register", userData);
  }
  registerPro(proData) {
    return this.api.post("auth/pro/register", proData);
  }
  logout() {
    this.storage.removeItem(this.AUTH_TOKEN_KEY);
    this.storage.removeItem(this.REFRESH_TOKEN_KEY);
    this.storage.removeItem(this.USER_TYPE_KEY);
    this.storage.removeItem(this.USER_NAME_KEY);
    this.storage.removeItem(this.USER_ID_KEY);
    this.storage.removeItem(this.ADMIN_TOKEN_KEY);
    this.storage.removeItem(this.ADMIN_REFRESH_KEY);
    this.storage.removeItem(this.ADMIN_TYPE_KEY);
    this.storage.removeItem(this.ADMIN_NAME_KEY);
    this.storage.removeItem(this.ADMIN_ID_KEY);
  }
  logoutOnServer() {
    const refreshToken = this.storage.getItem(this.REFRESH_TOKEN_KEY);
    return this.api.post("auth/logout", refreshToken ? { refreshToken } : {});
  }
  isAuthenticated() {
    try {
      return !!this.storage.getItem(this.AUTH_TOKEN_KEY);
    } catch {
      return false;
    }
  }
  getName() {
    try {
      return this.storage.getItem(this.USER_NAME_KEY);
    } catch {
      return null;
    }
  }
  getUserId() {
    return this.storage.getItem(this.USER_ID_KEY);
  }
  getToken() {
    return this.storage.getItem(this.AUTH_TOKEN_KEY);
  }
  getRefreshToken() {
    return this.storage.getItem(this.REFRESH_TOKEN_KEY);
  }
  getUserType() {
    return this.storage.getItem(this.USER_TYPE_KEY);
  }
  acceptAdminInvitation(token, firstName, lastName, password) {
    return this.api.loginUser("auth/accept-admin-invite", { token, firstName, lastName, password }).pipe(tap((response) => {
      if (response)
        this.storeSession(response);
    }));
  }
  startImpersonation(token, userId, userType, displayName) {
    const curr = {
      token: this.storage.getItem(this.AUTH_TOKEN_KEY),
      refresh: this.storage.getItem(this.REFRESH_TOKEN_KEY),
      type: this.storage.getItem(this.USER_TYPE_KEY),
      name: this.storage.getItem(this.USER_NAME_KEY),
      id: this.storage.getItem(this.USER_ID_KEY)
    };
    if (curr.token)
      this.storage.setItem(this.ADMIN_TOKEN_KEY, curr.token);
    if (curr.refresh)
      this.storage.setItem(this.ADMIN_REFRESH_KEY, curr.refresh);
    if (curr.type)
      this.storage.setItem(this.ADMIN_TYPE_KEY, curr.type);
    if (curr.name)
      this.storage.setItem(this.ADMIN_NAME_KEY, curr.name);
    if (curr.id)
      this.storage.setItem(this.ADMIN_ID_KEY, curr.id);
    this.storage.setItem(this.AUTH_TOKEN_KEY, token);
    this.storage.setItem(this.USER_TYPE_KEY, userType);
    this.storage.setItem(this.USER_NAME_KEY, displayName);
    this.storage.setItem(this.USER_ID_KEY, userId.toString());
    this.storage.removeItem(this.REFRESH_TOKEN_KEY);
  }
  exitImpersonation() {
    const adminToken = this.storage.getItem(this.ADMIN_TOKEN_KEY);
    if (!adminToken)
      return;
    this.storage.setItem(this.AUTH_TOKEN_KEY, adminToken);
    this.storage.setItem(this.USER_TYPE_KEY, this.storage.getItem(this.ADMIN_TYPE_KEY) ?? "Admin");
    this.storage.setItem(this.USER_NAME_KEY, this.storage.getItem(this.ADMIN_NAME_KEY) ?? "");
    this.storage.setItem(this.USER_ID_KEY, this.storage.getItem(this.ADMIN_ID_KEY) ?? "");
    const adminRefresh = this.storage.getItem(this.ADMIN_REFRESH_KEY);
    if (adminRefresh)
      this.storage.setItem(this.REFRESH_TOKEN_KEY, adminRefresh);
    else
      this.storage.removeItem(this.REFRESH_TOKEN_KEY);
    this.storage.removeItem(this.ADMIN_TOKEN_KEY);
    this.storage.removeItem(this.ADMIN_REFRESH_KEY);
    this.storage.removeItem(this.ADMIN_TYPE_KEY);
    this.storage.removeItem(this.ADMIN_NAME_KEY);
    this.storage.removeItem(this.ADMIN_ID_KEY);
  }
  isImpersonating() {
    return !!this.storage.getItem(this.ADMIN_TOKEN_KEY);
  }
  storeSession(response) {
    this.storage.setItem(this.AUTH_TOKEN_KEY, response.token);
    this.storage.setItem(this.USER_TYPE_KEY, response.role);
    this.storage.setItem(this.USER_NAME_KEY, response.firstName);
    this.storage.setItem(this.USER_ID_KEY, response.id?.toString() ?? "");
    if (response.refreshToken) {
      this.storage.setItem(this.REFRESH_TOKEN_KEY, response.refreshToken);
    }
  }
  static \u0275fac = function Auth_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _Auth)(\u0275\u0275inject(ApiService), \u0275\u0275inject(StorageService));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Auth, factory: _Auth.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Auth, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: ApiService }, { type: StorageService }], null);
})();

export {
  ApiService,
  StorageService,
  Auth
};
//# sourceMappingURL=chunk-MJ2Z243I.js.map

