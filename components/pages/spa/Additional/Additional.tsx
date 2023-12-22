import MainImage from "@/components/MainImage/MainImage";

import { additional } from "@/public/images/spa";
import { cormorant } from "@/public/constatnts";
import { getScopedI18n } from "@/locales/server";

import css from "./Additional.module.scss";

export default async function Additional() {
	const t = await getScopedI18n("pages.spa.additional");

	return (
		<section className={css.section}>
			<div className={css.wrapper}>
				<div className={css.buy}>
					<h4 className={`${cormorant.className} ${css.subtitle}`}>{t("buy.title")}</h4>
					<ul className={css.list}>
						<li>- {t("buy.items.1")}</li>
						<li>- {t("buy.items.2")}</li>
						<li>- {t("buy.items.3")}</li>
						<li>- {t("buy.items.4")}</li>
					</ul>
				</div>
				<div className={css.rent}>
					<h4 className={`${cormorant.className} ${css.subtitle}`}>{t("rent.title")}</h4>
					<ul className={css.list}>
						<li>- {t("rent.items.1")}</li>
						<li>- {t("rent.items.2")}</li>
					</ul>
				</div>
			</div>
			<MainImage src={additional} width={1280} height={585} alt="spa image" className={css.image} />
		</section>
	);
}
