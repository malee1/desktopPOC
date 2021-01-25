import data from '../../constants/customerTemplate';

describe('the default customer data object exists', () => {
  it('there is a default customer data object', () => {
    expect(data).toBeTruthy();
  });
});
