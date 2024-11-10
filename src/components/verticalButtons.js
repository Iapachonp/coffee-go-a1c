import React, { useState } from 'react';
import '../App.css';
import AddVarietalForm  from './VarietalForm';
import AddCoffeeForm from './CoffeeForm';
import CoffeeList from './CoffeeList';
import VarietalList from './VarietalsList';

import { useContext, Fragment } from 'react';
import { AppContext } from '../context/app-context';

function VerticalButtonFormSelector (props) {
  
  const [formSelector , setFormSelector] = useState({current: "welcome"})
  const [form , setForm] = useState("List Coffees")
  
  const Choice = ({name, onclick}) => (
    <button  style={{ width: '100%' }} onClick={() => setForm(name)} className='btn btn-warning btn-lg my-1'> {name} </button> 
  );
  
  function handleFormSelector(form){ 
    
    const UndefiniedComponent = () => (
      <div className="">
            <div className="offset-md-1">
                <h1 className="mt-3 text-white bs-light bs-light-text-emphasis">Oops!</h1>
                <p className="text-white bs-light bs-light-text-emphasis">Sorry, We are still working on this feature.</p>
            </div>
        </div>
    );
    const myComponents = {
      "List Coffees" : <CoffeeList/>,
      "New Coffee": <AddCoffeeForm />,
      "List Varietals" : <VarietalList/>,
      "New Varietal": <AddVarietalForm/>,
    }
    console.log(myComponents[form])
    if (!myComponents[form]) { return (<UndefiniedComponent />) } 
    else {
      return (
        myComponents[form]
      )
    }
    };

  return (
    <div className='row'>
    <div className="col-md-3">
      <div className='btn-group-vertical' style={{ width: '200px' }} role="group"> 
        {props.CHOICES.map(choice => ( 
          <Choice name = {choice.name} /> 
        ))}
      </div>
    </div>
    <div className="col-md-8">
        {handleFormSelector(form)}
    </div>
    </div>
    );
}

export default VerticalButtonFormSelector;

