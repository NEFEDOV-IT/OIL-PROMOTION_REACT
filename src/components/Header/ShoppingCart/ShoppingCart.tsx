import * as React from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./ShoppingCart.scss";
import { useSelector } from "react-redux";
import { ICard } from "../../../types/store.initialState";

interface ICart {
  cart: ICard[];
}

interface cartState {
  cart: ICart;
}

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function CustomizedBadges() {
  const cart = useSelector((state: cartState) => state.cart.cart);

  return (
    <IconButton className={"shopping__cart"} aria-label="cart">
      <StyledBadge badgeContent={cart.length} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
  );
}
