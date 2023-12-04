import { StaticImageData } from "next/image";

export type Position = "top" | "bottom";

export interface IReview {
	img: StaticImageData;
	text: string;
}

export interface IFAQ {
	title: string;
	content: string;
}

export interface IFeedback {
	name: string;
	phone: string;
	message: string;
}
