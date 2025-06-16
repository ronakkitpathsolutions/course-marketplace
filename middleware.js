import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;
  const token = request.cookies.get("token")?.value || "";
  const isAuthenticated = isTokenValid(token);

  // Static public routes
  const AUTH_ROUTES = ["/login", "/forgot-password"];
  const isAuthRoutes = AUTH_ROUTES.includes(pathname);

  // Allow dynamic public slugs like /my-page
  const isSlugRoute =
    /^\/[^\/]+$/.test(pathname) &&
    !pathname.startsWith("/dashboard") &&
    !pathname.startsWith("/api");

  // 🔒 Block if not authenticated and route is private
  if (!isAuthenticated && !isAuthRoutes && !isSlugRoute) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // 🔁 If logged in and hits auth login route, redirect to dashboard
  if (isAuthenticated && isAuthRoutes) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

// Match all routes except Next.js internals and static assets
export const config = {
  matcher: ["/((?!_next|static|favicon.ico|images).*)"],
};