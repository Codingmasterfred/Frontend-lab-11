import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect style={{backgroundColor:"black"}}>
        <Navbar.Brand style={{textAlign:"center", width:"100%",height:"20%",color:"rgb(255, 234, 119)"}}>Code Fellows</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
