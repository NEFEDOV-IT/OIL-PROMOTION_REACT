import React from "react";
import { ICard } from "../../../types/store.initialState";
import { useDispatch } from "react-redux";
import {
  addShopSizeInCart,
  removeShopSizeInCart,
} from "../../../store/shop/shop.slice";
import { removeItemCart } from "../../../store/cart/cart.slice";

const CartCard = (item: ICard) => {
  const dispatch = useDispatch();

  const removeCard = () => {
    dispatch(removeItemCart(item.id));
  };

  const removeSize = () => {
    const shopItem = {
      id: item.id,
      size: 1,
    };
    dispatch(removeShopSizeInCart(shopItem));
  };

  const addSize = () => {
    const shopItem = {
      id: item.id,
      size: 1,
    };
    dispatch(addShopSizeInCart(shopItem));
  };

  return (
    <div className={"basket__card"}>
      <div className="basket__card-title">{item.name}</div>
      <div onClick={removeCard} className="basket__card__remove">
        &#10006; Remove
      </div>
      <div className="basket__card-img">
        <img src={item.img} alt="" />
      </div>
      <div className="basket__card-subtitle">{item.subtitle}</div>
      <div className="basket__card-price">
        {item.price} {item.currency} x{" "}
        <span onClick={removeSize} className={"span__minus"}>
          -
        </span>{" "}
        {item.size}{" "}
        <span onClick={addSize} className={"span__plus"}>
          +
        </span>{" "}
        ={" "}
        <span className={"span__answer"}>
          {item.size * item.price} {item.currency}
        </span>
      </div>
    </div>
  );
};

export default CartCard;
