import Link from "next/link";

import { getScopedI18n } from "@/locales/server";
import { nothing } from "@/public/constatnts";

import ImageGrid from "@/components/ImageGrid/ImageGrid";

import { pool1, pool2, pool3 } from "@/public/images/main";
import { ArrowLg } from "@/public/svg";

import css from "./Pool.module.scss";

export default async function Pool() {
	const t = await getScopedI18n("pages.main.pool");

	return (
		<article className={css.article}>
			<div className={css.main}>
				<div className={css.wrapper}>
					<div className={css.subwrapper}>
						<p className={css.subtitle}>{t("subtitle")}</p>
						<Link className={css.phone} href={`tel:38${"098 333 77 00".split(" ").join("")}`}>
							098 333 77 00
						</Link>
					</div>
					<p className={css.text}>{t("text")}</p>
				</div>
				<div className={css.side}>
					<h3 className={`${nothing.className} ${css.nothing}`}>pool outside</h3>
					<Link href={`/pool#top`} className={css.link}>
						{t("linkText")}
						<span className={css.icon}>
							<ArrowLg width={18} />
						</span>
					</Link>
				</div>
			</div>
			<ImageGrid img1={pool1} img2={pool2} img3={pool3} />
		</article>
	);
}
