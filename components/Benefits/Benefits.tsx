import Image from "next/image";

import { nothing } from "@/app/[locale]/layout";

import { IBenefit } from "@/@types/types";

import css from "./Benefits.module.scss";

type Props = { benefits: IBenefit[] };

export default function Benefits({ benefits }: Props) {
	return (
		<div className={css.wrapper}>
			{benefits.map(({ title, img }, idx) => (
				<div className={css.benefit} key={title}>
					<Image width={400} height={500} sizes="100vw" src={img} alt={title} />
					<p className={css.text}>
						<span className={nothing.className}>{idx + 1 + ")"}</span>
						{title}
					</p>
				</div>
			))}
		</div>
	);
}
