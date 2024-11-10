import '../App.css';
import { useContext, useState } from 'react';
import { AppContext } from '../context/app-context';
import Home from './home';
import Coffees from '../pages/coffees';
import { Outlet, useLocation } from 'react-router-dom';

function ContentDiv(choice){
  switch (choice) {
  case 'Home': 
      return (
        < Home /> 
    );
  case 'coffees':
    return (
        < Coffees />
    );
  default:
    console.log(`Page not Found`);
    return( 
      <h2> Page not Found </h2>
    ); 
}
};

// { ContentDiv(value.choice) }
function Content(props) {
  const value = useContext(AppContext);
  const choice = window.location.pathname.substring(1);
  return (
      <div className="container">  
           <Outlet /> 
    </div>
  );
};

export default Content;



