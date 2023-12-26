import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "swiper/css";

import type { Metadata } from "next";

import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";

import Header from "@/components/Layout/Header/Header";
import Nav from "@/components/Layout/Nav/Nav";
import Map from "@/components/Layout/Map/Map";

import { getCurrentLocale } from "@/locales/server";
import { montserrat } from "@/public/constatnts";

import "@/scss/global.scss";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(): Promise<Metadata> {
	return {
		title: "Relax Complex",
		description: "Spa-Relax Complex",
		manifest: "/site.webmanifest",
		metadataBase: new URL("https://relax-tan.vercel.app/"),
		alternates: {
			canonical: "/",
			languages: {
				uk: "/uk",
				en: "/en",
			},
		},
		icons: [
			{ rel: "apple-touch-icon", type: "image/png", url: "/favicon/apple-icon.png", sizes: "180x180" },
			{ rel: "icon", type: "image/png", url: "/favicon/favicon-32x32.png", sizes: "32x32" },
			{ rel: "icon", type: "image/png", url: "/favicon/favicon-16x16.png", sizes: "16x16" },
			{ rel: "mask-icon", type: "image/png", url: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" },
		],
	};
}

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getCurrentLocale();

	return (
		<html lang={locale}>
			<head>
				<meta name="msapplication-TileColor" content="#bb824c" />
				<meta name="theme-color" content="#bb824c" />
			</head>
			<body className={montserrat.className}>
				<header>
					<Container>
						<Header pos="top" />
					</Container>
					<Nav position="top" />
				</header>
				<main>
					<Hero />
					{children}
					<Container>
						<Map />
					</Container>
				</main>
				<footer>
					<Nav position="bottom" />
					<Container>
						<Header pos="bottom" />
					</Container>
				</footer>
				<SpeedInsights />
			</body>
		</html>
	);
}
