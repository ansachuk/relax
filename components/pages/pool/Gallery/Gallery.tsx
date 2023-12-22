import MainImage from "@/components/MainImage/MainImage";

import { gallery1, gallery2, gallery3, gallery4, gallery5 } from "@/public/images/pool";
import css from "./Gallery.module.scss";

export default function Gallery() {
	return (
		<div className={css.gallery}>
			<div className={css.wrapper}>
				<MainImage src={gallery1} className={css.big} sizes="(max-width: 767px) 100vw, 50vw" width={620} height={420} alt="Swimming pool" />
				<MainImage src={gallery2} className={css.big} sizes="(max-width: 767px) 100vw, 50vw" width={620} height={420} alt="Swimming pool" />
			</div>
			<div className={css.wrapper}>
				<MainImage src={gallery3} className={css.small} sizes="(max-width: 767px) 100vw, 33vw" width={400} height={420} alt="Swimming pool" />
				<MainImage src={gallery4} className={css.small} sizes="(max-width: 767px) 100vw, 33vw" width={400} height={420} alt="Swimming pool" />
				<MainImage src={gallery5} className={css.small} sizes="(max-width: 767px) 100vw, 33vw" width={400} height={420} alt="Swimming pool" />
			</div>
		</div>
	);
}
