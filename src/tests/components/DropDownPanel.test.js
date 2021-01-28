import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import DropDownPanel from '../../components/DropDownPanel';

describe('the panel renders', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<DropDownPanel />);
    expect(tree).toMatchSnapshot();
  });

  it('has one component', () => {
    const { getAllByTestId } = render(<DropDownPanel />);
    const container = getAllByTestId('drop-down-panel');
    expect(container.length).toBe(1);
  });
});
