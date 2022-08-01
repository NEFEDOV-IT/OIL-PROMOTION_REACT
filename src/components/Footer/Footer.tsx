import React, {FC} from 'react';
import { Button } from '@mui/material';
import './footer.scss'

const Footer: FC = () => {
    return (
        <footer>
            <div className="footer__body">
                <div className="footer__body-copyright">
                    Copyright © 2022 Oil Promotion LTD. All rights reserved.
                </div>
                <Button
                    href={'#'}
                    variant="outlined"
                    size="small"
                >Notification</Button>
            </div>
        </footer>
    );
};

export default Footer;
