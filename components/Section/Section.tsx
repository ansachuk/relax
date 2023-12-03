import { cormorant } from "@/app/[locale]/layout";
import css from "./Section.module.scss";

type Props = {
	title: string;
	children: React.ReactNode;
};

export default function Section({ title, children }: Props) {
	return (
		<section className={css.section}>
			<h1 className={`${cormorant.className} ${css.title}`}>{title}</h1>
			{children}
		</section>
	);
}
