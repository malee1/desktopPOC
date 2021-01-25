import { getCustomerApi, getUrlsApi, getUserApi } from '../../constants/api';

describe('routes from api calls exist', () => {
  it('contains the expected urls', () => {
    expect(getCustomerApi).toBeTruthy();
    expect(getUrlsApi).toBeTruthy();
    expect(getUserApi).toBeTruthy();
  });
});

const testCustomerApi = 'http://localhost:3002/getcustomer';
const testUrlsApi = 'http://localhost:3002/geturls';
const testUserApi = 'http://localhost:3002/getuser';

describe('API content is correct', () => {
  it('containes correct urls', () => {
    expect(getCustomerApi).toEqual(testCustomerApi);
    expect(getUrlsApi).toEqual(testUrlsApi);
    expect(getUserApi).toEqual(testUserApi);
  });
});
