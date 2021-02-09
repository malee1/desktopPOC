import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';

import PanelOneAccess from '../../components/PanelOneAccess';

const mockStore = configureMockStore();
const store = mockStore({
  customer: {
    data: {
      name: 'Test Test',
      dob: '1111',
      uRef: '2222',
      tel: '3333',
      timeWait: '10 mins',
      context: 'test test',
      recording: 'Inactive',
      callInfo: 'ABCDE',
      alerts: 'Important Info 1',
      service: 'Alert1',
      keyInfo: 'Info 1',
      auth: 'Approved'
    }
  }
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('the panel renders correctly', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PanelOneAccess />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has 4 accordian sections', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <PanelOneAccess />
      </Provider>
    );
    const container = getAllByTestId('accordian');
    expect(container.length).toBe(4);
  });
});

describe('button click works', () => {
  it('on click the function is called', () => {
    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <PanelOneAccess />
      </Provider>
    );
    const btn = getByText('More Info');
    fireEvent.click(btn);
    const dropPanel = getAllByTestId('drop-down-panel');
    expect(dropPanel.length).toBe(1);
  });
});
