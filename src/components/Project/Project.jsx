import { v4 as uuidv4 } from 'uuid';
import styles from './Project.module.css';

const Project = ({
  projectName,
  description,
  achievements = [],
  concepts = [],
  demoLink,
  repoLink,
  projectImgSrc,
  isInverted = false,
}) => {
  const info = (
    <div className={styles.info}>
      <h4>{projectName}</h4>
      <p>{description}</p>
      <p>
        <strong>Achievements:</strong>
      </p>
      <ul>
        {achievements.map((achievement) => (
          <li key={uuidv4()} className={styles.achievement}>
            {achievement}
          </li>
        ))}
      </ul>
      <p>
        <strong>Technical concepts:</strong>
      </p>
      <ul className={styles.concepts}>
        {concepts.map((concept) => (
          <li key={uuidv4()} className={styles.concept}>
            {concept}
          </li>
        ))}
      </ul>
      <div className={styles.links}>
        <a href={demoLink}>Live Demo</a>
        <a href={repoLink}>GitHub Repo</a>
      </div>
    </div>
  );

  const image = (
    <img className={styles.projectImg} src={projectImgSrc} alt="" />
  );

  return (
    <article
      className={`${styles.project} ${isInverted ? styles.inverted : ''}`}
    >
      {isInverted ? image : info}
      {isInverted ? info : image}
    </article>
  );
};

export default Project;
