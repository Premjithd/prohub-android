// src/app/core/utils/http-error.ts
function getHttpErrorMessage(error, fallback) {
  if (error?.status === 0) {
    return "Unable to reach the server. Please check your internet connection and try again.";
  }
  const body = error?.error;
  if (body && typeof body === "object" && !(body instanceof Error)) {
    const message = body.message ?? body.error;
    if (typeof message === "string" && message) {
      return message;
    }
  }
  return fallback;
}

export {
  getHttpErrorMessage
};
//# sourceMappingURL=chunk-MBOZ5WI3.js.map

