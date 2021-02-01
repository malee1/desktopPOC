import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';

import PanelTwo from '../../components/PanelTwo';

const mockStore = configureMockStore();
const store = mockStore({
  customer: {
    data: {
      name: 'Test Test',
      dob: '1111',
      uRef: '2222',
      tel: '3333',
      timeWait: 'aaaa',
      context: 'bbbb',
      recording: 'cccc',
      callInfo: 'dddd',
      alerts: 'Important Info 1',
      service: 'Alert1',
      keyInfo: 'Info 1',
      auth: 'Approved'
    }
  },
  user: {
    data: {
      fileId: '123456'
    }
  }
});

const store2 = mockStore({
  customer: {
    data: {
      name: 'Test Test',
      dob: '1111',
      uRef: '2222',
      tel: '3333',
      timeWait: 'aaaa',
      context: 'bbbb',
      recording: 'cccc',
      callInfo: 'dddd',
      alerts: 'Important Info 1',
      service: 'Alert1',
      keyInfo: 'Info 1',
      auth: 'Approved'
    }
  },
  user: {
    data: {
      fileId: '234567',
      roleProfile: 'Gamma',
      boltOn: 'none'
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
          <PanelTwo />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has one component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <PanelTwo />
      </Provider>
    );
    const container = getAllByTestId('panel-two');
    expect(container.length).toBe(1);
  });

  it('has four items', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <PanelTwo />
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
        <PanelTwo />
      </Provider>
    );
    // const container = getAllByText('Test Test');
    expect(getAllByText('aaaa').length).toBe(1);
    expect(getAllByText('bbbb').length).toBe(1);
    expect(getAllByText('cccc').length).toBe(1);
    expect(getAllByText('dddd').length).toBe(1);
  });
});

describe('button click renders correct drop panel', () => {
  it('shows Drop Panel 1 on button click', () => {
    const { getByText, getAllByTestId } = render(
      <Provider store={store}>
        <PanelTwo />
      </Provider>
    );
    const btn = getByText('More Context');
    fireEvent.click(btn);
    const dropPanel = getAllByTestId('drop-down-panel');
    expect(dropPanel.length).toBe(1);
  });
});

describe('button click renders correct drop panel', () => {
  it('shows Drop Panel 2 on button click', () => {
    const { getByText, getAllByTestId } = render(
      <Provider store={store2}>
        <PanelTwo />
      </Provider>
    );
    const btn = getByText('More Context');
    fireEvent.click(btn);
    const dropPanel = getAllByTestId('drop-down-panel-2');
    expect(dropPanel.length).toBe(1);
  });
});
