import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { getScopedI18n } from "@/locales/server";

type Props = {
	styleProp: string;
};

export default async function Header({ styleProp }: Props) {
	const t = await getScopedI18n("test");
	return (
		<div className={styleProp}>
			<p style={{ color: "red", fontWeight: 600 }}>{t("translate")}</p>
			<Image priority width={172} height={91} style={{ paddingTop: 14, paddingBottom: 14 }} alt="logo" src="/logo.svg" />
			<LanguageSwitcher />
		</div>
	);
}
