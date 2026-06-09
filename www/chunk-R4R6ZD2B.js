import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  map,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-UQSUYH4V.js";

// src/app/services/my-services.service.ts
var MyServicesService = class _MyServicesService {
  http;
  apiUrl = `${environment.apiUrl}/services`;
  constructor(http) {
    this.http = http;
  }
  // Get services for the current pro user by their ID
  getMyServices(proId) {
    return this.http.get(`${this.apiUrl}/pro/${proId}`).pipe(map((response) => {
      console.log("Raw API response from getMyServices:", response);
      console.log("Response type:", typeof response);
      console.log("Is array?", Array.isArray(response));
      if (response && response.$values && Array.isArray(response.$values)) {
        console.log("Response uses $values format with", response.$values.length, "items");
        return response.$values;
      }
      if (Array.isArray(response)) {
        console.log("Response is a direct array with", response.length, "items");
        return response;
      }
      if (response && Array.isArray(response.data)) {
        console.log("Response is wrapped with data property, contains", response.data.length, "items");
        return response.data;
      }
      console.log("Response format not recognized, returning empty array");
      return [];
    }));
  }
  // Get a single service by ID
  getService(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Delete a service
  deleteService(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Update a service
  updateService(id, service) {
    return this.http.put(`${this.apiUrl}/${id}`, service);
  }
  // Create a new service
  createService(serviceData) {
    return this.http.post(this.apiUrl, serviceData);
  }
  static \u0275fac = function MyServicesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MyServicesService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _MyServicesService, factory: _MyServicesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MyServicesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  MyServicesService
};
//# sourceMappingURL=chunk-R4R6ZD2B.js.map

