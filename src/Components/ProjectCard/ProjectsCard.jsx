import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

import styles from "./ProjectCard.module.css";

function ProjectCard({ name, description, img, link, gitlink, stack = [], impact }) {
   return (
      <article className={styles.card}>
         <div
            className={styles.image}
            style={{ backgroundImage: `url(/${img})` }}
            aria-hidden="true"
         />

         <div className={styles.content}>
            <div>
               {impact && <span className={styles.impact}>{impact}</span>}
               <h3>{name}</h3>
               <p>{description}</p>
            </div>

            {stack.length > 0 && (
               <div className={styles.stack} aria-label={`Стек проекта ${name}`}>
                  {stack.map((item) => (
                     <span key={item}>{item}</span>
                  ))}
               </div>
            )}

            <div className={styles.actions}>
               <a className={styles.open} href={link} target="_blank" rel="noreferrer">
                  <FiExternalLink size={16} />
                  Открыть
               </a>
               <a className={styles.github} href={gitlink} target="_blank" rel="noreferrer">
                  <FaGithub size={18} />
                  GitHub
               </a>
            </div>
         </div>
      </article>
   );
}

export default ProjectCard;
