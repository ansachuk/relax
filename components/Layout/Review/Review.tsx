import css from "../Reviews/Reviews.module.scss";

type Props = { text: string; img: string };

export default function Review({ text, img }: Props) {
	return (
		<div className={css.wrapper}>
			<div className={css.img}></div>
			<p className={css.text}>{text}</p>
		</div>
	);
}
