import createMiddleware from "next-intl/middleware";
import { NextRequest } from "next/server";

export default async function middleware(request: NextRequest) {
  const handleI18nRouting = createMiddleware({
    locales: ["ro", "en"],
    defaultLocale: "ro",
    localePrefix: "always"
  });

  const response = await handleI18nRouting(request);

  // If we're on the root path, force redirect to Romanian
  if (request.nextUrl.pathname === "/") {
    return Response.redirect(new URL("/ro", request.url));
  }

  return response;
}

export const config = {
  matcher: ["/", "/(ro|en)/:path*"],
};
