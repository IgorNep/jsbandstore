/* eslint-disable prefer-rest-params */
/* eslint-disable func-names */
const debounce = (fn, ms = 500) => {
  let timeout;
  return function () {
    const fnCall = () => {
      fn.apply(this, arguments);
    };
    clearTimeout(timeout);

    timeout = setTimeout(fnCall, ms);
  };
};
export default debounce;
