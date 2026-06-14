import { SpeedInsights } from "@vercel/speed-insights/next";
import { Montserrat } from "next/font/google";
import Provider from "@/Utils/ThemeProvider.jsx";
import "./globals.css";
import Header from "@/Components/Header/Header.jsx";
import Particles from "@/Components/Animations/Particles.jsx";

const montserrat = Montserrat({
   variable: "--font-montserrat",
   subsets: ["latin", "cyrillic"],
   display: "swap",
});

export const metadata = {
   title: "KodersUp | Fullstack Portfolio",
   description: "Портфолио Дениса Вюхина: fullstack-разработка, Telegram-боты, AI-интеграции и веб-проекты.",
   icons: {
      icon: "/icons/favicon.PNG",
      shortcut: "/icons/shortcut.ico",
      apple: "/icons/apple-touch-icon.PNG",
   }
};

export default function RootLayout({ children }) {
   return (
      <html lang="ru" className={montserrat.variable} suppressHydrationWarning>
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
