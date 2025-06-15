import React, { useState } from 'react';
import { useCart } from '../context/cart-context';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import delIcon from '../assets/img/img/del-icon.png';
import cartIcon from '../assets/img/img/cart-icon.svg';
import { Card, Col, Container, Row } from 'react-bootstrap';
import {money}  from "../utils/currency";
import NeoButtonBase from './NeoButtonBase';
import { coffees, prices } from '../data/data-coffees'; // Ensure you have the correct path to your data

const Cart = (props) => {
  const [show, setShow] = useState(props.show)
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * 1.0, 0);

  const handleClose = () => {
    setShow(false)};
  
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal show={show} onHide={handleClose} animation={false} >
        
        <Modal.Header closeButton>
          <Modal.Title className="text-dark">Shopping Cart</Modal.Title>
          <a className="social-icon" href="#"><img src={cartIcon} alt="" /></a>
        </Modal.Header>
        <Modal.Body className="text-dark">
          <ul>
            {cartItems.map((coffee) => (
              <>
              <Card className="h-100 d-flex flex-column p-2" style={{ fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={coffee.image.trim()}
                alt={coffee.name.trim()}
                style={{ height: '80px', objectFit: 'cover' }} // Adjust image size
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '1rem' }}>{coffee.name.trim()}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.85rem' }}>
                  {coffee.origin.trim()}
                </Card.Subtitle>
                <Card.Text className="flex-grow-1">
                  <strong>Process:</strong> {coffee.process.trim()}<br />
                  <strong>Description:</strong> {coffee.description.trim()}<br />
                  <strong>SCA:</strong> {coffee.sca}<br />
                  <strong>Grams:</strong> {coffee.grams}<br />    
                  <strong>Price:</strong> {money(coffee.price)}<br />
                </Card.Text>
              <div>
                <NeoButtonBase onClick={() => removeFromCart(coffee)}> <img src={delIcon} alt="" style={{ width:"32px", height:"32px" }} /> </NeoButtonBase> 
                <div style={{ width:"70px", height:"auto", display:"inline-block"}} > 
                </div>
              </div>  
              </Card.Body>
            </Card> 

            </>

            ))}
          </ul>
          <p>Total: ${money(total.toFixed(2))}</p>
        </Modal.Body>
        <Modal.Footer>
          <NeoButtonBase variant="secondary" onClick={handleClose}>
            Close
          </NeoButtonBase>
          <NeoButtonBase variant="primary" onClick={clearCart}>
            Clear Cart
          </NeoButtonBase>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;

