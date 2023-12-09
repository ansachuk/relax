import { getScopedI18n } from "@/locales/server";

import ImageGrid from "@/components/ImageGrid/ImageGrid";

import css from "./OurTeam.module.scss";
import { team1, team2, team3 } from "@/public/images/restaurant";

export default async function OurTeam() {
	const t = await getScopedI18n("pages.restaurant.ourTeam");
	return (
		<div>
			<p className={css.text}>{t("text")}</p>
			<ImageGrid img1={team1} img2={team2} img3={team3} />
		</div>
	);
}
