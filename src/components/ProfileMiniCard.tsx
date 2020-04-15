import * as React from 'react';
import { Card, Button, Image } from 'semantic-ui-react';
import { IUser } from '../models/IUser';
import { Link } from 'react-router-dom';
import YouWonButton from './YouWonButton';

export interface IProfileMiniCardProps {
    user: IUser;
}

export interface IProfileMiniCardState {
    wasButtonMounted: boolean;
    wasButtonUnMounted: boolean;
    didYouWinASpecialPizza: boolean;
}

export default class ProfileMiniCard extends React.Component<IProfileMiniCardProps, IProfileMiniCardState> {

    constructor(props: IProfileMiniCardProps) {
        super(props);

        this.state = {
            wasButtonMounted: false,
            wasButtonUnMounted: false,
            didYouWinASpecialPizza: false
        }
    }

    wasButtonMountedCallback = () => {
        this.setState({ wasButtonMounted: true })
    }

    wasButtonUnMountedCallback = () => {
        this.setState({ wasButtonUnMounted: true })
    }

    onClickPizzaCuponButtonToggle() {
        let { didYouWinASpecialPizza } = this.state;

        if (didYouWinASpecialPizza) {
            this.setState({ didYouWinASpecialPizza: false });
        } else {
            this.setState({ didYouWinASpecialPizza: true });
        }

    }

    //If the user's fave pizza is pineapple, then we will give them a 
    //popup and this popup will include a button to go to the main page.
    //And display "You win 2 extra pizzas".
    private favePizzaCheck() {
        let { user } = this.props;
        let { didYouWinASpecialPizza } = this.state;

        let returnedElement = <div>Favorite Pizza is {user.favePizza} </div>

        if (user.favePizza === "pineapple" && didYouWinASpecialPizza) {
            returnedElement = <div>
                Favorite Pizza is {user.favePizza}
                <YouWonButton
                    mountedCallBack={this.wasButtonMountedCallback}
                    unmountedCallback={this.wasButtonUnMountedCallback} />
            </div>
        }

        return returnedElement;
    }



    public render() {
        let { user } = this.props;
        let { wasButtonMounted, wasButtonUnMounted } = this.state;

        return (
            <Card>
                <h1>Mounted Method: {wasButtonMounted ? "true" : "false"}</h1>
                <h1>UNmounted Method: {wasButtonUnMounted ? "true" : "false"} </h1>
                <Card.Content>
                    <Card.Header>{user.name}</Card.Header>
                    <Card.Meta>{this.favePizzaCheck()} </Card.Meta>
                    <Card.Description>
                        {`Their fave color is ${user.hairColor} and their hair color
                        is ${user.faveColor}`}
                    </Card.Description>
                </Card.Content>
                <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic color='green'>
                            Go to their profile
                        </Button>

                        <Button
                            basic
                            color='orange'
                            content=' Did you win a special pizza?'
                            onClick={() => this.onClickPizzaCuponButtonToggle()}
                        />
                    </div>
                </Card.Content>
            </Card>
        );
    }
}
