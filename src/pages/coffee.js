import React, { Component, useState, useEffect } from "react";
import Chart from "react-apexcharts";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { coffees, prices, fetchCoffee } from  "../data/data-coffees";
import { Popover } from 'react-tiny-popover';
import { useParams } from 'react-router-dom';
import {money}  from "../utils/currency";
import { useCart } from '../context/cart-context';


class Barchart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["Body", "Sweetness", "Acidity", "Bitterness"]
        }
      },
      series: [
        {
          name: "coffee",
          data: [49, 60, 70, 91]
        }
      ]
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="bar"
              width="800"
            />
          </div>
        </div>
      </div>
    );
  }
}


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
    coffee.grams = grams
};
  
  useEffect(() => {
    getCoffee();
  }, [id, priceid]);

  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return(
    <div>
    { coffee ? (
    <div className="coffee container content"> 
    <h2 className="text-white bs-light bs-light-text-emphasis" >  {coffee.name  + " "} 
    <span className="badge bg-primary rounded-pill">{coffee.sca + " sca"}</span> </h2> 
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-3">
            <img src={coffee.image} className="img-fluid rounded" alt="..."/> 
          </div>
          <div className="col-5"> 
            <h4 className="text-white"> Description </h4>
            <p className="text-white"> {coffee.description}  </p>
          <div className="col-6"> 
          <div className="card" >
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <b>Origen: </b> {coffee.origin}</li>
              <li className="list-group-item list-group-item-secondary"> <b>Proceso: </b> {coffee.process}</li>
              <li className="list-group-item">
                <label htmlFor="inputState"> <b> Presentacion: </b> </label>
                  <select id="selectGrams" onChange={onChangeWeight} className="form-control bg-secondary-subtle">
                    { prices[coffee.priceid].prices.map(price => 
                      <option>{price.grams} gr</option>
                  )}
                  </select>
              </li>
              <li className="list-group-item list-group-item-secondary">
                <label htmlFor="inputState"> <b> Precio: </b> </label>
                <p id="selectedPrice" onChange={(e) => {setPrice(e.target.value())}} title={prices[coffee.priceid].prices[indexid].price} > {money(prices[coffee.priceid].prices[indexid].price) } </p>
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
          <Link onClick={() => handleAddToCart(coffee) && setIsPopoverOpen(!isPopoverOpen)} className="btn btn-success cart-button" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Agregar al Carrito </Link>
          </Popover>
          </div>
        </div>
        <div className="coffee-stats"> 
        <h3 className="text-white"> Stats </h3>
        <Barchart/> 
        </div>
      </div>
    </div>
    ):(
      <div className="coffee container content">
      <p>Loading coffee data...</p>
      </div>
    )};
   </div>
   )


} 

