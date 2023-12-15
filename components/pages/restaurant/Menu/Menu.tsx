import Link from "next/link";
import MainImage from "@/components/MainImage/MainImage";

import { nothing } from "@/app/[locale]/layout";
import { ArrowLg } from "@/public/svg";
import { QR, menu1, menu2, menu3 } from "@/public/images/restaurant";

import css from "./Menu.module.scss";

export default function Menu() {
	return (
		<div className={css.wrapper}>
			<MainImage className={css.img1} src={menu1} width={400} height={290} alt="dish image" />
			<MainImage className={css.img2} src={menu2} width={400} height={290} alt="dish image" />
			<MainImage className={css.img3} src={menu3} width={400} height={290} alt="dish image" />
			<div className={css.menu}>
				<p className={`${nothing.className} ${css.text}`}>skan or click </p>
				<ArrowLg className={css.icon} width={48} height="auto" />
				<Link className={css.link} target="_blank" rel="noopener noreferrer" href="https://myqrcode.com/qr/ef55837d/view">
					<MainImage src={QR} width={300} height={300} alt="menu qr-code" />
				</Link>
			</div>
		</div>
	);
}
