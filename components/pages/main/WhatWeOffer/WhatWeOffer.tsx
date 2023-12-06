import Image from "next/image";

import { getScopedI18n } from "@/locales/server";

import css from "./WhatWeOffer.module.scss";
import { offer1, offer2 } from "@/static/images/main";

export default async function WhatWeOffer() {
	const t = await getScopedI18n("pages.main.whatWeOffer");

	const offers = [t("restaurant"), t("banquet"), t("hotel"), t("spa"), t("pool"), t("vats")];
	return (
		<div className={css.wrapper}>
			<Image src={offer1} alt={t("restaurant")} sizes="100vw" width={400} height={500} />
			<ul className={css.list}>
				{offers.map(el => (
					<li key={el} className={css.item}>
						{el}
					</li>
				))}
			</ul>
			<Image className={css.imgBottom} src={offer2} alt={t("restaurant")} sizes="100vw" width={400} height={500} />
		</div>
	);
}
