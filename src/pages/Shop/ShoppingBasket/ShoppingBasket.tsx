import React, { FC } from "react";
import { useSelector } from "react-redux";
import { ICard } from "../../../types/store.initialState";
import BasketCard from "./BasketCard";
import { useNavigate } from "react-router-dom";
import "./ShoppingBasket.scss";
import TotalBasket from "./TotalBasket/TotalBasket";
import RemoveCart from "./RemoveCart";
import { ICards, ICart } from "../../../types/states.useSelector";

const ShoppingBasket: FC = () => {
  const cart = useSelector((state: ICart) => state.cart.cart);
  const cards = useSelector((state: ICards) => state.shop.data);
  const navigate = useNavigate();

  const basket = cards.filter((item: ICard) => cart.includes(item.id));

  return (
    <div className={"main"}>
      <div className="container">
        <div className={"basket shop"}>
          <h1 className="basket__title shop__title">SHOPPING CART</h1>
          <div className="basket__body">
            {basket?.length > 0 ? <RemoveCart /> : null}
            <div className="basket__cards">
              {basket?.length > 0 ? (
                basket.map((item: ICard) => {
                  return <BasketCard {...item} key={item.id} />;
                })
              ) : (
                <div>
                  <p>There is nothing in the cart yet.</p>
                  <br />
                  Go to the
                  <span
                    onClick={() => navigate("/shop")}
                    className={"root__link"}
                  >
                    {" "}
                    SHOP
                  </span>{" "}
                  to start shopping.
                </div>
              )}
            </div>
            <TotalBasket />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingBasket;
