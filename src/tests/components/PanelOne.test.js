import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';

import PanelOne from '../../components/PanelOne';

afterEach(cleanup);

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

describe('the panel renders', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PanelOne />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('has one component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <PanelOne />
      </Provider>
    );
    const container = getAllByTestId('panel-one');
    expect(container.length).toBe(1);
  });

  it('has four items', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <PanelOne />
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
        <PanelOne />
      </Provider>
    );
    const container = getAllByText('Test Test');
    expect(container.length).toBe(1);
  });
});
