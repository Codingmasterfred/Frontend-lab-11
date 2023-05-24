import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Navbar style={{display:"flex" , justifyContent:"space-between"}} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand style={{marginLeft:"20px"}}>My Favorite Books</Navbar.Brand>
        <div id="HomeAbout">
        <NavItem style={{color:"white"}}><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem style={{color:"white"}}><Link to="/About" className="nav-link">About</Link></NavItem>
        </div>
        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    )
  }
}

export default Header;
