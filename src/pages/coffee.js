import React, { useState, useEffect } from "react";
import Barchart from "../components/Barchart";
import { useParams } from 'react-router-dom';
import { coffees, prices, fetchCoffee } from "../data/data-coffees";
import { money } from "../utils/currency";
import { useCart } from '../context/cart-context';
import NeoButton from "../components/NeoButton";
import NeoBadge from "../components/NeoBadge";
import { Popover } from 'react-tiny-popover';

export default function Coffee() {
  const [grams, setGrams] = useState('');
  const [priceid, setPriceid] = useState(0);
  const [indexid, setIndexid] = useState(0);
  const [coffee, setCoffee] = useState(null);
  const [price, setPrice] = useState(0);
  const { addToCart } = useCart();
  const { id } = useParams();
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleAddToCart = (coffee) => {
    const gr = document.getElementById("selectGrams").value;
    const price = Number(document.getElementById("selectedPrice").title);
    coffee.price = price;
    coffee.grams = gr;
    coffee.cartid = coffee.id + "-" + priceid + "-" + indexid;
    addToCart(coffee);
    window.location.reload();
  };

  const getCoffee = async () => {
    try {
      const response = await fetchCoffee(id);
      setCoffee(response[0]);
      setPriceid(response[0].priceid);
    } catch (error) {
      console.error('Error fetching coffee:', error);
    }
  };

  const onChangeWeight = (e) => {
    const index = e.target.selectedIndex;
    setIndexid(index);
    const newGrams = prices[priceid].prices[index].grams;
    setGrams(newGrams);
    const newPrice = prices[priceid].prices[index].price;
    setPrice(newPrice);
  };

  useEffect(() => {
    getCoffee();
  }, [id]);

  return (
    <div>
      {coffee ? (
        <div className="coffee container content neo-coffee-section">
          <h2 className="neo-coffee-title">
            {coffee.name + " "}
            <NeoBadge text={coffee.sca + " sca"} />
          </h2>

          {/* Bootstrap Grid Layout */}
          <div className="container">
            <div className="row">
              {/* First Column: Description */}
              <div className="col-md-5">
                <h4 className="neo-coffee-subtitle">Description</h4>
                <p className="neo-coffee-description">{coffee.description}</p>

                <div
                  className="coffee-card"
                  style={{
                    backgroundColor: '#12121b',
                    color: '#ffffff',
                    borderRadius: '12px',
                    padding: '16px',
                    boxShadow: '0 0 10px rgba(0,255,204,0.05)',
                  }}>
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
                        }}>
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
                        }}>
                        {money(prices[coffee.priceid].prices[indexid].price)}
                      </p>
                    </li>
                  </ul>
                </div>

                <Popover
                  isOpen={isPopoverOpen}
                  positions={['bottom']}
                  content={
                    <div className="alert alert-warning alert-dismissible fade show" role="alert">
                      <strong>Holy coffee lover!</strong> Estamos creando y terminando nuestra web app. Te invitamos a
                      <a href="/contacto" className="alert-link"> realizar tu pedido aquí!</a>
                    </div>
                  }>
                  <NeoButton onClick={() => handleAddToCart(coffee) && setIsPopoverOpen(!isPopoverOpen)} className="btn btn-success cart-button">
                    Agregar al Carrito
                  </NeoButton>
                </Popover>
              </div>

              {/* Second Column: Coffee Image */}
              <div className="col-md-5 neo-coffee-img-wrapper">
                <img src={coffee.image} className="neo-coffee-img img-fluid rounded" alt="Coffee" />
              </div>

              {/* Third Column: Optional Chart or Details */}
              <div className="row">
                <div className="col">
                  <div className="coffee-stats">
                    <Barchart />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="coffee container content">
          <p>Loading coffee data...</p>
        </div>
      )}
    </div>
  );
}

