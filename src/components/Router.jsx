import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import inventoryImgSrc from '../assets/images/project-inventory.png';
import shoppingCartImgSrc from '../assets/images/project-shopping-cart.png';
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
              projectName="InventoryMate (Inventory Management Application)"
              description="Built a scalable inventory management application using a MVC (Models, Views, Controllers) architecture, allowing users to manage categories and items using CRUD (Create, Read, Update, Delete) operations."
              achievements={[
                'Managed data using asynchronous functions to handle MongoDB queries that retrieve and manipulate data.',
                'Integrated the express-validator middleware to validate user inputs, reducing invalid data submissions by 90%.',
              ]}
              concepts={[
                'Node.js',
                'Express.js',
                'MongoDB',
                'Mongoose',
                'MVC',
                'CRUD',
                'Async/Await',
                'Express-Validator',
              ]}
              demoLink="https://scented-rowan-star.glitch.me/catalog"
              repoLink="https://github.com/hannahkim313/inventory-app"
              projectImgSrc={inventoryImgSrc}
            />
            <Project
              projectName="Urban Thread (Mock Shopping Cart)"
              description="Developed a mock shopping cart application to simulate the shopping experience similar to that of real-world e-commerce platforms. Users can browse product listings, add items to their cart, adjust quantities, and view their cart/order summary."
              achievements={[
                'Implemented client-side routing with React Router for smooth navigation between 4 pages.',
                'Fetched and handled data from a RESTful API to display 10 product data across two categories dynamically.',
                'Optimized responsiveness across desktop and mobile devices, enhancing user experience and accessibility.',
              ]}
              concepts={[
                'React',
                'React Router',
                'RESTful API',
                'FakeStoreAPI',
                'CSS Modules',
                'PropTypes',
                'Jest',
                'Vitest',
              ]}
              demoLink="https://shopping-cart-c0j.pages.dev/"
              repoLink="https://github.com/hannahkim313/shopping-cart"
              projectImgSrc={shoppingCartImgSrc}
              isInverted
            />
            <Project
              projectName="Battleship"
              description="Created a browser implementation of the classic game Battleship using JavaScript, which features a responsive user interface including the ability to place ships, guess opponent’s ship locations, and track hits and misses."
              achievements={[
                'Utilized a Test-Driven Development (TDD) methodology to create 20+ unit tests, reducing bugs by 30% and enforcing code reliability.',
                "Applied Object-Oriented Programming (OOP) principles and a factory design pattern to create and manage 4 core game objects, separating DOM manipulation from application logic to reduce tight coupling and improve the application's scalability.",
              ]}
              concepts={[
                'HTML',
                'CSS',
                'JavaScript',
                'Webpack',
                'Jest',
                'Test-Driven Development (TDD)',
                'Object-Oriented Programming (OOP)',
                'Factory Design Pattern',
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
