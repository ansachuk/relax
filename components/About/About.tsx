import { IAbout } from "@/@types/types";

import MainImage from "../MainImage/MainImage";

import { cormorant } from "@/public/constatnts";

import css from "./About.module.scss";

type Props = { data: IAbout };

export default function About({ data: { title, p1, p2, img1, img2, img3 } }: Props) {
	return (
		<article className={css.article}>
			<div className={css.images}>
				<MainImage sizes="(max-width: 1200px) 100vw, 50vw" className={css.big} src={img1} alt={title} width={740} height={420} />
				<div className={css.wrapper}>
					<MainImage sizes="(max-width: 1200px) 50vw, 25vw" className={css.small} src={img2} alt={title} width={350} height={260} />
					<MainImage sizes="(max-width: 1200px) 50vw, 25vw" className={css.small} src={img3} alt={title} width={350} height={260} />
				</div>
			</div>
			<div className={css.main}>
				<h1 className={`${cormorant.className} ${css.title}`}>{title}</h1>
				<p>{p1}</p>
				<p>{p2}</p>
			</div>
		</article>
	);
}
