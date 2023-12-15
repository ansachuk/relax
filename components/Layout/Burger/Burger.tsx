import { Burger as BurgerIcon } from "@/public/svg";
import css from "./Burger.module.scss";

export default function Burger() {
	return (
		<div className={css.burger}>
			<button>
				<BurgerIcon width={32} height={32} />
			</button>
		</div>
	);
}
