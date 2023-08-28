import React, { FC } from "react";
import { ICard } from "../../types/store.initialState";
import CartCard from "./CartCard";
import "./ShoppingCart.scss";
import TotalCart from "./TotalCart/TotalCart";
import RemoveCart from "./RemoveCart";
import { FormCart } from "./FormCart/FormCart";
import CartTextNull from "./CartTextNull";
import { getCards, getCart } from "../../utils/selectors";
import { useAppSelector } from "../../hooks/hooks";
import Page from "../../components/Page/Page";

const ShoppingCart: FC = () => {
  const cart = useAppSelector(getCart);
  const cards = useAppSelector(getCards);
  const basket = cards.filter((item: ICard) => cart.includes(item.id));

  return (
    <Page
      title={"SHOPPING CART"}
      titleClass={'basket__title'}
    >
      <div className={"basket shop"}>
        <div className="basket__body">
          {basket?.length > 0 && <RemoveCart />}
          <div className="basket__cards">
            {basket?.length > 0 ? (
                basket.map((item: ICard) => {
                  return <CartCard {...item} key={item.id} />;
                })
              )
              : <CartTextNull />
            }
          </div>
          <TotalCart />
          {basket?.length > 0 && <FormCart />}
        </div>
      </div>
    </Page>
  );
};

export default ShoppingCart;
