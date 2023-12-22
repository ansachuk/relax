import { Metadata } from "next";
import About from "@/components/About/About";
import Banner from "@/components/Banner/Banner";
import Benefits from "@/components/Benefits/Benefits";
import Offers from "@/components/Offers/Offers";
import Section from "@/components/Section/Section";

import HotelSection from "@/components/pages/hotel/HotelSection/HotelSection";

import { getScopedI18n } from "@/locales/server";
import {
	about1,
	about2,
	about3,
	benefit1,
	benefit2,
	benefit3,
	single1,
	single2,
	single3,
	single4,
	single5,
	single6,
	offer,
	standart1,
	standart2,
	standart3,
	standart4,
	standart5,
	standart6,
	suite1,
	suite2,
	suite3,
	suite4,
	double1,
	double2,
	double3,
	double4,
	double5,
	vip1,
	vip2,
	vip3,
	vip4,
	vip5,
} from "@/public/images/hotel";

import { IAbout, IBenefit, IOffer } from "@/@types/types";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(): Promise<Metadata> {
	const t = await getScopedI18n("navigation");
	return {
		title: t("hotel"),
		openGraph: {
			images: "/images/layout/og/hotel.webp",
		},
	};
}

export default async function Hotel() {
	const t = await getScopedI18n("pages.hotel");

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

			imgs: [single1, single2, single3, single4, single5, single6],
			link: "https://www.booking.com/hotel/ua/relax-complex.uk.html",
		},
		{
			title: t("sections.2.title"),
			subtitle: t("sections.2.subtitle"),
			text: t("sections.2.text"),
			imgs: [standart1, standart2, standart3, standart4, standart5, standart6],
			link: "https://www.booking.com/hotel/ua/relax-complex.uk.html",
		},
		{
			title: t("sections.3.title"),
			subtitle: t("sections.3.subtitle"),
			text: t("sections.3.text"),
			imgs: [suite1, suite2, suite3, suite4],
			link: "https://www.booking.com/hotel/ua/relax-complex.uk.html",
		},
		{
			title: t("sections.4.title"),
			subtitle: t("sections.4.subtitle"),
			text: t("sections.4.text"),
			imgs: [double1, double2, double3, double4, double5],
			link: "https://www.booking.com/hotel/ua/relax-complex.uk.html",
		},
		{
			title: t("sections.5.title"),
			subtitle: t("sections.5.subtitle"),
			text: t("sections.5.text"),
			imgs: [vip1, vip2, vip3, vip4, vip5],
			link: "https://www.booking.com/hotel/ua/relax-complex.uk.html",
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
			{sections.map(({ text, title, imgs, subtitle, link }) => (
				<Section key={title} title={title}>
					<HotelSection subtitle={subtitle} link={link} text={text} imgs={imgs} />
				</Section>
			))}
		</>
	);
}
