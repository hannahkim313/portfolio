import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import shoppingCartImgSrc from '../assets/images/project-shopping-cart.png';
import memoryCardImgSrc from '../assets/images/project-memory-card.png';
import battleshipImgSrc from '../assets/images/project-battleship.png';
import HomePage from './HomePage/HomePage';
import About from './About/About';
import AllProjects from './AllProjects/AllProjects';
import Contact from './Contact/Contact';
import ErrorPage from './ErrorPage/ErrorPage';
import Project from './Project/Project';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <HomePage>
          <About />
          <AllProjects>
            <Project
              projectName="Urban Thread (Mock Shopping Cart)"
              description="A mock e-commerce apparel website that offers a seamless online shopping experience. Similar to popular apparel brands' website, Urban Thread uses client-side routing and the FakeStore API to replicate the user experience and interaction of browsing and selecting products."
              concepts={[
                'React',
                'React Router',
                'FakeStoreAPI',
                'CSS Modules',
                'PropTypes',
                'Jest',
                'Vitest',
              ]}
              demoLink="https://shopping-cart-c0j.pages.dev/"
              repoLink="https://github.com/hannahkim313/shopping-cart"
              projectImgSrc={shoppingCartImgSrc}
            />
            <Project
              projectName="Animal Crossing Memory Card Game"
              description="A simple memory card game using the AmiiboAPI. With a focus on key React concepts, this project demonstrates how to manage state, hooks, and side effects."
              concepts={[
                'React',
                'State and Effects',
                'React Hooks',
                'AmiiboAPI',
              ]}
              demoLink="https://memory-card-ehz.pages.dev/"
              repoLink="https://github.com/hannahkim313/memory-card"
              projectImgSrc={memoryCardImgSrc}
              isInverted
            />
            <Project
              projectName="Battleship"
              description="A browser implementation of the classic game Battleship. Without the use of any frameworks, this JavaScript-based game highlights the importance of understanding programming fundamentals and the benefits of implementing a TDD-based environment during the developmental process."
              concepts={[
                'HTML',
                'CSS',
                'JavaScript',
                'Webpack',
                'Factory Functions',
                'Test-Driven Development (TDD)',
                'Jest',
              ]}
              demoLink="https://hannahkim313.github.io/battleship/"
              repoLink="https://github.com/hannahkim313/battleship"
              projectImgSrc={battleshipImgSrc}
            />
          </AllProjects>
          <Contact />
        </HomePage>
      ),
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
