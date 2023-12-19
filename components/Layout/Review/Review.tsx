import { IReview } from "@/@types/types";

import MainImage from "@/components/MainImage/MainImage";

import css from "../Reviews/Reviews.module.scss";

export default function Review({ text, img }: IReview) {
	return (
		<div className={css.wrapper}>
			<MainImage width={120} height={120} src={img} alt="Reviewer photo" className={css.img} />
			<p className={css.text}>{text}</p>
		</div>
	);
}
