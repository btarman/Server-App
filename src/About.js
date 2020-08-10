import React from 'react';
import {Jumbotron, Container, Card, Button, Row, Col} from 'react-bootstrap';

function AboutComponent () {
	return (
		<Jumbotron fluid className='about-page'>
  			<Container fluid>
  			<Card body className='about-card'>
  				<p className='about-text'>Server hails from Chapel Hill Nc. Founded in 2017, we are focused on ripping Rock n Roll. New album Hail Fellow Well Met out now on bandcamp</p>
  			</Card>
  			</Container>
		</Jumbotron>
		)
}

export default AboutComponent;