const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"; // Default to localhost if not set

const ERROR_MESSAGES = {
  400: "Invalid request. Please try again.",
  401: "Please log in to continue.",
  403: "Access denied.",
  404: "The content does not exist.",
  408: "Request took too long. Try again.",
  422: "Invalid input. Please try again.",
  500: "Oops! Something went wrong. Try later.",
  502: "Connection issue. Try later.",
  503: "Service is down. Try later.",
  504: "Server took too long. Try again.",
  common: "Oops! Something went wrong. Try later.",
};

const USER_ROLE = {
  CUSTOMER: "customer",
};

const LANGUAGES = ["en", "es", "fr"];

const AGE_RANGE = [
  { value: "19-25", label: "19-25" },
  { value: "26-30", label: "26-30" },
  { value: "31-35", label: "31-35" },
  { value: "36-40", label: "36-40" },
  { value: "41-45", label: "41-45" },
  { value: "46-50", label: "46-50" },
  { value: "51-60", label: "51-60" },
  { value: "61-70", label: "61-70" },
  { value: "71-80", label: "71-80" },
  { value: "81+", label: "81+" },
];

const GENDERS = [
  { value: "male", label: "Male" },
  { value: "female", label: "Female" },
  { value: "other", label: "Other" },
];

const POPUPS_CATEGORIES = {
  sales: "sales_popups",
  cancel: "cancel_popups",
  trial_popups: "trial_popups",
  trial_banner: "trial_banner",
  cancel_delay: "cancel_delay",
};

const SALES_POPUPS_SUB_CATEGORIES = {
  default: "sales_default_popup",
  warning: "sales_warning_popup",
  extendTrialMain: "sales_extended_trial_1",
  extendTrialSecondary: "sales_extended_trial_2",
  discount: "sales_discount_popup",
  lifetimeAccess: "sales_lifetime_access",
};

const CANCEL_POPUPS_SUB_CATEGORIES = {
  default: "cancel_default_popup",
  warning: "cancel_warning_popup",
  extendTrial: "cancel_extended_trial",
  discountMain: "cancel_discount_popup_1",
  discountSecondary: "cancel_discount_popup_2",
  lifetimeAccess: "cancel_lifetime_access",
  feedback: "cancel_feedback_popup",
};

const SIDE_NAV_WIDTH = 270;
const TOP_NAV_HEIGHT = 80;

const LANDING_PAGE = {
  landing1: "L1",
  landing2: "L2",
  landing3: "L3",
};

const LOCAL_STORAGE_KEY = "edzenity:";

export {
  BASE_URL,
  ERROR_MESSAGES,
  LOCAL_STORAGE_KEY,
  USER_ROLE,
  AGE_RANGE,
  GENDERS,
  POPUPS_CATEGORIES,
  SALES_POPUPS_SUB_CATEGORIES,
  CANCEL_POPUPS_SUB_CATEGORIES,
  SIDE_NAV_WIDTH,
  TOP_NAV_HEIGHT,
  LANDING_PAGE,
  LANGUAGES,
};
