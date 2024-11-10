import React, { useState } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";

const AddVarietalForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [beanSize, setBeanSize] = useState("");
  const [stature, setStature] = useState("");
  const [qualityPotential, setQualityPotential] = useState("");
  const [optimalAltitude, setOptimalAltitude] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newVarietal = {
      name,
      description,
      beanSize,
      stature,
      qualityPotential,
      optimalAltitude,
    };
    props.onAddVarietal(newVarietal);
    // Reset form fields
    setName("");
    setDescription("");
    setBeanSize("");
    setStature("");
    setQualityPotential("");
    setOptimalAltitude("");
  };

  return (
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
  );
};

export default AddVarietalForm;

