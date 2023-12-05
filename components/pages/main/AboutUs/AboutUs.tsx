import Image from "next/image";

import { cormorant } from "@/app/[locale]/layout";

import { aboutUs } from "@/static/images/main";

import css from "./AboutUs.module.scss";
import { getScopedI18n } from "@/locales/server";

export default async function AboutUs() {
	const t = await getScopedI18n("pages.main.aboutUs");
	return (
		<div className={css.wrapper}>
			<Image src={aboutUs} alt="Complex small picture" sizes="100vw" width={635} height={635} />
			<div className={css.subWrapper}>
				<h2 className={`${cormorant.className} ${css.title}`}>{t("title")}</h2>
				<p>{t("par1")}</p>
				<p>{t("par2")}</p>
			</div>
		</div>
	);
}
