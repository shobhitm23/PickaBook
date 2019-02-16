import React from 'react';
import axios from 'axios';
import { Card, Row, Col } from "antd";

class BookDetail extends React.Component {
    
    state = {
        book: {}
    }

    fetchBooks = () => {
        const bookID = this.props.match.params.bookID;
        axios.get(`http://127.0.0.1:8000/library/booklist/${bookID}`).then(res => {
          this.setState({
            book: res.data
          });
        });
      }

    componentDidMount() {
        this.fetchBooks();
    }
    
    render() {
        return (
                    <Row gutter={20} type="flex" justify="center">
                        <Col span={6}>
                            <Card>
                                <img src={this.state.book.image_url} width="233" height="278" >
                                </img>
                            </Card>
                        </Col>
                        
                        <Col span={16}>
                            <Card title={this.state.book.title}>
                                
                                <p>
                                    <b><i>Author: </i></b> 
                                    {this.state.book.author_name}
                                </p>
                                
                                <p>
                                    <b><i>Date of publication: </i></b> 
                                    {this.state.book.publication_date}
                                </p>
                                
                                <p>
                                    <b><i>Genre: </i></b>
                                    {this.state.book.genre}
                                </p>

                                <p>
                                    <b><i>Rating: </i></b>
                                    {this.state.book.rating}
                                </p>

                                <p>
                                    <b><i>Number of reviews: </i></b>
                                    {this.state.book.number_of_reviews}
                                </p>
                                
                                <p>
                                    <b><i>Synopsis/blurb: </i></b>
                                    {this.state.book.synopsis}
                                </p>
                            </Card>
                        </Col>

                    </Row>
        )
    }
}

export default BookDetail;