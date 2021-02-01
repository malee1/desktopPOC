import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from 'redux-mock-store';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';

import IFrame from '../../components/IFrame';

const mockStore = configureMockStore();
const store = mockStore({
  iFrame: {
    iFrameUrl: 'https://freeklime.co.uk'
  }
});

describe('the iFrame renders', () => {
  it('matches the snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <IFrame />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('there is one component', () => {
    const { getAllByTestId } = render(
      <Provider store={store}>
        <IFrame />
      </Provider>
    );
    const container = getAllByTestId('iframe');
    expect(container.length).toBe(1);
  });
});
