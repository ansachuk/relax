import Link from "next/link";
import { StaticImageData } from "next/image";

import { getScopedI18n } from "@/locales/server";
import MainSlider from "@/components/MainSlider/MainSlider";

import css from "./SpaSection.module.scss";

type Props = {
	subtitle: string;
	text: string;
	imgs: Array<StaticImageData>;
};

export default async function SpaSection({ imgs, subtitle, text }: Props) {
	const t = await getScopedI18n("pages.spa.sections");
	return (
		<div className={css.wrapper}>
			<div className={css.subwrapper}>
				<p className={css.subtitle}>{subtitle}</p>
				<p className={css.subtitle}>{t("mainSubtitle")}</p>
				<p className={css.text}>{text}</p>
				<Link className={css.link} href="/contacts#top">
					{t("linkText")}
				</Link>
			</div>
			<MainSlider imgs={imgs} />
		</div>
	);
}
