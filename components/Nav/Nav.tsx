"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import css from "./Nav.module.scss";

enum NavLinks {
	"/" = "Головна",
	"/restaurant" = "Ресторан",
	"/hotel" = "Готель",
	"/spa" = "Лазні/Сауни",
	"/pool" = "Басейн",
	"/contacts" = "Контакти",
}

export default function Nav() {
	const pathname = usePathname();

	return (
		<nav className={css.nav}>
			{Object.entries(NavLinks).map(([path, label]) => (
				<Link className={pathname === path ? css.currentLink : ""} key={path} href={path}>
					{label}
				</Link>
			))}
		</nav>
	);
}
