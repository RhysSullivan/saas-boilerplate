
// import '@acme/env';
/** @type {import("next").NextConfig} */
const config = {
	reactStrictMode: true,
	pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
	transpilePackages: [
		'@acme/api',
		'@acme/core',
		'@acme/ui',
		'@acme/env',
	],
	productionBrowserSourceMaps: true, // we're open source so why not
	rewrites: async () => {
		return [
			{
				source: '/ingest/static/:path*',
				destination: 'https://us-assets.i.posthog.com/static/:path*',
			},
			{
				source: '/ingest/:path*',
				destination: 'https://us.i.posthog.com/:path*',
			},
		];
	},
	skipTrailingSlashRedirect: true,
};

export default config;
