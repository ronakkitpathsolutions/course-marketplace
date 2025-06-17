"use server";

import { cookies } from "next/headers";
import { LANGUAGE_COOKIE_NAME } from "@/helpers";

/**
 * Get the current language from server-side cookies
 * @returns {Promise<string>} Language code
 */
export async function getServerLanguage() {
  const cookieStore = await cookies();
  const languageCookie = cookieStore.get(LANGUAGE_COOKIE_NAME);
  
  if (languageCookie?.value) {
    return languageCookie.value;
  }
  
  // If no cookie found, return default language
  // In a real scenario, you might want to detect from headers here
  return "en";
}

/**
 * Set language preference on server-side
 * @param {string} language Language code
 */
export async function setServerLanguage(language) {
  const cookieStore = await cookies();
  
  cookieStore.set(LANGUAGE_COOKIE_NAME, language, {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: "/",
    sameSite: "lax",
  });
}
