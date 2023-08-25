import { render, screen } from '@testing-library/react';
import Home from '../app/(home)/page';

jest.mock('../services/trails', () => ({
  getTrails: () => Promise.resolve([]),
}));

describe('Home', () => {
  it('renders a heading', async () => {
    render(await Home());

    const heading = await screen.getByTestId('heading');

    expect(heading).toBeInTheDocument();
  });
});
