import { Metadata } from "next";
import { getCurrentLocale, getScopedI18n } from "@/locales/server";

import Benefits from "@/components/Benefits/Benefits";
import Offers from "@/components/Offers/Offers";
import Section from "@/components/Section/Section";
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";

import Menu from "@/components/pages/restaurant/Menu/Menu";
import OurTeam from "@/components/pages/restaurant/OurTeam/OurTeam";
import RestSection from "@/components/pages/restaurant/RestSection/RestSection";

import {
	about1,
	about2,
	about3,
	benefit1,
	benefit2,
	benefit3,
	hunting1,
	hunting2,
	hunting3,
	hunting4,
	kolyba1,
	kolyba2,
	kolyba3,
	kolyba4,
	kolyba5,
	offer,
	sea1,
	sea2,
	sea3,
	sea4,
	sea5,
	venetian1,
	venetian2,
	venetian3,
	venetian4,
	venetian5,
	veranda1,
	veranda2,
	veranda3,
	veranda4,
} from "@/public/images/restaurant";

import { IAbout, IBenefit, IOffer } from "@/@types/types";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(): Promise<Metadata> {
	const t = await getScopedI18n("navigation");
	const locale = getCurrentLocale();
	return {
		title: t("restaurant"),
		openGraph: {
			title: t("restaurant"),
			url: `https://relax-tan.vercel.app/${locale}/restaurant`,
			images: "https://relax-1i64hwcrg-ansachuks-projects.vercel.app/images/layout/og/restaurant.jpg",
		},
		twitter: {
			images: ["https://relax-1i64hwcrg-ansachuks-projects.vercel.app/images/layout/og/restaurant.jpg"],
		},
	};
}

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

	const sections = [
		{
			title: t("sections.1.title"),
			subtitle: t("sections.1.subtitle"),
			text: t("sections.1.text"),
			imgs: [hunting1, hunting2, hunting3, hunting4],
		},
		{
			title: t("sections.2.title"),
			subtitle: t("sections.2.subtitle"),
			text: t("sections.2.text"),
			imgs: [veranda1, veranda2, veranda3, veranda4],
		},
		{
			title: t("sections.3.title"),
			subtitle: t("sections.3.subtitle"),
			text: t("sections.3.text"),
			imgs: [kolyba1, kolyba2, kolyba3, kolyba4, kolyba5],
		},
		{
			title: t("sections.4.title"),
			subtitle: t("sections.4.subtitle"),
			text: t("sections.4.text"),
			imgs: [venetian1, venetian2, venetian3, venetian4, venetian5],
		},
		{
			title: t("sections.5.title"),
			subtitle: t("sections.5.subtitle"),
			text: t("sections.5.text"),
			imgs: [sea1, sea2, sea3, sea4, sea5],
		},
	];

	return (
		<>
			<About data={about} />
			<Section title={t("benefits.title")}>
				<Benefits benefits={benefits} />
			</Section>
			<Section title={t("offers.title")}>
				<Offers data={offers} />
			</Section>
			<Banner text={t("banner.text")} />
			{sections.map(({ text, title, imgs, subtitle }) => (
				<Section key={title} title={title}>
					<RestSection subtitle={subtitle} text={text} imgs={imgs} />
				</Section>
			))}
			<Section title={t("menu.title")}>
				<Menu />
			</Section>
			<Section title={t("ourTeam.title")}>
				<OurTeam />
			</Section>
		</>
	);
}
