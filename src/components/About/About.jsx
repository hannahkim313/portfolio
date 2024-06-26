import portraitImgSrc from '../../assets/images/portrait-transparent.png';
import styles from './About.module.css';

const About = () => (
  <>
    <section className={styles.about}>
      <div className={styles.left}>
        <h2 id="about">About the Developer</h2>
        <h3>
          Hello! I&apos;m Hannah, a front-end web developer looking to
          transition into a role focused on JavaScript and React.
        </h3>
        <p>
          With a background in illustration and a strong eye for design, I am
          excited to bring a &quot;think outside the box&quot; approach to my
          technical endeavors. I aim to create innovative applications that are
          both user- and developer-friendly and ultimately contribute to
          software development focused on dynamism and scalability.
        </p>
        <p>
          Although my skill set mainly lies in front-end languages and
          frameworks such as HTML, CSS, JavaScript, and React, I am learning to
          work with backend languages and technologies like NodeJS, ExpressJS,
          and MongoDB. Moving forward, I plan to learn about advanced topics
          such as authentication, APIs, and testing to gain a better
          understanding of backend development. My goal is to have a more
          holistic view of a project to become a versatile front-end developer
          in collaborative settings.
        </p>
        <p>
          <strong>Web Development Skills:</strong>
        </p>
        <ul className={styles.skills}>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>RESTful APIs</li>
          <li>Jest</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB</li>
        </ul>
        <p>
          <strong>Web Technologies:</strong>
        </p>
        <ul className={styles.skills}>
          <li>Git</li>
          <li>NPM</li>
          <li>GitHub</li>
          <li>Visual Studio Code</li>
          <li>Chrome DevTools</li>
        </ul>
      </div>
      <img
        className={styles.authorImg}
        src={portraitImgSrc}
        alt="Digital illustration of the author"
      />
    </section>
    <div className={styles.divider} />
  </>
);

export default About;
