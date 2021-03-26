const getTotalCountInfo = (cartItems) => {
  const totalCountInfo = cartItems.reduce((acc, book) => {
    return acc + book.quantity;
  }, 0);
  return totalCountInfo;
};
export default getTotalCountInfo;
