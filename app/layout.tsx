import { Nothing_You_Could_Do, Montserrat, Cormorant } from "next/font/google";

import Header from "@/components/Header/Header";
import Nav from "@/components/Nav/Nav";

import type { Metadata } from "next";

import "../scss/global.scss";

const nothing = Nothing_You_Could_Do({ subsets: ["latin"], weight: "400" });
const montserrat = Montserrat({ subsets: ["cyrillic", "latin"] });
const cormorant = Cormorant({ subsets: ["cyrillic", "latin"] });

export const metadata: Metadata = {
	title: "Relax",
	description: "Spa-Relax Complex",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={montserrat.className}>
				<header>
					<Header />
					<Nav />
				</header>
				<main>{children}</main>
				<footer>
					<Nav />
					<Header />
				</footer>
			</body>
		</html>
	);
}
