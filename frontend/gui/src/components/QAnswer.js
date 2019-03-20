import React from 'react';
import { List, Icon, Comment, Avatar, Tooltip } from 'antd';
import { Form, Input, Button, Select, Rate, Col, Row } from 'antd';
import { connect } from "react-redux";

import axios from 'axios';
const FormItem = Form.Item;
const { TextArea } = Input;


class QAnswer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            questions: [],
            likes: 0,
            dislikes: 0,
            action: null
        };
    }


    componentDidMount = () => {
        const bookID = this.props.bookID; //match.params.bookID;
        axios.get(`http://127.0.0.1:8000/qanswer/question/${bookID}`).then(res => {
            this.setState({
                questions: res.data,
            });
        })
        .catch(error => console.log(error));
    }


    like = () => {
        this.setState({
          likes: 1,
          dislikes: 0,
          action: 'liked',
        });
      }

      dislike = () => {
        this.setState({
          likes: 0,
          dislikes: 1,
          action: 'disliked',
        });
      }

      clicked = () => {
        this.setState({Comment: []});
        var reply = prompt("Reply");
        
      }

    render() {

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

        const { likes, dislikes, action } = this.state;
        const actions = [
            <span>
              <Tooltip title="Like">
                <Icon
                  type="like"
                  theme={action === 'liked' ? 'filled' : 'outlined'}
                  onClick={this.like}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>
                {likes}
              </span>
            </span>,
            <span>
              <Tooltip title="Dislike">
                <Icon
                  type="dislike"
                  theme={action === 'disliked' ? 'filled' : 'outlined'}
                  onClick={this.dislike}
                />
              </Tooltip>
              <span style={{ paddingLeft: 8, cursor: 'auto' }}>
                {dislikes}
              </span>
            </span>,
            <span>
              <button onClick={ this.clicked }> Reply to </button>
            </span>,
        ];



        return (
            <div>
                <List
                    className="comment-list"
                    itemLayout="horizontal"
                    dataSource={this.state.questions}
                    renderItem={item => (
                        <Comment
                            actions={actions}
                            author={item.profile}
                            avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                            content={item.question}
                            datetime={item.creation_date}
                        >
                            {
                                item.answers.length > 0 ?

                                <List
                                className="comment-list"
                                itemLayout="horizontal"
                                dataSource={item.answers}
                                renderItem={answer => (
                                    <Comment
                                        author={answer.profile}
                                        avatar="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                                        content={answer.answer}
                                        datetime={answer.creation_date}
                                    />
                                )}
                                />
                                :
                                <b syle={{marginLeft: 200}}></b>
                            }
                            </Comment>

                    )}
                />
                </div>




/*
                <Form layout="horizontal" onSubmit={(event) => this.handleFormSubmit(
                    event,
                )}>
                    <Row gutter={20} >
                    <Col span={12}>
                        <FormItem label="Title" {...formItemLayout}>
                            <Input name="title" placeholder="Title" />
                        </FormItem>
                    </Col>

                    <Row gutter={20} >
                    <Col span={18} >
                    <FormItem label="Review" >
                        <TextArea name="review" placeholder="Review" autosize={{minRows: 2}} />
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
*/
        )
    }
}

export default QAnswer;
