import Link from "next/link";

import { getScopedI18n } from "@/locales/server";

import { nothing } from "@/app/[locale]/layout";

import MainImage from "@/components/MainImage/MainImage";

import { ArrowLg } from "@/static/svg";

import { ISectionLg } from "@/@types/types";

import css from "./SectionLg.module.scss";

type Props = { sectionData: ISectionLg };

export default async function SectionLg({
	sectionData: {
		images: { img1, img2, img3, img4 },
		title,
		nothingTitle,
		subtitle,
		phone,
		text,
		link,
	},
}: Props) {
	const t = await getScopedI18n("pages.main.sectionSm");

	return (
		<article className={css.article}>
			<div className={css.main}>
				<div className={css.wrapper}>
					<div className={css.subwrapper}>
						<p>{subtitle}</p>
						<Link className={css.phone} href={`tel:38${phone.split(" ").join("")}`}>
							{phone}
						</Link>
					</div>
					<p className={css.text}>{text}</p>
				</div>
				<div className={css.side}>
					<h3 className={`${nothing.className} ${css.nothing}`}>{nothingTitle}</h3>
					<Link href={`${link}#top`} className={css.link}>
						{t("linkText")}
						<span className={css.icon}>
							<ArrowLg width={18} />
						</span>
					</Link>
				</div>
			</div>
			<div className={css.images}>
				<div className={css.wrapper}>
					<MainImage width={630} height={340} src={img1} alt={title} />
					<div className={css.subwrapper}>
						<MainImage width={300} height={220} src={img2} alt={title} />
						<MainImage width={300} height={220} src={img3} alt={title} />
					</div>
				</div>
				<MainImage width={630} height={580} src={img4} alt={title} />
			</div>
		</article>
	);
}
