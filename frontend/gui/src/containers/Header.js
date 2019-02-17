import React from 'react';
import { Nav, Navbar, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Form as antForm } from 'antd'; 
import { Select } from 'antd';

const FormItem = Form.Item;
const Option = Select.Option;

class CustomHeader extends React.Component {
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
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
               <Button variant="outline-success">Search</Button>
            </Form>
            
            <NavDropdown title="Filter" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Author</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Book</NavDropdown.Item>    
            </NavDropdown>
            

            </Navbar.Collapse>
        </Navbar>
        </div>
        );
    }
}

export default CustomHeader;
