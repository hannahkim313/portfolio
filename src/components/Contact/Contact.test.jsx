import { screen } from '@testing-library/react';
import renderWithRouter from '../../utils/test-utils';
import Contact from './Contact';

describe('rendered elements of the Contact component', () => {
  it('renders the title', () => {
    renderWithRouter(<Contact />);

    expect(
      screen.getByRole('heading', { level: 2, name: /connect/i })
    ).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    renderWithRouter(<Contact />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveClass('subheading');
  });

  it("renders a link to the author's GitHub", () => {
    renderWithRouter(<Contact />);

    expect(screen.getByRole('link')).toHaveAttribute('href');
  });
});
