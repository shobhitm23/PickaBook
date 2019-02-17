import React from 'react';
import axios from 'axios';
import { Card, Row, Col } from "antd";

const gridStyle = {
    textAlign: 'center',
  };

class BookDetail extends React.Component {
    
    state = {
        book: {}
    }

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
            SF: "Science Fiction"
        };
    }  

    fetchBooks = () => {
        const bookID = this.props.match.params.bookID;
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
        });
    }  

    componentDidMount() {
        this.fetchBooks();
    }

    render() {
        return (
                <div>
                    <Row gutter={20} type="flex" justify="center">
                        <Col span={6}>
                            <Card>
                                <img src={this.state.image_url} width="233" height="278" >
                                </img>
                            </Card>
                        </Col>
                        
                        <Col span={16}>
                            <Card title={this.state.title}>
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
                </div>
        )
    }
}

export default BookDetail;