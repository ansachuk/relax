import { Metadata } from "next";

import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Section from "@/components/Section/Section";
import Offers from "@/components/Offers/Offers";
import Banner from "@/components/Banner/Banner";
import Vats from "@/components/pages/spa/Vats/Vats";

import Additional from "@/components/pages/spa/Additional/Additional";
import SpaSection from "@/components/pages/spa/SpaSection/SpaSection";

import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import {
	about1,
	about2,
	about3,
	benefit1,
	benefit2,
	benefit3,
	jacuzzi1,
	jacuzzi2,
	jacuzzi3,
	jacuzzi4,
	jacuzzi5,
	vat1,
	vat2,
	vat3,
	vat4,
	finnish1,
	finnish2,
	finnish3,
	finnish4,
	finnish5,
	offer,
} from "@/public/images/spa";

import { IAbout, IBenefit, IOffer } from "@/@types/types";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(): Promise<Metadata> {
	const locale = await getCurrentLocale();
	const title = await getScopedI18n("navigation");
	const t = await getScopedI18n("pages.spa.about");
	return {
		title: title("spa"),
		openGraph: {
			title: title("spa"),
			description: t("title"),
			siteName: "Relax Complex",
			url: `https://relax-tan.vercel.app/${locale}/spa`,
			images: "/images/layout/og/spa.jpg",
			type: "website",
		},
	};
}

export default async function Spa() {
	const t = await getScopedI18n("pages.spa");

	const about: IAbout = { title: t("about.title"), p1: t("about.p1"), p2: t("about.p2"), img1: about1, img2: about2, img3: about3 };

	const benefits: IBenefit[] = [
		{ img: benefit1, title: t("benefits.sub1") },
		{ img: benefit2, title: t("benefits.sub2") },
		{ img: benefit3, title: t("benefits.sub3") },
	];

	const offers: IOffer = {
		text: t("offers.text"),
		img: offer,
		offers: [t("offers.offers.1"), t("offers.offers.2"), t("offers.offers.3")],
	};

	const sections = [
		{
			title: t("sections.1.title"),
			subtitle: t("sections.1.subtitle"),
			text: t("sections.1.text"),
			imgs: [jacuzzi1, jacuzzi2, jacuzzi3, jacuzzi4, jacuzzi5],
		},
		{
			title: t("sections.2.title"),
			subtitle: t("sections.2.subtitle"),
			text: t("sections.2.text"),
			imgs: [vat1, vat2, vat3, vat4],
		},
		{
			title: t("sections.3.title"),
			subtitle: t("sections.3.subtitle"),
			text: t("sections.3.text"),
			imgs: [finnish1, finnish2, finnish3, finnish4, finnish5],
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
			{sections.map(({ title, subtitle, text, imgs }) => (
				<Section key={title} title={title}>
					<SpaSection subtitle={subtitle} text={text} imgs={imgs} />
				</Section>
			))}
			<Additional />
			<Section title={t("vatsTitle")}>
				<Vats />
			</Section>
		</>
	);
}
