import { I18nProviderClient, useCurrentLocale } from "@/locales/client";

export default function I18nSubLayout({ children }: { children: React.ReactNode }) {
	const currentLocale = useCurrentLocale();

	return (
		<I18nProviderClient fallback="...loading" locale={currentLocale}>
			{children}
		</I18nProviderClient>
	);
}
