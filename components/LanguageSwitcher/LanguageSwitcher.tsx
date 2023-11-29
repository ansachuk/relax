"use client";

import { useChangeLocale, useCurrentLocale } from "@/locales/client";

import css from "./LanguageSwitcher.module.scss";

export default function LanguageSwitcher() {
	const changeLocale = useChangeLocale();
	const currentLocale = useCurrentLocale();

	return (
		<div className={css.switcher}>
			<button className={currentLocale === "uk" ? css.current : css.btn} onClick={() => changeLocale("uk")}>
				ukr
			</button>
			/
			<button className={currentLocale === "en" ? css.current : css.btn} onClick={() => changeLocale("en")}>
				eng
			</button>
		</div>
	);
}
