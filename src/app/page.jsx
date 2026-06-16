"use client";

import { useEffect, useRef, useState } from "react";
import {
   FiArrowDown,
   FiDownload,
   FiGithub,
   FiMail,
   FiSend,
} from "react-icons/fi";
import { FaVk } from "react-icons/fa";

import Footer from "@/Components/Footer/Footer.jsx";
import ProjectCard from "@/Components/ProjectCard/ProjectsCard.jsx";
import TextType from "@/Components/Animations/TextType.jsx";

const birthDate = new Date("2008-07-16");
const careerStartYear = 2021;

const getAge = () => {
   const today = new Date();
   let age = today.getFullYear() - birthDate.getFullYear();
   const birthdayPassed =
      today.getMonth() > birthDate.getMonth() ||
      (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());

   return birthdayPassed ? age : age - 1;
};

const getProfileTiming = () => ({
   age: getAge(),
   experience: new Date().getFullYear() - careerStartYear,
});

const projects = [
   {
      name: "APDE 2.0",
      description:
         "Мобильный IDE для Processing (Java) на Android. Позволяет запускать скетчи прямо на телефоне или планшете.",
      stack: ["Processing", "Java", "Kotlin", "Gradle", "Local AI"],
      impact: "Аналог мобильного приложения",
      img: "apde.png",
      link: "/projects",
      gitlink: "https://github.com/DenisVyukhin/APDE-2.0",
   },
   {
      name: "IU Helper",
      description:
         "Telegram-бот для поиска и публикации учебных ответов. Есть ИИ-ассистент, система пользовательских решений и ежегодные розыгрыши для активных участников.",
      stack: ["Python", "Aiogram", "SQLAlchemy", "Mistral AI"],
      impact: "50 000+ руб. выручки",
      img: "telegram-bot.webp",
      link: "https://t.me/iu_helper_bot",
      gitlink: "https://github.com/DenisVyukhin/IU-Helper-v2.0",
   },
   {
      name: "Renneo",
      description:
         "Многостраничный интернет-магазин сборок ПК с каталогом товаров, контактной формой, анимациями и серверной частью для данных.",
      stack: ["Next.js", "Tailwind", "REST API", "PostgreSQL"],
      impact: "Коммерческий сайт",
      img: "renneo.webp",
      link: "https://renneo.ru/",
      gitlink: "https://github.com/DenisVyukhin/",
   },
   {
      name: "Twitblit",
      description:
         "Социальная сеть в духе Reddit и Twitter: посты, обсуждения и ИИ-боты, которые могут участвовать в диалогах.",
      stack: ["Web app", "AI bots", "Social UX"],
      impact: "Эксперимент с AI-сообществом",
      img: "twitblit.png",
      link: "https://twitblit.ru/",
      gitlink: "https://github.com/DenisVyukhin/",
   },
   {
      name: "Arc Dynamics",
      description:
         "Аналог сайта Boston Dynamics, сделанный для портфолио: продуктовый сайт робототехнической компании.",
      stack: ["Next.js", "React JS", "TypeScript", "Tailwind", "ESLint"],
      impact: "Учебный fullstack-проект",
      img: "arc-dynamics-preview.png",
      link: "https://arc-dynamics.vercel.app/",
      gitlink: "https://github.com/DenisVyukhin/Arc-Dynamic",
   },
   {
      name: "KodersUp Portfolio",
      description:
         "Динамическое портфолио с несколькими темами, UI-эффектами, анимациями и аккуратной подачей персонального бренда.",
      stack: ["React JS", "React Bits", "GSAP", "SCSS", "Vercel SI"],
      impact: "Персональный бренд",
      img: "readme-page-preview.png",
      link: "https://kodersup-portfolio.vercel.app/",
      gitlink: "https://github.com/DenisVyukhin/portfolio-page-v1",
   },
   {
      name: "Kazinkov Bot",
      description:
         "Развлекательный Telegram-бот с игровой валютой, набором мини-игр, ИИ-интеграциями и сезонными активностями.",
      stack: ["Python", "Aiogram", "PostgreSQL", "SQLAlchemy", "Gemini AI"],
      impact: "Игровая экономика",
      img: "bot.png",
      link: "https://t.me/KazinkovBot",
      gitlink: "https://github.com/DenisVyukhin/",
   },
];

const stackGroups = [
   {
      title: "Фронтенд",
      imageId: "frontend-image",
      items: [
         ["HTML5", "html"],
         ["CSS3", "css"],
         ["JavaScript", "js"],
         ["React", "react"],
         ["Next.js", "next"],
         ["Tailwind", "tailwind"],
         ["P5.js", "p5js"],
      ],
   },
   {
      title: "Бекенд",
      imageId: "backend-image",
      items: [
         ["Python", "python"],
         ["Django", "django"],
         ["Node.js", "node"],
         ["PostgreSQL", "mysql"],
         ["MongoDB", "mongodb"],
      ],
   },
   {
      title: "Инструменты",
      imageId: "another-image",
      items: [
         ["Docker", "docker"],
         ["GitHub", "github"],
         ["Figma", "figma"],
         ["AI tools", "ai"],
      ],
   },
];

const highlights = [
   "Fullstack-разработка с 2021 года",
   "Рекордсмен по пауэрлифтингу",
   "Победитель Yandex Cup",
   "Делаю проекты от идеи до запуска",
];

const contacts = [
   {
      label: "Telegram",
      href: "https://t.me/KodersUp",
      className: "telegram",
      icon: FiSend,
   },
   {
      label: "GitHub",
      href: "https://github.com/DenisVyukhin/",
      className: "github",
      icon: FiGithub,
   },
   {
      label: "VKontakte",
      href: "https://vk.com/kodersup_iu",
      className: "vk",
      icon: FaVk,
   },
   {
      label: "Email",
      href: "mailto:denisvuhin16@gmail.com",
      className: "email",
      icon: FiMail,
   },
];

const HERO_IDLE_DURATION = 14000;
const HERO_TRACKING_LERP = 0.3;

function getHeroIdleAmplitudes() {
   if (typeof window === "undefined") {
      return { rotateX: 7, rotateY: 9 };
   }

   return window.matchMedia("(max-width: 980px)").matches
      ? { rotateX: 5, rotateY: 7 }
      : { rotateX: 7, rotateY: 9 };
}

function Home() {
   const heroObjectRef = useRef(null);
   const heroVisualRef = useRef(null);
   const isHeroHoveringRef = useRef(false);
   const heroIdleStartRef = useRef(null);
   const heroTargetRef = useRef({ rotateX: 0, rotateY: 0, shiftX: 0, shiftY: 0 });
   const heroCurrentRef = useRef({ rotateX: 0, rotateY: 0, shiftX: 0, shiftY: 0 });
   const [profileTiming, setProfileTiming] = useState({
      age: 17,
      experience: 5,
   });

   useEffect(() => {
      setProfileTiming(getProfileTiming());
   }, []);

   useEffect(() => {
      let frameId = 0;

      const applyHeroObjectMotion = () => {
         const object = heroObjectRef.current;
         if (!object) return;

         object.style.setProperty("--cursor-rotate-x", `${heroCurrentRef.current.rotateX.toFixed(2)}deg`);
         object.style.setProperty("--cursor-rotate-y", `${heroCurrentRef.current.rotateY.toFixed(2)}deg`);
         object.style.setProperty("--cursor-shift-x", `${heroCurrentRef.current.shiftX.toFixed(2)}px`);
         object.style.setProperty("--cursor-shift-y", `${heroCurrentRef.current.shiftY.toFixed(2)}px`);
      };

      const tick = (timestamp) => {
         if (heroIdleStartRef.current === null) {
            heroIdleStartRef.current = timestamp;
         }

         const target = heroTargetRef.current;
         const current = heroCurrentRef.current;
         const isHovering = isHeroHoveringRef.current;

         if (!isHovering) {
            const { rotateX, rotateY } = getHeroIdleAmplitudes();
            const progress =
               ((timestamp - heroIdleStartRef.current) % HERO_IDLE_DURATION) / HERO_IDLE_DURATION;
            const angle = progress * Math.PI * 2;

            target.rotateX = Math.sin(angle) * rotateX;
            target.rotateY = Math.cos(angle) * rotateY;
            target.shiftX = 0;
            target.shiftY = 0;
         }

         const isReturning =
            !isHovering &&
            (Math.abs(current.shiftX - target.shiftX) > 0.05 ||
               Math.abs(current.shiftY - target.shiftY) > 0.05 ||
               Math.abs(current.rotateX - target.rotateX) > 0.08 ||
               Math.abs(current.rotateY - target.rotateY) > 0.08);
         const lerp = isHovering || isReturning ? HERO_TRACKING_LERP : 1;

         current.rotateX += (target.rotateX - current.rotateX) * lerp;
         current.rotateY += (target.rotateY - current.rotateY) * lerp;
         current.shiftX += (target.shiftX - current.shiftX) * lerp;
         current.shiftY += (target.shiftY - current.shiftY) * lerp;

         applyHeroObjectMotion();
         frameId = window.requestAnimationFrame(tick);
      };

      frameId = window.requestAnimationFrame(tick);

      return () => window.cancelAnimationFrame(frameId);
   }, []);

   const { age, experience } = profileTiming;

   const handleHeroObjectMove = (event) => {
      const object = heroObjectRef.current;
      if (!object) return;

      const rect = object.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      heroTargetRef.current.rotateX = -y * 14;
      heroTargetRef.current.rotateY = x * 18;
      heroTargetRef.current.shiftX = x * 12;
      heroTargetRef.current.shiftY = y * 10;
   };

   const handleHeroObjectEnter = () => {
      isHeroHoveringRef.current = true;
      heroVisualRef.current?.classList.add("hero-visual-glow");
   };

   const handleHeroObjectLeave = () => {
      isHeroHoveringRef.current = false;
      heroVisualRef.current?.classList.remove("hero-visual-glow");
   };

   return (
      <main>
         <section className="hero-wrapper" aria-labelledby="hero-title">
            <div className="hero-content">
               <div className="hero-visual" ref={heroVisualRef}>
                  <div
                     ref={heroObjectRef}
                     className="hero-object"
                     onMouseEnter={handleHeroObjectEnter}
                     onMouseMove={handleHeroObjectMove}
                     onMouseLeave={handleHeroObjectLeave}
                     aria-label="KodersUp Core: разработка, AI и спортивная дисциплина"
                  >
                     <div className="core-shell">
                        <div className="core-header">
                           <span className="core-dot"></span>
                           <span>KodersUp Core</span>
                           <strong>online</strong>
                        </div>

                        <div className="core-screen">
                           <div className="terminal-lines" aria-hidden="true">
                              <span>deploy portfolio --clean-ui</span>
                              <span>connect ai.assistant()</span>
                              <span>telegram.bot.revenue += 50000</span>
                              <span>powerlifting.record = true</span>
                           </div>

                           <div className="core-pulse">
                              <div className="pulse-ring"></div>
                              <div className="pulse-ring delay-one"></div>
                              <div className="pulse-ring delay-two"></div>
                              <div className="pulse-center"><span>K</span></div>
                           </div>
                        </div>

                        <div className="core-footer">
                           <span>Next.js</span>
                           <span>Python</span>
                           <span>AI</span>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="hero-text">
                  <p className="eyebrow">KodersUp / Denis Vyuhin</p>
                  <h1 id="hero-title">
                     <span className="hero-title-stage">
                        <TextType
                           as="span"
                           className="text-type"
                           text={["Fullstack разработчик", "AI интегратор", "Cпортсмен"]}
                           typingSpeed={58}
                           pauseDuration={2200}
                           showCursor={true}
                        />
                        <span className="hero-title-ghost" aria-hidden="true">
                           Fullstack разработчик
                        </span>
                     </span>
                  </h1>
                  <p className="hero-lead">
                     {age} лет, {experience}+ лет в разработке. Создаю сайты, Telegram-ботов,
                     Android-приложения и продукты с ИИ: от прототипа и дизайна до backend-логики, базы данных
                     и аккуратного пользовательского интерфейса.
                  </p>

                  <div className="hero-actions">
                     <a className="primary-action" href="#projects">
                        Смотреть проекты
                        <FiArrowDown size={18} />
                     </a>
                     <a className="secondary-action" href="#contacts">
                        Связаться
                     </a>
                  </div>

               </div>

               <div className="hero-facts" aria-label="Ключевые факты">
                  {highlights.map((highlight) => (
                     <span key={highlight}>{highlight}</span>
                  ))}
               </div>
            </div>
         </section>

         <section className="projects-wrapper" aria-labelledby="projects">
            <hr />
            <p className="section-kicker">Selected works</p>
            <h2 id="projects" className="block-name">Проекты</h2>
            <div className="projects-grid">
               {projects.map((project) => (
                  <ProjectCard key={project.name} {...project} />
               ))}
            </div>
         </section>

         <section className="stack-wrapper" aria-labelledby="stack">
            <hr />
            <p className="section-kicker">Stack</p>
            <h2 id="stack" className="block-name">Стек</h2>
            <div className="stack-container">
               {stackGroups.map((group) => (
                  <article className="stack-block" key={group.title}>
                     <div className="text-content">
                        <h3>{group.title}</h3>
                        <div className="technology-container">
                           {group.items.map(([label, className]) => (
                              <span className={`technology ${className}`} key={label}>
                                 {label}
                              </span>
                           ))}
                        </div>
                     </div>
                     <div id={group.imageId} className="stack-image" aria-hidden="true" />
                  </article>
               ))}
            </div>
         </section>

         <section className="about-me-wrapper" aria-labelledby="about-me">
            <hr />
            <p className="section-kicker">About</p>
            <h2 id="about-me" className="block-name">Обо мне</h2>
            <div className="about-me-container">
               <div className="about-copy">
                  <p>
                     Меня зовут Денис. С раннего возраста мне было интересно разбираться в том,
                     как устроены сложные технологии и системы. Этот интерес привёл меня от конструирования
                     моделей и робототехники к программированию и созданию собственныхпроектов.
                  </p>
                  <p>
                     Сегодня я занимаюсь fullstack-разработкой, Telegram-ботами, мобильными
                     приложениями и ИИ-интеграциями. Для меня важно не только написать код,
                     но и создать продукт, который решает реальные задачи. Профессиональный спорт 
                     и звание рекордсмена по пауэрлифтингу помогли развить дисциплину,
                     ответственность и умение доводить начатое до результата.
                  </p>
               </div>

               <div className="about-stats" aria-label="Достижения">
                  <div>
                     <strong>Собственная IDE</strong>
                     <span>среда программирования для Android</span>
                  </div>
                  <div>
                     <strong>{experience}+ лет</strong>
                     <span>практики в разработке</span>
                  </div>
                  <div>
                     <strong>КМС</strong>
                     <span>рекордсмен по пауэрлифтингу</span>
                  </div>
               </div>

               <div className="resume-container">
                  <a href="/denis-vyuhin-resume.txt" download>
                     <FiDownload size={20} />
                     Скачать резюме
                  </a>
               </div>
            </div>
         </section>

         <section className="contacts-wrapper" aria-labelledby="contacts">
            <hr />
            <p className="section-kicker">Contact</p>
            <h2 id="contacts" className="block-name">Контакты</h2>
            <div className="contacts-content">
               <div className="contacts-container">
                  <h3>Отвечаю в течение 30 минут</h3>
                  <p>ツ</p>

                  <div className="contacts-list">
                     {contacts.map(({ label, href, className, icon: Icon }) => (
                        <a
                           href={href}
                           target={href.startsWith("http") ? "_blank" : undefined}
                           rel={href.startsWith("http") ? "noreferrer" : undefined}
                           className={`contact-block ${className}`}
                           key={label}
                        >
                           <Icon size={22} />
                           {label}
                        </a>
                     ))}
                  </div>
               </div>
            </div>
         </section>

         <Footer />
      </main>
   );
}

export default Home;
