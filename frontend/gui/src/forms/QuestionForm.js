import React from 'react';
import { Form, Input, Button, Select, Rate, Col, Row } from 'antd';
import { connect } from "react-redux";

import axios from 'axios';

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;
//const desc = ['terrible', 'terrible', 'bad','bad', 'normal','normal', 'good','good', 'wonderful','wonderful'];
//const desc2 = ['terrible', 'bad', 'normal', 'good', 'wonderful'];


class ProfileRegistrationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 3.0,
        };
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        console.log(this.state);
        const profID = localStorage.getItem("profID");
        const data = {
            //title: event.target.elements.title.value,
            content: event.target.elements.question.value,
            prof: profID,
            book: this.props.bookID
        };
        console.log(data)
        axios.post(`http://127.0.0.1:8000/qanswer/question/create/`, data)
        .then(res => console.log(res))
        .catch(error => console.log(error));
//        this.props.history.push('/profile');
    }

    handleChange = (value) => {
        this.setState({ value });
        console.log(this.state);
    }


    render() {
        const { value } = this.state;

        const formItemLayout = {
            labelCol: {
              xs: { span: 24 },
              sm: { span: 2 },
            },
            wrapperCol: {
              xs: { span: 24 },
              sm: { span: 16 },
            },
        };

        const tailFormItemLayout = {
            wrapperCol: {
              xs: {
                span: 24,
                offset: 8,
              },
              sm: {
                span: 16,
                offset: 8,
              },
            },
        };

        return (
            <div>
                <Form layout="horizontal" onSubmit={(event) => this.handleFormSubmit(
                    event,
                )}>
                    <Row gutter={20} >

                    <Row gutter={20} >
                    <Col span={18} >
                    <FormItem label="" >
                        <TextArea name="question" placeholder="Ask a Question" autosize={{minRows: 2}} />
                    </FormItem>
                    </Col>
                    </Row>


                    <FormItem>
                        <Button type="primary" htmlType="submit">
                            Submit!
                        </Button>
                    </FormItem>
                  </Row>
                </Form>
            </div>
        );
    }
}


export default ProfileRegistrationForm;
