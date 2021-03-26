import alertSelector from './alertSelectors';

const mockAlert = { title: 'Some alert', type: 'success' };
const dummyState = {
  alert: mockAlert,
};
describe('should return appropriate selector', () => {
  test('should return appropriate alert ', () => {
    expect(alertSelector(dummyState)).toEqual(mockAlert);
  });
  test('should NOT return appropriate alert ', () => {
    expect(alertSelector(dummyState)).not.toEqual({
      title: 'some other alert',
      type: 'danger',
    });
  });
});
