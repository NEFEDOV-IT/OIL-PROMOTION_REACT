import {ICards, ICart} from "../types/states.useSelector";

export const getCards = (state: ICards) => state.shop.data;
export const getCart = (state: ICart) => state.cart.cart;