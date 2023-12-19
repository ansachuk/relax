import { createI18nServer } from "next-international/server";

export const { getI18n, getScopedI18n, getCurrentLocale } = createI18nServer({
	uk: () => import("./uk"),
	en: () => import("./en"),
});
