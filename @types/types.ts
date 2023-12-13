import { StaticImageData } from "next/image";

export type Position = "top" | "bottom";

export interface IReview {
	img: StaticImageData;
	text: string;
}

export interface IBenefit {
	img: StaticImageData;
	title: string;
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

export interface IContactsForm {
	name: string;
	phone: string;
	questions: string;
	date: string;
	hall: string;
	type: string;
	quantity: string;
	host: boolean;
	zone: boolean;
	music: boolean;
}

export interface ISectionSm {
	img: StaticImageData;
	title: string;
	subtitle: string;
	phone: string;
	text: string;
	link: string;
}

export interface ISectionLg {
	images: {
		img1: StaticImageData;
		img2: StaticImageData;
		img3: StaticImageData;
		img4: StaticImageData;
	};
	nothingTitle: string;
	title: string;
	subtitle: string;
	phone: string;
	text: string;
	link: string;
}

export interface IAbout {
	title: string;
	p1: string;
	p2: string;
	img1: StaticImageData;
	img2: StaticImageData;
	img3: StaticImageData;
}

export interface IOffer {
	img: StaticImageData;
	text: string;
	offers: Array<string>;
}
