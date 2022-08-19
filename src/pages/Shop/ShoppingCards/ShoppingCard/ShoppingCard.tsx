import React, { FC, useState } from "react";
import "./ShoppingCard.scss";
import { Button } from "@mui/material";
import { addShopCart } from "../../../../store/shop/shop.slice";
import { useDispatch } from "react-redux";

interface ICard {
  name: string;
  subtitle: string;
  id: number;
  img: string;
  size: number;
}

interface IProps {
  item: ICard;
}

const ShoppingCard: FC<IProps> = ({ item }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const HandleClick = () => {
    const shopItem = {
      size: value,
      name: item.name,
      subtitle: item.subtitle,
      id: item.id,
      img: item.img,
    };
    dispatch(addShopCart(shopItem));
  };

  return (
    <div className={"card__item"}>
      <div className="card__title">{item.name}</div>
      <div className="card__subtitle">{item.subtitle}</div>
      <div className={"card__img"}>
        <img src={item.img} alt="" />
      </div>
      <form>
        <div className={"card__size"}>
          <div className={"card__size-minus"} />
          <input
            onChange={(e) => setValue(e.target.value)}
            className={"card__size-input"}
            placeholder={value}
            type="text"
          />
          <div className={"card__size-plus"} />
        </div>
        <Button
          onClick={HandleClick}
          className={"card__button"}
          variant="outlined"
        >
          ADD
        </Button>
      </form>
    </div>
  );
};

export default ShoppingCard;
