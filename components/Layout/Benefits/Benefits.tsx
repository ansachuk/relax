import { useScopedI18n } from "@/locales/client";

import I18nSubLayout from "@/components/I18nSubLayout/I18nSubLayout";

import { Cake, Cup, Dollar, Food } from "@/static/svg";

import css from "./Benefits.module.scss";

export function SubBenefits() {
	const t = useScopedI18n("benefits");

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
		<div className={css.benefits}>
			{benefits.map(({ title, Icon }) => (
				<div className={css.benefit} key={title}>
					{title}
					<Icon width={24} height={24} className={css.icon} />
				</div>
			))}
		</div>
	);
}

export default function Benefits() {
	return (
		<I18nSubLayout>
			<SubBenefits />
		</I18nSubLayout>
	);
}
