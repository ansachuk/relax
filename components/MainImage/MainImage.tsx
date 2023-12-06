import Image from "next/image";
import { PlaceholderValue, StaticImport } from "next/dist/shared/lib/get-img-props";

type Props = {
	width?: number;
	height?: number;
	sizes?: string;
	priority?: boolean;
	placeholder?: PlaceholderValue;
	className?: string;
	quality?: number;
	alt: string;
	src: string | StaticImport;
};

export default function MainImage({ width, height, alt, src, priority, placeholder, className, quality, sizes = "100vw" }: Props) {
	return (
		<Image
			src={src}
			width={width}
			height={height}
			alt={alt}
			priority={priority}
			placeholder={placeholder}
			className={className}
			sizes={sizes}
			quality={quality}
		/>
	);
}
