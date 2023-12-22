import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "swiper/css";

// import type { Metadata } from "next";

import Container from "@/components/Container/Container";
import Hero from "@/components/Hero/Hero";

import Header from "@/components/Layout/Header/Header";
import Nav from "@/components/Layout/Nav/Nav";
import Map from "@/components/Layout/Map/Map";

import { getCurrentLocale } from "@/locales/server";
import { montserrat } from "@/public/constatnts";

import "@/scss/global.scss";

// eslint-disable-next-line react-refresh/only-export-components
export { default as metadata } from "@/public/constatnts";

export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const locale = await getCurrentLocale();

	return (
		<html lang={locale}>
			<head>
				<meta name="msapplication-TileColor" content="#da532c" />
				<meta name="theme-color" content="#CDA075" />
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
