import Link from "next/link";
import MainImage from "@/components/MainImage/MainImage";

import { nothing } from "@/app/[locale]/layout";
import { QR, menu1, menu2, menu3 } from "@/public/images/restaurant";
import { ArrowLg } from "@/public/svg";

import css from "./Menu.module.scss";

export default function Menu() {
	return (
		<div className={css.wrapper}>
			<MainImage sizes="(max-width: 1399px) 100vw, 33vw" className={css.img1} src={menu1} width={400} height={290} alt="dish image" />
			<MainImage sizes="(max-width: 1399px) 100vw, 33vw" className={css.img2} src={menu2} width={400} height={290} alt="dish image" />
			<MainImage sizes="(max-width: 1399px) 100vw, 33vw" className={css.img3} src={menu3} width={400} height={290} alt="dish image" />
			<div className={css.menu}>
				<p className={`${nothing.className} ${css.text}`}>skan or click</p>
				<ArrowLg className={css.icon} width={48} height="auto" />
				<Link className={css.link} target="_blank" rel="noopener noreferrer" href="https://myqrcode.com/qr/ef55837d/view">
					<MainImage
						sizes="(max-width: 767px) 66vw,(max-width: 1399px) 33vw, 25vw"
						className={css.qr}
						src={QR}
						width={300}
						height={300}
						alt="menu qr-code"
					/>
				</Link>
			</div>
		</div>
	);
}
