"use client";

import { useState } from "react";

import Menu from "./Menu/Menu";

import { Burger as BurgerIcon } from "@/public/svg";

import { Position } from "@/@types/types";
import css from "./Burger.module.scss";

type Props = {
	pos: Position;
};

export default function Burger({ pos }: Props) {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		if (isOpen) {
			document.body.classList.remove("menu-open");
		} else {
			document.body.classList.add("menu-open");
		}

		setIsOpen(prev => !prev);
	};

	return (
		<div className={css.wrapper}>
			<button onClick={toggleMenu} className={css.burgerOpen}>
				<BurgerIcon className={css.icon} width={32} height={32} />
			</button>
			<Menu top={pos === "top"} isOpen={isOpen} toggleMenu={toggleMenu} />
		</div>
	);
}
