import { StaticImageData } from "next/image";

import MainImage from "../MainImage/MainImage";

import css from "./ImageGrid.module.scss";

type Props = {
	img1: StaticImageData;
	img2: StaticImageData;
	img3: StaticImageData;
};

export default function ImageGrid({ img1, img2, img3 }: Props) {
	return (
		<div className={css.wrapper}>
			<MainImage className={css.sm} src={img1} width={390} height={530} alt="pool image" />
			<MainImage className={css.lg} src={img2} width={500} height={600} alt="pool image" />
			<MainImage className={css.sm} src={img3} width={390} height={530} alt="pool image" />
		</div>
	);
}
