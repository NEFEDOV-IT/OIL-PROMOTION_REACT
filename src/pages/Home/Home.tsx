import React, { FC } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { svg } from "./svgHome";

const Home: FC = () => {
  const navigate = useNavigate();

  const handleClick = (url: string) => {
    navigate(url);
  };

  return (
    <main className={"main__home"}>
      <div className={"container"}>
        <div className="main__body">
          <div className="main__body-title">
            Oil Promotion LTD. <span>mining and exploration {svg}</span>
          </div>
          <div className="main__body-subtitle">
            We are developing oil fields and extracting oil for business.
          </div>
          <div className="main__body-links">
            <div onClick={() => handleClick("/about")} className="link-about">
              About
            </div>
            <div
              onClick={() => handleClick("/contacts")}
              className="link-contacts"
            >
              Contacts
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
