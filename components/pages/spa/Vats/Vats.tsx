import MainImage from "@/components/MainImage/MainImage";
import { vats1, vats2, vats3, vats4 } from "@/public/images/main";
import { getScopedI18n } from "@/locales/server";

import css from "./Vats.module.scss";

export default async function Vats() {
	const t = await getScopedI18n("pages.main");

	return (
		<article>
			<p className={css.subtitle}>{t("sectionLg.section2.subtitle")}</p>
			<p className={css.text}>{t("sectionLg.section2.text")}</p>

			<div className={css.images}>
				<div className={css.imagesWrapper}>
					<MainImage sizes="(max-width: 1399px) 100vw, 50vw" width={630} height={340} src={vats1} alt="vats image" className={css.mid} />
					<div className={css.imagesSubwrapper}>
						<MainImage sizes="(max-width: 1399px) 50vw, 25vw" width={300} height={220} src={vats2} alt="vats image" className={css.small} />
						<MainImage sizes="(max-width: 1399px) 50vw, 25vw" width={300} height={220} src={vats3} alt="vats image" className={css.small} />
					</div>
				</div>
				<MainImage sizes="(max-width: 1399px) 100vw, 50vw" width={630} height={580} src={vats4} alt="vats image" className={css.big} />
			</div>
		</article>
	);
}
