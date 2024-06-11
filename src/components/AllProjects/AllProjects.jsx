import styles from './AllProjects.module.css';

const AllProjects = ({ children }) => (
  <>
    <section className={styles.allProjects}>
      <h2 id="projects">Featured Projects</h2>
      <h3 className={styles.subheading}>
        From browser games to innovative applications, these projects showcase
        my growth in both visual and technical front-end development.
      </h3>
      {children}
      <p className={styles.callOut}>
        Interested in seeing more of my work? Check out my{' '}
        <a href="https://github.com/hannahkim313">
          <strong>GitHub</strong>
        </a>
        !
      </p>
    </section>
    <div className={styles.divider} />
  </>
);

export default AllProjects;
