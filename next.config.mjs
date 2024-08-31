/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        domains: ['images.unsplash.com', 'github.com', 'raw.githubusercontent.com']
    }
};

export default nextConfig;
