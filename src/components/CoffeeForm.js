import React, { useState } from 'react';
import { Button, InputGroup } from "react-bootstrap";
import {farmers, varietals, origins, processes } from  "../data/data-coffees";
import {postCoffee} from "../utils/psqlHandlers"
import PopUp from './PopUp';
import Dropdown from './Dropdown';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function getObjectFromArray(array, key, value) {
  const obj = array.find(item => item[key] == value);
  return obj ? obj : array[0];
}

const AddCoffeeForm = (props) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [varietalId, setVarietalId] = useState(0);
  const [farmerId, setFarmerId] = useState(1);
  const [originId, setOriginId] = useState(5);
  const [fullOrigin, setFullOrigin] = useState("Choose an origin");
  const [processId, setProcessId] = useState(1);
  const [sca, setSca] = useState(0.00);
  const [acidity, setAcidity] = useState("");
  const [body, setBody] = useState("");
  const [balance, setBalance] = useState("");
  const [clarity, setClarity] = useState("");
  const [sweetness, setSweetness] = useState("");
  const [priceId, setPriceId] = useState(1);
  const [image, setImage] = useState("");
  const [coffeeCreated, setCoffeeCreated] = useState("not set");
  const [modalShow, setModalShow] = useState(false);

  async function handleOrigin(state) {
    await setOriginId(state);
    await setFullOrigin( getObjectFromArray(origins, "originid", state)["country"] + " " + getObjectFromArray(origins, "originid", state)["state"]);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(sca)
    const newCoffee = {
    "name" : name , 
    "description": description, 
    "varietalId": varietalId, 
    "farmerId": farmerId, 
    "originId": originId,
    "processId": processId,
    "sca": sca,
    "acidity": acidity,
    "body": body,
    "balance": balance,
    "clarity": clarity,
    "sweetness": sweetness,
    "priceId": priceId,
    "image": image

    }
    
    let response = postCoffee(newCoffee);
    
    setCoffeeCreated(name)
    response.then((res) => {
      console.log(res);
      if (res.ok) {
        console.log("we got till here");
        setModalShow(true);}
      else {setModalShow(false)};
    });

    // Reset form fields
    setName("");
    setDescription("");
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
    <div>
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
        Add Varietal
      </Button>
    </Form>
    <PopUp show={modalShow} msg={`coffee ${coffeeCreated} was successfully created`} onHide={() => window.location.reload()}/>
    </div>

  );
};

export default AddCoffeeForm;
