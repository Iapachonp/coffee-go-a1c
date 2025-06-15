import React, { useState, useEffect } from 'react';
import { useCart } from '../context/cart-context';
import Modal from 'react-bootstrap/Modal';
import delIcon from '../assets/img/img/del-icon.png';
import cartIcon from '../assets/img/img/cart-icon.svg';
import { Card } from 'react-bootstrap';
import { money } from "../utils/currency";
import NeoButtonBase from './NeoButtonBase';

const Cart = (props) => {
  const [show, setShow] = useState(props.show);
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce((acc, item) => acc + item.price * 1.0, 0);

  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(props.show);
  }, [props.show]);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        animation={false}
        contentClassName="neo-cart-modal fade-in"
        dialogClassName="neo-cart-dialog"
        centered
      >
      <div data-bs-theme="dark">
        <Modal.Header closeButton 
          style={{
            backgroundColor: '#12121b',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
            color: '#ffffff'
        }}>
          <Modal.Title style={{ color: '#e0e0e0', fontWeight: '600' }}>
            🛒 Shopping Cart
          </Modal.Title>
        </Modal.Header>
      </div>

        <Modal.Body style={{
          backgroundColor: '#1a1a24',
          color: '#ffffff',
          maxHeight: '60vh',
          overflowY: 'auto'
        }}>
          {cartItems.length === 0 ? (
            <p style={{ color: '#aaa' }}>Your cart is empty.</p>
          ) : (
            cartItems.map((coffee, index) => (
              <Card
                key={index}
                className="mb-3 cart-item-entry"
                style={{
                  backgroundColor: '#191926',
                  color: '#ffffff',
                  border: '1px solid rgba(255,255,255,0.05)',
                  borderRadius: '10px',
                  boxShadow: '0 0 8px rgba(0, 255, 195, 0.05)',
                  overflow: 'hidden',
                }}
              >
                <Card.Img
                  variant="top"
                  src={coffee.image.trim()}
                  alt={coffee.name.trim()}
                  style={{ height: '120px', objectFit: 'cover' }}
                />
                <Card.Body style={{ padding: '12px' }}>
                  <Card.Title style={{ fontSize: '1rem', color: '#e0e0e0' }}>
                    {coffee.name.trim()}
                  </Card.Title>
                  <Card.Subtitle style={{ fontSize: '0.85rem', color: '#aaa' }}>
                    {coffee.origin.trim()}
                  </Card.Subtitle>
                  <Card.Text style={{ fontSize: '0.85rem', marginTop: '6px' }}>
                    <strong>Process:</strong> {coffee.process}<br />
                    <strong>SCA:</strong> {coffee.sca}<br />
                    <strong>Grams:</strong> {coffee.grams}<br />
                    <strong>Price:</strong> {money(coffee.price)}<br />
                  </Card.Text>
                  <NeoButtonBase onClick={() => removeFromCart(coffee)}>
                    <img src={delIcon} alt="Delete" style={{ width: "24px", height: "24px" }} />
                  </NeoButtonBase>
                </Card.Body>
              </Card>
            ))
          )}

          {cartItems.length > 0 && (
            <p style={{ fontWeight: 'bold', color: '#ffffff' }}>
              Total: {money(total.toFixed(2))}
            </p>
          )}
        </Modal.Body>

        <Modal.Footer style={{
          backgroundColor: '#12121b',
          borderTop: '1px solid rgba(255, 255, 255, 0.05)'
        }}>
          <NeoButtonBase onClick={handleClose}>
            Close
          </NeoButtonBase>
          {cartItems.length > 0 && (
            <NeoButtonBase onClick={clearCart}>
              Clear Cart
            </NeoButtonBase>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Cart;

