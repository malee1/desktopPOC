import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';

import renderer from 'react-test-renderer';
import { cleanup, render } from '@testing-library/react';

import AccessibilityMenu from '../../components/AccessibilityMenu';

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});

const mockStore = configureMockStore();
const store = mockStore({
  accessibility: {
    accessibility: false
  }
});

describe('panel renders correctly', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <AccessibilityMenu />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('has one component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <AccessibilityMenu />
      </Provider>
    );
    const container = getAllByTestId('accessibility-menu');
    expect(container.length).toBe(1);
  });
  it('has one button', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <AccessibilityMenu />
      </Provider>
    );
    const container = getAllByTestId('button');
    expect(container.length).toBe(1);
  });
});
