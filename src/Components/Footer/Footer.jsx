import styles from "./Footer.module.css";

function Footer() {
   return (
      <footer className={styles.footer}>
         <div className={styles.container}>
            <span>KodersUp {new Date().getFullYear()}</span>
            <span>React / Next.js</span>
            <a href="https://github.com/DenisVyuhin/portfolio-page-v1" target="_blank" rel="noreferrer">
               Код проекта
            </a>
         </div>
      </footer>
   );
}

export default Footer;
