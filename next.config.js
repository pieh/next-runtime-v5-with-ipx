/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  eslint: {
    ignoreDuringBuilds: true,
  },
  // basePath: "/base/path",
  experimental: {
    outputFileTracingIncludes: {
      "/": ["public/**"],
    },
  },
  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/?(photo)-**-**",
      },
      {
        hostname: "*.pixabay.com",
      },
    ],
    domains: [
      "images.pexels.com",

      "img.etimg.com",
      "assets.vogue.com",
      "m.media-amazon.com",
      "upload.wikimedia.org",
      "premium-storefronts.s3.amazon.com",
      "premium-storefronts.s3.amazonaws.com",
      "teespring-storecontent.s3.amazonaws.com",
      "vangogh.teedown.com",
      "vangogh.teespring.com",
      "images.teedown.com",
      "images.teespring.com",
      "www.paypalobjects.com",
      "teespring-ass.s3.amazonaws.com",
      "flagcdn.com",
      "d1b2zzpxewkr9z.cloudfront.net",
      "dslv9ilpbe7p1.cloudfront.net",
    ],
    // x /_next/image?q=75&url=https%3A%2F%2Fpremium-storefronts.s3.amazonaws.com%2Fstorefronts%2Fbear-official%2Fassets%2Fbg_home_banner.png&w=3840
    // x /_next/image?q=75&url=https%3A%2F%2Fimages.teespring.com%2Fstatic.jpg%3Fheight%3D800%26image_url%3Dhttps%253A%252F%252Fteespring-pub-custom.s3.amazonaws.com%252Ff86_117151929_product_1227_104379_front.png%26padded%3Dfalse%26signature%3DczSHlPTKt1BEL5IPVuiQXQ1vuu9wDfaOhrGXRSuhWWY%253D%26version%3D2023-03-15-23-32-05%26width%3D800&w=3840
    // x /_next/image?q=75&url=https%3A%2F%2Fteespring-storecontent.s3.amazonaws.com%2FNxLO5BRqDMGzhuu5Ij6i2Q_store_banner_image%3F1485823372304&w=3840
    // x /_next/image?q=75&url=https%3A%2F%2Fimages.teespring.com%2Fv3%2Fimage%2F_PVwlbAVvCF1EIOQLlvxc_xJCOU%2F800%2F800.jpg&w=256
    // x /_next/image?q=75&url=https%3A%2F%2Fdslv9ilpbe7p1.cloudfront.net%2FyDII9YfZJhhRvR2PFGHFgg_store_logo_image.png&w=3840
    // x /_next/image?q=75&url=https%3A%2F%2Fimages.teespring.com%2Fv3%2Fimage%2FHEtUWbPL_Ba7Td4aX1HQO9TRU_k%2F800%2F800.jpg&w=1920
    // x /_next/image?q=75&url=https%3A%2F%2Fdslv9ilpbe7p1.cloudfront.net%2FCyK5t_zirLrLYEJ21mkhAg_store_header_image&w=1920
    // x /_next/image?q=75&url=https%3A%2F%2Fimages.teespring.com%2Fv3%2Fimage%2FY9Fp3HRf0MW5lqpUqTPO9lhvFC0%2F800%2F800.jpg&w=96
    // x /_next/image?q=75&url=https%3A%2F%2Fimages.teespring.com%2Fv3%2Fimage%2FMuQStEPefRMCq9lXS7ObOlo3A8k%2F800%2F800.jpg&w=640
    // x /_next/image?q=75&url=https%3A%2F%2Fimages.teespring.com%2Fv3%2Fimage%2FIU3eYfWxV_cqmTV5osyu0EnG4zs%2F800%2F800.jpg&w=128
  },
  async rewrites() {
    return [
      {
        source: "/rewrite-no-basepath",
        destination: "https://example.vercel.sh",
        basePath: false,
      },
    ];
  },
};

module.exports = nextConfig;
