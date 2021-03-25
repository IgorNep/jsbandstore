import axios from 'axios';
import apiService from './api';

jest.mock('axios');

const books = [
  {
    id: '1',
    data: '{"fieldId":"Monday13","owner":["Maxim"],"title":"Cook food"}',
  },
];
const response = { data: books };

describe('axios requests should work', () => {
  test('should fetch successfully data from an API', async () => {
    axios.get.mockResolvedValue(response);

    const data = await apiService.getData();
    expect(data).toEqual(books);
  });
});

describe('serviceApi should work', () => {
  let fn;
  beforeEach(() => {
    fn = jest.fn();
  });
  test('getData function should work', async () => {
    axios.get.mockResolvedValue(response);
    const getSomeData = async () => {
      await apiService.getData();
      fn();
    };
    await getSomeData();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  test('addData function should work', async () => {
    axios.post.mockResolvedValue(response);
    const addSomeData = async () => {
      await apiService.postData();
      fn();
    };
    await addSomeData();
    expect(fn).toHaveBeenCalledTimes(1);
  });
});
