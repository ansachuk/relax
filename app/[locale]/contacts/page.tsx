import { Metadata } from "next";

import Benefits from "@/components/pages/contacts/Benefits/Benefits";
import Form from "@/components/pages/contacts/Form/Form";
import Container from "@/components/Container/Container";

import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { cormorant } from "@/public/constatnts";

import css from "@/components/pages/contacts/Contacts.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(): Promise<Metadata> {
	const locale = await getCurrentLocale();
	const title = await getScopedI18n("navigation");
	const t = await getScopedI18n("pages.contacts");
	return {
		title: title("contacts"),
		openGraph: {
			title: title("contacts"),
			description: t("title"),
			siteName: "Relax Complex",
			url: `https://relax-tan.vercel.app/${locale}/contacts`,
			images: "/images/layout/og/contacts.jpg",
			type: "website",
		},

		twitter: {
			card: "summary_large_image",
			title: title("contacts"),
			description: t("title"),
			images: "/images/layout/og/contacts.jpg",
		},
	};
}

export default async function Contacts() {
	const t = await getScopedI18n("pages.contacts");

	return (
		<>
			<Benefits />
			<Container>
				<h2 className={`${cormorant.className} ${css.title}`}>{t("title")}</h2>
				<Form />
			</Container>
		</>
	);
}
