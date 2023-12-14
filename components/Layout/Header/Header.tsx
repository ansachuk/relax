import Link from "next/link";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Burger from "../Burger/Burger";

import { Facebook, Inst, Logo, Phone } from "@/public/svg";

import css from "./Header.module.scss";

export default function Header() {
	return (
		<div className={css.header}>
			<div className={css.wrapper}>
				<a href="https://www.instagram.com/relax_complex_/" target="_blank" rel="noopener noreferrer" className={css.icon}>
					<Inst className={css.icon} width={32} height={32} />
				</a>
				<a href="https://www.facebook.com/profile.php?id=100094666534025" target="_blank" rel="noopener noreferrer" className={css.icon}>
					<Facebook className={css.icon} width={32} height={32} />
				</a>
				<a href="tel:+380983337700" target="_blank" rel="noopener noreferrer" className={css.icon}>
					<Phone className={css.icon} width={32} height={32} />
				</a>
			</div>
			<Link className={css.logo} href="/#top">
				<Logo width={172} height={91} />
			</Link>
			<LanguageSwitcher />
			<Burger />
		</div>
	);
}
