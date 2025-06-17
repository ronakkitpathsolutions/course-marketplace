import { NextResponse } from "next/server";
import { isTokenValid, getBestLanguage, LANGUAGE_COOKIE_NAME } from "@/helpers";

const PUBLIC_AUTH_ROUTES = ["/login", "/forgot-password"];
const PRIVATE_BASE_ROUTES = ["/dashboard", "/admin"];

export function middleware(request) {
  const { pathname } = request.nextUrl;
  console.log("🧠 Middleware hit:", pathname);

  // 🧊 Skip Next.js internal routes & static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/static") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.startsWith("/images") ||
    pathname.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  // 🔐 Auth token validation
  const token = request.cookies.get("token")?.value || "";
  const isAuthenticated = isTokenValid(token);
  // 🌍 Language detection from cookies/headers
  const detectedLanguage = getBestLanguage(request);
  console.log("🌍 Middleware detected language:", detectedLanguage);
  
  // 🏷️ Route classification
  const isAuthRoute = PUBLIC_AUTH_ROUTES.includes(pathname);
  const isPrivateRoute = PRIVATE_BASE_ROUTES.some((route) =>
    pathname.startsWith(route)
  );

  // 🚫 Block unauthenticated users from private routes
  if (!isAuthenticated && isPrivateRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 🔁 Authenticated users should not hit auth pages
  if (isAuthenticated && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  // 🍪 Set language cookie if not present or different
  const currentLanguageCookie = request.cookies.get(LANGUAGE_COOKIE_NAME)?.value;
  const response = NextResponse.next();
  
  if (!currentLanguageCookie || currentLanguageCookie !== detectedLanguage) {
    console.log("🍪 Setting language cookie:", detectedLanguage);
    response.cookies.set(LANGUAGE_COOKIE_NAME, detectedLanguage, {
      maxAge: 365 * 24 * 60 * 60, // 1 year
      path: "/",
      sameSite: "lax",
      httpOnly: false, // Allow client-side access
    });
  }

  // ✅ All good – allow the request through
  return response;
}

export const config = {
  matcher: ["/((?!_next|static|favicon.ico|images|api).*)"],
};
