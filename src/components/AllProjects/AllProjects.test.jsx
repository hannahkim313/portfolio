import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test-utils';
import AllProjects from './AllProjects';
import Project from '../Project/Project';

describe('rendered elements of the Projects component', () => {
  it('renders the title', () => {
    renderWithRouter(<AllProjects />);

    expect(
      screen.getByRole('heading', { level: 2, name: /projects/i })
    ).toBeInTheDocument();
  });

  it('renders the subheading', () => {
    renderWithRouter(<AllProjects />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveClass(
      /subheading/i
    );
  });

  it('renders all three Project components', () => {
    renderWithRouter(
      <AllProjects>
        <Project />
        <Project />
        <Project />
      </AllProjects>
    );

    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  it("renders the callout with a nav link to the author's GitHub repo", () => {
    renderWithRouter(<AllProjects />);

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument();
  });
});
