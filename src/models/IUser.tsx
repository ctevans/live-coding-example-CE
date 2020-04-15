export interface IUser {
    id: number;
    name: string;
    favePizza: string;
    faveColor: string;
    hairColor: string;
}

export interface ILetter{
    address: string;
    postcode: string;
    stamp: IStamp;
}

export interface IStamp {
    image: string;
    price: number;
}