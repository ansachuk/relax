import Link from "next/link";

import { getScopedI18n } from "@/locales/server";
import { cormorant } from "@/app/[locale]/layout";

import css from "./Banner.module.scss";

type Props = { text: string };

export default async function Banner({ text }: Props) {
	const t = await getScopedI18n("pages.restaurant.banner");

	return (
		<div className={css.banner}>
			<h2 className={`${cormorant.className} ${css.text}`}>{text}</h2>
			<Link className={css.link} href="/contacts#top">
				{t("link")}
			</Link>
		</div>
	);
}
