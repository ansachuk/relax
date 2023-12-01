"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import { useScopedI18n } from "@/locales/client";

import I18nSubLayout from "../I18nSubLayout/I18nSubLayout";

import css from "./Nav.module.scss";

import { Position } from "@/@types/types";

type Props = { position: Position };

function Navigation({ position }: Props) {
	const fullPath = usePathname();

	const t = useScopedI18n("navigation");

	const NavLinks = [
		{
			label: t("main"),
			path: "/",
		},
		{
			label: t("restaurant"),
			path: "/restaurant",
		},
		{
			label: t("hotel"),
			path: "/hotel",
		},
		{
			label: t("spa"),
			path: "/spa",
		},
		{
			label: t("pool"),
			path: "/pool",
		},
		{
			label: t("contacts"),
			path: "/contacts",
		},
	];

	const pathname = fullPath.split("/")[2] ? "/" + fullPath.split("/")[2] : "/";

	return (
		<nav className={position === "top" ? css.top : css.bottom}>
			{NavLinks.map(({ path, label }) => (
				<Link
					scroll={false}
					onClick={() => {
						if (position === "bottom") {
							window.scrollTo({ top: 0 });
						}
					}}
					className={pathname === path ? css.currentLink : css.link}
					key={path}
					href={path}
				>
					{label}
				</Link>
			))}
		</nav>
	);
}

export default function Nav({ position }: Props) {
	return (
		<I18nSubLayout>
			<Navigation position={position} />
		</I18nSubLayout>
	);
}
