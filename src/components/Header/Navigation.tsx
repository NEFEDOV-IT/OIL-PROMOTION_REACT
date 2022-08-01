import React, {FC, useState} from 'react';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const Navigation:FC = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <>
      <div className="burger__btn" onClick={() => setMenuActive(!menuActive)}>
        <span className={menuActive ? "active" : ""}/>
        <span className={menuActive ? "active" : ""}/>
        <span className={menuActive ? "active" : ""}/>
      </div>
      <nav className={menuActive ? "header__nav active" : "header__nav"}>
        <div className="menu__content">
          <ul>
            <li>
              <Link onClick={() => setMenuActive(false)} to={'/'}>
                <Button
                    size="large"
                    color="secondary"
                    variant="text">
                  Home
                </Button>
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuActive(false)} to={'/users'}>
                <Button
                    size="large"
                    color="secondary"
                    variant="text">
                  About
                </Button>
              </Link>
            </li>
            <li>
              <Link onClick={() => setMenuActive(false)} to={''}>
                <Button
                    size="large"
                    color="secondary"
                    variant="text">
                  Contacts
                </Button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export { Navigation };
