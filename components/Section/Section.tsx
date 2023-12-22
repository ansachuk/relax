import React from "react";
import { cormorant } from "@/public/constatnts";
import css from "./Section.module.scss";

type Props = {
	title: string;
	children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
	return (
		<section className={css.section}>
			<h2 className={`${cormorant.className} ${css.title}`}>{title}</h2>
			{children}
		</section>
	);
}
