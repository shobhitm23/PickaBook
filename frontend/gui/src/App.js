import React, { Component } from 'react';
import 'antd/dist/antd.css';
import { connect } from 'react-redux';
import * as actions from './store/actions/auth';

//import CustomLayout from './containers/Layout';
import BaseRouter from './routes';

class App extends Component {

  componentDidMount() {
    this.props.onTryAutoSignup();
  }

  render() {
    return (
      <div>
          <BaseRouter {...this.props}/>
      </div>
    );
  }
}

App.propTypes = {
  isLoading: PropType.bool.isRequired,
};

const mapStateToProps = state => {
  return {
    isAuthenticated: state.token !== null
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
