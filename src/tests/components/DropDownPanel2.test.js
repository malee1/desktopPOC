import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import DropDownPanel2 from '../../components/DropDownPanel2';

describe('the panel renders', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<DropDownPanel2 />);
    expect(tree).toMatchSnapshot();
  });

  it('has one component', () => {
    const { getAllByTestId } = render(<DropDownPanel2 />);
    const container = getAllByTestId('drop-down-panel-2');
    expect(container.length).toBe(1);
  });
});
