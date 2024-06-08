import { Link } from 'react-router-dom';

const Footer = () => (
  <footer>
    <p>Hannah Kim | JavaScript & React Front-End Web Developer</p>
    <nav>
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
  </footer>
);

export default Footer;
