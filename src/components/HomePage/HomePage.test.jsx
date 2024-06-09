import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test-utils';
import HomePage from './HomePage';

describe('rendered elements of the HomePage component', () => {
  it('renders the main <div> container', () => {
    renderWithRouter(<HomePage />);

    expect(screen.getAllByRole('generic')[1]).toHaveClass(/mainContainer/i);
  });
});
