import Link from "next/link";

import css from "./Nav.module.scss";

export default function Nav() {
	return (
		<nav className={css.nav}>
			<Link href="/ ">home</Link>
			<Link href="/contacts">contacts</Link>
			<Link href="/hotel">hotel</Link>
			<Link href="/pool">pool</Link>
			<Link href="/spa">spa</Link>
			<Link href="/restaurant">restaurant</Link>
		</nav>
	);
}
