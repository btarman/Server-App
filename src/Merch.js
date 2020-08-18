import React from 'react';
import {Jumbotron, Container, Card, Button, Row, Col} from 'react-bootstrap';

// Buttons on the page will link to purchase service, not yet built out

function MerchComponent () {
	return (
		<Jumbotron fluid className="merch-page">
			<Container fluid="md">
				<Row>
					<Col>
						<Card style={{ width: '18rem' }} className='merch-card'>
  							<Card.Img variant="top" src="imgs/server-hat.png" className='merch-img' />
  							<Card.Body>
    							<Card.Title style={{color: 'white'}}>SERVER HAT</Card.Title>
	    							<Button variant="primary">Buy Now</Button>
  							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }} className='merch-card'>
  							<Card.Img variant="top" src="imgs/server-t-shirt-color.jpg" className='merch-img' />
  							<Card.Body>
    							<Card.Title style={{color: 'white'}}>SERVER T-SHIRT</Card.Title>
							    
    							<Button variant="primary">Buy Now</Button>
  							</Card.Body>
						</Card>
					</Col>
				</Row>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }} className='merch-card'>
  							<Card.Img variant="top" src="imgs/server-t-shirt-white.jpg" className='merch-img' />
  							<Card.Body>
    							<Card.Title style={{color: 'white'}}>Server T-Shirt</Card.Title>
							    
    							<Button variant="primary">Buy Now</Button>
  							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }} className='merch-card'>
  							<Card.Img variant="top" src="imgs/server-t-shirt-black.jpg" className='merch-img' />
  							<Card.Body>
    							<Card.Title style={{color: 'white'}}>Server T-Shirt</Card.Title>
							    
    							<Button variant="primary">Buy Now</Button>
  							</Card.Body>
						</Card>
					</Col>
				</Row>
				
			</Container>
		</Jumbotron>

		)
}

export default MerchComponent;
