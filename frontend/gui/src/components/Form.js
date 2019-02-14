import React from 'react';
import {
  Form, Spin, Icon, Input, Button,
} from 'antd';
import * as actions from '../store/actions/auth';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;
  
  class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          this.props.onAuth(values.userName, values.password);
        }
      });
      this.props.history.push("/updateprof/");
      //      this.props.push("/myprofile/");
    }
  
    render() {
      let errorMessage = null;
      if(this.props.error) {
        errorMessage = (
          <p>{this.props.error.message}</p>
        );
      }
      const { getFieldDecorator } = this.props.form;
      return (
        <div>
          {errorMessage}
          {
            this.props.loading ? 
            <Spin indicator={antIcon} />
            
            :

            <Form onSubmit={this.handleSubmit} className="login-form">
              <p> Username </p>
              <Form.Item style={{
                  width: 250
              }}>
                {getFieldDecorator('userName', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                )}
              </Form.Item>
              <p> Password </p>
              <Form.Item style={{
                  width: 250
              }}>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                )}
              </Form.Item>
              <Form.Item>
                
                <Button type="primary" htmlType="submit" className="login-form-button">
                  Log in
                </Button>
                
                <NavLink style={{marginLeft: 72}} to='/forgot/'>
                  Forgot password
                </NavLink>
                <br></br>
                Or 
                <NavLink to="/signup/" style={{marginLeft: 10}} >
                register now!
                </NavLink>
              </Form.Item>
            </Form>
          }
        </div>
      );
    }
  }
 


const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAuth: (username, password) => dispatch(actions.authLogin(username, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WrappedNormalLoginForm);