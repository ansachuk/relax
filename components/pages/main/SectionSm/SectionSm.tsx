import Link from "next/link";

import { getScopedI18n } from "@/locales/server";

import MainImage from "@/components/MainImage/MainImage";
import { ArrowLg } from "@/static/svg";

import { IMainSection } from "@/@types/types";

import css from "./SectionSm.module.scss";

type Props = {
	sectionData: IMainSection;
};

export default async function SectionSm({ sectionData: { img, subtitle, phone, text, link, title } }: Props) {
	const t = await getScopedI18n("pages.main.sectionSm");
	return (
		<article className={css.article}>
			<div className={css.wrapper}>
				<div className={css.subwrapper}>
					<p>{subtitle}</p>
					<Link className={css.phone} href={`tel:38${phone.split(" ").join("")}`}>
						{phone}
					</Link>
				</div>
				<p className={css.text}>{text}</p>
				<Link href={link} className={css.link}>
					{t("linkText")}
					<span className={css.icon}>
						<ArrowLg />
					</span>
				</Link>
			</div>
			<MainImage width={630} height={400} src={img} alt={title} />
		</article>
	);
}
