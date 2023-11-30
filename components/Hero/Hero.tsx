import Benefits from "../Benefits/Benefits";
import Container from "../Container/Container";
import css from "./Hero.module.scss";

export default function Hero() {
	return (
		<>
			<div className={css.heroImg}></div>
			<Container>
				<Benefits />
			</Container>
		</>
	);
}
