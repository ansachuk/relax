import { getScopedI18n } from "@/locales/server";

import { offer1, offer2 } from "@/public/images/main";

import MainImage from "@/components/MainImage/MainImage";

import css from "./WhatWeOffer.module.scss";

export default async function WhatWeOffer() {
	const t = await getScopedI18n("pages.main.whatWeOffer");

	const offers = [t("restaurant"), t("banquet"), t("hotel"), t("spa"), t("vats"), t("pool")];

	return (
		<div className={css.wrapper}>
			<MainImage sizes="(max-width: 768,98px) 100vw, 33vw" className={css.imgTop} src={offer1} alt={t("restaurant")} width={400} height={500} />
			<ul className={css.list}>
				{offers.map(el => (
					<li key={el} className={css.item}>
						{el}
					</li>
				))}
			</ul>
			<MainImage sizes="(max-width: 768,98px) 100vw, 33vw" className={css.imgBottom} src={offer2} alt={t("restaurant")} width={400} height={500} />
		</div>
	);
}
