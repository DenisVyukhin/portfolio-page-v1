import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat } from "next/font/google";
import Provider from "@/Utils/ThemeProvider.jsx";
import "./globals.css";
import Header from "@/Components/Header/Header.jsx";
import Particles from "@/Components/Animations/Particles.jsx";

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || "https://kodersup-portfolio.vercel.app").replace(/\/$/, "");
const siteName = "KodersUp Portfolio";
const siteTitle = "KodersUp | Fullstack-разработчик";
const siteDescription =
   "Портфолио KodersUp: fullstack-разработка на React и Next.js, backend на Node.js/Python/Java, Telegram-боты, AI-интеграции и веб-проекты.";
const previewImage = "/readme-page-preview.png";

const montserrat = Montserrat({
   variable: "--font-montserrat",
   subsets: ["latin", "cyrillic"],
   display: "swap",
});

export const metadata = {
   metadataBase: new URL(siteUrl),
   applicationName: siteName,
   title: {
      default: siteTitle,
      template: "%s | KodersUp",
   },
   description: siteDescription,
   keywords: [
      "KodersUp",
      "Денис Вюхин",
      "Denis Vyuhin",
      "fullstack разработчик",
      "портфолио разработчика",
      "пример портфолио",
      "программист",
      "React разработчик",
      "React программист",
      "Next.js разработчик",
      "Next.js программист",
      "Python разработчик",
      "Python программист",
      "Java разработчик",
      "Java программист",
      "Telegram bot developer",
      "AI интеграции",
   ],
   authors: [{ name: "Denis Vyuhin", url: siteUrl }],
   creator: "Denis Vyuhin",
   publisher: "KodersUp",
   category: "portfolio",
   alternates: {
      canonical: "/",
      languages: {
         ru: "/",
      },
   },
   openGraph: {
      type: "profile",
      locale: "ru_RU",
      url: "/",
      siteName,
      title: siteTitle,
      description: siteDescription,
      firstName: "Denis",
      lastName: "Vyuhin",
      username: "KodersUp",
      images: [
         {
            url: previewImage,
            width: 2702,
            height: 1324,
            alt: "KodersUp Portfolio - портфолио fullstack-разработчика",
         },
      ],
   },
   twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [previewImage],
   },
   robots: {
      index: true,
      follow: true,
      googleBot: {
         index: true,
         follow: true,
         "max-image-preview": "large",
         "max-snippet": -1,
         "max-video-preview": -1,
      },
   },
   icons: {
      icon: "/icons/favicon.PNG",
      shortcut: "/icons/shortcut.ico",
      apple: "/icons/apple-touch-icon.PNG",
   }
};

export const viewport = {
   width: "device-width",
   initialScale: 1,
   colorScheme: "dark light",
   themeColor: [
      { media: "(prefers-color-scheme: dark)", color: "#05070d" },
      { media: "(prefers-color-scheme: light)", color: "#f7f9fc" },
   ],
};

const jsonLd = {
   "@context": "https://schema.org",
   "@graph": [
      {
         "@type": "Person",
         "@id": `${siteUrl}/#person`,
         name: "Denis Vyuhin",
         alternateName: ["Денис Вюхин", "KodersUp"],
         url: siteUrl,
         jobTitle: "Fullstack Developer",
         description:
            "Fullstack-разработчик, создающий веб-приложения, Telegram-ботов, backend-сервисы и AI-интеграции.",
         knowsAbout: [
            "React",
            "Next.js",
            "JavaScript",
            "Python",
            "Django",
            "Node.js",
            "PostgreSQL",
            "MongoDB",
            "Telegram bots",
            "AI integrations",
         ],
         sameAs: [
            "https://t.me/KodersUp",
            "https://github.com/DenisVyukhin/",
            "https://vk.com/kodersup_iu",
         ],
      },
      {
         "@type": "WebSite",
         "@id": `${siteUrl}/#website`,
         url: siteUrl,
         name: siteName,
         inLanguage: "ru-RU",
         description: siteDescription,
         publisher: {
            "@id": `${siteUrl}/#person`,
         },
      },
      {
         "@type": "ItemList",
         "@id": `${siteUrl}/#projects`,
         name: "Проекты KodersUp",
         itemListElement: [
            "APDE 2.0",
            "IU Helper",
            "Renneo",
            "Twitblit",
            "Arc Dynamics",
            "KodersUp Portfolio",
            "Kazinkov Bot",
         ].map((name, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name,
         })),
      },
   ],
};

export default function RootLayout({ children }) {
   return (
      <html lang="ru" className={montserrat.variable} suppressHydrationWarning>
         <head>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
         </head>
         <body>
            <Provider>
               <Header />
               <div className="ambient-particles" aria-hidden="true">
                  <Particles
                     particleColors={["#0095ff", "#0070e0", "#00c2ff"]}
                     particleCount={140}
                     particleSpread={10}
                     speed={0.1}
                     particleBaseSize={46}
                     moveParticlesOnHover={true}
                     alphaParticles={false}
                     disableRotation={false}
                  />
               </div>
               {children}
            </Provider>
            <SpeedInsights />
         </body>
      </html>
   );
}
