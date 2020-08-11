import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { navLogo } from './images/logo_text_full-color_.png';
function HeaderComponent(props) {
	console.log(props);
	return(
		<Navbar collapseOnSelect expand="lg" className='navbar'>
				
  			<Navbar.Brand href="/"><img src={ navLogo } className='nav-logo' alt='nav-logo' /></Navbar.Brand>
  			<Navbar.Toggle aria-controls="basic-navbar-nav" />
  			<Navbar.Collapse id="basic-navbar-nav">
    			<Nav className="mr-auto">
      				<Nav.Link href="/">Home</Nav.Link>
      				<Nav.Link href="listen">Listen</Nav.Link>
      				<Nav.Link href="merch">Merch</Nav.Link>
      				<Nav.Link href="about">About</Nav.Link>
    			</Nav>
  			</Navbar.Collapse>
		</Navbar>
		)
}

export default HeaderComponent;
