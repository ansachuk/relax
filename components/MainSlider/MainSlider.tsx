"use client";

import { useState } from "react";
import { StaticImageData } from "next/image";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";

import I18nSubLayout from "../I18nSubLayout/I18nSubLayout";
import SliderCtrls from "../SliderCtrls/SliderCtrls";
import MainImage from "../MainImage/MainImage";

import css from "./MainSlider.module.scss";

type Props = { imgs: Array<StaticImageData> };

export function Slider({ imgs }: Props) {
	const [swiper, setSwiper] = useState<SwiperClass | null>(null);

	return (
		<div className={css.wrapper}>
			<Swiper loop className={css.slider} onSwiper={setSwiper}>
				{imgs.map(el => (
					<SwiperSlide key={el.src}>
						<MainImage sizes="(max-width: 1399px) 100vw, 50vw" className={css.image} width={620} height={400} src={el} alt="restaurant hall image" />
					</SwiperSlide>
				))}
			</Swiper>
			<SliderCtrls main swiper={swiper} />
		</div>
	);
}

export default function MainSlider({ imgs }: Props) {
	return (
		<I18nSubLayout>
			<Slider imgs={imgs} />
		</I18nSubLayout>
	);
}
