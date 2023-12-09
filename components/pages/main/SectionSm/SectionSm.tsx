import Link from "next/link";

import { getScopedI18n } from "@/locales/server";

import MainImage from "@/components/MainImage/MainImage";
import { ArrowLg } from "@/public/svg";

import { ISectionSm } from "@/@types/types";

import css from "./SectionSm.module.scss";

type Props = {
	sectionData: ISectionSm;
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
				<Link href={`${link}#top`} className={css.link}>
					{t("linkText")}
					<span className={css.icon}>
						<ArrowLg width={18} />
					</span>
				</Link>
			</div>
			<MainImage width={630} height={400} src={img} alt={title} />
		</article>
	);
}
