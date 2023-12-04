import { ArrowLg } from "@/static/svg";
import { SwiperClass } from "swiper/react";

import css from "./SliderCtrls.module.scss";

type Props = {
	swiper: SwiperClass | null;
};

export default function SliderCtrls({ swiper }: Props) {
	return swiper ? (
		<div className={css.ctrls}>
			<button onClick={() => swiper.slidePrev()}>
				<ArrowLg width={25} height={25} className={`${css.icon} ${css.prev}`} />
			</button>
			<button onClick={() => swiper.slideNext()}>
				<ArrowLg width={25} height={25} className={`${css.icon} ${css.next}`} />
			</button>
		</div>
	) : (
		<div></div>
	);
}
