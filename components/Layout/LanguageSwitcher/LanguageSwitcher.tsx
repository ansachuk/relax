"use client";

import { useEffect } from "react";
import { useChangeLocale, useCurrentLocale } from "@/locales/client";

import css from "./LanguageSwitcher.module.scss";

type Props = { header?: boolean };

export default function LanguageSwitcher({ header }: Props) {
	const changeLocale = useChangeLocale();
	const currentLocale = useCurrentLocale();

	useEffect(() => {
		window.scroll({
			top: 0,
			left: 0,
			behavior: "instant",
		});
	}, [currentLocale]);

	return (
		<div className={`${css.switcher} ${header ? css.header : ""}`}>
			<button className={currentLocale === "uk" ? css.current : css.btn} onClick={() => changeLocale("uk")}>
				ukr
			</button>{" "}
			/{" "}
			<button className={currentLocale === "en" ? css.current : css.btn} onClick={() => changeLocale("en")}>
				eng
			</button>
		</div>
	);
}
