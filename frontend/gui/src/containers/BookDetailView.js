import React from 'react';
import axios from 'axios';
import { Card, Row, Col, List, message, Avatar, Spin } from "antd";
import reqwest from 'reqwest';
import InfiniteScroll from 'react-infinite-scroller';

const gridStyle = {
    textAlign: 'center',
  };

class BookDetail extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            FA: "Fantasy",
            NF: "Non Fiction",
            RO: "Romance",
            TR: "Thriller",
            MY: "Mystery",
            BI: "Biography",
            FI: "Fiction",
            SF: "Science Fiction",
            reviews: [],
            loading: false,
            hasMore: true
        };
    }  

    componentDidMount = () => {
        
        const bookID = this.props.match.params.bookID;
        this._isMounted=true;
        
        axios.get(`http://127.0.0.1:8000/library/booklist/${bookID}`).then(res => {
          this.setState({
            // book: res.data
            title: res.data.title,
            author_name: res.data.author_name,
            publication_date: res.data.publication_date,
            image_url: res.data.image_url,
            genre: this.state[res.data.genre],
            rating: res.data.rating,
            number_of_reviews: res.data.number_of_reviews,
            synopsis: res.data.synopsis
          });
        })
        .catch(error => console.log(error));

        axios.get(`http://127.0.0.1:8000/bookreview/${bookID}`).then(res => {
            this.setState({
                reviews: res.data,
                max_length: res.data.length,
                current_length: Math.min(3, res.data.length)
            })
            console.log(this.state)
        })
        .catch(error => console.log(error));
    }

    handleInfiniteOnLoad = () => {
        let data = this.state.data;
        this.setState({
          loading: true,
          current_length: Math.min(this.state.current_length+3, this.state.max_length)
        });
        console.log(this.state)

        if (this.state.current_length >= this.state.max_length) {
          message.warning('Infinite List loaded all');
          this.setState({
            hasMore: false,
            loading: false,
          });
          return;
        }
    }
    

    componentWillUnmount(){
        this._isMounted = false;
        console.log("Unmounting");
    }

    render() {
        return (
                <div>
                    <Row gutter={20} type="flex" justify="center">
                        <Col span={6}>
                            <Card bodyStyle={{
                                padding: 0
                            }}>
                                <img src={this.state.image_url} style={{    
                                }}
                                width="100%" height="100%" >
                                </img>
                            </Card>
                        </Col>
                        
                        <Col span={16}>
                            <Card title={this.state.title} headStyle={{
                                fontSize: 20,
                                fontStyle: 'italic',
                                fontFamily: 'Georgia'
                            }}>
                                <p>
                                    <b><i>Author: </i></b> 
                                    {this.state.author_name}
                                </p>
                                
                                <p>
                                    <b><i>Date of publication: </i></b> 
                                    {this.state.publication_date}
                                </p>
                                
                                <p>
                                    <b><i>Genre: </i></b>
                                    {this.state.genre}
                                </p>

                                <p>
                                    <b><i>Rating: </i></b>
                                    {this.state.rating}
                                </p>

                                <p>
                                    <b><i>Number of reviews: </i></b>
                                    {this.state.number_of_reviews}
                                </p>
                            </Card>
                        </Col>

                    </Row>

                    <Row gutter={20} type="flex" justify="center">
                        <Col span={22}>
                            <Card style={gridStyle} title="Synopsis/blurb">
                                <p>
                                    {this.state.synopsis}
                                </p>
                            </Card>
                        </Col>
                    </Row>

                    <Row gutter={20} type="flex" justify="center">
                        <Col span={22}>
                            <Card style={gridStyle} title="Reviews">
                                
                                <InfiniteScroll
                                    initialLoad={false}
                                    pageStart={0}
                                    loadMore={this.handleInfiniteOnLoad}
                                    hasMore={!this.state.loading && this.state.hasMore}
                                    useWindow={false}
                                >

                                <List
                                    dataSource={this.state.reviews.slice(0, this.state.current_length)}
                                    renderItem={item => (
                                    <List.Item key={item.id}>
                                        <List.Item.Meta
                                            avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                            title={<a href="https://ant.design">{item.title}</a>}
                                            description={item.content}
                                        />
                                        <div>{item.creation_date}</div>
                                        </List.Item>
                                    )}
                                >

                                </List>
                                </InfiniteScroll>

                            </Card>
                        </Col>
                    </Row>
                </div>
        )
    }
}

class Title extends React.Component {
    render() {
        return (
            <h2>
                Title
            </h2>
        );
    }
}

export default BookDetail;