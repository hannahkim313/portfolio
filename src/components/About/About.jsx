import styles from './About.module.css';

const About = () => (
  <section>
    <div>
      <h2 id="about">About the Developer</h2>
      <h3 className={styles.subheading}>
        Hello! I&apos;m Hannah, a front-end web developer looking to transition
        into a role focused on JavaScript and React.
      </h3>
      <p>
        With a background in illustration and a strong eye for design, I am
        excited to bring a &quot;think outside the box&quot; approach to my
        technical endeavors. I aim to create innovative applications that are
        both user- and developer-friendly and ultimately contribute to software
        development focused on dynamism and scalability.
      </p>
    </div>
    <div>
      <img
        src="../src/assets/images/portrait-transparent.png"
        alt="Digital illustration of the author. Please do not copy or redistribute without permission."
      />
    </div>
  </section>
);

export default About;
