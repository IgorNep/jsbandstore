import debounce from './index';

test('mock func should be called 1 time ', () => {
  jest.useFakeTimers();
  const mockFn = jest.fn();
  const debouncedFunc = debounce(mockFn, 100);
  debouncedFunc();
  jest.runAllTimers();
  expect(setTimeout).toHaveBeenCalledTimes(1);
});
