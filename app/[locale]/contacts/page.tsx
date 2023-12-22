import { Metadata } from "next";

import Benefits from "@/components/pages/contacts/Benefits/Benefits";
import Form from "@/components/pages/contacts/Form/Form";
import Container from "@/components/Container/Container";

import { getCurrentLocale, getScopedI18n } from "@/locales/server";
import { cormorant } from "@/public/constatnts";

import css from "@/components/pages/contacts/Contacts.module.scss";

// eslint-disable-next-line react-refresh/only-export-components
export async function generateMetadata(): Promise<Metadata> {
	const t = await getScopedI18n("navigation");
	const locale = await getCurrentLocale();
	return {
		title: t("contacts"),
		openGraph: {
			title: t("contacts"),
			url: `https://relax-tan.vercel.app/${locale}/contacts`,
			images: ["https://relax-4mj3w3fey-ansachuks-projects.vercel.app/images/layout/og/contacts.jpg"],
		},
		twitter: {
			images: ["https://relax-1i64hwcrg-ansachuks-projects.vercel.app/images/layout/og/restaurant.jpg"],
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
