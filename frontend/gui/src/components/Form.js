import React from 'react';
import {
  Form, Icon, Input, Button, Checkbox,
} from 'antd';
  
  class NormalLoginForm extends React.Component {
    handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    }
  
    render() {
      const { getFieldDecorator } = this.props.form;
      return (
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
            
            <a className="login-form-forgot" href=""
            style={{
                marginLeft: 50,
            }}>Forgot password</a>
            <br></br>
            Or <a href="">register now!</a>
          </Form.Item>
        </Form>
      );
    }
  }
  
const WrappedNormalLoginForm = Form.create({ name: 'normal_login' })(NormalLoginForm);

export default WrappedNormalLoginForm;