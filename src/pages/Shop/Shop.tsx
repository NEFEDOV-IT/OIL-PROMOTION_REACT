import React, { FC } from 'react';
import Title from "./Title";
import ShoppingCards from "./ShoppingCards/ShoppingCards";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { searchItemShop } from "../../store/shop/shop.slice";

const Shop: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();

  function handleClick() {
    dispatch(searchItemShop(''))
    navigate('/cart')
  }

  return (
    <div className={"main"}>
      <div className="container">
        <div className={'shop'}>
          <Title />
          <ShoppingCards />
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleClick}
          >
            TO CART
          </Button><br /><br />
        </div>
      </div>
    </div>
  );
};

export default Shop;
