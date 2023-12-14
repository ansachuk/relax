import { Cake, Cup, Dollar, Food } from "@/public/svg";

import { getScopedI18n } from "@/locales/server";

import css from "./Benefits.module.scss";

export default async function MainBenefits() {
	const t = await getScopedI18n("benefits");

	const benefits = [
		{
			title: t("proffesionalism"),
			Icon: Cup,
		},
		{
			title: t("atmosphere"),
			Icon: Cake,
		},
		{
			title: t("tasty"),
			Icon: Food,
		},
		{
			title: t("price"),
			Icon: Dollar,
		},
	];

	return (
		<ul className={css.benefits}>
			{benefits.map(({ title, Icon }) => (
				<li className={css.benefit} key={title}>
					{title}
					<Icon width={24} height={24} className={css.icon} />
				</li>
			))}
		</ul>
	);
}
