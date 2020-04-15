import * as React from 'react';
import Profile from './Profile';
import { IUser } from '../models/IUser';

export interface IProfilesPageProps {
}

export interface IProfilesPageState {
    users: IUser[]
}

export default class ProfilesPage extends React.Component<IProfilesPageProps, IProfilesPageState> {
    constructor(props: IProfilesPageProps) {
        super(props);

        this.state =
        //JSON = Java Script Object Notation.
        {
            users: [
                {
                    id: 1,
                    name: "John Doe 1",
                    faveColor: "blue",
                    favePizza: "pineapple",
                    hairColor: "black"
                }
            ]
        }
        
    }

    public render() {
        return (
            <React.Fragment>
                ProfilesPage
                <Profile />
            </React.Fragment>
        );
    }
}
