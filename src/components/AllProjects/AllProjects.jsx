import styles from './AllProjects.module.css';

const AllProjects = ({ children }) => (
  <section>
    <h2 id="projects">Featured Projects</h2>
    <h3 className={styles.subheading}>
      From browser games to innovative applications, these projects showcase my
      growth in both visual and technical front-end development.
    </h3>
    {children}
    <p>
      Interested in seeing more of my work? Check out my
      <a href="https://github.com/hannahkim313"> GitHub</a>!
    </p>
  </section>
);

export default AllProjects;
