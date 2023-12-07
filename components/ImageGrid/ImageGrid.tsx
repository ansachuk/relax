import MainImage from "../MainImage/MainImage";

import { pool1, pool2, pool3 } from "@/static/images/main";

import css from "./ImageGrid.module.scss";

export default function ImageGrid() {
	return (
		<div className={css.wrapper}>
			<MainImage src={pool1} width={390} height={530} alt="pool image" />
			<MainImage src={pool2} width={500} height={600} alt="pool image" />
			<MainImage src={pool3} width={390} height={530} alt="pool image" />
		</div>
	);
}
