import React, { FC } from "react";
import "./TotalCart.scss";
import { DOLLAR } from "../../../store/shop/initialState";
import { ICard } from "../../../types/store.initialState";
import { getCards, getCart } from "../../../utils/selectors";
import { useAppSelector } from "../../../hooks/hooks";

interface ICartFilter {
  price: number;
  size: number;
}

const TotalCart: FC = () => {
  const cart = useAppSelector(getCart);
  const cards = useAppSelector(getCards);
  const newCart = cards.filter((item: ICard) => cart.includes(item.id));
  const answer: number[] = [];

  newCart.map((item: ICartFilter) => answer.push(item.price * item.size));

  const sumCart = answer.reduce((sum: number, current: number): number => {
    return sum + current;
  }, 0);

  return (
    <>
      <div className="basket__total">
        {newCart?.length > 0 ? `TOTAL: ${sumCart} ${DOLLAR}` : null}
      </div>
    </>
  );
};

export default TotalCart;
