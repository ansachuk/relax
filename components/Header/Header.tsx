import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { getScopedI18n } from "@/locales/server";

export default async function Header() {
	const t = await getScopedI18n("test");
	return (
		<div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 120 }}>
			<Image priority width={172} height={98} alt="logo" src="/logo.svg" />
			<h1>{t("translate")}</h1>
			<LanguageSwitcher />
		</div>
	);
}
