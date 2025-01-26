import React, { useState } from 'react';
import { Button, InputGroup } from "react-bootstrap";
import {farmers, varietals, origins, processes } from  "../data/data-coffees";
import Dropdown from './Dropdown';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function getObjectFromArray(array, key, value) {
  const obj = array.find(item => item[key] == value);
  return obj ? obj : array[0];
}

const AddCoffeeForm = (props) => {
  const [name, setName] = useState("");
  const [varietalId, setVarietalId] = useState("");
  const [farmerId, setFarmerId] = useState("");
  const [originId, setOriginId] = useState(5);
  const [fullOrigin, setFullOrigin] = useState("Choose an origin");
  const [processId, setProcessId] = useState("");
  const [sca, setSca] = useState("");
  const [acidity, setAcidity] = useState("");
  const [body, setBody] = useState("");
  const [balance, setBalance] = useState("");
  const [clarity, setClarity] = useState("");
  const [sweetness, setSweetness] = useState("");
  const [priceId, setPriceId] = useState("");
  const [image, setImage] = useState("");

  async function handleOrigin(state) {
    await setOriginId(state);
    await setFullOrigin( getObjectFromArray(origins, "originid", state)["country"] + " " + getObjectFromArray(origins, "originid", state)["state"]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCoffee = {
      name,
      varietalId,
      farmerId,
      originId,
      processId,
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
    setProcessId("");
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
      <FloatingLabel controlId="floatingSelect" label="farmer"className="vertical mb-2" >
      <Form.Select size="md" value={farmerId} name="farmer" onChange={(event) => setFarmerId(event.target.value)} >
        <option disabled value="">Select a farmer...</option>
        <Dropdown data={farmers} keyId={"farmerid"} keyName={"name"}/>
      </Form.Select> 
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label={"Origin: " + fullOrigin } className="vertical mb-2" >
      <Form.Select size="md" value={originId} name="origin {originId}" onChange={(event) => handleOrigin(event.target.value) } >
        <option disabled value="">Select a origin...</option>
        <Dropdown data={origins} keyId={"originid"} keyName={"citytown"}/>
      </Form.Select> 
      </FloatingLabel>
      <FloatingLabel controlId="floatingSelect" label="Process"className="vertical mb-2" >
      <Form.Select size="md" value={processId} name="process" onChange={(event) => setProcessId(event.target.value)} >
        <option disabled value="">Select a Process...</option>
        <Dropdown data={processes} keyId={"processid"} keyName={"name"}/>
      </Form.Select> 
      </FloatingLabel>
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

      // This is a place holder to check the value we are getting from the dropdown!!!
      //
      // <InputGroup className="vertical mb-2">
      //   <InputGroup.Text id="varietalId">Varietal ID:</InputGroup.Text>
      //   <input
      //     type="number"
      //     className="form-control"
      //     placeholder="Varietal ID"
      //     aria-label="Varietal ID"
      //     aria-describedby="varietalId"
      //     value={varietalId}
      //     onChange={(event) => setVarietalId(event.target.value)}
      //     required
      //   />
      // </InputGroup>
      // This is a place holder to check the value we are getting from the dropdown!!!
