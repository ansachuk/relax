export default {
	navigation: {
		main: "Main",
		restaurant: "Restaurant",
		hotel: "Hotel",
		spa: "Spa",
		pool: "Pool",
		contacts: "Contacts",
	},
	benefits: {
		proffesionalism: "Proffesionalism",
		atmosphere: "Atmosphere",
		tasty: "Tasty food",
		price: "Pleasant price",
	},
	titles: {
		reviews: "our reviews:",
		faq: "faq:",
		feedback: "Do you have any questions?",
	},
	reviews: {
		description:
			"We are always happy to welcome new visitors with sincere smiles and comfortable conditions personally for everyone. Therefore, after rest, they remain in a good mood, satisfied, and support us with warm words:",
		reviews: {
			review1:
				"We recently rested as a family with a small child. We liked everything very much, cozy rooms, delicious cuisine, pleasant fresh air for a walk and a beautiful veranda for morning coffee",
			review2:
				"I really enjoyed the complex. The rooms are spacious and comfortable, the staff is polite and attentive. The restaurant offers a wide selection of delicious dishes. Overall, we were very satisfied with our stay.",
			review3:
				"We spent the weekend at the Relax complex. We really enjoyed the sauna, the cocktails in the restaurant, and the delicious food. We especially want to mention the staff, who were always willing to help and make our stay as comfortable as possible.",
			review4:
				"My wife and I recently stayed at the Relax hotel and restaurant complex in Boryspil. The rooms were clean and secure with modern locks, the staff was polite. There are saunas and baths to warm up, a spacious area, parking, and we liked that there is everything you need for a relaxing stay for visitors with children. We want to come back again, next time with children.",
		},
	},
	faq: {
		1: { question: "What time is check-out?", answer: "Check-in is until 14:00. Check-out is until 12:00" },
		2: {
			question: "What services are included in the price of the room?",
			answer: "The room price includes accommodation, and breakfast can be ordered for an additional fee.",
		},
		3: { question: "Is there free Wi-Fi?", answer: "Yes, free Wi-Fi is available on the complex's territory." },
		4: { question: "Is it possible to plan a festive event?", answer: "Of course, we can quickly resolve all details by phone." },
		5: { question: "Is there parking on the complex's territory?", answer: "Yes, there is free parking on the complex's territory." },
		6: { question: "Is it possible to stay with pets?", answer: "No, unfortunately, it is not allowed to stay in the complex with pets." },
	},
	feedback: {
		desc: "Plan your vacation simply and quickly! Fill out the form and get an answer to your question  soon",
		address: "Boryspil,2 Darvina street ",
		phone_pool: "restaurant, pool",
		phone_spa: "spa, vats, banquet halls, hotel",
		phonePl: "Mobile number *",
		namePl: "Name *",
		messagePl: "Your message: *",
		sendPL: "Send message",
		errors: {
			short: "To short!",
			long: "To long!",
			required: "*Required",
			notValid: "Not valid!",
		},
	},
	pages: {
		main: {
			intro:
				"we are a modern hotel and restaurant complex that has a spacious area and a large outdoor pool, dry saunas and various baths, open traditional spa-hot tubs",
			aboutUs: {
				title: "About us",
				par1: "Our complex is suitable both for family vacations and for a fun friendly company or a romantic dinner for two lovers. We have everything you need for a full rest after a hard day's work or restoration of emotional and physical strength, as well as for a pleasant rest of the body and release from everyday stress, which everyone needs now.",
				par2: "On the territory of the Relax complex you will find a children's playground, a beautiful green lawn for an open-air wedding ceremony, restaurant halls and a comfortable hotel.There is everything you need for a comfortable stay.",
			},
			benefits: {
				title: "Our benefits",
				sub1: "Photo-zone for guests",
				sub2: "Spacious area",
				sub3: "Playground",
			},
			whatWeOffer: {
				title: "What we offer:",
				restaurant: "restaurant",
				banquet: "banquet halls",
				hotel: "hotel",
				spa: "spa",
				pool: "pool",
				vats: "vats",
			},
		},
	},
} as const;
