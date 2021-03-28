import goRoute from './goRoute';

test('should return appropriate routes', () => {
  expect(goRoute).toEqual({
    books: '/',
    book: '/books/:id',
    login: '/login',
    cart: '/cart',
    notFound: '*',
  });
});
