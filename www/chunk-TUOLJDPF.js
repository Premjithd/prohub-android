import {
  environment
} from "./chunk-UGJKRHBV.js";
import {
  HttpClient,
  HttpParams,
  Injectable,
  map,
  setClassMetadata,
  switchMap,
  ɵɵdefineInjectable,
  ɵɵinject
} from "./chunk-ANTPJ2CK.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-7WUTQBRG.js";

// src/app/services/job.service.ts
var JobService = class _JobService {
  http;
  apiUrl = `${environment.apiUrl}/jobs`;
  constructor(http) {
    this.http = http;
  }
  unwrapPagedResult(response, page, pageSize) {
    const raw = response?.items;
    const items = Array.isArray(raw) ? raw : raw?.$values ?? [];
    return { items, total: response?.total ?? 0, page: response?.page ?? page, pageSize: response?.pageSize ?? pageSize };
  }
  // Get all jobs posted by the current user (paginated)
  getMyJobs(page = 1, pageSize = 20, status) {
    let params = new HttpParams().set("page", page).set("pageSize", pageSize);
    if (status)
      params = params.set("status", status);
    return this.http.get(`${this.apiUrl}/my-jobs`, { params }).pipe(map((r) => this.unwrapPagedResult(r, page, pageSize)));
  }
  // Get a specific job by ID
  getJob(id) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
  // Create a new job
  createJob(jobData) {
    return this.http.post(this.apiUrl, jobData);
  }
  // Update an existing job
  updateJob(id, jobData) {
    const dataWithId = __spreadProps(__spreadValues({}, jobData), { id });
    return this.http.put(`${this.apiUrl}/${id}`, dataWithId);
  }
  // Delete a job
  deleteJob(id) {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
  // Get jobs by category
  getJobsByCategory(category) {
    return this.http.get(`${this.apiUrl}/category/${category}`);
  }
  // Get available jobs (paginated, proximity-aware)
  getAvailableJobs(page = 1, pageSize = 20, categoryId, filterRadiusKm, search) {
    let params = new HttpParams().set("page", page).set("pageSize", pageSize);
    if (filterRadiusKm != null)
      params = params.set("filterRadiusKm", filterRadiusKm);
    if (categoryId)
      params = params.set("categoryId", categoryId);
    if (search)
      params = params.set("search", search);
    return this.http.get(`${this.apiUrl}/available`, { params }).pipe(map((r) => __spreadProps(__spreadValues({}, this.unwrapPagedResult(r, page, pageSize)), {
      proximityFilterApplied: r?.proximityFilterApplied ?? false,
      proLocationSet: r?.proLocationSet ?? false,
      radiusKm: r?.radiusKm ?? null
    })));
  }
  // Submit a bid for a job
  submitJobBid(jobId, bidData) {
    return this.http.post(`${this.apiUrl}/${jobId}/bid`, bidData);
  }
  // Get bids for a specific job
  getJobBids(jobId) {
    return this.http.get(`${this.apiUrl}/${jobId}/bids`).pipe(map((response) => {
      if (response && response.$values && Array.isArray(response.$values)) {
        return response.$values;
      }
      if (Array.isArray(response)) {
        return response;
      }
      if (response && response.data && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    }));
  }
  // Accept a bid
  acceptBid(jobId, bidId) {
    return this.http.post(`${this.apiUrl}/${jobId}/bids/${bidId}/accept`, {});
  }
  // Reject a bid
  rejectBid(jobId, bidId, reason) {
    return this.http.post(`${this.apiUrl}/${jobId}/bids/${bidId}/reject`, reason ? { reason } : {});
  }
  // Withdraw a bid (Pro only, Pending bids only)
  withdrawBid(jobId, bidId) {
    return this.http.post(`${this.apiUrl}/${jobId}/bids/${bidId}/withdraw`, {});
  }
  // Cancel a job (User only, Open/Pending status)
  cancelJob(jobId, reason) {
    return this.http.post(`${this.apiUrl}/${jobId}/cancel`, { reason: reason ?? null });
  }
  // Get jobs assigned to the current Pro
  getAssignedJobs() {
    return this.http.get(`${this.apiUrl}/assigned`).pipe(map((response) => {
      if (response && response.$values && Array.isArray(response.$values)) {
        return response.$values;
      }
      if (Array.isArray(response)) {
        return response;
      }
      if (response && response.data && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    }));
  }
  // Pro confirms job after payment — transitions to In Progress
  confirmJob(jobId) {
    return this.http.post(`${this.apiUrl}/${jobId}/pro-confirm`, {});
  }
  // Mark a job as completed (Pro submits — awaits consumer verification)
  markJobCompleted(jobId, notes) {
    return this.http.put(`${this.apiUrl}/${jobId}/complete`, { completionNotes: notes ?? null });
  }
  // Get the completion record for a job
  getJobCompletion(jobId) {
    return this.http.get(`${this.apiUrl}/${jobId}/completion`);
  }
  // Pro resubmits completion after a dispute
  resubmitCompletion(jobId, notes) {
    return this.http.put(`${this.apiUrl}/${jobId}/complete`, { completionNotes: notes ?? null });
  }
  // Consumer verifies the pro's completion
  verifyJobCompletion(jobId) {
    return this.http.post(`${this.apiUrl}/${jobId}/completion/verify`, {});
  }
  // Consumer disputes the pro's completion
  disputeJobCompletion(jobId, reason) {
    return this.http.post(`${this.apiUrl}/${jobId}/completion/dispute`, { reason });
  }
  // Update job phases
  updateJobPhases(jobId, phases) {
    return this.http.put(`${this.apiUrl}/${jobId}/phases`, { jobPhases: phases });
  }
  // Toggle phase completion
  togglePhaseCompletion(jobId, phaseId) {
    return this.http.post(`${this.apiUrl}/${jobId}/phases/${phaseId}/toggle`, {});
  }
  // Get messages for a job
  getJobMessages(jobId) {
    return this.http.get(`${environment.apiUrl}/messages/job/${jobId}`).pipe(map((response) => {
      if (response && response.$values && Array.isArray(response.$values)) {
        return response.$values;
      }
      if (Array.isArray(response)) {
        return response;
      }
      if (response && response.data && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    }));
  }
  // Send a message and refresh chat history
  sendMessage(jobId, message, recipientId) {
    const payload = recipientId ? __spreadProps(__spreadValues({}, message), { recipientId }) : message;
    return this.http.post(`${environment.apiUrl}/messages/job/${jobId}`, payload).pipe(
      // After sending, fetch the updated message list
      switchMap(() => this.getJobMessages(jobId))
    );
  }
  // Send a message to a bid professional
  sendMessageToBid(bidId, message) {
    return this.http.post(`${environment.apiUrl}/messages/bid/${bidId}`, message);
  }
  // Get all messages for the current user
  getAllMessages() {
    return this.http.get(`${environment.apiUrl}/messages`).pipe(map((response) => {
      if (response && response.$values && Array.isArray(response.$values)) {
        return response.$values;
      }
      if (Array.isArray(response)) {
        return response;
      }
      if (response && response.data && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    }));
  }
  // Get conversation partners (paginated)
  getConversationPartners(userType, page = 1, pageSize = 20) {
    const params = new HttpParams().set("userType", userType).set("page", page).set("pageSize", pageSize);
    return this.http.get(`${environment.apiUrl}/messages/conversations`, { params }).pipe(map((r) => this.unwrapPagedResult(r, page, pageSize)));
  }
  // Get messages with a specific user (not job-related)
  getMessagesWithUser(userId) {
    return this.http.get(`${environment.apiUrl}/messages/user/${userId}`).pipe(map((response) => {
      if (response && response.$values && Array.isArray(response.$values)) {
        return response.$values;
      }
      if (Array.isArray(response)) {
        return response;
      }
      if (response && response.data && Array.isArray(response.data)) {
        return response.data;
      }
      return [];
    }));
  }
  // Send a direct message to another user
  sendDirectMessage(message) {
    return this.http.post(`${environment.apiUrl}/messages/send`, {
      recipientId: message.recipientId,
      senderType: message.senderType,
      content: message.content
    });
  }
  // Mark a message as read
  markMessageAsRead(messageId) {
    return this.http.put(`${environment.apiUrl}/messages/${messageId}/read`, {});
  }
  static \u0275fac = function JobService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _JobService)(\u0275\u0275inject(HttpClient));
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _JobService, factory: _JobService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(JobService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [{ type: HttpClient }], null);
})();

export {
  JobService
};
//# sourceMappingURL=chunk-TUOLJDPF.js.map

