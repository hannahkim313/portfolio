import { v4 as uuidv4 } from 'uuid';
import codeImgSrc from '../../assets/images/code.svg';
import styles from './Project.module.css';

const Project = ({
  projectName,
  description,
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
      <div className={styles.iconTextWrapper}>
        <img src={codeImgSrc} alt="" />
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
