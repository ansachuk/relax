import { IContactsForm, IFeedback } from "@/@types/types";
import { appointmentChatID, baseTelegramURL, feedbackChatID } from "@/public/constatnts";

export const sendFeedback = async (values: IFeedback) => {
	const { message: userMessage, name, phone } = values;

	const message = `${userMessage}, ${name}, ${phone}`;

	const url = `${baseTelegramURL}sendMessage?chat_id=${feedbackChatID}&text=${message}`;

	await fetch(url);
};

export const sendAppointment = async (values: IContactsForm) => {
	const { name, phone, date, hall: formHall, type: formType, quantity, host, music, zone, questions } = values;

	let hall, type;

	switch (formHall) {
		case "hunting":
			hall = "Мисливська";
			break;

		case "veranda":
			hall = "Веранда";
			break;

		case "kolyba":
			hall = "Колиба";
			break;

		case "venetian":
			hall = "Венеціанська";
			break;

		case "sea":
			hall = "Морська";
			break;

		default:
			hall = "Мисливська";
			break;
	}

	switch (formType) {
		case "children":
			type = "Дитяче свято";
			break;

		case "birthday":
			type = "День народження";
			break;

		case "christening":
			type = "Хрестини";
			break;

		case "corporate":
			type = "Корпоратив";
			break;

		default:
			type = "Корпоратив";
			break;
	}

	const message = `${name}, ${phone}. Дата: ${date}. Кількість: ${quantity}. Зала: ${hall}.Тип свята: ${type}. Ведучий: ${
		host ? "Так" : "Ні"
	}. Музика: ${music ? "Так" : "Ні"}. Фотозона: ${zone ? "Так" : "Ні"}. Додатково: ${questions || "-"}.`;

	const url = `${baseTelegramURL}sendMessage?chat_id=${appointmentChatID}&text=${message}`;

	await fetch(url);
};
