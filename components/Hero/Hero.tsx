import Image from "next/image";

import Benefits from "../Benefits/Benefits";

import img from "@/static/images/hero/main@2x.webp";

import css from "./Hero.module.scss";

export default function Hero() {
	return (
		<>
			<Image className={css.heroImg} quality={100} src={img} alt="Complex big image" />
			<Benefits />
		</>
	);
}
