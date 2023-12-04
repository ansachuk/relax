"use client";

import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import I18nSubLayout from "@/components/I18nSubLayout/I18nSubLayout";
import Review from "../../Review/Review";

import { useScopedI18n } from "@/locales/client";
import { IReview } from "@/@types/types";

import css from "../Reviews.module.scss";
import { ArrowSm } from "@/static/svg";
import { useState } from "react";

export function SubSlider() {
	const [swiper, setSwiper] = useState<SwiperClass | null>(null);
	const t = useScopedI18n("reviews.reviews");

	const reviews: IReview[] = [
		{ img: "", text: t("review1") },
		{ img: "", text: t("review2") },
		{ img: "", text: t("review3") },
	];

	return (
		<Swiper loop navigation className={css.slider} onSwiper={setSwiper}>
			{reviews.map(({ text, img }) => (
				<SwiperSlide key={text}>
					<Review text={text} img={img} />
				</SwiperSlide>
			))}
			<div className={css.ctrls}>
				<button onClick={() => swiper?.slidePrev()}>
					<ArrowSm width={25} height={25} className={`${css.icon} ${css.prev}`} />
				</button>
				<button onClick={() => swiper?.slideNext()}>
					<ArrowSm width={25} height={25} className={`${css.icon} ${css.next}`} />
				</button>
			</div>
		</Swiper>
	);
}

export default function Slider() {
	return (
		<I18nSubLayout>
			<SubSlider />
		</I18nSubLayout>
	);
}
