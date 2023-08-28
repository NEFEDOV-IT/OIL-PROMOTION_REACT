import React, { FC } from "react";
import "./Thanks.scss";
import { useNavigate } from "react-router-dom";
import Page from "../../components/Page/Page";

const Thanks: FC = () => {
  const navigate = useNavigate();

  return (
        <Page
          title={'Thanks for your order'}
          titleClass={'thanks__title'}
        >
          <br />
          Our manager will contact you soon.
          <br />
          <br />
          <button
            onClick={() => navigate('/')}
            className="thanks__link root__link"
          >
            Do you want to go to the main page?
          </button>
        </Page>
  );
};

export default Thanks;
