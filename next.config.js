const nextConfig = {
	image: {
		formates: ["image/avif", "image/webp", "image/jpg"],
	},
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: [{ loader: "@svgr/webpack", options: { icon: true } }],
		});

		return config;
	},
};

module.exports = nextConfig;
