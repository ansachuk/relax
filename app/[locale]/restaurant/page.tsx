import { getScopedI18n } from "@/locales/server";

import Benefits from "@/components/Benefits/Benefits";
import Offers from "@/components/Offers/Offers";
import Menu from "@/components/pages/restaurant/Menu/Menu";
import OurTeam from "@/components/pages/restaurant/OurTeam/OurTeam";
import Section from "@/components/Section/Section";
import About from "@/components/About/About";

import { about1, about2, about3, benefit1, benefit2, benefit3, offer } from "@/static/images/restaurant";

import { IAbout, IBenefit, IOffer } from "@/@types/types";

export default async function Restaurant() {
	const t = await getScopedI18n("pages.restaurant");

	const about: IAbout = { title: t("about.title"), p1: t("about.p1"), p2: t("about.p2"), img1: about1, img2: about2, img3: about3 };

	const benefits: IBenefit[] = [
		{ img: benefit1, title: t("benefits.sub1") },
		{ img: benefit2, title: t("benefits.sub2") },
		{ img: benefit3, title: t("benefits.sub3") },
	];

	const offers: IOffer = {
		text: t("offers.text"),
		img: offer,
		offers: [t("offers.offers.1"), t("offers.offers.2"), t("offers.offers.3"), t("offers.offers.4"), t("offers.offers.5")],
	};

	return (
		<>
			<About data={about} />
			<Section title={t("benefits.title")}>
				<Benefits benefits={benefits} />
			</Section>
			<Section title={t("offers.title")}>
				<Offers data={offers} />
			</Section>
			<Section title={t("menu.title")}>
				<Menu />
			</Section>
			<Section title={t("ourTeam.title")}>
				<OurTeam />
			</Section>
		</>
	);
}
