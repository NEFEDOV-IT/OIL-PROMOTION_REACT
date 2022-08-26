import React, {FC} from 'react';
import './Shop.scss'
import Title from "./Title";
import ShoppingCards from "./ShoppingCards/ShoppingCards";
import {Button} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Shop: FC = () => {
    const navigate = useNavigate()
    return (
        <div className={"main"}>
            <div className="container">
                <div className={'shop'}>
                    <Title />
                    <ShoppingCards />
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={() => navigate('/basket')}
                    >
                        TO CART
                    </Button><br/><br/>
                </div>
            </div>
        </div>
    );
};

export default Shop;
