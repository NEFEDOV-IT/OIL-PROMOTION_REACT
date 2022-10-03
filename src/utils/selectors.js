export const getCards = state => {
  const { data, searchValue } = state.shop;

  if (!searchValue) return data;

  return data.filter(card => card.name.toLowerCase().includes(searchValue.toLowerCase()));
}
export const getCart = state => state.cart.cart;