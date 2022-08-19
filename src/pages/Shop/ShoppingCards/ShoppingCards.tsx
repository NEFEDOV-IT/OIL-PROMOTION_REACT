import React, { FC } from "react";
import ShoppingCard from "./ShoppingCard/ShoppingCard";
import "./ShoppingCards.scss";
import {useSelector} from "react-redux";

interface ICard {
  name: string;
  subtitle: string;
  id: number;
  img: string;
  size: number;
}

const ShoppingCards: FC = () => {
  const cards = useSelector((state: any) => state.shop.data)

  return (
    <div className={"main"}>
      <div className="container">
        <div className={"cards"}>
          {cards?.map((item: ICard) => {
            return <ShoppingCard item={item} key={item.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCards;
