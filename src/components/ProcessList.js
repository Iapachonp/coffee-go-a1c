import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { processes } from '../data/data-coffees'; // Ensure you have the correct path to your data

const ProcessList = () => {
  return (
    <Container className="mt-4">
      <h4 className="mb-3">Coffee List</h4>
      <Row xs={1} md={2} lg={4} className="g-3">
        {processes.map((process) => (
          <Col key={process.id}>
            <Card className="h-100 d-flex flex-column p-2" style={{ fontSize: '0.9rem' }}>
              <Card.Body className="d-flex flex-column">
                <Card.Title style={{ fontSize: '1rem' }}>{process.name.trim()}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted" style={{ fontSize: '1rem' }}>{process.processId}</Card.Subtitle>
                <Card.Text className="flex-grow-1">
                  <strong>description:</strong> {process.description.trim()}<br />
                  <strong>Time Duration:</strong> {process.timeduration.trim()}<br />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProcessList;


