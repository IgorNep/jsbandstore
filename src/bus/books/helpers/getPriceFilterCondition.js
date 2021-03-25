const getPriceFilterCondition = (priceValue) => {
  switch (priceValue) {
    case 1:
      return (book) => book.price > 0 && book.price <= 25;
    case 2:
      return (book) => book.price > 25 && book.price <= 50;
    case 3:
      return (book) => book.price > 50;
    default:
      return (book) => book;
  }
};

export default getPriceFilterCondition;
