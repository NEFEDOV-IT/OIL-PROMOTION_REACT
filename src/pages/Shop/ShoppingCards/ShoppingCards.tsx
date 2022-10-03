import React, { FC } from "react";
import ShoppingCard from "./ShoppingCard/ShoppingCard";
import "./ShoppingCards.scss";
import { ICard } from "../../../types/store.initialState";
import SortShopping from "./SortShopping/SortShopping";
import { getCards } from "../../../utils/selectors";
import { useAppSelector } from "../../../hooks/hooks";

const ShoppingCards: FC = () => {
  const cards = useAppSelector(getCards);

  return (
    <div className={"main"}>
      <div className="container">
        <SortShopping />
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
