import {ICard} from "./store.initialState";

export interface ICart {
    cart: {
        cart: number[];
    };
}

export interface ICards {
    shop: {
        data: ICard[];
    };
}
