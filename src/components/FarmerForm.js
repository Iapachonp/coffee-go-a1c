import React, { useState } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";
import NeoButtonBase from './NeoButtonBase';
import { postFarmer} from "../utils/psqlHandlers"
import PopUp from './PopUp';

function AddfarmerForm (props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [altitude, setAltitude] = useState("");
  const [farmerCreated, setfarmerCreated] = useState("not set");
  const [modalShow, setModalShow] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newfarmer = {
        "Name": name,
        "Description": description,
        "Altitude": altitude
    };
    
    let response = postFarmer(newfarmer);
    
    setfarmerCreated(name)
    response.then((res) => {
      console.log(res);
      if (res.ok) {
        console.log("we got till here");
        setModalShow(true);}
      else {setModalShow(false)};
    });

    setName("");
    setDescription("");
    setAltitude("");
  };

  return (
    <div>
    <Form onSubmit={handleSubmit}>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="name">Name:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          aria-label="Name"
          aria-describedby="name"
          maxLength="50"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="description">Description:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Description"
          aria-label="Description"
          aria-describedby="description"
          maxLength="255"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="optimalAltitude">Altitude:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Optimal Altitude"
          aria-label="Optimal Altitude"
          aria-describedby="optimalAltitude"
          maxLength="50"
          value={altitude}
          onChange={(event) => setAltitude(event.target.value)}
        />
      </InputGroup>
      <NeoButtonBase variant="primary" type="submit">
        Add farmer
      </NeoButtonBase>
    </Form>
    <PopUp show={modalShow} msg={`farmer ${farmerCreated} was successfully created`} onHide={() => window.location.reload()}/>
    </div>
  );
};

export default AddfarmerForm;

