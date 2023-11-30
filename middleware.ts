import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest } from "next/server";

const i18Middleware = createI18nMiddleware({
	locales: ["uk", "en"],
	defaultLocale: "uk",
});

export const middleware = (requset: NextRequest) => {
	return i18Middleware(requset);
};

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
