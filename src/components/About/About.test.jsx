import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/test-utils';
import About from './About';

describe('rendered elements of the About component', () => {
  it('renders the title', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('heading', { level: 2, name: /About/i }));
  });

  it('renders the subheading', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveClass(
      /subheading/i
    );
  });

  it('renders the description', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('paragraph')).toBeInTheDocument();
  });

  it('renders the author image', () => {
    renderWithRouter(<About />);

    expect(screen.getByRole('img', { name: /author/i }));
  });
});
