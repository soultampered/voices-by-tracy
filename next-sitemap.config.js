module.exports = {
	siteUrl: "https://www.voicesbytracy.com",
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: "*",
				disallow: [
					"/admin/",
					"/api/",
					"/login/",
					"/register/",
					"/logout/",
					"/profile/",
				]
			}
		]
	},
	changefreq: "daily",
	priority: 0.7,
	additionalPaths: async (config) => {
		return [
			{ loc: '/', lastmod: new Date().toISOString() },
			{ loc: '/contact', lastmod: new Date().toISOString() },
			{ loc: '/site', lastmod: new Date().toISOString() },
		];
	},
};
