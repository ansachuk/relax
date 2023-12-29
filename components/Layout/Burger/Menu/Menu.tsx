"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import LanguageSwitcher from "../../LanguageSwitcher/LanguageSwitcher";
import I18nSubLayout from "@/components/I18nSubLayout/I18nSubLayout";
import { useScopedI18n } from "@/locales/client";

import { Cross, Logo } from "@/public/svg";
import css from "./Menu.module.scss";

type Props = {
	isOpen: boolean;
	top: boolean;
	toggleMenu: () => void;
};

export function SubMenu({ isOpen, top, toggleMenu }: Props) {
	const t = useScopedI18n("navigation");
	const fullPath = usePathname();

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

	const currentYear = new Date().getFullYear();

	return (
		<div className={`${css.menu} ${top ? css.top : css.bottom}  ${isOpen ? css.isOpen : ""}`}>
			<div className={css.header}>
				<div className={css.empty}></div>
				<Logo className={css.logo} width={110} height={50} />
				<button onClick={toggleMenu}>
					<span className={css.hidden}>Open burger menu</span>
					<Cross className={css.cross} width={24} height={24} />
				</button>
			</div>

			<div className={css.main}>
				<nav className={css.nav}>
					{NavLinks.map(({ path, label }) => (
						<Link onClick={toggleMenu} scroll={false} className={pathname === path ? css.currentLink : css.link} key={path} href={path}>
							{label}
						</Link>
					))}
				</nav>
			</div>
			<div className={css.footer}>
				<LanguageSwitcher />
				<div className={css.rights}>
					<p>© All Rights Reserved</p>
					<p>{currentYear}</p>
				</div>
			</div>
		</div>
	);
}

export default function Menu({ isOpen, top, toggleMenu }: Props) {
	return (
		<I18nSubLayout>
			<SubMenu isOpen={isOpen} top={top} toggleMenu={toggleMenu} />
		</I18nSubLayout>
	);
}
