import React, {FC} from 'react';
import './Shop.scss'
import Title from "./Title";
import ShoppingCards from "./ShoppingCards/ShoppingCards";

const Shop: FC = () => {
    return (
        <div className={"main"}>
            <div className="container">
                <div className={'shop'}>
                    <Title />
                    <ShoppingCards />
                </div>
            </div>
        </div>
    );
};

export default Shop;
