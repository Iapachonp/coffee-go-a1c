import React, { Component, useState } from "react";
import Chart from "react-apexcharts";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { coffees } from  "../data/data-coffees";
import { Popover } from 'react-tiny-popover';

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


function getCoffeeId(coffees, preid){

  for (let i = 0; i < coffees.length; i++) {
    console.log(coffees[i]["id"])
    if (coffees[i]["id"] === parseInt(preid)) {
      console.log(coffees[i]["id"])
      return i
      }
    };
  return 0
}


export default function Coffee (){
  const location = useLocation().pathname
  let preid = location.substring(9) 
  console.log("hey preid " + preid)
  let id = getCoffeeId(coffees, preid)
  console.log("hey id " + id)
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  return(
   <div className="coffee container content"> 
    <h2 className="text-white bs-light bs-light-text-emphasis" >  {coffees[id].name + " "} 
    <span className="badge bg-primary rounded-pill">{coffees[id].sca + " sca"}</span> </h2> 
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-3">
            <img src={coffees[id].image} className="img-fluid rounded" alt="..."/> 
          </div>
          <div className="col-5"> 
            <h4 className="text-white"> Description </h4>
            <p className="text-white"> {coffees[id].description}  </p>
          <div className="col-6"> 
          <div className="card" >
            <ul className="list-group list-group-flush">
              <li className="list-group-item"> <b>Origen: </b> {coffees[id].origin}</li>
              <li className="list-group-item list-group-item-secondary"> <b>Proceso: </b> {coffees[id].process}</li>
              <li className="list-group-item">
                <label htmlFor="inputState"> <b> Presentacion: </b> </label>
                  <select id="inputState" className="form-control bg-secondary-subtle">
                  <option  defaultValue={coffees[id].weight}>{coffees[id].weight} gr </option>
                  <option>{coffees[id].weight *2} gr</option>
                  <option>{coffees[id].weight * 4} kg</option>
                  </select>
              </li>
              <li className="list-group-item list-group-item-secondary"><b>Precio:</b> ${coffees[id].price} </li>
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
          <Link onClick={() => setIsPopoverOpen(!isPopoverOpen)} className="btn btn-success cart-button" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Agregar al Carrito </Link>
          </Popover>
          </div>
        </div>
        <div className="coffee-stats"> 
        <h3 className="text-white"> Stats </h3>
        <Barchart/> 
        </div>
      </div>        
   </div>

  )


} 

