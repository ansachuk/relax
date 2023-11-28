import Link from "next/link";

import css from "./Nav.module.scss";

export default function Nav() {
	return (
		<nav className={css.nav}>
			<Link href="/ ">Головна</Link>
			<Link href="/restaurant">Ресторан</Link>
			<Link href="/hotel">Готель</Link>
			<Link href="/spa">Лазні/Сауни</Link>
			<Link href="/pool">Басейн</Link>
			<Link href="/contacts">Контакти</Link>
		</nav>
	);
}
