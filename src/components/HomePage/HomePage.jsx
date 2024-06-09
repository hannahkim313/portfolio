import Footer from '../App/Footer/Footer';
import Header from '../Header/Header';
import styles from './HomePage.module.css';

const HomePage = ({ children }) => (
  <div className={styles.mainContainer}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default HomePage;
