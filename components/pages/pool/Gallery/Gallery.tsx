import MainImage from "@/components/MainImage/MainImage";

import { gallery1, gallery2, gallery3, gallery4, gallery5 } from "@/public/images/pool";
import css from "./Gallery.module.scss";

export default function Gallery() {
	return (
		<div className={css.gallery}>
			<div className={css.wrapper}>
				<MainImage src={gallery1} width={620} height={420} alt="Swimming pool" />
				<MainImage src={gallery2} width={620} height={420} alt="Swimming pool" />
			</div>
			<div className={css.wrapper}>
				<MainImage src={gallery3} width={400} height={420} alt="Swimming pool" />
				<MainImage src={gallery4} width={400} height={420} alt="Swimming pool" />
				<MainImage src={gallery5} width={400} height={420} alt="Swimming pool" />
			</div>
		</div>
	);
}
