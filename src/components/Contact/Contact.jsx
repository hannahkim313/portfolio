import gitHubImgSrc from '../../assets/images/github.svg';
import mailImgSrc from '../../assets/images/mail.svg';
import styles from './Contact.module.css';

const Contact = () => (
  <section className={styles.contact}>
    <h2 id="contact">Let&apos;s Connect</h2>
    <h3 className="subheading">
      Get in touch to discuss exciting projects and opportunities
    </h3>
    <div className={styles.socials}>
      <a href="https://github.com/hannahkim313">
        <img src={gitHubImgSrc} alt="GitHub" />
      </a>
      <a href="mailto:devhkim13@gmail.com">
        <img src={mailImgSrc} alt="Email" />
      </a>
    </div>
  </section>
);

export default Contact;
