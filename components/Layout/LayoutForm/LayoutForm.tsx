"use client";

import css from "./LayoutForm.module.scss";

export default function LayoutForm() {
	return (
		<form className={css.form}>
			<input type="text" />
			<input type="text" />
			<input type="text" />
			<button type="submit"></button>
		</form>
	);
}
