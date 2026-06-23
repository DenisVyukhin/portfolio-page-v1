const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kodersup-portfolio.vercel.app").replace(/\/$/, "");

export default function robots() {
   return {
      rules: {
         userAgent: "*",
         allow: "/",
      },
      sitemap: `${siteUrl}/sitemap.xml`,
      host: siteUrl,
   };
}
