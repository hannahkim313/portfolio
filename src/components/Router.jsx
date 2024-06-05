import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import AllProjects from './AllProjects/AllProjects';
import Contact from './Contact/Contact';
import ErrorPage from './ErrorPage/ErrorPage';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <HomePage>
          <About />
          <AllProjects />
          <Contact />
        </HomePage>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
