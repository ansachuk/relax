import { getScopedI18n } from "@/locales/server";
import css from "./Banner.module.scss";
import { cormorant } from "@/app/[locale]/layout";

export default async function Banner() {
	const t = await getScopedI18n("pages.pool");
	return <div className={`${cormorant.className} ${css.banner}`}>{t("bannerText")}</div>;
}
