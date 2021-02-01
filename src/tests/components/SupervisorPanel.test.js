import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';

import SupervisorPanel from '../../components/SupervisorPanel';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Panel renders correctly', () => {
  it('matches the snapshot', () => {
    const tree = renderer.create(<SupervisorPanel />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('renders one component', () => {
    const { getAllByTestId } = render(<SupervisorPanel />);
    const panel = getAllByTestId('supervisor-panel');
    expect(panel.length).toBe(1);
  });
});

describe('it renders 2 buttons', () => {
  it('has two buttons', () => {
    const { getAllByTestId } = render(<SupervisorPanel />);
    const buttons = getAllByTestId('button');
    expect(buttons.length).toBe(2);
  });
});

describe('the metrics panel displays correctly', () => {
  it('shows the metrics drawer when the metrics b utton  is clicked', () => {
    const { getByText, getAllByTestId } = render(<SupervisorPanel />);
    const btn = getByText('View Metrics');
    fireEvent.click(btn);
    const drawer = getAllByTestId('metrics-drawer');
    expect(drawer.length).toBe(1);
  });
  it('has the right text in the metrics panel', () => {
    const { getByText, getAllByTestId } = render(<SupervisorPanel />);
    const btn = getByText('View Metrics');
    fireEvent.click(btn);
    const text = getAllByTestId('metrics-text');
    expect(text.length).toBe(6);
  });
  it('displays the placeholder image', () => {
    const { getByText, getAllByTestId } = render(<SupervisorPanel />);
    const btn = getByText('View Metrics');
    fireEvent.click(btn);
    const img = getAllByTestId('image');
    expect(img.length).toBe(1);
  });
  it('closes the drawer when close button clicked', () => {
    const { getByText, getAllByTestId } = render(<SupervisorPanel />);
    const btn = getByText('View Metrics');
    fireEvent.click(btn);
    const closeBtn = getByText('Close');
    fireEvent.click(closeBtn);
    const buttons = getAllByTestId('button');
    expect(buttons.length).toBe(2);
  });
});

describe('the links panel displays correctly', () => {
  it('shows the links drawer when the links button is clicked', () => {
    const { getByText, getAllByTestId } = render(<SupervisorPanel />);
    const btn = getByText('View Links');
    fireEvent.click(btn);
    const drawer = getAllByTestId('links-drawer');
    expect(drawer.length).toBe(1);
  });
  it('has the right text in the links panel', () => {
    const { getByText, getAllByTestId } = render(<SupervisorPanel />);
    const btn = getByText('View Links');
    fireEvent.click(btn);
    const text = getAllByTestId('links-text');
    expect(text.length).toBe(9);
  });
  it('closes the drawer when close button clicked', () => {
    const { getByText, getAllByTestId } = render(<SupervisorPanel />);
    const btn = getByText('View Links');
    fireEvent.click(btn);
    const closeBtn = getByText('Close');
    fireEvent.click(closeBtn);
    const buttons = getAllByTestId('button');
    expect(buttons.length).toBe(2);
  });
});
