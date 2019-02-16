import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomLayout from './containers/Layout';
import Login from './components/Form';
import CenteredLayout from './containers/LoginLayout';
import Signup from './containers/Signup';
import BookList from './containers/BookList';
import ProfileRegister from './containers/ProfileRegister';
import ProfileUpdate from './containers/ProfileUpdate';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout>
        <Component {...props} />
      </Layout>
    )} />
);


const BaseRouter = (props) => (
    <div>
    <BrowserRouter>
      <Switch>
        <AppRoute exact path='/' layout={(props) => <CustomLayout {...props} />} component={Login}/>
        <AppRoute exact path='/login/' layout={(props) => <CenteredLayout {...props} />} component={Login}/>
        <AppRoute exact path='/signup/' layout={(props) => <CenteredLayout {...props} />} component={Signup}/>

        <AppRoute exact path='/book/' layout={(props) => <CustomLayout {...props} />} component={BookList}/>

        <AppRoute exact path='/newprof/' layout={(props) => <CustomLayout {...props} />} component={ProfileRegister}/>
        <AppRoute exact path='/updateprof/' layout={(props) => <CustomLayout {...props} />} component={ProfileUpdate}/>
        
      </Switch>
    </BrowserRouter>
    </div>
);

export default BaseRouter;
  
