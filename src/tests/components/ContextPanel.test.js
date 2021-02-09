import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';

import ContextPanel from '../../components/ContextPanel';

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
      fileId: '123456',
      roleProfile: 'Alpha',
      boltOn: ''
    }
  },
  accessibility: {
    accessibility: false
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
          <ContextPanel />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('it renders the components correctly for default users', () => {
  it('it renders the whole component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <ContextPanel />
      </Provider>
    );
    const container = getAllByTestId('context-panel');
    expect(container.length).toBe(1);
  });
  it('it renders the logo component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <ContextPanel />
      </Provider>
    );
    const container = getAllByTestId('logo');
    expect(container.length).toBe(1);
  });
  it('it renders the panel container component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <ContextPanel />
      </Provider>
    );
    const container = getAllByTestId('panel-container');
    expect(container.length).toBe(1);
  });
  it('it renders the 3 panels', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <ContextPanel />
      </Provider>
    );
    const container1 = getAllByTestId('panel-one');
    expect(container1.length).toBe(1);
    const container2 = getAllByTestId('panel-two');
    expect(container2.length).toBe(1);
    const container3 = getAllByTestId('panel-three');
    expect(container3.length).toBe(1);
  });
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
      fileId: '123456',
      roleProfile: 'Alpha',
      boltOn: 'Accessibility'
    }
  },
  accessibility: {
    accessibility: true
  }
});

describe('it renders the components correctly for users with accessibility needs', () => {
  it('it renders the whole component', () => {
    const { getAllByTestId } = render(
      <Provider store={store2}>
        <ContextPanel />
      </Provider>
    );
    const container = getAllByTestId('context-panel');
    expect(container.length).toBe(1);
  });

  it('it renders the correct panel 1', () => {
    const { getAllByTestId } = render(
      <Provider store={store2}>
        <ContextPanel />
      </Provider>
    );
    const container1 = getAllByTestId('panel-one-access');
    expect(container1.length).toBe(1);
  });
});
