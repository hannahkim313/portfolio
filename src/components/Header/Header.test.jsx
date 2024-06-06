import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/test-utils';
import Header from './Header';

describe('rendered elements of the Header component', () => {
  it('renders the site title', () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  it('renders the "About" nav link', () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      '/#about'
    );
  });

  it('renders the "Projects" nav link', () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole('link', { name: 'Projects' })).toHaveAttribute(
      'href',
      '/#projects'
    );
  });

  it('renders the "Contact" nav link', () => {
    renderWithRouter(<Header />);

    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute(
      'href',
      '/#contact'
    );
  });
});
