import type { Metadata } from "next";
import { Nothing_You_Could_Do, Montserrat, Cormorant } from "next/font/google";
import Link from "next/link";

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
			<body className={nothing.className}>
				<header>
					<Link href="/ ">home</Link>
					<br />
					<Link href="/contacts">contacts</Link>
					<br />
					<Link href="/hotel">hotel</Link>
					<br />
					<Link href="/pool">pool</Link>
					<br />
					<Link href="/spa">spa</Link>
					<br />
					<Link href="/restaurant">restaurant</Link>
				</header>
				{children}
			</body>
		</html>
	);
}
