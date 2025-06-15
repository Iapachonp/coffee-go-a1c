import { coffees, prices } from  "../data/data-coffees";
import { get_badge } from '../data/data-choices';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { scrollToTop } from "../other/ScrollToTop";
import { arrayJoin } from "../utils/arrays";
import {money}  from "../utils/currency";
import NeoButton from "../components/NeoButton";


function CoffeeCard(props){  
  let coffeecard= props.props;
  return (
  <div className="col">
  <div className="coffees container text-center h-100">
    <div className="card h-100 text-bg-dark" style={{width: "18rem"}}>
      <img src={coffeecard.image} className="card-img-top thumbnail" alt="..."/>
      <div className="card-body">
        <span className="badge bg-primary rounded-pill">nuevo</span>
        <h3 className="card-title">{coffeecard.name}</h3>
        <p className="card-text text-secondary justify-content-between">{coffeecard.description}</p>
      </div>
      <ul className="list-group list-group-flush">
        <li className="list-group-item text-light bg-transparent list-group-item-dark">Origen: {coffeecard.origin}</li>
        <li className="list-group-item text-light bg-transparent list-group-item-dark">Proceso: {coffeecard.process}</li>
      </ul>
    <NeoButton onClick={scrollToTop} to={`/coffees/${coffeecard.id}`} className="btn btn-success"  >
      Comprar {money(prices[coffeecard.priceid].prices[0].price) }
    </NeoButton>
    </div>
  </div>
  </div>
    );
};

export default function Coffees () {
  let coffeeCards = Object.keys(coffees).map((i) =>     
    <CoffeeCard props={coffees[i]} key={i} />  
  );
  return(
    <div className="container content">
      <h2 className="text-white bs-light bs-light-text-emphasis"> Cafes 
      <span className="badge bg-secondary">{get_badge("Coffees")}</span></h2>
      <div className="row row-cols-auto coffee-row">
        {coffeeCards}
      </div>
    </div>
  );
};
