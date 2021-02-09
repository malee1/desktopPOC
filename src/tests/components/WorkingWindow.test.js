import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';

import WorkingWindow from '../../components/WorkingWindow';

const mockStore = configureMockStore();
const store = mockStore({
  user: {
    data: {
      fileId: '123456',
      roleProfile: 'Alpha',
      boltOne: null
    }
  },
  urls: {
    urls: {
      urlOne: {
        name: 'test-1',
        url: 'test-url-1'
      },
      urlTwo: {
        name: 'test-2',
        url: 'test-url-2'
      },
      urlThree: {
        name: 'test-3',
        url: 'test-url-3'
      }
    }
  },
  iFrame: {
    iFrameUrl: 'test-url'
  }
});

const store2 = mockStore({
  user: {
    data: {
      fileId: '123456',
      roleProfile: 'Alpha',
      boltOn: 'Supervisor'
    }
  },
  urls: {
    urls: {
      urlOne: {
        name: 'test-1',
        url: 'test-url-1'
      },
      urlTwo: {
        name: 'test-2',
        url: 'test-url-2'
      },
      urlThree: {
        name: 'test-3',
        url: 'test-url-3'
      }
    }
  },
  iFrame: {
    iFrameUrl: 'test-url'
  }
});

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

describe('Panel renders correctly', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <WorkingWindow />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('it renders the component correctly for no bolt ons', () => {
  it('renders the whole component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <WorkingWindow />
      </Provider>
    );
    const panel = getAllByTestId('working-window');
    expect(panel.length).toBe(1);
  });
  it('renders the app-bar component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <WorkingWindow />
      </Provider>
    );
    const panel = getAllByTestId('app-bar');
    expect(panel.length).toBe(1);
  });
  it('renders the app-bar component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <WorkingWindow />
      </Provider>
    );
    const panel = getAllByTestId('iframe');
    expect(panel.length).toBe(1);
  });
});

describe('it renders the supervisor panel if the bolt on is active', () => {
  it('renders the supervisor panel', () => {
    const { getAllByTestId } = render(
      <Provider store={store2}>
        <WorkingWindow />
      </Provider>
    );
    const panel = getAllByTestId('supervisor-panel');
    expect(panel.length).toBe(1);
  });
});
