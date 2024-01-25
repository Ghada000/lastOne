
import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'

function AppNavbar( props) {
  return (
    <Navbar bg="navbar" >
      <Navbar.Brand href="#home">Beautiful Blooms</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={()=>{props.changeView("Home") }}>Home</Nav.Link>
        
         
          <NavDropdown title="Occasions" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/occasions" onClick={()=>{props.set("");props.changeView("Occasions")}}>Show All</NavDropdown.Item>
            <NavDropdown.Item href="#action/occasions" onClick={()=>{props.set("Wedding")}}>Wedding</NavDropdown.Item>
            <NavDropdown.Item href="#action/occasions" onClick={()=>{props.set("Birth")}}>Birthday</NavDropdown.Item>
            <NavDropdown.Item href="#action/occasions" onClick={()=>{props.set("Vale")}}>Valentines</NavDropdown.Item>
            <NavDropdown.Item href="#action/occasions" onClick={()=>{props.set("Get")}}>Get well</NavDropdown.Item>
            {/* Add more NavDropdown.Items as needed */}
          </NavDropdown>
          <NavDropdown title="Plants" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/plants" onClick={()=>{props.set("");props.changeView("Plants")}}>Show All</NavDropdown.Item>
            <NavDropdown.Item href="#action/plants" onClick={()=>{props.set("Winte")}}>Winter plants</NavDropdown.Item>
            <NavDropdown.Item href="#action/plants" onClick={()=>{props.set("Summ")}}>Summer plants</NavDropdown.Item>
            <NavDropdown.Item href="#action/plants" onClick={()=>{props.set("Fall")}}>Fall plants</NavDropdown.Item>
            <NavDropdown.Item href="#action/plants" onClick={()=>{props.set("Spr")}}>Spring plants</NavDropdown.Item>
            {/* Add more NavDropdown.Items as needed */}
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNavbar;
