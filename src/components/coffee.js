import React, { Component } from "react";
import Chart from "react-apexcharts";
import { Link, useNavigate, useLocation, Navigate } from "react-router-dom";
import { coffees } from  "../data/data-coffees";

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
  const location = useLocation().pathname
  let id = location.substring(9)
  return(
   <div className="container"> 
    <h2 className="text-white bs-light bs-light-text-emphasis" >  {coffees["id"+id].name}
    <span className="badge bg-primary rounded-pill">8.5 sca</span> </h2> 
      <div className="container">
        <div className="row justify-content-start">
          <div className="col-3">
            <img src="https://antesuncafe.com/static/media/project-img1.42b4985dc6e22b4b5394.png" className="img-fluid rounded" alt="..."/> 
          </div>
          <div className="col-5"> 
            <h4 className="text-white"> Description </h4>
            <p className="text-white"> {coffees["id"+id].description}  </p>
          <div className="col-6"> 
          <div className="card" >
            <div className="card-header">
              Featured
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">An item</li>
              <li className="list-group-item">A second item</li>
              <li className="list-group-item">A third item</li>
            </ul>
          </div> 
          </div>
            <Link to={`/cart/`} className="btn btn-success">Agregar al Carrito</Link>
          </div>
        </div>
        <h4 className="text-white"> Stats </h4>
        <Barchart/> 
      </div>        
   </div>

  )


} 

