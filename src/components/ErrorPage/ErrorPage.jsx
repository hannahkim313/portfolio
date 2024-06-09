import { Link } from 'react-router-dom';

const Error = () => (
  <section>
    <h1>404</h1>
    <img src="../src/assets/images/404.png" alt="" />
    <p>Uh-oh! Looks like you hit a dead end.</p>
    <Link to="/">Back to home</Link>
  </section>
);

export default Error;
