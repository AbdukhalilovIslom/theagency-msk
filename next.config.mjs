/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: true,
    images: {
        formats: ["image/webp"],
        // unoptimized: true,
        domains: ["*.theagency.uz"],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**.theagency.uz',

            },
        ],
    },
};

export default nextConfig;
