import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => (
  <header>
    <h1>Hannah Kim | JavaScript & React Front-End Web Developer</h1>
    <nav className={styles.navLinks}>
      <ul>
        <li>
          <Link to="/#about" reloadDocument>
            About
          </Link>
        </li>
        <li>
          <Link to="/#projects" reloadDocument>
            Projects
          </Link>
        </li>
        <li>
          <Link to="/#contact" reloadDocument>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
