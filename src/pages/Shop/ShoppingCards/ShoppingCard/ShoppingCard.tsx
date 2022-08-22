import React, {FC, useState} from "react";
import "./ShoppingCard.scss";
import {Button} from "@mui/material";
import {useDispatch} from "react-redux";
import {ICard} from "../../../../types/store.initialState";
import {addItemCart} from "../../../../store/cart/cart.slice";
import {addShopSize} from "../../../../store/shop/shop.slice";

interface IProps {
    item: ICard;
}

const ShoppingCard: FC<IProps> = ({item}) => {
    const [value, setValue] = useState(0);
    const dispatch = useDispatch();

    const HandleClick = () => {
        if (value === 0) return;
        const shopItem = {
          id: item.id,
          size: value,
        }
        dispatch(addItemCart(item.id));
        dispatch(addShopSize(shopItem))
        setValue(0);
    };

    const addSize = () => {
        if (value === 99) return;
        setValue(value + 1);
    };

    const removeSize = () => {
        if (value === 0) return;
        setValue(value - 1);
    };

    return (
        <div className={"card__item"}>
            <div className="card__title">{item.name}</div>
            <div className="card__subtitle">{item.subtitle}</div>
            <div className={"card__img"}>
                <img src={item.img} alt=""/>
            </div>
            <div className="card__price">{item.price} {item.currency}</div>
            <form>
                <div className={"card__size"}>
                    <div onClick={removeSize} className={"card__size-minus"}/>
                    <input
                        onChange={(e) => setValue(Number(e.target.value))}
                        className={"card__size-input"}
                        value={value}
                        type="text"
                        maxLength={2}
                    />
                    <div onClick={addSize} className={"card__size-plus"}/>
                </div>
                <Button
                    onClick={HandleClick}
                    className={"card__button"}
                    variant="outlined"
                >
                    ADD TO CART
                </Button>
            </form>
        </div>
    );
};

export default ShoppingCard;
