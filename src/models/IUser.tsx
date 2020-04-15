export interface IUser {
    id: number;
    mainPhoto: IPhoto;
    photosList: IPhoto[];
    name: string;
    favePizza: string;
    faveColor: string;
    hairColor: string;
}

export interface IPhoto {
    id: number;
    writtenDescription: string;
    isMainPhoto: boolean;
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