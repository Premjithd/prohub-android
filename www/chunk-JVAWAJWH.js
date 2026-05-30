import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  Injectable,
  catchError,
  map,
  of,
  setClassMetadata,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ANTPJ2CK.js";

// src/app/core/services/address.service.ts
var AddressService = class _AddressService {
  http;
  API_URL = `${environment.apiUrl}/address`;
  constructor(http) {
    this.http = http;
  }
  getAddressPredictions(input) {
    if (!input || input.length < 3) {
      return of([]);
    }
    return this.http.get(`${this.API_URL}/search`, {
      params: { query: input, countryCode: "in" }
    }).pipe(map((results) => {
      if (!results || results.length === 0)
        return [];
      return results.slice(0, 10).map((result) => ({
        description: result.display_name,
        placeId: result.place_id.toString(),
        mainText: this.extractMainText(result),
        secondaryText: this.extractSecondaryText(result),
        latitude: result.lat ? parseFloat(result.lat) : void 0,
        longitude: result.lon ? parseFloat(result.lon) : void 0,
        details: this.parseNominatimAddress(result)
      }));
    }), catchError(() => of([])));
  }
  reverseGeocode(lat, lng) {
    return this.http.get("https://nominatim.openstreetmap.org/reverse", {
      params: { lat: lat.toString(), lon: lng.toString(), format: "json" }
    }).pipe(map((result) => {
      const a = result?.address || {};
      const city = a.city || a.town || a.municipality || a.village || a.suburb || a.hamlet || "";
      return { city, state: a.state || a.state_district || "", country: a.country || "" };
    }), catchError(() => of({ city: "", state: "", country: "" })));
  }
  getAddressDetails(placeId) {
    return this.http.get(`${this.API_URL}/details`, {
      params: { placeId }
    }).pipe(map((result) => {
      const r = Array.isArray(result) ? result[0] : result;
      return r ? this.parseNominatimAddress(r) : this.getEmptyAddressDetails();
    }), catchError(() => of(this.getEmptyAddressDetails())));
  }
  extractMainText(result) {
    const a = result.address;
    if (a.house_number && a.road)
      return `${a.house_number} ${a.road}`;
    if (a.road)
      return a.road;
    return a.neighbourhood || a.suburb || a.village || a.hamlet || a.town || a.city || a.municipality || result.display_name.split(",")[0];
  }
  extractSecondaryText(result) {
    const a = result.address;
    const isSubArea = !!(a.neighbourhood || a.suburb || a.village || a.hamlet);
    const city = isSubArea ? a.city || a.town || a.municipality || a.district || a.state_district : a.city || a.town || a.municipality || a.village || a.suburb;
    const parts = [];
    if (city)
      parts.push(city);
    if (a.state)
      parts.push(a.state);
    if (a.postcode)
      parts.push(a.postcode);
    return parts.join(", ");
  }
  parseNominatimAddress(result) {
    const a = result.address;
    const lat = result.lat ? parseFloat(result.lat) : void 0;
    const lon = result.lon ? parseFloat(result.lon) : void 0;
    const city = a.city || a.town || a.municipality || a.village || a.hamlet || a.suburb || a.neighbourhood || a.city_district || a.county || a.state_district || "";
    const rawDistrict = a.state_district || a.county || a.district || "";
    const district = rawDistrict.replace(/\s+(district|taluk|division|tehsil|block)$/i, "").trim();
    return {
      houseNameNumber: a.house_number || "",
      street1: a.road || "",
      street2: a.suburb || a.neighbourhood || "",
      city,
      district,
      state: a.state || a.state_district || "",
      country: a.country || a.country_code?.toUpperCase() || "",
      zipPostalCode: a.postcode || "",
      latitude: lat !== void 0 && !isNaN(lat) ? lat : void 0,
      longitude: lon !== void 0 && !isNaN(lon) ? lon : void 0
    };
  }
  getEmptyAddressDetails() {
    return { houseNameNumber: "", street1: "", street2: "", city: "", district: "", state: "", country: "", zipPostalCode: "" };
  }
  static \u0275fac = function AddressService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddressService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AddressService, factory: _AddressService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddressService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  AddressService
};
//# sourceMappingURL=chunk-JVAWAJWH.js.map

