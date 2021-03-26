const totalPriceInfo = (cartItems) => {
  const result = cartItems.reduce((acc, item) => {
    return acc + item.quantity * item.price;
  }, 0);
  return result.toFixed(2);
};

export default totalPriceInfo;
