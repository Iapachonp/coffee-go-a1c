import React, { useState } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";
import postVarietal from "../utils/psqlHandlers"
import PopUp from './PopUp';

function AddVarietalForm (props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [beanSize, setBeanSize] = useState("");
  const [stature, setStature] = useState("");
  const [qualityPotential, setQualityPotential] = useState("");
  const [optimalAltitude, setOptimalAltitude] = useState("");
  const [varietalCreated, setVarietalCreated] = useState("not set");
  const [modalShow, setModalShow] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newVarietal = {
        "Name": name,
        "Description": description,
        "BeanSize": beanSize,
        "Stature": stature,
        "QualityPotential": qualityPotential,
        "OptimalAltitude": optimalAltitude
    };
    
    let response = postVarietal(newVarietal);
    
    setVarietalCreated(name)
    response.then((res) => {
      console.log(res);
      if (res.ok) {
        console.log("we got till here");
        setModalShow(true);}
      else {setModalShow(false)};
    });

    setName("");
    setDescription("");
    setBeanSize("");
    setStature("");
    setQualityPotential("");
    setOptimalAltitude("");
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
        <InputGroup.Text id="beanSize">Bean Size:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Bean Size"
          aria-label="Bean Size"
          aria-describedby="beanSize"
          maxLength="50"
          value={beanSize}
          onChange={(event) => setBeanSize(event.target.value)}
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="stature">Stature:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Stature"
          aria-label="Stature"
          aria-describedby="stature"
          maxLength="50"
          value={stature}
          onChange={(event) => setStature(event.target.value)}
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="qualityPotential">Quality Potential:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Quality Potential"
          aria-label="Quality Potential"
          aria-describedby="qualityPotential"
          maxLength="50"
          value={qualityPotential}
          onChange={(event) => setQualityPotential(event.target.value)}
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="optimalAltitude">Optimal Altitude:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Optimal Altitude"
          aria-label="Optimal Altitude"
          aria-describedby="optimalAltitude"
          maxLength="50"
          value={optimalAltitude}
          onChange={(event) => setOptimalAltitude(event.target.value)}
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        Add Varietal
      </Button>
    </Form>
    <PopUp show={modalShow} msg={`Varietal ${varietalCreated} was successfully created`} onHide={() => window.location.reload()}/>
    </div>
  );
};

export default AddVarietalForm;

