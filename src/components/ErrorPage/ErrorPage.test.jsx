import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter, setRoutes } from '../../utils/test-utils';
import ErrorPage from './ErrorPage';
import HomePage from '../HomePage/HomePage';

describe('rendered elements of the ErrorPage component', () => {
  it('renders the 404 page', () => {
    renderWithRouter(<ErrorPage />, { route: '/error' });

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('404');
  });

  it('renders the 404 error image', () => {
    renderWithRouter(<ErrorPage />, { route: '/error' });

    expect(screen.getByRole('presentation')).toHaveAttribute(
      'src',
      '../src/assets/images/404.png'
    );
  });

  it('renders the 404 error message', () => {
    renderWithRouter(<ErrorPage />, { route: '/error' });

    expect(screen.getByText(/uh-oh/i)).toBeInTheDocument();
  });

  it('renders a nav link to the home page', () => {
    renderWithRouter(<ErrorPage />, { route: '/error' });

    expect(screen.getByRole('link')).toHaveAttribute('href', '/');
  });
});

describe('navigation of links', () => {
  it('redirects the user to the home page after clicking on the nav link', async () => {
    const user = userEvent.setup();

    renderWithRouter(setRoutes('/error', <ErrorPage />, '/', <HomePage />), {
      route: '/error',
    });

    const link = screen.getByRole('link');
    await user.click(link);

    expect(
      screen.getByRole('heading', { level: 1, name: /hannah kim/i })
    ).toBeInTheDocument();
  });
});
