import React, { FC } from "react";
import Page from "../../components/Page/Page";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const navigate = useNavigate();
  return (
    <Page
      title={'Not Found'}
    >
      Page not Found
      <br/>
      <br/>
      <button
        onClick={() => navigate('/')}
        className="thanks__link root__link"
      >
        Do you want to go to the main page?
      </button>
    </Page>
  )
};

export default NotFound;
