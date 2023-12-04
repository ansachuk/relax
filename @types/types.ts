export type Position = "top" | "bottom";

export interface IReview {
	img: string;
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
