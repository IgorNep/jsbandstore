const getTotalCountSingleItem = (item) => {
  return Number(item.price * item.quantity).toFixed(2);
};
export default getTotalCountSingleItem;
