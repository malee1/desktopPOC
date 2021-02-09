import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { setIFrame } from '../../redux/actions';

import AppBar from '../../components/AppBar';

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
        name: 'test1',
        url: 'testUrlOne'
      },
      urlTwo: {
        name: 'test2',
        url: 'testUrlTwo'
      },
      urlThree: {
        name: 'test3',
        url: 'testUrlThree'
      }
    }
  },
  accessibility: {
    accessibility: false
  }
});

const store2 = mockStore({
  user: {
    data: {
      fileId: '567890',
      roleProfile: 'Alpha',
      boltOn: 'Accessibility'
    }
  },
  urls: {
    urls: {
      urlOne: {
        name: 'test1',
        url: 'testUrlOne'
      },
      urlTwo: {
        name: 'test2',
        url: 'testUrlTwo'
      },
      urlThree: {
        name: 'test3',
        url: 'testUrlThree'
      }
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

describe('panel renders correctly', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <AppBar />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('it renders the right number of buttons', () => {
  it('displays three buttons', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    const buttons = getAllByTestId('button');
    expect(buttons.length).toBe(3);
  });
  it('displays the right text on the button', () => {
    const { getAllByText } = render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    const buttonOne = getAllByText('test1');
    const buttonTwo = getAllByText('test2');
    const buttonThree = getAllByText('test3');
    expect(buttonOne.length).toBe(1);
    expect(buttonTwo.length).toBe(1);
    expect(buttonThree.length).toBe(1);
  });
});

store.dispatch = jest.fn();

describe('it dispatches actions on click', () => {
  it('dispatches setIFrame on button 1 click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    const button = getByText('test1');
    fireEvent.click(button);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(setIFrame('testUrlOne'));
  });
  it('dispatches setIFrame on button 2 click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    const button = getByText('test2');
    fireEvent.click(button);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(setIFrame('testUrlTwo'));
  });
  it('dispatches setIFrame on button 3 click', () => {
    const { getByText } = render(
      <Provider store={store}>
        <AppBar />
      </Provider>
    );
    const buttonOne = getByText('test3');
    fireEvent.click(buttonOne);
    expect(store.dispatch).toHaveBeenCalledTimes(1);
    expect(store.dispatch).toHaveBeenCalledWith(setIFrame('testUrlThree'));
  });
});

describe('it shows the accessibility button if the bolt on is present on the user profile', () => {
  it('displays the button correctly', () => {
    const { getAllByTestId } = render(
      <Provider store={store2}>
        <AppBar />
      </Provider>
    );
    const button = getAllByTestId('button-accessibility');
    expect(button.length).toBe(1);
  });
});

describe('The button displays the accessibility modal', () => {
  it('displays the button correctly', () => {
    const { getAllByTestId, getByText } = render(
      <Provider store={store2}>
        <AppBar />
      </Provider>
    );
    const button = getByText('Display');
    fireEvent.click(button);
    const modal = getAllByTestId('accessibility-menu');
    expect(modal.length).toBe(1);
  });
});
