import { ArrowSm } from "@/public/svg";

import { IFAQ } from "@/@types/types";

import css from "./Accordion.module.scss";

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
