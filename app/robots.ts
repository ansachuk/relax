import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
		},
		sitemap: "https://acme.com/sitemap.xml",
	};
}
