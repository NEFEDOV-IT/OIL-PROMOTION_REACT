import React, { ChangeEvent, FC, useState } from "react";
import "./ShoppingCard.scss";
import { Button } from "@mui/material";
import { ICard } from "../../../../types/store.initialState";
import { addItemCart } from "../../../../store/cart/cart.slice";
import { addShopSize } from "../../../../store/shop/shop.slice";
import { useAppDispatch } from "../../../../hooks/hooks";

interface IProps {
  item: ICard;
}

const ShoppingCard: FC<IProps> = ({ item }) => {
  const [value, setValue] = useState<number>(1);
  const dispatch = useAppDispatch();

  const HandleClick: () => void = () => {
    if (value === 0) return;
    const shopItem = {
      id: item.id,
      size: value,
    };
    dispatch(addItemCart(item.id));
    dispatch(addShopSize(shopItem));
    setValue(1);
  };

  const addSize: () => void = () => {
    if (value === 99) return;
    setValue(value + 1);
  };

  const removeSize: () => void = () => {
    if (value === 0) return;
    setValue(value - 1);
  };

  return (
    <div className={"card__item"}>
      <div className="card__title">{item.name}</div>
      <div className={"card__img"}>
        <img src={item.img} alt="" />
      </div>
      <div className="card__subtitle">{item.subtitle}</div>
      <div className="card__price">
        {item.price} {item.currency}
      </div>
      <form>
        <div className={"card__size"}>
          <div onClick={removeSize} className={"card__size-minus"} />
          <input
            onChange={(e: ChangeEvent<HTMLInputElement>) => setValue(Number(e.target.value))}
            className={"card__size-input"}
            value={value}
            type="text"
            maxLength={2}
          />
          <div onClick={addSize} className={"card__size-plus"} />
        </div>
        <Button
          onClick={HandleClick}
          className={"card__button"}
          variant="outlined"
        >
          ADD TO CART
        </Button>
      </form>
    </div>
  );
};

export default ShoppingCard;
