import Footer from '../App/Footer/Footer';
import Header from '../Header/Header';

const HomePage = ({ children }) => (
  <div>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default HomePage;
