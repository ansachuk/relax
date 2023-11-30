import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { getScopedI18n } from "@/locales/server";

import css from "./Header.module.scss";
import { Cake, Cup, Dollar, Facebook, Food, Geo, Inst, Logo, Mail, Phone } from "@/static/svg";

type Props = {
	styleProp: string;
};

export default async function Header({ styleProp }: Props) {
	const t = await getScopedI18n("test");
	return (
		<div className={styleProp}>
			<p className={css.translate}>{t("translate")}</p>

			<Cake className={css.icon} width={172} height={91} />
			<Cup className={css.icon} width={172} height={91} />
			<Dollar className={css.icon} width={172} height={91} />
			<Facebook className={css.icon} width={172} height={91} />
			<Food className={css.icon} width={172} height={91} />
			<Geo className={css.str} width={172} height={91} />
			<Inst className={css.icon} width={172} height={91} />
			<Mail className={css.str} width={172} height={91} />
			<Phone className={css.icon} width={172} height={91} />
			<Logo className={css.icon} width={172} height={91} />
			<LanguageSwitcher />
		</div>
	);
}
