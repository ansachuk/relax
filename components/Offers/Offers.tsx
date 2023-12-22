import MainImage from "../MainImage/MainImage";

import { IOffer } from "@/@types/types";

import css from "./Offers.module.scss";

type Props = { data: IOffer };

export default async function Offers({ data: { text, img, offers } }: Props) {
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
				<MainImage className={css.image} sizes="(max-width: 1200px) 100vw, 50vw" src={img} alt={offers[0]} width={735} height={470} />
			</div>
		</article>
	);
}
