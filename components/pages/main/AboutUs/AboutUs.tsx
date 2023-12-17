import { cormorant } from "@/app/[locale]/layout";

import { getScopedI18n } from "@/locales/server";
import { aboutUs } from "@/public/images/main";
import MainImage from "@/components/MainImage/MainImage";

import css from "./AboutUs.module.scss";

export default async function AboutUs() {
	const t = await getScopedI18n("pages.main.aboutUs");
	return (
		<div className={css.wrapper}>
			<MainImage sizes="(max-width: 1399px) 100vw, 50vw" className={css.img} src={aboutUs} alt="Complex small picture" width={635} height={635} />
			<div className={css.subWrapper}>
				<h2 className={`${cormorant.className} ${css.title}`}>{t("title")}</h2>
				<p>{t("par1")}</p>
				<p>{t("par2")}</p>
			</div>
		</div>
	);
}
