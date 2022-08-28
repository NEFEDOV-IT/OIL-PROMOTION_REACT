import React, { FC } from "react";
import { useNavigate } from "react-router-dom";

const CartTextNull: FC = () => {
  const navigate = useNavigate();

  return (
    <div>
      <p>There is nothing in the cart yet.</p>
      <br />
      Go to the
      <span onClick={() => navigate("/shop")} className={"root__link"}>
        {" "}
        SHOP
      </span>{" "}
      to start shopping.
    </div>
  );
};

export default CartTextNull;
