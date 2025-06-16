import { BASE_URL, ERROR_MESSAGES } from "@/constants";
import { apiAsyncHandler } from ".";

export const METHODS = {
  POST: "post",
  GET: "get",
  DELETE: "delete",
  PUT: "put",
  PATCH: "patch",
  HEAD: "head",
  OPTIONS: "options",
};

const DEFAULT_PREFIX = "/api";

export const client = async ({
  baseUrl = "",
  endpoint = "",
  method = METHODS.GET,
  params = {},
  isServer = true,
  body = {},
  headers = {},
  ...rest
}) => {
  let url = baseUrl + DEFAULT_PREFIX + endpoint;

  if (
    (method === METHODS.GET || method === METHODS.HEAD) &&
    Object.keys(body).length > 0
  ) {
    const bodyParams = { ...body };
    params = { ...params, ...bodyParams };
    body = {}; // Clear body for GET/HEAD requests
  }

  if (Object.keys(params).length > 0) {
    const queryString = new URLSearchParams(params).toString();
    url = `${baseUrl}${DEFAULT_PREFIX}${endpoint}?${queryString}`;
  }

  const fetchOptions = {
    method,
    headers,
    ...rest,
  };

  if (
    method !== METHODS.GET &&
    method !== METHODS.HEAD &&
    Object.keys(body).length > 0
  ) {
    fetchOptions.body = JSON.stringify(body);
    fetchOptions.headers = fetchOptions.headers || {};
    if (!fetchOptions.headers["Content-Type"]) {
      fetchOptions.headers["Content-Type"] = "application/json";
    }
  }

  return await apiAsyncHandler(
    async () => {
      const res = await fetch(url, fetchOptions);

      const result = await res.json();

      if (res?.ok) {
        return { status: res?.status, data: result };
      } else {
        const { data, error } = result || {};

        const status = error?.status;

        const message = ERROR_MESSAGES?.[status] || ERROR_MESSAGES.common;

        throw {
          status,
          message,
          data,
          apiError: error || {},
        };
      }
    },
    (error) => {
      throw error;
    }
  );
};
