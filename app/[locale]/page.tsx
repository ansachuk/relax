import Benefits from "@/components/Benefits/Benefits";
import Section from "@/components/Section/Section";
import { AboutUs, Intro, WhatWeOffer } from "@/components/pages/main";

import { getScopedI18n } from "@/locales/server";

import { benefit1, benefit2, benefit3 } from "@/static/images/main";

import { IBenefit } from "@/@types/types";

export default async function Home() {
	const t = await getScopedI18n("pages.main");

	const benefits: IBenefit[] = [
		{ img: benefit1, title: t("benefits.sub1") },
		{ img: benefit2, title: t("benefits.sub2") },
		{ img: benefit3, title: t("benefits.sub3") },
	];
	return (
		<>
			<Intro />
			<AboutUs />
			<Section title={t("benefits.title")}>
				<Benefits benefits={benefits} />
			</Section>
			<Section title={t("whatWeOffer.title")}>
				<WhatWeOffer />
			</Section>
		</>
	);
}
