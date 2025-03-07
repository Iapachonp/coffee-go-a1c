import React, { useState } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";
import {postPrice} from "../utils/psqlHandlers"
import PopUp from './PopUp';

function AddPriceForm (props) {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [citytown, setCityTown] = useState("");
  const [originCreated, setPriceCreated] = useState("not set");
  const [modalShow, setModalShow] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newPrice = {
        "Country": country,
        "State": state,
        "CityTown": citytown,
    };
    
    let response = postPrice(newPrice);
    
    setPriceCreated(country)
    response.then((res) => {
      console.log(res);
      if (res.ok) {
        console.log("we got till here");
        setModalShow(true);}
      else {setModalShow(false)};
    });

    setCountry("");
    setState("");
    setCityTown("");
  };

  return (
    <div>
    <Form onSubmit={handleSubmit}>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="country">Country:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Country"
          aria-label="Country"
          aria-describedby="country"
          maxLength="50"
          value={country}
          onChange={(event) => setCountry(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="state">State:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="State"
          aria-label="State"
          aria-describedby="state"
          maxLength="255"
          value={state}
          onChange={(event) => setState(event.target.value)}
        />
      </InputGroup>
      
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="citytown">CityTown:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="CityTown"
          aria-label="CityTown"
          aria-describedby="citytown"
          maxLength="50"
          value={citytown}
          onChange={(event) => setCityTown(event.target.value)}
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        Add Price
      </Button>
    </Form>
    <PopUp show={modalShow} msg={`Price ${originCreated} was successfully created`} onHide={() => window.location.reload()}/>
    </div>
  );
};

export default AddPriceForm;

