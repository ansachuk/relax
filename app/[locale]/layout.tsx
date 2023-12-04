import { Nothing_You_Could_Do, Montserrat, Cormorant } from "next/font/google";
import "swiper/css";

import type { Metadata } from "next";

import Header from "@/components/Layout/Header/Header";
import Nav from "@/components/Layout/Nav/Nav";
import Container from "@/components/Container/Container";
import Map from "@/components/Layout/Map/Map";
import Hero from "@/components/Hero/Hero";

import { getCurrentLocale, getScopedI18n } from "@/locales/server";

import "@/scss/global.scss";
import Section from "@/components/Section/Section";
import Reviews from "@/components/Layout/Reviews/Reviews";
import FAQ from "@/components/Layout/FAQ/FAQ";
import Feedback from "@/components/Layout/Feedback/Feedback";

const montserrat = Montserrat({
	subsets: ["cyrillic", "latin"],
	weight: ["400", "500"],
});

export const nothing = Nothing_You_Could_Do({
	subsets: ["latin"],
	weight: "400",
});

export const cormorant = Cormorant({
	subsets: ["cyrillic", "latin"],
	weight: ["600"],
});

export const metadata: Metadata = {
	title: "Relax",
	description: "Spa-Relax Complex",
	manifest: "/site.webmanifest",
	icons: [
		{ rel: "apple-touch-icon", type: "image/png", url: "/favicon/apple-icon.png", sizes: "180x180" },
		{ rel: "icon", type: "image/png", url: "/favicon/favicon-32x32.png", sizes: "32x32" },
		{ rel: "icon", type: "image/png", url: "/favicon/favicon-16x16.png", sizes: "16x16" },
		{ rel: "mask-icon", type: "image/png", url: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
	],
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const t = await getScopedI18n("titles");
	const locale = await getCurrentLocale();

	return (
		<html lang={locale}>
			<head>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#ffffff"></meta>
			</head>
			<body className={montserrat.className}>
				<header>
					<Container>
						<Header />
					</Container>
					<Nav position="top" />
				</header>
				<main style={{ position: "relative" }}>
					<Hero />
					<Container>
						{children}
						<Section title={t("reviews")}>
							<Reviews />
						</Section>
						<Section title={t("faq")}>
							<FAQ />
						</Section>
						<Section title={t("feedback")}>
							<Feedback />
						</Section>
						<Map />
					</Container>
				</main>
				<footer>
					<Nav position="bottom" />
					<Container>
						<Header />
					</Container>
				</footer>
			</body>
		</html>
	);
}
