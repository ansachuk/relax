"use client";

import { FormEvent } from "react";

import { useScopedI18n } from "@/locales/client";

import I18nSubLayout from "@/components/I18nSubLayout/I18nSubLayout";

import css from "./LayoutForm.module.scss";

export function Form() {
	const t = useScopedI18n("feedback");

	const onSubmit = (e: FormEvent) => {
		e.preventDefault();

		const form = e.currentTarget;
		console.log("form", form);
	};

	return (
		<form onSubmit={onSubmit} className={css.form}>
			<input type="text" name="username" placeholder={t("namePl")} />
			<input type="tel" name="phone" placeholder={t("phonePl")} />
			<textarea name="message" placeholder={t("messagePl")} />
			<button className={css.submit} type="submit">
				{t("sendPL")}
			</button>
		</form>
	);
}

export default function LayoutForm() {
	return (
		<I18nSubLayout>
			<Form />
		</I18nSubLayout>
	);
}
