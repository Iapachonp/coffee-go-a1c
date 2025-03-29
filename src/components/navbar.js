import { useState, useContext , useEffect} from 'react';
import '../App.css';
import { AppContext } from '../context/app-context';
import { useCart } from '../context/cart-context';
import Cart from './Cart';
import { Navbar as BNavbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/img/logo.png';
import navIcon3 from '../assets/img/img/nav-icon3.svg';
import navIcon2 from '../assets/img/img/nav-icon2.svg';
import navIcon4 from '../assets/img/img/nav-icon4.svg';
import navIcon1 from '../assets/img/img/nav-icon1.svg';
import cartIcon from '../assets/img/img/cart-icon.svg';
import React from 'react';
import { Navigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

function Navbar() {
  const contxt = useContext(AppContext)
  const jwtToken = contxt.jwtToken
  const [activeLink, setActiveLink] = useState('coffees');
  const [scrolled, setScrolled] = useState(false)
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <BNavbar expand="md" className={scrolled ? "scrolled" : ""}>
      <div className='container'>
        <BNavbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </BNavbar.Brand>
        <BNavbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/coffees" className={activeLink === 'coffees' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('coffees')}>caf&eacute;</Nav.Link>
              <Nav.Link href="/us" className={activeLink === 'us' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('us')}>con&oacute;cenos</Nav.Link>
              <Nav.Link href="/shop" className={activeLink === 'shop' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('shop')}>contacto</Nav.Link>
              {jwtToken === "" 
            ? "" 
            : <Nav.Link href="/admin" className={activeLink === 'admin' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('admin')}>Admin</Nav.Link> 
              }
            </Nav> 
          <Nav className="ms-auto">
          <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon3} alt="" /></a>
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon4} alt="" /></a>
            </div>
          </span>     
        
        <Nav.Link onClick={() => setShowCart(!showCart)}> 
        <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={cartIcon} alt="" /></a>
              </div>
          <text className='text-light' x="0" y="0" fill="white" font-size="12">
          { cartItems.length > 0 ? cartItems.length  : ""}
        </text>
        </span> 
       </Nav.Link>
        {showCart ? <Cart show={showCart}/> : "" } 
        <Nav.Link href='/login'>
          <span className="navbar-text">
        {jwtToken === "" 
            ? <a className="btn btn-outline-success text-light" >Login</a>
            : <a className="btn btn-outline-danger text-light" >Log out</a>
          }
          </span>
        </Nav.Link>
        </Nav>
    </BNavbar.Collapse>
    </div>
    </BNavbar>  
  );
}

export default Navbar;

