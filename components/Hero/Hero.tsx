"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import Benefits from "../Layout/Benefits/Benefits";

import { main, restaurant, hotel, spa, pool, contacts } from "@/static/images/layout/hero";

import css from "./Hero.module.scss";

export default function Hero() {
	const fullPathname = usePathname();
	let img: StaticImageData;

	const path = fullPathname.split("/");

	const getHeroImg = () => {
		if (path.length === 2) return main;

		switch (path[2]) {
			case "restaurant":
				return restaurant;

			case "hotel":
				return hotel;

			case "spa":
				return spa;

			case "pool":
				return pool;

			case "contacts":
				return contacts;

			default:
				return main;
		}
	};

	img = getHeroImg();
	return (
		<>
			<Image priority placeholder="blur" height={712} sizes="100vw" className={css.heroImg} quality={100} src={img} alt="Complex big image" />
			<Benefits />
		</>
	);
}
