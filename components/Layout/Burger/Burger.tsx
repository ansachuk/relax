import { Burger as BurgerIcon } from "@/public/svg";
import css from "./Burger.module.scss";

export default function Burger() {
	return (
		<div className={css.wrapper}>
			<button className={css.burgerOpen}>
				<BurgerIcon className={css.icon} width={32} height={32} />
			</button>
		</div>
	);
}
