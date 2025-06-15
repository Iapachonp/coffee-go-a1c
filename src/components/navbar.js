import { useState, useContext, useEffect } from 'react';
import '../App.css';
import { AppContext } from '../context/app-context';
import { useCart } from '../context/cart-context';
import Cart from './Cart';

// Bootstrap components
import { Navbar as BNavbar, Nav, Container } from 'react-bootstrap';

// Assets
import logo from '../assets/img/img/logo.png';
import navIcon3 from '../assets/img/img/nav-icon3.svg';
import navIcon2 from '../assets/img/img/nav-icon2.svg';
import navIcon4 from '../assets/img/img/nav-icon4.svg';
import navIcon1 from '../assets/img/img/nav-icon1.svg';
import cartIcon from '../assets/img/img/cart-icon.svg';

function Navbar() {
  const contxt = useContext(AppContext);
  const jwtToken = contxt.jwtToken;
  const [activeLink, setActiveLink] = useState('coffees');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false); // manage mobile toggler state
  const { cartItems } = useCart();
  const [showCart, setShowCart] = useState(false);

  // Handle navbar shrink on scroll
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
    setExpanded(false); // close mobile nav when clicking a link
  };

  return (
    <BNavbar
      expand="lg"
      className={scrolled ? 'scrolled navbar' : 'navbar'}
      expanded={expanded}
      onToggle={() => setExpanded(!expanded)}
    >
      <Container>
        {/* Brand Logo */}
        <BNavbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </BNavbar.Brand>

        <span class="navbar-text text-light d-lg-none navbar-text-mobile">
          {"A1C"} 
        </span>
        {/* Toggler button for mobile */}
        <BNavbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </BNavbar.Toggle>

        {/* Collapsible content */}
        <BNavbar.Collapse id="basic-navbar-nav">
          {/* Navigation links */}
          <Nav className="ms-auto">
            <Nav.Link
              href="/coffees"
              className={activeLink === 'coffees' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('coffees')}
            >
              caf&eacute;
            </Nav.Link>
            <Nav.Link
              href="/us"
              className={activeLink === 'us' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('us')}
            >
              con&oacute;cenos
            </Nav.Link>
            <Nav.Link
              href="/shop"
              className={activeLink === 'shop' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('shop')}
            >
              contacto
            </Nav.Link>
            {/* Show Admin only if authenticated */}
            {jwtToken !== "" && (
              <Nav.Link
                href="/admin"
                className={activeLink === 'admin' ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink('admin')}
              >
                Admin
              </Nav.Link>
            )}
          </Nav>

          {/* Right side icons */}
          <Nav className="ms-auto">
            {/* Social media icons */}
            <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navIcon3} alt="" /></a>
                <a href="#"><img src={navIcon1} alt="" /></a>
                <a href="#"><img src={navIcon2} alt="" /></a>
                <a href="#"><img src={navIcon4} alt="" /></a>
              </div>
            </span>

            {/* Cart icon with count */}
            <Nav.Link onClick={() => setShowCart(!showCart)}>
              <span className="navbar-text">
                <div className="social-icon">
                  <a href="#"><img src={cartIcon} alt="Cart" /></a>
                </div>
                <text className="text-light" fontSize="12">
                  {cartItems.length > 0 ? cartItems.length : ""}
                </text>
              </span>
            </Nav.Link>
            {showCart && <Cart show={showCart} />}

            {/* Login/Logout Button */}
            <Nav.Link href="/login">
              <span className="navbar-text">
                {jwtToken === "" ? (
                  <a className="btn btn-outline-success text-light">Login</a>
                ) : (
                  <a className="btn btn-outline-danger text-light">Log out</a>
                )}
              </span>
            </Nav.Link>
          </Nav>
        </BNavbar.Collapse>
      </Container>
    </BNavbar>
  );
}

export default Navbar;

