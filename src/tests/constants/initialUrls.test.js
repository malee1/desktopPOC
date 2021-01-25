import urls from '../../constants/initilUrls';

describe('blank url objects to exists', () => {
  it('there is a blank url object', () => {
    expect(urls).toBeTruthy();
  });

  describe('there are 3 url objects', () => {
    const number = Object.keys(urls).length;
    expect(number).toBe(3);
  });
});
