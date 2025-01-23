import React, { useState } from 'react';
import { Button, InputGroup } from "react-bootstrap";
import {farmers, varietals, origins } from  "../data/data-coffees";
import Dropdown from './Dropdown';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const AddCoffeeForm = (props) => {
  const [name, setName] = useState("");
  const [varietalId, setVarietalId] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [originId, setOriginId] = useState("");
  const [proccessId, setProccessId] = useState("");
  const [sca, setSca] = useState("");
  const [acidity, setAcidity] = useState("");
  const [body, setBody] = useState("");
  const [balance, setBalance] = useState("");
  const [clarity, setClarity] = useState("");
  const [sweetness, setSweetness] = useState("");
  const [priceId, setPriceId] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCoffee = {
      name,
      varietalId,
      farmerId,
      originId,
      proccessId,
      sca,
      acidity,
      body,
      balance,
      clarity,
      sweetness,
      priceId,
      image,
    };
    props.onAddCoffee(newCoffee);
    // Reset form fields
    setName("");
    setVarietalId("");
    setFarmerId("");
    setOriginId("");
    setProccessId("");
    setSca("");
    setAcidity("");
    setBody("");
    setBalance("");
    setClarity("");
    setSweetness("");
    setPriceId("");
    setImage("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h4 className="mb-3">New Coffee</h4>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="name">Name:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          aria-label="Name"
          aria-describedby="name"
          maxLength="255"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </InputGroup>
      <FloatingLabel controlId="floatingSelect" label="Varietal"className="vertical mb-2" >
      <Form.Select size="md" value={varietalId} name="varietal" onChange={(event) => setVarietalId(event.target.value)} >
        <option disabled value="">Select a Varietal...</option>
        <Dropdown data={varietals} keyId={"varietalId"} keyName={"name"}/>
      </Form.Select> 
      </FloatingLabel>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="varietalId">Varietal ID:</InputGroup.Text>
        <input
          type="number"
          className="form-control"
          placeholder="Varietal ID"
          aria-label="Varietal ID"
          aria-describedby="varietalId"
          value={varietalId}
          onChange={(event) => setVarietalId(event.target.value)}
          required
        />
      </InputGroup>
      <FloatingLabel controlId="floatingSelect" label="farmer"className="vertical mb-2" >
      <Form.Select size="md" value={farmerId} name="farmer" onChange={(event) => setFarmerId(event.target.value)} >
        <option disabled value="">Select a farmer...</option>
        <Dropdown data={farmers} keyId={"farmerid"} keyName={"name"}/>
      </Form.Select> 
      </FloatingLabel>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="farmerId">Farmer ID:</InputGroup.Text>
        <input
          type="number"
          className="form-control"
          placeholder="Farmer ID"
          aria-label="Farmer ID"
          aria-describedby="farmerId"
          value={farmerId}
          onChange={(event) => setFarmerId(event.target.value)}
          required
        />
      </InputGroup>
      <FloatingLabel controlId="floatingSelect" label="origin"className="vertical mb-2" >
      <Form.Select size="md" value={originId} name="origin" onChange={(event) => setOriginId(event.target.value)} >
        <option disabled value="">Select a origin...</option>
        <Dropdown data={origins} keyId={"originid"} keyName={"country"}/>
      </Form.Select> 
      </FloatingLabel>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="originId">Origin ID:</InputGroup.Text>
        <input
          type="number"
          className="form-control"
          placeholder="Origin ID"
          aria-label="Origin ID"
          aria-describedby="originId"
          value={originId}
          onChange={(event) => setOriginId(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="proccessId">Process ID:</InputGroup.Text>
        <input
          type="number"
          className="form-control"
          placeholder="Process ID"
          aria-label="Process ID"
          aria-describedby="proccessId"
          value={proccessId}
          onChange={(event) => setProccessId(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="sca">SCA:</InputGroup.Text>
        <input
          type="number"
          step="0.1"
          className="form-control"
          placeholder="SCA Score (e.g., 85.0)"
          aria-label="SCA"
          aria-describedby="sca"
          value={sca}
          onChange={(event) => setSca(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="acidity">Acidity:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Acidity"
          aria-label="Acidity"
          aria-describedby="acidity"
          maxLength="255"
          value={acidity}
          onChange={(event) => setAcidity(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="body">Body:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Body"
          aria-label="Body"
          aria-describedby="body"
          maxLength="255"
          value={body}
          onChange={(event) => setBody(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="balance">Balance:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Balance"
          aria-label="Balance"
          aria-describedby="balance"
          maxLength="255"
          value={balance}
          onChange={(event) => setBalance(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="clarity">Clarity:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Clarity"
          aria-label="Clarity"
          aria-describedby="clarity"
          maxLength="255"
          value={clarity}
          onChange={(event) => setClarity(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="sweetness">Sweetness:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Sweetness"
          aria-label="Sweetness"
          aria-describedby="sweetness"
          maxLength="255"
          value={sweetness}
          onChange={(event) => setSweetness(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="priceId">Price ID:</InputGroup.Text>
        <input
          type="number"
          className="form-control"
          placeholder="Price ID"
          aria-label="Price ID"
          aria-describedby="priceId"
          value={priceId}
          onChange={(event) => setPriceId(event.target.value)}
          required
        />
      </InputGroup>
      <InputGroup className="vertical mb-2">
        <InputGroup.Text id="image">Image URL:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="Image URL"
          aria-label="Image"
          aria-describedby="image"
          maxLength="255"
          value={image}
          onChange={(event) => setImage(event.target.value)}
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        Add Coffee
      </Button>
    </Form>
  );
};

export default AddCoffeeForm;

