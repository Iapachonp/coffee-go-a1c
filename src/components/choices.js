import React from 'react';
import '../App.css';
import { useContext, Fragment } from 'react';
import { AppContext } from '../context/app-context';

function Choices() {
  const value = useContext(AppContext);
  const jwtToken = value.jwtToken 
  function toggleMenu(page){
    const choice = window.location.pathname.substring(1);
    if (page === choice){
      return true
    } else {
    return false }  
  }
  function navigateContext(page){
    value.setChoice(page);
    switch (page) {
      case 'Home': 
      return (
        window.location="/" 
    );
      case 'coffees':
    return (
        window.location="/coffees"
    );
      default:
    console.log(`Page not Found`);
      return(
        window.location="/error"
    );
    }
}
  return (
    <div className= "choices">
    <div className="btn-group-vertical btn-group-md" role="group" aria-label="Vertical radio toggle button group">
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio1" autoComplete="off" checked={toggleMenu("")} onChange={e => {}} />
      <label className="btn btn-outline-success btn-xl btn-xl" onClick={() => navigateContext("Home")} htmlFor="vbtn-radio1">Home</label>
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio2" autoComplete="off" checked={toggleMenu("coffees")} onChange={e => {}} /> 
      <label className="btn btn-outline-success btn-xl btn-xl" onClick={() => navigateContext("coffees")} htmlFor="vbtn-radio2">Cafe</label>
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio3" autoComplete="off" />
      <label className="btn btn-outline-success btn-xl btn-xl" onClick={() => navigateContext("shop")} htmlFor="vbtn-radio3">Shop</label>
      <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio4" autoComplete="off" />
      <label className="btn btn-outline-success btn-xl btn-xl" onClick={() => navigateContext("help")} htmlFor="vbtn-radio4">Help</label> 
      { jwtToken === "" 
      ? <Fragment>  
        </Fragment>
      : <Fragment> 
        <input type="radio" className="btn-check" name="vbtn-radio" id="vbtn-radio4" autoComplete="off" />
        <label className="btn btn-outline-success btn-xl btn-xl" onClick={() => navigateContext("Admin")} htmlFor="vbtn-radio4">Admin</label>
        </Fragment>
      }
    </div>      
  </div>
  );
}

export default Choices;


