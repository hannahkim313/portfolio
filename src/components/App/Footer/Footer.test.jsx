import { screen } from '@testing-library/react';
import renderWithRouter from '../../../utils/test-utils';
import Footer from './Footer';

describe('rendered elements of the Footer component', () => {
  it('renders the site title', () => {
    renderWithRouter(<Footer />);

    expect(screen.getByText(/Hannah Kim/i)).toBeInTheDocument();
  });

  it('renders the "About" nav link', () => {
    renderWithRouter(<Footer />);

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/#about'
    );
  });

  it('renders the "Projects" nav link', () => {
    renderWithRouter(<Footer />);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '/#projects'
    );
  });

  it('renders the "Contact" nav link', () => {
    renderWithRouter(<Footer />);

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '/#contact'
    );
  });
});
