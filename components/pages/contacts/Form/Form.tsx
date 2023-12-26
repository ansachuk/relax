"use client";

import { Formik, Form, Field, ErrorMessage, FormikHelpers } from "formik";
import { boolean, number, object, string } from "yup";

import { useScopedI18n } from "@/locales/client";
import I18nSubLayout from "@/components/I18nSubLayout/I18nSubLayout";
import { Checkbox } from "@/public/svg";
import { IContactsForm } from "@/@types/types";

import css from "../Contacts.module.scss";
import { sendAppointment } from "@/api/telegram";

export function SubForm() {
	const t = useScopedI18n("pages.contacts.form");

	const initialValues: IContactsForm = {
		name: "",
		phone: "",
		questions: "",
		date: "",
		hall: "hunting",
		type: "children",
		quantity: "",
		host: false,
		zone: false,
		music: false,
	};

	const validationSchema = object().shape({
		name: string().required(t("errors.required")).min(2, t("errors.short")).max(32, t("errors.long")),
		phone: string()
			.matches(/^[\\+]?[(]?[0-9]{3}[)]?[-\s\\.]?[0-9]{3}[-\s\\.]?[0-9]{4,6}$/, t("errors.notValid"))
			.required(t("errors.required")),
		date: string().required(t("errors.required")),
		questions: string().min(4, t("errors.short")).max(255, t("errors.long")),
		quantity: number().min(1, "min").max(32, "max").required(t("errors.required")),
		hall: string(),
		type: string(),
		host: boolean(),
		zone: boolean(),
		music: boolean(),
	});

	const onSubmit = (values: IContactsForm, helpers: FormikHelpers<IContactsForm>) => {
		sendAppointment(values);
		helpers.resetForm();
	};

	return (
		<Formik
			validationSchema={validationSchema}
			onSubmit={(values: IContactsForm, helpers) => onSubmit(values, helpers)}
			initialValues={initialValues}
		>
			<Form className={css.form}>
				<div className={css.wrapper}>
					<div className={css.left}>
						<Field required name="name" placeholder={t("name")} autoComplete="off" />
						<ErrorMessage className={css.error} name="name" component="div" />
						<Field required name="phone" placeholder={t("phone")} autoComplete="off" />
						<ErrorMessage className={css.error} name="phone" component="div" />
						<Field required name="date" placeholder={t("date")} autoComplete="off" />
						<ErrorMessage className={css.error} name="date" component="div" />
					</div>
					<div className={css.right}>
						<Field required as="select" name="hall">
							<option value="hunting">{t("selects.hall.hunting")}</option>
							<option value="veranda">{t("selects.hall.veranda")}</option>
							<option value="kolyba">{t("selects.hall.kolyba")}</option>
							<option value="venetian">{t("selects.hall.venetian")}</option>
							<option value="sea">{t("selects.hall.sea")}</option>
						</Field>

						<Field required as="select" name="type">
							<option value="children">{t("selects.type.children")}</option>
							<option value="birthday">{t("selects.type.birthday")}</option>
							<option value="christening">{t("selects.type.christening")}</option>
							<option value="corporate">{t("selects.type.corporate")}</option>
						</Field>

						<Field required type="number" min={1} max={32} name="quantity" placeholder={t("quantity")} autoComplete="off" />
					</div>
				</div>
				<p className={css.note}>{"*" + t("note")}</p>
				<h4 className={css.additional}>{t("title")}</h4>
				<div className={css.checkboxes} role="group" aria-labelledby="checkbox-group">
					<label>
						<Field type="checkbox" name="host" />
						<div className={css.checkbox}>
							<Checkbox width={24} height={24} className={css.icon} />
						</div>
						{t("host")}
					</label>
					<label>
						<Field type="checkbox" name="zone" />
						<div className={css.checkbox}>
							<Checkbox width={24} height={24} className={css.icon} />
						</div>
						{t("zone")}
					</label>
					<label>
						<Field type="checkbox" name="music" />
						<div className={css.checkbox}>
							<Checkbox width={24} height={24} className={css.icon} />
						</div>
						{t("music")}
					</label>
				</div>
				<div className={css.subwrapper}>
					<Field autoComplete="off" name="questions" placeholder={t("questions")} as="textarea" />
					<ErrorMessage className={css.error} name="questions" component="div" />
					<button type="submit">{t("btn")}</button>
				</div>
			</Form>
		</Formik>
	);
}

export default function ContactsForm() {
	return (
		<I18nSubLayout>
			<SubForm />
		</I18nSubLayout>
	);
}
