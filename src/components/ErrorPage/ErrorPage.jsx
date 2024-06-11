import { Link } from 'react-router-dom';
import styles from './ErrorPage.module.css';

const Error = () => (
  <main className={styles.mainError}>
    <section className={styles.error}>
      <h1 className={styles.hidden}>404</h1>
      <img
        className={styles.errorImg}
        src="../src/assets/images/404.png"
        alt="404: Page not found"
      />
      <p>Uh-oh! Looks like you hit a dead end.</p>
      <Link to="/">Back to home</Link>
    </section>
  </main>
);

export default Error;
