import * as React from 'react';
import NavBar from './components/Navbar';
import ProfilesPage from './components/ProfilesPage';
import HomePage from './components/HomePage';
import { Fragment } from 'react';
import { Route, Switch } from "react-router-dom";
import NotFound from './components/NotFound';
import Profile from './components/Profile';

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Fragment>
        <NavBar />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/profiles' component={ProfilesPage} />
          <Route path="profiles/:id" component={Profile} />
          <Route component={NotFound} />
        </Switch>
      </Fragment>
    );
  }
}
