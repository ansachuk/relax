import { getScopedI18n } from "@/locales/server";

import Slider from "./Slider/Slider";

import css from "./Reviews.module.scss";

export default async function Reviews() {
	const t = await getScopedI18n("reviews");

	return (
		<>
			<p className={css.desc}>{t("description")}</p>
			<Slider />
		</>
	);
}
