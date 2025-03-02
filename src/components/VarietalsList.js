import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { varietals } from '../data/data-coffees'; // Ensure you have the correct path to your data
import delIcon from '../assets/img/img/del-icon.png';
import editIcon from '../assets/img/img/edit-icon.png';

const VarietalList = () => {
  return (
    <Container className="mt-4">
      <h4 className="mb-3">Coffee List</h4>
      <Row xs={1} md={2} lg={4} className="g-3">
        {varietals.map((varietal) => (
          <Col key={varietal.id}>
            <Card className="h-100 d-flex flex-column p-2" style={{ fontSize: '0.9rem' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '1rem' }}>{varietal.name.trim()}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1rem' }}>{varietal.varietalId}</Card.Subtitle>
                <Card.Text className="flex-grow-1">
                  <strong>Bean Size:</strong> {varietal.beanSize.trim()}<br />
                  <strong>Description:</strong> {varietal.description.trim()}<br />
                  <strong>Stature:</strong> {varietal.stature.trim()}<br />
                  <strong>Quality Potential:</strong> {varietal.qualityPotential.trim()}<br />
                  <strong>Optimal Altitude:</strong> {varietal.optimalAltitude}<br />
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

export default VarietalList;


