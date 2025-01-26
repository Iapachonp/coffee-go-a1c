import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { coffees } from '../data/data-coffees'; // Ensure you have the correct path to your data

const CoffeeList = () => {
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
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CoffeeList;

