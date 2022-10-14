import { render, screen } from '@testing-library/react';

import Hero from '~/modules/landing-page/components/Hero';

describe('Hero', () => {
  it('renders main text', () => {
    render(<Hero />);

    const mainText = screen.getByText(/Putri & Jodie/);

    expect(mainText).toBeInTheDocument();
  });
});
