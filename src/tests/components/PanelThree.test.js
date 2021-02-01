import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';

import PanelThree from '../../components/PanelThree';

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
      alerts: 'aaaa',
      service: 'bbbb',
      keyInfo: 'cccc',
      auth: 'dddd'
    }
  }
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('the panel renders', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PanelThree />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has one component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <PanelThree />
      </Provider>
    );
    const container = getAllByTestId('panel-three');
    expect(container.length).toBe(1);
  });

  it('has four items', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <PanelThree />
      </Provider>
    );
    const container = getAllByTestId('item');
    expect(container.length).toBe(4);
  });
});

describe('it shows the correct content', () => {
  it('has the correct name', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <PanelThree />
      </Provider>
    );
    // const container = getAllByText('Test Test');
    expect(getAllByText('aaaa').length).toBe(1);
    expect(getAllByText('bbbb').length).toBe(1);
    expect(getAllByText('cccc').length).toBe(1);
    expect(getAllByText('dddd').length).toBe(1);
  });
});

describe('button click works', () => {
  it('on click the function is called', () => {
    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <PanelThree />
      </Provider>
    );
    const btn = getByText('More Alert Details');
    fireEvent.click(btn);
    const dropPanel = getAllByTestId('drop-down-panel');
    expect(dropPanel.length).toBe(1);
  });
});
