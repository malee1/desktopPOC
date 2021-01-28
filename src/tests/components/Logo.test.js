import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import Logo from '../../components/Logo';

describe('The Logo component is present', () => {
  it('snapshot matches', () => {
    const tree = renderer.create(<Logo />);
    expect(tree).toMatchSnapshot();
  });

  it('renders one component', () => {
    const { getAllByTestId } = render(<Logo />);
    const container = getAllByTestId('logo');
    expect(container.length).toBe(1);
  })
});
