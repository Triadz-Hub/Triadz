import { NextResponse, type NextRequest } from "next/server";

const CANONICAL_HOST = "triadz.in";
const WWW_HOST = "www.triadz.in";

/**
 * Keep triadz.in as the canonical host. Attach both apex and www hostnames
 * to the GoDaddy app; requests arriving on www are redirected to the apex.
 */
export function proxy(request: NextRequest) {
  const requestHost = (request.headers.get("host") || "")
    .toLowerCase()
    .split(":")[0];

  if (requestHost !== WWW_HOST) {
    return NextResponse.next();
  }

  const canonicalUrl = request.nextUrl.clone();
  canonicalUrl.protocol = "https:";
  canonicalUrl.hostname = CANONICAL_HOST;
  canonicalUrl.port = "";

  return NextResponse.redirect(canonicalUrl, 308);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
