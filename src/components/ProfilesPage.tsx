import * as React from 'react';
import Profile from './Profile';
import { IUser } from '../models/IUser';
import ProfileMiniCard from './ProfileMiniCard';

export interface IProfilesPageProps {
}

export interface IProfilesPageState {
    users: IUser[]
}

export default class ProfilesPage extends React.Component<IProfilesPageProps, IProfilesPageState> {
    constructor(props: IProfilesPageProps) {
        super(props);

        //JSON = Java Script Object Notation.
        this.state = {
            users: [
                {
                    id: 1,
                    name: "John Doe 1",
                    faveColor: "blue",
                    favePizza: "pineapple",
                    hairColor: "black",
                    photosList: [
                        {
                            id: 1,
                            writtenDescription: "Me on beach",
                            isMainPhoto: true
                        }
                    ],
                    mainPhoto: {
                        id: 1,
                        writtenDescription: "Me on beach",
                        isMainPhoto: true
                    }
                },
                {
                    id: 2,
                    name: "Second User",
                    faveColor: "green",
                    favePizza: "pepperonio",
                    hairColor: "blonde",
                    photosList: [
                        {
                            id: 1,
                            writtenDescription: "Me on beach",
                            isMainPhoto: true
                        }
                    ],
                    mainPhoto: {
                        id: 1,
                        writtenDescription: "Me on beach",
                        isMainPhoto: true
                    }
                },
                {
                    id: 3,
                    name: "Third User",
                    faveColor: "brown",
                    favePizza: "cheese",
                    hairColor: "brown",
                    photosList: [
                        {
                            id: 1,
                            writtenDescription: "Me on beach",
                            isMainPhoto: true
                        }
                    ],
                    mainPhoto: {
                        id: 1,
                        writtenDescription: "Me on beach",
                        isMainPhoto: true
                    }
                }
            ]
        }
    }

    public render() {
        let { users } = this.state;

        return (
            <React.Fragment>
                ProfilesPage
                {
                    users.map(individualUser => (
                        <ProfileMiniCard user={individualUser} />
                    ))
                }
            </React.Fragment>
        );
    }
}
