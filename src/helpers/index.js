import { BASE_URL } from '@/constants';

export {
  detectLanguageFromCookies,
  detectLanguageFromHeaders,
  getBestLanguage,
  getClientLanguage,
  setLanguagePreference,
  LANGUAGE_COOKIE_NAME,
  DEFAULT_LANGUAGE
} from './language';

export const isEmptyObject = (obj = {}) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
};

export const parseJwt = (token = "") => {
  try {
    const base64 = token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/");
    const jsonPayload = decodeURIComponent(
      atob(base64)
        .split("")
        .map((c) => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
        .join("")
    );
    return JSON.parse(jsonPayload);
  } catch (err) {
    return null;
  }
};

export const isTokenValid = (token = '') => {

  if(!token) return false

  const payload = parseJwt(token);
  if (!payload?.exp) return false;

  const now = Math.floor(Date.now() / 1000);
  return payload.exp > now;
}

export const logError = (error) => {
  console.error("Error:", error);
};

export const apiAsyncHandler = async (apiCall, handleError) => {
  try {
    const response = await apiCall();
    return response;
  } catch (error) {
    logError(error);
    if (handleError && typeof handleError === "function") {
      handleError(error);
    }
    return null;
  }
};

export const getVideoType = (url = "") => {
  if (!url) return "video/mp4";
  return url.toLowerCase().endsWith(".m3u8")
    ? "application/x-mpegURL"
    : "video/mp4";
};

export const videoURL = (url = "") => {
  if (!url) return "";
  return url.startsWith("http://") || url.startsWith("https://")
    ? url
    : BASE_URL + url;
};

export const isHLS = (url) => {
  if (!url) return false;
  const hlsRegex = /\.(m3u8|m3u)/i;
  return hlsRegex.test(url);
};

export const lineClamp = (lines) => ({
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  overflow: "hidden",
  WebkitLineClamp: lines,
  textOverflow: "ellipsis",
});

let timerId = null;
export const debounced = (callback, wait = 300) => {
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    callback();
  }, wait);
};

export const isFunction = (fn) => typeof fn === "function";
