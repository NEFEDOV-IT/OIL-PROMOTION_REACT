import React, { FC } from "react";
import { useSelector } from "react-redux";
import "./TotalCart.scss";
import { DOLLAR } from "../../../store/shop/initialState";
import { ICard } from "../../../types/store.initialState";
import { ICards, ICart } from "../../../types/states.useSelector";

interface ICartFilter {
  price: number;
  size: number;
}

const TotalCart: FC = () => {
  const cart = useSelector((state: ICart) => state.cart.cart);
  const cards = useSelector((state: ICards) => state.shop.data);
  const _cart = cards.filter((item: ICard) => cart.includes(item.id));
  const answer: number[] = [];

  _cart.map((item: ICartFilter) => answer.push(item.price * item.size));

  const sumCart = answer.reduce((sum: number, current: number): number => {
    return sum + current;
  }, 0);

  return (
    <>
      <div className="basket__total">
        {_cart.length > 0 ? `TOTAL: ${sumCart} ${DOLLAR}` : null}
      </div>
    </>
  );
};

export default TotalCart;
