import { screen } from '@testing-library/react';
import { renderWithRouter } from '../../utils/test-utils';
import Project from './Project';

const projectName = 'Test';
const description = 'This is a sample description.';
const concepts = ['React', 'React-Router-DOM'];
const demoLink = 'demoLink';
const repoLink = 'repoLink';

describe('rendered elements of a Project component', () => {
  it('renders the project name', () => {
    renderWithRouter(
      <Project
        projectName={projectName}
        description={description}
        concepts={concepts}
        demoLink={demoLink}
        repoLink={repoLink}
      />
    );

    expect(
      screen.getByRole('heading', { level: 4, name: projectName })
    ).toBeInTheDocument();
  });

  it('renders the project description', () => {
    renderWithRouter(
      <Project
        projectName={projectName}
        description={description}
        concepts={concepts}
        demoLink={demoLink}
        repoLink={repoLink}
      />
    );

    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('renders the technical concepts', () => {
    renderWithRouter(
      <Project
        projectName={projectName}
        description={description}
        concepts={concepts}
        demoLink={demoLink}
        repoLink={repoLink}
      />
    );

    expect(screen.getByText(concepts[0])).toBeInTheDocument();
    expect(screen.getByText(concepts[1])).toBeInTheDocument();
  });

  it("renders the nav link to the project's live demo", () => {
    renderWithRouter(
      <Project
        projectName={projectName}
        description={description}
        concepts={concepts}
        demoLink={demoLink}
        repoLink={repoLink}
      />
    );

    expect(screen.getByRole('link', { name: 'Live Demo' })).toHaveAttribute(
      'href',
      demoLink
    );
  });

  it("renders the nav link to the project's GitHub repo", () => {
    renderWithRouter(
      <Project
        projectName={projectName}
        description={description}
        concepts={concepts}
        demoLink={demoLink}
        repoLink={repoLink}
      />
    );

    expect(screen.getByRole('link', { name: 'GitHub Repo' })).toHaveAttribute(
      'href',
      repoLink
    );
  });
});
