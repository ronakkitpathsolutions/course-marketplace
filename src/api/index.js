import { client, METHODS } from "@/helpers/fetch";

export const api = {
  auth: {
    login: ({ auth, ...configs }) =>
      client({
        method: METHODS.POST,
        auth,
        ...configs,
        endpoint: "/login",
      }),
    verifyOtp: ({ data, ...configs }) =>
      client({
        method: METHODS.POST,
        data,
        ...configs,
        endpoint: "/verify-reset-password",
      }),
    resend: ({ data, ...configs }) =>
      client({
        method: METHODS.POST,
        data,
        ...configs,
        endpoint: "/resend-otp",
      }),
    forgotPassword: ({ data, ...configs }) =>
      client({
        method: METHODS.POST,
        data,
        ...configs,
        endpoint: "/forgot-password",
      }),
    resetPassword: ({ data, ...configs }) =>
      client({
        method: METHODS.POST,
        data,
        ...configs,
        endpoint: "/reset-password",
      }),
    changePassword: ({ data, ...configs }) =>
      client({
        method: METHODS.POST,
        data,
        ...configs,
        endpoint: "/change-password",
      }),
    verifyToken: ({ data, ...configs }) =>
      client({
        method: METHODS.POST,
        data,
        ...configs,
        endpoint: "/token-verification",
      }),
  },
  landing: {
    get: ({ data, ...configs }) =>
      client({
        method: METHODS.GET,
        data,
        ...configs,
        endpoint: "/landingPageDetails",
      }),
  },
};
