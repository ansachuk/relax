import { getScopedI18n } from "@/locales/server";

import Benefits from "@/components/Benefits/Benefits";
import Section from "@/components/Section/Section";
import Container from "@/components/Container/Container";

import MainBenefits from "@/components/Layout/MainBenefits/MainBenefits";
import Reviews from "@/components/Layout/Reviews/Reviews";
import FAQ from "@/components/Layout/FAQ/FAQ";
import Feedback from "@/components/Layout/Feedback/Feedback";

import { AboutUs, Intro, SectionLg, SectionSm, WhatWeOffer, Pool } from "@/components/pages/main";

import { benefit1, benefit2, benefit3, halls, hotel, restaurant, spa1, spa2, spa3, spa4, vats1, vats2, vats3, vats4 } from "@/public/images/main";

import { IBenefit, ISectionLg, ISectionSm } from "@/@types/types";

export default async function Home() {
	const t = await getScopedI18n("pages.main");

	const benefits: IBenefit[] = [
		{ img: benefit1, title: t("benefits.sub1") },
		{ img: benefit2, title: t("benefits.sub2") },
		{ img: benefit3, title: t("benefits.sub3") },
	];

	const sectionSm: Array<ISectionSm> = [
		{
			img: restaurant,
			title: t("sectionSm.section1.title"),
			subtitle: t("sectionSm.section1.subtitle"),
			text: t("sectionSm.section1.text"),
			phone: "098 333 77 00",
			link: "/restaurant",
		},
		{
			img: halls,
			title: t("sectionSm.section2.title"),
			subtitle: t("sectionSm.section2.subtitle"),
			text: t("sectionSm.section2.text"),
			phone: "096 000 54 54",
			link: "/restaurant",
		},
		{
			img: hotel,
			title: t("sectionSm.section3.title"),
			subtitle: t("sectionSm.section3.subtitle"),
			text: t("sectionSm.section3.text"),
			phone: "096 000 54 54",
			link: "/hotel",
		},
	];

	const sectionLg: Array<ISectionLg> = [
		{
			title: t("sectionLg.section1.title"),
			subtitle: t("sectionLg.section1.subtitle"),
			text: t("sectionLg.section1.text"),
			phone: "096 000 54 54",
			nothingTitle: "time to warm up",
			link: "/spa",
			images: {
				img1: spa1,
				img2: spa2,
				img3: spa3,
				img4: spa4,
			},
		},
		{
			title: t("sectionLg.section2.title"),
			subtitle: t("sectionLg.section2.subtitle"),
			text: t("sectionLg.section2.text"),
			phone: "096 000 54 54",
			nothingTitle: "time to relax",
			link: "/spa",
			images: {
				img1: vats1,
				img2: vats2,
				img3: vats3,
				img4: vats4,
			},
		},
	];

	return (
		<>
			<MainBenefits />
			<Container>
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
				{sectionLg.map(el => (
					<Section key={el.title} title={el.title}>
						<SectionLg sectionData={el} />
					</Section>
				))}
				<Section title={t("pool.title")}>
					<Pool />
				</Section>
				<Section title={t("titles.reviews")}>
					<Reviews />
				</Section>
				<Section title={t("titles.faq")}>
					<FAQ />
				</Section>
				<Section title={t("titles.feedback")}>
					<Feedback />
				</Section>
			</Container>
		</>
	);
}
