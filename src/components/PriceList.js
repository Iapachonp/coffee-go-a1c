import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { prices } from '../data/data-coffees'; // Ensure you have the correct path to your data
import delIcon from '../assets/img/img/del-icon.png';
import editIcon from '../assets/img/img/edit-icon.png';

const PriceList = () => {
  return (
    <Container className="mt-4">
      <h4 className="mb-3">Coffee List</h4>
      <Row xs={1} md={2} lg={4} className="g-3">
        {prices.map((price) => (
          <Col key={price.priceid}>
            <Card className="h-100 d-flex flex-column p-2" style={{ fontSize: '0.9rem' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '1rem' }}>{price.priceid}</Card.Title>
                <Card.Text className="flex-grow-1">
                {price.prices.map((innerprice) => (
                  <div>
                  <strong>Grams:</strong> {innerprice.grams}
                  <div> </div>
                  <strong>Price:</strong> {innerprice.price}<br />
                  </div>
                ))}
                </Card.Text>
              <div>
                <a href="#"> <img src={delIcon} alt="" style={{ width:"32px", height:"32px" }} /> </a>      
                <div style={{ width:"70px", height:"auto", display:"inline-block"}} > 
                </div>
                <a href="#" style={{}}> <img src={editIcon} alt="" style={{ width:"32px", height:"32px"}} /> </a>
              </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PriceList;


