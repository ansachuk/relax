import Image from "next/image";

type Props = {
	title: string;
	width: number;
	height: number;

	classNameProp?: string;
};

export default function Icon({ title, width, height, classNameProp = "" }: Props) {
	return (
		// <Image src={`../sprite/${title}.svg`} alt={title} width={width} height={height} />
		<svg className={classNameProp} width={width} height={height}>
			<use href={`../sprite/${title}.svg`}></use>
			<use href="../sprite/geo.svg"></use>
		</svg>
	);
}
