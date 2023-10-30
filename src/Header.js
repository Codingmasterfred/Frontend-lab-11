import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./App.css"

class Header extends React.Component {
  render() {
    return (
      <Navbar id="navbar"  collapseOnSelect expand="lg"  variant="dark">
        <div id="navbarDiv">

      <Navbar.Brand id="Navbartitle" >My Favorite Books</Navbar.Brand>
      
        <NavItem id="NavbarUl">
        <Link  className="Buttons" >
          Contact Us
          </Link>
          <Link id="Login" className="Buttons" >
           {!this.props.user? "Log In":"logout"}
          </Link>
        </NavItem>
        </div>
    </Navbar>
    
    )
  }
}

export default Header;
