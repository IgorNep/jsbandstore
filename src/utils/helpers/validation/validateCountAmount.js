const validateCountAmount = (value, count) => !!(value >= 0 && value <= count);
const validateCountOnLimit = (value, count) => value > count;

export { validateCountOnLimit, validateCountAmount };
