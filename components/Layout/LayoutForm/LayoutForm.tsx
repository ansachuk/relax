"use client";

import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";

import I18nSubLayout from "@/components/I18nSubLayout/I18nSubLayout";

import { useScopedI18n } from "@/locales/client";
import { IFeedback } from "@/@types/types";

import css from "./LayoutForm.module.scss";

export function SubForm() {
	const t = useScopedI18n("feedback");

	const initialValues: IFeedback = { name: "", phone: "", message: "" };
	const validationSchema = object().shape({
		name: string().required(t("errors.required")).min(2, t("errors.short")).max(32, t("errors.long")),
		phone: string()
			.matches(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/, t("errors.notValid"))
			.required(t("errors.required")),
		message: string().required(t("errors.required")).min(5, t("errors.short")).max(255, t("errors.long")),
	});

	const onSubmit = (values: IFeedback) => {
		const feedback = values;
		console.log("feedback", feedback);
	};

	return (
		<Formik onSubmit={(values: IFeedback) => onSubmit(values)} validationSchema={validationSchema} initialValues={initialValues}>
			<Form className={css.form}>
				<Field name="name" placeholder={t("namePl")} autoComplete="off" />
				<ErrorMessage className={css.error} name="name" component="div" />
				<Field type="tel" name="phone" placeholder={t("phonePl")} autoComplete="off" />
				<ErrorMessage className={css.error} name="phone" component="div" />
				<Field as="textarea" name="message" placeholder={t("messagePl")} autoComplete="off" />
				<ErrorMessage className={css.error} name="message" component="div" />
				<button className={css.submit} type="submit">
					{t("sendPL")}
				</button>
			</Form>
		</Formik>
	);
}

export default function LayoutForm() {
	return (
		<I18nSubLayout>
			<SubForm />
		</I18nSubLayout>
	);
}
