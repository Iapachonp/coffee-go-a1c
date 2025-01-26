import React, { useState } from 'react';
import { Button, Form, InputGroup } from "react-bootstrap";
import {postProcess} from "../utils/psqlHandlers"
import PopUp from './PopUp';

function AddProcessForm (props) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [timeduration, setTimeDuration] = useState("");
  const [processCreated, setProcessCreated] = useState("not set");
  const [modalShow, setModalShow] = useState(false);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    
    const newProcess = {
        "Name": name,
        "Description": description,
        "TimeDuration": timeduration,
    };
    
    let response = postProcess(newProcess);
    
    setProcessCreated(name)
    response.then((res) => {
      console.log(res);
      if (res.ok) {
        console.log("we got till here");
        setModalShow(true);}
      else {setModalShow(false)};
    });

    setName("");
    setDescription("");
    setTimeDuration("");
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
        <InputGroup.Text id="timeduration">Time Duration:</InputGroup.Text>
        <input
          type="text"
          className="form-control"
          placeholder="TimeDuration"
          aria-label="TimeDuration"
          aria-describedby="timeduration"
          maxLength="50"
          value={timeduration}
          onChange={(event) => setTimeDuration(event.target.value)}
        />
      </InputGroup>
      <Button variant="primary" type="submit">
        Add Process
      </Button>
    </Form>
    <PopUp show={modalShow} msg={`Process ${processCreated} was successfully created`} onHide={() => window.location.reload()}/>
    </div>
  );
};

export default AddProcessForm;

