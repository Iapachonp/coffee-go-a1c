import React, { Component, useState, useEffect } from "react";
import Barchart from "../components/Barchart";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { coffees, prices, fetchCoffee } from  "../data/data-coffees";
import { Popover } from 'react-tiny-popover';
import { useParams } from 'react-router-dom';
import {money}  from "../utils/currency";
import { useCart } from '../context/cart-context';
import NeoButton from "../components/NeoButton";
import NeoBadge from "../components/NeoBadge";

export default function Coffee (){
  const [grams, setGrams] = useState('')
  const [priceid, setPriceid] = useState(0)
  const [indexid, setIndexid] = useState(0)
  const [coffee, setCoffee] = useState(null);
  const [price, setPrice] = useState(0)

  
  const { addToCart } = useCart();
  let { id } = useParams();
  
 var handleAddToCart= (coffee) => { 
    console.log(document.getElementById("selectGrams").value)
    const gr = document.getElementById("selectGrams").value 
    console.log(document.getElementById("selectedPrice").title)
    const price = Number(document.getElementById("selectedPrice").title) 
    coffee.price = price
    coffee.grams = gr
    console.log("heyyyy jude")
    coffee.cartid = coffee.id + "-" + priceid + "-" + indexid 
    console.log(coffee)
    addToCart(coffee)
    window.location.reload();
  };

  const getCoffee = async () => {
    try {
      const response = await fetchCoffee(id) ;
      setCoffee(response[0]);
      setPriceid(response[0].priceid);
      console.log("price id:", priceid);
      console.log("cofeeee first", coffee);
    } catch (error) {
      console.error('Error fetching coffee:', error);
    }
  };
  
  const onChangeWeight = (e) => {
    const index = e.target.selectedIndex;
    console.log("index id:", index);
    console.log("price id:", priceid);
    const newIndex = index;
    setIndexid(newIndex);
    const newGrams = prices[priceid].prices[index].grams;
    setGrams(newGrams);
    const newPrice = prices[priceid].prices[index].price;
    setPrice(newPrice);
    console.log("grams:", newGrams);
    console.log("price:", newPrice);
    console.log(prices[priceid]);
};
  
  useEffect(() => {
    getCoffee();
  }, [id, priceid]);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return(
    <div>
    { coffee ? (
    <div className="coffee container content neo-coffee-section">
    <h2 className="neo-coffee-title">
      {coffee.name + " "}
      <NeoBadge text={coffee.sca + " sca"} />
    </h2> 
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-3">
             <img src={coffee.image} className="img-fluid rounded neo-coffee-img" alt="Coffee" /> 
          </div>
           <div className="col-5">
              <h4 className="neo-coffee-subtitle">Description</h4>
              <p className="neo-coffee-description">{coffee.description}</p>
          <div className="col-6"> 
      <div
          className="coffee-card"
          style={{
            backgroundColor: '#12121b',
            color: '#ffffff',
            borderRadius: '12px',
            padding: '16px',
            boxShadow: '0 0 10px rgba(0,255,204,0.05)',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <b>Origen:</b> {coffee.origin}
            </li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <b>Proceso:</b> {coffee.process}
            </li>
            <li style={{ padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
              <label htmlFor="selectGrams"><b>Presentación:</b></label><br />
              <select
                id="selectGrams"
                onChange={onChangeWeight}
                style={{
                  backgroundColor: '#1e1e2a',
                  color: '#ffffff',
                  border: '1px solid #333',
                  borderRadius: '6px',
                  padding: '8px',
                  width: '100%',
                  marginTop: '6px'
                }}
              >
                {prices[coffee.priceid].prices.map((price, index) => (
                  <option key={index}>{price.grams} gr</option>
                ))}
              </select>
            </li>
            <li style={{ padding: '10px 0' }}>
              <label htmlFor="selectedPrice"><b>Precio:</b></label><br />
              <p
                id="selectedPrice"
                title={prices[coffee.priceid].prices[indexid].price}
                style={{
                  marginTop: '6px',
                  color: '#00ffc3',
                  fontWeight: '500',
                  fontSize: '16px'
                }}
              >
                {money(prices[coffee.priceid].prices[indexid].price)}
              </p>
            </li>
          </ul>
        </div>
          </div>
          <Popover
            isOpen={isPopoverOpen}
            positions={[ 'bottom']} // preferred positions by priority
            content={
                <div className="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>Holy coffee lover!</strong> Estamos creando y terminando nuestra web app te invitamos a      
                <a href="/contacto" data-rr-ui-event-key="/shop" className="alert-link"> realizar tu pedido aqui!!!</a>
                </div>
            }
          >
          <NeoButton onClick={() => handleAddToCart(coffee) && setIsPopoverOpen(!isPopoverOpen)} className="btn btn-success cart-button" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Agregar al Carrito </NeoButton>
          </Popover>
          </div>
        </div>
        <div className="coffee-stats"> 
        <Barchart/> 
        </div>
      </div>
    </div>
    ):(
      <div className="coffee container content">
      <p>Loading coffee data...</p>
      </div>
    )}
   </div>
   )
} 

