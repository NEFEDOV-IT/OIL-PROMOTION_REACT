import React, { FC } from "react";
import "./Home.scss";
import { useNavigate } from "react-router-dom";
import { svg } from "./svgHome";
import Page from "../../components/Page/Page";

const Home: FC = () => {
  const navigate = useNavigate();

  return (
    <Page>
      <div className="main__body">
        <div className="main__body-title">
          Oil Promotion LTD. <span>mining and exploration {svg}</span>
        </div>
        <div className="main__body-subtitle">
          We are developing oil fields and extracting oil for business.
        </div>
        <div className="main__body-links">
          <div onClick={() => navigate("/about")} className="link-about">
            About
          </div>
          <div
            onClick={() => navigate("/contacts")}
            className="link-contacts"
          >
            Contacts
          </div>
        </div>
      </div>
    </Page>
  );
};

export default Home;
