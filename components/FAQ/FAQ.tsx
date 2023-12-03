import { IFAQ } from "@/@types/types";
import Accordion from "../Accordion/Accordion";

import css from "../Accordion/Accordion.module.scss";
import { getScopedI18n } from "@/locales/server";

export default async function FAQ() {
	const t = await getScopedI18n("faq");
	const faq: IFAQ[] = [
		{
			title: t("1.question"),
			content: t("1.answer"),
		},
		{
			title: t("2.question"),
			content: t("2.answer"),
		},
		{
			title: t("3.question"),
			content: t("3.answer"),
		},
		{
			title: t("4.question"),
			content: t("4.answer"),
		},
	];
	return (
		<div className={css.wrapper}>
			{faq.map(({ title, content }: IFAQ) => (
				<Accordion key={title} title={title} content={content} />
			))}
		</div>
	);
}
