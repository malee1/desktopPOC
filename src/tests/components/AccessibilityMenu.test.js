import React from 'react';

import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';

import AccessibilityMenu from '../../components/AccessibilityMenu';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('panel renders correctly', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<AccessibilityMenu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has one component', () => {
    const { getAllByTestId } = render(<AccessibilityMenu />);
    const container = getAllByTestId('accessibility-menu');
    expect(container.length).toBe(1);
  });
  it('has one button', () => {
    const { getAllByTestId } = render(<AccessibilityMenu />);
    const container = getAllByTestId('button');
    expect(container.length).toBe(1);
  });
});
