import Link from "next/link";

import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import Burger from "../Burger/Burger";

import { Facebook, Inst, Logo, Phone } from "@/public/svg";

import { Position } from "@/@types/types";
import css from "./Header.module.scss";

type Props = {
	pos: Position;
};

export default function Header({ pos }: Props) {
	return (
		<div className={css.header}>
			<div className={css.wrapper}>
				<a href="https://www.instagram.com/relax_complex_/" target="_blank" rel="noopener noreferrer" className={css.icon}>
					<Inst className={css.icon} width={32} height={32} />
					<span className={css.hidden}>Instagram</span>
				</a>
				<a href="https://www.facebook.com/profile.php?id=100094666534025" target="_blank" rel="noopener noreferrer" className={css.icon}>
					<Facebook className={css.icon} width={32} height={32} />
					<span className={css.hidden}>Facebook</span>
				</a>
				<a href="tel:+380983337700" target="_blank" rel="noopener noreferrer" className={css.icon}>
					<Phone className={css.icon} width={32} height={32} />
					<span className={css.hidden}>Call us</span>
				</a>
			</div>
			<Link className={css.logo} href="/#top">
				<span className={css.hidden}>To home</span>
				<Logo className={css.logoIcon} width={172} height={91} />
			</Link>
			<LanguageSwitcher header />
			<Burger pos={pos} />
		</div>
	);
}
