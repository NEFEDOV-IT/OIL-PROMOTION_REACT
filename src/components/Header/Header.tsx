import React, { FC } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import img from "../../img/oil.png";
import { Navigation } from "./Navigation/Navigation";
import { Button } from "@mui/material";
import CustomizedBadges from "./ShoppingCart/ShoppingCart";
import { useAppDispatch } from "../../hooks/hooks";
import { searchItemShop } from "../../store/shop/shop.slice";

const Header: FC = () => {
  const dispatch = useAppDispatch();
  function handleClick() {
    dispatch(searchItemShop(''))
  }
  return (
    <header className="header">
      <div className={"header__body"}>
        <div className={"header__body-name"}>
          <div className="header__icon">
            <Link to={"/"}>
              <img src={img} alt="" />
            </Link>
          </div>
          <div className="header__text">Oil Promotion LTD.</div>
          <Link to={"/shop"}>
            <Button className="header__shop" variant="contained">
              SHOP
            </Button>
          </Link>
          <Link onClick={handleClick} className={"link__basket"} to={"/cart"}>
            <CustomizedBadges />
          </Link>
        </div>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
