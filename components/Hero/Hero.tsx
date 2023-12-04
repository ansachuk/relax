"use client";

import Image, { StaticImageData } from "next/image";
import { usePathname } from "next/navigation";

import Benefits from "../Layout/Benefits/Benefits";

import { main, restaurant, hotel } from "@/static/images/hero";

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

			default:
				return main;
		}
	};

	img = getHeroImg();
	return (
		<>
			<Image priority height={712} sizes="100vw" className={css.heroImg} quality={100} src={img} alt="Complex big image" />
			<Benefits />
		</>
	);
}
