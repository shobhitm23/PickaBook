import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import CustomLayout from './containers/Layout';
import Login from './components/Form';
import CenteredLayout from './containers/LoginLayout';
import Signup from './containers/Signup';
import BookList from './containers/BookList';
import BookDetail from './containers/BookDetailView';
import AuthorDetail from './containers/AuthorDetailView';
import ProfilePage from './components/ProfilePage';
import ProfileRegister from './containers/ProfileRegister';
import ProfileUpdate from './containers/ProfileUpdate';

const AppRoute = ({ component: Component, layout: Layout, ...rest }) => {
  console.log(rest);
  return (
  <Route {...rest} render={props => (
      <Layout {...rest.props}{...props} >
        <Component {...rest.props}{...props} />
      </Layout>
    )} />
  )
};


const BaseRouter = (props) => {
    console.log(props);

    return (
    <div>
    <BrowserRouter>
      <Switch>
        <AppRoute exact path='/' layout={(props) => <CustomLayout {...props} />} component={Login} props={props}/>
        <AppRoute exact path='/login/' layout={(props) => <CenteredLayout {...props} />} component={Login} props={props}/>
        <AppRoute exact path='/signup/' layout={(props) => <CenteredLayout {...props} />} component={Signup} props={props}/>


        <AppRoute exact path='/booklist/' layout={(props) => <CustomLayout {...props} />} component={BookList} props={props}/>
        <AppRoute exact path='/booklist/:bookID/' layout={(props) => <CustomLayout {...props} />} component={BookDetail} props={props}/>

        <AppRoute exact path='/authors/:authID/' layout={(props) => <CustomLayout {...props} />} component={AuthorDetail} props={props}/>

        <AppRoute exact path='/newprof/' layout={(props) => <CustomLayout {...props} />} component={ProfileRegister} props={props}/>
        <AppRoute exact path='/updateprof/' layout={(props) => <CustomLayout {...props} />} component={ProfileUpdate} props={props}/>
        <AppRoute exact path='/profile/' layout={(props) => <CustomLayout {...props} />} component={ProfilePage} props={props}/>

      </Switch>
    </BrowserRouter>
    </div>
    )
  };

export default BaseRouter;
  
