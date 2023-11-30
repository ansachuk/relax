import { Nothing_You_Could_Do, Montserrat, Cormorant } from "next/font/google";

import type { Metadata } from "next";

import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";
import Container from "@/components/Container/Container";
import Map from "@/components/Map/Map";
import Hero from "@/components/Hero/Hero";

import { getCurrentLocale } from "@/locales/server";

import headerCss from "@/components/Header/Header.module.scss";
import "@/scss/global.scss";

const nothing = Nothing_You_Could_Do({
	subsets: ["latin"],
	weight: "400",
});
const montserrat = Montserrat({
	subsets: ["cyrillic", "latin"],
	weight: ["400", "500"],
});
const cormorant = Cormorant({
	subsets: ["cyrillic", "latin"],
});

export const metadata: Metadata = {
	title: "Relax",
	description: "Spa-Relax Complex",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getCurrentLocale();
	return (
		<html lang={locale}>
			<head>
				<link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/favicon/safari-pinned-tab.svg" color="#5bbad5" />
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
				<main>
					<Hero />
					<Container>
						{children}
						<Map></Map>
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
