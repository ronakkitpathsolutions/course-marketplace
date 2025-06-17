import { LANGUAGES } from "@/constants";

export const LANGUAGE_COOKIE_NAME = "preferred-language";
export const DEFAULT_LANGUAGE = "en";

/**
 * Detect language from cookies or browser preference
 * @param {Request} request - Next.js request object (server-side)
 * @returns {string} - Language code
 */
export function detectLanguageFromCookies(request) {
  if (request?.cookies) {
    const cookieLanguage = request.cookies.get(LANGUAGE_COOKIE_NAME)?.value;
    if (cookieLanguage && LANGUAGES.includes(cookieLanguage)) {
      return cookieLanguage;
    }
  }
  
  return DEFAULT_LANGUAGE;
}

/**
 * Detect language from browser preferences
 * @param {Request} request - Next.js request object (server-side)
 * @returns {string} - Language code
 */
export function detectLanguageFromHeaders(request) {
  const acceptLanguage = request?.headers?.get("accept-language");
  
  if (acceptLanguage) {
    // Parse accept-language header
    const languages = acceptLanguage
      .split(",")
      .map(lang => lang.split(";")[0].trim().toLowerCase())
      .map(lang => lang.split("-")[0]); // Convert en-US to en
    
    // Find first supported language
    for (const lang of languages) {
      if (LANGUAGES.includes(lang)) {
        return lang;
      }
    }
  }
  
  return DEFAULT_LANGUAGE;
}

/**
 * Get the best language for the user
 * Priority: Cookie > Browser Preference > Default
 * @param {Request} request - Next.js request object (server-side)
 * @returns {string} - Language code
 */
export function getBestLanguage(request) {
  // First try cookie
  const cookieLanguage = detectLanguageFromCookies(request);
  if (cookieLanguage !== DEFAULT_LANGUAGE) {
    return cookieLanguage;
  }
  
  // Then try browser preference
  const browserLanguage = detectLanguageFromHeaders(request);
  
  return browserLanguage;
}

/**
 * Client-side language detection from localStorage and cookies
 * @returns {string} - Language code
 */
export function getClientLanguage() {
  if (typeof window === "undefined") return DEFAULT_LANGUAGE;
  
  try {
    // Check localStorage first (for immediate access)
    const storedLanguage = localStorage.getItem(LANGUAGE_COOKIE_NAME);
    if (storedLanguage && LANGUAGES.includes(storedLanguage)) {
      return storedLanguage;
    }
    
    // Check cookies
    const cookies = document.cookie.split(';');
    const languageCookie = cookies
      .find(cookie => cookie.trim().startsWith(`${LANGUAGE_COOKIE_NAME}=`));
    
    if (languageCookie) {
      const language = languageCookie.split('=')[1];
      if (LANGUAGES.includes(language)) {
        // Sync with localStorage
        localStorage.setItem(LANGUAGE_COOKIE_NAME, language);
        return language;
      }
    }
    
    // Fallback to browser language
    const browserLang = navigator.language.split('-')[0];
    if (LANGUAGES.includes(browserLang)) {
      return browserLang;
    }
  } catch (error) {
    console.warn('Error detecting client language:', error);
  }
  
  return DEFAULT_LANGUAGE;
}

/**
 * Set language preference in both cookie and localStorage
 * @param {string} language - Language code
 */
export function setLanguagePreference(language) {
  if (!LANGUAGES.includes(language)) {
    console.warn(`Unsupported language: ${language}`);
    return;
  }
  
  if (typeof window !== "undefined") {
    // Set in localStorage for immediate access
    localStorage.setItem(LANGUAGE_COOKIE_NAME, language);
    
    // Set cookie with 1 year expiration
    const expires = new Date();
    expires.setFullYear(expires.getFullYear() + 1);
    document.cookie = `${LANGUAGE_COOKIE_NAME}=${language}; expires=${expires.toUTCString()}; path=/; SameSite=Lax`;
  }
}
