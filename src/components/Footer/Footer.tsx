import React, { FC } from "react";
import "./Footer.scss";
import Notification from "../Notification/Notification";

const Footer: FC = () => {
  return (
    <footer className="footer__body">
      <div className="footer__body-copyright">
        Copyright © {new Date().getFullYear()} Oil Promotion LTD. <span>All rights reserved.</span>
      </div>
      <Notification />
    </footer>
  );
};

export default Footer;
