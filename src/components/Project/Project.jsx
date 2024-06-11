import { v4 as uuidv4 } from 'uuid';
import styles from './Project.module.css';

const Project = ({
  projectName,
  description,
  concepts = [],
  demoLink,
  repoLink,
  projectImgSrc,
}) => (
  <article>
    <div className={styles.info}>
      <h4>{projectName}</h4>
      <p>{description}</p>
      <div className={styles.iconTextWrapper}>
        <img src="../src/assets/images/code.svg" alt="" />
        <p>Technical concepts</p>
      </div>
      <div className={styles.concepts}>
        {concepts.map((concept) => (
          <p key={uuidv4()} className={styles.concept}>
            {concept}
          </p>
        ))}
      </div>
      <div className={styles.links}>
        <a href={demoLink}>Live Demo</a>
        <a href={repoLink}>GitHub Repo</a>
      </div>
    </div>
    <img src={projectImgSrc} alt="" />
  </article>
);

export default Project;
