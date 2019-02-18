import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button, Modal } from 'react-bootstrap';
import { Select } from 'antd';
import axios from 'axios';

const FormItem = Form.Item;
const Option = Select.Option;

class CustomHeader extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            filter: "book",
            show: false
        };
    }

    handleFilter = (value) => {
        this.setState({
            filter: value
        });
    }

    handleClose = () => {
        this.setState({
            show: false
        });
    }

    handleFormSubmit = (event) => {
        event.preventDefault();

        this.setState({
            target: event.target.elements.tgtname.value
        })

        if ( this.state.filter === "book" ){
            axios.get(`http://127.0.0.1:8000/library/view/${event.target.elements.tgtname.value}`)
            .then(res => {
                console.log(res);
                this.props.history.push(`/booklist/${res.data.pk}/`);
            })
            .catch(err => {
                this.setState({
                    show: true
                });
            })
        }

        if (this.state.filter === "author"){
            axios.get(`http://127.0.0.1:8000/authors/view/${event.target.elements.tgtname.value}`)
            .then(res =>{
                console.log(res);
                this.props.history.push(`/authors/${res.data.pk}/`);
            })
            .catch(err => {
                this.setState({
                    show: true
                });
            })
        }

    }

    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/latest/css/bootstrap.min.css" />
        <Navbar bg="dark" expand="lg" variant="dark">
            <Navbar.Brand href="#home">PickaBook</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
            <Nav.Link href="#home">Explore</Nav.Link>
            <Nav.Link href="#link">Profile</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Form inline onSubmit={(event) => this.handleFormSubmit(event)}>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" name="tgtname" />
               <Button variant="outline-success" type="primary">Search</Button>
            </Form>
            
            <NavDropdown title="Filter" id="basic-nav-dropdown" 
            onSelect={(value => this.handleFilter(value))}>
              <NavDropdown.Item eventKey="book">Book</NavDropdown.Item>
                <NavDropdown.Item eventKey="author">Author</NavDropdown.Item>    
            </NavDropdown>
            

            </Navbar.Collapse>
        </Navbar>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Error Not Found!</Modal.Title>
          </Modal.Header>
          <Modal.Body>Unfortunately, we can't find {this.state.target}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Close
            </Button>

          </Modal.Footer>
        </Modal>

        </div>
        );
    }
}

export default CustomHeader;
