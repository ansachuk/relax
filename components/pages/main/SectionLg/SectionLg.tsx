import { ISectionLg } from "@/@types/types";

import css from "./SectionLg.module.scss";
import Link from "next/link";
import { getScopedI18n } from "@/locales/server";
import { ArrowLg } from "@/static/svg";
import MainImage from "@/components/MainImage/MainImage";

type Props = { sectionData: ISectionLg };

export default async function SectionLg({
	sectionData: {
		images: { img1, img2, img3, img4 },
		nothingTitle,
		title,
		subtitle,
		phone,
		text,
		link,
	},
}: Props) {
	const t = await getScopedI18n("pages.main.sectionSm");

	return (
		<article>
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
				{/* <MainImage width={630} height={400} src={img} alt={title} /> */}
			</article>
		</article>
	);
}
