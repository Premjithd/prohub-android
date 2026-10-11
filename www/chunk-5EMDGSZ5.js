import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-CTKGZTQY.js";

// src/app/services/file-upload.service.ts
var FileUploadService = class _FileUploadService {
  http;
  apiUrl = `${environment.apiUrl}/files`;
  constructor(http) {
    this.http = http;
  }
  /** Upload a single file; returns its stored id and public URL. */
  upload(file) {
    const form = new FormData();
    form.append("file", file);
    return this.http.post(`${this.apiUrl}/upload`, form);
  }
  /** Public URL for a previously-stored file id. */
  fileUrl(fileId) {
    return `${this.apiUrl}/${fileId}`;
  }
  static \u0275fac = function FileUploadService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FileUploadService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _FileUploadService, factory: _FileUploadService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FileUploadService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  FileUploadService
};
//# sourceMappingURL=chunk-5EMDGSZ5.js.map

