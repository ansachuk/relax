import MainImage from "../MainImage/MainImage";

import { getScopedI18n } from "@/locales/server";

import { IOffer } from "@/@types/types";

import css from "./Offers.module.scss";

type Props = { data: IOffer };

export default async function Offers({ data: { text, img, offers } }: Props) {
	const t = await getScopedI18n("pages.restaurant.offers");

	return (
		<article className={css.article}>
			<p className={css.text}>{text}</p>
			<div className={css.wrapper}>
				<ul className={css.list}>
					{offers.map(el => (
						<li className={css.item} key={el}>
							{el}
						</li>
					))}
				</ul>
				<MainImage src={img} alt={offers[0]} width={735} height={470} />
			</div>
		</article>
	);
}
