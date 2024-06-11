import styles from './Contact.module.css';

const Contact = () => (
  <section className={styles.contact}>
    <h2 id="contact">Let&apos;s Connect</h2>
    <h3 className="subheading">
      Get in touch to discuss exciting projects and opportunities
    </h3>
    <div className={styles.socials}>
      <a href="https://github.com/hannahkim313">
        <img src="../src/assets/images/github.svg" alt="GitHub" />
      </a>
      <a href="mailto:devhkim13@gmail.com">
        <img src="../src/assets/images/mail.svg" alt="Email" />
      </a>
    </div>
  </section>
);

export default Contact;
