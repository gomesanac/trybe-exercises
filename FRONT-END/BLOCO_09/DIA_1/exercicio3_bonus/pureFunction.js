const setPrice = (item, value) => {
  const newItem = Object.assign({}, item);
  newItem.price = value;
  return newItem;
};

const addToCart = (cart, item) => {
  const newCart = cart.slice();
  newCart.push(item);
  return newCart;
};

module.exports = {
  setPrice,
  addToCart
};
