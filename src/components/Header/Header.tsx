import React from 'react';
import {Link} from 'react-router-dom';
import './header.scss'
import img from '../../img/oil.png'
import { Navigation } from './Navigation';

const Header = () => {
    return (
        <header className="header">
            <div className={"header__body"}>
                <div className={'header__body-name'}>
                    <div className="header__icon">
                        <Link to={"/"}>
                            <img src={img} alt=""/>
                        </Link>
                    </div>
                    <div className="header__text">Oil Promotion LTD.</div>
                </div>
                <Navigation/>
            </div>
        </header>
    );
};

export default Header;
