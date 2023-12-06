import Benefits from "@/components/Benefits/Benefits";
import Section from "@/components/Section/Section";
import { AboutUs, Intro, SectionSm, WhatWeOffer } from "@/components/pages/main";

import { getScopedI18n } from "@/locales/server";

import { benefit1, benefit2, benefit3, halls, hotel, restaurant } from "@/static/images/main";

import { IBenefit, IMainSection } from "@/@types/types";
import { title } from "process";

export default async function Home() {
	const t = await getScopedI18n("pages.main");

	const benefits: IBenefit[] = [
		{ img: benefit1, title: t("benefits.sub1") },
		{ img: benefit2, title: t("benefits.sub2") },
		{ img: benefit3, title: t("benefits.sub3") },
	];

	const sectionSm: Array<IMainSection & { title: string }> = [
		{
			img: restaurant,
			title: t("sectionSm.section1.title"),
			subtitle: t("sectionSm.section1.subtitle"),
			text: t("sectionSm.section1.text"),
			phone: "098 333 77 00",
			link: "/",
		},
		{
			img: halls,
			title: t("sectionSm.section2.title"),
			subtitle: t("sectionSm.section2.subtitle"),
			text: t("sectionSm.section2.text"),
			phone: "096 000 54 54",
			link: "/",
		},
		{
			img: hotel,
			title: t("sectionSm.section3.title"),
			subtitle: t("sectionSm.section3.subtitle"),
			text: t("sectionSm.section3.text"),
			phone: "096 000 54 54 ",
			link: "/",
		},
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
			{sectionSm.map(el => (
				<Section key={el.title} title={el.title}>
					<SectionSm sectionData={el} />
				</Section>
			))}
		</>
	);
}
