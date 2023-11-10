import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap'

function Navigation() {
    return (
        <Navbar bg="light" expand="lg" className="p-3"> 
        <Navbar.Brand style={{ color: 'pink' }}>666</Navbar.Brand>
            <Nav>
                <LinkContainer to="/home">
                    <Nav.Link className="lead">HOME</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/cv">
                    <Nav.Link className="lead">CV</Nav.Link>
                </LinkContainer>

            </Nav>
        </Navbar>   
    )
}

export default Navigation