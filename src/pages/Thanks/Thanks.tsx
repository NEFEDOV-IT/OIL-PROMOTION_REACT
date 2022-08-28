import React, {FC} from "react";
import "./Thanks.scss";
import { useNavigate } from "react-router-dom";

const Thanks: FC = () => {
  const navigate = useNavigate();

  return (
    <div className={"main"}>
      <div className="container">
        <h1 className={"root__title thanks__title"}>Thanks for your order</h1>
        Thanks for your order!
        <br /> Our manager will contact you soon.<br/><br/>
        <button onClick={() => navigate('/')} className="thanks__link root__link">Do you want to go to the main page?</button>
      </div>
    </div>
  );
};

export default Thanks;
