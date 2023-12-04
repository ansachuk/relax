"use client";

import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import I18nSubLayout from "@/components/I18nSubLayout/I18nSubLayout";
import { useScopedI18n } from "@/locales/client";

import Review from "../../Review/Review";
import SliderCtrls from "@/components/SliderCtrls/SliderCtrls";

import { IReview } from "@/@types/types";

import css from "../Reviews.module.scss";

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
			<SliderCtrls swiper={swiper} />
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
