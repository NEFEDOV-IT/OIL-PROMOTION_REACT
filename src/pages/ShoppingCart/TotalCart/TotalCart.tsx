import React, { FC } from "react";
import {useDispatch, useSelector} from "react-redux";
import { Button } from "@mui/material";
import './TotalCart.scss'
import {DOLLAR} from "../../../store/shop/initialState";
import {ICard} from "../../../types/store.initialState";
import {removeCart} from "../../../store/cart/cart.slice";
import {removeShopSize} from "../../../store/shop/shop.slice";
import {useNavigate} from "react-router-dom";

interface ICart {
  price: number;
  size: number;
}

const TotalCart: FC = () => {
  const cart = useSelector((state: any) => state.cart.cart);
  const cards = useSelector((state: any) => state.shop.data);
  const basket = cards.filter((item: ICard) => cart.includes(item.id));
  const answer: number[] = [];

  basket.map((item: ICart) => {
    answer.push(item.price * item.size);
  });

  const sumCart = answer.reduce((sum: number, current: number): number => {
    return sum + current;
  }, 0);

  return (
    <>
      <div className="basket__total">
        {basket.length > 0 ? `TOTAL: ${sumCart} ${DOLLAR}` : null}
      </div>
    </>
  );
};

export default TotalCart;
