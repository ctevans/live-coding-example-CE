import * as React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export interface INavBarProps {
}

export default class NavBar extends React.Component<INavBarProps> {
    public render() {
        return (
            <Menu>
                <Menu.Item
                    name='home'
                    as={Link}
                    to={`/`}
                >
                    Home
        </Menu.Item>

                <Menu.Item
                    name='profiles'
                    as={Link}
                    to={`/profiles`}
                >
                    Profiles
        </Menu.Item>

                <Menu.Item
                    name='Info'
                    as={Link}
                    to={`/info`}
                >
                    Info
        </Menu.Item>
            </Menu>
        );
    }
}
