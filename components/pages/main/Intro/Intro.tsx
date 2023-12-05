import { nothing } from "@/app/[locale]/layout";

import { getScopedI18n } from "@/locales/server";

import css from "./Intro.module.scss";

export default async function Intro() {
	const t = await getScopedI18n("pages.main");
	return (
		<div className={css.wrapper}>
			<h1 className={`${nothing.className} ${css.title}`}>Relax Complex -</h1>
			<p className={css.desc}>{t("intro")}</p>
		</div>
	);
}
