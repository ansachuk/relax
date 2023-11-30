import Benefits from "../Benefits/Benefits";
import css from "./Hero.module.scss";

export default function Hero() {
	return (
		<>
			<div className={css.heroImg}></div>
			<Benefits />
		</>
	);
}
