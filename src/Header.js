import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';

function HeaderComponent(props) {
	console.log(props);
	return(
		<Navbar collapseOnSelect expand="xl" className='navbar'>
				
  			<Navbar.Brand href="/"><img src="imgs/logo_text_full-color_.png" className='d-inline-block align-top' width="auto"
        height="30" alt='nav-logo' /></Navbar.Brand>
  			<Navbar.Toggle aria-controls="basic-navbar-nav" />
  			<Navbar.Collapse id="basic-navbar-nav">
    			<Nav className="mr-auto">
      				<Nav.Link style={{color: '#5BA8A0'}} href="/">Home</Nav.Link>
      				<Nav.Link style={{color: '#5BA8A0'}} href="listen">Listen</Nav.Link>
      				<Nav.Link style={{color: '#5BA8A0'}} href="merch">Merch</Nav.Link>
      				<Nav.Link style={{color: '#5BA8A0'}} href="about">About</Nav.Link>
    			</Nav>
  			</Navbar.Collapse>
		</Navbar>
		)
}

export default HeaderComponent;
