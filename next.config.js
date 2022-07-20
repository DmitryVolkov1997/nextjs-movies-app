/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ['www.omdbapi.com', 'm.media-amazon.com', 'place-hold.it']
	}
}

module.exports = nextConfig
