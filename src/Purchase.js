import React from 'react';
import {Modal, Button, DropdownButton, Dropdown} from 'react-bootstrap';


function PurchaseComponent (props) {
	return (
		<Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.product.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        		<p>${props.product.price}</p>
        		<DropdownButton id="dropdown-basic-button" title="Size">
  					<Dropdown.Item href="#/action-1">{props.product.small}</Dropdown.Item>
  					<Dropdown.Item href="#/action-2">{props.product.medium}</Dropdown.Item>
  					<Dropdown.Item href="#/action-3">{props.product.large}</Dropdown.Item>
  					<Dropdown.Item href="#/action-3">{props.product.xl}</Dropdown.Item>
  					<Dropdown.Item href="#/action-3">{props.product.xxl}</Dropdown.Item>

				</DropdownButton>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={props.handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
		)

}

export default PurchaseComponent;
