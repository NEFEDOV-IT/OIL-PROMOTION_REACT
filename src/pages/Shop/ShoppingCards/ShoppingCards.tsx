import React, { FC } from "react";
import ShoppingCard from "./ShoppingCard/ShoppingCard";
import "./ShoppingCards.scss";
import { useSelector } from "react-redux";
import { ICard } from "../../../types/store.initialState";
import SortShopping from "./SortShopping/SortShopping";

interface ICards {
    shop: {
        data: ICard[];
    }
}

const ShoppingCards: FC = () => {
  const cards = useSelector((state: ICards) => state.shop.data);

  return (
    <div className={"main"}>
      <div className="container">
        <SortShopping/>
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
