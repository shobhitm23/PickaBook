import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomLayout from './containers/Layout';
import WrappedNormalLoginForm from './components/Form';
import CenteredLayout from './containers/LoginLayout';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
);


const BaseRouter = () => (
    <div>
    <BrowserRouter>
      <Switch>
        <AppRoute exact path='/' layout={CustomLayout} component={WrappedNormalLoginForm}/>
        <AppRoute exact path='/login/' layout={CenteredLayout} component={WrappedNormalLoginForm}/>
      </Switch>
    </BrowserRouter>
    </div>
);

export default BaseRouter;
  
