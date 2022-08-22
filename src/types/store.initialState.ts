export interface ICard {
    name: string;
    subtitle: string;
    id: number;
    img: string;
    size: number;
    price: number;
    currency: string;
}

export interface ShopState {
    data: ICard[];
}
