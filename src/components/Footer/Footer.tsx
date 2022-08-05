import React, {FC} from 'react';
import './footer.scss'
import Notification from "../Notification/Notification";

const Footer: FC = () => {
    return (
        <footer>
            <div className="footer__body">
                <div className="footer__body-copyright">
                    Copyright © 2022 Oil Promotion LTD. <span>All rights reserved.</span>
                </div>
                <Notification/>
            </div>
        </footer>
    );
};

export default Footer;
