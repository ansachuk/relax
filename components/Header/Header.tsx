import Image from "next/image";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import { getScopedI18n } from "@/locales/server";
import Icon from "../Icon";

type Props = {
	styleProp: string;
};

export default async function Header({ styleProp }: Props) {
	const t = await getScopedI18n("test");
	return (
		<div className={styleProp}>
			<p style={{ color: "red", fontWeight: 600 }}>{t("translate")}</p>
			{/* <Image priority width={172} height={91} style={{ paddingTop: 14, paddingBottom: 14 }} alt="logo" src="../../static/logo.svg" /> */}
			<Icon title="logo" width={25} height={25} />
			<LanguageSwitcher />
		</div>
	);
}
