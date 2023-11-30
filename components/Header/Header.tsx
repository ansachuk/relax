import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { getScopedI18n } from "@/locales/server";

import css from "./Header.module.scss";

type Props = {
	styleProp: string;
};

export default async function Header({ styleProp }: Props) {
	const t = await getScopedI18n("test");
	return (
		<div className={styleProp}>
			<p className={css.translate}>{t("translate")}</p>

			<LanguageSwitcher />
		</div>
	);
}
