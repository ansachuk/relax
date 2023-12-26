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

export const baseTelegramURL = "https://api.telegram.org/bot6486204388:AAF3MBPpV2OEWZ8sIcERM60Xs-xHVY9YWZA/";

export const feedbackChatID = "-4071723422";
