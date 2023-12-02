import Review from "../Review/Review";

import { getScopedI18n } from "@/locales/server";

import { IReview } from "@/@types/types";

import css from "./Reviews.module.scss";

export default async function Reviews() {
	const t = await getScopedI18n("reviews");

	const reviews: IReview[] = [
		{ img: "", text: t("reviews.review1") },
		// { img: "", text: t("review2") },
		// { img: "", text: t("review3") },
	];

	return (
		<>
			<p className={css.desc}>{t("description")}</p>
			<div className={css.wrapper}>
				{reviews.map(({ text, img }) => (
					<Review key={text} text={text} img={img} />
				))}
			</div>
		</>
	);
}
