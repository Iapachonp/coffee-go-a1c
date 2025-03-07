import React, { useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { coffees } from '../data/data-coffees'; // Ensure you have the correct path to your data
import delIcon from '../assets/img/img/del-icon.png';
import editIcon from '../assets/img/img/edit-icon.png';
import PopUp from './PopUp';
import {deleteCoffee} from "../utils/psqlHandlers";

const CoffeeList = () => {
  const [coffeeId, setCoffeeId] = useState(null);
  const [coffeeName, setCoffeeName] = useState(null);
  const [coffeeCreated, setCoffeeCreated] = useState("not set");
  const [modalShow, setModalShow] = useState(false);
  const [modalDelShow, setModalDelShow] = useState(false);

  
  const deleteC = () => {
    let response = deleteCoffee(coffeeId);
    // setCoffeeCreated(name)
    response.then((res) => {
      console.log(res);
      if (res.ok) {
        setModalDelShow(true);}
      else {setModalDelShow(false)};
    }); 
  }


  const handleDelete = (coffee) => {
    // event.preventDefault();
    console.log(coffee)
    setCoffeeName(coffee.name) 
    setCoffeeId(coffee.id)
    if (modalShow) {
      setModalShow(false);}
    else {
      setModalShow(true);
    }
  }


  const handleToggle = () => {
    // event.preventDefault();
    if (modalShow) {
      setModalShow(false);}
    else {
      setModalShow(true);
    }
  }



  return (
    <Container className="mt-4">
      <h4 className="mb-3">Coffee List</h4>
      <Row xs={1} md={2} lg={4} className="g-3">
        {coffees.map((coffee) => (
          <Col key={coffee.id}>
            <Card className="h-100 d-flex flex-column p-2" style={{ fontSize: '0.9rem' }}>
              <Card.Img
                variant="top"
                src={coffee.image.trim()}
                alt={coffee.name.trim()}
                style={{ height: '150px', objectFit: 'cover' }} // Adjust image size
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '1rem' }}>{coffee.name.trim()}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '0.85rem' }}>
                  {coffee.origin.trim()}
                </Card.Subtitle>
                <Card.Text className="flex-grow-1">
                  <strong>Process:</strong> {coffee.process.trim()}<br />
                  <strong>Description:</strong> {coffee.description.trim()}<br />
                  <strong>SCA:</strong> {coffee.sca}<br />
                  <strong>Weight:</strong> {coffee.weight}g<br />
                  <strong>Price:</strong> ${coffee.price}
                </Card.Text>
              <div>
                <button onClick={() => handleDelete(coffee)}> <img src={delIcon} alt="" style={{ width:"32px", height:"32px" }} /> </button>      
                <div style={{ width:"70px", height:"auto", display:"inline-block"}} > 
                </div>
                <a href="#" style={{}}> <img src={editIcon} alt="" style={{ width:"32px", height:"32px"}} /> </a>
              </div>  
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <PopUp show={modalShow} msg={`Do you want to delete Coffeeid ${coffeeId}: ${coffeeName}? `} onClose={() => handleToggle() } onHide={() => deleteC()}/>
      <PopUp show={modalDelShow} msg={`Coffee ${coffeeId}: ${coffeeName} was deleted successfully `} onHide={() => window.location.reload()}/>
    </Container>
  );
};

export default CoffeeList;

