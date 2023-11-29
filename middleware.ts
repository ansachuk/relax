import { createI18nMiddleware } from "next-international/middleware";
import { locales } from "./static/static";
import { NextRequest } from "next/server";

const i18Middleware = createI18nMiddleware({
	locales,
	defaultLocale: locales[0],
});

export const middleware = (requset: NextRequest) => {
	return i18Middleware(requset);
};

export const config = {
	matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
