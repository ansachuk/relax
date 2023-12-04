import Image from "next/image";

import { IReview } from "@/@types/types";

import css from "../Reviews/Reviews.module.scss";

export default function Review({ text, img }: IReview) {
	return (
		<div className={css.wrapper}>
			<Image width={120} height={120} src={img} alt="Reviewer photo" className={css.img} />
			<p className={css.text}>{text}</p>
		</div>
	);
}
