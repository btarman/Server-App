import React from 'react';
import {Container, Card, Button, Row, Col} from 'react-bootstrap';
import PurchaseComponent from './Purchase';
import {state, useState} from 'react';
// Buttons on the page will link to purchase service, not yet built out

function MerchComponent () {
	 const [show, setShow] = useState(false);
  	const [product, setProduct] = useState({});

  	const handleClose = () => setShow(false);
  	const handleShow = () => setShow(true);
  	const handleOnClick = (product) => {
  		if (product === 'Hat')  {
  			const hat = {
  				price: 25,
  				name: 'Hat',
  				size: ['unisex fit'],
  				small: 'unisex fit'
  			}
  			setProduct(hat)
  		} else if (product === "Color Shirt") {
  			const colorShirt = {
  				price: 25,
  				name: "Color Shirt",
  				size: ['S', 'M', 'L', 'XL', 'XXL'],
  				small: 'S',
  				medium: 'M',
  				large: 'L',
  				xl: 'XL',
  				xxl: 'XXL'
  				
  			}
  			console.log(colorShirt.size)
  			setProduct(colorShirt)
  		}  else if (product === "Black Shirt") {
  			const blackShirt = {
  				price: 25,
  				name: "Black Shirt",
  				size: ['S', 'M', 'L', 'XL', 'XXL'],
  				
  				small: 'S',
  				medium: 'M',
  				large: 'L',
  				xl: 'XL',
  				xxl: 'XXL'
  			}
  			setProduct(blackShirt)
  		}  else if (product === "White Shirt") {
  			const whiteShirt = {
  				price: 25,
  				name: "White Shirt",
  				size: ['S', 'M', 'L', 'XL', 'XXL'],
  				small: 'S',
  				medium: 'M',
  				large: 'L',
  				xl: 'XL',
  				xxl: 'XXL'
  			}
  			setProduct(whiteShirt)
  		} 

  		setShow(true); 
  	}

	return (
			<Container fluid className="merch-page">
				<PurchaseComponent show={show} handleClose={handleClose} product={product}/>
				<Row>
					<Col>
						<Card style={{ width: '18rem' }} className='merch-card'>
  							<Card.Img variant="top" src="imgs/server-hat.png" className='merch-img' />
  							<Card.Body>
    							<Card.Title style={{color: 'white'}}>SERVER HAT</Card.Title>
	    							<Button variant="primary" onClick={() => handleOnClick('Hat')}>Buy Now</Button>
  							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }} className='merch-card'>
  							<Card.Img variant="top" src="imgs/server-t-shirt-color.jpg" className='merch-img' />
  							<Card.Body>
    							<Card.Title style={{color: 'white'}}>SERVER T-SHIRT</Card.Title>
							    
    							<Button variant="primary" onClick={() => handleOnClick('Color Shirt')}>Buy Now</Button>
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
							    
    							<Button variant="primary" onClick={() => handleOnClick('White Shirt')}>Buy Now</Button>
  							</Card.Body>
						</Card>
					</Col>
					<Col>
						<Card style={{ width: '18rem' }} className='merch-card'>
  							<Card.Img variant="top" src="imgs/server-t-shirt-black.jpg" className='merch-img' />
  							<Card.Body>
    							<Card.Title style={{color: 'white'}}>Server T-Shirt</Card.Title>
							    
    							<Button variant="primary" onClick={() => handleOnClick('Black Shirt')}>Buy Now</Button>
  							</Card.Body>
						</Card>
					</Col>
				</Row>
				
			</Container>
		)
}

export default MerchComponent;
