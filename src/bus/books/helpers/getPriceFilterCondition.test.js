import getPriceFilterCondition from './getPriceFilterCondition';

const booksItems = [
  {
    price: 1,
    title: '1',
  },
  {
    price: 25,
    title: '25',
  },
  { price: 26, title: '26' },
  {
    price: 30,
    title: '30',
  },
  {
    price: 50,
    title: '50',
  },
  { price: 52, title: '52' },
];
describe('Function helper should return proper values', () => {
  test('Should filter items with no price filter value and newBookArr length should be 6', () => {
    const newBookArr = booksItems.filter(getPriceFilterCondition(0));
    expect(newBookArr.length).toBe(6);
  });
  test('Should filter items with price 0 - 25 and newBookArr length should be 2', () => {
    const newBookArr = booksItems.filter(getPriceFilterCondition(1));
    expect(newBookArr.length).toBe(2);
  });
  test('Should filter items with price 25 - 50 and newBookArr length should be 3', () => {
    const newBookArr = booksItems.filter(getPriceFilterCondition(2));
    expect(newBookArr.length).toBe(3);
  });
  test('Should filter items with price more 50 and newBookArr length should be 1', () => {
    const newBookArr = booksItems.filter(getPriceFilterCondition(3));
    expect(newBookArr.length).toBe(1);
  });
});
