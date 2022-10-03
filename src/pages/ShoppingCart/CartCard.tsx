import React, { ChangeEvent, useState } from "react";
import { ICard } from "../../types/store.initialState";
import {
  addShopSizeInCart,
  changeQuantity,
  changeSizeWithRemoveCart,
  removeShopSizeInCart,
} from "../../store/shop/shop.slice";
import { removeItemCart } from "../../store/cart/cart.slice";
import { useAppDispatch } from "../../hooks/hooks";

const CartCard = (item: ICard) => {
  const dispatch = useAppDispatch();
  const [currentValue, setCurrentValue] = useState<number | string>(
    Number(item.size)
  );

  const removeCard: () => void = () => {
    dispatch(changeSizeWithRemoveCart(item.id));
    dispatch(removeItemCart(item.id));
  };

  const removeSize: () => void = () => {
    if (currentValue <= 1) return;
    setCurrentValue(Number(currentValue) - 1);
    const shopItem = {
      id: item.id,
      size: 1,
    };
    dispatch(removeShopSizeInCart(shopItem));
  };

  const addSize: () => void = () => {
    if (currentValue >= 99) return;
    setCurrentValue(Number(currentValue) + 1);
    const shopItem = {
      id: item.id,
      size: 1,
    };
    dispatch(addShopSizeInCart(shopItem));
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const currentSize = e.target.value.replace(/\D/g, "");
    if (Number(currentSize) > 99) return;
    setCurrentValue(currentSize);
    const shopItem = {
      id: item.id,
      size: Number(currentSize),
    };
    dispatch(changeQuantity(shopItem));
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
        <div className="price__current">
          {`${item.price} ${item.currency} x`}
        </div>
        <div onClick={removeSize} className="price__minus">
          -
        </div>
        <div className="price__size">
          <input
            className={"price__size-input"}
            value={currentValue}
            onChange={handleChange}
            type="text"
            maxLength={2}
          />
        </div>
        <div onClick={addSize} className="price__plus">
          +
        </div>
        {" = "}
        <div className="price__answer">{item.size * item.price}</div>
        <div className="price__currency">{item.currency}</div>
      </div>
    </div>
  );
};

export default CartCard;
