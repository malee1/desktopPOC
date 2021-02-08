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
      fileId: '123456'
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
  it('renders one component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <WorkingWindow />
      </Provider>
    );
    const panel = getAllByTestId('working-window');
    expect(panel.length).toBe(1);
  });
});
