import { getScopedI18n } from "@/locales/server";
import { cormorant } from "@/public/constatnts";

import css from "./Banner.module.scss";

export default async function Banner() {
	const t = await getScopedI18n("pages.pool");
	return <div className={`${cormorant.className} ${css.banner}`}>{t("bannerText")}</div>;
}
