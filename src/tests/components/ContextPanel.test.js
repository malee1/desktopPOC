import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { cleanup } from '@testing-library/react';

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
