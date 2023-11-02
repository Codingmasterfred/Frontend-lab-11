import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./App.css"

function Header(props) {


  function LogIn() {
    if (props.user) {
      props.logout()
    } else {
      props.loginWithRedirect()
    }
  }

  // console.log(props.user,"----------------------------------------")
  return (
    <Navbar id="navbar" collapseOnSelect expand="lg" variant="dark">
      <div id="navbarDiv">

        <Navbar.Brand id="Navbartitle" >Collection Of Books</Navbar.Brand>

        <NavItem id="NavbarUl">
          <Link className="Buttons" to="https://www.linkedin.com/in/fredrick-gentry-43680725b/" >
            Contact Us
          </Link>
          <Link id="Login" className="Buttons" onClick={LogIn} >
            {!props.user ? "Log In" : "LogOut"}
          </Link>
        </NavItem>
      </div>
    </Navbar>

  )

}

export default Header;
