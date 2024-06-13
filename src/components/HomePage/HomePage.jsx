import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import styles from './HomePage.module.css';

const HomePage = ({ children }) => (
  <div className={styles.mainContainer}>
    <Header />
    <main className={styles.mainHome}>{children}</main>
    <Footer />
  </div>
);

export default HomePage;
