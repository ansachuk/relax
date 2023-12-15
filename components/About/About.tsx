import { IAbout } from "@/@types/types";

import MainImage from "../MainImage/MainImage";

import { cormorant } from "@/app/[locale]/layout";

import css from "./About.module.scss";

type Props = { data: IAbout };

export default function About({ data: { title, p1, p2, img1, img2, img3 } }: Props) {
	return (
		<article className={css.article}>
			<div className={css.images}>
				<MainImage src={img1} alt={title} width={740} height={420} />
				<div className={css.wrapper}>
					<MainImage src={img2} alt={title} width={350} height={260} />
					<MainImage src={img3} alt={title} width={350} height={260} />
				</div>
			</div>
			<div className={css.main}>
				<h2 className={`${cormorant.className} ${css.title}`}>{title}</h2>
				<p>{p1}</p>
				<p>{p2}</p>
			</div>
		</article>
	);
}
