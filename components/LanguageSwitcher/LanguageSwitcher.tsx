"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

export default function LanguageSwitcher() {
	const changeLocale = useChangeLocale();
	const currentLocale = useCurrentLocale();

	return (
		<div style={{ display: "flex", gap: 20 }}>
			<button
				style={{
					fontSize: 30,
					backgroundColor: currentLocale === "uk" ? "red" : "gray",
				}}
				onClick={() => changeLocale("uk")}
			>
				ua
			</button>
			<button
				style={{
					fontSize: 30,
					backgroundColor: currentLocale === "en" ? "red" : "gray",
				}}
				onClick={() => changeLocale("en")}
			>
				en
			</button>
		</div>
	);
}
