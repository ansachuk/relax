import { getScopedI18n } from "@/locales/server";
import { Cake, Cup, Dollar, Food } from "@/static/svg";
import css from "./Benefits.module.scss";

export default async function Benefits() {
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
