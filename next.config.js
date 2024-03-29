/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**"
            },
            {
                protocol: "http",
                hostname: "**"
            }
        ],
        minimumCacheTTL: 1500000
    }
}

module.exports = nextConfig
