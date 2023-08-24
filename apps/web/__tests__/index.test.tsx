import { render, screen } from '@testing-library/react';
import Home from '../app/(home)/page';

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />);

    const heading = screen.getByTestId('heading');

    expect(heading).toBeInTheDocument();
  });
});
