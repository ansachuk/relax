import Benefits from "@/components/pages/contacts/Benefits/Benefits";
import Form from "@/components/pages/contacts/Form/Form";
import Container from "@/components/Container/Container";

import { getScopedI18n } from "@/locales/server";
import { cormorant } from "@/public/constatnts";

import css from "@/components/pages/contacts/Contacts.module.scss";

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
