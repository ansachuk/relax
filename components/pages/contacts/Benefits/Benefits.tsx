import { getScopedI18n } from "@/locales/server";
import css from "../Contacts.module.scss";

export default async function MainBenefits() {
	const t = await getScopedI18n("pages.contacts.phones");

	const benefits = [
		{
			title: `098 333 77 00 (${t("restaurant")})`,
		},
		{
			title: `096 000 54 54 (${t("bath")})`,
		},
		{
			title: "relaxcomplex@ukr.net",
		},
	];

	return (
		<ul className={css.benefits}>
			{benefits.map(({ title }) => (
				<li className={css.benefit} key={title}>
					{title}
				</li>
			))}
		</ul>
	);
}
