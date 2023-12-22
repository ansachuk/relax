import { getScopedI18n } from "@/locales/server";
import { nothing } from "@/public/constatnts";

import css from "./Intro.module.scss";

export default async function Intro() {
	const t = await getScopedI18n("pages.main");
	return (
		<article className={css.wrapper}>
			<h1 className={`${nothing.className} ${css.title}`}>Relax Complex -</h1>
			<p className={css.desc}>{t("intro")}</p>
		</article>
	);
}
