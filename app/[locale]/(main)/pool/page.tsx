import { Metadata } from "next";
import About from "@/components/About/About";
import Benefits from "@/components/Benefits/Benefits";
import Section from "@/components/Section/Section";
import Gallery from "@/components/pages/pool/Gallery/Gallery";
import Banner from "@/components/pages/pool/Banner/Banner";

import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { IAbout, IBenefit } from "@/@types/types";

import { baseSiteURL } from "@/public/constatnts";
import { about1, about2, about3, benefit2, benefit1, benefit3 } from "@/public/images/pool";

export async function generateMetadata(): Promise<Metadata> {
	const locale = await getCurrentLocale();
	const title = await getScopedI18n("navigation");
	const t = await getScopedI18n("pages.pool.about");
	return {
		title: title("pool"),
		openGraph: {
			title: title("pool"),
			description: t("p1"),
			siteName: "Relax Complex",
			url: `${baseSiteURL}${locale}/pool`,
			images: "/images/layout/og/pool.jpg",
			type: "website",
		},

		twitter: {
			card: "summary_large_image",
			title: title("pool"),
			description: t("p1"),
			images: "/images/layout/og/pool.jpg",
		},
	};
}

export default async function Pool() {
	const t = await getScopedI18n("pages.pool");

	const about: IAbout = { title: t("about.title"), p1: t("about.p1"), p2: t("about.p2"), img1: about1, img2: about2, img3: about3 };

	const benefits: IBenefit[] = [
		{ img: benefit1, title: t("benefits.sub1") },
		{ img: benefit2, title: t("benefits.sub2") },
		{ img: benefit3, title: t("benefits.sub3") },
	];
	return (
		<>
			<About data={about} />
			<Section title={t("benefits.title")}>
				<Benefits benefits={benefits} />
			</Section>
			<Banner />
			<Section title={t("galleryTitle")}>
				<Gallery />
			</Section>
		</>
	);
}
