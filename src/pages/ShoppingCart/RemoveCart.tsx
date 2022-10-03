import React, { FC } from "react";
import { removeCart } from "../../store/cart/cart.slice";
import { removeShopSize } from "../../store/shop/shop.slice";
import { useAppDispatch } from "../../hooks/hooks";

const RemoveCart: FC = () => {
  const dispatch = useAppDispatch();

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
