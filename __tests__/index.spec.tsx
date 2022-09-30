import { render, screen } from '@testing-library/react';

import Home from '~/pages/index';

describe('Home', () => {
  it('renders main text', () => {
    render(<Home />);

    const mainText = screen.getByText('Next.js Starter Template!');

    expect(mainText).toBeInTheDocument();
  });
});
