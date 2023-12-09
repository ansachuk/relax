import Link from "next/link";
import { StaticImageData } from "next/image";

import { getScopedI18n } from "@/locales/server";

import MainSlider from "@/components/MainSlider/MainSlider";

import { ArrowLg } from "@/static/svg";

import css from "./HotelSection.module.scss";

type Props = {
	subtitle: string;
	text: string;
	link: string;
	imgs: Array<StaticImageData>;
};

export default async function HotelSection({ imgs, subtitle, text, link }: Props) {
	const t = await getScopedI18n("pages.hotel.sections");
	return (
		<div className={css.wrapper}>
			<div className={css.subwrapper}>
				<p className={css.subtitle}>{subtitle}</p>
				<p className={css.text}>{text}</p>
				<Link className={css.link} href={link} target="_blank" rel="noopener noreferrer">
					{t("linkText")}
					<span className={css.icon}>
						<ArrowLg width={18} />
					</span>
				</Link>
			</div>
			<MainSlider imgs={imgs} />
		</div>
	);
}
