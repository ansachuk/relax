import { Nothing_You_Could_Do, Montserrat, Cormorant } from "next/font/google";

export const montserrat = Montserrat({
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
