import React, { FC } from 'react';
import ShoppingCards from "./ShoppingCards/ShoppingCards";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/hooks";
import { searchItemShop } from "../../store/shop/shop.slice";
import Page from "../../components/Page/Page";

const Shop: FC = () => {
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(searchItemShop(''))
    navigate('/cart')
  }

  return (
    <Page
      title={'SHOP'}
      titleClass={'shop__title'}
    >
      <div className={'shop'}>
        <ShoppingCards />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleClick}
        >
          TO CART
        </Button>
        <br />
        <br />
      </div>
    </Page>
  );
};

export default Shop;
