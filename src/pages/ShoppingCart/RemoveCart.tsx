import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { removeCart } from "../../store/cart/cart.slice";
import { removeShopSize } from "../../store/shop/shop.slice";

const RemoveCart: FC = () => {
  const dispatch = useDispatch();

  const removeFullCart: () => void = () => {
    dispatch(removeCart());
    dispatch(removeShopSize());
  };

  return (
    <div onClick={removeFullCart} className="basket__cards-cart">
      &#128465; EMPTY TRASH
    </div>
  );
};

export default RemoveCart;
