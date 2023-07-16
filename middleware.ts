import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { match as matchLocale } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";

import { i18n } from "@/i18n.config";

// GET LOCALE HANDLER
function getLocale(request: NextRequest): string | undefined {
  // Negotiator expects plain object so we need to convert the headers Map
  const negotiatorHeaders: Record<string, string> = {};
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
  // Use negotiator and intl-localematcher to get best locale
  let languages = new Negotiator({ headers: negotiatorHeaders }).languages();
  // @ts-ignore locales are readonly
  const locales: string[] = i18n.locales;
  return matchLocale(languages, locales, i18n.defualtLocale);
}

// MIDDLEWARE
export default function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  // Check if there is any supporrted locale in the pathname
  const pathnameMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}`) && pathname !== `/${locale}`
  );

  // If there is no locale in the pathname, redirect to the best locale
  if (pathnameMissingLocale) {
    const locale = getLocale(request);
    return NextResponse.redirect(
      new URL(`/${locale}/${pathname}`, request.url)
    );
  }
}

// Matcher
export const config = {
  // Match ingornig `/_next/` and `/api/` folders
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap).*)"],
};
