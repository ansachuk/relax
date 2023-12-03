import { IFAQ } from "@/@types/types";

import css from "./Accordion.module.scss";
import { ArrowSm } from "@/static/svg";

export default function Accordion({ title, content }: IFAQ) {
	return (
		<div className={css.faq}>
			<label className={css.label}>
				{title}
				<input className={css.checkbox} type="checkbox" />

				<p className={css.content}>{content}</p>
				<ArrowSm className={css.icon} width={24} height={24} />
			</label>
		</div>
	);
}

// export default function Accordion({ title, content }: IFAQ) {
// 	const [isShown, setIsShown] = useState(false);

// 	return (
// 		<div className={css.faq}>
// 			<button className={css.button} onClick={() => setIsShown(!isShown)}>
// 				{title}
// 				<span>x</span>
// 			</button>
// 			{isShown && <p className={css.content}>{content}</p>}
// 		</div>
// 	);
// }
