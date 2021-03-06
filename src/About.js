import React from 'react';
import {Container, Card, Row, Col} from 'react-bootstrap';

function AboutComponent () {
	return (
  			<Container fluid className='about-page'>
  				<Card style={{width:'75%'}} className='about-card'>
  					<Card.Body>
  						<Row>
  							<Col>
  								<Card.Text style={{color: 'white'}} className='about-text'>
					      			Server hails from Chapel Hill NC. Founded in 2017, we are focused on ripping Rock n Roll. New album <a href='https://servermusic1.bandcamp.com/releases'>Hail Fellow Well Met</a> out now on bandcamp
					    		</Card.Text>
  							</Col>
  						</Row>
  						<Row>
  							<Col>
  								<a href='https://servermusic1.bandcamp.com/releases'><img src='imgs/bandcamp-icon4.png' style={{ width: '40%' }} id='bcamp-icon' alt='bandcamp-icon' /></a>
  							</Col>
  							<Col>
  								<a href='https://www.facebook.com/Server-180125039133141/'><img src='imgs/facebook-icon2.png' style={{ width: '60%' }} alt='facebook-icon' /></a>
  							</Col>
  							<Col>
  								<a href='https://www.spotify.com/us/'><img src='imgs/spotify_icon3.png' style={{ width: '95%' }} alt='spotify-icon' /></a>
  							</Col>
  							<Col>
  								<a href='https://www.instagram.com/servertheband/'><img src='imgs/instagram-icon2.png' style={{ width: '60%' }} alt='instagram-icon' /></a>
  							</Col>
  						</Row>
  					</Card.Body>
				</Card>
  			</Container>
		)
}

export default AboutComponent;