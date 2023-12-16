import { nothing } from "@/app/[locale]/layout";

import MainImage from "../MainImage/MainImage";

import { IBenefit } from "@/@types/types";

import css from "./Benefits.module.scss";

type Props = { benefits: IBenefit[] };

export default function Benefits({ benefits }: Props) {
	return (
		<div className={css.wrapper}>
			{benefits.map(({ title, img }, idx) => (
				<div className={css.benefit} key={title}>
					<MainImage sizes="33vw" className={css.img} width={400} height={500} src={img} alt={title} />
					<p className={css.text}>
						<span className={`${nothing.className} ${css.nothing}`}>{idx + 1 + ")"}</span>
						{title}
					</p>
				</div>
			))}
		</div>
	);
}
