import { SwiperClass } from "swiper/react";

import { ArrowLg } from "@/public/svg";

import css from "./SliderCtrls.module.scss";

type Props = {
	swiper: SwiperClass | null;
	main?: boolean;
};

export default function SliderCtrls({ swiper, main }: Props) {
	return swiper ? (
		<div className={main ? css.mainCtrls : css.ctrls}>
			<button className={css.ctrl} onClick={() => swiper.slidePrev()}>
				<span className={css.hidden}>Previous slide</span>
				<ArrowLg width={25} height={25} className={`${css.icon} ${css.prev}`} />
			</button>
			<button className={css.ctrl} onClick={() => swiper.slideNext()}>
				<span className={css.hidden}>Next slide</span>
				<ArrowLg width={25} height={25} className={`${css.icon} ${css.next}`} />
			</button>
		</div>
	) : (
		<div></div>
	);
}
