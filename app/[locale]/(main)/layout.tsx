import React from "react";

import Container from "@/components/Container/Container";
import MainBenefits from "@/components/Layout/MainBenefits/MainBenefits";
import FAQ from "@/components/Layout/FAQ/FAQ";
import Feedback from "@/components/Layout/Feedback/Feedback";
import Reviews from "@/components/Layout/Reviews/Reviews";
import Section from "@/components/Section/Section";

import { getScopedI18n } from "@/locales/server";

export default async function layout({ children }: { children: React.ReactNode }) {
	const t = await getScopedI18n("pages.main.titles");
	return (
		<>
			<MainBenefits />
			<Container>
				{children}
				<Section title={t("reviews")}>
					<Reviews />
				</Section>
				<Section title={t("faq")}>
					<FAQ />
				</Section>
				<Section title={t("feedback")}>
					<Feedback />
				</Section>
			</Container>
		</>
	);
}
