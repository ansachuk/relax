import { getScopedI18n } from "@/locales/server";

import { offer1, offer2 } from "@/public/images/main";

import MainImage from "@/components/MainImage/MainImage";

import css from "./WhatWeOffer.module.scss";

export default async function WhatWeOffer() {
	const t = await getScopedI18n("pages.main.whatWeOffer");

	const offers = [t("restaurant"), t("banquet"), t("hotel"), t("spa"), t("pool"), t("vats")];

	return (
		<div className={css.wrapper}>
			<MainImage src={offer1} alt={t("restaurant")} width={400} height={500} />
			<ul className={css.list}>
				{offers.map(el => (
					<li key={el} className={css.item}>
						{el}
					</li>
				))}
			</ul>
			<MainImage className={css.imgBottom} src={offer2} alt={t("restaurant")} width={400} height={500} />
		</div>
	);
}
