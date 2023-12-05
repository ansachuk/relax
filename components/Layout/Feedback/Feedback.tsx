import { getScopedI18n } from "@/locales/server";

import { nothing } from "@/app/[locale]/layout";

import LayoutForm from "../LayoutForm/LayoutForm";

import { Geo, Mail, Phone } from "@/static/svg";

import css from "./Feedback.module.scss";

export default async function Feedback() {
	const t = await getScopedI18n("feedback");
	return (
		<>
			<p className={css.desc}>{t("desc")}</p>
			<div className={css.wrapper}>
				<div className={css.contacts}>
					<p className={`${nothing.className} ${css.welcome}`}>welcome to us!</p>
					<ul className={css.list}>
						<li className={css.item}>
							<span>
								<Mail width={24} height={24} />
							</span>
							relaxcomplex@ukr.net
						</li>
						<li className={css.item}>
							<span>
								<Geo width={24} height={24} />
							</span>
							{t("address")}
						</li>
						<li className={css.item}>
							<span>
								<Phone width={24} height={24} />
							</span>
							098 333 77 00 ({t("phone_pool")})
							<br />
							096 000 54 54 ({t("phone_spa")})
						</li>
					</ul>
				</div>
				<LayoutForm />
			</div>
		</>
	);
}
